var b=Object.defineProperty;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var V=(o,a,l)=>a in o?b(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l,L=(o,a)=>{for(var l in a||(a={}))$.call(a,l)&&V(o,l,a[l]);if(F)for(var l of F(a))h.call(a,l)&&V(o,l,a[l]);return o};import{I as w,E as C,a as S}from"./ImportElementStyle.af571af1.js";import{_ as M,f as T,$ as A,a0 as Y,o as k,q as N,w as u,b as t,h as e,e as D,t as x,a1 as U,a2 as q,a as v}from"./app.64114159.js";import{E as i}from"./index2.8d91f9cf.js";import{E as f,a as _,b as R,c as I}from"./index2.2b2e4083.js";import{E as B}from"./index2.406dceca.js";const g={1:201,2:300,3:500,4:700,5:1e3,6:1500,7:1600,8:1700,9:1900,10:5500,11:1e4,12:1e4,13:1e4,14:15e3,15:4e4,16:5e4,17:1e5,18:25e4,19:5e5,20:1/0};function O({Level:o,Exp:a,tLevel:l,tExp:d,DAILY:c}){let p=-a,m=0;for(let E=o;E<l;E++)p+=g[E];return p+=d,m=Math.ceil(p/c),{DAILY:c,total:p,days:m,target:G(z(10),m,10)}}function z(o){let a=new Date;return`${a.toLocaleDateString()}&${a.toTimeString().slice(0,8)}`.replace(/(\d{4})\/(\d{1,})\/(\d{1,})&/,(l,d,c,p)=>`${d}-${("0"+c).slice(-2)}-${("0"+p).slice(-2)} `).slice(0,o)}function G(o,a,l){let d=o.split("-"),c=new Date(d[0],Number(d[1])-1,Number(d[2])+a);return`${c.toLocaleDateString()}&${c.toTimeString().slice(0,8)}`.replace(/(\d{4})\/(\d{1,})\/(\d{1,})&/,(p,m,E,s)=>`${m}-${("0"+E).slice(-2)}-${("0"+s).slice(-2)} `).slice(0,l)}const y=o=>(U("data-v-18b309a8"),o=o(),q(),o),H=D("\u91CD\u7F6E"),J=y(()=>v("span",null,"\u6BCF\u65E5\u83B7\u53D6",-1)),K=y(()=>v("span",null,"\u8FD8\u9700\u4EB2\u5BC6\u5EA6",-1)),P=y(()=>v("span",null,"\u5269\u4F59\u5929\u6570",-1)),Q=y(()=>v("span",null,"\u76EE\u6807\u65E5\u671F",-1)),W=T({name:"CaculateTool",setup(o){const a={Level:1,Exp:0,tLevel:20,tExp:0,DAILY:1500},l=A(L({},a)),d=A({DAILY:0,total:0,days:0,target:""}),c=s=>s.Level>=1&&s.Level<=20&&s.tLevel>=1&&s.tLevel<=20&&s.Exp<=g[s.Level]&&s.tExp<=g[s.tLevel]&&s.DAILY>=1&&s.DAILY<=1500&&s.Level<=s.tLevel,p=(s,r)=>{for(let n of Object.keys(r))s[n]=r[n]},m=()=>{if(!c(l))I({message:"\u503C\u975E\u6CD5\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\u503C",type:"warning"});else{const s=O(L({},l));p(d,s)}},E=()=>{I({message:"\u5DF2\u6062\u590D\u521D\u59CB\u503C",type:"success"}),p(l,a)};return Y(m),w(),(s,r)=>(k(),N(e(R),{"label-position":"top",model:l,style:{"max-width":"500px"}},{default:u(()=>[t(e(C),null,{default:u(()=>[t(e(i),{span:12},{default:u(()=>[t(e(f),{label:"\u5F53\u524D\u7B49\u7EA7",prop:"Level",required:""},{default:u(()=>[t(e(_),{modelValue:l.Level,"onUpdate:modelValue":r[0]||(r[0]=n=>l.Level=n),modelModifiers:{number:!0},placeholder:"\u5F53\u524D\u7C89\u4E1D\u724C\u7B49\u7EA7",type:"text",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),t(e(i),{span:12},{default:u(()=>[t(e(f),{label:"\u5F53\u524D\u4EB2\u5BC6\u5EA6",prop:"Exp"},{default:u(()=>[t(e(_),{modelValue:l.Exp,"onUpdate:modelValue":r[1]||(r[1]=n=>l.Exp=n),modelModifiers:{number:!0},placeholder:"\u5F53\u524D\u4EB2\u5BC6\u5EA6",type:"text",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(e(C),null,{default:u(()=>[t(e(i),{span:12},{default:u(()=>[t(e(f),{label:"\u76EE\u6807\u7B49\u7EA7",prop:"tLevel",required:""},{default:u(()=>[t(e(_),{modelValue:l.tLevel,"onUpdate:modelValue":r[2]||(r[2]=n=>l.tLevel=n),modelModifiers:{number:!0},placeholder:"\u76EE\u6807\u7C89\u4E1D\u724C\u7B49\u7EA7",type:"text",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),t(e(i),{span:12},{default:u(()=>[t(e(f),{label:"\u76EE\u6807\u4EB2\u5BC6\u5EA6",prop:"tExp"},{default:u(()=>[t(e(_),{modelValue:l.tExp,"onUpdate:modelValue":r[3]||(r[3]=n=>l.tExp=n),modelModifiers:{number:!0},placeholder:"\u76EE\u6807\u4EB2\u5BC6\u5EA6",type:"text",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(e(C),null,{default:u(()=>[t(e(i),{span:12},{default:u(()=>[t(e(f),{label:"\u6BCF\u65E5\u83B7\u53D6",prop:"DAILY",required:""},{default:u(()=>[t(e(_),{modelValue:l.DAILY,"onUpdate:modelValue":r[4]||(r[4]=n=>l.DAILY=n),modelModifiers:{number:!0},placeholder:"\u6BCF\u65E5\u83B7\u53D6\u4EB2\u5BC6\u5EA6",type:"text",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),t(e(i),{span:12},{default:u(()=>[t(e(f),{label:"\u6062\u590D\u521D\u59CB\u503C"},{default:u(()=>[t(e(S),{onClick:E},{default:u(()=>[H]),_:1})]),_:1})]),_:1})]),_:1}),t(e(C),{class:"description"},{default:u(()=>[t(e(i),{xs:12,sm:6,md:6,lg:6,xl:6},{default:u(()=>[J,t(e(B),{type:"success"},{default:u(()=>[D(x(d.DAILY),1)]),_:1})]),_:1}),t(e(i),{xs:12,sm:6,md:6,lg:6,xl:6},{default:u(()=>[K,t(e(B),{type:"success"},{default:u(()=>[D(x(d.total),1)]),_:1})]),_:1}),t(e(i),{xs:12,sm:6,md:6,lg:6,xl:6},{default:u(()=>[P,t(e(B),{type:"success"},{default:u(()=>[D(x(d.days),1)]),_:1})]),_:1}),t(e(i),{xs:12,sm:6,md:6,lg:6,xl:6},{default:u(()=>[Q,t(e(B),{type:"success"},{default:u(()=>[D(x(d.target),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]))}});var ue=M(W,[["__scopeId","data-v-18b309a8"],["__file","CaculateTool.vue"]]);export{ue as default};