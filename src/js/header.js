import { fetchDrinksByName } from './fetchFunction';

const burgerMenuOpen = document.querySelector('[data-burger-menu-toggle]');
const burgerMenu = document.querySelector('[data-burger-menu]');

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



const body = document.querySelector('body'); //--------------------------- перенести в скріпти для боді
function bodyThemeReader() {
  const theme = localStorage.getItem("ui-theme")
  console.log(theme);

}bodyThemeReader()

const formHeader = document.querySelector('[data-header-submit]');
const formBurger = document.querySelector('[data-burger-submit]');

burgerMenuOpen.addEventListener('click', onClickBurger);

function onClickBurger() {
  burgerMenuOpen.classList.toggle('is-open');
  burgerMenu.classList.toggle('is-open');
  burgerMenuOpen.setAttribute('aria-expanded', 'true');

  body.classList.toggle('unscroll-body'); //--------------------------- перенести в скріпти для боді
}

// -----------перемикач теми---------------

headerThemeSwitcher.addEventListener('click', onClickHeaderThemeSwitcher);

function onClickHeaderThemeSwitcher() {
  const headerSwitcherDot = document.querySelector('.switcher-dot');
  headerSwitcherDot.classList.toggle('switcher-dot-left');
  headerTextColorSwitcherLight.classList.toggle('header-switcher-light-revers');
  headerTextColorSwitcherDark.classList.toggle('header-switcher-dark-revers');

  body.classList.toggle('dark-size')

  if (localStorage.getItem("ui-theme")==="dark"){
    localStorage.setItem("ui-theme", "light");
  }
  else {
    localStorage.setItem("ui-theme", "dark");
  }
}

burgerThemeSwitcher.addEventListener('click', onClickBurgerThemeSwitcher);

function onClickBurgerThemeSwitcher() {
  const switcherDot = document.querySelector('.switcher-burger-dot');
  switcherDot.classList.toggle('switcher-dot-left');
  burgerTextColorSwitcherLight.classList.toggle('header-switcher-light-revers');
  burgerTextColorSwitcherDark.classList.toggle('header-switcher-dark-revers');

  body.classList.toggle('dark-size')

  if (localStorage.getItem("ui-theme")==="dark"){
    localStorage.setItem("ui-theme", "light");
  }
  else {
    localStorage.setItem("ui-theme", "dark");
  }
}

// -----------submit---------------

formHeader.addEventListener('submit', onHeaderSubmit);
formBurger.addEventListener('submit', onBurgerSubmit);

async function onHeaderSubmit(event) {
  event.preventDefault();
  const drinkName = event.currentTarget.elements.headerinput.value;

  const result = await fetchDrinksByName(drinkName);
  console.log(result);
}

async function onBurgerSubmit(event) {
  event.preventDefault();
  const drinkName = event.currentTarget.elements.headerinput.value;

  const result = await fetchDrinksByName(drinkName);
  console.log('submit');
}

// -----------burger-menu-favorite---------------
const dataBurgerMenuArrow = document.querySelector('[data-burger-menu-arrow')
const dataBurgerMenuFavorite = document.querySelector('[data-burger-menu-favorite')
dataBurgerMenuArrow.addEventListener('click', onClickBurgerMenuArrow);

function onClickBurgerMenuArrow() {
  dataBurgerMenuFavorite.classList.toggle('burger-favorite__items-display');

 }