import { addIngredientToLocalStorage, removeIngredientFromLocalStorage } from "./add-to-remove-localstorage";
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


document.querySelector('.modal-drink-ingredients').addEventListener('click', (event) =>{
  if(event.target.classList.contains('add-to-favorite-ingredient')){
    addIngredientToLocalStorage()
    return
  }
  if(event.target.classList.contains('remove-from-favorite-ingredient')){
    removeIngredientFromLocalStorage(event)
    return
  }
})

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
  const localFavorite = JSON.parse(localStorage.getItem('favoriteList'))
  const favoriteIngredients = localFavorite.favoriteIngrediants.map((el) =>{
    return el.idIngredient
  })
  if(favoriteIngredients.includes(id)){
    document.querySelector('.drink-controller-btn--name').classList.remove('add-to-favorite-ingredient')
    document.querySelector('.drink-controller-btn--name').classList.add('remove-from-favorite-ingredient')
    document.querySelector('.drink-controller-btn--name').innerText = 'Remove from favorite'
  }else{
    document.querySelector('.drink-controller-btn--name').classList.add('add-to-favorite-ingredient')
    document.querySelector('.drink-controller-btn--name').classList.remove('remove-from-favorite-ingredient')
    document.querySelector('.drink-controller-btn--name').innerText = 'Add to favorite'
  }
  document.querySelector('[data-favorite-controller]').dataset.favoriteController = id
    insertModalContainer.innerHTML = markup
}



