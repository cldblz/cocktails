import { fetchRandomCocktail } from "./fetchFunction";
import { renderCocktail } from "./render_function_for_cocktail";

document.addEventListener('DOMContentLoaded', generateCocktails)

// Todo: fix this
async function generateCocktails(){
  let listOfCocktails = '';
  const windowWidth = window.innerWidth;
  let cocktailCount = 3
  if(windowWidth >= 768){
    cocktailCount = 6
  }
  if(windowWidth >= 1280){
    cocktailCount = 9
  }
  for (let i = 1; i <=cocktailCount; i++){
    let drink = await fetchRandomCocktail();
    listOfCocktails += renderCocktail(drink)
  }
  document.querySelector('.cocktail-list').innerHTML = listOfCocktails
}
