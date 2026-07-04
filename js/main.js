const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const iconSVG = (name) => {
  const icons = {
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-6.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.72-5.36-.72-8 0C6 1 5 1 5 1c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 8c0 4.5 3 6.5 6 6.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/><path d="m14.5 4-5 16"/></svg>`,
    rocket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    idea: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5A4.8 4.8 0 0 0 18 8 6 6 0 0 0 6 8c0 1.2.4 2.4 1.3 3.4.8.9 1.3 1.7 1.5 2.6"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .36 1.96.7 2.87a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.21-1.21a2 2 0 0 1 2.11-.45c.91.34 1.87.57 2.87.7A2 2 0 0 1 22 16.92z"/></svg>`,
    map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.4 7.5L3 21l1.7-4.9A8.5 8.5 0 1 1 20.5 11.8Z"/><path d="M8.8 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c-.2.2-.2.4 0 .7.6 1.1 1.5 2 2.6 2.6.3.2.5.2.7 0l.6-.5c.2-.2.4-.2.7-.1l1.7.8c.4.2.4.4.4.6v.5c0 .3 0 .6-.5.8-.5.3-1.2.5-1.9.5-2.8 0-7-3.6-7-6.9 0-.7.2-1.3.5-1.8Z"/></svg>`
  };
  return icons[name] || icons.code;
};

function initTheme() {
  const toggle = $('#themeToggle');
  const icon = $('.theme-icon', toggle);
  const applyIcon = () => {
    icon.textContent = document.documentElement.dataset.theme === 'dark' ? '☾' : '☀';
  };
  applyIcon();
  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
    applyIcon();
  });
}

function initNavigation() {
  const menuToggle = $('#menuToggle');
  const navLinks = $('#navLinks');
  const navbar = $('#navbar');

  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  $$('#navLinks a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  const sections = $$('main section[id]');
  const navItems = $$('#navLinks a');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach((item) => {
        item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}

function initParticles() {
  const holder = $('#particles');
  const count = window.innerWidth < 760 ? 26 : 56;
  holder.innerHTML = Array.from({ length: count }).map((_, index) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = 6 + Math.random() * 8;
    const size = 3 + Math.random() * 4;
    return `<span class="particle" style="left:${left}%;top:${top}%;width:${size}px;height:${size}px;--duration:${duration}s;animation-delay:${index * 0.12}s"></span>`;
  }).join('');
}

function initCursorGlow() {
  const glow = $('.cursor-glow');
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .14 });
  $$('.reveal, .skill-category').forEach((element) => observer.observe(element));
}

function renderHero() {
  const resumeButton = $('#resumeButton');
  if (resumeButton) {
    resumeButton.href = PORTFOLIO_DATA.profile.resume;
  }

  $('#socialRow').innerHTML = `<span>Follow me:</span>` + PORTFOLIO_DATA.profile.socials.map((item) => `
    <a href="${item.url}" target="_blank" rel="noreferrer" aria-label="${item.label}">${iconSVG(item.icon)}</a>
  `).join('');

  const techItems = [...PORTFOLIO_DATA.technologies, ...PORTFOLIO_DATA.technologies];
  $('#techMarquee').innerHTML = `<div class="tech-marquee-track">${techItems.map((tech) => `<span>${tech}</span>`).join('')}</div>`;
}

function renderAbout() {
  $('#aboutText').innerHTML = PORTFOLIO_DATA.about.paragraphs.map((text) => `<p>${text}</p>`).join('');
  $('#missionQuote').textContent = `"${PORTFOLIO_DATA.about.quote}"`;
  $('#valueGrid').innerHTML = PORTFOLIO_DATA.about.values.map((value) => `
    <article class="value-card">
      <div class="icon-box">${iconSVG(value.icon)}</div>
      <h3>${value.title}</h3>
      <p>${value.text}</p>
    </article>
  `).join('');
}

function renderSkills() {
  $('#skillsGrid').innerHTML = Object.entries(PORTFOLIO_DATA.skills).map(([category, skills]) => `
    <article class="skill-category">
      <h3>${category}</h3>
      ${skills.map((skill) => `
        <div class="skill-item">
          <div class="skill-head"><span>${skill.name}</span><span>${skill.level}%</span></div>
          <div class="progress" aria-label="${skill.name} skill level ${skill.level}%"><span style="--level:${skill.level}%"></span></div>
        </div>
      `).join('')}
    </article>
  `).join('');
}

function renderEducation() {
  $('#educationCards').innerHTML = PORTFOLIO_DATA.education.map((item) => `
    <article class="education-card">
      <span>${item.duration}</span>
      <h3>${item.degree}</h3>
      <p><strong>${item.institute}</strong> · ${item.result}</p>
      <p>${item.details}</p>
    </article>
  `).join('');
}

let currentProjects = [...PORTFOLIO_DATA.projects];

function projectCard(project) {
  return `
    <article class="project-card reveal">
      <div class="project-image">
        <img src="${project.image}" alt="Preview image for ${project.title}" loading="lazy" />
        <span class="project-rank">#${project.rank}</span>
      </div>
      <div class="project-body">
        <h3>${project.title}<span aria-hidden="true">↗</span></h3>
        <p>${project.summary}</p>
        <ul class="stack-list">${project.stack.slice(0, 5).map((tech) => `<li>${tech}</li>`).join('')}</ul>
        <a class="btn btn-ghost project-detail-button" href="project-details.html?id=${project.id}">View More / Details</a>
      </div>
    </article>
  `;
}

function renderProjects() {
  const sortValue = $('#sortProjects').value;
  currentProjects = [...PORTFOLIO_DATA.projects].sort((a, b) => {
    if (sortValue === 'name') return a.title.localeCompare(b.title);
    if (sortValue === 'stack') return b.stack.length - a.stack.length;
    return a.rank - b.rank;
  });
  $('#projectGrid').innerHTML = currentProjects.map(projectCard).join('');
  initReveal();
}

function initProjects() {
  $('#sortProjects').addEventListener('change', renderProjects);
  $$('.view-switch button').forEach((button) => {
    button.addEventListener('click', () => {
      $$('.view-switch button').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      $('#projectGrid').classList.toggle('list-view', button.dataset.view === 'list');
    });
  });
  renderProjects();
}

function renderTimeline() {
  $('#timeline').innerHTML = PORTFOLIO_DATA.experience.map((job) => `
    <div class="timeline-item reveal">
      <span class="timeline-dot"></span>
      <article class="timeline-card">
        <span>${job.period}</span>
        <h3>${job.title}</h3>
        <h4>${job.company}</h4>
        ${job.location ? `<p class="timeline-location">${job.location}</p>` : ''}
        ${job.points ? `<ul class="timeline-points">${job.points.map((point) => `<li>${point}</li>`).join('')}</ul>` : `<p>${job.description}</p>`}
        <ul class="stack-list">${job.stack.map((tech) => `<li>${tech}</li>`).join('')}</ul>
      </article>
    </div>
  `).join('');
}


function renderContact() {
  const { email, phone, whatsapp, location } = PORTFOLIO_DATA.profile;
  $('#contactInfo').innerHTML = `
    <div class="contact-item">
      <div class="icon-box">${iconSVG('mail')}</div>
      <div><span>Email</span><a href="mailto:${email}" target="_blank" rel="noreferrer">${email}</a></div>
    </div>
    <div class="contact-item">
      <div class="icon-box">${iconSVG('phone')}</div>
      <div><span>Phone</span><a href="tel:${phone.replace(/[^+\d]/g, '')}" target="_blank" rel="noreferrer">${phone}</a></div>
    </div>
    <div class="contact-item">
      <div class="icon-box">${iconSVG('whatsapp')}</div>
      <div><span>WhatsApp</span><a href="https://wa.me/${whatsapp.replace(/[^\d]/g, '')}" target="_blank" rel="noreferrer">${whatsapp}</a></div>
    </div>
    <div class="contact-item">
      <div class="icon-box">${iconSVG('map')}</div>
      <div><span>Location</span><strong>${location}</strong></div>
    </div>
  `;
}

function initContactForm() {
  $('#contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = $('#nameInput').value.trim();
    const email = $('#emailInput').value.trim();
    const message = $('#messageInput').value.trim();
    const body = encodeURIComponent(`Hi Galib,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${body}`;
    $('#formStatus').textContent = 'Opening your email app...';
    event.target.reset();
  });
}

function initFooter() {
  const yearEl = $('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function boot() {
  initTheme();
  initNavigation();
  initParticles();
  initCursorGlow();
  renderHero();
  renderAbout();
  renderSkills();
  renderEducation();
  initProjects();
  renderTimeline();
  renderContact();
  initContactForm();
  initFooter();
  initReveal();
}

boot();
