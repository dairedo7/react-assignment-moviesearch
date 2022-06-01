"use strict";(self.webpackChunkreact_assignment_moviesearch=self.webpackChunkreact_assignment_moviesearch||[]).push([[564],{9509:function(e,t,r){r.d(t,{FV:function(){return b},JS:function(){return p},dc:function(){return l},ds:function(){return _},kE:function(){return x},ts:function(){return m}});var n=r(5861),a=r(7757),s=r.n(a),c=r(4569),u=r.n(c),i=r(5264);u().defaults.baseURL="https://api.themoviedb.org/3";var o="2a8ba5d6d1e87afb6f0a309b33e3467f";function p(){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/trending/movie/week?api_key=".concat(o));case 2:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=e.sent,n=r.data.cast,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/videos?api_key=").concat(o));case 2:if(r=e.sent,n=r.data.results,!(a=n.filter((function(e){return"Trailer"===e.type})).pop())){e.next=9;break}return e.abrupt("return",a);case 9:return i.Notify.warning("There is no trailer for current movie!"),e.abrupt("return","No trailer was found!");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7988:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(8152),a=r(2791),s=r(6871),c=r(9509),u="Title_title__0nisx",i=r(184);function o(e){var t=e.title;return(0,i.jsx)("h2",{className:u,children:t})}var p="SearchForm_form__o80os",f="SearchForm_input__HOxJo",l="SearchForm_button__UXY06",h="SearchForm_input__field__UuRZx",m="SearchForm_label__GvSVH",v="SearchForm_focus__bg__77XPS";function _(e){var t=e.query,r=e.onSubmit,n=e.onChange;return(0,i.jsxs)("form",{className:p,onSubmit:r,children:[(0,i.jsxs)("label",{htmlFor:"inp",className:h,children:[(0,i.jsx)("input",{className:f,id:"inp",onChange:n,value:t,placeholder:"\xa0",type:"text"}),(0,i.jsx)("span",{className:m,children:"Movie Name"}),(0,i.jsx)("span",{className:v})]}),(0,i.jsx)("button",{className:l,type:"submit",children:"Search"})]})}var d="MoviesPageView_movie_box__2gDO1",x="MoviesPageView_results__error__pM89d",y=(0,a.lazy)((function(){return r.e(852).then(r.bind(r,8312))}));function b(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),r=t[0],u=t[1],p=(0,a.useState)([]),f=(0,n.Z)(p,2),l=f[0],h=f[1],m=(0,s.s0)(),v=(0,s.TH)(),b=new URLSearchParams(v.search).get("query");(0,a.useEffect)((function(){b&&(0,c.dc)(b).then(h)}),[b]);return(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)(o,{title:"Search results"}),(0,i.jsx)(_,{query:r,onSubmit:function(e){e.preventDefault(),(0,c.dc)(r).then(h),m({pathname:m.location,search:"?query=".concat(r)})},onChange:function(e){u(e.target.value)}}),(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)("h2",{children:"Loading movie list..."}),children:0===l.length&&b?(0,i.jsx)("h2",{className:x,children:"There's no movies for your search request!"}):(0,i.jsx)(y,{movies:l})})]})}}}]);
//# sourceMappingURL=MoviesView.f2eca32a.chunk.js.map