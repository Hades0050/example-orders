import{d,s as h,o as n,c as l,b as c,f as t,x as y,a as i,E as f,y as v,F as _,h as x,j as S}from"./index-4660a204.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const b={class:"TextInput"},F={class:"error-message"},k=d({__name:"index",props:{value:{type:String,default:""},type:{type:String,default:"text"},name:{type:String,required:!0},placeholder:{type:String,default:""},rules:{type:String,required:!1}},setup(a){const s=h(a,"name");return(p,o)=>(n(),l("div",b,[c(t(y),{id:t(s),as:a.type,name:t(s),placeholder:a.placeholder,rules:a.rules,value:a.value},null,8,["id","as","name","placeholder","rules","value"]),i("p",F,[c(t(f),{name:t(s)},null,8,["name"])])]))}}),q=g(k,[["__scopeId","data-v-b42b4f4e"]]),I=d({__name:"index",props:{schema:{type:Object,required:!0}},emits:["action"],setup(a,{emit:m}){const s=a,{handleSubmit:p}=v(),o=p((u,{resetForm:r})=>{m("action",u,r)});return(u,r)=>(n(),l("form",{onSubmit:r[0]||(r[0]=(...e)=>t(o)&&t(o)(...e))},[(n(!0),l(_,null,x(s.schema.fields,e=>(n(),l("div",{key:e.name},[c(t(q),{rules:e.rules,type:e.as,name:e.name,placeholder:e.placeholder,value:e.value},null,8,["rules","type","name","placeholder","value"])]))),128)),i("div",null,[S(u.$slots,"action")])],32))}});export{I as _};
