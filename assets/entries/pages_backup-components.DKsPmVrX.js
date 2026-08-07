import{j as e,g as s,r as p,a as l,i as r,R as u,b as x,P as y,c as b,d as v}from"../chunks/chunk-BOcDHK1K.js";import{U as m,n}from"../chunks/chunk-B5fMpomd.js";import{y as t}from"../chunks/chunk-Dt6i3xre.js";/* empty css                      */const g="Tamires Lelis - Senior Product Designer",f=[{id:"Swvp-bFp9UIM-pQoZVVwE"},{id:"4yrVvSBx_StPnY1cztI37",maxWidth:991},{id:"P0daCfPpwHiMqkq2qxT8E",maxWidth:767},{id:"qtEfW9_uQH44pIzsk7WEy",maxWidth:479}],j="favicon_C1VJaB9edSC7Lx5D-Efdn.jpg",z=["PublicSans-VariableFont_wght__WmxQh0krgZkZtrQz8np7.woff2","PublicSans-Italic-VariableFont_wght_SHDHebvBRM4_2MmjcpM2M.woff2"],k=[],q=a=>e.jsxs("body",{className:"w-element",children:[e.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:e.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e c72p2gh c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[e.jsxs("div",{className:"w-element",children:[e.jsxs("p",{className:"w-element cof5w6e c6mgpa4 c1nd21hm cyqmh81 ceejf0k cw6mb8v criiiqu cp5ms69 c1ynb3vu cmbui4f",children:[e.jsx("div",{className:"w-element cueyjc6 c6i9dft ctif6sg"}),e.jsx("span",{className:"w-element",children:"Methods and tools"})]}),e.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c1sngbkj c1ldtu5f c1i1631q c3trwqa c1ha3ohj",children:"Methods that support complex product decision-making"})]}),e.jsx(m,{code:`<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"><\/script>
<script>
document.addEventListener("DOMContentLoaded", () => {
  const {
    Engine,
    Runner,
    World,
    Bodies,
    Body,
    Mouse,
    MouseConstraint,
    Vector,
    Events,
    Bounds
  } = Matter;

  const wrapper = document.querySelector(".tools-wrapper");
  if (!wrapper) return;

  // =========================
  // TAMANHO DA ÁREA
  // =========================
  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight;

  if (width <= 0 || height <= 0) {
    console.warn("Física não iniciada: .tools-wrapper tem tamanho 0. Defina min-height no CSS.");
    return;
  }

  // =========================
  // ENGINE & WORLD
  // =========================
  const engine = Engine.create();
  engine.world.gravity.y = 1.2;
  const world = engine.world;

  // =========================
  // PAREDES
  // =========================
  const wallThickness = 10;
  const walls = [
    Bodies.rectangle(width / 2, wallThickness / 2, width, wallThickness, { isStatic: true }), // Topo
    Bodies.rectangle(width / 2, height - wallThickness / 2, width, wallThickness, { isStatic: true }), // Fundo
    Bodies.rectangle(wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // Esquerda
    Bodies.rectangle(width - wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }) // Direita
  ];
  World.add(world, walls);

  // =========================
  // ITENS (DOM Elements)
  // =========================
  const items = [];
  const toolElements = wrapper.querySelectorAll(".tool-item");

  toolElements.forEach(el => {
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;

    if (elWidth <= 0 || elHeight <= 0) return;

    // Margem de segurança para o spawn
    const spawnPadding = 20; 
    const minX = wallThickness + spawnPadding + (elWidth / 2);
    const maxX = width - wallThickness - spawnPadding - (elWidth / 2);
    const safeMinX = Math.min(minX, maxX);
    const safeMaxX = Math.max(minX, maxX);
    const spawnY = wallThickness + spawnPadding + (elHeight / 2);

    const body = Bodies.rectangle(
      Math.random() * (safeMaxX - safeMinX) + safeMinX, 
      spawnY,
      elWidth - 2, 
      elHeight - 2,
      {
        restitution: 0.2, // "Pulo" ao bater
        friction: 0.4,
        frictionAir: 0.08,
        density: 0.004
      }
    );

    // Rotação inicial leve
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.06);
    body.angularDamping = 0.4;
    body.maxSpeed = 15;

    // Guardar a referência do HTML e links no corpo físico
    body.el = el;
    body.url = el.getAttribute("href") || el.getAttribute("data-url");

    items.push(body);
  });

  World.add(world, items);

  // =========================
  // MOUSE & SCROLL FIX
  // =========================
  const mouse = Mouse.create(wrapper);
  
  // Liberar o scroll nativo (Mouse/Touch)
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
  wrapper.style.touchAction = "pan-y"; 

  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.12,
      damping: 0.25,
      render: { visible: false }
    }
  });
  World.add(world, mouseConstraint);

  // Lógica para diferenciar Arrastar vs Clicar
  let isDragging = false;

  Events.on(mouseConstraint, "startdrag", () => {
    isDragging = true;
    wrapper.style.touchAction = "none"; // Trava a tela no mobile ao arrastar
  });

  Events.on(mouseConstraint, "enddrag", () => {
    isDragging = false;
    wrapper.style.touchAction = "pan-y"; // Devolve o scroll ao soltar
  });

  // Fazer os links funcionarem ao clicar (O Matter.js costuma bloquear cliques nativos)
  Events.on(mouseConstraint, "mouseup", (event) => {
    if (isDragging) return; // Se estava arrastando, ignora o clique

    const mousePosition = event.mouse.position;
    for (let i = 0; i < items.length; i++) {
      const body = items[i];
      if (Bounds.contains(body.bounds, mousePosition)) {
        if (body.url) {
          // Checa se o link deve abrir em nova guia (target="_blank") ou na mesma
          const target = body.el.getAttribute("target") === "_blank" ? "_blank" : "_self";
          window.open(body.url, target);
        }
        break;
      }
    }
  });

  // =========================
  // SYNC DOM LOOP (A Mágica)
  // =========================
  (function animate() {
    items.forEach(body => {
      // Limitar a velocidade (impede que os itens atravessem paredes)
      const speed = Vector.magnitude(body.velocity);
      if (speed > body.maxSpeed) {
        Body.setVelocity(body, Vector.mult(Vector.normalise(body.velocity), body.maxSpeed));
      }

      // Aplicar posição do Matter.js no CSS das divs
      body.el.style.transform = \`
        translate(
          \${body.position.x - body.el.offsetWidth / 2}px,
          \${body.position.y - body.el.offsetHeight / 2}px
        )
        rotate(\${body.angle}rad)
      \`;
    });

    requestAnimationFrame(animate);
  })();

  // =========================
  // START ON VIEW
  // =========================
  const runner = Runner.create();
  let started = false;

  const observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting && !started) {
      Runner.run(runner, engine);
      started = true;
      obs.disconnect(); // Roda apenas uma vez
    }
  }, { threshold: 0.2 });

  observer.observe(wrapper);
});
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!1,className:"w-html-embed"}),e.jsx(n,{"data-ws-tag":"div",className:"w-box c1pw3gk5",children:e.jsxs(n,{"data-ws-tag":"div",className:"w-box caioxpx cgto1nl c1rbx8qn c14uy8jl cowlvyb cww3u8u ct52unj c156co1r cyjnm5w c14xdy04 c17i5tz9 c14l5qny c1lngdjc cejlbbv cd5sz4b cgpu14a c1hzehfu tools-wrapper",children:[e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baaf9d8623fff8aedb7b_uxcam_glOt9XyapZ3oRsVep79fn.png",width:284,height:48,className:"w-image c11l47ry c17p6y3w c12vxs2k c1ljr338"})}),e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baaed52e0f49a06f7eb7_google-analytics_mCniRjRT5xGHG9TRfFGJm.png",width:139,height:48,className:"w-image c11l47ry c17p6y3w c12vxs2k c1ljr338"})}),e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baae19949fbd2ccc4098_marvel_tGcXjVWmCjkpt1gw00VCY.png",width:152,height:48,className:"w-image c11l47ry c17p6y3w c12vxs2k c1ljr338"})}),e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cow1b0l cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baae1ee6b9e90a67dbea_miro_b94WJUM9dpWB5fKKQT5go.png",width:91,height:96,className:"w-image c11l47ry c17p6y3w c12vxs2k c131iagc c1kxqbcf c1ljr338"})}),e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baaea299a1f8469086d1_maze_oWucV7sp7fRqhL3dCKcRP.png",width:263,height:48,className:"w-image c11l47ry c17p6y3w c12vxs2k cubmhfi c1ljr338"})}),e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baae7533dc3fefb57bce_cursor_I353MinY0BodfnQ7fPiNj.png",width:170,height:48,className:"w-image c11l47ry c17p6y3w c12vxs2k c1ljr338"})}),e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baaea754a3e04241069a_hotjar_g3hdYq1h5wMathBsd8hjQ.png",width:100,height:48,className:"w-image c11l47ry c17p6y3w c12vxs2k c1ljr338"})}),e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baae6b63a6fc00fc5a13_aplitude_8Cj4AN5HJfhg3aTqkn3Q6.png",width:240,height:48,className:"w-image c11l47ry c17p6y3w c12vxs2k c1ljr338"})}),e.jsx(n,{"data-ws-tag":"div",id:"tool-item",className:"w-box c12vxs2k c172uwa3 c3eo4mx cp0w3nv c1pbugcb cejlbbv c6mgpa4 czuam1s c1fgzmr2 cjpdtvq cr7sq4u c13mg3yz cyzybn9 c1xllacy cgdrtde c185bo30 c1v1zzcv cpl7191 c1nv4ztu tool-item",children:e.jsx(t,{loading:"lazy",src:"/assets/6952baaed617733d572a3662_figma_Kviqzfe3Qc5vZthGIx4SV.png",width:32,height:48,className:"w-image c11l47ry c17p6y3w c12vxs2k c1ljr338"})}),e.jsx("div",{className:"w-element c1ijgl3e c1sezcel c4bwbls c140dqt9 c1v1zzcv c1r6zapr c6q5r87 c1g9xi9o c10zj2as c1pij072 c1hidr18 c19k5wrc c1ynb3vu cw6mb8v c1ad6wmg c13dpiwn c1qncgvn cgdrtde cpl7191",children:"Drag Pills"})]})})]})}),e.jsx("div",{className:"w-element ct52unj cgt90ys ca6gv1s c1233eak c1wb05ox cyd0cqc co3kb0v c1a96kp7",children:e.jsxs("div",{className:"w-element cof5w6e cfnird cv0lb1s c13yf6z4 c12gst9e c72p2gh c17lgyl1 c1smnc6y c17m4mik c108wrh8",children:[e.jsxs("div",{className:"w-element cof5w6e cfnird ca1teru c88z9fr c12rxci2 c14wvgdg c1nd21hm",children:[e.jsxs("p",{className:"w-element cof5w6e c6mgpa4 c1nd21hm cyqmh81 ceejf0k c15lg6lk criiiqu c19agdix c1ynb3vu c11ziyyh cdazgi9 c5f6cy7",children:[e.jsx("div",{className:"w-element cueyjc6 c6i9dft c1shimgp"}),e.jsx("span",{className:"w-element",children:"Methods and tools"})]}),e.jsx("h2",{className:"w-element c19fsvcg c1b4r1bu c19agdix c5f6cy7 cdazgi9 c19n7psi c1id7qcd c1i1631q c3trwqa c1ha3ohj",children:"I’m open to new opportunities and collaborations."})]}),e.jsx(m,{code:`<style>
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
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"}),e.jsx("div",{className:"w-element ckdp33e c1nw8h38 ccstbx2 covvr98 cof5w6e c6mgpa4 c1nd21hm c83oh32 dynamic-container",children:e.jsx(s,{className:"w-element c6mgpa4 c1nd21hm c4xluno c19agdix c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c1kaattp cgfdkim dynamic-text",children:"hello@tamires.com"})}),e.jsxs("div",{className:"w-element cczhj6d c1xp6ni7 cpvntxv c14z7asw c14kn2ys c2ofohy ca6gv1s c5bp6ej cwlcotc cf22lq cpny08g c13as5oz c89lx15",children:[e.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cdl6nhs cy4rjp5 c1s2otju c1rn4qj c1esetaq c1kcb1sg ck4k5jk cadrl1t ckcpkws",children:[e.jsx("p",{className:"w-element c1xvjddi c46bvhq c19agdix",children:"Tamires"}),e.jsx("p",{className:"w-element clqcm9f c1qp93bc c19agdix",children:"Product Designer & Design Engineer building scalable systems for complex digital platforms."}),e.jsxs("p",{className:"w-element clqcm9f c1qp93bc c19agdix cof5w6e c6mgpa4 c1nd21hm c1i337t5 c5f6cy7 cdazgi9",children:[e.jsx("div",{className:"w-element c1h2tnmh cd7b24f c6k2ya8 c1qmf1p3 c92aacn c1pu3hxh cof5w6e c6mgpa4 cejlbbv c178rlts",children:e.jsx("div",{className:"w-element ctxxbpr c1cuvfob cljt7d3 c6k2ya8 c1qmf1p3 c92aacn c1pu3hxh"})}),e.jsx("span",{className:"w-element",children:"Available for new projects"})]})]}),e.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cdl6nhs cy4rjp5 c81pqtm c1mx0bv6 c1s2otju codc48q c15z9ssy cy2n950 ck4k5jk ckcpkws",children:[e.jsx("p",{className:"w-element c1xvjddi c1ynb3vu cp5ms69 criiiqu c19p6unp",children:"Work"}),e.jsxs("div",{className:"w-element cof5w6e c14wvgdg c1nd21hm cfnird cyqmh81 ceejf0k",children:[e.jsx(s,{className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"BeCare MS"}),e.jsx(s,{className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Sanar Health"}),e.jsx(s,{className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Ultracargo"})]})]}),e.jsxs("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cdl6nhs cy4rjp5 c81pqtm c1y6vnuz c1rn4qj c15z9ssy cy2n950 c1mx0bv6 ck4k5jk ckcpkws",children:[e.jsx("p",{className:"w-element c1xvjddi c1ynb3vu cp5ms69 criiiqu c19p6unp",children:"Social"}),e.jsxs("div",{className:"w-element cof5w6e c14wvgdg c1nd21hm cfnird cyqmh81 ceejf0k",children:[e.jsx(s,{href:"https://www.instagram.com/tamiresslelis",target:"_blank",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix c12vxs2k cjy68nb c1yemr3k c1kaattp",children:"Instagram"}),e.jsx(s,{className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Linkedin"}),e.jsx(s,{className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cjy68nb c1yemr3k c1kaattp",children:"Github"})]})]})]}),e.jsxs("div",{className:"w-element cof5w6e c1xp6ni7 cpvntxv c14z7asw cqgpgi8 ct3kpq6 cqtg744 czs9kn6 c1aehz4h ca1b57q c1ouhok3 cfzkjxm c1o95vl3 ck9r4ya",children:[e.jsx("div",{className:"w-element cof5w6e cfnird c14wvgdg c1nd21hm cdl6nhs cy4rjp5",children:e.jsx("p",{className:"w-element c4xluno c1qp93bc c19agdix",children:"© 2026 Tamires Lelis · All rights reserved"})}),e.jsxs("div",{className:"w-element cof5w6e c1febqwh c14wvgdg c1nd21hm cdl6nhs cy4rjp5 cxawxml c7ksjn2 c1fujhx7 c1hnq4fw cvsl260",children:[e.jsx(s,{className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix c12vxs2k cjy68nb c1yemr3k c1kaattp",children:"Privacy Policy"}),e.jsxs(s,{href:"https://www.instagram.com/tamiresslelis",target:"_blank",className:"w-element c1qp93bc ce91zps c156co1r c18l6b0o c14xdy04 c17i5tz9 c14l5qny c4xluno c19agdix cof5w6e c6mgpa4 c1nd21hm cjy68nb c1yemr3k c1kaattp",children:[e.jsx("span",{className:"w-element",children:"Go to Top "}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-element c1h2tnmh cd7b24f lucide lucide-arrow-up-icon lucide-arrow-up",children:[e.jsx("path",{d:"m5 12 7-7 7 7",className:"w-element"}),e.jsx("path",{d:"M12 19V5",className:"w-element"})]})]})]})]})]})})]}),N=a=>{const{origin:c,pathname:o,search:i}=new URL(a);return`${c}${o}${i}`},S=p.memo(({pageKey:a,system:c})=>e.jsx(q,{system:c},a),(a,c)=>a.pageKey===c.pageKey),T=({data:a})=>{const{system:c,resources:o,url:i,pageMeta:d}=a,h=N(i),w=p.useMemo(()=>({imageLoader:r,assetBaseUrl:l,resources:o,breakpoints:f,onError:console.error}),[o]);return e.jsxs(u.Provider,{value:w,children:[e.jsx(x.Provider,{value:i,children:e.jsx(S,{pageKey:h,system:c})}),e.jsx(y,{url:i,pageMeta:d,siteName:g,imageLoader:r,assetBaseUrl:l}),e.jsx(b,{children:d.title})]})},M=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),_=({})=>{const a={"@context":"https://schema.org","@type":"WebSite",name:g};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a,null,2)}}),e.jsx("link",{rel:"icon",href:r({src:`${l}${j}`})}),z.map(c=>e.jsx("link",{rel:"preload",href:`${l}${c}`,as:"font",crossOrigin:"anonymous"},c)),k.map(c=>e.jsx("link",{rel:"preload",href:`${l}${c}`,as:"image"},c))]})},E=Object.freeze(Object.defineProperty({__proto__:null,Head:_},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/backup-components/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:M}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/backup-components/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:E}}};export{D as configValuesSerialized};
