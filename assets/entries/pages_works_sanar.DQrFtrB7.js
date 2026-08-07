import{j as c,g as e,r as p,a as l,i as h,R as y,b as f,P as v,c as b,d as j}from"../chunks/chunk-BOcDHK1K.js";import{l as d,m}from"../chunks/chunk-IST9oq5d.js";import{U as t,n as o}from"../chunks/chunk-B5fMpomd.js";import{y as s}from"../chunks/chunk-Dt6i3xre.js";import{_ as k}from"../chunks/chunk-DWmvivd8.js";/* empty css                      */const g="Tamires Lelis - Senior Product Designer",z=[{id:"Swvp-bFp9UIM-pQoZVVwE"},{id:"4yrVvSBx_StPnY1cztI37",maxWidth:991},{id:"P0daCfPpwHiMqkq2qxT8E",maxWidth:767},{id:"qtEfW9_uQH44pIzsk7WEy",maxWidth:479}],q="favicon_C1VJaB9edSC7Lx5D-Efdn.jpg",N=["PublicSans-VariableFont_wght__WmxQh0krgZkZtrQz8np7.woff2","PublicSans-Italic-VariableFont_wght_SHDHebvBRM4_2MmjcpM2M.woff2"],S=["hero-cover-sanar_i-3X4L-B-hfTUc4jBpPnk.webp"],T=n=>c.jsxs("body",{className:"w-element",children:[c.jsx(d,{children:c.jsxs(m,{children:[c.jsx(t,{code:`<style>
  html {
  /* Substitua pelo tamanho da sua navbar (ex: 80px) */
  scroll-padding-top: 80px; 
  
  /* Deixa a transição bonita e suave */
  scroll-behavior: smooth; 
}

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    /* Garante renderização ultra nítida da tipografia em telas de alta densidade (Mac/iOS e Windows) */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Melhora a legibilidade ativando ligaduras e otimizando o espaçamento das fontes */
    text-rendering: optimizeLegibility;
    
    /* Evita barras de rolagem horizontais acidentais causadas por animações ou elementos soltos */
    overflow-x: hidden;

    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
}
</style>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),c.jsx(t,{code:'<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"><\/script>',executeScriptOnCanvas:!0,clientOnly:!1,className:"w-html-embed"}),c.jsx(t,{code:`<script>

// Seleciona os elementos do DOM
const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');

// Seleciona as divs das barras (com as mesmas classes que antes)
const barTop = document.querySelector('.menu-icon--top');
const barMiddle = document.querySelector('.menu-icon--mid');
const barBottom = document.querySelector('.menu-icon--bot');

// Cria a animação pausada por padrão
const menuTimeline = gsap.timeline({ 
  paused: true, 
  defaults: { duration: 0.4, ease: 'power2.inOut' } 
});

// Adiciona as animações ao menu e ao ícone na mesma timeline
menuTimeline
  // Animação do menu surgindo de cima
  .set(navMenu, { display: 'flex' }) // Muda de none para flex instantaneamente no início
  .from(navMenu, {
    y: '-100%',        // Começa totalmente fora da tela (acima)
    opacity: 0,        // Começa invisível
  }, 0) // O "0" define que esta animação começa junto com as outras

  // Animação das barras (transformação em X)
  .to(barTop, {
    y: 10,             // Move para baixo (distância do centro)
    rotation: 45,     // Gira 45 graus
    transformOrigin: 'center center' // Garante rotação pelo centro
  }, 0) // Começa no tempo 0 (simultâneo)
  .to(barMiddle, {
    opacity: 0,        // Esconde a barra do meio
    scaleX: 0          // Encolhe horizontalmente
  }, 0) // Começa no tempo 0
  .to(barBottom, {
    y: -10,            // Move para cima
    rotation: -45,    // Gira -45 graus
    transformOrigin: 'center center' // Garante rotação pelo centro
  }, 0); // Começa no tempo 0

// Estado inicial do menu (invertido/fechado)
menuTimeline.reverse();

// Evento de clique para alternar (toggle) o menu
navButton.addEventListener('click', (event) => {
  // Impede que o clique no botão se propague para o 'document' imediatamente
  event.stopPropagation(); 
  
  // Se a animação estiver invertida (fechada), ela toca para frente. Se não, volta.
  if (menuTimeline.reversed()) {
    menuTimeline.play();
  } else {
    menuTimeline.reverse();
  }
});

// FEATURE: Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  // Verifica se o menu está aberto (ou seja, se a animação NÃO está invertida)
  const isMenuOpen = !menuTimeline.reversed();
  
  // Verifica se o clique ocorreu FORA do menu e FORA do botão
  const clickedOutsideMenu = !navMenu.contains(event.target);
  const clickedOutsideButton = !navButton.contains(event.target);

  if (isMenuOpen && clickedOutsideMenu && clickedOutsideButton) {
    menuTimeline.reverse();
  }
});
  
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),c.jsx(t,{code:`<script>

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
  
<\/script>`,executeScriptOnCanvas:!0,className:"w-html-embed"}),c.jsx(t,{code:`<script>

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".carousel-track", {
    xPercent: -50,
    duration: 20,
    ease: "none",
    repeat: -1
  });
});
  
<\/script>`,executeScriptOnCanvas:!0,className:"w-html-embed"}),c.jsx(t,{code:`<style>

/* --- ANIMAÇÕES --- */

/* Coluna 1: Vai para baixo */
.gallery-column-1 {
  animation: rolarParaBaixo 15s linear infinite;
}

/* Coluna 2: Vai para cima */
.gallery-column-2 {
  animation: rolarParaCima 15s linear infinite;
}

/* Coluna 3: Vai para baixo */
.gallery-column-3 {
  animation: rolarParaBaixo 15s linear infinite;
}


/* --- KEYFRAMES --- */

/* Como duplicamos os itens, mover -50% faz o carrossel resetar perfeitamente */
@keyframes rolarParaCima {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes rolarParaBaixo {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

/* Opcional: Pausa o carrossel quando o usuário passa o mouse */
.photo-gallery:hover .gallery-column-1,
.photo-gallery:hover .gallery-column-2,
.photo-gallery:hover .gallery-column-3 {
  animation-play-state: paused;
}
  
</style>`,className:"w-html-embed"}),c.jsx(t,{code:`<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"><\/script>

<script>
  // Primeiro Slider: mySwiper
  var swiperAbout = new Swiper(".swiperAbout", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiperAbout-next", // Classe exclusiva para as setas deste slider
      prevEl: ".swiperAbout-prev",
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  // Segundo Slider: Sketch
  var swiperSktech = new Swiper(".swiperSketch", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".sketch-next", // Classe exclusiva para as setas deste slider
      prevEl: ".sketch-prev",
    },
    /* breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }*/
  });
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!1,className:"w-html-embed"})]})}),c.jsxs(o,{className:"w-box ct52unj",children:[c.jsx(d,{children:c.jsx(m,{children:c.jsx("div",{id:"nav",className:"w-element ch55yya c11hjarc c1805do9 c1rdyaei cv0lb1s c13yf6z4 cu43980 caioxpx c1nu309r c1mavl5z cof5w6e c6mgpa4 cejlbbv c1n136cq c187xq1c c1kt2ixw c1nbp78v",children:c.jsx("div",{className:"w-element c1nv02y7 cv0lb1s c13yf6z4 c72p2gh",children:c.jsxs("div",{className:"w-element c4ndwm5 c1o95vl3 ck9r4ya c113r1lq cjpvkad c1kekzsc c140dqt9 c4bwbls",children:[c.jsxs("div",{className:"w-element cof5w6e c6mgpa4 cqtg744 c1sh2v30",children:[c.jsx("div",{className:"w-element cla5yuw c151g8o8",children:c.jsx(e,{href:"/",className:"w-link",children:c.jsxs("svg",{width:"34",height:"49",viewBox:"0 0 34 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-element c1sngbkj",children:[c.jsxs("g",{clipPath:"url(#clip0_11601_2407)",className:"w-element",children:[c.jsx("path",{d:"M15.0606 0.5L0 16.9807V48.353H7.52239V8.84009H20.7187V0.5H15.0606Z",fill:"currentColor",className:"w-element"}),c.jsx("path",{d:"M18.369 48.4995L33.4302 32.0188V0.646484H25.9066V40.1587H12.7109V48.4995H18.369Z",fill:"currentColor",className:"w-element"})]}),c.jsx("defs",{className:"w-element",children:c.jsx("clipPath",{id:"clip0_11601_2407",className:"w-element",children:c.jsx("rect",{width:"34",height:"49",fill:"white",className:"w-element"})})})]})})}),c.jsxs("div",{className:"w-element cof5w6e c6mgpa4 c1nd21hm czzhg60 c1e26j3i c1oitktr",children:[c.jsx(e,{href:"/#work",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa ct0yka2",children:"Work"}),c.jsx(e,{href:"/#about",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa ct0yka2",children:"About"}),c.jsx(e,{href:"/#services",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa ct0yka2",children:"Expertise"}),c.jsx(e,{href:"#footer",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa ct0yka2",children:"Contact"})]}),c.jsxs("div",{className:"w-element cof5w6e c6mgpa4 crl2npy",children:[c.jsx(e,{href:"https://docs.google.com/document/d/1yIbxWqA8iR-l9QNqxXW3XpSUFMVdLAwFm6T9cc1JzbA/edit?usp=sharing","data-umami-event":"resume",target:"_blank",className:"w-element ccsy7xc c126wj6q c9zkcd czplipl c1yabzl1 csohm68 cpv6jm9 cto8pp c1233eak c19n7psi cropdey cmbui4f c19agdix ce91zps c12vxs2k c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny cla5yuw c1q0mmy0 c16z8nc9 c1oitktr",children:"Resume"}),c.jsxs("div",{className:"w-element c1ie5aao cw7ohbn c76r6xf c1qn6qv1 c4ndwm5 c1o95vl3 coorlo5 cov27qk c13scpy ci582kr c1gwmzil c1b4pb9e c1lhlg0w c30bnat c1gv4z5f c10eeqw2 c1txoun6 cspl6b2 cadj9b2 c1emz4tb nav-button",children:[c.jsx("div",{className:"w-element c1ykj7hc c1kyt7oc c1oapgf1 menu-icon--top"}),c.jsx("div",{className:"w-element c1ykj7hc c1kyt7oc c1oapgf1 menu-icon--mid"}),c.jsx("div",{className:"w-element c1ykj7hc c1kyt7oc c1oapgf1 menu-icon--bot"})]})]})]}),c.jsxs("div",{className:"w-element c6mgpa4 crl2npy c2ofohy c14kn2ys c1emz4tb c11chtzl cbo80qi c1sh2v30 c1o95vl3 cr7tlrj c1lhciso c1pq7k1a c11hjarc c1y3z0yv c1rdyaei nav-menu",children:[c.jsx(e,{href:"/#work",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa",children:"Work"}),c.jsx(e,{href:"/#about",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa",children:"About"}),c.jsx(e,{href:"/#contact",className:"w-element cropdey cmbui4f czefk0t ce91zps c1rq0d4s c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c12vxs2k c1sh2v30 cvshfff cny3zie ci7a6wa",children:"Contact"})]})]})})})})}),c.jsxs(o,{tag:"main",className:"w-box",children:[c.jsx(o,{tag:"section",id:"hero",className:"w-box c1pq6uty c25y1nw cstacim c1n18tsd c1nh14oe clpe75o c1hfbuc7 c1yldy5 c18dmisl cz3gq69 c5kmwsg cj9wly1 ce7n74e ct893cy c1vwclnu c1c7svtg c1utpck0",children:c.jsx(o,{className:"w-box cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:c.jsxs("div",{className:"w-element cof5w6e c1kqvin9 cpvntxv c14z7asw ck5thp7 c1kuk279 cejlbbv c6mgpa4 cfnird ct52unj ckxilo0",children:[c.jsx("h1",{className:"w-element c8fhes7 czefk0t c1b4r1bu c5f6cy7 cdazgi9 cl2sfmw c1q0mmy0 cres1bi c1rey1nt cdzuz5l c1m0f0bu cwkjcm3 cx6lqov",children:"Helping new doctors choose their medical residency path with a mentor"}),c.jsx("div",{className:"w-element cv0lb1s c13yf6z4 c6q5r87 czcz6ve c3bdrgr c7awij8 c8wy1c4 cubs89c cof5w6e c6mgpa4 cejlbbv c1bq0a4m cadjfwi c1v1zzcv c17ksut4 c13dvlwf c1s61ss6 ckj0cni cg6xhd3 c1pl58m7",children:c.jsx(k,{preload:"auto",autoPlay:!0,muted:!0,playsInline:!0,crossOrigin:"anonymous",src:"/assets/Sanar_Motion_tGTFmuQ7s3wdsLLuPmRUl.mp4",width:"/assets/Sanar_Motion_tGTFmuQ7s3wdsLLuPmRUl.mp4",height:"/assets/Sanar_Motion_tGTFmuQ7s3wdsLLuPmRUl.mp4",alt:"/assets/Sanar_Motion_tGTFmuQ7s3wdsLLuPmRUl.mp4",loop:!0,className:"w-video c5op25b c101ko52 cubmhfi c5njafq c1q97w3i ci5nd8k c1f5shoc"})})]})})}),c.jsx("div",{className:"w-element ct52unj cgt90ys cwzu81u c1wb05ox c1839yz1 ceq6e1u c1a96kp7",children:c.jsx("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:c.jsxs("div",{className:"w-element cczhj6d clu63kx c18oe72u c14z7asw cqgpgi8 ct3kpq6 cfnird cmxbz3u cha1ar7",children:[c.jsxs("div",{className:"w-element c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird c19u25xg c1fht5ls ccnor97 c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa c1ha3ohj",children:"Our Customers"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c1rq0d4s",children:"In Brazil, while nearly 25 thousand doctors are trained each year and more than 38 thousand places are available for graduation, only 17 thousand places are available for medical residency."})]}),c.jsxs("div",{className:"w-element c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird c19u25xg c1fht5ls ccnor97 c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa c1ha3ohj",children:"Constraints"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c1rq0d4s",children:"I had one week to present an MVP that would ensure the resolution of these primary issues."})]}),c.jsxs("div",{className:"w-element c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird c19u25xg c1fht5ls ccnor97 c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa c1ha3ohj",children:"Their Problems"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c1rq0d4s",children:"Medical students who have recently graduated generally struggle to choose a specialization course. They suffer from a lack of resources to make their decision more accessible, as well as a lack of time to understand their options better."})]}),c.jsxs("div",{className:"w-element c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird c19u25xg c1fht5ls ccnor97 c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa c1ha3ohj",children:"My Role"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c1rq0d4s",children:"As a designer I was responsible for researcher, and UX/ UI designer."})]}),c.jsxs("div",{className:"w-element c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird c19u25xg c1fht5ls ccnor97 c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa c1ha3ohj",children:"Timeline"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c1rq0d4s",children:"1 week in 2021"})]}),c.jsxs("div",{className:"w-element c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird c19u25xg c1fht5ls ccnor97 c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa c1ha3ohj",children:"Client"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c1rq0d4s",children:"Sanar"})]})]})})}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsx("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e c72p2gh c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:c.jsxs("div",{className:"w-element clu63kx c18oe72u c14z7asw cqgpgi8 ct3kpq6 cfnird cof5w6e ck9r4ya c1qgv0xf",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1q0mmy0 c1i1631q c3trwqa cwkjcm3 c1ha3ohj",children:"Understanding the User"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c11chtzl c5f6cy7 cdazgi9 c1q0mmy0 c1id7qcd c1dj3emq cv0lb1s c13yf6z4 c3d4cyj ce4ynu",children:`"I don't have time to figure out my future."`}),c.jsx(s,{src:"/assets/Persona_Container_awqxt7rj_LVwb-UzPwLje.png",width:2088,height:795,alt:"",optimize:!1,className:"w-image caioxpx"})]})})}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e c72p2gh c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[c.jsxs("div",{className:"w-element clu63kx c18oe72u c14z7asw c14kn2ys c2ofohy cfnird c14wvgdg c1nd21hm cof5w6e cv0lb1s c13yf6z4 cshr7pv",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa c1ha3ohj",children:"Interview"}),c.jsxs("p",{className:"w-element c46bvhq c11ziyyh c11chtzl c5f6cy7 cdazgi9 c1nw8h38",children:["I interviewed five participants: two recent graduates and three students currently enrolled in a medical residency program.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","I conducted semi-structured interviews because the conversations took place over WhatsApp and Instagram, which allowed flexibility to explore additional topics as they naturally emerged.\u2028","",c.jsx("br",{}),"","",c.jsx("br",{}),"","To guide the interviews and ensure consistency across conversations, I focused on the following key points:"]})]}),c.jsxs("div",{className:"w-element cof5w6e c1s77693 cbcsy74 c1xt2iyl ckxilo0",children:[c.jsx("div",{className:"w-element c13yf6z4 cv0lb1s cof5w6e c6mgpa4 cejlbbv c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c c1kxqbcf c1xsjeiw c135u84e",children:c.jsx(s,{src:"/assets/Interview_6mNc21yxCefTvbccshb0z.jpg",width:1098,height:954,alt:"",optimize:!1,className:"w-image c3bdrgr c7awij8 c8wy1c4 cubs89c"})}),c.jsxs("div",{className:"w-element c1kqvin9 c1dj488p c14z7asw cqgpgi8 ct3kpq6 cfnird cczhj6d cmxbz3u cha1ar7 c1exe84p coxgmeu",children:[c.jsxs("div",{className:"w-element c172uwa3 c3eo4mx cp0w3nv c1pbugcb c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird czzhg60 c1e26j3i c6mgpa4 c1nd21hm c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z cray7do c17wq4k7 cfpxray c1cfc33l",children:[c.jsx("div",{className:"w-element c1q0mmy0 cof5w6e c6mgpa4 cejlbbv c10zj2as c1pij072 c1ad6wmg c13dpiwn clgmrmq c1xvjddi ct52unj c135ug2e cp5ms69 c15fv7xv c13be5vc",children:c.jsx("span",{className:"w-element",children:"01"})}),c.jsx("h3",{className:"w-element cxnqdyk ctydwhd c5f6cy7 cdazgi9 c19agdix c1rq0d4s cc0893y",children:"Tell me a little about yourself, where do you live, your age, what do you do?"})]}),c.jsxs("div",{className:"w-element c172uwa3 c3eo4mx cp0w3nv c1pbugcb c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird czzhg60 c1e26j3i c6mgpa4 c1nd21hm c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z cray7do c17wq4k7 cfpxray c1cfc33l",children:[c.jsx("div",{className:"w-element c1q0mmy0 cof5w6e c6mgpa4 cejlbbv c10zj2as c1pij072 c1ad6wmg c13dpiwn clgmrmq c1xvjddi ct52unj c135ug2e cp5ms69 c15fv7xv c13be5vc",children:"02"}),c.jsx("h3",{className:"w-element cxnqdyk ctydwhd c5f6cy7 cdazgi9 c19agdix c1rq0d4s cc0893y",children:"How do you organize your study routine?"})]}),c.jsxs("div",{className:"w-element c172uwa3 c3eo4mx cp0w3nv c1pbugcb c1xdxal5 c3bdrgr c7awij8 c8wy1c4 cubs89c ct52unj ccstbx2 covvr98 cof5w6e cfnird czzhg60 c1e26j3i c6mgpa4 c1nd21hm c1o95vl3 ck9r4ya c1qgv0xf c1hfz93z cray7do c17wq4k7 cfpxray c1cfc33l",children:[c.jsx("div",{className:"w-element c1q0mmy0 cof5w6e c6mgpa4 cejlbbv c10zj2as c1pij072 c1ad6wmg c13dpiwn clgmrmq c1xvjddi ct52unj c135ug2e cp5ms69 c15fv7xv c13be5vc",children:"03"}),c.jsx("h3",{className:"w-element cxnqdyk ctydwhd c5f6cy7 cdazgi9 c19agdix c1rq0d4s cc0893y",children:"What difficulties do you have or had to prepare for the residency?"})]})]})]})]})}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[c.jsxs("div",{className:"w-element clu63kx c18oe72u c14z7asw c14kn2ys c2ofohy cfnird c14wvgdg c1nd21hm cof5w6e cv0lb1s c13yf6z4 cshr7pv",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1q0mmy0 c1i1631q c3trwqa cwkjcm3 c1ha3ohj",children:"Value Proposition Canvas"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c11chtzl c5f6cy7 cdazgi9 c1nw8h38",children:"I used the tool Value Proposition Canvas because it gave me a holistic view of the Sanars' services witch are already offered and can be offered to solve Dr. Bruno Rodrigues' problem."})]}),c.jsx(s,{src:"/assets/VPC_Ar2ZcHmsxnkXxjziMHzdu.svg",width:1336,height:663,alt:"",className:"w-image ce5khyi"})]})}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[c.jsxs("div",{className:"w-element clu63kx c18oe72u c14z7asw c14kn2ys c2ofohy cfnird c14wvgdg c1nd21hm cof5w6e cv0lb1s c13yf6z4 cshr7pv",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa c1ha3ohj",children:"Competitive analysis"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c11chtzl c5f6cy7 cdazgi9 c1nw8h38",children:"I looked into Sanar's positioning in the market, the level of competitors then and the advantages of putting such a feature that I was proposing."})]}),c.jsxs("div",{className:"w-element cvjkfbg cpvntxv c14z7asw cqgpgi8 ct3kpq6 cfnird cczhj6d c6mgpa4 cejlbbv ce5khyi c1f5clwt c1up5e92",children:[c.jsx(s,{src:"/assets/SimulaMed_jIjK8RWIPYx27z2j8091g.svg",width:259,height:358,alt:"",className:"w-image"}),c.jsx(s,{src:"/assets/Medsoft_1_Any4HtxGhZgVVagbTK510.svg",width:259,height:358,alt:"",className:"w-image"}),c.jsx(s,{src:"/assets/Medcel_1_Ug0Dx90Oo5rNu_fJCKIks.svg",width:259,height:358,alt:"",className:"w-image"})]})]})}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsx("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:c.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm c2ofohy c14kn2ys cxyslhj czk83nm ct8cppf c12c1sa2 c1xdxal5 cqqc5b9 clu63kx c18oe72u c14z7asw cv0lb1s c13yf6z4 cshr7pv ccnor97 c13fdgz2",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1q0mmy0 c1i1631q cepboqc c3trwqa c1ha3ohj",children:"Why I chose to prioritize Mentorship"}),c.jsxs("p",{className:"w-element c46bvhq c11chtzl cgl4sry caioxpx cdazgi9 c5f6cy7 czefk0t c71ubmy",children:["The initial approach aimed to comprehend the challenges faced by both internal users and external customers, as well as their perceptions of the legacy system.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","The decision to use the CSD matrix stemmed from the lack of well-defined information and numerous uncertainties surrounding the perceptions of internal users and external customers regarding the current solution. This approach also facilitates aligning everyone's understanding of the problem and provides a concise overview of the unstructured information, which can subsequently be validated through other research methods."]}),c.jsxs("div",{className:"w-element cof5w6e cf4g3zq c1bl8yco c6mgpa4 c1nd21hm caioxpx",children:[c.jsx("div",{className:"w-element c100yu3v c65c54d csgfq7t c9g79p0 cdc2wbv c786zt5 ccstbx2 covvr98 c61hdn2 c1nuq8xr",children:c.jsx(s,{src:"/assets/Mentorship_BCWT66YlYijie3ucnTBcO.png",width:368,height:368,alt:"",optimize:!1,className:"w-image c1kxqbcf"})}),c.jsxs("div",{className:"w-element cof5w6e cfnird cyqmh81 ceejf0k",children:[c.jsx("h3",{className:"w-element c1rq0d4s c5f6cy7 cdazgi9 cropdey",children:"Tamires Lelis"}),c.jsx("h4",{className:"w-element c11chtzl c19agdix c5f6cy7 cdazgi9 c1qp93bc",children:"Product Designer"})]})]})]})})}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[c.jsxs("div",{className:"w-element clu63kx c18oe72u c14z7asw c14kn2ys c2ofohy cfnird c14wvgdg c1nd21hm cof5w6e cv0lb1s c13yf6z4 cshr7pv",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1q0mmy0 c1i1631q c3trwqa c1ha3ohj",children:"Sketching ideas"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c11chtzl c5f6cy7 cdazgi9 cshr7pv c1nw8h38",children:"After working through a few initial sketches, I understood that some of the concepts I had in mind wouldn't work. Not only I was able to visualize quickly, but I quickly filtered the good and bad ideas out."})]}),c.jsxs("div",{className:"w-element cczhj6d c14wvgdg c1nd21hm clu63kx cu04upu c14z7asw cqgpgi8 ct3kpq6 caioxpx c1pw3gk5 c160dslw c1v9uc74",children:[c.jsx(s,{src:"/assets/Sketching_AZVkBRXgU5JE360zQQnEj.jpg",width:1260,height:944,alt:"",optimize:!1,className:"w-image c3bdrgr c7awij8 c8wy1c4 cubs89c c1kxqbcf"}),c.jsx(s,{src:"/assets/Sketching_AZVkBRXgU5JE360zQQnEj.jpg",width:1260,height:944,alt:"",optimize:!1,className:"w-image c3bdrgr c7awij8 c8wy1c4 cubs89c c1kxqbcf"}),c.jsx(s,{src:"/assets/Sketching_AZVkBRXgU5JE360zQQnEj.jpg",width:1260,height:944,alt:"",optimize:!1,className:"w-image c3bdrgr c7awij8 c8wy1c4 cubs89c c1kxqbcf"}),c.jsx(s,{src:"/assets/Sketching_AZVkBRXgU5JE360zQQnEj.jpg",width:1260,height:944,alt:"",optimize:!1,className:"w-image c3bdrgr c7awij8 c8wy1c4 cubs89c c1kxqbcf"})]})]})}),c.jsxs("div",{className:"w-element ct52unj c1jiw95h ca6gv1s c1xdxal5 c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:[c.jsx("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:c.jsxs("div",{className:"w-element clu63kx c18oe72u c14z7asw c14kn2ys c2ofohy cfnird c14wvgdg c1nd21hm cof5w6e cv0lb1s c13yf6z4 cshr7pv",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 c1jb7l0o c1sngbkj c1q0mmy0 cilardz c1i1631q c3trwqa c1ha3ohj",children:"Wireframes"}),c.jsx("p",{className:"w-element c46bvhq c11ziyyh c11chtzl c5f6cy7 cdazgi9 cshr7pv c1nw8h38",children:"After sketching a lot of ideas. I started to work on the skeleton of the solution, I care if all the information is really in there, and how it is organized from screen to screen. At that moment I'm dealing with issues of form, arrangement, and information volume."})]})}),c.jsx(s,{optimize:!1,src:"/assets/sanar-wireframe_UDcxDnofKcWPiy8Tp3q0g.png",width:2560,height:1097,alt:"",className:"w-image cv0lb1s c13yf6z4"})]}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[c.jsxs("div",{className:"w-element clu63kx c18oe72u c14z7asw cqgpgi8 ct3kpq6 cfnird c14wvgdg c1nd21hm cof5w6e cv0lb1s c13yf6z4 cshr7pv",children:[c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1q0mmy0 c1i1631q c3trwqa c1ha3ohj",children:"User Interface"}),c.jsxs("p",{className:"w-element c46bvhq c11ziyyh c11chtzl c5f6cy7 cdazgi9 cshr7pv c1nw8h38",children:["Users can book a mentoring session, filter the mentor based on specialization, and request a new mentor focusing on another area.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","One of my focus points is the accessibility of the App's primary buttons, which I needed to improve by changing the color of the label to black. Many people with low vision and other diseases can get a better experience from this.","",c.jsx("br",{}),"","",c.jsx("br",{}),"","Check below the final solution with some UI components."]})]}),c.jsxs("div",{className:"w-element c1kqvin9 c4zxmy2 c14z7asw cscejie c17hsw3v cfnird cczhj6d ce5khyi c14wvgdg cejlbbv c13yf6z4 cv0lb1s cmxbz3u c1hdb12u cu5ilmm cf8191x c8pb6uh",children:[c.jsx(s,{src:"/assets/Styleguide_KwYdm_74kUBhhxw7gpIlp.png",width:3348,height:1994,alt:"",optimize:!1,className:"w-image caioxpx c3bdrgr c7awij8 c8wy1c4 cubs89c"}),c.jsx(s,{src:"/assets/Mockups_bNwrh_WuJ_2O7AXguBdJF.png",width:1060,height:687,alt:"",optimize:!1,className:"w-image caioxpx c3bdrgr c7awij8 c8wy1c4 cubs89c"}),c.jsx(s,{src:"/assets/Mockups-2_b69yu0xfLK__O8G7n3a2t.png",width:2104,height:1306,alt:"",optimize:!1,className:"w-image caioxpx c3bdrgr c7awij8 c8wy1c4 cubs89c"})]})]})}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1xdxal5 c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[c.jsx("div",{className:"w-element clu63kx c18oe72u c14z7asw c14kn2ys c2ofohy cfnird c14wvgdg c1nd21hm cof5w6e cv0lb1s c13yf6z4 cshr7pv",children:c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1i1631q c3trwqa cwkjcm3 c1ha3ohj",children:"Next Steps & Validation Plan"})}),c.jsx("div",{className:"w-element c1kqvin9 c1dj488p c14z7asw cqgpgi8 ct3kpq6 cfnird c1qchpas ce5khyi c1nw8h38 c19l0tnl cidzmp5 cmxbz3u cha1ar7",children:c.jsxs("p",{className:"w-element c46bvhq c11ziyyh c1tdbso7 c5f6cy7 cdazgi9 cshr7pv c1nw8h38 czefk0t c1qchpas",children:["Before deciding whether it is worth investing time in any kind of development work. I decided to run fake door testing, which is a lean technique to quickly test the viability and assess the market demand for a product before investing in its development. ","",c.jsx("br",{}),"","",c.jsx("br",{}),"","To avoid disappointing the Sanar users and be transparent and honest with them. The test can be run only for a limited segment size of users to minimize the fallout. ","",c.jsx("br",{}),"","",c.jsx("br",{}),"",`So to measure if users have interest to use the feature 'Mentores' , we can analyze clickthrough rate (CTR) on the button with the label “Começar com 3 dias de graça", then if a validation is got the development will be started.`]})})]})}),c.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s clgmrmq c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:c.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e cw93wnm c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[c.jsx("div",{className:"w-element clu63kx c18oe72u c14z7asw cqgpgi8 ct3kpq6 cfnird c1q0mmy0 c6mgpa4 c1nd21hm cshr7pv cv0lb1s c13yf6z4 cof5w6e ck9r4ya c1qgv0xf ce4ynu c3d4cyj",children:c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1tdbso7 cpn85ca c634g49 c1aeuki6 c14c5e1r c1i1631q c3trwqa cwkjcm3 c1ha3ohj",children:"Learnings"})}),c.jsx("div",{className:"w-element c1kqvin9 c4zxmy2 c14z7asw cqgpgi8 ct3kpq6 cfnird c1qchpas ce5khyi cidzmp5 cmxbz3u c1hdb12u",children:c.jsx("p",{className:"w-element c46bvhq c11ziyyh c1tdbso7 c5f6cy7 cdazgi9 cshr7pv c1nw8h38 czefk0t",children:"This project gave me a better insight into the education market and how is the life of people who study to pass for residency in Brazil, after talking with 5 people in this scenery. The research has shown me how the subject needs to be explored more and how many possibilities can came up in this enormous market. I had only 1 week to work on this project, and I believe I could have had a better delivery if I had dedicated more time to it."})})]})})]}),c.jsx(d,{children:c.jsxs(m,{children:[c.jsx(e,{href:"https://docs.google.com/document/d/1yIbxWqA8iR-l9QNqxXW3XpSUFMVdLAwFm6T9cc1JzbA/edit?usp=sharing","data-umami-event":"resume",target:"_blank",className:"w-element ccsy7xc c126wj6q c9zkcd czplipl c1yabzl1 csohm68 cpv6jm9 cto8pp c1233eak c19n7psi cropdey cmbui4f c19agdix ce91zps c1emz4tb c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny cla5yuw c1q0mmy0 c16z8nc9 cjioilx c17m4mik c8jxbob c1oep0kr cuh0tnd c8vga8h c17pbrgg cwh2xnz c18y1yfz",children:"Resume"}),c.jsx("div",{id:"footer",className:"w-element ct52unj cgt90ys ca6gv1s c1233eak c1u46ts9 cyd0cqc co3kb0v c1a96kp7",children:c.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e c72p2gh c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[c.jsxs("div",{className:"w-element cof5w6e cfnird ca1teru c88z9fr c12rxci2 c14wvgdg c1nd21hm",children:[c.jsxs("p",{className:"w-element cof5w6e c6mgpa4 c1nd21hm cyqmh81 ceejf0k c15lg6lk criiiqu c19agdix c1ynb3vu c11ziyyh cdazgi9 c5f6cy7",children:[c.jsx("div",{className:"w-element cueyjc6 c6i9dft c1shimgp"}),c.jsx("span",{className:"w-element",children:"Let’s talk"})]}),c.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c19n7psi c1id7qcd c1i1631q c3trwqa c1ha3ohj",children:"I turn complex ideas into scalable products"})]}),c.jsxs("div",{className:"w-element cczhj6d c1wkft6e cpvntxv c14z7asw c14kn2ys c2ofohy ca6gv1s c5bp6ej c14wvgdg c1nd21hm cwlcotc cf22lq cpny08g c13as5oz c89lx15",children:[c.jsxs("div",{className:"w-element c1gsu131 c1nd21hm cof5w6e c1s2otju c1rn4qj c1esetaq c1kcb1sg ",children:[c.jsx(t,{code:`<style>
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
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),c.jsx("div",{className:"w-element cof5w6e c6mgpa4 c1nd21hm c15enq9a c1nw8h38 c1sh2v30 dynamic-container",children:c.jsx(e,{href:"mailto:hello@tamireslelis.com",target:"_blank",className:"w-element c6mgpa4 c1nd21hm c4xluno c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny ccstbx2 covvr98 c1qchpas c19agdix c1kaattp cgfdkim dynamic-text",children:"hello@tamires.com"})})]}),c.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cy4rjp5 c1mx0bv6 c1s2otju codc48q c15z9ssy cy2n950 ck4k5jk ckcpkws",children:[c.jsx("p",{className:"w-element c1xvjddi c1ynb3vu cp5ms69 criiiqu c19p6unp",children:"Work"}),c.jsxs("div",{className:"w-element cof5w6e c14wvgdg c1nd21hm cfnird cyqmh81 ceejf0k",children:[c.jsx(e,{href:"/works/becare",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"BeCare MS"}),c.jsx(e,{href:"/works/sanar",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Sanar Health"}),c.jsx(e,{href:"/works/ultracargo",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Ultracargo"})]})]}),c.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cy4rjp5 c1y6vnuz c1rn4qj c15z9ssy cy2n950 c1mx0bv6 ck4k5jk ckcpkws",children:[c.jsx("p",{className:"w-element c1xvjddi c1ynb3vu cp5ms69 criiiqu c19p6unp",children:"Social"}),c.jsxs("div",{className:"w-element cof5w6e c14wvgdg c1nd21hm cfnird cyqmh81 ceejf0k",children:[c.jsx(e,{href:"https://www.instagram.com/tamiresslelis",target:"_blank",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix c12vxs2k cjy68nb c1yemr3k c1kaattp",children:"Instagram"}),c.jsx(e,{href:"https://www.linkedin.com/in/tamireslelis/",target:"_blank",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Linkedin"}),c.jsx(e,{href:"https://github.com/tamiresslelis",target:"_blank",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Github"})]})]})]}),c.jsxs("div",{className:"w-element cof5w6e c1xp6ni7 cpvntxv c14z7asw cqgpgi8 ct3kpq6 cqtg744 czs9kn6 c1aehz4h ca1b57q c1ouhok3 cfzkjxm c1o95vl3 ck9r4ya",children:[c.jsx("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cdl6nhs cy4rjp5",children:c.jsx("p",{className:"w-element c4xluno c1qp93bc c19agdix",children:"© 2026 Tamires Lelis · Let’s grab a coffee ☕  "})}),c.jsxs("div",{className:"w-element cof5w6e c1febqwh c14wvgdg c1nd21hm cdl6nhs cy4rjp5 cxawxml c7ksjn2 c1fujhx7 c1hnq4fw cvsl260",children:[c.jsx(e,{href:"/privacy-policy",target:"_self",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix c12vxs2k cjy68nb c1yemr3k c1kaattp",children:"Privacy Policy"}),c.jsxs(e,{href:"#hero",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cof5w6e c6mgpa4 c1nd21hm cjy68nb c1yemr3k c1kaattp",children:[c.jsx("span",{className:"w-element",children:"Go to Top "}),c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-element c1h2tnmh cd7b24f lucide lucide-arrow-up-icon lucide-arrow-up",children:[c.jsx("path",{d:"m5 12 7-7 7 7",className:"w-element"}),c.jsx("path",{d:"M12 19V5",className:"w-element"})]})]})]})]})]})})]})})]})]}),_=n=>{const{origin:a,pathname:r,search:i}=new URL(n);return`${a}${r}${i}`},P=p.memo(({pageKey:n,system:a})=>c.jsx(T,{system:a},n),(n,a)=>n.pageKey===a.pageKey),C=({data:n})=>{const{system:a,resources:r,url:i,pageMeta:w}=n,x=_(i),u=p.useMemo(()=>({imageLoader:h,assetBaseUrl:l,resources:r,breakpoints:z,onError:console.error}),[r]);return c.jsxs(y.Provider,{value:u,children:[c.jsx(f.Provider,{value:i,children:c.jsx(P,{pageKey:x,system:a})}),c.jsx(v,{url:i,pageMeta:w,siteName:g,imageLoader:h,assetBaseUrl:l}),c.jsx(b,{children:w.title})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),I=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:g};return c.jsxs(c.Fragment,{children:[c.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),c.jsx("link",{rel:"icon",href:h({src:`${l}${q}`})}),N.map(a=>c.jsx("link",{rel:"preload",href:`${l}${a}`,as:"font",crossOrigin:"anonymous"},a)),S.map(a=>c.jsx("link",{rel:"preload",href:`${l}${a}`,as:"image"},a))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:I},Symbol.toStringTag,{value:"Module"})),W={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/works/sanar/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/works/sanar/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{W as configValuesSerialized};
