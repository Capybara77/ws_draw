var Oe=Object.defineProperty;var Ce=(s,t,e)=>t in s?Oe(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var G=(s,t,e)=>(Ce(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();function Jt(s,t,e,n=o=>o){return s*n(.5-t*(.5-e))}function Ee(s){return[-s[0],-s[1]]}function Y(s,t){return[s[0]+t[0],s[1]+t[1]]}function j(s,t){return[s[0]-t[0],s[1]-t[1]]}function X(s,t){return[s[0]*t,s[1]*t]}function We(s,t){return[s[0]/t,s[1]/t]}function ot(s){return[s[1],-s[0]]}function Kt(s,t){return s[0]*t[0]+s[1]*t[1]}function Te(s,t){return s[0]===t[0]&&s[1]===t[1]}function Ie(s){return Math.hypot(s[0],s[1])}function Ae(s){return s[0]*s[0]+s[1]*s[1]}function Ut(s,t){return Ae(j(s,t))}function fe(s){return We(s,Ie(s))}function De(s,t){return Math.hypot(s[1]-t[1],s[0]-t[0])}function rt(s,t,e){let n=Math.sin(e),o=Math.cos(e),r=s[0]-t[0],a=s[1]-t[1],i=r*o-a*n,h=r*n+a*o;return[i+t[0],h+t[1]]}function _t(s,t,e){return Y(s,X(j(t,s),e))}function te(s,t,e){return Y(s,X(t,e))}var{min:et,PI:$e}=Math,ee=.275,it=$e+1e-4;function ze(s,t={}){let{size:e=16,smoothing:n=.5,thinning:o=.5,simulatePressure:r=!0,easing:a=M=>M,start:i={},end:h={},last:f=!1}=t,{cap:c=!0,easing:p=M=>M*(2-M)}=i,{cap:d=!0,easing:u=M=>--M*M*M+1}=h;if(s.length===0||e<=0)return[];let l=s[s.length-1].runningLength,m=i.taper===!1?0:i.taper===!0?Math.max(e,l):i.taper,g=h.taper===!1?0:h.taper===!0?Math.max(e,l):h.taper,k=Math.pow(e*n,2),w=[],E=[],z=s.slice(0,10).reduce((M,T)=>{let P=T.pressure;if(r){let S=et(1,T.distance/e),Et=et(1,1-S);P=et(1,M+(Et-M)*(S*ee))}return(M+P)/2},s[0].pressure),v=Jt(e,o,s[s.length-1].pressure,a),I,q=s[0].vector,$=s[0].point,V=$,W=$,_=V,tt=!1;for(let M=0;M<s.length;M++){let{pressure:T}=s[M],{point:P,vector:S,distance:Et,runningLength:st}=s[M];if(M<s.length-1&&l-st<3)continue;if(o){if(r){let Q=et(1,Et/e),Tt=et(1,1-Q);T=et(1,z+(Tt-z)*(Q*ee))}v=Jt(e,o,T,a)}else v=e/2;I===void 0&&(I=v);let Pe=st<m?p(st/m):1,Se=l-st<g?u((l-st)/g):1;v=Math.max(.01,v*Math.min(Pe,Se));let Zt=(M<s.length-1?s[M+1]:s[M]).vector,Wt=M<s.length-1?Kt(S,Zt):1,Le=Kt(S,q)<0&&!tt,Ht=Wt!==null&&Wt<0;if(Le||Ht){let Q=X(ot(q),v);for(let Tt=1/13,pt=0;pt<=1;pt+=Tt)W=rt(j(P,Q),P,it*pt),w.push(W),_=rt(Y(P,Q),P,it*-pt),E.push(_);$=W,V=_,Ht&&(tt=!0);continue}if(tt=!1,M===s.length-1){let Q=X(ot(S),v);w.push(j(P,Q)),E.push(Y(P,Q));continue}let Qt=X(ot(_t(Zt,S,Wt)),v);W=j(P,Qt),(M<=1||Ut($,W)>k)&&(w.push(W),$=W),_=Y(P,Qt),(M<=1||Ut(V,_)>k)&&(E.push(_),V=_),z=T,q=S}let L=s[0].point.slice(0,2),x=s.length>1?s[s.length-1].point.slice(0,2):Y(s[0].point,[1,1]),F=[],N=[];if(s.length===1){if(!(m||g)||f){let M=te(L,fe(ot(j(L,x))),-(I||v)),T=[];for(let P=1/13,S=P;S<=1;S+=P)T.push(rt(M,L,it*2*S));return T}}else{if(!(m||g&&s.length===1))if(c)for(let T=1/13,P=T;P<=1;P+=T){let S=rt(E[0],L,it*P);F.push(S)}else{let T=j(w[0],E[0]),P=X(T,.5),S=X(T,.51);F.push(j(L,P),j(L,S),Y(L,S),Y(L,P))}let M=ot(Ee(s[s.length-1].vector));if(g||m&&s.length===1)N.push(x);else if(d){let T=te(x,M,v);for(let P=1/29,S=P;S<1;S+=P)N.push(rt(T,x,it*3*S))}else N.push(Y(x,X(M,v)),Y(x,X(M,v*.99)),j(x,X(M,v*.99)),j(x,X(M,v)))}return w.concat(N,E.reverse(),F)}function _e(s,t={}){var e;let{streamline:n=.5,size:o=16,last:r=!1}=t;if(s.length===0)return[];let a=.15+(1-n)*.85,i=Array.isArray(s[0])?s:s.map(({x:u,y:l,pressure:m=.5})=>[u,l,m]);if(i.length===2){let u=i[1];i=i.slice(0,-1);for(let l=1;l<5;l++)i.push(_t(i[0],u,l/4))}i.length===1&&(i=[...i,[...Y(i[0],[1,1]),...i[0].slice(2)]]);let h=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],f=!1,c=0,p=h[0],d=i.length-1;for(let u=1;u<i.length;u++){let l=r&&u===d?i[u].slice(0,2):_t(p.point,i[u],a);if(Te(p.point,l))continue;let m=De(l,p.point);if(c+=m,u<d&&!f){if(c<o)continue;f=!0}p={point:l,pressure:i[u][2]>=0?i[u][2]:.5,vector:fe(j(p.point,l)),distance:m,runningLength:c},h.push(p)}return h[0].vector=((e=h[1])==null?void 0:e.vector)||[0,0],h}function Fe(s,t={}){return ze(_e(s,t),t)}var Re=Fe;function qe(s,t,e){const n={transform:`translate(${s}px, ${t}px)`};e.animate(n,{fill:"forwards"})}function pe(s,t,e){t.fillStyle=s,t.strokeStyle=s,e.style.backgroundColor=s;const n=document.getElementsByClassName("trailer");for(let o=0;o<n.length;o++){const r=n[o];r.style.backgroundColor=s}}function dt(s,t){return(s+t)/2}function Be(s,t=!0){const e=s.length;if(e<4)return"";let n=s[0],o=s[1];const r=s[2];let a=`M${n[0].toFixed(2)},${n[1].toFixed(2)} Q${o[0].toFixed(2)},${o[1].toFixed(2)} ${dt(o[0],r[0]).toFixed(2)},${dt(o[1],r[1]).toFixed(2)} T`;for(let i=2,h=e-1;i<h;i++)n=s[i],o=s[i+1],a+=`${dt(n[0],o[0]).toFixed(2)},${dt(n[1],o[1]).toFixed(2)} `;return t&&(a+="Z"),a}function de(s,t="1"){let e,n;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(s))return e=s.substring(1).split(""),e.length==3&&(e=[e[0],e[0],e[1],e[1],e[2],e[2]]),n=+("0x"+e.join("")),"rgba("+[n>>16&255,n>>8&255,n&255].join(",")+","+t+")";throw new Error("Bad Hex")}function je(s,t){let e=s.slice(s.indexOf("(")+1,s.indexOf(")")).split(", ");return"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+t+")"}function Ne(s){let t="";const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n=e.length;for(let o=0;o<s;o++)t+=e.charAt(Math.floor(Math.random()*n));return t}function K(s,t){let e=t.fillStyle,n=t.lineWidth;s.width+=1,s.width-=1,t.fillStyle=e,t.lineWidth=n}function U(s,t,e,n,o){for(let r=0;r<s.length;r++)s[r].draw(t,e)}class ge{constructor(t,e){G(this,"color");G(this,"width");G(this,"typeName","");this.color=t,this.width=e}draw(t,e){console.log("offset:",t,e)}log(){console.log("yo")}}class jt extends ge{constructor(e,n,o,r){super(n,o);G(this,"pointsList");G(this,"ctx");G(this,"typeName","curve");this.pointsList=e,this.ctx=r}draw(e,n){let o=[];for(let f=0;f<this.pointsList.length;f++){let c=this.pointsList[f];o.push([c[0]+e,c[1]+n])}const r=Re(o,{size:this.width,thinning:.7}),a=Be(r),i=new Path2D(a);let h=this.ctx.fillStyle;this.ctx.fillStyle=this.color.startsWith("#")?de(this.color):this.color,this.ctx.fill(i),this.ctx.fillStyle=h}}class me extends ge{constructor(e,n,o,r,a){super(e,n);G(this,"startPoint");G(this,"endPoint");G(this,"roughCanvas");G(this,"typeName","line");this.startPoint=o,this.endPoint=r,this.roughCanvas=a}draw(e,n){this.roughCanvas.line(this.startPoint[0]+e,this.startPoint[1]+n,this.endPoint[0]+e,this.endPoint[1]+n,{strokeWidth:this.width,stroke:this.color})}}function It(s,t,e){if(s&&s.length){const[n,o]=t,r=Math.PI/180*e,a=Math.cos(r),i=Math.sin(r);s.forEach(h=>{const[f,c]=h;h[0]=(f-n)*a-(c-o)*i+n,h[1]=(f-n)*i+(c-o)*a+o})}}function Ct(s){const t=s[0],e=s[1];return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function ft(s,t){const e=t.hachureAngle+90;let n=t.hachureGap;n<0&&(n=4*t.strokeWidth),n=Math.max(n,.1);const o=[0,0];if(e)for(const a of s)It(a,o,e);const r=function(a,i){const h=[];for(const u of a){const l=[...u];l[0].join(",")!==l[l.length-1].join(",")&&l.push([l[0][0],l[0][1]]),l.length>2&&h.push(l)}const f=[];i=Math.max(i,.1);const c=[];for(const u of h)for(let l=0;l<u.length-1;l++){const m=u[l],g=u[l+1];if(m[1]!==g[1]){const k=Math.min(m[1],g[1]);c.push({ymin:k,ymax:Math.max(m[1],g[1]),x:k===m[1]?m[0]:g[0],islope:(g[0]-m[0])/(g[1]-m[1])})}}if(c.sort((u,l)=>u.ymin<l.ymin?-1:u.ymin>l.ymin?1:u.x<l.x?-1:u.x>l.x?1:u.ymax===l.ymax?0:(u.ymax-l.ymax)/Math.abs(u.ymax-l.ymax)),!c.length)return f;let p=[],d=c[0].ymin;for(;p.length||c.length;){if(c.length){let u=-1;for(let l=0;l<c.length&&!(c[l].ymin>d);l++)u=l;c.splice(0,u+1).forEach(l=>{p.push({s:d,edge:l})})}if(p=p.filter(u=>!(u.edge.ymax<=d)),p.sort((u,l)=>u.edge.x===l.edge.x?0:(u.edge.x-l.edge.x)/Math.abs(u.edge.x-l.edge.x)),p.length>1)for(let u=0;u<p.length;u+=2){const l=u+1;if(l>=p.length)break;const m=p[u].edge,g=p[l].edge;f.push([[Math.round(m.x),d],[Math.round(g.x),d]])}d+=i,p.forEach(u=>{u.edge.x=u.edge.x+i*u.edge.islope})}return f}(s,n);if(e){for(const a of s)It(a,o,-e);(function(a,i,h){const f=[];a.forEach(c=>f.push(...c)),It(f,i,h)})(r,o,-e)}return r}class Nt{constructor(t){this.helper=t}fillPolygons(t,e){return this._fillPolygons(t,e)}_fillPolygons(t,e){const n=ft(t,e);return{type:"fillSketch",ops:this.renderLines(n,e)}}renderLines(t,e){const n=[];for(const o of t)n.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],e));return n}}class Ge extends Nt{fillPolygons(t,e){let n=e.hachureGap;n<0&&(n=4*e.strokeWidth),n=Math.max(n,.1);const o=ft(t,Object.assign({},e,{hachureGap:n})),r=Math.PI/180*e.hachureAngle,a=[],i=.5*n*Math.cos(r),h=.5*n*Math.sin(r);for(const[f,c]of o)Ct([f,c])&&a.push([[f[0]-i,f[1]+h],[...c]],[[f[0]+i,f[1]-h],[...c]]);return{type:"fillSketch",ops:this.renderLines(a,e)}}}class Xe extends Nt{fillPolygons(t,e){const n=this._fillPolygons(t,e),o=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),r=this._fillPolygons(t,o);return n.ops=n.ops.concat(r.ops),n}}class Ye{constructor(t){this.helper=t}fillPolygons(t,e){const n=ft(t,e=Object.assign({},e,{hachureAngle:0}));return this.dotsOnLines(n,e)}dotsOnLines(t,e){const n=[];let o=e.hachureGap;o<0&&(o=4*e.strokeWidth),o=Math.max(o,.1);let r=e.fillWeight;r<0&&(r=e.strokeWidth/2);const a=o/4;for(const i of t){const h=Ct(i),f=h/o,c=Math.ceil(f)-1,p=h-c*o,d=(i[0][0]+i[1][0])/2-o/4,u=Math.min(i[0][1],i[1][1]);for(let l=0;l<c;l++){const m=u+p+l*o,g=d-a+2*Math.random()*a,k=m-a+2*Math.random()*a,w=this.helper.ellipse(g,k,r,r,e);n.push(...w.ops)}}return{type:"fillSketch",ops:n}}}class Ve{constructor(t){this.helper=t}fillPolygons(t,e){const n=ft(t,e);return{type:"fillSketch",ops:this.dashedLine(n,e)}}dashedLine(t,e){const n=e.dashOffset<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashOffset,o=e.dashGap<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashGap,r=[];return t.forEach(a=>{const i=Ct(a),h=Math.floor(i/(n+o)),f=(i+o-h*(n+o))/2;let c=a[0],p=a[1];c[0]>p[0]&&(c=a[1],p=a[0]);const d=Math.atan((p[1]-c[1])/(p[0]-c[0]));for(let u=0;u<h;u++){const l=u*(n+o),m=l+n,g=[c[0]+l*Math.cos(d)+f*Math.cos(d),c[1]+l*Math.sin(d)+f*Math.sin(d)],k=[c[0]+m*Math.cos(d)+f*Math.cos(d),c[1]+m*Math.sin(d)+f*Math.sin(d)];r.push(...this.helper.doubleLineOps(g[0],g[1],k[0],k[1],e))}}),r}}class Ze{constructor(t){this.helper=t}fillPolygons(t,e){const n=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,o=e.zigzagOffset<0?n:e.zigzagOffset,r=ft(t,e=Object.assign({},e,{hachureGap:n+o}));return{type:"fillSketch",ops:this.zigzagLines(r,o,e)}}zigzagLines(t,e,n){const o=[];return t.forEach(r=>{const a=Ct(r),i=Math.round(a/(2*e));let h=r[0],f=r[1];h[0]>f[0]&&(h=r[1],f=r[0]);const c=Math.atan((f[1]-h[1])/(f[0]-h[0]));for(let p=0;p<i;p++){const d=2*p*e,u=2*(p+1)*e,l=Math.sqrt(2*Math.pow(e,2)),m=[h[0]+d*Math.cos(c),h[1]+d*Math.sin(c)],g=[h[0]+u*Math.cos(c),h[1]+u*Math.sin(c)],k=[m[0]+l*Math.cos(c+Math.PI/4),m[1]+l*Math.sin(c+Math.PI/4)];o.push(...this.helper.doubleLineOps(m[0],m[1],k[0],k[1],n),...this.helper.doubleLineOps(k[0],k[1],g[0],g[1],n))}}),o}}const R={};class He{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const gt={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function At(s,t){return s.type===t}function Ft(s){const t=[],e=function(a){const i=new Array;for(;a!=="";)if(a.match(/^([ \t\r\n,]+)/))a=a.substr(RegExp.$1.length);else if(a.match(/^([aAcChHlLmMqQsStTvVzZ])/))i[i.length]={type:0,text:RegExp.$1},a=a.substr(RegExp.$1.length);else{if(!a.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];i[i.length]={type:1,text:`${parseFloat(RegExp.$1)}`},a=a.substr(RegExp.$1.length)}return i[i.length]={type:2,text:""},i}(s);let n="BOD",o=0,r=e[o];for(;!At(r,2);){let a=0;const i=[];if(n==="BOD"){if(r.text!=="M"&&r.text!=="m")return Ft("M0,0"+s);o++,a=gt[r.text],n=r.text}else At(r,1)?a=gt[n]:(o++,a=gt[r.text],n=r.text);if(!(o+a<e.length))throw new Error("Path data ended short");for(let h=o;h<o+a;h++){const f=e[h];if(!At(f,1))throw new Error("Param not a number: "+n+","+f.text);i[i.length]=+f.text}if(typeof gt[n]!="number")throw new Error("Bad segment: "+n);{const h={key:n,data:i};t.push(h),o+=a,r=e[o],n==="M"&&(n="L"),n==="m"&&(n="l")}}return t}function ne(s){let t=0,e=0,n=0,o=0;const r=[];for(const{key:a,data:i}of s)switch(a){case"M":r.push({key:"M",data:[...i]}),[t,e]=i,[n,o]=i;break;case"m":t+=i[0],e+=i[1],r.push({key:"M",data:[t,e]}),n=t,o=e;break;case"L":r.push({key:"L",data:[...i]}),[t,e]=i;break;case"l":t+=i[0],e+=i[1],r.push({key:"L",data:[t,e]});break;case"C":r.push({key:"C",data:[...i]}),t=i[4],e=i[5];break;case"c":{const h=i.map((f,c)=>c%2?f+e:f+t);r.push({key:"C",data:h}),t=h[4],e=h[5];break}case"Q":r.push({key:"Q",data:[...i]}),t=i[2],e=i[3];break;case"q":{const h=i.map((f,c)=>c%2?f+e:f+t);r.push({key:"Q",data:h}),t=h[2],e=h[3];break}case"A":r.push({key:"A",data:[...i]}),t=i[5],e=i[6];break;case"a":t+=i[5],e+=i[6],r.push({key:"A",data:[i[0],i[1],i[2],i[3],i[4],t,e]});break;case"H":r.push({key:"H",data:[...i]}),t=i[0];break;case"h":t+=i[0],r.push({key:"H",data:[t]});break;case"V":r.push({key:"V",data:[...i]}),e=i[0];break;case"v":e+=i[0],r.push({key:"V",data:[e]});break;case"S":r.push({key:"S",data:[...i]}),t=i[2],e=i[3];break;case"s":{const h=i.map((f,c)=>c%2?f+e:f+t);r.push({key:"S",data:h}),t=h[2],e=h[3];break}case"T":r.push({key:"T",data:[...i]}),t=i[0],e=i[1];break;case"t":t+=i[0],e+=i[1],r.push({key:"T",data:[t,e]});break;case"Z":case"z":r.push({key:"Z",data:[]}),t=n,e=o}return r}function se(s){const t=[];let e="",n=0,o=0,r=0,a=0,i=0,h=0;for(const{key:f,data:c}of s){switch(f){case"M":t.push({key:"M",data:[...c]}),[n,o]=c,[r,a]=c;break;case"C":t.push({key:"C",data:[...c]}),n=c[4],o=c[5],i=c[2],h=c[3];break;case"L":t.push({key:"L",data:[...c]}),[n,o]=c;break;case"H":n=c[0],t.push({key:"L",data:[n,o]});break;case"V":o=c[0],t.push({key:"L",data:[n,o]});break;case"S":{let p=0,d=0;e==="C"||e==="S"?(p=n+(n-i),d=o+(o-h)):(p=n,d=o),t.push({key:"C",data:[p,d,...c]}),i=c[0],h=c[1],n=c[2],o=c[3];break}case"T":{const[p,d]=c;let u=0,l=0;e==="Q"||e==="T"?(u=n+(n-i),l=o+(o-h)):(u=n,l=o);const m=n+2*(u-n)/3,g=o+2*(l-o)/3,k=p+2*(u-p)/3,w=d+2*(l-d)/3;t.push({key:"C",data:[m,g,k,w,p,d]}),i=u,h=l,n=p,o=d;break}case"Q":{const[p,d,u,l]=c,m=n+2*(p-n)/3,g=o+2*(d-o)/3,k=u+2*(p-u)/3,w=l+2*(d-l)/3;t.push({key:"C",data:[m,g,k,w,u,l]}),i=p,h=d,n=u,o=l;break}case"A":{const p=Math.abs(c[0]),d=Math.abs(c[1]),u=c[2],l=c[3],m=c[4],g=c[5],k=c[6];p===0||d===0?(t.push({key:"C",data:[n,o,g,k,g,k]}),n=g,o=k):(n!==g||o!==k)&&(ke(n,o,g,k,p,d,u,l,m).forEach(function(w){t.push({key:"C",data:w})}),n=g,o=k);break}case"Z":t.push({key:"Z",data:[]}),n=r,o=a}e=f}return t}function at(s,t,e){return[s*Math.cos(e)-t*Math.sin(e),s*Math.sin(e)+t*Math.cos(e)]}function ke(s,t,e,n,o,r,a,i,h,f){const c=(p=a,Math.PI*p/180);var p;let d=[],u=0,l=0,m=0,g=0;if(f)[u,l,m,g]=f;else{[s,t]=at(s,t,-c),[e,n]=at(e,n,-c);const L=(s-e)/2,x=(t-n)/2;let F=L*L/(o*o)+x*x/(r*r);F>1&&(F=Math.sqrt(F),o*=F,r*=F);const N=o*o,M=r*r,T=N*M-N*x*x-M*L*L,P=N*x*x+M*L*L,S=(i===h?-1:1)*Math.sqrt(Math.abs(T/P));m=S*o*x/r+(s+e)/2,g=S*-r*L/o+(t+n)/2,u=Math.asin(parseFloat(((t-g)/r).toFixed(9))),l=Math.asin(parseFloat(((n-g)/r).toFixed(9))),s<m&&(u=Math.PI-u),e<m&&(l=Math.PI-l),u<0&&(u=2*Math.PI+u),l<0&&(l=2*Math.PI+l),h&&u>l&&(u-=2*Math.PI),!h&&l>u&&(l-=2*Math.PI)}let k=l-u;if(Math.abs(k)>120*Math.PI/180){const L=l,x=e,F=n;l=h&&l>u?u+120*Math.PI/180*1:u+120*Math.PI/180*-1,d=ke(e=m+o*Math.cos(l),n=g+r*Math.sin(l),x,F,o,r,a,0,h,[l,L,m,g])}k=l-u;const w=Math.cos(u),E=Math.sin(u),z=Math.cos(l),v=Math.sin(l),I=Math.tan(k/4),q=4/3*o*I,$=4/3*r*I,V=[s,t],W=[s+q*E,t-$*w],_=[e+q*v,n-$*z],tt=[e,n];if(W[0]=2*V[0]-W[0],W[1]=2*V[1]-W[1],f)return[W,_,tt].concat(d);{d=[W,_,tt].concat(d);const L=[];for(let x=0;x<d.length;x+=3){const F=at(d[x][0],d[x][1],c),N=at(d[x+1][0],d[x+1][1],c),M=at(d[x+2][0],d[x+2][1],c);L.push([F[0],F[1],N[0],N[1],M[0],M[1]])}return L}}const Qe={randOffset:function(s,t){return y(s,t)},randOffsetWithRange:function(s,t,e){return wt(s,t,e)},ellipse:function(s,t,e,n,o){const r=Me(e,n,o);return Rt(s,t,o,r).opset},doubleLineOps:function(s,t,e,n,o){return Z(s,t,e,n,o,!0)}};function ye(s,t,e,n,o){return{type:"path",ops:Z(s,t,e,n,o)}}function yt(s,t,e){const n=(s||[]).length;if(n>2){const o=[];for(let r=0;r<n-1;r++)o.push(...Z(s[r][0],s[r][1],s[r+1][0],s[r+1][1],e));return t&&o.push(...Z(s[n-1][0],s[n-1][1],s[0][0],s[0][1],e)),{type:"path",ops:o}}return n===2?ye(s[0][0],s[0][1],s[1][0],s[1][1],e):{type:"path",ops:[]}}function Je(s,t,e,n,o){return function(r,a){return yt(r,!0,a)}([[s,t],[s+e,t],[s+e,t+n],[s,t+n]],o)}function Ke(s,t){let e=ie(s,1*(1+.2*t.roughness),t);if(!t.disableMultiStroke){const n=ie(s,1.5*(1+.22*t.roughness),function(o){const r=Object.assign({},o);return r.randomizer=void 0,o.seed&&(r.seed=o.seed+1),r}(t));e=e.concat(n)}return{type:"path",ops:e}}function Me(s,t,e){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(s/2,2)+Math.pow(t/2,2))/2)),o=Math.ceil(Math.max(e.curveStepCount,e.curveStepCount/Math.sqrt(200)*n)),r=2*Math.PI/o;let a=Math.abs(s/2),i=Math.abs(t/2);const h=1-e.curveFitting;return a+=y(a*h,e),i+=y(i*h,e),{increment:r,rx:a,ry:i}}function Rt(s,t,e,n){const[o,r]=ae(n.increment,s,t,n.rx,n.ry,1,n.increment*wt(.1,wt(.4,1,e),e),e);let a=vt(o,null,e);if(!e.disableMultiStroke&&e.roughness!==0){const[i]=ae(n.increment,s,t,n.rx,n.ry,1.5,0,e),h=vt(i,null,e);a=a.concat(h)}return{estimatedPoints:r,opset:{type:"path",ops:a}}}function oe(s,t,e,n,o,r,a,i,h){const f=s,c=t;let p=Math.abs(e/2),d=Math.abs(n/2);p+=y(.01*p,h),d+=y(.01*d,h);let u=o,l=r;for(;u<0;)u+=2*Math.PI,l+=2*Math.PI;l-u>2*Math.PI&&(u=0,l=2*Math.PI);const m=2*Math.PI/h.curveStepCount,g=Math.min(m/2,(l-u)/2),k=le(g,f,c,p,d,u,l,1,h);if(!h.disableMultiStroke){const w=le(g,f,c,p,d,u,l,1.5,h);k.push(...w)}return a&&(i?k.push(...Z(f,c,f+p*Math.cos(u),c+d*Math.sin(u),h),...Z(f,c,f+p*Math.cos(l),c+d*Math.sin(l),h)):k.push({op:"lineTo",data:[f,c]},{op:"lineTo",data:[f+p*Math.cos(u),c+d*Math.sin(u)]})),{type:"path",ops:k}}function mt(s,t){const e=[];for(const n of s)if(n.length){const o=t.maxRandomnessOffset||0,r=n.length;if(r>2){e.push({op:"move",data:[n[0][0]+y(o,t),n[0][1]+y(o,t)]});for(let a=1;a<r;a++)e.push({op:"lineTo",data:[n[a][0]+y(o,t),n[a][1]+y(o,t)]})}}return{type:"fillPath",ops:e}}function nt(s,t){return function(e,n){let o=e.fillStyle||"hachure";if(!R[o])switch(o){case"zigzag":R[o]||(R[o]=new Ge(n));break;case"cross-hatch":R[o]||(R[o]=new Xe(n));break;case"dots":R[o]||(R[o]=new Ye(n));break;case"dashed":R[o]||(R[o]=new Ve(n));break;case"zigzag-line":R[o]||(R[o]=new Ze(n));break;case"hachure":default:o="hachure",R[o]||(R[o]=new Nt(n))}return R[o]}(t,Qe).fillPolygons(s,t)}function be(s){return s.randomizer||(s.randomizer=new He(s.seed||0)),s.randomizer.next()}function wt(s,t,e,n=1){return e.roughness*n*(be(e)*(t-s)+s)}function y(s,t,e=1){return wt(-s,s,t,e)}function Z(s,t,e,n,o,r=!1){const a=r?o.disableMultiStrokeFill:o.disableMultiStroke,i=re(s,t,e,n,o,!0,!1);if(a)return i;const h=re(s,t,e,n,o,!0,!0);return i.concat(h)}function re(s,t,e,n,o,r,a){const i=Math.pow(s-e,2)+Math.pow(t-n,2),h=Math.sqrt(i);let f=1;f=h<200?1:h>500?.4:-.0016668*h+1.233334;let c=o.maxRandomnessOffset||0;c*c*100>i&&(c=h/10);const p=c/2,d=.2+.2*be(o);let u=o.bowing*o.maxRandomnessOffset*(n-t)/200,l=o.bowing*o.maxRandomnessOffset*(s-e)/200;u=y(u,o,f),l=y(l,o,f);const m=[],g=()=>y(p,o,f),k=()=>y(c,o,f),w=o.preserveVertices;return r&&(a?m.push({op:"move",data:[s+(w?0:g()),t+(w?0:g())]}):m.push({op:"move",data:[s+(w?0:y(c,o,f)),t+(w?0:y(c,o,f))]})),a?m.push({op:"bcurveTo",data:[u+s+(e-s)*d+g(),l+t+(n-t)*d+g(),u+s+2*(e-s)*d+g(),l+t+2*(n-t)*d+g(),e+(w?0:g()),n+(w?0:g())]}):m.push({op:"bcurveTo",data:[u+s+(e-s)*d+k(),l+t+(n-t)*d+k(),u+s+2*(e-s)*d+k(),l+t+2*(n-t)*d+k(),e+(w?0:k()),n+(w?0:k())]}),m}function ie(s,t,e){const n=[];n.push([s[0][0]+y(t,e),s[0][1]+y(t,e)]),n.push([s[0][0]+y(t,e),s[0][1]+y(t,e)]);for(let o=1;o<s.length;o++)n.push([s[o][0]+y(t,e),s[o][1]+y(t,e)]),o===s.length-1&&n.push([s[o][0]+y(t,e),s[o][1]+y(t,e)]);return vt(n,null,e)}function vt(s,t,e){const n=s.length,o=[];if(n>3){const r=[],a=1-e.curveTightness;o.push({op:"move",data:[s[1][0],s[1][1]]});for(let i=1;i+2<n;i++){const h=s[i];r[0]=[h[0],h[1]],r[1]=[h[0]+(a*s[i+1][0]-a*s[i-1][0])/6,h[1]+(a*s[i+1][1]-a*s[i-1][1])/6],r[2]=[s[i+1][0]+(a*s[i][0]-a*s[i+2][0])/6,s[i+1][1]+(a*s[i][1]-a*s[i+2][1])/6],r[3]=[s[i+1][0],s[i+1][1]],o.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(t&&t.length===2){const i=e.maxRandomnessOffset;o.push({op:"lineTo",data:[t[0]+y(i,e),t[1]+y(i,e)]})}}else n===3?(o.push({op:"move",data:[s[1][0],s[1][1]]}),o.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[2][0],s[2][1]]})):n===2&&o.push(...Z(s[0][0],s[0][1],s[1][0],s[1][1],e));return o}function ae(s,t,e,n,o,r,a,i){const h=[],f=[];if(i.roughness===0){s/=4,f.push([t+n*Math.cos(-s),e+o*Math.sin(-s)]);for(let c=0;c<=2*Math.PI;c+=s){const p=[t+n*Math.cos(c),e+o*Math.sin(c)];h.push(p),f.push(p)}f.push([t+n*Math.cos(0),e+o*Math.sin(0)]),f.push([t+n*Math.cos(s),e+o*Math.sin(s)])}else{const c=y(.5,i)-Math.PI/2;f.push([y(r,i)+t+.9*n*Math.cos(c-s),y(r,i)+e+.9*o*Math.sin(c-s)]);const p=2*Math.PI+c-.01;for(let d=c;d<p;d+=s){const u=[y(r,i)+t+n*Math.cos(d),y(r,i)+e+o*Math.sin(d)];h.push(u),f.push(u)}f.push([y(r,i)+t+n*Math.cos(c+2*Math.PI+.5*a),y(r,i)+e+o*Math.sin(c+2*Math.PI+.5*a)]),f.push([y(r,i)+t+.98*n*Math.cos(c+a),y(r,i)+e+.98*o*Math.sin(c+a)]),f.push([y(r,i)+t+.9*n*Math.cos(c+.5*a),y(r,i)+e+.9*o*Math.sin(c+.5*a)])}return[f,h]}function le(s,t,e,n,o,r,a,i,h){const f=r+y(.1,h),c=[];c.push([y(i,h)+t+.9*n*Math.cos(f-s),y(i,h)+e+.9*o*Math.sin(f-s)]);for(let p=f;p<=a;p+=s)c.push([y(i,h)+t+n*Math.cos(p),y(i,h)+e+o*Math.sin(p)]);return c.push([t+n*Math.cos(a),e+o*Math.sin(a)]),c.push([t+n*Math.cos(a),e+o*Math.sin(a)]),vt(c,null,h)}function Ue(s,t,e,n,o,r,a,i){const h=[],f=[i.maxRandomnessOffset||1,(i.maxRandomnessOffset||1)+.3];let c=[0,0];const p=i.disableMultiStroke?1:2,d=i.preserveVertices;for(let u=0;u<p;u++)u===0?h.push({op:"move",data:[a[0],a[1]]}):h.push({op:"move",data:[a[0]+(d?0:y(f[0],i)),a[1]+(d?0:y(f[0],i))]}),c=d?[o,r]:[o+y(f[u],i),r+y(f[u],i)],h.push({op:"bcurveTo",data:[s+y(f[u],i),t+y(f[u],i),e+y(f[u],i),n+y(f[u],i),c[0],c[1]]});return h}function lt(s){return[...s]}function Mt(s,t){return Math.pow(s[0]-t[0],2)+Math.pow(s[1]-t[1],2)}function tn(s,t,e){const n=Mt(t,e);if(n===0)return Mt(s,t);let o=((s[0]-t[0])*(e[0]-t[0])+(s[1]-t[1])*(e[1]-t[1]))/n;return o=Math.max(0,Math.min(1,o)),Mt(s,J(t,e,o))}function J(s,t,e){return[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e]}function qt(s,t,e,n){const o=n||[];if(function(i,h){const f=i[h+0],c=i[h+1],p=i[h+2],d=i[h+3];let u=3*c[0]-2*f[0]-d[0];u*=u;let l=3*c[1]-2*f[1]-d[1];l*=l;let m=3*p[0]-2*d[0]-f[0];m*=m;let g=3*p[1]-2*d[1]-f[1];return g*=g,u<m&&(u=m),l<g&&(l=g),u+l}(s,t)<e){const i=s[t+0];o.length?(r=o[o.length-1],a=i,Math.sqrt(Mt(r,a))>1&&o.push(i)):o.push(i),o.push(s[t+3])}else{const h=s[t+0],f=s[t+1],c=s[t+2],p=s[t+3],d=J(h,f,.5),u=J(f,c,.5),l=J(c,p,.5),m=J(d,u,.5),g=J(u,l,.5),k=J(m,g,.5);qt([h,d,m,k],0,e,o),qt([k,g,l,p],0,e,o)}var r,a;return o}function en(s,t){return xt(s,0,s.length,t)}function xt(s,t,e,n,o){const r=o||[],a=s[t],i=s[e-1];let h=0,f=1;for(let c=t+1;c<e-1;++c){const p=tn(s[c],a,i);p>h&&(h=p,f=c)}return Math.sqrt(h)>n?(xt(s,t,f+1,n,r),xt(s,f,e,n,r)):(r.length||r.push(a),r.push(i)),r}function he(s,t=.15,e){const n=[],o=(s.length-1)/3;for(let r=0;r<o;r++)qt(s,3*r,t,n);return e&&e>0?xt(n,0,n.length,e):n}const B="none";class Pt{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,n){return{shape:t,sets:e||[],options:n||this.defaultOptions}}line(t,e,n,o,r){const a=this._o(r);return this._d("line",[ye(t,e,n,o,a)],a)}rectangle(t,e,n,o,r){const a=this._o(r),i=[],h=Je(t,e,n,o,a);if(a.fill){const f=[[t,e],[t+n,e],[t+n,e+o],[t,e+o]];a.fillStyle==="solid"?i.push(mt([f],a)):i.push(nt([f],a))}return a.stroke!==B&&i.push(h),this._d("rectangle",i,a)}ellipse(t,e,n,o,r){const a=this._o(r),i=[],h=Me(n,o,a),f=Rt(t,e,a,h);if(a.fill)if(a.fillStyle==="solid"){const c=Rt(t,e,a,h).opset;c.type="fillPath",i.push(c)}else i.push(nt([f.estimatedPoints],a));return a.stroke!==B&&i.push(f.opset),this._d("ellipse",i,a)}circle(t,e,n,o){const r=this.ellipse(t,e,n,n,o);return r.shape="circle",r}linearPath(t,e){const n=this._o(e);return this._d("linearPath",[yt(t,!1,n)],n)}arc(t,e,n,o,r,a,i=!1,h){const f=this._o(h),c=[],p=oe(t,e,n,o,r,a,i,!0,f);if(i&&f.fill)if(f.fillStyle==="solid"){const d=Object.assign({},f);d.disableMultiStroke=!0;const u=oe(t,e,n,o,r,a,!0,!1,d);u.type="fillPath",c.push(u)}else c.push(function(d,u,l,m,g,k,w){const E=d,z=u;let v=Math.abs(l/2),I=Math.abs(m/2);v+=y(.01*v,w),I+=y(.01*I,w);let q=g,$=k;for(;q<0;)q+=2*Math.PI,$+=2*Math.PI;$-q>2*Math.PI&&(q=0,$=2*Math.PI);const V=($-q)/w.curveStepCount,W=[];for(let _=q;_<=$;_+=V)W.push([E+v*Math.cos(_),z+I*Math.sin(_)]);return W.push([E+v*Math.cos($),z+I*Math.sin($)]),W.push([E,z]),nt([W],w)}(t,e,n,o,r,a,f));return f.stroke!==B&&c.push(p),this._d("arc",c,f)}curve(t,e){const n=this._o(e),o=[],r=Ke(t,n);if(n.fill&&n.fill!==B&&t.length>=3){const a=he(function(i,h=0){const f=i.length;if(f<3)throw new Error("A curve must have at least three points.");const c=[];if(f===3)c.push(lt(i[0]),lt(i[1]),lt(i[2]),lt(i[2]));else{const p=[];p.push(i[0],i[0]);for(let l=1;l<i.length;l++)p.push(i[l]),l===i.length-1&&p.push(i[l]);const d=[],u=1-h;c.push(lt(p[0]));for(let l=1;l+2<p.length;l++){const m=p[l];d[0]=[m[0],m[1]],d[1]=[m[0]+(u*p[l+1][0]-u*p[l-1][0])/6,m[1]+(u*p[l+1][1]-u*p[l-1][1])/6],d[2]=[p[l+1][0]+(u*p[l][0]-u*p[l+2][0])/6,p[l+1][1]+(u*p[l][1]-u*p[l+2][1])/6],d[3]=[p[l+1][0],p[l+1][1]],c.push(d[1],d[2],d[3])}}return c}(t),10,(1+n.roughness)/2);n.fillStyle==="solid"?o.push(mt([a],n)):o.push(nt([a],n))}return n.stroke!==B&&o.push(r),this._d("curve",o,n)}polygon(t,e){const n=this._o(e),o=[],r=yt(t,!0,n);return n.fill&&(n.fillStyle==="solid"?o.push(mt([t],n)):o.push(nt([t],n))),n.stroke!==B&&o.push(r),this._d("polygon",o,n)}path(t,e){const n=this._o(e),o=[];if(!t)return this._d("path",o,n);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const r=n.fill&&n.fill!=="transparent"&&n.fill!==B,a=n.stroke!==B,i=!!(n.simplification&&n.simplification<1),h=function(f,c,p){const d=se(ne(Ft(f))),u=[];let l=[],m=[0,0],g=[];const k=()=>{g.length>=4&&l.push(...he(g,c)),g=[]},w=()=>{k(),l.length&&(u.push(l),l=[])};for(const{key:z,data:v}of d)switch(z){case"M":w(),m=[v[0],v[1]],l.push(m);break;case"L":k(),l.push([v[0],v[1]]);break;case"C":if(!g.length){const I=l.length?l[l.length-1]:m;g.push([I[0],I[1]])}g.push([v[0],v[1]]),g.push([v[2],v[3]]),g.push([v[4],v[5]]);break;case"Z":k(),l.push([m[0],m[1]])}if(w(),!p)return u;const E=[];for(const z of u){const v=en(z,p);v.length&&E.push(v)}return E}(t,1,i?4-4*n.simplification:(1+n.roughness)/2);return r&&(n.fillStyle==="solid"?o.push(mt(h,n)):o.push(nt(h,n))),a&&(i?h.forEach(f=>{o.push(yt(f,!1,n))}):o.push(function(f,c){const p=se(ne(Ft(f))),d=[];let u=[0,0],l=[0,0];for(const{key:m,data:g}of p)switch(m){case"M":{const k=1*(c.maxRandomnessOffset||0),w=c.preserveVertices;d.push({op:"move",data:g.map(E=>E+(w?0:y(k,c)))}),l=[g[0],g[1]],u=[g[0],g[1]];break}case"L":d.push(...Z(l[0],l[1],g[0],g[1],c)),l=[g[0],g[1]];break;case"C":{const[k,w,E,z,v,I]=g;d.push(...Ue(k,w,E,z,v,I,l,c)),l=[v,I];break}case"Z":d.push(...Z(l[0],l[1],u[0],u[1],c)),l=[u[0],u[1]]}return{type:"path",ops:d}}(t,n))),this._d("path",o,n)}opsToPath(t,e){let n="";for(const o of t.ops){const r=typeof e=="number"&&e>=0?o.data.map(a=>+a.toFixed(e)):o.data;switch(o.op){case"move":n+=`M${r[0]} ${r[1]} `;break;case"bcurveTo":n+=`C${r[0]} ${r[1]}, ${r[2]} ${r[3]}, ${r[4]} ${r[5]} `;break;case"lineTo":n+=`L${r[0]} ${r[1]} `}}return n.trim()}toPaths(t){const e=t.sets||[],n=t.options||this.defaultOptions,o=[];for(const r of e){let a=null;switch(r.type){case"path":a={d:this.opsToPath(r),stroke:n.stroke,strokeWidth:n.strokeWidth,fill:B};break;case"fillPath":a={d:this.opsToPath(r),stroke:B,strokeWidth:0,fill:n.fill||B};break;case"fillSketch":a=this.fillSketch(r,n)}a&&o.push(a)}return o}fillSketch(t,e){let n=e.fillWeight;return n<0&&(n=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||B,strokeWidth:n,fill:B}}}class nn{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new Pt(e)}draw(t){const e=t.sets||[],n=t.options||this.getDefaultOptions(),o=this.ctx,r=t.options.fixedDecimalPlaceDigits;for(const a of e)switch(a.type){case"path":o.save(),o.strokeStyle=n.stroke==="none"?"transparent":n.stroke,o.lineWidth=n.strokeWidth,n.strokeLineDash&&o.setLineDash(n.strokeLineDash),n.strokeLineDashOffset&&(o.lineDashOffset=n.strokeLineDashOffset),this._drawToContext(o,a,r),o.restore();break;case"fillPath":{o.save(),o.fillStyle=n.fill||"";const i=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(o,a,r,i),o.restore();break}case"fillSketch":this.fillSketch(o,a,n)}}fillSketch(t,e,n){let o=n.fillWeight;o<0&&(o=n.strokeWidth/2),t.save(),n.fillLineDash&&t.setLineDash(n.fillLineDash),n.fillLineDashOffset&&(t.lineDashOffset=n.fillLineDashOffset),t.strokeStyle=n.fill||"",t.lineWidth=o,this._drawToContext(t,e,n.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,e,n,o="nonzero"){t.beginPath();for(const r of e.ops){const a=typeof n=="number"&&n>=0?r.data.map(i=>+i.toFixed(n)):r.data;switch(r.op){case"move":t.moveTo(a[0],a[1]);break;case"bcurveTo":t.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5]);break;case"lineTo":t.lineTo(a[0],a[1])}}e.type==="fillPath"?t.fill(o):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,n,o,r){const a=this.gen.line(t,e,n,o,r);return this.draw(a),a}rectangle(t,e,n,o,r){const a=this.gen.rectangle(t,e,n,o,r);return this.draw(a),a}ellipse(t,e,n,o,r){const a=this.gen.ellipse(t,e,n,o,r);return this.draw(a),a}circle(t,e,n,o){const r=this.gen.circle(t,e,n,o);return this.draw(r),r}linearPath(t,e){const n=this.gen.linearPath(t,e);return this.draw(n),n}polygon(t,e){const n=this.gen.polygon(t,e);return this.draw(n),n}arc(t,e,n,o,r,a,i=!1,h){const f=this.gen.arc(t,e,n,o,r,a,i,h);return this.draw(f),f}curve(t,e){const n=this.gen.curve(t,e);return this.draw(n),n}path(t,e){const n=this.gen.path(t,e);return this.draw(n),n}}const kt="http://www.w3.org/2000/svg";class sn{constructor(t,e){this.svg=t,this.gen=new Pt(e)}draw(t){const e=t.sets||[],n=t.options||this.getDefaultOptions(),o=this.svg.ownerDocument||window.document,r=o.createElementNS(kt,"g"),a=t.options.fixedDecimalPlaceDigits;for(const i of e){let h=null;switch(i.type){case"path":h=o.createElementNS(kt,"path"),h.setAttribute("d",this.opsToPath(i,a)),h.setAttribute("stroke",n.stroke),h.setAttribute("stroke-width",n.strokeWidth+""),h.setAttribute("fill","none"),n.strokeLineDash&&h.setAttribute("stroke-dasharray",n.strokeLineDash.join(" ").trim()),n.strokeLineDashOffset&&h.setAttribute("stroke-dashoffset",`${n.strokeLineDashOffset}`);break;case"fillPath":h=o.createElementNS(kt,"path"),h.setAttribute("d",this.opsToPath(i,a)),h.setAttribute("stroke","none"),h.setAttribute("stroke-width","0"),h.setAttribute("fill",n.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||h.setAttribute("fill-rule","evenodd");break;case"fillSketch":h=this.fillSketch(o,i,n)}h&&r.appendChild(h)}return r}fillSketch(t,e,n){let o=n.fillWeight;o<0&&(o=n.strokeWidth/2);const r=t.createElementNS(kt,"path");return r.setAttribute("d",this.opsToPath(e,n.fixedDecimalPlaceDigits)),r.setAttribute("stroke",n.fill||""),r.setAttribute("stroke-width",o+""),r.setAttribute("fill","none"),n.fillLineDash&&r.setAttribute("stroke-dasharray",n.fillLineDash.join(" ").trim()),n.fillLineDashOffset&&r.setAttribute("stroke-dashoffset",`${n.fillLineDashOffset}`),r}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,e){return this.gen.opsToPath(t,e)}line(t,e,n,o,r){const a=this.gen.line(t,e,n,o,r);return this.draw(a)}rectangle(t,e,n,o,r){const a=this.gen.rectangle(t,e,n,o,r);return this.draw(a)}ellipse(t,e,n,o,r){const a=this.gen.ellipse(t,e,n,o,r);return this.draw(a)}circle(t,e,n,o){const r=this.gen.circle(t,e,n,o);return this.draw(r)}linearPath(t,e){const n=this.gen.linearPath(t,e);return this.draw(n)}polygon(t,e){const n=this.gen.polygon(t,e);return this.draw(n)}arc(t,e,n,o,r,a,i=!1,h){const f=this.gen.arc(t,e,n,o,r,a,i,h);return this.draw(f)}curve(t,e){const n=this.gen.curve(t,e);return this.draw(n)}path(t,e){const n=this.gen.path(t,e);return this.draw(n)}}var on={canvas:(s,t)=>new nn(s,t),svg:(s,t)=>new sn(s,t),generator:s=>new Pt(s),newSeed:()=>Pt.newSeed()};let A=[],O=0,C=0,we=0,ve=0,rn=1,Bt=0,ct=[],St=!1,Lt=!1;const ht=document.getElementById("me"),an=Ne(20);let Gt="pen";const D=document.getElementById("canvas");D.height=document.documentElement.clientHeight;D.width=document.documentElement.clientWidth;const b=D.getContext("2d");b.lineWidth=12;let Dt=0,$t=0;const xe=on.canvas(D),ln=document.querySelectorAll(".mode-btn");ln.forEach(s=>{s.addEventListener("click",t=>{if(t.target===null)return;t.target.dataset.fillOption})});const hn=document.querySelectorAll(".shape-btn");hn.forEach(s=>{s.addEventListener("click",t=>{if(t.target===null)return;Gt=t.target.dataset.shapeOption})});let H,ut="";const Ot=window.location;Ot.protocol==="https:"?ut="wss:":ut="ws:";ut+="/"+Ot.host;ut+=Ot.pathname+"/ws"+Ot.search;H=new WebSocket(ut);H.onmessage=function(s){try{const e=s.data.split(":"),n=e[0];if(n==="move"){const o=b.lineWidth,r=b.strokeStyle;D.getContext("2d"),b.beginPath(),b.moveTo(e[1],e[2]),b.lineTo(e[3],e[4]),b.lineWidth=e[5],b.strokeStyle=e[6],b.stroke(),b.strokeStyle=r,b.lineWidth=o}if(n==="clear"&&(A=[],b.clearRect(0,0,D.width,D.height)),n==="cur"){const o=e[1];let r;if(r=document.getElementById(o),r===null){r=document.createElement("div"),r.id=o,r.className="trailer",document.body.appendChild(r);return}const a={transform:`translate(${+e[2]+O}px, ${+e[3]+C}px)`};r.animate(a,{fill:"forwards"})}if(n==="disconnect"){let o=document.getElementsByClassName("trailer");if(o.length===0)return;for(var t=0;t<o.length;t++)o[t].id!=="me"&&(document.body.removeChild(o[t]),t--)}if(n==="line"){let o=new jt(JSON.parse(e[3]),e[1],+e[2],b);A.push(o),o.draw(O,C)}}catch(e){console.error(e)}};H.onclose=function(){console.log("lost connection")};let Xt=0,Yt=0;window.addEventListener("mousedown",s=>{if(s.which===2){Lt=!0,we=s.clientX-O,ve=s.clientY-C;return}if(s.button!==0)return;s.stopPropagation();const t=s.target;t.id==="canvas"&&t!==null&&(St=!0,Bt=0,ct=[],Xt=s.clientX,Yt=s.clientY)});window.addEventListener("mouseup",s=>{if(Lt){Lt=!1;return}if(St=!1,s.target.id!=="canvas")return;switch(Gt){case"pen":let n=new jt(ct,b.fillStyle,+b.lineWidth,b);A.push(n),K(D,b),U(A,O,C);break;case"line":{K(D,b),U(A,O,C);let o=new me(b.fillStyle,+b.lineWidth,[Xt-O,Yt-C],[s.clientX-O,s.clientY-C],xe);o.draw(O,C),A.push(o)}}let e="line:"+b.fillStyle+":"+b.lineWidth+":"+JSON.stringify(ct)+":";H.send(e.length),H.send(e)});window.addEventListener("mousemove",s=>{if(s.button!==0)return;const t=s.target,e=s.clientX-ht.offsetWidth/2,n=s.clientY-ht.offsetHeight/2;if(t.id==="canvas"){qe(e,n,ht);let a="cur:"+an+":"+ +(e-O)+":"+ +(n-C)+":";H.send(a.length),H.send(a)}if(Lt){O=s.clientX-we,C=s.clientY-ve,K(D,b),U(A,O,C);return}if(!St)return;const o=s.clientX,r=s.clientY;switch(Gt){case"pen":if(Dt==null||$t==null||!St){Dt=s.clientX,$t=s.clientY;return}let a=s.clientX,i=s.clientY;Bt++,Bt%rn===0&&(ct.push([a-O,i-C]),new jt(ct,b.fillStyle,b.lineWidth,b).draw(O,C)),Dt=a,$t=i;break;case"line":K(D,b),U(A,O,C),new me(b.fillStyle,+b.lineWidth,[Xt-O,Yt-C],[o-O,r-C],xe).draw(O,C);break}});window.addEventListener("resize",()=>{K(D,b),U(A,O,C)});document.addEventListener("keydown",function(s){if(s.ctrlKey&&s.key==="z"){let t=JSON.stringify(A[A.length-1]);A.length=A.length-1,K(D,b),U(A,O,C);let e=JSON.parse(t);A.push(e),K(D,b),U(A,O,C)}});let cn=document.getElementById("clear-btn");cn.addEventListener("click",()=>{A=[],b.clearRect(0,0,D.width,D.height),H.send(6),H.send("clear:")});let un=document.getElementById("save-btn");un.addEventListener("click",()=>{let s=D.toDataURL("imag/png"),t=document.createElement("a");t.href=s,t.download="sketch.png",t.click()});const Vt=document.querySelector(".color-picker"),bt=document.getElementById("color-list"),ce=document.querySelectorAll(".color-item"),fn=document.getElementById("color-picker-input");Vt.addEventListener("click",s=>{s.stopPropagation(),bt.style.display==="grid"?bt.style.display="none":bt.style.display="grid"});for(let s=0;s<ce.length;s++)ce[s].addEventListener("click",e=>{const n=e.target;if(n===null)return;const o=n.style.backgroundColor;Vt.style.backgroundColor=o,pe(o,b,ht),bt.style.display="none"});fn.addEventListener("input",s=>{const t=s.target;if(t===null)return;const e="#"+t.value;e.length>1&&(Vt.style.backgroundColor=e,pe(e,b,ht))});const ue=document.querySelectorAll(".option-btn");ue.forEach(s=>{s.addEventListener("click",t=>{if(t.target===null)return;const e=t.target;b.lineWidth=parseInt(e.dataset.lineWidth),s.classList.add("current-width"),ue.forEach(n=>{n!==e&&n.classList.remove("current-width")})})});const zt=document.getElementById("input-opacity");zt.addEventListener("change",()=>{const s=b.fillStyle.startsWith("#")?de(b.fillStyle,zt.value):je(b.fillStyle,+zt.value);b.fillStyle=s});
