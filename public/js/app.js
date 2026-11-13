(function () {
  const D = window.SODC;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const DAYS = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday' };

  /* ---------- class finder ---------- */
  const state = { age: null, style: '', day: '', teams: false };
  const styleSel = $('#styleSel');
  [...new Set(D.schedule.map(c => c.style))].sort().forEach(s => styleSel.insertAdjacentHTML('beforeend', `<option>${esc(s)}</option>`));

  // age chips map to an age range so "3–4" catches 3- and 4-year-old classes etc.
  const RANGES = { 2: [1, 3], 4: [3, 4], 6: [5, 7], 10: [8, 12], 15: [13, 17], 30: [18, 99] };
  function fits(c) {
    if (!state.teams && c.team) return false;
    if (state.style && c.style !== state.style) return false;
    if (state.day && c.day !== state.day) return false;
    if (state.age != null) {
      if (!c.ages) return state.age >= 5;
      const [lo, hi] = RANGES[state.age];
      return c.ages[0] <= hi && c.ages[1] >= lo;
    }
    return true;
  }
  function startMin(t) {
    const m = t.match(/^(\d{1,2}):(\d{2})/); let h = +m[1];
    if (!/am$/.test(t) && !(h >= 9 && h <= 12)) h += 12;
    return h * 60 + +m[2];
  }
  function renderWeek() {
    const list = D.schedule.filter(fits).sort((a, b) => startMin(a.time) - startMin(b.time));
    $('#finderCount').textContent = list.length
      ? `${list.length} class${list.length === 1 ? '' : 'es'} fit — tap one to ask about a spot.`
      : 'Nothing matches those filters — try another day or style, or turn on audition teams.';
    $('#week').innerHTML = Object.keys(DAYS).map(d => {
      const items = list.filter(c => c.day === d);
      return `<div class="day ${items.length ? '' : 'empty'}"><h3>${DAYS[d]}</h3><ul>${
        items.length ? items.map(c => `<li><button class="slot ${c.team ? 'team' : ''}" data-class="${esc(DAYS[c.day] + ' ' + c.time + ' — ' + c.name)}">
          <span class="t">${esc(c.time)} · Studio ${c.studio}</span>
          <span class="n">${esc(c.name)}${c.isNew ? '<span class="pill new">New</span>' : ''}${c.invite ? '<span class="pill inv">Invite</span>' : c.team ? '<span class="pill tm">Team</span>' : ''}</span>
          ${c.who ? `<span class="w">with ${esc(c.who.split(' / ').map(n => 'Miss ' + n).join(' & '))}</span>` : ''}
        </button></li>`).join('') : '<li class="none">No matches</li>'
      }</ul></div>`;
    }).join('');
  }
  $$('.age-chips button').forEach(b => b.addEventListener('click', () => {
    $$('.age-chips button').forEach(x => x.classList.toggle('on', x === b));
    state.age = b.dataset.age === '' ? null : Number(b.dataset.age);
    renderWeek();
  }));
  styleSel.addEventListener('change', e => { state.style = e.target.value; renderWeek(); });
  $('#daySel').addEventListener('change', e => { state.day = e.target.value; renderWeek(); });
  $('#teamTog').addEventListener('change', e => { state.teams = e.target.checked; renderWeek(); });
  renderWeek();

  /* ---------- playbill styles ---------- */
  $('#styleList').innerHTML = D.styles.map((s, i) => `<li>
    <button aria-expanded="false"><span class="sn">${esc(s.name)}</span><span class="dots"></span><span class="sa">${esc(s.ages)}</span></button>
    <div class="sb">${esc(s.blurb)} <button class="find" data-style="${esc(s.name)}">See the schedule →</button></div></li>`).join('');
  $$('#styleList > li > button').forEach(b => b.addEventListener('click', () => {
    const li = b.parentElement, open = !li.classList.contains('open');
    li.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
  }));
  const STYLE_MAP = { 'Ballet & Pointe': 'Ballet', 'Tiny Toes': 'Tiny Toes' };
  $$('#styleList .find').forEach(b => b.addEventListener('click', () => {
    const want = STYLE_MAP[b.dataset.style] || b.dataset.style;
    const opt = [...styleSel.options].find(o => o.value === want);
    state.style = opt ? want : ''; styleSel.value = state.style;
    if (want === 'Musical Theatre') { state.teams = true; $('#teamTog').checked = true; }
    renderWeek();
    $('#finder').scrollIntoView({ behavior: 'smooth' });
  }));

  /* ---------- cast ---------- */
  $('#castGrid').innerHTML = D.teachers.map(t => `<button class="member rv" data-card="${t.id}" aria-label="Read ${esc(t.name)}'s teacher card">
    ${t.homegrown ? '<span class="home">SODC alum</span>' : ''}
    <img src="/img/teachers/${t.id}.jpg" alt="${esc(t.name)}" width="118" height="118" loading="lazy">
    <b>${esc(t.name)}</b><span class="role">${esc(t.role)}</span><span class="yrs">${esc(t.years)}</span>
    <span class="ln">${esc(t.line)}</span></button>`).join('');
  $$('[data-teacher-opts]').forEach(sel => D.teachers.forEach(t => sel.insertAdjacentHTML('beforeend', `<option>${esc(t.name)}</option>`)));

  const modal = $('#cardModal');
  document.addEventListener('click', e => {
    const m = e.target.closest('[data-card]');
    if (m) {
      const t = D.teachers.find(x => x.id === m.dataset.card);
      $('img', modal).src = `/img/cards/${t.id}.jpg`; $('img', modal).alt = `Meet Your Dance Teacher card for ${t.name}`;
      modal.showModal();
    }
  });
  $('.x', modal).addEventListener('click', () => modal.close());
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

  /* ---------- parent corner ---------- */
  $('#closures').innerHTML = D.closures.map(([d, n]) => `<li><b>${esc(n)}</b><span>${esc(d)}</span></li>`).join('');
  const today = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
  $('#hours').innerHTML = D.hours.map(([d, h]) => `<tr class="${d === today ? 'today' : ''}"><td>${d}</td><td>${h}</td></tr>`).join('');

  /* ---------- socials + facebook feed ---------- */
  const ICON = {
    facebook: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V14h2.8v8z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8c-.1-1.6-.4-3-1.6-4.2S17.6 2.2 16 2.1C14.4 2 9.6 2 8 2.1 6.4 2.2 5 2.6 3.8 3.8S2.2 6.4 2.1 8C2 9.6 2 14.4 2.1 16c.1 1.6.4 3 1.7 4.2S6.4 21.8 8 21.9c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.7s1.6-2.6 1.7-4.2c.1-1.6.1-6.4 0-8zm-2.2 10.1c-.3.9-1 1.5-1.9 1.9-1.3.5-4.4.4-5.8.4s-4.5.1-5.8-.4c-.9-.3-1.5-1-1.9-1.9-.5-1.3-.4-4.4-.4-5.8s-.1-4.5.4-5.8c.3-.9 1-1.5 1.9-1.9 1.3-.5 4.4-.4 5.8-.4s4.5-.1 5.8.4c.9.3 1.5 1 1.9 1.9.5 1.3.4 4.4.4 5.8s.1 4.5-.4 5.8z"/></svg>'
  };
  const socialHTML = ['facebook', 'instagram'].filter(k => D.site[k])
    .map(k => `<a href="${esc(D.site[k])}" target="_blank" rel="noopener" aria-label="Steppin' Out on ${k}">${ICON[k]}</a>`).join('');
  $$('[data-socials]').forEach(el => { el.innerHTML = socialHTML; if (!socialHTML) el.hidden = true; });
  if (D.site.facebook) {
    $('#feed').hidden = false;
    $('[data-fb-link]').href = D.site.facebook;
    const w = Math.min(500, ($('#fbFrame').clientWidth || 500));
    $('#fbFrame').innerHTML = `<iframe title="Steppin' Out on Facebook" width="${w}" height="620" loading="lazy" allow="encrypted-media"
      src="https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(D.site.facebook)}&tabs=timeline&width=${w}&height=620&small_header=true&adapt_container_width=true&hide_cover=false"></iframe>`;
  }

  /* ---------- "ask about" links prefill the form ---------- */
  const interest = $('#interestField');
  document.addEventListener('click', e => {
    const s = e.target.closest('.slot');
    const a = e.target.closest('[data-ask]');
    if (s) { interest.value = s.dataset.class; go(); }
    else if (a && a.dataset.ask) { interest.value = a.dataset.ask; }
    function go() { $('#contact').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => $('#askForm [name=name]').focus({ preventScroll: true }), 600); }
  });

  /* ---------- forms ---------- */
  $$('form.card-form').forEach(f => f.addEventListener('submit', async e => {
    e.preventDefault();
    const msg = $('.form-msg', f), btn = $('button[type=submit]', f);
    const data = Object.fromEntries(new FormData(f).entries());
    data.kind = f.dataset.kind;
    msg.className = 'form-msg'; msg.textContent = '';
    if (!data.name?.trim()) return bad('Please add your name.');
    if (f.dataset.kind === 'party' && !data.email?.trim()) return bad('Please add your email.');
    if (f.dataset.kind === 'party' && !data.dancer_name?.trim()) return bad('Who’s the birthday dancer?');
    if (f.dataset.kind === 'party' && !data.party_date) return bad('Pick a preferred date.');
    if (!data.email?.trim() && !data.phone?.trim()) return bad('Please add an email or phone so we can reach you.');
    btn.disabled = true; const label = btn.textContent; btn.textContent = 'Sending…';
    try {
      const r = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || 'Something went wrong.');
      f.reset(); msg.classList.add('ok');
      msg.textContent = f.dataset.kind === 'party' ? 'Party request sent! We’ll reach out to confirm your date. 🎉' : 'Thanks! We got it and will be in touch soon. ★';
    } catch (err) { bad(err.message + ' You can also call (207) 283-2450.'); }
    finally { btn.disabled = false; btn.textContent = label; }
    function bad(t) { msg.classList.add('bad'); msg.textContent = t; }
  }));

  /* ---------- mobile drawer ---------- */
  const burger = $('.burger'), drawer = $('.drawer');
  burger.addEventListener('click', () => {
    const open = drawer.hidden; drawer.hidden = !open; burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  drawer.addEventListener('click', e => { if (e.target.closest('a')) { drawer.hidden = true; burger.setAttribute('aria-expanded', false); document.body.style.overflow = ''; } });

  /* ---------- reveal ---------- */
  $$('.sec-head, .playbill, .ticket, .pcard, .card-form, .company-photo').forEach(el => el.classList.add('rv'));
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -8% 0px' }) : null;
  $$('.rv').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  $('#yr').textContent = new Date().getFullYear();
})();
