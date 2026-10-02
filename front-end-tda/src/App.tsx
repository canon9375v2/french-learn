import { useEffect, useMemo, useState } from 'react'
import './App.css'

type ApiParams = {
  daily: number
  vocab: number
  listen: number
  prod: number
  adapt: number
  metric: string
  res: number
  over: number
  pers: number
}

type Session = {
  id: number
  date: string
  activity: string
  score: number | null
  minutes: number | null
  error_tags: string
}

type AnalysisResult = {
  snapshot: {
    vocabulary: number
    listening: number
    sentence_recall: number
    shadowing: number
    writing: number
    speaking: number
    grammar: number
    reading: number
    active_passive_gap: number
    confidence: number
  }
  phase: string
  bottleneck: string
  findings: string[]
  topology: {
    components: number
    weak_bridges: string[]
    persistent_features: string[]
    mapper: {
      metric: string
      resolution: number
      overlap: number
    }
  }
  log: string[]
}

type View = 'overview' | 'learner' | 'tda' | 'curriculum' | 'data' | 'params'

type SessionForm = {
  date: string
  activity: string
  score: string
  minutes: string
  error_tags: string
}

const defaultParams: ApiParams = {
  daily: 30,
  vocab: 1000,
  listen: 65,
  prod: 60,
  adapt: 0.6,
  metric: 'cosine',
  res: 8,
  over: 35,
  pers: 0.25,
}

const defaultSessionForm: SessionForm = {
  date: new Date().toISOString().slice(0, 10),
  activity: 'Story shadowing',
  score: '',
  minutes: '',
  error_tags: '',
}

const API_BASE = import.meta.env.VITE_TDA_API_URL || 'http://localhost:8000/api'

async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || response.statusText || 'Request failed')
  }

  return (await response.json()) as T
}

function App() {
  const [activeView, setActiveView] = useState<View>('overview')
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking')
  const [params, setParams] = useState<ApiParams>(defaultParams)
  const [sessions, setSessions] = useState<Session[]>([])
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [sessionFormOpen, setSessionFormOpen] = useState(false)
  const [sessionForm, setSessionForm] = useState<SessionForm>(defaultSessionForm)

  const metrics = useMemo(() => {
    const snapshot = analysis?.snapshot
    return [
      { label: 'Vocabulary', value: snapshot ? snapshot.vocabulary.toLocaleString() : '1,240' },
      { label: 'Listening', value: snapshot ? `${Math.round(snapshot.listening)}%` : '74%' },
      { label: 'Sentence recall', value: snapshot ? `${Math.round(snapshot.sentence_recall)}%` : '81%' },
      { label: 'Writing', value: snapshot ? `${Math.round(snapshot.writing)}%` : '63%' },
      { label: 'Learning time', value: '4.8h' },
    ]
  }, [analysis])

  const loadSessions = async () => {
    const rows = await api<Session[]>('/sessions')
    setSessions(rows)
  }

  const loadAnalysis = async (notify = false) => {
    const data = await api<AnalysisResult>('/analysis', {
      method: 'POST',
      body: JSON.stringify({ params }),
    })
    setAnalysis(data)
    if (notify) {
      window.alert('Backend TDA analysis completed.')
    }
  }

  const boot = async () => {
    try {
      await api<{ status: string }>('/health')
      setApiStatus('online')
      const savedParams = await api<ApiParams>('/params')
      setParams({ ...defaultParams, ...savedParams })
      await loadSessions()
      await loadAnalysis(false)
    } catch (error) {
      setApiStatus('offline')
      console.error(error)
    }
  }

  useEffect(() => {
    void boot()
  }, [])

  const saveParams = async () => {
    try {
      await api('/params', {
        method: 'PUT',
        body: JSON.stringify(params),
      })
      await loadAnalysis(false)
      window.alert('Parameters saved to backend.')
    } catch (error) {
      window.alert(`Save failed: ${error instanceof Error ? error.message : 'unknown error'}`)
    }
  }

  const saveSession = async () => {
    try {
      const payload = {
        date: sessionForm.date,
        activity: sessionForm.activity || 'Study session',
        score: sessionForm.score === '' ? null : Number(sessionForm.score),
        minutes: sessionForm.minutes === '' ? null : Number(sessionForm.minutes),
        error_tags: sessionForm.error_tags || '',
      }
      await api('/sessions', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
      setSessionFormOpen(false)
      setSessionForm(defaultSessionForm)
      await loadSessions()
      await loadAnalysis(false)
      window.alert('Session saved to backend and analysis refreshed.')
    } catch (error) {
      window.alert(`Backend save failed: ${error instanceof Error ? error.message : 'unknown error'}`)
    }
  }

  const updateParam = (key: keyof ApiParams, value: string | number) => {
    setParams((current) => ({
      ...current,
      [key]: typeof value === 'string' ? Number(value) : value,
    }))
  }

  const displayPhase = analysis?.phase || 'Foundation+'
  const displayBottleneck = analysis?.bottleneck || 'listening → spontaneous production'
  const displayFindings = analysis?.findings || [
    '1 connected core component in the current learner state.',
    'Weak bridge detected between listening and speaking.',
    'Active/passive vocabulary gap estimated at 31%.',
  ]
  const displayLog = analysis?.log || ['[ready] TDA engine waiting for learner data…']

  return (
    <>
      <header className="topbar">
        <div className="brand-block">
          <h1>TDA Learning Agent</h1>
          <p>French learner intelligence · backend-connected MVC</p>
          <div className={`api-pill ${apiStatus}`}>
            API: {apiStatus === 'checking' ? 'checking…' : apiStatus === 'online' ? 'connected' : 'offline'}
          </div>
        </div>
        <div className="header-actions">
          <button type="button" onClick={() => void loadAnalysis(true)}>
            Run TDA analysis
          </button>
          <button type="button" className="primary" onClick={() => setSessionFormOpen(true)}>
            + Add session
          </button>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <nav>
            {(['overview', 'learner', 'tda', 'curriculum', 'data', 'params'] as View[]).map((view) => (
              <button
                key={view}
                type="button"
                className={activeView === view ? 'active' : ''}
                onClick={() => setActiveView(view)}
              >
                {view === 'overview' && 'Overview'}
                {view === 'learner' && 'Learner Model'}
                {view === 'tda' && 'TDA Analysis'}
                {view === 'curriculum' && 'Adaptive Curriculum'}
                {view === 'data' && 'Learning Data'}
                {view === 'params' && 'Parameters'}
              </button>
            ))}
          </nav>
          <div className="footer-note">Model → View → Controller<br />Prototype data stored in the backend.</div>
        </aside>

        <main className="main-content">
          {activeView === 'overview' && (
            <section className="panel active">
              <div className="metrics-grid">
                {metrics.map((metric) => (
                  <div key={metric.label} className="card metric-card">
                    <div className="label">{metric.label}</div>
                    <div className="value">{metric.value}</div>
                    <div className="delta">+42 this week</div>
                  </div>
                ))}
              </div>

              <div className="two-column section-gap">
                <div className="card">
                  <h2>Skill profile</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Dimension</th>
                        <th>Mastery</th>
                        <th>Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Vocabulary', analysis?.snapshot.vocabulary ?? 1240],
                        ['Grammar', analysis?.snapshot.grammar ?? 76],
                        ['Listening', analysis?.snapshot.listening ?? 74],
                        ['Speaking', analysis?.snapshot.speaking ?? 58],
                        ['Writing', analysis?.snapshot.writing ?? 63],
                      ].map(([label, value]) => (
                        <tr key={label as string}>
                          <td>{label}</td>
                          <td>
                            <div className="bar">
                              <i style={{ width: `${Math.min(Number(value), 100)}%` }} />
                            </div>
                          </td>
                          <td>↑</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="card">
                  <h2>Agent diagnosis</h2>
                  <div className="notice">
                    <b>Current bottleneck:</b> {displayBottleneck}.
                  </div>
                  <p>
                    The learner has enough vocabulary to enter the production stage. The strategy should shift
                    from pure input toward sentence transformation, shadowing and writing tasks.
                  </p>
                  <span className="pill">Strategy phase: {displayPhase}</span>
                </div>
              </div>

              <div className="card section-gap">
                <h2>Analysis findings</h2>
                <ul className="findings-list">
                  {displayFindings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {activeView === 'learner' && (
            <section className="panel active">
              <div className="two-column">
                <div className="card">
                  <h2>Learner Model</h2>
                  <table>
                    <tbody>
                      <tr>
                        <th>Feature</th>
                        <th>Value</th>
                        <th>Confidence</th>
                      </tr>
                      <tr>
                        <td>Vocabulary size</td>
                        <td>{analysis?.snapshot.vocabulary.toLocaleString() || '1,240'}</td>
                        <td>0.96</td>
                      </tr>
                      <tr>
                        <td>Sentence recall</td>
                        <td>{`${Math.round(analysis?.snapshot.sentence_recall ?? 81)}%`}</td>
                        <td>0.89</td>
                      </tr>
                      <tr>
                        <td>Listening recognition</td>
                        <td>{`${Math.round(analysis?.snapshot.listening ?? 74)}%`}</td>
                        <td>0.91</td>
                      </tr>
                      <tr>
                        <td>Shadowing</td>
                        <td>{`${Math.round(analysis?.snapshot.shadowing ?? 82)}%`}</td>
                        <td>0.84</td>
                      </tr>
                      <tr>
                        <td>Writing production</td>
                        <td>{`${Math.round(analysis?.snapshot.writing ?? 63)}%`}</td>
                        <td>0.78</td>
                      </tr>
                      <tr>
                        <td>Passive/active gap</td>
                        <td>{`${Math.round(analysis?.snapshot.active_passive_gap ?? 31)}%`}</td>
                        <td>0.71</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="card">
                  <h2>Error patterns</h2>
                  <p>1. Auxiliary selection: <b>avoir / être</b></p>
                  <p>2. Gender agreement in noun phrases</p>
                  <p>3. Listening segmentation at normal speed</p>
                  <p>4. Correct recognition but slow spontaneous retrieval</p>
                  <div className="notice">
                    Model interpretation: the main issue is retrieval and cross-skill connections, not vocabulary alone.
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeView === 'tda' && (
            <section className="panel active">
              <div className="two-column">
                <div className="card">
                  <h2>Mapper-style learner topology</h2>
                  <div className="node-wrap">
                    <div className="node node-1">Vocabulary<br /><b>{Math.round(analysis?.snapshot.vocabulary ?? 1240)}</b></div>
                    <div className="node node-2">Grammar<br /><b>{Math.round(analysis?.snapshot.grammar ?? 76)}%</b></div>
                    <div className="node node-3">Reading<br /><b>{Math.round(analysis?.snapshot.reading ?? 79)}%</b></div>
                    <div className="node node-4">Listening<br /><b>{Math.round(analysis?.snapshot.listening ?? 74)}%</b></div>
                    <div className="node node-5">Speaking<br /><b>{Math.round(analysis?.snapshot.speaking ?? 58)}%</b></div>
                  </div>
                </div>

                <div className="card">
                  <h2>TDA interpretation</h2>
                  <ul>
                    {displayFindings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card section-gap">
                <h2>Backend log</h2>
                <pre>{displayLog.join('\n')}</pre>
              </div>
            </section>
          )}

          {activeView === 'curriculum' && (
            <section className="panel active">
              <div className="three-column">
                <div className="card">
                  <h3>Phase 1 · Beginner</h3>
                  <p>30 min/day · high-frequency sentences · shadowing · flashcards.</p>
                  <span className="pill">Prerequisite: low vocabulary</span>
                </div>
                <div className="card">
                  <h3>Phase 2 · Foundation+</h3>
                  <p>1-min video · sentence creation · short stories + audio.</p>
                  <span className="pill">Current</span>
                </div>
                <div className="card">
                  <h3>Phase 3 · Production</h3>
                  <p>Reading shadowing · Chinese → French writing · sentence substitution.</p>
                  <span className="pill">Unlock by mastery</span>
                </div>
              </div>

              <div className="card section-gap">
                <h2>Today's adaptive plan</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Minutes</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Story + audio</td>
                      <td>7</td>
                      <td>Strengthen listening context</td>
                    </tr>
                    <tr>
                      <td>Reading shadowing</td>
                      <td>7</td>
                      <td>Connect sound ↔ text</td>
                    </tr>
                    <tr>
                      <td>Sentence transformation</td>
                      <td>6</td>
                      <td>Passive → active retrieval</td>
                    </tr>
                    <tr>
                      <td>Chinese → French writing</td>
                      <td>5</td>
                      <td>Production test</td>
                    </tr>
                    <tr>
                      <td>Flashcard review</td>
                      <td>5</td>
                      <td>Spaced retrieval</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeView === 'data' && (
            <section className="panel active">
              <div className="card">
                <h2>Learning data</h2>
                {sessionFormOpen && (
                  <div className="session-form">
                    <div className="form-grid">
                      <label>
                        Date
                        <input
                          type="date"
                          value={sessionForm.date}
                          onChange={(event) => setSessionForm((current) => ({ ...current, date: event.target.value }))}
                        />
                      </label>
                      <label>
                        Activity
                        <input
                          value={sessionForm.activity}
                          onChange={(event) => setSessionForm((current) => ({ ...current, activity: event.target.value }))}
                        />
                      </label>
                      <label>
                        Score %
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={sessionForm.score}
                          onChange={(event) => setSessionForm((current) => ({ ...current, score: event.target.value }))}
                        />
                      </label>
                      <label>
                        Minutes
                        <input
                          type="number"
                          min="0"
                          max="600"
                          value={sessionForm.minutes}
                          onChange={(event) => setSessionForm((current) => ({ ...current, minutes: event.target.value }))}
                        />
                      </label>
                      <label>
                        Error tags
                        <input
                          value={sessionForm.error_tags}
                          onChange={(event) => setSessionForm((current) => ({ ...current, error_tags: event.target.value }))}
                        />
                      </label>
                      <div className="form-actions">
                        <button type="button" className="primary" onClick={() => void saveSession()}>
                          Save to backend
                        </button>
                        <button type="button" onClick={() => setSessionFormOpen(false)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Activity</th>
                      <th>Score</th>
                      <th>Time</th>
                      <th>Error tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessions.map((session) => (
                      <tr key={session.id}>
                        <td>{session.date}</td>
                        <td>{session.activity}</td>
                        <td>{session.score == null ? '—' : `${session.score}%`}</td>
                        <td>{session.minutes == null ? '—' : `${session.minutes}m`}</td>
                        <td>{session.error_tags || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeView === 'params' && (
            <section className="panel active">
              <div className="two-column">
                <div className="card">
                  <h2>Agent parameters</h2>
                  <div className="control">
                    <label>Daily study target {params.daily} min</label>
                    <input type="range" min="10" max="90" value={params.daily} onChange={(event) => updateParam('daily', event.target.value)} />
                  </div>
                  <div className="control">
                    <label>Vocabulary threshold {params.vocab}</label>
                    <input type="range" min="300" max="3000" step="100" value={params.vocab} onChange={(event) => updateParam('vocab', event.target.value)} />
                  </div>
                  <div className="control">
                    <label>Listening threshold {params.listen}%</label>
                    <input type="range" min="30" max="95" value={params.listen} onChange={(event) => updateParam('listen', event.target.value)} />
                  </div>
                  <div className="control">
                    <label>Production threshold {params.prod}%</label>
                    <input type="range" min="30" max="95" value={params.prod} onChange={(event) => updateParam('prod', event.target.value)} />
                  </div>
                  <div className="control">
                    <label>Adaptive aggressiveness {params.adapt}</label>
                    <input type="range" min="0" max="1" step="0.1" value={params.adapt} onChange={(event) => updateParam('adapt', event.target.value)} />
                  </div>
                  <button type="button" className="primary" onClick={() => void saveParams()}>
                    Save strategy
                  </button>
                </div>

                <div className="card">
                  <h2>TDA parameters</h2>
                  <div className="control">
                    <label>Distance metric</label>
                    <select value={params.metric} onChange={(event) => updateParam('metric', event.target.value)}>
                      <option value="cosine">cosine</option>
                      <option value="euclidean">euclidean</option>
                      <option value="manhattan">manhattan</option>
                    </select>
                  </div>
                  <div className="control">
                    <label>Mapper resolution {params.res}</label>
                    <input type="range" min="3" max="20" value={params.res} onChange={(event) => updateParam('res', event.target.value)} />
                  </div>
                  <div className="control">
                    <label>Overlap {params.over}%</label>
                    <input type="range" min="0" max="80" value={params.over} onChange={(event) => updateParam('over', event.target.value)} />
                  </div>
                  <div className="control">
                    <label>Persistence cutoff {params.pers}</label>
                    <input type="range" min="0" max="1" step="0.05" value={params.pers} onChange={(event) => updateParam('pers', event.target.value)} />
                  </div>
                  <div className="log-box">
                    {displayLog.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  )
}

export default App
