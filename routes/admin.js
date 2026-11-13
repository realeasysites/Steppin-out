const path = require('path');
const express = require('express');
const db = require('../db');
const { COOKIE, ADMIN_PASSWORD, checkPassword, requireAuth, isAuthed } = require('../lib/auth');

const router = express.Router();
const page = f => path.join(__dirname, '..', 'views', f);
const STATUSES = ['new', 'contacted', 'enrolled', 'booked', 'closed'];

router.get('/login', (req, res) => {
  if (isAuthed(req)) return res.redirect('/admin');
  res.sendFile(page('login.html'));
});

router.post('/login', express.urlencoded({ extended: false }), (req, res) => {
  if (!ADMIN_PASSWORD) return res.redirect('/admin/login?e=disabled');
  if (!checkPassword(req.body.password)) return res.redirect('/admin/login?e=1');
  res.cookie(COOKIE, 'ok', {
    signed: true, httpOnly: true, sameSite: 'lax',
    secure: req.secure, maxAge: 1000 * 60 * 60 * 24 * 14
  });
  res.redirect('/admin');
});

router.post('/logout', (req, res) => { res.clearCookie(COOKIE); res.redirect('/admin/login'); });

router.use(requireAuth);

router.get('/', (req, res) => res.sendFile(page('dashboard.html')));

router.get('/api/inquiries', (req, res) => {
  const rows = db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC, id DESC').all();
  res.json({ rows, statuses: STATUSES });
});

router.patch('/api/inquiries/:id', express.json(), (req, res) => {
  const { status, notes } = req.body || {};
  const row = db.prepare('SELECT id FROM inquiries WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Not found' });
  if (status !== undefined) {
    if (!STATUSES.includes(status)) return res.status(400).json({ error: 'Bad status' });
    db.prepare('UPDATE inquiries SET status = ? WHERE id = ?').run(status, row.id);
  }
  if (notes !== undefined) db.prepare('UPDATE inquiries SET notes = ? WHERE id = ?').run(String(notes).slice(0, 2000), row.id);
  res.json({ ok: true });
});

router.delete('/api/inquiries/:id', (req, res) => {
  const info = db.prepare('DELETE FROM inquiries WHERE id = ?').run(req.params.id);
  if (!info.changes) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
});

module.exports = router;
