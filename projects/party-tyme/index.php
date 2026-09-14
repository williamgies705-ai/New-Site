<?php
$html = file_get_contents(__DIR__ . '/index.html');

// Customer-facing Party Tyme website shell. Keep the full catalog/booking JS from index.html,
// but remove BrandSpring preview/demo language and present it like a real rental website.
$css = <<<'CSS'
<style>
:root{--purple:#51207f;--purple2:#2c0d48;--pink:#f22b92;--cyan:#16c7ec;--yellow:#ffe01b;--ink:#100719;--white:#fff;--soft:#f7f1fa}
*{box-sizing:border-box}body{background:#fff;color:#24102e}.preview,.brand-match-note{display:none!important}
header{position:sticky;top:0;z-index:30;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:10px 5vw;background:#fff;border-bottom:1px solid #eadff0;box-shadow:0 8px 28px #32104d14;min-height:96px}
.site-logo{display:block;width:210px;max-width:32vw}.site-logo img{display:block;width:100%;height:82px;object-fit:contain;object-position:left center}
nav{display:flex;gap:22px;align-items:center}nav a{text-decoration:none;color:#321046;font-weight:900;font-size:12px;letter-spacing:.02em}.cta{display:inline-flex;align-items:center;justify-content:center;padding:13px 18px;border-radius:999px;background:var(--cyan);color:#071018!important;border:3px solid var(--yellow);font-weight:1000;text-decoration:none;box-shadow:0 5px 0 var(--purple);cursor:pointer}.cta:hover{transform:translateY(-1px)}
.hero{min-height:72vh;padding:64px 5vw;display:grid;grid-template-columns:minmax(0,.9fr) minmax(420px,1.1fr);gap:48px;align-items:center;background:linear-gradient(135deg,#32104f 0%,#4c1978 50%,#1a0928 100%);position:relative;overflow:hidden}.hero:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 12% 10%,#f22b9250,transparent 26%),radial-gradient(circle at 88% 18%,#16c7ec40,transparent 25%),radial-gradient(circle at 70% 90%,#ffe01b2b,transparent 20%);pointer-events:none}.hero-copy{position:relative;z-index:2}.hero .tag{display:inline-block;padding:8px 12px;border-radius:999px;background:var(--yellow);color:#2e1042;font-weight:1000;font-size:11px;letter-spacing:.07em}.hero h1{font-size:clamp(52px,7vw,96px);line-height:.88;letter-spacing:-.055em;color:#fff;margin:22px 0}.hero h1 em{font-style:normal;color:var(--cyan);text-shadow:none}.hero p{max-width:650px;color:#f5eefa;font-size:clamp(17px,2vw,23px);line-height:1.45;margin-bottom:26px}
.hero-media{position:relative;z-index:2;aspect-ratio:1/1;min-height:0;border-radius:30px;overflow:hidden;border:6px solid var(--yellow);background:#000;box-shadow:0 30px 80px #0007}.hero-media video,.hero-media img{width:100%;height:100%;display:block;object-fit:cover}.hero-media .fallback{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(145deg,#1c092a,#4f1a79);color:#fff;text-align:center;padding:30px;font-weight:900}.hero-media video{position:relative;z-index:2}
.trust{display:grid;grid-template-columns:repeat(4,1fr);background:#fff;border-bottom:1px solid #eadff0}.trust div{padding:22px;text-align:center;border-right:1px solid #eadff0}.trust strong{display:block;color:var(--purple);font-size:21px}.trust span{font-size:11px;font-weight:800;color:#6c5b73;text-transform:uppercase;letter-spacing:.06em}
section{padding:76px 5vw}.section-head{max-width:820px}.eyebrow{color:var(--pink);font-size:11px;font-weight:1000;letter-spacing:.12em}.section-head h2,h2{font-size:clamp(38px,5vw,68px);line-height:.96;letter-spacing:-.045em;color:#321046}.section-head h2 span,h2 span{color:var(--cyan);text-shadow:none}.lead{color:#6a5a70;font-size:17px;line-height:1.65}
.featured-strip{background:#fff;padding:58px 5vw}.featured-strip h2{margin-top:0}.featured-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px}.featured-card{display:block;text-decoration:none;background:#fff;border:1px solid #eadff0;border-radius:18px;overflow:hidden;box-shadow:0 14px 35px #2d0e4310}.featured-card img{display:block;width:100%;height:190px;object-fit:contain;background:#fff;padding:10px}.featured-card div{padding:14px;color:#321046;font-weight:900}.featured-card small{display:block;color:#74647a;margin-top:4px;font-weight:600}
.booking{background:var(--soft);color:#271134}.booking-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}.panel{background:#fff;border:1px solid #e4d8ea;border-radius:22px;padding:24px;box-shadow:0 14px 35px #2e104211}.panel label{font-weight:900}.catalog-tools{position:sticky;top:96px;z-index:8;background:#fff;padding:14px 0;border-bottom:1px solid #eee2f2}.catalog-tools input{background:#fff;color:#2b103c;border:2px solid #e5d9eb}.filters button{background:#fff;color:#4f3d57;border:1px solid #ddd0e3}.filters button.active{background:var(--purple);color:#fff;border-color:var(--purple)}
.products{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{background:#fff;color:#2a1235;border:1px solid #eadff0;border-radius:20px;padding:20px;box-shadow:0 10px 30px #2e10420e}.card small{color:#8a7691}.card p{color:#6f6175}.price{color:var(--purple)}.card button{background:var(--cyan);color:#071018;border:2px solid var(--yellow);box-shadow:none}
.event-types{background:linear-gradient(135deg,#32104f,#51207f);color:#fff}.event-types h2{color:#fff}.event-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.event-card{padding:24px;border-radius:18px;background:#ffffff12;border:1px solid #ffffff20}.event-card strong{display:block;color:var(--yellow);font-size:20px;margin-bottom:7px}.event-card span{color:#efe5f4;line-height:1.5}
.footer{background:#13071e;color:#dacde1;border-top:5px solid var(--cyan);padding:44px 5vw}.footer b{color:#fff}
@media(max-width:980px){nav a:not(.cta){display:none}.hero{grid-template-columns:1fr}.hero-media{max-width:720px;width:100%;margin:auto}.featured-grid{grid-template-columns:repeat(2,1fr)}.products{grid-template-columns:repeat(2,1fr)}.event-grid{grid-template-columns:repeat(2,1fr)}.booking-grid{grid-template-columns:1fr}.trust{grid-template-columns:repeat(2,1fr)}}
@media(max-width:620px){header{min-height:82px}.site-logo{width:150px}.site-logo img{height:66px}.hero{padding:48px 5vw}.hero-media{border-width:4px;border-radius:20px}.featured-grid,.products,.event-grid{grid-template-columns:1fr}.trust{grid-template-columns:1fr 1fr}.trust div{padding:16px 10px}.catalog-tools{top:82px}}
</style>
CSS;
$html = str_replace('</head>', $css . '</head>', $html);

// Remove project-preview chrome.
$html = str_replace('<div class="preview">BRANDSPRING LIVE PROJECT — PARTY TYME AMUSEMENTS ONLINE BOOKING PLATFORM</div>', '', $html);

// Real logo treatment (no text substitute, no phone number in logo area).
$html = str_replace('<header><div class="brand">PARTY <b>TYME</b></div>', '<header><a class="site-logo" href="#top" aria-label="Party Tyme Amusements home"><img src="party-tyme-logo.svg" alt="Party Tyme Amusements"></a>', $html);

// Real customer navigation.
$html = preg_replace('~<nav>.*?</nav>~s', '<nav><a href="#catalog">ATTRACTIONS</a><a href="#events">EVENT TYPES</a><a href="#booking">BOOK ONLINE</a><a href="#contact">CONTACT</a><a class="cta" href="#booking">CHECK AVAILABILITY</a></nav>', $html, 1);

// Replace demo hero with a clean consumer-facing hero and one full-size video square only.
$html = preg_replace('~<section class="hero">.*?</section><div class="stats">.*?</div></div>~s', '<section class="hero" id="top"><div class="hero-copy"><span class="tag">ONTARIO EVENT RENTALS</span><h1>THE PARTY STARTS<br><em>WHEN WE ARRIVE.</em></h1><p>Professional attractions, inflatables, amusement rides, games and event equipment for festivals, schools, municipalities, corporate events and community celebrations across Ontario.</p><a class="cta" href="#booking">CHECK YOUR DATE →</a></div><div class="hero-media"><div class="fallback">Tubs of Fun<br><span style="font-size:14px;font-weight:700;color:#ddcfea;margin-top:8px">Featured attraction</span></div><video autoplay muted loop playsinline preload="metadata"><source src="media/party-tyme-tubs-of-fun.mp4" type="video/mp4"></video></div></section><div class="trust"><div><strong>$5M</strong><span>Liability Insurance</span></div><div><strong>Ontario-Wide</strong><span>Event Service</span></div><div><strong>Commercial Grade</strong><span>Professional Equipment</span></div><div><strong>TSSA</strong><span>Where Applicable</span></div></div>', $html, 1);

// Make featured items look like normal attraction cards, not a product-demo strip.
$html = str_replace('<section class="featured-strip"><p class="front-note">Featured Party Tyme attractions from the current rental catalog.</p>', '<section class="featured-strip"><div class="section-head"><div class="eyebrow">POPULAR ATTRACTIONS</div><h2>Big attractions for <span>big events.</span></h2><p class="lead">A few customer favourites. Browse the full catalog below for more rides, inflatables, games, concessions and event equipment.</p></div>', $html);

// Booking copy: no mention of previews, production mode or software internals.
$html = str_replace('This BrandSpring preview lets you test the customer booking flow. In production, the same interface connects to Party Tyme\'s actual reservation database and payment processor.', 'Choose your event date, browse the catalog, and build your event online. Our team can help with larger events, custom packages and special requirements.');
$html = str_replace('This BrandSpring preview', 'Party Tyme online booking');
$html = str_replace('Production mode checks actual Party Tyme reservations before showing availability.', 'Availability is checked for your selected event date.');
$html = str_replace('Product descriptions are generated from the product and category in this preview; the production build carries editable descriptions in the backend.', 'Browse attractions by category, search by name, and add items to your event. Contact us if you need help building the right package.');

// Remove developer-facing booking workflow section and replace with customer event types.
$html = preg_replace('~<section class="workflow" id="workflow">.*?</section>~s', '<section class="event-types" id="events"><div class="eyebrow">EVENTS WE SERVE</div><h2>Built for events <span>of every size.</span></h2><div class="event-grid"><div class="event-card"><strong>Corporate Events</strong><span>Employee appreciation days, brand activations, company picnics and large private events.</span></div><div class="event-card"><strong>Municipal & Festivals</strong><span>Professional attractions for community festivals, fairs, celebrations and public events.</span></div><div class="event-card"><strong>Schools</strong><span>Fun fairs, graduation celebrations, fundraising events and family nights.</span></div><div class="event-card"><strong>Holiday Events</strong><span>Trackless trains, seasonal attractions and festive entertainment for winter events.</span></div></div></section>', $html);

// Remove all remaining public-facing preview/developer wording.
$html = str_replace('Preview booking created.', 'Booking request created.');
$html = str_replace('In the production Party Tyme system the customer would now sign the agreement; after signature, availability is re-checked and inventory is reserved for the selected date.', 'Our team will continue the booking process and confirm the details for your event.');
$html = str_replace('Digital platform by <b>BrandSpring.ca</b>', 'Website by <b>BrandSpring.ca</b>');
$html = str_replace('<footer class="footer">', '<footer class="footer" id="contact">');

echo $html;
?>