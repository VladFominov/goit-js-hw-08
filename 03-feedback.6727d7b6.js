!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),s?b(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=p();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?b(e):(r=i=void 0,a)}function w(){var e=p(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=T(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(T(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j="feedback-form-state",S=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form textarea"),h=document.querySelector(".feedback-form input");console.log(h);var w,x={};w=localStorage.getItem(j),(x=JSON.parse(w)||{})&&(h.value=x.email||"",O.value=x.message||"");S.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,console.log(x),localStorage.setItem(j,JSON.stringify(x))}),500)),S.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;console.log({email:t,message:n}),e.currentTarget.reset(),localStorage.removeItem(j)}))}();
//# sourceMappingURL=03-feedback.6727d7b6.js.map
