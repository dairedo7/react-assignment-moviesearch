"use strict";(self.webpackChunkreact_assignment_moviesearch=self.webpackChunkreact_assignment_moviesearch||[]).push([[564],{9509:function(e,t,n){n.d(t,{FV:function(){return k},JS:function(){return p},dc:function(){return h},ds:function(){return m},kE:function(){return x},ts:function(){return v}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c),i=n(5264);s().defaults.baseURL="https://api.themoviedb.org/3";var o="2a8ba5d6d1e87afb6f0a309b33e3467f";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/week?api_key=".concat(o));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/videos?api_key=").concat(o));case 2:if(n=e.sent,r=n.data.results,!(a=r.filter((function(e){return"Trailer"===e.type})).pop())){e.next=9;break}return e.abrupt("return",a);case 9:return i.Notify.warning("There is no trailer for current movie!"),e.abrupt("return","No trailer was found!");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7988:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(8152),a=n(2791),u=n(6871),c=n(9509),s={},i=n(184);function o(e){var t=e.title;return(0,i.jsx)("h2",{className:s.title,children:t})}var p="SearchForm_input__HOxJo",f="SearchForm_button__UXY06";function h(e){var t=e.query,n=e.onSubmit,r=e.onChange;return(0,i.jsxs)("form",{onSubmit:n,children:[(0,i.jsx)("input",{className:p,onChange:r,value:t,type:"text"}),(0,i.jsx)("button",{className:f,type:"submit",children:"Search"})]})}var l={},v=(0,a.lazy)((function(){return n.e(852).then(n.bind(n,324))}));function d(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],p=(0,a.useState)([]),f=(0,r.Z)(p,2),d=f[0],m=f[1],y=(0,u.s0)(),x=(0,u.TH)(),b=new URLSearchParams(x.search).get("query");console.log(b),(0,a.useEffect)((function(){b&&(0,c.dc)(b).then(m)}),[b]);return(0,i.jsxs)("div",{className:l.movie_box,children:[(0,i.jsx)(o,{title:"Search results"}),(0,i.jsx)(h,{query:n,onSubmit:function(e){e.preventDefault(),(0,c.dc)(n).then(m),y({pathname:y.location,search:"?query=".concat(n)})},onChange:function(e){s(e.target.value)}}),(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)("h2",{children:"Loading movie list..."}),children:0===d.length&&b?(0,i.jsx)("h2",{children:"There's no movies for your search request!"}):(0,i.jsx)(v,{movies:d})})]})}}}]);
//# sourceMappingURL=MoviesView.ea2af3cb.chunk.js.map