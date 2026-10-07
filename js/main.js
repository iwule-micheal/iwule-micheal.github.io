const navLinks = [...document.querySelectorAll('.side nav a')];
const pageSections = [...document.querySelectorAll('main section[id]')];

const markActiveLink = () => {
  const current = pageSections
    .filter((section) => section.getBoundingClientRect().top <= 140)
    .at(-1);

  navLinks.forEach((link) => {
    const target = link.getAttribute('href');
    link.classList.toggle('is-active', Boolean(current && target === `#${current.id}`));
  });
};

if (pageSections.length) {
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

const cvLink = document.querySelector('#cv');

if (cvLink) {
  cvLink.addEventListener('click', (event) => {
    event.preventDefault();
    cvLink.textContent = 'CV coming soon';
    cvLink.setAttribute('aria-live', 'polite');
  });
}
