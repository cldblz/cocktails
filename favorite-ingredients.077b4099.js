!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequired7c6=i),i.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=n),n}})),i("iE7OH").register(JSON.parse('{"kjFJ1":"favorite-ingredients.077b4099.js","410VS":"icons.3897eb8e.svg"}'));var c;c=i("aNJCr").getBundleURL("kjFJ1")+i("iE7OH").resolve("410VS");document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".ingredients__JS");e&&function(e){for(var t="",r=0;r<3;r++)t+='\n    <div class="cocktail-list__cocktail-item">\n      <div class=\'card-item__info\'>\n        <p class="card-item__name">'.concat("Campari",'</p>\n        <p class="card-item__details">').concat("Campari",'</p>\n        <div class="button-wrap">\n          <button type="button" class="cocktail-item__learn-more">Learn more</button>\n          <button type="button" class="cocktail-item__remove">Remove\n            <svg class="svg" width="21" height="19">\n              <use href="').concat(n(c),'#icon-heart-filled"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </div>\n  ');e.innerHTML=t}(e)}))}();
//# sourceMappingURL=favorite-ingredients.077b4099.js.map