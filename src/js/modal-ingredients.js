import { fetchIngredientByName } from "./fetchFunction";

const ingredientsModal = document.querySelector('[data-ingredients-modal]')
const closeIngredientsModalBtn = document.querySelector('[data-ingredients-modal-close]');
// const modalIngredientsList = document.querySelector('.cocktail-ingredients-list')
// console.log(modalIngredientsList);

const insertModalContainer = document.querySelector('.js-insert-modal-container')
 
export let emtyObjectForLocalStorage = null



export function toggleIngredientsModal() {
    ingredientsModal.classList.toggle('is-hidden');
    ingredientsModal.classList.toggle('modal-open');
}



closeIngredientsModalBtn.addEventListener('click', toggleIngredientsModal);
ingredientsModal.addEventListener('click', e => {
    if (e.target !== ingredientsModal) {
        return;
    }
    toggleIngredientsModal();
});



export async function openIngredientsModal(e) {
    if (e.target.classList.contains('js-ingredients-modal')) {
        const elemName = e.target.parentNode.dataset.ingredientName.trim()
      const foundedIngredient = await fetchIngredientByName(elemName)
      
      emtyObjectForLocalStorage = foundedIngredient


        renderIngredientsModal(foundedIngredient);
        toggleIngredientsModal()
    }
}




export async function renderIngredientsModal(data) {
    const filteredIngredientObj = data.ingredients[0]
    // console.log(filteredIngredientObj);
    const keys = Object.keys(filteredIngredientObj);

    for (const key of keys) {

        if (filteredIngredientObj[key] === null || filteredIngredientObj[key] === undefined) {
            filteredIngredientObj[key] = '';
        }
  }
  
    // console.log(filteredIngredientObj);
    const {
    idIngredient: id,
    strABV: alcoVolume,
    strAlcohol: alcoPresence,
    strDescription: ingredientDescription,
    strIngredient: ingredientName,
    strType: ingredientType,
    } = filteredIngredientObj
    

    const markup = `
     <h2 class="drink-name">${ingredientName}</h2>
      <h3 class="drink-category">${ingredientType}</h3>
        <div class="drink-category--wrapper">
          <div class="drink-category--line"></div>
        </div>
        <p class="drink-description">${ingredientDescription}</p>
  
        <ul class="drink-classification-list">
          <li class="drink-classification-item">
            <p class="classification-type classification">
             ✶ Type: <span class="classification-value"></span>
            </p>
          </li>
          <li class="drink-classification-item">
            <p class="classification-type classification">
              ✶ Country of origin:
              <span class="classification-value n"></span>
            </p>
          </li>
          <li class="drink-classification-item">
            <p class="classification-type classification">
              ✶ Alcohol by volume:
              <span class="classification-value">${alcoVolume}</span>
            </p>
          </li>
          <li class="drink-classification-item">
            <p class="classification-type classification">
              ✶ Flavour:
              <span class="classification-value"></span>
            </p>
          </li>
        </ul>
    `
  document.querySelector('[data-favorite-controller]').dataset.favoriteController = id
    insertModalContainer.innerHTML = markup
}



