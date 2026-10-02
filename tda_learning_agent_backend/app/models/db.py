import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).resolve().parents[2] / "data.sqlite3"

def connect():
    con = sqlite3.connect(DB_PATH)
    con.row_factory = sqlite3.Row
    return con

def init_db():
    con = connect()
    con.execute('''CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        activity TEXT NOT NULL,
        score REAL,
        minutes INTEGER,
        error_tags TEXT DEFAULT ''
    )''')
    con.execute('''CREATE TABLE IF NOT EXISTS params (
        id INTEGER PRIMARY KEY CHECK (id=1),
        daily INTEGER, vocab INTEGER, listen INTEGER, prod INTEGER,
        adapt REAL, metric TEXT, res INTEGER, over_pct INTEGER, pers REAL
    )''')
    if con.execute("SELECT COUNT(*) FROM sessions").fetchone()[0] == 0:
        seed = [
            ("2026-09-30","Story shadowing",82,12,"segmentation"),
            ("2026-09-29","Chinese → French",63,10,"auxiliary, gender"),
            ("2026-09-28","1-min video",74,8,"listening"),
            ("2026-09-27","Flashcards",91,7,"venir"),
        ]
        con.executemany("INSERT INTO sessions(date,activity,score,minutes,error_tags) VALUES(?,?,?,?,?)", seed)
    con.commit(); con.close()
