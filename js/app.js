/* Прототип obogrev.ru — 1:1 под референс (см. SPEC.md) */

/* ---------- Иконки ---------- */
const P = {
  cable:'<path d="M4 7c0-1.7 1.3-3 3-3s3 1.3 3 3v10c0 1.7 1.3 3 3 3s3-1.3 3-3"/><circle cx="19" cy="7" r="2.5"/><path d="M4 7v10"/>',
  floor:'<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M7 4v16M11 4v16M15 4v16M19 4v16" stroke-dasharray="2 2"/>',
  thermo:'<rect x="7" y="3" width="10" height="14" rx="2"/><circle cx="12" cy="13" r="2.5"/><path d="M12 17v3M9 6h6"/>',
  drop:'<path d="M12 3c3 4 6 7 6 10.5a6 6 0 0 1-12 0C6 10 9 7 12 3Z"/>',
  parts:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  box:'<path d="M3 8 12 3l9 5v8l-9 5-9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  pipe:'<path d="M4 9h10a4 4 0 0 1 4 4v7"/><path d="M2 7v4M16 18h4M16 22h4"/>',
  heater:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 5v14M12 5v14M16 5v14"/>',
  tank:'<rect x="5" y="6" width="14" height="14" rx="3"/><path d="M9 6V4h6v2M8 13h8"/>',
  climate:'<rect x="3" y="5" width="18" height="7" rx="2"/><path d="M6 9h8M7 16c0 1.5 1 2 1 3M12 16c0 1.5 1 2 1 3M17 16c0 1.5 1 2 1 3"/>',
  lamp:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.6.6-1 1.2-1 2H9c0-.8-.4-1.4-1-2A6 6 0 0 1 12 3Z"/>',
  bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',
  faucet:'<path d="M3 10h6v3M9 11h4a4 4 0 0 1 4 4v1M12 7V4h6M19 16h-4v4h4Z"/>',
  roof:'<path d="M3 11 12 4l9 7"/><path d="M5 11v8h14v-8M9 19v-5h6v5"/>',
  snow:'<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>',
  heart:'<path d="M12 20s-7-4.5-9.3-9C1 7.5 3 4 6.5 4 9 4 12 7 12 7s3-3 5.5-3C21 4 23 7.5 21.3 11 19 15.5 12 20 12 20Z"/>',
  compare:'<path d="M12 3v18M5 7h14M5 7l-3 6h6Zm14 0-3 6h6ZM2 13a3 3 0 0 0 6 0M16 13a3 3 0 0 0 6 0"/>',
  check:'<path d="m20 6-11 11-5-5"/>',
  truck:'<path d="M3 6h11v9H3Z"/><path d="M14 9h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  headset:'<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2" y="13" width="5" height="8" rx="1.5"/><rect x="17" y="13" width="5" height="8" rx="1.5"/>',
  hand:'<path d="M8 11V5a2 2 0 0 1 4 0v5m0-1a2 2 0 0 1 4 0v2m0-1a2 2 0 0 1 4 0v4a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-2-3a2 2 0 0 1 3-2l1 1"/>',
  house:'<path d="M3 11 12 4l9 7"/><path d="M5 11v9h14v-9"/><path d="M9 20v-5h6v5"/><path d="M7 16c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5"/>',
  shield:'<path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6Z"/><path d="m9 12 2 2 4-4"/>',
  cert:'<rect x="4" y="3" width="16" height="14" rx="2"/><path d="M8 8h8M8 11h5"/><circle cx="12" cy="18" r="3"/><path d="m10.5 20-1 3 2.5-1.5L14.5 23l-1-3"/>',
  question:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.5 2.5 0 1 1 3.6 2.3c-.8.4-1.1 1-1.1 1.8M12 17h.01"/>',
  share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11 15.8 7.2M8.2 13l7.6 3.8"/>',
  pin:'<path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.4 12.5a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L22 7H6"/>',
  ruble:'<path d="M8 4h5a4 4 0 0 1 0 8H8m0 0v8m0-8H6m2 4H6"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
};
const svg = (n, s = 24) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;
const fmt = n => n.toLocaleString('ru-RU').replace(/,/g, ' ') + ' ₽';
const $ = s => document.querySelector(s);
const main = () => $('#main');
let CART = [];

/* ---------- глобальный шелл ---------- */
const NAV = [
  { name: 'Проектирование и монтаж', href: '#/services', services: true },
  { name: 'Греющий кабель', slug: 'greyushchiy-kabel' },
  { name: 'Тёплые полы', slug: 'elektricheskie-tyeplye-poly' },
  { name: 'Рег. аппаратура', slug: 'termoregulyatory-reguliruyushchaya-apparatura' },
  { name: 'Аксессуары', slug: 'komplektuyushchie-dlya-kabeley-teplykh-polov' },
  { name: 'Защита от протечек', slug: 'sistemy-zashchity-ot-protechek-vody' },
  { name: 'Гофротрубы и фитинги', slug: 'gofrirovannaya-truba-i-fitingi' },
];
const FEATURED = [
  { slug:'greyushchiy-kabel', tint:'t-violet', icon:'cable' }, { slug:'klimat-sistemy', tint:'t-blue', icon:'climate' },
  { slug:'osveshchenie', tint:'t-amber', icon:'lamp' }, { slug:'elektrika', tint:'t-green', icon:'bolt' },
  { slug:'elektricheskie-tyeplye-poly', tint:'t-orange', icon:'floor' }, { slug:'santehnika', tint:'t-cyan', icon:'drop' },
];
function buildShell() {
  $('#navlinks').innerHTML = NAV.map(it => {
    if (it.services) {
      const subs = SERVICES.map(s => `<a href="#/services">${s.name}</a>`).join('');
      return `<div class="navitem"><a href="${it.href}">${it.name}</a><div class="navdrop">${subs}</div></div>`;
    }
    const c = catBy(it.slug);
    const subs = c.subs.map(s => `<a href="#/cat/${c.slug}">${s}</a>`).join('') + `<a class="navdrop__all" href="#/cat/${c.slug}">Все товары →</a>`;
    return `<div class="navitem"><a href="#/cat/${c.slug}">${it.name}</a><div class="navdrop">${subs}</div></div>`;
  }).join('');
  $('#mega').innerHTML = `<div class="wrap"><div class="mega__grid">` +
    CATS.map(c => `<a class="mega__item" href="#/cat/${c.slug}">${svg(c.icon, 26)}<span><b>${c.name}</b><small>${byCat(c.slug).length} товаров</small></span>${c.dev ? '<span class="mega__dev">скоро</span>' : ''}</a>`).join('') + `</div></div>`;
  $('#footcats').innerHTML = CATS.filter(c => !c.dev).slice(0, 9).map(c => `<a href="#/cat/${c.slug}">${c.name}</a>`).join('') + `<a href="#/cat/greyushchiy-kabel">Распродажа</a>`;
}

/* ---------- утилиты карточек ---------- */
function stars(n) { let s = ''; for (let i = 1; i <= 5; i++) s += i <= n ? '★' : '<span class="off">★</span>'; return `<span class="pcard__stars">${s}</span>`; }
function priceLabel(p) {
  if (p.unit.includes('/м²')) return 'Цена за м²:';
  if (p.unit.includes('/м')) return 'Цена за метр:';
  if (p.unit.includes('компл')) return 'Цена за комплект:';
  if (p.unit.includes('секц')) return 'Цена за секцию:';
  return 'Цена за штуку:';
}
function unitWord(p) {
  if (p.unit.includes('/м²')) return 'за м², с НДС';
  if (p.unit.includes('/м')) return 'за метр, с НДС';
  if (p.unit.includes('компл')) return 'за комплект, с НДС';
  if (p.unit.includes('секц')) return 'за секцию, с НДС';
  return 'за шт., с НДС';
}
function pills(p) {
  const f = p.facets, a = [];
  if (f.wt) a.push(`${f.wt} Вт/м${catBy(p.cat).group === 'floor' ? '²' : ''}`);
  else if (f.area) a.push(`${f.area} м²`);
  if (f.type) a.push(f.type.length > 12 ? f.type.slice(0, 11) + '…' : f.type);
  else if (f.func) a.push(f.func); else if (f.tk) a.push(f.tk); else if (f.ctrl) a.push(f.ctrl);
  return a.slice(0, 2).map(x => `<span>${x}</span>`).join('');
}
function badgeHtml(p) {
  if (p.badge === 'sale') return '<span class="pcard__badge b-red">Распродажа</span>';
  if (p.badge === 'hit') return '<span class="pcard__badge b-red">Хит продаж</span>';
  if (p.facets.exp === 'да') return '<span class="pcard__badge b-blue">Взрывозащита</span>';
  if (p.facets.prim) return `<span class="pcard__badge b-blue">${p.facets.prim}</span>`;
  return '<span class="pcard__badge b-green">Новинка</span>';
}
function card(p) {
  return `<article class="pcard" data-id="${p.id}">
    ${badgeHtml(p)}
    <div class="pcard__tools"><button data-fav title="В избранное" aria-label="В избранное">${svg('heart', 16)}</button><button data-cmp title="К сравнению" aria-label="К сравнению">${svg('compare', 16)}</button></div>
    <a class="pcard__media" href="#/product/${p.id}"><span class="pcard__brand">${p.brand}</span>${svg(catBy(p.cat).icon, 96)}<div class="pcard__pills">${pills(p)}</div></a>
    <div class="pcard__dots"><i class="on"></i><i></i><i></i></div>
    <a class="pcard__name" href="#/product/${p.id}">${p.name}</a>
    <div class="pcard__rev"><a href="#/product/${p.id}">${p.reviews} отзывов</a>${stars(p.rating)}</div>
    <hr class="pcard__div">
    <div class="pcard__plabel">${priceLabel(p)}</div>
    <div class="pcard__price"><b class="tnum">${fmt(p.price)}</b>${p.oldPrice ? `<span class="old tnum">${fmt(p.oldPrice)}</span>` : ''}</div>
    ${p.discount ? `<div class="pcard__disc"><span class="pct">−${p.discount}%</span><span class="save">экономия ${p.save}₽</span></div>` : ''}
    <div class="pcard__stockline"><span class="dot dot--${p.stock}"></span>${p.stock === 'in' ? 'В наличии' : 'Под заказ'} · ${p.delivery}</div>
    <div class="pcard__links"><a role="button" tabindex="0" data-1c="${p.id}">Купить в 1 клик</a><a role="button" tabindex="0" data-kp="${p.id}">Купить оптом</a></div>
    <div class="pcard__buy"><div class="qty"><button data-qm aria-label="Меньше">−</button><span>1</span><button data-qp aria-label="Больше">+</button></div><button class="btn btn--blue btn--sm" data-add="${p.id}">${svg('cart', 16)} В корзину</button></div>
  </article>`;
}

/* ---------- ГЛАВНАЯ ---------- */
const SLIDES = [
  { h: 'Цена снижена', p: 'на кондиционеры Ballu, Royal Thermo, Electrolux', icon: 'climate', bg: 'red' },
  { h: 'Греющий кабель', p: 'саморегулирующийся и резистивный — от 130 ₽/м', icon: 'cable', bg: 'blue' },
  { h: 'Тёплый пол под ключ', p: 'маты, плёнка и кабель + монтаж бригадой', icon: 'floor', bg: 'orange' },
  { h: 'Защита от протечек', p: 'готовые комплекты Neptun и Аквасторож на квартиру', icon: 'drop', bg: 'navy' },
];
function setupPromo() {
  const track = $('#promoTrack'); if (!track) return;
  const dots = [...document.querySelectorAll('#promoDots i')];
  const n = SLIDES.length; let i = 0;
  const go = k => { i = (k + n) % n; track.style.transform = `translateX(-${i * 100}%)`; dots.forEach((d, j) => d.classList.toggle('on', j === i)); };
  const restart = () => { clearInterval(window.__promo); window.__promo = setInterval(() => go(i + 1), 5000); };
  $('#promoPrev').addEventListener('click', () => { go(i - 1); restart(); });
  $('#promoNext').addEventListener('click', () => { go(i + 1); restart(); });
  dots.forEach(d => d.addEventListener('click', () => { go(+d.dataset.slide); restart(); }));
  restart();
}
const TAB_SETS = {
  hit: PRODUCTS.filter(p => p.badge === 'hit'),
  rec: PRODUCTS.filter((p, i) => i % 6 === 2).slice(0, 10),
  new: PRODUCTS.filter((p, i) => i % 8 >= 5).slice(0, 10),
  sale: PRODUCTS.filter(p => p.badge === 'sale'),
};
function renderHome() {
  main().innerHTML = `
  <section class="hero"><div class="wrap"><div class="promo">
    <button class="promo__arrow promo__arrow--prev" id="promoPrev" aria-label="Назад">‹</button>
    <div class="promo__track" id="promoTrack">
      ${SLIDES.map(s => `<div class="pslide promo--${s.bg}"><div class="promo__txt"><h1>${s.h}</h1><p>${s.p}</p></div><div class="promo__img">${svg(s.icon, 240)}</div></div>`).join('')}
    </div>
    <button class="promo__arrow promo__arrow--next" id="promoNext" aria-label="Вперёд">›</button>
    <div class="promo__dots" id="promoDots">${SLIDES.map((s, i) => `<i class="${i === 0 ? 'on' : ''}" data-slide="${i}"></i>`).join('')}</div>
  </div></div></section>

  <section class="section"><div class="wrap"><div class="tiles">
    ${FEATURED.map(f => { const c = catBy(f.slug); return `<a class="tile" href="#/cat/${c.slug}">
      ${c.dev ? '<span class="tile__dev">скоро</span>' : ''}
      <div class="tile__ic ${f.tint}">${svg(f.icon, 28)}</div>
      <h3>${c.name}</h3><p>${c.short}</p>
      <span class="btn btn--blueline btn--sm">Подробнее →</span>
      <div class="tile__art">${svg(f.icon, 200)}</div>
    </a>`; }).join('')}
  </div></div></section>

  <section class="section"><div class="wrap"><a class="bigcta" href="#/cat/greyushchiy-kabel"><b>Ещё больше товаров и предложений в нашем каталоге — жми!</b>${svg('hand', 48)}</a></div></section>

  <section class="section"><div class="wrap"><div class="usp">
    <div class="usp__i">${svg('grid', 34)}<div><b>Всё для обогрева в одном месте</b><p>Заказывайте всё необходимое для дома, квартиры, промышленного или коммерческого объекта.</p></div></div>
    <div class="usp__i">${svg('headset', 34)}<div><b>Лучшие эксперты</b><p>Менеджеры досконально разбираются в продукции и помогут подобрать решение по оптимальной цене.</p></div></div>
    <div class="usp__i">${svg('truck', 34)}<div><b>Доставка без границ</b><p>Привезём товар в любую точку России и даже за рубеж в кратчайшие сроки.</p></div></div>
  </div></div></section>

  <section class="section"><div class="wrap">
    <div class="ptabs">
      <button class="ptab" data-tab="hit" aria-pressed="true">Хит продаж</button>
      <button class="ptab" data-tab="rec" aria-pressed="false">Рекомендуем</button>
      <button class="ptab" data-tab="new" aria-pressed="false">Новинки</button>
      <button class="ptab ptab--sale" data-tab="sale" aria-pressed="false">Распродажа</button>
    </div>
    <div class="prodgrid" id="tabgrid">${TAB_SETS.hit.slice(0, 10).map(card).join('')}</div>
  </div></section>

  <section class="section"><div class="wrap"><div class="about">
    <div class="about__img">${svg('house', 240)}</div>
    <div>
      <h2>Работаем на рынке бытового и промышленного обогрева с 2010 года</h2>
      <p class="about__lead"><b>Сфера деятельности</b> — оптово-розничные продажи товаров для бытового и промышленного обогрева. Более 1 млн довольных покупателей и 1000 постоянных юридических лиц.</p>
      <div class="about__cols">
        <div><h4>Статус</h4><p>Производственная компания: тёплые полы и греющий кабель, более 15 000 товаров в месяц.</p></div>
        <div><h4>Услуги</h4><p>Проектирование и монтаж систем электрообогрева, более 500 объектов по России.</p></div>
        <div><h4>Партнёрская сеть</h4><p>DIY-гипермаркеты, проектные организации, маркетплейсы, дизайнеры, монтажники.</p></div>
        <div style="display:flex;align-items:flex-end"><a class="about__more" href="#/">Подробнее о нас →</a></div>
      </div>
    </div>
  </div></div></section>

  <section class="section"><div class="wrap"><div class="sechead"><h2>Блог и новости</h2></div><div class="blog">
    ${NEWS.slice(0, 3).map(b => `<article class="bcard"><a class="bcard__img" href="#/page/blog"><img src="${b.img}" alt="${b.title}" loading="lazy"></a><div class="bcard__b"><span class="bcard__date">${b.date}</span><h3>${b.title}</h3><a class="btn btn--ghost btn--sm" href="#/page/blog">Читать далее</a></div></article>`).join('')}
  </div></div></section>

  <section class="section"><div class="wrap"><div class="qcta">
    <div class="qcta__l">
      <h2>Остались вопросы?</h2><p>Наши эксперты подберут лучшее решение под вашу задачу!</p>
      <form class="qcta__form" data-leadform>
        <input type="text" placeholder="Укажите ваше ФИО" required><input type="tel" placeholder="Номер телефона" required>
        <button class="btn btn--blue" type="submit">Получить консультацию бесплатно</button>
        <span class="qcta__note">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных. (демо-прототип)</span>
      </form>
    </div>
    <div class="qcta__r"><span class="pill">⏱ Отвечаем в течение 5 минут!</span><span class="pill">⏱ Эксперты с опытом от 10 лет</span><span class="pill">⏱ Оперативная доставка по всей России</span></div>
  </div></div></section>`;
  main().querySelectorAll('.ptab').forEach(t => t.addEventListener('click', () => {
    main().querySelectorAll('.ptab').forEach(x => x.setAttribute('aria-pressed', 'false'));
    t.setAttribute('aria-pressed', 'true');
    const set = (TAB_SETS[t.dataset.tab] || []).slice(0, 10);
    $('#tabgrid').innerHTML = set.length ? set.map(card).join('') : '<div class="empty" style="grid-column:1/-1">Нет товаров</div>';
    bindCards();
  }));
  main().querySelector('[data-leadform]').addEventListener('submit', e => { e.preventDefault(); e.target.reset(); toast('Заявка принята — перезвоним за 5 минут'); });
  setupPromo();
  bindCards();
}

/* ---------- КАТЕГОРИЯ ---------- */
function renderCategory(slug) {
  const cat = catBy(slug); if (!cat) { location.hash = ''; return; }
  const products = byCat(slug);
  const brands = [...new Set(products.map(p => p.brand))];
  const facets = [{ key: 'brand', label: 'Бренд', type: 'options', options: brands }, ...FACETS[cat.group], { key: 'price', label: 'Цена', type: 'range' }];
  main().innerHTML = `
  <section class="section"><div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a> / <a href="#/">Каталог</a> / <span>${cat.name}</span></div>
    <div class="sechead"><h2>${cat.name}${cat.dev ? ' <span class="tile__dev" style="position:static">в разработке</span>' : ''}</h2><p>${cat.short}</p></div>
    ${cat.feed ? `<p class="muted" style="font-size:var(--text-sm);margin:-8px 0 16px">⚙ Раздел синхронизируется по API с каталогами поставщиков.</p>` : ''}
    <div class="chips">${cat.subs.map(s => `<button class="chip" type="button">${s}</button>`).join('')}</div>
    <div class="catalog">
      <aside class="filters"><div class="filters__head"><b>Фильтры</b><button type="button" id="fclear">Сбросить</button></div>${facets.map(f => renderFacet(f, products, cat.group)).join('')}</aside>
      <div>
        <div class="toolbar"><span class="toolbar__count" id="fcount">${products.length} ${plural(products.length)}</span>
          <select id="fsort"><option value="def">по умолчанию</option><option value="cheap">сначала дешевле</option><option value="exp">сначала дороже</option><option value="stock">сначала в наличии</option></select></div>
        <div class="prodgrid" id="plist">${products.map(card).join('')}</div>
      </div>
    </div>
  </div></section>`;
  main().querySelectorAll('.fopt input').forEach(inp => inp.addEventListener('change', () => applyFilters(facets, cat.group)));
  $('#fsort').addEventListener('change', () => applyFilters(facets, cat.group));
  $('#fclear').addEventListener('click', () => { main().querySelectorAll('.fopt input').forEach(i => i.checked = false); applyFilters(facets, cat.group); });
  main().querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { const on = c.getAttribute('aria-pressed') === 'true'; main().querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', 'false')); c.setAttribute('aria-pressed', on ? 'false' : 'true'); }));
  bindCards();
}
function bucketLabel(key, v, group) {
  if (key === 'price') return v <= 2000 ? 'до 2 000 ₽' : v <= 10000 ? '2 000–10 000 ₽' : 'от 10 000 ₽';
  if (key === 'wt' && group === 'cable') return v <= 18 ? '≤ 18 Вт/м' : v <= 30 ? '19–30 Вт/м' : '> 30 Вт/м';
  if (key === 'wt' && group === 'floor') return v < 150 ? '< 150 Вт/м²' : v <= 170 ? '150–170 Вт/м²' : '> 170 Вт/м²';
  if (key === 'area') return v <= 2 ? '≤ 2 м²' : v <= 5 ? '2–5 м²' : '> 5 м²';
  return String(v);
}
function labelOf(p, facet, group) {
  if (facet.key === 'brand') return p.brand;
  if (facet.key === 'price') return bucketLabel('price', p.price);
  const v = p.facets[facet.key]; if (v === undefined || v === null || v === '') return null;
  if (facet.type === 'range') return bucketLabel(facet.key, v, group);
  return String(v);
}
function renderFacet(facet, products, group) {
  const counts = {}; products.forEach(p => { const l = labelOf(p, facet, group); if (l) counts[l] = (counts[l] || 0) + 1; });
  let labels = Object.keys(counts); if (!labels.length) return '';
  const order = ['до 2 000 ₽','2 000–10 000 ₽','от 10 000 ₽','≤ 18 Вт/м','19–30 Вт/м','> 30 Вт/м','< 150 Вт/м²','150–170 Вт/м²','> 170 Вт/м²','≤ 2 м²','2–5 м²','> 5 м²'];
  labels.sort((a, b) => (order.indexOf(a) - order.indexOf(b)) || a.localeCompare(b, 'ru'));
  return `<div class="fgroup"><b>${facet.label}</b>${labels.map(l => `<label class="fopt"><input type="checkbox" data-key="${facet.key}" value="${l}"> ${l} <span class="n">${counts[l]}</span></label>`).join('')}</div>`;
}
function applyFilters(facets, group) {
  const sel = {}; main().querySelectorAll('.fopt input:checked').forEach(i => { const k = i.dataset.key; (sel[k] = sel[k] || new Set()).add(i.value); });
  let list = byCat(catBySlugFromHash()).filter(p => facets.every(f => { const s = sel[f.key]; if (!s || !s.size) return true; const l = labelOf(p, f, group); return l !== null && s.has(l); }));
  const sort = $('#fsort').value;
  if (sort === 'cheap') list.sort((a, b) => a.price - b.price); else if (sort === 'exp') list.sort((a, b) => b.price - a.price);
  else if (sort === 'stock') list.sort((a, b) => (a.stock === 'in' ? 0 : 1) - (b.stock === 'in' ? 0 : 1));
  $('#fcount').textContent = `${list.length} ${plural(list.length)}`;
  $('#plist').innerHTML = list.length ? list.map(card).join('') : `<div class="empty" style="grid-column:1/-1">Ничего не найдено. Сбросьте часть фильтров.</div>`;
  bindCards();
}
function plural(n) { const a = n % 10, b = n % 100; return (a === 1 && b !== 11) ? 'товар' : (a >= 2 && a <= 4 && (b < 10 || b >= 20)) ? 'товара' : 'товаров'; }
function years(n) { const a = n % 10, b = n % 100; const w = (a === 1 && b !== 11) ? 'год' : (a >= 2 && a <= 4 && (b < 10 || b >= 20)) ? 'года' : 'лет'; return n + ' ' + w; }
const COUNTRY = { Devi: 'Дания', Raychem: 'США', Nexans: 'Норвегия', Lavita: 'Республика Корея', Thermo: 'Швеция', Electrolux: 'Венгрия', Ballu: 'Китай', Daikin: 'Япония', 'Royal Clima': 'Италия', Energy: 'Великобритания' };
function catBySlugFromHash() { const m = location.hash.match(/#\/cat\/([\w-]+)/); return m ? m[1] : ''; }

/* ---------- СТРАНИЦА ТОВАРА ---------- */
function renderProduct(id) {
  const p = PRODUCTS.find(x => x.id === id); if (!p) { location.hash = ''; return; }
  const cat = catBy(p.cat), f = p.facets;
  const rows = [];
  if (f.wt) rows.push(['Мощность', `${f.wt} Вт/м${cat.group === 'floor' ? '²' : ''}`]);
  if (f.prim) rows.push(['Назначение', f.prim]);
  if (f.area) rows.push(['Площадь обогрева', `${f.area} м²`]);
  if (f.type) rows.push(['Тип', f.type]);
  if (f.tk) rows.push(['Температурный класс', f.tk]);
  if (f.exp === 'да') rows.push(['Взрывозащита', 'есть']);
  if (f.func) rows.push(['Функции', f.func]);
  if (f.ctrl) rows.push(['Управление', f.ctrl]);
  rows.push(['Бренд', p.brand]);
  rows.push(['Страна производства', COUNTRY[p.brand] || 'Россия']);
  const mp = []; // pills-circles
  if (f.tk) mp.push(f.tk); else if (f.type) mp.push(f.type.slice(0, 8));
  if (f.wt) mp.push(`Мощность ${f.wt} Вт/м${cat.group === 'floor' ? '²' : ''}`);
  const variants = cat.group === 'cable' ? ['16-2','24-2','30-2','16-2 CR','24-2 CR'] : null;
  const related = byCat(p.cat).filter(x => x.id !== p.id).slice(0, 5);
  main().innerHTML = `
  <section class="section"><div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a> / <a href="#/">Каталог</a> / <a href="#/cat/${cat.slug}">${cat.name}</a> / <span>${p.name}</span></div>
    <div class="pp__head"><h1>${p.name}</h1></div>
    <div class="pp__actions">
      <a role="button" tabindex="0" data-cmp>${svg('compare', 18)} Сравнить</a>
      <a role="button" tabindex="0" data-fav>${svg('heart', 18)} В избранное</a>
      <a role="button" tabindex="0" data-q>${svg('question', 18)} Задать вопрос</a>
      <a role="button" tabindex="0" data-share>${svg('share', 18)} Поделиться</a>
      <a class="disc" role="button" tabindex="0" data-disc>% Хочу скидку!</a>
    </div>
    <div class="pp__grid">
      <div class="pp__gallery">
        <div class="pp__thumbs">${[0,1,2,3].map(i => `<div class="pp__thumb ${i===0?'on':''}">${svg(cat.icon, 30)}</div>`).join('')}</div>
        <div class="pp__main">
          <div class="pp__mbadges">${p.badge === 'sale' ? '<span>Распродажа</span>' : ''}<span>Оптовые цены — B2B</span></div>
          ${svg(cat.icon, 160)}
          <div class="pp__mpills">${mp.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      </div>
      <div class="pp__specs">
        <div class="pp__brand"><span class="bx">${svg(cat.icon, 24)}</span><b>${p.brand}</b></div>
        ${variants ? `<div class="pp__model"><span>Модель</span><div class="pp__variants">${variants.map((v, i) => `<button class="vbtn" aria-pressed="${i===1?'true':'false'}">${v}</button>`).join('')}</div></div>` : ''}
        ${rows.map(r => `<div class="specrow"><span class="k">${r[0]}</span><span class="led"></span><span class="v">${r[1]}</span></div>`).join('')}
        <span class="pp__allspecs" role="button" tabindex="0" data-allspecs>Все характеристики ›</span>
      </div>
      <aside class="pp__buy">
        <div class="pp__buytop"><div><div class="pp__bprice tnum">${fmt(p.price)}</div><div class="pp__bunit">${unitWord(p)}</div>${p.oldPrice ? `<div class="pp__bnote">Цена без скидки <s>${fmt(p.oldPrice)}</s></div>` : '<div class="pp__bnote">Цена без учёта скидки</div>'}</div><div class="pp__bstock">● ${p.stock === 'in' ? 'В наличии' : 'Под заказ'}</div></div>
        <div class="pp__bqty"><div class="qty"><button data-qm aria-label="Меньше">−</button><span>1</span><button data-qp aria-label="Больше">+</button></div><span class="muted" style="font-size:var(--text-sm)">${cat.unit}</span></div>
        <button class="btn btn--blue btn--block" data-add="${p.id}">${svg('cart', 18)} В корзину</button>
        <button class="btn btn--blueline btn--block" data-kp="${p.id}">Купить оптом</button>
        <button class="btn btn--yellow btn--block" data-mail="${p.id}">Оставить заявку на почту</button>
        <div class="pp__deliv">
          <h4>Информация о доставке</h4>
          <div class="pp__delivrow">${svg('pin', 20)}<div><b>Самовывоз:</b> сегодня<a>Список магазинов самовывоза</a></div></div>
          <div class="pp__delivrow">${svg('truck', 20)}<div><b>Курьером:</b> бесплатно, завтра<a>В вашем городе</a></div></div>
          <div class="pp__delivrow">${svg('box', 20)}<div><b>Пункты выдачи:</b> от 1 дня<a>Более 10 000 по всей России</a></div></div>
        </div>
      </aside>
    </div>
    <div class="pp__trust">
      <div class="i">${svg('cert', 28)}<div><b>Продукция сертифицирована</b><small>Предоставляем полный пакет документов</small></div></div>
      <div class="i">${svg('headset', 28)}<div><b>Профессиональная консультация</b><small>Расчёт и подбор аналогов</small></div></div>
      <div class="i">${svg('truck', 28)}<div><b>Оперативная доставка</b><small>По всей России и СНГ до двери</small></div></div>
    </div>
    <div class="pp__sec pp__desc"><h2>Описание</h2>
      <p>${p.name} — продукция бренда ${p.brand}. ${cat.short}. Применяется для бытового и промышленного обогрева, поставляется со склада в Санкт-Петербурге.</p>
      <p class="muted">Это демо-прототип: описание и характеристики приведены для примера, в проде приедут по API-синхронизации с заводом.</p>
    </div>
    <div class="pp__sec" id="allspecs"><h2>Характеристики</h2>
      <table class="pp__spectable"><tbody>${rows.concat([['Гарантия', years(p.guarantee)],['Наличие', (p.stock === 'in' ? 'В наличии · ' : 'Под заказ · ') + p.delivery]]).map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody></table>
    </div>
    ${related.length ? `<div class="pp__sec"><h2>С этим берут</h2><div class="prodgrid">${related.map(card).join('')}</div></div>` : ''}
  </div></section>`;
  // events
  main().querySelectorAll('.vbtn').forEach(b => b.addEventListener('click', () => { main().querySelectorAll('.vbtn').forEach(x => x.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', 'true'); }));
  main().querySelectorAll('.pp__thumb').forEach(t => t.addEventListener('click', () => { main().querySelectorAll('.pp__thumb').forEach(x => x.classList.remove('on')); t.classList.add('on'); }));
  const q = main().querySelector('[data-q]'); if (q) q.addEventListener('click', () => openForm('Задать вопрос', 'Задайте вопрос о товаре — менеджер ответит в течение 5 минут.'));
  const disc = main().querySelector('[data-disc]'); if (disc) disc.addEventListener('click', () => openForm('Хочу скидку!', 'Оставьте контакты — предложим персональную цену на этот товар.', 'Получить скидку'));
  const mail = main().querySelector('[data-mail]'); if (mail) mail.addEventListener('click', () => openForm('Заявка на почту', 'Пришлём счёт и КП на email. Удобно для юрлиц.', 'Отправить'));
  const all = main().querySelector('[data-allspecs]'); if (all) all.addEventListener('click', () => $('#allspecs').scrollIntoView({ behavior: 'smooth' }));
  main().querySelectorAll('[data-share]').forEach(b => b.addEventListener('click', () => toast('Ссылка скопирована')));
  bindCards();
}

/* ---------- КОНТЕНТНЫЕ СТРАНИЦЫ ---------- */
function ic(name) { return `<div class="infocard"><h3>${svg(name[0], 20)} ${name[1]}</h3><p>${name[2]}</p></div>`; }
function renderPage(slug) {
  const casesHtml = CASES.map(c => `<div class="case"><div class="case__tag">${c.tag}</div><h3>${c.obj}</h3><p>${c.task}</p><div class="case__nums">${c.num.map(n => `<div><b class="tnum">${n[0]}</b><span>${n[1]}</span></div>`).join('')}</div></div>`).join('');
  const PAGES = {
    about: {
      title: 'О компании', body: `
      <p class="page__lead">Brand logo — поставщик отопительного электрооборудования с 2010 года. Оптово-розничные продажи товаров для бытового и промышленного обогрева, проектирование и монтаж систем электрообогрева «под ключ». Более 1 млн довольных покупателей и 1000 постоянных юридических лиц.</p>
      <div class="page__cols">
        ${ic(['cert', 'Статус', 'Производственная компания: выпускаем тёплые полы и комплекты греющего кабеля, более 15 000 товаров в месяц.'])}
        ${ic(['headset', 'Услуги', 'Проектирование и монтаж систем электрообогрева — более 500 объектов по России и 100+ на постоянном обслуживании.'])}
        ${ic(['truck', 'Партнёрская сеть', 'DIY-гипермаркеты, проектные организации, маркетплейсы, дизайнеры, монтажные организации и частные мастера.'])}
        ${ic(['shield', 'Гарантии', 'Официальный дистрибьютор ведущих брендов, полный пакет документов, гарантия на товар от 2 лет и до 3 лет на монтаж.'])}
      </div>
      <h2>Реализованные объекты</h2><div class="cases">${casesHtml}</div>` },
    blog: {
      title: 'Блог и новости', body: `
      <p class="page__lead">Новости компании, акции и полезные материалы об обогреве.</p>
      <div class="blog">${NEWS.map(b => `<article class="bcard"><div class="bcard__img"><img src="${b.img}" alt="${b.title}" loading="lazy"></div><div class="bcard__b"><span class="bcard__date">${b.date}</span><h3>${b.title}</h3><p class="muted" style="font-size:var(--text-sm)">${b.excerpt}</p><span class="btn btn--ghost btn--sm">Читать далее</span></div></article>`).join('')}</div>` },
    reviews: {
      title: 'Отзывы', body: `
      <p class="page__lead">Что говорят наши клиенты. Рейтинг организации на Яндекс.Картах — 4,9.</p>
      <div class="reviews-list">${REVIEWS.map(r => `<div class="reviewcard"><div class="reviewcard__top"><div><b>${r.name}</b><span class="reviewcard__role">${r.role}</span></div><span class="reviewcard__date">${r.date}</span></div>${stars(r.rating)}<p class="reviewcard__text">${r.text}</p></div>`).join('')}</div>` },
    b2b: {
      title: 'Оптовикам и монтажным компаниям', body: `
      <p class="page__lead">Спеццены с первого заказа. Работаем с юрлицами по безналу с НДС, даём отсрочку платежа.</p>
      <div class="page__cols">
        ${ic(['headset', 'Персональный менеджер', 'Закреплённый специалист, подбор оборудования и аналогов под объект.'])}
        ${ic(['ruble', 'Отсрочка и спеццены', 'Гибкие условия для постоянных клиентов, цены ниже розницы с первого заказа.'])}
        ${ic(['cert', 'КП за час', 'Готовим коммерческое предложение и счёт в течение часа, удобно для тендеров.'])}
        ${ic(['truck', 'Доставка по РФ и СНГ', 'Отгрузка транспортными компаниями в любую точку России и за рубеж.'])}
      </div>
      <h2>Запросить КП</h2>
      <div class="leadcard"><div><b style="font-family:var(--font-display);font-size:var(--text-lg)">Оставьте заявку</b><p class="muted">Подготовим прайс и КП по оптовым ценам под ваш список.</p></div>
        <form class="miniform" data-quickform><input type="text" placeholder="Компания / ваше имя" required><input type="tel" placeholder="Телефон" required><button class="btn btn--blue btn--block" type="submit">Получить КП</button><span class="formnote">Демо-прототип: данные никуда не отправляются.</span></form></div>` },
    delivery: {
      title: 'Доставка', body: `
      <p class="page__lead">Доставляем по Санкт-Петербургу, России и СНГ. Самовывоз со склада — в день заказа.</p>
      <div class="page__cols">
        ${ic(['pin', 'Самовывоз', 'Сегодня со склада в Санкт-Петербурге. Список точек самовывоза — по запросу.'])}
        ${ic(['truck', 'Курьером по СПб', 'Бесплатно от 10 000 ₽, доставка на следующий день в удобный интервал.'])}
        ${ic(['box', 'Пункты выдачи', 'Более 10 000 ПВЗ по всей России, срок от 1 дня.'])}
        ${ic(['cert', 'Транспортные компании', 'Отгрузка по России и за рубеж любой ТК на выбор клиента.'])}
      </div>` },
    payment: {
      title: 'Оплата', body: `
      <p class="page__lead">Удобные способы оплаты для физических лиц и организаций.</p>
      <div class="page__cols">
        ${ic(['card', 'Банковской картой', 'Онлайн на сайте или картой при получении заказа.'])}
        ${ic(['ruble', 'Наличными', 'При самовывозе или курьеру в момент получения.'])}
        ${ic(['cert', 'Безналичный расчёт', 'Для юрлиц — оплата по счёту с НДС, полный пакет документов.'])}
        ${ic(['shield', 'Рассрочка', 'Рассрочка и кредит через банки-партнёры на крупные заказы.'])}
      </div>` },
    contacts: {
      title: 'Контакты', body: `
      <p class="page__lead">Свяжитесь с нами любым удобным способом — ответим в течение 5 минут.</p>
      <div class="contactgrid">
        <div>
          <div class="contact-line">${svg('pin', 22)}<div><b>Адрес</b><span>Санкт-Петербург, пр. Энгельса, 107</span></div></div>
          <div class="contact-line">${svg('phone', 22)}<div><b>Телефоны</b><span>+7 (812) 703-83-55 · +7 (495) 789-05-78 · +7 (800) 770-77-50</span></div></div>
          <div class="contact-line">${svg('mail', 22)}<div><b>E-mail</b><span>info@brand.ru</span></div></div>
          <div class="contact-line">${svg('clock', 22)}<div><b>Режим работы</b><span>Пн–Сб 9:00–20:00</span></div></div>
          <form class="miniform" data-quickform style="margin-top:var(--space-12)"><input type="text" placeholder="Ваше имя" required><input type="tel" placeholder="Телефон" required><button class="btn btn--blue btn--block" type="submit">Заказать звонок</button><span class="formnote">Демо-прототип: данные никуда не отправляются.</span></form>
        </div>
        <div class="mapph">${svg('pin', 48)}<span style="margin-top:8px">Карта (демо)</span></div>
      </div>` },
  };
  const p = PAGES[slug];
  if (!p) { location.hash = ''; return; }
  main().innerHTML = `<section class="section"><div class="wrap page">
    <div class="crumbs"><a href="#/">Главная</a> / <span>${p.title}</span></div>
    <h1>${p.title}</h1>
    ${p.body}
  </div></section>`;
  main().querySelectorAll('[data-quickform]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); e.target.reset(); toast('Заявка принята — менеджер свяжется с вами'); }));
  bindCards();
}

/* ---------- УСЛУГИ ---------- */
function renderServices() {
  main().innerHTML = `
  <section class="section"><div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a> / <span>Услуги монтажа</span></div>
    <div class="sechead"><h2>Проектирование и монтаж «под ключ»</h2><p>Выезд → расчёт → поставка → монтаж → гарантия. Бесплатный замер по СПб и ЛО.</p></div>
    <div class="srv">${SERVICES.map(s => `<div class="srvcard"><div class="srvcard__top"><div class="srvcard__ic">${svg(s.icon, 24)}</div><div><h3>${s.name}</h3><span class="srvcard__from">${s.from}</span></div></div><p class="muted" style="font-size:var(--text-sm)">${s.lead}</p><ol class="steps">${s.steps.map(x => `<li>${x}</li>`).join('')}</ol><div class="srvcard__foot"><span class="warranty-pill">${s.guarantee}</span><button class="btn btn--blue btn--sm" data-lead="${s.slug}">Бесплатный замер</button></div></div>`).join('')}</div>
  </div></section>
  <section class="section"><div class="wrap"><div class="leadcard"><div><h2>Оставьте заявку — инженер перезвонит за 5 минут</h2><p class="muted">Рассчитаем мощность, подберём оборудование и согласуем дату бесплатного замера.</p></div>
    <form class="miniform" data-leadform><input type="text" placeholder="Ваше имя" required><input type="tel" placeholder="Телефон" required><button class="btn btn--blue btn--block" type="submit">Отправить заявку</button><span class="formnote">Демо-прототип: данные никуда не отправляются.</span></form>
  </div></div></section>
  <section class="section"><div class="wrap"><div class="sechead"><h2>Объекты с цифрами</h2></div><div class="cases">${CASES.map(c => `<div class="case"><div class="case__tag">${c.tag}</div><h3>${c.obj}</h3><p>${c.task}</p><div class="case__nums">${c.num.map(n => `<div><b class="tnum">${n[0]}</b><span>${n[1]}</span></div>`).join('')}</div></div>`).join('')}</div></div></section>`;
  main().querySelectorAll('[data-lead]').forEach(b => b.addEventListener('click', () => openForm('Бесплатный замер', 'Инженер приедет, замерит объект и рассчитает стоимость. Бесплатно и ни к чему не обязывает.')));
  main().querySelector('[data-leadform]').addEventListener('submit', e => { e.preventDefault(); e.target.reset(); toast('Заявка принята — перезвоним за 5 минут'); });
}

/* ---------- формы (модалка только для форм) ---------- */
function openForm(title, note, cta = 'Отправить') {
  $('#modalbody').innerHTML = `<button class="modal__close" data-close aria-label="Закрыть">✕</button>
  <div style="padding:var(--space-24)"><h2 style="font-size:var(--text-xl);margin-bottom:6px">${title}</h2><p class="muted" style="font-size:var(--text-sm);margin-bottom:16px">${note}</p>
  <form class="miniform" data-quickform><input type="text" placeholder="Ваше имя" required><input type="tel" placeholder="Телефон" required><button class="btn btn--blue btn--block" type="submit">${cta}</button><span class="formnote">Демо-прототип: данные никуда не отправляются.</span></form></div>`;
  $('#modal').classList.add('open'); $('#scrim').classList.add('open');
  $('#modalbody').querySelector('[data-close]').addEventListener('click', closeModal);
  $('#modalbody').querySelector('[data-quickform]').addEventListener('submit', e => { e.preventDefault(); closeModal(); toast('Заявка принята — менеджер свяжется с вами'); });
}
function closeModal() { $('#modal').classList.remove('open'); if (!$('#drawer').classList.contains('open')) $('#scrim').classList.remove('open'); }

/* ---------- корзина ---------- */
function addToCart(item) { CART.push(item); renderCart(); const c = $('#cartcount'); c.textContent = CART.length; c.style.display = 'grid'; toast('Добавлено в корзину'); }
function renderCart() {
  const body = $('#cartbody');
  if (!CART.length) { body.innerHTML = `<p class="muted" style="text-align:center;padding:var(--space-32) 0">Корзина пуста</p>`; $('#carttotal').textContent = fmt(0); return; }
  body.innerHTML = CART.map((c, i) => `<div class="citem"><div class="citem__ic">${svg(c.icon, 24)}</div><div><b>${c.name}</b><small>${fmt(c.price)}</small></div><button class="citem__rm" data-rm="${i}" aria-label="Убрать">✕</button></div>`).join('');
  $('#carttotal').textContent = fmt(CART.reduce((s, c) => s + c.price, 0));
  body.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => { CART.splice(+b.dataset.rm, 1); renderCart(); $('#cartcount').textContent = CART.length; if (!CART.length) $('#cartcount').style.display = 'none'; }));
}
function openCart() { $('#drawer').classList.add('open'); $('#scrim').classList.add('open'); }
function closeCart() { $('#drawer').classList.remove('open'); if (!$('#modal').classList.contains('open')) $('#scrim').classList.remove('open'); }
function toast(msg) { const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = `${svg('check', 18)} ${msg}`; $('#toasts').appendChild(t); setTimeout(() => t.remove(), 2600); }

/* ---------- делегирование ---------- */
function bindCards(root = main()) {
  root.querySelectorAll('a[role="button"]').forEach(el => el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } }));
  root.querySelectorAll('[data-add]').forEach(el => el.addEventListener('click', () => { const p = PRODUCTS.find(x => x.id === el.dataset.add); addToCart({ name: p.name, price: p.price, icon: catBy(p.cat).icon }); }));
  root.querySelectorAll('[data-1c]').forEach(el => el.addEventListener('click', () => openForm('Купить в 1 клик', 'Оставьте телефон — оформим заказ за вас и перезвоним для подтверждения.', 'Оформить заказ')));
  root.querySelectorAll('[data-kp]').forEach(el => el.addEventListener('click', () => openForm('Купить оптом', 'Для юрлиц: спеццены, отсрочка платежа, безнал с НДС. Подготовим КП в течение часа.', 'Получить КП')));
  root.querySelectorAll('[data-fav],[data-cmp]').forEach(el => el.addEventListener('click', e => { e.stopPropagation(); toast(el.hasAttribute('data-fav') ? 'Добавлено в избранное' : 'Добавлено к сравнению'); }));
  root.querySelectorAll('.qty').forEach(q => { const sp = q.querySelector('span'); q.querySelector('[data-qm]').addEventListener('click', () => sp.textContent = Math.max(1, +sp.textContent - 1)); q.querySelector('[data-qp]').addEventListener('click', () => sp.textContent = +sp.textContent + 1); });
}

/* ---------- роутинг ---------- */
function route() {
  const h = location.hash; window.scrollTo(0, 0);
  clearInterval(window.__promo);
  if (h.startsWith('#/product/')) renderProduct(h.replace('#/product/', ''));
  else if (h.startsWith('#/cat/')) renderCategory(h.replace('#/cat/', ''));
  else if (h.startsWith('#/page/')) renderPage(h.replace('#/page/', ''));
  else if (h.startsWith('#/services')) renderServices();
  else renderHome();
}
function init() {
  buildShell();
  $('#catalogbtn').addEventListener('click', () => $('#mega').classList.toggle('open'));
  document.addEventListener('click', e => { if (!e.target.closest('#mega') && !e.target.closest('#catalogbtn')) $('#mega').classList.remove('open'); });
  $('#mega').addEventListener('click', e => { if (e.target.closest('a')) $('#mega').classList.remove('open'); });
  $('#cartbtn').addEventListener('click', openCart);
  $('#cartclose').addEventListener('click', closeCart);
  $('#scrim').addEventListener('click', () => { closeCart(); closeModal(); });
  $('#cartcount').style.display = 'none';
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeCart(); closeModal(); $('#mega').classList.remove('open'); } });
  renderCart();
  window.addEventListener('hashchange', route);
  route();
}
document.addEventListener('DOMContentLoaded', init);
