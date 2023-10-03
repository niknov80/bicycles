const toggle = document.querySelector('.js-toggle');
const menu = document.querySelector('.js-menu');

export const detectedScript = () => {
  document.querySelector('.no-js').classList.remove('no-js');
  menu.classList.add('site-nav__list--closed');
  toggle.classList.add('site-nav__toggle--open');
}

export const toggleClickHandler = () => {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('site-nav__list--closed');
    toggle.classList.toggle('site-nav__toggle--close');
  })
}
