const burgerMenuOpen = document.querySelector('[data-burger-menu-toggle]');
const burgerMenu = document.querySelector('[data-burger-menu]');

const headerThemeSwitcher = document.querySelector(
  '[data-header-theme-switcher]'
);
const burgerThemeSwitcher = document.querySelector(
  '[data-burger-theme-switcher]'
);

burgerMenuOpen.addEventListener('click', onClickBurger);

function onClickBurger() {
  // console.dir(burgerMenuOpen.lastElementChild.children);
  burgerMenuOpen.classList.toggle('is-open');
  burgerMenu.classList.toggle('is-open');
  burgerMenuOpen.setAttribute('aria-expanded', 'true');
}

headerThemeSwitcher.addEventListener('click', onClickHeaderThemeSwitcher);

function onClickHeaderThemeSwitcher() {
  const headerSwitcherDot = document.querySelector('.switcher-dot');
  headerSwitcherDot.classList.toggle('switcher-dot-left');
  console.log('toggle');
}

burgerThemeSwitcher.addEventListener('click', onClickBurgerThemeSwitcher);

function onClickBurgerThemeSwitcher() {
  const switcherDot = document.querySelector('.switcher-burger-dot');
  switcherDot.classList.toggle('switcher-dot-left');
  console.log('toggle');
}
