const headerThemeSwitcher = document.querySelector(
  '[data-header-theme-switcher]'
);
const burgerThemeSwitcher = document.querySelector(
  '[data-burger-theme-switcher]'
);
const headerTextColorSwitcherLight = document.querySelector(
  '[data-header-text-color-switcher-light]'
);
const headerTextColorSwitcherDark = document.querySelector(
  '[data-header-text-color-switcher-dark]'
);

const burgerTextColorSwitcherLight = document.querySelector(
  '[data-burger-text-color-switcher-light]'
);
const burgerTextColorSwitcherDark = document.querySelector(
  '[data-burger-text-color-switcher-dark]'
);

const body = document.querySelector('body');
const navItems = document.querySelectorAll('.navigation__item');
const switcherButton = document.querySelector('.switcher-button');
const switcherDot = document.querySelector('.switcher-dot');
const darkThemeText = document.querySelectorAll('.dark-theme-text');
const hnavigationDropItem = document.querySelectorAll('.navigation-drop__item');
const favoriteItems = document.querySelector('.favorite__items');

headerThemeSwitcher.addEventListener('click', onClickHeaderThemeSwitcher);

function onClickHeaderThemeSwitcher() {
  const headerSwitcherDot = document.querySelector('.switcher-dot');
  headerSwitcherDot.classList.toggle('switcher-dot-left');
  headerTextColorSwitcherLight.classList.toggle('header-switcher-light-revers');
  headerTextColorSwitcherDark.classList.toggle('header-switcher-dark-revers');
  body.classList.toggle('dark-size');
  switcherButton.classList.toggle('switcher-button-dark');
  switcherDot.classList.toggle('switcher-dot-dark');
  favoriteItems.classList.toggle('favorite__items-dark');

  navItems.forEach(item => item.classList.toggle('theme'));
  hnavigationDropItem.forEach(item =>
    item.classList.toggle('navigation-drop__item-dark')
  );
  darkThemeText.forEach(item => item.classList.toggle('dark-theme'));

  if (localStorage.getItem('ui-theme') === 'dark') {
    localStorage.setItem('ui-theme', 'light');
  } else {
    localStorage.setItem('ui-theme', 'dark');
  }
}

// ---------------------------------------------------- for burger
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenuBtnIcon = document.querySelector('.burger-menu-btn-icon');
const burgerMenuArrowIcon = document.querySelector('.burger-menu-arrow-icon');

burgerThemeSwitcher.addEventListener('click', onClickBurgerThemeSwitcher);

function onClickBurgerThemeSwitcher() {
  const switcherDot = document.querySelector('.switcher-burger-dot');
  switcherDot.classList.toggle('switcher-dot-left');
  darkThemeText.forEach(item => item.classList.toggle('dark-theme'));
  burgerTextColorSwitcherDark.classList.toggle('burger-switcher-dark-revers');
  mobileMenu.classList.toggle('dark-size');
  burgerMenuBtnIcon.classList.toggle('burger-menu-btn-icon-dark');
  burgerMenuArrowIcon.classList.toggle('burger-menu-btn-icon-dark');
  body.classList.toggle('dark-size');

  if (localStorage.getItem('ui-theme') === 'dark') {
    localStorage.setItem('ui-theme', 'light');
  } else {
    localStorage.setItem('ui-theme', 'dark');
  }
}
