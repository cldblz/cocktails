!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},r.parcelRequired7c6=i),i.register("iE7OH",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("6alNL",(function(r,n){t(r.exports,"emtyObjectForLocalStorage",(function(){return f})),t(r.exports,"openIngredientsModal",(function(){return g}));var o=i("bpxeT"),a=i("2TvXO"),c=i("dKbLb"),s=i("gpzZK"),u=document.querySelector("[data-ingredients-modal]"),l=document.querySelector("[data-ingredients-modal-close]"),d=document.querySelector(".js-insert-modal-container"),f=null;function h(){u.classList.toggle("is-hidden"),u.classList.toggle("modal-open")}function g(t){return m.apply(this,arguments)}function m(){return(m=e(o)(e(a).mark((function t(r){var n,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.target.classList.contains("js-ingredients-modal")){t.next=8;break}return n=r.target.parentNode.dataset.ingredientName.trim(),t.next=4,(0,s.fetchIngredientByName)(n);case 4:o=t.sent,f=o,p(o),h();case 8:r.target.classList.contains("cocktail-item__remove")&&(0,c.removeIngredientFromLocalStorage)(r);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=e(o)(e(a).mark((function t(r){var n,o,i,c,s,u,l,f,h,g,m,p,v,y,k,b,L;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=r.ingredients[0],o=Object.keys(n),i=!0,c=!1,s=void 0,t.prev=3,u=o[Symbol.iterator]();!(i=(l=u.next()).done);i=!0)f=l.value,null!==n[f]&&void 0!==n[f]||(n[f]="");t.next=11;break;case 7:t.prev=7,t.t0=t.catch(3),c=!0,s=t.t0;case 11:t.prev=11,t.prev=12,i||null==u.return||u.return();case 14:if(t.prev=14,!c){t.next=17;break}throw s;case 17:return t.finish(14);case 18:return t.finish(11);case 19:h=n.idIngredient,g=n.strABV,m=n.strAlcohol,p=n.strDescription,v=n.strIngredient,y=n.strType,k=g||0,b='\n     <h2 class="drink-name">'.concat(v,'</h2>\n      <h3 class="drink-category">').concat(y,'</h3>\n        <div class="drink-category--wrapper">\n          <div class="drink-category--line"></div>\n        </div>\n        <p class="drink-description">').concat(p,'</p>\n\n        <ul class="drink-classification-list">\n          <li class="drink-classification-item">\n            <p class="classification-type classification">\n             ✶ Contains alcohol: <span class="classification-value">').concat(m,'</span>\n            </p>\n          </li>\n\n          <li class="drink-classification-item">\n            <p class="classification-type classification">\n              ✶ Alcohol by volume:\n              <span class="classification-value">').concat(k," %</span>\n            </p>\n          </li>\n\n        </ul>\n    "),L=JSON.parse(localStorage.getItem("favoriteList")),L.favoriteIngrediants.map((function(t){return t.idIngredient})).includes(Number(h))?(document.querySelector(".drink-controller-btn--name").classList.remove("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.add("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Remove from favorite"):(document.querySelector(".drink-controller-btn--name").classList.add("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.remove("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Add to favorite"),document.querySelector("[data-favorite-controller]").dataset.favoriteController=h,d.innerHTML=b;case 27:case"end":return t.stop()}}),t,null,[[3,7,11,19],[12,,14,18]])})))).apply(this,arguments)}l.addEventListener("click",h),u.addEventListener("click",(function(t){t.target===u&&h()})),document.querySelector(".modal-drink-ingredients").addEventListener("click",(function(t){t.target.classList.contains("add-to-favorite-ingredient")?(0,c.addIngredientToLocalStorage)():t.target.classList.contains("remove-from-favorite-ingredient")&&(0,c.removeIngredientFromLocalStorage)(t)}))})),i.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}})),i.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new q(n||[]);return i._invoke=function(t,e,r){var n=d;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?g:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=g,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",g="completed",m={};function p(){}function v(){}function y(){}var k={};s(k,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(T([])));L&&L!==r&&n.call(L,i)&&(k=L);var w=y.prototype=p.prototype=Object.create(k);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return v.prototype=y,s(w,"constructor",y),s(y,"constructor",v),v.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(S.prototype),s(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),i.register("dKbLb",(function(r,n){t(r.exports,"addCocktailToLocalStorage",(function(){return g})),t(r.exports,"removeCocktailFromLocalStorage",(function(){return p})),t(r.exports,"addIngredientToLocalStorage",(function(){return v})),t(r.exports,"removeIngredientFromLocalStorage",(function(){return y}));var o=i("bpxeT"),a=i("8MBJY"),c=i("2TvXO"),s=i("gpzZK"),u=i("6alNL"),l=i("jQgAJ"),d=i("duuH0"),f=function t(r){"use strict";e(a)(this,t),this.idDrink=Number(r.drinks[0].idDrink),this.strDrinkThumb=r.drinks[0].strDrinkThumb,this.strDrink=r.drinks[0].strDrink,this.strInstructions=r.drinks[0].strInstructions,this.ingrediant=[];for(var n=1;n<=15;n++){var o={measure:"",ingrediantName:""},i="strIngredient"+n,c="strMeasure"+n;if(null==r.drinks[0][i])break;o.measure=r.drinks[0][c],o.ingrediantName=r.drinks[0][i],this.ingrediant.push(o)}},h=function t(r){"use strict";e(a)(this,t),this.idIngredient=Number(r.ingredients[0].idIngredient),this.nameIngredient=r.ingredients[0].strIngredient,this.descriptionIngredient=r.ingredients[0].strDescription,this.typeIngredient=r.ingredients[0].strType,this.alcoholIngredient=r.ingredients[0].strAlcohol};function g(t){return m.apply(this,arguments)}function m(){return(m=e(o)(e(c).mark((function t(r){var n,o,i,a;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("favoriteList")),o=r.target.parentNode.dataset.idDrink,t.next=4,(0,s.fetchDrinkById)(o);case 4:i=t.sent,a=new f(i),n.favoriteCocktails.push(a),localStorage.setItem("favoriteList",JSON.stringify(n)),r.target.parentNode.parentNode.parentNode.classList.contains("main-section")?document.querySelector(".cocktail-list").innerHTML+=(0,l.renderCocktail)(i):(document.querySelector("[data-id-drink = '".concat(o,"'] .cocktail-item__add-to")).className="cocktail-item__remove",document.querySelector("[data-id-drink = '".concat(o,"'] .cocktail-item__remove")).innerHTML='Remove\n      <svg class="svg" width="21" height="19">\n          <use href="'.concat(d,'#icon-heart-filled"></use>\n      </svg>')),r.target.classList.contains("add-to-favorite")&&(document.querySelector("[data-id-drink = '".concat(o,"'] .cocktails-modal-favorite")).classList.remove("add-to-favorite"),document.querySelector("[data-id-drink = '".concat(o,"'] .cocktails-modal-favorite")).classList.add("remove-from-favorite"),document.querySelector("[data-id-drink = '".concat(o,"'] .cocktails-modal-favorite")).innerText="Remove from favorite");case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){var e=JSON.parse(localStorage.getItem("favoriteList")),r=Number(t.target.parentNode.dataset.idDrink);if(e.favoriteCocktails=e.favoriteCocktails.filter((function(t){if(t.idDrink!=r)return t})),localStorage.setItem("favoriteList",JSON.stringify(e)),document.querySelector("[data-id-drink = '".concat(r,"'] .cocktail-item__remove")).className="cocktail-item__add-to",document.querySelector("[data-id-drink = '".concat(r,"'] .cocktail-item__add-to")).innerHTML='Add to \n    <svg class="svg" width="21" height="19">\n        <use href="'.concat(d,'#icon-heart-empty"></use>\n    </svg>'),t.target.classList.contains("remove-from-favorite")&&(document.querySelector("[data-id-drink = '".concat(r,"'] .cocktails-modal-favorite")).classList.add("add-to-favorite"),document.querySelector("[data-id-drink = '".concat(r,"'] .cocktails-modal-favorite")).classList.remove("remove-from-favorite"),document.querySelector("[data-id-drink = '".concat(r,"'] .cocktails-modal-favorite")).innerText="Add to favorite"),t.target.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")||t.target.parentNode.parentNode.parentNode.classList.contains("main-section")){var n=document.querySelector(".cocktail-list"),o=!0,i=!1,a=void 0,c=!0,s=!1,u=void 0;try{for(var l,f=n.children[Symbol.iterator]();!(c=(l=f.next()).done);c=!0){var h=l.value;try{for(var g,m=h.children[Symbol.iterator]();!(o=(g=m.next()).done);o=!0){var p=g.value;void 0!==p.dataset.idDrink&&p.dataset.idDrink===t.target.parentNode.dataset.idDrink&&h.remove()}}catch(t){i=!0,a=t}finally{try{o||null==m.return||m.return()}finally{if(i)throw a}}}}catch(t){s=!0,u=t}finally{try{c||null==f.return||f.return()}finally{if(s)throw u}}}}function v(){var t=JSON.parse(localStorage.getItem("favoriteList"));t.favoriteIngrediants.push(new h(u.emtyObjectForLocalStorage)),localStorage.setItem("favoriteList",JSON.stringify(t)),document.querySelector(".drink-controller-btn--name").classList.remove("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.add("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Remove from favorite"}function y(t){var e=Number(t.target.parentNode.dataset.favoriteController);void 0===t.target.parentNode.dataset.favoriteController&&(e=Number(t.target.parentNode.dataset.ingredientId));var r=JSON.parse(localStorage.getItem("favoriteList"));if(r.favoriteIngrediants=r.favoriteIngrediants.filter((function(t){if(t.idIngredient!==e)return t})),localStorage.setItem("favoriteList",JSON.stringify(r)),document.querySelector(".drink-controller-btn--name").classList.add("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.remove("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Add to favorite",t.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")||t.target.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")){var n=document.querySelector(".card-list"),o=!0,i=!1,a=void 0;try{for(var c,s=n.children[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var u=c.value,l=!0,d=!1,f=void 0,h=!0,g=!1,m=void 0;try{for(var p,v=u.children[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var y=p.value;try{for(var k,b=y.children[Symbol.iterator]();!(l=(k=b.next()).done);l=!0){var L=k.value;null!=L.dataset.ingredientId&&Number(L.dataset.ingredientId)===e&&u.remove()}}catch(t){d=!0,f=t}finally{try{l||null==b.return||b.return()}finally{if(d)throw f}}}}catch(t){g=!0,m=t}finally{try{h||null==v.return||v.return()}finally{if(g)throw m}}}}catch(t){i=!0,a=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}}}})),i.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),i.register("gpzZK",(function(r,n){t(r.exports,"fetchDrinksByName",(function(){return s})),t(r.exports,"fetchDrinkById",(function(){return l})),t(r.exports,"fetchRandomCocktail",(function(){return f})),t(r.exports,"fetchDrinkByLetter",(function(){return g})),t(r.exports,"fetchIngredientByName",(function(){return p}));var o=i("bpxeT"),a=i("2TvXO"),c="https://www.thecocktaildb.com/api/json/v1/1/";function s(t){return u.apply(this,arguments)}function u(){return(u=e(o)(e(a).mark((function t(r){var n,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"search.php?s=").concat(r));case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=e(o)(e(a).mark((function t(r){var n,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"lookup.php?i=").concat(r));case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=e(o)(e(a).mark((function t(){var r,n;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"random.php"));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=e(o)(e(a).mark((function t(r){var n,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"search.php?f=").concat(r));case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=e(o)(e(a).mark((function t(r){var n,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"search.php?i=").concat(r));case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}})),i.register("jQgAJ",(function(e,r){t(e.exports,"renderCocktail",(function(){return o}));var n=i("duuH0");function o(t){var e=t.drinks,r=JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((function(t){return t.idDrink}));return e.map((function(t){return r.includes(Number(t.idDrink))?'<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="'.concat(t.strDrinkThumb,'" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name">').concat(t.strDrink,'</p>\n                        <div class="button-wrap" data-id-drink=\'').concat(t.idDrink,'\'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__remove">Remove\n                                <svg class="svg" width="21" height="19">\n                                    <use href="').concat(n,'#icon-heart-filled"></use>\n                                </svg>\n                            </button>                                \n                        </div>\n                    </li>'):'<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="'.concat(t.strDrinkThumb,'" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name">').concat(t.strDrink,'</p>\n                        <div class="button-wrap" data-id-drink=\'').concat(t.idDrink,'\'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__add-to">Add to \n                                <svg class="svg" width="21" height="19">\n                                    <use href="').concat(n,'#icon-heart-empty"></use>\n                                </svg>\n                            </button>\n                        </div>\n                    </li>')}))}})),i.register("duuH0",(function(t,e){t.exports=i("aNJCr").getBundleURL("3g20U")+i("iE7OH").resolve("410VS")})),i.register("aNJCr",(function(e,r){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i.register("2Z7mb",(function(t,e){var r=document.querySelector("[data-header-theme-switcher]"),n=document.querySelectorAll("[data-text-color-switcher-light]"),o=document.querySelectorAll("[data-text-color-switcher-dark]"),i=document.querySelector("body"),a=document.querySelectorAll(".navigation__item"),c=document.querySelectorAll(".switcher-button"),s=document.querySelectorAll(".switcher-dot"),u=document.querySelectorAll(".dark-theme-text"),l=document.querySelectorAll(".navigation-drop__item"),d=document.querySelectorAll(".favorite__items"),f=document.querySelectorAll("dark-theme-grey-text");function h(){s.forEach((function(t){return t.classList.toggle("switcher-dot-left")})),n.forEach((function(t){return t.classList.toggle("burger-switcher-light-revers")})),i.classList.toggle("dark-size"),c.forEach((function(t){return t.classList.toggle("switcher-button-dark")})),d.forEach((function(t){return t.classList.toggle("favorite__items-dark")})),o.forEach((function(t){return t.classList.toggle("header-switcher-dark-revers")})),s.forEach((function(t){return t.classList.toggle("switcher-dot-dark")})),a.forEach((function(t){return t.classList.toggle("theme")})),l.forEach((function(t){return t.classList.toggle("navigation-drop__item-dark")})),u.forEach((function(t){return t.classList.toggle("dark-theme")})),f.forEach((function(t){return t.classList.toggle("dark-theme-grey")}))}"dark"===localStorage.getItem("ui-theme")&&h(),r.addEventListener("click",(function(){var t=localStorage.getItem("ui-theme");""===t||"light"===t?(localStorage.setItem("ui-theme","dark"),h()):(localStorage.setItem("ui-theme","light"),h())}));var g=document.querySelector(".mobile-menu"),m=document.querySelector(".burger-menu-btn-icon"),p=document.querySelector(".burger-menu-arrow-icon");function v(){s.forEach((function(t){return t.classList.toggle("switcher-dot-left")})),n.forEach((function(t){return t.classList.toggle("burger-switcher-light-revers")})),i.classList.toggle("dark-size"),c.forEach((function(t){return t.classList.toggle("switcher-button-dark")})),d.forEach((function(t){return t.classList.toggle("favorite__items-dark")})),o.forEach((function(t){return t.classList.toggle("header-switcher-dark-revers")})),s.forEach((function(t){return t.classList.toggle("switcher-dot-dark")})),u.forEach((function(t){return t.classList.toggle("dark-theme")})),m.classList.toggle("burger-menu-btn-icon-dark"),p.classList.toggle("burger-menu-btn-icon-dark"),f.forEach((function(t){return t.classList.toggle("dark-theme-grey")})),g.classList.toggle("dark-size")}document.querySelector("[data-burger-theme-switcher]").addEventListener("click",(function(){var t=localStorage.getItem("ui-theme");""===t||"light"===t?(localStorage.setItem("ui-theme","dark"),v()):(localStorage.setItem("ui-theme","light"),v())}))})),i.register("i8Q71",(function(t,r){var n=i("bpxeT"),o=i("2TvXO"),a=i("gpzZK"),c=i("jQgAJ"),s=i("duuH0"),u=document.querySelector("[data-burger-menu-toggle]"),l=document.querySelector("[data-burger-menu]"),d=document.querySelector("[data-header-submit]"),f=document.querySelector("[data-burger-submit]");u.addEventListener("click",(function(){u.classList.toggle("is-open"),l.classList.toggle("is-open"),u.setAttribute("aria-expanded","true"),h.classList.toggle("unscroll-body")}));var h=document.querySelector("body");d.addEventListener("submit",(function(t){return v.apply(this,arguments)})),f.addEventListener("submit",(function(t){return y.apply(this,arguments)}));var g=document.querySelector(".cocktail-list"),m=document.querySelector(".not-found"),p=document.querySelector(".cocktail-title-main");function v(){return(v=e(n)(e(o).mark((function t(r){var n,i,u;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),""!==(n=r.currentTarget.elements.headerinput.value)){t.next=7;break}return g.innerHTML="",p.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML='<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="'.concat(s,'#icon-not-found"></use>\n      </svg>'),t.abrupt("return");case 7:return t.next=9,(0,a.fetchDrinksByName)(n);case 9:if(null!==(i=t.sent).drinks){t.next=15;break}return g.innerHTML="",p.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML='<svg\n      class="icon-not_found"\n      width="345"\n      height="380"              \n      >\n      <use href="'.concat(s,'#icon-not-found"></use>\n      </svg>'),t.abrupt("return");case 15:return m.innerHTML="",g.innerHTML="",p.textContent="Searching results",t.next=20,(0,c.renderCocktail)(i);case 20:u=t.sent,g.insertAdjacentHTML("beforeend",u.join(""));case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=e(n)(e(o).mark((function t(r){var n,i,d;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),u.classList.toggle("is-open"),l.classList.toggle("is-open"),""!==(n=r.currentTarget.elements.burgerinput.value)){t.next=9;break}return g.innerHTML="",p.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML='<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="'.concat(s,'#icon-not-found"></use>\n      </svg>'),t.abrupt("return");case 9:return t.next=11,(0,a.fetchDrinksByName)(n);case 11:if(null!==(i=t.sent).drinks){t.next=17;break}return g.innerHTML="",p.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML='<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="'.concat(s,'#icon-not-found"></use>\n      </svg>'),t.abrupt("return");case 17:return m.innerHTML="",g.innerHTML="",p.textContent="Searching results",t.next=22,(0,c.renderCocktail)(i);case 22:d=t.sent,g.insertAdjacentHTML("beforeend",d.join(""));case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k=document.querySelector("[data-burger-menu-arrow"),b=document.querySelector("[data-burger-menu-favorite");k.addEventListener("click",(function(){b.classList.toggle("burger-favorite__items-display")}))})),i("iE7OH").register(JSON.parse('{"3g20U":"favorite-ingredients.ff29ecde.js","410VS":"icons.3897eb8e.svg"}'))}();
//# sourceMappingURL=favorite-ingredients.ff29ecde.js.map
