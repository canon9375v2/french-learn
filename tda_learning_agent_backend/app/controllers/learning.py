from ..models.db import connect
from ..models.schemas import SessionCreate, Params
from ..services.analysis import analyze

def list_sessions():
    con=connect(); rows=con.execute("SELECT * FROM sessions ORDER BY date DESC,id DESC").fetchall(); con.close(); return [dict(r) for r in rows]

def add_session(payload: SessionCreate):
    con=connect(); cur=con.execute("INSERT INTO sessions(date,activity,score,minutes,error_tags) VALUES(?,?,?,?,?)",(payload.date,payload.activity,payload.score,payload.minutes,payload.error_tags)); con.commit(); row=con.execute("SELECT * FROM sessions WHERE id=?",(cur.lastrowid,)).fetchone(); con.close(); return dict(row)

def save_params(p: Params):
    con=connect(); con.execute("INSERT INTO params(id,daily,vocab,listen,prod,adapt,metric,res,over_pct,pers) VALUES(1,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET daily=excluded.daily,vocab=excluded.vocab,listen=excluded.listen,prod=excluded.prod,adapt=excluded.adapt,metric=excluded.metric,res=excluded.res,over_pct=excluded.over_pct,pers=excluded.pers",(p.daily,p.vocab,p.listen,p.prod,p.adapt,p.metric,p.res,p.over,p.pers)); con.commit(); con.close(); return p

def load_params():
    con=connect(); r=con.execute("SELECT * FROM params WHERE id=1").fetchone(); con.close()
    if not r: return Params()
    return Params(daily=r[1],vocab=r[2],listen=r[3],prod=r[4],adapt=r[5],metric=r[6],res=r[7],over=r[8],pers=r[9])

def run_analysis(p):
    return analyze(list_sessions(), p)
