!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=o);var i=o("bpxeT"),a=o("2TvXO");o("gpzZK");var u=o("jQgAJ");function d(){return(d=e(i)(e(a).mark((function n(){var r,t,o;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=JSON.parse(localStorage.getItem("favoriteList")),t=r.favoriteCocktails,o={drinks:[]},1!==t.length){e.next=6;break}return document.querySelector(".not-found").innerText="You haven't added any favorite ingridients yet",e.abrupt("return");case 6:t.forEach((function(e){0!==e.idDrink&&o.drinks.push(e)})),document.querySelector(".cocktail-list").innerHTML=(0,u.renderCocktail)(o).join("");case 8:case"end":return e.stop()}}),n)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return d.apply(this,arguments)}))}();
//# sourceMappingURL=favorite-cocktails.d68a5bb3.js.map
