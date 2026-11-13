const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

const file = process.env.DB_PATH || path.join(__dirname, 'sodc.sqlite');
fs.mkdirSync(path.dirname(file), { recursive: true });
const db = new Database(file);
db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  kind TEXT NOT NULL,              -- class | party | contact
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  dancer_name TEXT,
  dancer_age TEXT,
  interest TEXT,                   -- class name / party style
  details TEXT,                    -- JSON for extra fields
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_inq_created ON inquiries(created_at);
`);

module.exports = db;
