import { fetchRandomCocktail } from "./fetchFunction";
import { renderCocktail } from "./render_function_for_cocktail";

document.addEventListener('DOMContentLoaded', generateCocktails)

// Todo: fix this
async function generateCocktails() {
  const localFavorite = JSON.parse(localStorage.getItem('favoriteList'));
  const favoriteCockteils = localFavorite.favoriteCocktails;
  let drink = {
    drinks: []
  }
  if (favoriteCockteils.length === 1) {
    document.querySelector('.not-found').innerText = "You haven't added any favorite ingridients yet"
    return
  }
  const listOfCocktails = favoriteCockteils.forEach(element => { 
    if (element.idDrink !== 0) {
      drink.drinks.push(element)
    }
  });
  document.querySelector('.cocktail-list').innerHTML = renderCocktail(drink).join('');
}
