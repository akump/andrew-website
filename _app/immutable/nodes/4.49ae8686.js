import{s as be,f as C,a as y,l as oe,g as D,h as E,c as S,d as $,m as ie,j as w,i as q,K as h,p as ce,M as me,e as pe,I as De,n as Ee}from"../chunks/scheduler.7a274a43.js";import{S as xe,i as we,b as L,d as P,m as j,a as x,t as k,e as B,g as Y,c as Z}from"../chunks/index.28409b7f.js";import{g as ee,e as J,U as le,u as Ie,b as Ve}from"../chunks/UIcon.623fccee.js";import"../chunks/app.627cd905.js";import{C as ye}from"../chunks/Card.61f76e65.js";import{C as Se}from"../chunks/CardLogo.ffd18bf4.js";import{C as Le,a as Pe}from"../chunks/ChipIcon.f8ead33e.js";import{b as te}from"../chunks/paths.f6465277.js";import{C as je}from"../chunks/Chip.51bf07d6.js";import{C as Be}from"../chunks/CardDivider.09b854d8.js";import{S as Ue}from"../chunks/SearchPage.e2b95ddc.js";import{t as qe,i as ae}from"../chunks/experience.b0274ccc.js";import{i as Ae}from"../chunks/index.9b1591e7.js";function $e(i,t,l){const e=i.slice();return e[2]=t[l],e}function he(i,t,l){const e=i.slice();return e[5]=t[l],e}function Me(i){let t,l,e,r=i[5].label+"",a,c,f;return t=new le({props:{icon:i[5].icon}}),{c(){L(t.$$.fragment),l=y(),e=C("span"),a=oe(r),c=y(),this.h()},l(s){P(t.$$.fragment,s),l=S(s),e=D(s,"SPAN",{class:!0});var n=E(e);a=ie(n,r),n.forEach($),c=S(s),this.h()},h(){w(e,"class","m-l-1")},m(s,n){j(t,s,n),q(s,l,n),q(s,e,n),h(e,a),q(s,c,n),f=!0},p(s,n){const u={};n&2&&(u.icon=s[5].icon),t.$set(u),(!f||n&2)&&r!==(r=s[5].label+"")&&ce(a,r)},i(s){f||(x(t.$$.fragment,s),f=!0)},o(s){k(t.$$.fragment,s),f=!1},d(s){s&&($(l),$(e),$(c)),B(t,s)}}}function de(i){let t,l;return t=new je({props:{$$slots:{default:[Me]},$$scope:{ctx:i}}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){j(t,e,r),l=!0},p(e,r){const a={};r&258&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){k(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function ge(i){let t,l;return t=new Pe({props:{logo:ee(i[2].logo),name:i[2].name,href:`${te}/skills/${i[2].slug}`}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){j(t,e,r),l=!0},p(e,r){const a={};r&1&&(a.logo=ee(e[2].logo)),r&1&&(a.name=e[2].name),r&1&&(a.href=`${te}/skills/${e[2].slug}`),t.$set(a)},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){k(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function Ne(i){let t,l,e,r,a,c,f,s,n,u,v,V,b,I,U=i[0].period+"",M,re,N,ne,F,O=i[0].shortDescription+"",Q,se,z,G;l=new Se({props:{src:ee(i[0].logo),alt:i[0].company,size:55}}),f=new Le({props:{title:`${i[0].name}`}});let H=J(i[1]),d=[];for(let o=0;o<H.length;o+=1)d[o]=de(he(i,H,o));const ke=o=>k(d[o],1,1,()=>{d[o]=null});b=new le({props:{icon:"i-carbon-calendar",classes:"text-1.25em"}}),N=new Be({});let K=J(i[0].skills),g=[];for(let o=0;o<K.length;o+=1)g[o]=ge($e(i,K,o));const Ce=o=>k(g[o],1,1,()=>{g[o]=null});return{c(){t=C("div"),L(l.$$.fragment),e=y(),r=C("div"),a=C("div"),c=C("h3"),L(f.$$.fragment),s=y(),n=C("div");for(let o=0;o<d.length;o+=1)d[o].c();u=y(),v=C("div"),V=C("div"),L(b.$$.fragment),I=y(),M=oe(U),re=y(),L(N.$$.fragment),ne=y(),F=C("div"),Q=oe(O),se=y(),z=C("div");for(let o=0;o<g.length;o+=1)g[o].c();this.h()},l(o){t=D(o,"DIV",{class:!0});var p=E(t);P(l.$$.fragment,p),e=S(p),r=D(p,"DIV",{class:!0});var _=E(r);a=D(_,"DIV",{class:!0});var R=E(a);c=D(R,"H3",{class:!0});var m=E(c);P(f.$$.fragment,m),m.forEach($),s=S(R),n=D(R,"DIV",{class:!0});var A=E(n);for(let T=0;T<d.length;T+=1)d[T].l(A);A.forEach($),R.forEach($),u=S(_),v=D(_,"DIV",{class:!0});var W=E(v);V=D(W,"DIV",{class:!0});var X=E(V);P(b.$$.fragment,X),I=S(X),M=ie(X,U),X.forEach($),re=S(W),P(N.$$.fragment,W),W.forEach($),ne=S(_),F=D(_,"DIV",{class:!0});var fe=E(F);Q=ie(fe,O),fe.forEach($),se=S(_),z=D(_,"DIV",{class:!0});var ue=E(z);for(let T=0;T<g.length;T+=1)g[T].l(ue);ue.forEach($),_.forEach($),p.forEach($),this.h()},h(){w(c,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),w(n,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),w(a,"class","col "),w(V,"class","row items-center gap-2"),w(v,"class","text-[var(--text)] text-[0.9em]"),w(F,"class","experience-description text-[0.9em]"),w(z,"class","flex flex-row flex-wrap mt-5"),w(r,"class","col ml-0 md:ml-[20px] gap-3 w-full"),w(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(o,p){q(o,t,p),j(l,t,null),h(t,e),h(t,r),h(r,a),h(a,c),j(f,c,null),h(a,s),h(a,n);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(n,null);h(r,u),h(r,v),h(v,V),j(b,V,null),h(V,I),h(V,M),h(v,re),j(N,v,null),h(r,ne),h(r,F),h(F,Q),h(r,se),h(r,z);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(z,null);G=!0},p(o,p){const _={};p&1&&(_.src=ee(o[0].logo)),p&1&&(_.alt=o[0].company),l.$set(_);const R={};if(p&1&&(R.title=`${o[0].name}`),f.$set(R),p&2){H=J(o[1]);let m;for(m=0;m<H.length;m+=1){const A=he(o,H,m);d[m]?(d[m].p(A,p),x(d[m],1)):(d[m]=de(A),d[m].c(),x(d[m],1),d[m].m(n,null))}for(Y(),m=H.length;m<d.length;m+=1)ke(m);Z()}if((!G||p&1)&&U!==(U=o[0].period+"")&&ce(M,U),(!G||p&1)&&O!==(O=o[0].shortDescription+"")&&ce(Q,O),p&1){K=J(o[0].skills);let m;for(m=0;m<K.length;m+=1){const A=$e(o,K,m);g[m]?(g[m].p(A,p),x(g[m],1)):(g[m]=ge(A),g[m].c(),x(g[m],1),g[m].m(z,null))}for(Y(),m=K.length;m<g.length;m+=1)Ce(m);Z()}},i(o){if(!G){x(l.$$.fragment,o),x(f.$$.fragment,o);for(let p=0;p<H.length;p+=1)x(d[p]);x(b.$$.fragment,o),x(N.$$.fragment,o);for(let p=0;p<K.length;p+=1)x(g[p]);G=!0}},o(o){k(l.$$.fragment,o),k(f.$$.fragment,o),d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)k(d[p]);k(b.$$.fragment,o),k(N.$$.fragment,o),g=g.filter(Boolean);for(let p=0;p<g.length;p+=1)k(g[p]);G=!1},d(o){o&&$(t),B(l),B(f),me(d,o),B(b),B(N),me(g,o)}}}function ze(i){let t,l;return t=new ye({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${te}/experience/${i[0].slug}`,color:i[0].color,$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){j(t,e,r),l=!0},p(e,[r]){const a={};r&1&&(a.href=`${te}/experience/${e[0].slug}`),r&1&&(a.color=e[0].color),r&259&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){k(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function He(i,t,l){let e,{experience:r}=t;return i.$$set=a=>{"experience"in a&&l(0,r=a.experience)},i.$$.update=()=>{i.$$.dirty&1&&l(1,e=[{label:r.company,icon:"i-carbon-building"},{label:r.location,icon:"i-carbon-location"},{label:r.contract,icon:"i-carbon-hourglass"}])},[r,e]}class Ke extends xe{constructor(t){super(),we(this,t,He,ze,be,{experience:0})}}function _e(i,t,l){const e=i.slice();return e[2]=t[l],e[4]=l,e}function Re(i){let t,l,e=[],r=new Map,a,c,f=J(i[0]);const s=n=>n[2].slug;for(let n=0;n<f.length;n+=1){let u=_e(i,f,n),v=s(u);r.set(v,e[n]=ve(v,u))}return{c(){t=C("div"),l=y();for(let n=0;n<e.length;n+=1)e[n].c();a=pe(),this.h()},l(n){t=D(n,"DIV",{class:!0}),E(t).forEach($),l=S(n);for(let u=0;u<e.length;u+=1)e[u].l(n);a=pe(),this.h()},h(){w(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(n,u){q(n,t,u),q(n,l,u);for(let v=0;v<e.length;v+=1)e[v]&&e[v].m(n,u);q(n,a,u),c=!0},p(n,u){u&1&&(f=J(n[0]),Y(),e=Ie(e,u,s,1,n,f,r,a.parentNode,Ve,ve,a,_e),Z())},i(n){if(!c){for(let u=0;u<f.length;u+=1)x(e[u]);c=!0}},o(n){for(let u=0;u<e.length;u+=1)k(e[u]);c=!1},d(n){n&&($(t),$(l),$(a));for(let u=0;u<e.length;u+=1)e[u].d(n)}}}function Te(i){let t,l,e,r,a="Could not find anything...",c;return l=new le({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),L(l.$$.fragment),e=y(),r=C("p"),r.textContent=a,this.h()},l(f){t=D(f,"DIV",{class:!0});var s=E(t);P(l.$$.fragment,s),e=S(s),r=D(s,"P",{class:!0,["data-svelte-h"]:!0}),De(r)!=="svelte-1jyyf6v"&&(r.textContent=a),s.forEach($),this.h()},h(){w(r,"class","font-300"),w(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,s){q(f,t,s),j(l,t,null),h(t,e),h(t,r),c=!0},p:Ee,i(f){c||(x(l.$$.fragment,f),c=!0)},o(f){k(l.$$.fragment,f),c=!1},d(f){f&&$(t),B(l)}}}function ve(i,t){let l,e,r,a,c,f,s,n,u,v,V;return c=new le({props:{icon:"i-carbon-condition-point",classes:""}}),n=new Ke({props:{experience:t[2]}}),{key:i,first:null,c(){l=C("div"),e=C("div"),r=y(),a=C("div"),L(c.$$.fragment),f=y(),s=C("div"),L(n.$$.fragment),u=y(),this.h()},l(b){l=D(b,"DIV",{class:!0});var I=E(l);e=D(I,"DIV",{class:!0}),E(e).forEach($),r=S(I),a=D(I,"DIV",{class:!0});var U=E(a);P(c.$$.fragment,U),U.forEach($),f=S(I),s=D(I,"DIV",{class:!0});var M=E(s);P(n.$$.fragment,M),M.forEach($),u=S(I),I.forEach($),this.h()},h(){w(e,"class","flex-1 hidden lg:flex"),w(a,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),w(s,"class","flex-1 col items-stretch"),w(l,"class",v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=l},m(b,I){q(b,l,I),h(l,e),h(l,r),h(l,a),j(c,a,null),h(l,f),h(l,s),j(n,s,null),h(l,u),V=!0},p(b,I){t=b;const U={};I&1&&(U.experience=t[2]),n.$set(U),(!V||I&1&&v!==(v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&w(l,"class",v)},i(b){V||(x(c.$$.fragment,b),x(n.$$.fragment,b),V=!0)},o(b){k(c.$$.fragment,b),k(n.$$.fragment,b),V=!1},d(b){b&&$(l),B(c),B(n)}}}function Fe(i){let t,l,e,r;const a=[Te,Re],c=[];function f(s,n){return s[0].length===0?0:1}return l=f(i),e=c[l]=a[l](i),{c(){t=C("div"),e.c(),this.h()},l(s){t=D(s,"DIV",{class:!0});var n=E(t);e.l(n),n.forEach($),this.h()},h(){w(t,"class","col items-center relative mt-10 flex-1")},m(s,n){q(s,t,n),c[l].m(t,null),r=!0},p(s,n){let u=l;l=f(s),l===u?c[l].p(s,n):(Y(),k(c[u],1,1,()=>{c[u]=null}),Z(),e=c[l],e?e.p(s,n):(e=c[l]=a[l](s),e.c()),x(e,1),e.m(t,null))},i(s){r||(x(e),r=!0)},o(s){k(e),r=!1},d(s){s&&$(t),c[l].d()}}}function Ge(i){let t,l;return t=new Ue({props:{title:qe,$$slots:{default:[Fe]},$$scope:{ctx:i}}}),t.$on("search",i[1]),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,r){j(t,e,r),l=!0},p(e,[r]){const a={};r&33&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){k(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function Je(i,t,l){let e=[...ae];return[e,a=>{const c=a.detail.search;if(Ae(c)){l(0,e=ae);return}l(0,e=ae.filter(f=>f.name.toLowerCase().includes(c)||f.company.toLowerCase().includes(c)||f.description.toLowerCase().includes(c)))}]}class ot extends xe{constructor(t){super(),we(this,t,Je,Ge,be,{})}}export{ot as component};
