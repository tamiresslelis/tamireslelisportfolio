import{j as e,g as c,r as h,a as i,i as d,R as w,b as v,P as f,c as j,d as g}from"../chunks/chunk-BOcDHK1K.js";import{l as o,m as r}from"../chunks/chunk-IST9oq5d.js";import{n as p,U as t}from"../chunks/chunk-B5fMpomd.js";/* empty css                      */const y="Tamires Lelis - Senior Product Designer",b=[{id:"Swvp-bFp9UIM-pQoZVVwE"},{id:"4yrVvSBx_StPnY1cztI37",maxWidth:991},{id:"P0daCfPpwHiMqkq2qxT8E",maxWidth:767},{id:"qtEfW9_uQH44pIzsk7WEy",maxWidth:479}],k="favicon_C1VJaB9edSC7Lx5D-Efdn.jpg",z=["PublicSans-VariableFont_wght__WmxQh0krgZkZtrQz8np7.woff2","PublicSans-Italic-VariableFont_wght_SHDHebvBRM4_2MmjcpM2M.woff2"],q=[],N=s=>e.jsx("body",{className:"w-element",children:e.jsxs(p,{className:"w-box",children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(t,{code:`<style>
  html {
    scroll-behavior: smooth;
  }
</style>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),e.jsx(t,{code:'<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"><\/script>',executeScriptOnCanvas:!0,clientOnly:!1,className:"w-html-embed"}),e.jsx(t,{code:`<script>
  // Seleciona os elementos do DOM
const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');

// Cria a animação pausada por padrão
const menuTween = gsap.timeline({ paused: true })
  .set(navMenu, { display: 'flex' }) // Muda de none para flex instantaneamente no início
  .from(navMenu, {
    y: '-100%',        // Começa totalmente fora da tela (acima)
    opacity: 0,        // Começa invisível
    duration: 0.4,     // Duração de 0.4 segundos
    ease: 'power2.out' // Transição suave ao desacelerar
  });

// Estado inicial do menu (invertido/fechado)
menuTween.reverse();

// Evento de clique para alternar (toggle) o menu
navButton.addEventListener('click', (event) => {
  // Impede que o clique no botão se propague para o 'document' imediatamente
  event.stopPropagation(); 
  
  if (menuTween.reversed()) {
    menuTween.play();
  } else {
    menuTween.reverse();
  }
});

// FEATURE: Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  // Verifica se o menu está aberto (ou seja, se a animação NÃO está invertida)
  const isMenuOpen = !menuTween.reversed();
  
  // Verifica se o clique ocorreu FORA do menu e FORA do botão
  const clickedOutsideMenu = !navMenu.contains(event.target);
  const clickedOutsideButton = !navButton.contains(event.target);

  if (isMenuOpen && clickedOutsideMenu && clickedOutsideButton) {
    menuTween.reverse();
  }
});
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),e.jsx(t,{code:`<script>

// Seleciona todos os itens de projeto
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
  // Busca a capa específica dentro deste item
  const cover = item.querySelector('.project-cover');

  // Animação ao entrar com o mouse
  item.addEventListener('mouseenter', () => {
    gsap.to(cover, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  // Animação ao sair com o mouse
  item.addEventListener('mouseleave', () => {
    gsap.to(cover, {
      scale: 1,
      duration: 0.4,
      ease: "power2.inOut"
    });
  });
});
  
<\/script>`,executeScriptOnCanvas:!0,className:"w-html-embed"}),e.jsx(t,{code:`<script>

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".carousel-track", {
    xPercent: -50,
    duration: 20,
    ease: "none",
    repeat: -1
  });
});
  
<\/script>`,executeScriptOnCanvas:!0,className:"w-html-embed"})]})}),e.jsx(o,{children:e.jsx(r,{children:e.jsx("div",{id:"nav",className:"w-element ch55yya c11hjarc c1805do9 c1rdyaei cv0lb1s c13yf6z4 cu43980 caioxpx c1nu309r c1mavl5z cof5w6e c6mgpa4 cejlbbv c1n136cq c187xq1c c1kt2ixw c1nbp78v",children:e.jsx("div",{className:"w-element c1nv02y7 cv0lb1s c13yf6z4 c72p2gh",children:e.jsxs("div",{className:"w-element c4ndwm5 c1o95vl3 ck9r4ya c113r1lq cjpvkad c1kekzsc c140dqt9 c4bwbls",children:[e.jsxs("div",{className:"w-element cof5w6e c6mgpa4 cqtg744 c1sh2v30",children:[e.jsx("div",{className:"w-element cla5yuw c151g8o8",children:e.jsx(c,{href:"/",className:"w-link",children:e.jsxs("svg",{width:"34",height:"49",viewBox:"0 0 34 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-element c1sngbkj",children:[e.jsxs("g",{clipPath:"url(#clip0_11601_2407)",className:"w-element",children:[e.jsx("path",{d:"M15.0606 0.5L0 16.9807V48.353H7.52239V8.84009H20.7187V0.5H15.0606Z",fill:"currentColor",className:"w-element"}),e.jsx("path",{d:"M18.369 48.4995L33.4302 32.0188V0.646484H25.9066V40.1587H12.7109V48.4995H18.369Z",fill:"currentColor",className:"w-element"})]}),e.jsx("defs",{className:"w-element",children:e.jsx("clipPath",{id:"clip0_11601_2407",className:"w-element",children:e.jsx("rect",{width:"34",height:"49",fill:"white",className:"w-element"})})})]})})}),e.jsxs("div",{className:"w-element cof5w6e c6mgpa4 c1nd21hm czzhg60 c1e26j3i c1oitktr",children:[e.jsx(c,{href:"/#work",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa ct0yka2",children:"Work"}),e.jsx(c,{href:"/#about",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa ct0yka2",children:"About"}),e.jsx(c,{href:"/#services",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa ct0yka2",children:"Expertise"}),e.jsx(c,{href:"#footer",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa ct0yka2",children:"Contact"})]}),e.jsxs("div",{className:"w-element cof5w6e c6mgpa4 crl2npy",children:[e.jsx(c,{href:"https://docs.google.com/document/d/1yIbxWqA8iR-l9QNqxXW3XpSUFMVdLAwFm6T9cc1JzbA/edit?usp=sharing","data-umami-event":"resume",target:"_blank",className:"w-element ccsy7xc c126wj6q c9zkcd czplipl c1yabzl1 csohm68 cpv6jm9 cto8pp c1233eak c19n7psi cropdey cmbui4f c19agdix ce91zps c12vxs2k c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny cla5yuw c1q0mmy0 c16z8nc9 c1oitktr",children:"Resume"}),e.jsxs("div",{className:"w-element c1ie5aao cw7ohbn c76r6xf c1qn6qv1 c4ndwm5 c1o95vl3 coorlo5 cov27qk c13scpy ci582kr c1gwmzil c1b4pb9e c1lhlg0w c30bnat c1gv4z5f c10eeqw2 c1txoun6 cspl6b2 cadj9b2 c1emz4tb nav-button",children:[e.jsx("div",{className:"w-element c1ykj7hc c1kyt7oc c1oapgf1 menu-icon--top"}),e.jsx("div",{className:"w-element c1ykj7hc c1kyt7oc c1oapgf1 menu-icon--mid"}),e.jsx("div",{className:"w-element c1ykj7hc c1kyt7oc c1oapgf1 menu-icon--bot"})]})]})]}),e.jsxs("div",{className:"w-element c6mgpa4 crl2npy c2ofohy c14kn2ys c1emz4tb c11chtzl cbo80qi c1sh2v30 c1o95vl3 cr7tlrj c1lhciso c1pq7k1a c11hjarc c1y3z0yv c1rdyaei nav-menu",children:[e.jsx(c,{href:"/#work",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa",children:"Work"}),e.jsx(c,{href:"/#about",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa",children:"About"}),e.jsx(c,{href:"/#contact",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa",children:"Contact"})]})]})})})})}),e.jsx(p,{tag:"main",className:"w-box",children:e.jsx("div",{id:"hero",className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:e.jsx("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e c72p2gh c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:e.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm c1pw3gk5 cshr7pv",children:[e.jsx("h1",{className:"w-element c1bpulfp c19agdix c1b4r1bu c5f6cy7 cdazgi9 c1id7qcd c1q0mmy0 c1sg8oxy cdzuz5l c1gbqwqb cwkjcm3 c1pitkql",children:"Privacy policy"}),e.jsxs("p",{className:"w-element c1xt2iyl c11chtzl cgl4sry cxnqdyk c1sc2wcx",children:["If you share potentially sensitive information with me, I'm not going to share it with anyone else unless I have your explicit permission to do so, or unless compelled by law.",e.jsx("br",{}),"",e.jsx("br",{}),"I store all information that you submit to me via the various contacts and contact form on my website or via email. If you ask me to, I'll delete any personal information that you've submitted.",e.jsx("br",{}),"",e.jsx("br",{}),"I use Google Analytics and Hotjar to gather data about how people use my website. Most of that data is anyonymized, but some of it may not. Find out more by reading their respective privacy policies.",e.jsx("br",{}),"",e.jsx("br",{}),"If you have any questions or concerns regarding about Privacy Policy you may contact me at: ",e.jsx(c,{href:"mailto:hello@tamireslelis.com",className:"w-element c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c1rejbhk",children:e.jsx("b",{className:"w-element",children:"hello@tamireslelis.com"})}),"",e.jsx("br",{}),""]})]})})})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(c,{href:"https://docs.google.com/document/d/1yIbxWqA8iR-l9QNqxXW3XpSUFMVdLAwFm6T9cc1JzbA/edit?usp=sharing","data-umami-event":"resume",target:"_blank",className:"w-element ccsy7xc c126wj6q c9zkcd czplipl c1yabzl1 csohm68 cpv6jm9 cto8pp c1233eak c19n7psi cropdey cmbui4f c19agdix ce91zps c1emz4tb c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny cla5yuw c1q0mmy0 c16z8nc9 cjioilx c17m4mik c8jxbob c1oep0kr cuh0tnd c8vga8h c17pbrgg cwh2xnz c18y1yfz",children:"Resume"}),e.jsx("div",{id:"footer",className:"w-element ct52unj cgt90ys ca6gv1s c1233eak c1u46ts9 cyd0cqc co3kb0v c1a96kp7",children:e.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e c72p2gh c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[e.jsxs("div",{className:"w-element cof5w6e cfnird ca1teru c88z9fr c12rxci2 c14wvgdg c1nd21hm",children:[e.jsxs("p",{className:"w-element cof5w6e c6mgpa4 c1nd21hm cyqmh81 ceejf0k c15lg6lk criiiqu c19agdix c1ynb3vu c11ziyyh cdazgi9 c5f6cy7",children:[e.jsx("div",{className:"w-element cueyjc6 c6i9dft c1shimgp"}),e.jsx("span",{className:"w-element",children:"Let’s talk"})]}),e.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c19n7psi c1id7qcd c1i1631q c3trwqa c1ha3ohj",children:"I turn complex ideas into scalable products"})]}),e.jsxs("div",{className:"w-element cczhj6d c1wkft6e cpvntxv c14z7asw c14kn2ys c2ofohy ca6gv1s c5bp6ej c14wvgdg c1nd21hm cwlcotc cf22lq cpny08g c13as5oz c89lx15",children:[e.jsxs("div",{className:"w-element c1gsu131 c1nd21hm cof5w6e c1s2otju c1rn4qj c1esetaq c1kcb1sg ",children:[e.jsx(t,{code:`<style>
.dynamic-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .dynamic-text {
            white-space: nowrap;
            line-height: 1;
        }
</style>



<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        adjustTextSize();

        window.addEventListener('resize', () => {
            adjustTextSize();
        });
    });

    function adjustTextSize() {
        // Assuming the elements have the class 'dynamic-container' and 'dynamic-text'
        const dynamicContainers = document.querySelectorAll('.dynamic-container');
        const dynamicTexts = document.querySelectorAll('.dynamic-text');

        dynamicContainers.forEach((dynamicContainer, index) => {
            const containerWidth = dynamicContainer.offsetWidth;
            const dynamicTextWidth = dynamicTexts[index].offsetWidth;

            const fontSize = (containerWidth / dynamicTextWidth) * parseFloat(window.getComputedStyle(dynamicTexts[index]).fontSize);

            dynamicTexts[index].style.fontSize = fontSize + 'px';
        });
    }
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),e.jsx("div",{className:"w-element cof5w6e c6mgpa4 c1nd21hm c15enq9a c1nw8h38 c1sh2v30 dynamic-container",children:e.jsx(c,{href:"mailto:hello@tamireslelis.com",target:"_blank",className:"w-element c6mgpa4 c1nd21hm c4xluno c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny ccstbx2 covvr98 c1qchpas c19agdix c1kaattp cgfdkim dynamic-text",children:"hello@tamires.com"})})]}),e.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cy4rjp5 c1mx0bv6 c1s2otju codc48q c15z9ssy cy2n950 ck4k5jk ckcpkws",children:[e.jsx("p",{className:"w-element c1xvjddi c1ynb3vu cp5ms69 criiiqu c19p6unp",children:"Work"}),e.jsxs("div",{className:"w-element cof5w6e c14wvgdg c1nd21hm cfnird cyqmh81 ceejf0k",children:[e.jsx(c,{href:"/works/becare",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"BeCare MS"}),e.jsx(c,{href:"/works/sanar",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Sanar Health"}),e.jsx(c,{href:"/works/ultracargo",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Ultracargo"})]})]}),e.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cy4rjp5 c1y6vnuz c1rn4qj c15z9ssy cy2n950 c1mx0bv6 ck4k5jk ckcpkws",children:[e.jsx("p",{className:"w-element c1xvjddi c1ynb3vu cp5ms69 criiiqu c19p6unp",children:"Social"}),e.jsxs("div",{className:"w-element cof5w6e c14wvgdg c1nd21hm cfnird cyqmh81 ceejf0k",children:[e.jsx(c,{href:"https://www.instagram.com/tamiresslelis",target:"_blank",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix c12vxs2k cjy68nb c1yemr3k c1kaattp",children:"Instagram"}),e.jsx(c,{href:"https://www.linkedin.com/in/tamireslelis/",target:"_blank",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Linkedin"}),e.jsx(c,{href:"https://github.com/tamiresslelis",target:"_blank",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Github"})]})]})]}),e.jsxs("div",{className:"w-element cof5w6e c1xp6ni7 cpvntxv c14z7asw cqgpgi8 ct3kpq6 cqtg744 czs9kn6 c1aehz4h ca1b57q c1ouhok3 cfzkjxm c1o95vl3 ck9r4ya",children:[e.jsx("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cdl6nhs cy4rjp5",children:e.jsx("p",{className:"w-element c4xluno c1qp93bc c19agdix",children:"© 2026 Tamires Lelis · Let’s grab a coffee ☕  "})}),e.jsxs("div",{className:"w-element cof5w6e c1febqwh c14wvgdg c1nd21hm cdl6nhs cy4rjp5 cxawxml c7ksjn2 c1fujhx7 c1hnq4fw cvsl260",children:[e.jsx(c,{href:"/privacy-policy",target:"_self",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix c12vxs2k cjy68nb c1yemr3k c1kaattp",children:"Privacy Policy"}),e.jsxs(c,{href:"#hero",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cof5w6e c6mgpa4 c1nd21hm cjy68nb c1yemr3k c1kaattp",children:[e.jsx("span",{className:"w-element",children:"Go to Top "}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-element c1h2tnmh cd7b24f lucide lucide-arrow-up-icon lucide-arrow-up",children:[e.jsx("path",{d:"m5 12 7-7 7 7",className:"w-element"}),e.jsx("path",{d:"M12 19V5",className:"w-element"})]})]})]})]})]})})]})})]})}),S=s=>{const{origin:n,pathname:l,search:a}=new URL(s);return`${n}${l}${a}`},T=h.memo(({pageKey:s,system:n})=>e.jsx(N,{system:n},s),(s,n)=>s.pageKey===n.pageKey),P=({data:s})=>{const{system:n,resources:l,url:a,pageMeta:m}=s,u=S(a),x=h.useMemo(()=>({imageLoader:d,assetBaseUrl:i,resources:l,breakpoints:b,onError:console.error}),[l]);return e.jsxs(w.Provider,{value:x,children:[e.jsx(v.Provider,{value:a,children:e.jsx(T,{pageKey:u,system:n})}),e.jsx(f,{url:a,pageMeta:m,siteName:y,imageLoader:d,assetBaseUrl:i}),e.jsx(j,{children:m.title})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),M=({})=>{const s={"@context":"https://schema.org","@type":"WebSite",name:y};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s,null,2)}}),e.jsx("link",{rel:"icon",href:d({src:`${i}${k}`})}),z.map(n=>e.jsx("link",{rel:"preload",href:`${i}${n}`,as:"font",crossOrigin:"anonymous"},n)),q.map(n=>e.jsx("link",{rel:"preload",href:`${i}${n}`,as:"image"},n))]})},_=Object.freeze(Object.defineProperty({__proto__:null,Head:M},Symbol.toStringTag,{value:"Module"})),I={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/privacy-policy/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/privacy-policy/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}}};export{I as configValuesSerialized};
