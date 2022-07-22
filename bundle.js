var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function a(e,t,n,r,o,s,i){const l=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(l){const o=c(t,n,r,i);e.p(o,l)}}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),f=u?e=>requestAnimationFrame(e):e;const h=new Set;function p(e){h.forEach(t=>{t.c(e)||(h.delete(t),t.f())}),0!==h.size&&f(p)}function g(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function k(){return w(" ")}function $(){return w("")}function b(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function x(e){return function(t){return t.preventDefault(),e.call(this,t)}}function C(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function O(e,t){e.value=null==t?"":t}function S(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}const B=new Set;let W,E=0;function M(e,t,n,r,o,s,i,l=0){const c=16.666/r;let a="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*s(e);a+=100*e+`%{${i(r,1-r)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${l}`,f=e.ownerDocument;B.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(v("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${d} ${r}ms linear ${o}ms 1 both`,E+=1,d}function A(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),(E-=o)||f(()=>{E||(B.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),B.clear())}))}function T(e){W=e}function F(){if(!W)throw new Error("Function called outside component initialization");return W}function P(e,t){F().$$.context.set(e,t)}const q=[],I=[],D=[],L=[],j=Promise.resolve();let K=!1;function U(e){D.push(e)}let H=!1;const N=new Set;function V(){if(!H){H=!0;do{for(let e=0;e<q.length;e+=1){const t=q[e];T(t),R(t.$$)}for(T(null),q.length=0;I.length;)I.pop()();for(let e=0;e<D.length;e+=1){const t=D[e];N.has(t)||(N.add(t),t())}D.length=0}while(q.length);for(;L.length;)L.pop()();K=!1,H=!1,N.clear()}}function R(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}let z;function G(e,t,n){e.dispatchEvent(S(`${t?"intro":"outro"}${n}`))}const J=new Set;let Y;function Q(){Y={r:0,c:[],p:Y}}function Z(){Y.r||o(Y.c),Y=Y.p}function X(e,t){e&&e.i&&(J.delete(e),e.i(t))}function ee(e,t,n,r){if(e&&e.o){if(J.has(e))return;J.add(e),Y.c.push(()=>{J.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const te={duration:0};function ne(n,r,i,l){let c=r(n,i),a=l?0:1,u=null,g=null,m=null;function y(){m&&A(n,m)}function v(e,t){const n=e.b-a;return t*=Math.abs(n),{a:a,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function w(r){const{delay:s=0,duration:i=300,easing:l=t,tick:w=e,css:k}=c||te,$={start:d()+s,b:r};r||($.group=Y,Y.r+=1),u||g?g=$:(k&&(y(),m=M(n,a,r,i,s,l,k)),r&&w(0,1),u=v($,i),U(()=>G(n,r,"start")),function(e){let t;0===h.size&&f(p),new Promise(n=>{h.add(t={c:e,f:n})})}(e=>{if(g&&e>g.start&&(u=v(g,i),g=null,G(n,u.b,"start"),k&&(y(),m=M(n,a,u.b,u.duration,0,l,c.css))),u)if(e>=u.end)w(a=u.b,1-a),G(n,u.b,"end"),g||(u.b?y():--u.group.r||o(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;a=u.a+u.d*l(t/u.duration),w(a,1-a)}return!(!u&&!g)}))}return{run(e){s(c)?(z||(z=Promise.resolve()).then(()=>{z=null}),z).then(()=>{c=c(),w(e)}):w(e)},end(){y(),u=g=null}}}const re="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function oe(e,t){e.d(1),t.delete(e.key)}function se(e,t,n,r,o,s,i,l,c,a,u,d){let f=e.length,h=s.length,p=f;const g={};for(;p--;)g[e[p].key]=p;const m=[],y=new Map,v=new Map;for(p=h;p--;){const e=d(o,s,p),l=n(e);let c=i.get(l);c?r&&c.p(e,t):(c=a(l,e)).c(),y.set(l,m[p]=c),l in g&&v.set(l,Math.abs(p-g[l]))}const w=new Set,k=new Set;function $(e){X(e,1),e.m(l,u),i.set(e.key,e),u=e.first,h--}for(;f&&h;){const t=m[h-1],n=e[f-1],r=t.key,o=n.key;t===n?(u=t.first,f--,h--):y.has(o)?!i.has(r)||w.has(r)?$(t):k.has(o)?f--:v.get(r)>v.get(o)?(k.add(r),$(t)):(w.add(o),f--):(c(n,i),f--)}for(;f--;){const t=e[f];y.has(t.key)||c(t,i)}for(;h;)$(m[h-1]);return m}function ie(e){e&&e.c()}function le(e,t,r,i){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=e.$$;l&&l.m(t,r),i||U(()=>{const t=c.map(n).filter(s);a?a.push(...t):o(t),e.$$.on_mount=[]}),u.forEach(U)}function ce(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){-1===e.$$.dirty[0]&&(q.push(e),K||(K=!0,j.then(V)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(t,n,s,i,l,c,a=[-1]){const u=W;T(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let f=!1;if(d.ctx=s?s(t,n.props||{},(e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&l(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),f&&ae(t,e)),n}):[],d.update(),f=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const e=(h=n.target,Array.from(h.childNodes));d.fragment&&d.fragment.l(e),e.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&X(t.$$.fragment),le(t,n.target,n.anchor,n.customElement),V()}var h;T(u)}class de{$destroy(){ce(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function fe(e,{delay:n=0,duration:r=400,easing:o=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:o,css:e=>`opacity: ${e*s}`}}const{window:he}=re;function pe(e){let t,n,r,i,l,c,a,u,d,f,h,p=e[0].closeButton&&ge(e);var w=e[1];return w&&(c=new w({})),{c(){t=v("div"),n=v("div"),r=v("div"),p&&p.c(),i=k(),l=v("div"),c&&ie(c.$$.fragment),C(l,"class","content svelte-2wx9ab"),C(l,"style",e[8]),C(r,"class","window svelte-2wx9ab"),C(r,"role","dialog"),C(r,"aria-modal","true"),C(r,"style",e[7]),C(n,"class","window-wrap svelte-2wx9ab"),C(n,"style",e[6]),C(t,"class","bg svelte-2wx9ab"),C(t,"style",e[5])},m(o,a){m(o,t,a),g(t,n),g(n,r),p&&p.m(r,null),g(r,i),g(r,l),c&&le(c,l,null),e[37](r),e[38](n),e[39](t),d=!0,f||(h=[b(r,"introstart",function(){s(e[12])&&e[12].apply(this,arguments)}),b(r,"outrostart",function(){s(e[13])&&e[13].apply(this,arguments)}),b(r,"introend",function(){s(e[14])&&e[14].apply(this,arguments)}),b(r,"outroend",function(){s(e[15])&&e[15].apply(this,arguments)}),b(t,"click",e[19])],f=!0)},p(o,s){if((e=o)[0].closeButton?p?(p.p(e,s),1&s[0]&&X(p,1)):((p=ge(e)).c(),X(p,1),p.m(r,i)):p&&(Q(),ee(p,1,1,()=>{p=null}),Z()),w!==(w=e[1])){if(c){Q();const e=c;ee(e.$$.fragment,1,0,()=>{ce(e,1)}),Z()}w?(ie((c=new w({})).$$.fragment),X(c.$$.fragment,1),le(c,l,null)):c=null}(!d||256&s[0])&&C(l,"style",e[8]),(!d||128&s[0])&&C(r,"style",e[7]),(!d||64&s[0])&&C(n,"style",e[6]),(!d||32&s[0])&&C(t,"style",e[5])},i(n){d||(X(p),c&&X(c.$$.fragment,n),U(()=>{a||(a=ne(r,e[11],e[0].transitionWindowProps,!0)),a.run(1)}),U(()=>{u||(u=ne(t,e[10],e[0].transitionBgProps,!0)),u.run(1)}),d=!0)},o(n){ee(p),c&&ee(c.$$.fragment,n),a||(a=ne(r,e[11],e[0].transitionWindowProps,!1)),a.run(0),u||(u=ne(t,e[10],e[0].transitionBgProps,!1)),u.run(0),d=!1},d(n){n&&y(t),p&&p.d(),c&&ce(c),e[37](null),n&&a&&a.end(),e[38](null),e[39](null),n&&u&&u.end(),f=!1,o(h)}}}function ge(e){let t,n,r,o,s;const i=[ye,me],l=[];function c(e,n){return 1&n[0]&&(t=!!e[16](e[0].closeButton)),t?0:1}return n=c(e,[-1]),r=l[n]=i[n](e),{c(){r.c(),o=$()},m(e,t){l[n].m(e,t),m(e,o,t),s=!0},p(e,t){let s=n;(n=c(e,t))===s?l[n].p(e,t):(Q(),ee(l[s],1,1,()=>{l[s]=null}),Z(),(r=l[n])?r.p(e,t):(r=l[n]=i[n](e)).c(),X(r,1),r.m(o.parentNode,o))},i(e){s||(X(r),s=!0)},o(e){ee(r),s=!1},d(e){l[n].d(e),e&&y(o)}}}function me(t){let n,r,o;return{c(){C(n=v("button"),"class","close svelte-2wx9ab"),C(n,"style",t[9])},m(e,s){m(e,n,s),r||(o=b(n,"click",t[17]),r=!0)},p(e,t){512&t[0]&&C(n,"style",e[9])},i:e,o:e,d(e){e&&y(n),r=!1,o()}}}function ye(e){let t,n,r;var o=e[0].closeButton;function s(e){return{props:{onClose:e[17]}}}return o&&(t=new o(s(e))),{c(){t&&ie(t.$$.fragment),n=$()},m(e,o){t&&le(t,e,o),m(e,n,o),r=!0},p(e,r){if(o!==(o=e[0].closeButton)){if(t){Q();const e=t;ee(e.$$.fragment,1,0,()=>{ce(e,1)}),Z()}o?(ie((t=new o(s(e))).$$.fragment),X(t.$$.fragment,1),le(t,n.parentNode,n)):t=null}},i(e){r||(t&&X(t.$$.fragment,e),r=!0)},o(e){t&&ee(t.$$.fragment,e),r=!1},d(e){e&&y(n),t&&ce(t,e)}}}function ve(e){let t,n,r,o,s=e[1]&&pe(e);const i=e[36].default,l=function(e,t,n,r){if(e){const o=c(e,t,n,r);return e[0](o)}}(i,e,e[35],null);return{c(){s&&s.c(),t=k(),l&&l.c()},m(i,c){s&&s.m(i,c),m(i,t,c),l&&l.m(i,c),n=!0,r||(o=b(he,"keydown",e[18]),r=!0)},p(e,n){e[1]?s?(s.p(e,n),2&n[0]&&X(s,1)):((s=pe(e)).c(),X(s,1),s.m(t.parentNode,t)):s&&(Q(),ee(s,1,1,()=>{s=null}),Z()),l&&l.p&&16&n[1]&&a(l,i,e,e[35],n,null,null)},i(e){n||(X(s),X(l,e),n=!0)},o(e){ee(s),ee(l,e),n=!1},d(e){s&&s.d(e),e&&y(t),l&&l.d(e),r=!1,o()}}}function we(e,t={}){return function(n){return new e({...n,props:{...t,...n.props}})}}function ke(e,t,n){let{$$slots:r={},$$scope:o}=t;const s=function(){const e=F();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const o=S(t,n);r.slice().forEach(t=>{t.call(e,o)})}}}(),i=P;let{show:l=null}=t,{key:c="simple-modal"}=t,{closeButton:a=!0}=t,{closeOnEsc:u=!0}=t,{closeOnOuterClick:d=!0}=t,{styleBg:f={}}=t,{styleWindowWrap:h={}}=t,{styleWindow:p={}}=t,{styleContent:g={}}=t,{styleCloseButton:m={}}=t,{setContext:y=i}=t,{transitionBg:v=fe}=t,{transitionBgProps:w={duration:250}}=t,{transitionWindow:k=v}=t,{transitionWindowProps:$=w}=t;const b={closeButton:a,closeOnEsc:u,closeOnOuterClick:d,styleBg:f,styleWindowWrap:h,styleWindow:p,styleContent:g,styleCloseButton:m,transitionBg:v,transitionBgProps:w,transitionWindow:k,transitionWindowProps:$};let x,C,_,O,B,W,E,M,A,T,q,D,L,j={...b},K=null;const U=e=>Object.keys(e).reduce((t,n)=>`${t}; ${(e=>e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(n)}: ${e[n]}`,""),H=e=>!!(e&&e.constructor&&e.call&&e.apply),N=()=>{};let V=N,R=N,z=N,G=N;const J=(e,t={},r={},o={})=>{n(1,K=we(e,t)),n(0,j={...b,...r}),n(5,B=U(j.styleBg)),n(6,W=U(j.styleWindowWrap)),n(7,E=U(j.styleWindow)),n(8,M=U(j.styleContent)),n(9,A=U(j.styleCloseButton)),n(10,T=j.transitionBg),n(11,q=j.transitionWindow),Q(),n(12,V=(e=>{o.onOpen&&o.onOpen(e),s("opening")})),n(13,R=(e=>{o.onClose&&o.onClose(e),s("closing")})),n(14,z=(e=>{o.onOpened&&o.onOpened(e),s("opened")})),n(15,G=(e=>{o.onClosed&&o.onClosed(e),s("closed")}))},Y=(e={})=>{n(13,R=e.onClose||R),n(15,G=e.onClosed||G),n(1,K=null),Z()},Q=()=>{O=window.scrollY,D=document.body.style.position,L=document.body.style.overflow,document.body.style.position="fixed",document.body.style.top=`-${O}px`,document.body.style.overflow="hidden"},Z=()=>{document.body.style.position=D||"",document.body.style.top="",document.body.style.overflow=L||"",window.scrollTo(0,O)};var X;return y(c,{open:J,close:Y}),X=(()=>{Y()}),F().$$.on_destroy.push(X),e.$$set=(e=>{"show"in e&&n(20,l=e.show),"key"in e&&n(21,c=e.key),"closeButton"in e&&n(22,a=e.closeButton),"closeOnEsc"in e&&n(23,u=e.closeOnEsc),"closeOnOuterClick"in e&&n(24,d=e.closeOnOuterClick),"styleBg"in e&&n(25,f=e.styleBg),"styleWindowWrap"in e&&n(26,h=e.styleWindowWrap),"styleWindow"in e&&n(27,p=e.styleWindow),"styleContent"in e&&n(28,g=e.styleContent),"styleCloseButton"in e&&n(29,m=e.styleCloseButton),"setContext"in e&&n(30,y=e.setContext),"transitionBg"in e&&n(31,v=e.transitionBg),"transitionBgProps"in e&&n(32,w=e.transitionBgProps),"transitionWindow"in e&&n(33,k=e.transitionWindow),"transitionWindowProps"in e&&n(34,$=e.transitionWindowProps),"$$scope"in e&&n(35,o=e.$$scope)}),e.$$.update=(()=>{1048576&e.$$.dirty[0]&&(H(l)?J(l):Y())}),[j,K,x,C,_,B,W,E,M,A,T,q,V,R,z,G,H,Y,e=>{if(j.closeOnEsc&&K&&"Escape"===e.key&&(e.preventDefault(),Y()),K&&"Tab"===e.key){const t=_.querySelectorAll("*"),n=Array.from(t).filter(e=>e.tabIndex>=0);let r=n.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=n.length+(e.shiftKey?-1:1),n[r%=n.length].focus(),e.preventDefault()}},e=>{!j.closeOnOuterClick||e.target!==x&&e.target!==C||(e.preventDefault(),Y())},l,c,a,u,d,f,h,p,g,m,y,v,w,k,$,o,r,function(e){I[e?"unshift":"push"](()=>{n(4,_=e)})},function(e){I[e?"unshift":"push"](()=>{n(3,C=e)})},function(e){I[e?"unshift":"push"](()=>{n(2,x=e)})}]}class $e extends de{constructor(e){super(),ue(this,e,ke,ve,i,{show:20,key:21,closeButton:22,closeOnEsc:23,closeOnOuterClick:24,styleBg:25,styleWindowWrap:26,styleWindow:27,styleContent:28,styleCloseButton:29,setContext:30,transitionBg:31,transitionBgProps:32,transitionWindow:33,transitionWindowProps:34},[-1,-1])}}function be(e){let t,n,r,o,s,i,l;return{c(){(t=v("li")).textContent="The resources will find is crowdsourced user generated. It is contribued by people like you.",n=k(),(r=v("li")).textContent="Try to communicate and verify the authenticity, check profile and replies from the account.",o=k(),(s=v("li")).textContent="Certain checkboxes have been already checked for relevant results. Try fiddling around if you are unable to find any results.",i=k(),(l=v("li")).innerHTML="Do <strong>NOT</strong> make advanced payments if you are uncertain."},m(e,c){m(e,t,c),m(e,n,c),m(e,r,c),m(e,o,c),m(e,s,c),m(e,i,c),m(e,l,c)},d(e){e&&y(t),e&&y(n),e&&y(r),e&&y(o),e&&y(s),e&&y(i),e&&y(l)}}}function xe(t){let n,r,o,s,i,l,c=t[0]&&be();return{c(){n=v("div"),(r=v("h2")).textContent="Things to keep in mind.",o=k(),s=v("ol"),c&&c.c(),i=k(),(l=v("li")).innerHTML='Make sure search results are sorted by &quot;Latest&quot; for the most recent pull.\n      <br/> \n      <img src="sort-click-here.jpg" alt=""/>'},m(e,t){m(e,n,t),g(n,r),g(n,o),g(n,s),c&&c.m(s,null),g(s,i),g(s,l)},p(e,[t]){e[0]?c||((c=be()).c(),c.m(s,i)):c&&(c.d(1),c=null)},i:e,o:e,d(e){e&&y(n),c&&c.d()}}}function Ce(e,t,n){let{large:r=!0}=t;return e.$$set=(e=>{"large"in e&&n(0,r=e.large)}),[r]}class _e extends de{constructor(e){super(),ue(this,e,Ce,xe,i,{large:0})}}function Oe(t){let n;return{c(){(n=v("div")).innerHTML='<div><a href="whatsapp://send?text=❗COVID19%20Crowdsourced%20Resources❗%0AYou%20can%20find%20hospital%20beds%20%2C%20oxygen%20cylinders%20and%20other%20covid%20medical%20needs%20in%20your%20city.%0AEnter%20your%20city%20📍or%20locality%20and%20click%20on%20search%20🔍%20Most%20recent%20and%20verified%20✅%20numbers%20will%20shown.%0A%0Ahttps%3A%2F%2Fanxkhn.github.io%2Fcovid19resources%0A%0AThe%20website%20also%20contains%20links%20to%20plasma%20donors%20👨🏻%E2%80%8D⚕%2C%20covid%20helpline%20numbers%20📞%2C%20world%20health%20organization%20guidelines%20🗒%EF%B8%8F%20and%20more%20%20💉.%20%0A%0A💠%20Share%20it%20with%20as%20many%20people%20👥%20as%20you%20can%2C%20and%20maybe%20you%20can%20save%20a%20life%20.🩸%0A%0Ahttps%3A%2F%2Fanxkhn.github.io%2Fcovid19resources%0A%0A🇮🇳🇮🇳%20%23covid19india%20%23ak"><strong>Share on WhatsApp</strong></a></div> \n  <div><a href="https://github.com/anxkhn/anxkhn.github.io/tree/main/covid19resources" target="_blank" rel="noopener noreferrer">Source code.</a></div> \n  <div><a href="https://instagram.com/magnificent_khan" target="_blank" rel="noopener noreferrer">Got feedback? DM Me</a></div> \n  <div>Made with ♥ in India by <a href="https://instagram.com/magnificent_khan" target="_blank" rel="noopener noreferrer">Anas Khan</a>.</div> \n  <div>Special Thanks to <a href="https://github.com/umanghome/" target="_blank" rel="noopener noreferrer">Umang</a> and everyone on the amazing internet.</div>',C(n,"class","feedback svelte-1y2wvnt")},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}class Se extends de{constructor(e){super(),ue(this,e,null,Oe,i,{})}}function Be(t){let n;return{c(){(n=v("div")).innerHTML='<h2>Other Resources</h2> \n\t<ul><li><strong><a href="https://anxkhn.github.io/covid19resources/hindi" target="_blank" rel="noopener noreferrer">भाषा\n\t\t\t\t\tबदलें - हिंदी भाषा में पढ़ें</a></strong></li> \n\t\t<li><strong>Make sure to also check for the below mentioned websites for more leads.</strong></li> \n\t\t<li>Find oxygen cylinder providers in your locality. <a href="https://covidresource.glideapp.io" target="_blank" rel="noopener noreferrer">covidresource.glideapp.io</a></li> \n\t\t<li>Connect to a matching plasma donor. <a href="https://covidplasma.online" target="_blank" rel="noopener noreferrer">www.covidplasma.online</a></li> \n\t\t<li>Vaccines are safe. Get Vaccinated for COVID 19. <a href="https://www.cowin.gov.in" target="_blank" rel="noopener noreferrer">cowin.gov.in</a></li> \n\t\t<li>COVID 19 helpline numbers by Ministry of Health and Family Welfare. <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" target="_blank" rel="noopener noreferrer">mohfw.gov.in</a></li> \n\t\t<li>Get all the correct facts and prevention tips from WHO. <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer">who.int</a></li> \n\t\t<li>Stay mentally fit during these unprecedented times. <a href="https://www.instagram.com/beyond_the__bounds" target="_blank" rel="noopener noreferrer">BeyondTheBounds</a></li> \n\t\t<li>Coronavirus update in India with statistics and graphs. <a href="https://www.covid19india.org" target="_blank" rel="noopener noreferrer">covid19india.org</a></li> \n\t\t<li>Live COVID Trakcer by WorldoMeters. <a href="https://www.worldometers.info/coronavirus/country/india/" target="_blank" rel="noopener noreferrer">worldometers.info</a></li></ul>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}class We extends de{constructor(e){super(),ue(this,e,null,Be,i,{})}}function Ee(t){let n;return{c(){(n=v("div")).innerHTML='<h2>Donate / Contribute.</h2> \n\t<ul><li>Help someone in need. Donate Oxygen Cylinders via <a href="https://hemkuntfoundation.com/donate-now/" target="_blank" rel="noopener noreferrer">Hemkunt Foundation</a></li> \n\t\t<li>Contribute Verified Data and help us make a detailed database. <a href="https://life.coronasafe.network/data" target="_blank" rel="noopener noreferrer">covidfyi.in</a></li> \n\t\t<li>Volunteer for plasma donation , save a life. here- <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9D-YJyphUQSS5BOWBsqsD0Nh7oG9aSHX7ElTJ9I46VLTV8g/viewform?authuser=0" target="_blank" rel="noopener noreferrer">Plasma Warriors.</a></li></ul>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}class Me extends de{constructor(e){super(),ue(this,e,null,Ee,i,{})}}const Ae=["delhi","pune","mumbai","bangalore","thane","hyderabad","nagpur","lucknow","ahmedabad","chennai","kolkata","goa","jaipur"];function Te(e){return e?e[0].toUpperCase()+e.slice(1):e}const Fe={generated_links:"generated_links"},Pe={setItem:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(e){}return t},getItem:(e,t)=>{try{const n=localStorage.getItem(e);return null==n?t:JSON.parse(n)}catch(e){}return t},removeItem:e=>{try{localStorage.removeItem(e)}catch(e){}}};function qe(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ie(t){let n;return{c(){(n=v("p")).textContent="Please enter a city name to generate links",C(n,"class","svelte-10c14at")},m(e,t){m(e,n,t)},p:e,d(e){e&&y(n)}}}function De(e){let t,n=[],r=new Map,o=e[0];const s=e=>e[1].href;for(let t=0;t<o.length;t+=1){let i=qe(e,o,t),l=s(i);r.set(l,n[t]=Le(l,i))}return{c(){t=v("ol");for(let e=0;e<n.length;e+=1)n[e].c();C(t,"id","city-links"),C(t,"class","svelte-10c14at")},m(e,r){m(e,t,r);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,i){1&i&&(o=e[0],n=se(n,i,s,1,e,o,r,t,oe,Le,null,qe))},d(e){e&&y(t);for(let e=0;e<n.length;e+=1)n[e].d()}}}function Le(e,t){let n,r,o,s,i=Te(t[1].city)+"";return{key:e,first:null,c(){n=v("li"),r=v("a"),o=w(i),C(r,"href",s=t[1].href),C(r,"target","_blank"),C(r,"rel","noopener noreferrer"),this.first=n},m(e,t){m(e,n,t),g(n,r),g(r,o)},p(e,n){t=e,1&n&&i!==(i=Te(t[1].city)+"")&&_(o,i),1&n&&s!==(s=t[1].href)&&C(r,"href",s)},d(e){e&&y(n)}}}function je(t){let n,r,o;function s(e,t){return e[0].length>0?De:Ie}let i=s(t),l=i(t);return{c(){n=v("div"),(r=v("h3")).textContent="Your Generated Links",o=k(),l.c(),C(r,"class","svelte-10c14at")},m(e,t){m(e,n,t),g(n,r),g(n,o),l.m(n,null)},p(e,[t]){i===(i=s(e))&&l?l.p(e,t):(l.d(1),(l=i(e))&&(l.c(),l.m(n,null)))},i:e,o:e,d(e){e&&y(n),l.d()}}}function Ke(e,t,n){let{links:r=[]}=t;return e.$$set=(e=>{"links"in e&&n(0,r=e.links)}),[r]}class Ue extends de{constructor(e){super(),ue(this,e,Ke,je,i,{links:0})}}function He(e){let t,n,r,o;return t=new _e({props:{large:!1}}),r=new Ue({props:{links:e[0]}}),{c(){ie(t.$$.fragment),n=k(),ie(r.$$.fragment)},m(e,s){le(t,e,s),m(e,n,s),le(r,e,s),o=!0},p(e,[t]){const n={};1&t&&(n.links=e[0]),r.$set(n)},i(e){o||(X(t.$$.fragment,e),X(r.$$.fragment,e),o=!0)},o(e){ee(t.$$.fragment,e),ee(r.$$.fragment,e),o=!1},d(e){ce(t,e),e&&y(n),ce(r,e)}}}function Ne(e,t,n){let{links:r}=t;return e.$$set=(e=>{"links"in e&&n(0,r=e.links)}),[r]}class Ve extends de{constructor(e){super(),ue(this,e,Ne,He,i,{links:0})}}const Re=[];const ze=function(t,n=e){let r;const o=[];function s(e){if(i(t,e)&&(t=e,r)){const e=!Re.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),Re.push(n,t)}if(e){for(let e=0;e<Re.length;e+=2)Re[e][0](Re[e+1]);Re.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,l=e){const c=[i,l];return o.push(c),1===o.length&&(r=n(s)||e),i(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}(null);function Ge(e,t,n){const r=e.slice();return r[25]=t[n],r}function Je(e,t,n){const r=e.slice();return r[25]=t[n],r}function Ye(e,t,n){const r=e.slice();return r[30]=t[n],r[31]=t,r[32]=n,r}function Qe(e,t,n){const r=e.slice();return r[30]=t[n],r[33]=t,r[34]=n,r}function Ze(e){let t;return{c(){(t=v("a")).textContent="Previous Searches",C(t,"href","#previous-searches")},m(e,n){m(e,t,n)},d(e){e&&y(t)}}}function Xe(e,t){let n,r,o,s,i,l,c,a,u,d,f=Te(t[30])+"";function h(){t[10].call(r,t[30])}return{key:e,first:null,c(){n=v("div"),r=v("input"),s=k(),i=v("label"),l=w(f),a=k(),C(r,"type","checkbox"),C(r,"id",o=`alsoSearchFor-${t[30]}`),C(r,"class","svelte-3urpvt"),C(i,"for",c=`alsoSearchFor-${t[30]}`),C(i,"class","svelte-3urpvt"),C(n,"class","svelte-3urpvt"),this.first=n},m(e,o){m(e,n,o),g(n,r),r.checked=t[2][t[30]].checked,g(n,s),g(n,i),g(i,l),g(n,a),u||(d=b(r,"change",h),u=!0)},p(e,n){t=e,4&n[0]&&o!==(o=`alsoSearchFor-${t[30]}`)&&C(r,"id",o),4&n[0]&&(r.checked=t[2][t[30]].checked),4&n[0]&&f!==(f=Te(t[30])+"")&&_(l,f),4&n[0]&&c!==(c=`alsoSearchFor-${t[30]}`)&&C(i,"for",c)},d(e){e&&y(n),u=!1,d()}}}function et(e,t){let n,r,o,s,i,l,c,a,u,d,f,h=t[30]+"";function p(){t[15].call(r,t[30])}return{key:e,first:null,c(){n=v("div"),r=v("input"),s=k(),i=v("label"),l=w('"'),c=w(h),a=w('"'),C(r,"type","checkbox"),C(r,"id",o=`excludeKeywords-${t[30]}`),C(r,"class","svelte-3urpvt"),C(i,"for",u=`excludeKeywords-${t[30]}`),this.first=n},m(e,o){m(e,n,o),g(n,r),r.checked=t[3][t[30]].checked,g(n,s),g(n,i),g(i,l),g(i,c),g(i,a),d||(f=b(r,"change",p),d=!0)},p(e,n){t=e,8&n[0]&&o!==(o=`excludeKeywords-${t[30]}`)&&C(r,"id",o),8&n[0]&&(r.checked=t[3][t[30]].checked),8&n[0]&&h!==(h=t[30]+"")&&_(c,h),8&n[0]&&u!==(u=`excludeKeywords-${t[30]}`)&&C(i,"for",u)},d(e){e&&y(n),d=!1,f()}}}function tt(e,t){let n,r,o,s,i=Te(t[25].city)+"";return{key:e,first:null,c(){n=v("li"),r=v("a"),o=w(i),C(r,"href",s=t[25].href),C(r,"target","_blank"),C(r,"rel","noopener noreferrer"),this.first=n},m(e,t){m(e,n,t),g(n,r),g(r,o)},p(e,n){t=e,32&n[0]&&i!==(i=Te(t[25].city)+"")&&_(o,i),32&n[0]&&s!==(s=t[25].href)&&C(r,"href",s)},d(e){e&&y(n)}}}function nt(e){let t,n,r,o,s,i,l,c,a,u,d=[],f=new Map,h=e[4];const p=e=>e[25].href;for(let t=0;t<h.length;t+=1){let n=Ge(e,h,t),r=p(n);f.set(r,d[t]=rt(r,n))}return{c(){t=v("div"),(n=v("h2")).textContent="Previous Searches",r=k(),o=v("ol");for(let e=0;e<d.length;e+=1)d[e].c();s=k(),(i=v("button")).textContent="Clear Previous Searches",l=k(),c=v("hr"),C(o,"class","split-three-two svelte-3urpvt"),C(i,"id","clear"),C(i,"class","svelte-3urpvt"),C(t,"id","previous-searches"),C(c,"class","svelte-3urpvt")},m(f,h){m(f,t,h),g(t,n),g(t,r),g(t,o);for(let e=0;e<d.length;e+=1)d[e].m(o,null);g(t,s),g(t,i),m(f,l,h),m(f,c,h),a||(u=b(i,"click",x(e[8])),a=!0)},p(e,t){16&t[0]&&(h=e[4],d=se(d,t,p,1,e,h,f,o,oe,rt,null,Ge))},d(e){e&&y(t);for(let e=0;e<d.length;e+=1)d[e].d();e&&y(l),e&&y(c),a=!1,u()}}}function rt(e,t){let n,r,o,s,i=Te(t[25].city)+"";return{key:e,first:null,c(){n=v("li"),r=v("a"),o=w(i),C(r,"href",s=t[25].href),C(r,"target","_blank"),C(r,"rel","noopener noreferrer"),this.first=n},m(e,t){m(e,n,t),g(n,r),g(r,o)},p(e,n){t=e,16&n[0]&&i!==(i=Te(t[25].city)+"")&&_(o,i),16&n[0]&&s!==(s=t[25].href)&&C(r,"href",s)},d(e){e&&y(n)}}}function ot(e){let t,n,r,s,i,l,c,a,u,d,f,h,p,$,_,S,B,W,E,M,A,T,F,P,q,I,D,L,j,K,U,H,N,V,R,z,G,J,Y,Q,Z,te,ne,re,ae,ue,de,fe,he,pe,ge,me,ye,ve,we,ke,be,xe,Ce,Oe,Be,Ee,Ae,Te,Fe,Pe,qe,Ie,De,Le,je,Ke,Ue,He,Ne,Ve,Re,ze,Ge,rt,ot,st,it,lt,ct,at,ut,dt,ft,ht,pt,gt,mt,yt=[],vt=new Map,wt=[],kt=new Map,$t=[],bt=new Map,xt=e[4].length>0&&Ze();h=new _e({});let Ct=Object.keys(e[2]);const _t=e=>e[30];for(let t=0;t<Ct.length;t+=1){let n=Qe(e,Ct,t),r=_t(n);vt.set(r,yt[t]=Xe(r,n))}let Ot=Object.keys(e[3]);const St=e=>e[30];for(let t=0;t<Ot.length;t+=1){let n=Ye(e,Ot,t),r=St(n);kt.set(r,wt[t]=et(r,n))}Le=new $e({props:{show:e[6],transitionBgProps:{duration:0},transitionWindowProps:{duration:0}}});let Bt=e[5];const Wt=e=>e[25].href;for(let t=0;t<Bt.length;t+=1){let n=Je(e,Bt,t),r=Wt(n);bt.set(r,$t[t]=tt(r,n))}let Et=e[4].length>0&&nt(e);return st=new We({}),at=new Me({}),ht=new Se({}),{c(){t=v("main"),(n=v("h1")).textContent="COVID19 Crowdsourced Resources",r=k(),s=v("hr"),i=k(),l=v("nav"),(c=v("a")).textContent="Frequently Searched Cities",a=k(),xt&&xt.c(),u=k(),d=v("hr"),f=k(),ie(h.$$.fragment),p=k(),$=v("hr"),_=k(),S=v("div"),(B=v("h2")).textContent="Search",W=k(),E=v("form"),M=v("div"),(A=v("label")).textContent="Name of city",T=k(),F=v("br"),P=k(),q=v("input"),I=k(),D=v("div");for(let e=0;e<yt.length;e+=1)yt[e].c();L=k(),j=v("div"),(K=v("label")).textContent="Other:",U=k(),H=v("input"),N=k(),(V=v("div")).innerHTML="<button>Search</button>",R=k(),z=v("hr"),G=k(),J=v("div"),Y=v("div"),Q=v("div"),Z=v("input"),te=k(),(ne=v("label")).innerHTML="Show verified tweets only\n              <br/> \n              <strong>Uncheck this for smaller cities</strong> \n              <br/>\n              (Tweet should contain &quot;verified&quot;)",re=k(),ae=v("div"),ue=v("input"),de=k(),(fe=v("label")).innerHTML="Show tweets with minimum 15 likes.\n              <br/> \n              <strong>Uncheck this for smaller cities/localities.</strong> \n              <br/>\n              (Tweet should have gained some engagement.)",he=k(),pe=v("div"),ge=v("input"),me=k(),(ye=v("label")).innerHTML="Exclude unverified tweets\n              <br/>\n              (Tweet should not contain &quot;not verified&quot; and &quot;unverified&quot;)",ve=k(),we=v("div"),ke=w("Tweets should "),(be=v("strong")).textContent="NOT",xe=w(" have these words:\n      \n            ");for(let e=0;e<wt.length;e+=1)wt[e].c();Ce=k(),Oe=v("div"),(Be=v("label")).textContent="Other:",Ee=k(),Ae=v("input"),Te=k(),Fe=v("div"),Pe=v("input"),qe=k(),(Ie=v("label")).textContent="Show Tweets near me",De=k(),ie(Le.$$.fragment),je=k(),Ke=v("hr"),Ue=k(),He=v("div"),(Ne=v("h2")).textContent="Frequently Searched Cities",Ve=k(),Re=v("ol");for(let e=0;e<$t.length;e+=1)$t[e].c();ze=k(),Ge=v("hr"),rt=k(),Et&&Et.c(),ot=k(),ie(st.$$.fragment),it=k(),lt=v("hr"),ct=k(),ie(at.$$.fragment),ut=k(),dt=v("hr"),ft=k(),ie(ht.$$.fragment),C(s,"class","svelte-3urpvt"),C(c,"href","#frequent-searches"),C(l,"class","split-two-one svelte-3urpvt"),C(d,"class","svelte-3urpvt"),C($,"class","svelte-3urpvt"),C(A,"for","cities"),C(q,"type","text"),C(q,"id","cities"),C(q,"placeholder","Enter city name here"),C(q,"class","svelte-3urpvt"),C(D,"class","split-three-two checkbox-fields svelte-3urpvt"),C(K,"for","alsoSearchFor-other"),C(H,"type","text"),C(H,"id","alsoSearchFor-other"),C(j,"class","other-input svelte-3urpvt"),C(V,"id","generate-button-container"),C(V,"class","svelte-3urpvt"),C(z,"class","svelte-3urpvt"),C(Z,"type","checkbox"),C(Z,"id","verifiedOnly"),C(ne,"for","verifiedOnly"),C(Q,"class","svelte-3urpvt"),C(ue,"type","checkbox"),C(ue,"id","minfaves15"),C(fe,"for","minfaves15"),C(ae,"class","svelte-3urpvt"),C(ge,"type","checkbox"),C(ge,"id","excludeUnverified"),C(ye,"for","excludeUnverified"),C(pe,"class","svelte-3urpvt"),C(Be,"for","excludeKeywords-other"),C(Ae,"type","text"),C(Ae,"id","excludeKeywords-other"),C(Oe,"class","other-input svelte-3urpvt"),C(we,"class","svelte-3urpvt"),C(Pe,"type","checkbox"),C(Pe,"id","nearMe"),C(Ie,"for","nearMe"),C(Fe,"class","svelte-3urpvt"),C(Y,"class","split-two-one spaced svelte-3urpvt"),C(J,"id","options"),C(J,"class","svelte-3urpvt"),C(Ke,"class","svelte-3urpvt"),C(Re,"class","split-three-two svelte-3urpvt"),C(He,"id","frequent-searches"),C(Ge,"class","svelte-3urpvt"),C(lt,"class","svelte-3urpvt"),C(dt,"class","svelte-3urpvt")},m(o,y){m(o,t,y),g(t,n),g(t,r),g(t,s),g(t,i),g(t,l),g(l,c),g(l,a),xt&&xt.m(l,null),g(t,u),g(t,d),g(t,f),le(h,t,null),g(t,p),g(t,$),g(t,_),g(t,S),g(S,B),g(S,W),g(S,E),g(E,M),g(M,A),g(M,T),g(M,F),g(M,P),g(M,q),O(q,e[0].cities),g(E,I),g(E,D);for(let e=0;e<yt.length;e+=1)yt[e].m(D,null);g(E,L),g(E,j),g(j,K),g(j,U),g(j,H),O(H,e[0].otherAlsoSearchFor),g(E,N),g(E,V),g(E,R),g(E,z),g(E,G),g(E,J),g(J,Y),g(Y,Q),g(Q,Z),Z.checked=e[1].verifiedOnly,g(Q,te),g(Q,ne),g(Y,re),g(Y,ae),g(ae,ue),ue.checked=e[1].minfaves15,g(ae,de),g(ae,fe),g(Y,he),g(Y,pe),g(pe,ge),ge.checked=e[1].excludeUnverified,g(pe,me),g(pe,ye),g(Y,ve),g(Y,we),g(we,ke),g(we,be),g(we,xe);for(let e=0;e<wt.length;e+=1)wt[e].m(we,null);g(we,Ce),g(we,Oe),g(Oe,Be),g(Oe,Ee),g(Oe,Ae),O(Ae,e[0].otherExcludedKeywords),g(Y,Te),g(Y,Fe),g(Fe,Pe),Pe.checked=e[1].nearMe,g(Fe,qe),g(Fe,Ie),g(S,De),le(Le,S,null),g(t,je),g(t,Ke),g(t,Ue),g(t,He),g(He,Ne),g(He,Ve),g(He,Re);for(let e=0;e<$t.length;e+=1)$t[e].m(Re,null);g(t,ze),g(t,Ge),g(t,rt),Et&&Et.m(t,null),g(t,ot),le(st,t,null),g(t,it),g(t,lt),g(t,ct),le(at,t,null),g(t,ut),g(t,dt),g(t,ft),le(ht,t,null),pt=!0,gt||(mt=[b(q,"input",e[9]),b(H,"input",e[11]),b(Z,"change",e[12]),b(ue,"change",e[13]),b(ge,"change",e[14]),b(Ae,"input",e[16]),b(Pe,"change",e[17]),b(E,"submit",x(e[7]))],gt=!0)},p(e,n){e[4].length>0?xt||((xt=Ze()).c(),xt.m(l,null)):xt&&(xt.d(1),xt=null),1&n[0]&&q.value!==e[0].cities&&O(q,e[0].cities),4&n[0]&&(Ct=Object.keys(e[2]),yt=se(yt,n,_t,1,e,Ct,vt,D,oe,Xe,null,Qe)),1&n[0]&&H.value!==e[0].otherAlsoSearchFor&&O(H,e[0].otherAlsoSearchFor),2&n[0]&&(Z.checked=e[1].verifiedOnly),2&n[0]&&(ue.checked=e[1].minfaves15),2&n[0]&&(ge.checked=e[1].excludeUnverified),8&n[0]&&(Ot=Object.keys(e[3]),wt=se(wt,n,St,1,e,Ot,kt,we,oe,et,Ce,Ye)),1&n[0]&&Ae.value!==e[0].otherExcludedKeywords&&O(Ae,e[0].otherExcludedKeywords),2&n[0]&&(Pe.checked=e[1].nearMe);const r={};64&n[0]&&(r.show=e[6]),Le.$set(r),32&n[0]&&(Bt=e[5],$t=se($t,n,Wt,1,e,Bt,bt,Re,oe,tt,null,Je)),e[4].length>0?Et?Et.p(e,n):((Et=nt(e)).c(),Et.m(t,ot)):Et&&(Et.d(1),Et=null)},i(e){pt||(X(h.$$.fragment,e),X(Le.$$.fragment,e),X(st.$$.fragment,e),X(at.$$.fragment,e),X(ht.$$.fragment,e),pt=!0)},o(e){ee(h.$$.fragment,e),ee(Le.$$.fragment,e),ee(st.$$.fragment,e),ee(at.$$.fragment,e),ee(ht.$$.fragment,e),pt=!1},d(e){e&&y(t),xt&&xt.d(),ce(h);for(let e=0;e<yt.length;e+=1)yt[e].d();for(let e=0;e<wt.length;e+=1)wt[e].d();ce(Le);for(let e=0;e<$t.length;e+=1)$t[e].d();Et&&Et.d(),ce(st),ce(at),ce(ht),gt=!1,o(mt)}}}function st(e,t,n){let r;l(e,ze,e=>n(6,r=e));const o={cities:"",otherAlsoSearchFor:"",otherExcludedKeywords:""},s={nearMe:!1,verifiedOnly:!0,minfaves15:!0,excludeUnverified:!0},i={beds:{keywords:["bed","beds"],checked:!0},ICU:{keywords:["icu"],checked:!0},oxygen:{keywords:["oxygen"],checked:!0},ventilator:{keywords:["ventilator","ventilators"],checked:!0},tests:{keywords:["test","tests","testing"],checked:!1},fabiflu:{keywords:["fabiflu"],checked:!1},remdesivir:{keywords:["remdesivir"],checked:!1},favipiravir:{keywords:["favipiravir"],checked:!1},tocilizumab:{keywords:["tocilizumab"],checked:!1},plasma:{keywords:["plasma"],checked:!1},food:{keywords:["tiffin","food"],checked:!1}},c={needed:{keywords:["needed","needs","need","lead","leads"],checked:!0},required:{keywords:["required","requirement","requires","required","requires","requirements"],checked:!0}};let a=[],u=Pe.getItem(Fe.generated_links,[]),d=[];function f(){const e=Object.keys(i).reduce((e,t)=>i[t].checked?e.concat(i[t].keywords):e,[]);return o.otherAlsoSearchFor&&e.push(o.otherAlsoSearchFor),e.length>0?`(${e.join(" OR ")})`:""}function h(){const e=Object.keys(c).reduce((e,t)=>c[t].checked?e.concat(c[t].keywords):e,[]);return o.otherExcludedKeywords&&e.push(o.otherExcludedKeywords),e.map(e=>`-"${e}"`).join(" ")}function p(e){return{city:e,href:g(e)}}function g(e){const t=new URLSearchParams,n=[s.minfaves15&&"min_faves:15",s.verifiedOnly&&"verified",e.trim(),f(),s.excludeUnverified&&'-"not verified"',s.excludeUnverified&&'-"unverified"',h()].filter(Boolean).join(" ");return t.set("q",n),t.set("f","live"),s.nearMe&&t.set("lf","on"),`https://twitter.com/search?${t.toString()}`}return e.$$.update=(()=>{15&e.$$.dirty[0]&&function(){if(!o.cities)return void(a=[]);const e=o.cities.split(",").map(e=>e.trim()).filter(Boolean);a=e.map(p)}(),15&e.$$.dirty[0]&&n(5,d=Ae.map(p))}),[o,s,i,c,u,d,r,function(){o.cities?(ze.set(we(Ve,{links:a})),Pe.setItem(Fe.generated_links,a)):alert("Please enter city name")},function(){n(4,u=[]),Pe.removeItem(Fe.generated_links)},function(){o.cities=this.value,n(0,o)},function(e){i[e].checked=this.checked,n(2,i)},function(){o.otherAlsoSearchFor=this.value,n(0,o)},function(){s.verifiedOnly=this.checked,n(1,s)},function(){s.minfaves15=this.checked,n(1,s)},function(){s.excludeUnverified=this.checked,n(1,s)},function(e){c[e].checked=this.checked,n(3,c)},function(){o.otherExcludedKeywords=this.value,n(0,o)},function(){s.nearMe=this.checked,n(1,s)}]}return new class extends de{constructor(e){super(),ue(this,e,st,ot,i,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
