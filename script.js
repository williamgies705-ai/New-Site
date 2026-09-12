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

// Make Projects a clear public destination in the main navigation.
const mainNav=document.querySelector('.desktop-nav');
if(mainNav){
  const showcaseLink=[...mainNav.querySelectorAll('a')].find(a=>a.getAttribute('href')==='project-showcase.html');
  if(showcaseLink){
    showcaseLink.href='projects.html';
    showcaseLink.textContent='Projects';
  }else if(![...mainNav.querySelectorAll('a')].some(a=>a.getAttribute('href')==='projects.html')){
    const projectLink=document.createElement('a');
    projectLink.href='projects.html';
    projectLink.textContent='Projects';
    mainNav.appendChild(projectLink);
  }

  // Keep the monthly contest visible as a permanent BrandSpring destination.
  if(![...mainNav.querySelectorAll('a')].some(a=>a.getAttribute('href')==='monthly-contest.html')){
    const contestLink=document.createElement('a');
    contestLink.href='monthly-contest.html';
    contestLink.textContent='Monthly Contest';
    const blogLink=[...mainNav.querySelectorAll('a')].find(a=>a.getAttribute('href')==='blog.html');
    if(blogLink) blogLink.before(contestLink); else mainNav.appendChild(contestLink);
  }
}

// Add the homepage live-project collaboration message without replacing existing content.
if(document.querySelector('main#top')&&!document.getElementById('projects-live')){
  const projectsSection=document.createElement('section');
  projectsSection.id='projects-live';
  projectsSection.className='services white-section';
  projectsSection.innerHTML=`
    <div class="eyebrow dark">OUR PROJECTS</div>
    <h2 class="reveal visible">WATCH YOUR WEBSITE<br><em>COME TO LIFE.</em></h2>
    <div class="section-copy reveal visible" style="max-width:900px;margin:0 0 2.5rem;">
      <p>With BrandSpring, you don't have to wonder what is happening behind the scenes. Your project can be published to a live preview while we build it, so you can watch your website take shape, review the latest updates, and request changes as we go.</p>
      <p>See real BrandSpring projects currently being built and refined on our platform.</p>
      <a class="pill lime" href="projects.html">VIEW OUR LIVE PROJECTS</a>
    </div>`;
  const processSection=document.getElementById('process');
  if(processSection) processSection.before(projectsSection);
}

// Promote the BrandSpring Monthly Contest on the homepage.
if(document.querySelector('main#top')&&!document.getElementById('monthly-contest-home')){
  const contestSection=document.createElement('section');
  contestSection.id='monthly-contest-home';
  contestSection.className='dark-section';
  contestSection.style.cssText='padding:5rem 7vw;text-align:center;position:relative;overflow:hidden;';
  contestSection.innerHTML=`
    <div style="max-width:980px;margin:0 auto;">
      <div class="eyebrow" style="color:#d6ff36;">BRANDSPRING MONTHLY CONTEST</div>
      <h2 class="reveal visible" style="font-family:Roboto Condensed,Arial,sans-serif;font-size:clamp(2.8rem,6vw,5.5rem);line-height:.95;margin:.8rem 0 1.2rem;color:#fff;">YOUR BUSINESS<br>COULD <em style="color:#d6ff36;font-style:normal;">WIN.</em></h2>
      <p style="max-width:760px;margin:0 auto 2rem;color:#ddd;font-size:1.1rem;line-height:1.7;">Every month, BrandSpring gives an Ontario business the chance to win a digital-marketing prize designed to help it get seen. Follow us on Facebook for the current contest, entry details and winner announcement.</p>
      <a class="pill lime" href="monthly-contest.html">SEE THIS MONTH'S CONTEST</a>
    </div>`;
  const projectsSection=document.getElementById('projects-live');
  const processSection=document.getElementById('process');
  if(projectsSection) projectsSection.before(contestSection); else if(processSection) processSection.before(contestSection);
}

const heroWorkButton=document.querySelector('.hero-buttons .pill.outline');
if(heroWorkButton&&heroWorkButton.getAttribute('href')==='#work'){
  heroWorkButton.href='#projects-live';
  heroWorkButton.textContent='SEE OUR PROJECTS';
}

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
(document.querySelectorAll('.desktop-nav a')||[]).forEach(link=>link.addEventListener('click',()=>{
  document.querySelector('.desktop-nav')?.classList.remove('mobile-open');
  menu?.setAttribute('aria-expanded','false');
}));

// Competitive BrandSpring social-media packages.
const priceCards=[...document.querySelectorAll('#pricing .price-card')];
if(priceCards.length>=3){
  priceCards[0].innerHTML=`<small>STARTER</small><div class="price">$447<span>/month</span></div><p>For businesses that want a professional, consistent social presence without adding more to their plate.</p><ul><li>12 professionally created posts per month</li><li>Facebook + Instagram</li><li>Branded graphics and caption writing</li><li>Local hashtags & keyword direction</li><li>Scheduling & publishing</li><li>Monthly content calendar</li><li>Monthly performance summary</li></ul><a class="pill lime" href="#contact">GET STARTED</a>`;
  priceCards[1].innerHTML=`<div class="badge">MOST POPULAR</div><small>GROWTH</small><div class="price">$897<span>/month</span></div><p>For businesses ready for more frequent content, stronger visibility and more active social management.</p><ul><li>Everything in Starter, plus:</li><li>20 professionally created posts per month</li><li>4 reels / short-form videos per month</li><li>4 stories per month</li><li>Up to 3 social platforms</li><li>Basic engagement & community management</li><li>Monthly strategy check-in</li><li>Enhanced performance reporting</li></ul><a class="pill lime" href="#contact">GET STARTED</a>`;
  priceCards[2].innerHTML=`<small>PRO</small><div class="price">$1,697<span>/month</span></div><p>For businesses that want BrandSpring to take a much more active role in running and growing their social presence.</p><ul><li>Everything in Growth, plus:</li><li>28 professionally created posts per month</li><li>8 reels / short-form videos per month</li><li>8 stories per month</li><li>Up to 4 social platforms</li><li>Active engagement & community management</li><li>Monthly social strategy</li><li>Priority content & support</li><li>Advanced performance reporting</li></ul><a class="pill lime" href="#contact">GET STARTED</a>`;
}
