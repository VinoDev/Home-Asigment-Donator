(this.webpackJsonpdonator=this.webpackJsonpdonator||[]).push([[0],{58:function(n,e,t){},59:function(n,e,t){},60:function(n,e,t){},61:function(n,e,t){},63:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(8),c=t.n(r),u=t(19),s=(t(58),t(59),t(60),t(61),t(6)),i=function(n){var e=n.data,t=e.name,a=e.amount;return Object(s.jsxs)("div",{className:"donator-item",children:[Object(s.jsxs)("div",{className:"donator-item-main",children:[Object(s.jsx)("span",{className:"donator-amount",children:"$"+a}),Object(s.jsx)("span",{className:"donator-name",children:t})]}),Object(s.jsx)("div",{className:"donator-extras"})]})},d=t(41),l=t(33),h={donators:[{name:"Zisi Reifer",amount:"100",date:1619203280978},{name:"Shlomo Muller",amount:"18",date:1619203280786},{name:"Yosef Struman",amount:"10",date:1619203280786},{name:"Tzipporah Bishop",amount:"18",date:1619203280281},{name:"David Cohen",amount:"360",date:1619203280049},{name:"Avi Dan",amount:"7",date:1619203279833}],orderBy:"date",searchField:""},j=Object(l.b)({name:"donators",initialState:h,reducers:{ADD_DONATOR:function(n,e){n.donators=[e.payload].concat(Object(d.a)(n.donators))},SET_ORDER_BY:function(n,e){n.orderBy=e.paylaod},SET_SEARCH_FIELD:function(n,e){n.searchField=e.payload}}}),m=function(){var n=Object(u.b)(),e=j.actions.SET_SEARCH_FIELD,t=Object(u.c)((function(n){return n.donators})),a=t.donators,o=t.searchField;return{showDonators:function(){return o&&a.length>0?a.filter((function(n){return n.name.toLowerCase().includes(o)})):a},searchField:o,onSearchInputChange:function(t){var a=t.target.value;n(e(a.toLowerCase()))}}},b=function(){var n=m().showDonators;return Object(s.jsx)("div",{className:"donators",children:n().map((function(n,e){return Object(s.jsx)(i,{data:n},e)}))})},O=(t(63),t(95)),f=t(96),p=t(37),v=function(n,e){return!(""!==n&&!e.test(n))},x=function(){var n=Object(u.b)(),e=j.actions.ADD_DONATOR,t=Object(a.useState)("Baruch Cohen"),o=Object(p.a)(t,2),r=o[0],c=o[1],s=Object(a.useState)("100"),i=Object(p.a)(s,2),d=i[0],l=i[1];return{handleSubmit:function(t){try{t.preventDefault(),r&&d&&(n(e({name:r,amount:d,date:Date.now()})),c(""),l(""))}catch(a){return"error"}},handleNameChange:function(n){var e=n.target.value;v(e,/^[a-z_ ]+$/i)&&c(n.target.value)},handleAmountChange:function(n){var e=n.target.value;v(e,/^[0-9]*$/)&&l(n.target.value)},nameInput:r,amountInput:d}},g=function(n){var e=n.searchInput,t=n.onSearchInputChange,a=x(),o=a.handleSubmit,r=a.handleNameChange,c=a.handleAmountChange,u=a.nameInput,i=a.amountInput;return Object(s.jsxs)("div",{className:"control-panel",children:[Object(s.jsxs)("form",{className:"control-panel-top",onSubmit:function(n){return o(n)},children:[Object(s.jsx)(O.a,{label:"Name",variant:"filled",value:u,onChange:function(n){return r(n)}}),Object(s.jsx)(O.a,{label:"Amount",variant:"filled",value:i,onChange:function(n){return c(n)}}),Object(s.jsx)(f.a,{variant:"contained",type:"submit",children:"Add"})]}),Object(s.jsx)("div",{className:"control-panel-bottom",children:Object(s.jsx)(O.a,{label:"Search",variant:"outlined",value:e,onChange:function(n){return t(n)}})})]})},S=function(){var n=m(),e=n.showDonators,t=n.searchInput,a=n.onSearchInputChange;return Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)(g,{searchInput:t,onSearchInputChange:a}),Object(s.jsx)(b,{showDonators:e})]})},C=function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(S,{})})},D=t(12),N=Object(D.c)({donators:j.reducer}),I=Object(l.a)({reducer:N});c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(u.a,{store:I,children:Object(s.jsx)(C,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.e90c52c0.chunk.js.map