const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const before=['× Random posting','× Outdated graphics','× Inconsistent branding','× Weeks without content','× No clear strategy','× Low visibility'];
const after=['✓ Professional content','✓ Consistent branding','✓ Active social presence','✓ Strategic campaigns','✓ Strong calls-to-action','✓ A recognizable business'];
document.querySelectorAll('.compare-switch button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.compare-switch button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const data=btn.dataset.state==='before'?before:after;document.getElementById('compareList').innerHTML=data.map(x=>`<li>${x}</li>`).join('')}));
const menu=document.querySelector('.menu-btn');menu?.addEventListener('click',()=>{document.querySelector('.desktop-nav')?.classList.toggle('mobile-open')});

// Strengthen the homepage hero conversion message while preserving the existing design.
const heroEyebrow=document.querySelector('.hero-copy .eyebrow');
const heroMessage=document.querySelector('.hero-copy > p');
if(heroEyebrow) heroEyebrow.textContent='ONTARIO • SOCIAL • CONTENT • DIGITAL MARKETING';
if(heroMessage) heroMessage.textContent='Digital marketing built for growing Ontario businesses. We create the social media, content, websites and campaigns that get your business seen, remembered and chosen.';

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
(document.querySelectorAll('.desktop-nav a')||[]).forEach(link=>link.addEventListener('click',()=>document.querySelector('.desktop-nav')?.classList.remove('mobile-open')));
