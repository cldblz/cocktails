import { fetchDrinksByName } from './fetchFunction';
import { renderCocktail } from './render_function_for_cocktail';

const svg = require('../images/icons.svg');

const burgerMenuOpen = document.querySelector('[data-burger-menu-toggle]');
const burgerMenu = document.querySelector('[data-burger-menu]');

const formHeader = document.querySelector('[data-header-submit]');
const formBurger = document.querySelector('[data-burger-submit]');

burgerMenuOpen.addEventListener('click', onClickBurger);
const body = document.querySelector('body');
function onClickBurger() {
  burgerMenuOpen.classList.toggle('is-open');
  burgerMenu.classList.toggle('is-open');
  burgerMenuOpen.setAttribute('aria-expanded', 'true');

  body.classList.toggle('unscroll-body');
}

// -----------submit---------------

formHeader.addEventListener('submit', onHeaderSubmit);
formBurger.addEventListener('submit', onBurgerSubmit);

const cocktailList = document.querySelector('.cocktail-list');
const notFound = document.querySelector('.not-found');
const titleCoctail = document.querySelector('.cocktail-title-main');

async function onHeaderSubmit(event) {
  event.preventDefault();
  const drinkName = event.currentTarget.elements.headerinput.value;

  if (drinkName === '') {
    cocktailList.innerHTML = '';
    titleCoctail.textContent = "Sorry, we didn't find any cocktail for you";
    notFound.innerHTML = `<svg
      class="icon-not_found"
      width="345"
      height="380"
      >
      <use href="${svg}#icon-not-found"></use>
      </svg>`;
    return;
  }
  const responce = await fetchDrinksByName(drinkName);

  if (responce.drinks === null) {
    cocktailList.innerHTML = '';

    titleCoctail.textContent = "Sorry, we didn't find any cocktail for you";
    notFound.innerHTML = `<svg
      class="icon-not_found"
      width="345"
      height="380"              
      >
      <use href="${svg}#icon-not-found"></use>
      </svg>`;
    return;
  }

  notFound.innerHTML = '';
  cocktailList.innerHTML = '';
  titleCoctail.textContent = 'Searching results';
  const markup = await renderCocktail(responce);
  cocktailList.insertAdjacentHTML('beforeend', markup.join(''));
}

async function onBurgerSubmit(event) {
  event.preventDefault();
  burgerMenuOpen.classList.toggle('is-open');
  burgerMenu.classList.toggle('is-open');
  const drinkName = event.currentTarget.elements.burgerinput.value;

  if (drinkName === '') {
    cocktailList.innerHTML = '';
    titleCoctail.textContent = "Sorry, we didn't find any cocktail for you";
    notFound.innerHTML = `<svg
      class="icon-not_found"
      width="345"
      height="380"
      >
      <use href="${svg}#icon-not-found"></use>
      </svg>`;
    return;
  }
  const responce = await fetchDrinksByName(drinkName);

  if (responce.drinks === null) {
    cocktailList.innerHTML = '';
    titleCoctail.textContent = "Sorry, we didn't find any cocktail for you";
    notFound.innerHTML = `<svg
      class="icon-not_found"
      width="345"
      height="380"
      >
      <use href="${svg}#icon-not-found"></use>
      </svg>`;
    return;
  }

  notFound.innerHTML = '';
  cocktailList.innerHTML = '';
  titleCoctail.textContent = 'Searching results';
  const markup = await renderCocktail(responce);
  cocktailList.insertAdjacentHTML('beforeend', markup.join(''));
}

// -----------burger-menu-favorite---------------
const dataBurgerMenuArrow = document.querySelector('[data-burger-menu-arrow');
const dataBurgerMenuFavorite = document.querySelector(
  '[data-burger-menu-favorite'
);
dataBurgerMenuArrow.addEventListener('click', onClickBurgerMenuArrow);

function onClickBurgerMenuArrow() {
  dataBurgerMenuFavorite.classList.toggle('burger-favorite__items-display');
}
