(this.webpackJsonpra_event_state_filter=this.webpackJsonpra_event_state_filter||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var r=s(1),o=s.n(r),a=s(3),n=s.n(a),i=(s(12),s(13),s(4)),c=s(5),g=s(7),m=s(6),l=s(17),h=s(0);var u=function(e){var t=e.projects;return Object(h.jsx)("div",{className:"project-list",children:t.map((function(e){return Object(h.jsx)("img",{className:"card",src:e.img,alt:""},Object(l.a)())}))})};var p=function(e){var t=e.filters,s=e.selected;return Object(h.jsx)("div",{className:"toolbar",children:t.map((function(t){return Object(h.jsx)("div",{className:"filter"+(t===s?" selected":""),onClick:function(){return s=t,e.onSelectFilter(s);var s},children:t},t)}))})},d=function(e){Object(g.a)(s,e);var t=Object(m.a)(s);function s(e){var r;return Object(i.a)(this,s),(r=t.call(this,e)).onSelectFilter=function(e){r.setState({selected:e})},r.filters=e.filters,r.projects=e.projects,r.state={selected:"All"},r}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"portfolio",children:[Object(h.jsx)(p,{filters:this.filters,selected:this.state.selected,onSelectFilter:this.onSelectFilter}),Object(h.jsx)(u,{projects:"All"===this.state.selected?this.projects:this.projects.filter((function(t){return t.category===e.state.selected}))})]})}}]),s}(r.Component),b=["All","Websites","Flayers","Business Cards"],j=[{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",category:"Flayers"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",category:"Business Cards"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",category:"Websites"},{img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",category:"Flayers"}];var f=function(){return Object(h.jsx)(d,{filters:b,projects:j})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f9537293.chunk.js.map