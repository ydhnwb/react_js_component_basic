(this.webpackJsonpmypage=this.webpackJsonpmypage||[]).push([[0],{21:function(e,a,t){e.exports=t(35)},26:function(e,a,t){},32:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(19),c=t.n(r),m=(t(26),t(7)),i=t(8),s=t(10),o=t(9),u=t(11),d=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top navbar-light bg-light"},n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("a",{className:"navbar-brand",href:"#"},"Week 3"),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},n.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/home"},"React Homepage")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/helloreact"},"Hello react")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/es6"},"ES6")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/oop"},"OOP")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{className:"nav-link",to:"/async"},"async etc"))),n.a.createElement("form",{className:"form-inline my-2 my-lg-0"},n.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))}}]),t}(n.a.Component),b=(t(32),n.a.Component,n.a.Component,t(1)),E=t(5),h=t.n(E),p=function(){function e(e){e.preventDefault();var a,t,l,n,r=!1;do{a=prompt("Masukkan angka pertama",""),isNaN(a)?alert("Nilai tidak valid. Mohon masukkan lagi"):r=!0}while(!r);r=!1;do{t=prompt("Masukkan angka kedua",""),isNaN(t)?alert("Nilai tidak valid. Mohon masukkan lagi"):r=!0}while(!r);r=!1;do{"+"==(l=prompt("Masukkan operator. Masukkan + untuk tambah, - untuk kurang, * untuk kali, / untuk bagi, ^ untuk pangkat, max untuk maksimum, min untuk minimum"," ")).trim()||"-"==l.trim()||"*"==l.trim()||"/"==l.trim()||"max"==l.trim()||"min"==l.trim()||"^"==l.trim()?r=!0:alert("Mohon masukkan operator yang valid.")}while(!r);switch(a=+a,t=+t,l.trim()){case"+":n=a+t,alert("Hasilnya adalah ".concat(n));break;case"-":n=function(e,a){return e-a}(a,t),alert("Hasilnya adalah ".concat(n));break;case"*":n=function(e,a){return e*a}(a,t),alert("Hasilnya adalah ".concat(n));break;case"/":n=function(e,a){return 0==a?"Erorr divide by zero":e/a}(a,t),alert("Hasilnya adalah ".concat(n));break;case"^":n=function(e,a){return Math.pow(e,a)}(a,t),alert("Hasilnya adalah ".concat(n));break;case"min":n=function(e,a){return e<a?e:a}(a,t),alert("Hasilnya adalah ".concat(n));break;case"max":n=function(e,a){return e>a?e:a}(a,t),alert("Hasilnya adalah ".concat(n));break;default:alert("Kesalahahan terjadi. Coba lagi nanti")}}return n.a.createElement("div",null,n.a.createElement("h1",null,"Tugas ES6"),n.a.createElement("button",{onClick:function(a){return e(a)},className:"btn btn-primary"},"Calculator ES6"),n.a.createElement(h.a,{gist:"ydhnwb/b4a5a1b8cea0fe49785745ca4e77eabb"}))},g=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"This is about OOP in JS"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h6",null,"Animal.js"),n.a.createElement(h.a,{gist:"ydhnwb/baa0aeba303ce124de9bba7ec1f6262d"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h6",null,"clock.js"),n.a.createElement(h.a,{gist:"ydhnwb/ee8b726fb8644459ded20ac6bb00caf5"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h6",null,"student.js"),n.a.createElement(h.a,{gist:"ydhnwb/6be371e61a2af43e7ad43f6b453da4fd"}))))}}]),t}(n.a.Component),v=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h5",null,"Learn more about this person"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Name: ",this.props.name),n.a.createElement("li",null,"Age: ",this.props.age))),n.a.createElement("div",null,n.a.createElement("p",null,"Hobbies"),n.a.createElement("ul",null,this.props.hobbies.map((function(e,a){return n.a.createElement("li",null,e)}))),this.props.age>17?n.a.createElement("h5",null,"Good luck for your test!"):n.a.createElement("h5",null,"You mest be 17!")))}}]),t}(n.a.Component),f=function(){return n.a.createElement("div",null,[{name:"Harry",age:28,hobbies:["bowling","watching tv","drinking beer"]},{name:"Johnny",age:34,hobbies:["painting","gambling"]},{name:"Udin",age:10,hobbies:["skateboarding","make prank calls"]}].map((function(e,a){return n.a.createElement(v,e)})))},y=function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h6",null,"callback.js"),n.a.createElement(h.a,{gist:"ydhnwb/2a69b9eb7fe8a58d274a9908c76e285f"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h6",null,"index.js"),n.a.createElement(h.a,{gist:"ydhnwb/aa792947ffe798c9eaf4bc2b70c4194e"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h6",null,"promise.js"),n.a.createElement(h.a,{gist:"ydhnwb/1065f66ebec27ec967f52879ca6f724d"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h6",null,"index2.js"),n.a.createElement(h.a,{gist:"ydhnwb/74878b8e9c3274504b19efbfd79d5683"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h6",null,"request_excercise.js"),n.a.createElement(h.a,{gist:"ydhnwb/5dac26cf29d93ce842cede1c11b88612"})))},N=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"slider-main h-800x h-sm-auto pos-relative pt-95 pb-95"},n.a.createElement("div",{className:"img-bg bg-1 bg-layer-4"}),n.a.createElement("div",{className:"container-fluid h-100 mt-xs-50"},n.a.createElement("div",{className:"row h-80"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-sm-12 col-md-8"},n.a.createElement("div",{className:"dplay-tbl"},n.a.createElement("div",{className:"dplay-tbl-cell color-white mtb-30"},n.a.createElement("div",{className:"mx-w-900x"},n.a.createElement("a",{href:"https://twitter.com/ydhnwb"},n.a.createElement("div",{className:"inset"},n.a.createElement("img",{src:"assets/img/me.jpg"}))),n.a.createElement("h2",{className:"mt-20 mb-30"},n.a.createElement("b",null,"Hi there, I'm Prieyudha Akadita S!")),n.a.createElement("p",{className:"text-white justify-content-around"},"I am last semester student and mobile app developer. Experienced in Android Native and Flutter but also confident to work with web development using Django."),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("h6",null,n.a.createElement("a",{className:"plr-20 btn-brdr-grey color-white",style:{margin:"10px"},href:"https://ydhnwb.gitbook.io/"},n.a.createElement("b",null,"My journals and more"))),n.a.createElement("h6",null,n.a.createElement("a",{className:"plr-20 btn-brdr-grey color-white",style:{margin:"10px"},href:"https://medium.com/@ydhnwb"},n.a.createElement("b",null,"My articles on Medium"))),n.a.createElement("h6",null,n.a.createElement("a",{className:"plr-20 btn-brdr-grey color-white",style:{margin:"10px"},href:"https://github.com/ydhnwb"},n.a.createElement("b",null,"Github"))),n.a.createElement("h6",null,n.a.createElement("a",{className:"plr-20 btn-brdr-grey color-white",style:{margin:"10px"},href:"https://id.linkedin.com/in/prieyudha-akadita-s-4bb736142"},n.a.createElement("b",null,"Linkedin"))),n.a.createElement("h6",null,n.a.createElement("a",{className:"plr-20 btn-brdr-grey color-white",style:{margin:"10px"},href:"https://www.youtube.com/channel/UCDG7gCaRawAdyeA5omGRBRA"},n.a.createElement("b",null,"Youtube"))))))))))),n.a.createElement("footer",{className:"bg-191 color-ash pt-50 pb-20 text-left center-sm-text"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-1"}),n.a.createElement("div",{className:"col-md-12 col-lg-12 mb-30 text-center"},n.a.createElement("div",{className:"card h-100"},n.a.createElement("div",{className:"dplay-tbl"},n.a.createElement("div",{className:"dplay-tbl-cell"},n.a.createElement("ul",{className:"list-a-plr-10"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/ydhnwb"},n.a.createElement("i",{className:"ion-social-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.youtube.com/channel/UCDG7gCaRawAdyeA5omGRBRA"},n.a.createElement("i",{className:"ion-social-youtube"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/ydhnwb"},n.a.createElement("i",{className:"ion-social-github"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"mailto:akaditasustono@gmail.com"},n.a.createElement("i",{className:"ion-ios-email"}))))))))))))};var k=function(){return n.a.createElement("div",null,n.a.createElement(u.a,{basename:"/"},n.a.createElement("header",null,n.a.createElement(d,null)),n.a.createElement("div",{className:"container"},n.a.createElement(b.d,null,n.a.createElement(b.b,{exact:!0,path:"/"},n.a.createElement(b.a,{to:"/home"})),n.a.createElement(b.b,{def:!0,exact:!0,path:"/home"},n.a.createElement(N,null)),n.a.createElement(b.b,{def:!0,exact:!0,path:"/helloreact"},n.a.createElement(f,null)),n.a.createElement(b.b,{path:"/es6"},n.a.createElement(p,null)),n.a.createElement(b.b,{path:"/oop"},n.a.createElement(g,null)),n.a.createElement(b.b,{path:"/async"},n.a.createElement(y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.50ae93ac.chunk.js.map