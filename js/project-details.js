const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function initTheme() {
  const toggle = $('#themeToggle');
  const icon = $('.theme-icon', toggle);
  const applyIcon = () => { icon.textContent = document.documentElement.dataset.theme === 'dark' ? '☾' : '☀'; };
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
  $$('#navLinks a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')));
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20));
}

function initParticles() {
  const holder = $('#particles');
  const count = window.innerWidth < 760 ? 22 : 46;
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

function renderProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || PORTFOLIO_DATA.projects[0].id;
  const project = PORTFOLIO_DATA.projects.find((item) => item.id === id);
  const holder = $('#projectDetail');

  if (!project) {
    document.title = 'Project Not Found | Galib Hasan Alvee';
    holder.innerHTML = `
      <div class="not-found">
        <div>
          <h1>Project not found.</h1>
          <p>The project you are looking for does not exist or has been moved.</p>
          <a class="btn" href="index.html#projects">Back to Projects</a>
        </div>
      </div>
    `;
    return;
  }

  document.title = `${project.title} | Project Details`;
  holder.innerHTML = `
    <a class="back-link" href="index.html#projects">← Back to all projects</a>
    <div class="detail-hero-grid reveal in-view">
      <div>
        <p class="section-kicker">PROJECT DETAILS</p>
        <h1 class="detail-title"><span>${project.title}</span> <em>case study.</em></h1>
        <p class="detail-summary">${project.description}</p>
        <div class="detail-actions">
          <a class="btn" href="${project.live}" target="_blank" rel="noreferrer">Live Project Link ↗</a>
          <a class="btn btn-ghost" href="${project.github}" target="_blank" rel="noreferrer">GitHub Client Repo</a>
        </div>
      </div>
      <div class="detail-image">
        <img src="${project.image}" alt="Large preview for ${project.title}" />
      </div>
    </div>

    <div class="detail-content-grid">
      <article class="detail-panel">
        <h2>Brief Description</h2>
        <p>${project.description}</p>
      </article>
      <article class="detail-panel">
        <h2>Main Technology Stack</h2>
        <div class="stack-cloud">${project.stack.map((tech) => `<span class="stack-chip">${tech}</span>`).join('')}</div>
      </article>
      <article class="detail-panel">
        <h2>Challenges Faced</h2>
        <ul>${project.challenges.map((item) => `<li>${item}</li>`).join('')}</ul>
      </article>
      <article class="detail-panel">
        <h2>Potential Improvements & Future Plans</h2>
        <ul>${project.improvements.map((item) => `<li>${item}</li>`).join('')}</ul>
      </article>
    </div>
  `;
}

function initFooter() {
  const yearEl = $('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

initTheme();
initNavigation();
initParticles();
initCursorGlow();
renderProjectDetail();
initFooter();
