interface FlashcardInput {
  french: string;
  meaning: string;
}

interface ScenarioRequest {
  cards?: FlashcardInput[];
  level?: string;
  topic?: string;
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return json({ error: 'OPENAI_API_KEY is not configured.' }, 500);

  let body: ScenarioRequest;
  try {
    body = (await request.json()) as ScenarioRequest;
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400);
  }

  const cards = (body.cards ?? [])
    .filter((card) => card && typeof card.french === 'string' && typeof card.meaning === 'string')
    .slice(0, 40);
  if (cards.length === 0) return json({ error: 'No flash cards were selected.' }, 400);

  const level = typeof body.level === 'string' ? body.level.slice(0, 10) : 'A1';
  const topic = typeof body.topic === 'string' ? body.topic.slice(0, 100) : 'everyday conversation';
  const cardText = cards.map((card) => `- ${card.french} (${card.meaning})`).join('\n');

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: 0.7,
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: 'You are a French tutor. Return valid JSON only with keys title, situation, openingMessage, nextQuestion, targetPhrases. Create a short interactive role-play at the requested CEFR level. Use the supplied flash-card sentences naturally and include at least three of them in targetPhrases.',
          },
          {
            role: 'user',
            content: `CEFR level: ${level}\nTopic: ${topic}\nUse these learner flash cards:\n${cardText}`,
          },
        ],
      }),
    });

    if (!response.ok) return json({ error: 'The AI provider returned an error.' }, 502);
    const result = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content = result.choices?.[0]?.message?.content;
    if (!content) return json({ error: 'The AI response was empty.' }, 502);
    return json(JSON.parse(content));
  } catch {
    return json({ error: 'Could not generate a scenario.' }, 502);
  }
}
