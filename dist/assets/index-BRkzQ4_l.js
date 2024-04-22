(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="160",Ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yh=0,fl=1,qh=2,Cu=1,Ru=2,In=3,xn=0,Pe=1,Ke=2,ti=0,lr=1,dl=2,pl=3,ml=4,$h=5,di=100,Kh=101,Zh=102,gl=103,_l=104,Jh=200,Qh=201,tf=202,ef=203,Ta=204,wa=205,nf=206,rf=207,sf=208,of=209,af=210,lf=211,cf=212,uf=213,hf=214,ff=0,df=1,pf=2,qs=3,mf=4,gf=5,_f=6,vf=7,Pu=0,xf=1,yf=2,ei=0,Mf=1,Sf=2,Ef=3,Lu=4,bf=5,Af=6,Du=300,ur=301,hr=302,$s=303,Ca=304,oo=306,Ra=1e3,ke=1001,Pa=1002,Me=1003,vl=1004,So=1005,Se=1006,Tf=1007,fr=1008,ni=1009,wf=1010,Cf=1011,Ya=1012,Iu=1013,Zn=1014,dn=1015,Fn=1016,Uu=1017,Nu=1018,_i=1020,Rf=1021,hn=1023,Pf=1024,Lf=1025,vi=1026,dr=1027,Df=1028,Fu=1029,If=1030,Ou=1031,Bu=1033,Eo=33776,bo=33777,Ao=33778,To=33779,xl=35840,yl=35841,Ml=35842,Sl=35843,zu=36196,El=37492,bl=37496,Al=37808,Tl=37809,wl=37810,Cl=37811,Rl=37812,Pl=37813,Ll=37814,Dl=37815,Il=37816,Ul=37817,Nl=37818,Fl=37819,Ol=37820,Bl=37821,wo=36492,zl=36494,Hl=36495,Uf=36283,Vl=36284,Gl=36285,kl=36286,Hu=3e3,xi=3001,Nf=3200,Vu=3201,Gu=0,Ff=1,Ze="",ce="srgb",yn="srgb-linear",qa="display-p3",ao="display-p3-linear",Ks="linear",te="srgb",Zs="rec709",Js="p3",Pi=7680,Wl=519,Of=512,Bf=513,zf=514,ku=515,Hf=516,Vf=517,Gf=518,kf=519,Xl=35044,jl="300 es",La=1035,On=2e3,Qs=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Nr=Math.PI/180,Vr=180/Math.PI;function gr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function $a(i,t){return(i%t+t)%t}function Wf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Xf(i,t,e){return i!==t?(e-i)/(t-i):0}function Fr(i,t,e){return(1-e)*i+e*t}function jf(i,t,e,n){return Fr(i,t,1-Math.exp(-e*n))}function Yf(i,t=1){return t-Math.abs($a(i,t*2)-t)}function qf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Kf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zf(i,t){return i+Math.random()*(t-i)}function Jf(i){return i*(.5-Math.random())}function Qf(i){i!==void 0&&(Yl=i);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function td(i){return i*Nr}function ed(i){return i*Vr}function Da(i){return(i&i-1)===0&&i!==0}function nd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function to(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function id(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),f=s((t-n)/2),d=a((t-n)/2),m=s((n-t)/2),v=a((n-t)/2);switch(r){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wu={DEG2RAD:Nr,RAD2DEG:Vr,generateUUID:gr,clamp:ge,euclideanModulo:$a,mapLinear:Wf,inverseLerp:Xf,lerp:Fr,damp:jf,pingpong:Yf,smoothstep:qf,smootherstep:$f,randInt:Kf,randFloat:Zf,randFloatSpread:Jf,seededRandom:Qf,degToRad:td,radToDeg:ed,isPowerOfTwo:Da,ceilPowerOfTwo:nd,floorPowerOfTwo:to,setQuaternionFromProperEuler:id,normalize:Ce,denormalize:rr};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,r,s,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],v=n[8],M=r[0],p=r[3],h=r[6],y=r[1],x=r[4],b=r[7],T=r[2],A=r[5],E=r[8];return s[0]=a*M+o*y+l*T,s[3]=a*p+o*x+l*A,s[6]=a*h+o*b+l*E,s[1]=c*M+u*y+f*T,s[4]=c*p+u*x+f*A,s[7]=c*h+u*b+f*E,s[2]=d*M+m*y+v*T,s[5]=d*p+m*x+v*A,s[8]=d*h+m*b+v*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,v=e*f+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=f*M,t[1]=(r*c-u*n)*M,t[2]=(o*n-r*a)*M,t[3]=d*M,t[4]=(u*e-r*l)*M,t[5]=(r*s-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Xt;function Xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){const i=Gr("canvas");return i.style.display="block",i}const ql={};function Or(i){i in ql||(ql[i]=!0,console.warn(i))}const $l=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kl=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kr={[yn]:{transfer:Ks,primaries:Zs,toReference:i=>i,fromReference:i=>i},[ce]:{transfer:te,primaries:Zs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ao]:{transfer:Ks,primaries:Js,toReference:i=>i.applyMatrix3(Kl),fromReference:i=>i.applyMatrix3($l)},[qa]:{transfer:te,primaries:Js,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kl),fromReference:i=>i.applyMatrix3($l).convertLinearToSRGB()}},sd=new Set([yn,ao]),Qt={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!sd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Kr[t].toReference,r=Kr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Kr[i].primaries},getTransfer:function(i){return i===Ze?Ks:Kr[i].transfer}};function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class ju{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Gr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cr(e[n]/255)*255):e[n]=cr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let od=0;class Yu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=gr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Po(r[a].image)):s.push(Po(r[a]))}else s=Po(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ju.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class Le extends Ai{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=ke,r=ke,s=Se,a=fr,o=hn,l=ni,c=Le.DEFAULT_ANISOTROPY,u=Ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=gr(),this.name="",this.source=new Yu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===xi?ce:Ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ce?xi:Hu}set encoding(t){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===xi?ce:Ze}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Du;Le.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,r=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],M=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,b=(m+1)/2,T=(h+1)/2,A=(u+d)/4,E=(f+M)/4,S=(v+p)/4;return x>b&&x>T?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=E/n):b>T?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=A/r,s=S/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=E/s,r=S/s),this.set(n,r,s,e),this}let y=Math.sqrt((p-v)*(p-v)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(f-M)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ld extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xi?ce:Ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Le(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qu extends Le{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Me,this.minFilter=Me,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cd extends Le{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Me,this.minFilter=Me,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],M=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(f!==M||l!==d||c!==m||u!==v){let p=1-o;const h=l*d+c*m+u*v+f*M,y=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const T=Math.sqrt(x),A=Math.atan2(T,h*y);p=Math.sin(p*A)/T,o=Math.sin(o*A)/T}const b=o*y;if(l=l*p+d*b,c=c*p+m*b,u=u*p+v*b,f=f*p+M*b,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+u*f+l*m-c*d,t[e+1]=l*v+u*d+c*f-o*m,t[e+2]=c*v+u*m+o*d-l*f,t[e+3]=u*v-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),d=l(n/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new H,Zl=new Ei;class De{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),Jr.subVectors(this.max,Mr),Di.subVectors(t.a,Mr),Ii.subVectors(t.b,Mr),Ui.subVectors(t.c,Mr),Vn.subVectors(Ii,Di),Gn.subVectors(Ui,Ii),oi.subVectors(Di,Ui);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-oi.z,oi.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,oi.z,0,-oi.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-oi.y,oi.x,0];return!Do(e,Di,Ii,Ui,Jr)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,Di,Ii,Ui,Jr))?!1:(Qr.crossVectors(Vn,Gn),e=[Qr.x,Qr.y,Qr.z],Do(e,Di,Ii,Ui,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new H,new H,new H,new H,new H,new H,new H,new H],sn=new H,Zr=new De,Di=new H,Ii=new H,Ui=new H,Vn=new H,Gn=new H,oi=new H,Mr=new H,Jr=new H,Qr=new H,ai=new H;function Do(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ai.fromArray(i,s);const o=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ud=new De,Sr=new H,Io=new H;class lo{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ud.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Io)),this.expandByPoint(Sr.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new H,Uo=new H,ts=new H,kn=new H,No=new H,es=new H,Fo=new H;class co{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Uo.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Uo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ts),o=kn.dot(this.direction),l=-kn.dot(ts),c=kn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const M=1/u;f*=M,d*=M,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Uo).addScaledVector(ts,d),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,r,s){No.subVectors(e,t),es.subVectors(n,t),Fo.crossVectors(No,es);let a=this.direction.dot(Fo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(es.crossVectors(kn,es));if(l<0)return null;const c=o*this.direction.dot(No.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(Fo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,r,s,a,o,l,c,u,f,d,m,v,M,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,f,d,m,v,M,p)}set(t,e,n,r,s,a,o,l,c,u,f,d,m,v,M,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*f,v=o*u,M=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+v*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=v+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*f,v=c*u,M=c*f;e[0]=d+M*o,e[4]=v*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*f,v=c*u,M=c*f;e[0]=d-M*o,e[4]=-a*f,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*f,v=o*u,M=o*f;e[0]=l*u,e[4]=v*c-m,e[8]=d*c+M,e[1]=l*f,e[5]=M*c+d,e[9]=m*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,v=o*l,M=o*c;e[0]=l*u,e[4]=M-d*f,e[8]=v*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*f+v,e[10]=d-M*f}else if(t.order==="XZY"){const d=a*l,m=a*c,v=o*l,M=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+M,e[5]=a*u,e[9]=m*f-v,e[2]=v*f-m,e[6]=o*u,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,fd)}lookAt(t,e,n){const r=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Wn.crossVectors(n,ze),Wn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Wn.crossVectors(n,ze)),Wn.normalize(),ns.crossVectors(ze,Wn),r[0]=Wn.x,r[4]=ns.x,r[8]=ze.x,r[1]=Wn.y,r[5]=ns.y,r[9]=ze.y,r[2]=Wn.z,r[6]=ns.z,r[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],v=n[2],M=n[6],p=n[10],h=n[14],y=n[3],x=n[7],b=n[11],T=n[15],A=r[0],E=r[4],S=r[8],g=r[12],_=r[1],w=r[5],R=r[9],z=r[13],L=r[2],F=r[6],N=r[10],k=r[14],q=r[3],j=r[7],Y=r[11],st=r[15];return s[0]=a*A+o*_+l*L+c*q,s[4]=a*E+o*w+l*F+c*j,s[8]=a*S+o*R+l*N+c*Y,s[12]=a*g+o*z+l*k+c*st,s[1]=u*A+f*_+d*L+m*q,s[5]=u*E+f*w+d*F+m*j,s[9]=u*S+f*R+d*N+m*Y,s[13]=u*g+f*z+d*k+m*st,s[2]=v*A+M*_+p*L+h*q,s[6]=v*E+M*w+p*F+h*j,s[10]=v*S+M*R+p*N+h*Y,s[14]=v*g+M*z+p*k+h*st,s[3]=y*A+x*_+b*L+T*q,s[7]=y*E+x*w+b*F+T*j,s[11]=y*S+x*R+b*N+T*Y,s[15]=y*g+x*z+b*k+T*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],m=t[14],v=t[3],M=t[7],p=t[11],h=t[15];return v*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*m-n*l*m)+M*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+e*c*f-e*o*m-s*a*f+n*a*m+s*o*u-n*c*u)+h*(-r*o*u-e*l*f+e*o*d+r*a*f-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],m=t[11],v=t[12],M=t[13],p=t[14],h=t[15],y=f*p*c-M*d*c+M*l*m-o*p*m-f*l*h+o*d*h,x=v*d*c-u*p*c-v*l*m+a*p*m+u*l*h-a*d*h,b=u*M*c-v*f*c+v*o*m-a*M*m-u*o*h+a*f*h,T=v*f*l-u*M*l-v*o*d+a*M*d+u*o*p-a*f*p,A=e*y+n*x+r*b+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=y*E,t[1]=(M*d*s-f*p*s-M*r*m+n*p*m+f*r*h-n*d*h)*E,t[2]=(o*p*s-M*l*s+M*r*c-n*p*c-o*r*h+n*l*h)*E,t[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*m-n*l*m)*E,t[4]=x*E,t[5]=(u*p*s-v*d*s+v*r*m-e*p*m-u*r*h+e*d*h)*E,t[6]=(v*l*s-a*p*s-v*r*c+e*p*c+a*r*h-e*l*h)*E,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*E,t[8]=b*E,t[9]=(v*f*s-u*M*s-v*n*m+e*M*m+u*n*h-e*f*h)*E,t[10]=(a*M*s-v*o*s+v*n*c-e*M*c-a*n*h+e*o*h)*E,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*m-e*o*m)*E,t[12]=T*E,t[13]=(u*M*r-v*f*r+v*n*d-e*M*d-u*n*p+e*f*p)*E,t[14]=(v*o*r-a*M*r-v*n*l+e*M*l+a*n*p-e*o*p)*E,t[15]=(a*f*r-u*o*r+u*n*l-e*f*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,v=s*f,M=a*u,p=a*f,h=o*f,y=l*c,x=l*u,b=l*f,T=n.x,A=n.y,E=n.z;return r[0]=(1-(M+h))*T,r[1]=(m+b)*T,r[2]=(v-x)*T,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(d+h))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(v+x)*E,r[9]=(p-y)*E,r[10]=(1-(d+M))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const a=Ni.set(r[4],r[5],r[6]).length(),o=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],on.copy(this);const c=1/s,u=1/a,f=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=On){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let m,v;if(o===On)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Qs)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=On){const l=this.elements,c=1/(e-t),u=1/(n-r),f=1/(a-s),d=(e+t)*c,m=(n+r)*u;let v,M;if(o===On)v=(a+s)*f,M=-2*f;else if(o===Qs)v=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new H,on=new Jt,hd=new H(0,0,0),fd=new H(1,1,1),Wn=new H,ns=new H,ze=new H,Jl=new Jt,Ql=new Ei;class uo{constructor(t=0,e=0,n=0,r=uo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uo.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dd=0;const tc=new H,Fi=new Ei,Tn=new Jt,is=new H,Er=new H,pd=new H,md=new Ei,ec=new H(1,0,0),nc=new H(0,1,0),ic=new H(0,0,1),gd={type:"added"},_d={type:"removed"};class Te extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new H,e=new uo,n=new Ei,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Xt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Er,is,this.up):Tn.lookAt(is,Er,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_d)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Te.DEFAULT_UP=new H(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new H,wn=new H,Oo=new H,Cn=new H,Oi=new H,Bi=new H,rc=new H,Bo=new H,zo=new H,Ho=new H;let rs=!1;class ie{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),an.subVectors(t,e),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){an.subVectors(r,e),wn.subVectors(n,e),Oo.subVectors(t,e);const a=an.dot(an),o=an.dot(wn),l=an.dot(Oo),c=wn.dot(wn),u=wn.dot(Oo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(t,e,n,r,s,a,o,l){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),this.getInterpolation(t,e,n,r,s,a,o,l)}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static isFrontFacing(t,e,n,r){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ie.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),ie.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return ie.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Oi.subVectors(r,n),Bi.subVectors(s,n),Bo.subVectors(t,n);const l=Oi.dot(Bo),c=Bi.dot(Bo);if(l<=0&&c<=0)return e.copy(n);zo.subVectors(t,r);const u=Oi.dot(zo),f=Bi.dot(zo);if(u>=0&&f<=u)return e.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Oi,a);Ho.subVectors(t,s);const m=Oi.dot(Ho),v=Bi.dot(Ho);if(v>=0&&m<=v)return e.copy(s);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Bi,o);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return rc.subVectors(s,r),o=(f-u)/(f-u+(m-v)),e.copy(r).addScaledVector(rc,o);const h=1/(p+M+d);return a=M*h,o=d*h,e.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=$a(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Vo(a,s,t+1/3),this.g=Vo(a,s,t),this.b=Vo(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ce){const n=Ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ce){return Qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(ge(Ae.r*255,0,255))*65536+Math.round(ge(Ae.g*255,0,255))*256+Math.round(ge(Ae.b*255,0,255))}getHexString(t=ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,r=Ae.g,s=Ae.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=ce){Qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,r=Ae.b;return t!==ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(ss);const n=Fr(Xn.h,ss.h,e),r=Fr(Xn.s,ss.s,e),s=Fr(Xn.l,ss.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Gt;Gt.NAMES=Ku;let vd=0;class _r extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=lr,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=wa,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zu extends _r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Nn=xd();function xd(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function yd(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=ge(i,-65504,65504),Nn.floatView[0]=i;const t=Nn.uint32View[0],e=t>>23&511;return Nn.baseTable[e]+((t&8388607)>>Nn.shiftTable[e])}function Md(i){const t=i>>10;return Nn.uint32View[0]=Nn.mantissaTable[Nn.offsetTable[t]+(i&1023)]+Nn.exponentTable[t],Nn.floatView[0]}const os={toHalfFloat:yd,fromHalfFloat:Md},pe=new H,as=new Lt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class Ju extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qu extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class yi extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sd=0;const Ye=new Jt,Go=new Te,zi=new H,He=new De,br=new De,ye=new H;class Ti extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?Qu:Ju)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new De);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(He.min,br.min),He.expandByPoint(ye),ye.addVectors(He.max,br.max),He.expandByPoint(ye)):(He.expandByPoint(br.min),He.expandByPoint(br.max))}He.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ye.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(t,c),ye.add(zi)),r=Math.max(r,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let _=0;_<o;_++)c[_]=new H,u[_]=new H;const f=new H,d=new H,m=new H,v=new Lt,M=new Lt,p=new Lt,h=new H,y=new H;function x(_,w,R){f.fromArray(r,_*3),d.fromArray(r,w*3),m.fromArray(r,R*3),v.fromArray(a,_*2),M.fromArray(a,w*2),p.fromArray(a,R*2),d.sub(f),m.sub(f),M.sub(v),p.sub(v);const z=1/(M.x*p.y-p.x*M.y);isFinite(z)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-M.y).multiplyScalar(z),y.copy(m).multiplyScalar(M.x).addScaledVector(d,-p.x).multiplyScalar(z),c[_].add(h),c[w].add(h),c[R].add(h),u[_].add(y),u[w].add(y),u[R].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let _=0,w=b.length;_<w;++_){const R=b[_],z=R.start,L=R.count;for(let F=z,N=z+L;F<N;F+=3)x(n[F+0],n[F+1],n[F+2])}const T=new H,A=new H,E=new H,S=new H;function g(_){E.fromArray(s,_*3),S.copy(E);const w=c[_];T.copy(w),T.sub(E.multiplyScalar(E.dot(w))).normalize(),A.crossVectors(S,w);const z=A.dot(u[_])<0?-1:1;l[_*4]=T.x,l[_*4+1]=T.y,l[_*4+2]=T.z,l[_*4+3]=z}for(let _=0,w=b.length;_<w;++_){const R=b[_],z=R.start,L=R.count;for(let F=z,N=z+L;F<N;F+=3)g(n[F+0]),g(n[F+1]),g(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new Oe(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ti,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new Jt,li=new co,ls=new lo,oc=new H,Hi=new H,Vi=new H,Gi=new H,ko=new H,cs=new H,us=new Lt,hs=new Lt,fs=new Lt,ac=new H,lc=new H,cc=new H,ds=new H,ps=new H;class pn extends Te{constructor(t=new Ti,e=new Zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ko.fromBufferAttribute(f,t),a?cs.addScaledVector(ko,u):cs.addScaledVector(ko.sub(e),u))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),li.copy(t.ray).recast(t.near),!(ls.containsPoint(li.origin)===!1&&(li.intersectSphere(ls,oc)===null||li.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(sc.copy(s).invert(),li.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],h=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,T=x;b<T;b+=3){const A=o.getX(b),E=o.getX(b+1),S=o.getX(b+2);r=ms(this,h,t,n,c,u,f,A,E,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=v,h=M;p<h;p+=3){const y=o.getX(p),x=o.getX(p+1),b=o.getX(p+2);r=ms(this,a,t,n,c,u,f,y,x,b),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const p=d[v],h=a[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,T=x;b<T;b+=3){const A=b,E=b+1,S=b+2;r=ms(this,h,t,n,c,u,f,A,E,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,h=M;p<h;p+=3){const y=p,x=p+1,b=p+2;r=ms(this,a,t,n,c,u,f,y,x,b),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Ed(i,t,e,n,r,s,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===xn,o),l===null)return null;ps.copy(o),ps.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ps);return c<e.near||c>e.far?null:{distance:c,point:ps.clone(),object:i}}function ms(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Hi),i.getVertexPosition(l,Vi),i.getVertexPosition(c,Gi);const u=Ed(i,t,e,n,Hi,Vi,Gi,ds);if(u){r&&(us.fromBufferAttribute(r,o),hs.fromBufferAttribute(r,l),fs.fromBufferAttribute(r,c),u.uv=ie.getInterpolation(ds,Hi,Vi,Gi,us,hs,fs,new Lt)),s&&(us.fromBufferAttribute(s,o),hs.fromBufferAttribute(s,l),fs.fromBufferAttribute(s,c),u.uv1=ie.getInterpolation(ds,Hi,Vi,Gi,us,hs,fs,new Lt),u.uv2=u.uv1),a&&(ac.fromBufferAttribute(a,o),lc.fromBufferAttribute(a,l),cc.fromBufferAttribute(a,c),u.normal=ie.getInterpolation(ds,Hi,Vi,Gi,ac,lc,cc,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};ie.getNormal(Hi,Vi,Gi,f.normal),u.face=f}return u}class wi extends Ti{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(f,2));function v(M,p,h,y,x,b,T,A,E,S,g){const _=b/E,w=T/S,R=b/2,z=T/2,L=A/2,F=E+1,N=S+1;let k=0,q=0;const j=new H;for(let Y=0;Y<N;Y++){const st=Y*w-z;for(let ct=0;ct<F;ct++){const $=ct*_-R;j[M]=$*y,j[p]=st*x,j[h]=L,c.push(j.x,j.y,j.z),j[M]=0,j[p]=0,j[h]=A>0?1:-1,u.push(j.x,j.y,j.z),f.push(ct/E),f.push(1-Y/S),k+=1}}for(let Y=0;Y<S;Y++)for(let st=0;st<E;st++){const ct=d+st+F*Y,$=d+st+F*(Y+1),it=d+(st+1)+F*(Y+1),mt=d+(st+1)+F*Y;l.push(ct,$,mt),l.push($,it,mt),q+=6}o.addGroup(m,q,g),m+=q,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=pr(i[e]);for(const r in n)t[r]=n[r]}return t}function bd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt.workingColorSpace}const Ad={clone:pr,merge:Re};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends _r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends eh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Wi=1;class Cd extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(ki,Wi,t,e);r.layers=this.layers,this.add(r);const s=new $e(ki,Wi,t,e);s.layers=this.layers,this.add(s);const a=new $e(ki,Wi,t,e);a.layers=this.layers,this.add(a);const o=new $e(ki,Wi,t,e);o.layers=this.layers,this.add(o);const l=new $e(ki,Wi,t,e);l.layers=this.layers,this.add(l);const c=new $e(ki,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class nh extends Le{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rd extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===xi?ce:Ze),this.texture=new nh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wi(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:ti});s.uniforms.tEquirect.value=e;const a=new pn(r,s),o=e.minFilter;return e.minFilter===fr&&(e.minFilter=Se),new Cd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Wo=new H,Pd=new H,Ld=new Xt;class un{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Wo.subVectors(n,e).cross(Pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ld.getNormalMatrix(t),r=this.coplanarPoint(Wo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new lo,gs=new H;class Ka{constructor(t=new un,e=new un,n=new un,r=new un,s=new un,a=new un){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],M=r[10],p=r[11],h=r[12],y=r[13],x=r[14],b=r[15];if(n[0].setComponents(l-s,d-c,p-m,b-h).normalize(),n[1].setComponents(l+s,d+c,p+m,b+h).normalize(),n[2].setComponents(l+a,d+u,p+v,b+y).normalize(),n[3].setComponents(l-a,d-u,p-v,b-y).normalize(),n[4].setComponents(l-o,d-f,p-M,b-x).normalize(),e===On)n[5].setComponents(l+o,d+f,p+M,b+x).normalize();else if(e===Qs)n[5].setComponents(o,f,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(gs.x=r.normal.x>0?t.max.x:t.min.x,gs.y=r.normal.y>0?t.max.y:t.min.y,gs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Dd(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=f.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,f,d),c.onUploadCallback();let M;if(f instanceof Float32Array)M=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=i.SHORT;else if(f instanceof Uint32Array)M=i.UNSIGNED_INT;else if(f instanceof Int32Array)M=i.INT;else if(f instanceof Int8Array)M=i.BYTE;else if(f instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const d=u.array,m=u._updateRange,v=u.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&v.length===0&&i.bufferSubData(f,0,d),v.length!==0){for(let M=0,p=v.length;M<p;M++){const h=v[M];e?i.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):i.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class Wr extends Ti{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=t/o,d=e/l,m=[],v=[],M=[],p=[];for(let h=0;h<u;h++){const y=h*d-a;for(let x=0;x<c;x++){const b=x*f-s;v.push(b,-y,0),M.push(0,0,1),p.push(x/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const x=y+c*h,b=y+c*(h+1),T=y+1+c*(h+1),A=y+1+c*h;m.push(x,b,A),m.push(b,T,A)}this.setIndex(m),this.setAttribute("position",new yi(v,3)),this.setAttribute("normal",new yi(M,3)),this.setAttribute("uv",new yi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Id,alphahash_pars_fragment:Ud,alphamap_fragment:Nd,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:zd,aomap_pars_fragment:Hd,batching_pars_vertex:Vd,batching_vertex:Gd,begin_vertex:kd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:jd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:tp,color_vertex:ep,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:rp,displacementmap_pars_vertex:sp,displacementmap_vertex:op,emissivemap_fragment:ap,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:up,envmap_fragment:hp,envmap_common_pars_fragment:fp,envmap_pars_fragment:dp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Tp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:_p,fog_fragment:vp,fog_pars_fragment:xp,gradientmap_pars_fragment:yp,lightmap_fragment:Mp,lightmap_pars_fragment:Sp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:bp,lights_pars_begin:Ap,lights_toon_fragment:wp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Rp,lights_phong_pars_fragment:Pp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Ip,lights_fragment_maps:Up,lights_fragment_end:Np,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:zp,map_fragment:Hp,map_pars_fragment:Vp,map_particle_fragment:Gp,map_particle_pars_fragment:kp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphcolor_vertex:jp,morphnormal_vertex:Yp,morphtarget_pars_vertex:qp,morphtarget_vertex:$p,normal_fragment_begin:Kp,normal_fragment_maps:Zp,normal_pars_fragment:Jp,normal_pars_vertex:Qp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:rm,iridescence_pars_fragment:sm,opaque_fragment:om,packing:am,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:um,dithering_pars_fragment:hm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:_m,skinbase_vertex:vm,skinning_pars_vertex:xm,skinning_vertex:ym,skinnormal_vertex:Mm,specularmap_fragment:Sm,specularmap_pars_fragment:Em,tonemapping_fragment:bm,tonemapping_pars_fragment:Am,transmission_fragment:Tm,transmission_pars_fragment:wm,uv_pars_fragment:Cm,uv_pars_vertex:Rm,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Dm,background_frag:Im,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:Fm,cube_frag:Om,depth_vert:Bm,depth_frag:zm,distanceRGBA_vert:Hm,distanceRGBA_frag:Vm,equirect_vert:Gm,equirect_frag:km,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:jm,meshbasic_frag:Ym,meshlambert_vert:qm,meshlambert_frag:$m,meshmatcap_vert:Km,meshmatcap_frag:Zm,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:sg,points_vert:og,points_frag:ag,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:hg},pt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},gn={basic:{uniforms:Re([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Re([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Re([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Re([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Re([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Re([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Re([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Re([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Re([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Re([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Re([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Re([pt.common,pt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Re([pt.lights,pt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};gn.physical={uniforms:Re([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const _s={r:0,b:0,g:0};function fg(i,t,e,n,r,s,a){const o=new Gt(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function v(p,h){let y=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?e:t).get(x)),x===null?M(o,l):x&&x.isColor&&(M(x,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===oo)?(u===void 0&&(u=new pn(new wi(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:pr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Qt.getTransfer(x.colorSpace)!==te,(f!==x||d!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pn(new Wr(2,2),new bi({name:"BackgroundMaterial",uniforms:pr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function M(p,h){p.getRGB(_s,th(i)),n.buffers.color.setClear(_s.r,_s.g,_s.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,M(o,l)},render:v}}function dg(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(L,F,N,k,q){let j=!1;if(a){const Y=M(k,N,F);c!==Y&&(c=Y,m(c.object)),j=h(L,k,N,q),j&&y(L,k,N,q)}else{const Y=F.wireframe===!0;(c.geometry!==k.id||c.program!==N.id||c.wireframe!==Y)&&(c.geometry=k.id,c.program=N.id,c.wireframe=Y,j=!0)}q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,S(L,F,N,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function M(L,F,N){const k=N.wireframe===!0;let q=o[L.id];q===void 0&&(q={},o[L.id]=q);let j=q[F.id];j===void 0&&(j={},q[F.id]=j);let Y=j[k];return Y===void 0&&(Y=p(d()),j[k]=Y),Y}function p(L){const F=[],N=[],k=[];for(let q=0;q<r;q++)F[q]=0,N[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:k,object:L,attributes:{},index:null}}function h(L,F,N,k){const q=c.attributes,j=F.attributes;let Y=0;const st=N.getAttributes();for(const ct in st)if(st[ct].location>=0){const it=q[ct];let mt=j[ct];if(mt===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(mt=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(mt=L.instanceColor)),it===void 0||it.attribute!==mt||mt&&it.data!==mt.data)return!0;Y++}return c.attributesNum!==Y||c.index!==k}function y(L,F,N,k){const q={},j=F.attributes;let Y=0;const st=N.getAttributes();for(const ct in st)if(st[ct].location>=0){let it=j[ct];it===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const mt={};mt.attribute=it,it&&it.data&&(mt.data=it.data),q[ct]=mt,Y++}c.attributes=q,c.attributesNum=Y,c.index=k}function x(){const L=c.newAttributes;for(let F=0,N=L.length;F<N;F++)L[F]=0}function b(L){T(L,0)}function T(L,F){const N=c.newAttributes,k=c.enabledAttributes,q=c.attributeDivisors;N[L]=1,k[L]===0&&(i.enableVertexAttribArray(L),k[L]=1),q[L]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),q[L]=F)}function A(){const L=c.newAttributes,F=c.enabledAttributes;for(let N=0,k=F.length;N<k;N++)F[N]!==L[N]&&(i.disableVertexAttribArray(N),F[N]=0)}function E(L,F,N,k,q,j,Y){Y===!0?i.vertexAttribIPointer(L,F,N,q,j):i.vertexAttribPointer(L,F,N,k,q,j)}function S(L,F,N,k){if(n.isWebGL2===!1&&(L.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const q=k.attributes,j=N.getAttributes(),Y=F.defaultAttributeValues;for(const st in j){const ct=j[st];if(ct.location>=0){let $=q[st];if($===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){const it=$.normalized,mt=$.itemSize,St=e.get($);if(St===void 0)continue;const Et=St.buffer,tt=St.type,C=St.bytesPerElement,U=n.isWebGL2===!0&&(tt===i.INT||tt===i.UNSIGNED_INT||$.gpuType===Iu);if($.isInterleavedBufferAttribute){const V=$.data,B=V.stride,nt=$.offset;if(V.isInstancedInterleavedBuffer){for(let Q=0;Q<ct.locationSize;Q++)T(ct.location+Q,V.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Q=0;Q<ct.locationSize;Q++)b(ct.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Q=0;Q<ct.locationSize;Q++)E(ct.location+Q,mt/ct.locationSize,tt,it,B*C,(nt+mt/ct.locationSize*Q)*C,U)}else{if($.isInstancedBufferAttribute){for(let V=0;V<ct.locationSize;V++)T(ct.location+V,$.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let V=0;V<ct.locationSize;V++)b(ct.location+V);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let V=0;V<ct.locationSize;V++)E(ct.location+V,mt/ct.locationSize,tt,it,mt*C,mt/ct.locationSize*V*C,U)}}else if(Y!==void 0){const it=Y[st];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(ct.location,it);break;case 3:i.vertexAttrib3fv(ct.location,it);break;case 4:i.vertexAttrib4fv(ct.location,it);break;default:i.vertexAttrib1fv(ct.location,it)}}}}A()}function g(){R();for(const L in o){const F=o[L];for(const N in F){const k=F[N];for(const q in k)v(k[q].object),delete k[q];delete F[N]}delete o[L]}}function _(L){if(o[L.id]===void 0)return;const F=o[L.id];for(const N in F){const k=F[N];for(const q in k)v(k[q].object),delete k[q];delete F[N]}delete o[L.id]}function w(L){for(const F in o){const N=o[F];if(N[L.id]===void 0)continue;const k=N[L.id];for(const q in k)v(k[q].object),delete k[q];delete N[L.id]}}function R(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:R,resetDefaultState:z,dispose:g,releaseStatesOfGeometry:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function pg(i,t,e,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,f){i.drawArrays(s,u,f),e.update(f,s,1)}function l(u,f,d){if(d===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,f,d),e.update(f,s,d)}function c(u,f,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(u[v],f[v]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,d);let v=0;for(let M=0;M<d;M++)v+=f[M];e.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function mg(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=a||t.has("OES_texture_float"),T=x&&b,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:A}}function gg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new un,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let b=h.clippingState||null;l.value=b,b=u(v,d,x,m);for(let T=0;T!==x;++T)b[T]=e[T];h.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,m,v){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const h=m+M*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,b=m;x!==M;++x,b+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function _g(i){let t=new WeakMap;function e(a,o){return o===$s?a.mapping=ur:o===Ca&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$s||o===Ca)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rd(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class rh extends eh{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const sr=4,uc=[.125,.215,.35,.446,.526,.582],pi=20,Xo=new rh,hc=new Gt;let jo=null,Yo=0,qo=0;const fi=(1+Math.sqrt(5))/2,Xi=1/fi,fc=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,fi,Xi),new H(0,fi,-Xi),new H(Xi,0,fi),new H(-Xi,0,fi),new H(fi,Xi,0),new H(-fi,Xi,0)];class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){jo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jo,Yo,qo),t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Fn,format:hn,colorSpace:yn,depthBuffer:!1},r=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(s)),this._blurMaterial=xg(s,t,e)}return r}_compileMaterial(t){const e=new pn(this._lodPlanes[0],t);this._renderer.compile(e,Xo)}_sceneToCubeUV(t,e,n,r){const o=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(hc),u.toneMapping=ei,u.autoClear=!1;const m=new Zu({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),v=new pn(new wi,m);let M=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,M=!0):(m.color.copy(hc),M=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;vs(r,y*x,h>2?x:0,x,x),u.setRenderTarget(r),M&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ur||t.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;vs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fc[(r-1)%fc.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*pi-1),M=s/v,p=isFinite(s)?1+Math.floor(u*M):pi;p>pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const h=[];let y=0;for(let E=0;E<pi;++E){const S=E/M,g=Math.exp(-S*S/2);h.push(g),E===0?y+=g:E<p&&(y+=2*g)}for(let E=0;E<h.length;E++)h[E]=h[E]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const b=this._sizeLods[r],T=3*b*(r>x-sr?r-x+sr:0),A=4*(this._cubeSize-b);vs(e,T,A,3*b,2*b),l.setRenderTarget(e),l.render(f,Xo)}}function vg(i){const t=[],e=[],n=[];let r=i;const s=i-sr+1+uc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-sr?l=uc[a-i+sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,M=3,p=2,h=1,y=new Float32Array(M*v*m),x=new Float32Array(p*v*m),b=new Float32Array(h*v*m);for(let A=0;A<m;A++){const E=A%3*2/3-1,S=A>2?0:-1,g=[E,S,0,E+2/3,S,0,E+2/3,S+1,0,E,S,0,E+2/3,S+1,0,E,S+1,0];y.set(g,M*v*A),x.set(d,p*v*A);const _=[A,A,A,A,A,A];b.set(_,h*v*A)}const T=new Ti;T.setAttribute("position",new Oe(y,M)),T.setAttribute("uv",new Oe(x,p)),T.setAttribute("faceIndex",new Oe(b,h)),t.push(T),r>sr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function xg(i,t,e){const n=new Float32Array(pi),r=new H(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function mc(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function gc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$s||l===Ca,u=l===ur||l===hr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new dc(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){e===null&&(e=new dc(i));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Mg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Sg(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const M=d.morphAttributes[v];for(let p=0,h=M.length;p<h;p++)t.remove(M[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const M=m[v];for(let p=0,h=M.length;p<h;p++)t.update(M[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let M=0;if(m!==null){const y=m.array;M=m.version;for(let x=0,b=y.length;x<b;x+=3){const T=y[x+0],A=y[x+1],E=y[x+2];d.push(T,A,A,E,E,T)}}else if(v!==void 0){const y=v.array;M=v.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const T=x+0,A=x+1,E=x+2;d.push(T,A,A,E,E,T)}}else return;const p=new(Xu(d)?Qu:Ju)(d,1);p.version=M;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Eg(i,t,e,n){const r=n.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,v){i.drawElements(s,v,o,m*l),e.update(v,s,1)}function f(m,v,M){if(M===0)return;let p,h;if(r)p=i,h="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,v,o,m*l,M),e.update(v,s,M)}function d(m,v,M){if(M===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<M;h++)this.render(m[h]/l,v[h]);else{p.multiDrawElementsWEBGL(s,v,0,o,m,0,M);let h=0;for(let y=0;y<M;y++)h+=v[y];e.update(h,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function bg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ag(i,t){return i[0]-t[0]}function Tg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function wg(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,a=new ee,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,M=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==M){let F=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let g=0;x===!0&&(g=1),b===!0&&(g=2),T===!0&&(g=3);let _=u.attributes.position.count*g,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const R=new Float32Array(_*w*4*M),z=new qu(R,_,w,M);z.type=dn,z.needsUpdate=!0;const L=g*4;for(let N=0;N<M;N++){const k=A[N],q=E[N],j=S[N],Y=_*w*4*N;for(let st=0;st<k.count;st++){const ct=st*L;x===!0&&(a.fromBufferAttribute(k,st),R[Y+ct+0]=a.x,R[Y+ct+1]=a.y,R[Y+ct+2]=a.z,R[Y+ct+3]=0),b===!0&&(a.fromBufferAttribute(q,st),R[Y+ct+4]=a.x,R[Y+ct+5]=a.y,R[Y+ct+6]=a.z,R[Y+ct+7]=0),T===!0&&(a.fromBufferAttribute(j,st),R[Y+ct+8]=a.x,R[Y+ct+9]=a.y,R[Y+ct+10]=a.z,R[Y+ct+11]=j.itemSize===4?a.w:1)}}p={count:M,texture:z,size:new Lt(_,w)},s.set(u,p),u.addEventListener("dispose",F)}let h=0;for(let x=0;x<d.length;x++)h+=d[x];const y=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let M=n[u.id];if(M===void 0||M.length!==v){M=[];for(let b=0;b<v;b++)M[b]=[b,0];n[u.id]=M}for(let b=0;b<v;b++){const T=M[b];T[0]=b,T[1]=d[b]}M.sort(Tg);for(let b=0;b<8;b++)b<v&&M[b][1]?(o[b][0]=M[b][0],o[b][1]=M[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Ag);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const T=o[b],A=T[0],E=T[1];A!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+b)!==p[A]&&u.setAttribute("morphTarget"+b,p[A]),h&&u.getAttribute("morphNormal"+b)!==h[A]&&u.setAttribute("morphNormal"+b,h[A]),r[b]=E,y+=E):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Cg(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class sh extends Le{constructor(t,e,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:vi,u!==vi&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vi&&(n=Zn),n===void 0&&u===dr&&(n=_i),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const oh=new Le,ah=new sh(1,1);ah.compareFunction=ku;const lh=new qu,ch=new cd,uh=new nh,_c=[],vc=[],xc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function vr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=_c[r];if(s===void 0&&(s=new Float32Array(r),_c[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ho(i,t){let e=vc[t];e===void 0&&(e=new Int32Array(t),vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),ve(e,n)}}function Ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),ve(e,n)}}function Ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;xc.set(n),i.uniformMatrix4fv(this.addr,!1,xc),ve(e,n)}}function Fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Wg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?ah:oh;e.setTexture2D(t||s,r)}function Xg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ch,r)}function jg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||uh,r)}function Yg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||lh,r)}function qg(i){switch(i){case 5126:return Rg;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ig;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Yg}}function $g(i,t){i.uniform1fv(this.addr,t)}function Kg(i,t){const e=vr(t,this.size,2);i.uniform2fv(this.addr,e)}function Zg(i,t){const e=vr(t,this.size,3);i.uniform3fv(this.addr,e)}function Jg(i,t){const e=vr(t,this.size,4);i.uniform4fv(this.addr,e)}function Qg(i,t){const e=vr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t_(i,t){const e=vr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e_(i,t){const e=vr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n_(i,t){i.uniform1iv(this.addr,t)}function i_(i,t){i.uniform2iv(this.addr,t)}function r_(i,t){i.uniform3iv(this.addr,t)}function s_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function a_(i,t){i.uniform2uiv(this.addr,t)}function l_(i,t){i.uniform3uiv(this.addr,t)}function c_(i,t){i.uniform4uiv(this.addr,t)}function u_(i,t,e){const n=this.cache,r=t.length,s=ho(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||oh,s[a])}function h_(i,t,e){const n=this.cache,r=t.length,s=ho(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ch,s[a])}function f_(i,t,e){const n=this.cache,r=t.length,s=ho(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||uh,s[a])}function d_(i,t,e){const n=this.cache,r=t.length,s=ho(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||lh,s[a])}function p_(i){switch(i){case 5126:return $g;case 35664:return Kg;case 35665:return Zg;case 35666:return Jg;case 35674:return Qg;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return r_;case 35669:case 35673:return s_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return d_}}class m_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qg(e.type)}}class g_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p_(e.type)}}class __{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function v_(i,t,e){const n=i.name,r=n.length;for($o.lastIndex=0;;){const s=$o.exec(n),a=$o.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Sc(e,c===void 0?new m_(o,i,t):new g_(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new __(o),Sc(e,f)),e=f}}}class ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);v_(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const x_=37297;let y_=0;function M_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function S_(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===Js&&e===Zs?n="LinearDisplayP3ToLinearSRGB":t===Zs&&e===Js&&(n="LinearSRGBToLinearDisplayP3"),i){case yn:case ao:return[n,"LinearTransferOETF"];case ce:case qa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+M_(i.getShaderSource(t),a)}else return r}function E_(i,t){const e=S_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function b_(i,t){let e;switch(t){case Mf:e="Linear";break;case Sf:e="Reinhard";break;case Ef:e="OptimizedCineon";break;case Lu:e="ACESFilmic";break;case Af:e="AgX";break;case bf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function A_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(or).join(`
`)}function w_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function or(i){return i!==""}function Ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(R_,L_)}const P_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function L_(i,t){let e=Vt[t];if(e===void 0){const n=P_.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}const D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(D_,I_)}function I_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function U_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function N_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ur:case hr:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function O_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pu:t="ENVMAP_BLENDING_MULTIPLY";break;case xf:t="ENVMAP_BLENDING_MIX";break;case yf:t="ENVMAP_BLENDING_ADD";break}return t}function B_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function z_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=U_(e),c=N_(e),u=F_(e),f=O_(e),d=B_(e),m=e.isWebGL2?"":A_(e),v=T_(e),M=w_(s),p=r.createProgram();let h,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(or).join(`
`),h.length>0&&(h+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(or).join(`
`),y.length>0&&(y+=`
`)):(h=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),y=[m,Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ei?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=Ia(a),a=Ac(a,e),a=Tc(a,e),o=Ia(o),o=Ac(o,e),o=Tc(o,e),a=wc(a),o=wc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=x+h+a,T=x+y+o,A=Ec(r,r.VERTEX_SHADER,b),E=Ec(r,r.FRAGMENT_SHADER,T);r.attachShader(p,A),r.attachShader(p,E),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function S(R){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(A).trim(),F=r.getShaderInfoLog(E).trim();let N=!0,k=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,A,E);else{const q=bc(r,A,"vertex"),j=bc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+q+`
`+j)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||F==="")&&(k=!1);k&&(R.diagnostics={runnable:N,programLog:z,vertexShader:{log:L,prefix:h},fragmentShader:{log:F,prefix:y}})}r.deleteShader(A),r.deleteShader(E),g=new ks(r,p),_=C_(r,p)}let g;this.getUniforms=function(){return g===void 0&&S(this),g};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(p,x_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=E,this}let H_=0;class V_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new G_(t),e.set(t,n)),n}}class G_{constructor(t){this.id=H_++,this.code=t,this.usedTimes=0}}function k_(i,t,e,n,r,s,a){const o=new $u,l=new V_,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(g){return g===0?"uv":`uv${g}`}function p(g,_,w,R,z){const L=R.fog,F=z.geometry,N=g.isMeshStandardMaterial?R.environment:null,k=(g.isMeshStandardMaterial?e:t).get(g.envMap||N),q=k&&k.mapping===oo?k.image.height:null,j=v[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=Y!==void 0?Y.length:0;let ct=0;F.morphAttributes.position!==void 0&&(ct=1),F.morphAttributes.normal!==void 0&&(ct=2),F.morphAttributes.color!==void 0&&(ct=3);let $,it,mt,St;if(j){const ue=gn[j];$=ue.vertexShader,it=ue.fragmentShader}else $=g.vertexShader,it=g.fragmentShader,l.update(g),mt=l.getVertexShaderID(g),St=l.getFragmentShaderID(g);const Et=i.getRenderTarget(),tt=z.isInstancedMesh===!0,C=z.isBatchedMesh===!0,U=!!g.map,V=!!g.matcap,B=!!k,nt=!!g.aoMap,Q=!!g.lightMap,dt=!!g.bumpMap,ft=!!g.normalMap,Ot=!!g.displacementMap,Ct=!!g.emissiveMap,D=!!g.metalnessMap,P=!!g.roughnessMap,W=g.anisotropy>0,et=g.clearcoat>0,rt=g.iridescence>0,at=g.sheen>0,bt=g.transmission>0,_t=W&&!!g.anisotropyMap,Mt=et&&!!g.clearcoatMap,Pt=et&&!!g.clearcoatNormalMap,zt=et&&!!g.clearcoatRoughnessMap,ot=rt&&!!g.iridescenceMap,Kt=rt&&!!g.iridescenceThicknessMap,kt=at&&!!g.sheenColorMap,Nt=at&&!!g.sheenRoughnessMap,wt=!!g.specularMap,vt=!!g.specularColorMap,O=!!g.specularIntensityMap,ut=bt&&!!g.transmissionMap,At=bt&&!!g.thicknessMap,yt=!!g.gradientMap,lt=!!g.alphaMap,G=g.alphaTest>0,ht=!!g.alphaHash,gt=!!g.extensions,Dt=!!F.attributes.uv1,Rt=!!F.attributes.uv2,Yt=!!F.attributes.uv3;let qt=ei;return g.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(qt=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:$,fragmentShader:it,defines:g.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,batching:C,instancing:tt,instancingColor:tt&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:yn,map:U,matcap:V,envMap:B,envMapMode:B&&k.mapping,envMapCubeUVHeight:q,aoMap:nt,lightMap:Q,bumpMap:dt,normalMap:ft,displacementMap:d&&Ot,emissiveMap:Ct,normalMapObjectSpace:ft&&g.normalMapType===Ff,normalMapTangentSpace:ft&&g.normalMapType===Gu,metalnessMap:D,roughnessMap:P,anisotropy:W,anisotropyMap:_t,clearcoat:et,clearcoatMap:Mt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:zt,iridescence:rt,iridescenceMap:ot,iridescenceThicknessMap:Kt,sheen:at,sheenColorMap:kt,sheenRoughnessMap:Nt,specularMap:wt,specularColorMap:vt,specularIntensityMap:O,transmission:bt,transmissionMap:ut,thicknessMap:At,gradientMap:yt,opaque:g.transparent===!1&&g.blending===lr,alphaMap:lt,alphaTest:G,alphaHash:ht,combine:g.combine,mapUv:U&&M(g.map.channel),aoMapUv:nt&&M(g.aoMap.channel),lightMapUv:Q&&M(g.lightMap.channel),bumpMapUv:dt&&M(g.bumpMap.channel),normalMapUv:ft&&M(g.normalMap.channel),displacementMapUv:Ot&&M(g.displacementMap.channel),emissiveMapUv:Ct&&M(g.emissiveMap.channel),metalnessMapUv:D&&M(g.metalnessMap.channel),roughnessMapUv:P&&M(g.roughnessMap.channel),anisotropyMapUv:_t&&M(g.anisotropyMap.channel),clearcoatMapUv:Mt&&M(g.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&M(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&M(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&M(g.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&M(g.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&M(g.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&M(g.sheenRoughnessMap.channel),specularMapUv:wt&&M(g.specularMap.channel),specularColorMapUv:vt&&M(g.specularColorMap.channel),specularIntensityMapUv:O&&M(g.specularIntensityMap.channel),transmissionMapUv:ut&&M(g.transmissionMap.channel),thicknessMapUv:At&&M(g.thicknessMap.channel),alphaMapUv:lt&&M(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ft||W),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Rt,vertexUv3s:Yt,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(U||lt),fog:!!L,useFog:g.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ct,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:U&&g.map.isVideoTexture===!0&&Qt.getTransfer(g.map.colorSpace)===te,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ke,flipSided:g.side===Pe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:gt&&g.extensions.derivatives===!0,extensionFragDepth:gt&&g.extensions.fragDepth===!0,extensionDrawBuffers:gt&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&g.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()}}function h(g){const _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(const w in g.defines)_.push(w),_.push(g.defines[w]);return g.isRawShaderMaterial===!1&&(y(_,g),x(_,g),_.push(i.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function y(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function x(g,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),g.push(o.mask)}function b(g){const _=v[g.type];let w;if(_){const R=gn[_];w=Ad.clone(R.uniforms)}else w=g.uniforms;return w}function T(g,_){let w;for(let R=0,z=c.length;R<z;R++){const L=c[R];if(L.cacheKey===_){w=L,++w.usedTimes;break}}return w===void 0&&(w=new z_(i,_,g,s),c.push(w)),w}function A(g){if(--g.usedTimes===0){const _=c.indexOf(g);c[_]=c[c.length-1],c.pop(),g.destroy()}}function E(g){l.remove(g)}function S(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:T,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:S}}function W_(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function X_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,m,v,M,p){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:M,group:p},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=M,h.group=p),t++,h}function o(f,d,m,v,M,p){const h=a(f,d,m,v,M,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(f,d,m,v,M,p){const h=a(f,d,m,v,M,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||X_),n.length>1&&n.sort(d||Rc),r.length>1&&r.sort(d||Rc)}function u(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function j_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Pc,i.set(n,[a])):r>=s.length?(a=new Pc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Gt};break;case"SpotLight":e={position:new H,direction:new H,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function q_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $_=0;function K_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z_(i,t){const e=new Y_,n=q_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new Jt,o=new Jt;function l(u,f){let d=0,m=0,v=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,p=0,h=0,y=0,x=0,b=0,T=0,A=0,E=0,S=0,g=0;u.sort(K_);const _=f===!0?Math.PI:1;for(let R=0,z=u.length;R<z;R++){const L=u[R],F=L.color,N=L.intensity,k=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*N*_,m+=F.g*N*_,v+=F.b*N*_;else if(L.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(L.sh.coefficients[j],N);g++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*_),L.castShadow){const Y=L.shadow,st=n.get(L);st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,r.directionalShadow[M]=st,r.directionalShadowMap[M]=q,r.directionalShadowMatrix[M]=L.shadow.matrix,b++}r.directional[M]=j,M++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(F).multiplyScalar(N*_),j.distance=k,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,r.spot[h]=j;const Y=L.shadow;if(L.map&&(r.spotLightMap[E]=L.map,E++,Y.updateMatrices(L),L.castShadow&&S++),r.spotLightMatrix[h]=Y.matrix,L.castShadow){const st=n.get(L);st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,r.spotShadow[h]=st,r.spotShadowMap[h]=q,A++}h++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(F).multiplyScalar(N),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=j,y++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*_),j.distance=L.distance,j.decay=L.decay,L.castShadow){const Y=L.shadow,st=n.get(L);st.shadowBias=Y.bias,st.shadowNormalBias=Y.normalBias,st.shadowRadius=Y.radius,st.shadowMapSize=Y.mapSize,st.shadowCameraNear=Y.camera.near,st.shadowCameraFar=Y.camera.far,r.pointShadow[p]=st,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=L.shadow.matrix,T++}r.point[p]=j,p++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(N*_),j.groundColor.copy(L.groundColor).multiplyScalar(N*_),r.hemi[x]=j,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_FLOAT_1,r.rectAreaLTC2=pt.LTC_FLOAT_2):(r.rectAreaLTC1=pt.LTC_HALF_1,r.rectAreaLTC2=pt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_FLOAT_1,r.rectAreaLTC2=pt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pt.LTC_HALF_1,r.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const w=r.hash;(w.directionalLength!==M||w.pointLength!==p||w.spotLength!==h||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==b||w.numPointShadows!==T||w.numSpotShadows!==A||w.numSpotMaps!==E||w.numLightProbes!==g)&&(r.directional.length=M,r.spot.length=h,r.rectArea.length=y,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=A+E-S,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=g,w.directionalLength=M,w.pointLength=p,w.spotLength=h,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=b,w.numPointShadows=T,w.numSpotShadows=A,w.numSpotMaps=E,w.numLightProbes=g,r.version=$_++)}function c(u,f){let d=0,m=0,v=0,M=0,p=0;const h=f.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const b=u[y];if(b.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),d++}else if(b.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),v++}else if(b.isRectAreaLight){const T=r.rectArea[M];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),M++}else if(b.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Lc(i,t){const e=new Z_(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function J_(i,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Lc(i,t),e.set(s,[l])):a>=o.length?(l=new Lc(i,t),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class hh extends _r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Q_ extends _r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n0(i,t,e){let n=new Ka;const r=new Lt,s=new Lt,a=new ee,o=new hh({depthPacking:Vu}),l=new Q_,c={},u=e.maxTextureSize,f={[xn]:Pe,[Pe]:xn,[Ke]:Ke},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:t0,fragmentShader:e0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ti;v.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new pn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let h=this.type;this.render=function(A,E,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const g=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),R=i.state;R.setBlending(ti),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const z=h!==In&&this.type===In,L=h===In&&this.type!==In;for(let F=0,N=A.length;F<N;F++){const k=A[F],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const j=q.getFrameExtents();if(r.multiply(j),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,q.mapSize.y=s.y)),q.map===null||z===!0||L===!0){const st=this.type!==In?{minFilter:Me,magFilter:Me}:{};q.map!==null&&q.map.dispose(),q.map=new Si(r.x,r.y,st),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Y=q.getViewportCount();for(let st=0;st<Y;st++){const ct=q.getViewport(st);a.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),R.viewport(a),q.updateMatrices(k,st),n=q.getFrustum(),b(E,S,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===In&&y(q,S),q.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(g,_,w)};function y(A,E){const S=t.update(M);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Si(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,S,d,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,S,m,M,null)}function x(A,E,S,g){let _=null;const w=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)_=w;else if(_=S.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const R=_.uuid,z=E.uuid;let L=c[R];L===void 0&&(L={},c[R]=L);let F=L[z];F===void 0&&(F=_.clone(),L[z]=F,E.addEventListener("dispose",T)),_=F}if(_.visible=E.visible,_.wireframe=E.wireframe,g===In?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:f[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,S.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const R=i.properties.get(_);R.light=S}return _}function b(A,E,S,g,_){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===In)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const z=t.update(A),L=A.material;if(Array.isArray(L)){const F=z.groups;for(let N=0,k=F.length;N<k;N++){const q=F[N],j=L[q.materialIndex];if(j&&j.visible){const Y=x(A,j,g,_);A.onBeforeShadow(i,A,E,S,z,Y,q),i.renderBufferDirect(S,null,z,Y,A,q),A.onAfterShadow(i,A,E,S,z,Y,q)}}}else if(L.visible){const F=x(A,L,g,_);A.onBeforeShadow(i,A,E,S,z,F,null),i.renderBufferDirect(S,null,z,F,A,null),A.onAfterShadow(i,A,E,S,z,F,null)}}const R=A.children;for(let z=0,L=R.length;z<L;z++)b(R[z],E,S,g,_)}function T(A){A.target.removeEventListener("dispose",T);for(const S in c){const g=c[S],_=A.target.uuid;_ in g&&(g[_].dispose(),delete g[_])}}}function i0(i,t,e){const n=e.isWebGL2;function r(){let G=!1;const ht=new ee;let gt=null;const Dt=new ee(0,0,0,0);return{setMask:function(Rt){gt!==Rt&&!G&&(i.colorMask(Rt,Rt,Rt,Rt),gt=Rt)},setLocked:function(Rt){G=Rt},setClear:function(Rt,Yt,qt,oe,ue){ue===!0&&(Rt*=oe,Yt*=oe,qt*=oe),ht.set(Rt,Yt,qt,oe),Dt.equals(ht)===!1&&(i.clearColor(Rt,Yt,qt,oe),Dt.copy(ht))},reset:function(){G=!1,gt=null,Dt.set(-1,0,0,0)}}}function s(){let G=!1,ht=null,gt=null,Dt=null;return{setTest:function(Rt){Rt?C(i.DEPTH_TEST):U(i.DEPTH_TEST)},setMask:function(Rt){ht!==Rt&&!G&&(i.depthMask(Rt),ht=Rt)},setFunc:function(Rt){if(gt!==Rt){switch(Rt){case ff:i.depthFunc(i.NEVER);break;case df:i.depthFunc(i.ALWAYS);break;case pf:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case mf:i.depthFunc(i.EQUAL);break;case gf:i.depthFunc(i.GEQUAL);break;case _f:i.depthFunc(i.GREATER);break;case vf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Rt}},setLocked:function(Rt){G=Rt},setClear:function(Rt){Dt!==Rt&&(i.clearDepth(Rt),Dt=Rt)},reset:function(){G=!1,ht=null,gt=null,Dt=null}}}function a(){let G=!1,ht=null,gt=null,Dt=null,Rt=null,Yt=null,qt=null,oe=null,ue=null;return{setTest:function($t){G||($t?C(i.STENCIL_TEST):U(i.STENCIL_TEST))},setMask:function($t){ht!==$t&&!G&&(i.stencilMask($t),ht=$t)},setFunc:function($t,de,mn){(gt!==$t||Dt!==de||Rt!==mn)&&(i.stencilFunc($t,de,mn),gt=$t,Dt=de,Rt=mn)},setOp:function($t,de,mn){(Yt!==$t||qt!==de||oe!==mn)&&(i.stencilOp($t,de,mn),Yt=$t,qt=de,oe=mn)},setLocked:function($t){G=$t},setClear:function($t){ue!==$t&&(i.clearStencil($t),ue=$t)},reset:function(){G=!1,ht=null,gt=null,Dt=null,Rt=null,Yt=null,qt=null,oe=null,ue=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,M=[],p=null,h=!1,y=null,x=null,b=null,T=null,A=null,E=null,S=null,g=new Gt(0,0,0),_=0,w=!1,R=null,z=null,L=null,F=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=j>=2);let st=null,ct={};const $=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),mt=new ee().fromArray($),St=new ee().fromArray(it);function Et(G,ht,gt,Dt){const Rt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(G,Yt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<gt;qt++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(ht+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Yt}const tt={};tt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(tt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),C(i.DEPTH_TEST),l.setFunc(qs),Ct(!1),D(fl),C(i.CULL_FACE),ft(ti);function C(G){d[G]!==!0&&(i.enable(G),d[G]=!0)}function U(G){d[G]!==!1&&(i.disable(G),d[G]=!1)}function V(G,ht){return m[G]!==ht?(i.bindFramebuffer(G,ht),m[G]=ht,n&&(G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ht),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function B(G,ht){let gt=M,Dt=!1;if(G)if(gt=v.get(ht),gt===void 0&&(gt=[],v.set(ht,gt)),G.isWebGLMultipleRenderTargets){const Rt=G.texture;if(gt.length!==Rt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,qt=Rt.length;Yt<qt;Yt++)gt[Yt]=i.COLOR_ATTACHMENT0+Yt;gt.length=Rt.length,Dt=!0}}else gt[0]!==i.COLOR_ATTACHMENT0&&(gt[0]=i.COLOR_ATTACHMENT0,Dt=!0);else gt[0]!==i.BACK&&(gt[0]=i.BACK,Dt=!0);Dt&&(e.isWebGL2?i.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function nt(G){return p!==G?(i.useProgram(G),p=G,!0):!1}const Q={[di]:i.FUNC_ADD,[Kh]:i.FUNC_SUBTRACT,[Zh]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[gl]=i.MIN,Q[_l]=i.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(Q[gl]=G.MIN_EXT,Q[_l]=G.MAX_EXT)}const dt={[Jh]:i.ZERO,[Qh]:i.ONE,[tf]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[af]:i.SRC_ALPHA_SATURATE,[sf]:i.DST_COLOR,[nf]:i.DST_ALPHA,[ef]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[of]:i.ONE_MINUS_DST_COLOR,[rf]:i.ONE_MINUS_DST_ALPHA,[lf]:i.CONSTANT_COLOR,[cf]:i.ONE_MINUS_CONSTANT_COLOR,[uf]:i.CONSTANT_ALPHA,[hf]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(G,ht,gt,Dt,Rt,Yt,qt,oe,ue,$t){if(G===ti){h===!0&&(U(i.BLEND),h=!1);return}if(h===!1&&(C(i.BLEND),h=!0),G!==$h){if(G!==y||$t!==w){if((x!==di||A!==di)&&(i.blendEquation(i.FUNC_ADD),x=di,A=di),$t)switch(G){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,T=null,E=null,S=null,g.set(0,0,0),_=0,y=G,w=$t}return}Rt=Rt||ht,Yt=Yt||gt,qt=qt||Dt,(ht!==x||Rt!==A)&&(i.blendEquationSeparate(Q[ht],Q[Rt]),x=ht,A=Rt),(gt!==b||Dt!==T||Yt!==E||qt!==S)&&(i.blendFuncSeparate(dt[gt],dt[Dt],dt[Yt],dt[qt]),b=gt,T=Dt,E=Yt,S=qt),(oe.equals(g)===!1||ue!==_)&&(i.blendColor(oe.r,oe.g,oe.b,ue),g.copy(oe),_=ue),y=G,w=!1}function Ot(G,ht){G.side===Ke?U(i.CULL_FACE):C(i.CULL_FACE);let gt=G.side===Pe;ht&&(gt=!gt),Ct(gt),G.blending===lr&&G.transparent===!1?ft(ti):ft(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);const Dt=G.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),W(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):U(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(G){R!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),R=G)}function D(G){G!==Yh?(C(i.CULL_FACE),G!==z&&(G===fl?i.cullFace(i.BACK):G===qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):U(i.CULL_FACE),z=G}function P(G){G!==L&&(q&&i.lineWidth(G),L=G)}function W(G,ht,gt){G?(C(i.POLYGON_OFFSET_FILL),(F!==ht||N!==gt)&&(i.polygonOffset(ht,gt),F=ht,N=gt)):U(i.POLYGON_OFFSET_FILL)}function et(G){G?C(i.SCISSOR_TEST):U(i.SCISSOR_TEST)}function rt(G){G===void 0&&(G=i.TEXTURE0+k-1),st!==G&&(i.activeTexture(G),st=G)}function at(G,ht,gt){gt===void 0&&(st===null?gt=i.TEXTURE0+k-1:gt=st);let Dt=ct[gt];Dt===void 0&&(Dt={type:void 0,texture:void 0},ct[gt]=Dt),(Dt.type!==G||Dt.texture!==ht)&&(st!==gt&&(i.activeTexture(gt),st=gt),i.bindTexture(G,ht||tt[G]),Dt.type=G,Dt.texture=ht)}function bt(){const G=ct[st];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(G){mt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),mt.copy(G))}function ut(G){St.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),St.copy(G))}function At(G,ht){let gt=f.get(ht);gt===void 0&&(gt=new WeakMap,f.set(ht,gt));let Dt=gt.get(G);Dt===void 0&&(Dt=i.getUniformBlockIndex(ht,G.name),gt.set(G,Dt))}function yt(G,ht){const Dt=f.get(ht).get(G);u.get(ht)!==Dt&&(i.uniformBlockBinding(ht,Dt,G.__bindingPointIndex),u.set(ht,Dt))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},st=null,ct={},m={},v=new WeakMap,M=[],p=null,h=!1,y=null,x=null,b=null,T=null,A=null,E=null,S=null,g=new Gt(0,0,0),_=0,w=!1,R=null,z=null,L=null,F=null,N=null,mt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:C,disable:U,bindFramebuffer:V,drawBuffers:B,useProgram:nt,setBlending:ft,setMaterial:Ot,setFlipSided:Ct,setCullFace:D,setLineWidth:P,setPolygonOffset:W,setScissorTest:et,activeTexture:rt,bindTexture:at,unbindTexture:bt,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:wt,texImage3D:vt,updateUBOMapping:At,uniformBlockBinding:yt,texStorage2D:kt,texStorage3D:Nt,texSubImage2D:Pt,texSubImage3D:zt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Kt,scissor:O,viewport:ut,reset:lt}}function r0(i,t,e,n,r,s,a){const o=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,P){return m?new OffscreenCanvas(D,P):Gr("canvas")}function M(D,P,W,et){let rt=1;if((D.width>et||D.height>et)&&(rt=et/Math.max(D.width,D.height)),rt<1||P===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const at=P?to:Math.floor,bt=at(rt*D.width),_t=at(rt*D.height);f===void 0&&(f=v(bt,_t));const Mt=W?v(bt,_t):f;return Mt.width=bt,Mt.height=_t,Mt.getContext("2d").drawImage(D,0,0,bt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+bt+"x"+_t+")."),Mt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function p(D){return Da(D.width)&&Da(D.height)}function h(D){return o?!1:D.wrapS!==ke||D.wrapT!==ke||D.minFilter!==Me&&D.minFilter!==Se}function y(D,P){return D.generateMipmaps&&P&&D.minFilter!==Me&&D.minFilter!==Se}function x(D){i.generateMipmap(D)}function b(D,P,W,et,rt=!1){if(o===!1)return P;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let at=P;if(P===i.RED&&(W===i.FLOAT&&(at=i.R32F),W===i.HALF_FLOAT&&(at=i.R16F),W===i.UNSIGNED_BYTE&&(at=i.R8)),P===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(at=i.R8UI),W===i.UNSIGNED_SHORT&&(at=i.R16UI),W===i.UNSIGNED_INT&&(at=i.R32UI),W===i.BYTE&&(at=i.R8I),W===i.SHORT&&(at=i.R16I),W===i.INT&&(at=i.R32I)),P===i.RG&&(W===i.FLOAT&&(at=i.RG32F),W===i.HALF_FLOAT&&(at=i.RG16F),W===i.UNSIGNED_BYTE&&(at=i.RG8)),P===i.RGBA){const bt=rt?Ks:Qt.getTransfer(et);W===i.FLOAT&&(at=i.RGBA32F),W===i.HALF_FLOAT&&(at=i.RGBA16F),W===i.UNSIGNED_BYTE&&(at=bt===te?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function T(D,P,W){return y(D,W)===!0||D.isFramebufferTexture&&D.minFilter!==Me&&D.minFilter!==Se?Math.log2(Math.max(P.width,P.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?P.mipmaps.length:1}function A(D){return D===Me||D===vl||D===So?i.NEAREST:i.LINEAR}function E(D){const P=D.target;P.removeEventListener("dispose",E),g(P),P.isVideoTexture&&u.delete(P)}function S(D){const P=D.target;P.removeEventListener("dispose",S),w(P)}function g(D){const P=n.get(D);if(P.__webglInit===void 0)return;const W=D.source,et=d.get(W);if(et){const rt=et[P.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&_(D),Object.keys(et).length===0&&d.delete(W)}n.remove(D)}function _(D){const P=n.get(D);i.deleteTexture(P.__webglTexture);const W=D.source,et=d.get(W);delete et[P.__cacheKey],a.memory.textures--}function w(D){const P=D.texture,W=n.get(D),et=n.get(P);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(W.__webglFramebuffer[rt]))for(let at=0;at<W.__webglFramebuffer[rt].length;at++)i.deleteFramebuffer(W.__webglFramebuffer[rt][at]);else i.deleteFramebuffer(W.__webglFramebuffer[rt]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[rt])}else{if(Array.isArray(W.__webglFramebuffer))for(let rt=0;rt<W.__webglFramebuffer.length;rt++)i.deleteFramebuffer(W.__webglFramebuffer[rt]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let rt=0;rt<W.__webglColorRenderbuffer.length;rt++)W.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[rt]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let rt=0,at=P.length;rt<at;rt++){const bt=n.get(P[rt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(P[rt])}n.remove(P),n.remove(D)}let R=0;function z(){R=0}function L(){const D=R;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),R+=1,D}function F(D){const P=[];return P.push(D.wrapS),P.push(D.wrapT),P.push(D.wrapR||0),P.push(D.magFilter),P.push(D.minFilter),P.push(D.anisotropy),P.push(D.internalFormat),P.push(D.format),P.push(D.type),P.push(D.generateMipmaps),P.push(D.premultiplyAlpha),P.push(D.flipY),P.push(D.unpackAlignment),P.push(D.colorSpace),P.join()}function N(D,P){const W=n.get(D);if(D.isVideoTexture&&Ot(D),D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){const et=D.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(W,D,P);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+P)}function k(D,P){const W=n.get(D);if(D.version>0&&W.__version!==D.version){mt(W,D,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+P)}function q(D,P){const W=n.get(D);if(D.version>0&&W.__version!==D.version){mt(W,D,P);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+P)}function j(D,P){const W=n.get(D);if(D.version>0&&W.__version!==D.version){St(W,D,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+P)}const Y={[Ra]:i.REPEAT,[ke]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},st={[Me]:i.NEAREST,[vl]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[Se]:i.LINEAR,[Tf]:i.LINEAR_MIPMAP_NEAREST,[fr]:i.LINEAR_MIPMAP_LINEAR},ct={[Of]:i.NEVER,[kf]:i.ALWAYS,[Bf]:i.LESS,[ku]:i.LEQUAL,[zf]:i.EQUAL,[Gf]:i.GEQUAL,[Hf]:i.GREATER,[Vf]:i.NOTEQUAL};function $(D,P,W){if(W?(i.texParameteri(D,i.TEXTURE_WRAP_S,Y[P.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Y[P.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Y[P.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,st[P.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,st[P.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==ke||P.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,A(P.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,A(P.minFilter)),P.minFilter!==Me&&P.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ct[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(P.magFilter===Me||P.minFilter!==So&&P.minFilter!==fr||P.type===dn&&t.has("OES_texture_float_linear")===!1||o===!1&&P.type===Fn&&t.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(D,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function it(D,P){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,P.addEventListener("dispose",E));const et=P.source;let rt=d.get(et);rt===void 0&&(rt={},d.set(et,rt));const at=F(P);if(at!==D.__cacheKey){rt[at]===void 0&&(rt[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),rt[at].usedTimes++;const bt=rt[D.__cacheKey];bt!==void 0&&(rt[D.__cacheKey].usedTimes--,bt.usedTimes===0&&_(P)),D.__cacheKey=at,D.__webglTexture=rt[at].texture}return W}function mt(D,P,W){let et=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(et=i.TEXTURE_3D);const rt=it(D,P),at=P.source;e.bindTexture(et,D.__webglTexture,i.TEXTURE0+W);const bt=n.get(at);if(at.version!==bt.__version||rt===!0){e.activeTexture(i.TEXTURE0+W);const _t=Qt.getPrimaries(Qt.workingColorSpace),Mt=P.colorSpace===Ze?null:Qt.getPrimaries(P.colorSpace),Pt=P.colorSpace===Ze||_t===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const zt=h(P)&&p(P.image)===!1;let ot=M(P.image,zt,!1,r.maxTextureSize);ot=Ct(P,ot);const Kt=p(ot)||o,kt=s.convert(P.format,P.colorSpace);let Nt=s.convert(P.type),wt=b(P.internalFormat,kt,Nt,P.colorSpace,P.isVideoTexture);$(et,P,Kt);let vt;const O=P.mipmaps,ut=o&&P.isVideoTexture!==!0&&wt!==zu,At=bt.__version===void 0||rt===!0,yt=T(P,ot,Kt);if(P.isDepthTexture)wt=i.DEPTH_COMPONENT,o?P.type===dn?wt=i.DEPTH_COMPONENT32F:P.type===Zn?wt=i.DEPTH_COMPONENT24:P.type===_i?wt=i.DEPTH24_STENCIL8:wt=i.DEPTH_COMPONENT16:P.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===vi&&wt===i.DEPTH_COMPONENT&&P.type!==Ya&&P.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Zn,Nt=s.convert(P.type)),P.format===dr&&wt===i.DEPTH_COMPONENT&&(wt=i.DEPTH_STENCIL,P.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=_i,Nt=s.convert(P.type))),At&&(ut?e.texStorage2D(i.TEXTURE_2D,1,wt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,wt,ot.width,ot.height,0,kt,Nt,null));else if(P.isDataTexture)if(O.length>0&&Kt){ut&&At&&e.texStorage2D(i.TEXTURE_2D,yt,wt,O[0].width,O[0].height);for(let lt=0,G=O.length;lt<G;lt++)vt=O[lt],ut?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,kt,Nt,vt.data):e.texImage2D(i.TEXTURE_2D,lt,wt,vt.width,vt.height,0,kt,Nt,vt.data);P.generateMipmaps=!1}else ut?(At&&e.texStorage2D(i.TEXTURE_2D,yt,wt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,kt,Nt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,wt,ot.width,ot.height,0,kt,Nt,ot.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ut&&At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,wt,O[0].width,O[0].height,ot.depth);for(let lt=0,G=O.length;lt<G;lt++)vt=O[lt],P.format!==hn?kt!==null?ut?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,ot.depth,kt,vt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,wt,vt.width,vt.height,ot.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,ot.depth,kt,Nt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,wt,vt.width,vt.height,ot.depth,0,kt,Nt,vt.data)}else{ut&&At&&e.texStorage2D(i.TEXTURE_2D,yt,wt,O[0].width,O[0].height);for(let lt=0,G=O.length;lt<G;lt++)vt=O[lt],P.format!==hn?kt!==null?ut?e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,kt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,wt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,kt,Nt,vt.data):e.texImage2D(i.TEXTURE_2D,lt,wt,vt.width,vt.height,0,kt,Nt,vt.data)}else if(P.isDataArrayTexture)ut?(At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,wt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,kt,Nt,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,ot.width,ot.height,ot.depth,0,kt,Nt,ot.data);else if(P.isData3DTexture)ut?(At&&e.texStorage3D(i.TEXTURE_3D,yt,wt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,kt,Nt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,wt,ot.width,ot.height,ot.depth,0,kt,Nt,ot.data);else if(P.isFramebufferTexture){if(At)if(ut)e.texStorage2D(i.TEXTURE_2D,yt,wt,ot.width,ot.height);else{let lt=ot.width,G=ot.height;for(let ht=0;ht<yt;ht++)e.texImage2D(i.TEXTURE_2D,ht,wt,lt,G,0,kt,Nt,null),lt>>=1,G>>=1}}else if(O.length>0&&Kt){ut&&At&&e.texStorage2D(i.TEXTURE_2D,yt,wt,O[0].width,O[0].height);for(let lt=0,G=O.length;lt<G;lt++)vt=O[lt],ut?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,kt,Nt,vt):e.texImage2D(i.TEXTURE_2D,lt,wt,kt,Nt,vt);P.generateMipmaps=!1}else ut?(At&&e.texStorage2D(i.TEXTURE_2D,yt,wt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Nt,ot)):e.texImage2D(i.TEXTURE_2D,0,wt,kt,Nt,ot);y(P,Kt)&&x(et),bt.__version=at.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function St(D,P,W){if(P.image.length!==6)return;const et=it(D,P),rt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+W);const at=n.get(rt);if(rt.version!==at.__version||et===!0){e.activeTexture(i.TEXTURE0+W);const bt=Qt.getPrimaries(Qt.workingColorSpace),_t=P.colorSpace===Ze?null:Qt.getPrimaries(P.colorSpace),Mt=P.colorSpace===Ze||bt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Pt=P.isCompressedTexture||P.image[0].isCompressedTexture,zt=P.image[0]&&P.image[0].isDataTexture,ot=[];for(let lt=0;lt<6;lt++)!Pt&&!zt?ot[lt]=M(P.image[lt],!1,!0,r.maxCubemapSize):ot[lt]=zt?P.image[lt].image:P.image[lt],ot[lt]=Ct(P,ot[lt]);const Kt=ot[0],kt=p(Kt)||o,Nt=s.convert(P.format,P.colorSpace),wt=s.convert(P.type),vt=b(P.internalFormat,Nt,wt,P.colorSpace),O=o&&P.isVideoTexture!==!0,ut=at.__version===void 0||et===!0;let At=T(P,Kt,kt);$(i.TEXTURE_CUBE_MAP,P,kt);let yt;if(Pt){O&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,vt,Kt.width,Kt.height);for(let lt=0;lt<6;lt++){yt=ot[lt].mipmaps;for(let G=0;G<yt.length;G++){const ht=yt[G];P.format!==hn?Nt!==null?O?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,G,0,0,ht.width,ht.height,Nt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,G,vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,G,0,0,ht.width,ht.height,Nt,wt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,G,vt,ht.width,ht.height,0,Nt,wt,ht.data)}}}else{yt=P.mipmaps,O&&ut&&(yt.length>0&&At++,e.texStorage2D(i.TEXTURE_CUBE_MAP,At,vt,ot[0].width,ot[0].height));for(let lt=0;lt<6;lt++)if(zt){O?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,ot[lt].width,ot[lt].height,Nt,wt,ot[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,vt,ot[lt].width,ot[lt].height,0,Nt,wt,ot[lt].data);for(let G=0;G<yt.length;G++){const gt=yt[G].image[lt].image;O?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,G+1,0,0,gt.width,gt.height,Nt,wt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,G+1,vt,gt.width,gt.height,0,Nt,wt,gt.data)}}else{O?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,wt,ot[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,vt,Nt,wt,ot[lt]);for(let G=0;G<yt.length;G++){const ht=yt[G];O?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,G+1,0,0,Nt,wt,ht.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,G+1,vt,Nt,wt,ht.image[lt])}}}y(P,kt)&&x(i.TEXTURE_CUBE_MAP),at.__version=rt.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function Et(D,P,W,et,rt,at){const bt=s.convert(W.format,W.colorSpace),_t=s.convert(W.type),Mt=b(W.internalFormat,bt,_t,W.colorSpace);if(!n.get(P).__hasExternalTextures){const zt=Math.max(1,P.width>>at),ot=Math.max(1,P.height>>at);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,at,Mt,zt,ot,P.depth,0,bt,_t,null):e.texImage2D(rt,at,Mt,zt,ot,0,bt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),ft(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,rt,n.get(W).__webglTexture,0,dt(P)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,rt,n.get(W).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(D,P,W){if(i.bindRenderbuffer(i.RENDERBUFFER,D),P.depthBuffer&&!P.stencilBuffer){let et=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||ft(P)){const rt=P.depthTexture;rt&&rt.isDepthTexture&&(rt.type===dn?et=i.DEPTH_COMPONENT32F:rt.type===Zn&&(et=i.DEPTH_COMPONENT24));const at=dt(P);ft(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,et,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,et,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(P.depthBuffer&&P.stencilBuffer){const et=dt(P);W&&ft(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,P.width,P.height):ft(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{const et=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let rt=0;rt<et.length;rt++){const at=et[rt],bt=s.convert(at.format,at.colorSpace),_t=s.convert(at.type),Mt=b(at.internalFormat,bt,_t,at.colorSpace),Pt=dt(P);W&&ft(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Mt,P.width,P.height):ft(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Mt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function C(D,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),N(P.depthTexture,0);const et=n.get(P.depthTexture).__webglTexture,rt=dt(P);if(P.depthTexture.format===vi)ft(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(P.depthTexture.format===dr)ft(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function U(D){const P=n.get(D),W=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!P.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");C(P.__webglFramebuffer,D)}else if(W){P.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[et]),P.__webglDepthbuffer[et]=i.createRenderbuffer(),tt(P.__webglDepthbuffer[et],D,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),tt(P.__webglDepthbuffer,D,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(D,P,W){const et=n.get(D);P!==void 0&&Et(et.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&U(D)}function B(D){const P=D.texture,W=n.get(D),et=n.get(P);D.addEventListener("dispose",S),D.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=P.version,a.memory.textures++);const rt=D.isWebGLCubeRenderTarget===!0,at=D.isWebGLMultipleRenderTargets===!0,bt=p(D)||o;if(rt){W.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(o&&P.mipmaps&&P.mipmaps.length>0){W.__webglFramebuffer[_t]=[];for(let Mt=0;Mt<P.mipmaps.length;Mt++)W.__webglFramebuffer[_t][Mt]=i.createFramebuffer()}else W.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(o&&P.mipmaps&&P.mipmaps.length>0){W.__webglFramebuffer=[];for(let _t=0;_t<P.mipmaps.length;_t++)W.__webglFramebuffer[_t]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(at)if(r.drawBuffers){const _t=D.texture;for(let Mt=0,Pt=_t.length;Mt<Pt;Mt++){const zt=n.get(_t[Mt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&ft(D)===!1){const _t=at?P:[P];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Mt=0;Mt<_t.length;Mt++){const Pt=_t[Mt];W.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Mt]);const zt=s.convert(Pt.format,Pt.colorSpace),ot=s.convert(Pt.type),Kt=b(Pt.internalFormat,zt,ot,Pt.colorSpace,D.isXRRenderTarget===!0),kt=dt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Kt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,W.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(W.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),$(i.TEXTURE_CUBE_MAP,P,bt);for(let _t=0;_t<6;_t++)if(o&&P.mipmaps&&P.mipmaps.length>0)for(let Mt=0;Mt<P.mipmaps.length;Mt++)Et(W.__webglFramebuffer[_t][Mt],D,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt);else Et(W.__webglFramebuffer[_t],D,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);y(P,bt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const _t=D.texture;for(let Mt=0,Pt=_t.length;Mt<Pt;Mt++){const zt=_t[Mt],ot=n.get(zt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),$(i.TEXTURE_2D,zt,bt),Et(W.__webglFramebuffer,D,zt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),y(zt,bt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?_t=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,et.__webglTexture),$(_t,P,bt),o&&P.mipmaps&&P.mipmaps.length>0)for(let Mt=0;Mt<P.mipmaps.length;Mt++)Et(W.__webglFramebuffer[Mt],D,P,i.COLOR_ATTACHMENT0,_t,Mt);else Et(W.__webglFramebuffer,D,P,i.COLOR_ATTACHMENT0,_t,0);y(P,bt)&&x(_t),e.unbindTexture()}D.depthBuffer&&U(D)}function nt(D){const P=p(D)||o,W=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let et=0,rt=W.length;et<rt;et++){const at=W[et];if(y(at,P)){const bt=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(at).__webglTexture;e.bindTexture(bt,_t),x(bt),e.unbindTexture()}}}function Q(D){if(o&&D.samples>0&&ft(D)===!1){const P=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],W=D.width,et=D.height;let rt=i.COLOR_BUFFER_BIT;const at=[],bt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(D),Mt=D.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Pt=0;Pt<P.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Pt=0;Pt<P.length;Pt++){at.push(i.COLOR_ATTACHMENT0+Pt),D.depthBuffer&&at.push(bt);const zt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(zt===!1&&(D.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),Mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Pt]),zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),Mt){const ot=n.get(P[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,W,et,0,0,W,et,rt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Pt=0;Pt<P.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Pt]);const zt=n.get(P[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function dt(D){return Math.min(r.maxSamples,D.samples)}function ft(D){const P=n.get(D);return o&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ot(D){const P=a.render.frame;u.get(D)!==P&&(u.set(D,P),D.update())}function Ct(D,P){const W=D.colorSpace,et=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===La||W!==yn&&W!==Ze&&(Qt.getTransfer(W)===te?o===!1?t.has("EXT_sRGB")===!0&&et===hn?(D.format=La,D.minFilter=Se,D.generateMipmaps=!1):P=ju.sRGBToLinear(P):(et!==hn||rt!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),P}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=V,this.setupRenderTarget=B,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ft}function s0(i,t,e){const n=e.isWebGL2;function r(s,a=Ze){let o;const l=Qt.getTransfer(a);if(s===ni)return i.UNSIGNED_BYTE;if(s===Uu)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Nu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===wf)return i.BYTE;if(s===Cf)return i.SHORT;if(s===Ya)return i.UNSIGNED_SHORT;if(s===Iu)return i.INT;if(s===Zn)return i.UNSIGNED_INT;if(s===dn)return i.FLOAT;if(s===Fn)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Rf)return i.ALPHA;if(s===hn)return i.RGBA;if(s===Pf)return i.LUMINANCE;if(s===Lf)return i.LUMINANCE_ALPHA;if(s===vi)return i.DEPTH_COMPONENT;if(s===dr)return i.DEPTH_STENCIL;if(s===La)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Df)return i.RED;if(s===Fu)return i.RED_INTEGER;if(s===If)return i.RG;if(s===Ou)return i.RG_INTEGER;if(s===Bu)return i.RGBA_INTEGER;if(s===Eo||s===bo||s===Ao||s===To)if(l===te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===To)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xl||s===yl||s===Ml||s===Sl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ml)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===El||s===bl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===El)return l===te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===bl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Al||s===Tl||s===wl||s===Cl||s===Rl||s===Pl||s===Ll||s===Dl||s===Il||s===Ul||s===Nl||s===Fl||s===Ol||s===Bl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Al)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ll)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Il)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ul)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ol)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bl)return l===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wo||s===zl||s===Hl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===wo)return l===te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Uf||s===Vl||s===Gl||s===kl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===wo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_i?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class o0 extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xs extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a0={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),h=this._getHandJoint(c,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class l0 extends Ai{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null;const M=e.getContextAttributes();let p=null,h=null;const y=[],x=[],b=new Lt;let T=null;const A=new $e;A.layers.enable(1),A.viewport=new ee;const E=new $e;E.layers.enable(2),E.viewport=new ee;const S=[A,E],g=new o0;g.layers.enable(1),g.layers.enable(2);let _=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=y[$];return it===void 0&&(it=new Ko,y[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=y[$];return it===void 0&&(it=new Ko,y[$]=it),it.getGripSpace()},this.getHand=function($){let it=y[$];return it===void 0&&(it=new Ko,y[$]=it),it.getHandSpace()};function R($){const it=x.indexOf($.inputSource);if(it===-1)return;const mt=y[it];mt!==void 0&&(mt.update($.inputSource,$.frame,c||a),mt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",L);for(let $=0;$<y.length;$++){const it=x[$];it!==null&&(x[$]=null,y[$].disconnect(it))}_=null,w=null,t.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",z),r.addEventListener("inputsourceschange",L),M.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(b),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const it={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Si(m.framebufferWidth,m.framebufferHeight,{format:hn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let it=null,mt=null,St=null;M.depth&&(St=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=M.stencil?dr:vi,mt=M.stencil?_i:Zn);const Et={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Et),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),h=new Si(d.textureWidth,d.textureHeight,{format:hn,type:ni,depthTexture:new sh(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const tt=t.properties.get(h);tt.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L($){for(let it=0;it<$.removed.length;it++){const mt=$.removed[it],St=x.indexOf(mt);St>=0&&(x[St]=null,y[St].disconnect(mt))}for(let it=0;it<$.added.length;it++){const mt=$.added[it];let St=x.indexOf(mt);if(St===-1){for(let tt=0;tt<y.length;tt++)if(tt>=x.length){x.push(mt),St=tt;break}else if(x[tt]===null){x[tt]=mt,St=tt;break}if(St===-1)break}const Et=y[St];Et&&Et.connect(mt)}}const F=new H,N=new H;function k($,it,mt){F.setFromMatrixPosition(it.matrixWorld),N.setFromMatrixPosition(mt.matrixWorld);const St=F.distanceTo(N),Et=it.projectionMatrix.elements,tt=mt.projectionMatrix.elements,C=Et[14]/(Et[10]-1),U=Et[14]/(Et[10]+1),V=(Et[9]+1)/Et[5],B=(Et[9]-1)/Et[5],nt=(Et[8]-1)/Et[0],Q=(tt[8]+1)/tt[0],dt=C*nt,ft=C*Q,Ot=St/(-nt+Q),Ct=Ot*-nt;it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ct),$.translateZ(Ot),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const D=C+Ot,P=U+Ot,W=dt-Ct,et=ft+(St-Ct),rt=V*U/P*D,at=B*U/P*D;$.projectionMatrix.makePerspective(W,et,rt,at,D,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function q($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;g.near=E.near=A.near=$.near,g.far=E.far=A.far=$.far,(_!==g.near||w!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),_=g.near,w=g.far);const it=$.parent,mt=g.cameras;q(g,it);for(let St=0;St<mt.length;St++)q(mt[St],it);mt.length===2?k(g,A,E):g.projectionMatrix.copy(A.projectionMatrix),j($,g,it)};function j($,it,mt){mt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)};let Y=null;function st($,it){if(u=it.getViewerPose(c||a),v=it,u!==null){const mt=u.views;m!==null&&(t.setRenderTargetFramebuffer(h,m.framebuffer),t.setRenderTarget(h));let St=!1;mt.length!==g.cameras.length&&(g.cameras.length=0,St=!0);for(let Et=0;Et<mt.length;Et++){const tt=mt[Et];let C=null;if(m!==null)C=m.getViewport(tt);else{const V=f.getViewSubImage(d,tt);C=V.viewport,Et===0&&(t.setRenderTargetTextures(h,V.colorTexture,d.ignoreDepthValues?void 0:V.depthStencilTexture),t.setRenderTarget(h))}let U=S[Et];U===void 0&&(U=new $e,U.layers.enable(Et),U.viewport=new ee,S[Et]=U),U.matrix.fromArray(tt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(tt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(C.x,C.y,C.width,C.height),Et===0&&(g.matrix.copy(U.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),St===!0&&g.cameras.push(U)}}for(let mt=0;mt<y.length;mt++){const St=x[mt],Et=y[mt];St!==null&&Et!==void 0&&Et.update(St,it,c||a)}Y&&Y($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),v=null}const ct=new ih;ct.setAnimationLoop(st),this.setAnimationLoop=function($){Y=$},this.dispose=function(){}}}function c0(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,th(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,y,x,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,y,x):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Pe&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Pe&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=t.get(h).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*x,e(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,y,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=x*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),t.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const y=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u0(i,t,e,n){let r={},s={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=r[y.id];b===void 0&&(v(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(y,T);const A=t.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function u(y){const x=f();y.__bindingPointIndex=x;const b=i.createBuffer(),T=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],b=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,E=b.length;A<E;A++){const S=Array.isArray(b[A])?b[A]:[b[A]];for(let g=0,_=S.length;g<_;g++){const w=S[g];if(m(w,A,g,T)===!0){const R=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let F=0;F<z.length;F++){const N=z[F],k=M(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,R+L,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,b,T){const A=y.value,E=x+"_"+b;if(T[E]===void 0)return typeof A=="number"||typeof A=="boolean"?T[E]=A:T[E]=A.clone(),!0;{const S=T[E];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return T[E]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function v(y){const x=y.uniforms;let b=0;const T=16;for(let E=0,S=x.length;E<S;E++){const g=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,w=g.length;_<w;_++){const R=g[_],z=Array.isArray(R.value)?R.value:[R.value];for(let L=0,F=z.length;L<F;L++){const N=z[L],k=M(N),q=b%T;q!==0&&T-q<k.boundary&&(b+=T-q),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=k.storage}}}const A=b%T;return A>0&&(b+=T-A),y.__size=b,y.__cache={},this}function M(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class fh{constructor(t={}){const{canvas:e=rd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),v=new Int32Array(4);let M=null,p=null;const h=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ce,this._useLegacyLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const x=this;let b=!1,T=0,A=0,E=null,S=-1,g=null;const _=new ee,w=new ee;let R=null;const z=new Gt(0);let L=0,F=e.width,N=e.height,k=1,q=null,j=null;const Y=new ee(0,0,F,N),st=new ee(0,0,F,N);let ct=!1;const $=new Ka;let it=!1,mt=!1,St=null;const Et=new Jt,tt=new Lt,C=new H,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return E===null?k:1}let B=n;function nt(I,X){for(let Z=0;Z<I.length;Z++){const J=I[Z],K=e.getContext(J,X);if(K!==null)return K}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ja}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",ht,!1),B===null){const X=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&X.shift(),B=nt(X,I),B===null)throw nt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Q,dt,ft,Ot,Ct,D,P,W,et,rt,at,bt,_t,Mt,Pt,zt,ot,Kt,kt,Nt,wt,vt,O,ut;function At(){Q=new Mg(B),dt=new mg(B,Q,t),Q.init(dt),vt=new s0(B,Q,dt),ft=new i0(B,Q,dt),Ot=new bg(B),Ct=new W_,D=new r0(B,Q,ft,Ct,dt,vt,Ot),P=new _g(x),W=new yg(x),et=new Dd(B,dt),O=new dg(B,Q,et,dt),rt=new Sg(B,et,Ot,O),at=new Cg(B,rt,et,Ot),kt=new wg(B,dt,D),zt=new gg(Ct),bt=new k_(x,P,W,Q,dt,O,zt),_t=new c0(x,Ct),Mt=new j_,Pt=new J_(Q,dt),Kt=new fg(x,P,W,ft,at,d,l),ot=new n0(x,at,dt),ut=new u0(B,Ot,dt,ft),Nt=new pg(B,Q,Ot,dt),wt=new Eg(B,Q,Ot,dt),Ot.programs=bt.programs,x.capabilities=dt,x.extensions=Q,x.properties=Ct,x.renderLists=Mt,x.shadowMap=ot,x.state=ft,x.info=Ot}At();const yt=new l0(x,B);this.xr=yt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=Q.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Q.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(F,N,!1))},this.getSize=function(I){return I.set(F,N)},this.setSize=function(I,X,Z=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,N=X,e.width=Math.floor(I*k),e.height=Math.floor(X*k),Z===!0&&(e.style.width=I+"px",e.style.height=X+"px"),this.setViewport(0,0,I,X)},this.getDrawingBufferSize=function(I){return I.set(F*k,N*k).floor()},this.setDrawingBufferSize=function(I,X,Z){F=I,N=X,k=Z,e.width=Math.floor(I*Z),e.height=Math.floor(X*Z),this.setViewport(0,0,I,X)},this.getCurrentViewport=function(I){return I.copy(_)},this.getViewport=function(I){return I.copy(Y)},this.setViewport=function(I,X,Z,J){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,X,Z,J),ft.viewport(_.copy(Y).multiplyScalar(k).floor())},this.getScissor=function(I){return I.copy(st)},this.setScissor=function(I,X,Z,J){I.isVector4?st.set(I.x,I.y,I.z,I.w):st.set(I,X,Z,J),ft.scissor(w.copy(st).multiplyScalar(k).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(I){ft.setScissorTest(ct=I)},this.setOpaqueSort=function(I){q=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(I=!0,X=!0,Z=!0){let J=0;if(I){let K=!1;if(E!==null){const xt=E.texture.format;K=xt===Bu||xt===Ou||xt===Fu}if(K){const xt=E.texture.type,Tt=xt===ni||xt===Zn||xt===Ya||xt===_i||xt===Uu||xt===Nu,It=Kt.getClearColor(),Ft=Kt.getClearAlpha(),Wt=It.r,Bt=It.g,Ht=It.b;Tt?(m[0]=Wt,m[1]=Bt,m[2]=Ht,m[3]=Ft,B.clearBufferuiv(B.COLOR,0,m)):(v[0]=Wt,v[1]=Bt,v[2]=Ht,v[3]=Ft,B.clearBufferiv(B.COLOR,0,v))}else J|=B.COLOR_BUFFER_BIT}X&&(J|=B.DEPTH_BUFFER_BIT),Z&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Mt.dispose(),Pt.dispose(),Ct.dispose(),P.dispose(),W.dispose(),at.dispose(),O.dispose(),ut.dispose(),bt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",ue),yt.removeEventListener("sessionend",$t),St&&(St.dispose(),St=null),de.stop()};function lt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const I=Ot.autoReset,X=ot.enabled,Z=ot.autoUpdate,J=ot.needsUpdate,K=ot.type;At(),Ot.autoReset=I,ot.enabled=X,ot.autoUpdate=Z,ot.needsUpdate=J,ot.type=K}function ht(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function gt(I){const X=I.target;X.removeEventListener("dispose",gt),Dt(X)}function Dt(I){Rt(I),Ct.remove(I)}function Rt(I){const X=Ct.get(I).programs;X!==void 0&&(X.forEach(function(Z){bt.releaseProgram(Z)}),I.isShaderMaterial&&bt.releaseShaderCache(I))}this.renderBufferDirect=function(I,X,Z,J,K,xt){X===null&&(X=U);const Tt=K.isMesh&&K.matrixWorld.determinant()<0,It=kh(I,X,Z,J,K);ft.setMaterial(J,Tt);let Ft=Z.index,Wt=1;if(J.wireframe===!0){if(Ft=rt.getWireframeAttribute(Z),Ft===void 0)return;Wt=2}const Bt=Z.drawRange,Ht=Z.attributes.position;let he=Bt.start*Wt,Be=(Bt.start+Bt.count)*Wt;xt!==null&&(he=Math.max(he,xt.start*Wt),Be=Math.min(Be,(xt.start+xt.count)*Wt)),Ft!==null?(he=Math.max(he,0),Be=Math.min(Be,Ft.count)):Ht!=null&&(he=Math.max(he,0),Be=Math.min(Be,Ht.count));const xe=Be-he;if(xe<0||xe===1/0)return;O.setup(K,J,It,Z,Ft);let En,se=Nt;if(Ft!==null&&(En=et.get(Ft),se=wt,se.setIndex(En)),K.isMesh)J.wireframe===!0?(ft.setLineWidth(J.wireframeLinewidth*V()),se.setMode(B.LINES)):se.setMode(B.TRIANGLES);else if(K.isLine){let jt=J.linewidth;jt===void 0&&(jt=1),ft.setLineWidth(jt*V()),K.isLineSegments?se.setMode(B.LINES):K.isLineLoop?se.setMode(B.LINE_LOOP):se.setMode(B.LINE_STRIP)}else K.isPoints?se.setMode(B.POINTS):K.isSprite&&se.setMode(B.TRIANGLES);if(K.isBatchedMesh)se.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)se.renderInstances(he,xe,K.count);else if(Z.isInstancedBufferGeometry){const jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vo=Math.min(Z.instanceCount,jt);se.renderInstances(he,xe,vo)}else se.render(he,xe)};function Yt(I,X,Z){I.transparent===!0&&I.side===Ke&&I.forceSinglePass===!1?(I.side=Pe,I.needsUpdate=!0,$r(I,X,Z),I.side=xn,I.needsUpdate=!0,$r(I,X,Z),I.side=Ke):$r(I,X,Z)}this.compile=function(I,X,Z=null){Z===null&&(Z=I),p=Pt.get(Z),p.init(),y.push(p),Z.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),I!==Z&&I.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights(x._useLegacyLights);const J=new Set;return I.traverse(function(K){const xt=K.material;if(xt)if(Array.isArray(xt))for(let Tt=0;Tt<xt.length;Tt++){const It=xt[Tt];Yt(It,Z,K),J.add(It)}else Yt(xt,Z,K),J.add(xt)}),y.pop(),p=null,J},this.compileAsync=function(I,X,Z=null){const J=this.compile(I,X,Z);return new Promise(K=>{function xt(){if(J.forEach(function(Tt){Ct.get(Tt).currentProgram.isReady()&&J.delete(Tt)}),J.size===0){K(I);return}setTimeout(xt,10)}Q.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let qt=null;function oe(I){qt&&qt(I)}function ue(){de.stop()}function $t(){de.start()}const de=new ih;de.setAnimationLoop(oe),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(I){qt=I,yt.setAnimationLoop(I),I===null?de.stop():de.start()},yt.addEventListener("sessionstart",ue),yt.addEventListener("sessionend",$t),this.render=function(I,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(X),X=yt.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,X,E),p=Pt.get(I,y.length),p.init(),y.push(p),Et.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(Et),mt=this.localClippingEnabled,it=zt.init(this.clippingPlanes,mt),M=Mt.get(I,h.length),M.init(),h.push(M),mn(I,X,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(q,j),this.info.render.frame++,it===!0&&zt.beginShadows();const Z=p.state.shadowsArray;if(ot.render(Z,I,X),it===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(M,I),p.setupLights(x._useLegacyLights),X.isArrayCamera){const J=X.cameras;for(let K=0,xt=J.length;K<xt;K++){const Tt=J[K];ol(M,I,Tt,Tt.viewport)}}else ol(M,I,X);E!==null&&(D.updateMultisampleRenderTarget(E),D.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(x,I,X),O.resetDefaultState(),S=-1,g=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function mn(I,X,Z,J){if(I.visible===!1)return;if(I.layers.test(X.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(X);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||$.intersectsSprite(I)){J&&C.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Et);const Tt=at.update(I),It=I.material;It.visible&&M.push(I,Tt,It,Z,C.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||$.intersectsObject(I))){const Tt=at.update(I),It=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),C.copy(I.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),C.copy(Tt.boundingSphere.center)),C.applyMatrix4(I.matrixWorld).applyMatrix4(Et)),Array.isArray(It)){const Ft=Tt.groups;for(let Wt=0,Bt=Ft.length;Wt<Bt;Wt++){const Ht=Ft[Wt],he=It[Ht.materialIndex];he&&he.visible&&M.push(I,Tt,he,Z,C.z,Ht)}}else It.visible&&M.push(I,Tt,It,Z,C.z,null)}}const xt=I.children;for(let Tt=0,It=xt.length;Tt<It;Tt++)mn(xt[Tt],X,Z,J)}function ol(I,X,Z,J){const K=I.opaque,xt=I.transmissive,Tt=I.transparent;p.setupLightsView(Z),it===!0&&zt.setGlobalState(x.clippingPlanes,Z),xt.length>0&&Gh(K,xt,X,Z),J&&ft.viewport(_.copy(J)),K.length>0&&qr(K,X,Z),xt.length>0&&qr(xt,X,Z),Tt.length>0&&qr(Tt,X,Z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Gh(I,X,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const xt=dt.isWebGL2;St===null&&(St=new Si(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Fn:ni,minFilter:fr,samples:xt?4:0})),x.getDrawingBufferSize(tt),xt?St.setSize(tt.x,tt.y):St.setSize(to(tt.x),to(tt.y));const Tt=x.getRenderTarget();x.setRenderTarget(St),x.getClearColor(z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const It=x.toneMapping;x.toneMapping=ei,qr(I,Z,J),D.updateMultisampleRenderTarget(St),D.updateRenderTargetMipmap(St);let Ft=!1;for(let Wt=0,Bt=X.length;Wt<Bt;Wt++){const Ht=X[Wt],he=Ht.object,Be=Ht.geometry,xe=Ht.material,En=Ht.group;if(xe.side===Ke&&he.layers.test(J.layers)){const se=xe.side;xe.side=Pe,xe.needsUpdate=!0,al(he,Z,J,Be,xe,En),xe.side=se,xe.needsUpdate=!0,Ft=!0}}Ft===!0&&(D.updateMultisampleRenderTarget(St),D.updateRenderTargetMipmap(St)),x.setRenderTarget(Tt),x.setClearColor(z,L),x.toneMapping=It}function qr(I,X,Z){const J=X.isScene===!0?X.overrideMaterial:null;for(let K=0,xt=I.length;K<xt;K++){const Tt=I[K],It=Tt.object,Ft=Tt.geometry,Wt=J===null?Tt.material:J,Bt=Tt.group;It.layers.test(Z.layers)&&al(It,X,Z,Ft,Wt,Bt)}}function al(I,X,Z,J,K,xt){I.onBeforeRender(x,X,Z,J,K,xt),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(x,X,Z,J,I,xt),K.transparent===!0&&K.side===Ke&&K.forceSinglePass===!1?(K.side=Pe,K.needsUpdate=!0,x.renderBufferDirect(Z,X,J,K,I,xt),K.side=xn,K.needsUpdate=!0,x.renderBufferDirect(Z,X,J,K,I,xt),K.side=Ke):x.renderBufferDirect(Z,X,J,K,I,xt),I.onAfterRender(x,X,Z,J,K,xt)}function $r(I,X,Z){X.isScene!==!0&&(X=U);const J=Ct.get(I),K=p.state.lights,xt=p.state.shadowsArray,Tt=K.state.version,It=bt.getParameters(I,K.state,xt,X,Z),Ft=bt.getProgramCacheKey(It);let Wt=J.programs;J.environment=I.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(I.isMeshStandardMaterial?W:P).get(I.envMap||J.environment),Wt===void 0&&(I.addEventListener("dispose",gt),Wt=new Map,J.programs=Wt);let Bt=Wt.get(Ft);if(Bt!==void 0){if(J.currentProgram===Bt&&J.lightsStateVersion===Tt)return cl(I,It),Bt}else It.uniforms=bt.getUniforms(I),I.onBuild(Z,It,x),I.onBeforeCompile(It,x),Bt=bt.acquireProgram(It,Ft),Wt.set(Ft,Bt),J.uniforms=It.uniforms;const Ht=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ht.clippingPlanes=zt.uniform),cl(I,It),J.needsLights=Xh(I),J.lightsStateVersion=Tt,J.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.directionalShadowMap.value=K.state.directionalShadowMap,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotShadowMap.value=K.state.spotShadowMap,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMap.value=K.state.pointShadowMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=Bt,J.uniformsList=null,Bt}function ll(I){if(I.uniformsList===null){const X=I.currentProgram.getUniforms();I.uniformsList=ks.seqWithValue(X.seq,I.uniforms)}return I.uniformsList}function cl(I,X){const Z=Ct.get(I);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function kh(I,X,Z,J,K){X.isScene!==!0&&(X=U),D.resetTextureUnits();const xt=X.fog,Tt=J.isMeshStandardMaterial?X.environment:null,It=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:yn,Ft=(J.isMeshStandardMaterial?W:P).get(J.envMap||Tt),Wt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Bt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ht=!!Z.morphAttributes.position,he=!!Z.morphAttributes.normal,Be=!!Z.morphAttributes.color;let xe=ei;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(xe=x.toneMapping);const En=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=En!==void 0?En.length:0,jt=Ct.get(J),vo=p.state.lights;if(it===!0&&(mt===!0||I!==g)){const je=I===g&&J.id===S;zt.setState(J,I,je)}let ae=!1;J.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==vo.state.version||jt.outputColorSpace!==It||K.isBatchedMesh&&jt.batching===!1||!K.isBatchedMesh&&jt.batching===!0||K.isInstancedMesh&&jt.instancing===!1||!K.isInstancedMesh&&jt.instancing===!0||K.isSkinnedMesh&&jt.skinning===!1||!K.isSkinnedMesh&&jt.skinning===!0||K.isInstancedMesh&&jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&jt.instancingColor===!1&&K.instanceColor!==null||jt.envMap!==Ft||J.fog===!0&&jt.fog!==xt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==zt.numPlanes||jt.numIntersection!==zt.numIntersection)||jt.vertexAlphas!==Wt||jt.vertexTangents!==Bt||jt.morphTargets!==Ht||jt.morphNormals!==he||jt.morphColors!==Be||jt.toneMapping!==xe||dt.isWebGL2===!0&&jt.morphTargetsCount!==se)&&(ae=!0):(ae=!0,jt.__version=J.version);let ri=jt.currentProgram;ae===!0&&(ri=$r(J,X,K));let ul=!1,yr=!1,xo=!1;const Ee=ri.getUniforms(),si=jt.uniforms;if(ft.useProgram(ri.program)&&(ul=!0,yr=!0,xo=!0),J.id!==S&&(S=J.id,yr=!0),ul||g!==I){Ee.setValue(B,"projectionMatrix",I.projectionMatrix),Ee.setValue(B,"viewMatrix",I.matrixWorldInverse);const je=Ee.map.cameraPosition;je!==void 0&&je.setValue(B,C.setFromMatrixPosition(I.matrixWorld)),dt.logarithmicDepthBuffer&&Ee.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ee.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),g!==I&&(g=I,yr=!0,xo=!0)}if(K.isSkinnedMesh){Ee.setOptional(B,K,"bindMatrix"),Ee.setOptional(B,K,"bindMatrixInverse");const je=K.skeleton;je&&(dt.floatVertexTextures?(je.boneTexture===null&&je.computeBoneTexture(),Ee.setValue(B,"boneTexture",je.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Ee.setOptional(B,K,"batchingTexture"),Ee.setValue(B,"batchingTexture",K._matricesTexture,D));const yo=Z.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&dt.isWebGL2===!0)&&kt.update(K,Z,ri),(yr||jt.receiveShadow!==K.receiveShadow)&&(jt.receiveShadow=K.receiveShadow,Ee.setValue(B,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(si.envMap.value=Ft,si.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),yr&&(Ee.setValue(B,"toneMappingExposure",x.toneMappingExposure),jt.needsLights&&Wh(si,xo),xt&&J.fog===!0&&_t.refreshFogUniforms(si,xt),_t.refreshMaterialUniforms(si,J,k,N,St),ks.upload(B,ll(jt),si,D)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ks.upload(B,ll(jt),si,D),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ee.setValue(B,"center",K.center),Ee.setValue(B,"modelViewMatrix",K.modelViewMatrix),Ee.setValue(B,"normalMatrix",K.normalMatrix),Ee.setValue(B,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const je=J.uniformsGroups;for(let Mo=0,jh=je.length;Mo<jh;Mo++)if(dt.isWebGL2){const hl=je[Mo];ut.update(hl,ri),ut.bind(hl,ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ri}function Wh(I,X){I.ambientLightColor.needsUpdate=X,I.lightProbe.needsUpdate=X,I.directionalLights.needsUpdate=X,I.directionalLightShadows.needsUpdate=X,I.pointLights.needsUpdate=X,I.pointLightShadows.needsUpdate=X,I.spotLights.needsUpdate=X,I.spotLightShadows.needsUpdate=X,I.rectAreaLights.needsUpdate=X,I.hemisphereLights.needsUpdate=X}function Xh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,X,Z){Ct.get(I.texture).__webglTexture=X,Ct.get(I.depthTexture).__webglTexture=Z;const J=Ct.get(I);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,X){const Z=Ct.get(I);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(I,X=0,Z=0){E=I,T=X,A=Z;let J=!0,K=null,xt=!1,Tt=!1;if(I){const Ft=Ct.get(I);Ft.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(B.FRAMEBUFFER,null),J=!1):Ft.__webglFramebuffer===void 0?D.setupRenderTarget(I):Ft.__hasExternalTextures&&D.rebindTextures(I,Ct.get(I.texture).__webglTexture,Ct.get(I.depthTexture).__webglTexture);const Wt=I.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Tt=!0);const Bt=Ct.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Bt[X])?K=Bt[X][Z]:K=Bt[X],xt=!0):dt.isWebGL2&&I.samples>0&&D.useMultisampledRTT(I)===!1?K=Ct.get(I).__webglMultisampledFramebuffer:Array.isArray(Bt)?K=Bt[Z]:K=Bt,_.copy(I.viewport),w.copy(I.scissor),R=I.scissorTest}else _.copy(Y).multiplyScalar(k).floor(),w.copy(st).multiplyScalar(k).floor(),R=ct;if(ft.bindFramebuffer(B.FRAMEBUFFER,K)&&dt.drawBuffers&&J&&ft.drawBuffers(I,K),ft.viewport(_),ft.scissor(w),ft.setScissorTest(R),xt){const Ft=Ct.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,Z)}else if(Tt){const Ft=Ct.get(I.texture),Wt=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,Z||0,Wt)}S=-1},this.readRenderTargetPixels=function(I,X,Z,J,K,xt,Tt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Tt!==void 0&&(It=It[Tt]),It){ft.bindFramebuffer(B.FRAMEBUFFER,It);try{const Ft=I.texture,Wt=Ft.format,Bt=Ft.type;if(Wt!==hn&&vt.convert(Wt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Bt===Fn&&(Q.has("EXT_color_buffer_half_float")||dt.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Bt!==ni&&vt.convert(Bt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===dn&&(dt.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=I.width-J&&Z>=0&&Z<=I.height-K&&B.readPixels(X,Z,J,K,vt.convert(Wt),vt.convert(Bt),xt)}finally{const Ft=E!==null?Ct.get(E).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(I,X,Z=0){const J=Math.pow(2,-Z),K=Math.floor(X.image.width*J),xt=Math.floor(X.image.height*J);D.setTexture2D(X,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,I.x,I.y,K,xt),ft.unbindTexture()},this.copyTextureToTexture=function(I,X,Z,J=0){const K=X.image.width,xt=X.image.height,Tt=vt.convert(Z.format),It=vt.convert(Z.type);D.setTexture2D(Z,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment),X.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,J,I.x,I.y,K,xt,Tt,It,X.image.data):X.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,J,I.x,I.y,X.mipmaps[0].width,X.mipmaps[0].height,Tt,X.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,J,I.x,I.y,Tt,It,X.image),J===0&&Z.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(I,X,Z,J,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=I.max.x-I.min.x+1,Tt=I.max.y-I.min.y+1,It=I.max.z-I.min.z+1,Ft=vt.convert(J.format),Wt=vt.convert(J.type);let Bt;if(J.isData3DTexture)D.setTexture3D(J,0),Bt=B.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)D.setTexture2DArray(J,0),Bt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);const Ht=B.getParameter(B.UNPACK_ROW_LENGTH),he=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Be=B.getParameter(B.UNPACK_SKIP_PIXELS),xe=B.getParameter(B.UNPACK_SKIP_ROWS),En=B.getParameter(B.UNPACK_SKIP_IMAGES),se=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,se.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,se.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,I.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,I.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,I.min.z),Z.isDataTexture||Z.isData3DTexture?B.texSubImage3D(Bt,K,X.x,X.y,X.z,xt,Tt,It,Ft,Wt,se.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Bt,K,X.x,X.y,X.z,xt,Tt,It,Ft,se.data)):B.texSubImage3D(Bt,K,X.x,X.y,X.z,xt,Tt,It,Ft,Wt,se),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,xe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,En),K===0&&J.generateMipmaps&&B.generateMipmap(Bt),ft.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),ft.unbindTexture()},this.resetState=function(){T=0,A=0,E=null,ft.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qa?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ao?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ce?xi:Hu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===xi?ce:yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class h0 extends fh{}h0.prototype.isWebGL1Renderer=!0;class f0 extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class d0 extends Le{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Me,u=Me,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja extends _r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class p0 extends Ja{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const eo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class dh{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const m0=new dh;class Xr{constructor(t){this.manager=t!==void 0?t:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class g0 extends Error{constructor(t,e){super(t),this.response=e}}class _0 extends Xr{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=eo.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Rn[t]!==void 0){Rn[t].push({onLoad:e,onProgress:n,onError:r});return}Rn[t]=[],Rn[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rn[t],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,v=m!==0;let M=0;const p=new ReadableStream({start(h){y();function y(){f.read().then(({done:x,value:b})=>{if(x)h.close();else{M+=b.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:M,total:m});for(let A=0,E=u.length;A<E;A++){const S=u[A];S.onProgress&&S.onProgress(T)}h.enqueue(b),y()}})}}});return new Response(p)}else throw new g0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{eo.add(t,c);const u=Rn[t];delete Rn[t];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Rn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Rn[t];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class v0 extends Xr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=eo.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Gr("img");function l(){u(),eo.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class x0 extends Xr{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new d0,o=new _0(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:ke,a.wrapT=c.wrapT!==void 0?c.wrapT:ke,a.magFilter=c.magFilter!==void 0?c.magFilter:Se,a.minFilter=c.minFilter!==void 0?c.minFilter:Se,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=fr),c.mipmapCount===1&&(a.minFilter=Se),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,r),a}}class y0 extends Xr{constructor(t){super(t)}load(t,e,n,r){const s=new Le,a=new v0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class M0 extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Zo=new Jt,Dc=new H,Ic=new H;class S0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dc),Ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ic),e.updateMatrixWorld(),Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class E0 extends S0{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b0 extends M0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new E0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class A0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Uc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Uc(){return(typeof performance>"u"?Date:performance).now()}class Ve{constructor(t){this.value=t}clone(){return new Ve(this.value.clone===void 0?this.value:this.value.clone())}}class Nc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Fc=new H,ys=new H;class nn{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Fc.subVectors(t,this.start),ys.subVectors(this.end,this.start);const n=ys.dot(ys);let s=ys.dot(Fc)/n;return e&&(s=ge(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);const Oc={type:"change"},Jo={type:"start"},Bc={type:"end"},Ms=new co,zc=new un,T0=Math.cos(70*Wu.DEG2RAD);class w0 extends Ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Pt),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Oc),n.update(),s=r.NONE},this.update=function(){const O=new H,ut=new Ei().setFromUnitVectors(t.up,new H(0,1,0)),At=ut.clone().invert(),yt=new H,lt=new Ei,G=new H,ht=2*Math.PI;return function(Dt=null){const Rt=n.object.position;O.copy(Rt).sub(n.target),O.applyQuaternion(ut),o.setFromVector3(O),n.autoRotate&&s===r.NONE&&R(_(Dt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Yt=n.minAzimuthAngle,qt=n.maxAzimuthAngle;isFinite(Yt)&&isFinite(qt)&&(Yt<-Math.PI?Yt+=ht:Yt>Math.PI&&(Yt-=ht),qt<-Math.PI?qt+=ht:qt>Math.PI&&(qt-=ht),Yt<=qt?o.theta=Math.max(Yt,Math.min(qt,o.theta)):o.theta=o.theta>(Yt+qt)/2?Math.max(Yt,o.theta):Math.min(qt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),O.setFromSpherical(o),O.applyQuaternion(At),Rt.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let oe=!1;if(n.zoomToCursor&&A){let ue=null;if(n.object.isPerspectiveCamera){const $t=O.length();ue=Y($t*c);const de=$t-ue;n.object.position.addScaledVector(b,de),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $t=new H(T.x,T.y,0);$t.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),oe=!0;const de=new H(T.x,T.y,0);de.unproject(n.object),n.object.position.sub(de).add($t),n.object.updateMatrixWorld(),ue=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ue).add(n.object.position):(Ms.origin.copy(n.object.position),Ms.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ms.direction))<T0?t.lookAt(n.target):(zc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ms.intersectPlane(zc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),oe=!0);return c=1,A=!1,oe||yt.distanceToSquared(n.object.position)>a||8*(1-lt.dot(n.object.quaternion))>a||G.distanceToSquared(n.target)>0?(n.dispatchEvent(Oc),yt.copy(n.object.position),lt.copy(n.object.quaternion),G.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Kt),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",W),n.domElement.removeEventListener("wheel",at),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",W),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Nc,l=new Nc;let c=1;const u=new H,f=new Lt,d=new Lt,m=new Lt,v=new Lt,M=new Lt,p=new Lt,h=new Lt,y=new Lt,x=new Lt,b=new H,T=new Lt;let A=!1;const E=[],S={};let g=!1;function _(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function w(O){const ut=Math.abs(O*.01);return Math.pow(.95,n.zoomSpeed*ut)}function R(O){l.theta-=O}function z(O){l.phi-=O}const L=function(){const O=new H;return function(At,yt){O.setFromMatrixColumn(yt,0),O.multiplyScalar(-At),u.add(O)}}(),F=function(){const O=new H;return function(At,yt){n.screenSpacePanning===!0?O.setFromMatrixColumn(yt,1):(O.setFromMatrixColumn(yt,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(At),u.add(O)}}(),N=function(){const O=new H;return function(At,yt){const lt=n.domElement;if(n.object.isPerspectiveCamera){const G=n.object.position;O.copy(G).sub(n.target);let ht=O.length();ht*=Math.tan(n.object.fov/2*Math.PI/180),L(2*At*ht/lt.clientHeight,n.object.matrix),F(2*yt*ht/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(At*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),F(yt*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(O,ut){if(!n.zoomToCursor)return;A=!0;const At=n.domElement.getBoundingClientRect(),yt=O-At.left,lt=ut-At.top,G=At.width,ht=At.height;T.x=yt/G*2-1,T.y=-(lt/ht)*2+1,b.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function st(O){f.set(O.clientX,O.clientY)}function ct(O){j(O.clientX,O.clientX),h.set(O.clientX,O.clientY)}function $(O){v.set(O.clientX,O.clientY)}function it(O){d.set(O.clientX,O.clientY),m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ut=n.domElement;R(2*Math.PI*m.x/ut.clientHeight),z(2*Math.PI*m.y/ut.clientHeight),f.copy(d),n.update()}function mt(O){y.set(O.clientX,O.clientY),x.subVectors(y,h),x.y>0?k(w(x.y)):x.y<0&&q(w(x.y)),h.copy(y),n.update()}function St(O){M.set(O.clientX,O.clientY),p.subVectors(M,v).multiplyScalar(n.panSpeed),N(p.x,p.y),v.copy(M),n.update()}function Et(O){j(O.clientX,O.clientY),O.deltaY<0?q(w(O.deltaY)):O.deltaY>0&&k(w(O.deltaY)),n.update()}function tt(O){let ut=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),ut=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),ut=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),ut=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),ut=!0;break}ut&&(O.preventDefault(),n.update())}function C(O){if(E.length===1)f.set(O.pageX,O.pageY);else{const ut=vt(O),At=.5*(O.pageX+ut.x),yt=.5*(O.pageY+ut.y);f.set(At,yt)}}function U(O){if(E.length===1)v.set(O.pageX,O.pageY);else{const ut=vt(O),At=.5*(O.pageX+ut.x),yt=.5*(O.pageY+ut.y);v.set(At,yt)}}function V(O){const ut=vt(O),At=O.pageX-ut.x,yt=O.pageY-ut.y,lt=Math.sqrt(At*At+yt*yt);h.set(0,lt)}function B(O){n.enableZoom&&V(O),n.enablePan&&U(O)}function nt(O){n.enableZoom&&V(O),n.enableRotate&&C(O)}function Q(O){if(E.length==1)d.set(O.pageX,O.pageY);else{const At=vt(O),yt=.5*(O.pageX+At.x),lt=.5*(O.pageY+At.y);d.set(yt,lt)}m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ut=n.domElement;R(2*Math.PI*m.x/ut.clientHeight),z(2*Math.PI*m.y/ut.clientHeight),f.copy(d)}function dt(O){if(E.length===1)M.set(O.pageX,O.pageY);else{const ut=vt(O),At=.5*(O.pageX+ut.x),yt=.5*(O.pageY+ut.y);M.set(At,yt)}p.subVectors(M,v).multiplyScalar(n.panSpeed),N(p.x,p.y),v.copy(M)}function ft(O){const ut=vt(O),At=O.pageX-ut.x,yt=O.pageY-ut.y,lt=Math.sqrt(At*At+yt*yt);y.set(0,lt),x.set(0,Math.pow(y.y/h.y,n.zoomSpeed)),k(x.y),h.copy(y);const G=(O.pageX+ut.x)*.5,ht=(O.pageY+ut.y)*.5;j(G,ht)}function Ot(O){n.enableZoom&&ft(O),n.enablePan&&dt(O)}function Ct(O){n.enableZoom&&ft(O),n.enableRotate&&Q(O)}function D(O){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",W)),kt(O),O.pointerType==="touch"?zt(O):et(O))}function P(O){n.enabled!==!1&&(O.pointerType==="touch"?ot(O):rt(O))}function W(O){Nt(O),E.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",W)),n.dispatchEvent(Bc),s=r.NONE}function et(O){let ut;switch(O.button){case 0:ut=n.mouseButtons.LEFT;break;case 1:ut=n.mouseButtons.MIDDLE;break;case 2:ut=n.mouseButtons.RIGHT;break;default:ut=-1}switch(ut){case Ci.DOLLY:if(n.enableZoom===!1)return;ct(O),s=r.DOLLY;break;case Ci.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;$(O),s=r.PAN}else{if(n.enableRotate===!1)return;st(O),s=r.ROTATE}break;case Ci.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;st(O),s=r.ROTATE}else{if(n.enablePan===!1)return;$(O),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Jo)}function rt(O){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;it(O);break;case r.DOLLY:if(n.enableZoom===!1)return;mt(O);break;case r.PAN:if(n.enablePan===!1)return;St(O);break}}function at(O){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(O.preventDefault(),n.dispatchEvent(Jo),Et(bt(O)),n.dispatchEvent(Bc))}function bt(O){const ut=O.deltaMode,At={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(ut){case 1:At.deltaY*=16;break;case 2:At.deltaY*=100;break}return O.ctrlKey&&!g&&(At.deltaY*=10),At}function _t(O){O.key==="Control"&&(g=!0,document.addEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Mt(O){O.key==="Control"&&(g=!1,document.removeEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Pt(O){n.enabled===!1||n.enablePan===!1||tt(O)}function zt(O){switch(wt(O),E.length){case 1:switch(n.touches.ONE){case Ri.ROTATE:if(n.enableRotate===!1)return;C(O),s=r.TOUCH_ROTATE;break;case Ri.PAN:if(n.enablePan===!1)return;U(O),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(O),s=r.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;nt(O),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Jo)}function ot(O){switch(wt(O),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(O),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;dt(O),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ot(O),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ct(O),n.update();break;default:s=r.NONE}}function Kt(O){n.enabled!==!1&&O.preventDefault()}function kt(O){E.push(O.pointerId)}function Nt(O){delete S[O.pointerId];for(let ut=0;ut<E.length;ut++)if(E[ut]==O.pointerId){E.splice(ut,1);return}}function wt(O){let ut=S[O.pointerId];ut===void 0&&(ut=new Lt,S[O.pointerId]=ut),ut.set(O.pageX,O.pageY)}function vt(O){const ut=O.pointerId===E[0]?E[1]:E[0];return S[ut]}n.domElement.addEventListener("contextmenu",Kt),n.domElement.addEventListener("pointerdown",D),n.domElement.addEventListener("pointercancel",W),n.domElement.addEventListener("wheel",at,{passive:!1}),document.addEventListener("keydown",_t,{passive:!0,capture:!0}),this.update()}}class C0 extends x0{constructor(t){super(t),this.type=Fn}parse(t){const a=function(S,g){switch(S){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(g||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(g||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(g||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(g||""))}},u=`
`,f=function(S,g,_){g=g||1024;let R=S.pos,z=-1,L=0,F="",N=String.fromCharCode.apply(null,new Uint16Array(S.subarray(R,R+128)));for(;0>(z=N.indexOf(u))&&L<g&&R<S.byteLength;)F+=N,L+=N.length,R+=128,N+=String.fromCharCode.apply(null,new Uint16Array(S.subarray(R,R+128)));return-1<z?(S.pos+=L+z+1,F+N.slice(0,z)):!1},d=function(S){const g=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let F,N;for((S.pos>=S.byteLength||!(F=f(S)))&&a(1,"no header found"),(N=F.match(g))||a(3,"bad initial token"),L.valid|=1,L.programtype=N[1],L.string+=F+`
`;F=f(S),F!==!1;){if(L.string+=F+`
`,F.charAt(0)==="#"){L.comments+=F+`
`;continue}if((N=F.match(_))&&(L.gamma=parseFloat(N[1])),(N=F.match(w))&&(L.exposure=parseFloat(N[1])),(N=F.match(R))&&(L.valid|=2,L.format=N[1]),(N=F.match(z))&&(L.valid|=4,L.height=parseInt(N[1],10),L.width=parseInt(N[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||a(3,"missing format specifier"),L.valid&4||a(3,"missing image size specifier"),L},m=function(S,g,_){const w=g;if(w<8||w>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);w!==(S[2]<<8|S[3])&&a(3,"wrong scanline width");const R=new Uint8Array(4*g*_);R.length||a(4,"unable to allocate buffer space");let z=0,L=0;const F=4*w,N=new Uint8Array(4),k=new Uint8Array(F);let q=_;for(;q>0&&L<S.byteLength;){L+4>S.byteLength&&a(1),N[0]=S[L++],N[1]=S[L++],N[2]=S[L++],N[3]=S[L++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=w)&&a(3,"bad rgbe scanline format");let j=0,Y;for(;j<F&&L<S.byteLength;){Y=S[L++];const ct=Y>128;if(ct&&(Y-=128),(Y===0||j+Y>F)&&a(3,"bad scanline data"),ct){const $=S[L++];for(let it=0;it<Y;it++)k[j++]=$}else k.set(S.subarray(L,L+Y),j),j+=Y,L+=Y}const st=w;for(let ct=0;ct<st;ct++){let $=0;R[z]=k[ct+$],$+=w,R[z+1]=k[ct+$],$+=w,R[z+2]=k[ct+$],$+=w,R[z+3]=k[ct+$],z+=4}q--}return R},v=function(S,g,_,w){const R=S[g+3],z=Math.pow(2,R-128)/255;_[w+0]=S[g+0]*z,_[w+1]=S[g+1]*z,_[w+2]=S[g+2]*z,_[w+3]=1},M=function(S,g,_,w){const R=S[g+3],z=Math.pow(2,R-128)/255;_[w+0]=os.toHalfFloat(Math.min(S[g+0]*z,65504)),_[w+1]=os.toHalfFloat(Math.min(S[g+1]*z,65504)),_[w+2]=os.toHalfFloat(Math.min(S[g+2]*z,65504)),_[w+3]=os.toHalfFloat(1)},p=new Uint8Array(t);p.pos=0;const h=d(p),y=h.width,x=h.height,b=m(p.subarray(p.pos),y,x);let T,A,E;switch(this.type){case dn:E=b.length/4;const S=new Float32Array(E*4);for(let _=0;_<E;_++)v(b,_*4,S,_*4);T=S,A=dn;break;case Fn:E=b.length/4;const g=new Uint16Array(E*4);for(let _=0;_<E;_++)M(b,_*4,g,_*4);T=g,A=Fn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:y,height:x,data:T,header:h.string,gamma:h.gamma,exposure:h.exposure,type:A}}setDataType(t){return this.type=t,this}load(t,e,n,r){function s(a,o){switch(a.type){case dn:case Fn:a.colorSpace=yn,a.minFilter=Se,a.magFilter=Se,a.generateMipmaps=!1,a.flipY=!0;break}e&&e(a,o)}return super.load(t,s,n,r)}}const ph=0,R0=1,P0=2,Hc=2,Qo=1.25,Vc=1,Br=6*4+4+4,fo=65535,L0=Math.pow(2,-24),ta=Symbol("SKIP_GENERATION");function D0(i){return i.index?i.index.count:i.attributes.position.count}function xr(i){return D0(i)/3}function I0(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function U0(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=I0(e,n);i.setIndex(new Oe(r,1));for(let s=0;s<e;s++)r[s]=s}}function mh(i){const t=xr(i),e=i.drawRange,n=e.start/3,r=(e.start+e.count)/3,s=Math.max(0,n),a=Math.min(t,r)-s;return[{offset:Math.floor(s),count:Math.floor(a)}]}function gh(i){if(!i.groups||!i.groups.length)return mh(i);const t=[],e=new Set,n=i.drawRange,r=n.start/3,s=(n.start+n.count)/3;for(const o of i.groups){const l=o.start/3,c=(o.start+o.count)/3;e.add(Math.max(r,l)),e.add(Math.min(s,c))}const a=Array.from(e.values()).sort((o,l)=>o-l);for(let o=0;o<a.length-1;o++){const l=a[o],c=a[o+1];t.push({offset:Math.floor(l),count:Math.floor(c-l)})}return t}function N0(i){if(i.groups.length===0)return!1;const t=xr(i),e=gh(i).sort((s,a)=>s.offset-a.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let r=0;return e.forEach(({count:s})=>r+=s),t!==r}function ea(i,t,e,n,r){let s=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,u=-1/0,f=1/0,d=1/0,m=1/0,v=-1/0,M=-1/0,p=-1/0;for(let h=t*6,y=(t+e)*6;h<y;h+=6){const x=i[h+0],b=i[h+1],T=x-b,A=x+b;T<s&&(s=T),A>l&&(l=A),x<f&&(f=x),x>v&&(v=x);const E=i[h+2],S=i[h+3],g=E-S,_=E+S;g<a&&(a=g),_>c&&(c=_),E<d&&(d=E),E>M&&(M=E);const w=i[h+4],R=i[h+5],z=w-R,L=w+R;z<o&&(o=z),L>u&&(u=L),w<m&&(m=w),w>p&&(p=w)}n[0]=s,n[1]=a,n[2]=o,n[3]=l,n[4]=c,n[5]=u,r[0]=f,r[1]=d,r[2]=m,r[3]=v,r[4]=M,r[5]=p}function F0(i,t=null,e=null,n=null){const r=i.attributes.position,s=i.index?i.index.array:null,a=xr(i),o=r.normalized;let l;t===null?(l=new Float32Array(a*6*4),e=0,n=a):(l=t,e=e||0,n=n||a);const c=r.array,u=r.offset||0;let f=3;r.isInterleavedBufferAttribute&&(f=r.data.stride);const d=["getX","getY","getZ"];for(let m=e;m<e+n;m++){const v=m*3,M=m*6;let p=v+0,h=v+1,y=v+2;s&&(p=s[p],h=s[h],y=s[y]),o||(p=p*f+u,h=h*f+u,y=y*f+u);for(let x=0;x<3;x++){let b,T,A;o?(b=r[d[x]](p),T=r[d[x]](h),A=r[d[x]](y)):(b=c[p+x],T=c[h+x],A=c[y+x]);let E=b;T<E&&(E=T),A<E&&(E=A);let S=b;T>S&&(S=T),A>S&&(S=A);const g=(S-E)/2,_=x*2;l[M+_+0]=E+g,l[M+_+1]=g+(Math.abs(E)+g)*L0}}return l}function le(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Gc(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function kc(i,t){t.set(i)}function Wc(i,t,e){let n,r;for(let s=0;s<3;s++){const a=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[a],r=t[a],e[a]=n>r?n:r}}function Ss(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],a=r-s,o=r+s;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function Ar(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Un=32,O0=(i,t)=>i.candidate-t.candidate,jn=new Array(Un).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Es=new Float32Array(6);function B0(i,t,e,n,r,s){let a=-1,o=0;if(s===ph)a=Gc(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(s===R0)a=Gc(i),a!==-1&&(o=z0(e,n,r,a));else if(s===P0){const l=Ar(i);let c=Qo*r;const u=n*6,f=(n+r)*6;for(let d=0;d<3;d++){const m=t[d],p=(t[d+3]-m)/Un;if(r<Un/4){const h=[...jn];h.length=r;let y=0;for(let b=u;b<f;b+=6,y++){const T=h[y];T.candidate=e[b+2*d],T.count=0;const{bounds:A,leftCacheBounds:E,rightCacheBounds:S}=T;for(let g=0;g<3;g++)S[g]=1/0,S[g+3]=-1/0,E[g]=1/0,E[g+3]=-1/0,A[g]=1/0,A[g+3]=-1/0;Ss(b,e,A)}h.sort(O0);let x=r;for(let b=0;b<x;b++){const T=h[b];for(;b+1<x&&h[b+1].candidate===T.candidate;)h.splice(b+1,1),x--}for(let b=u;b<f;b+=6){const T=e[b+2*d];for(let A=0;A<x;A++){const E=h[A];T>=E.candidate?Ss(b,e,E.rightCacheBounds):(Ss(b,e,E.leftCacheBounds),E.count++)}}for(let b=0;b<x;b++){const T=h[b],A=T.count,E=r-T.count,S=T.leftCacheBounds,g=T.rightCacheBounds;let _=0;A!==0&&(_=Ar(S)/l);let w=0;E!==0&&(w=Ar(g)/l);const R=Vc+Qo*(_*A+w*E);R<c&&(a=d,c=R,o=T.candidate)}}else{for(let x=0;x<Un;x++){const b=jn[x];b.count=0,b.candidate=m+p+x*p;const T=b.bounds;for(let A=0;A<3;A++)T[A]=1/0,T[A+3]=-1/0}for(let x=u;x<f;x+=6){let A=~~((e[x+2*d]-m)/p);A>=Un&&(A=Un-1);const E=jn[A];E.count++,Ss(x,e,E.bounds)}const h=jn[Un-1];kc(h.bounds,h.rightCacheBounds);for(let x=Un-2;x>=0;x--){const b=jn[x],T=jn[x+1];Wc(b.bounds,T.rightCacheBounds,b.rightCacheBounds)}let y=0;for(let x=0;x<Un-1;x++){const b=jn[x],T=b.count,A=b.bounds,S=jn[x+1].rightCacheBounds;T!==0&&(y===0?kc(A,Es):Wc(A,Es,Es)),y+=T;let g=0,_=0;y!==0&&(g=Ar(Es)/l);const w=r-y;w!==0&&(_=Ar(S)/l);const R=Vc+Qo*(g*y+_*w);R<c&&(a=d,c=R,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function z0(i,t,e,n){let r=0;for(let s=t,a=t+e;s<a;s++)r+=i[s*6+n*2];return r/e}class na{constructor(){this.boundingData=new Float32Array(6)}}function H0(i,t,e,n,r,s){let a=n,o=n+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;a<=o&&e[a*6+c]<l;)a++;for(;a<=o&&e[o*6+c]>=l;)o--;if(a<o){for(let u=0;u<3;u++){let f=t[a*3+u];t[a*3+u]=t[o*3+u],t[o*3+u]=f}for(let u=0;u<6;u++){let f=e[a*6+u];e[a*6+u]=e[o*6+u],e[o*6+u]=f}a++,o--}else return a}}function V0(i,t,e,n,r,s){let a=n,o=n+r-1;const l=s.pos,c=s.axis*2;for(;;){for(;a<=o&&e[a*6+c]<l;)a++;for(;a<=o&&e[o*6+c]>=l;)o--;if(a<o){let u=i[a];i[a]=i[o],i[o]=u;for(let f=0;f<6;f++){let d=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=d}a++,o--}else return a}}function Fe(i,t){return t[i+15]===65535}function We(i,t){return t[i+6]}function Je(i,t){return t[i+14]}function Qe(i){return i+8}function tn(i,t){return t[i+6]}function _h(i,t){return t[i+7]}let vh,Ur,Ws,xh;const G0=Math.pow(2,32);function Ua(i){return"count"in i?1:1+Ua(i.left)+Ua(i.right)}function k0(i,t,e){return vh=new Float32Array(e),Ur=new Uint32Array(e),Ws=new Uint16Array(e),xh=new Uint8Array(e),Na(i,t)}function Na(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let a=0;a<6;a++)vh[e+a]=s[a];if(r)if(t.buffer){const a=t.buffer;xh.set(new Uint8Array(a),i);for(let o=i,l=i+a.byteLength;o<l;o+=Br){const c=o/2;Fe(c,Ws)||(Ur[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return Ur[e+6]=a,Ws[n+14]=o,Ws[n+15]=fo,i+Br}else{const a=t.left,o=t.right,l=t.splitAxis;let c;if(c=Na(i+Br,a),c/4>G0)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ur[e+6]=c/4,c=Na(c,o),Ur[e+7]=l,c}}function W0(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,r=n?4:2,s=t?new SharedArrayBuffer(e*r):new ArrayBuffer(e*r),a=n?new Uint32Array(s):new Uint16Array(s);for(let o=0,l=a.length;o<l;o++)a[o]=o;return a}function X0(i,t,e,n,r){const{maxDepth:s,verbose:a,maxLeafTris:o,strategy:l,onProgress:c,indirect:u}=r,f=i._indirectBuffer,d=i.geometry,m=d.index?d.index.array:null,v=u?V0:H0,M=xr(d),p=new Float32Array(6);let h=!1;const y=new na;return ea(t,e,n,y.boundingData,p),b(y,e,n,p),y;function x(T){c&&c(T/M)}function b(T,A,E,S=null,g=0){if(!h&&g>=s&&(h=!0,a&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),E<=o||g>=s)return x(A+E),T.offset=A,T.count=E,T;const _=B0(T.boundingData,S,t,A,E,l);if(_.axis===-1)return x(A+E),T.offset=A,T.count=E,T;const w=v(f,m,t,A,E,_);if(w===A||w===A+E)x(A+E),T.offset=A,T.count=E;else{T.splitAxis=_.axis;const R=new na,z=A,L=w-A;T.left=R,ea(t,z,L,R.boundingData,p),b(R,z,L,p,g+1);const F=new na,N=w,k=E-L;T.right=F,ea(t,N,k,F.boundingData,p),b(F,N,k,p,g+1)}return T}}function j0(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=W0(e,t.useSharedArrayBuffer),N0(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||U0(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=F0(e),s=t.indirect?mh(e):gh(e);i._roots=s.map(a=>{const o=X0(i,r,a.offset,a.count,t),l=Ua(o),c=new n(Br*l);return k0(0,o,c),c})}class zn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,a=t.length;s<a;s++){const l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,a=e.length;s<a;s++){const o=e[s],l=t.dot(o);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}zn.prototype.setFromBox=function(){const i=new H;return function(e,n){const r=n.min,s=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=r.x*l+s.x*(1-l),i.y=r.y*c+s.y*(1-c),i.z=r.z*u+s.z*(1-u);const f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();const Y0=function(){const i=new H,t=new H,e=new H;return function(r,s,a){const o=r.start,l=i,c=s.start,u=t;e.subVectors(o,c),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const f=e.dot(u),d=u.dot(l),m=u.dot(u),v=e.dot(l),p=l.dot(l)*m-d*d;let h,y;p!==0?h=(f*d-v*m)/p:h=0,y=(f+h*d)/m,a.x=h,a.y=y}}(),Qa=function(){const i=new Lt,t=new H,e=new H;return function(r,s,a,o){Y0(r,s,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){r.at(l,a),s.at(c,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let u;l<0?u=r.start:u=r.end;let f;c<0?f=s.start:f=s.end;const d=t,m=e;if(r.closestPointToPoint(f,!0,t),s.closestPointToPoint(u,!0,e),d.distanceToSquared(f)<=m.distanceToSquared(u)){a.copy(d),o.copy(f);return}else{a.copy(u),o.copy(m);return}}}}(),q0=function(){const i=new H,t=new H,e=new un,n=new nn;return function(s,a){const{radius:o,center:l}=s,{a:c,b:u,c:f}=a;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=c,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const M=a.getPlane(e);if(Math.abs(M.distanceToPoint(l))<=o){const h=M.projectPoint(l,t);if(a.containsPoint(h))return!0}return!1}}(),$0=1e-15;function ia(i){return Math.abs(i)<$0}class rn extends ie{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new H),this.satBounds=new Array(4).fill().map(()=>new zn),this.points=[this.a,this.b,this.c],this.sphere=new lo,this.plane=new un,this.needsUpdate=!0}intersectsSphere(t){return q0(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,a=this.satBounds,o=s[0],l=a[0];this.getNormal(o),l.setFromPoints(o,r);const c=s[1],u=a[1];c.subVectors(t,e),u.setFromPoints(c,r);const f=s[2],d=a[2];f.subVectors(e,n),d.setFromPoints(f,r);const m=s[3],v=a[3];m.subVectors(n,t),v.setFromPoints(m,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}rn.prototype.closestPointToSegment=function(){const i=new H,t=new H,e=new nn;return function(r,s=null,a=null){const{start:o,end:l}=r,c=this.points;let u,f=1/0;for(let d=0;d<3;d++){const m=(d+1)%3;e.start.copy(c[d]),e.end.copy(c[m]),Qa(e,r,i,t),u=i.distanceToSquared(t),u<f&&(f=u,s&&s.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<f&&(f=u,s&&s.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<f&&(f=u,s&&s.copy(i),a&&a.copy(l)),Math.sqrt(f)}}();rn.prototype.intersectsTriangle=function(){const i=new rn,t=new Array(3),e=new Array(3),n=new zn,r=new zn,s=new H,a=new H,o=new H,l=new H,c=new H,u=new nn,f=new nn,d=new nn,m=new H;function v(M,p,h){const y=M.points;let x=0,b=-1;for(let T=0;T<3;T++){const{start:A,end:E}=u;A.copy(y[T]),E.copy(y[(T+1)%3]),u.delta(a);const S=ia(p.distanceToPoint(A));if(ia(p.normal.dot(a))&&S){h.copy(u),x=2;break}const g=p.intersectLine(u,m);if(!g&&S&&m.copy(A),(g||S)&&!ia(m.distanceTo(E))){if(x<=1)(x===1?h.start:h.end).copy(m),S&&(b=x);else if(x>=2){(b===1?h.start:h.end).copy(m),x=2;break}if(x++,x===2&&b===-1)break}}return x}return function(p,h=null,y=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);const x=this.plane,b=p.plane;if(Math.abs(x.normal.dot(b.normal))>1-1e-10){const T=this.satBounds,A=this.satAxes;e[0]=p.a,e[1]=p.b,e[2]=p.c;for(let g=0;g<4;g++){const _=T[g],w=A[g];if(n.setFromPoints(w,e),_.isSeparated(n))return!1}const E=p.satBounds,S=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let g=0;g<4;g++){const _=E[g],w=S[g];if(n.setFromPoints(w,t),_.isSeparated(n))return!1}for(let g=0;g<4;g++){const _=A[g];for(let w=0;w<4;w++){const R=S[w];if(s.crossVectors(_,R),n.setFromPoints(s,t),r.setFromPoints(s,e),n.isSeparated(r))return!1}}return h&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),h.start.set(0,0,0),h.end.set(0,0,0)),!0}else{const T=v(this,b,f);if(T===1&&p.containsPoint(f.end))return h&&(h.start.copy(f.end),h.end.copy(f.end)),!0;if(T!==2)return!1;const A=v(p,x,d);if(A===1&&this.containsPoint(d.end))return h&&(h.start.copy(d.end),h.end.copy(d.end)),!0;if(A!==2)return!1;if(f.delta(o),d.delta(l),o.dot(l)<0){let z=d.start;d.start=d.end,d.end=z}const E=f.start.dot(o),S=f.end.dot(o),g=d.start.dot(o),_=d.end.dot(o),w=S<g,R=E<_;return E!==_&&g!==S&&w===R?!1:(h&&(c.subVectors(f.start,d.start),c.dot(o)>0?h.start.copy(f.start):h.start.copy(d.start),c.subVectors(f.end,d.end),c.dot(o)<0?h.end.copy(f.end):h.end.copy(d.end)),!0)}}}();rn.prototype.distanceToPoint=function(){const i=new H;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();rn.prototype.distanceToTriangle=function(){const i=new H,t=new H,e=["a","b","c"],n=new nn,r=new nn;return function(a,o=null,l=null){const c=o||l?n:null;if(this.intersectsTriangle(a,c))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let u=1/0;for(let f=0;f<3;f++){let d;const m=e[f],v=a[m];this.closestPointToPoint(v,i),d=v.distanceToSquared(i),d<u&&(u=d,o&&o.copy(i),l&&l.copy(v));const M=this[m];a.closestPointToPoint(M,i),d=M.distanceToSquared(i),d<u&&(u=d,o&&o.copy(M),l&&l.copy(i))}for(let f=0;f<3;f++){const d=e[f],m=e[(f+1)%3];n.set(this[d],this[m]);for(let v=0;v<3;v++){const M=e[v],p=e[(v+1)%3];r.set(a[M],a[p]),Qa(n,r,i,t);const h=i.distanceToSquared(t);h<u&&(u=h,o&&o.copy(i),l&&l.copy(t))}}return Math.sqrt(u)}}();class Ie{constructor(t,e,n){this.isOrientedBox=!0,this.min=new H,this.max=new H,this.matrix=new Jt,this.invMatrix=new Jt,this.points=new Array(8).fill().map(()=>new H),this.satAxes=new Array(3).fill().map(()=>new H),this.satBounds=new Array(3).fill().map(()=>new zn),this.alignedSatBounds=new Array(3).fill().map(()=>new zn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ie.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const d=1*c|2*u|4*f,m=r[d];m.x=c?n.x:e.x,m.y=u?n.y:e.y,m.z=f?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,a=this.satAxes,o=r[0];for(let c=0;c<3;c++){const u=a[c],f=s[c],d=1<<c,m=r[d];u.subVectors(o,m),f.setFromPoints(u,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ie.prototype.intersectsBox=function(){const i=new zn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,o[0].isSeparated(i)||(i.min=n.y,i.max=r.y,o[1].isSeparated(i))||(i.min=n.z,i.max=r.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=a[l],u=s[l];if(i.setFromBox(c,e),u.isSeparated(i))return!1}return!0}}();Ie.prototype.intersectsTriangle=function(){const i=new rn,t=new Array(3),e=new zn,n=new zn,r=new H;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let d=0;d<3;d++){const m=o[d],v=l[d];if(e.setFromPoints(v,t),m.isSeparated(e))return!1}const c=a.satBounds,u=a.satAxes,f=this.points;for(let d=0;d<3;d++){const m=c[d],v=u[d];if(e.setFromPoints(v,f),m.isSeparated(e))return!1}for(let d=0;d<3;d++){const m=l[d];for(let v=0;v<4;v++){const M=u[v];if(r.crossVectors(m,M),e.setFromPoints(r,t),n.setFromPoints(r,f),e.isSeparated(n))return!1}}return!0}}();Ie.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Ie.prototype.distanceToPoint=function(){const i=new H;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ie.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new nn),e=new Array(12).fill().map(()=>new nn),n=new H,r=new H;return function(a,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||c)&&(a.getCenter(r),this.closestPointToPoint(r,n),a.closestPointToPoint(n,r),l&&l.copy(n),c&&c.copy(r)),0;const u=o*o,f=a.min,d=a.max,m=this.points;let v=1/0;for(let p=0;p<8;p++){const h=m[p];r.copy(h).clamp(f,d);const y=h.distanceToSquared(r);if(y<v&&(v=y,l&&l.copy(h),c&&c.copy(r),y<u))return Math.sqrt(y)}let M=0;for(let p=0;p<3;p++)for(let h=0;h<=1;h++)for(let y=0;y<=1;y++){const x=(p+1)%3,b=(p+2)%3,T=h<<x|y<<b,A=1<<p|h<<x|y<<b,E=m[T],S=m[A];t[M].set(E,S);const _=i[p],w=i[x],R=i[b],z=e[M],L=z.start,F=z.end;L[_]=f[_],L[w]=h?f[w]:d[w],L[R]=y?f[R]:d[w],F[_]=d[_],F[w]=h?f[w]:d[w],F[R]=y?f[R]:d[w],M++}for(let p=0;p<=1;p++)for(let h=0;h<=1;h++)for(let y=0;y<=1;y++){r.x=p?d.x:f.x,r.y=h?d.y:f.y,r.z=y?d.z:f.z,this.closestPointToPoint(r,n);const x=r.distanceToSquared(n);if(x<v&&(v=x,l&&l.copy(n),c&&c.copy(r),x<u))return Math.sqrt(x)}for(let p=0;p<12;p++){const h=t[p];for(let y=0;y<12;y++){const x=e[y];Qa(h,x,n,r);const b=n.distanceToSquared(r);if(b<v&&(v=b,l&&l.copy(n),c&&c.copy(r),b<u))return Math.sqrt(b)}}return Math.sqrt(v)}}();class tl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class K0 extends tl{constructor(){super(()=>new rn)}}const en=new K0;class Z0{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ne=new Z0;let Jn,ar;const ji=[],bs=new tl(()=>new De);function J0(i,t,e,n,r,s){Jn=bs.getPrimitive(),ar=bs.getPrimitive(),ji.push(Jn,ar),ne.setBuffer(i._roots[t]);const a=Fa(0,i.geometry,e,n,r,s);ne.clearBuffer(),bs.releasePrimitive(Jn),bs.releasePrimitive(ar),ji.pop(),ji.pop();const o=ji.length;return o>0&&(ar=ji[o-1],Jn=ji[o-2]),a}function Fa(i,t,e,n,r=null,s=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:c}=ne;let u=i*2;if(Fe(u,l)){const v=We(i,c),M=Je(u,l);return le(i,o,Jn),n(v,M,!1,a,s+i,Jn)}else{let R=function(L){const{uint16Array:F,uint32Array:N}=ne;let k=L*2;for(;!Fe(k,F);)L=Qe(L),k=L*2;return We(L,N)},z=function(L){const{uint16Array:F,uint32Array:N}=ne;let k=L*2;for(;!Fe(k,F);)L=tn(L,N),k=L*2;return We(L,N)+Je(k,F)};var d=R,m=z;const v=Qe(i),M=tn(i,c);let p=v,h=M,y,x,b,T;if(r&&(b=Jn,T=ar,le(p,o,b),le(h,o,T),y=r(b),x=r(T),x<y)){p=M,h=v;const L=y;y=x,x=L,b=T}b||(b=Jn,le(p,o,b));const A=Fe(p*2,l),E=e(b,A,y,a+1,s+p);let S;if(E===Hc){const L=R(p),N=z(p)-L;S=n(L,N,!0,a+1,s+p,b)}else S=E&&Fa(p,t,e,n,r,s,a+1);if(S)return!0;T=ar,le(h,o,T);const g=Fe(h*2,l),_=e(T,g,x,a+1,s+h);let w;if(_===Hc){const L=R(h),N=z(h)-L;w=n(L,N,!0,a+1,s+h,T)}else w=_&&Fa(h,t,e,n,r,s,a+1);return!!w}}const Tr=new H,ra=new H;function Q0(i,t,e={},n=0,r=1/0){const s=n*n,a=r*r;let o=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(Tr.copy(t).clamp(u.min,u.max),Tr.distanceToSquared(t)),intersectsBounds:(u,f,d)=>d<o&&d<a,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Tr);const d=t.distanceToSquared(Tr);return d<o&&(ra.copy(Tr),o=d,l=f),d<s}}),o===1/0)return null;const c=Math.sqrt(o);return e.point?e.point.copy(ra):e.point=ra.clone(),e.distance=c,e.faceIndex=l,e}const Yi=new H,qi=new H,$i=new H,As=new Lt,Ts=new Lt,ws=new Lt,Xc=new H,jc=new H,Yc=new H,Cs=new H;function tv(i,t,e,n,r,s){let a;return s===Pe?a=i.intersectTriangle(n,e,t,!0,r):a=i.intersectTriangle(t,e,n,s!==Ke,r),a===null?null:{distance:i.origin.distanceTo(r),point:r.clone()}}function ev(i,t,e,n,r,s,a,o,l){Yi.fromBufferAttribute(t,s),qi.fromBufferAttribute(t,a),$i.fromBufferAttribute(t,o);const c=tv(i,Yi,qi,$i,Cs,l);if(c){n&&(As.fromBufferAttribute(n,s),Ts.fromBufferAttribute(n,a),ws.fromBufferAttribute(n,o),c.uv=ie.getInterpolation(Cs,Yi,qi,$i,As,Ts,ws,new Lt)),r&&(As.fromBufferAttribute(r,s),Ts.fromBufferAttribute(r,a),ws.fromBufferAttribute(r,o),c.uv1=ie.getInterpolation(Cs,Yi,qi,$i,As,Ts,ws,new Lt)),e&&(Xc.fromBufferAttribute(e,s),jc.fromBufferAttribute(e,a),Yc.fromBufferAttribute(e,o),c.normal=ie.getInterpolation(Cs,Yi,qi,$i,Xc,jc,Yc,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:s,b:a,c:o,normal:new H,materialIndex:0};ie.getNormal(Yi,qi,$i,u.normal),c.face=u,c.faceIndex=s}return c}function po(i,t,e,n,r){const s=n*3;let a=s+0,o=s+1,l=s+2;const c=i.index;i.index&&(a=c.getX(a),o=c.getX(o),l=c.getX(l));const{position:u,normal:f,uv:d,uv1:m}=i.attributes,v=ev(e,u,f,d,m,a,o,l,t);return v?(v.faceIndex=n,r&&r.push(v),v):null}function me(i,t,e,n){const r=i.a,s=i.b,a=i.c;let o=t,l=t+1,c=t+2;e&&(o=e.getX(o),l=e.getX(l),c=e.getX(c)),r.x=n.getX(o),r.y=n.getY(o),r.z=n.getZ(o),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),a.x=n.getX(c),a.y=n.getY(c),a.z=n.getZ(c)}function nv(i,t,e,n,r,s){const{geometry:a,_indirectBuffer:o}=i;for(let l=n,c=n+r;l<c;l++)po(a,t,e,l,s)}function iv(i,t,e,n,r){const{geometry:s,_indirectBuffer:a}=i;let o=1/0,l=null;for(let c=n,u=n+r;c<u;c++){let f;f=po(s,t,e,c),f&&f.distance<o&&(l=f,o=f.distance)}return l}function rv(i,t,e,n,r,s,a){const{geometry:o}=e,{index:l}=o,c=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let d;if(d=u,me(a,d*3,l,c),a.needsUpdate=!0,n(a,d,r,s))return!0}return!1}function sv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,a,o,l,c=0;const u=i._roots;for(let d=0,m=u.length;d<m;d++)s=u[d],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),f(0,c),c+=s.byteLength;function f(d,m,v=!1){const M=d*2;if(o[M+15]===fo){const h=a[d+6],y=o[M+14];let x=1/0,b=1/0,T=1/0,A=-1/0,E=-1/0,S=-1/0;for(let g=3*h,_=3*(h+y);g<_;g++){let w=n[g];const R=r.getX(w),z=r.getY(w),L=r.getZ(w);R<x&&(x=R),R>A&&(A=R),z<b&&(b=z),z>E&&(E=z),L<T&&(T=L),L>S&&(S=L)}return l[d+0]!==x||l[d+1]!==b||l[d+2]!==T||l[d+3]!==A||l[d+4]!==E||l[d+5]!==S?(l[d+0]=x,l[d+1]=b,l[d+2]=T,l[d+3]=A,l[d+4]=E,l[d+5]=S,!0):!1}else{const h=d+8,y=a[d+6],x=h+m,b=y+m;let T=v,A=!1,E=!1;t?T||(A=t.has(x),E=t.has(b),T=!A&&!E):(A=!0,E=!0);const S=T||A,g=T||E;let _=!1;S&&(_=f(h,m,T));let w=!1;g&&(w=f(y,m,T));const R=_||w;if(R)for(let z=0;z<3;z++){const L=h+z,F=y+z,N=l[L],k=l[L+3],q=l[F],j=l[F+3];l[d+z]=N<q?N:q,l[d+z+3]=k>j?k:j}return R}}}function ii(i,t,e){let n,r,s,a,o,l;const c=1/e.direction.x,u=1/e.direction.y,f=1/e.direction.z,d=e.origin.x,m=e.origin.y,v=e.origin.z;let M=t[i],p=t[i+3],h=t[i+1],y=t[i+3+1],x=t[i+2],b=t[i+3+2];return c>=0?(n=(M-d)*c,r=(p-d)*c):(n=(p-d)*c,r=(M-d)*c),u>=0?(s=(h-m)*u,a=(y-m)*u):(s=(y-m)*u,a=(h-m)*u),!(n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(x-v)*f,l=(b-v)*f):(o=(b-v)*f,l=(x-v)*f),n>l||o>r)||((l<r||r!==r)&&(r=l),r<0))}function ov(i,t,e,n,r,s){const{geometry:a,_indirectBuffer:o}=i;for(let l=n,c=n+r;l<c;l++){let u=o?o[l]:l;po(a,t,e,u,s)}}function av(i,t,e,n,r){const{geometry:s,_indirectBuffer:a}=i;let o=1/0,l=null;for(let c=n,u=n+r;c<u;c++){let f;f=po(s,t,e,a?a[c]:c),f&&f.distance<o&&(l=f,o=f.distance)}return l}function lv(i,t,e,n,r,s,a){const{geometry:o}=e,{index:l}=o,c=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let d;if(d=e.resolveTriangleIndex(u),me(a,d*3,l,c),a.needsUpdate=!0,n(a,d,r,s))return!0}return!1}function cv(i,t,e,n,r){ne.setBuffer(i._roots[t]),Oa(0,i,e,n,r),ne.clearBuffer()}function Oa(i,t,e,n,r){const{float32Array:s,uint16Array:a,uint32Array:o}=ne,l=i*2;if(Fe(l,a)){const u=We(i,o),f=Je(l,a);nv(t,e,n,u,f,r)}else{const u=Qe(i);ii(u,s,n)&&Oa(u,t,e,n,r);const f=tn(i,o);ii(f,s,n)&&Oa(f,t,e,n,r)}}const uv=["x","y","z"];function hv(i,t,e,n){ne.setBuffer(i._roots[t]);const r=Ba(0,i,e,n);return ne.clearBuffer(),r}function Ba(i,t,e,n){const{float32Array:r,uint16Array:s,uint32Array:a}=ne;let o=i*2;if(Fe(o,s)){const c=We(i,a),u=Je(o,s);return iv(t,e,n,c,u)}else{const c=_h(i,a),u=uv[c],d=n.direction[u]>=0;let m,v;d?(m=Qe(i),v=tn(i,a)):(m=tn(i,a),v=Qe(i));const p=ii(m,r,n)?Ba(m,t,e,n):null;if(p){const x=p.point[u];if(d?x<=r[v+c]:x>=r[v+c+3])return p}const y=ii(v,r,n)?Ba(v,t,e,n):null;return p&&y?p.distance<=y.distance?p:y:p||y||null}}const Rs=new De,Ki=new rn,Zi=new rn,wr=new Jt,qc=new Ie,Ps=new Ie;function fv(i,t,e,n){ne.setBuffer(i._roots[t]);const r=za(0,i,e,n);return ne.clearBuffer(),r}function za(i,t,e,n,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=ne;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),qc.set(e.boundingBox.min,e.boundingBox.max,n),r=qc),Fe(l,a)){const u=t.geometry,f=u.index,d=u.attributes.position,m=e.index,v=e.attributes.position,M=We(i,o),p=Je(l,a);if(wr.copy(n).invert(),e.boundsTree)return le(i,s,Ps),Ps.matrix.copy(wr),Ps.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Ps.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=M*3,b=(p+M)*3;x<b;x+=3)if(me(Zi,x,f,d),Zi.needsUpdate=!0,y.intersectsTriangle(Zi))return!0;return!1}});for(let h=M*3,y=(p+M)*3;h<y;h+=3){me(Ki,h,f,d),Ki.a.applyMatrix4(wr),Ki.b.applyMatrix4(wr),Ki.c.applyMatrix4(wr),Ki.needsUpdate=!0;for(let x=0,b=m.count;x<b;x+=3)if(me(Zi,x,m,v),Zi.needsUpdate=!0,Ki.intersectsTriangle(Zi))return!0}}else{const u=i+8,f=o[i+6];return le(u,s,Rs),!!(r.intersectsBox(Rs)&&za(u,t,e,n,r)||(le(f,s,Rs),r.intersectsBox(Rs)&&za(f,t,e,n,r)))}}const Ls=new Jt,sa=new Ie,Cr=new Ie,dv=new H,pv=new H,mv=new H,gv=new H;function _v(i,t,e,n={},r={},s=0,a=1/0){t.boundingBox||t.computeBoundingBox(),sa.set(t.boundingBox.min,t.boundingBox.max,e),sa.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,c=o.index,u=t.attributes.position,f=t.index,d=en.getPrimitive(),m=en.getPrimitive();let v=dv,M=pv,p=null,h=null;r&&(p=mv,h=gv);let y=1/0,x=null,b=null;return Ls.copy(e).invert(),Cr.matrix.copy(Ls),i.shapecast({boundsTraverseOrder:T=>sa.distanceToBox(T),intersectsBounds:(T,A,E)=>E<y&&E<a?(A&&(Cr.min.copy(T.min),Cr.max.copy(T.max),Cr.needsUpdate=!0),!0):!1,intersectsRange:(T,A)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:S=>Cr.distanceToBox(S),intersectsBounds:(S,g,_)=>_<y&&_<a,intersectsRange:(S,g)=>{for(let _=S,w=S+g;_<w;_++){me(m,3*_,f,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let R=T,z=T+A;R<z;R++){me(d,3*R,c,l),d.needsUpdate=!0;const L=d.distanceToTriangle(m,v,p);if(L<y&&(M.copy(v),h&&h.copy(p),y=L,x=R,b=_),L<s)return!0}}}});{const E=xr(t);for(let S=0,g=E;S<g;S++){me(m,3*S,f,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let _=T,w=T+A;_<w;_++){me(d,3*_,c,l),d.needsUpdate=!0;const R=d.distanceToTriangle(m,v,p);if(R<y&&(M.copy(v),h&&h.copy(p),y=R,x=_,b=S),R<s)return!0}}}}}),en.releasePrimitive(d),en.releasePrimitive(m),y===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=y,n.faceIndex=x,r&&(r.point?r.point.copy(h):r.point=h.clone(),r.point.applyMatrix4(Ls),M.applyMatrix4(Ls),r.distance=M.sub(r.point).length(),r.faceIndex=b),n)}function vv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,a,o,l,c=0;const u=i._roots;for(let d=0,m=u.length;d<m;d++)s=u[d],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),f(0,c),c+=s.byteLength;function f(d,m,v=!1){const M=d*2;if(o[M+15]===fo){const h=a[d+6],y=o[M+14];let x=1/0,b=1/0,T=1/0,A=-1/0,E=-1/0,S=-1/0;for(let g=h,_=h+y;g<_;g++){const w=3*i.resolveTriangleIndex(g);for(let R=0;R<3;R++){let z=w+R;z=n?n[z]:z;const L=r.getX(z),F=r.getY(z),N=r.getZ(z);L<x&&(x=L),L>A&&(A=L),F<b&&(b=F),F>E&&(E=F),N<T&&(T=N),N>S&&(S=N)}}return l[d+0]!==x||l[d+1]!==b||l[d+2]!==T||l[d+3]!==A||l[d+4]!==E||l[d+5]!==S?(l[d+0]=x,l[d+1]=b,l[d+2]=T,l[d+3]=A,l[d+4]=E,l[d+5]=S,!0):!1}else{const h=d+8,y=a[d+6],x=h+m,b=y+m;let T=v,A=!1,E=!1;t?T||(A=t.has(x),E=t.has(b),T=!A&&!E):(A=!0,E=!0);const S=T||A,g=T||E;let _=!1;S&&(_=f(h,m,T));let w=!1;g&&(w=f(y,m,T));const R=_||w;if(R)for(let z=0;z<3;z++){const L=h+z,F=y+z,N=l[L],k=l[L+3],q=l[F],j=l[F+3];l[d+z]=N<q?N:q,l[d+z+3]=k>j?k:j}return R}}}function xv(i,t,e,n,r){ne.setBuffer(i._roots[t]),Ha(0,i,e,n,r),ne.clearBuffer()}function Ha(i,t,e,n,r){const{float32Array:s,uint16Array:a,uint32Array:o}=ne,l=i*2;if(Fe(l,a)){const u=We(i,o),f=Je(l,a);ov(t,e,n,u,f,r)}else{const u=Qe(i);ii(u,s,n)&&Ha(u,t,e,n,r);const f=tn(i,o);ii(f,s,n)&&Ha(f,t,e,n,r)}}const yv=["x","y","z"];function Mv(i,t,e,n){ne.setBuffer(i._roots[t]);const r=Va(0,i,e,n);return ne.clearBuffer(),r}function Va(i,t,e,n){const{float32Array:r,uint16Array:s,uint32Array:a}=ne;let o=i*2;if(Fe(o,s)){const c=We(i,a),u=Je(o,s);return av(t,e,n,c,u)}else{const c=_h(i,a),u=yv[c],d=n.direction[u]>=0;let m,v;d?(m=Qe(i),v=tn(i,a)):(m=tn(i,a),v=Qe(i));const p=ii(m,r,n)?Va(m,t,e,n):null;if(p){const x=p.point[u];if(d?x<=r[v+c]:x>=r[v+c+3])return p}const y=ii(v,r,n)?Va(v,t,e,n):null;return p&&y?p.distance<=y.distance?p:y:p||y||null}}const Ds=new De,Ji=new rn,Qi=new rn,Rr=new Jt,$c=new Ie,Is=new Ie;function Sv(i,t,e,n){ne.setBuffer(i._roots[t]);const r=Ga(0,i,e,n);return ne.clearBuffer(),r}function Ga(i,t,e,n,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=ne;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),$c.set(e.boundingBox.min,e.boundingBox.max,n),r=$c),Fe(l,a)){const u=t.geometry,f=u.index,d=u.attributes.position,m=e.index,v=e.attributes.position,M=We(i,o),p=Je(l,a);if(Rr.copy(n).invert(),e.boundsTree)return le(i,s,Is),Is.matrix.copy(Rr),Is.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Is.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=M,b=p+M;x<b;x++)if(me(Qi,3*t.resolveTriangleIndex(x),f,d),Qi.needsUpdate=!0,y.intersectsTriangle(Qi))return!0;return!1}});for(let h=M,y=p+M;h<y;h++){const x=t.resolveTriangleIndex(h);me(Ji,3*x,f,d),Ji.a.applyMatrix4(Rr),Ji.b.applyMatrix4(Rr),Ji.c.applyMatrix4(Rr),Ji.needsUpdate=!0;for(let b=0,T=m.count;b<T;b+=3)if(me(Qi,b,m,v),Qi.needsUpdate=!0,Ji.intersectsTriangle(Qi))return!0}}else{const u=i+8,f=o[i+6];return le(u,s,Ds),!!(r.intersectsBox(Ds)&&Ga(u,t,e,n,r)||(le(f,s,Ds),r.intersectsBox(Ds)&&Ga(f,t,e,n,r)))}}const Us=new Jt,oa=new Ie,Pr=new Ie,Ev=new H,bv=new H,Av=new H,Tv=new H;function wv(i,t,e,n={},r={},s=0,a=1/0){t.boundingBox||t.computeBoundingBox(),oa.set(t.boundingBox.min,t.boundingBox.max,e),oa.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,c=o.index,u=t.attributes.position,f=t.index,d=en.getPrimitive(),m=en.getPrimitive();let v=Ev,M=bv,p=null,h=null;r&&(p=Av,h=Tv);let y=1/0,x=null,b=null;return Us.copy(e).invert(),Pr.matrix.copy(Us),i.shapecast({boundsTraverseOrder:T=>oa.distanceToBox(T),intersectsBounds:(T,A,E)=>E<y&&E<a?(A&&(Pr.min.copy(T.min),Pr.max.copy(T.max),Pr.needsUpdate=!0),!0):!1,intersectsRange:(T,A)=>{if(t.boundsTree){const E=t.boundsTree;return E.shapecast({boundsTraverseOrder:S=>Pr.distanceToBox(S),intersectsBounds:(S,g,_)=>_<y&&_<a,intersectsRange:(S,g)=>{for(let _=S,w=S+g;_<w;_++){const R=E.resolveTriangleIndex(_);me(m,3*R,f,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let z=T,L=T+A;z<L;z++){const F=i.resolveTriangleIndex(z);me(d,3*F,c,l),d.needsUpdate=!0;const N=d.distanceToTriangle(m,v,p);if(N<y&&(M.copy(v),h&&h.copy(p),y=N,x=z,b=_),N<s)return!0}}}})}else{const E=xr(t);for(let S=0,g=E;S<g;S++){me(m,3*S,f,u),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let _=T,w=T+A;_<w;_++){const R=i.resolveTriangleIndex(_);me(d,3*R,c,l),d.needsUpdate=!0;const z=d.distanceToTriangle(m,v,p);if(z<y&&(M.copy(v),h&&h.copy(p),y=z,x=_,b=S),z<s)return!0}}}}}),en.releasePrimitive(d),en.releasePrimitive(m),y===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=y,n.faceIndex=x,r&&(r.point?r.point.copy(h):r.point=h.clone(),r.point.applyMatrix4(Us),M.applyMatrix4(Us),r.distance=M.sub(r.point).length(),r.faceIndex=b),n)}function Cv(){return typeof SharedArrayBuffer<"u"}const zr=new ne.constructor,no=new ne.constructor,$n=new tl(()=>new De),tr=new De,er=new De,aa=new De,la=new De;let ca=!1;function Rv(i,t,e,n){if(ca)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ca=!0;const r=i._roots,s=t._roots;let a,o=0,l=0;const c=new Jt().copy(e).invert();for(let u=0,f=r.length;u<f;u++){zr.setBuffer(r[u]),l=0;const d=$n.getPrimitive();le(0,zr.float32Array,d),d.applyMatrix4(c);for(let m=0,v=s.length;m<v&&(no.setBuffer(s[u]),a=cn(0,0,e,c,n,o,l,0,0,d),no.clearBuffer(),l+=s[m].length,!a);m++);if($n.releasePrimitive(d),zr.clearBuffer(),o+=r[u].length,a)break}return ca=!1,a}function cn(i,t,e,n,r,s=0,a=0,o=0,l=0,c=null,u=!1){let f,d;u?(f=no,d=zr):(f=zr,d=no);const m=f.float32Array,v=f.uint32Array,M=f.uint16Array,p=d.float32Array,h=d.uint32Array,y=d.uint16Array,x=i*2,b=t*2,T=Fe(x,M),A=Fe(b,y);let E=!1;if(A&&T)u?E=r(We(t,h),Je(t*2,y),We(i,v),Je(i*2,M),l,a+t,o,s+i):E=r(We(i,v),Je(i*2,M),We(t,h),Je(t*2,y),o,s+i,l,a+t);else if(A){const S=$n.getPrimitive();le(t,p,S),S.applyMatrix4(e);const g=Qe(i),_=tn(i,v);le(g,m,tr),le(_,m,er);const w=S.intersectsBox(tr),R=S.intersectsBox(er);E=w&&cn(t,g,n,e,r,a,s,l,o+1,S,!u)||R&&cn(t,_,n,e,r,a,s,l,o+1,S,!u),$n.releasePrimitive(S)}else{const S=Qe(t),g=tn(t,h);le(S,p,aa),le(g,p,la);const _=c.intersectsBox(aa),w=c.intersectsBox(la);if(_&&w)E=cn(i,S,e,n,r,s,a,o,l+1,c,u)||cn(i,g,e,n,r,s,a,o,l+1,c,u);else if(_)if(T)E=cn(i,S,e,n,r,s,a,o,l+1,c,u);else{const R=$n.getPrimitive();R.copy(aa).applyMatrix4(e);const z=Qe(i),L=tn(i,v);le(z,m,tr),le(L,m,er);const F=R.intersectsBox(tr),N=R.intersectsBox(er);E=F&&cn(S,z,n,e,r,a,s,l,o+1,R,!u)||N&&cn(S,L,n,e,r,a,s,l,o+1,R,!u),$n.releasePrimitive(R)}else if(w)if(T)E=cn(i,g,e,n,r,s,a,o,l+1,c,u);else{const R=$n.getPrimitive();R.copy(la).applyMatrix4(e);const z=Qe(i),L=tn(i,v);le(z,m,tr),le(L,m,er);const F=R.intersectsBox(tr),N=R.intersectsBox(er);E=F&&cn(g,z,n,e,r,a,s,l,o+1,R,!u)||N&&cn(g,L,n,e,r,a,s,l,o+1,R,!u),$n.releasePrimitive(R)}}return E}const Ns=new Ie,Kc=new De,Pv={strategy:ph,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0};class el{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:r.map(l=>l.slice()),index:a?a.array.slice():null,indirectBuffer:s?s.slice():null}:o={roots:r,index:a?a.array:null,indirectBuffer:s},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:a}=t,o=new el(e,{...n,[ta]:!0});if(o._roots=s,o._indirectBuffer=a||null,n.setIndex){const l=e.getIndex();if(l===null){const c=new Oe(t.index,1,!1);e.setIndex(c)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...Pv,[ta]:!1},e),e.useSharedArrayBuffer&&!Cv())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[ta]||(j0(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new De)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?r=>n[r]:r=>r}refit(t=null){return(this.indirect?vv:sv)(this,t)}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);a(0);function a(o,l=0){const c=o*2,u=s[c+15]===fo;if(u){const f=r[o+6],d=s[c+14];t(l,u,new Float32Array(n,o*4,6),f,d)}else{const f=o+Br/4,d=r[o+6],m=r[o+7];t(l,u,new Float32Array(n,o*4,6),m)||(a(f,l+1),a(d,l+1))}}}raycast(t,e=xn){const n=this._roots,r=this.geometry,s=[],a=e.isMaterial,o=Array.isArray(e),l=r.groups,c=a?e.side:e,u=this.indirect?xv:cv;for(let f=0,d=n.length;f<d;f++){const m=o?e[l[f].materialIndex].side:c,v=s.length;if(u(this,f,m,t,s),o){const M=l[f].materialIndex;for(let p=v,h=s.length;p<h;p++)s[p].face.materialIndex=M}}return s}raycastFirst(t,e=xn){const n=this._roots,r=this.geometry,s=e.isMaterial,a=Array.isArray(e);let o=null;const l=r.groups,c=s?e.side:e,u=this.indirect?Mv:hv;for(let f=0,d=n.length;f<d;f++){const m=a?e[l[f].materialIndex].side:c,v=u(this,f,m,t);v!=null&&(o==null||v.distance<o.distance)&&(o=v,a&&(v.face.materialIndex=l[f].materialIndex))}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?Sv:fv;for(let a=0,o=r.length;a<o&&(n=s(this,a,t,e),!n);a++);return n}shapecast(t){const e=en.getPrimitive(),n=this.indirect?lv:rv;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const f=a;a=(d,m,v,M,p)=>f(d,m,v,M,p)?!0:n(d,m,this,o,v,M,e)}else a||(o?a=(f,d,m,v)=>n(f,d,this,o,m,v,e):a=(f,d,m)=>m);let l=!1,c=0;const u=this._roots;for(let f=0,d=u.length;f<d;f++){const m=u[f];if(l=J0(this,f,s,a,r,c),l)break;c+=m.byteLength}return en.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const a=en.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?v=>{const M=this.resolveTriangleIndex(v);me(a,M*3,o,l)}:v=>{me(a,v*3,o,l)},u=en.getPrimitive(),f=t.geometry.index,d=t.geometry.attributes.position,m=t.indirect?v=>{const M=t.resolveTriangleIndex(v);me(u,M*3,f,d)}:v=>{me(u,v*3,f,d)};if(s){const v=(M,p,h,y,x,b,T,A)=>{for(let E=h,S=h+y;E<S;E++){m(E),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let g=M,_=M+p;g<_;g++)if(c(g),a.needsUpdate=!0,s(a,u,g,E,x,b,T,A))return!0}return!1};if(r){const M=r;r=function(p,h,y,x,b,T,A,E){return M(p,h,y,x,b,T,A,E)?!0:v(p,h,y,x,b,T,A,E)}}else r=v}return Rv(this,t,e,r)}intersectsBox(t,e){return Ns.set(t.min,t.max,e),Ns.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ns.intersectsBox(n),intersectsTriangle:n=>Ns.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,a=1/0){return(this.indirect?wv:_v)(this,t,e,n,r,s,a)}closestPointToPoint(t,e={},n=0,r=1/0){return Q0(this,t,e,n,r)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{le(0,new Float32Array(n),Kc),t.union(Kc)}),t}}const yh=1e-6,Lv=yh*.5,Mh=Math.pow(10,-Math.log10(yh)),Dv=Lv*Mh;function _n(i){return~~(i*Mh+Dv)}function Iv(i){return`${_n(i.x)},${_n(i.y)}`}function Zc(i){return`${_n(i.x)},${_n(i.y)},${_n(i.z)}`}function Uv(i){return`${_n(i.x)},${_n(i.y)},${_n(i.z)},${_n(i.w)}`}function Nv(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Sh(){return typeof SharedArrayBuffer<"u"}function Fv(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function Ov(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Bv(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Ov(e,n);i.setIndex(new Oe(r,1));for(let s=0;s<e;s++)r[s]=s}}function zv(i){return i.index?i.index.count:i.attributes.position.count}function nl(i){return zv(i)/3}const Hv=1e-8,Vv=new H;function Gv(i){return~~(i/3)}function kv(i){return i%3}function Jc(i,t){return i.start-t.start}function Qc(i,t){return Vv.subVectors(t,i.origin).dot(i.direction)}function Wv(i,t,e,n=Hv){i.sort(Jc),t.sort(Jc);for(let o=0;o<i.length;o++){const l=i[o];for(let c=0;c<t.length;c++){const u=t[c];if(!(u.start>l.end)){if(l.end<u.start||u.end<l.start)continue;if(l.start<=u.start&&l.end>=u.end)s(u.end,l.end)||i.splice(o+1,0,{start:u.end,end:l.end,index:l.index}),l.end=u.start,u.start=0,u.end=0;else if(l.start>=u.start&&l.end<=u.end)s(l.end,u.end)||t.splice(c+1,0,{start:l.end,end:u.end,index:u.index}),u.end=l.start,l.start=0,l.end=0;else if(l.start<=u.start&&l.end<=u.end){const f=l.end;l.end=u.start,u.start=f}else if(l.start>=u.start&&l.end>=u.end){const f=u.end;u.end=l.start,l.start=f}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(l.index).push(u.index),e.get(u.index).push(l.index),a(u)&&(t.splice(c,1),c--),a(l)){i.splice(o,1),o--;break}}}r(i),r(t);function r(o){for(let l=0;l<o.length;l++)a(o[l])&&(o.splice(l,1),l--)}function s(o,l){return Math.abs(l-o)<n}function a(o){return Math.abs(o.end-o.start)<n}}const tu=1e-5,eu=1e-4;class Xv{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,c=e.length;l<c;l++){const u=e[l];if(a(u,t)&&a(u,n))continue;const f=o(u,t),d=o(u,n),m=Math.min(f,d);m<r&&(r=m,s=u)}return s;function a(l,c){const u=l.origin.distanceTo(c.origin)>tu;return l.direction.angleTo(c.direction)>eu||u}function o(l,c){const u=l.origin.distanceTo(c.origin),f=l.direction.angleTo(c.direction);return u/tu+f/eu}}}const ua=new H,ha=new H,Fs=new co;function jv(i,t,e){const n=i.attributes,r=i.index,s=n.position,a=new Map,o=new Map,l=Array.from(t),c=new Xv;for(let u=0,f=l.length;u<f;u++){const d=l[u],m=Gv(d),v=kv(d);let M=3*m+v,p=3*m+(v+1)%3;r&&(M=r.getX(M),p=r.getX(p)),ua.fromBufferAttribute(s,M),ha.fromBufferAttribute(s,p),Nv(ua,ha,Fs);let h,y=c.findClosestRay(Fs);y===null&&(y=Fs.clone(),c.addRay(y)),o.has(y)||o.set(y,{forward:[],reverse:[],ray:y}),h=o.get(y);let x=Qc(y,ua),b=Qc(y,ha);x>b&&([x,b]=[b,x]),Fs.direction.dot(y.direction)<0?h.reverse.push({start:x,end:b,index:d}):h.forward.push({start:x,end:b,index:d})}return o.forEach(({forward:u,reverse:f},d)=>{Wv(u,f,a,e),u.length===0&&f.length===0&&o.delete(d)}),{disjointConnectivityMap:a,fragmentMap:o}}const Yv=new Lt,fa=new H,qv=new ee,da=["","",""];class $v{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,a=e?x:y,o=new Map,{attributes:l}=t,c=e?Object.keys(l):null,u=t.index,f=l.position;let d=nl(t);const m=d;let v=0;n&&(v=t.drawRange.start,t.drawRange.count!==1/0&&(d=~~(t.drawRange.count/3)));let M=this.data;(!M||M.length<3*m)&&(M=new Int32Array(3*m)),M.fill(-1);let p=0,h=new Set;for(let b=v,T=d*3+v;b<T;b+=3){const A=b;for(let E=0;E<3;E++){let S=A+E;u&&(S=u.getX(S)),da[E]=a(S)}for(let E=0;E<3;E++){const S=(E+1)%3,g=da[E],_=da[S],w=`${_}_${g}`;if(o.has(w)){const R=A+E,z=o.get(w);M[R]=z,M[z]=R,o.delete(w),p+=2,h.delete(z)}else{const R=`${g}_${_}`,z=A+E;o.set(R,z),h.add(z)}}}if(r){const{fragmentMap:b,disjointConnectivityMap:T}=jv(t,h,s);h.clear(),b.forEach(({forward:A,reverse:E})=>{A.forEach(({index:S})=>h.add(S)),E.forEach(({index:S})=>h.add(S))}),this.unmatchedDisjointEdges=b,this.disjointConnections=T,p=d*3-h.size}this.matchedEdges=p,this.unmatchedEdges=h.size,this.data=M;function y(b){return fa.fromBufferAttribute(f,b),Zc(fa)}function x(b){let T="";for(let A=0,E=c.length;A<E;A++){const S=l[c[A]];let g;switch(S.itemSize){case 1:g=_n(S.getX(b));break;case 2:g=Iv(Yv.fromBufferAttribute(S,b));break;case 3:g=Zc(fa.fromBufferAttribute(S,b));break;case 4:g=Uv(qv.fromBufferAttribute(S,b));break}T!==""&&(T+="|"),T+=g}return T}}}class io extends pn{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Jt,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Sh();if(n)for(const r in e){const s=e[r];if(s.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");s.array=Fv(s.array)}if(t.boundsTree||(Bv(t,{useSharedArrayBuffer:n}),t.boundsTree=new el(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new $v(t)),!t.groupIndices){const r=nl(t),s=new Uint16Array(r),a=t.groups;for(let o=0,l=a.length;o<l;o++){const{start:c,count:u}=a[o];for(let f=c/3,d=(c+u)/3;f<d;f++)s[f]=o}t.groupIndices=s}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const Kv=1e-14,pa=new H,nu=new H,iu=new H;function Kn(i,t=Kv){pa.subVectors(i.b,i.a),nu.subVectors(i.c,i.a),iu.subVectors(i.b,i.c);const e=pa.angleTo(nu),n=pa.angleTo(iu),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const ma=1e-10,Lr=1e-10,Zv=1e-10,Pn=new nn,fe=new nn,Ln=new H,ga=new H,ru=new H,Os=new un,_a=new rn;class Jv{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new ie),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class Qv{constructor(){this.trianglePool=new Jv,this.triangles=[],this.normal=new H,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,a=t.length;s<a;s++){const o=t[s];if(s===0)o.getNormal(r);else if(Math.abs(1-o.getNormal(Ln).dot(r))>ma)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const l=n.getTriangle();l.copy(o),e.push(l)}else{t.getNormal(r);const s=n.getTriangle();s.copy(t),e.push(s)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(ga).normalize(),Math.abs(1-Math.abs(ga.dot(e)))<Zv){this.coplanarTriangleUsed=!0;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const a=(s+1)%3,o=r[s],l=r[a];Ln.subVectors(l,o).normalize(),ru.crossVectors(ga,Ln),Os.setFromNormalAndCoplanarPoint(ru,o),this.splitByPlane(Os,t)}}else t.getPlane(Os),this.splitByPlane(Os,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;_a.copy(e),_a.needsUpdate=!0;for(let s=0,a=n.length;s<a;s++){const o=n[s];if(!_a.intersectsTriangle(o,Pn,!0))continue;const{a:l,b:c,c:u}=o;let f=0,d=-1,m=!1,v=[],M=[];const p=[l,c,u];for(let h=0;h<3;h++){const y=(h+1)%3;Pn.start.copy(p[h]),Pn.end.copy(p[y]);const x=t.distanceToPoint(Pn.start),b=t.distanceToPoint(Pn.end);if(Math.abs(x)<Lr&&Math.abs(b)<Lr){m=!0;break}if(x>0?v.push(h):M.push(h),Math.abs(x)<Lr)continue;let T=!!t.intersectLine(Pn,Ln);!T&&Math.abs(b)<Lr&&(Ln.copy(Pn.end),T=!0),T&&!(Ln.distanceTo(Pn.start)<ma)&&(Ln.distanceTo(Pn.end)<ma&&(d=h),f===0?fe.start.copy(Ln):fe.end.copy(Ln),f++)}if(!m&&f===2&&fe.distance()>Lr)if(d!==-1){d=(d+1)%3;let h=0;h===d&&(h=(h+1)%3);let y=h+1;y===d&&(y=(y+1)%3);const x=r.getTriangle();x.a.copy(p[y]),x.b.copy(fe.end),x.c.copy(fe.start),Kn(x)||n.push(x),o.a.copy(p[h]),o.b.copy(fe.start),o.c.copy(fe.end),Kn(o)&&(n.splice(s,1),s--,a--)}else{const h=v.length>=2?M[0]:v[0];if(h===0){let A=fe.start;fe.start=fe.end,fe.end=A}const y=(h+1)%3,x=(h+2)%3,b=r.getTriangle(),T=r.getTriangle();p[y].distanceToSquared(fe.start)<p[x].distanceToSquared(fe.end)?(b.a.copy(p[y]),b.b.copy(fe.start),b.c.copy(fe.end),T.a.copy(p[y]),T.b.copy(p[x]),T.c.copy(fe.start)):(b.a.copy(p[x]),b.b.copy(fe.start),b.c.copy(fe.end),T.a.copy(p[y]),T.b.copy(p[x]),T.c.copy(fe.end)),o.a.copy(p[h]),o.b.copy(fe.end),o.c.copy(fe.start),Kn(b)||n.push(b),Kn(T)||n.push(T),Kn(o)&&(n.splice(s,1),s--,a--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function tx(i){return i=~~i,i+4-i%4}class su{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Sh()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(tx(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}class ex{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let r=0;for(let s=0;s<e;s++){const a=n[s];r+=a[t].length}return r}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const r={};e.push(r);for(const s in n){const a=n[s],o=new su(a.type);o.itemSize=a.itemSize,o.normalized=a.normalized,r[s]=o}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,r){const{groupAttributes:s}=this,o=s[0][t];if(o){if(o.type!==e)for(let l=0,c=s.length;l<c;l++){const u=s[l][t];u.setType(e),u.itemSize=n,u.normalized=r}}else for(let l=0,c=s.length;l<c;l++){const u=new su(e);u.itemSize=n,u.normalized=r,s[l][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class ou{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:r}=this;n[t]||(n[t]=[],r.push(t)),n[t].push(e)}}const nx=0,Eh=1,ix=2,rx=3,sx=4,bh=5,Ah=6,qe=new co,au=new Jt,we=new ie,Dn=new H,lu=new ee,cu=new ee,uu=new ee,va=new ee,Bs=new ee,zs=new ee,hu=new nn,xa=new H,ya=1e-8,ox=1e-15,mi=-1,gi=1,Xs=-2,js=2,Hr=0,ui=1,il=2,ax=1e-14;let Ys=null;function fu(i){Ys=i}function Th(i,t){i.getMidpoint(qe.origin),i.getNormal(qe.direction);const e=t.raycastFirst(qe,Ke);return!!(e&&qe.direction.dot(e.face.normal)>0)?mi:gi}function lx(i,t){function e(){return Math.random()-.5}i.getNormal(xa),qe.direction.copy(xa),i.getMidpoint(qe.origin);const n=3;let r=0,s=1/0;for(let a=0;a<n;a++){qe.direction.x+=e()*ya,qe.direction.y+=e()*ya,qe.direction.z+=e()*ya,qe.direction.multiplyScalar(-1);const o=t.raycastFirst(qe,Ke);if(!!(o&&qe.direction.dot(o.face.normal)>0)&&r++,o!==null&&(s=Math.min(s,o.distance)),s<=ox)return o.face.normal.dot(xa)>0?js:Xs;if(r/n>.5||(a-r+1)/n>.5)break}return r/n>.5?mi:gi}function cx(i,t){const e=new ou,n=new ou;return au.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,au,{intersectsTriangles(r,s,a,o){if(!Kn(r)&&!Kn(s)){let l=r.intersectsTriangle(s,hu,!0);if(!l){const c=r.plane,u=s.plane,f=c.normal,d=u.normal;f.dot(d)===1&&Math.abs(c.constant-u.constant)<ax&&(l=!0)}if(l){let c=i.geometry.boundsTree.resolveTriangleIndex(a),u=t.geometry.boundsTree.resolveTriangleIndex(o);e.add(c,u),n.add(u,c),Ys&&(Ys.addEdge(hu),Ys.addIntersectingTriangles(a,r,o,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function ux(i,t,e,n,r,s,a=!1){const o=e.attributes,l=e.index,c=i*3,u=l.getX(c+0),f=l.getX(c+1),d=l.getX(c+2);for(const m in s){const v=o[m],M=s[m];if(!(m in o))throw new Error(`CSG Operations: Attribute ${m} not available on geometry.`);const p=v.itemSize;m==="position"?(we.a.fromBufferAttribute(v,u).applyMatrix4(n),we.b.fromBufferAttribute(v,f).applyMatrix4(n),we.c.fromBufferAttribute(v,d).applyMatrix4(n),Ma(we.a,we.b,we.c,t,3,M,a)):m==="normal"?(we.a.fromBufferAttribute(v,u).applyNormalMatrix(r),we.b.fromBufferAttribute(v,f).applyNormalMatrix(r),we.c.fromBufferAttribute(v,d).applyNormalMatrix(r),a&&(we.a.multiplyScalar(-1),we.b.multiplyScalar(-1),we.c.multiplyScalar(-1)),Ma(we.a,we.b,we.c,t,3,M,a,!0)):(lu.fromBufferAttribute(v,u),cu.fromBufferAttribute(v,f),uu.fromBufferAttribute(v,d),Ma(lu,cu,uu,t,p,M,a))}}function hx(i,t,e,n,r,s,a,o=!1){Sa(i,n,r,s,a,o),Sa(o?e:t,n,r,s,a,o),Sa(o?t:e,n,r,s,a,o)}function wh(i,t,e=!1){switch(i){case nx:if(t===gi||t===js&&!e)return ui;break;case Eh:if(e){if(t===mi)return Hr}else if(t===gi||t===Xs)return ui;break;case ix:if(e){if(t===gi||t===Xs)return ui}else if(t===mi)return Hr;break;case sx:if(t===mi)return Hr;if(t===gi)return ui;break;case rx:if(t===mi||t===js&&!e)return ui;break;case bh:if(!e&&(t===gi||t===Xs))return ui;break;case Ah:if(!e&&(t===mi||t===js))return ui;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return il}function Ma(i,t,e,n,r,s,a=!1,o=!1){const l=c=>{s.push(c.x),r>1&&s.push(c.y),r>2&&s.push(c.z),r>3&&s.push(c.w)};va.set(0,0,0,0).addScaledVector(i,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),Bs.set(0,0,0,0).addScaledVector(i,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),zs.set(0,0,0,0).addScaledVector(i,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),o&&(va.normalize(),Bs.normalize(),zs.normalize()),l(va),a?(l(zs),l(Bs)):(l(Bs),l(zs))}function Sa(i,t,e,n,r,s=!1){for(const a in r){const o=t[a],l=r[a];if(!(a in t))throw new Error(`CSG Operations: Attribute ${a} no available on geometry.`);const c=o.itemSize;a==="position"?(Dn.fromBufferAttribute(o,i).applyMatrix4(e),l.push(Dn.x,Dn.y,Dn.z)):a==="normal"?(Dn.fromBufferAttribute(o,i).applyNormalMatrix(n),s&&Dn.multiplyScalar(-1),l.push(Dn.x,Dn.y,Dn.z)):(l.push(o.getX(i)),c>1&&l.push(o.getY(i)),c>2&&l.push(o.getZ(i)),c>3&&l.push(o.getW(i)))}}class fx{constructor(t){this.triangle=new ie().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ie().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class du{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new fx(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],a=o=>{if(n[o])if(e!==null)n[o].intersects[e]&&s.push(n[o].intersects[e]);else{const l=n[o].intersects;for(const c in l)r.has(c)||(r.add(c),s.push(l[c]))}};if(t!==null)a(t);else for(const o in n)a(o);return s}reset(){this.data={}}}class dx{constructor(){this.enabled=!1,this.triangleIntersectsA=new du,this.triangleIntersectsB=new du,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:a}=this;s.addTriangleIntersection(t,e,n,r),a.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),fu(this))}complete(){this.enabled&&fu(null)}}const Qn=new Jt,ro=new Xt,hi=new ie,Hs=new ie,Yn=new ie,Vs=new ie,fn=[],Mi=[];function px(i){for(const t of i)return t}function mx(i,t,e,n,r,s={}){const{useGroups:a=!0}=s,{aIntersections:o,bIntersections:l}=cx(i,t),c=[];let u=null,f;return f=a?0:-1,pu(i,t,o,e,!1,n,r,f),mu(i,t,o,e,!1,r,f),e.findIndex(m=>m!==Ah&&m!==bh)!==-1&&(f=a?i.geometry.groups.length||1:-1,pu(t,i,l,e,!0,n,r,f),mu(t,i,l,e,!0,r,f)),fn.length=0,Mi.length=0,{groups:c,materials:u}}function pu(i,t,e,n,r,s,a,o=0){const l=i.matrixWorld.determinant()<0;Qn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),ro.getNormalMatrix(i.matrixWorld).multiplyScalar(l?-1:1);const c=i.geometry.groupIndices,u=i.geometry.index,f=i.geometry.attributes.position,d=t.geometry.boundsTree,m=t.geometry.index,v=t.geometry.attributes.position,M=e.ids,p=e.intersectionSet;for(let h=0,y=M.length;h<y;h++){const x=M[h],b=o===-1?0:c[x]+o,T=3*x,A=u.getX(T+0),E=u.getX(T+1),S=u.getX(T+2);hi.a.fromBufferAttribute(f,A).applyMatrix4(Qn),hi.b.fromBufferAttribute(f,E).applyMatrix4(Qn),hi.c.fromBufferAttribute(f,S).applyMatrix4(Qn),s.reset(),s.initialize(hi);const g=p[x];for(let w=0,R=g.length;w<R;w++){const z=3*g[w],L=m.getX(z+0),F=m.getX(z+1),N=m.getX(z+2);Hs.a.fromBufferAttribute(v,L),Hs.b.fromBufferAttribute(v,F),Hs.c.fromBufferAttribute(v,N),s.splitByTriangle(Hs)}const _=s.triangles;for(let w=0,R=_.length;w<R;w++){const z=_[w],L=s.coplanarTriangleUsed?lx(z,d):Th(z,d);fn.length=0,Mi.length=0;for(let F=0,N=n.length;F<N;F++){const k=wh(n[F],L,r);k!==il&&(Mi.push(k),fn.push(a[F].getGroupAttrSet(b)))}if(fn.length!==0){hi.getBarycoord(z.a,Vs.a),hi.getBarycoord(z.b,Vs.b),hi.getBarycoord(z.c,Vs.c);for(let F=0,N=fn.length;F<N;F++){const k=fn[F],j=Mi[F]===Hr;ux(x,Vs,i.geometry,i.matrixWorld,ro,k,l!==j)}}}}return M.length}function mu(i,t,e,n,r,s,a=0){const o=i.matrixWorld.determinant()<0;Qn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),ro.getNormalMatrix(i.matrixWorld).multiplyScalar(o?-1:1);const l=t.geometry.boundsTree,c=i.geometry.groupIndices,u=i.geometry.index,f=i.geometry.attributes,d=f.position,m=[],v=i.geometry.halfEdges,M=new Set,p=nl(i.geometry);for(let h=0,y=p;h<y;h++)h in e.intersectionSet||M.add(h);for(;M.size>0;){const h=px(M);M.delete(h),m.push(h);const y=3*h,x=u.getX(y+0),b=u.getX(y+1),T=u.getX(y+2);Yn.a.fromBufferAttribute(d,x).applyMatrix4(Qn),Yn.b.fromBufferAttribute(d,b).applyMatrix4(Qn),Yn.c.fromBufferAttribute(d,T).applyMatrix4(Qn);const A=Th(Yn,l);Mi.length=0,fn.length=0;for(let E=0,S=n.length;E<S;E++){const g=wh(n[E],A,r);g!==il&&(Mi.push(g),fn.push(s[E]))}for(;m.length>0;){const E=m.pop();for(let S=0;S<3;S++){const g=v.getSiblingTriangleIndex(E,S);g!==-1&&M.has(g)&&(m.push(g),M.delete(g))}if(fn.length!==0){const S=3*E,g=u.getX(S+0),_=u.getX(S+1),w=u.getX(S+2),R=a===-1?0:c[E]+a;if(Yn.a.fromBufferAttribute(d,g),Yn.b.fromBufferAttribute(d,_),Yn.c.fromBufferAttribute(d,w),!Kn(Yn))for(let z=0,L=fn.length;z<L;z++){const F=Mi[z],N=fn[z].getGroupAttrSet(R),k=F===Hr;hx(g,_,w,f,i.matrixWorld,ro,N,k!==o)}}}}}function gx(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function _x(i,t,e,n){e.clear();const r=i.attributes;for(let s=0,a=n.length;s<a;s++){const o=n[s],l=r[o];e.initializeArray(o,l.array.constructor,l.itemSize,l.normalized)}for(const s in e.attributes)n.includes(s)||e.delete(s);for(const s in t.attributes)n.includes(s)||(t.deleteAttribute(s),t.dispose())}function vx(i,t,e){let n=!1,r=-1;const s=i.attributes,a=t.groupAttributes[0];for(const l in a){const c=t.getTotalLength(l),u=t.getType(l),f=t.getItemSize(l),d=t.getNormalized(l);let m=s[l];(!m||m.array.length<c)&&(m=new Oe(new u(c),f,d),i.setAttribute(l,m),n=!0);let v=0;for(let M=0,p=Math.min(e.length,t.groupCount);M<p;M++){const h=e[M].index,{array:y,type:x,length:b}=t.groupAttributes[h][l],T=new x(y.buffer,0,b);m.array.set(T,v),v+=T.length}m.needsUpdate=!0,r=c/m.itemSize}if(i.index){const l=i.index.array;if(l.length<r)i.index=null,n=!0;else for(let c=0,u=l.length;c<u;c++)l[c]=c}let o=0;i.clearGroups();for(let l=0,c=Math.min(e.length,t.groupCount);l<c;l++){const{index:u,materialIndex:f}=e[l],d=t.getCount(u);d!==0&&(i.addGroup(o,d,f),o+=d)}i.setDrawRange(0,r),i.boundsTree=null,n&&i.dispose()}function gu(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class xx{constructor(){this.triangleSplitter=new Qv,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new dx}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,r=new io){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:a,attributeData:o,attributes:l,useGroups:c,consolidateGroups:u,debug:f}=this;for(;o.length<r.length;)o.push(new ex);r.forEach((h,y)=>{_x(t.geometry,h.geometry,o[y],l)}),f.init(),mx(t,e,n,a,o,{useGroups:c}),f.complete();const d=this.getGroupRanges(t.geometry),m=gu(d,t.material),v=this.getGroupRanges(e.geometry),M=gu(v,e.material);v.forEach(h=>h.materialIndex+=m.length);let p=[...d,...v].map((h,y)=>({...h,index:y}));if(c){const h=[...m,...M];u&&(p=p.map(x=>{const b=h[x.materialIndex];return x.materialIndex=h.indexOf(b),x}).sort((x,b)=>x.materialIndex-b.materialIndex));const y=[];for(let x=0,b=h.length;x<b;x++){let T=!1;for(let A=0,E=p.length;A<E;A++){const S=p[A];S.materialIndex===x&&(T=!0,S.materialIndex=y.length)}T&&y.push(h[x])}r.forEach(x=>{x.material=y})}else p=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach(h=>{h.material=m[0]});return r.forEach((h,y)=>{const x=h.geometry;vx(x,o[y],p),u&&gx(x.groups)}),s?r:r[0]}evaluateHierarchy(t,e=new io){t.updateMatrixWorld(!0);const n=(s,a)=>{const o=s.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];u.isOperationGroup?n(u,a):a(u)}},r=s=>{const a=s.children;let o=!1;for(let c=0,u=a.length;c<u;c++){const f=a[c];o=r(f)||o}const l=s.isDirty();if(l&&s.markUpdated(),o&&!s.isOperationGroup){let c;return n(s,u=>{c?c=this.evaluate(c,u,u.operation):c=this.evaluate(s,u,u.operation)}),s._cachedGeometry=c.geometry,s._cachedMaterials=c.material,!0}else return o||l};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}function mo(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Gs(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ch={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function a(c,u){if(!r[c]){if(!n[c]){var f=typeof Gs=="function"&&Gs;if(!u&&f)return f(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}u=r[c]={exports:{}},n[c][0].call(u.exports,function(d){var m=n[c][1][d];return a(m||d)},u,u.exports,e,n,r,s)}return r[c].exports}for(var o=typeof Gs=="function"&&Gs,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(e,n,r){(function(s,a,o,l,c,u,f,d,m){var v=e("crypto");function M(A,E){E=y(A,E);var S;return(S=E.algorithm!=="passthrough"?v.createHash(E.algorithm):new T).write===void 0&&(S.write=S.update,S.end=S.update),b(E,S).dispatch(A),S.update||S.end(""),S.digest?S.digest(E.encoding==="buffer"?void 0:E.encoding):(A=S.read(),E.encoding!=="buffer"?A.toString(E.encoding):A)}(r=n.exports=M).sha1=function(A){return M(A)},r.keys=function(A){return M(A,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(A){return M(A,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(A){return M(A,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=v.getHashes?v.getHashes().slice():["sha1","md5"],h=(p.push("passthrough"),["buffer","hex","binary","base64"]);function y(A,E){var S={};if(S.algorithm=(E=E||{}).algorithm||"sha1",S.encoding=E.encoding||"hex",S.excludeValues=!!E.excludeValues,S.algorithm=S.algorithm.toLowerCase(),S.encoding=S.encoding.toLowerCase(),S.ignoreUnknown=E.ignoreUnknown===!0,S.respectType=E.respectType!==!1,S.respectFunctionNames=E.respectFunctionNames!==!1,S.respectFunctionProperties=E.respectFunctionProperties!==!1,S.unorderedArrays=E.unorderedArrays===!0,S.unorderedSets=E.unorderedSets!==!1,S.unorderedObjects=E.unorderedObjects!==!1,S.replacer=E.replacer||void 0,S.excludeKeys=E.excludeKeys||void 0,A===void 0)throw new Error("Object argument required.");for(var g=0;g<p.length;++g)p[g].toLowerCase()===S.algorithm.toLowerCase()&&(S.algorithm=p[g]);if(p.indexOf(S.algorithm)===-1)throw new Error('Algorithm "'+S.algorithm+'"  not supported. supported values: '+p.join(", "));if(h.indexOf(S.encoding)===-1&&S.algorithm!=="passthrough")throw new Error('Encoding "'+S.encoding+'"  not supported. supported values: '+h.join(", "));return S}function x(A){if(typeof A=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(A))!=null}function b(A,E,S){S=S||[];function g(_){return E.update?E.update(_,"utf8"):E.write(_,"utf8")}return{dispatch:function(_){return this["_"+((_=A.replacer?A.replacer(_):_)===null?"null":typeof _)](_)},_object:function(_){var w,R=Object.prototype.toString.call(_),z=/\[object (.*)\]/i.exec(R);if(z=(z=z?z[1]:"unknown:["+R+"]").toLowerCase(),0<=(R=S.indexOf(_)))return this.dispatch("[CIRCULAR:"+R+"]");if(S.push(_),o!==void 0&&o.isBuffer&&o.isBuffer(_))return g("buffer:"),g(_);if(z==="object"||z==="function"||z==="asyncfunction")return R=Object.keys(_),A.unorderedObjects&&(R=R.sort()),A.respectType===!1||x(_)||R.splice(0,0,"prototype","__proto__","constructor"),A.excludeKeys&&(R=R.filter(function(L){return!A.excludeKeys(L)})),g("object:"+R.length+":"),w=this,R.forEach(function(L){w.dispatch(L),g(":"),A.excludeValues||w.dispatch(_[L]),g(",")});if(!this["_"+z]){if(A.ignoreUnknown)return g("["+z+"]");throw new Error('Unknown object type "'+z+'"')}this["_"+z](_)},_array:function(_,L){L=L!==void 0?L:A.unorderedArrays!==!1;var R=this;if(g("array:"+_.length+":"),!L||_.length<=1)return _.forEach(function(F){return R.dispatch(F)});var z=[],L=_.map(function(F){var N=new T,k=S.slice();return b(A,N,k).dispatch(F),z=z.concat(k.slice(S.length)),N.read().toString()});return S=S.concat(z),L.sort(),this._array(L,!1)},_date:function(_){return g("date:"+_.toJSON())},_symbol:function(_){return g("symbol:"+_.toString())},_error:function(_){return g("error:"+_.toString())},_boolean:function(_){return g("bool:"+_.toString())},_string:function(_){g("string:"+_.length+":"),g(_.toString())},_function:function(_){g("fn:"),x(_)?this.dispatch("[native]"):this.dispatch(_.toString()),A.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(_.name)),A.respectFunctionProperties&&this._object(_)},_number:function(_){return g("number:"+_.toString())},_xml:function(_){return g("xml:"+_.toString())},_null:function(){return g("Null")},_undefined:function(){return g("Undefined")},_regexp:function(_){return g("regex:"+_.toString())},_uint8array:function(_){return g("uint8array:"),this.dispatch(Array.prototype.slice.call(_))},_uint8clampedarray:function(_){return g("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(_))},_int8array:function(_){return g("int8array:"),this.dispatch(Array.prototype.slice.call(_))},_uint16array:function(_){return g("uint16array:"),this.dispatch(Array.prototype.slice.call(_))},_int16array:function(_){return g("int16array:"),this.dispatch(Array.prototype.slice.call(_))},_uint32array:function(_){return g("uint32array:"),this.dispatch(Array.prototype.slice.call(_))},_int32array:function(_){return g("int32array:"),this.dispatch(Array.prototype.slice.call(_))},_float32array:function(_){return g("float32array:"),this.dispatch(Array.prototype.slice.call(_))},_float64array:function(_){return g("float64array:"),this.dispatch(Array.prototype.slice.call(_))},_arraybuffer:function(_){return g("arraybuffer:"),this.dispatch(new Uint8Array(_))},_url:function(_){return g("url:"+_.toString())},_map:function(_){return g("map:"),_=Array.from(_),this._array(_,A.unorderedSets!==!1)},_set:function(_){return g("set:"),_=Array.from(_),this._array(_,A.unorderedSets!==!1)},_file:function(_){return g("file:"),this.dispatch([_.name,_.size,_.type,_.lastModfied])},_blob:function(){if(A.ignoreUnknown)return g("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return g("domwindow")},_bigint:function(_){return g("bigint:"+_.toString())},_process:function(){return g("process")},_timer:function(){return g("timer")},_pipe:function(){return g("pipe")},_tcp:function(){return g("tcp")},_udp:function(){return g("udp")},_tty:function(){return g("tty")},_statwatcher:function(){return g("statwatcher")},_securecontext:function(){return g("securecontext")},_connection:function(){return g("connection")},_zlib:function(){return g("zlib")},_context:function(){return g("context")},_nodescript:function(){return g("nodescript")},_httpparser:function(){return g("httpparser")},_dataview:function(){return g("dataview")},_signal:function(){return g("signal")},_fsevent:function(){return g("fsevent")},_tlswrap:function(){return g("tlswrap")}}}function T(){return{buf:"",write:function(A){this.buf+=A},end:function(A){this.buf+=A},read:function(){return this.buf}}}r.writeToStream=function(A,E,S){return S===void 0&&(S=E,E={}),b(E=y(A,E),S).dispatch(A)}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,n,r){(function(s,a,o,l,c,u,f,d,m){(function(v){var M=typeof Uint8Array<"u"?Uint8Array:Array,p=43,h=47,y=48,x=97,b=65,T=45,A=95;function E(S){return S=S.charCodeAt(0),S===p||S===T?62:S===h||S===A?63:S<y?-1:S<y+10?S-y+26+26:S<b+26?S-b:S<x+26?S-x+26:void 0}v.toByteArray=function(S){var g,_;if(0<S.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var w=S.length,w=S.charAt(w-2)==="="?2:S.charAt(w-1)==="="?1:0,R=new M(3*S.length/4-w),z=0<w?S.length-4:S.length,L=0;function F(N){R[L++]=N}for(g=0;g<z;g+=4,0)F((16711680&(_=E(S.charAt(g))<<18|E(S.charAt(g+1))<<12|E(S.charAt(g+2))<<6|E(S.charAt(g+3))))>>16),F((65280&_)>>8),F(255&_);return w==2?F(255&(_=E(S.charAt(g))<<2|E(S.charAt(g+1))>>4)):w==1&&(F((_=E(S.charAt(g))<<10|E(S.charAt(g+1))<<4|E(S.charAt(g+2))>>2)>>8&255),F(255&_)),R},v.fromByteArray=function(S){var g,_,w,R,z=S.length%3,L="";function F(N){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(N)}for(g=0,w=S.length-z;g<w;g+=3)_=(S[g]<<16)+(S[g+1]<<8)+S[g+2],L+=F((R=_)>>18&63)+F(R>>12&63)+F(R>>6&63)+F(63&R);switch(z){case 1:L=(L+=F((_=S[S.length-1])>>2))+F(_<<4&63)+"==";break;case 2:L=(L=(L+=F((_=(S[S.length-2]<<8)+S[S.length-1])>>10))+F(_>>4&63))+F(_<<2&63)+"="}return L}})(r===void 0?this.base64js={}:r)}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(e,n,r){(function(s,a,p,l,c,u,f,d,m){var v=e("base64-js"),M=e("ieee754");function p(C,U,V){if(!(this instanceof p))return new p(C,U,V);var B,nt,Q,dt,ft=typeof C;if(U==="base64"&&ft=="string")for(C=(dt=C).trim?dt.trim():dt.replace(/^\s+|\s+$/g,"");C.length%4!=0;)C+="=";if(ft=="number")B=q(C);else if(ft=="string")B=p.byteLength(C,U);else{if(ft!="object")throw new Error("First argument needs to be a number, array or string.");B=q(C.length)}if(p._useTypedArrays?nt=p._augment(new Uint8Array(B)):((nt=this).length=B,nt._isBuffer=!0),p._useTypedArrays&&typeof C.byteLength=="number")nt._set(C);else if(j(dt=C)||p.isBuffer(dt)||dt&&typeof dt=="object"&&typeof dt.length=="number")for(Q=0;Q<B;Q++)p.isBuffer(C)?nt[Q]=C.readUInt8(Q):nt[Q]=C[Q];else if(ft=="string")nt.write(C,0,U);else if(ft=="number"&&!p._useTypedArrays&&!V)for(Q=0;Q<B;Q++)nt[Q]=0;return nt}function h(C,U,V,B){return p._charsWritten=$(function(nt){for(var Q=[],dt=0;dt<nt.length;dt++)Q.push(255&nt.charCodeAt(dt));return Q}(U),C,V,B)}function y(C,U,V,B){return p._charsWritten=$(function(nt){for(var Q,dt,ft=[],Ot=0;Ot<nt.length;Ot++)dt=nt.charCodeAt(Ot),Q=dt>>8,dt=dt%256,ft.push(dt),ft.push(Q);return ft}(U),C,V,B)}function x(C,U,V){var B="";V=Math.min(C.length,V);for(var nt=U;nt<V;nt++)B+=String.fromCharCode(C[nt]);return B}function b(C,U,V,Q){Q||(tt(typeof V=="boolean","missing or invalid endian"),tt(U!=null,"missing offset"),tt(U+1<C.length,"Trying to read beyond buffer length"));var nt,Q=C.length;if(!(Q<=U))return V?(nt=C[U],U+1<Q&&(nt|=C[U+1]<<8)):(nt=C[U]<<8,U+1<Q&&(nt|=C[U+1])),nt}function T(C,U,V,Q){Q||(tt(typeof V=="boolean","missing or invalid endian"),tt(U!=null,"missing offset"),tt(U+3<C.length,"Trying to read beyond buffer length"));var nt,Q=C.length;if(!(Q<=U))return V?(U+2<Q&&(nt=C[U+2]<<16),U+1<Q&&(nt|=C[U+1]<<8),nt|=C[U],U+3<Q&&(nt+=C[U+3]<<24>>>0)):(U+1<Q&&(nt=C[U+1]<<16),U+2<Q&&(nt|=C[U+2]<<8),U+3<Q&&(nt|=C[U+3]),nt+=C[U]<<24>>>0),nt}function A(C,U,V,B){if(B||(tt(typeof V=="boolean","missing or invalid endian"),tt(U!=null,"missing offset"),tt(U+1<C.length,"Trying to read beyond buffer length")),!(C.length<=U))return B=b(C,U,V,!0),32768&B?-1*(65535-B+1):B}function E(C,U,V,B){if(B||(tt(typeof V=="boolean","missing or invalid endian"),tt(U!=null,"missing offset"),tt(U+3<C.length,"Trying to read beyond buffer length")),!(C.length<=U))return B=T(C,U,V,!0),2147483648&B?-1*(4294967295-B+1):B}function S(C,U,V,B){return B||(tt(typeof V=="boolean","missing or invalid endian"),tt(U+3<C.length,"Trying to read beyond buffer length")),M.read(C,U,V,23,4)}function g(C,U,V,B){return B||(tt(typeof V=="boolean","missing or invalid endian"),tt(U+7<C.length,"Trying to read beyond buffer length")),M.read(C,U,V,52,8)}function _(C,U,V,B,nt){if(nt||(tt(U!=null,"missing value"),tt(typeof B=="boolean","missing or invalid endian"),tt(V!=null,"missing offset"),tt(V+1<C.length,"trying to write beyond buffer length"),mt(U,65535)),nt=C.length,!(nt<=V))for(var Q=0,dt=Math.min(nt-V,2);Q<dt;Q++)C[V+Q]=(U&255<<8*(B?Q:1-Q))>>>8*(B?Q:1-Q)}function w(C,U,V,B,nt){if(nt||(tt(U!=null,"missing value"),tt(typeof B=="boolean","missing or invalid endian"),tt(V!=null,"missing offset"),tt(V+3<C.length,"trying to write beyond buffer length"),mt(U,4294967295)),nt=C.length,!(nt<=V))for(var Q=0,dt=Math.min(nt-V,4);Q<dt;Q++)C[V+Q]=U>>>8*(B?Q:3-Q)&255}function R(C,U,V,B,nt){nt||(tt(U!=null,"missing value"),tt(typeof B=="boolean","missing or invalid endian"),tt(V!=null,"missing offset"),tt(V+1<C.length,"Trying to write beyond buffer length"),St(U,32767,-32768)),C.length<=V||_(C,0<=U?U:65535+U+1,V,B,nt)}function z(C,U,V,B,nt){nt||(tt(U!=null,"missing value"),tt(typeof B=="boolean","missing or invalid endian"),tt(V!=null,"missing offset"),tt(V+3<C.length,"Trying to write beyond buffer length"),St(U,2147483647,-2147483648)),C.length<=V||w(C,0<=U?U:4294967295+U+1,V,B,nt)}function L(C,U,V,B,nt){nt||(tt(U!=null,"missing value"),tt(typeof B=="boolean","missing or invalid endian"),tt(V!=null,"missing offset"),tt(V+3<C.length,"Trying to write beyond buffer length"),Et(U,34028234663852886e22,-34028234663852886e22)),C.length<=V||M.write(C,U,V,B,23,4)}function F(C,U,V,B,nt){nt||(tt(U!=null,"missing value"),tt(typeof B=="boolean","missing or invalid endian"),tt(V!=null,"missing offset"),tt(V+7<C.length,"Trying to write beyond buffer length"),Et(U,17976931348623157e292,-17976931348623157e292)),C.length<=V||M.write(C,U,V,B,52,8)}r.Buffer=p,r.SlowBuffer=p,r.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var C=new ArrayBuffer(0),U=new Uint8Array(C);return U.foo=function(){return 42},U.foo()===42&&typeof U.subarray=="function"}catch{return!1}}(),p.isEncoding=function(C){switch(String(C).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(C){return!(C==null||!C._isBuffer)},p.byteLength=function(C,U){var V;switch(C+="",U||"utf8"){case"hex":V=C.length/2;break;case"utf8":case"utf-8":V=st(C).length;break;case"ascii":case"binary":case"raw":V=C.length;break;case"base64":V=ct(C).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":V=2*C.length;break;default:throw new Error("Unknown encoding")}return V},p.concat=function(C,U){if(tt(j(C),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),C.length===0)return new p(0);if(C.length===1)return C[0];if(typeof U!="number")for(nt=U=0;nt<C.length;nt++)U+=C[nt].length;for(var V=new p(U),B=0,nt=0;nt<C.length;nt++){var Q=C[nt];Q.copy(V,B),B+=Q.length}return V},p.prototype.write=function(C,U,V,B){isFinite(U)?isFinite(V)||(B=V,V=void 0):(Ot=B,B=U,U=V,V=Ot),U=Number(U)||0;var nt,Q,dt,ft,Ot=this.length-U;switch((!V||Ot<(V=Number(V)))&&(V=Ot),B=String(B||"utf8").toLowerCase()){case"hex":nt=function(Ct,D,P,W){P=Number(P)||0;var et=Ct.length-P;(!W||et<(W=Number(W)))&&(W=et),tt((et=D.length)%2==0,"Invalid hex string"),et/2<W&&(W=et/2);for(var rt=0;rt<W;rt++){var at=parseInt(D.substr(2*rt,2),16);tt(!isNaN(at),"Invalid hex string"),Ct[P+rt]=at}return p._charsWritten=2*rt,rt}(this,C,U,V);break;case"utf8":case"utf-8":Q=this,dt=U,ft=V,nt=p._charsWritten=$(st(C),Q,dt,ft);break;case"ascii":case"binary":nt=h(this,C,U,V);break;case"base64":Q=this,dt=U,ft=V,nt=p._charsWritten=$(ct(C),Q,dt,ft);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":nt=y(this,C,U,V);break;default:throw new Error("Unknown encoding")}return nt},p.prototype.toString=function(C,U,V){var B,nt,Q,dt,ft=this;if(C=String(C||"utf8").toLowerCase(),U=Number(U)||0,(V=V!==void 0?Number(V):ft.length)===U)return"";switch(C){case"hex":B=function(Ot,Ct,D){var P=Ot.length;(!Ct||Ct<0)&&(Ct=0),(!D||D<0||P<D)&&(D=P);for(var W="",et=Ct;et<D;et++)W+=Y(Ot[et]);return W}(ft,U,V);break;case"utf8":case"utf-8":B=function(Ot,Ct,D){var P="",W="";D=Math.min(Ot.length,D);for(var et=Ct;et<D;et++)Ot[et]<=127?(P+=it(W)+String.fromCharCode(Ot[et]),W=""):W+="%"+Ot[et].toString(16);return P+it(W)}(ft,U,V);break;case"ascii":case"binary":B=x(ft,U,V);break;case"base64":nt=ft,dt=V,B=(Q=U)===0&&dt===nt.length?v.fromByteArray(nt):v.fromByteArray(nt.slice(Q,dt));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":B=function(Ot,Ct,D){for(var P=Ot.slice(Ct,D),W="",et=0;et<P.length;et+=2)W+=String.fromCharCode(P[et]+256*P[et+1]);return W}(ft,U,V);break;default:throw new Error("Unknown encoding")}return B},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(C,U,V,B){if(U=U||0,(B=B||B===0?B:this.length)!==(V=V||0)&&C.length!==0&&this.length!==0){tt(V<=B,"sourceEnd < sourceStart"),tt(0<=U&&U<C.length,"targetStart out of bounds"),tt(0<=V&&V<this.length,"sourceStart out of bounds"),tt(0<=B&&B<=this.length,"sourceEnd out of bounds"),B>this.length&&(B=this.length);var nt=(B=C.length-U<B-V?C.length-U+V:B)-V;if(nt<100||!p._useTypedArrays)for(var Q=0;Q<nt;Q++)C[Q+U]=this[Q+V];else C._set(this.subarray(V,V+nt),U)}},p.prototype.slice=function(C,U){var V=this.length;if(C=k(C,V,0),U=k(U,V,V),p._useTypedArrays)return p._augment(this.subarray(C,U));for(var B=U-C,nt=new p(B,void 0,!0),Q=0;Q<B;Q++)nt[Q]=this[Q+C];return nt},p.prototype.get=function(C){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(C)},p.prototype.set=function(C,U){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(C,U)},p.prototype.readUInt8=function(C,U){if(U||(tt(C!=null,"missing offset"),tt(C<this.length,"Trying to read beyond buffer length")),!(C>=this.length))return this[C]},p.prototype.readUInt16LE=function(C,U){return b(this,C,!0,U)},p.prototype.readUInt16BE=function(C,U){return b(this,C,!1,U)},p.prototype.readUInt32LE=function(C,U){return T(this,C,!0,U)},p.prototype.readUInt32BE=function(C,U){return T(this,C,!1,U)},p.prototype.readInt8=function(C,U){if(U||(tt(C!=null,"missing offset"),tt(C<this.length,"Trying to read beyond buffer length")),!(C>=this.length))return 128&this[C]?-1*(255-this[C]+1):this[C]},p.prototype.readInt16LE=function(C,U){return A(this,C,!0,U)},p.prototype.readInt16BE=function(C,U){return A(this,C,!1,U)},p.prototype.readInt32LE=function(C,U){return E(this,C,!0,U)},p.prototype.readInt32BE=function(C,U){return E(this,C,!1,U)},p.prototype.readFloatLE=function(C,U){return S(this,C,!0,U)},p.prototype.readFloatBE=function(C,U){return S(this,C,!1,U)},p.prototype.readDoubleLE=function(C,U){return g(this,C,!0,U)},p.prototype.readDoubleBE=function(C,U){return g(this,C,!1,U)},p.prototype.writeUInt8=function(C,U,V){V||(tt(C!=null,"missing value"),tt(U!=null,"missing offset"),tt(U<this.length,"trying to write beyond buffer length"),mt(C,255)),U>=this.length||(this[U]=C)},p.prototype.writeUInt16LE=function(C,U,V){_(this,C,U,!0,V)},p.prototype.writeUInt16BE=function(C,U,V){_(this,C,U,!1,V)},p.prototype.writeUInt32LE=function(C,U,V){w(this,C,U,!0,V)},p.prototype.writeUInt32BE=function(C,U,V){w(this,C,U,!1,V)},p.prototype.writeInt8=function(C,U,V){V||(tt(C!=null,"missing value"),tt(U!=null,"missing offset"),tt(U<this.length,"Trying to write beyond buffer length"),St(C,127,-128)),U>=this.length||(0<=C?this.writeUInt8(C,U,V):this.writeUInt8(255+C+1,U,V))},p.prototype.writeInt16LE=function(C,U,V){R(this,C,U,!0,V)},p.prototype.writeInt16BE=function(C,U,V){R(this,C,U,!1,V)},p.prototype.writeInt32LE=function(C,U,V){z(this,C,U,!0,V)},p.prototype.writeInt32BE=function(C,U,V){z(this,C,U,!1,V)},p.prototype.writeFloatLE=function(C,U,V){L(this,C,U,!0,V)},p.prototype.writeFloatBE=function(C,U,V){L(this,C,U,!1,V)},p.prototype.writeDoubleLE=function(C,U,V){F(this,C,U,!0,V)},p.prototype.writeDoubleBE=function(C,U,V){F(this,C,U,!1,V)},p.prototype.fill=function(C,U,V){if(U=U||0,V=V||this.length,tt(typeof(C=typeof(C=C||0)=="string"?C.charCodeAt(0):C)=="number"&&!isNaN(C),"value is not a number"),tt(U<=V,"end < start"),V!==U&&this.length!==0){tt(0<=U&&U<this.length,"start out of bounds"),tt(0<=V&&V<=this.length,"end out of bounds");for(var B=U;B<V;B++)this[B]=C}},p.prototype.inspect=function(){for(var C=[],U=this.length,V=0;V<U;V++)if(C[V]=Y(this[V]),V===r.INSPECT_MAX_BYTES){C[V+1]="...";break}return"<Buffer "+C.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var C=new Uint8Array(this.length),U=0,V=C.length;U<V;U+=1)C[U]=this[U];return C.buffer};var N=p.prototype;function k(C,U,V){return typeof C!="number"?V:U<=(C=~~C)?U:0<=C||0<=(C+=U)?C:0}function q(C){return(C=~~Math.ceil(+C))<0?0:C}function j(C){return(Array.isArray||function(U){return Object.prototype.toString.call(U)==="[object Array]"})(C)}function Y(C){return C<16?"0"+C.toString(16):C.toString(16)}function st(C){for(var U=[],V=0;V<C.length;V++){var B=C.charCodeAt(V);if(B<=127)U.push(C.charCodeAt(V));else for(var nt=V,Q=(55296<=B&&B<=57343&&V++,encodeURIComponent(C.slice(nt,V+1)).substr(1).split("%")),dt=0;dt<Q.length;dt++)U.push(parseInt(Q[dt],16))}return U}function ct(C){return v.toByteArray(C)}function $(C,U,V,B){for(var nt=0;nt<B&&!(nt+V>=U.length||nt>=C.length);nt++)U[nt+V]=C[nt];return nt}function it(C){try{return decodeURIComponent(C)}catch{return"�"}}function mt(C,U){tt(typeof C=="number","cannot write a non-number as a number"),tt(0<=C,"specified a negative value for writing an unsigned value"),tt(C<=U,"value is larger than maximum value for type"),tt(Math.floor(C)===C,"value has a fractional component")}function St(C,U,V){tt(typeof C=="number","cannot write a non-number as a number"),tt(C<=U,"value larger than maximum allowed value"),tt(V<=C,"value smaller than minimum allowed value"),tt(Math.floor(C)===C,"value has a fractional component")}function Et(C,U,V){tt(typeof C=="number","cannot write a non-number as a number"),tt(C<=U,"value larger than maximum allowed value"),tt(V<=C,"value smaller than minimum allowed value")}function tt(C,U){if(!C)throw new Error(U||"Failed assertion")}p._augment=function(C){return C._isBuffer=!0,C._get=C.get,C._set=C.set,C.get=N.get,C.set=N.set,C.write=N.write,C.toString=N.toString,C.toLocaleString=N.toString,C.toJSON=N.toJSON,C.copy=N.copy,C.slice=N.slice,C.readUInt8=N.readUInt8,C.readUInt16LE=N.readUInt16LE,C.readUInt16BE=N.readUInt16BE,C.readUInt32LE=N.readUInt32LE,C.readUInt32BE=N.readUInt32BE,C.readInt8=N.readInt8,C.readInt16LE=N.readInt16LE,C.readInt16BE=N.readInt16BE,C.readInt32LE=N.readInt32LE,C.readInt32BE=N.readInt32BE,C.readFloatLE=N.readFloatLE,C.readFloatBE=N.readFloatBE,C.readDoubleLE=N.readDoubleLE,C.readDoubleBE=N.readDoubleBE,C.writeUInt8=N.writeUInt8,C.writeUInt16LE=N.writeUInt16LE,C.writeUInt16BE=N.writeUInt16BE,C.writeUInt32LE=N.writeUInt32LE,C.writeUInt32BE=N.writeUInt32BE,C.writeInt8=N.writeInt8,C.writeInt16LE=N.writeInt16LE,C.writeInt16BE=N.writeInt16BE,C.writeInt32LE=N.writeInt32LE,C.writeInt32BE=N.writeInt32BE,C.writeFloatLE=N.writeFloatLE,C.writeFloatBE=N.writeFloatBE,C.writeDoubleLE=N.writeDoubleLE,C.writeDoubleBE=N.writeDoubleBE,C.fill=N.fill,C.inspect=N.inspect,C.toArrayBuffer=N.toArrayBuffer,C}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,n,r){(function(s,a,v,l,c,u,f,d,m){var v=e("buffer").Buffer,M=4,p=new v(M);p.fill(0),n.exports={hash:function(h,y,x,b){for(var T=y(function(_,w){_.length%M!=0&&(R=_.length+(M-_.length%M),_=v.concat([_,p],R));for(var R,z=[],L=w?_.readInt32BE:_.readInt32LE,F=0;F<_.length;F+=M)z.push(L.call(_,F));return z}(h=v.isBuffer(h)?h:new v(h),b),8*h.length),y=b,A=new v(x),E=y?A.writeInt32BE:A.writeInt32LE,S=0;S<T.length;S++)E.call(A,T[S],4*S,!0);return A}}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(e,n,r){(function(s,a,v,l,c,u,f,d,m){var v=e("buffer").Buffer,M=e("./sha"),p=e("./sha256"),h=e("./rng"),y={sha1:M,sha256:p,md5:e("./md5")},x=64,b=new v(x);function T(_,w){var R=y[_=_||"sha1"],z=[];return R||A("algorithm:",_,"is not yet supported"),{update:function(L){return v.isBuffer(L)||(L=new v(L)),z.push(L),L.length,this},digest:function(L){var F=v.concat(z),F=w?function(N,k,q){v.isBuffer(k)||(k=new v(k)),v.isBuffer(q)||(q=new v(q)),k.length>x?k=N(k):k.length<x&&(k=v.concat([k,b],x));for(var j=new v(x),Y=new v(x),st=0;st<x;st++)j[st]=54^k[st],Y[st]=92^k[st];return q=N(v.concat([j,q])),N(v.concat([Y,q]))}(R,w,F):R(F);return z=null,L?F.toString(L):F}}}function A(){var _=[].slice.call(arguments).join(" ");throw new Error([_,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}b.fill(0),r.createHash=function(_){return T(_)},r.createHmac=T,r.randomBytes=function(_,w){if(!w||!w.call)return new v(h(_));try{w.call(this,void 0,new v(h(_)))}catch(R){w(R)}};var E,S=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],g=function(_){r[_]=function(){A("sorry,",_,"is not implemented yet")}};for(E in S)g(S[E])}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,n,r){(function(s,a,o,l,c,u,f,d,m){var v=e("./helpers");function M(A,E){A[E>>5]|=128<<E%32,A[14+(E+64>>>9<<4)]=E;for(var S=1732584193,g=-271733879,_=-1732584194,w=271733878,R=0;R<A.length;R+=16){var z=S,L=g,F=_,N=w,S=h(S,g,_,w,A[R+0],7,-680876936),w=h(w,S,g,_,A[R+1],12,-389564586),_=h(_,w,S,g,A[R+2],17,606105819),g=h(g,_,w,S,A[R+3],22,-1044525330);S=h(S,g,_,w,A[R+4],7,-176418897),w=h(w,S,g,_,A[R+5],12,1200080426),_=h(_,w,S,g,A[R+6],17,-1473231341),g=h(g,_,w,S,A[R+7],22,-45705983),S=h(S,g,_,w,A[R+8],7,1770035416),w=h(w,S,g,_,A[R+9],12,-1958414417),_=h(_,w,S,g,A[R+10],17,-42063),g=h(g,_,w,S,A[R+11],22,-1990404162),S=h(S,g,_,w,A[R+12],7,1804603682),w=h(w,S,g,_,A[R+13],12,-40341101),_=h(_,w,S,g,A[R+14],17,-1502002290),S=y(S,g=h(g,_,w,S,A[R+15],22,1236535329),_,w,A[R+1],5,-165796510),w=y(w,S,g,_,A[R+6],9,-1069501632),_=y(_,w,S,g,A[R+11],14,643717713),g=y(g,_,w,S,A[R+0],20,-373897302),S=y(S,g,_,w,A[R+5],5,-701558691),w=y(w,S,g,_,A[R+10],9,38016083),_=y(_,w,S,g,A[R+15],14,-660478335),g=y(g,_,w,S,A[R+4],20,-405537848),S=y(S,g,_,w,A[R+9],5,568446438),w=y(w,S,g,_,A[R+14],9,-1019803690),_=y(_,w,S,g,A[R+3],14,-187363961),g=y(g,_,w,S,A[R+8],20,1163531501),S=y(S,g,_,w,A[R+13],5,-1444681467),w=y(w,S,g,_,A[R+2],9,-51403784),_=y(_,w,S,g,A[R+7],14,1735328473),S=x(S,g=y(g,_,w,S,A[R+12],20,-1926607734),_,w,A[R+5],4,-378558),w=x(w,S,g,_,A[R+8],11,-2022574463),_=x(_,w,S,g,A[R+11],16,1839030562),g=x(g,_,w,S,A[R+14],23,-35309556),S=x(S,g,_,w,A[R+1],4,-1530992060),w=x(w,S,g,_,A[R+4],11,1272893353),_=x(_,w,S,g,A[R+7],16,-155497632),g=x(g,_,w,S,A[R+10],23,-1094730640),S=x(S,g,_,w,A[R+13],4,681279174),w=x(w,S,g,_,A[R+0],11,-358537222),_=x(_,w,S,g,A[R+3],16,-722521979),g=x(g,_,w,S,A[R+6],23,76029189),S=x(S,g,_,w,A[R+9],4,-640364487),w=x(w,S,g,_,A[R+12],11,-421815835),_=x(_,w,S,g,A[R+15],16,530742520),S=b(S,g=x(g,_,w,S,A[R+2],23,-995338651),_,w,A[R+0],6,-198630844),w=b(w,S,g,_,A[R+7],10,1126891415),_=b(_,w,S,g,A[R+14],15,-1416354905),g=b(g,_,w,S,A[R+5],21,-57434055),S=b(S,g,_,w,A[R+12],6,1700485571),w=b(w,S,g,_,A[R+3],10,-1894986606),_=b(_,w,S,g,A[R+10],15,-1051523),g=b(g,_,w,S,A[R+1],21,-2054922799),S=b(S,g,_,w,A[R+8],6,1873313359),w=b(w,S,g,_,A[R+15],10,-30611744),_=b(_,w,S,g,A[R+6],15,-1560198380),g=b(g,_,w,S,A[R+13],21,1309151649),S=b(S,g,_,w,A[R+4],6,-145523070),w=b(w,S,g,_,A[R+11],10,-1120210379),_=b(_,w,S,g,A[R+2],15,718787259),g=b(g,_,w,S,A[R+9],21,-343485551),S=T(S,z),g=T(g,L),_=T(_,F),w=T(w,N)}return Array(S,g,_,w)}function p(A,E,S,g,_,w){return T((E=T(T(E,A),T(g,w)))<<_|E>>>32-_,S)}function h(A,E,S,g,_,w,R){return p(E&S|~E&g,A,E,_,w,R)}function y(A,E,S,g,_,w,R){return p(E&g|S&~g,A,E,_,w,R)}function x(A,E,S,g,_,w,R){return p(E^S^g,A,E,_,w,R)}function b(A,E,S,g,_,w,R){return p(S^(E|~g),A,E,_,w,R)}function T(A,E){var S=(65535&A)+(65535&E);return(A>>16)+(E>>16)+(S>>16)<<16|65535&S}n.exports=function(A){return v.hash(A,M,16)}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,n,r){(function(s,a,o,l,c,u,f,d,m){n.exports=function(v){for(var M,p=new Array(v),h=0;h<v;h++)!(3&h)&&(M=4294967296*Math.random()),p[h]=M>>>((3&h)<<3)&255;return p}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(e,n,r){(function(s,a,o,l,c,u,f,d,m){var v=e("./helpers");function M(y,x){y[x>>5]|=128<<24-x%32,y[15+(x+64>>9<<4)]=x;for(var b,T,A,E=Array(80),S=1732584193,g=-271733879,_=-1732584194,w=271733878,R=-1009589776,z=0;z<y.length;z+=16){for(var L=S,F=g,N=_,k=w,q=R,j=0;j<80;j++){E[j]=j<16?y[z+j]:h(E[j-3]^E[j-8]^E[j-14]^E[j-16],1);var Y=p(p(h(S,5),(Y=g,T=_,A=w,(b=j)<20?Y&T|~Y&A:!(b<40)&&b<60?Y&T|Y&A|T&A:Y^T^A)),p(p(R,E[j]),(b=j)<20?1518500249:b<40?1859775393:b<60?-1894007588:-899497514)),R=w,w=_,_=h(g,30),g=S,S=Y}S=p(S,L),g=p(g,F),_=p(_,N),w=p(w,k),R=p(R,q)}return Array(S,g,_,w,R)}function p(y,x){var b=(65535&y)+(65535&x);return(y>>16)+(x>>16)+(b>>16)<<16|65535&b}function h(y,x){return y<<x|y>>>32-x}n.exports=function(y){return v.hash(y,M,20,!0)}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,n,r){(function(s,a,o,l,c,u,f,d,m){function v(x,b){var T=(65535&x)+(65535&b);return(x>>16)+(b>>16)+(T>>16)<<16|65535&T}function M(x,b){var T,A=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),E=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),S=new Array(64);x[b>>5]|=128<<24-b%32,x[15+(b+64>>9<<4)]=b;for(var g,_,w=0;w<x.length;w+=16){for(var R=E[0],z=E[1],L=E[2],F=E[3],N=E[4],k=E[5],q=E[6],j=E[7],Y=0;Y<64;Y++)S[Y]=Y<16?x[Y+w]:v(v(v((_=S[Y-2],h(_,17)^h(_,19)^y(_,10)),S[Y-7]),(_=S[Y-15],h(_,7)^h(_,18)^y(_,3))),S[Y-16]),T=v(v(v(v(j,h(_=N,6)^h(_,11)^h(_,25)),N&k^~N&q),A[Y]),S[Y]),g=v(h(g=R,2)^h(g,13)^h(g,22),R&z^R&L^z&L),j=q,q=k,k=N,N=v(F,T),F=L,L=z,z=R,R=v(T,g);E[0]=v(R,E[0]),E[1]=v(z,E[1]),E[2]=v(L,E[2]),E[3]=v(F,E[3]),E[4]=v(N,E[4]),E[5]=v(k,E[5]),E[6]=v(q,E[6]),E[7]=v(j,E[7])}return E}var p=e("./helpers"),h=function(x,b){return x>>>b|x<<32-b},y=function(x,b){return x>>>b};n.exports=function(x){return p.hash(x,M,32,!0)}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,n,r){(function(s,a,o,l,c,u,f,d,m){r.read=function(v,M,p,h,w){var x,b,T=8*w-h-1,A=(1<<T)-1,E=A>>1,S=-7,g=p?w-1:0,_=p?-1:1,w=v[M+g];for(g+=_,x=w&(1<<-S)-1,w>>=-S,S+=T;0<S;x=256*x+v[M+g],g+=_,S-=8);for(b=x&(1<<-S)-1,x>>=-S,S+=h;0<S;b=256*b+v[M+g],g+=_,S-=8);if(x===0)x=1-E;else{if(x===A)return b?NaN:1/0*(w?-1:1);b+=Math.pow(2,h),x-=E}return(w?-1:1)*b*Math.pow(2,x-h)},r.write=function(v,M,p,h,y,R){var b,T,A=8*R-y-1,E=(1<<A)-1,S=E>>1,g=y===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=h?0:R-1,w=h?1:-1,R=M<0||M===0&&1/M<0?1:0;for(M=Math.abs(M),isNaN(M)||M===1/0?(T=isNaN(M)?1:0,b=E):(b=Math.floor(Math.log(M)/Math.LN2),M*(h=Math.pow(2,-b))<1&&(b--,h*=2),2<=(M+=1<=b+S?g/h:g*Math.pow(2,1-S))*h&&(b++,h/=2),E<=b+S?(T=0,b=E):1<=b+S?(T=(M*h-1)*Math.pow(2,y),b+=S):(T=M*Math.pow(2,S-1)*Math.pow(2,y),b=0));8<=y;v[p+_]=255&T,_+=w,T/=256,y-=8);for(b=b<<y|T,A+=y;0<A;v[p+_]=255&b,_+=w,b/=256,A-=8);v[p+_-w]|=128*R}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,n,r){(function(s,a,o,l,c,u,f,d,m){var v,M,p;function h(){}(s=n.exports={}).nextTick=(M=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,M?function(y){return window.setImmediate(y)}:p?(v=[],window.addEventListener("message",function(y){var x=y.source;x!==window&&x!==null||y.data!=="process-tick"||(y.stopPropagation(),0<v.length&&v.shift()())},!0),function(y){v.push(y),window.postMessage("process-tick","*")}):function(y){setTimeout(y,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=h,s.addListener=h,s.once=h,s.off=h,s.removeListener=h,s.removeAllListeners=h,s.emit=h,s.binding=function(y){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(y){throw new Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Ch);var yx=Ch.exports;const Mx=mo(yx);var Rh=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],Sx=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Ph=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],Ex=Rh,bx=Ex.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),ka=Ph;ka=ka.slice().filter(function(i){return!/^(gl\_|texture)/.test(i)});var Ax=ka.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Tx=Fx,wx=Rh,_u=Sx,Cx=Ph,Rx=bx,Px=Ax,ln=999,vu=9999,Ea=0,ba=1,xu=2,yu=3,Mu=4,Dr=5,Lx=6,Dx=7,Ix=8,Su=9,Ux=10,Eu=11,Nx=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Fx(i){var t=0,e=0,n=ln,r,s,a=[],o=[],l=1,c=0,u=0,f=!1,d=!1,m="",v;i=i||{};var M=Cx,p=wx;i.version==="300 es"&&(M=Px,p=Rx);for(var h={},y={},t=0;t<M.length;t++)h[M[t]]=!0;for(var t=0;t<p.length;t++)y[p[t]]=!0;return function(k){return o=[],k!==null?b(k):T()};function x(k){k.length&&o.push({type:Nx[n],data:k,position:u,line:l,column:c})}function b(k){t=0,k.toString&&(k=k.toString()),m+=k.replace(/\r\n/g,`
`),v=m.length;for(var q;r=m[t],t<v;){switch(q=t,n){case Ea:t=_();break;case ba:t=g();break;case xu:t=S();break;case yu:t=w();break;case Mu:t=L();break;case Eu:t=z();break;case Dr:t=F();break;case vu:t=N();break;case Su:t=E();break;case ln:t=A();break}if(q!==t)switch(m[q]){case`
`:c=0,++l;break;default:++c;break}}return e+=t,m=m.slice(t),o}function T(k){return a.length&&x(a.join("")),n=Ux,x("(eof)"),o}function A(){return a=a.length?[]:a,s==="/"&&r==="*"?(u=e+t-1,n=Ea,s=r,t+1):s==="/"&&r==="/"?(u=e+t-1,n=ba,s=r,t+1):r==="#"?(n=xu,u=e+t,t):/\s/.test(r)?(n=Su,u=e+t,t):(f=/\d/.test(r),d=/[^\w_]/.test(r),u=e+t,n=f?Mu:d?yu:vu,t)}function E(){return/[^\s]/g.test(r)?(x(a.join("")),n=ln,t):(a.push(r),s=r,t+1)}function S(){return(r==="\r"||r===`
`)&&s!=="\\"?(x(a.join("")),n=ln,t):(a.push(r),s=r,t+1)}function g(){return S()}function _(){return r==="/"&&s==="*"?(a.push(r),x(a.join("")),n=ln,t+1):(a.push(r),s=r,t+1)}function w(){if(s==="."&&/\d/.test(r))return n=Dr,t;if(s==="/"&&r==="*")return n=Ea,t;if(s==="/"&&r==="/")return n=ba,t;if(r==="."&&a.length){for(;R(a););return n=Dr,t}if(r===";"||r===")"||r==="("){if(a.length)for(;R(a););return x(r),n=ln,t+1}var k=a.length===2&&r!=="=";if(/[\w_\d\s]/.test(r)||k){for(;R(a););return n=ln,t}return a.push(r),s=r,t+1}function R(k){var q=0,j,Y;do{if(j=_u.indexOf(k.slice(0,k.length+q).join("")),Y=_u[j],j===-1){if(q--+k.length>0)continue;Y=k.slice(0,1).join("")}return x(Y),u+=Y.length,a=a.slice(Y.length),a.length}while(!0)}function z(){return/[^a-fA-F0-9]/.test(r)?(x(a.join("")),n=ln,t):(a.push(r),s=r,t+1)}function L(){return r==="."||/[eE]/.test(r)?(a.push(r),n=Dr,s=r,t+1):r==="x"&&a.length===1&&a[0]==="0"?(n=Eu,a.push(r),s=r,t+1):/[^\d]/.test(r)?(x(a.join("")),n=ln,t):(a.push(r),s=r,t+1)}function F(){return r==="f"&&(a.push(r),s=r,t+=1),/[eE]/.test(r)||(r==="-"||r==="+")&&/[eE]/.test(s)?(a.push(r),s=r,t+1):/[^\d]/.test(r)?(x(a.join("")),n=ln,t):(a.push(r),s=r,t+1)}function N(){if(/[^\d\w_]/.test(r)){var k=a.join("");return y[k]?n=Ix:h[k]?n=Dx:n=Lx,x(a.join("")),n=ln,t}return a.push(r),s=r,t+1}}var Ox=Tx,Bx=zx;function zx(i,t){var e=Ox(t),n=[];return n=n.concat(e(i)),n=n.concat(e(null)),n}const Hx=mo(Bx);var Vx=Gx;function Gx(i){for(var t=[],e=0;e<i.length;e++)i[e].type!=="eof"&&t.push(i[e].data);return t.join("")}const bu=mo(Vx);var kx=Wx;function Wx(i){var t=null,e=null,n=0,r=0,s=0,a=0,o=0,l=[],c,u,f;for(c=0,u;c<i.length;c++)if(f=i[c],f.data==="{"){if(n&&n++||(u=m(c,qn(")"),qn()),u<0)||(a=u,u=m(u,qn("("),qn(")")),u<0)||(o=u,u=m(u,Ir),u<0)||i[u].type!=="ident"||(e=i[u].data,u=m(u,Ir),u<0))continue;n=1,r=c,t=i[u].data,s=u;var d=m(u,Ir);switch(i[d]&&i[d].data){case"lowp":case"highp":case"mediump":s=d}}else if(n&&f.data==="}"){if(--n)continue;l.push({name:e,type:t,body:[r+1,c],args:[o,a+1],outer:[s,c+1]})}for(c=0;c<i.length;c++)if(f=i[c],f.data===";"){if(u=m(c,qn(")"),qn()),u<0||(a=u,u=m(u,qn("("),qn(")")),u<0)||(o=u,u=m(u,Ir),u<0)||i[u].type!=="ident"||(e=i[u].data,u=m(u,Ir),u<0)||i[u].type==="operator"||i[u].data==="return")continue;t=i[u].data,l.push({name:e,type:t,body:!1,args:[o,a+1],outer:[u,c+1]})}return l.sort(function(v,M){return v.outer[0]-M.outer[0]});function m(v,M,p){for(var h=v-1;h>=0;h--){if(M(i[h]))return h;if(p&&p(i[h]))return-1}return-1}}function qn(i){return function(t){return t.type==="operator"&&(!i||t.data===i)}}function Ir(i){return i.type!=="whitespace"}const Xx=mo(kx);function jx(i,t){if(typeof i!="object"||i===null)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var n=e.call(i,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}function Lh(i){var t=jx(i,"string");return typeof t=="symbol"?t:String(t)}function Zt(i,t,e){return t=Lh(t),t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function Au(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function nr(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Au(Object(e),!0).forEach(function(n){Zt(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Au(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function Yx(i,t){if(i==null)return{};var e={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(e[r]=i[r]);return e}function qx(i,t){if(i==null)return{};var e=Yx(i,t),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(e[n]=i[n])}return e}function $x(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function Kx(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,Lh(n.key),n)}}function Zx(i,t,e){return t&&Kx(i.prototype,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function Dh(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Wa(i,t){return Wa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Wa(i,t)}function Jx(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&Wa(i,t)}function so(i){return so=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},so(i)}function Qx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ty(i,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Dh(i)}function ey(i){var t=Qx();return function(){var n=so(i),r;if(t){var s=so(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return ty(this,r)}}var Ut={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},Ue,ir,ny=(Ue={},Zt(Ue,"".concat(Ut.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Ut.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),Zt(Ue,"".concat(Ut.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Ut.position,`;
  `)}),Zt(Ue,"".concat(Ut.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Ut.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),Zt(Ue,"".concat(Ut.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Ut.pointSize,`;
    `)}),Zt(Ue,"".concat(Ut.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Ut.diffuseColor,`;
  `)}),Zt(Ue,"".concat(Ut.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Ut.fragColor,`;
  `)}),Zt(Ue,"".concat(Ut.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Ut.emissive,`;
    `)}),Zt(Ue,"".concat(Ut.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Ut.roughness,`;
    `)}),Zt(Ue,"".concat(Ut.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Ut.metalness,`;
    `)}),Zt(Ue,"".concat(Ut.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Ut.ao,`;
    `)}),Zt(Ue,"".concat(Ut.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Ut.bump," - (dot(").concat(Ut.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),Zt(Ue,"".concat(Ut.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Ut.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Ut.depthAlpha,`;
    `)}),Ue),iy=(ir={},Zt(ir,"".concat(Ut.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Ut.position,`, 1.0 );
  `)}),Zt(ir,"".concat(Ut.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Ut.position,`;
  `)}),Zt(ir,"".concat(Ut.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ut.diffuseColor,`;
  `)}),Zt(ir,"".concat(Ut.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ut.fragColor,`;
  `)}),ir),ry=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,sy=`
    varying mat4 csm_internal_vModelViewMatrix;
`,oy=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,ay=`
    varying mat4 csm_internal_vModelViewMatrix;
`,ly=`
    
`,Ne,cy=(Ne={},Zt(Ne,"".concat(Ut.position),"*"),Zt(Ne,"".concat(Ut.positionRaw),"*"),Zt(Ne,"".concat(Ut.normal),"*"),Zt(Ne,"".concat(Ut.pointSize),["PointsMaterial"]),Zt(Ne,"".concat(Ut.diffuseColor),"*"),Zt(Ne,"".concat(Ut.fragColor),"*"),Zt(Ne,"".concat(Ut.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),Zt(Ne,"".concat(Ut.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),Zt(Ne,"".concat(Ut.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),Zt(Ne,"".concat(Ut.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),Zt(Ne,"".concat(Ut.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),Zt(Ne,"".concat(Ut.depthAlpha),"*"),Ne),uy=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],hy=function(t,e,n){return t.split(e).join(n)},fy=function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},dy=function(t,e){return new RegExp("\\b".concat(fy(e),"\\b")).test(t)};function py(i){try{new i}catch(t){if(t.message.indexOf("is not a constructor")>=0)return!1}return!0}function my(i,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(i,t);var n=Object.getPrototypeOf(t);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(r){var s=typeof r[1].get=="function",a=typeof r[1].set=="function",o=typeof r[1].value=="function",l=r[0]==="constructor";return(s||a||o)&&!l}).forEach(function(r){if(typeof i[r[0]]=="function"){e||console.warn("Function ".concat(r[0]," already exists on CSM, renaming to base_").concat(r[0]));var s="base_".concat(r[0]);i[s]=r[1].value.bind(i);return}Object.defineProperty(i,r[0],r[1])})}function gy(i){var t=i.toString().trim(),e=t.substring(t.indexOf("{")+1,t.lastIndexOf("}"));return e.trim().length===0}function Tu(i){return i.replace(/\s/g,"")}function _y(i,t,e){var n=i.lastIndexOf(t);return n===-1?i:i.substring(0,n)+e+i.substring(n+t.length)}var Ih=function(i){Jx(e,i);var t=ey(e);function e(n){var r,s=n.baseMaterial,a=n.fragmentShader,o=n.vertexShader,l=n.uniforms,c=n.patchMap,u=n.cacheKey,f=n.silent,d=qx(n,uy);$x(this,e);var m;if(py(s)?m=new s(d):(m=s,Object.assign(m,d)),m.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");r=t.call(this),my(Dh(r),m,f),r.__csm={patchMap:c||{},fragmentShader:a||"",vertexShader:o||"",cacheKey:u,baseMaterial:s,instanceID:Wu.generateUUID(),type:m.type,isAlreadyExtended:!gy(m.onBeforeCompile),cacheHash:"",silent:f},r.uniforms=nr(nr({},r.uniforms||{}),l||{});{var v=r.__csm,M=v.fragmentShader,p=v.vertexShader,h=r.uniforms;r.__csm.cacheHash=r.getCacheHash(),r.generateMaterial(M,p,h)}return r}return Zx(e,[{key:"update",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=r.uniforms||this.uniforms,Object.assign(this.__csm,r);var s=this.__csm,a=s.fragmentShader,o=s.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(a,o,l)}},{key:"clone",value:function(){var r={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},s=new this.constructor(r);return Object.assign(this,s),s}},{key:"getCacheHash",value:function(){var r=this.__csm,s=r.fragmentShader,a=r.vertexShader,o=this.uniforms,l=Object.values(o).reduce(function(u,f){var d=f.value;return u+JSON.stringify(d)},""),c=Tu(s)+Tu(a)+l;return c.trim().length>0?Mx(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(r,s,a){var o=this,l=this.parseShader(r),c=this.parseShader(s);this.uniforms=a||{},this.customProgramCacheKey=function(){return o.__csm.cacheHash};var u=function(m){try{if(l){var v=o.patchShader(l,m.fragmentShader,!0);m.fragmentShader=o.getMaterialDefine()+v}if(c){var M=o.patchShader(c,m.vertexShader);m.vertexShader=`#define IS_VERTEX;
`+M,m.vertexShader=o.getMaterialDefine()+m.vertexShader}m.uniforms=nr(nr({},m.uniforms),o.uniforms),o.uniforms=m.uniforms}catch(p){console.error(p)}};if(this.__csm.isAlreadyExtended){var f=this.onBeforeCompile;this.onBeforeCompile=function(d,m){f(d,m),u(d)}}else this.onBeforeCompile=u;this.needsUpdate=!0}},{key:"patchShader",value:function(r,s,a){var o=this,l=s,c=nr(nr({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(d){Object.keys(c[d]).forEach(function(m){var v=cy[d],M=o.__csm.type;if(d==="*"||dy(r.main,d))if(!v||Array.isArray(v)&&v.includes(M)||v==="*")l=hy(l,m,c[d][m]);else throw new Error("CSM: ".concat(d," is not available in ").concat(M,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(a?ay:sy,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(r.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(ry,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(a?ly:oy,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var u=this.__csm.isAlreadyExtended,f=l.includes("// CSM_END");return u&&f?l=_y(l,"// CSM_END",`
          // CSM_END
          `.concat(r.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(r.main,`
        // CSM_END
          `)),l=r.defines+l,l}},{key:"parseShader",value:function(r){if(r){var s=r.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),a=Hx(s),o=Xx(a),l=o.map(function(f){return f.name}).indexOf("main"),c=bu(a.slice(0,l>=0?o[l].outer[0]:void 0)),u=l>=0?this.getShaderFromIndex(a,o[l].body):"";return{defines:"",header:c,main:u}}}},{key:"getMaterialDefine",value:function(){var r=this.__csm.type;return r?"#define IS_".concat(r.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return iy;default:return ny}}},{key:"getShaderFromIndex",value:function(r,s){return bu(r.slice(s[0],s[1]))}}]),e}(_r),Uh=`uniform float uPositionFrequency;\r
uniform float uStrenght;\r
uniform float uWarpFrequency;\r
uniform float uWarpStrenght;\r
uniform float uTime;\r
uniform vec3 uColorWaterDeep;\r
uniform vec3 uColorWaterSurface;\r
uniform vec3 uColorSand;\r
uniform vec3 uColorGrass;\r
uniform vec3 uColorSnow;\r
uniform vec3 uColorRock;\r

varying vec3 vPosition;\r
varying float vUpDot;\r

vec3 permute(vec3 x) { return mod(((x*44.0)+1.0)*x, 299.0); }

float simplexNoise2d(vec2 v)
{
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 299.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}\r

float getElevation (vec2 position)\r
{

    \r

    vec2 warpedPosition = position;\r
    warpedPosition += uTime * 0.2;\r
    warpedPosition += simplexNoise2d(warpedPosition * uPositionFrequency * uWarpFrequency) * uWarpStrenght;\r

    float elevation = 0.0;\r
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency      ) / 2.0;\r
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency * 2.0) / 4.0;\r
    elevation += simplexNoise2d(warpedPosition * uPositionFrequency * 4.0) / 8.0 ;

    float elevationSign = sign(elevation);\r
    \r
    elevation = pow(abs(elevation), 2.0) * elevationSign;\r
    elevation *= uStrenght;

    return elevation;\r
}\r

void main()\r
{

    

    float shift = 0.01;\r
    vec3 positionA = position  + vec3( shift, 0.0, 0.0);\r
    vec3 positionB = position  + vec3(0.0, 0.0, -shift);\r

    
    float elevation = getElevation(csm_Position.xz);\r
    csm_Position.y += elevation;

    positionA.y = getElevation(positionA.xz);\r
    positionB.y = getElevation(positionB.xz);

    

    vec3 toA = normalize(positionA - csm_Position);\r
    vec3 toB = normalize(positionB - csm_Position);

    

    csm_Normal = cross(toA, toB);\r

    

    vPosition = csm_Position;\r
    vPosition.xz += uTime * 0.2;\r
    vUpDot = dot(csm_Normal, vec3(0.0, 1.0, 0.0));\r

}`,vy=`uniform vec3 uColorWaterDeep;\r
uniform vec3 uColorWaterSurface;\r
uniform vec3 uColorSand;\r
uniform vec3 uColorGrass;\r
uniform vec3 uColorSnow;\r
uniform vec3 uColorRock;

varying vec3 vPosition;\r
varying float vUpDot;\r

vec3 permute(vec3 x) { return mod(((x*44.0)+1.0)*x, 299.0); }

float simplexNoise2d(vec2 v)
{
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 299.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}\r

void main()\r
{\r
    

    vec3 color = vec3(1.0);\r

    
    float surfaceWaterMix = smoothstep(-1.0, -0.1, vPosition.y);\r
    color = mix(uColorWaterDeep, uColorWaterSurface, surfaceWaterMix);

    
    float sandMix = step(-0.1, vPosition.y);\r
    color = mix(color, uColorSand, sandMix);

    

    float grassMix = step(-0.06, vPosition.y);\r
    color = mix(color, uColorGrass, grassMix);

    

    float rockMix = vUpDot;\r
    rockMix = 1.0 - step(0.8, rockMix);\r
    rockMix *= step(-0.06, vPosition.y);\r
    color = mix(color, uColorRock, rockMix);\r

    

    float snowThreshold = 0.45;\r
    snowThreshold += simplexNoise2d(vPosition.xz * 15.0)* 0.1;\r
    float snowMix = step(snowThreshold, vPosition.y);\r
    color = mix(color, uColorSnow, snowMix);\r

    
    \r
    csm_DiffuseColor = vec4(color, 1.0);\r
 \r
}`;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class vn{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),vn.nextNameID=vn.nextNameID||0,this.$name.id=`lil-gui-name-${++vn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class xy extends vn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Xa(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const yy={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Xa,toHexString:Xa},kr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},My={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=kr.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return kr.toHexString(r)}},Sy={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=kr.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return kr.toHexString(r)}},Ey=[yy,kr,My,Sy];function by(i){return Ey.find(t=>t.match(i))}class Ay extends vn{constructor(t,e,n,r){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=by(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Xa(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Aa extends vn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ty extends vn{constructor(t,e,n,r,s,a){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+y),this.$input.value=this.getValue())},r=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},s=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let a=!1,o,l,c,u,f;const d=5,m=y=>{o=y.clientX,l=c=y.clientY,a=!0,u=this.getValue(),f=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",M)},v=y=>{if(a){const x=y.clientX-o,b=y.clientY-l;Math.abs(b)>d?(y.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&M()}if(!a){const x=y.clientY-c;f-=x*this._step*this._arrowKeyMultiplier(y),u+f>this._max?f=this._max-u:u+f<this._min&&(f=this._min-u),this._snapClampSetValue(u+f)}c=y.clientY},M=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",M)},p=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(h,y,x,b,T)=>(h-y)/(x-y)*(T-b)+b,e=h=>{const y=this.$slider.getBoundingClientRect();let x=t(h,y.left,y.right,this._min,this._max);this._snapClampSetValue(x)},n=h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=h=>{e(h.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),a=!1},u=h=>{h.touches.length>1||(this._hasScrollBar?(o=h.touches[0].clientX,l=h.touches[0].clientY,a=!0):c(h),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",d))},f=h=>{if(a){const y=h.touches[0].clientX-o,x=h.touches[0].clientY-l;Math.abs(y)>Math.abs(x)?c(h):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",d))}else h.preventDefault(),e(h.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),v=400;let M;const p=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const x=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(M),M=setTimeout(m,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class wy extends vn{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Cy extends vn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Ry=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Py(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let wu=!1;class rl{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!wu&&o&&(Py(Ry),wu=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(t,e,n,r,s){if(Object(n)===n)return new wy(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new Ty(this,t,e,n,r,s);case"boolean":return new xy(this,t,e);case"string":return new Cy(this,t,e);case"function":return new Aa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new Ay(this,t,e,n)}addFolder(t){const e=new rl({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Aa||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Aa)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Mn=new rl({width:325}),re={},Ly=new dh,jr=new y0(Ly),Nh=jr.load("/textures/wood_floor_worn_diff_1k.jpg");Nh.colorSpace=ce;const Dy=jr.load("/textures/wood_floor_worn_nor_gl_1k.jpg");Dy.colorSpace=ce;const Fh=jr.load("/wood_floor_worn_arm_1k.jpg");Fh.colorSpace=ce;const Oh=jr.load("/textures/wood_floor_worn_arm_1k.jpg");Oh.colorSpace=ce;const Bh=jr.load("/textureswood_floor_worn_arm_1k.jpg");Bh.colorSpace=ce;const zh=document.querySelector("canvas.webgl"),Bn=new f0,Iy=new C0;Iy.load("/spruit_sunrise.hdr",i=>{i.mapping=$s,Bn.background=i,Bn.backgroundBlurriness=.1,Bn.environment=i});const go=new Wr(10,10,500,500);go.deleteAttribute("uv");go.deleteAttribute("normal");go.rotateX(-Math.PI*.5);re.colorWaterDeep="#037cb0";re.colorWaterSurface="#66a8ff";re.colorSand="#e4b91b";re.colorGrass="#85d534";re.colorSnow="#ffffff";re.colorRock="#663e05";const Xe={uTime:new Ve(0),uPositionFrequency:new Ve(.2),uStrenght:new Ve(2.5),uWarpFrequency:new Ve(5),uWarpStrenght:new Ve(.5),uColorWaterDeep:new Ve(new Gt(re.colorWaterDeep)),uColorWaterSurface:new Ve(new Gt(re.colorWaterSurface)),uColorSand:new Ve(new Gt(re.colorSand)),uColorGrass:new Ve(new Gt(re.colorGrass)),uColorSnow:new Ve(new Gt(re.colorSnow)),uColorRock:new Ve(new Gt(re.colorRock))};Mn.add(Xe.uPositionFrequency,"value").min(0).max(1).step(.001).name("Position Frequency");Mn.add(Xe.uStrenght,"value").min(0).max(10).step(.001).name("Strenght");Mn.add(Xe.uWarpFrequency,"value").min(0).max(10).step(.001).name("Warp Frequency");Mn.add(Xe.uWarpStrenght,"value").min(0).max(1).step(.001).name("Warp Strenght");Mn.addColor(re,"colorWaterDeep").onChange(()=>Xe.uColorWaterDeep.value.set(re.colorWaterDeep));Mn.addColor(re,"colorWaterSurface").onChange(()=>Xe.uColorWaterSurface.value.set(re.colorWaterSurface));Mn.addColor(re,"colorSand").onChange(()=>Xe.uColorSand.value.set(re.colorSand));Mn.addColor(re,"colorGrass").onChange(()=>Xe.uColorGrass.value.set(re.colorGrass));Mn.addColor(re,"colorSnow").onChange(()=>Xe.uColorSnow.value.set(re.colorSnow));Mn.addColor(re,"colorRock").onChange(()=>Xe.uColorRock.value.set(re.colorRock));const Uy=new Ih({baseMaterial:Ja,silent:!0,vertexShader:Uh,fragmentShader:vy,uniforms:Xe,metalness:0,roughness:.5,color:"#85d534"}),Ny=new Ih({baseMaterial:hh,silent:!0,vertexShader:Uh,uniforms:Xe,depthPacking:Vu}),_o=new pn(go,Uy);_o.customDepthMaterial=Ny;_o.receiveShadow=!0;_o.castShadow=!0;Bn.add(_o);const sl=new pn(new Wr(10,10,1,1),new p0({transmission:1,roughness:.3}));sl.rotation.x=-Math.PI*.5;sl.position.y=-.1;Bn.add(sl);const Fy=new io(new wi(11,2,11)),Oy=new io(new wi(10,2.1,10)),By=new xx,Yr=By.evaluate(Fy,Oy,Eh);Yr.geometry.clearGroups();Yr.material=new Ja({map:Nh,transparent:!0,aoMap:Bh,roughnessMap:Oh,metalnessMap:Fh});Yr.castShadow=!0;Yr.receiveShadow=!0;Bn.add(Yr);const Sn=new b0("#ffffff",2);Sn.position.set(6.25,3,4);Sn.castShadow=!0;Sn.shadow.mapSize.set(1024,1024);Sn.shadow.camera.near=.1;Sn.shadow.camera.far=30;Sn.shadow.camera.top=8;Sn.shadow.camera.right=8;Sn.shadow.camera.bottom=-8;Sn.shadow.camera.left=-8;Bn.add(Sn);const Ge={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};window.addEventListener("resize",()=>{Ge.width=window.innerWidth,Ge.height=window.innerHeight,Ge.pixelRatio=Math.min(window.devicePixelRatio,2),mr.aspect=Ge.width/Ge.height,mr.updateProjectionMatrix(),Hn.setSize(Ge.width,Ge.height),Hn.setPixelRatio(Ge.pixelRatio)});const mr=new $e(35,Ge.width/Ge.height,.1,100);mr.position.set(-10,6,-2);Bn.add(mr);const Hh=new w0(mr,zh);Hh.enableDamping=!0;const Hn=new fh({canvas:zh,antialias:!0});Hn.shadowMap.enabled=!0;Hn.shadowMap.type=Ru;Hn.toneMapping=Lu;Hn.toneMappingExposure=1;Hn.setSize(Ge.width,Ge.height);Hn.setPixelRatio(Ge.pixelRatio);const zy=new A0,Vh=()=>{const i=zy.getElapsedTime();Xe.uTime.value=i,Hh.update(),Hn.render(Bn,mr),window.requestAnimationFrame(Vh)};Vh();
//# sourceMappingURL=index-BRkzQ4_l.js.map
