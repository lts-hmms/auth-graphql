(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){"use strict";n.r(t);var r,a=n(1),l=n.n(a),u=n(43),c=n(24),o=n(5),i=n(68),m=n(70),f=n(67),s=n(71),b=n(63),d=n(69);var E,p,v,y=Object(d.a)(r||(E=["\n    query GetCurrentUser {\n        currentUser {\n            id\n            email\n        }\n    }\n"],p||(p=E.slice(0)),r=Object.freeze(Object.defineProperties(E,{raw:{value:Object.freeze(p)}}))));var g=Object(d.a)(v||(v=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    mutation Logout {\n        logout {\n            id\n            email\n        }\n    }\n"])));function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,u,c=[],o=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(){var e=Object(s.a)(y),t=e.loading,n=(e.error,e.data),r=h(Object(b.a)(g),1)[0],a=function(){r({refetchQueries:[{query:y}]})};if(t)return l.a.createElement("div",null);return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(c.b,{to:"/",className:"brand-logo left"},"Home"),l.a.createElement("ul",{className:"right"},n.currentUser?l.a.createElement("li",null,l.a.createElement("a",{onClick:a},"Logout")):l.a.createElement("div",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/signup"},"Signup")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/login"},"Login"))))))},O=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(w,null),l.a.createElement(o.a,null))};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,u,c=[],o=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{if(!o&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=function(){var e=S(Object(a.useState)(""),2),t=e[0],n=e[1],r=S(Object(a.useState)(""),2),u=r[0],c=r[1];return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col s6"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{value:u,onChange:function(e){return c(e.target.value)}})),l.a.createElement("button",{className:"btn"},"Submit")))},I=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"),l.a.createElement(N,null))},C=new i.a({uri:"http://localhost:4000/graphql",cache:new m.a});u.createRoot(document.getElementById("root")).render(l.a.createElement(f.a,{client:C},l.a.createElement(c.a,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",element:l.a.createElement(O,null)},l.a.createElement(o.b,{path:"/login",element:l.a.createElement(I,null)}))))))}},[[56,1,2]]]);