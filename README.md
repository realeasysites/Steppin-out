# Steppin' Out Dance Centre — website

Website + inquiry dashboard for Steppin' Out Dance Centre (308 Main St, Saco, ME). Built by Real Easy Sites.

**Layout:** "Marquee" — theater marquee hero, class finder built from the real Fall 2026–27 schedule, playbill-style class list, teacher "cast" cards, ticket-stub tuition.

## Stack
Node 20 · Express · SQLite (better-sqlite3)

```
server.js        thin entry point
routes/public.js POST /api/inquiries  (class, party, contact)
routes/admin.js  /admin  password-only dashboard (status, notes, delete)
lib/             auth + mailer
db/              SQLite schema
public/          the site (edit public/js/data.js for schedule, teachers, closures, hours, social links)
views/           admin pages
```

## Environment (Render)
| Var | Purpose |
|---|---|
| `ADMIN_PASSWORD` | **Required** to sign in at `/admin` (login is disabled until set) |
| `SESSION_SECRET` | Long random string so logins survive restarts |
| `NOTIFY_EMAIL` | Inbox that gets an email for every new request |
| `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASS` `MAIL_FROM` | Outgoing mail (e.g. Gmail app password, port 465) |
| `DB_PATH` | Point at a Render persistent disk, e.g. `/var/data/sodc.sqlite` |

Render: Build `npm install` · Start `npm start` · Node 20.

## Updating content
- **Schedule:** `public/js/data.js` → `schedule` (and swap `public/docs/SODC-Fall-Schedule-2026-27.pdf`).
- **Facebook / Instagram:** set `site.facebook` / `site.instagram` in `data.js` — icons and the live Facebook feed section appear automatically.
- **Registration / Parent Portal:** links go to DanceStudio-Pro (`dancestudio-pro.com/online/steppinoutdance2020`).
