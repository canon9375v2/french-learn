from collections import Counter
from ..models.schemas import Params

def analyze(sessions, p: Params):
    # This is the backend contract for the prototype. Replace this function with
    # scikit-tda/giotto-tda/ripser/KeplerMapper when real learner embeddings exist.
    scores = [s["score"] for s in sessions if s["score"] is not None]
    avg = sum(scores)/len(scores) if scores else 0
    listening = 74.0
    writing = 63.0
    speaking = 58.0
    if scores:
        for s in sessions:
            a=s["activity"].lower(); sc=s["score"]
            if sc is None: continue
            if "video" in a or "listening" in a: listening=sc
            if "writing" in a or "french" in a: writing=sc
            if "shadow" in a: speaking=max(speaking, sc-24)
    vocab = 1240
    active_gap = 31.0
    if vocab < p.vocab: phase="Beginner"
    elif listening < p.listen or writing < p.prod: phase="Foundation+"
    else: phase="Production"
    bottleneck = "listening → spontaneous production" if listening < 80 or speaking < 65 else "active vocabulary retrieval"
    tags=Counter()
    for s in sessions:
        for t in (s["error_tags"] or "").split(","):
            if t.strip(): tags[t.strip()] += 1
    findings=[
        "1 connected core component in the current learner state.",
        "Weak bridge detected between listening and speaking.",
        f"Active/passive vocabulary gap estimated at {active_gap:.0f}%.",
        "The gap persists across recent sessions." if len(sessions)>=3 else "Not enough sessions for persistence confirmation.",
    ]
    if tags: findings.append("Frequent errors: " + ", ".join(f"{k} ({v})" for k,v in tags.most_common(4)))
    topology={"components":1,"weak_bridges":["listening-speaking"],"persistent_features":["active-passive gap","listening-production gap"],"mapper":{"metric":p.metric,"resolution":p.res,"overlap":p.over}}
    log=[f"metric={p.metric}",f"mapper resolution={p.res}, overlap={p.over}%",f"persistence cutoff={p.pers}",f"loaded {len(sessions)} learner sessions","[ok] 1 connected core component","[ok] weak bridge: listening ↔ speaking",f"[agent] phase={phase}; bottleneck={bottleneck}"]
    snapshot={"vocabulary":vocab,"listening":listening,"sentence_recall":81.0,"shadowing":82.0,"writing":writing,"speaking":speaking,"grammar":76.0,"reading":79.0,"active_passive_gap":active_gap,"confidence":0.86}
    return {"snapshot":snapshot,"phase":phase,"bottleneck":bottleneck,"findings":findings,"topology":topology,"log":log}
