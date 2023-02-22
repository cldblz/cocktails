!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("6alNL",(function(n,r){t(n.exports,"emtyObjectForLocalStorage",(function(){return g})),t(n.exports,"openIngredientsModal",(function(){return p}));var o=i("bpxeT"),a=i("2TvXO"),c=i("dKbLb"),s=i("gpzZK"),l=document.querySelector("[data-ingredients-modal]"),u=document.querySelector("[data-ingredients-modal-close]"),d=document.querySelector(".modal-drink-ingredients"),f=document.querySelector(".js-insert-modal-container"),g=null;function h(){l.classList.toggle("is-hidden"),l.classList.toggle("modal-open")}function p(t){return m.apply(this,arguments)}function m(){return(m=e(o)(e(a).mark((function t(n){var r,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.target.classList.contains("js-ingredients-modal")){t.next=8;break}return r=n.target.parentNode.dataset.ingredientName.trim(),t.next=4,(0,s.fetchIngredientByName)(r);case 4:o=t.sent,g=o,v(o),h();case 8:n.target.classList.contains("cocktail-item__remove")&&(0,c.removeIngredientFromLocalStorage)(n);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=e(o)(e(a).mark((function t(n){var r,o,i,c,s,l,g,h,p,m,v,y,k,b,L,w,x,S,_,N,E,T,q;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=n.ingredients[0],o=Object.keys(r),i=!0,c=!1,s=void 0,t.prev=3,l=o[Symbol.iterator]();!(i=(g=l.next()).done);i=!0)h=g.value,null!==r[h]&&void 0!==r[h]||(r[h]="");t.next=11;break;case 7:t.prev=7,t.t0=t.catch(3),c=!0,s=t.t0;case 11:t.prev=11,t.prev=12,i||null==l.return||l.return();case 14:if(t.prev=14,!c){t.next=17;break}throw s;case 17:return t.finish(14);case 18:return t.finish(11);case 19:p=r.idIngredient,m=r.strABV,v=r.strAlcohol,y=r.strDescription,k=r.strIngredient,b=r.strType,L="",w=y.split(" "),x=w.splice(0,1),S=w.join(" "),""!==x[0]&&(L=x[0]),_=m||0,N='\n     <h2 class="drink-name">'.concat(k,'</h2>\n      <h3 class="drink-category">').concat(b,'</h3>\n        <div class="drink-category--wrapper">\n          <div class="drink-category--line"></div>\n        </div>\n       \n        <p class="drink-description"> <span class="modal-first-word-of-description-light">').concat(L,"</span> ").concat(S,'</p>\n\n        <ul class="drink-classification-list">\n          <li class="drink-classification-item">\n            <p class="classification-type classification">\n             ✶ Contains alcohol: <span class="classification-value">').concat(v,'</span>\n            </p>\n          </li>\n\n          <li class="drink-classification-item">\n            <p class="classification-type classification">\n              ✶ Alcohol by volume:\n              <span class="classification-value">').concat(_," %</span>\n            </p>\n          </li>\n\n        </ul>\n    "),E='\n     <h2 class="drink-name modal-ingredients-light-color">'.concat(k,'</h2>\n      <h3 class="drink-category modal-ingredients-light-color">').concat(b,'</h3>\n        <div class="drink-category--wrapper">\n          <div class="drink-category--line"></div>\n        </div>\n        <p class="drink-description modal-light-grey"> <span class="modal-first-word-of-description-dark">').concat(L,"</span> ").concat(S,'</p>\n\n\n        <ul class="drink-classification-list">\n          <li class="drink-classification-item">\n            <p class="classification-type classification modal-ingredients-light-color">\n             ✶ <span class="classification-value modal-light-grey" > Contains alcohol: ').concat(v,'</span>\n            </p>\n          </li>\n\n          <li class="drink-classification-item">\n            <p class="classification-type classification modal-ingredients-light-color">\n              ✶ \n              <span class="classification-value modal-light-grey">Alcohol by volume: ').concat(_," %</span>\n            </p>\n          </li>\n\n        </ul>\n    "),T=JSON.parse(localStorage.getItem("favoriteList")),T.favoriteIngrediants.map((function(t){return t.idIngredient})).includes(Number(p))?(document.querySelector(".drink-controller-btn--name").classList.remove("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.add("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Remove from favorite"):(document.querySelector(".drink-controller-btn--name").classList.add("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.remove("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Add to favorite"),document.querySelector("[data-favorite-controller]").dataset.favoriteController=p,"light"!==(q=localStorage.getItem("ui-theme"))&&null!==q||(d.style.backgroundColor="#FCFCFC",u.style.fill="#202025",f.innerHTML=N),"dark"===q&&(d.style.backgroundColor="#202025",u.style.fill="#FCFCFC",f.innerHTML=E);case 35:case"end":return t.stop()}}),t,null,[[3,7,11,19],[12,,14,18]])})))).apply(this,arguments)}u.addEventListener("click",h),l.addEventListener("click",(function(t){t.target===l&&h()})),document.querySelector(".modal-drink-ingredients").addEventListener("click",(function(t){t.target.classList.contains("add-to-favorite-ingredient")?(0,c.addIngredientToLocalStorage)():t.target.classList.contains("remove-from-favorite-ingredient")&&(0,c.removeIngredientFromLocalStorage)(t)}))})),i.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}})),i.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===g)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=g;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",g="executing",h="completed",p={};function m(){}function v(){}function y(){}var k={};s(k,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(q([])));L&&L!==n&&r.call(L,i)&&(k=L);var w=y.prototype=m.prototype=Object.create(k);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function q(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return v.prototype=y,s(w,"constructor",y),s(y,"constructor",v),v.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(S.prototype),s(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=q,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:q(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),i.register("dKbLb",(function(n,r){t(n.exports,"addCocktailToLocalStorage",(function(){return h})),t(n.exports,"removeCocktailFromLocalStorage",(function(){return m})),t(n.exports,"addIngredientToLocalStorage",(function(){return v})),t(n.exports,"removeIngredientFromLocalStorage",(function(){return y}));var o=i("bpxeT"),a=i("8MBJY"),c=i("2TvXO"),s=i("gpzZK"),l=i("6alNL"),u=i("jQgAJ"),d=i("duuH0"),f=function t(n){"use strict";e(a)(this,t),this.idDrink=Number(n.drinks[0].idDrink),this.strDrinkThumb=n.drinks[0].strDrinkThumb,this.strDrink=n.drinks[0].strDrink,this.strInstructions=n.drinks[0].strInstructions,this.ingrediant=[];for(var r=1;r<=15;r++){var o={measure:"",ingrediantName:""},i="strIngredient"+r,c="strMeasure"+r;if(null==n.drinks[0][i])break;o.measure=n.drinks[0][c],o.ingrediantName=n.drinks[0][i],this.ingrediant.push(o)}},g=function t(n){"use strict";e(a)(this,t),this.idIngredient=Number(n.ingredients[0].idIngredient),this.nameIngredient=n.ingredients[0].strIngredient,this.descriptionIngredient=n.ingredients[0].strDescription,this.typeIngredient=n.ingredients[0].strType,this.alcoholIngredient=n.ingredients[0].strAlcohol};function h(t){return p.apply(this,arguments)}function p(){return(p=e(o)(e(c).mark((function t(n){var r,o,i,a;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("favoriteList")),o=n.target.parentNode.dataset.idDrink,t.next=4,(0,s.fetchDrinkById)(o);case 4:i=t.sent,a=new f(i),r.favoriteCocktails.push(a),localStorage.setItem("favoriteList",JSON.stringify(r)),n.target.parentNode.parentNode.parentNode.classList.contains("main-section")?document.querySelector(".cocktail-list").innerHTML+=(0,u.renderCocktail)(i):(document.querySelector("[data-id-drink = '".concat(o,"'] .cocktail-item__add-to")).className="cocktail-item__remove",document.querySelector("[data-id-drink = '".concat(o,"'] .cocktail-item__remove")).innerHTML='Remove\n      <svg class="svg" width="21" height="19">\n          <use href="'.concat(d,'#icon-heart-filled"></use>\n      </svg>')),n.target.classList.contains("add-to-favorite")&&(document.querySelector("[data-id-drink = '".concat(o,"'] .cocktails-modal-favorite")).classList.remove("add-to-favorite"),document.querySelector("[data-id-drink = '".concat(o,"'] .cocktails-modal-favorite")).classList.add("remove-from-favorite"),document.querySelector("[data-id-drink = '".concat(o,"'] .cocktails-modal-favorite")).innerText="Remove from favorite");case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){var e=JSON.parse(localStorage.getItem("favoriteList")),n=Number(t.target.parentNode.dataset.idDrink);if(e.favoriteCocktails=e.favoriteCocktails.filter((function(t){if(t.idDrink!=n)return t})),localStorage.setItem("favoriteList",JSON.stringify(e)),document.querySelector("[data-id-drink = '".concat(n,"'] .cocktail-item__remove")).className="cocktail-item__add-to",document.querySelector("[data-id-drink = '".concat(n,"'] .cocktail-item__add-to")).innerHTML='Add to \n    <svg class="svg" width="21" height="19">\n        <use href="'.concat(d,'#icon-heart-empty"></use>\n    </svg>'),t.target.classList.contains("remove-from-favorite")&&(document.querySelector("[data-id-drink = '".concat(n,"'] .cocktails-modal-favorite")).classList.add("add-to-favorite"),document.querySelector("[data-id-drink = '".concat(n,"'] .cocktails-modal-favorite")).classList.remove("remove-from-favorite"),document.querySelector("[data-id-drink = '".concat(n,"'] .cocktails-modal-favorite")).innerText="Add to favorite"),t.target.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")||t.target.parentNode.parentNode.parentNode.classList.contains("main-section")){var r=document.querySelector(".cocktail-list"),o=!0,i=!1,a=void 0,c=!0,s=!1,l=void 0;try{for(var u,f=r.children[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var g=u.value;try{for(var h,p=g.children[Symbol.iterator]();!(o=(h=p.next()).done);o=!0){var m=h.value;void 0!==m.dataset.idDrink&&m.dataset.idDrink===t.target.parentNode.dataset.idDrink&&g.remove()}}catch(t){i=!0,a=t}finally{try{o||null==p.return||p.return()}finally{if(i)throw a}}}}catch(t){s=!0,l=t}finally{try{c||null==f.return||f.return()}finally{if(s)throw l}}0===r.children.length&&(document.querySelector(".not-found").innerText="You haven't added any favorite cocktails yet")}}function v(){var t=JSON.parse(localStorage.getItem("favoriteList"));t.favoriteIngrediants.push(new g(l.emtyObjectForLocalStorage)),localStorage.setItem("favoriteList",JSON.stringify(t)),document.querySelector(".drink-controller-btn--name").classList.remove("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.add("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Remove from favorite"}function y(t){var e=Number(t.target.parentNode.dataset.favoriteController);void 0===t.target.parentNode.dataset.favoriteController&&(e=Number(t.target.parentNode.dataset.ingredientId));var n=JSON.parse(localStorage.getItem("favoriteList"));if(n.favoriteIngrediants=n.favoriteIngrediants.filter((function(t){if(t.idIngredient!==e)return t})),localStorage.setItem("favoriteList",JSON.stringify(n)),document.querySelector(".drink-controller-btn--name").classList.add("add-to-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").classList.remove("remove-from-favorite-ingredient"),document.querySelector(".drink-controller-btn--name").innerText="Add to favorite",t.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")||t.target.parentNode.parentNode.parentNode.parentNode.classList.contains("main-section")){var r=document.querySelector(".card-list"),o=!0,i=!1,a=void 0;try{for(var c,s=r.children[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var l=c.value,u=!0,d=!1,f=void 0,g=!0,h=!1,p=void 0;try{for(var m,v=l.children[Symbol.iterator]();!(g=(m=v.next()).done);g=!0){var y=m.value;try{for(var k,b=y.children[Symbol.iterator]();!(u=(k=b.next()).done);u=!0){var L=k.value;null!=L.dataset.ingredientId&&Number(L.dataset.ingredientId)===e&&l.remove()}}catch(t){d=!0,f=t}finally{try{u||null==b.return||b.return()}finally{if(d)throw f}}}}catch(t){h=!0,p=t}finally{try{g||null==v.return||v.return()}finally{if(h)throw p}}}}catch(t){i=!0,a=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}0===r.children.length&&(document.querySelector(".not-found").innerText="You haven't added any favorite ingredients yet")}}})),i.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),i.register("gpzZK",(function(n,r){t(n.exports,"fetchDrinksByName",(function(){return s})),t(n.exports,"fetchDrinkById",(function(){return u})),t(n.exports,"fetchRandomCocktail",(function(){return f})),t(n.exports,"fetchDrinkByLetter",(function(){return h})),t(n.exports,"fetchIngredientByName",(function(){return m}));var o=i("bpxeT"),a=i("2TvXO"),c="https://www.thecocktaildb.com/api/json/v1/1/";function s(t){return l.apply(this,arguments)}function l(){return(l=e(o)(e(a).mark((function t(n){var r,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"search.php?s=").concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function u(t){return d.apply(this,arguments)}function d(){return(d=e(o)(e(a).mark((function t(n){var r,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"lookup.php?i=").concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=e(o)(e(a).mark((function t(){var n,r;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"random.php"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function h(t){return p.apply(this,arguments)}function p(){return(p=e(o)(e(a).mark((function t(n){var r,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"search.php?f=").concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=e(o)(e(a).mark((function t(n){var r,o;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(c,"search.php?i=").concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}})),i.register("jQgAJ",(function(e,n){t(e.exports,"renderCocktail",(function(){return a}));var r=i("jcFG7"),o=i("duuH0");function a(t){var e,n;(0,r.createPagination)();var i=localStorage.getItem("ui-theme");"light"!==i&&null!==i||(e="name-dark",n="svg-dark-theme"),"dark"===i&&(e="name-light",n="svg-light");var a=t.drinks,c=JSON.parse(localStorage.getItem("favoriteList")).favoriteCocktails.map((function(t){return t.idDrink}));return a.map((function(t){return c.includes(Number(t.idDrink))?'<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="'.concat(t.strDrinkThumb,'" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name ').concat(e,'">').concat(t.strDrink,'</p>\n                        <div class="button-wrap" data-id-drink=\'').concat(t.idDrink,'\'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__remove">Remove\n                                <svg class="svg ').concat(n,'" width="21" height="19">\n                                    <use href="').concat(o,'#icon-heart-filled"></use>\n                                </svg>\n                            </button>                                \n                        </div>\n                    </li>'):'<li class="cocktail-list__cocktail-item">\n                        <img class="cocktail-item_img" src="'.concat(t.strDrinkThumb,'" alt="preview ocktail" width="395" height="auto">\n                        <p class="cocktail-item__name ').concat(e,'">').concat(t.strDrink,'</p>\n                        <div class="button-wrap" data-id-drink=\'').concat(t.idDrink,'\'>\n                            <button type="button" class="cocktail-item__learn-more">Learn more</button>\n                            <button type="button" class="cocktail-item__add-to">Add to \n                                <svg class="svg ').concat(n,'" width="21" height="19">\n                                    <use href="').concat(o,'#icon-heart-empty"></use>\n                                </svg>\n                            </button>\n                        </div>\n                    </li>')}))}document.querySelector(".switcher-button").addEventListener("click",(function(t){var e=localStorage.getItem("ui-theme"),n=document.querySelectorAll(".svg"),r=document.querySelectorAll(".cocktail-item__name");n.forEach((function(t){"light"===e||null===e?(t.classList.remove("svg-dark-theme"),t.classList.add("svg-light")):"dark"===e&&(t.classList.remove("svg-light"),t.classList.add("svg-dark-theme"))})),r.forEach((function(t){"light"!==e&&null!==e||(t.classList.remove("name-dark"),t.classList.add("name-light")),"dark"===e&&(t.classList.remove("name-light"),t.classList.add("name-dark"))}))}))})),i.register("jcFG7",(function(n,r){t(n.exports,"generatePagination",(function(){return h})),t(n.exports,"resetPagination",(function(){return p})),t(n.exports,"createPagination",(function(){return m})),t(n.exports,"sliceArray",(function(){return v}));var o,a,c=i("bpxeT"),s=i("2TvXO"),l=i("jQgAJ"),u=i("duuH0"),d=3,f=1,g=0;function h(t){console.log(t),a=(o=t).drinks.length}function p(){f=1,g=0}function m(){var t=function(t){var r=t;g>3&&n>7&&(r+=g-4);var i,a=document.createElement("button");a.classList.add("pagination-button"),1===t?(a.dataset.paginationBtnId=t,a.textContent=t,r=t):2===t&&r>2||6===t&&n>r+1?(a.dataset.paginationBtnId=r,a.classList.add("pagination-button__ellipsis"),a.textContent="..."):7===t||t===n?(a.dataset.paginationBtnId=n,a.textContent=n,r=n):(a.dataset.paginationBtnId=r,a.textContent=r),r===f&&a.classList.add("pagination-button__active"),a.addEventListener("click",(i=e(c)(e(s).mark((function t(o){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f=r,(g=Number(o.target.dataset.paginationBtnId))+2>=n&&n>7&&(g=n-3),o.target.parentNode.parentNode.parentNode.classList.contains("favorite-ingredients")?b():y();case 4:case"end":return t.stop()}}),t)}))),function(t){return i.apply(this,arguments)})),o.append(a)},n=Math.ceil(a/d);if(!(n<2)){var r=document.getElementById("pagination");r.innerHTML='<div class="pagination-pages"></div>';for(var o=document.querySelector(".pagination-pages"),i=1;i<=7&&i<=n;i++)t(i);var l=document.querySelector(".pagination-button__active"),h=Number(l.dataset.paginationBtnId),p=document.createElement("button");p.classList.add("pagination-button-arrow"),p.innerHTML=' <svg class="pagination-svg" width="24" height="24">\n      <use href="'.concat(u,'#icon-arrow"></use>\n    </svg>'),h===n&&p.setAttribute("disabled","");var m=document.createElement("button");m.classList.add("pagination-button-arrow"),m.innerHTML=' <svg class="pagination-svg pagination-svg--prev" width="24" height="24">\n      <use href="'.concat(u,'#icon-arrow"></use>\n    </svg>'),n<7&&(p.style.display="none",m.style.display="none"),g&&1!==g||m.setAttribute("disabled",""),p.addEventListener("click",e(c)(e(s).mark((function t(){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g||(g=1),f+=1,(g+=1)+2>=n&&n>7&&(g=n-3),y();case 5:case"end":return t.stop()}}),t)})))),m.addEventListener("click",e(c)(e(s).mark((function t(){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g||(g=1),f-=1,g+2>=n&&n>7?g=n-3:(h<=n-3||n<7)&&(g-=1),y();case 4:case"end":return t.stop()}}),t)})))),r.prepend(m),r.append(p)}}function v(t){var e=window.innerWidth;e>=768&&(d=6),e>=1280&&(d=9);var n=(f-1)*d,r=n+d;return{drinks:t.slice(n,r)}}function y(){return k.apply(this,arguments)}function k(){return(k=e(c)(e(s).mark((function t(){var n,r,i;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector(".cocktail-list"),console.log(g),n.innerHTML="",r=v(o.drinks),console.log(r),t.next=7,(0,l.renderCocktail)(r);case 7:i=t.sent,n.insertAdjacentHTML("beforeend",i.join(""));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){console.log(111);var t=document.querySelector(".card-list");t.innerHTML="";var e=v(o.drinks);console.log(e);var n="";e.drinks.forEach((function(t){n+=function(t){m();var e=t.nameIngredient,n=t.typeIngredient,r=t.idIngredient;return'\n    <div class="cocktail-list__cocktail-item">\n      <div class=\'card-item__info\'>\n        <p class="card-item__name dark-theme-text">'.concat(e,'</p>\n        <p class="card-item__details dark-theme-text">').concat(n,'</p>\n        <div data-ingredient-name="').concat(e,'" data-ingredient-id="').concat(r,'" class="button-wrap">\n          <button type="button" class="cocktail-item__learn-more js-ingredients-modal">Learn more</button>\n          <button type="button" class="cocktail-item__remove">Remove\n            <svg class="svg" width="21" height="19">\n              <use href="').concat(u,'#icon-heart-filled"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </div>\n  ')}(t)})),t.insertAdjacentHTML("beforeend",n)}})),i.register("duuH0",(function(t,e){t.exports=i("aNJCr").getBundleURL("3g20U")+i("iE7OH").resolve("410VS")})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i.register("2Z7mb",(function(t,e){var n=document.querySelector("[data-header-theme-switcher]"),r=document.querySelectorAll("[data-text-color-switcher-light]"),o=document.querySelectorAll("[data-text-color-switcher-dark]"),i=document.querySelector("body"),a=document.querySelectorAll(".navigation__item"),c=document.querySelectorAll(".switcher-button"),s=document.querySelectorAll(".switcher-dot"),l=document.querySelectorAll(".dark-theme-text"),u=document.querySelectorAll(".navigation-drop__item"),d=document.querySelectorAll(".favorite__items"),f=document.querySelectorAll("dark-theme-grey-text"),g=document.querySelector(".mobile-menu"),h=document.querySelectorAll(".burger-menu-btn-icon"),p=document.querySelector(".burger-menu-arrow-icon"),m=document.querySelector("[data-burger-theme-switcher]");function v(){s.forEach((function(t){return t.classList.toggle("switcher-dot-left")})),r.forEach((function(t){return t.classList.toggle("burger-switcher-light-revers")})),i.classList.toggle("dark-size"),c.forEach((function(t){return t.classList.toggle("switcher-button-dark")})),d.forEach((function(t){return t.classList.toggle("favorite__items-dark")})),o.forEach((function(t){return t.classList.toggle("header-switcher-dark-revers")})),s.forEach((function(t){return t.classList.toggle("switcher-dot-dark")})),a.forEach((function(t){return t.classList.toggle("theme")})),u.forEach((function(t){return t.classList.toggle("navigation-drop__item-dark")})),l.forEach((function(t){return t.classList.toggle("dark-theme")})),f.forEach((function(t){return t.classList.toggle("dark-theme-grey")})),h.forEach((function(t){return t.classList.toggle("burger-menu-btn-icon-dark")})),g.classList.toggle("dark-size")}function y(){s.forEach((function(t){return t.classList.toggle("switcher-dot-left")})),r.forEach((function(t){return t.classList.toggle("burger-switcher-light-revers")})),i.classList.toggle("dark-size"),c.forEach((function(t){return t.classList.toggle("switcher-button-dark")})),d.forEach((function(t){return t.classList.toggle("favorite__items-dark")})),o.forEach((function(t){return t.classList.toggle("header-switcher-dark-revers")})),s.forEach((function(t){return t.classList.toggle("switcher-dot-dark")})),l.forEach((function(t){return t.classList.toggle("dark-theme")})),p.classList.toggle("burger-menu-btn-icon-dark"),f.forEach((function(t){return t.classList.toggle("dark-theme-grey")})),g.classList.toggle("dark-size")}"dark"===localStorage.getItem("ui-theme")&&v(),n.addEventListener("click",(function(){var t=localStorage.getItem("ui-theme");""===t||"light"===t?(localStorage.setItem("ui-theme","dark"),v()):(localStorage.setItem("ui-theme","light"),v())})),m.addEventListener("click",(function(){var t=localStorage.getItem("ui-theme");""===t||"light"===t?(localStorage.setItem("ui-theme","dark"),y()):(localStorage.setItem("ui-theme","light"),y())}))})),i.register("i8Q71",(function(t,n){var r=i("bpxeT"),o=i("2TvXO"),a=i("gpzZK"),c=i("jQgAJ"),s=i("jcFG7"),l=i("duuH0"),u=document.querySelector("[data-burger-menu-toggle]"),d=document.querySelector("[data-burger-menu]"),f=document.querySelector("[data-header-submit]"),g=document.querySelector("[data-burger-submit]");u.addEventListener("click",(function(){u.classList.toggle("is-open"),d.classList.toggle("is-open"),u.setAttribute("aria-expanded","true"),h.classList.toggle("unscroll-body")}));var h=document.querySelector("body");f.addEventListener("submit",(function(t){return y.apply(this,arguments)})),g.addEventListener("submit",(function(t){return k.apply(this,arguments)}));var p=document.querySelector(".cocktail-list"),m=document.querySelector(".not-found"),v=document.querySelector(".cocktail-title-main");function y(){return(y=e(r)(e(o).mark((function t(n){var r,i,u,d;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),(0,s.resetPagination)(),""!==(r=n.currentTarget.elements.headerinput.value)){t.next=9;break}return p.innerHTML="",v.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML='<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="'.concat(l,'#icon-not-found"></use>\n      </svg>'),document.querySelector(".pagination").innerHTML="",t.abrupt("return");case 9:return t.next=11,(0,a.fetchDrinksByName)(r);case 11:if(null!==(i=t.sent).drinks){t.next=18;break}return p.innerHTML="",v.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML='<svg\n      class="icon-not_found"\n      width="345"\n      height="380"              \n      >\n      <use href="'.concat(l,'#icon-not-found"></use>\n      </svg>'),document.querySelector(".pagination").innerHTML="",t.abrupt("return");case 18:return(0,s.generatePagination)(i),m.innerHTML="",p.innerHTML="",v.textContent="Searching results",u=(0,s.sliceArray)(i.drinks),t.next=25,(0,c.renderCocktail)(u);case 25:d=t.sent,p.insertAdjacentHTML("beforeend",d.join(""));case 27:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=e(r)(e(o).mark((function t(n){var r,i,f,g;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),(0,s.resetPagination)(),u.classList.toggle("is-open"),d.classList.toggle("is-open"),""!==(r=n.currentTarget.elements.burgerinput.value)){t.next=10;break}return p.innerHTML="",v.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML='<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="'.concat(l,'#icon-not-found"></use>\n      </svg>'),t.abrupt("return");case 10:return t.next=12,(0,a.fetchDrinksByName)(r);case 12:if(null!==(i=t.sent).drinks){t.next=18;break}return p.innerHTML="",v.textContent="Sorry, we didn't find any cocktail for you",m.innerHTML='<svg\n      class="icon-not_found"\n      width="345"\n      height="380"\n      >\n      <use href="'.concat(l,'#icon-not-found"></use>\n      </svg>'),t.abrupt("return");case 18:return(0,s.generatePagination)(i),m.innerHTML="",p.innerHTML="",v.textContent="Searching results",f=(0,s.sliceArray)(i.drinks),t.next=25,(0,c.renderCocktail)(f);case 25:g=t.sent,p.insertAdjacentHTML("beforeend",g.join("")),h.classList.toggle("unscroll-body");case 28:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b=document.querySelector("[data-burger-menu-arrow"),L=document.querySelector("[data-burger-menu-favorite");b.addEventListener("click",(function(){L.classList.toggle("burger-favorite__items-display")}))})),i("iE7OH").register(JSON.parse('{"3g20U":"favorite-ingredients.d274a9e4.js","410VS":"icons.3897eb8e.svg"}'))}();
//# sourceMappingURL=favorite-ingredients.d274a9e4.js.map
