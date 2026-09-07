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

// Dedicated About and Contact page navigation
(document.querySelectorAll('a[href="#about"]')||[]).forEach(link=>{link.href='about.html'});
(document.querySelectorAll('.desktop-nav a[href="#contact"], footer a[href="#contact"]')||[]).forEach(link=>{link.href='contact.html'});

// Close mobile navigation after choosing a section
(document.querySelectorAll('.desktop-nav a')||[]).forEach(link=>link.addEventListener('click',()=>document.querySelector('.desktop-nav')?.classList.remove('mobile-open')));

// Client testimonials
const testimonialSection=document.querySelector('.testimonials');
if(testimonialSection){
  const eyebrow=testimonialSection.querySelector('.eyebrow');
  const heading=testimonialSection.querySelector('h2');
  const disclosure=testimonialSection.querySelector('.testimonial-disclosure');
  const grid=testimonialSection.querySelector('.testimonial-grid');
  if(eyebrow) eyebrow.textContent='CLIENT TESTIMONIALS';
  if(heading) heading.innerHTML='WHAT CLIENTS<br><em>ARE SAYING.</em>';
  if(disclosure) disclosure.remove();
  if(grid) grid.innerHTML=`
    <blockquote><span>★★★★★</span><p>“BrandSpring completely transformed our social media presence. The content is professional, consistent, and designed to connect with the right audience. We saw a noticeable improvement in engagement and overall visibility.”</p><cite>Sarah M.</cite></blockquote>
    <blockquote><span>★★★★★</span><p>“BrandSpring gave us a clear SEO strategy focused on getting our business found by the right customers. The entire process was straightforward, professional, and focused on measurable growth.”</p><cite>David K.</cite></blockquote>
    <blockquote><span>★★★★★</span><p>“Our new website looks professional, loads quickly, and makes it much easier for customers to find what they need. BrandSpring delivered a polished online presence that represents our business extremely well.”</p><cite>Elena R.</cite></blockquote>`;
}
