import { fetchDrinkById } from './fetchFunction';

const cocktailsModal = document.querySelector('[data-cocktails-modal]');
const closeCocktailsModalBtn = document.querySelector(
  '[data-cocktails-modal-close]'
);
const drinkInfo = document.querySelector('.cocktails-modal-content-wrap');
const cocktailsList = document.querySelector('.cocktail-list');
const docBody = document.querySelector('body');

export function toggleModal() {
  cocktailsModal.classList.toggle('is-hidden');
  docBody.classList.toggle('modal-open');
}

closeCocktailsModalBtn.addEventListener('click', toggleModal);
cocktailsModal.addEventListener('click', e => {
  if (e.target !== cocktailsModal) {
    return;
  }
  toggleModal();
});

export async function renderDrinkInfo(data) {
  const drink = data.drinks[0];

  const ingArr = [];
  let liMarkup;

  for (let i = 1; i < 16; i++) {
    const ingredient = drink[`strIngredient${i}`];
    let measure = drink[`strMeasure${i}`];
    if (ingredient) {
      if (!measure) {
        measure = '';
      }
      ingArr.push(
        `<li class="cocktail-ingredients-list-item" data-ingredient-name='${ingredient}'>
          <p><span>&#10038;</span> ${measure} ${ingredient}</p>
        </li>`
      );
      liMarkup = ingArr.join('');
    }
  }

  const markup = `<h2 class="cocktail-title">${drink.strDrink}</h2>
      <div class="cocktail-description">
        <h3 class="cocktail-description__title">Instructions:</h3>
        <p class="cocktail-description__text">
          ${drink.strInstructions}
        </p>
      </div>
      <img src="${drink.strDrinkThumb}" alt="${drink.strCategory}" class="cocktail-image" />
      <div class="cocktail-ingredients">
        <h3 class="cocktail-ingredients__title">Ingredients</h3>
        <p class="cocktail-ingredients__remark">Per cocktail</p>
        <ul class="cocktail-ingredients-list">
          ${liMarkup}
        </ul>
      </div>`;

  drinkInfo.innerHTML = markup;
}

export async function openCocktailsModal(e) {
  if (e.target.classList.contains('cocktail-item__learn-more')) {
    const elemId = e.target.parentNode.dataset.iddrink;
    const foundedDrink = await fetchDrinkById(elemId);
    renderDrinkInfo(foundedDrink);
    toggleModal();
  } else if (e.target.classList.contains('cocktail-item__remove')) {
  } else if (e.target.classList.contains('cocktail-item__add-to')) {
  }
}

cocktailsList.addEventListener('click', openCocktailsModal);
