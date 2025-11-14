import{S as Vt,i as Gt,s as Rt,a as I,e as dt,c as O,b as A,g as k,v as mt,d as z,f as bt,h as m,C as on,k as v,U as rn,l as x,m as E,V as an,n as c,Z,p as _t,H as _,D as sn,E as un,F as dn,R as Hn,K as gt,a0 as Xt,a1 as Zt,J as yt,y as H,z as C,A as B,B as P,L as Nn,o as Mt,w as nn,q as tt,r as nt,u as en,M as Cn,G as wt}from"./index.b59088e2.js";import{P as ln,A as Ut}from"./authentication.5c3ded2c.js";import{N as kt,L as tn,T as Dt}from"./language.cbe9c3b0.js";class yn{static isDescendantOf(t,n){return!t||!n?!1:t.contains(n)}static isRightClick(t){let n=!1;return"which"in t?n=t.which==3:"button"in e&&(n=t.button==2),n}}const Lt={base:"https://snail-ide.js.org",editor:"https://snail-ide.js.org/editor.html",credits:"https://snail-ide.js.org/credits.html",terms:"/terms",privacy:"https://snail-ide.js.org/privacy.html",guidelines:{projects:"https://snail-ide.js.org/PenguinMod-Guidelines/PROJECTS"},donate:{scratch:"https://www.scratchfoundation.org/donate",turbowarp:"https://github.com/sponsors/GarboMuffin"},projects:`${ln.OriginApiUrl}/`,mystuff:`${ln.OriginApiUrl}/mystuff`,home:"https://snailshare.vercel.app",packager:"/PenguinMod-Packager/",wiki:"https://penguinmod.fandom.com/wiki/Penguinmod",discord:"https://www.guilded.gg/i/2V1VLBXE",group:"https://scratch.mit.edu/studios/33532977/",scratch:"https://scratch.mit.edu",turbowarp:"/",github:"https://github.com/snail-ide/",basicApi:"https://sn-bapi.onrender.com/",commitsHistory:"https://sn-bapi.vercel.app/api/commits",adminPanel:"/panel",donate:"/donate",status:"https://snail-ide.betteruptime.com/",upload_project:"/upload",docs:"https://docs.snail-ide.com/",feedback:"https://forum.snail-ide.com/"};function vn(r){let t,n,l,o,i,s,d,a;const u=r[7].default,h=on(u,r,r[6],null);return{c(){t=v("a"),n=v("button"),l=new rn(!1),o=I(),h&&h.c(),this.h()},l(f){t=x(f,"A",{href:!0,target:!0,style:!0,class:!0});var b=E(t);n=x(b,"BUTTON",{class:!0,id:!0});var p=E(n);l=an(p,!1),o=O(p),h&&h.l(p),p.forEach(m),b.forEach(m),this.h()},h(){l.a=o,c(n,"class",i=Z(r[0]?"button button-highlight":"button")+" svelte-17b9um7"),c(n,"id",r[5]),c(t,"href",r[1]),c(t,"target",s=r[3]?"_blank":"_self"),_t(t,"text-decoration","none"),c(t,"class",d=Z(`${r[4]?` ca-${r[4]}`:""}`)+" svelte-17b9um7")},m(f,b){A(f,t,b),_(t,n),l.m(r[2],n),_(n,o),h&&h.m(n,null),a=!0},p(f,b){(!a||b&4)&&l.p(f[2]),h&&h.p&&(!a||b&64)&&sn(h,u,f,f[6],a?dn(u,f[6],b,null):un(f[6]),null),(!a||b&1&&i!==(i=Z(f[0]?"button button-highlight":"button")+" svelte-17b9um7"))&&c(n,"class",i),(!a||b&32)&&c(n,"id",f[5]),(!a||b&2)&&c(t,"href",f[1]),(!a||b&8&&s!==(s=f[3]?"_blank":"_self"))&&c(t,"target",s),(!a||b&16&&d!==(d=Z(`${f[4]?` ca-${f[4]}`:""}`)+" svelte-17b9um7"))&&c(t,"class",d)},i(f){a||(k(h,f),a=!0)},o(f){z(h,f),a=!1},d(f){f&&m(t),h&&h.d(f)}}}function xn(r){let t,n,l,o,i;const s=r[7].default,d=on(s,r,r[6],null);return{c(){t=v("button"),n=new rn(!1),l=I(),d&&d.c(),this.h()},l(a){t=x(a,"BUTTON",{class:!0,id:!0});var u=E(t);n=an(u,!1),l=O(u),d&&d.l(u),u.forEach(m),this.h()},h(){n.a=l,c(t,"class",o=Z((r[0]?"button button-highlight":"button")+(r[4]?` ca-${r[4]}`:""))+" svelte-17b9um7"),c(t,"id",r[5])},m(a,u){A(a,t,u),n.m(r[2],t),_(t,l),d&&d.m(t,null),i=!0},p(a,u){(!i||u&4)&&n.p(a[2]),d&&d.p&&(!i||u&64)&&sn(d,s,a,a[6],i?dn(s,a[6],u,null):un(a[6]),null),(!i||u&17&&o!==(o=Z((a[0]?"button button-highlight":"button")+(a[4]?` ca-${a[4]}`:""))+" svelte-17b9um7"))&&c(t,"class",o),(!i||u&32)&&c(t,"id",a[5])},i(a){i||(k(d,a),i=!0)},o(a){z(d,a),i=!1},d(a){a&&m(t),d&&d.d(a)}}}function Bn(r){let t,n,l,o=r[1]&&vn(r),i=!r[1]&&xn(r);return{c(){o&&o.c(),t=I(),i&&i.c(),n=dt()},l(s){o&&o.l(s),t=O(s),i&&i.l(s),n=dt()},m(s,d){o&&o.m(s,d),A(s,t,d),i&&i.m(s,d),A(s,n,d),l=!0},p(s,[d]){s[1]?o?(o.p(s,d),d&2&&k(o,1)):(o=vn(s),o.c(),k(o,1),o.m(t.parentNode,t)):o&&(mt(),z(o,1,1,()=>{o=null}),bt()),s[1]?i&&(mt(),z(i,1,1,()=>{i=null}),bt()):i?(i.p(s,d),d&2&&k(i,1)):(i=xn(s),i.c(),k(i,1),i.m(n.parentNode,n))},i(s){l||(k(o),k(i),l=!0)},o(s){z(o),z(i),l=!1},d(s){o&&o.d(s),s&&m(t),i&&i.d(s),s&&m(n)}}}function Pn(r,t,n){let{$$slots:l={},$$scope:o}=t,{highlighted:i=!1}=t,{link:s=!1}=t,{label:d=""}=t,{noredirect:a=!1}=t,{classActor:u=""}=t,{id:h=""}=t;return r.$$set=f=>{"highlighted"in f&&n(0,i=f.highlighted),"link"in f&&n(1,s=f.link),"label"in f&&n(2,d=f.label),"noredirect"in f&&n(3,a=f.noredirect),"classActor"in f&&n(4,u=f.classActor),"id"in f&&n(5,h=f.id),"$$scope"in f&&n(6,o=f.$$scope)},[i,s,d,a,u,h,o,l]}let Un=class extends Vt{constructor(t){super(),Gt(this,t,Pn,Bn,Rt,{highlighted:0,link:1,label:2,noredirect:3,classActor:4,id:5})}};function Dn(r){let t,n,l,o,i,s,d,a,u;const h=r[8].default,f=on(h,r,r[7],null);return{c(){t=v("a"),n=v("button"),l=new rn(!1),o=I(),f&&f.c(),this.h()},l(b){t=x(b,"A",{href:!0,target:!0,style:!0,class:!0});var p=E(t);n=x(p,"BUTTON",{class:!0,style:!0,id:!0});var M=E(n);l=an(M,!1),o=O(M),f&&f.l(M),M.forEach(m),p.forEach(m),this.h()},h(){l.a=o,c(n,"class","button svelte-1e8yjh4"),c(n,"style",r[2]),c(n,"id",r[5]),c(t,"href",r[0]),c(t,"target",i=r[3]?"_blank":"_self"),_t(t,"text-decoration","none"),c(t,"class",s=Z(`${r[4]?` ca-${r[4]}`:""}`)+" svelte-1e8yjh4")},m(b,p){A(b,t,p),_(t,n),l.m(r[1],n),_(n,o),f&&f.m(n,null),d=!0,a||(u=gt(n,"click",r[6]),a=!0)},p(b,p){(!d||p&2)&&l.p(b[1]),f&&f.p&&(!d||p&128)&&sn(f,h,b,b[7],d?dn(h,b[7],p,null):un(b[7]),null),(!d||p&4)&&c(n,"style",b[2]),(!d||p&32)&&c(n,"id",b[5]),(!d||p&1)&&c(t,"href",b[0]),(!d||p&8&&i!==(i=b[3]?"_blank":"_self"))&&c(t,"target",i),(!d||p&16&&s!==(s=Z(`${b[4]?` ca-${b[4]}`:""}`)+" svelte-1e8yjh4"))&&c(t,"class",s)},i(b){d||(k(f,b),d=!0)},o(b){z(f,b),d=!1},d(b){b&&m(t),f&&f.d(b),a=!1,u()}}}function Mn(r){let t,n,l,o,i,s,d;const a=r[8].default,u=on(a,r,r[7],null);return{c(){t=v("button"),n=new rn(!1),l=I(),u&&u.c(),this.h()},l(h){t=x(h,"BUTTON",{class:!0,style:!0,id:!0});var f=E(t);n=an(f,!1),l=O(f),u&&u.l(f),f.forEach(m),this.h()},h(){n.a=l,c(t,"class",o=Z(`button${r[4]?` ca-${r[4]}`:""}`)+" svelte-1e8yjh4"),c(t,"style",r[2]),c(t,"id",r[5])},m(h,f){A(h,t,f),n.m(r[1],t),_(t,l),u&&u.m(t,null),i=!0,s||(d=gt(t,"click",r[6]),s=!0)},p(h,f){(!i||f&2)&&n.p(h[1]),u&&u.p&&(!i||f&128)&&sn(u,a,h,h[7],i?dn(a,h[7],f,null):un(h[7]),null),(!i||f&16&&o!==(o=Z(`button${h[4]?` ca-${h[4]}`:""}`)+" svelte-1e8yjh4"))&&c(t,"class",o),(!i||f&4)&&c(t,"style",h[2]),(!i||f&32)&&c(t,"id",h[5])},i(h){i||(k(u,h),i=!0)},o(h){z(u,h),i=!1},d(h){h&&m(t),u&&u.d(h),s=!1,d()}}}function Ln(r){let t,n,l,o;const i=[Mn,Dn],s=[];function d(a,u){return a[0]?1:0}return t=d(r),n=s[t]=i[t](r),{c(){n.c(),l=dt()},l(a){n.l(a),l=dt()},m(a,u){s[t].m(a,u),A(a,l,u),o=!0},p(a,[u]){let h=t;t=d(a),t===h?s[t].p(a,u):(mt(),z(s[h],1,1,()=>{s[h]=null}),bt(),n=s[t],n?n.p(a,u):(n=s[t]=i[t](a),n.c()),k(n,1),n.m(l.parentNode,l))},i(a){o||(k(n),o=!0)},o(a){z(n),o=!1},d(a){s[t].d(a),a&&m(l)}}}function Vn(r,t,n){let{$$slots:l={},$$scope:o}=t,{link:i=!1}=t,{label:s=""}=t,{style:d=""}=t,{noredirect:a=!1}=t,{classActor:u=""}=t,{id:h=""}=t;const f=Hn();function b(...p){f("click",...p)}return r.$$set=p=>{"link"in p&&n(0,i=p.link),"label"in p&&n(1,s=p.label),"style"in p&&n(2,d=p.style),"noredirect"in p&&n(3,a=p.noredirect),"classActor"in p&&n(4,u=p.classActor),"id"in p&&n(5,h=p.id),"$$scope"in p&&n(7,o=p.$$scope)},[i,s,d,a,u,h,b,o,l]}class lt extends Vt{constructor(t){super(),Gt(this,t,Vn,Ln,Rt,{link:0,label:1,style:2,noredirect:3,classActor:4,id:5})}}function Gn(r){let t,n,l,o,i;return{c(){t=Xt("svg"),n=Xt("g"),l=Xt("path"),o=Xt("circle"),this.h()},l(s){t=Zt(s,"svg",{xmlns:!0,style:!0,viewBox:!0});var d=E(t);n=Zt(d,"g",{class:!0,fill:!0,stroke:!0,"stroke-width":!0});var a=E(n);l=Zt(a,"path",{"stroke-linecap":!0,d:!0}),E(l).forEach(m),o=Zt(a,"circle",{cx:!0,cy:!0,r:!0}),E(o).forEach(m),a.forEach(m),d.forEach(m),this.h()},h(){c(l,"stroke-linecap","square"),c(l,"d","M18.5 18.3l-5.4-5.4"),c(o,"cx","8"),c(o,"cy","8"),c(o,"r","7"),c(n,"class","search-path"),c(n,"fill","none"),c(n,"stroke",r[2]),c(n,"stroke-width",r[3]),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"style",i=`width: ${r[0]};height: ${r[1]};${r[4]?r[4]:""}`),c(t,"viewBox","0 0 19.9 19.7")},m(s,d){A(s,t,d),_(t,n),_(n,l),_(n,o)},p(s,[d]){d&4&&c(n,"stroke",s[2]),d&8&&c(n,"stroke-width",s[3]),d&19&&i!==(i=`width: ${s[0]};height: ${s[1]};${s[4]?s[4]:""}`)&&c(t,"style",i)},i:yt,o:yt,d(s){s&&m(t)}}}function Rn(r,t,n){let{width:l}=t,{height:o}=t,{color:i}=t,{scale:s}=t,{style:d}=t;return r.$$set=a=>{"width"in a&&n(0,l=a.width),"height"in a&&n(1,o=a.height),"color"in a&&n(2,i=a.color),"scale"in a&&n(3,s=a.scale),"style"in a&&n(4,d=a.style)},[l,o,i,s,d]}class Fn extends Vt{constructor(t){super(),Gt(this,t,Rn,Gn,Rt,{width:0,height:1,color:2,scale:3,style:4})}}function Jn(r){let t,n,l,o,i,s,d,a;return l=new Fn({props:{width:"30px",height:"20px",color:"#ffffff",scale:"2px",style:"margin-bottom:5px; margin-top: 5px;"}}),{c(){t=v("div"),n=v("button"),H(l.$$.fragment),o=I(),i=v("input"),this.h()},l(u){t=x(u,"DIV",{class:!0});var h=E(t);n=x(h,"BUTTON",{class:!0});var f=E(n);C(l.$$.fragment,f),f.forEach(m),o=O(h),i=x(h,"INPUT",{class:!0,placeholder:!0,name:!0}),h.forEach(m),this.h()},h(){c(n,"class","search-button svelte-p82v40"),c(i,"class","search-bar svelte-p82v40"),i.value=r[1],c(i,"placeholder",r[0]),c(i,"name","search"),c(t,"class","search svelte-p82v40")},m(u,h){A(u,t,h),_(t,n),B(l,n,null),_(t,o),_(t,i),r[5](i),s=!0,d||(a=[gt(n,"click",r[3]),gt(i,"keypress",r[4])],d=!0)},p(u,[h]){(!s||h&2&&i.value!==u[1])&&(i.value=u[1]),(!s||h&1)&&c(i,"placeholder",u[0])},i(u){s||(k(l.$$.fragment,u),s=!0)},o(u){z(l.$$.fragment,u),s=!1},d(u){u&&m(t),P(l),r[5](null),d=!1,Nn(a)}}}function qn(r,t,n){let{placeholder:l}=t,{text:o=""}=t,i;function s(u){if(typeof u!="string"&&(u=i.value),u===""){location.href=location.origin;return}location.href=location.origin+`/search?q=${encodeURIComponent(u)}`}function d(u){u.key==="Enter"&&s(i.value)}Mt(()=>{const h=new URLSearchParams(location.search).get("q");i&&h&&n(2,i.value=h,i)});function a(u){nn[u?"unshift":"push"](()=>{i=u,n(2,i)})}return r.$$set=u=>{"placeholder"in u&&n(0,l=u.placeholder),"text"in u&&n(1,o=u.text)},[l,o,i,s,d,a]}class Kn extends Vt{constructor(t){super(),Gt(this,t,qn,Jn,Rt,{placeholder:0,text:1})}}function $n(r,t,n){const l=r.slice();return l[30]=t[n],l}function zn(r){let t,n=r[18](r[30])+"",l,o,i,s;function d(){return r[22](r[30])}return{c(){t=v("button"),l=tt(n),o=I(),this.h()},l(a){t=x(a,"BUTTON",{class:!0,title:!0});var u=E(t);l=nt(u,n),o=O(u),u.forEach(m),this.h()},h(){c(t,"class","languageOption"),c(t,"title",r[18](r[30])+` (${r[30]})`)},m(a,u){A(a,t,u),_(t,l),_(t,o),i||(s=gt(t,"click",d),i=!0)},p(a,u){r=a},d(a){a&&m(t),i=!1,s()}}}function En(r){let t,n;return{c(){t=v("div"),n=tt("!"),this.h()},l(l){t=x(l,"DIV",{class:!0});var o=E(t);n=nt(o,"!"),o.forEach(m),this.h()},h(){c(t,"class","rankup-badge")},m(l,o){A(l,t,o),_(t,n)},d(l){l&&m(t)}}}function Yn(r){let t,n;return{c(){t=v("img"),this.h()},l(l){t=x(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(t,"class","logo-image"),wt(t.src,n="/navicon.svg")||c(t,"src",n),c(t,"alt","Snail IDE")},m(l,o){A(l,t,o)},d(l){l&&m(t)}}}function Qn(r){let t,n;return{c(){t=v("img"),this.h()},l(l){t=x(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(t,"class","logo-image"),wt(t.src,n="https://www.ba4x.pro/bleh.png")||c(t,"src",n),c(t,"alt","Snail IDE")},m(l,o){A(l,t,o)},d(l){l&&m(t)}}}function Wn(r){let t,n;return t=new kt({props:{text:"Create",key:"navigation.create",lang:r[10]}}),{c(){H(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,o){B(t,l,o),n=!0},p(l,o){const i={};o[0]&1024&&(i.lang=l[10]),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){P(t,l)}}}function Xn(r){let t,n;return t=new kt({props:{text:"Status Page",key:"navigation.statusPage",lang:r[10]}}),{c(){H(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,o){B(t,l,o),n=!0},p(l,o){const i={};o[0]&1024&&(i.lang=l[10]),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){P(t,l)}}}function Zn(r){let t,n;return t=new kt({props:{text:"Upload",key:"navigation.upload",lang:r[10]}}),{c(){H(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,o){B(t,l,o),n=!0},p(l,o){const i={};o[0]&1024&&(i.lang=l[10]),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){P(t,l)}}}function te(r){let t,n;return{c(){t=v("img"),this.h()},l(l){t=x(l,"IMG",{src:!0,alt:!0}),this.h()},h(){wt(t.src,n="/create.png")||c(t,"src",n),c(t,"alt","Create")},m(l,o){A(l,t,o)},p:yt,d(l){l&&m(t)}}}function An(r){let t,n;return t=new Un({props:{highlighted:"true",link:Lt.discord,noredirect:"true",classActor:"discordButton",$$slots:{default:[ne]},$$scope:{ctx:r}}}),{c(){H(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,o){B(t,l,o),n=!0},p(l,o){const i={};o[1]&4&&(i.$$scope={dirty:o,ctx:l}),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){P(t,l)}}}function ne(r){let t,n,l,o,i,s;return{c(){t=v("div"),n=tt("Join our Guilded!"),l=I(),o=v("div"),i=v("img"),this.h()},l(d){t=x(d,"DIV",{class:!0});var a=E(t);n=nt(a,"Join our Guilded!"),a.forEach(m),l=O(d),o=x(d,"DIV",{class:!0});var u=E(o);i=x(u,"IMG",{src:!0,alt:!0}),u.forEach(m),this.h()},h(){c(t,"class","discord-button-text"),wt(i.src,s="/discord_white.png")||c(i,"src",s),c(i,"alt","Discord"),c(o,"class","discord-button-icon")},m(d,a){A(d,t,a),_(t,n),A(d,l,a),A(d,o,a),_(o,i)},p:yt,d(d){d&&m(t),d&&m(l),d&&m(o)}}}function In(r){let t,n,l,o;return t=new lt({props:{link:"/messages",label:"<img src='/messages/messages.svg' width='25' alt='Messages'>",style:"padding:0.5rem",$$slots:{default:[oe]},$$scope:{ctx:r}}}),l=new lt({props:{link:"/mystuff",label:"<img src='/messages/mystuff.svg' width='25' alt='My Stuff'>",style:"padding:0.5rem"}}),{c(){H(t.$$.fragment),n=I(),H(l.$$.fragment)},l(i){C(t.$$.fragment,i),n=O(i),C(l.$$.fragment,i)},m(i,s){B(t,i,s),A(i,n,s),B(l,i,s),o=!0},p(i,s){const d={};s[0]&16|s[1]&4&&(d.$$scope={dirty:s,ctx:i}),t.$set(d)},i(i){o||(k(t.$$.fragment,i),k(l.$$.fragment,i),o=!0)},o(i){z(t.$$.fragment,i),z(l.$$.fragment,i),o=!1},d(i){P(t,i),i&&m(n),P(l,i)}}}function On(r){let t;function n(i,s){return i[4]>9?le:ee}let l=n(r),o=l(r);return{c(){t=v("div"),o.c(),this.h()},l(i){t=x(i,"DIV",{class:!0});var s=E(t);o.l(s),s.forEach(m),this.h()},h(){c(t,"class","message-badge")},m(i,s){A(i,t,s),o.m(t,null)},p(i,s){l===(l=n(i))&&o?o.p(i,s):(o.d(1),o=l(i),o&&(o.c(),o.m(t,null)))},d(i){i&&m(t),o.d()}}}function ee(r){let t;return{c(){t=tt(r[4])},l(n){t=nt(n,r[4])},m(n,l){A(n,t,l)},p(n,l){l[0]&16&&en(t,n[4])},d(n){n&&m(t)}}}function le(r){let t;return{c(){t=tt("!")},l(n){t=nt(n,"!")},m(n,l){A(n,t,l)},p:yt,d(n){n&&m(t)}}}function oe(r){let t,n=r[4]>0&&On(r);return{c(){n&&n.c(),t=dt()},l(l){n&&n.l(l),t=dt()},m(l,o){n&&n.m(l,o),A(l,t,o)},p(l,o){l[4]>0?n?n.p(l,o):(n=On(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(l){n&&n.d(l),l&&m(t)}}}function Sn(r){let t,n;return t=new lt({props:{link:"/panel",label:"<img src='/messages/panel.svg' width='25' alt='Panel'>",style:"padding:0.5rem"}}),{c(){H(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,o){B(t,l,o),n=!0},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){P(t,l)}}}function ie(r){let t,n,l,o,i,s,d,a,u,h,f;return{c(){t=v("button"),n=v("img"),o=I(),i=v("p"),s=tt(r[3]),d=I(),a=v("img"),this.h()},l(b){t=x(b,"BUTTON",{class:!0});var p=E(t);n=x(p,"IMG",{src:!0,alt:!0,class:!0}),o=O(p),i=x(p,"P",{});var M=E(i);s=nt(M,r[3]),M.forEach(m),d=O(p),a=x(p,"IMG",{src:!0,style:!0,alt:!0}),p.forEach(m),this.h()},h(){wt(n.src,l=`https://trampoline.turbowarp.org/avatars/by-username/${r[3]}`)||c(n,"src",l),c(n,"alt","Profile Picture"),c(n,"class","profile-picture"),wt(a.src,u="/dropdown-caret.png")||c(a,"src",u),_t(a,"margin","0 4px"),c(a,"alt","v"),c(t,"class","profile-dropdown")},m(b,p){A(b,t,p),_(t,n),_(t,o),_(t,i),_(i,s),_(t,d),_(t,a),r[25](t),h||(f=gt(t,"click",r[17]),h=!0)},p(b,p){p[0]&8&&!wt(n.src,l=`https://trampoline.turbowarp.org/avatars/by-username/${b[3]}`)&&c(n,"src",l),p[0]&8&&en(s,b[3])},i:yt,o:yt,d(b){b&&m(t),r[25](null),h=!1,f()}}}function re(r){let t,n;return t=new lt({props:{$$slots:{default:[ae]},$$scope:{ctx:r}}}),t.$on("click",r[15]),{c(){H(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,o){B(t,l,o),n=!0},p(l,o){const i={};o[0]&1024|o[1]&4&&(i.$$scope={dirty:o,ctx:l}),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){P(t,l)}}}function ae(r){let t,n;return t=new kt({props:{text:"Sign in",key:"navigation.login",lang:r[10]}}),{c(){H(t.$$.fragment)},l(l){C(t.$$.fragment,l)},m(l,o){B(t,l,o),n=!0},p(l,o){const i={};o[0]&1024&&(i.lang=l[10]),t.$set(i)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){P(t,l)}}}function se(r){let t,n;return{c(){t=v("style"),n=tt(`:root {
		--penguinmod-color: #57039C;
	}
	:global(body.dark-mode) {
		--penguinmod-color: #57039C;
	}

	.bar {
		position: fixed;
		width: 100%;
		left: 0px;
		top: 0px;
		background: var(--penguinmod-color);
		height: 3rem;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;
		box-sizing: border-box;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 0.75rem;
		font-weight: bold;
		min-width: 1000px;
		z-index: 1000;
	}
	:global(body.launcher-mode) .bar {
		width: 5rem;
		height: 100%;
		min-width: initial;
		min-height: 360px;
		flex-direction: column;
		justify-content: flex-start;
	}

	.logo {
		height: 100%;
	}
	.logo-image {
		margin-top: 15%;
		height: 80%;
		transition: 0.15s ease all;
	}
	.logo-image:hover {
		margin-top: 5%;
		height: 90%;
		transition: 0.15s ease all;
	}
	.logo-launcher-margin {
		width: 0;
		height: 0;
	}
	:global(body.launcher-mode) .logo {
		position: absolute;
		top: 8px;
		height: initial;
		width: 100%;
	}
	:global(body.launcher-mode) .logo-image {
		height: initial;
		margin-top: 20%;
		margin-left: 20%;
		width: 60%;
	}
	:global(body.launcher-mode) .logo-image:hover {
		height: initial;
		margin-top: 15%;
		margin-left: 15%;
		width: 70%;
	}
	:global(body.launcher-mode) .logo-launcher-margin {
		height: 90px;
	}

	.discord-button-icon {
		display: none;
	}
	.discord-button-icon > img {
		width: 2rem;
		padding: 2px 0;
	}
	:global(body.launcher-mode) .discord-button-icon {
		display: initial;
	}
	:global(body.launcher-mode) .discord-button-text {
		display: none;
	}

	.languageSelect {
		position: fixed;
		width: 256px;
		max-height: 300px;
		overflow: auto;
		background: white;
		box-shadow: 0px 0px 8px black;
		outline: #222 1px solid;
		z-index: 9999999;
	}
	.languageOption {
		width: 100%;
		/* margin: 4px 0px; */
		/* border-radius: 4px; */
		background: white;
		border: 0;
		font-size: 1rem;
		text-align: left;
		cursor: pointer;
	}
	:global(html[dir="rtl"]) .languageOption {
		text-align: right;
	}
	.languageCount {
		/* width: 100%; */
		/* text-align: center; */
		font-weight: bold;
		font-size: 12px;
		margin-left: 4px;
		margin-bottom: 0px;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	:global(body.dark-mode) .languageSelect {
		background: #222;
		outline: white 1px solid;
	}
	:global(body.dark-mode) .languageOption {
		color: white;
		background: #222;
	}

	.languageOption:hover {
		background: dodgerblue !important;
		color: white;
	}

	.message-badge {
		position: absolute;
		background: red;
		color: white;
		font-weight: bold;
		border-radius: 1000px;
		width: 16px;
		height: 16px;
		top: 0px;
		right: 0px;
	}
	.rankup-badge {
		display: inline-block;
		text-align: center;
		background: red;
		color: white;
		font-weight: bold;
		border-radius: 1000px;
		width: 16px;
		height: 16px;
	}

	.profile-picture {
		border-radius: 4px;
		width: 30px;
		height: 30px;
		margin-right: 8px;
	}
	:global(html[dir="rtl"]) .profile-picture {
		margin-right: initial;
		margin-left: 8px;
	}
	.profile-dropdown {
		background: transparent;
		border-radius: 4px;
		padding: 0 10px;
		border: 0;
		margin: 0;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		cursor: pointer;
		user-select: none;
	}
	.profile-dropdown > p {
		font-weight: bold;
		font-size: 0.85rem;
		color: white;
	}

	.profile-dropdown:hover,
	.profile-dropdown:focus {
		background: rgba(0, 0, 0, 0.15);
	}

	.profile-dropdown-menu {
		position: fixed;
		background: var(--penguinmod-color);
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.15);
		padding: 4px 0;
		border-top: 0;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		z-index: 9999;
	}
	.profile-dropdown-menu button {
		background: transparent;
		font-weight: bold;
		font-size: 0.85rem;
		text-align: left;
		width: 100%;
		color: white;
		border: 0;
		padding: 8px 8px;
		padding-right: 4px;
		margin: 4px 0;
		text-decoration: none;
		cursor: pointer;
		user-select: none;
	}
	:global(html[dir="rtl"]) .profile-dropdown-menu button {
		text-align: right;
	}
	.profile-dropdown-menu button:hover {
		background: rgba(0, 0, 0, 0.15);
	}

	.only-non-launcher {
		display: initial;
	}
	.only-launcher {
		display: none;
	}
	:global(body.launcher-mode) .only-non-launcher {
		display: none;
	}
	:global(body.launcher-mode) .only-launcher {
		display: initial;
	}`)},l(l){t=x(l,"STYLE",{});var o=E(t);n=nt(o,`:root {
		--penguinmod-color: #57039C;
	}
	:global(body.dark-mode) {
		--penguinmod-color: #57039C;
	}

	.bar {
		position: fixed;
		width: 100%;
		left: 0px;
		top: 0px;
		background: var(--penguinmod-color);
		height: 3rem;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;
		box-sizing: border-box;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 0.75rem;
		font-weight: bold;
		min-width: 1000px;
		z-index: 1000;
	}
	:global(body.launcher-mode) .bar {
		width: 5rem;
		height: 100%;
		min-width: initial;
		min-height: 360px;
		flex-direction: column;
		justify-content: flex-start;
	}

	.logo {
		height: 100%;
	}
	.logo-image {
		margin-top: 15%;
		height: 80%;
		transition: 0.15s ease all;
	}
	.logo-image:hover {
		margin-top: 5%;
		height: 90%;
		transition: 0.15s ease all;
	}
	.logo-launcher-margin {
		width: 0;
		height: 0;
	}
	:global(body.launcher-mode) .logo {
		position: absolute;
		top: 8px;
		height: initial;
		width: 100%;
	}
	:global(body.launcher-mode) .logo-image {
		height: initial;
		margin-top: 20%;
		margin-left: 20%;
		width: 60%;
	}
	:global(body.launcher-mode) .logo-image:hover {
		height: initial;
		margin-top: 15%;
		margin-left: 15%;
		width: 70%;
	}
	:global(body.launcher-mode) .logo-launcher-margin {
		height: 90px;
	}

	.discord-button-icon {
		display: none;
	}
	.discord-button-icon > img {
		width: 2rem;
		padding: 2px 0;
	}
	:global(body.launcher-mode) .discord-button-icon {
		display: initial;
	}
	:global(body.launcher-mode) .discord-button-text {
		display: none;
	}

	.languageSelect {
		position: fixed;
		width: 256px;
		max-height: 300px;
		overflow: auto;
		background: white;
		box-shadow: 0px 0px 8px black;
		outline: #222 1px solid;
		z-index: 9999999;
	}
	.languageOption {
		width: 100%;
		/* margin: 4px 0px; */
		/* border-radius: 4px; */
		background: white;
		border: 0;
		font-size: 1rem;
		text-align: left;
		cursor: pointer;
	}
	:global(html[dir="rtl"]) .languageOption {
		text-align: right;
	}
	.languageCount {
		/* width: 100%; */
		/* text-align: center; */
		font-weight: bold;
		font-size: 12px;
		margin-left: 4px;
		margin-bottom: 0px;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	:global(body.dark-mode) .languageSelect {
		background: #222;
		outline: white 1px solid;
	}
	:global(body.dark-mode) .languageOption {
		color: white;
		background: #222;
	}

	.languageOption:hover {
		background: dodgerblue !important;
		color: white;
	}

	.message-badge {
		position: absolute;
		background: red;
		color: white;
		font-weight: bold;
		border-radius: 1000px;
		width: 16px;
		height: 16px;
		top: 0px;
		right: 0px;
	}
	.rankup-badge {
		display: inline-block;
		text-align: center;
		background: red;
		color: white;
		font-weight: bold;
		border-radius: 1000px;
		width: 16px;
		height: 16px;
	}

	.profile-picture {
		border-radius: 4px;
		width: 30px;
		height: 30px;
		margin-right: 8px;
	}
	:global(html[dir="rtl"]) .profile-picture {
		margin-right: initial;
		margin-left: 8px;
	}
	.profile-dropdown {
		background: transparent;
		border-radius: 4px;
		padding: 0 10px;
		border: 0;
		margin: 0;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		cursor: pointer;
		user-select: none;
	}
	.profile-dropdown > p {
		font-weight: bold;
		font-size: 0.85rem;
		color: white;
	}

	.profile-dropdown:hover,
	.profile-dropdown:focus {
		background: rgba(0, 0, 0, 0.15);
	}

	.profile-dropdown-menu {
		position: fixed;
		background: var(--penguinmod-color);
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.15);
		padding: 4px 0;
		border-top: 0;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		z-index: 9999;
	}
	.profile-dropdown-menu button {
		background: transparent;
		font-weight: bold;
		font-size: 0.85rem;
		text-align: left;
		width: 100%;
		color: white;
		border: 0;
		padding: 8px 8px;
		padding-right: 4px;
		margin: 4px 0;
		text-decoration: none;
		cursor: pointer;
		user-select: none;
	}
	:global(html[dir="rtl"]) .profile-dropdown-menu button {
		text-align: right;
	}
	.profile-dropdown-menu button:hover {
		background: rgba(0, 0, 0, 0.15);
	}

	.only-non-launcher {
		display: initial;
	}
	.only-launcher {
		display: none;
	}
	:global(body.launcher-mode) .only-non-launcher {
		display: none;
	}
	:global(body.launcher-mode) .only-launcher {
		display: initial;
	}`),o.forEach(m)},m(l,o){A(l,t,o),_(t,n)},d(l){l&&m(t)}}}function ue(r){let t,n;return{c(){t=v("style"),n=tt(`:root {
		--penguinmod-color: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,212,255,1) 100%);
	}
	:global(body.dark-mode) {
		--penguinmod-color: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,212,255,1) 100%);
	}

	.bar {
		position: fixed;
		width: 100%;
		left: 0px;
		top: 0px;
		background: var(--penguinmod-color);
		height: 3rem;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;
		box-sizing: border-box;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 0.75rem;
		font-weight: bold;
		min-width: 1000px;
		z-index: 1000;
	}
	:global(body.launcher-mode) .bar {
		width: 5rem;
		height: 100%;
		min-width: initial;
		min-height: 360px;
		flex-direction: column;
		justify-content: flex-start;
	}

	.logo {
		height: 100%;
	}
	.logo-image {
		margin-top: 15%;
		height: 80%;
		transition: 0.15s ease all;
	}
	.logo-image:hover {
		margin-top: 5%;
		height: 90%;
		transition: 0.15s ease all;
	}
	.logo-launcher-margin {
		width: 0;
		height: 0;
	}
	:global(body.launcher-mode) .logo {
		position: absolute;
		top: 8px;
		height: initial;
		width: 100%;
	}
	:global(body.launcher-mode) .logo-image {
		height: initial;
		margin-top: 20%;
		margin-left: 20%;
		width: 60%;
	}
	:global(body.launcher-mode) .logo-image:hover {
		height: initial;
		margin-top: 15%;
		margin-left: 15%;
		width: 70%;
	}
	:global(body.launcher-mode) .logo-launcher-margin {
		height: 90px;
	}

	.discord-button-icon {
		display: none;
	}
	.discord-button-icon > img {
		width: 2rem;
		padding: 2px 0;
	}
	:global(body.launcher-mode) .discord-button-icon {
		display: initial;
	}
	:global(body.launcher-mode) .discord-button-text {
		display: none;
	}

	.languageSelect {
		position: fixed;
		width: 256px;
		max-height: 300px;
		overflow: auto;
		background: white;
		box-shadow: 0px 0px 8px black;
		outline: #222 1px solid;
		z-index: 9999999;
	}
	.languageOption {
		width: 100%;
		/* margin: 4px 0px; */
		/* border-radius: 4px; */
		background: white;
		border: 0;
		font-size: 1rem;
		text-align: left;
		cursor: pointer;
	}
	:global(html[dir="rtl"]) .languageOption {
		text-align: right;
	}
	.languageCount {
		/* width: 100%; */
		/* text-align: center; */
		font-weight: bold;
		font-size: 12px;
		margin-left: 4px;
		margin-bottom: 0px;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	:global(body.dark-mode) .languageSelect {
		background: #222;
		outline: white 1px solid;
	}
	:global(body.dark-mode) .languageOption {
		color: white;
		background: #222;
	}

	.languageOption:hover {
		background: dodgerblue !important;
		color: white;
	}

	.message-badge {
		position: absolute;
		background: red;
		color: white;
		font-weight: bold;
		border-radius: 1000px;
		width: 16px;
		height: 16px;
		top: 0px;
		right: 0px;
	}
	.rankup-badge {
		display: inline-block;
		text-align: center;
		background: red;
		color: white;
		font-weight: bold;
		border-radius: 1000px;
		width: 16px;
		height: 16px;
	}

	.profile-picture {
		border-radius: 4px;
		width: 30px;
		height: 30px;
		margin-right: 8px;
	}
	:global(html[dir="rtl"]) .profile-picture {
		margin-right: initial;
		margin-left: 8px;
	}
	.profile-dropdown {
		background: transparent;
		border-radius: 4px;
		padding: 0 10px;
		border: 0;
		margin: 0;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		cursor: pointer;
		user-select: none;
	}
	.profile-dropdown > p {
		font-weight: bold;
		font-size: 0.85rem;
		color: white;
	}

	.profile-dropdown:hover,
	.profile-dropdown:focus {
		background: rgba(0, 0, 0, 0.15);
	}

	.profile-dropdown-menu {
		position: fixed;
		background: var(--penguinmod-color);
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.15);
		padding: 4px 0;
		border-top: 0;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		z-index: 9999;
	}
	.profile-dropdown-menu button {
		background: transparent;
		font-weight: bold;
		font-size: 0.85rem;
		text-align: left;
		width: 100%;
		color: white;
		border: 0;
		padding: 8px 8px;
		padding-right: 4px;
		margin: 4px 0;
		text-decoration: none;
		cursor: pointer;
		user-select: none;
	}
	:global(html[dir="rtl"]) .profile-dropdown-menu button {
		text-align: right;
	}
	.profile-dropdown-menu button:hover {
		background: rgba(0, 0, 0, 0.15);
	}

	.only-non-launcher {
		display: initial;
	}
	.only-launcher {
		display: none;
	}
	:global(body.launcher-mode) .only-non-launcher {
		display: none;
	}
	:global(body.launcher-mode) .only-launcher {
		display: initial;
	}`)},l(l){t=x(l,"STYLE",{});var o=E(t);n=nt(o,`:root {
		--penguinmod-color: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,212,255,1) 100%);
	}
	:global(body.dark-mode) {
		--penguinmod-color: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,212,255,1) 100%);
	}

	.bar {
		position: fixed;
		width: 100%;
		left: 0px;
		top: 0px;
		background: var(--penguinmod-color);
		height: 3rem;
		color: white;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;
		box-sizing: border-box;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 0.75rem;
		font-weight: bold;
		min-width: 1000px;
		z-index: 1000;
	}
	:global(body.launcher-mode) .bar {
		width: 5rem;
		height: 100%;
		min-width: initial;
		min-height: 360px;
		flex-direction: column;
		justify-content: flex-start;
	}

	.logo {
		height: 100%;
	}
	.logo-image {
		margin-top: 15%;
		height: 80%;
		transition: 0.15s ease all;
	}
	.logo-image:hover {
		margin-top: 5%;
		height: 90%;
		transition: 0.15s ease all;
	}
	.logo-launcher-margin {
		width: 0;
		height: 0;
	}
	:global(body.launcher-mode) .logo {
		position: absolute;
		top: 8px;
		height: initial;
		width: 100%;
	}
	:global(body.launcher-mode) .logo-image {
		height: initial;
		margin-top: 20%;
		margin-left: 20%;
		width: 60%;
	}
	:global(body.launcher-mode) .logo-image:hover {
		height: initial;
		margin-top: 15%;
		margin-left: 15%;
		width: 70%;
	}
	:global(body.launcher-mode) .logo-launcher-margin {
		height: 90px;
	}

	.discord-button-icon {
		display: none;
	}
	.discord-button-icon > img {
		width: 2rem;
		padding: 2px 0;
	}
	:global(body.launcher-mode) .discord-button-icon {
		display: initial;
	}
	:global(body.launcher-mode) .discord-button-text {
		display: none;
	}

	.languageSelect {
		position: fixed;
		width: 256px;
		max-height: 300px;
		overflow: auto;
		background: white;
		box-shadow: 0px 0px 8px black;
		outline: #222 1px solid;
		z-index: 9999999;
	}
	.languageOption {
		width: 100%;
		/* margin: 4px 0px; */
		/* border-radius: 4px; */
		background: white;
		border: 0;
		font-size: 1rem;
		text-align: left;
		cursor: pointer;
	}
	:global(html[dir="rtl"]) .languageOption {
		text-align: right;
	}
	.languageCount {
		/* width: 100%; */
		/* text-align: center; */
		font-weight: bold;
		font-size: 12px;
		margin-left: 4px;
		margin-bottom: 0px;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	:global(body.dark-mode) .languageSelect {
		background: #222;
		outline: white 1px solid;
	}
	:global(body.dark-mode) .languageOption {
		color: white;
		background: #222;
	}

	.languageOption:hover {
		background: dodgerblue !important;
		color: white;
	}

	.message-badge {
		position: absolute;
		background: red;
		color: white;
		font-weight: bold;
		border-radius: 1000px;
		width: 16px;
		height: 16px;
		top: 0px;
		right: 0px;
	}
	.rankup-badge {
		display: inline-block;
		text-align: center;
		background: red;
		color: white;
		font-weight: bold;
		border-radius: 1000px;
		width: 16px;
		height: 16px;
	}

	.profile-picture {
		border-radius: 4px;
		width: 30px;
		height: 30px;
		margin-right: 8px;
	}
	:global(html[dir="rtl"]) .profile-picture {
		margin-right: initial;
		margin-left: 8px;
	}
	.profile-dropdown {
		background: transparent;
		border-radius: 4px;
		padding: 0 10px;
		border: 0;
		margin: 0;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		cursor: pointer;
		user-select: none;
	}
	.profile-dropdown > p {
		font-weight: bold;
		font-size: 0.85rem;
		color: white;
	}

	.profile-dropdown:hover,
	.profile-dropdown:focus {
		background: rgba(0, 0, 0, 0.15);
	}

	.profile-dropdown-menu {
		position: fixed;
		background: var(--penguinmod-color);
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.15);
		padding: 4px 0;
		border-top: 0;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		z-index: 9999;
	}
	.profile-dropdown-menu button {
		background: transparent;
		font-weight: bold;
		font-size: 0.85rem;
		text-align: left;
		width: 100%;
		color: white;
		border: 0;
		padding: 8px 8px;
		padding-right: 4px;
		margin: 4px 0;
		text-decoration: none;
		cursor: pointer;
		user-select: none;
	}
	:global(html[dir="rtl"]) .profile-dropdown-menu button {
		text-align: right;
	}
	.profile-dropdown-menu button:hover {
		background: rgba(0, 0, 0, 0.15);
	}

	.only-non-launcher {
		display: initial;
	}
	.only-launcher {
		display: none;
	}
	:global(body.launcher-mode) .only-non-launcher {
		display: none;
	}
	:global(body.launcher-mode) .only-launcher {
		display: initial;
	}`),o.forEach(m)},m(l,o){A(l,t,o),_(t,n)},d(l){l&&m(t)}}}function de(r){let t,n,l,o,i,s=r[13].replace("$1",r[16].length)+"",d,a,u,h,f,b,p,M,vt,At,J,ot,K,xt,it,Q,$t,$,Y,It,ct,Ot,ft,St,W,y,U,F,Nt,q,gn,rt,cn,zt,at,fn,st,hn,Ft,Jt,qt,L,V,Kt,Yt,ht,pn,bn,Et=r[16],D=[];for(let g=0;g<Et.length;g+=1)D[g]=zn($n(r,Et,g));p=new kt({props:{text:"Profile",key:"navigation.profile",lang:r[10]}});let G=r[5]&&En();K=new kt({props:{text:"My Stuff",key:"navigation.mystuff",lang:r[10]}}),Q=new kt({props:{text:"Logout",key:"navigation.logout",lang:r[10]}});function Tn(g,w){return g[20]()?Qn:Yn}let Qt=Tn(r)(r);W=new lt({props:{label:"<img src='/moon.svg' alt='ThemeSwitcher'>",style:"padding:0.5rem",classActor:"themeSwitcher"}}),W.$on("click",ge),F=new lt({props:{link:Lt.editor,$$slots:{default:[Wn]},$$scope:{ctx:r}}}),q=new lt({props:{link:Lt.status,$$slots:{default:[Xn]},$$scope:{ctx:r}}}),rt=new lt({props:{link:Lt.upload_project,$$slots:{default:[Zn]},$$scope:{ctx:r}}}),at=new lt({props:{id:"__home_navigation_create_button",$$slots:{default:[te]},$$scope:{ctx:r}}}),st=new Kn({props:{placeholder:r[11]}});let N=r[6]&&An(r),T=r[0]===!0&&In(r),j=(r[1]||r[2])&&r[0]&&Sn();const _n=[re,ie],ut=[];function wn(g,w){return g[0]===!1?0:g[0]===!0?1:-1}~(L=wn(r))&&(V=ut[L]=_n[L](r));function jn(g,w){return g[20]()?ue:se}let Wt=jn(r)(r);return{c(){t=v("div"),n=v("button"),l=tt(r[12]),o=I(),i=v("p"),d=tt(s),a=I();for(let g=0;g<D.length;g+=1)D[g].c();u=I(),h=v("div"),f=v("a"),b=v("button"),H(p.$$.fragment),M=I(),G&&G.c(),At=I(),J=v("a"),ot=v("button"),H(K.$$.fragment),xt=I(),it=v("button"),H(Q.$$.fragment),$t=I(),$=v("div"),Y=v("a"),Qt.c(),It=I(),ct=v("div"),Ot=I(),ft=v("div"),St=I(),H(W.$$.fragment),y=I(),U=v("div"),H(F.$$.fragment),Nt=I(),H(q.$$.fragment),gn=I(),H(rt.$$.fragment),cn=I(),zt=v("div"),H(at.$$.fragment),fn=I(),H(st.$$.fragment),hn=I(),N&&N.c(),Ft=I(),T&&T.c(),Jt=I(),j&&j.c(),qt=I(),V&&V.c(),Kt=I(),Wt.c(),Yt=dt(),this.h()},l(g){t=x(g,"DIV",{style:!0,class:!0});var w=E(t);n=x(w,"BUTTON",{class:!0,style:!0});var X=E(n);l=nt(X,r[12]),X.forEach(m),o=O(w),i=x(w,"P",{class:!0});var Tt=E(i);d=nt(Tt,s),Tt.forEach(m),a=O(w);for(let mn=0;mn<D.length;mn+=1)D[mn].l(w);w.forEach(m),u=O(g),h=x(g,"DIV",{style:!0,class:!0});var et=E(h);f=x(et,"A",{href:!0});var jt=E(f);b=x(jt,"BUTTON",{});var pt=E(b);C(p.$$.fragment,pt),M=O(pt),G&&G.l(pt),pt.forEach(m),jt.forEach(m),At=O(et),J=x(et,"A",{href:!0});var Ht=E(J);ot=x(Ht,"BUTTON",{});var Ct=E(ot);C(K.$$.fragment,Ct),Ct.forEach(m),Ht.forEach(m),xt=O(et),it=x(et,"BUTTON",{});var Bt=E(it);C(Q.$$.fragment,Bt),Bt.forEach(m),et.forEach(m),$t=O(g),$=x(g,"DIV",{class:!0});var S=E($);Y=x(S,"A",{class:!0,href:!0});var R=E(Y);Qt.l(R),R.forEach(m),It=O(S),ct=x(S,"DIV",{style:!0}),E(ct).forEach(m),Ot=O(S),ft=x(S,"DIV",{class:!0}),E(ft).forEach(m),St=O(S),C(W.$$.fragment,S),y=O(S),U=x(S,"DIV",{class:!0});var Pt=E(U);C(F.$$.fragment,Pt),Pt.forEach(m),Nt=O(S),C(q.$$.fragment,S),gn=O(S),C(rt.$$.fragment,S),cn=O(S),zt=x(S,"DIV",{class:!0});var kn=E(zt);C(at.$$.fragment,kn),kn.forEach(m),fn=O(S),C(st.$$.fragment,S),hn=O(S),N&&N.l(S),Ft=O(S),T&&T.l(S),Jt=O(S),j&&j.l(S),qt=O(S),V&&V.l(S),S.forEach(m),Kt=O(g),Wt.l(g),Yt=dt(),this.h()},h(){c(n,"class","languageOption"),_t(n,"margin-bottom","8px"),c(i,"class","languageCount"),_t(t,"display","none"),c(t,"class","languageSelect"),c(f,"href",vt=`/profile?user=${r[3]}`),c(J,"href","/mystuff"),_t(h,"display","none"),c(h,"class","profile-dropdown-menu"),c(Y,"class","logo"),c(Y,"href","/"),_t(ct,"margin-right","12px"),c(ft,"class","logo-launcher-margin"),c(U,"class","only-non-launcher"),c(zt,"class","only-launcher"),c($,"class","bar")},m(g,w){A(g,t,w),_(t,n),_(n,l),_(t,o),_(t,i),_(i,d),_(t,a);for(let X=0;X<D.length;X+=1)D[X]&&D[X].m(t,null);r[23](t),A(g,u,w),A(g,h,w),_(h,f),_(f,b),B(p,b,null),_(b,M),G&&G.m(b,null),_(h,At),_(h,J),_(J,ot),B(K,ot,null),_(h,xt),_(h,it),B(Q,it,null),r[24](h),A(g,$t,w),A(g,$,w),_($,Y),Qt.m(Y,null),_($,It),_($,ct),_($,Ot),_($,ft),_($,St),B(W,$,null),_($,y),_($,U),B(F,U,null),_($,Nt),B(q,$,null),_($,gn),B(rt,$,null),_($,cn),_($,zt),B(at,zt,null),_($,fn),B(st,$,null),_($,hn),N&&N.m($,null),_($,Ft),T&&T.m($,null),_($,Jt),j&&j.m($,null),_($,qt),~L&&ut[L].m($,null),A(g,Kt,w),Wt.m(g,w),A(g,Yt,w),ht=!0,pn||(bn=[gt(n,"click",r[21]),gt(it,"click",r[14])],pn=!0)},p(g,w){if((!ht||w[0]&4096)&&en(l,g[12]),(!ht||w[0]&8192)&&s!==(s=g[13].replace("$1",g[16].length)+"")&&en(d,s),w[0]&851968){Et=g[16];let R;for(R=0;R<Et.length;R+=1){const Pt=$n(g,Et,R);D[R]?D[R].p(Pt,w):(D[R]=zn(Pt),D[R].c(),D[R].m(t,null))}for(;R<D.length;R+=1)D[R].d(1);D.length=Et.length}const X={};w[0]&1024&&(X.lang=g[10]),p.$set(X),g[5]?G||(G=En(),G.c(),G.m(b,null)):G&&(G.d(1),G=null),(!ht||w[0]&8&&vt!==(vt=`/profile?user=${g[3]}`))&&c(f,"href",vt);const Tt={};w[0]&1024&&(Tt.lang=g[10]),K.$set(Tt);const et={};w[0]&1024&&(et.lang=g[10]),Q.$set(et);const jt={};w[0]&1024|w[1]&4&&(jt.$$scope={dirty:w,ctx:g}),F.$set(jt);const pt={};w[0]&1024|w[1]&4&&(pt.$$scope={dirty:w,ctx:g}),q.$set(pt);const Ht={};w[0]&1024|w[1]&4&&(Ht.$$scope={dirty:w,ctx:g}),rt.$set(Ht);const Ct={};w[1]&4&&(Ct.$$scope={dirty:w,ctx:g}),at.$set(Ct);const Bt={};w[0]&2048&&(Bt.placeholder=g[11]),st.$set(Bt),g[6]?N?(N.p(g,w),w[0]&64&&k(N,1)):(N=An(g),N.c(),k(N,1),N.m($,Ft)):N&&(mt(),z(N,1,1,()=>{N=null}),bt()),g[0]===!0?T?(T.p(g,w),w[0]&1&&k(T,1)):(T=In(g),T.c(),k(T,1),T.m($,Jt)):T&&(mt(),z(T,1,1,()=>{T=null}),bt()),(g[1]||g[2])&&g[0]?j?w[0]&7&&k(j,1):(j=Sn(),j.c(),k(j,1),j.m($,qt)):j&&(mt(),z(j,1,1,()=>{j=null}),bt());let S=L;L=wn(g),L===S?~L&&ut[L].p(g,w):(V&&(mt(),z(ut[S],1,1,()=>{ut[S]=null}),bt()),~L?(V=ut[L],V?V.p(g,w):(V=ut[L]=_n[L](g),V.c()),k(V,1),V.m($,null)):V=null)},i(g){ht||(k(p.$$.fragment,g),k(K.$$.fragment,g),k(Q.$$.fragment,g),k(W.$$.fragment,g),k(F.$$.fragment,g),k(q.$$.fragment,g),k(rt.$$.fragment,g),k(at.$$.fragment,g),k(st.$$.fragment,g),k(N),k(T),k(j),k(V),ht=!0)},o(g){z(p.$$.fragment,g),z(K.$$.fragment,g),z(Q.$$.fragment,g),z(W.$$.fragment,g),z(F.$$.fragment,g),z(q.$$.fragment,g),z(rt.$$.fragment,g),z(at.$$.fragment,g),z(st.$$.fragment,g),z(N),z(T),z(j),z(V),ht=!1},d(g){g&&m(t),Cn(D,g),r[23](null),g&&m(u),g&&m(h),P(p),G&&G.d(),P(K),P(Q),r[24](null),g&&m($t),g&&m($),Qt.d(),P(W),P(F),P(q),P(rt),P(at),P(st),N&&N.d(),T&&T.d(),j&&j.d(),~L&&ut[L].d(),g&&m(Kt),Wt.d(g),g&&m(Yt),pn=!1,Nn(bn)}}}function ge(){localStorage.getItem("darkmode")?localStorage.removeItem("darkmode"):localStorage.setItem("darkmode",!0)}function ce(r,t,n){const l=new ln;let o=null,i=!1,s=!1,d="",a=0,u=!1,h=!1;Mt(async()=>{const y=new URLSearchParams(window.location.search);n(6,h=y.has("livetests"))});function f(){const y=localStorage.getItem("PV");if(!y){n(0,o=!1),n(5,u=!1),n(4,a=0);return}Ut.usernameFromCode(y).then(({username:U,isAdmin:F,isApprover:Nt})=>{if(U){n(0,o=!0),n(3,d=U),n(1,i=F),n(2,s=Nt),U&&l.setUsername(U),y&&l.setPrivateCode(y),l.setAdmin(F),l.getMessageCount().then(q=>{n(4,a=q)}),U&&ln.getProfile(U).then(q=>{n(5,u=q.canrankup===!0)});return}n(0,o=!1),n(5,u=!1),n(4,a=0)}).catch(()=>{n(0,o=!1),n(5,u=!1),n(4,a=0)})}Ut.onAuthentication(f);let b,p,M;function vt(){n(8,p.style.display="none",p);const y=localStorage.getItem("PV");Ut.usernameFromCode(y).then(({username:U})=>{fetch(`${Lt.projects}api/users/logout?user=${U}&code=${y}`).then(F=>{F.ok&&(localStorage.removeItem("PV"),Ut.fireLogout(),n(0,o=!1),n(5,u=!1),n(4,a=0))})})}function At(){Ut.authenticate()}Mt(f);let J="en",ot="Search for projects...",K="Same as browser",xt="$1 languages translated";Mt(()=>{tn.forceUpdate()}),tn.onChange(y=>{n(10,J=y),n(11,ot=Dt.text("navigation.search",J)),n(12,K=Dt.text("lang.default",J)),n(13,xt=Dt.text("lang.count",J))});const it=Dt.languages,Q=Object.keys(it);function $t(y){const U=M.getBoundingClientRect();y=y.detail,n(8,p.style.display="",p),n(8,p.style.right=`${window.innerWidth-U.right-8}px`,p),n(8,p.style.top="3rem",p)}function $(y){return Dt.text("lang.name",y)}function Y(y){if(n(7,b.style.display="none",b),y==="default"){localStorage.removeItem("pm:language"),tn.forceUpdate();return}localStorage.setItem("pm:language",y),tn.forceUpdate()}Mt(()=>{window.addEventListener("mousedown",y=>{b&&(yn.isDescendantOf(b,y.target)||n(7,b.style.display="none",b)),p&&(yn.isDescendantOf(p,y.target)||n(8,p.style.display="none",p))})});const It=()=>{var y=new Date;return y.getMonth()==3&&y.getDate()==1},ct=()=>Y("default"),Ot=y=>Y(y);function ft(y){nn[y?"unshift":"push"](()=>{b=y,n(7,b)})}function St(y){nn[y?"unshift":"push"](()=>{p=y,n(8,p)})}function W(y){nn[y?"unshift":"push"](()=>{M=y,n(9,M)})}return[o,i,s,d,a,u,h,b,p,M,J,ot,K,xt,vt,At,Q,$t,$,Y,It,ct,Ot,ft,St,W]}class we extends Vt{constructor(t){super(),Gt(this,t,ce,de,Rt,{},null,[-1,-1])}}export{yn as H,Fn as I,Lt as L,we as N};
