!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"9p9yL":"index.53e128be.js","410VS":"icons.3897eb8e.svg"}'));var c=document.querySelector("[data-burger-menu-toggle]"),a=document.querySelector("[data-burger-menu]"),s=document.querySelector("[data-header-theme-switcher]"),u=document.querySelector("[data-burger-theme-switcher]");c.addEventListener("click",(function(){c.classList.toggle("is-open"),a.classList.toggle("is-open"),c.setAttribute("aria-expanded","true")})),s.addEventListener("click",(function(){document.querySelector(".switcher-dot").classList.toggle("switcher-dot-left"),console.log("toggle")})),u.addEventListener("click",(function(){document.querySelector(".switcher-burger-dot").classList.toggle("switcher-dot-left"),console.log("toggle")}));var l={};function f(t,e,n,r,o,i,c){try{var a=t[i](c),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){f(i,r,o,c,a,"next",t)}function a(t){f(i,r,o,c,a,"throw",t)}c(void 0)}))}};var h={},d=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new j(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=E(c,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,c),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var w={};s(w,i,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(D([])));b&&b!==n&&r.call(b,i)&&(w=b);var _=y.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,c,a){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,a)}))}a(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function D(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=y,s(_,"constructor",y),s(y,"constructor",m),m.displayName=s(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(_),s(_,a,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=D,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:D(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(h);try{regeneratorRuntime=d}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=d:Function("r","regeneratorRuntime = r")(d)}var p="https://www.thecocktaildb.com/api/json/v1/1/";function v(t){return g.apply(this,arguments)}function g(){return(g=e(l)(e(h).mark((function t(n){var r,o;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(p,"lookup.php?i=").concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function m(){return y.apply(this,arguments)}function y(){return(y=e(l)(e(h).mark((function t(){var n,r;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(p,"random.php"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}var w;function k(t){var e=t.drinks[0],n=JSON.parse(localStorage.getItem("favorit"));if(null!==n){var r=n.favoritCocktails.map((function(t){return t}));if(null!==r)return r.inclde(id)?'<li class="cocktail-list__cocktail-item">\n                            <img class="cocktail-item_img" src="'.concat(e.strDrinkThumb,'" alt="" width="395" height="auto">\n                            <p class="cocktail-item__name">').concat(e.strDrink,'</p>\n                            <div class="button-wrap" data-idDrink=\'').concat(e.idDrink,'\'>\n                                <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                                <button type="button" class="cocktail-item__remove">Remove\n                                    <svg class="svg" width="21" height="19">\n                                        <use href="').concat(w,'#icon-heart-filled"></use>\n                                    </svg>\n                                </button>                                \n                            </div>\n                        </li>'):'<li class="cocktail-list__cocktail-item">\n                            <img class="cocktail-item_img" src="'.concat(e.strDrinkThumb,'" alt="" width="395" height="auto">\n                            <p class="cocktail-item__name">').concat(e.strDrink,'</p>\n                            <div class="button-wrap" data-idDrink=\'').concat(e.idDrink,'\'>\n                                <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                                <button type="button" class="cocktail-item__add-to">Add to \n                                    <svg class="svg" width="21" height="19">\n                                        <use href="').concat(w,'#icon-heart-empty"></use>\n                                    </svg>\n                                </button>\n                            </div>\n                        </li>')}return'<li class="cocktail-list__cocktail-item">\n                            <img class="cocktail-item_img" src="'.concat(e.strDrinkThumb,'" alt="" width="395" height="auto">\n                            <p class="cocktail-item__name">').concat(e.strDrink,'</p>\n                            <div class="button-wrap" data-idDrink=\'').concat(e.idDrink,'\'>\n                                <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                                <button type="button" class="cocktail-item__add-to">Add to \n                                    <svg class="svg" width="21" height="19">\n                                        <use href="').concat(w,'#icon-heart-empty"></use>\n                                    </svg>\n                                </button>\n                            </div>\n                        </li>')}w=i("aNJCr").getBundleURL("9p9yL")+i("iE7OH").resolve("410VS");var b=document.querySelector("[data-cocktails-modal]"),_=document.querySelector("[data-cocktails-modal-close]"),x=document.querySelector(".cocktails-modal-content-wrap");function L(){b.classList.toggle("is-hidden"),b.classList.toggle("modal-open")}function E(t){return S.apply(this,arguments)}function S(){return(S=e(l)(e(h).mark((function t(n){var r,o,i,c,a,s,u;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=n.drinks[0],o=[],i=1;i<16;i++)c=r["strIngredient".concat(i)],a=r["strMeasure".concat(i)],c&&(a||(a=""),o.push("".concat(a," ").concat(c)));s=o.map((function(t){if(null!==t)return'<li class="cocktail-ingredients-list-item">\n            <p><span>&#10038;</span> '.concat(t,"</p>\n          </li>")})).join(""),u='<h2 class="cocktail-title">'.concat(r.strDrink,'</h2>\n      <div class="cocktail-description">\n        <h3 class="cocktail-description__title">Instructions:</h3>\n        <p class="cocktail-description__text">\n          ').concat(r.strInstructions,'\n        </p>\n      </div>\n      <img src="').concat(r.strDrinkThumb,'" alt="').concat(r.strCategory,'" class="cocktail-image" />\n      <div class="cocktail-ingredients">\n        <h3 class="cocktail-ingredients__title">Ingredients</h3>\n        <p class="cocktail-ingredients__remark">Per cocktail</p>\n        <ul class="cocktail-ingredients-list">\n          ').concat(s,"\n        </ul>\n      </div>"),x.innerHTML=u;case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){return j.apply(this,arguments)}function j(){return(j=e(l)(e(h).mark((function t(n){var r;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.target.parentNode.dataset.iddrink,t.next=3,v(r);case 3:E(t.sent),L();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return(D=e(l)(e(h).mark((function t(){var n,r,o,i,c;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="",r=window.innerWidth,o=3,r>=768&&(o=6),r>=1280&&(o=9),i=1;case 6:if(!(i<=o)){t.next=14;break}return t.next=9,m();case 9:c=t.sent,n+=k(c);case 11:i++,t.next=6;break;case 14:document.querySelector(".cocktail-title-main").innerText="Cocktails",document.querySelector(".cocktail-list").innerHTML=n,document.querySelectorAll(".cocktail-item__learn-more").forEach((function(t){t.addEventListener("click",O)}));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}_.addEventListener("click",L),b.addEventListener("click",(function(t){t.target===b&&L()})),document.addEventListener("DOMContentLoaded",(function(){return D.apply(this,arguments)}))}();
//# sourceMappingURL=index.53e128be.js.map
