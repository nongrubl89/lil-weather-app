(this.webpackJsonpminimalistweatherapp=this.webpackJsonpminimalistweatherapp||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a,i,r,c,o=t(0),l=t.n(o),b=t(9),s=t.n(b),h=(t(17),t(5)),d=t(3),j=(t(18),t(2)),u=t(1),g=j.b.input(a||(a=Object(d.a)(["\npadding: 1em;\nmargin: .5em;\nborder: none;\nborder-radius: 12px;\nfont-family: 'Inconsolata';\nfont-weight: 600;\n"]))),m=Object(j.b)(g)(i||(i=Object(d.a)(["background-color: #0077b6;\ncolor:white;\n-webkit-appearance: none;\n-moz-appearance: none;\nappearance: none;\n"]))),p=j.b.label(r||(r=Object(d.a)(["\ncolor: #caf0f8"]))),w=j.b.form(c||(c=Object(d.a)(["\ndisplay: grid;\nalign-content: end;\njustify-items: center;\ngrid-template-columns: 70% 30%;\ngrid-column-start:2;\ngrid-row-start: 2;\nalign-items: center;\nalign-self: center;\n"])));var O,f,x,y,v,C=function(e){return Object(u.jsxs)(w,{onSubmit:e.onSubmit,children:[Object(u.jsx)(p,{children:Object(u.jsx)(g,{onChange:e.onChange,type:"text",placeholder:"Zip Code",value:e.zip})}),Object(u.jsx)(m,{type:"submit",value:"Submit"})]})},S=Object(j.c)(O||(O=Object(d.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),T=Object(j.c)(f||(f=Object(d.a)(["\nfrom{\n    opacity:0;\n}\nto{\n    opacity:1;\n}"]))),L=j.b.p(x||(x=Object(d.a)(["\nanimation: "," 2s linear infinite;"])),S),H=j.b.div(y||(y=Object(d.a)(["\npadding: 2em;\ngrid-column: 2/3;\ngrid-row: 3;\ntext-align: center;\n"]))),k=j.b.h3(v||(v=Object(d.a)(["\nanimation : "," 1s 1;\n"])),T);var I,z,F,D=function(e){return e.loading?Object(u.jsx)(H,{children:Object(u.jsx)(L,{children:"\u2600\ufe0f   \ud83c\udf29\ufe0f   \u2744\ufe0f "})}):Object(u.jsxs)(H,{children:[Object(u.jsxs)(k,{children:["It's currently ",e.weatherTemp," in ",e.weatherCity]}),Object(u.jsxs)(k,{children:["The high today will be ",e.weatherHigh]}),Object(u.jsxs)(k,{children:["The low today will be ",e.weatherLow]})]})},E=Object(j.a)(I||(I=Object(d.a)(['\n  body {\n    background-color: #caf0f8;\n    font-family: "Inconsolata";\n  }']))),M=j.b.div(z||(z=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 25% 50% 25%;\n  grid-template-rows: 20vh 10vh 40vh;\n  justify-items: center;\n  "]))),B=j.b.h3(F||(F=Object(d.a)(["\ngrid-row:1;\ngrid-column: 2/3;\ndisplay: grid;\nalign-content: end;\npadding: 1em;"])));var J=function(){var e=Object(o.useState)(""),n=Object(h.a)(e,2),t=n[0],a=n[1],i=Object(o.useState)(""),r=Object(h.a)(i,2),c=r[0],l=r[1],b=Object(o.useState)({loading:!0,weatherTemp:null,weatherHigh:null,weatherLow:null,weatherCity:null}),s=Object(h.a)(b,2),d=s[0],j=s[1];Object(o.useEffect)((function(){var e=(new Date).getHours();e>=3&&e<=12?l("Morning"):e>=1&&e<=17?l("Afternoon"):e>=18&&e<=2&&l("Evening")}));var g=function(e){return Math.round(9*(e-273.15)/5+32)+"\xb0"};return Object(u.jsxs)(M,{className:"container",children:[Object(u.jsxs)(B,{children:["Good ",c]}),Object(u.jsx)(E,{}),Object(u.jsx)(C,{onSubmit:function(e){e.preventDefault(),a("");var n="https://api.openweathermap.org/data/2.5/weather?zip=".concat(t,",us&appid=9ed68342d5c7db25c28b073aeae7a98b");fetch(n).then((function(e){return e.json()})).then((function(e){console.log(e),j({loading:!1,weatherTemp:g(e.main.temp),weatherCity:e.name,weatherHigh:g(e.main.temp_max),weatherLow:g(e.main.temp_min)})})).catch((function(e){return console.log(e)}))},onChange:function(e){a(e.target.value)},zip:t}),Object(u.jsx)(D,{loading:d.loading,weatherTemp:d.weatherTemp,weatherCity:d.weatherCity,weatherHigh:d.weatherHigh,weatherLow:d.weatherLow})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),r(e),c(e)}))};s.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),P()}},[[22,1,2]]]);
//# sourceMappingURL=main.46aafc55.chunk.js.map