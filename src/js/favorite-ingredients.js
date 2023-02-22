import IconHeart from '../images/icons.svg';
import { openIngredientsModal } from './modal-ingredients';
import "./theme-switcher";
import "./header";
import { sliceArray, resetPagination, generatePagination, createPagination } from './pagination';

const modalIngredientsListM = document.querySelector('.card-list');
modalIngredientsListM.addEventListener('click', openIngredientsModal);


const renderIngredients = (element) => {
  const name = element.nameIngredient;
  const details = element.typeIngredient;
  const id = element.idIngredient;

  return `
    <div class="cocktail-list__cocktail-item">
      <div class='card-item__info'>
        <p class="card-item__name dark-theme-text">${name}</p>
        <p class="card-item__details dark-theme-text">${details}</p>
        <div data-ingredient-name="${name}" data-ingredient-id="${id}" class="button-wrap">
          <button type="button" class="cocktail-item__learn-more js-ingredients-modal">Learn more</button>
          <button type="button" class="cocktail-item__remove">Remove
            <svg class="svg" width="21" height="19">
              <use href="${IconHeart}#icon-heart-filled"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `
}

const getRandomIngredients = (htmlEl) => {
  // Todo: get data
  const localFavorite = JSON.parse(localStorage.getItem('favoriteList'));
  if (localFavorite === null || localFavorite.favoriteIngrediants.length === 0 || localFavorite.favoriteIngrediants.length === 1) {
    document.querySelector('.not-found').innerText = "You haven't added any favorite ingridients yet"
    return
  }
  const favoriteIngredient = localFavorite.favoriteIngrediants;
  let drink = {
    drinks: [],
  };

  favoriteIngredient.forEach(element => {
    if (element.idIngredient !== 0) {
      drink.drinks.push(element);
    }
  });
  generatePagination(drink)
  const favoriteIngredients = sliceArray(drink.drinks);
  console.log(favoriteIngredients);

  let content = '';
  createPagination();
  favoriteIngredients.drinks.forEach(element => {
    if (element.idIngredient !== 0) {
      content += renderIngredients(element);
    }
  });

  htmlEl.innerHTML = content;

}

const init = () => {
  resetPagination();
  const ingredientsEl = document.querySelector('.ingredients__js');

  if (ingredientsEl) {
    getRandomIngredients(ingredientsEl);

  }
}

document.addEventListener('DOMContentLoaded', init)