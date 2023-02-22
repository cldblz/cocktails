// PAGINATION ------------------------------------------------------------------------------------------- //
import { renderCocktail } from './render_function_for_cocktail';

const svg = require('../images/icons.svg');

let pageSize = 3;
let currPage = 1;
let clickedBtn = 0;

let fetchedDrinks;
let totalCards;

export function generatePagination(res) {
  fetchedDrinks = res;
  totalCards = fetchedDrinks.drinks.length;
}

export function resetPagination() {
  currPage = 1;
  clickedBtn = 0;
}

export function createPagination() {
  const totalPages = Math.ceil(totalCards / pageSize);

  if (totalPages < 2) {
    return;
  }

  const pagination = document.getElementById('pagination');

  pagination.innerHTML = '<div class="pagination-pages"></div>';
  const paginationPages = document.querySelector('.pagination-pages');

  for (let i = 1; i <= 7 && i <= totalPages; i++) {
    let btnNum = i;
    if (clickedBtn > 3 && totalPages > 7) {
      btnNum += clickedBtn - 4;
    }
    const button = document.createElement('button');
    button.classList.add('pagination-button');
    if (i === 1) {
      button.dataset.paginationBtnId = i;
      button.textContent = i;
      btnNum = i;
    } else if (i === 2 && btnNum > 2) {
      button.dataset.paginationBtnId = btnNum;
      button.classList.add('pagination-button__ellipsis');
      button.textContent = '...';
    } else if (i === 6 && totalPages > btnNum + 1) {
      button.dataset.paginationBtnId = btnNum;
      button.classList.add('pagination-button__ellipsis');
      button.textContent = '...';
    } else if (i === 7 || i === totalPages) {
      button.dataset.paginationBtnId = totalPages;
      button.textContent = totalPages;
      btnNum = totalPages;
    } else {
      button.dataset.paginationBtnId = btnNum;
      button.textContent = btnNum;
    }

    if (btnNum === currPage) {
      button.classList.add('pagination-button__active');
    }

    button.addEventListener('click', async e => {
      currPage = btnNum;
      clickedBtn = Number(e.target.dataset.paginationBtnId);
      if (clickedBtn + 2 >= totalPages && totalPages > 7) {
        clickedBtn = totalPages - 3;
      }
      if (
        e.target.parentNode.parentNode.parentNode.classList.contains(
          'favorite-ingredients'
        )
      ) {
        ingsRender();
      } else {
        drinksRender();
      }
    });

    paginationPages.append(button);
  }

  const activeBtn = document.querySelector('.pagination-button__active');
  const activeBtnDataId = Number(activeBtn.dataset.paginationBtnId);

  const arrowNext = document.createElement('button');
  arrowNext.classList.add('pagination-button-arrow');
  arrowNext.innerHTML = ` <svg class="pagination-svg" width="24" height="24">
      <use href="${svg}#icon-arrow"></use>
    </svg>`;
  if (activeBtnDataId === totalPages) {
    arrowNext.setAttribute('disabled', '');
  }
  const arrowPrev = document.createElement('button');
  arrowPrev.classList.add('pagination-button-arrow');
  arrowPrev.innerHTML = ` <svg class="pagination-svg pagination-svg--prev" width="24" height="24">
      <use href="${svg}#icon-arrow"></use>
    </svg>`;
  if (totalPages < 7) {
    arrowNext.style.display = 'none';
    arrowPrev.style.display = 'none';
  }

  if (!clickedBtn || clickedBtn === 1) {
    arrowPrev.setAttribute('disabled', '');
  }

  arrowNext.addEventListener('click', async () => {
    if (!clickedBtn) {
      clickedBtn = 1;
    }
    clickedBtn += 1;
    currPage += 1;
    if (clickedBtn + 2 >= totalPages && totalPages > 7) {
      clickedBtn = totalPages - 3;
    }
    drinksRender();
  });

  arrowPrev.addEventListener('click', async () => {
    if (!clickedBtn) {
      clickedBtn = 1;
    }
    currPage -= 1;
    if (clickedBtn + 2 >= totalPages && totalPages > 7) {
      clickedBtn = totalPages - 3;
    } else if (activeBtnDataId <= totalPages - 3 || totalPages < 7) {
      clickedBtn -= 1;
    }
    drinksRender();
  });

  pagination.prepend(arrowPrev);
  pagination.append(arrowNext);
}

export function sliceArray(array) {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 768) {
    pageSize = 6;
  }
  if (windowWidth >= 1280) {
    pageSize = 9;
  }
  const start = (currPage - 1) * pageSize;
  const end = start + pageSize;
  const res = array.slice(start, end);
  return { drinks: res };
}

async function drinksRender() {
  const cocktailList = document.querySelector('.cocktail-list');
  cocktailList.innerHTML = '';
  const slicedArray = sliceArray(fetchedDrinks.drinks);
  const markup = await renderCocktail(slicedArray);
  cocktailList.insertAdjacentHTML('beforeend', markup.join(''));
}

function ingsRender() {
  const ingsList = document.querySelector('.card-list');
  ingsList.innerHTML = '';
  const slicedArray = sliceArray(fetchedDrinks.drinks);
  let markup = '';
  slicedArray.drinks.forEach(element => {
    markup += renderIngredients(element);
  });
  ingsList.insertAdjacentHTML('beforeend', markup);
}

function renderIngredients(element) {
  createPagination();
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
              <use href="${svg}#icon-heart-filled"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// PAGINATION ------------------------------------------------------------------------------------------- //
