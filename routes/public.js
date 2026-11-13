const express = require('express');
const db = require('../db');
const { notify } = require('../lib/mailer');

const router = express.Router();

// light in-memory rate limit: 6 submissions / 10 min per IP
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter(t => now - t < 10 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 6;
}

const clip = (v, n = 300) => (v == null ? '' : String(v).trim().slice(0, n));
const KINDS = new Set(['class', 'party', 'contact']);

router.post('/inquiries', (req, res) => {
  const b = req.body || {};
  if (b.website) return res.json({ ok: true }); // honeypot
  if (limited(req.ip)) return res.status(429).json({ error: 'Too many requests — please call us at (207) 283-2450.' });

  const kind = KINDS.has(b.kind) ? b.kind : 'contact';
  const name = clip(b.name, 120);
  const email = clip(b.email, 160);
  const phone = clip(b.phone, 40);
  if (!name) return res.status(400).json({ error: 'Please add your name.' });
  if (!email && !phone) return res.status(400).json({ error: 'Please add an email or phone so we can reach you.' });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'That email doesn’t look right.' });

  let details = null;
  if (kind === 'party') {
    const d = {
      date: clip(b.party_date, 40), slot: clip(b.party_slot, 60), instructor: clip(b.party_instructor, 60),
      music: clip(b.party_music, 300), games: clip(b.party_games, 300)
    };
    if (!d.date) return res.status(400).json({ error: 'Please pick a preferred party date.' });
    details = JSON.stringify(d);
  }

  const row = {
    kind, name, email, phone,
    dancer_name: clip(b.dancer_name, 120),
    dancer_age: clip(b.dancer_age, 20),
    interest: clip(b.interest, 200),
    details,
    message: clip(b.message, 2000)
  };
  const info = db.prepare(`INSERT INTO inquiries (kind,name,email,phone,dancer_name,dancer_age,interest,details,message)
    VALUES (@kind,@name,@email,@phone,@dancer_name,@dancer_age,@interest,@details,@message)`).run(row);
  notify(row);
  res.json({ ok: true, id: info.lastInsertRowid });
});

module.exports = router;
