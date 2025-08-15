// Sticky header, mobile nav, and a friendly toast on submit
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#nav-menu');
const form = document.querySelector('form');
const toast = document.getElementById('toast');

const onScroll = () => {
  header.setAttribute('data-scrolled', window.scrollY > 10 ? 'true' : 'false');
};
window.addEventListener('scroll', onScroll);
onScroll();

navToggle?.addEventListener('click', () => {
  const open = navList.getAttribute('data-open') === 'true';
  navList.setAttribute('data-open', String(!open));
  navToggle.setAttribute('aria-expanded', String(!open));
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  toast.textContent = 'Thanks! We’ll get back to you shortly.';
  toast.setAttribute('data-show', 'true');
  setTimeout(() => toast.setAttribute('data-show', 'false'), 3000);
});
