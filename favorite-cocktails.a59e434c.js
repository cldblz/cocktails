!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequired7c6=o),o.register("iE7OH",(function(e,n){var r,i;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var i={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=i[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),i[t]=e),e}})),o("iE7OH").register(JSON.parse('{"31uL1":"favorite-cocktails.a59e434c.js","410VS":"icons.3897eb8e.svg","3g20U":"favorite-ingredients.5ca9d1ce.js"}'));var a=o("bpxeT"),c=o("2TvXO");o("gpzZK");var s;function u(t){var e=t.drinks,n=JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((function(t){return t.idDrink}));return e.map((function(t){return n.includes(Number(t.idDrink))?'<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="'.concat(t.strDrinkThumb,'" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name">').concat(t.strDrink,'</p>\n                        <div class="button-wrap" data-id-drink=\'').concat(t.idDrink,'\'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__remove">Remove\n                                <svg class="svg" width="21" height="19">\n                                    <use href="').concat(s,'#icon-heart-filled"></use>\n                                </svg>\n                            </button>                                \n                        </div>\n                    </li>'):'<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="'.concat(t.strDrinkThumb,'" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name">').concat(t.strDrink,'</p>\n                        <div class="button-wrap" data-id-drink=\'').concat(t.idDrink,'\'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__add-to">Add to \n                                <svg class="svg" width="21" height="19">\n                                    <use href="').concat(s,'#icon-heart-empty"></use>\n                                </svg>\n                            </button>\n                        </div>\n                    </li>')}))}function l(){return(l=e(a)(e(c).mark((function t(){var n,r,i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=JSON.parse(localStorage.getItem("favoriteList")),r=n.favoriteCocktails,i={drinks:[]},1!==r.length){t.next=6;break}return document.querySelector(".not-found").innerText="You haven't added any favorite ingridients yet",t.abrupt("return");case 6:r.forEach((function(t){0!==t.idDrink&&i.drinks.push(t)})),document.querySelector(".cocktail-list").innerHTML=u(i).join("");case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s=o("aNJCr").getBundleURL("31uL1")+o("iE7OH").resolve("410VS"),document.addEventListener("DOMContentLoaded",(function(){return l.apply(this,arguments)}))}();
//# sourceMappingURL=favorite-cocktails.a59e434c.js.map
