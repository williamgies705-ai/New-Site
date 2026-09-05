const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const before=['× Random posting','× Outdated graphics','× Inconsistent branding','× Weeks without content','× No clear strategy','× Low visibility'];
const after=['✓ Professional content','✓ Consistent branding','✓ Active social presence','✓ Strategic campaigns','✓ Strong calls-to-action','✓ A recognizable business'];
document.querySelectorAll('.compare-switch button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.compare-switch button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const data=btn.dataset.state==='before'?before:after;document.getElementById('compareList').innerHTML=data.map(x=>`<li>${x}</li>`).join('')}));
const menu=document.querySelector('.menu-btn');menu?.addEventListener('click',()=>{document.querySelector('.desktop-nav')?.classList.toggle('mobile-open')});

// Portfolio filters
const filterButtons=[...document.querySelectorAll('.filter button')];
const projects=[...document.querySelectorAll('.project[data-category]')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const wanted=button.textContent.trim();
  projects.forEach(project=>project.classList.toggle('is-hidden',wanted!=='ALL'&&project.dataset.category!==wanted));
}));

// Service-page links for homepage cards
const servicePageLinks={
  '.service-card.service-website':['website-design.html','EXPLORE SERVICE →'],
  '.service-card.service-seo':['seo-local-visibility.html','EXPLORE SERVICE →'],
  '.service-card.service-leads':['paid-social-lead-generation.html','EXPLORE SERVICE →'],
  '.service-card.service-content':['content-creation.html','EXPLORE SERVICE →'],
  '.service-card.service-brand':['brand-development.html','EXPLORE SERVICE →']
};
Object.entries(servicePageLinks).forEach(([selector,[href,label]])=>{
  const card=document.querySelector(selector);
  if(card&&!card.querySelector('.service-link')){
    const link=document.createElement('a');
    link.className='service-link';
    link.href=href;
    link.textContent=label;
    card.appendChild(link);
  }
});

// Close mobile navigation after choosing a section
(document.querySelectorAll('.desktop-nav a')||[]).forEach(link=>link.addEventListener('click',()=>document.querySelector('.desktop-nav')?.classList.remove('mobile-open')));
