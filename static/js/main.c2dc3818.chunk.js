(window.webpackJsonpprofile=window.webpackJsonpprofile||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/myself.ac728173.webp"},37:function(e,a,t){e.exports=t.p+"static/media/lizashop.32f43ced.webp"},39:function(e,a,t){e.exports=t(66)},48:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(7),r=t.n(c),s=t(11),i=t(5),o=t(33),m=t.n(o),u=t(18);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function E(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(t,!0).forEach(function(a){Object(u.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var p={isHidden:!0,isToggled:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SHOW_NAV":return E({},e,{isHidden:!1});case"HIDE_NAV":return E({},e,{isHidden:!0});case"TOGGLE_NAV":return E({},e,{isToggled:!e.isToggled});case"HIDE_TOGGLE_NAV":return E({},e,{isToggled:!1});default:return e}},h=Object(i.c)({navigation:v}),b=[m.a],N=Object(i.d)(h,i.a.apply(void 0,b)),f=(t(48),t(8)),g=t(9),y=t(13),k=t(10),w=t(12),j=t(4),O=(t(56),Object(s.b)(function(e){var a=e.navigation;return{toggleNav:a.isHidden,toggleNavList:a.isToggled}},function(e){return{toggledNav:function(){return e({type:"TOGGLE_NAV"})},hideToggleNav:function(){return e({type:"HIDE_TOGGLE_NAV"})}}})(function(e){var a=e.toggleNav,t=e.toggleNavList,n=e.toggledNav,c=e.hideToggleNav;return l.a.createElement("nav",{className:"".concat(a?"hide":"show"," nav")},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement(j.Link,{to:"banner",smooth:!0,duration:1e3,className:"logo",onClick:c},l.a.createElement("div",{className:"name"},"W",l.a.createElement("span",null,"ayan"),l.a.createElement("p",null,"ECO")))),l.a.createElement("ul",{className:"".concat(t?"show":"hide"," navbar")},l.a.createElement(j.Link,{to:"about",activeClass:"active",smooth:!0,duration:1e3,spy:!0,className:"nav-item",onClick:c},"About"),l.a.createElement(j.Link,{to:"skill",activeClass:"active",smooth:!0,spy:!0,duration:1e3,className:"nav-item",onClick:c},"Skills"),l.a.createElement(j.Link,{to:"project",activeClass:"active",smooth:!0,spy:!0,duration:1e3,className:"nav-item",onClick:c},"Projects"),l.a.createElement(j.Link,{to:"contact",activeClass:"active",smooth:!0,spy:!0,duration:1e3,className:"nav-item",onClick:c},"Contact")),l.a.createElement("div",{className:"hamburger",onClick:n},l.a.createElement("span",{className:"".concat(t?"cross":"line"," bar")}),l.a.createElement("span",{className:"".concat(t?"cross":"line"," bar")}),l.a.createElement("span",{className:"".concat(t?"cross":"line"," bar")}),l.a.createElement("span",{className:"".concat(t?"cross":"line"," bar")}))))})),C=t(35),I=t(14),L=t(34),S=(t(57),function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(k.a)(a)).call.apply(e,[this].concat(l)))).handleScroll=function(){var e=t.props,a=e.showNav,n=e.hideNav,l=document.getElementById("banner");l.clientHeight+l.getBoundingClientRect().top<=0?a():n()},t}return Object(w.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("div",{className:"banner",name:"banner",id:"banner"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"banner-inner"},l.a.createElement("h2",{className:"banner-text"},"I'm Wayan Danyael ..."),l.a.createElement("p",null,"A Web Developer")),l.a.createElement("div",{className:"links"},l.a.createElement("a",{href:"https://github.com/wayaneco29",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(I.a,{className:"contact",size:40})),l.a.createElement("a",{href:"https://www.facebook.com/wayandanyael",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(L.a,{className:"contact",size:40}))),l.a.createElement(j.Link,{to:"about",smooth:!0,duration:1e3,className:"arrow"},l.a.createElement(C.a,{size:40,className:"contact"}))))}}]),a}(l.a.Component)),z=Object(s.b)(null,function(e){return{showNav:function(){return e({type:"SHOW_NAV"})},hideNav:function(){return e({type:"HIDE_NAV"})}}})(S),D=t(36),A=t.n(D),_=(t(58),function(){return l.a.createElement("div",{className:"about-me",name:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"about-me-inner"},l.a.createElement("h1",{className:"title"},"About Me"),l.a.createElement("div",{className:"sub-inner"},l.a.createElement("div",{className:"myself-image-container"},l.a.createElement("img",{src:A.a,alt:"Wayan Danyael Eco",className:"myself-image",loading:"lazy"})),l.a.createElement("div",{className:"myself-description"},l.a.createElement("p",{className:"description-subtext"},"My name is Wayan Danyael Eco. Currently, I'm a trainee in Web Development at 98 labs located at Mandaue, Cebu City.  I, myself specialized in creating dynamic and amazing web pages. Since I really don't have an experience about this job, but still it's my pleasure to be part of this team. I've been a Front-end Web developer at CodeChiq company --sadly, the company is not available right now."),l.a.createElement("p",{className:"description-subtext"},"Since I only have a little experience about this job.I am that person who is dedicated and loyal. Since my internship, I was amazed in making websites or in other words as a web developer. I attended several meet ups, seminar at Cebu City like GDG CEBU held in Manduae, Cebu. Being a web developer it helps me build my self confidence and self esteem. It's because not all people can code and make websites on its own. I feel incomplete when I didn't finish making websites that's why even holidays, I do coding because I do Iike it . The more I make websites, the colorful my life is. And it becomes my hobby. Thank you so much."))))))}),T=t(6),H=(t(59),function(){return l.a.createElement("div",{className:"skills",name:"skill"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"skills-inner"},l.a.createElement("h1",{className:"title"},"Skills"),l.a.createElement("div",{className:"skill-groups"},l.a.createElement("div",{className:"skill"},l.a.createElement(T.b,{size:50}),l.a.createElement("h3",null,"Django"),l.a.createElement("p",null,"is a python framework for developing websites.")),l.a.createElement("div",{className:"skill"},l.a.createElement(T.a,{size:50}),l.a.createElement("h3",null,"Bootstrap"),l.a.createElement("p",null,"is a css library made by Twitter. Make websites responsive and ready to use classes.")),l.a.createElement("div",{className:"skill"},l.a.createElement(T.e,{size:50}),l.a.createElement("h3",null,"Jquery"),l.a.createElement("p",null,"a javascript library that helps minimize the code of javascript. Also known at event handling."))),l.a.createElement("div",{className:"skill-groups"},l.a.createElement("div",{className:"skill"},l.a.createElement(T.d,{size:50}),l.a.createElement("h3",null,"ES6"),l.a.createElement("p",null,"a latest way javascript. Strongly minimize the code, and gives new methods.")),l.a.createElement("div",{className:"skill"},l.a.createElement(T.f,{size:50}),l.a.createElement("h3",null,"ReactJS"),l.a.createElement("p",null,"a javascript library made by Facebook.")),l.a.createElement("div",{className:"skill"},l.a.createElement(T.c,{size:50}),l.a.createElement("h3",null,"Firebase"),l.a.createElement("p",null,"is google free opensource no-sql datases which also provides user authentication."))))))}),x=t(37),W=t.n(x),G=(t(60),function(){return l.a.createElement("div",{className:"projects",name:"project"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"projects-inner"},l.a.createElement("h1",{className:"title"},"Projects"),l.a.createElement("div",{className:"project-groups"},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-image-container"},l.a.createElement("img",{src:W.a,alt:"Liza Shop Online",className:"project-image"})),l.a.createElement("div",{className:"view-container"},l.a.createElement("a",{href:"#",target:"_blank",className:"project-link"},l.a.createElement(I.a,{size:40})))),l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-image-container"},l.a.createElement("img",{src:"",alt:""})),l.a.createElement("div",{className:"view-container"},l.a.createElement("a",{href:"#",target:"_blank",className:"project-link"},l.a.createElement(I.a,{size:40})))),l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-image-container"},l.a.createElement("img",{src:"",alt:""})),l.a.createElement("div",{className:"view-container"},l.a.createElement("a",{href:"#",target:"_blank",className:"project-link"},l.a.createElement(I.a,{size:40}))))))))}),P=t(27),V=t.n(P),B=t(38),M=(t(62),function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(k.a)(a)).call.apply(e,[this].concat(l)))).state={email:"",message:""},t.handleSubmit=function(){var e=Object(B.a)(V.a.mark(function e(a){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({email:"",message:""}),a.preventDefault();case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.handleChange=function(e){e.persist();var a=e.target,n=a.name,l=a.value;t.setState(Object(u.a)({},n,l))},t}return Object(w.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"contacts",name:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"contact-inner"},l.a.createElement("h1",{className:"title"},"Contact"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Your Email"),l.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleChange,value:this.state.email,placeholder:"Your email .."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{className:"textarea",type:"text",name:"message",onChange:this.handleChange,value:this.state.message,placeholder:"Your message .."})),l.a.createElement("button",{className:"btn",type:"submit"},"Send")))))}}]),a}(l.a.Component)),J=(t(63),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer-inner"},l.a.createElement("div",{className:"container-link"},l.a.createElement("ul",null,l.a.createElement("li",{className:"footer-link"},"Link 1"),l.a.createElement("li",{className:"footer-link"},"Link 1"),l.a.createElement("li",{className:"footer-link"},"Link 1"),l.a.createElement("li",{className:"footer-link"},"Link 1"))),l.a.createElement("div",{className:"container-link"},l.a.createElement("ul",null,l.a.createElement("li",{className:"footer-link"},"Link 2"),l.a.createElement("li",{className:"footer-link"},"Link 2"),l.a.createElement("li",{className:"footer-link"},"Link 2"),l.a.createElement("li",{className:"footer-link"},"Link 2")))),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"created"},"All rights reserved \xa9 Wayan Danyael Eco")))}),q=(t(64),function(e){var a=e.isHidden;return l.a.createElement("div",{className:"homepage"},l.a.createElement(z,{isHidden:a}),l.a.createElement(_,null),l.a.createElement(H,null),l.a.createElement(G,null),l.a.createElement(M,null),l.a.createElement(J,null))}),F=(t(65),function(e){function a(){return Object(f.a)(this,a),Object(y.a)(this,Object(k.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null),l.a.createElement(q,null))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s.a,{store:N},l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.c2dc3818.chunk.js.map