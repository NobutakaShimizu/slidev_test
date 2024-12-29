import{d as F,t as y,B as N,z as d,E as T,o as u,b as f,e as t,h as C,K as s,l as r,k as p,x as z,F as $}from"../modules/vue-DVfPIfBG.js";import{j as B,k as E,s as l,l as U,n as D}from"../index-BWHBKa05.js";import{s as H}from"../monaco/bundled-types-CgP6Sdm-.js";import{_ as L,C as V}from"./NoteDisplay.vue_vue_type_style_index_0_lang-B7Et97sW.js";import{_ as v}from"./IconButton.vue_vue_type_script_setup_true_lang-BA_wyzh9.js";import"../modules/shiki-BegVsOf2.js";import"../modules/file-saver-B6SWDYl3.js";const j={class:"h-full pt-2 flex flex-col"},I={class:"flex-none border-t border-main",px3:"",py2:""},K={class:"flex-none border-t border-main"},M={class:"flex gap-1 items-center px-6 py-3"},P={key:0,class:"i-carbon:minimize"},R={key:1,class:"i-carbon:maximize"},q={class:"p2 text-center"},Z=F({__name:"notes",setup(A){B({title:`Notes - ${H}`});const{slides:b,total:m}=E(),{isFullscreen:_,toggle:g}=D,x=y(),a=N("slidev-notes-font-size",18),i=d(()=>{var e;return((e=l.lastUpdate)==null?void 0:e.type)==="viewer"?l.viewerPage:l.page}),k=d(()=>b.value.find(e=>e.no===i.value));T(i,()=>{var e;(e=x.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function w(){a.value=a.value+1}function S(){a.value=a.value-1}const h=d(()=>{var n,c;const e=((n=l.lastUpdate)==null?void 0:n.type)==="viewer"?l.viewerClicks:l.clicks,o=((c=l.lastUpdate)==null?void 0:c.type)==="viewer"?l.viewerClicksTotal:l.clicksTotal;return U(y(e),void 0,o)});return(e,o)=>{var n,c;return u(),f($,null,[t("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:C({width:`${(i.value-1)/(s(m)-1)*100+1}%`})},null,4),t("div",j,[t("div",{ref_key:"scroller",ref:x,class:"px-5 flex-auto h-full overflow-auto",style:C({fontSize:`${s(a)}px`})},[r(L,{note:(n=k.value)==null?void 0:n.meta.slide.note,"note-html":(c=k.value)==null?void 0:c.meta.slide.noteHTML,placeholder:`No notes for Slide ${i.value}.`,"clicks-context":h.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),t("div",I,[r(V,{"clicks-context":h.value,readonly:""},null,8,["clicks-context"])]),t("div",K,[t("div",M,[r(v,{title:s(_)?"Close fullscreen":"Enter fullscreen",onClick:s(g)},{default:p(()=>[s(_)?(u(),f("div",P)):(u(),f("div",R))]),_:1},8,["title","onClick"]),r(v,{title:"Increase font size",onClick:w},{default:p(()=>o[0]||(o[0]=[t("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1}),r(v,{title:"Decrease font size",onClick:S},{default:p(()=>o[1]||(o[1]=[t("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1}),o[2]||(o[2]=t("div",{class:"flex-auto"},null,-1)),t("div",q,z(i.value)+" / "+z(s(m)),1)])])])],64)}}});export{Z as default};
