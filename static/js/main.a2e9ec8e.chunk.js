(this.webpackJsonpmypage=this.webpackJsonpmypage||[]).push([[0],{21:function(e,a,t){e.exports=t(35)},26:function(e,a,t){},32:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),r=t.n(c),m=(t(26),t(7)),i=t(8),s=t(10),o=t(9),u=t(13),b=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top navbar-light bg-light"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("a",{className:"navbar-brand",href:"#"},"Week 3"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/react_js_component_basic"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{className:"nav-link",to:"/react_js_component_basic/es6"},"ES6")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/react_js_component_basic/oop"},"OOP")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/react_js_component_basic/async"},"async etc"))),l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))}}]),t}(l.a.Component),d=(t(32),l.a.Component,l.a.Component,t(1)),E=t(5),h=t.n(E),p=function(){function e(e){e.preventDefault();var a,t,n,l,c=!1;do{a=prompt("Masukkan angka pertama",""),isNaN(a)?alert("Nilai tidak valid. Mohon masukkan lagi"):c=!0}while(!c);c=!1;do{t=prompt("Masukkan angka kedua",""),isNaN(t)?alert("Nilai tidak valid. Mohon masukkan lagi"):c=!0}while(!c);c=!1;do{"+"==(n=prompt("Masukkan operator. Masukkan + untuk tambah, - untuk kurang, * untuk kali, / untuk bagi, ^ untuk pangkat, max untuk maksimum, min untuk minimum"," ")).trim()||"-"==n.trim()||"*"==n.trim()||"/"==n.trim()||"max"==n.trim()||"min"==n.trim()||"^"==n.trim()?c=!0:alert("Mohon masukkan operator yang valid.")}while(!c);switch(a=+a,t=+t,n.trim()){case"+":l=a+t,alert("Hasilnya adalah ".concat(l));break;case"-":l=function(e,a){return e-a}(a,t),alert("Hasilnya adalah ".concat(l));break;case"*":l=function(e,a){return e*a}(a,t),alert("Hasilnya adalah ".concat(l));break;case"/":l=function(e,a){return 0==a?"Erorr divide by zero":e/a}(a,t),alert("Hasilnya adalah ".concat(l));break;case"^":l=function(e,a){return Math.pow(e,a)}(a,t),alert("Hasilnya adalah ".concat(l));break;case"min":l=function(e,a){return e<a?e:a}(a,t),alert("Hasilnya adalah ".concat(l));break;case"max":l=function(e,a){return e>a?e:a}(a,t),alert("Hasilnya adalah ".concat(l));break;default:alert("Kesalahahan terjadi. Coba lagi nanti")}}return l.a.createElement("div",null,l.a.createElement("h1",null,"Tugas ES6"),l.a.createElement("button",{onClick:function(a){return e(a)},className:"btn btn-primary"},"Calculator ES6"),l.a.createElement(h.a,{gist:"ydhnwb/b4a5a1b8cea0fe49785745ca4e77eabb"}))},g=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"This is about OOP in JS"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h6",null,"Animal.js"),l.a.createElement(h.a,{gist:"ydhnwb/baa0aeba303ce124de9bba7ec1f6262d"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h6",null,"clock.js"),l.a.createElement(h.a,{gist:"ydhnwb/ee8b726fb8644459ded20ac6bb00caf5"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h6",null,"student.js"),l.a.createElement(h.a,{gist:"ydhnwb/6be371e61a2af43e7ad43f6b453da4fd"}))))}}]),t}(l.a.Component),v=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h5",null,"Learn more about this person"),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Name: ",this.props.name),l.a.createElement("li",null,"Age: ",this.props.age))),l.a.createElement("div",null,l.a.createElement("p",null,"Hobbies"),l.a.createElement("ul",null,this.props.hobbies.map((function(e,a){return l.a.createElement("li",null,e)}))),this.props.age>17?l.a.createElement("h5",null,"Good luck for your test!"):l.a.createElement("h5",null,"You mest be 17!")))}}]),t}(l.a.Component),f=function(){return l.a.createElement("div",null,[{name:"Harry",age:28,hobbies:["bowling","watching tv","drinking beer"]},{name:"Johnny",age:34,hobbies:["painting","gambling"]},{name:"Udin",age:10,hobbies:["skateboarding","make prank calls"]}].map((function(e,a){return l.a.createElement(v,e)})))},k=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h6",null,"callback.js"),l.a.createElement(h.a,{gist:"ydhnwb/2a69b9eb7fe8a58d274a9908c76e285f"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h6",null,"index.js"),l.a.createElement(h.a,{gist:"ydhnwb/aa792947ffe798c9eaf4bc2b70c4194e"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h6",null,"promise.js"),l.a.createElement(h.a,{gist:"ydhnwb/1065f66ebec27ec967f52879ca6f724d"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h6",null,"index2.js"),l.a.createElement(h.a,{gist:"ydhnwb/74878b8e9c3274504b19efbfd79d5683"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h6",null,"request_excercise.js"),l.a.createElement(h.a,{gist:"ydhnwb/5dac26cf29d93ce842cede1c11b88612"})))};var y=function(){return l.a.createElement("div",null,l.a.createElement(u.a,{basename:"/"},l.a.createElement("header",null,l.a.createElement(b,null)),l.a.createElement("div",{className:"container"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/react_js_component_basic"},l.a.createElement(f,null)),l.a.createElement(d.a,{path:"/react_js_component_basic/es6"},l.a.createElement(p,null)),l.a.createElement(d.a,{path:"/react_js_component_basic/oop"},l.a.createElement(g,null)),l.a.createElement(d.a,{path:"/react_js_component_basic/async"},l.a.createElement(k,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a2e9ec8e.chunk.js.map