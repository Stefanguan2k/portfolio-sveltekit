import{S as Ds,i as Bs,s as Ms,k as n,q as B,a as d,l as o,m as r,r as M,h as a,c as h,n as e,L as Xt,p as Ct,b as yt,E as t,u as Vs,F as zt,C as L,D,M as Q,w as Se,N as xa,y as ot,O as ka,z as lt,A as it,P as At,Q as Ea,R as ya,g as ct,d as ut,B as dt,T as za,U as Et,V as Ia}from"../chunks/index.0e305d14.js";import{N as Va}from"../chunks/nav.be339380.js";function La(s){return s()}function Da(s){s.forEach(La)}const Pt=[],fa=[],Ft=[],ga=[],pa=Promise.resolve();let Ls=!1;function Ba(){Ls||(Ls=!0,pa.then(ja))}function Ma(){return Ba(),pa}function Ta(s){Ft.push(s)}const Is=new Set;let Nt=0;function ja(){do{for(;Nt<Pt.length;){const s=Pt[Nt];Nt++,Sa(s.$$)}for(Pt.length=0,Nt=0;fa.length;)fa.pop()();for(let s=0;s<Ft.length;s+=1){const l=Ft[s];Is.has(l)||(Is.add(l),l())}Ft.length=0}while(Pt.length);for(;ga.length;)ga.pop()();Ls=!1,Is.clear()}function Sa(s){if(s.fragment!==null){s.update(),Da(s.before_update);const l=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,l),s.after_update.forEach(Ta)}}const Ha={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},je=(s,l)=>new CustomEvent(s,{detail:l});function Ut(s,l={}){const{root:i,rootMargin:u,threshold:b,unobserveOnEnter:m}=Object.assign(Object.assign({},Ha),l);let f={x:void 0,y:void 0},w={vertical:void 0,horizontal:void 0};if(typeof IntersectionObserver<"u"&&s){const g=new IntersectionObserver((v,x)=>{v.forEach(_=>{f.y>_.boundingClientRect.y?w.vertical="up":w.vertical="down",f.x>_.boundingClientRect.x?w.horizontal="left":w.horizontal="right",f={y:_.boundingClientRect.y,x:_.boundingClientRect.x};const c={inView:_.isIntersecting,entry:_,scrollDirection:w,node:s,observer:x};s.dispatchEvent(je("inview_change",c)),s.dispatchEvent(je("change",c)),_.isIntersecting?(s.dispatchEvent(je("inview_enter",c)),s.dispatchEvent(je("enter",c)),m&&x.unobserve(s)):(s.dispatchEvent(je("inview_leave",c)),s.dispatchEvent(je("leave",c)))})},{root:i,rootMargin:u,threshold:b});return Ma().then(()=>{s.dispatchEvent(je("inview_init",{observer:g,node:s})),s.dispatchEvent(je("init",{observer:g,node:s}))}),g.observe(s),{destroy(){g.unobserve(s)}}}}function Oa(s){let l,i,u,b,m,f,w,g,v,x,_,c,T,H,j,U;return{c(){l=n("a"),i=n("div"),u=n("div"),b=n("div"),m=n("p"),f=B(s[0]),w=d(),g=n("p"),v=B(s[1]),x=d(),_=n("div"),c=n("img"),H=d(),j=n("img"),this.h()},l(z){l=o(z,"A",{href:!0,class:!0});var I=r(l);i=o(I,"DIV",{class:!0,style:!0});var V=r(i);u=o(V,"DIV",{class:!0});var O=r(u);b=o(O,"DIV",{class:!0});var F=r(b);m=o(F,"P",{id:!0,class:!0});var S=r(m);f=M(S,s[0]),S.forEach(a),w=h(F),g=o(F,"P",{id:!0,class:!0});var J=r(g);v=M(J,s[1]),J.forEach(a),F.forEach(a),x=h(O),_=o(O,"DIV",{class:!0});var E=r(_);c=o(E,"IMG",{src:!0,alt:!0,class:!0,"data-show":!0}),H=h(E),j=o(E,"IMG",{src:!0,alt:!0,class:!0}),E.forEach(a),O.forEach(a),V.forEach(a),I.forEach(a),this.h()},h(){e(m,"id","name"),e(m,"class","text-xl ml-8"),e(g,"id","role"),e(g,"class","text-md ml-8"),e(b,"class","col-span-2"),Xt(c.src,T="/assets/svg/code.svg")||e(c,"src",T),e(c,"alt",""),e(c,"class","h-5 w-5 hidden data-[show='2']:block"),e(c,"data-show",s[4]),Xt(j.src,U=s[6])||e(j,"src",U),e(j,"alt",""),e(j,"class","h-5 w-5"),e(_,"class","self-center justify-self-end mr-8 flex gap-4"),e(u,"class","bg-black w-full h-max py-4 grid grid-cols-3 backdrop-blur-xl"),Ct(u,"background",s[2]),e(i,"class","flex items-end w-full h-96 rounded-md overflow-hidden bg-cover bg-center text-zinc-200 md:justify-center md:flex-wrap md:w-full"),Ct(i,"background-image","url("+s[3]+")"),e(l,"href",s[5]),e(l,"class","hover:shadow-lg transition ease-ios-smooth duration-500")},m(z,I){yt(z,l,I),t(l,i),t(i,u),t(u,b),t(b,m),t(m,f),t(b,w),t(b,g),t(g,v),t(u,x),t(u,_),t(_,c),t(_,H),t(_,j)},p(z,[I]){I&1&&Vs(f,z[0]),I&2&&Vs(v,z[1]),I&16&&e(c,"data-show",z[4]),I&64&&!Xt(j.src,U=z[6])&&e(j,"src",U),I&4&&Ct(u,"background",z[2]),I&8&&Ct(i,"background-image","url("+z[3]+")"),I&32&&e(l,"href",z[5])},i:zt,o:zt,d(z){z&&a(l)}}}function Ca(s,l,i){let{name:u,role:b,theme:m,img:f,icon:w,n:g,path:v}=l,x;const _={figma:"/assets/svg/figma.svg",xd:"/assets/svg/xd.svg",code:"/assets/svg/code.svg"};if(g==="1")switch(w){case"figma":x=_.figma;break;case"xd":x=_.xd;break}else x=_.figma;return s.$$set=c=>{"name"in c&&i(0,u=c.name),"role"in c&&i(1,b=c.role),"theme"in c&&i(2,m=c.theme),"img"in c&&i(3,f=c.img),"icon"in c&&i(7,w=c.icon),"n"in c&&i(4,g=c.n),"path"in c&&i(5,v=c.path)},[u,b,m,f,g,v,x,w]}class qt extends Ds{constructor(l){super(),Bs(this,l,Ca,Oa,Ms,{name:0,role:1,theme:2,img:3,icon:7,n:4,path:5})}}function Aa(s){let l,i,u,b,m,f,w,g,v,x,_,c,T,H,j,U,z,I,V,O,F,S,J,E,C,A,ae,p,y,K,He,P,ve,Z,Re;return{c(){l=n("div"),i=n("div"),u=n("div"),b=B("Social Links"),m=d(),f=n("button"),w=L("svg"),g=L("path"),v=d(),x=n("div"),_=n("a"),c=n("div"),T=L("svg"),H=L("path"),j=d(),U=n("div"),z=B("Linkedin"),I=d(),V=L("svg"),O=L("path"),F=d(),S=n("div"),J=d(),E=n("a"),C=n("div"),A=L("svg"),ae=L("path"),p=d(),y=n("div"),K=B("Spotify"),He=d(),P=L("svg"),ve=L("path"),this.h()},l(G){l=o(G,"DIV",{class:!0,"data-active":!0});var re=r(l);i=o(re,"DIV",{class:!0});var q=r(i);u=o(q,"DIV",{class:!0});var be=r(u);b=M(be,"Social Links"),be.forEach(a),m=h(q),f=o(q,"BUTTON",{class:!0});var we=r(f);w=D(we,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var We=r(w);g=D(We,"path",{d:!0}),r(g).forEach(a),We.forEach(a),we.forEach(a),q.forEach(a),v=h(re),x=o(re,"DIV",{});var ne=r(x);_=o(ne,"A",{href:!0,target:!0,class:!0});var R=r(_);c=o(R,"DIV",{class:!0});var $=r(c);T=D($,"svg",{xmlns:!0,viewBox:!0,class:!0});var oe=r(T);H=D(oe,"path",{d:!0}),r(H).forEach(a),oe.forEach(a),j=h($),U=o($,"DIV",{});var ht=r(U);z=M(ht,"Linkedin"),ht.forEach(a),$.forEach(a),I=h(R),V=D(R,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var Je=r(V);O=D(Je,"path",{d:!0}),r(O).forEach(a),Je.forEach(a),R.forEach(a),F=h(ne),S=o(ne,"DIV",{class:!0}),r(S).forEach(a),J=h(ne),E=o(ne,"A",{href:!0,target:!0,class:!0});var X=r(E);C=o(X,"DIV",{class:!0});var le=r(C);A=D(le,"svg",{xmlns:!0,viewBox:!0,class:!0});var Ye=r(A);ae=D(Ye,"path",{d:!0}),r(ae).forEach(a),Ye.forEach(a),p=h(le),y=o(le,"DIV",{});var Qe=r(y);K=M(Qe,"Spotify"),Qe.forEach(a),le.forEach(a),He=h(X),P=D(X,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var Le=r(P);ve=D(Le,"path",{d:!0}),r(ve).forEach(a),Le.forEach(a),X.forEach(a),ne.forEach(a),re.forEach(a),this.h()},h(){e(u,"class","text-2xl font-bold"),e(g,"d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"),e(w,"xmlns","http://www.w3.org/2000/svg"),e(w,"height","1em"),e(w,"viewBox","0 0 384 512"),e(w,"class","fill-zinc-800 dark:fill-zinc-300 h-6 w-6"),e(f,"class","flex justify-center items-center"),e(i,"class","flex justify-between items-center"),e(H,"d","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"),e(T,"xmlns","http://www.w3.org/2000/svg"),e(T,"viewBox","0 0 448 512"),e(T,"class","w-5 h-5 fill-zinc-700 dark:fill-zinc-200"),e(c,"class","flex gap-4"),e(O,"d","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"),e(V,"xmlns","http://www.w3.org/2000/svg"),e(V,"height","1em"),e(V,"viewBox","0 0 512 512"),e(V,"class","fill-zinc-600 dark:fill-zinc-400"),e(_,"href","https://www.linkedin.com/in/stefan-guan-a72224228/"),e(_,"target","_blank"),e(_,"class","bg-background-200/50 dark:bg-background-700/50 rounded-tl-md rounded-tr-md py-4 px-4 flex justify-between items-center md:gap-24 fill-zinc-300 hover:bg-background-400/50 dark:hover:bg-background-500/50 transition ease-ios-smooth duration-500"),e(S,"class","h-[1px] bg-zinc-400 dark:bg-background-500"),e(ae,"d","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"),e(A,"xmlns","http://www.w3.org/2000/svg"),e(A,"viewBox","0 0 496 512"),e(A,"class","w-5 h-5 fill-zinc-700 dark:fill-zinc-200"),e(C,"class","flex gap-4"),e(ve,"d","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"),e(P,"xmlns","http://www.w3.org/2000/svg"),e(P,"height","1em"),e(P,"viewBox","0 0 512 512"),e(P,"class","fill-zinc-600 dark:fill-zinc-400"),e(E,"href","https://open.spotify.com/user/ogeixfe13xaxzaks35agfcpbp"),e(E,"target","_blank"),e(E,"class","bg-background-200/50 dark:bg-background-700/50 rounded-bl-md rounded-br-md py-4 px-4 flex justify-between items-center md:gap-24 fill-zinc-300 hover:bg-background-400/50 dark:hover:bg-background-500/50 transition ease-ios-smooth duration-500"),e(l,"class","absolute w-full h-full dark:bg-nav-800 backdrop-blur-lg z-30 p-8 flex flex-col gap-8 data-[active='false']:opacity-0 hidden transition ease-ios-smooth duration-700 rounded-xl"),e(l,"data-active","false")},m(G,re){yt(G,l,re),t(l,i),t(i,u),t(u,b),t(i,m),t(i,f),t(f,w),t(w,g),t(l,v),t(l,x),t(x,_),t(_,c),t(c,T),t(T,H),t(c,j),t(c,U),t(U,z),t(_,I),t(_,V),t(V,O),t(x,F),t(x,S),t(x,J),t(x,E),t(E,C),t(C,A),t(A,ae),t(C,p),t(C,y),t(y,K),t(E,He),t(E,P),t(P,ve),s[2](l),Z||(Re=Q(f,"click",s[0]),Z=!0)},p:zt,i:zt,o:zt,d(G){G&&a(l),s[2](null),Z=!1,Re()}}}function Pa(s,l,i){let u;function b(){u.getAttribute("data-active")==="false"?(u.classList.remove("hidden"),setTimeout(()=>{u.setAttribute("data-active",!0)},100)):(u.setAttribute("data-active",!1),setTimeout(()=>{u.classList.add("hidden")},400))}function m(f){Se[f?"unshift":"push"](()=>{u=f,i(1,u)})}return[b,u,m]}class Na extends Ds{constructor(l){super(),Bs(this,l,Pa,Aa,Ms,{toggleOverlay:0})}get toggleOverlay(){return this.$$.ctx[0]}}const It={_origin:"https://api.emailjs.com"},Ua=(s,l="https://api.emailjs.com")=>{It._userID=s,It._origin=l},va=(s,l,i)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!l)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ma{constructor(l){this.status=l?l.status:0,this.text=l?l.responseText:"Network Error"}}const ba=(s,l,i={})=>new Promise((u,b)=>{const m=new XMLHttpRequest;m.addEventListener("load",({target:f})=>{const w=new ma(f);w.status===200||w.text==="OK"?u(w):b(w)}),m.addEventListener("error",({target:f})=>{b(new ma(f))}),m.open("POST",It._origin+s,!0),Object.keys(i).forEach(f=>{m.setRequestHeader(f,i[f])}),m.send(l)}),qa=(s,l,i,u)=>{const b=u||It._userID;return va(b,s,l),ba("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:b,service_id:s,template_id:l,template_params:i}),{"Content-type":"application/json"})},Xa=s=>{let l;if(typeof s=="string"?l=document.querySelector(s):l=s,!l||l.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return l},Fa=(s,l,i,u)=>{const b=u||It._userID,m=Xa(i);va(b,s,l);const f=new FormData(m);return f.append("lib_version","3.11.0"),f.append("service_id",s),f.append("template_id",l),f.append("user_id",b),ba("/api/v1.0/email/send-form",f)},Ga={init:Ua,send:qa,sendForm:Fa};function Ra(s){let l,i,u,b,m,f,w,g,v,x,_,c,T,H,j,U,z,I,V,O,F,S,J,E,C,A,ae,p,y,K,He,P,ve,Z,Re,G,re,q,be,we,We,ne,R,$,oe,ht,Je,X,le,Ye,Qe,Le,Gt,Rt,Oe,Wt,Ce,Jt,Yt,Qt,ee,Ke,Kt,Zt,De,ie,ft,$t,es,gt,ts,ss,Be,_e,xe,mt,as,pt,rs,ns,ke,Ee,vt,os,bt,ls,is,Ze,N,ce,ue,cs,Ae,us,ds,Pe,ye,wt,hs,de,he,fs,Ne,gs,ms,Ue,ze,_t,ps,fe,ge,vs,qe,bs,ws,Xe,Ie,xt,_s,me,te,xs,Fe,ks,Es,Ge,Ve,kt,ys,Me,Vt,$e,zs,Ts;function wa(k){s[14](k)}let js={};s[9]!==void 0&&(js.updateActive=s[9]),m=new Va({props:js}),Se.push(()=>xa(m,"updateActive",wa));let _a={};return S=new Na({props:_a}),s[15](S),K=new qt({props:{name:"SwiftVote",role:"UX Case Study",theme:"rgba(0,100,100,0.5)",img:"/assets/img/index/index-swiftvote.png",path:"/swiftvote",icon:"figma",n:"1"}}),P=new qt({props:{name:"Oasis",role:"UX Case Study",theme:"rgba(50,0,100,0.5)",img:"/assets/img/index/index-oasis.png",icon:"xd",path:"/oasis",n:"1"}}),Z=new qt({props:{name:"Yopo",role:"Web Design",theme:"rgba(95,50,0,0.5)",img:"/assets/img/index/index-yopo.png",icon:"codefigma",path:"/yopo",n:"2"}}),G=new qt({props:{name:"Munch",role:"UX Case Study",theme:"rgba(0,50,100,0.5)",img:"/assets/img/index/index-munch.png",icon:"figma",path:"/munch",n:"1"}}),{c(){l=n("meta"),i=n("meta"),u=n("meta"),b=d(),ot(m.$$.fragment),w=d(),g=n("div"),v=n("section"),x=n("h1"),_=B("Hi, I am Stefan Guan, a UX/Web Designer based in Surrey, BC."),c=d(),T=n("div"),H=d(),j=n("div"),U=d(),z=n("div"),I=n("button"),V=L("svg"),O=L("path"),F=d(),ot(S.$$.fragment),J=d(),E=n("section"),C=n("div"),A=n("h2"),ae=B("Projects"),p=d(),y=n("div"),ot(K.$$.fragment),He=d(),ot(P.$$.fragment),ve=d(),ot(Z.$$.fragment),Re=d(),ot(G.$$.fragment),re=d(),q=n("section"),be=n("div"),we=n("h2"),We=B("About Me"),ne=d(),R=n("div"),$=n("div"),oe=n("img"),Je=d(),X=n("div"),le=n("p"),Ye=B(`I am a UX Designer based in Surrey, BC. My personal mission is to\r
          craft brilliant experiences that positively impacts the user.`),Qe=d(),Le=n("p"),Gt=B(`I have a passion for understanding human behaviour. I enjoy breaking\r
          down the needs of users to generate ways of solving problems. By\r
          combining user research and user-centric design, I can create digital\r
          experiences that benefit lives.`),Rt=d(),Oe=n("p"),Wt=B(`In my free time, I love learning new technologies. For instance, I am\r
          learning how to use `),Ce=n("a"),Jt=B("sveltekit"),Yt=B(` (what this website runs on!). I am always looking for ways to improve\r
          myself, whether through going to the gym or continuously studying.`),Qt=d(),ee=n("section"),Ke=n("h2"),Kt=B("Contact"),Zt=d(),De=n("div"),ie=n("div"),ft=n("p"),$t=B("Let's get in touch!"),es=d(),gt=n("p"),ts=B(`I would love the chance to get in contact with you! You may use the\r
          form for convenience or you can connect with me using the links below.`),ss=d(),Be=n("div"),_e=n("a"),xe=L("svg"),mt=L("path"),as=d(),pt=n("div"),rs=B("stefan.guan@outlook.com"),ns=d(),ke=n("a"),Ee=L("svg"),vt=L("path"),os=d(),bt=n("div"),ls=B("Stefan Guan"),is=d(),Ze=n("div"),N=n("form"),ce=n("div"),ue=n("input"),cs=d(),Ae=n("label"),us=B("Name"),ds=d(),Pe=n("button"),ye=L("svg"),wt=L("path"),hs=d(),de=n("div"),he=n("input"),fs=d(),Ne=n("label"),gs=B("Email"),ms=d(),Ue=n("button"),ze=L("svg"),_t=L("path"),ps=d(),fe=n("div"),ge=n("input"),vs=d(),qe=n("label"),bs=B("Subject"),ws=d(),Xe=n("button"),Ie=L("svg"),xt=L("path"),_s=d(),me=n("div"),te=n("textarea"),xs=d(),Fe=n("label"),ks=B("Message"),Es=d(),Ge=n("button"),Ve=L("svg"),kt=L("path"),ys=d(),Me=n("button"),Vt=B(s[6]),this.h()},l(k){const W=ka("svelte-1pped9n",document.head);l=o(W,"META",{name:!0,content:!0}),i=o(W,"META",{name:!0,content:!0}),u=o(W,"META",{name:!0,content:!0}),W.forEach(a),b=h(k),lt(m.$$.fragment,k),w=h(k),g=o(k,"DIV",{class:!0});var se=r(g);v=o(se,"SECTION",{class:!0,id:!0});var Y=r(v);x=o(Y,"H1",{class:!0});var Ss=r(x);_=M(Ss,"Hi, I am Stefan Guan, a UX/Web Designer based in Surrey, BC."),Ss.forEach(a),c=h(Y),T=o(Y,"DIV",{class:!0}),r(T).forEach(a),H=h(Y),j=o(Y,"DIV",{class:!0}),r(j).forEach(a),U=h(Y),z=o(Y,"DIV",{class:!0});var Hs=r(z);I=o(Hs,"BUTTON",{class:!0});var Os=r(I);V=D(Os,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var Cs=r(V);O=D(Cs,"path",{d:!0}),r(O).forEach(a),Cs.forEach(a),Os.forEach(a),Hs.forEach(a),F=h(Y),lt(S.$$.fragment,Y),Y.forEach(a),J=h(se),E=o(se,"SECTION",{class:!0,id:!0});var Lt=r(E);C=o(Lt,"DIV",{class:!0});var As=r(C);A=o(As,"H2",{class:!0});var Ps=r(A);ae=M(Ps,"Projects"),Ps.forEach(a),As.forEach(a),p=h(Lt),y=o(Lt,"DIV",{class:!0});var Te=r(y);lt(K.$$.fragment,Te),He=h(Te),lt(P.$$.fragment,Te),ve=h(Te),lt(Z.$$.fragment,Te),Re=h(Te),lt(G.$$.fragment,Te),Te.forEach(a),Lt.forEach(a),re=h(se),q=o(se,"SECTION",{class:!0,id:!0});var Dt=r(q);be=o(Dt,"DIV",{class:!0});var Ns=r(be);we=o(Ns,"H2",{class:!0});var Us=r(we);We=M(Us,"About Me"),Us.forEach(a),Ns.forEach(a),ne=h(Dt),R=o(Dt,"DIV",{class:!0});var Bt=r(R);$=o(Bt,"DIV",{class:!0});var qs=r($);oe=o(qs,"IMG",{src:!0,alt:!0,class:!0}),qs.forEach(a),Je=h(Bt),X=o(Bt,"DIV",{class:!0});var et=r(X);le=o(et,"P",{});var Xs=r(le);Ye=M(Xs,`I am a UX Designer based in Surrey, BC. My personal mission is to\r
          craft brilliant experiences that positively impacts the user.`),Xs.forEach(a),Qe=h(et),Le=o(et,"P",{});var Fs=r(Le);Gt=M(Fs,`I have a passion for understanding human behaviour. I enjoy breaking\r
          down the needs of users to generate ways of solving problems. By\r
          combining user research and user-centric design, I can create digital\r
          experiences that benefit lives.`),Fs.forEach(a),Rt=h(et),Oe=o(et,"P",{});var Mt=r(Oe);Wt=M(Mt,`In my free time, I love learning new technologies. For instance, I am\r
          learning how to use `),Ce=o(Mt,"A",{href:!0,class:!0});var Gs=r(Ce);Jt=M(Gs,"sveltekit"),Gs.forEach(a),Yt=M(Mt,` (what this website runs on!). I am always looking for ways to improve\r
          myself, whether through going to the gym or continuously studying.`),Mt.forEach(a),et.forEach(a),Bt.forEach(a),Dt.forEach(a),Qt=h(se),ee=o(se,"SECTION",{class:!0,id:!0});var Tt=r(ee);Ke=o(Tt,"H2",{class:!0});var Rs=r(Ke);Kt=M(Rs,"Contact"),Rs.forEach(a),Zt=h(Tt),De=o(Tt,"DIV",{class:!0});var jt=r(De);ie=o(jt,"DIV",{class:!0});var tt=r(ie);ft=o(tt,"P",{});var Ws=r(ft);$t=M(Ws,"Let's get in touch!"),Ws.forEach(a),es=h(tt),gt=o(tt,"P",{});var Js=r(gt);ts=M(Js,`I would love the chance to get in contact with you! You may use the\r
          form for convenience or you can connect with me using the links below.`),Js.forEach(a),ss=h(tt),Be=o(tt,"DIV",{class:!0});var St=r(Be);_e=o(St,"A",{href:!0,class:!0});var Ht=r(_e);xe=D(Ht,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var Ys=r(xe);mt=D(Ys,"path",{d:!0}),r(mt).forEach(a),Ys.forEach(a),as=h(Ht),pt=o(Ht,"DIV",{});var Qs=r(pt);rs=M(Qs,"stefan.guan@outlook.com"),Qs.forEach(a),Ht.forEach(a),ns=h(St),ke=o(St,"A",{href:!0,class:!0});var Ot=r(ke);Ee=D(Ot,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var Ks=r(Ee);vt=D(Ks,"path",{d:!0}),r(vt).forEach(a),Ks.forEach(a),os=h(Ot),bt=o(Ot,"DIV",{});var Zs=r(bt);ls=M(Zs,"Stefan Guan"),Zs.forEach(a),Ot.forEach(a),St.forEach(a),tt.forEach(a),is=h(jt),Ze=o(jt,"DIV",{class:!0});var $s=r(Ze);N=o($s,"FORM",{class:!0});var pe=r(N);ce=o(pe,"DIV",{class:!0});var st=r(ce);ue=o(st,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),cs=h(st),Ae=o(st,"LABEL",{for:!0,class:!0});var ea=r(Ae);us=M(ea,"Name"),ea.forEach(a),ds=h(st),Pe=o(st,"BUTTON",{class:!0});var ta=r(Pe);ye=D(ta,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var sa=r(ye);wt=D(sa,"path",{d:!0}),r(wt).forEach(a),sa.forEach(a),ta.forEach(a),st.forEach(a),hs=h(pe),de=o(pe,"DIV",{class:!0});var at=r(de);he=o(at,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),fs=h(at),Ne=o(at,"LABEL",{for:!0,class:!0});var aa=r(Ne);gs=M(aa,"Email"),aa.forEach(a),ms=h(at),Ue=o(at,"BUTTON",{class:!0});var ra=r(Ue);ze=D(ra,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var na=r(ze);_t=D(na,"path",{d:!0}),r(_t).forEach(a),na.forEach(a),ra.forEach(a),at.forEach(a),ps=h(pe),fe=o(pe,"DIV",{class:!0});var rt=r(fe);ge=o(rt,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),vs=h(rt),qe=o(rt,"LABEL",{for:!0,class:!0});var oa=r(qe);bs=M(oa,"Subject"),oa.forEach(a),ws=h(rt),Xe=o(rt,"BUTTON",{class:!0});var la=r(Xe);Ie=D(la,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var ia=r(Ie);xt=D(ia,"path",{d:!0}),r(xt).forEach(a),ia.forEach(a),la.forEach(a),rt.forEach(a),_s=h(pe),me=o(pe,"DIV",{class:!0});var nt=r(me);te=o(nt,"TEXTAREA",{name:!0,id:!0,oninput:!0,class:!0,placeholder:!0}),r(te).forEach(a),xs=h(nt),Fe=o(nt,"LABEL",{for:!0,class:!0});var ca=r(Fe);ks=M(ca,"Message"),ca.forEach(a),Es=h(nt),Ge=o(nt,"BUTTON",{class:!0});var ua=r(Ge);Ve=D(ua,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var da=r(Ve);kt=D(da,"path",{d:!0}),r(kt).forEach(a),da.forEach(a),ua.forEach(a),nt.forEach(a),ys=h(pe),Me=o(pe,"BUTTON",{class:!0,"data-state":!0});var ha=r(Me);Vt=M(ha,s[6]),ha.forEach(a),pe.forEach(a),$s.forEach(a),jt.forEach(a),Tt.forEach(a),se.forEach(a),this.h()},h(){document.title="Stefan Guan's Portfolio",e(l,"name","description"),e(l,"content","Stefan Guan's UX Portfolio"),e(i,"name","keywords"),e(i,"content","UX Design, Portfolio, Case Studies"),e(u,"name","author"),e(u,"content","Stefan Guan"),e(x,"class","z-10 font-thin text-3xl z-20"),e(T,"class","absolute h-full w-full bg-gradient-to-tl from-main-100 to-violet-600 dark:to-violet-900 brightness-150 saturate-[0.55] dark:brightness-75 dark:saturate-100 rounded-2xl z-10"),e(j,"class","absolute h-full w-full bg-gradient-to-tl from-main-100 to-violet-600 dark:to-violet-900 brightness-150 saturate-[0.55] dark:brightness-50 dark:saturate-100 translate-y-2 blur-md opacity-40"),e(O,"d","M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"),e(V,"xmlns","http://www.w3.org/2000/svg"),e(V,"height","1em"),e(V,"viewBox","0 0 448 512"),e(V,"class","h-6 w-6 fill-zinc-300"),e(I,"class","flex gap-3 justify-center items-center rounded-full p-3 backdrop-blur-md bg-[rgba(25,25,25,0.5)] hover:bg-[rgba(90,90,90,0.5)] hover:shadow-lg transition ease-ios-smooth duration-500"),e(z,"class","absolute top-0 right-0 mt-6 mr-6 z-20"),e(v,"class","relative flex flex-col justify-center items-center min-h-[80vh] mt-4 p-10 rounded-2xl w-full"),e(v,"id","home"),e(A,"class","text-2xl font-bold"),e(C,"class","flex justify-between"),e(y,"class","grid gap-6 h-full w-full content-start grid-rows-auto md:grid-cols-2 md:grid-rows:2 md:content-stretch"),e(E,"class","h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col gap-6 w-full md:p-10"),e(E,"id","projects"),e(we,"class","text-2xl font-bold"),e(be,"class","flex justify-between"),Xt(oe.src,ht="/assets/img/index/profile-img.webp")||e(oe,"src",ht),e(oe,"alt","Portait of myself"),e(oe,"class","rounded-md h-56 w-56"),e($,"class","self-center justify-self-center"),e(Ce,"href","https://kit.svelte.dev/"),e(Ce,"class","underline"),e(X,"class","flex flex-col gap-6 text-center md:text-start"),e(R,"class","grid gap-6 h-max w-full md:grid-cols-2"),e(q,"class","h-full py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 flex flex-col gap-6 w-full md:p-10"),e(q,"id","aboutme"),e(Ke,"class","text-2xl font-bold mb-6"),e(mt,"d","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"),e(xe,"xmlns","http://www.w3.org/2000/svg"),e(xe,"height","1em"),e(xe,"viewBox","0 0 512 512"),e(xe,"class","w-5 h-5"),e(_e,"href","mailto:stefan.guan@outlook.com"),e(_e,"class","flex gap-2 text-sm items-center fill-zinc-700 dark:fill-zinc-300 w-max"),e(vt,"d","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"),e(Ee,"xmlns","http://www.w3.org/2000/svg"),e(Ee,"height","1em"),e(Ee,"viewBox","0 0 448 512"),e(Ee,"class","w-5 h-5"),e(ke,"href","https://www.linkedin.com/in/stefan-guan-a72224228/"),e(ke,"class","flex gap-2 text-sm items-center fill-zinc-700 dark:fill-zinc-300 w-max"),e(Be,"class","flex flex-col gap-4"),e(ie,"class","flex flex-col bg-background-100 dark:bg-background-600 rounded-md p-4 w-full gap-4"),e(ue,"type","text"),e(ue,"name","user_name"),e(ue,"id","name"),e(ue,"class","block focus:shadow-md bg-transparent rounded-md pl-3 pr-9 pt-4 pb-2 peer w-full border-2 border-background-400 dark:border-background-500 focus:outline-none focus:border-main-100 focus:border-1 focus:ring-0 focus:shadow-md transition ease-ios-smooth duration-500"),e(ue,"placeholder"," "),ue.required=!0,e(Ae,"for","name"),e(Ae,"class","absolute text-sm transition ease-ios-smooth duration-500 left-[0.9rem] peer-focus:text-main-100 dark:peer-focus:text-cyan-400 -translate-y-4 scale-75 top-4 select-none text-zinc-800 dark:text-zinc-300 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:scale-75 origin-[0] peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-600 dark:peer-placeholder-shown:text-zinc-400"),e(wt,"d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"),e(ye,"xmlns","http://www.w3.org/2000/svg"),e(ye,"height","1em"),e(ye,"viewBox","0 0 384 512"),e(ye,"class","h-3 w-3 fill-zinc-600"),e(Pe,"class","absolute top-[50%] right-3 translate-y-[-50%] inline-block peer-placeholder-shown:hidden p-1 rounded-full bg-background-400/70"),e(ce,"class","relative"),e(he,"type","email"),e(he,"name","user_email"),e(he,"id","email"),e(he,"class","block focus:shadow-md bg-transparent rounded-md pl-3 pr-9 pt-4 pb-2 peer w-full border-2 border-background-400 dark:border-background-500 focus:outline-none focus:border-main-100 focus:border-1 focus:ring-0 focus:shadow-md transition ease-ios-smooth duration-500"),e(he,"placeholder"," "),he.required=!0,e(Ne,"for","email"),e(Ne,"class","absolute text-sm transition ease-ios-smooth duration-500 left-[0.9rem] peer-focus:text-main-100 dark:peer-focus:text-cyan-400 -translate-y-4 scale-75 top-4 select-none text-zinc-800 dark:text-zinc-300 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:scale-75 origin-[0] peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-600 dark:peer-placeholder-shown:text-zinc-400"),e(_t,"d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"),e(ze,"xmlns","http://www.w3.org/2000/svg"),e(ze,"height","1em"),e(ze,"viewBox","0 0 384 512"),e(ze,"class","h-3 w-3 fill-zinc-600"),e(Ue,"class","absolute top-[50%] right-3 translate-y-[-50%] inline-block peer-placeholder-shown:hidden p-1 rounded-full bg-background-400/70"),e(de,"class","relative"),e(ge,"type","text"),e(ge,"name","subject"),e(ge,"id","subject"),e(ge,"class","block focus:shadow-md bg-transparent rounded-md pl-3 pr-9 pt-4 pb-2 peer w-full border-2 border-background-400 dark:border-background-500 focus:outline-none focus:border-main-100 focus:border-1 focus:ring-0 focus:shadow-md transition ease-ios-smooth duration-500"),e(ge,"placeholder"," "),ge.required=!0,e(qe,"for","subject"),e(qe,"class","absolute text-sm transition ease-ios-smooth duration-500 left-[0.9rem] peer-focus:text-main-100 dark:peer-focus:text-cyan-400 -translate-y-4 scale-75 top-4 select-none text-zinc-800 dark:text-zinc-300 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:scale-75 origin-[0] peer-placeholder-shown:-translate-y-[50%] peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-600 dark:peer-placeholder-shown:text-zinc-400"),e(xt,"d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"),e(Ie,"xmlns","http://www.w3.org/2000/svg"),e(Ie,"height","1em"),e(Ie,"viewBox","0 0 384 512"),e(Ie,"class","h-3 w-3 fill-zinc-600"),e(Xe,"class","absolute top-[50%] right-3 translate-y-[-50%] inline-block peer-placeholder-shown:hidden p-1 rounded-full bg-background-400/70"),e(fe,"class","relative"),e(te,"name","message"),e(te,"id","message"),e(te,"oninput","this.style.height = '';this.style.height = this.scrollHeight + 'px';"),e(te,"class","block overflow-y-hidden focus:shadow-md bg-transparent rounded-md pl-3 pr-9 pt-4 pb-2 peer w-full border-2 border-background-400 dark:border-background-500 focus:outline-none focus:border-main-100 focus:border-1 focus:ring-0 focus:shadow-md transition ease-ios-smooth duration-500"),e(te,"placeholder"," "),te.required=!0,e(Fe,"for","message"),e(Fe,"class","absolute text-sm transition ease-ios-smooth duration-500 left-[0.9rem] peer-focus:text-main-100 dark:peer-focus:text-cyan-400 -translate-y-4 scale-75 top-4 select-none text-zinc-800 dark:text-zinc-300 peer-focus:-translate-y-4 peer-focus:top-4 peer-focus:scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-600 dark:peer-placeholder-shown:text-zinc-400"),e(kt,"d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"),e(Ve,"xmlns","http://www.w3.org/2000/svg"),e(Ve,"height","1em"),e(Ve,"viewBox","0 0 384 512"),e(Ve,"class","h-3 w-3 fill-zinc-600"),e(Ge,"class","absolute top-4 right-3 translate-y-0 inline-block peer-placeholder-shown:hidden p-1 rounded-full bg-background-400/70"),e(me,"class","relative"),e(Me,"class","bg-main-100 rounded-md p-4 text-zinc-100 transform ease-ios-smooth duration-500 capitalize data-[state='submit']:hover:shadow-md data-[state='submit']:hover:bg-main-100/70 data-[state='submitting']:bg-main-100/50 data-[state='submitting']:pointer-events-none data-[state='error']:bg-red-500 dark:data-[state='error']:bg-red-900/80 data-[state='error']:pointer-events-none data-[state='success']:bg-green-600 dark:data-[state='success']:bg-green-700 data-[state='success']:pointer-events-none"),e(Me,"data-state",s[6]),e(N,"class","flex flex-col gap-2"),e(Ze,"class","w-full"),e(De,"class","flex flex-col md:flex-row gap-6"),e(ee,"class","h-max py-8 px-4 bg-background-200 dark:bg-background-700 rounded-2xl scroll-mt-11 w-full md:p-10"),e(ee,"id","contact"),e(g,"class","bg-background-300 dark:bg-background-900 max-w-[1280px] flex flex-col gap-6 text-zinc-800 dark:text-zinc-200 mx-auto md:pl-24")},m(k,W){t(document.head,l),t(document.head,i),t(document.head,u),yt(k,b,W),it(m,k,W),yt(k,w,W),yt(k,g,W),t(g,v),t(v,x),t(x,_),t(v,c),t(v,T),t(v,H),t(v,j),t(v,U),t(v,z),t(z,I),t(I,V),t(V,O),t(v,F),it(S,v,null),t(g,J),t(g,E),t(E,C),t(C,A),t(A,ae),t(E,p),t(E,y),it(K,y,null),t(y,He),it(P,y,null),t(y,ve),it(Z,y,null),t(y,Re),it(G,y,null),t(g,re),t(g,q),t(q,be),t(be,we),t(we,We),t(q,ne),t(q,R),t(R,$),t($,oe),t(R,Je),t(R,X),t(X,le),t(le,Ye),t(X,Qe),t(X,Le),t(Le,Gt),t(X,Rt),t(X,Oe),t(Oe,Wt),t(Oe,Ce),t(Ce,Jt),t(Oe,Yt),t(g,Qt),t(g,ee),t(ee,Ke),t(Ke,Kt),t(ee,Zt),t(ee,De),t(De,ie),t(ie,ft),t(ft,$t),t(ie,es),t(ie,gt),t(gt,ts),t(ie,ss),t(ie,Be),t(Be,_e),t(_e,xe),t(xe,mt),t(_e,as),t(_e,pt),t(pt,rs),t(Be,ns),t(Be,ke),t(ke,Ee),t(Ee,vt),t(ke,os),t(ke,bt),t(bt,ls),t(De,is),t(De,Ze),t(Ze,N),t(N,ce),t(ce,ue),s[19](ue),t(ce,cs),t(ce,Ae),t(Ae,us),t(ce,ds),t(ce,Pe),t(Pe,ye),t(ye,wt),t(N,hs),t(N,de),t(de,he),s[20](he),t(de,fs),t(de,Ne),t(Ne,gs),t(de,ms),t(de,Ue),t(Ue,ze),t(ze,_t),t(N,ps),t(N,fe),t(fe,ge),s[21](ge),t(fe,vs),t(fe,qe),t(qe,bs),t(fe,ws),t(fe,Xe),t(Xe,Ie),t(Ie,xt),t(N,_s),t(N,me),t(me,te),s[22](te),t(me,xs),t(me,Fe),t(Fe,ks),t(me,Es),t(me,Ge),t(Ge,Ve),t(Ve,kt),t(N,ys),t(N,Me),t(Me,Vt),s[23](N),$e=!0,zs||(Ts=[Q(I,"click",function(){Et(s[0].toggleOverlay())&&s[0].toggleOverlay().apply(this,arguments)}),At(Ut.call(null,v,s[10])),Q(v,"inview_enter",s[16]),At(Ut.call(null,E,s[10])),Q(E,"inview_enter",s[17]),At(Ut.call(null,q,s[10])),Q(q,"inview_enter",s[18]),Q(Pe,"click",function(){Et(s[1].value="")&&(s[1].value="").apply(this,arguments)}),Q(Ue,"click",function(){Et(s[2].value="")&&(s[2].value="").apply(this,arguments)}),Q(Xe,"click",function(){Et(s[3].value="")&&(s[3].value="").apply(this,arguments)}),Q(Ge,"click",function(){Et(s[4].value="")&&(s[4].value="").apply(this,arguments)}),Q(N,"submit",Ea(s[13])),Q(N,"submit",s[12]),At(Ut.call(null,ee,s[10])),Q(ee,"inview_enter",s[24])],zs=!0)},p(k,[W]){s=k;const se={};!f&&W&512&&(f=!0,se.updateActive=s[9],ya(()=>f=!1)),m.$set(se);const Y={};S.$set(Y),(!$e||W&64)&&Vs(Vt,s[6]),(!$e||W&64)&&e(Me,"data-state",s[6])},i(k){$e||(ct(m.$$.fragment,k),ct(S.$$.fragment,k),ct(K.$$.fragment,k),ct(P.$$.fragment,k),ct(Z.$$.fragment,k),ct(G.$$.fragment,k),$e=!0)},o(k){ut(m.$$.fragment,k),ut(S.$$.fragment,k),ut(K.$$.fragment,k),ut(P.$$.fragment,k),ut(Z.$$.fragment,k),ut(G.$$.fragment,k),$e=!1},d(k){a(l),a(i),a(u),k&&a(b),dt(m,k),k&&a(w),k&&a(g),s[15](null),dt(S),dt(K),dt(P),dt(Z),dt(G),s[19](null),s[20](null),s[21](null),s[22](null),s[23](null),zs=!1,za(Ts)}}}function Wa(s,l,i){let u,b,m,f,w,g,v="submit",x;const _={threshold:.4,rootMargin:"0px"};let c,T;function H(){T(c)}function j(){i(6,v="submitting");var p={user_name:x.elements.name.value,user_email:x.elements.email.value,subject:x.elements.subject.value,message:x.elements.message.value};Ga.send("service_q42ebsg","template_1fdyrau",p,"5jl6JNXBemLoWgQGo").then(function(){i(6,v="success"),setTimeout(()=>{i(6,v="submit")},5e3),console.log("success")},function(y){setTimeout(()=>{i(6,v="error")},2e3),setTimeout(()=>{i(6,v="submit")},5e3),console.log("error",y)})}function U(p){Ia.call(this,s,p)}function z(p){T=p,i(9,T)}function I(p){Se[p?"unshift":"push"](()=>{u=p,i(0,u)})}const V=p=>{const{inView:y}=p.detail;i(5,g=y),i(8,c=0),H()},O=p=>{const{inView:y}=p.detail;i(5,g=y),i(8,c=1),H()},F=p=>{const{inView:y}=p.detail;i(5,g=y),i(8,c=2),H()};function S(p){Se[p?"unshift":"push"](()=>{b=p,i(1,b)})}function J(p){Se[p?"unshift":"push"](()=>{m=p,i(2,m)})}function E(p){Se[p?"unshift":"push"](()=>{f=p,i(3,f)})}function C(p){Se[p?"unshift":"push"](()=>{w=p,i(4,w)})}function A(p){Se[p?"unshift":"push"](()=>{x=p,i(7,x)})}return[u,b,m,f,w,g,v,x,c,T,_,H,j,U,z,I,V,O,F,S,J,E,C,A,p=>{const{inView:y}=p.detail;i(5,g=y),i(8,c=3),H()}]}class Qa extends Ds{constructor(l){super(),Bs(this,l,Wa,Ra,Ms,{})}}export{Qa as component};
