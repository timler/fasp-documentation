"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1957],{65713:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>b,default:()=>y,frontMatter:()=>h,metadata:()=>s,toc:()=>B});const s=JSON.parse('{"id":"api/get-budget-list","title":"Get Budget list","description":"Returns the complete list of Budgets List<Budget>","source":"@site/docs/api/get-budget-list.api.mdx","sourceDirName":"api","slug":"/api/get-budget-list","permalink":"/fasp-documentation/docs/api/get-budget-list","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-budget-list","title":"Get Budget list","description":"Returns the complete list of Budgets List<Budget>","sidebar_label":"Get Budget list","hide_title":true,"hide_table_of_contents":true,"api":"eJydVFFP2zAQ/iuWX/ZSktJpL2ia1okNkDYJVvaEELok18YsiY19aVdF/e+7szsoFDTBS1Pb9913vu87D5pgEfTRlS76aoGkr0e6wlB648jYTh/pn0i974KiGlVpW9cgoWpMIGXn6ksEBfWd1x/T4pMeaevQg+DPKs7Am+lIovjUY3C2C8i0g56Mx/J5mTNBIyNjS9sRdiQQcK4xZaTJb4PgBh3KGluQf7R2yJnAe1gzzhC2YWffFrdYSkLnpVgyqZrUBKn6PtIw4QI9h86tb4HS1vuJ3ox0AwU2/8+K3U5MIG+6hd5sGA8lmSXuHBbWNgid5C49AmF1zD/76J1iKg44INNiKijQD1uZuXkdkqFkqJG41G+pT3Y/PCfPGbfEd9Ao9N56VglIOY9LFgarKJpHZsMlh9yb5K0KvtRToX62ranwFqm2W/cJGKjmRQ7O5EnknHcD+iV6sf+ge89K6prIhaOc41wWVrBg5eu+yNj4Ag35tCHTh/xieplPssOJfjots4Q57Qt1bMu+5ZvG+ynoKnWJgWKRo6d0q9Uqu+uhI1YuNQS4v2syZcisX+zRnHtb9WVMnO6gWFXFVXHkEryBoolt2mx4nk03t7FTW4UvHhHFyqb/2NQlO1CScFsS1WE2zvbvOT0/e8fzaRWUJYY0qUyvZrGarcxsb+HtoBXab9PZuSKElk9fe3u2hBHE6Wx2I3luTi8+L+pQHrjQxhDxvimRX5UdxqkDdpOaZOM9yrm1WQE+Ot/ZQC10O8ATtutj1z66/fBg4jc9j1vLEv6h3DVg4rzH+oatUa94NgxHbh/lkZZ3ueY65WgYCgj4yzebjWzf9ejXvH/9IL2sOGWNULEY4u7fuJaGsFiOokeaPj6PTydQ/HI/OidfL7lBfwGdURzH","sidebar_class_name":"get api-method","info_path":"docs/api/quantification-and-analytics-tool","custom_edit_url":null},"sidebar":"api-1.0.2","previous":{"title":"Introduction","permalink":"/fasp-documentation/docs/api/quantification-and-analytics-tool"},"next":{"title":"Update Budget","permalink":"/fasp-documentation/docs/api/update-budget"}}');var a=i(74848),n=i(28453),o=i(57742),d=i.n(o),l=i(78178),r=i.n(l),u=i(19624),p=i.n(u),g=i(96226),c=i.n(g),f=(i(77675),i(19365),i(51107));const h={id:"get-budget-list",title:"Get Budget list",description:"Returns the complete list of Budgets List<Budget>",sidebar_label:"Get Budget list",hide_title:!0,hide_table_of_contents:!0,api:"eJydVFFP2zAQ/iuWX/ZSktJpL2ia1okNkDYJVvaEELok18YsiY19aVdF/e+7szsoFDTBS1Pb9913vu87D5pgEfTRlS76aoGkr0e6wlB648jYTh/pn0i974KiGlVpW9cgoWpMIGXn6ksEBfWd1x/T4pMeaevQg+DPKs7Am+lIovjUY3C2C8i0g56Mx/J5mTNBIyNjS9sRdiQQcK4xZaTJb4PgBh3KGluQf7R2yJnAe1gzzhC2YWffFrdYSkLnpVgyqZrUBKn6PtIw4QI9h86tb4HS1vuJ3ox0AwU2/8+K3U5MIG+6hd5sGA8lmSXuHBbWNgid5C49AmF1zD/76J1iKg44INNiKijQD1uZuXkdkqFkqJG41G+pT3Y/PCfPGbfEd9Ao9N56VglIOY9LFgarKJpHZsMlh9yb5K0KvtRToX62ranwFqm2W/cJGKjmRQ7O5EnknHcD+iV6sf+ge89K6prIhaOc41wWVrBg5eu+yNj4Ag35tCHTh/xieplPssOJfjots4Q57Qt1bMu+5ZvG+ynoKnWJgWKRo6d0q9Uqu+uhI1YuNQS4v2syZcisX+zRnHtb9WVMnO6gWFXFVXHkEryBoolt2mx4nk03t7FTW4UvHhHFyqb/2NQlO1CScFsS1WE2zvbvOT0/e8fzaRWUJYY0qUyvZrGarcxsb+HtoBXab9PZuSKElk9fe3u2hBHE6Wx2I3luTi8+L+pQHrjQxhDxvimRX5UdxqkDdpOaZOM9yrm1WQE+Ot/ZQC10O8ATtutj1z66/fBg4jc9j1vLEv6h3DVg4rzH+oatUa94NgxHbh/lkZZ3ueY65WgYCgj4yzebjWzf9ejXvH/9IL2sOGWNULEY4u7fuJaGsFiOokeaPj6PTydQ/HI/OidfL7lBfwGdURzH",sidebar_class_name:"get api-method",info_path:"docs/api/quantification-and-analytics-tool",custom_edit_url:null},b=void 0,m={},B=[];function j(t){const e={p:"p",...(0,n.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get Budget list"}),"\n",(0,a.jsx)(d(),{method:"get",path:"/api/budget/",context:"endpoint"}),"\n",(0,a.jsx)(e.p,{children:"Returns the complete list of Budgets List<Budget>"}),"\n",(0,a.jsx)(r(),{parameters:void 0}),"\n",(0,a.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(c(),{id:void 0,label:void 0,responses:{200:{description:"Returns the Budget list",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{budgetId:{type:"integer",format:"int32"},label:{type:"object",properties:{en:{type:"string"}}},active:{type:"boolean"},createdDate:{type:"string",format:"date-time"},lastModifiedDate:{type:"string",format:"date-time"}},title:"Budget"}}}}},500:{description:"Internal error that prevented the retrieval of Budget list",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string"}}}}}}}})]})}function y(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(j,{...t})}):j(t)}}}]);