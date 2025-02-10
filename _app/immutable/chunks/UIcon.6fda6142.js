import{t as F,a as I,S as L,i as P}from"./index.28409b7f.js";import{u as E,s as Q,f as K,g as V,h as B,d as C,j as T,i as G,n as R}from"./scheduler.7a274a43.js";import{w as H,b as O}from"./paths.5eb574b4.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,t){F(e,1,1,()=>{t.delete(e.key)})}function ts(e,t,a,n,c,i,r,S,m,h,g,v){let f=e.length,u=i.length,d=f;const b={};for(;d--;)b[e[d].key]=d;const y=[],k=new Map,J=new Map,j=[];for(d=u;d--;){const o=v(c,i,d),l=a(o);let p=r.get(l);p?n&&j.push(()=>p.p(o,t)):(p=h(l,o),p.c()),k.set(l,y[d]=p),l in b&&J.set(l,Math.abs(d-b[l]))}const M=new Set,N=new Set;function A(o){I(o,1),o.m(S,g),r.set(o.key,o),g=o.first,u--}for(;f&&u;){const o=y[u-1],l=e[f-1],p=o.key,w=l.key;o===l?(g=o.first,f--,u--):k.has(w)?!r.has(p)||M.has(p)?A(o):N.has(w)?f--:J.get(p)>J.get(w)?(N.add(p),A(o)):(M.add(w),f--):(m(l,r),f--)}for(;f--;){const o=e[f];k.has(o.key)||m(o,r)}for(;u;)A(y[u-1]);return E(j),y}const U="@theme",X=e=>{localStorage.setItem(U,JSON.stringify(e))},q=H(!1),x=e=>q.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return X(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),ns=()=>{const e=localStorage.getItem(U);e?x(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?x(!0):x(!1)},_=e=>`${O}/logos/${e}`,s=(e,t)=>t?{dark:_(t),light:_(e)}:_(e),as={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),Xylem:s("xylem.png"),Siemens:s("siemens.png"),GraphQL:s("graphql.png"),UC:s("uc.png"),Playwright:s("playwright.png")};let D;q.subscribe(e=>D=e);const os=e=>typeof e=="string"?e:D?e.dark:e.light;globalThis&&globalThis.__awaiter;function W(e){let t,a;return{c(){t=K("i"),this.h()},l(n){t=V(n,"I",{class:!0}),B(t).forEach(C),this.h()},h(){T(t,"class",a=`${e[0]} ${e[1]}`)},m(n,c){G(n,t,c)},p(n,[c]){c&3&&a!==(a=`${n[0]} ${n[1]}`)&&T(t,"class",a)},i:R,o:R,d(n){n&&C(t)}}}function z(e,t,a){let{icon:n=void 0}=t,{classes:c=""}=t;return e.$$set=i=>{"icon"in i&&a(0,n=i.icon),"classes"in i&&a(1,c=i.classes)},[n,c]}class is extends L{constructor(t){super(),P(this,t,z,W,Q,{icon:0,classes:1})}}export{as as A,is as U,x as a,es as b,ss as e,os as g,ns as o,q as t,ts as u};
