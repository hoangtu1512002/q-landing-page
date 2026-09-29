const header = document.querySelector('#siteHeader');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobileMenu');
const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-menu nav a');
const backToTop = document.querySelector('#backToTop');

const updateScrollControls = () => {
  header.classList.toggle('scrolled', window.scrollY > 36);
  backToTop.classList.toggle('visible', window.scrollY > 500);
};
updateScrollControls();
window.addEventListener('scroll', updateScrollControls, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  });
});

function closeMenu() {
  menuToggle.classList.remove('active');
  mobileMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const open = !mobileMenu.classList.contains('open');
  menuToggle.classList.toggle('active', open);
  mobileMenu.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.13, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));

const sections = document.querySelectorAll('main section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.desktop-nav a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-30% 0px -60%', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

const teamTrack = document.querySelector('#teamTrack');
const branchTabs = document.querySelectorAll('.branch-tab');

branchTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    branchTabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    document.querySelectorAll('.therapist-card').forEach(card => {
      card.hidden = card.dataset.branch !== tab.dataset.branch;
    });
    teamTrack.scrollTo({ left: 0, behavior: 'smooth' });
  });
});

document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
  teamTrack.scrollBy({ left: -teamTrack.clientWidth * .75, behavior: 'smooth' });
});
document.querySelector('.slider-arrow.next').addEventListener('click', () => {
  teamTrack.scrollBy({ left: teamTrack.clientWidth * .75, behavior: 'smooth' });
});

document.querySelector('#year').textContent = new Date().getFullYear();
