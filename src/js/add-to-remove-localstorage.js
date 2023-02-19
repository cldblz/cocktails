import { fetchDrinkById } from './fetchFunction';
const svg = require('../images/icons.svg');

class cokctailToFavorite {
  constructor(drink) {
    this.idDrink = Number(drink.drinks[0].idDrink);
    this.imgSrc = drink.drinks[0].strDrinkThumb;
    this.nameDrink = drink.drinks[0].strDrink;
    this.recipteDrink = drink.drinks[0].strInstructions;
    this.ingrediant = [];
    for (let i = 1; i <= 15; i++) {
      let ingrediantObj = { measure: '', ingrediantName: '' };
      let name = 'strIngredient' + i;
      let measure = 'strMeasure' + i;
      if (drink.drinks[0][name] != null) {
        ingrediantObj.measure = drink.drinks[0][measure];
        ingrediantObj.ingrediantName = drink.drinks[0][name];
        this.ingrediant.push(ingrediantObj);
      } else {
        break;
      }
    }
  }
}

class ingredientFavorite{
    constructor(ingredient){
        this.idIngredient = Number(ingredient.ingredients[0].idIngredient)
        this.nameIngredient = ingredient.ingredients[0].strIngredient
        this.descriptionIngredient = ingredient.ingredients[0].strDescription
        this.typeIngredient = ingredient.ingredients[0].strType
        this.alcoholIngredient = ingredient.ingredients[0].strAlcohol
    }
}

export async function addCocktailToLocalStorage(event) {
  const localFavorite = JSON.parse(localStorage.getItem('favoriteList'));
  const drinkId = event.target.parentNode.dataset.idDrink;
  const drink = await fetchDrinkById(drinkId);
  const cocktail = new cokctailToFavorite(drink);
  localFavorite.favoriteCocktails.push(cocktail);
  localStorage.setItem('favoriteList', JSON.stringify(localFavorite));

  document.querySelector(
    `[data-id-drink = '${drinkId}'] .cocktail-item__add-to`
  ).className = 'cocktail-item__remove';
  document.querySelector(
    `[data-id-drink = '${drinkId}'] .cocktail-item__remove`
  ).innerHTML = `Remove
    <svg class="svg" width="21" height="19">
        <use href="${svg}#icon-heart-filled"></use>
    </svg>`;

  if (event.target.classList.contains('add-to-favorite')) {
    document
      .querySelector(`[data-id-drink = '${drinkId}'] .cocktails-modal-favorite`)
      .classList.remove('add-to-favorite');
    document
      .querySelector(`[data-id-drink = '${drinkId}'] .cocktails-modal-favorite`)
      .classList.add('remove-from-favorite');
    document.querySelector(
      `[data-id-drink = '${drinkId}'] .cocktails-modal-favorite`
    ).innerText = 'Remove from favorite';
  }
}

export function removeCocktailFromLocalStorage(event) {
  let localFavorite = JSON.parse(localStorage.getItem('favoriteList'));
  const drinkId = Number(event.target.parentNode.dataset.idDrink);
  localFavorite.favoriteCocktails = localFavorite.favoriteCocktails.filter(
    el => {
      if (el.idDrink != drinkId) {
        return el;
      }
    }
  );
  localStorage.setItem('favoriteList', JSON.stringify(localFavorite));

  document.querySelector(
    `[data-id-drink = '${drinkId}'] .cocktail-item__remove`
  ).className = 'cocktail-item__add-to';
  document.querySelector(
    `[data-id-drink = '${drinkId}'] .cocktail-item__add-to`
  ).innerHTML = `Add to 
    <svg class="svg" width="21" height="19">
        <use href="${svg}#icon-heart-empty"></use>
    </svg>`;

  if (event.target.classList.contains('remove-from-favorite')) {
    document
      .querySelector(`[data-id-drink = '${drinkId}'] .cocktails-modal-favorite`)
      .classList.add('add-to-favorite');
    document
      .querySelector(`[data-id-drink = '${drinkId}'] .cocktails-modal-favorite`)
      .classList.remove('remove-from-favorite');
    document.querySelector(
      `[data-id-drink = '${drinkId}'] .cocktails-modal-favorite`
    ).innerText = 'Add to favorite';
  }
}