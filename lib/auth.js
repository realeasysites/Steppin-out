const crypto = require('crypto');

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const COOKIE = 'sodc_admin';

function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function checkPassword(pw) {
  if (!ADMIN_PASSWORD) return false; // login disabled until ADMIN_PASSWORD is set
  return safeEqual(pw || '', ADMIN_PASSWORD);
}

function isAuthed(req) {
  return req.signedCookies && req.signedCookies[COOKIE] === 'ok';
}

function requireAuth(req, res, next) {
  if (isAuthed(req)) return next();
  if (req.path.startsWith('/api')) return res.status(401).json({ error: 'Not signed in' });
  return res.redirect('/admin/login');
}

module.exports = { ADMIN_PASSWORD, SESSION_SECRET, COOKIE, checkPassword, isAuthed, requireAuth };
