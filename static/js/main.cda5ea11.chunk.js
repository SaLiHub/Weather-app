(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),o=(n(9),n(3)),i=(n(10),n(0));var u=function(e){var t=e.search,n=e.setQuery;return Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)("input",{type:"text",className:"search__bar",placeholder:"Type city...",onChange:function(e){return n(e.target.value)}}),Object(i.jsx)("button",{type:"button","aria-label":"Search",className:"search__button",onClick:function(){return t()}})]})};n(12);var h=function(e){var t=e.weather;return console.log(t),Object(i.jsx)("div",{className:"info",children:"undefined"===typeof t.main?t.message?t.message:"...":Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"info__location",children:[t.name,", ",t.sys.country]}),Object(i.jsxs)("div",{className:"info__temperature",children:[Math.round(t.main.temp),"\xb0c"]}),Object(i.jsx)("div",{className:"info__clouds",children:t.weather[0].description})]})})},j="af342bb316a547e15be0a79e5bb55c58",b="https://api.openweathermap.org/data/2.5/";var l=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),l=s[0],d=s[1];function p(){fetch("".concat(b,"weather?q=").concat(l,"&units=metric&APPID=").concat(j)).then((function(e){return e.json()})).then((function(e){a(e)}))}return console.log(l),Object(i.jsxs)("div",{className:"weather-box",children:[Object(i.jsx)(u,{search:function(){return p},setQuery:d}),Object(i.jsx)(h,{weather:n})]})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.cda5ea11.chunk.js.map