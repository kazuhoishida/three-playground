var me=Object.defineProperty,he=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var ne=(t,a,r)=>a in t?me(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,T=(t,a)=>{for(var r in a||(a={}))oe.call(a,r)&&ne(t,r,a[r]);if(H)for(var r of H(a))ae.call(a,r)&&ne(t,r,a[r]);return t},G=(t,a)=>he(t,pe(a));var I=(t,a)=>{var r={};for(var o in t)oe.call(t,o)&&a.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&H)for(var o of H(t))a.indexOf(o)<0&&ae.call(t,o)&&(r[o]=t[o]);return r};import{D as fe,H as O,F as q,a as $,L as ue,b as W,r as n,_ as ie,u as Y,S as ge,W as Ee,c as K,d as _e,B as ve,C as be,e as xe,f as ye,E as we,g as Be,V as Me,h as Ae,A as Ce,i as Fe,j as C,k as J,l as e,m as p,n as U,P as z,O as V,o as Z,p as Re,q as Pe,R as Se}from"./index.fa8e2241.js";class De extends fe{constructor(a){super(a),this.type=O}parse(a){const c=function(i,d){switch(i){case 1:console.error("THREE.RGBELoader Read Error: "+(d||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(d||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(d||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(d||""))}return-1},F=`
`,M=function(i,d,E){d=d||1024;let b=i.pos,_=-1,l=0,v="",m=String.fromCharCode.apply(null,new Uint16Array(i.subarray(b,b+128)));for(;0>(_=m.indexOf(F))&&l<d&&b<i.byteLength;)v+=m,l+=m.length,b+=128,m+=String.fromCharCode.apply(null,new Uint16Array(i.subarray(b,b+128)));return-1<_?(E!==!1&&(i.pos+=l+_+1),v+m.slice(0,_)):!1},B=function(i){const d=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,h=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*FORMAT=(\S+)\s*$/,_=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,l={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let v,m;if(i.pos>=i.byteLength||!(v=M(i)))return c(1,"no header found");if(!(m=v.match(d)))return c(3,"bad initial token");for(l.valid|=1,l.programtype=m[1],l.string+=v+`
`;v=M(i),v!==!1;){if(l.string+=v+`
`,v.charAt(0)==="#"){l.comments+=v+`
`;continue}if((m=v.match(E))&&(l.gamma=parseFloat(m[1])),(m=v.match(h))&&(l.exposure=parseFloat(m[1])),(m=v.match(b))&&(l.valid|=2,l.format=m[1]),(m=v.match(_))&&(l.valid|=4,l.height=parseInt(m[1],10),l.width=parseInt(m[2],10)),l.valid&2&&l.valid&4)break}return l.valid&2?l.valid&4?l:c(3,"missing image size specifier"):c(3,"missing format specifier")},P=function(i,d,E){const h=d;if(h<8||h>32767||i[0]!==2||i[1]!==2||i[2]&128)return new Uint8Array(i);if(h!==(i[2]<<8|i[3]))return c(3,"wrong scanline width");const b=new Uint8Array(4*d*E);if(!b.length)return c(4,"unable to allocate buffer space");let _=0,l=0;const v=4*h,m=new Uint8Array(4),y=new Uint8Array(v);let te=E;for(;te>0&&l<i.byteLength;){if(l+4>i.byteLength)return c(1);if(m[0]=i[l++],m[1]=i[l++],m[2]=i[l++],m[3]=i[l++],m[0]!=2||m[1]!=2||(m[2]<<8|m[3])!=h)return c(3,"bad rgbe scanline format");let j=0,S;for(;j<v&&l<i.byteLength;){S=i[l++];const D=S>128;if(D&&(S-=128),S===0||j+S>v)return c(3,"bad scanline data");if(D){const k=i[l++];for(let re=0;re<S;re++)y[j++]=k}else y.set(i.subarray(l,l+S),j),j+=S,l+=S}const de=h;for(let D=0;D<de;D++){let k=0;b[_]=y[D+k],k+=h,b[_+1]=y[D+k],k+=h,b[_+2]=y[D+k],k+=h,b[_+3]=y[D+k],_+=4}te--}return b},A=function(i,d,E,h){const b=i[d+3],_=Math.pow(2,b-128)/255;E[h+0]=i[d+0]*_,E[h+1]=i[d+1]*_,E[h+2]=i[d+2]*_,E[h+3]=1},w=function(i,d,E,h){const b=i[d+3],_=Math.pow(2,b-128)/255;E[h+0]=$.toHalfFloat(Math.min(i[d+0]*_,65504)),E[h+1]=$.toHalfFloat(Math.min(i[d+1]*_,65504)),E[h+2]=$.toHalfFloat(Math.min(i[d+2]*_,65504)),E[h+3]=$.toHalfFloat(1)},R=new Uint8Array(a);R.pos=0;const g=B(R);if(g!==-1){const i=g.width,d=g.height,E=P(R.subarray(R.pos),i,d);if(E!==-1){let h,b,_,l;switch(this.type){case q:l=E.length/4;const v=new Float32Array(l*4);for(let y=0;y<l;y++)A(E,y*4,v,y*4);h=v,_=q;break;case O:l=E.length/4;const m=new Uint16Array(l*4);for(let y=0;y<l;y++)w(E,y*4,m,y*4);h=m,_=O;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:i,height:d,data:h,header:g.string,gamma:g.gamma,exposure:g.exposure,format:b,type:_}}}return null}setDataType(a){return this.type=a,this}load(a,r,o,u){function f(s,c){switch(s.type){case q:s.encoding=ue,s.minFilter=W,s.magFilter=W,s.generateMipmaps=!1,s.flipY=!0;break;case O:s.encoding=ue,s.minFilter=W,s.magFilter=W,s.generateMipmaps=!1,s.flipY=!0;break}r&&r(s,c)}return super.load(a,f,o,u)}}function ke(t){const a=t+"BufferGeometry";return n.exports.forwardRef((s,f)=>{var c=s,{args:r,children:o}=c,u=I(c,["args","children"]);return n.exports.createElement("mesh",ie({ref:f},u),n.exports.createElement(a,{attach:"geometry",args:r}),o)})}const Ie=ke("icosahedron"),X={sunset:"venice/venice_sunset_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",night:"dikhololo/dikhololo_night_1k.hdr",warehouse:"empty-wharehouse/empty_warehouse_01_1k.hdr",forest:"forrest-slope/forest_slope_1k.hdr",apartment:"lebombo/lebombo_1k.hdr",studio:"studio-small-3/studio_small_03_1k.hdr",city:"potsdamer-platz/potsdamer_platz_1k.hdr",park:"rooitou/rooitou_park_1k.hdr",lobby:"st-fagans/st_fagans_interior_1k.hdr"};var Ne=`#define GLSLIFY 1
varying vec3 vWorldPosition;void main(){vec4 worldPosition=modelMatrix*vec4(position,1.0);vWorldPosition=worldPosition.xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,Le=`#define GLSLIFY 1
#define ENVMAP_TYPE_CUBE_UV
varying vec3 vWorldPosition;uniform float radius;uniform float height;
#ifdef ENVMAP_TYPE_CUBE
uniform samplerCube cubemap;
#else
uniform sampler2D cubemap;
#endif
float diskIntersect(in vec3 ro,in vec3 rd,vec3 c,vec3 n,float r){vec3 o=ro-c;float t=-dot(n,o)/dot(rd,n);vec3 q=o+rd*t;return(dot(q,q)<r*r)? t : 1e6;}float sphereIntersect(in vec3 ro,in vec3 rd,in vec3 ce,float ra){vec3 oc=ro-ce;float b=dot(oc,rd);float c=dot(oc,oc)-ra*ra;float h=b*b-c;if(h<0.0)-1.0;h=sqrt(h);return-b+h;}vec3 project(){vec3 p=normalize(vWorldPosition);vec3 camPos=cameraPosition;camPos.y-=height;float intersection=sphereIntersect(camPos,p,vec3(0.),radius);if(intersection>0.){vec3 h=vec3(0.0,-height,0.0);float intersection2=diskIntersect(camPos,p,h,vec3(0.0,-1.0,0.0),radius);p=(camPos+min(intersection,intersection2)*p)/radius;}else{p=vec3(0.0,1.0,0.0);}return p;}
#include <common>
#include <cube_uv_reflection_fragment>
void main(){vec3 projectedWorldPosition=project();
#ifdef ENVMAP_TYPE_CUBE
vec3 outcolor=textureCube(cubemap,projectedWorldPosition).rgb;
#else
vec3 direction=normalize(projectedWorldPosition);vec2 uv=equirectUv(direction);vec3 outcolor=texture2D(cubemap,uv).rgb;
#endif
gl_FragColor=vec4(outcolor,1.0);
#include <tonemapping_fragment>
#include <encodings_fragment>
}`;const Te="https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/",Ge=t=>t&&t.isCubeTexture,Ue=t=>t.current&&t.current.isScene,Q=t=>Ue(t)?t.current:t;function ee({scene:t,background:a=!1,map:r}){const o=Y(u=>u.scene);return n.exports.useLayoutEffect(()=>{if(r){const u=Q(t||o),f=u.background,s=u.environment;return a!=="only"&&(u.environment=r),a&&(u.background=r),()=>{a!=="only"&&(u.environment=s),a&&(u.background=f)}}},[o,t,r,a]),null}function se({files:t=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:a="",preset:r=void 0,extensions:o}){if(r){if(!(r in X))throw new Error("Preset must be one of: "+Object.keys(X).join(", "));t=X[r],a=Te}const u=Array.isArray(t),s=xe(u?be:De,u?[t]:t,x=>{x.setPath(a),o&&o(x)}),c=u?s[0]:s;return c.mapping=u?ye:we,c}function le(o){var u=o,{background:t=!1,scene:a}=u,r=I(u,["background","scene"]);const f=se(r),s=Y(c=>c.scene);return n.exports.useLayoutEffect(()=>{const c=Q(a||s),x=c.background,N=c.environment;return t!=="only"&&(c.environment=f),t&&(c.background=f),()=>{t!=="only"&&(c.environment=N),t&&(c.background=x)}},[f,t,a,s]),null}function ze({children:t,near:a=1,far:r=1e3,resolution:o=256,frames:u=1,map:f,background:s=!1,scene:c,files:x,path:N,preset:L=void 0,extensions:F}){const M=Y(g=>g.gl),B=Y(g=>g.scene),P=n.exports.useRef(null),[A]=n.exports.useState(()=>new ge),w=n.exports.useMemo(()=>{const g=new Ee(o);return g.texture.type=O,g},[o]);n.exports.useLayoutEffect(()=>{u===1&&P.current.update(M,A);const g=Q(c||B),i=g.background,d=g.environment;return s!=="only"&&(g.environment=w.texture),s&&(g.background=w.texture),()=>{s!=="only"&&(g.environment=d),s&&(g.background=i)}},[t,A,w.texture,c,B,s,u,M]);let R=1;return K(()=>{(u===1/0||R<u)&&(P.current.update(M,A),R++)}),n.exports.createElement(n.exports.Fragment,null,_e(n.exports.createElement(n.exports.Fragment,null,t,n.exports.createElement("cubeCamera",{ref:P,args:[a,r,w]}),x||L?n.exports.createElement(le,{background:!0,files:x,preset:L,path:N,extensions:F}):f?n.exports.createElement(ee,{background:!0,map:f,extensions:F}):null),A))}function Ve(t){var a,r,o,u;const f=se(t),s=t.map||f,c=Ge(s),x=n.exports.useMemo(()=>{var A,w;const g=((A=c?(w=s.image[0])==null?void 0:w.width:s.image.width)!==null&&A!==void 0?A:1024)/4,i=Math.floor(Math.log2(g)),d=Math.pow(2,i),E=3*Math.max(d,16*7),h=4*d;return[c?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/E}`,`#define CUBEUV_TEXEL_HEIGHT ${1/h}`,`#define CUBEUV_MAX_MIP ${i}.0`,""]},[]),N=n.exports.useMemo(()=>x.join(`
`)+Le,[x]),L=n.exports.useMemo(()=>({cubemap:{value:null},height:{value:15},radius:{value:60}}),[]),F=n.exports.useRef(null),M=(a=t.ground)==null?void 0:a.height,B=(r=t.ground)==null?void 0:r.radius,P=(o=(u=t.ground)==null?void 0:u.scale)!==null&&o!==void 0?o:1e3;return n.exports.useEffect(()=>void(M&&(F.current.uniforms.height.value=M)),[M]),n.exports.useEffect(()=>void(B&&(F.current.uniforms.radius.value=B)),[B]),n.exports.useEffect(()=>void(F.current.uniforms.cubemap.value=s),[s]),n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(ee,ie({},t,{map:s})),n.exports.createElement(Ie,{scale:P,args:[1,16]},n.exports.createElement("shaderMaterial",{ref:F,side:ve,vertexShader:Ne,fragmentShader:N,uniforms:L,depthTest:!1})))}function je(t){return t.ground?n.exports.createElement(Ve,t):t.map?n.exports.createElement(ee,t):t.children?n.exports.createElement(ze,t):n.exports.createElement(le,t)}class Oe extends Fe{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(mvPosition.x + 2.0 * time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <encodings_fragment>
      }`})}}const He=t=>new Me().setFromSpherical(new Ae(t,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),ce=n.exports.forwardRef(({radius:t=100,depth:a=50,count:r=5e3,saturation:o=0,factor:u=4,fade:f=!1,speed:s=1},c)=>{const x=n.exports.useRef(),[N,L,F]=n.exports.useMemo(()=>{const B=[],P=[],A=Array.from({length:r},()=>(.5+.5*Math.random())*u),w=new Be;let R=t+a;const g=a/r;for(let i=0;i<r;i++)R-=g*Math.random(),B.push(...He(R).toArray()),w.setHSL(i/r,o,.9),P.push(w.r,w.g,w.b);return[new Float32Array(B),new Float32Array(P),new Float32Array(A)]},[r,a,u,t,o]);K(B=>x.current&&(x.current.uniforms.time.value=B.clock.getElapsedTime()*s));const[M]=n.exports.useState(()=>new Oe);return n.exports.createElement("points",{ref:c},n.exports.createElement("bufferGeometry",null,n.exports.createElement("bufferAttribute",{attach:"attributes-position",args:[N,3]}),n.exports.createElement("bufferAttribute",{attach:"attributes-color",args:[L,3]}),n.exports.createElement("bufferAttribute",{attach:"attributes-size",args:[F,1]})),n.exports.createElement("primitive",{ref:x,object:M,attach:"material",blending:Ce,"uniforms-fade-value":f,transparent:!0,vertexColors:!0}))});function $e(a){var t=I(a,[]);const r=n.exports.useRef(),o=n.exports.useRef(null),{nodes:u,materials:f}=C("../models/black_leather_chair.glb");return n.exports.useEffect(()=>{if(o.current===null)return;J.timeline().to(o.current.rotation,{duration:1,delay:.1,ease:"Expo.easeInOut",x:0,y:Math.PI/2,z:0}).to(o.current.rotation,{duration:1,ease:"Expo.easeInOut",x:0,y:Math.PI,z:0}).to(o.current.rotation,{duration:1,ease:"Expo.easeInOut",x:0,y:Math.PI*3/2,z:0}).to(o.current.rotation,{duration:1,ease:"Expo.easeInOut",x:0,y:Math.PI*2,z:0}).to(o.current.rotation,{duration:2,ease:"Expo.easeInOut",x:0,y:.5,z:0})},[o]),e("group",G(T({ref:r},t),{dispose:null,scale:t.scale,children:e("mesh",{geometry:u.koltuk.geometry,material:f.chair,rotation:[0,Math.PI/2,0],ref:o})}))}C.preload("/black_leather_chair.glb");function We(){const t=n.exports.useRef(null);return p(U,{className:"w-full h-full cursor-grab",children:[e(z,{makeDefault:!0,position:[3,.5,0],ref:t,zoom:1}),e(V,{enablePan:!0,enableZoom:!1,enableRotate:!0}),e(Z,{position:[10,10,10]}),e($e,{scale:[2,2,2],position:[0,-.8,0]})]})}function Ye(){return e("div",{id:"firstView",className:"h-screen flex justify-center items-center bg-gray-300",children:p("div",{className:"w-4/5 h-full",children:[p("h1",{className:"text-center font-bold py-2 text-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1] break-words",children:["THREE ",e("br",{}),"PLAYGROUND"]}),e("p",{className:"absolute bottom-[10vh] right-[10vw] px-4 bg-white rounded-full",children:"\u{1F44B} drag me"}),e(n.exports.Suspense,{fallback:e("p",{className:"text-center",children:"loading now..."}),children:e("div",{className:"absolute top-0 left-0 w-full h-full",children:e(We,{})})})]})})}function Ze(a){var t=I(a,[]);const r=n.exports.useRef(),{nodes:o,materials:u}=C("../models/cushion.glb");return e("group",G(T({ref:r},t),{dispose:null,children:e("group",{rotation:[-Math.PI/2,0,0],scale:.01,children:e("group",{rotation:[Math.PI/2,0,0],children:e("group",{position:[0,40.99,0],scale:43.31,children:e("mesh",{geometry:o.Object_6.geometry,material:u.Base})})})})}))}C.preload("/cushion.glb");function qe(){return p(U,{className:"w-full h-full",children:[e(z,{makeDefault:!0,position:[0,0,-10]}),e(V,{enablePan:!0,enableZoom:!0,enableRotate:!0}),e(Z,{position:[10,10,10]}),e(Ze,{scale:[4,4,4],position:[0,-2,0],rotation:[-.4,3,0]})]})}function Xe(){return p("div",{id:"section1",className:"h-screen w-full bg-black text-white flex items-center justify-between",children:[p("div",{className:"w-1/2 p-[7%]",children:[e("h2",{className:"font-bold text-36",children:"section1"}),e("h3",{className:"mb-10 font-bold text-14",children:"section1 headline text"}),e("p",{children:"\u53CB\u4EBA\u30B7\u30E3\u30FC\u30ED\u30C3\u30AF\u30FB\u30DB\u30FC\u30E0\u30BA\u306E\u3082\u3068\u3092\u3001\u79C1\u306F\u30AF\u30EA\u30B9\u30DE\u30B9\u306E\u4E8C\u65E5\u5F8C\u306B\u8A2A\u308C\u305F\u3002\u6642\u5019\u306E\u6328\u62F6\u3092\u3057\u3088\u3046\u3068\u601D\u3063\u305F\u306E\u3060\u3002\u30DB\u30FC\u30E0\u30BA\u306F\u7D2B\u306E\u5316\u7CA7\u7740\u59FF\u3067\u3001\u30BD\u30D5\u30A1\u306B\u304F\u3064\u308D\u3044\u3067\u3044\u305F\u3002\u53F3\u624B\u306E\u5C4A\u304F\u3068\u3053\u308D\u306B\u30D1\u30A4\u30D7\u7F6E\u304D\u304C\u3042\u308A\u3001\u4ECA\u8AAD\u3093\u3067\u3044\u308B\u3068\u3053\u308D\u306A\u306E\u3060\u308D\u3046\u3001\u624B\u5143\u306B\u306F\u3050\u3061\u3083\u308A\u3068\u671D\u520A\u306E\u5C71\u304C\u7A4D\u307E\u308C\u3066\u3044\u308B\u3002\u30BD\u30D5\u30A1\u306E\u305D\u3070\u306B\u306F\u6728\u306E\u6905\u5B50\u304C\u3042\u308A\u3001\u80CC\u306E\u89D2\u306B\u3061\u3087\u3046\u3069\u3001\u8DA3\u5473\u306E\u60AA\u3044\u5805\u3081\u306E\u30D5\u30A7\u30EB\u30C8\u5E3D\u304C\u3072\u3063\u304B\u3051\u3089\u308C\u3066\u3044\u305F\u3002\u305A\u3044\u3076\u3093\u304F\u305F\u3073\u308C\u3066\u3044\u3066\u3001\u4F55\u30F6\u6240\u304B\u7834\u308C\u3066\u3057\u307E\u3063\u3066\u3044\u308B\u3002\u5EA7\u308B\u5834\u6240\u306B\u62E1\u5927\u93E1\u3068\u30D4\u30F3\u30BB\u30C3\u30C8\u304C\u3042\u3063\u305F\u306E\u3067\u3001\u5E3D\u5B50\u304C\u3053\u3093\u306A\u3075\u3046\u306B\u3064\u308B\u3055\u308C\u3066\u3044\u308B\u306E\u306F\u3001\u4F55\u304B\u8ABF\u3079\u308B\u305F\u3081\u306A\u306E\u3060\u308D\u3046\u3002"})]}),p("div",{className:"relative overflow-hidden h-full flex items-center",children:[e("div",{className:"bg-white rounded-full w-[50vw] h-[50vw] translate-x-20"}),e(n.exports.Suspense,{fallback:e("p",{className:"text-center",children:"loading now..."}),children:e("div",{className:"absolute top-0 left-0 w-full h-full",children:e(qe,{})})})]})]})}function Je(a){var t=I(a,[]);const r=n.exports.useRef(),{nodes:o,materials:u}=C("../models/dublin.glb");return e("group",G(T({ref:r},t),{dispose:null,children:e("group",{rotation:[-Math.PI/2,0,0],children:p("group",{rotation:[Math.PI/2,0,0],children:[p("group",{position:[53.23,-.51,-32.39],rotation:[-Math.PI/2,0,0],scale:2.54,children:[e("group",{position:[-8.19,-11.26,-5.5],children:e("group",{position:[2.83,11.07,6.58],rotation:[-Math.PI/2,0,Math.PI],children:e("mesh",{geometry:o.legs_metal_Leg_0.geometry,material:u.metal_Leg})})}),e("group",{position:[-11.54,-11.26,-21.91],children:e("group",{position:[6.17,11.07,22.98],rotation:[-Math.PI/2,0,Math.PI],children:e("mesh",{geometry:o.leatherChair_leather_white_0.geometry,material:u.leather_white})})})]}),p("group",{position:[-42.87,-.51,43.05],rotation:[-Math.PI/2,0,-1.92],scale:2.54,children:[e("group",{position:[-11.54,-11.26,-21.91],children:e("group",{position:[6.17,11.07,22.98],rotation:[-Math.PI/2,0,Math.PI],children:e("mesh",{geometry:o.leatherChair001_leather_dark_0.geometry,material:u.leather_dark})})}),e("group",{position:[-8.19,-11.26,-5.5],children:e("group",{position:[2.83,11.07,6.58],rotation:[-Math.PI/2,0,Math.PI],children:e("mesh",{geometry:o.legs001_metal_Leg_0.geometry,material:u.metal_Leg})})})]})]})})}))}C.preload("/dublin.glb");function Ke(){return p(U,{className:"w-full h-full",children:[e(z,{makeDefault:!0,position:[0,500,-1e3]}),e(V,{enablePan:!0,enableZoom:!1,enableRotate:!0}),e(Z,{position:[1e3,20,-100]}),e(Je,{scale:[3,3,3],position:[0,0,0]})]})}function Qe(){return p("div",{id:"section2",className:"h-screen w-full flex items-center justify-between bg-gray-200",children:[p("div",{className:"relative w-1/2 overflow-hidden h-full flex",children:[e("div",{className:"flex items-center justify-start",children:p("span",{className:"uppercase text-[12vw] w-full text-white leading-[1.2] font-bold",children:["play",e("br",{}),"like",e("br",{}),"a child"]})}),e(n.exports.Suspense,{fallback:e("p",{className:"text-center",children:"loading now..."}),children:e("div",{className:"absolute top-0 left-0 w-full h-full",children:e(Ke,{})})})]}),p("div",{className:"w-1/2 p-[7%] pt-[14%]",children:[e("h2",{className:"font-bold text-36",children:"section2"}),e("h3",{className:"mb-10 font-bold text-14",children:"section1 headline text"}),e("p",{children:"\u53CB\u4EBA\u30B7\u30E3\u30FC\u30ED\u30C3\u30AF\u30FB\u30DB\u30FC\u30E0\u30BA\u306E\u3082\u3068\u3092\u3001\u79C1\u306F\u30AF\u30EA\u30B9\u30DE\u30B9\u306E\u4E8C\u65E5\u5F8C\u306B\u8A2A\u308C\u305F\u3002\u6642\u5019\u306E\u6328\u62F6\u3092\u3057\u3088\u3046\u3068\u601D\u3063\u305F\u306E\u3060\u3002\u30DB\u30FC\u30E0\u30BA\u306F\u7D2B\u306E\u5316\u7CA7\u7740\u59FF\u3067\u3001\u30BD\u30D5\u30A1\u306B\u304F\u3064\u308D\u3044\u3067\u3044\u305F\u3002\u53F3\u624B\u306E\u5C4A\u304F\u3068\u3053\u308D\u306B\u30D1\u30A4\u30D7\u7F6E\u304D\u304C\u3042\u308A\u3001\u4ECA\u8AAD\u3093\u3067\u3044\u308B\u3068\u3053\u308D"})]})]})}function et(a){var t=I(a,[]);const r=n.exports.useRef(),{nodes:o,materials:u}=C("../models/Astronaut.glb");return e("group",G(T({ref:r},t),{dispose:null,children:e("mesh",{geometry:o["node-0"].geometry,material:u.Astronaut_mat})}))}C.preload("/Astronaut.glb");function tt(){const a=2*Math.PI/1e3,[r,o]=n.exports.useState(0),u=n.exports.useRef();return K(()=>{o(r+a)}),n.exports.useEffect(()=>{u.current.position.x=1.5*Math.cos(r),u.current.position.z=1.5*Math.sin(r)},[r]),p("group",{children:[e("pointLight",{intensity:3,color:"rgb(250, 200, 0)"}),p("mesh",{position:[-1,1,1],ref:u,children:[e("pointLight",{intensity:2,color:"rgb(250, 200, 0)"}),e("sphereGeometry",{args:[.2,32,32],rotation:[0,.8,0]}),e("meshStandardMaterial",{color:"rgb(250, 200, 0)"})]})]})}function rt({env:t,star:a}){const r=["night","sunset","dawn"];return p(U,{className:"w-full h-full",children:[e(z,{makeDefault:!0,position:[3,.5,0],zoom:1}),e(V,{enablePan:!0,enableZoom:!1,enableRotate:!0}),e(tt,{}),e(et,{position:[0,-1,0],scale:[.8,.8,.8],rotation:[0,Math.PI/3,0]}),a&&e(ce,{radius:100,depth:100,count:5e3,factor:10,saturation:0,fade:!0,speed:1}),e(je,{background:!0,preset:r[t]})]})}function nt(){const[t,a]=n.exports.useState(0),[r,o]=n.exports.useState(!1);return p("div",{id:"environment",className:"w-full h-screen bg-black relative",children:[p("div",{className:"flex absolute bottom-[10vh] left-10 z-10",children:[e("button",{className:"bg-white rounded-full px-4 mr-4",onClick:()=>{a(t===2?0:t+1)},children:"click me \u270C\uFE0F"}),e("button",{className:"bg-white rounded-full px-4",onClick:()=>o(!r),children:"stars \u2728"})]}),e(n.exports.Suspense,{fallback:e("p",{className:"text-center",children:"loading now..."}),children:e("div",{className:"w-full h-full",children:e(rt,{env:t,star:r})})})]})}function ot(a){var t=I(a,[]);const r=n.exports.useRef(),{nodes:o,materials:u}=C("../models/NeilArmstrong.glb");return p("group",G(T({ref:r},t),{dispose:null,children:[e("mesh",{geometry:o.astronaut_1.geometry,material:u.StingrayPBS2}),e("mesh",{geometry:o.astronaut_2.geometry,material:u.StingrayPBS3}),e("mesh",{geometry:o.astronaut_3.geometry,material:u.StingrayPBS4}),e("mesh",{geometry:o.astronaut_4.geometry,material:u.StingrayPBS1})]}))}C.preload("/NeilArmstrong.glb");function at(){const[t,a]=n.exports.useState({mouseX:0,mouseY:0});n.exports.useEffect(()=>{const o={x:window.innerWidth/2,y:window.innerHeight/2},u=f=>{a({x:f.clientX-o.x,y:o.y-f.clientY})};return window.addEventListener("mousemove",u),()=>window.removeEventListener("mousemove",u)},[]);const r=n.exports.useRef();return n.exports.useEffect(()=>{r.current!==void 0&&(J.to(r.current.position,{duration:4,delay:.3,ease:"Expo.easeOut",x:t.x,y:t.y,z:0}),J.to(r.current,{duration:1,intensity:Math.abs(1/t.x)}))},[t]),p(U,{className:"w-full h-full",children:[e(z,{makeDefault:!0,position:[0,.5,3],zoom:1}),e(V,{enablePan:!0,enableZoom:!1,enableRotate:!0}),e("ambientLight",{intensity:.1}),e("directionalLight",{position:[0,0,0],color:[200,100,0],intensity:.001,ref:r}),e(ot,{scale:[1,1,1],position:[0,-.8,0],rotation:[0,0,0]}),e(ce,{radius:100,depth:100,count:5e3,factor:10,saturation:0,fade:!0,speed:1})]})}function ut(){return e("div",{id:"moving",className:"w-full h-screen flex justify-center items-center bg-black",children:e(n.exports.Suspense,{fallback:e("p",{className:"text-center",children:"loading now..."}),children:e("div",{className:"w-full h-full",children:e(at,{})})})})}function it(a){var t=I(a,[]);const r=n.exports.useRef(),{nodes:o,materials:u}=C("../models/dublin.glb"),f=[u.leather_dark,u.leather_white],[s,c]=n.exports.useState(0),x=()=>{c(s===0?1:0)};return e("group",G(T({ref:r},t),{dispose:null,children:e("group",{rotation:[-Math.PI/2,0,0],children:e("group",{rotation:[Math.PI/2,0,0],children:p("group",{position:[0,0,0],rotation:[-Math.PI/2,0,0],scale:2.54,children:[e("group",{position:[-8.19,-11.26,-5.5],children:e("group",{position:[2.83,11.07,6.58],rotation:[-Math.PI/2,0,Math.PI],children:e("mesh",{geometry:o.legs_metal_Leg_0.geometry,material:u.metal_Leg})})}),e("group",{position:[-11.54,-11.26,-21.91],children:e("group",{position:[6.17,11.07,22.98],rotation:[-Math.PI/2,0,Math.PI],children:e("mesh",{geometry:o.leatherChair_leather_white_0.geometry,material:f[s],onClick:x})})})]})})})}))}C.preload("/dublin.glb");function st(){return p(U,{className:"w-full h-full",children:[e(z,{makeDefault:!0,position:[0,500,-1e3]}),e(V,{enablePan:!0,enableZoom:!1,enableRotate:!0}),e(Z,{position:[1e3,20,-100]}),e(it,{scale:[5,5,5],position:[0,0,0],rotation:[0,10,0]})]})}function lt(){return p("div",{id:"switch",className:"h-screen w-full flex items-center justify-between bg-gray-200",children:[e(n.exports.Suspense,{fallback:e("p",{className:"text-center",children:"loading now..."}),children:e(st,{})}),e("div",{className:"w-1/2 p-[7%] pt-[14%]",children:e("p",{children:"\u{1F448}\xA0you can toggle texture by clicking it"})})]})}function ct(){return e(Re,{children:p("div",{className:"App",children:[e(Ye,{}),e(Xe,{}),e(Qe,{}),e(nt,{}),e(ut,{}),e(lt,{})]})})}Pe.createRoot(document.getElementById("root")).render(e(Se.StrictMode,{children:e(ct,{})}));
