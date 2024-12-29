import{d as v,z as x,o as l,b as f,f as T,h as A,t as h,N,c as b,k as m,e,x as C,g,I as c,l as k,m as _,q as S,s as V,K as w}from"../modules/vue-DVfPIfBG.js";import{b as F}from"../monaco/bundled-types-CgP6Sdm-.js";import{u as B,f as P}from"./context-6nlSS1aC.js";import{_ as z}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DuRP9YcD.js";import{I as E}from"./default-qZAN8kOE.js";import"../modules/file-saver-B6SWDYl3.js";import"../index-BWHBKa05.js";import"../modules/shiki-BegVsOf2.js";import"../modules/unplugin-icons-BkypdGCf.js";const I=v({__name:"Transform",props:{scale:{},origin:{}},setup(a){const s=a,n=x(()=>{const i=[];return s.scale!=null&&i.push(`scale(${s.scale||1})`),{transform:i.join(" "),"transform-origin":s.origin||"top left"}});return(i,o)=>(l(),f("div",{style:A(n.value)},[T(i.$slots,"default")],4))}}),j={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},W={class:"m-auto animate-pulse text-4xl"},Y={key:0},q=v({__name:"Tweet",props:{id:{},scale:{},conversation:{},cards:{}},setup(a){const s=a,n=h(),i=h(!1),o=h(!1);async function d(u=10){var p,t;if(!((t=(p=window.twttr)==null?void 0:p.widgets)!=null&&t.createTweet)){if(u<=0)return console.error("Failed to load Twitter widget after 10 retries.");setTimeout(()=>d(u-1),1e3);return}const r=await window.twttr.widgets.createTweet(s.id.toString(),n.value,{theme:F.value?"dark":"light",conversation:s.conversation||"none",cards:s.cards});i.value=!0,r===void 0&&(o.value=!0)}return N(()=>{d()}),(u,r)=>{const p=I;return l(),b(p,{scale:u.scale||1},{default:m(()=>[e("div",{ref_key:"tweet",ref:n,class:"tweet slidev-tweet"},[!i.value||o.value?(l(),f("div",j,[e("div",W,[r[0]||(r[0]=e("div",{class:"i-carbon:logo-twitter"},null,-1)),o.value?(l(),f("span",Y,'Could not load tweet with id="'+C(s.id)+'"',1)):g("v-if",!0)])])):g("v-if",!0)],512)]),_:1},8,["scale"])}}}),K={flex:"~",w:"min",border:"~ main rounded-md"},L={m:"auto",p:"2"},M=v({__name:"Counter",props:{count:{default:0}},setup(a){B();const n=h(a.count);return(i,o)=>(l(),f("div",K,[e("button",{border:"r main",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:o[0]||(o[0]=d=>n.value-=1)}," - "),e("span",L,C(n.value),1),e("button",{border:"l main",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:o[1]||(o[1]=d=>n.value+=1)}," + ")]))}}),R={grid:"~ cols-2 gap-4"},te={__name:"slides.md__slidev_7",setup(a){const{$slidev:s,$nav:n,$clicksContext:i,$clicks:o,$page:d,$renderContext:u,$frontmatter:r}=B();return i.setup(),(p,t)=>{const y=z,$=M,D=q;return l(),b(E,S(V(w(P)(w(r),6))),{default:m(()=>[t[5]||(t[5]=e("h1",null,"Components",-1)),e("div",R,[e("div",null,[t[1]||(t[1]=e("p",null,"You can use Vue components directly inside your slides.",-1)),t[2]||(t[2]=e("p",null,[c("We have provided a few built-in components like "),e("code",null,"<Tweet/>"),c(" and "),e("code",null,"<Youtube/>"),c(" that you can use directly. And adding your custom components is also super easy.")],-1)),k(y,_({},{ranges:[]}),{default:m(()=>t[0]||(t[0]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Counter"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," :count"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"10"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")])])],-1)])),_:1},16),g(" ./components/Counter.vue "),k($,{count:10,m:"t-4"}),t[3]||(t[3]=e("p",null,[c("Check out "),e("a",{href:"https://sli.dev/builtin/components.html",target:"_blank"},"the guides"),c(" for more.")],-1))]),e("div",null,[k(y,_({},{ranges:[]}),{default:m(()=>t[4]||(t[4]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Tweet"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," id"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1390115482657726468"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")])])],-1)])),_:1},16),k(D,{id:"1390115482657726468",scale:"0.65"})])])]),_:1},16)}}};export{te as default};
