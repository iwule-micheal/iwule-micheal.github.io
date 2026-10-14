const navLinks = [...document.querySelectorAll('.side nav a')];
const pageSections = [...document.querySelectorAll('main section[id]')];
const subnav = document.querySelector('.side .subnav');
const currentFile = location.pathname.split('/').pop() || 'index.html';

/* Sub-pages: highlight the nav link for the section you are in */
const parentPage = currentFile.startsWith('project-')
  ? (currentFile === 'project-ada.html' ? 'ai-design.html' : 'copywriting.html')
  : currentFile;

navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href.includes('#')) return;
  if (currentFile !== 'index.html' && href === parentPage) {
    link.classList.add('is-active');
  }
});

/* Home page: highlight the section you have scrolled to */
const hashLinks = navLinks.filter((link) => link.getAttribute('href').startsWith('#'));

const markActiveLink = () => {
  const atBottom = window.scrollY > 0 &&
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  const current = atBottom
    ? pageSections.at(-1)
    : pageSections.filter((section) => section.getBoundingClientRect().top <= 140).at(-1);

  hashLinks.forEach((link) => {
    link.classList.toggle(
      'is-active',
      Boolean(current && link.getAttribute('href') === `#${current.id}`)
    );
  });

  /* Open the Work sub-menu while the Work section is current */
  if (subnav) {
    subnav.classList.toggle('is-open', Boolean(current && current.id === 'work'));
  }
};

if (pageSections.length && hashLinks.length) {
  markActiveLink();
  window.addEventListener('scroll', markActiveLink, { passive: true });
}

const revealTargets = document.querySelectorAll('main section, .work li, .pack');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((target) => {
    target.classList.add('reveal');
    observer.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}