function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},c=e.parcelRequired7c6;null==c&&((c=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var c={id:t,exports:{}};return n[t]=c,e.call(c.exports,c,c.exports),c.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=c),c.register("kyEFX",(function(e,n){var i,c;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return c}),(function(t){return c=t}));var o={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},c=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),c("kyEFX").register(JSON.parse('{"7bk21":"index.7f79fa83.js","8OQ7p":"icons.3897eb8e.svg"}'));const o=document.querySelector("[data-burger-menu-toggle]"),r=document.querySelector("[data-burger-menu]"),s=document.querySelector("[data-header-theme-switcher]"),a=document.querySelector("[data-burger-theme-switcher]");o.addEventListener("click",(function(){o.classList.toggle("is-open"),r.classList.toggle("is-open"),o.setAttribute("aria-expanded","true")})),s.addEventListener("click",(function(){document.querySelector(".switcher-dot").classList.toggle("switcher-dot-left"),console.log("toggle")})),a.addEventListener("click",(function(){document.querySelector(".switcher-burger-dot").classList.toggle("switcher-dot-left"),console.log("toggle")}));const l="https://www.thecocktaildb.com/api/json/v1/1/";async function d(t){try{const e=await fetch(`${l}lookup.php?i=${t}`);return await e.json()}catch(t){console.log(t.message)}}async function u(){try{const t=await fetch(`${l}random.php`);return await t.json()}catch(t){console.log(t.message)}}var m;function g(t){let e=t.drinks[0];const n=JSON.parse(localStorage.getItem("favorit"));if(null!==n){let t=n.favoritCocktails.map((t=>t));if(null!==t)return t.inclde(id)?`<li class="cocktail-list__cocktail-item">\n                            <img class="cocktail-item_img" src="${e.strDrinkThumb}" alt="" width="395" height="auto">\n                            <p class="cocktail-item__name">${e.strDrink}</p>\n                            <div class="button-wrap" data-idDrink='${e.idDrink}'>\n                                <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                                <button type="button" class="cocktail-item__remove">Remove\n                                    <svg class="svg" width="21" height="19">\n                                        <use href="${m}#icon-heart-filled"></use>\n                                    </svg>\n                                </button>                                \n                            </div>\n                        </li>`:`<li class="cocktail-list__cocktail-item">\n                            <img class="cocktail-item_img" src="${e.strDrinkThumb}" alt="" width="395" height="auto">\n                            <p class="cocktail-item__name">${e.strDrink}</p>\n                            <div class="button-wrap" data-idDrink='${e.idDrink}'>\n                                <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                                <button type="button" class="cocktail-item__add-to">Add to \n                                    <svg class="svg" width="21" height="19">\n                                        <use href="${m}#icon-heart-empty"></use>\n                                    </svg>\n                                </button>\n                            </div>\n                        </li>`}return`<li class="cocktail-list__cocktail-item">\n                            <img class="cocktail-item_img" src="${e.strDrinkThumb}" alt="" width="395" height="auto">\n                            <p class="cocktail-item__name">${e.strDrink}</p>\n                            <div class="button-wrap" data-idDrink='${e.idDrink}'>\n                                <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                                <button type="button" class="cocktail-item__add-to">Add to \n                                    <svg class="svg" width="21" height="19">\n                                        <use href="${m}#icon-heart-empty"></use>\n                                    </svg>\n                                </button>\n                            </div>\n                        </li>`}m=new URL(c("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const k=document.querySelector("[data-cocktails-modal]"),p=document.querySelector("[data-cocktails-modal-close]"),h=document.querySelector(".cocktails-modal-content-wrap");function f(){k.classList.toggle("is-hidden"),k.classList.toggle("modal-open")}async function b(t){const e=t.target.parentNode.dataset.iddrink;!async function(t){const e=t.drinks[0],n=[];for(let t=1;t<16;t++){const i=e[`strIngredient${t}`];let c=e[`strMeasure${t}`];i&&(c||(c=""),n.push(`${c} ${i}`))}let i=n.map((t=>{if(null!==t)return`<li class="cocktail-ingredients-list-item">\n            <p><span>&#10038;</span> ${t}</p>\n          </li>`})).join("");const c=`<h2 class="cocktail-title">${e.strDrink}</h2>\n      <div class="cocktail-description">\n        <h3 class="cocktail-description__title">Instructions:</h3>\n        <p class="cocktail-description__text">\n          ${e.strInstructions}\n        </p>\n      </div>\n      <img src="${e.strDrinkThumb}" alt="${e.strCategory}" class="cocktail-image" />\n      <div class="cocktail-ingredients">\n        <h3 class="cocktail-ingredients__title">Ingredients</h3>\n        <p class="cocktail-ingredients__remark">Per cocktail</p>\n        <ul class="cocktail-ingredients-list">\n          ${i}\n        </ul>\n      </div>`;h.innerHTML=c}(await d(e)),f()}p.addEventListener("click",f),k.addEventListener("click",(t=>{t.target===k&&f()})),document.addEventListener("DOMContentLoaded",(async function(){let t="";const e=window.innerWidth;let n=3;e>=768&&(n=6);e>=1280&&(n=9);for(let e=1;e<=n;e++){let e=await u();t+=g(e)}document.querySelector(".cocktail-title-main").innerText="Cocktails",document.querySelector(".cocktail-list").innerHTML=t;document.querySelectorAll(".cocktail-item__learn-more").forEach((t=>{t.addEventListener("click",b)}))}));
//# sourceMappingURL=index.7f79fa83.js.map
