(()=>{function D(){}function de(t){return t()}function Fe(){return Object.create(null)}function q(t){t.forEach(de)}function $e(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}var le;function he(t,e){return le||(le=document.createElement("a")),le.href=e,t===le.href}function Ee(t){return Object.keys(t).length===0}var Se=!1;function nt(){Se=!0}function lt(){Se=!1}function g(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function O(t){return document.createTextNode(t)}function S(){return O(" ")}function z(){return O("")}function U(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function st(t){return Array.from(t.childNodes)}function W(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pe(t,e){t.value=e??""}function R(t,e,n){t.classList[n?"add":"remove"](e)}var H=class{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,l=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=b(n.nodeName),this.t=n,this.c(e)),this.i(l)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)w(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}};var me;function Z(t){me=t}var X=[];var oe=[],se=[],fe=[],rt=Promise.resolve(),ae=!1;function ot(){ae||(ae=!0,rt.then(Oe))}function _e(t){se.push(t)}function je(t){fe.push(t)}var ue=new Set,ie=0;function Oe(){let t=me;do{for(;ie<X.length;){let e=X[ie];ie++,Z(e),ct(e.$$)}for(Z(null),X.length=0,ie=0;oe.length;)oe.pop()();for(let e=0;e<se.length;e+=1){let n=se[e];ue.has(n)||(ue.add(n),n())}se.length=0}while(X.length);for(;fe.length;)fe.pop()();ae=!1,ue.clear(),Z(t)}function ct(t){if(t.fragment!==null){t.update(),q(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_e)}}var re=new Set,I;function ee(){I={r:0,c:[],p:I}}function te(){I.r||q(I.c),I=I.p}function A(t,e){t&&t.i&&(re.delete(t),t.i(e))}function N(t,e,n,l){if(t&&t.o){if(re.has(t))return;re.add(t),I.c.push(()=>{re.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}var $t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Me(t,e){N(t,1,1,()=>{e.delete(t.key)})}function Ce(t,e,n,l,s,r,i,u,o,a,_,f){let c=t.length,d=r.length,m=c,j={};for(;m--;)j[t[m].key]=m;let $=[],M=new Map,C=new Map;for(m=d;m--;){let F=f(s,r,m),T=n(F),L=i.get(T);L?l&&L.p(F,e):(L=a(T,F),L.c()),M.set(T,$[m]=L),T in j&&C.set(T,Math.abs(m-j[T]))}let k=new Set,h=new Set;function y(F){A(F,1),F.m(u,_),i.set(F.key,F),_=F.first,d--}for(;c&&d;){let F=$[d-1],T=t[c-1],L=F.key,Y=T.key;F===T?(_=F.first,c--,d--):M.has(Y)?!i.has(L)||k.has(L)?y(F):h.has(Y)?c--:C.get(L)>C.get(Y)?(h.add(L),y(F)):(k.add(Y),c--):(o(T,i),c--)}for(;c--;){let F=t[c];M.has(F.key)||o(F,i)}for(;d;)y($[d-1]);return $}function De(t,e,n){let l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function ge(t){t&&t.c()}function ce(t,e,n,l){let{fragment:s,on_mount:r,on_destroy:i,after_update:u}=t.$$;s&&s.m(e,n),l||_e(()=>{let o=r.map(de).filter($e);i?i.push(...o):q(o),t.$$.on_mount=[]}),u.forEach(_e)}function ne(t,e){let n=t.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(X.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,l,s,r,i,u=[-1]){let o=me;Z(t);let a=t.$$={fragment:null,ctx:null,props:r,update:D,not_equal:s,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Fe(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};i&&i(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,c,...d)=>{let m=d.length?d[0]:c;return a.ctx&&s(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),_&&ut(t,f)),c}):[],a.update(),_=!0,q(a.before_update),a.fragment=l?l(a.ctx):!1,e.target){if(e.hydrate){nt();let f=st(e.target);a.fragment&&a.fragment.l(f),f.forEach(v)}else a.fragment&&a.fragment.c();e.intro&&A(t.$$.fragment),ce(t,e.target,e.anchor,e.customElement),lt(),Oe()}Z(o)}var ft;typeof HTMLElement=="function"&&(ft=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(de).filter($e);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){q(this.$$.on_disconnect)}$destroy(){ne(this,1),this.$destroy=D}$on(t,e){let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let l=n.indexOf(e);l!==-1&&n.splice(l,1)}}$set(t){this.$$set&&!Ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var P=class{$destroy(){ne(this,1),this.$destroy=D}$on(e,n){let l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{let s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Ee(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function Ae(t,e,n){let l=t.slice();return l[7]=e[n][0],l[8]=e[n][1],l}function at(t){let e,n,l,s,r,i=t[0]&&Te(t);return{c(){i&&i.c(),e=S(),n=b("div"),l=b("p"),l.textContent=`${t[3](30)}`,s=S(),r=b("p"),r.textContent=`${t[3](40)}`,p(l,"class","pagefind-ui__result-title pagefind-ui__loading svelte-j9e30"),p(r,"class","pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30"),p(n,"class","pagefind-ui__result-inner svelte-j9e30")},m(u,o){i&&i.m(u,o),w(u,e,o),w(u,n,o),g(n,l),g(n,s),g(n,r)},p(u,o){u[0]?i||(i=Te(u),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},d(u){i&&i.d(u),u&&v(e),u&&v(n)}}}function _t(t){let e,n,l,s,r=t[1].meta?.title+"",i,u,o,a=t[1].excerpt+"",_,f=t[0]&&Le(t),c=t[2].length&&Pe(t);return{c(){f&&f.c(),e=S(),n=b("div"),l=b("p"),s=b("a"),u=S(),o=b("p"),_=S(),c&&c.c(),p(s,"class","pagefind-ui__result-link svelte-j9e30"),p(s,"href",i=t[1].meta?.url||t[1].url),p(l,"class","pagefind-ui__result-title svelte-j9e30"),p(o,"class","pagefind-ui__result-excerpt svelte-j9e30"),p(n,"class","pagefind-ui__result-inner svelte-j9e30")},m(d,m){f&&f.m(d,m),w(d,e,m),w(d,n,m),g(n,l),g(l,s),s.innerHTML=r,g(n,u),g(n,o),o.innerHTML=a,g(n,_),c&&c.m(n,null)},p(d,m){d[0]?f?f.p(d,m):(f=Le(d),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null),m&2&&r!==(r=d[1].meta?.title+"")&&(s.innerHTML=r),m&2&&i!==(i=d[1].meta?.url||d[1].url)&&p(s,"href",i),m&2&&a!==(a=d[1].excerpt+"")&&(o.innerHTML=a),d[2].length?c?c.p(d,m):(c=Pe(d),c.c(),c.m(n,null)):c&&(c.d(1),c=null)},d(d){f&&f.d(d),d&&v(e),d&&v(n),c&&c.d()}}}function Te(t){let e;return{c(){e=b("div"),p(e,"class","pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30")},m(n,l){w(n,e,l)},d(n){n&&v(e)}}}function Le(t){let e,n=t[1].meta.image&&Ne(t);return{c(){e=b("div"),n&&n.c(),p(e,"class","pagefind-ui__result-thumb svelte-j9e30")},m(l,s){w(l,e,s),n&&n.m(e,null)},p(l,s){l[1].meta.image?n?n.p(l,s):(n=Ne(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(l){l&&v(e),n&&n.d()}}}function Ne(t){let e,n,l;return{c(){e=b("img"),p(e,"class","pagefind-ui__result-image svelte-j9e30"),he(e.src,n=t[1].meta?.image)||p(e,"src",n),p(e,"alt",l=t[1].meta?.image_alt||t[1].meta?.title)},m(s,r){w(s,e,r)},p(s,r){r&2&&!he(e.src,n=s[1].meta?.image)&&p(e,"src",n),r&2&&l!==(l=s[1].meta?.image_alt||s[1].meta?.title)&&p(e,"alt",l)},d(s){s&&v(e)}}}function Pe(t){let e,n=t[2],l=[];for(let s=0;s<n.length;s+=1)l[s]=qe(Ae(t,n,s));return{c(){e=b("ul");for(let s=0;s<l.length;s+=1)l[s].c();p(e,"class","pagefind-ui__result-tags svelte-j9e30")},m(s,r){w(s,e,r);for(let i=0;i<l.length;i+=1)l[i].m(e,null)},p(s,r){if(r&4){n=s[2];let i;for(i=0;i<n.length;i+=1){let u=Ae(s,n,i);l[i]?l[i].p(u,r):(l[i]=qe(u),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(s){s&&v(e),x(l,s)}}}function qe(t){let e,n,l=t[7].replace(/^(\w)/,Re)+"",s,r,i=t[8]+"",u;return{c(){e=b("li"),n=new H(!1),s=O(": "),r=new H(!1),u=S(),n.a=s,r.a=u,p(e,"class","pagefind-ui__result-tag svelte-j9e30")},m(o,a){w(o,e,a),n.m(l,e),g(e,s),r.m(i,e),g(e,u)},p(o,a){a&4&&l!==(l=o[7].replace(/^(\w)/,Re)+"")&&n.p(l),a&4&&i!==(i=o[8]+"")&&r.p(i)},d(o){o&&v(e)}}}function dt(t){let e;function n(r,i){return r[1]?_t:at}let l=n(t,-1),s=l(t);return{c(){e=b("li"),s.c(),p(e,"class","pagefind-ui__result svelte-j9e30")},m(r,i){w(r,e,i),s.m(e,null)},p(r,[i]){l===(l=n(r,i))&&s?s.p(r,i):(s.d(1),s=l(r),s&&(s.c(),s.m(e,null)))},i:D,o:D,d(r){r&&v(e),s.d()}}}var Re=t=>t.toLocaleUpperCase();function ht(t,e,n){let{show_images:l=!0}=e,{result:s={data:async()=>{}}}=e,r=["title","image","image_alt","url"],i,u=[],o=async _=>{n(1,i=await _.data()),n(2,u=Object.entries(i.meta).filter(([f])=>!r.includes(f)))},a=(_=30)=>". ".repeat(Math.floor(10+Math.random()*_));return t.$$set=_=>{"show_images"in _&&n(0,l=_.show_images),"result"in _&&n(4,s=_.result)},t.$$.update=()=>{if(t.$$.dirty&16){e:o(s)}},[l,i,u,a,s]}var be=class extends P{constructor(e){super(),G(this,e,ht,dt,B,{show_images:0,result:4})}},Ie=be;function He(t,e,n){let l=t.slice();return l[6]=e[n][0],l[7]=e[n][1],l[8]=e,l[9]=n,l}function Be(t,e,n){let l=t.slice();return l[10]=e[n][0],l[11]=e[n][1],l[12]=e,l[13]=n,l}function ze(t){let e,n,l,s=Object.entries(t[1]),r=[];for(let i=0;i<s.length;i+=1)r[i]=Ge(He(t,s,i));return{c(){e=b("fieldset"),n=b("legend"),n.textContent="Filters",l=S();for(let i=0;i<r.length;i+=1)r[i].c();p(n,"class","pagefind-ui__filter-panel-label svelte-1v2r7ls"),p(e,"class","pagefind-ui__filter-panel svelte-1v2r7ls")},m(i,u){w(i,e,u),g(e,n),g(e,l);for(let o=0;o<r.length;o+=1)r[o].m(e,null)},p(i,u){if(u&15){s=Object.entries(i[1]);let o;for(o=0;o<s.length;o+=1){let a=He(i,s,o);r[o]?r[o].p(a,u):(r[o]=Ge(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},d(i){i&&v(e),x(r,i)}}}function Ue(t){let e,n,l,s,r,i,u,o,a=t[10]+"",_,f=t[11]+"",c,d,m,j,$,M;function C(){t[5].call(n,t[6],t[10])}return{c(){e=b("div"),n=b("input"),i=S(),u=b("label"),o=new H(!1),_=O(" ("),c=O(f),d=O(")"),j=S(),p(n,"class","pagefind-ui__filter-checkbox svelte-1v2r7ls"),p(n,"type","checkbox"),p(n,"id",l=t[6]+"-"+t[10]),p(n,"name",s=t[6]),n.__value=r=t[10],n.value=n.__value,o.a=_,p(u,"class","pagefind-ui__filter-label svelte-1v2r7ls"),p(u,"for",m=t[6]+"-"+t[10]),p(e,"class","pagefind-ui__filter-value svelte-1v2r7ls"),R(e,"pagefind-ui__filter-value--checked",t[0][`${t[6]}:${t[10]}`])},m(k,h){w(k,e,h),g(e,n),n.checked=t[0][`${t[6]}:${t[10]}`],g(e,i),g(e,u),o.m(a,u),g(u,_),g(u,c),g(u,d),g(e,j),$||(M=U(n,"change",C),$=!0)},p(k,h){t=k,h&2&&l!==(l=t[6]+"-"+t[10])&&p(n,"id",l),h&2&&s!==(s=t[6])&&p(n,"name",s),h&2&&r!==(r=t[10])&&(n.__value=r,n.value=n.__value),h&3&&(n.checked=t[0][`${t[6]}:${t[10]}`]),h&2&&a!==(a=t[10]+"")&&o.p(a),h&2&&f!==(f=t[11]+"")&&W(c,f),h&2&&m!==(m=t[6]+"-"+t[10])&&p(u,"for",m),h&3&&R(e,"pagefind-ui__filter-value--checked",t[0][`${t[6]}:${t[10]}`])},d(k){k&&v(e),$=!1,M()}}}function We(t){let e,n=(t[2]||t[11]||t[0][`${t[6]}:${t[10]}`])&&Ue(t);return{c(){n&&n.c(),e=z()},m(l,s){n&&n.m(l,s),w(l,e,s)},p(l,s){l[2]||l[11]||l[0][`${l[6]}:${l[10]}`]?n?n.p(l,s):(n=Ue(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(l){n&&n.d(l),l&&v(e)}}}function Ge(t){let e,n,l=t[6].replace(/^(\w)/,Ye)+"",s,r,i,u=t[6]+"",o,a,_=Object.entries(t[7]||{}),f=[];for(let c=0;c<_.length;c+=1)f[c]=We(Be(t,_,c));return{c(){e=b("details"),n=b("summary"),s=S(),r=b("fieldset"),i=b("legend"),o=S();for(let c=0;c<f.length;c+=1)f[c].c();a=S(),p(n,"class","pagefind-ui__filter-name svelte-1v2r7ls"),p(i,"class","pagefind-ui__filter-group-label svelte-1v2r7ls"),p(r,"class","pagefind-ui__filter-group svelte-1v2r7ls"),p(e,"class","pagefind-ui__filter-block svelte-1v2r7ls"),e.open=t[3]},m(c,d){w(c,e,d),g(e,n),n.innerHTML=l,g(e,s),g(e,r),g(r,i),i.innerHTML=u,g(r,o);for(let m=0;m<f.length;m+=1)f[m].m(r,null);g(e,a)},p(c,d){if(d&2&&l!==(l=c[6].replace(/^(\w)/,Ye)+"")&&(n.innerHTML=l),d&2&&u!==(u=c[6]+"")&&(i.innerHTML=u),d&7){_=Object.entries(c[7]||{});let m;for(m=0;m<_.length;m+=1){let j=Be(c,_,m);f[m]?f[m].p(j,d):(f[m]=We(j),f[m].c(),f[m].m(r,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=_.length}d&8&&(e.open=c[3])},d(c){c&&v(e),x(f,c)}}}function pt(t){let e=t[1]&&Object.entries(t[1]).length,n,l=e&&ze(t);return{c(){l&&l.c(),n=z()},m(s,r){l&&l.m(s,r),w(s,n,r)},p(s,[r]){r&2&&(e=s[1]&&Object.entries(s[1]).length),e?l?l.p(s,r):(l=ze(s),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},i:D,o:D,d(s){l&&l.d(s),s&&v(n)}}}var Ye=t=>t.toLocaleUpperCase();function mt(t,e,n){let{available_filters:l=null}=e,{show_empty_filters:s=!0}=e,r={},i=!1,u=!1;function o(a,_){r[`${a}:${_}`]=this.checked,n(0,r)}return t.$$set=a=>{"available_filters"in a&&n(1,l=a.available_filters),"show_empty_filters"in a&&n(2,s=a.show_empty_filters)},t.$$.update=()=>{if(t.$$.dirty&18){e:if(l&&!i){n(4,i=!0);let a=Object.entries(l||{});a.length===1&&Object.entries(a[0][1])?.length<=6&&n(3,u=!0)}}},[r,l,s,u,i,o]}var ye=class extends P{constructor(e){super(),G(this,e,mt,pt,B,{available_filters:1,show_empty_filters:2,selected_filters:0})}get selected_filters(){return this.$$.ctx[0]}},Ve=ye;function Je(t,e,n){let l=t.slice();return l[24]=e[n],l}function Ke(t){let e,n,l;function s(i){t[17](i)}let r={show_empty_filters:t[2],available_filters:t[11]};return t[4]!==void 0&&(r.selected_filters=t[4]),e=new Ve({props:r}),oe.push(()=>De(e,"selected_filters",s)),{c(){ge(e.$$.fragment)},m(i,u){ce(e,i,u),l=!0},p(i,u){let o={};u&4&&(o.show_empty_filters=i[2]),u&2048&&(o.available_filters=i[11]),!n&&u&16&&(n=!0,o.selected_filters=i[4],je(()=>n=!1)),e.$set(o)},i(i){l||(A(e.$$.fragment,i),l=!0)},o(i){N(e.$$.fragment,i),l=!1},d(i){ne(e,i)}}}function Qe(t){let e,n,l,s,r=[bt,gt],i=[];function u(o,a){return o[7]?0:1}return n=u(t,-1),l=i[n]=r[n](t),{c(){e=b("div"),l.c(),p(e,"class","pagefind-ui__results-area svelte-193m69l")},m(o,a){w(o,e,a),i[n].m(e,null),s=!0},p(o,a){let _=n;n=u(o,a),n===_?i[n].p(o,a):(ee(),N(i[_],1,1,()=>{i[_]=null}),te(),l=i[n],l?l.p(o,a):(l=i[n]=r[n](o),l.c()),A(l,1),l.m(e,null))},i(o){s||(A(l),s=!0)},o(o){N(l),s=!1},d(o){o&&v(e),i[n].d()}}}function gt(t){let e,n=t[6].results.length+"",l,s,r=t[6].results.length===1?"":"s",i,u,o=t[9]?`for "${t[9].replace(/^"+|"+$/g,"")}"`:"",a,_,f,c=[],d=new Map,m,j,$,M=t[6].results.slice(0,t[10]),C=h=>h[24].id;for(let h=0;h<M.length;h+=1){let y=Je(t,M,h),F=C(y);d.set(F,c[h]=Xe(F,y))}let k=t[6].results.length>t[10]&&Ze(t);return{c(){e=b("p"),l=O(n),s=O(" result"),i=O(r),u=S(),a=O(o),_=S(),f=b("ol");for(let h=0;h<c.length;h+=1)c[h].c();m=S(),k&&k.c(),j=z(),p(e,"class","pagefind-ui__message svelte-193m69l"),p(f,"class","pagefind-ui__results svelte-193m69l")},m(h,y){w(h,e,y),g(e,l),g(e,s),g(e,i),g(e,u),g(e,a),w(h,_,y),w(h,f,y);for(let F=0;F<c.length;F+=1)c[F].m(f,null);w(h,m,y),k&&k.m(h,y),w(h,j,y),$=!0},p(h,y){(!$||y&64)&&n!==(n=h[6].results.length+"")&&W(l,n),(!$||y&64)&&r!==(r=h[6].results.length===1?"":"s")&&W(i,r),(!$||y&512)&&o!==(o=h[9]?`for "${h[9].replace(/^"+|"+$/g,"")}"`:"")&&W(a,o),y&1090&&(M=h[6].results.slice(0,h[10]),ee(),c=Ce(c,y,C,1,h,M,d,f,Me,Xe,null,Je),te()),h[6].results.length>h[10]?k?k.p(h,y):(k=Ze(h),k.c(),k.m(j.parentNode,j)):k&&(k.d(1),k=null)},i(h){if(!$){for(let y=0;y<M.length;y+=1)A(c[y]);$=!0}},o(h){for(let y=0;y<c.length;y+=1)N(c[y]);$=!1},d(h){h&&v(e),h&&v(_),h&&v(f);for(let y=0;y<c.length;y+=1)c[y].d();h&&v(m),k&&k.d(h),h&&v(j)}}}function bt(t){let e;function n(r,i){return r[9]?vt:yt}let l=n(t,-1),s=l(t);return{c(){s.c(),e=z()},m(r,i){s.m(r,i),w(r,e,i)},p(r,i){l===(l=n(r,i))&&s?s.p(r,i):(s.d(1),s=l(r),s&&(s.c(),s.m(e.parentNode,e)))},i:D,o:D,d(r){s.d(r),r&&v(e)}}}function Xe(t,e){let n,l,s;return l=new Ie({props:{show_images:e[1],result:e[24]}}),{key:t,first:null,c(){n=z(),ge(l.$$.fragment),this.first=n},m(r,i){w(r,n,i),ce(l,r,i),s=!0},p(r,i){e=r;let u={};i&2&&(u.show_images=e[1]),i&1088&&(u.result=e[24]),l.$set(u)},i(r){s||(A(l.$$.fragment,r),s=!0)},o(r){N(l.$$.fragment,r),s=!1},d(r){r&&v(n),ne(l,r)}}}function Ze(t){let e,n,l;return{c(){e=b("button"),e.textContent="Load more results",p(e,"type","button"),p(e,"class","pagefind-ui__button svelte-193m69l")},m(s,r){w(s,e,r),n||(l=U(e,"click",t[13]),n=!0)},p:D,d(s){s&&v(e),n=!1,l()}}}function yt(t){let e;return{c(){e=b("p"),e.textContent="Filtering...",p(e,"class","pagefind-ui__message svelte-193m69l")},m(n,l){w(n,e,l)},p:D,d(n){n&&v(e)}}}function vt(t){let e,n,l=t[9].replace(/^"+|"+$/g,"")+"",s,r;return{c(){e=b("p"),n=O('Searching for "'),s=O(l),r=O('"...'),p(e,"class","pagefind-ui__message svelte-193m69l")},m(i,u){w(i,e,u),g(e,n),g(e,s),g(e,r)},p(i,u){u&512&&l!==(l=i[9].replace(/^"+|"+$/g,"")+"")&&W(s,l)},d(i){i&&v(e)}}}function wt(t){let e,n,l,s,r,i,u,o,a,_=t[5]&&Ke(t),f=t[8]&&Qe(t);return{c(){e=b("div"),n=b("form"),l=b("input"),s=S(),r=b("div"),_&&_.c(),i=S(),f&&f.c(),p(l,"class","pagefind-ui__search-input svelte-193m69l"),p(l,"type","text"),p(l,"placeholder","Search"),p(r,"class","pagefind-ui__drawer svelte-193m69l"),R(r,"pagefind-ui__hidden",!t[8]),p(n,"class","pagefind-ui__form svelte-193m69l"),p(n,"role","search"),p(n,"aria-label","Search this site"),p(n,"action","javascript:void(0);"),p(e,"class","pagefind-ui svelte-193m69l"),R(e,"pagefind-ui--reset",t[0])},m(c,d){w(c,e,d),g(e,n),g(n,l),pe(l,t[3]),g(n,s),g(n,r),_&&_.m(r,null),g(r,i),f&&f.m(r,null),u=!0,o||(a=[U(l,"focus",t[12]),U(l,"input",t[16]),U(n,"submit",kt)],o=!0)},p(c,[d]){d&8&&l.value!==c[3]&&pe(l,c[3]),c[5]?_?(_.p(c,d),d&32&&A(_,1)):(_=Ke(c),_.c(),A(_,1),_.m(r,i)):_&&(ee(),N(_,1,1,()=>{_=null}),te()),c[8]?f?(f.p(c,d),d&256&&A(f,1)):(f=Qe(c),f.c(),A(f,1),f.m(r,null)):f&&(ee(),N(f,1,1,()=>{f=null}),te()),d&256&&R(r,"pagefind-ui__hidden",!c[8]),d&1&&R(e,"pagefind-ui--reset",c[0])},i(c){u||(A(_),A(f),u=!0)},o(c){N(_),N(f),u=!1},d(c){c&&v(e),_&&_.d(),f&&f.d(),o=!1,q(a)}}}var kt=t=>t.preventDefault();function Ft(t,e,n){let{base_path:l="/_pagefind/"}=e,{reset_styles:s=!0}=e,{show_images:r=!0}=e,{show_empty_filters:i=!0}=e,{pagefind_options:u={}}=e,o="",a,_=!1,f=[],c=!1,d=!1,m=0,j="",$=5,M=null,C=null,k={},h=async()=>{_||(n(5,_=!0),a||(a=await import(`${l}pagefind.js`),a.options(u||{}),y()))},y=async()=>{a&&(M=await a.filters(),(!C||!Object.keys(C).length)&&n(11,C=M))},F=E=>{let V={};return Object.entries(E).filter(([,K])=>K).forEach(([K])=>{let[Q,J]=K.split(/:(.*)$/);V[Q]=V[Q]||[],V[Q].push(J)}),V},T=async(E,V)=>{let K=F(V);if(!E){n(8,d=!1);return}for(n(9,j=E||""),n(7,c=!0),n(8,d=!0);!a;)h(),await new Promise(tt=>setTimeout(tt,50));let Q=++m,J=await a.search(E,{filters:K});m===Q&&(J.filters&&Object.keys(J.filters)?.length&&n(11,C=J.filters),n(6,f=J),n(7,c=!1),n(10,$=5))},L=E=>{E?.preventDefault(),n(10,$+=5)};function Y(){o=this.value,n(3,o)}function et(E){k=E,n(4,k)}return t.$$set=E=>{"base_path"in E&&n(14,l=E.base_path),"reset_styles"in E&&n(0,s=E.reset_styles),"show_images"in E&&n(1,r=E.show_images),"show_empty_filters"in E&&n(2,i=E.show_empty_filters),"pagefind_options"in E&&n(15,u=E.pagefind_options)},t.$$.update=()=>{if(t.$$.dirty&24){e:T(o,k)}},[s,r,i,o,k,_,f,c,d,j,$,C,h,L,l,u,Y,et]}var ve=class extends P{constructor(e){super(),G(this,e,Ft,wt,B,{base_path:14,reset_styles:0,show_images:1,show_empty_filters:2,pagefind_options:15})}},xe=ve;var we;try{we=new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind-)?ui.js.*$/)[1]}catch{we="/_pagefind/",console.warn(`Pagefind couldn't determine the base of the bundle from the javascript import path. Falling back to the default of ${bundlePath}.`),console.warn("You can configure this by passing a bundlePath option to PagefindUI"),console.warn(`[DEBUG: Loaded from ${document?.currentScript?.src??"unknown"}]`)}var ke=class{constructor(e){let n=e.element??"[data-pagefind-ui]",l=e.bundlePath??we,s=e.resetStyles??!0,r=e.showImages??!0,i=e.showEmptyFilters??!0;delete e.element,delete e.bundlePath,delete e.resetStyles,delete e.showImages,delete e.showEmptyFilters;let u=document.querySelector(n);u?new xe({target:u,props:{base_path:l,reset_styles:s,show_images:r,show_empty_filters:i,pagefind_options:e}}):console.error(`Pagefind UI couldn't find the selector ${n}`)}};window.PagefindUI=ke;})();
