import { fetchRandomCocktail } from "./fetchFunction";
const svg = require('../images/icons.svg')

export function renderCocktail(drink){
    let drinkObj = drink.drinks[0]
    const localFavorit = JSON.parse(localStorage.getItem('favorit'))
    if(localFavorit !== null){
        let favoritCocktail = localFavorit.favoritCocktails.map((id) => {return id})
        if(favoritCocktail !== null){
            // если есть в избранном
            if(favoritCocktail.inclde(id)){
                return `<li class="cocktail-list__cocktail-item">
                            <img class="cocktail-item_img" src="${drinkObj.strDrinkThumb}" alt="" width="395" height="auto">
                            <p class="cocktail-item__name">${drinkObj.strDrink}</p>
                            <div class="button-wrap" data-idDrink='${drinkObj.idDrink}'>
                                <button type="button" class="cocktail-item__learn-more">Learn more</button>
                                <button type="button" class="cocktail-item__remove">Remove
                                    <svg class="svg" width="21" height="19">
                                        <use href="${svg}#icon-heart-filled"></use>
                                    </svg>
                                </button>                                
                            </div>
                        </li>`
            }
            // если нету в избранном
            else{
                return `<li class="cocktail-list__cocktail-item">
                            <img class="cocktail-item_img" src="${drinkObj.strDrinkThumb}" alt="" width="395" height="auto">
                            <p class="cocktail-item__name">${drinkObj.strDrink}</p>
                            <div class="button-wrap" data-idDrink='${drinkObj.idDrink}'>
                                <button type="button" class="cocktail-item__learn-more">Learn more</button>
                                <button type="button" class="cocktail-item__add-to">Add to 
                                    <svg class="svg" width="21" height="19">
                                        <use href="${svg}#icon-heart-empty"></use>
                                    </svg>
                                </button>
                            </div>
                        </li>`
            }
        }
    }
    return `<li class="cocktail-list__cocktail-item">
                            <img class="cocktail-item_img" src="${drinkObj.strDrinkThumb}" alt="" width="395" height="auto">
                            <p class="cocktail-item__name">${drinkObj.strDrink}</p>
                            <div class="button-wrap" data-idDrink='${drinkObj.idDrink}'>
                                <button type="button" class="cocktail-item__learn-more">Learn more</button>
                                <button type="button" class="cocktail-item__add-to">Add to 
                                    <svg class="svg" width="21" height="19">
                                        <use href="${svg}#icon-heart-empty"></use>
                                    </svg>
                                </button>
                            </div>
                        </li>`
}