import { fetchRandomCocktail } from "./fetchFunction";
import { renderCocktail } from "./render_function_for_cocktail";
import "./cocktails-modal-logic";
import { removeCocktailFromLocalStorage } from "./add-to-remove-localstorage";
import "./theme-switcher";
import "./header";

document.addEventListener('DOMContentLoaded', generateCocktails)

// Todo: fix this
async function generateCocktails() {
  const localFavorite = JSON.parse(localStorage.getItem('favoriteList'));
  if (localFavorite === null || localFavorite.favoriteCocktails.length === 1 || localFavorite.favoriteCocktails.length === 0) {
    document.querySelector('.not-found').innerText = "You haven't added any favorite cocktails yet"
    return
  }
  const favoriteCocktails = localFavorite.favoriteCocktails;
  let drink = {
    drinks: []
  }
  
  
  const listOfCocktails = favoriteCocktails.forEach(element => {
    if (element.idDrink !== 0) {
      drink.drinks.push(element)
    }
  });
  document.querySelector('.cocktail-list').innerHTML = renderCocktail(drink).join('');
}
