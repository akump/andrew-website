import{A as o}from"./index.8ac6357f.js";const u=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimizations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function m(t,...s){const a=Object.assign({},t);return Object.keys(a).forEach(r=>{s.includes(r)&&delete a[r]}),a}const n=t=>t,p=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Languages",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],e=t=>{const s=m(t,"category");return t.category&&(s.category=p.find(a=>a.slug===t.category)),s},c=[e({slug:"js",color:"yellow",description:"I've been using Javascript for 8+ years now",logo:o.JavaScript,name:"Javascript",category:"pro-lang"}),e({slug:"ts",color:"blue",description:"I have used Typescript on various internal tools and side projects",logo:o.TypeScript,name:"Typescript",category:"pro-lang"}),e({slug:"css",color:"blue",description:"",logo:o.CSS,name:"CSS",category:"markup-style"}),e({slug:"html",color:"orange",description:"",logo:o.HTML,name:"HTML",category:"markup-style"}),e({slug:"sass",color:"pink",description:"",logo:o.Sass,name:"Sass",category:"markup-style"}),e({slug:"reactjs",color:"cyan",description:"",logo:o.ReactJs,name:"React Js",category:"library"}),e({slug:"svelte",color:"orange",description:u,logo:o.Svelte,name:"Svelte",category:"library"}),e({slug:"graphql",color:"orange",description:"Using GraphQL at xylem",logo:o.GraphQL,name:"GraphQL",category:"library"}),e({slug:"postgres",color:"#336791",description:"Using pg at Xylem",logo:o.PostgreSQL,name:"PostgreSQL",category:"db"}),e({slug:"mongodb",color:"#4DB33D",description:"Using mongo at Xylem",logo:o.MongoDB,name:"MongoDB",category:"db"}),e({slug:"playwright",color:"blue",description:"Using playwright at Xylem",logo:o.Playwright,name:"Playwright",category:"test"}),e({slug:"selenium",color:"",description:"Used selenium at siemens",logo:"",name:"Selenium",category:"test"}),e({slug:"docker",color:"blue",description:"Using Docker at Xylem",logo:o.Docker,name:"Docker",category:"devops"})],y="Skills",h=(...t)=>c.filter(s=>t.includes(s.slug)),b=t=>{const s=[],a=[];return c.forEach(r=>{if(t.trim()&&!r.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!r.category){a.push(r);return}let i=s.find(g=>{var l;return g.category.slug===((l=r.category)==null?void 0:l.slug)});i||(i={items:[],category:r.category},s.push(i)),i.items.push(r)}),a.length!==0&&s.push({category:{name:"Others",slug:"others"},items:a}),s};export{b as a,h as g,c as i,y as t};
