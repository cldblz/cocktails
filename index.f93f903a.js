var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"7bk21":"index.f93f903a.js","8OQ7p":"icons.3897eb8e.svg","sMaVZ":"favorite-ingredients.21b995bd.js"}'));var r=o("bfh0X");const n=document.querySelector("[data-burger-menu-toggle]"),a=document.querySelector("[data-burger-menu]"),c=document.querySelector("[data-header-theme-switcher]"),s=document.querySelector("[data-burger-theme-switcher]"),l=document.querySelector("[data-header-text-color-switcher-light]"),d=document.querySelector("[data-header-text-color-switcher-dark]"),u=document.querySelector("[data-burger-text-color-switcher-light]"),m=document.querySelector("[data-burger-text-color-switcher-dark]"),g=document.querySelector("body");!function(){const e=localStorage.getItem("ui-theme");console.log(e)}();const k=document.querySelector("[data-header-submit]"),f=document.querySelector("[data-burger-submit]");n.addEventListener("click",(function(){n.classList.toggle("is-open"),a.classList.toggle("is-open"),n.setAttribute("aria-expanded","true"),g.classList.toggle("unscroll-body")})),c.addEventListener("click",(function(){document.querySelector(".switcher-dot").classList.toggle("switcher-dot-left"),l.classList.toggle("header-switcher-light-revers"),d.classList.toggle("header-switcher-dark-revers"),g.classList.toggle("dark-size"),"dark"===localStorage.getItem("ui-theme")?localStorage.setItem("ui-theme","light"):localStorage.setItem("ui-theme","dark")})),s.addEventListener("click",(function(){document.querySelector(".switcher-burger-dot").classList.toggle("switcher-dot-left"),u.classList.toggle("header-switcher-light-revers"),m.classList.toggle("header-switcher-dark-revers"),g.classList.toggle("dark-size"),"dark"===localStorage.getItem("ui-theme")?localStorage.setItem("ui-theme","light"):localStorage.setItem("ui-theme","dark")})),k.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements.headerinput.value,i=await(0,r.fetchDrinksByName)(t);console.log(i)})),f.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements.headerinput.value;await(0,r.fetchDrinksByName)(t);console.log("submit")}));const v=document.querySelector("[data-burger-menu-arrow"),h=document.querySelector("[data-burger-menu-favorite");v.addEventListener("click",(function(){h.classList.toggle("burger-favorite__items-display")})),o("bfh0X");var y;function L(e){const t=e.drinks;let i=JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((e=>e.idDrink));return t.map((e=>i.includes(Number(e.idDrink))?`<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="${e.strDrinkThumb}" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name">${e.strDrink}</p>\n                        <div class="button-wrap" data-id-drink='${e.idDrink}'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__remove">Remove\n                                <svg class="svg" width="21" height="19">\n                                    <use href="${y}#icon-heart-filled"></use>\n                                </svg>\n                            </button>                                \n                        </div>\n                    </li>`:`<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="${e.strDrinkThumb}" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name">${e.strDrink}</p>\n                        <div class="button-wrap" data-id-drink='${e.idDrink}'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__add-to">Add to \n                                <svg class="svg" width="21" height="19">\n                                    <use href="${y}#icon-heart-empty"></use>\n                                </svg>\n                            </button>\n                        </div>\n                    </li>`))}y=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString(),o("1v8zF");r=o("bfh0X");document.addEventListener("DOMContentLoaded",(async function(){let e={drinks:[]};const t=window.innerWidth;let i=3;t>=768&&(i=6);t>=1280&&(i=9);for(let t=1;t<=i;t++){let t=await(0,r.fetchRandomCocktail)();for(;e.drinks.map((e=>e.idDrink)).includes(t.drinks[0].idDrink);)t=await(0,r.fetchRandomCocktail)();e.drinks.push(t.drinks[0])}const o=L(e);document.querySelector(".cocktail-title-main").innerText="Cocktails",document.querySelector(".cocktail-list").innerHTML=o.join("")}));if(null==JSON.parse(localStorage.getItem("favoriteList"))){let e={favoriteCocktails:[{idDrink:0}],favoriteIngrediants:[{idIngredient:0}]};localStorage.setItem("favoriteList",JSON.stringify(e))}var S=o("1v8zF"),p=(r=o("bfh0X"),o("aJrzc"));const b=document.querySelector("[data-cocktails-modal]"),w=document.querySelector("[data-cocktails-modal-close]"),_=document.querySelector(".cocktails-modal-content-wrap"),q=document.querySelector(".cocktail-list"),D=document.querySelector("body");function I(){b.classList.toggle("is-hidden"),D.classList.toggle("modal-cocktails-open")}w.addEventListener("click",I),b.addEventListener("click",(e=>{if(e.target!==b)return e.target.classList.contains("add-to-favorite")&&(0,S.addCocktailToLocalStorage)(e),void(e.target.classList.contains("remove-from-favorite")&&(0,S.removeCocktailFromLocalStorage)(e));I()})),q.addEventListener("click",(async function(e){if(e.target.classList.contains("cocktail-item__learn-more")){const t=e.target.parentNode.dataset.idDrink;document.querySelector(".cocktails-modal").dataset.idDrink=t;!async function(e){const t=e.drinks[0],i=[];let o;for(let e=1;e<16;e++){const r=t[`strIngredient${e}`];let n=t[`strMeasure${e}`];r&&(n||(n=""),i.push(`<li class="cocktail-ingredients-list-item" data-ingredient-name='${r}'>\n          <p class="js-ingredients-modal"><span>&#10038;</span> ${n} ${r}</p>\n        </li>`),o=i.join(""))}const r=`<h2 class="cocktail-title">${t.strDrink}</h2>\n      <div class="cocktail-description">\n        <h3 class="cocktail-description__title">Instructions:</h3>\n        <p class="cocktail-description__text">\n          ${t.strInstructions}\n        </p>\n      </div>\n      <img src="${t.strDrinkThumb}" alt="${t.strCategory}" class="cocktail-image" />\n      <div class="cocktail-ingredients">\n        <h3 class="cocktail-ingredients__title">Ingredients</h3>\n        <p class="cocktail-ingredients__remark">Per cocktail</p>\n        <ul class="cocktail-ingredients-list">\n          ${o}\n        </ul>\n      </div>`;JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((e=>e.idDrink)).includes(Number(t.idDrink))?(document.querySelector(".cocktails-modal-favorite").classList.remove("add-to-favorite"),document.querySelector(".cocktails-modal-favorite").classList.add("remove-from-favorite"),document.querySelector(".cocktails-modal-favorite").innerText="Remove from favorite"):(document.querySelector(".cocktails-modal-favorite").classList.add("add-to-favorite"),document.querySelector(".cocktails-modal-favorite").classList.remove("remove-from-favorite"),document.querySelector(".cocktails-modal-favorite").innerText="Add to favorite"),_.innerHTML=r,document.querySelector(".cocktail-ingredients-list").addEventListener("click",p.openIngredientsModal)}(await(0,r.fetchDrinkById)(t)),I()}"cocktail-item__add-to"==e.target.className&&(0,S.addCocktailToLocalStorage)(e),"cocktail-item__remove"==e.target.className&&(0,S.removeCocktailFromLocalStorage)(e)}));r=o("bfh0X");if(null==JSON.parse(localStorage.getItem("favoriteList"))){let e={favoriteCocktails:[{idDrink:0}],favoriteIngrediants:[]};localStorage.setItem("favoriteList",JSON.stringify(e))}const x=document.querySelector(".mobile-wrapper-select"),T=document.querySelector(".list-mobile-filter"),C=document.querySelector(".mobile-list-letters"),E=document.querySelector(".hero__select-text"),$=document.querySelector(".cocktail-list"),N=document.querySelector(".cocktail-title-main"),H=document.querySelector(".not-found"),M=document.querySelector(".wrapper-tablet-desktop-filter");x.addEventListener("click",(()=>{T.classList.toggle("visually-hidden")})),C.addEventListener("click",(async function(e){if("LI"===e.target.nodeName){E.textContent=e.target.textContent,T.classList.add("visually-hidden"),x.classList.add("active"),$.innerHTML="";const t=await(0,r.fetchDrinkByLetter)(e.target.textContent);if(null===t.drinks)return N.textContent="Sorry, we didn't find any cocktail for you",void(H.innerHTML=`<svg\n          class="icon-not_found"\n          width="280"\n          height="308"              \n        >\n          <use href="${y}#icon-not-found"></use>\n        </svg>`);H.innerHTML="",N.textContent="Searching results";const i=await L(t);$.insertAdjacentHTML("beforeend",i.join(""))}})),M.addEventListener("click",(e=>{"LI"===e.target.nodeName&&function(e){const t=[...document.querySelectorAll(".word")].find((e=>e.classList.contains("active")));t&&(t.classList.remove("active"),e.classList.add("active")),e.classList.add("active")}(e.target),(async e=>{if("LI"===e.target.nodeName){$.innerHTML="";const t=await(0,r.fetchDrinkByLetter)(e.target.textContent);if(null===t.drinks)return N.textContent="Sorry, we didn't find any cocktail for you",void(H.innerHTML=`<svg\n        class="icon-not_found"\n        width="345"\n        height="380"              \n      >\n        <use href="${y}#icon-not-found"></use>\n      </svg>`);H.innerHTML="",N.textContent="Searching results";const i=await L(t);$.insertAdjacentHTML("beforeend",i.join(""))}})(e)}));
//# sourceMappingURL=index.f93f903a.js.map
