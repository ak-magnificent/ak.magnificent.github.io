var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function a(e,t,n,r,o,s,i){const l=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(l){const o=c(t,n,r,i);e.p(o,l)}}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),f=u?e=>requestAnimationFrame(e):e;const h=new Set;function p(e){h.forEach(t=>{t.c(e)||(h.delete(t),t.f())}),0!==h.size&&f(p)}function g(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function $(){return w(" ")}function k(){return w("")}function b(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function x(e){return function(t){return t.preventDefault(),e.call(this,t)}}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function O(e,t){e.value=null==t?"":t}function B(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}const E=new Set;let W,S=0;function A(e,t,n,r,o,s,i,l=0){const c=16.666/r;let a="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*s(e);a+=100*e+`%{${i(r,1-r)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${l}`,f=e.ownerDocument;E.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${d} ${r}ms linear ${o}ms 1 both`,S+=1,d}function M(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),(S-=o)||f(()=>{S||(E.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),E.clear())}))}function F(e){W=e}function P(){if(!W)throw new Error("Function called outside component initialization");return W}function T(e,t){P().$$.context.set(e,t)}const j=[],I=[],L=[],K=[],q=Promise.resolve();let D=!1;function H(e){L.push(e)}let U=!1;const N=new Set;function z(){if(!U){U=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];F(t),R(t.$$)}for(F(null),j.length=0;I.length;)I.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];N.has(t)||(N.add(t),t())}L.length=0}while(j.length);for(;K.length;)K.pop()();D=!1,U=!1,N.clear()}}function R(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}let V;function J(e,t,n){e.dispatchEvent(B(`${t?"intro":"outro"}${n}`))}const Y=new Set;let G;function Q(){G={r:0,c:[],p:G}}function Z(){G.r||o(G.c),G=G.p}function X(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function ee(e,t,n,r){if(e&&e.o){if(Y.has(e))return;Y.add(e),G.c.push(()=>{Y.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const te={duration:0};function ne(n,r,i,l){let c=r(n,i),a=l?0:1,u=null,g=null,m=null;function v(){m&&M(n,m)}function y(e,t){const n=e.b-a;return t*=Math.abs(n),{a:a,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function w(r){const{delay:s=0,duration:i=300,easing:l=t,tick:w=e,css:$}=c||te,k={start:d()+s,b:r};r||(k.group=G,G.r+=1),u||g?g=k:($&&(v(),m=A(n,a,r,i,s,l,$)),r&&w(0,1),u=y(k,i),H(()=>J(n,r,"start")),function(e){let t;0===h.size&&f(p),new Promise(n=>{h.add(t={c:e,f:n})})}(e=>{if(g&&e>g.start&&(u=y(g,i),g=null,J(n,u.b,"start"),$&&(v(),m=A(n,a,u.b,u.duration,0,l,c.css))),u)if(e>=u.end)w(a=u.b,1-a),J(n,u.b,"end"),g||(u.b?v():--u.group.r||o(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;a=u.a+u.d*l(t/u.duration),w(a,1-a)}return!(!u&&!g)}))}return{run(e){s(c)?(V||(V=Promise.resolve()).then(()=>{V=null}),V).then(()=>{c=c(),w(e)}):w(e)},end(){v(),u=g=null}}}const re="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function oe(e,t){e.d(1),t.delete(e.key)}function se(e,t,n,r,o,s,i,l,c,a,u,d){let f=e.length,h=s.length,p=f;const g={};for(;p--;)g[e[p].key]=p;const m=[],v=new Map,y=new Map;for(p=h;p--;){const e=d(o,s,p),l=n(e);let c=i.get(l);c?r&&c.p(e,t):(c=a(l,e)).c(),v.set(l,m[p]=c),l in g&&y.set(l,Math.abs(p-g[l]))}const w=new Set,$=new Set;function k(e){X(e,1),e.m(l,u),i.set(e.key,e),u=e.first,h--}for(;f&&h;){const t=m[h-1],n=e[f-1],r=t.key,o=n.key;t===n?(u=t.first,f--,h--):v.has(o)?!i.has(r)||w.has(r)?k(t):$.has(o)?f--:y.get(r)>y.get(o)?($.add(r),k(t)):(w.add(o),f--):(c(n,i),f--)}for(;f--;){const t=e[f];v.has(t.key)||c(t,i)}for(;h;)k(m[h-1]);return m}function ie(e){e&&e.c()}function le(e,t,r,i){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=e.$$;l&&l.m(t,r),i||H(()=>{const t=c.map(n).filter(s);a?a.push(...t):o(t),e.$$.on_mount=[]}),u.forEach(H)}function ce(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(e,t){-1===e.$$.dirty[0]&&(j.push(e),D||(D=!0,q.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(t,n,s,i,l,c,a=[-1]){const u=W;F(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let f=!1;if(d.ctx=s?s(t,n.props||{},(e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&l(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),f&&ae(t,e)),n}):[],d.update(),f=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const e=(h=n.target,Array.from(h.childNodes));d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&X(t.$$.fragment),le(t,n.target,n.anchor,n.customElement),z()}var h;F(u)}class de{$destroy(){ce(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function fe(e,{delay:n=0,duration:r=400,easing:o=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:o,css:e=>`opacity: ${e*s}`}}const{window:he}=re;function pe(e){let t,n,r,i,l,c,a,u,d,f,h,p=e[0].closeButton&&ge(e);var w=e[1];return w&&(c=new w({})),{c(){t=y("div"),n=y("div"),r=y("div"),p&&p.c(),i=$(),l=y("div"),c&&ie(c.$$.fragment),_(l,"class","content svelte-2wx9ab"),_(l,"style",e[8]),_(r,"class","window svelte-2wx9ab"),_(r,"role","dialog"),_(r,"aria-modal","true"),_(r,"style",e[7]),_(n,"class","window-wrap svelte-2wx9ab"),_(n,"style",e[6]),_(t,"class","bg svelte-2wx9ab"),_(t,"style",e[5])},m(o,a){m(o,t,a),g(t,n),g(n,r),p&&p.m(r,null),g(r,i),g(r,l),c&&le(c,l,null),e[37](r),e[38](n),e[39](t),d=!0,f||(h=[b(r,"introstart",function(){s(e[12])&&e[12].apply(this,arguments)}),b(r,"outrostart",function(){s(e[13])&&e[13].apply(this,arguments)}),b(r,"introend",function(){s(e[14])&&e[14].apply(this,arguments)}),b(r,"outroend",function(){s(e[15])&&e[15].apply(this,arguments)}),b(t,"click",e[19])],f=!0)},p(o,s){if((e=o)[0].closeButton?p?(p.p(e,s),1&s[0]&&X(p,1)):((p=ge(e)).c(),X(p,1),p.m(r,i)):p&&(Q(),ee(p,1,1,()=>{p=null}),Z()),w!==(w=e[1])){if(c){Q();const e=c;ee(e.$$.fragment,1,0,()=>{ce(e,1)}),Z()}w?(ie((c=new w({})).$$.fragment),X(c.$$.fragment,1),le(c,l,null)):c=null}(!d||256&s[0])&&_(l,"style",e[8]),(!d||128&s[0])&&_(r,"style",e[7]),(!d||64&s[0])&&_(n,"style",e[6]),(!d||32&s[0])&&_(t,"style",e[5])},i(n){d||(X(p),c&&X(c.$$.fragment,n),H(()=>{a||(a=ne(r,e[11],e[0].transitionWindowProps,!0)),a.run(1)}),H(()=>{u||(u=ne(t,e[10],e[0].transitionBgProps,!0)),u.run(1)}),d=!0)},o(n){ee(p),c&&ee(c.$$.fragment,n),a||(a=ne(r,e[11],e[0].transitionWindowProps,!1)),a.run(0),u||(u=ne(t,e[10],e[0].transitionBgProps,!1)),u.run(0),d=!1},d(n){n&&v(t),p&&p.d(),c&&ce(c),e[37](null),n&&a&&a.end(),e[38](null),e[39](null),n&&u&&u.end(),f=!1,o(h)}}}function ge(e){let t,n,r,o,s;const i=[ve,me],l=[];function c(e,n){return 1&n[0]&&(t=!!e[16](e[0].closeButton)),t?0:1}return n=c(e,[-1]),r=l[n]=i[n](e),{c(){r.c(),o=k()},m(e,t){l[n].m(e,t),m(e,o,t),s=!0},p(e,t){let s=n;(n=c(e,t))===s?l[n].p(e,t):(Q(),ee(l[s],1,1,()=>{l[s]=null}),Z(),(r=l[n])?r.p(e,t):(r=l[n]=i[n](e)).c(),X(r,1),r.m(o.parentNode,o))},i(e){s||(X(r),s=!0)},o(e){ee(r),s=!1},d(e){l[n].d(e),e&&v(o)}}}function me(t){let n,r,o;return{c(){_(n=y("button"),"class","close svelte-2wx9ab"),_(n,"style",t[9])},m(e,s){m(e,n,s),r||(o=b(n,"click",t[17]),r=!0)},p(e,t){512&t[0]&&_(n,"style",e[9])},i:e,o:e,d(e){e&&v(n),r=!1,o()}}}function ve(e){let t,n,r;var o=e[0].closeButton;function s(e){return{props:{onClose:e[17]}}}return o&&(t=new o(s(e))),{c(){t&&ie(t.$$.fragment),n=k()},m(e,o){t&&le(t,e,o),m(e,n,o),r=!0},p(e,r){if(o!==(o=e[0].closeButton)){if(t){Q();const e=t;ee(e.$$.fragment,1,0,()=>{ce(e,1)}),Z()}o?(ie((t=new o(s(e))).$$.fragment),X(t.$$.fragment,1),le(t,n.parentNode,n)):t=null}},i(e){r||(t&&X(t.$$.fragment,e),r=!0)},o(e){t&&ee(t.$$.fragment,e),r=!1},d(e){e&&v(n),t&&ce(t,e)}}}function ye(e){let t,n,r,o,s=e[1]&&pe(e);const i=e[36].default,l=function(e,t,n,r){if(e){const o=c(e,t,n,r);return e[0](o)}}(i,e,e[35],null);return{c(){s&&s.c(),t=$(),l&&l.c()},m(i,c){s&&s.m(i,c),m(i,t,c),l&&l.m(i,c),n=!0,r||(o=b(he,"keydown",e[18]),r=!0)},p(e,n){e[1]?s?(s.p(e,n),2&n[0]&&X(s,1)):((s=pe(e)).c(),X(s,1),s.m(t.parentNode,t)):s&&(Q(),ee(s,1,1,()=>{s=null}),Z()),l&&l.p&&16&n[1]&&a(l,i,e,e[35],n,null,null)},i(e){n||(X(s),X(l,e),n=!0)},o(e){ee(s),ee(l,e),n=!1},d(e){s&&s.d(e),e&&v(t),l&&l.d(e),r=!1,o()}}}function we(e,t={}){return function(n){return new e({...n,props:{...t,...n.props}})}}function $e(e,t,n){let{$$slots:r={},$$scope:o}=t;const s=function(){const e=P();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const o=B(t,n);r.slice().forEach(t=>{t.call(e,o)})}}}(),i=T;let{show:l=null}=t,{key:c="simple-modal"}=t,{closeButton:a=!0}=t,{closeOnEsc:u=!0}=t,{closeOnOuterClick:d=!0}=t,{styleBg:f={}}=t,{styleWindowWrap:h={}}=t,{styleWindow:p={}}=t,{styleContent:g={}}=t,{styleCloseButton:m={}}=t,{setContext:v=i}=t,{transitionBg:y=fe}=t,{transitionBgProps:w={duration:250}}=t,{transitionWindow:$=y}=t,{transitionWindowProps:k=w}=t;const b={closeButton:a,closeOnEsc:u,closeOnOuterClick:d,styleBg:f,styleWindowWrap:h,styleWindow:p,styleContent:g,styleCloseButton:m,transitionBg:y,transitionBgProps:w,transitionWindow:$,transitionWindowProps:k};let x,_,C,O,E,W,S,A,M,F,j,L,K,q={...b},D=null;const H=e=>Object.keys(e).reduce((t,n)=>`${t}; ${(e=>e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(n)}: ${e[n]}`,""),U=e=>!!(e&&e.constructor&&e.call&&e.apply),N=()=>{};let z=N,R=N,V=N,J=N;const Y=(e,t={},r={},o={})=>{n(1,D=we(e,t)),n(0,q={...b,...r}),n(5,E=H(q.styleBg)),n(6,W=H(q.styleWindowWrap)),n(7,S=H(q.styleWindow)),n(8,A=H(q.styleContent)),n(9,M=H(q.styleCloseButton)),n(10,F=q.transitionBg),n(11,j=q.transitionWindow),Q(),n(12,z=(e=>{o.onOpen&&o.onOpen(e),s("opening")})),n(13,R=(e=>{o.onClose&&o.onClose(e),s("closing")})),n(14,V=(e=>{o.onOpened&&o.onOpened(e),s("opened")})),n(15,J=(e=>{o.onClosed&&o.onClosed(e),s("closed")}))},G=(e={})=>{n(13,R=e.onClose||R),n(15,J=e.onClosed||J),n(1,D=null),Z()},Q=()=>{O=window.scrollY,L=document.body.style.position,K=document.body.style.overflow,document.body.style.position="fixed",document.body.style.top=`-${O}px`,document.body.style.overflow="hidden"},Z=()=>{document.body.style.position=L||"",document.body.style.top="",document.body.style.overflow=K||"",window.scrollTo(0,O)};var X;return v(c,{open:Y,close:G}),X=(()=>{G()}),P().$$.on_destroy.push(X),e.$$set=(e=>{"show"in e&&n(20,l=e.show),"key"in e&&n(21,c=e.key),"closeButton"in e&&n(22,a=e.closeButton),"closeOnEsc"in e&&n(23,u=e.closeOnEsc),"closeOnOuterClick"in e&&n(24,d=e.closeOnOuterClick),"styleBg"in e&&n(25,f=e.styleBg),"styleWindowWrap"in e&&n(26,h=e.styleWindowWrap),"styleWindow"in e&&n(27,p=e.styleWindow),"styleContent"in e&&n(28,g=e.styleContent),"styleCloseButton"in e&&n(29,m=e.styleCloseButton),"setContext"in e&&n(30,v=e.setContext),"transitionBg"in e&&n(31,y=e.transitionBg),"transitionBgProps"in e&&n(32,w=e.transitionBgProps),"transitionWindow"in e&&n(33,$=e.transitionWindow),"transitionWindowProps"in e&&n(34,k=e.transitionWindowProps),"$$scope"in e&&n(35,o=e.$$scope)}),e.$$.update=(()=>{1048576&e.$$.dirty[0]&&(U(l)?Y(l):G())}),[q,D,x,_,C,E,W,S,A,M,F,j,z,R,V,J,U,G,e=>{if(q.closeOnEsc&&D&&"Escape"===e.key&&(e.preventDefault(),G()),D&&"Tab"===e.key){const t=C.querySelectorAll("*"),n=Array.from(t).filter(e=>e.tabIndex>=0);let r=n.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=n.length+(e.shiftKey?-1:1),n[r%=n.length].focus(),e.preventDefault()}},e=>{!q.closeOnOuterClick||e.target!==x&&e.target!==_||(e.preventDefault(),G())},l,c,a,u,d,f,h,p,g,m,v,y,w,$,k,o,r,function(e){I[e?"unshift":"push"](()=>{n(4,C=e)})},function(e){I[e?"unshift":"push"](()=>{n(3,_=e)})},function(e){I[e?"unshift":"push"](()=>{n(2,x=e)})}]}class ke extends de{constructor(e){super(),ue(this,e,$e,ye,i,{show:20,key:21,closeButton:22,closeOnEsc:23,closeOnOuterClick:24,styleBg:25,styleWindowWrap:26,styleWindow:27,styleContent:28,styleCloseButton:29,setContext:30,transitionBg:31,transitionBgProps:32,transitionWindow:33,transitionWindowProps:34},[-1,-1])}}function be(e){let t,n,r,o,s,i,l;return{c(){(t=y("li")).textContent="यह रिसोर्सेज लोगो द्वारा दिए गए है  , इनका संभल के प्रयोग करे",n=$(),(r=y("li")).textContent="जांच करके ही कोई कदम ले",o=$(),(s=y("li")).textContent="कुछ चेकबॉक्सेस पहले से टीकेद है , उन्हें बदल के देखें अगर आपको रिजल्ट्स नहीं मिल रहे है",i=$(),(l=y("li")).textContent="यदि आप अनिश्चित हैं तो पैसा पहले न भीजे"},m(e,c){m(e,t,c),m(e,n,c),m(e,r,c),m(e,o,c),m(e,s,c),m(e,i,c),m(e,l,c)},d(e){e&&v(t),e&&v(n),e&&v(r),e&&v(o),e&&v(s),e&&v(i),e&&v(l)}}}function xe(t){let n,r,o,s,i,l,c=t[0]&&be();return{c(){n=y("div"),(r=y("h2")).textContent="इन बातों का ध्यान रखे",o=$(),s=y("ol"),c&&c.c(),i=$(),(l=y("li")).innerHTML='रिजल्ट्स को &#39;latest&#39; सॉर्ट कर ले\n      <br/> \n      <img src="sort-click-here.jpg" alt=""/>'},m(e,t){m(e,n,t),g(n,r),g(n,o),g(n,s),c&&c.m(s,null),g(s,i),g(s,l)},p(e,[t]){e[0]?c||((c=be()).c(),c.m(s,i)):c&&(c.d(1),c=null)},i:e,o:e,d(e){e&&v(n),c&&c.d()}}}function _e(e,t,n){let{large:r=!0}=t;return e.$$set=(e=>{"large"in e&&n(0,r=e.large)}),[r]}class Ce extends de{constructor(e){super(),ue(this,e,_e,xe,i,{large:0})}}function Oe(t){let n;return{c(){(n=y("div")).innerHTML='<div><a href="whatsapp://send?text=❗COVID19%20Crowdsourced%20Resources❗%0AYou%20can%20find%20hospital%20beds%20%2C%20oxygen%20cylinders%20and%20other%20covid%20medical%20needs%20in%20your%20city.%0AEnter%20your%20city%20📍or%20locality%20and%20click%20on%20search%20🔍%20Most%20recent%20and%20verified%20✅%20numbers%20will%20shown.%0A%0Ahttps%3A%2F%2Fak-magnificent.github.io%2Fcovid19resources%0A%0AThe%20website%20also%20contains%20links%20to%20plasma%20donors%20👨🏻%E2%80%8D⚕%2C%20covid%20helpline%20numbers%20📞%2C%20world%20health%20organization%20guidelines%20🗒%EF%B8%8F%20and%20more%20%20💉.%20%0A%0A💠%20Share%20it%20with%20as%20many%20people%20👥%20as%20you%20can%2C%20and%20maybe%20you%20can%20save%20a%20life%20.🩸%0A%0Ahttps%3A%2F%2Fak-magnificent.github.io%2Fcovid19resources%0A%0A🇮🇳🇮🇳%20%23covid19india%20%23ak"><strong>शेयर करे  व्हाट्सएप पर।</strong></a></div> \n  <div><a href="https://github.com/ak-magnificent/ak-magnificent.github.io/tree/main/covid19resources" target="_blank" rel="noopener noreferrer">सोर्स कोड।</a></div> \n  <div><a href="https://instagram.come/magnificent_khan" target="_blank" rel="noopener noreferrer">सुझाव दीजिये</a></div> \n  <div>भारत में बनाया गया बय <a href="https://instagram.come/magnificent_khan" target="_blank" rel="noopener noreferrer">अनस खान </a>.</div> \n  <div>विशेष धन्यवाद <a href="https://github.com/umanghome/" target="_blank" rel="noopener noreferrer">उमंग</a> और अद्भुत इंटरनेट पर हर कोई।</div>',_(n,"class","feedback svelte-1y2wvnt")},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&v(n)}}}class Be extends de{constructor(e){super(),ue(this,e,null,Oe,i,{})}}function Ee(t){let n;return{c(){(n=y("div")).innerHTML='<h2>अन्य संसाधन</h2> \n\t<ul><li><strong><a href="https://ak-magnificent.github.io/covid19resources" target="_blank" rel="noopener noreferrer">Change\n\t\t\t\t\tLanguage to English.</a></strong></li> \n\t\t<li><strong>अधिक लीड के लिए नीचे दी गई वेबसाइटों की जांच करना भी सुनिश्चित करें।</strong></li> \n\t\t<li>अपने इलाके में ऑक्सीजन सिलेंडर खोजें। <a href="https://covidresource.glideapp.io" target="_blank" rel="noopener noreferrer">covidresource.glideapp.io</a></li> \n\t\t<li>एक मिलान प्लाज्मा दाता से कनेक्ट करें।<a href="https://covidplasma.online" target="_blank" rel="noopener noreferrer">www.cowin.gov.in</a></li> \n\t\t<li>टीके सुरक्षित हैं। COVID 19 के लिए टीका लगवाएं। <a href="https://www.cowin.gov.in" target="_blank" rel="noopener noreferrer">covidplasma.online</a></li> \n\t\t<li>टोल फ्री COVID 19 हेल्पलाइन नंबर <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" target="_blank" rel="noopener noreferrer">mohfw.gov.in</a></li> \n\t\t<li>WHO से सभी सही तथ्य और रोकथाम के सुझाव प्राप्त करें। <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer">who.int</a></li> \n\t\t<li>इन अभूतपूर्व समय के दौरान मानसिक रूप से फिट रहें। <a href="https://www.instagram.com/beyond_the__bounds" target="_blank" rel="noopener noreferrer">BeyondTheBounds</a></li> \n\t\t<li>कोरोनावायरस भारत में सांख्यिकी और रेखांकन के साथ अद्यतन करता है। <a href="https://www.covid19india.org/" target="_blank" rel="noopener noreferrer">covid19india.org/</a></li> \n\t\t<li>WorldoMeters द्वारा COVID ट्रैकर। <a href="https://www.worldometers.info/coronavirus/country/india/" target="_blank" rel="noopener noreferrer">worldometers.info</a></li></ul>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&v(n)}}}class We extends de{constructor(e){super(),ue(this,e,null,Ee,i,{})}}function Se(t){let n;return{c(){(n=y("div")).innerHTML='<h2>योगदान।</h2> \n\t<ul><li>किसी की जरूरत में मदद करें। Hemkunt Foundation के माध्यम से ऑक्सीजन सिलेंडर दान करें <a href="https://hemkuntfoundation.com/donate-now/" target="_blank" rel="noopener noreferrer">Hemkunt Foundation</a></li> \n\t\t<li>सत्यापित डेटा में योगदान करें और हमें एक विस्तृत डेटाबेस बनाने में मदद करें <a href="https://life.coronasafe.network/data" target="_blank" rel="noopener noreferrer">covidfyi.in/</a></li> \n\t\t<li>प्लाज्मा दान के लिए स्वयंसेवक, - यहाँ <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9D-YJyphUQSS5BOWBsqsD0Nh7oG9aSHX7ElTJ9I46VLTV8g/viewform?authuser=0" target="_blank" rel="noopener noreferrer">Plasma Warriors.</a></li></ul>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&v(n)}}}class Ae extends de{constructor(e){super(),ue(this,e,null,Se,i,{})}}const Me=["delhi","pune","mumbai","bangalore","thane","hyderabad","nagpur","lucknow","ahmedabad","chennai","kolkata","goa","jaipur"];function Fe(e){return e?e[0].toUpperCase()+e.slice(1):e}const Pe={generated_links:"generated_links"},Te={setItem:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(e){}return t},getItem:(e,t)=>{try{const n=localStorage.getItem(e);return null==n?t:JSON.parse(n)}catch(e){}return t},removeItem:e=>{try{localStorage.removeItem(e)}catch(e){}}};function je(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ie(t){let n;return{c(){(n=y("p")).textContent="यहाँ शहर या जिले का नाम लिखे",_(n,"class","svelte-10c14at")},m(e,t){m(e,n,t)},p:e,d(e){e&&v(n)}}}function Le(e){let t,n=[],r=new Map,o=e[0];const s=e=>e[1].href;for(let t=0;t<o.length;t+=1){let i=je(e,o,t),l=s(i);r.set(l,n[t]=Ke(l,i))}return{c(){t=y("ol");for(let e=0;e<n.length;e+=1)n[e].c();_(t,"id","city-links"),_(t,"class","svelte-10c14at")},m(e,r){m(e,t,r);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,i){1&i&&(o=e[0],n=se(n,i,s,1,e,o,r,t,oe,Ke,null,je))},d(e){e&&v(t);for(let e=0;e<n.length;e+=1)n[e].d()}}}function Ke(e,t){let n,r,o,s,i=Fe(t[1].city)+"";return{key:e,first:null,c(){n=y("li"),r=y("a"),o=w(i),_(r,"href",s=t[1].href),_(r,"target","_blank"),_(r,"rel","noopener noreferrer"),this.first=n},m(e,t){m(e,n,t),g(n,r),g(r,o)},p(e,n){t=e,1&n&&i!==(i=Fe(t[1].city)+"")&&C(o,i),1&n&&s!==(s=t[1].href)&&_(r,"href",s)},d(e){e&&v(n)}}}function qe(t){let n,r,o;function s(e,t){return e[0].length>0?Le:Ie}let i=s(t),l=i(t);return{c(){n=y("div"),(r=y("h3")).textContent="Your Generated Links",o=$(),l.c(),_(r,"class","svelte-10c14at")},m(e,t){m(e,n,t),g(n,r),g(n,o),l.m(n,null)},p(e,[t]){i===(i=s(e))&&l?l.p(e,t):(l.d(1),(l=i(e))&&(l.c(),l.m(n,null)))},i:e,o:e,d(e){e&&v(n),l.d()}}}function De(e,t,n){let{links:r=[]}=t;return e.$$set=(e=>{"links"in e&&n(0,r=e.links)}),[r]}class He extends de{constructor(e){super(),ue(this,e,De,qe,i,{links:0})}}function Ue(e){let t,n,r,o;return t=new Ce({props:{large:!1}}),r=new He({props:{links:e[0]}}),{c(){ie(t.$$.fragment),n=$(),ie(r.$$.fragment)},m(e,s){le(t,e,s),m(e,n,s),le(r,e,s),o=!0},p(e,[t]){const n={};1&t&&(n.links=e[0]),r.$set(n)},i(e){o||(X(t.$$.fragment,e),X(r.$$.fragment,e),o=!0)},o(e){ee(t.$$.fragment,e),ee(r.$$.fragment,e),o=!1},d(e){ce(t,e),e&&v(n),ce(r,e)}}}function Ne(e,t,n){let{links:r}=t;return e.$$set=(e=>{"links"in e&&n(0,r=e.links)}),[r]}class ze extends de{constructor(e){super(),ue(this,e,Ne,Ue,i,{links:0})}}const Re=[];const Ve=function(t,n=e){let r;const o=[];function s(e){if(i(t,e)&&(t=e,r)){const e=!Re.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),Re.push(n,t)}if(e){for(let e=0;e<Re.length;e+=2)Re[e][0](Re[e+1]);Re.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,l=e){const c=[i,l];return o.push(c),1===o.length&&(r=n(s)||e),i(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}(null);function Je(e,t,n){const r=e.slice();return r[25]=t[n],r}function Ye(e,t,n){const r=e.slice();return r[25]=t[n],r}function Ge(e,t,n){const r=e.slice();return r[30]=t[n],r[31]=t,r[32]=n,r}function Qe(e,t,n){const r=e.slice();return r[30]=t[n],r[33]=t,r[34]=n,r}function Ze(e){let t;return{c(){(t=y("a")).textContent="पिछली खोजें",_(t,"href","#previous-searches")},m(e,n){m(e,t,n)},d(e){e&&v(t)}}}function Xe(e,t){let n,r,o,s,i,l,c,a,u,d,f=Fe(t[30])+"";function h(){t[10].call(r,t[30])}return{key:e,first:null,c(){n=y("div"),r=y("input"),s=$(),i=y("label"),l=w(f),a=$(),_(r,"type","checkbox"),_(r,"id",o=`alsoSearchFor-${t[30]}`),_(r,"class","svelte-3urpvt"),_(i,"for",c=`alsoSearchFor-${t[30]}`),_(i,"class","svelte-3urpvt"),_(n,"class","svelte-3urpvt"),this.first=n},m(e,o){m(e,n,o),g(n,r),r.checked=t[2][t[30]].checked,g(n,s),g(n,i),g(i,l),g(n,a),u||(d=b(r,"change",h),u=!0)},p(e,n){t=e,4&n[0]&&o!==(o=`alsoSearchFor-${t[30]}`)&&_(r,"id",o),4&n[0]&&(r.checked=t[2][t[30]].checked),4&n[0]&&f!==(f=Fe(t[30])+"")&&C(l,f),4&n[0]&&c!==(c=`alsoSearchFor-${t[30]}`)&&_(i,"for",c)},d(e){e&&v(n),u=!1,d()}}}function et(e,t){let n,r,o,s,i,l,c,a,u,d,f,h=t[30]+"";function p(){t[15].call(r,t[30])}return{key:e,first:null,c(){n=y("div"),r=y("input"),s=$(),i=y("label"),l=w('"'),c=w(h),a=w('"'),_(r,"type","checkbox"),_(r,"id",o=`excludeKeywords-${t[30]}`),_(r,"class","svelte-3urpvt"),_(i,"for",u=`excludeKeywords-${t[30]}`),this.first=n},m(e,o){m(e,n,o),g(n,r),r.checked=t[3][t[30]].checked,g(n,s),g(n,i),g(i,l),g(i,c),g(i,a),d||(f=b(r,"change",p),d=!0)},p(e,n){t=e,8&n[0]&&o!==(o=`excludeKeywords-${t[30]}`)&&_(r,"id",o),8&n[0]&&(r.checked=t[3][t[30]].checked),8&n[0]&&h!==(h=t[30]+"")&&C(c,h),8&n[0]&&u!==(u=`excludeKeywords-${t[30]}`)&&_(i,"for",u)},d(e){e&&v(n),d=!1,f()}}}function tt(e,t){let n,r,o,s,i=Fe(t[25].city)+"";return{key:e,first:null,c(){n=y("li"),r=y("a"),o=w(i),_(r,"href",s=t[25].href),_(r,"target","_blank"),_(r,"rel","noopener noreferrer"),this.first=n},m(e,t){m(e,n,t),g(n,r),g(r,o)},p(e,n){t=e,32&n[0]&&i!==(i=Fe(t[25].city)+"")&&C(o,i),32&n[0]&&s!==(s=t[25].href)&&_(r,"href",s)},d(e){e&&v(n)}}}function nt(e){let t,n,r,o,s,i,l,c,a,u,d=[],f=new Map,h=e[4];const p=e=>e[25].href;for(let t=0;t<h.length;t+=1){let n=Je(e,h,t),r=p(n);f.set(r,d[t]=rt(r,n))}return{c(){t=y("div"),(n=y("h2")).textContent="Previous Searches",r=$(),o=y("ol");for(let e=0;e<d.length;e+=1)d[e].c();s=$(),(i=y("button")).textContent="Clear Previous Searches",l=$(),c=y("hr"),_(o,"class","split-three-two svelte-3urpvt"),_(i,"id","clear"),_(i,"class","svelte-3urpvt"),_(t,"id","previous-searches"),_(c,"class","svelte-3urpvt")},m(f,h){m(f,t,h),g(t,n),g(t,r),g(t,o);for(let e=0;e<d.length;e+=1)d[e].m(o,null);g(t,s),g(t,i),m(f,l,h),m(f,c,h),a||(u=b(i,"click",x(e[8])),a=!0)},p(e,t){16&t[0]&&(h=e[4],d=se(d,t,p,1,e,h,f,o,oe,rt,null,Je))},d(e){e&&v(t);for(let e=0;e<d.length;e+=1)d[e].d();e&&v(l),e&&v(c),a=!1,u()}}}function rt(e,t){let n,r,o,s,i=Fe(t[25].city)+"";return{key:e,first:null,c(){n=y("li"),r=y("a"),o=w(i),_(r,"href",s=t[25].href),_(r,"target","_blank"),_(r,"rel","noopener noreferrer"),this.first=n},m(e,t){m(e,n,t),g(n,r),g(r,o)},p(e,n){t=e,16&n[0]&&i!==(i=Fe(t[25].city)+"")&&C(o,i),16&n[0]&&s!==(s=t[25].href)&&_(r,"href",s)},d(e){e&&v(n)}}}function ot(e){let t,n,r,s,i,l,c,a,u,d,f,h,p,k,C,B,E,W,S,A,M,F,P,T,j,I,L,K,q,D,H,U,N,z,R,V,J,Y,G,Q,Z,te,ne,re,ae,ue,de,fe,he,pe,ge,me,ve,ye,we,$e,be,xe,_e,Oe,Ee,Se,Me,Fe,Pe,Te,je,Ie,Le,Ke,qe,De,He,Ue,Ne,ze,Re,Ve,Je,rt,ot,st,it,lt,ct,at,ut,dt,ft,ht,pt,gt=[],mt=new Map,vt=[],yt=new Map,wt=[],$t=new Map,kt=e[4].length>0&&Ze();h=new Ce({});let bt=Object.keys(e[2]);const xt=e=>e[30];for(let t=0;t<bt.length;t+=1){let n=Qe(e,bt,t),r=xt(n);mt.set(r,gt[t]=Xe(r,n))}let _t=Object.keys(e[3]);const Ct=e=>e[30];for(let t=0;t<_t.length;t+=1){let n=Ge(e,_t,t),r=Ct(n);yt.set(r,vt[t]=et(r,n))}Ie=new ke({props:{show:e[6],transitionBgProps:{duration:0},transitionWindowProps:{duration:0}}});let Ot=e[5];const Bt=e=>e[25].href;for(let t=0;t<Ot.length;t+=1){let n=Ye(e,Ot,t),r=Bt(n);$t.set(r,wt[t]=tt(r,n))}let Et=e[4].length>0&&nt(e);return rt=new We({}),lt=new Ae({}),dt=new Be({}),{c(){t=y("main"),(n=y("h1")).textContent="कोविड 19 के साधन",r=$(),s=y("hr"),i=$(),l=y("nav"),(c=y("a")).textContent="बार-बार खोजे गए शहर",a=$(),kt&&kt.c(),u=$(),d=y("hr"),f=$(),ie(h.$$.fragment),p=$(),k=y("hr"),C=$(),B=y("div"),(E=y("h2")).textContent="सर्च करे",W=$(),S=y("form"),A=y("div"),(M=y("label")).textContent="शहर या जिले का नाम लिखे",F=$(),P=y("br"),T=$(),j=y("input"),I=$(),L=y("div");for(let e=0;e<gt.length;e+=1)gt[e].c();K=$(),q=y("div"),(D=y("label")).textContent="Other:",H=$(),U=y("input"),N=$(),(z=y("div")).innerHTML="<button>सर्च करे</button>",R=$(),V=y("hr"),J=$(),Y=y("div"),G=y("div"),Q=y("div"),Z=y("input"),te=$(),(ne=y("label")).innerHTML="वेरिफ़िएड ट्वीट्स ही दिखाए \n              <br/> \n              <strong>छोटे शहरों के लिए इसे अनचेक करें</strong> \n              <br/>",re=$(),ae=y("div"),ue=y("input"),de=$(),(fe=y("label")).innerHTML="कम से कम 15 लाइक्स वाले ट्वीट्स दिखाए\n              <br/> \n              <strong>छोटे शहरों के लिए इसे अनचेक करे</strong> \n              <br/>",he=$(),pe=y("div"),ge=y("input"),me=$(),(ve=y("label")).innerHTML="उनवेरिफ़िएड ट्वीट्स हटाए \n              <br/>",ye=$(),we=y("div"),$e=w("ट्वीट्स में ये शब्द नहीं होने चाहिए:\n      \n            ");for(let e=0;e<vt.length;e+=1)vt[e].c();be=$(),xe=y("div"),(_e=y("label")).textContent="अन्य शब्द:",Oe=$(),Ee=y("input"),Se=$(),Me=y("div"),Fe=y("input"),Pe=$(),(Te=y("label")).textContent="आस पास के ट्वीट्स दिखाओ",je=$(),ie(Ie.$$.fragment),Le=$(),Ke=y("hr"),qe=$(),De=y("div"),(He=y("h2")).textContent="बार-बार खोजे गए शहर",Ue=$(),Ne=y("ol");for(let e=0;e<wt.length;e+=1)wt[e].c();ze=$(),Re=y("hr"),Ve=$(),Et&&Et.c(),Je=$(),ie(rt.$$.fragment),ot=$(),st=y("hr"),it=$(),ie(lt.$$.fragment),ct=$(),at=y("hr"),ut=$(),ie(dt.$$.fragment),_(s,"class","svelte-3urpvt"),_(c,"href","#frequent-searches"),_(l,"class","split-two-one svelte-3urpvt"),_(d,"class","svelte-3urpvt"),_(k,"class","svelte-3urpvt"),_(M,"for","cities"),_(j,"type","text"),_(j,"id","cities"),_(j,"placeholder","यहाँ शहर या जिले का नाम लिखे"),_(j,"class","svelte-3urpvt"),_(L,"class","split-three-two checkbox-fields svelte-3urpvt"),_(D,"for","alsoSearchFor-other"),_(U,"type","text"),_(U,"id","alsoSearchFor-other"),_(q,"class","other-input svelte-3urpvt"),_(z,"id","generate-button-container"),_(z,"class","svelte-3urpvt"),_(V,"class","svelte-3urpvt"),_(Z,"type","checkbox"),_(Z,"id","verifiedOnly"),_(ne,"for","verifiedOnly"),_(Q,"class","svelte-3urpvt"),_(ue,"type","checkbox"),_(ue,"id","minfaves15"),_(fe,"for","minfaves15"),_(ae,"class","svelte-3urpvt"),_(ge,"type","checkbox"),_(ge,"id","excludeUnverified"),_(ve,"for","excludeUnverified"),_(pe,"class","svelte-3urpvt"),_(_e,"for","excludeKeywords-other"),_(Ee,"type","text"),_(Ee,"id","excludeKeywords-other"),_(xe,"class","other-input svelte-3urpvt"),_(we,"class","svelte-3urpvt"),_(Fe,"type","checkbox"),_(Fe,"id","nearMe"),_(Te,"for","nearMe"),_(Me,"class","svelte-3urpvt"),_(G,"class","split-two-one spaced svelte-3urpvt"),_(Y,"id","options"),_(Y,"class","svelte-3urpvt"),_(Ke,"class","svelte-3urpvt"),_(Ne,"class","split-three-two svelte-3urpvt"),_(De,"id","frequent-searches"),_(Re,"class","svelte-3urpvt"),_(st,"class","svelte-3urpvt"),_(at,"class","svelte-3urpvt")},m(o,v){m(o,t,v),g(t,n),g(t,r),g(t,s),g(t,i),g(t,l),g(l,c),g(l,a),kt&&kt.m(l,null),g(t,u),g(t,d),g(t,f),le(h,t,null),g(t,p),g(t,k),g(t,C),g(t,B),g(B,E),g(B,W),g(B,S),g(S,A),g(A,M),g(A,F),g(A,P),g(A,T),g(A,j),O(j,e[0].cities),g(S,I),g(S,L);for(let e=0;e<gt.length;e+=1)gt[e].m(L,null);g(S,K),g(S,q),g(q,D),g(q,H),g(q,U),O(U,e[0].otherAlsoSearchFor),g(S,N),g(S,z),g(S,R),g(S,V),g(S,J),g(S,Y),g(Y,G),g(G,Q),g(Q,Z),Z.checked=e[1].verifiedOnly,g(Q,te),g(Q,ne),g(G,re),g(G,ae),g(ae,ue),ue.checked=e[1].minfaves15,g(ae,de),g(ae,fe),g(G,he),g(G,pe),g(pe,ge),ge.checked=e[1].excludeUnverified,g(pe,me),g(pe,ve),g(G,ye),g(G,we),g(we,$e);for(let e=0;e<vt.length;e+=1)vt[e].m(we,null);g(we,be),g(we,xe),g(xe,_e),g(xe,Oe),g(xe,Ee),O(Ee,e[0].otherExcludedKeywords),g(G,Se),g(G,Me),g(Me,Fe),Fe.checked=e[1].nearMe,g(Me,Pe),g(Me,Te),g(B,je),le(Ie,B,null),g(t,Le),g(t,Ke),g(t,qe),g(t,De),g(De,He),g(De,Ue),g(De,Ne);for(let e=0;e<wt.length;e+=1)wt[e].m(Ne,null);g(t,ze),g(t,Re),g(t,Ve),Et&&Et.m(t,null),g(t,Je),le(rt,t,null),g(t,ot),g(t,st),g(t,it),le(lt,t,null),g(t,ct),g(t,at),g(t,ut),le(dt,t,null),ft=!0,ht||(pt=[b(j,"input",e[9]),b(U,"input",e[11]),b(Z,"change",e[12]),b(ue,"change",e[13]),b(ge,"change",e[14]),b(Ee,"input",e[16]),b(Fe,"change",e[17]),b(S,"submit",x(e[7]))],ht=!0)},p(e,n){e[4].length>0?kt||((kt=Ze()).c(),kt.m(l,null)):kt&&(kt.d(1),kt=null),1&n[0]&&j.value!==e[0].cities&&O(j,e[0].cities),4&n[0]&&(bt=Object.keys(e[2]),gt=se(gt,n,xt,1,e,bt,mt,L,oe,Xe,null,Qe)),1&n[0]&&U.value!==e[0].otherAlsoSearchFor&&O(U,e[0].otherAlsoSearchFor),2&n[0]&&(Z.checked=e[1].verifiedOnly),2&n[0]&&(ue.checked=e[1].minfaves15),2&n[0]&&(ge.checked=e[1].excludeUnverified),8&n[0]&&(_t=Object.keys(e[3]),vt=se(vt,n,Ct,1,e,_t,yt,we,oe,et,be,Ge)),1&n[0]&&Ee.value!==e[0].otherExcludedKeywords&&O(Ee,e[0].otherExcludedKeywords),2&n[0]&&(Fe.checked=e[1].nearMe);const r={};64&n[0]&&(r.show=e[6]),Ie.$set(r),32&n[0]&&(Ot=e[5],wt=se(wt,n,Bt,1,e,Ot,$t,Ne,oe,tt,null,Ye)),e[4].length>0?Et?Et.p(e,n):((Et=nt(e)).c(),Et.m(t,Je)):Et&&(Et.d(1),Et=null)},i(e){ft||(X(h.$$.fragment,e),X(Ie.$$.fragment,e),X(rt.$$.fragment,e),X(lt.$$.fragment,e),X(dt.$$.fragment,e),ft=!0)},o(e){ee(h.$$.fragment,e),ee(Ie.$$.fragment,e),ee(rt.$$.fragment,e),ee(lt.$$.fragment,e),ee(dt.$$.fragment,e),ft=!1},d(e){e&&v(t),kt&&kt.d(),ce(h);for(let e=0;e<gt.length;e+=1)gt[e].d();for(let e=0;e<vt.length;e+=1)vt[e].d();ce(Ie);for(let e=0;e<wt.length;e+=1)wt[e].d();Et&&Et.d(),ce(rt),ce(lt),ce(dt),ht=!1,o(pt)}}}function st(e,t,n){let r;l(e,Ve,e=>n(6,r=e));const o={cities:"",otherAlsoSearchFor:"",otherExcludedKeywords:""},s={nearMe:!1,verifiedOnly:!0,minfaves15:!0,excludeUnverified:!0},i={beds:{keywords:["bed","beds"],checked:!0},ICU:{keywords:["icu"],checked:!0},oxygen:{keywords:["oxygen"],checked:!0},ventilator:{keywords:["ventilator","ventilators"],checked:!0},tests:{keywords:["test","tests","testing"],checked:!1},fabiflu:{keywords:["fabiflu"],checked:!1},remdesivir:{keywords:["remdesivir"],checked:!1},favipiravir:{keywords:["favipiravir"],checked:!1},tocilizumab:{keywords:["tocilizumab"],checked:!1},plasma:{keywords:["plasma"],checked:!1},food:{keywords:["tiffin","food"],checked:!1}},c={needed:{keywords:["needed","needs","need","lead","leads"],checked:!0},required:{keywords:["required","requirement","requires","required","requires","requirements"],checked:!0}};let a=[],u=Te.getItem(Pe.generated_links,[]),d=[];function f(){const e=Object.keys(i).reduce((e,t)=>i[t].checked?e.concat(i[t].keywords):e,[]);return o.otherAlsoSearchFor&&e.push(o.otherAlsoSearchFor),e.length>0?`(${e.join(" OR ")})`:""}function h(){const e=Object.keys(c).reduce((e,t)=>c[t].checked?e.concat(c[t].keywords):e,[]);return o.otherExcludedKeywords&&e.push(o.otherExcludedKeywords),e.map(e=>`-"${e}"`).join(" ")}function p(e){return{city:e,href:g(e)}}function g(e){const t=new URLSearchParams,n=[s.minfaves15&&"min_faves:15",s.verifiedOnly&&"verified",e.trim(),f(),s.excludeUnverified&&'-"not verified"',s.excludeUnverified&&'-"unverified"',h()].filter(Boolean).join(" ");return t.set("q",n),t.set("f","live"),s.nearMe&&t.set("lf","on"),`https://twitter.com/search?${t.toString()}`}return e.$$.update=(()=>{15&e.$$.dirty[0]&&function(){if(!o.cities)return void(a=[]);const e=o.cities.split(",").map(e=>e.trim()).filter(Boolean);a=e.map(p)}(),15&e.$$.dirty[0]&&n(5,d=Me.map(p))}),[o,s,i,c,u,d,r,function(){o.cities?(Ve.set(we(ze,{links:a})),Te.setItem(Pe.generated_links,a)):alert("Please enter city name")},function(){n(4,u=[]),Te.removeItem(Pe.generated_links)},function(){o.cities=this.value,n(0,o)},function(e){i[e].checked=this.checked,n(2,i)},function(){o.otherAlsoSearchFor=this.value,n(0,o)},function(){s.verifiedOnly=this.checked,n(1,s)},function(){s.minfaves15=this.checked,n(1,s)},function(){s.excludeUnverified=this.checked,n(1,s)},function(e){c[e].checked=this.checked,n(3,c)},function(){o.otherExcludedKeywords=this.value,n(0,o)},function(){s.nearMe=this.checked,n(1,s)}]}return new class extends de{constructor(e){super(),ue(this,e,st,ot,i,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
