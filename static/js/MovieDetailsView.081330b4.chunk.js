"use strict";(self.webpackChunkreact_assignment_moviesearch=self.webpackChunkreact_assignment_moviesearch||[]).push([[190,187],{9509:function(e,t,n){n.d(t,{FV:function(){return j},JS:function(){return l},dc:function(){return v},ds:function(){return x},kE:function(){return w},ts:function(){return d}});var r=n(7762),a=n(5861),s=n(7757),i=n.n(s),c=n(4569),o=n.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var u="2a8ba5d6d1e87afb6f0a309b33e3467f";function l(){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/trending/movie/week?api_key=".concat(u));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(i().mark((function e(t){var n,a,s,c,l,f,v,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/videos?api_key=").concat(u));case 2:n=e.sent,a=n.data.results,s=[],c=(0,r.Z)(a);try{for(c.s();!(l=c.n()).done;)f=l.value,v=f.name,p=f.type,"Official Trailer"===v&&s.push(f),"Trailer"===p&&s.push(f)}catch(i){c.e(i)}finally{c.f()}return e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},8370:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return A}});var i=n(885),c=n(6871),o=n(2791),u=n(3504),l=n(9509),f="GoBackBtn_btn__lUHFc",v=n(184);function p(){var e=(0,c.s0)(),t=(0,c.TH)();console.log(t);return(0,v.jsx)("button",{className:f,type:"button",onClick:function(){console.log(t),t.search?(console.log(t.pathname),console.log(e),e("/movies".concat(t.search),{})):e("/home")},children:"Return"})}var d={},h=n(6633);function x(e){var t=e.movieDetails,n=t.backdrop_path,r=t.tagline,a=t.title,s=t.release_date,i=t.vote_average,c=t.overview,o=t.genres;return(0,v.jsxs)("div",{className:d.movie_box,children:[(0,v.jsx)("img",{className:d.movie_img,src:n?"https://image.tmdb.org/t/p/w500".concat(n):h,alt:r}),(0,v.jsxs)("div",{className:d.descriptionBox,children:[(0,v.jsxs)("h2",{className:d.title,children:[a," ",s?"".concat(s):""]}),(0,v.jsxs)("p",{className:d.userScore,children:["User Score: ",i]}),(0,v.jsx)("p",{className:d.overview,children:"Overview"}),(0,v.jsx)("p",{className:d.overview__text,children:c}),(0,v.jsx)("p",{className:d.genres,children:"Genres"}),(0,v.jsx)("p",{children:o.map((function(e){var t=e.name,n=e.id;return(0,v.jsx)("span",{className:d.genres__name,children:t},n)}))})]})]})}var m=n(883),w={box:"MovieDetailsView_box__-jHtu",title:"MovieDetailsView_title__iKoIj",link:"MovieDetailsView_link__8aj5k",link_active:"MovieDetailsView_link_active__Jm+qD",boxAdditional:"MovieDetailsView_boxAdditional__6Gvo2"},b=(0,o.lazy)((function(){return n.e(709).then(n.bind(n,8227))})),j=(0,o.lazy)((function(){return n.e(753).then(n.bind(n,8699))})),y=(0,o.lazy)((function(){return n.e(126).then(n.bind(n,7354))}));function A(){var e=(0,o.useState)(null),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,c.UO)().slug.match(/[a-z0-9]+$/)[0],f=(0,c.TH)(),d=(0,c.bS)("/movies/:slug/*").pathnameBase;return(0,o.useEffect)((function(){(0,l.ts)(a).then(r)}),[a]),n?(0,v.jsx)("div",{className:w.box,children:(0,v.jsxs)(o.StrictMode,{children:[(0,v.jsx)(p,{}),(0,v.jsx)(x,{movieDetails:n}),(0,v.jsx)("hr",{}),(0,v.jsxs)("div",{className:w.boxAdditional,children:[(0,v.jsx)("h2",{className:w.title,children:"Additional information"}),(0,v.jsxs)("ul",{className:w.crewList,children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.OL,{to:{pathname:"".concat(d,"/cast"),search:f.search,state:s(s({},f.state),{},{id:a})},className:w.link,activeclassname:w.link_active,children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.OL,{to:{pathname:"".concat(d,"/reviews"),search:f.search,state:s(s({},f.state),{},{id:a})},className:w.link,activeclassname:w.link_active,children:"Reviews"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.OL,{to:{pathname:"".concat(d,"/trailer"),search:f.search,state:s(s({},f.state),{},{id:a})},state:{},className:w.link,activeclassname:w.link_active,children:"Trailer"})})]})]}),(0,v.jsx)(o.Suspense,{fallback:(0,v.jsx)("h2",{children:"Loading in movie card..."}),children:(0,v.jsxs)(c.Z5,{children:[(0,v.jsx)(c.AW,{exact:!0,path:"/cast",element:(0,v.jsx)(b,{movieId:a})}),(0,v.jsx)(c.AW,{exact:!0,path:"/reviews",element:(0,v.jsx)(j,{movieId:a})}),(0,v.jsx)(c.AW,{exact:!0,path:"trailer",element:(0,v.jsx)(y,{teaser:a})}),(0,v.jsx)(c.AW,{element:(0,v.jsx)(m.default,{})})]})})]})}):(0,v.jsx)(v.Fragment,{})}},883:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(184);function a(){return(0,r.jsx)("h2",{children:"404 The page does not exist! "})}},6633:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=MovieDetailsView.081330b4.chunk.js.map