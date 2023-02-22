function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aJrzc",(function(t,n){e(t.exports,"emtyObjectForLocalStorage",(function(){return d})),e(t.exports,"openIngredientsModal",(function(){return g}));var r=i("1v8zF"),a=i("bfh0X");const o=document.querySelector("[data-ingredients-modal]"),s=document.querySelector("[data-ingredients-modal-close]"),c=document.querySelector(".modal-drink-ingredients"),l=document.querySelector(".js-insert-modal-container");let d=null;function u(){o.classList.toggle("is-hidden"),o.classList.toggle("modal-open")}async function g(e){if(e.target.classList.contains("js-ingredients-modal")){const t=e.target.parentNode.dataset.ingredientName.trim(),n=await(0,a.fetchIngredientByName)(t);d=n,async function(e){const t=e.ingredients[0],n=Object.keys(t);for(const e of n)null!==t[e]&&void 0!==t[e]||(t[e]="");const{idIngredient:r,strABV:i,strAlcohol:a,strDescription:o,strIngredient:d,strType:u}=t;let g="";const m=o.split(" "),f=m.splice(0,1),h=m.join(" ");""!==f[0]&&(g=f[0]);const v=i||0,k=`\n     <h2 class="drink-name">${d}</h2>\n      <h3 class="drink-category">${u}</h3>\n        <div class="drink-category--wrapper">\n          <div class="drink-category--line"></div>\n        </div>\n       \n        <p class="drink-description"> <span class="modal-first-word-of-description-light">${g}</span> ${h}</p>\n\n        <ul class="drink-classification-list">\n          <li class="drink-classification-item">\n            <p class="classification-type classification">\n             ✶ Contains alcohol: <span class="classification-value">${a}</span>\n            </p>\n          </li>\n\n          <li class="drink-classification-item">\n            <p class="classification-type classification">\n              ✶ Alcohol by volume:\n              <span class="classification-value">${v} %</span>\n            </p>\n          </li>\n\n        </ul>\n    `,p=`\n     <h2 class="drink-name modal-ingredients-light-color">${d}</h2>\n      <h3 class="drink-category modal-ingredients-light-color">${u}</h3>\n        <div class="drink-category--wrapper">\n          <div class="drink-category--line"></div>\n        </div>\n        <p class="drink-description modal-light-grey"> <span class="modal-first-word-of-description-dark">${g}</span> ${h}</p>\n\n\n        <ul class="drink-classification-list">\n          <li class="drink-classification-item">\n            <p class="classification-type classification modal-ingredients-light-color">\n             ✶ <span class="classification-value modal-light-grey" > Contains alcohol: ${a}</span>\n            </p>\n          </li>\n\n          <li class="drink-classification-item">\n            <p class="classification-type classification modal-ingredients-light-color">\n              ✶ \n              <span class="classification-value modal-light-grey">Alcohol by volume: ${v} %</span>\n            </p>\n          </li>\n\n        </ul>\n    `,y=JSON.parse(localStorage.getItem("favoriteList"));y.favoriteIngrediants.map((e=>e.idIngredient)).includes(Number(r))?(document.querySelector(".drink-controller-btn--name").classList.remove("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.add("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Remove from favorite"):(document.querySelector(".drink-controller-btn--name").classList.add("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.remove("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Add to favorite");document.querySelector("[data-favorite-controller]").dataset.favoriteController=r;const L=localStorage.getItem("ui-theme");"light"!==L&&null!==L||(c.style.backgroundColor="#FCFCFC",s.style.fill="#202025",l.innerHTML=k);"dark"===L&&(c.style.backgroundColor="#202025",s.style.fill="#FCFCFC",l.innerHTML=p)}(n),u()}e.target.classList.contains("cocktail-item__remove")&&(0,r.removeIngredientFromLocalStorage)(e)}s.addEventListener("click",u),o.addEventListener("click",(e=>{e.target===o&&u()})),document.querySelector(".modal-drink-ingredients").addEventListener("click",(e=>{e.target.classList.contains("add-to-favorite-ingredient")?(0,r.addIngredientToLocalStorage)():e.target.classList.contains("remove-from-favorite-ingredient")&&(0,r.removeIngredientFromLocalStorage)(e)}))})),i.register("1v8zF",(function(t,n){e(t.exports,"addCocktailToLocalStorage",(function(){return d})),e(t.exports,"removeCocktailFromLocalStorage",(function(){return u})),e(t.exports,"addIngredientToLocalStorage",(function(){return g})),e(t.exports,"removeIngredientFromLocalStorage",(function(){return m}));var r=i("bfh0X"),a=i("aJrzc"),o=i("2mQds"),s=i("jrD5E");class c{constructor(e){this.idDrink=Number(e.drinks[0].idDrink),this.strDrinkThumb=e.drinks[0].strDrinkThumb,this.strDrink=e.drinks[0].strDrink,this.strInstructions=e.drinks[0].strInstructions,this.ingrediant=[];for(let t=1;t<=15;t++){let n={measure:"",ingrediantName:""},r="strIngredient"+t,i="strMeasure"+t;if(null==e.drinks[0][r])break;n.measure=e.drinks[0][i],n.ingrediantName=e.drinks[0][r],this.ingrediant.push(n)}}}class l{constructor(e){this.idIngredient=Number(e.ingredients[0].idIngredient),this.nameIngredient=e.ingredients[0].strIngredient,this.descriptionIngredient=e.ingredients[0].strDescription,this.typeIngredient=e.ingredients[0].strType,this.alcoholIngredient=e.ingredients[0].strAlcohol}}async function d(e){const t=JSON.parse(localStorage.getItem("favoriteList")),n=e.target.parentNode.dataset.idDrink,i=await(0,r.fetchDrinkById)(n),a=new c(i);t.favoriteCocktails.push(a),localStorage.setItem("favoriteList",JSON.stringify(t)),e.target.parentNode.parentNode.parentNode.classList.contains("main-section")?document.querySelector(".cocktail-list").innerHTML+=(0,o.renderCocktail)(i):(document.querySelector(`[data-id-drink = '${n}'] .cocktail-item__add-to`).className="cocktail-item__remove",document.querySelector(`[data-id-drink = '${n}'] .cocktail-item__remove`).innerHTML=`Remove\n      <svg class="svg" width="21" height="19">\n          <use href="${s}#icon-heart-filled"></use>\n      </svg>`),e.target.classList.contains("add-to-favorite")&&(document.querySelector(`[data-id-drink = '${n}'] .cocktails-modal-favorite`).classList.remove("add-to-favorite"),document.querySelector(`[data-id-drink = '${n}'] .cocktails-modal-favorite`).classList.add("remove-from-favorite"),document.querySelector(`[data-id-drink = '${n}'] .cocktails-modal-favorite`).innerText="Remove from favorite")}function u(e){let t=JSON.parse(localStorage.getItem("favoriteList"));const n=Number(e.target.parentNode.dataset.idDrink);if(t.favoriteCocktails=t.favoriteCocktails.filter((e=>{if(e.idDrink!=n)return e})),localStorage.setItem("favoriteList",JSON.stringify(t)),document.querySelector(`[data-id-drink = '${n}'] .cocktail-item__remove`).className="cocktail-item__add-to",document.querySelector(`[data-id-drink = '${n}'] .cocktail-item__add-to`).innerHTML=`Add to \n    <svg class="svg" width="21" height="19">\n        <use href="${s}#icon-heart-empty"></use>\n    </svg>`,e.target.classList.contains("remove-from-favorite")&&(document.querySelector(`[data-id-drink = '${n}'] .cocktails-modal-favorite`).classList.add("add-to-favorite"),document.querySelector(`[data-id-drink = '${n}'] .cocktails-modal-favorite`).classList.remove("remove-from-favorite"),document.querySelector(`[data-id-drink = '${n}'] .cocktails-modal-favorite`).innerText="Add to favorite"),e.target.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")||e.target.parentNode.parentNode.parentNode.classList.contains("main-section")){const t=document.querySelector(".cocktail-list");for(const n of t.children)for(const t of n.children)void 0!==t.dataset.idDrink&&t.dataset.idDrink===e.target.parentNode.dataset.idDrink&&n.remove();0===t.children.length&&(document.querySelector(".not-found").innerText="You haven't added any favorite cocktails yet")}}function g(){let e=JSON.parse(localStorage.getItem("favoriteList"));e.favoriteIngrediants.push(new l(a.emtyObjectForLocalStorage)),localStorage.setItem("favoriteList",JSON.stringify(e)),document.querySelector(".drink-controller-btn--name").classList.remove("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.add("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Remove from favorite"}function m(e){let t=Number(e.target.parentNode.dataset.favoriteController);void 0===e.target.parentNode.dataset.favoriteController&&(t=Number(e.target.parentNode.dataset.ingredientId));let n=JSON.parse(localStorage.getItem("favoriteList"));if(n.favoriteIngrediants=n.favoriteIngrediants.filter((e=>{if(e.idIngredient!==t)return e})),localStorage.setItem("favoriteList",JSON.stringify(n)),document.querySelector(".drink-controller-btn--name").classList.add("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.remove("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Add to favorite",e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")||e.target.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")){const e=document.querySelector(".card-list");for(const n of e.children)for(const e of n.children)for(const r of e.children)null!=r.dataset.ingredientId&&Number(r.dataset.ingredientId)===t&&n.remove();0===e.children.length&&(document.querySelector(".not-found").innerText="You haven't added any favorite ingredients yet")}}})),i.register("bfh0X",(function(t,n){e(t.exports,"fetchDrinksByName",(function(){return i})),e(t.exports,"fetchDrinkById",(function(){return a})),e(t.exports,"fetchRandomCocktail",(function(){return o})),e(t.exports,"fetchDrinkByLetter",(function(){return s})),e(t.exports,"fetchIngredientByName",(function(){return c}));const r="https://www.thecocktaildb.com/api/json/v1/1/";async function i(e){try{const t=await fetch(`${r}search.php?s=${e}`);return await t.json()}catch(e){console.log(e.message)}}async function a(e){try{const t=await fetch(`${r}lookup.php?i=${e}`);return await t.json()}catch(e){console.log(e.message)}}async function o(){try{const e=await fetch(`${r}random.php`);return await e.json()}catch(e){console.log(e.message)}}async function s(e){try{const t=await fetch(`${r}search.php?f=${e}`);return await t.json()}catch(e){console.log(e.message)}}async function c(e){try{const t=await fetch(`${r}search.php?i=${e}`);return await t.json()}catch(e){console.log(e.message)}}})),i.register("2mQds",(function(t,n){e(t.exports,"renderCocktail",(function(){return o}));var r=i("2nhTy"),a=i("jrD5E");function o(e){let t,n;(0,r.createPagination)();const i=localStorage.getItem("ui-theme");"light"!==i&&null!==i||(t="name-dark",n="svg-dark-theme"),"dark"===i&&(t="name-light",n="svg-light");const o=e.drinks;let s=JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((e=>e.idDrink));return o.map((e=>s.includes(Number(e.idDrink))?`<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="${e.strDrinkThumb}" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name ${t}">${e.strDrink}</p>\n                        <div class="button-wrap" data-id-drink='${e.idDrink}'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__remove">Remove\n                                <svg class="svg ${n}" width="21" height="19">\n                                    <use href="${a}#icon-heart-filled"></use>\n                                </svg>\n                            </button>                                \n                        </div>\n                    </li>`:`<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="${e.strDrinkThumb}" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name ${t}">${e.strDrink}</p>\n                        <div class="button-wrap" data-id-drink='${e.idDrink}'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__add-to">Add to \n                                <svg class="svg ${n}" width="21" height="19">\n                                    <use href="${a}#icon-heart-empty"></use>\n                                </svg>\n                            </button>\n                        </div>\n                    </li>`))}document.querySelector(".switcher-button").addEventListener("click",(e=>{const t=localStorage.getItem("ui-theme"),n=document.querySelectorAll(".svg"),r=document.querySelectorAll(".cocktail-item__name");n.forEach((e=>{"light"===t||null===t?(e.classList.remove("svg-dark-theme"),e.classList.add("svg-light")):"dark"===t&&(e.classList.remove("svg-light"),e.classList.add("svg-dark-theme"))})),r.forEach((e=>{"light"!==t&&null!==t||(e.classList.remove("name-dark"),e.classList.add("name-light")),"dark"===t&&(e.classList.remove("name-light"),e.classList.add("name-dark"))}))}))})),i.register("2nhTy",(function(t,n){e(t.exports,"generatePagination",(function(){return g})),e(t.exports,"resetPagination",(function(){return m})),e(t.exports,"createPagination",(function(){return f})),e(t.exports,"sliceArray",(function(){return h}));var r=i("2mQds"),a=i("jrD5E");const o=document.getElementById("pagination");let s,c,l=3,d=1,u=0;function g(e){s=e,c=s.drinks.length}function m(){d=1,u=0}function f(){const e=localStorage.getItem("ui-theme"),t=Math.ceil(c/l);if(t<2)return;o.innerHTML='<div class="pagination-pages"></div>';const n=document.querySelector(".pagination-pages");for(let r=1;r<=7&&r<=t;r++){let i=r;u>3&&t>7&&(i+=u-4);const a=document.createElement("button");a.classList.add("pagination-button"),"dark"===e&&a.classList.add("pagination-button--dark-theme"),1===r?(a.dataset.paginationBtnId=r,a.textContent=r,i=r):2===r&&i>2||6===r&&t>i+1?(a.dataset.paginationBtnId=i,a.classList.add("pagination-button__ellipsis"),a.textContent="..."):7===r||r===t?(a.dataset.paginationBtnId=t,a.textContent=t,i=t):(a.dataset.paginationBtnId=i,a.textContent=i),i===d&&(a.classList.add("pagination-button__active"),"dark"===e&&a.classList.add("pagination-button__active--dark-theme")),a.addEventListener("click",(async e=>{d=i,u=Number(e.target.dataset.paginationBtnId),u+2>=t&&t>7&&(u=t-3),e.target.parentNode.parentNode.parentNode.classList.contains("favorite-ingredients")?k():v()})),n.append(a)}const r=document.querySelector(".pagination-button__active"),i=Number(r.dataset.paginationBtnId),s=document.createElement("button");s.classList.add("pagination-button-arrow"),"dark"===e&&s.classList.add("pagination-button-arrow--dark-theme"),s.innerHTML="dark"===e?` <svg class="pagination-svg pagination-svg--dark-theme" width="24" height="24">\n      <use href="${a}#icon-arrow"></use>\n    </svg>`:` <svg class="pagination-svg" width="24" height="24">\n      <use href="${a}#icon-arrow"></use>\n    </svg>`,i===t&&s.setAttribute("disabled","");const g=document.createElement("button");g.classList.add("pagination-button-arrow"),"dark"===e&&g.classList.add("pagination-button-arrow--dark-theme"),g.innerHTML="dark"===e?` <svg class="pagination-svg pagination-svg--prev pagination-svg--dark-theme" width="24" height="24">\n      <use href="${a}#icon-arrow"></use>\n    </svg>`:` <svg class="pagination-svg pagination-svg--prev" width="24" height="24">\n      <use href="${a}#icon-arrow"></use>\n    </svg>`,t<7&&(s.style.display="none",g.style.display="none"),u&&1!==u||g.setAttribute("disabled",""),s.addEventListener("click",(async()=>{u||(u=1),u+=1,d+=1,u+2>=t&&t>7&&(u=t-3),v()})),g.addEventListener("click",(async()=>{u||(u=1),d-=1,u+2>=t&&t>7?u=t-3:(i<=t-3||t<7)&&(u-=1),v()})),o.prepend(g),o.append(s)}function h(e){const t=window.innerWidth;t>=768&&(l=6),t>=1280&&(l=9);const n=(d-1)*l,r=n+l;return{drinks:e.slice(n,r)}}async function v(){const e=document.querySelector(".cocktail-list");e.innerHTML="";const t=h(s.drinks),n=await(0,r.renderCocktail)(t);e.insertAdjacentHTML("beforeend",n.join(""))}function k(){const e=document.querySelector(".card-list");e.innerHTML="";const t=h(s.drinks);let n="";t.drinks.forEach((e=>{n+=function(e){f();const t=e.nameIngredient,n=e.typeIngredient,r=e.idIngredient;let i;const o=localStorage.getItem("ui-theme");"light"!==o&&null!==o||(i="name-dark");"dark"===o&&(i="name-light");return`<div class="cocktail-list__cocktail-item">\n      <div class='card-item__info'>\n        <p class="card-item__name ${i}">${t}</p>\n        <p class="card-item__details ${i}">${n}</p>\n        <div data-ingredient-name="${t}" data-ingredient-id="${r}" class="button-wrap">\n          <button type="button" class="cocktail-item__learn-more js-ingredients-modal">Learn more</button>\n          <button type="button" class="cocktail-item__remove">Remove\n            <svg class="svg" width="21" height="19">\n              <use href="${a}#icon-heart-filled"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </div>`}(e)})),e.insertAdjacentHTML("beforeend",n)}document.querySelector(".switcher-button").addEventListener("click",(e=>{console.log(e.target);const t=localStorage.getItem("ui-theme"),n=document.querySelectorAll(".card-itemname"),r=document.querySelectorAll(".card-itemdetails");if(n.forEach((e=>{"light"!==t&&null!==t||(e.classList.remove("name-light"),e.classList.add("name-dark")),"dark"===t&&(e.classList.remove("name-dark"),e.classList.add("name-light"))})),r.forEach((e=>{"light"!==t&&null!==t||(e.classList.remove("name-light"),e.classList.add("name-dark")),"dark"===t&&(e.classList.remove("name-dark"),e.classList.add("name-light"))})),o.firstChild){document.querySelectorAll(".pagination-button").forEach((e=>{"dark"===t?e.classList.remove("pagination-button--dark-theme"):e.classList.add("pagination-button--dark-theme")}));document.querySelectorAll(".pagination-button-arrow").forEach((e=>{"dark"===t?e.classList.remove("pagination-button-arrow--dark-theme"):e.classList.add("pagination-button-arrow--dark-theme")}));document.querySelectorAll(".pagination-svg").forEach((e=>{"dark"===t?e.classList.remove("pagination-svg--dark-theme"):e.classList.add("pagination-svg--dark-theme")}));const e=document.querySelector(".pagination-button__active");"dark"===t?e.classList.remove("pagination-button__active--dark-theme"):e.classList.add("pagination-button__active--dark-theme")}}))})),i.register("jrD5E",(function(e,t){e.exports=new URL(i("kyEFX").resolve("8OQ7p"),import.meta.url).toString()})),i.register("brr8Z",(function(e,t){const n=document.querySelector("[data-header-theme-switcher]"),r=document.querySelectorAll("[data-text-color-switcher-light]"),i=document.querySelectorAll("[data-text-color-switcher-dark]"),a=document.querySelector("body"),o=document.querySelectorAll(".navigation__item"),s=document.querySelectorAll(".switcher-button"),c=document.querySelectorAll(".switcher-dot"),l=document.querySelectorAll(".dark-theme-text"),d=document.querySelectorAll(".navigation-drop__item"),u=document.querySelectorAll(".favorite__items"),g=document.querySelectorAll("dark-theme-grey-text"),m=document.querySelector(".mobile-menu"),f=document.querySelectorAll(".burger-menu-btn-icon"),h=document.querySelector(".burger-menu-arrow-icon"),v=document.querySelector("[data-burger-theme-switcher]");function k(){c.forEach((e=>e.classList.toggle("switcher-dot-left"))),r.forEach((e=>e.classList.toggle("burger-switcher-light-revers"))),a.classList.toggle("dark-size"),s.forEach((e=>e.classList.toggle("switcher-button-dark"))),u.forEach((e=>e.classList.toggle("favorite__items-dark"))),i.forEach((e=>e.classList.toggle("header-switcher-dark-revers"))),c.forEach((e=>e.classList.toggle("switcher-dot-dark"))),o.forEach((e=>e.classList.toggle("theme"))),d.forEach((e=>e.classList.toggle("navigation-drop__item-dark"))),l.forEach((e=>e.classList.toggle("dark-theme"))),g.forEach((e=>e.classList.toggle("dark-theme-grey"))),f.forEach((e=>e.classList.toggle("burger-menu-btn-icon-dark"))),m.classList.toggle("dark-size")}function p(){c.forEach((e=>e.classList.toggle("switcher-dot-left"))),r.forEach((e=>e.classList.toggle("burger-switcher-light-revers"))),a.classList.toggle("dark-size"),s.forEach((e=>e.classList.toggle("switcher-button-dark"))),u.forEach((e=>e.classList.toggle("favorite__items-dark"))),i.forEach((e=>e.classList.toggle("header-switcher-dark-revers"))),c.forEach((e=>e.classList.toggle("switcher-dot-dark"))),l.forEach((e=>e.classList.toggle("dark-theme"))),h.classList.toggle("burger-menu-btn-icon-dark"),g.forEach((e=>e.classList.toggle("dark-theme-grey"))),m.classList.toggle("dark-size")}"dark"===localStorage.getItem("ui-theme")&&k(),n.addEventListener("click",(function(){const e=localStorage.getItem("ui-theme");""===e||"light"===e?(localStorage.setItem("ui-theme","dark"),k()):(localStorage.setItem("ui-theme","light"),k())})),v.addEventListener("click",(function(){const e=localStorage.getItem("ui-theme");""===e||"light"===e?(localStorage.setItem("ui-theme","dark"),p()):(localStorage.setItem("ui-theme","light"),p())}))})),i.register("bUb57",(function(e,t){var n=i("bfh0X"),r=i("2mQds"),a=i("2nhTy"),o=i("jrD5E");const s=document.querySelector("[data-burger-menu-toggle]"),c=document.querySelector("[data-burger-menu]"),l=document.querySelector("[data-header-submit]"),d=document.querySelector("[data-burger-submit]");s.addEventListener("click",(function(){s.classList.toggle("is-open"),c.classList.toggle("is-open"),s.setAttribute("aria-expanded","true"),u.classList.toggle("unscroll-body")}));const u=document.querySelector("body");l.addEventListener("submit",(async function(e){e.preventDefault(),(0,a.resetPagination)();const t=e.currentTarget.elements.headerinput.value;if(""===t)return g.innerHTML="",f.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML=`<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="${o}#icon-not-found"></use>\n      </svg>`,void(document.querySelector(".pagination").innerHTML="");const i=await(0,n.fetchDrinksByName)(t);if(null===i.drinks)return g.innerHTML="",f.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML=`<svg\n      class="icon-not_found"\n      width="345"\n      height="380"              \n      >\n      <use href="${o}#icon-not-found"></use>\n      </svg>`,void(document.querySelector(".pagination").innerHTML="");(0,a.generatePagination)(i),m.innerHTML="",g.innerHTML="",f.textContent="Searching results";const s=(0,a.sliceArray)(i.drinks),c=await(0,r.renderCocktail)(s);g.insertAdjacentHTML("beforeend",c.join(""))})),d.addEventListener("submit",(async function(e){e.preventDefault(),(0,a.resetPagination)(),s.classList.toggle("is-open"),c.classList.toggle("is-open");const t=e.currentTarget.elements.burgerinput.value;if(""===t)return g.innerHTML="",f.textContent="Sorry, we didn't find any cocktail for you",void(m.innerHTML=`<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="${o}#icon-not-found"></use>\n      </svg>`);const i=await(0,n.fetchDrinksByName)(t);if(null===i.drinks)return g.innerHTML="",f.textContent="Sorry, we didn't find any cocktail for you",void(m.innerHTML=`<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="${o}#icon-not-found"></use>\n      </svg>`);(0,a.generatePagination)(i),m.innerHTML="",g.innerHTML="",f.textContent="Searching results";const l=(0,a.sliceArray)(i.drinks),d=await(0,r.renderCocktail)(l);g.insertAdjacentHTML("beforeend",d.join("")),u.classList.toggle("unscroll-body")}));const g=document.querySelector(".cocktail-list"),m=document.querySelector(".not-found"),f=document.querySelector(".cocktail-title-main");const h=document.querySelector("[data-burger-menu-arrow"),v=document.querySelector("[data-burger-menu-favorite");h.addEventListener("click",(function(){v.classList.toggle("burger-favorite__items-display")}))})),i("kyEFX").register(JSON.parse('{"aOf5b":"favorite-ingredients.44222db3.js","8OQ7p":"icons.3897eb8e.svg"}'));
//# sourceMappingURL=favorite-ingredients.44222db3.js.map
