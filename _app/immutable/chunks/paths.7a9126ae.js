import{n as c,s as d}from"./scheduler.f368f94a.js";const t=[];function g(i,l=c){let n;const o=new Set;function r(e){if(d(i,e)&&(i=e,n)){const b=!t.length;for(const s of o)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(i))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(n=l(r,f)||c),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_i7429d)==null?void 0:u.base)??"/andrew-website";var a;const w=((a=globalThis.__sveltekit_i7429d)==null?void 0:a.assets)??h;export{w as a,h as b,g as w};
