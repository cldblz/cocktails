var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"7bk21":"index.71b80320.js","8OQ7p":"icons.3897eb8e.svg","sMaVZ":"favorite-ingredients.036e9a6d.js"}'));var i=o("bfh0X");const n=document.querySelector("[data-burger-menu-toggle]"),a=document.querySelector("[data-burger-menu]"),c=document.querySelector("[data-header-theme-switcher]"),s=document.querySelector("[data-burger-theme-switcher]"),l=document.querySelector("[data-header-text-color-switcher-light]"),d=document.querySelector("[data-header-text-color-switcher-dark]"),u=document.querySelector("[data-burger-text-color-switcher-light]"),m=document.querySelector("[data-burger-text-color-switcher-dark]"),g=document.querySelector("body");!function(){const e=localStorage.getItem("ui-theme");console.log(e)}();const f=document.querySelector("[data-header-submit]"),k=document.querySelector("[data-burger-submit]");n.addEventListener("click",(function(){n.classList.toggle("is-open"),a.classList.toggle("is-open"),n.setAttribute("aria-expanded","true"),g.classList.toggle("unscroll-body")})),c.addEventListener("click",(function(){document.querySelector(".switcher-dot").classList.toggle("switcher-dot-left"),l.classList.toggle("header-switcher-light-revers"),d.classList.toggle("header-switcher-dark-revers"),g.classList.toggle("dark-size"),"dark"===localStorage.getItem("ui-theme")?localStorage.setItem("ui-theme","light"):localStorage.setItem("ui-theme","dark")})),s.addEventListener("click",(function(){document.querySelector(".switcher-burger-dot").classList.toggle("switcher-dot-left"),u.classList.toggle("header-switcher-light-revers"),m.classList.toggle("header-switcher-dark-revers"),g.classList.toggle("dark-size"),"dark"===localStorage.getItem("ui-theme")?localStorage.setItem("ui-theme","light"):localStorage.setItem("ui-theme","dark")})),f.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements.headerinput.value,r=await(0,i.fetchDrinksByName)(t);console.log(r)})),k.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements.headerinput.value;await(0,i.fetchDrinksByName)(t);console.log("submit")}));const v=document.querySelector("[data-burger-menu-arrow"),h=document.querySelector("[data-burger-menu-favorite");v.addEventListener("click",(function(){h.classList.toggle("burger-favorite__items-display")})),o("bfh0X"),o("2mQds"),o("1v8zF");i=o("bfh0X");var y=o("2mQds");document.addEventListener("DOMContentLoaded",(async function(){let e={drinks:[]};const t=window.innerWidth;let r=3;t>=768&&(r=6);t>=1280&&(r=9);for(let t=1;t<=r;t++){let t=await(0,i.fetchRandomCocktail)();for(;e.drinks.map((e=>e.idDrink)).includes(t.drinks[0].idDrink);)t=await(0,i.fetchRandomCocktail)();e.drinks.push(t.drinks[0])}const o=(0,y.renderCocktail)(e);document.querySelector(".cocktail-title-main").innerText="Cocktails",document.querySelector(".cocktail-list").innerHTML=o.join("")}));if(null==JSON.parse(localStorage.getItem("favoriteList"))){let e={favoriteCocktails:[{idDrink:0}],favoriteIngrediants:[{idIngredient:0}]};localStorage.setItem("favoriteList",JSON.stringify(e))}var L=o("1v8zF"),S=(i=o("bfh0X"),o("aJrzc"));const p=document.querySelector("[data-cocktails-modal]"),q=document.querySelector("[data-cocktails-modal-close]"),w=document.querySelector(".cocktails-modal-content-wrap"),b=document.querySelector(".cocktail-list"),_=document.querySelector("body");function x(){p.classList.toggle("is-hidden"),_.classList.toggle("modal-cocktails-open")}q.addEventListener("click",x),p.addEventListener("click",(e=>{if(e.target!==p)return e.target.classList.contains("add-to-favorite")&&(0,L.addCocktailToLocalStorage)(e),void(e.target.classList.contains("remove-from-favorite")&&(0,L.removeCocktailFromLocalStorage)(e));x()})),b.addEventListener("click",(async function(e){if(e.target.classList.contains("cocktail-item__learn-more")){const t=e.target.parentNode.dataset.idDrink;document.querySelector(".cocktails-modal").dataset.idDrink=t;!async function(e){const t=e.drinks[0],r=[];let o;for(let e=1;e<16;e++){const i=t[`strIngredient${e}`];let n=t[`strMeasure${e}`];i&&(n||(n=""),r.push(`<li class="cocktail-ingredients-list-item" data-ingredient-name='${i}'>\n          <p class="js-ingredients-modal"><span>&#10038;</span> ${n} ${i}</p>\n        </li>`),o=r.join(""))}const i=`<h2 class="cocktail-title">${t.strDrink}</h2>\n      <div class="cocktail-description">\n        <h3 class="cocktail-description__title">Instructions:</h3>\n        <p class="cocktail-description__text">\n          ${t.strInstructions}\n        </p>\n      </div>\n      <img src="${t.strDrinkThumb}" alt="${t.strCategory}" class="cocktail-image" />\n      <div class="cocktail-ingredients">\n        <h3 class="cocktail-ingredients__title">Ingredients</h3>\n        <p class="cocktail-ingredients__remark">Per cocktail</p>\n        <ul class="cocktail-ingredients-list">\n          ${o}\n        </ul>\n      </div>`;JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((e=>e.idDrink)).includes(Number(t.idDrink))?(document.querySelector(".cocktails-modal-favorite").classList.remove("add-to-favorite"),document.querySelector(".cocktails-modal-favorite").classList.add("remove-from-favorite"),document.querySelector(".cocktails-modal-favorite").innerText="Remove from favorite"):(document.querySelector(".cocktails-modal-favorite").classList.add("add-to-favorite"),document.querySelector(".cocktails-modal-favorite").classList.remove("remove-from-favorite"),document.querySelector(".cocktails-modal-favorite").innerText="Add to favorite"),w.innerHTML=i,document.querySelector(".cocktail-ingredients-list").addEventListener("click",S.openIngredientsModal)}(await(0,i.fetchDrinkById)(t)),x()}"cocktail-item__add-to"==e.target.className&&(0,L.addCocktailToLocalStorage)(e),"cocktail-item__remove"==e.target.className&&(0,L.removeCocktailFromLocalStorage)(e)}));i=o("bfh0X"),y=o("2mQds");if(null==JSON.parse(localStorage.getItem("favoriteList"))){let e={favoriteCocktails:[{idDrink:0}],favoriteIngrediants:[]};localStorage.setItem("favoriteList",JSON.stringify(e))}var C;C=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const I=document.querySelector(".mobile-wrapper-select"),E=document.querySelector(".list-mobile-filter"),T=document.querySelector(".mobile-list-letters"),D=document.querySelector(".hero__select-text"),N=document.querySelector(".cocktail-list"),H=document.querySelector(".cocktail-title-main"),M=document.querySelector(".not-found"),O=document.querySelector(".wrapper-tablet-desktop-filter");I.addEventListener("click",(()=>{E.classList.toggle("visually-hidden")})),T.addEventListener("click",(async function(e){if("LI"===e.target.nodeName){D.textContent=e.target.textContent,E.classList.add("visually-hidden"),I.classList.add("active"),N.innerHTML="";const t=await(0,i.fetchDrinkByLetter)(e.target.textContent);if(null===t.drinks)return H.textContent="Sorry, we didn't find any cocktail for you",void(M.innerHTML=`<svg\n          class="icon-not_found"\n          width="280"\n          height="308"              \n        >\n          <use href="${C}#icon-not-found"></use>\n        </svg>`);M.innerHTML="",H.textContent="Searching results";const r=await(0,y.renderCocktail)(t);N.insertAdjacentHTML("beforeend",r.join(""))}})),O.addEventListener("click",(e=>{"LI"===e.target.nodeName&&function(e){const t=[...document.querySelectorAll(".word")].find((e=>e.classList.contains("active")));t&&(t.classList.remove("active"),e.classList.add("active")),e.classList.add("active")}(e.target),(async e=>{if("LI"===e.target.nodeName){N.innerHTML="";const t=await(0,i.fetchDrinkByLetter)(e.target.textContent);if(null===t.drinks)return H.textContent="Sorry, we didn't find any cocktail for you",void(M.innerHTML=`<svg\n        class="icon-not_found"\n        width="345"\n        height="380"              \n      >\n        <use href="${C}#icon-not-found"></use>\n      </svg>`);M.innerHTML="",H.textContent="Searching results";const r=await(0,y.renderCocktail)(t);N.insertAdjacentHTML("beforeend",r.join(""))}})(e)}));
//# sourceMappingURL=index.71b80320.js.map
