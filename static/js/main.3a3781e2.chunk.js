(window.webpackJsonpprofile=window.webpackJsonpprofile||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/myself.de509160.jpg"},38:function(e,a,t){e.exports=t(65)},47:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(7),c=t.n(r),i=t(11),s=t(5),o=t(32),m=t.n(o),u=t(17);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(t,!0).forEach(function(a){Object(u.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var E={isHidden:!0,isToggled:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SHOW_NAV":return p({},e,{isHidden:!1});case"HIDE_NAV":return p({},e,{isHidden:!0});case"TOGGLE_NAV":return p({},e,{isToggled:!e.isToggled});default:return e}},N=Object(s.c)({navigation:v}),g=[m.a],h=Object(s.d)(N,s.a.apply(void 0,g)),f=(t(47),t(8)),b=t(9),y=t(13),O=t(10),j=t(12),k=t(4),w=(t(55),Object(i.b)(function(e){var a=e.navigation;return{toggleNav:a.isHidden,toggleNavList:a.isToggled}},function(e){return{toggledNav:function(){return e({type:"TOGGLE_NAV"})}}})(function(e){var a=e.toggleNav,t=e.toggleNavList,n=e.toggledNav;return l.a.createElement("nav",{className:"".concat(a?"hide":"show"," nav")},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement(k.Link,{to:"banner",smooth:!0,duration:1e3,className:"logo"},"LOGO")),l.a.createElement("ul",{className:"".concat(t?"show":"hide"," navbar")},l.a.createElement(k.Link,{to:"about",activeClass:"active",smooth:!0,duration:1e3,spy:!0,className:"nav-item"},"About"),l.a.createElement(k.Link,{to:"skill",activeClass:"active",smooth:!0,spy:!0,duration:1e3,className:"nav-item"},"Skills"),l.a.createElement(k.Link,{to:"project",activeClass:"active",smooth:!0,spy:!0,duration:1e3,className:"nav-item"},"Projects"),l.a.createElement(k.Link,{to:"contact",activeClass:"active",smooth:!0,spy:!0,duration:1e3,className:"nav-item"},"Contact")),l.a.createElement("div",{className:"hamburger",onClick:n},l.a.createElement("span",{className:"bar"}),l.a.createElement("span",{className:"bar"}),l.a.createElement("span",{className:"bar"}),l.a.createElement("span",{className:"bar"}))))})),q=t(35),L=t(33),S=t(34),C=(t(56),function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(y.a)(this,(e=Object(O.a)(a)).call.apply(e,[this].concat(l)))).handleScroll=function(){var e=t.props,a=e.showNav,n=e.hideNav,l=document.getElementById("banner");l.clientHeight+l.getBoundingClientRect().top<=0?a():n()},t}return Object(j.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("div",{className:"banner",name:"banner",id:"banner"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"banner-inner"},l.a.createElement("h2",{className:"banner-text"},"I'm Wayan Danyael ..."),l.a.createElement("p",null,"A Web Developer")),l.a.createElement("div",{className:"links"},l.a.createElement("a",{href:"https://github.com/wayaneco29",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(L.a,{className:"contact",size:40})),l.a.createElement("a",{href:"https://www.facebook.com/wayandanyael",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(S.a,{className:"contact",size:40}))),l.a.createElement(k.Link,{to:"about",smooth:!0,duration:1e3,className:"arrow"},l.a.createElement(q.a,{size:40,className:"contact"}))))}}]),a}(l.a.Component)),P=Object(i.b)(null,function(e){return{showNav:function(){return e({type:"SHOW_NAV"})},hideNav:function(){return e({type:"HIDE_NAV"})}}})(C),x=t(36),A=t.n(x),D=(t(57),function(){return l.a.createElement("div",{className:"about-me",name:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"about-me-inner"},l.a.createElement("h1",{className:"title"},"About Me"),l.a.createElement("div",{className:"sub-inner"},l.a.createElement("div",{className:"myself-image-container"},l.a.createElement("img",{src:A.a,alt:"Wayan Danyael Eco",className:"myself-image",loading:"lazy"})),l.a.createElement("div",{className:"myself-description"},l.a.createElement("p",{className:"description-subtext"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit neque magni cupiditate, laborum voluptates officiis dolorum consectetur temporibus dolores corporis illum sit cum sint deserunt delectus eveniet ipsum voluptate nemo!"),l.a.createElement("p",{className:"description-subtext"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque id, culpa possimus non ratione voluptas quia assumenda quisquam commodi? Perferendis hic quidem ducimus sit impedit odit placeat reprehenderit, exercitationem aliquid dolorum nesciunt tempora natus qui doloremque voluptas porro vel voluptatem facere quos numquam. Molestiae itaque eaque ipsa esse eligendi?"))))))}),H=t(6),z=(t(58),function(){return l.a.createElement("div",{className:"skills",name:"skill"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"skills-inner"},l.a.createElement("h1",{className:"title"},"Skills"),l.a.createElement("div",{className:"skill-groups"},l.a.createElement("div",{className:"skill"},l.a.createElement(H.b,{size:50}),l.a.createElement("h3",null,"Django"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.")),l.a.createElement("div",{className:"skill"},l.a.createElement(H.a,{size:50}),l.a.createElement("h3",null,"Bootstrap"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.")),l.a.createElement("div",{className:"skill"},l.a.createElement(H.e,{size:50}),l.a.createElement("h3",null,"Jquery"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque."))),l.a.createElement("div",{className:"skill-groups"},l.a.createElement("div",{className:"skill"},l.a.createElement(H.d,{size:50}),l.a.createElement("h3",null,"ES6"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.")),l.a.createElement("div",{className:"skill"},l.a.createElement(H.f,{size:50}),l.a.createElement("h3",null,"ReactJS"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque.")),l.a.createElement("div",{className:"skill"},l.a.createElement(H.c,{size:50}),l.a.createElement("h3",null,"Firebase"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ullam nulla atque."))))))}),_=(t(59),function(){return l.a.createElement("div",{className:"projects",name:"project"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"projects-inner"},l.a.createElement("h1",{className:"title"},"Projects"),l.a.createElement("div",{className:"project-groups"},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-image-container"},l.a.createElement("img",{src:"",alt:""}))),l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-image-container"},l.a.createElement("img",{src:"",alt:""}))),l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-image-container"},l.a.createElement("img",{src:"",alt:""})))))))}),T=t(26),W=t.n(T),V=t(37),B=(t(61),function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(y.a)(this,(e=Object(O.a)(a)).call.apply(e,[this].concat(l)))).state={email:"",message:""},t.handleSubmit=function(){var e=Object(V.a)(W.a.mark(function e(a){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,fetch("http://localhost:5000/api/mail/",{mode:"no-cors",method:"POST",body:JSON.stringify(t.state)});case 4:t.setState({email:"",message:""}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(1),e.t0;case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(a){return e.apply(this,arguments)}}(),t.handleChange=function(e){e.persist();var a=e.target,n=a.name,l=a.value;t.setState(Object(u.a)({},n,l))},t}return Object(j.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"contacts",name:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"contact-inner"},l.a.createElement("h1",{className:"title"},"Contact"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Your Email"),l.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleChange,value:this.state.email})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{className:"textarea",type:"text",name:"message",onChange:this.handleChange})),l.a.createElement("button",{className:"btn",type:"submit"},"Send")))))}}]),a}(l.a.Component)),G=(t(62),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer-inner"},l.a.createElement("div",{className:"container-link"}),l.a.createElement("div",{className:"container-link"}))))}),I=(t(63),function(e){var a=e.isHidden;return l.a.createElement("div",{className:"homepage"},l.a.createElement(P,{isHidden:a}),l.a.createElement(D,null),l.a.createElement(z,null),l.a.createElement(_,null),l.a.createElement(B,null),l.a.createElement(G,null))}),J=(t(64),function(e){function a(){return Object(f.a)(this,a),Object(y.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(j.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,null),l.a.createElement(I,null))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,{store:h},l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.3a3781e2.chunk.js.map