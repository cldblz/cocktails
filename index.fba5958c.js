function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("kyEFX",(function(e,i){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var n={};r=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)n[e[i]]=t[e[i]]},o=function(t){var e=n[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("kyEFX").register(JSON.parse('{"7bk21":"index.fba5958c.js","8OQ7p":"icons.3897eb8e.svg"}'));const n="https://www.thecocktaildb.com/api/json/v1/1/";async function a(t){try{const e=await fetch(`${n}search.php?s=${t}`);return await e.json()}catch(t){console.log(t.message)}}async function c(t){try{const e=await fetch(`${n}lookup.php?i=${t}`);return await e.json()}catch(t){console.log(t.message)}}async function s(){try{const t=await fetch(`${n}random.php`);return await t.json()}catch(t){console.log(t.message)}}async function l(t){try{const e=await fetch(`${n}search.php?f=${t}`);return await e.json()}catch(t){console.log(t.message)}}const d=document.querySelector("[data-burger-menu-toggle]"),u=document.querySelector("[data-burger-menu]"),m=document.querySelector("[data-header-theme-switcher]"),g=document.querySelector("[data-burger-theme-switcher]"),f=document.querySelector("[data-header-text-color-switcher-light]"),k=document.querySelector("[data-header-text-color-switcher-dark]"),v=document.querySelector("[data-burger-text-color-switcher-light]"),h=document.querySelector("[data-burger-text-color-switcher-dark]"),y=document.querySelector("body");!function(){const t=localStorage.getItem("ui-theme");console.log(t)}();const p=document.querySelector("[data-header-submit]"),S=document.querySelector("[data-burger-submit]");d.addEventListener("click",(function(){d.classList.toggle("is-open"),u.classList.toggle("is-open"),d.setAttribute("aria-expanded","true"),y.classList.toggle("unscroll-body")})),m.addEventListener("click",(function(){document.querySelector(".switcher-dot").classList.toggle("switcher-dot-left"),f.classList.toggle("header-switcher-light-revers"),k.classList.toggle("header-switcher-dark-revers"),y.classList.toggle("dark-size"),"dark"===localStorage.getItem("ui-theme")?localStorage.setItem("ui-theme","light"):localStorage.setItem("ui-theme","dark")})),g.addEventListener("click",(function(){document.querySelector(".switcher-burger-dot").classList.toggle("switcher-dot-left"),v.classList.toggle("header-switcher-light-revers"),h.classList.toggle("header-switcher-dark-revers"),y.classList.toggle("dark-size"),"dark"===localStorage.getItem("ui-theme")?localStorage.setItem("ui-theme","light"):localStorage.setItem("ui-theme","dark")})),p.addEventListener("submit",(async function(t){t.preventDefault();const e=t.currentTarget.elements.headerinput.value,i=await a(e);console.log(i)})),S.addEventListener("submit",(function(t){t.preventDefault();const e=t.currentTarget.elements.headerinput.value;await(0,a)(e);console.log("submit")}));const L=document.querySelector("[data-burger-menu-arrow"),w=document.querySelector("[data-burger-menu-favorite");L.addEventListener("click",(function(){w.classList.toggle("burger-favorite__items-display")}));var b;function _(t){const e=t.drinks;let i=JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((t=>t.idDrink));return e.map((t=>i.includes(Number(t.idDrink))?`<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="${t.strDrinkThumb}" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name">${t.strDrink}</p>\n                        <div class="button-wrap" data-id-drink='${t.idDrink}'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__remove">Remove\n                                <svg class="svg" width="21" height="19">\n                                    <use href="${b}#icon-heart-filled"></use>\n                                </svg>\n                            </button>                                \n                        </div>\n                    </li>`:`<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="${t.strDrinkThumb}" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name">${t.strDrink}</p>\n                        <div class="button-wrap" data-id-drink='${t.idDrink}'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__add-to">Add to \n                                <svg class="svg" width="21" height="19">\n                                    <use href="${b}#icon-heart-empty"></use>\n                                </svg>\n                            </button>\n                        </div>\n                    </li>`))}b=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();class q{constructor(t){this.idDrink=Number(t.drinks[0].idDrink),this.imgSrc=t.drinks[0].strDrinkThumb,this.nameDrink=t.drinks[0].strDrink,this.recipteDrink=t.drinks[0].strInstructions,this.ingrediant=[];for(let e=1;e<=15;e++){let i={measure:"",ingrediantName:""},r="strIngredient"+e,o="strMeasure"+e;if(null==t.drinks[0][r])break;i.measure=t.drinks[0][o],i.ingrediantName=t.drinks[0][r],this.ingrediant.push(i)}}}async function $(t){const e=JSON.parse(localStorage.getItem("favoriteList")),i=t.target.parentNode.dataset.idDrink,r=await c(i),o=new q(r);e.favoriteCocktails.push(o),localStorage.setItem("favoriteList",JSON.stringify(e)),document.querySelector(`[data-id-drink = '${i}'] .cocktail-item__add-to`).className="cocktail-item__remove",document.querySelector(`[data-id-drink = '${i}'] .cocktail-item__remove`).innerHTML=`Remove\n    <svg class="svg" width="21" height="19">\n        <use href="${b}#icon-heart-filled"></use>\n    </svg>`,t.target.classList.contains("add-to-favorite")&&(document.querySelector(`[data-id-drink = '${i}'] .cocktails-modal-favorite`).classList.remove("add-to-favorite"),document.querySelector(`[data-id-drink = '${i}'] .cocktails-modal-favorite`).classList.add("remove-from-favorite"),document.querySelector(`[data-id-drink = '${i}'] .cocktails-modal-favorite`).innerText="Remove from favorite")}function D(t){let e=JSON.parse(localStorage.getItem("favoriteList"));const i=Number(t.target.parentNode.dataset.idDrink);e.favoriteCocktails=e.favoriteCocktails.filter((t=>{if(t.idDrink!=i)return t})),localStorage.setItem("favoriteList",JSON.stringify(e)),document.querySelector(`[data-id-drink = '${i}'] .cocktail-item__remove`).className="cocktail-item__add-to",document.querySelector(`[data-id-drink = '${i}'] .cocktail-item__add-to`).innerHTML=`Add to \n    <svg class="svg" width="21" height="19">\n        <use href="${b}#icon-heart-empty"></use>\n    </svg>`,t.target.classList.contains("remove-from-favorite")&&(document.querySelector(`[data-id-drink = '${i}'] .cocktails-modal-favorite`).classList.add("add-to-favorite"),document.querySelector(`[data-id-drink = '${i}'] .cocktails-modal-favorite`).classList.remove("remove-from-favorite"),document.querySelector(`[data-id-drink = '${i}'] .cocktails-modal-favorite`).innerText="Add to favorite")}document.addEventListener("DOMContentLoaded",(async function(){let t={drinks:[]};const e=window.innerWidth;let i=3;e>=768&&(i=6);e>=1280&&(i=9);for(let e=1;e<=i;e++){let e=await s();for(;t.drinks.map((t=>t.idDrink)).includes(e.drinks[0].idDrink);)e=await s();t.drinks.push(e.drinks[0])}const r=_(t);document.querySelector(".cocktail-title-main").innerText="Cocktails",document.querySelector(".cocktail-list").innerHTML=r.join("")}));if(null==JSON.parse(localStorage.getItem("favoriteList"))){let t={favoriteCocktails:[{idDrink:0}],favoriteIngrediants:[]};localStorage.setItem("favoriteList",JSON.stringify(t))}const N=document.querySelector("[data-cocktails-modal]"),x=document.querySelector("[data-cocktails-modal-close]"),I=document.querySelector(".cocktails-modal-content-wrap"),T=document.querySelector(".cocktail-list"),E=document.querySelector("body");function C(){N.classList.toggle("is-hidden"),E.classList.toggle("modal-cocktails-open")}x.addEventListener("click",C),N.addEventListener("click",(t=>{if(t.target!==N)return t.target.classList.contains("add-to-favorite")&&$(t),void(t.target.classList.contains("remove-from-favorite")&&D(t));C()})),T.addEventListener("click",(async function(t){if(t.target.classList.contains("cocktail-item__learn-more")){const e=t.target.parentNode.dataset.idDrink;document.querySelector(".cocktails-modal").dataset.idDrink=e;!async function(t){const e=t.drinks[0],i=[];let r;for(let t=1;t<16;t++){const o=e[`strIngredient${t}`];let n=e[`strMeasure${t}`];o&&(n||(n=""),i.push(`<li class="cocktail-ingredients-list-item" data-ingredient-name='${o}'>\n          <p><span>&#10038;</span> ${n} ${o}</p>\n        </li>`),r=i.join(""))}const o=`<h2 class="cocktail-title">${e.strDrink}</h2>\n      <div class="cocktail-description">\n        <h3 class="cocktail-description__title">Instructions:</h3>\n        <p class="cocktail-description__text">\n          ${e.strInstructions}\n        </p>\n      </div>\n      <img src="${e.strDrinkThumb}" alt="${e.strCategory}" class="cocktail-image" />\n      <div class="cocktail-ingredients">\n        <h3 class="cocktail-ingredients__title">Ingredients</h3>\n        <p class="cocktail-ingredients__remark">Per cocktail</p>\n        <ul class="cocktail-ingredients-list">\n          ${r}\n        </ul>\n      </div>`;JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((t=>t.idDrink)).includes(Number(e.idDrink))?(document.querySelector(".cocktails-modal-favorite").classList.remove("add-to-favorite"),document.querySelector(".cocktails-modal-favorite").classList.add("remove-from-favorite"),document.querySelector(".cocktails-modal-favorite").innerText="Remove from favorite"):(document.querySelector(".cocktails-modal-favorite").classList.add("add-to-favorite"),document.querySelector(".cocktails-modal-favorite").classList.remove("remove-from-favorite"),document.querySelector(".cocktails-modal-favorite").innerText="Add to favorite"),I.innerHTML=o}(await c(e)),C()}"cocktail-item__add-to"==t.target.className&&$(t),"cocktail-item__remove"==t.target.className&&D(t)}));if(null==JSON.parse(localStorage.getItem("favoriteList"))){let t={favoriteCocktails:[{idDrink:0}],favoriteIngrediants:[]};localStorage.setItem("favoriteList",JSON.stringify(t))}const O=document.querySelector(".mobile-wrapper-select"),H=document.querySelector(".list-mobile-filter"),M=document.querySelector(".mobile-list-letters"),j=document.querySelector(".hero__select-text"),J=document.querySelector(".cocktail-list"),A=document.querySelector(".cocktail-title-main"),R=document.querySelector(".not-found"),F=document.querySelector(".wrapper-tablet-desktop-filter");O.addEventListener("click",(()=>{H.classList.toggle("visually-hidden")})),M.addEventListener("click",(async function(t){if("LI"===t.target.nodeName){j.textContent=t.target.textContent,H.classList.add("visually-hidden"),O.classList.add("active"),J.innerHTML="";const e=await l(t.target.textContent);if(null===e.drinks)return A.textContent="Sorry, we didn't find any cocktail for you",void(R.innerHTML=`<svg\n          class="icon-not_found"\n          width="280"\n          height="308"              \n        >\n          <use href="${b}#icon-not-found"></use>\n        </svg>`);R.innerHTML="",A.textContent="Searching results";const i=await _(e);J.insertAdjacentHTML("beforeend",i.join(""))}})),F.addEventListener("click",(t=>{"LI"===t.target.nodeName&&function(t){const e=[...document.querySelectorAll(".word")].find((t=>t.classList.contains("active")));e&&(e.classList.remove("active"),t.classList.add("active")),t.classList.add("active")}(t.target),(async t=>{if("LI"===t.target.nodeName){J.innerHTML="";const e=await l(t.target.textContent);if(null===e.drinks)return A.textContent="Sorry, we didn't find any cocktail for you",void(R.innerHTML=`<svg\n        class="icon-not_found"\n        width="345"\n        height="380"              \n      >\n        <use href="${b}#icon-not-found"></use>\n      </svg>`);R.innerHTML="",A.textContent="Searching results";const i=await _(e);J.insertAdjacentHTML("beforeend",i.join(""))}})(t)}));
//# sourceMappingURL=index.fba5958c.js.map