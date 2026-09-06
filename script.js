// Load focused visual-polish overrides without changing the existing site structure.
const brandPolish=document.createElement('link');
brandPolish.rel='stylesheet';
brandPolish.href='brand-polish.css?v=1';
document.head.appendChild(brandPolish);

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const before=['× Random posting','× Outdated graphics','× Inconsistent branding','× Weeks without content','× No clear strategy','× Low visibility'];
const after=['✓ Professional content','✓ Consistent branding','✓ Active social presence','✓ Strategic campaigns','✓ Strong calls-to-action','✓ A recognizable business'];
document.querySelectorAll('.compare-switch button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.compare-switch button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const data=btn.dataset.state==='before'?before:after;document.getElementById('compareList').innerHTML=data.map(x=>`<li>${x}</li>`).join('')}));
const menu=document.querySelector('.menu-btn');
menu?.addEventListener('click',()=>{
  const nav=document.querySelector('.desktop-nav');
  const isOpen=nav?.classList.toggle('mobile-open')||false;
  menu.setAttribute('aria-expanded',String(isOpen));
});

// Portfolio filters
const filterButtons=[...document.querySelectorAll('.filter button')];
const projects=[...document.querySelectorAll('.project[data-category]')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const wanted=button.textContent.trim();
  projects.forEach(project=>project.classList.toggle('is-hidden',wanted!=='ALL'&&project.dataset.category!==wanted));
}));

// Close mobile navigation after choosing a section
(document.querySelectorAll('.desktop-nav a')||[]).forEach(link=>link.addEventListener('click',()=>{
  document.querySelector('.desktop-nav')?.classList.remove('mobile-open');
  menu?.setAttribute('aria-expanded','false');
}));
