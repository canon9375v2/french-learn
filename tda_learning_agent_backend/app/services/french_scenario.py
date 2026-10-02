from __future__ import annotations

from typing import Iterable, List


def _clean_cards(cards: Iterable[dict]) -> List[str]:
    cleaned: List[str] = []
    seen = set()
    for card in cards:
        if not isinstance(card, dict):
            continue
        french = str(card.get("french", "")).strip()
        if not french or french in seen:
            continue
        seen.add(french)
        cleaned.append(french)
    return cleaned[:6]


def _title_for_topic(topic: str, level: str) -> str:
    topic_name = (topic or "everyday conversation").strip() or "everyday conversation"
    normalized = topic_name.lower()
    if "interview" in normalized:
        return f"{level} job interview practice"
    if "café" in normalized or "cafe" in normalized or "coffee" in normalized:
        return f"{level} café conversation"
    if "direction" in normalized or "travel" in normalized:
        return f"{level} directions role-play"
    return f"{level} introduction scenario"


def generate_french_scenario(cards: Iterable[dict], level: str = "A1", topic: str = "introducing yourself") -> dict:
    card_list = _clean_cards(cards)
    if not card_list:
        raise ValueError("No flash cards were selected.")

    level_value = (level or "A1").strip() or "A1"
    topic_value = (topic or "introducing yourself").strip() or "introducing yourself"

    title = _title_for_topic(topic_value, level_value)
    core_phrases = card_list[:4]

    situation_map = {
        "introducing yourself": "You are meeting a new classmate in a language exchange at the university.",
        "ordering at a café": "You are ordering a coffee and pastry in a small Paris café.",
        "asking for directions": "You are lost in a neighbourhood and need to ask for clear directions.",
        "a job interview": "You are in a short job interview for a part-time role in a French-speaking workplace.",
    }

    situation = situation_map.get(topic_value.lower(), f"You are practicing {topic_value.lower()} in a realistic conversation.")
    opening_message = (
        "Bonjour ! Je suis ravi de vous parler aujourd’hui. "
        "On peut commencer par quelques phrases simples pour pratiquer ensemble."
    )
    next_question = (
        "Comment est-ce que vous décririez votre routine quotidienne en français ? "
        "Essayez d’utiliser une ou deux phrases de la liste ci-dessous."
    )

    return {
        "title": title,
        "situation": situation,
        "openingMessage": opening_message,
        "nextQuestion": next_question,
        "targetPhrases": core_phrases,
    }
