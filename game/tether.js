(()=>{var Oh=0,Nl=1,zh=2;var Oc=1,Bh=2,Ai=3,vi=0,ke=1,Ke=2,Xi=0,zn=1,kl=2,Fl=3,Ol=4,Hh=5,cn=100,Vh=101,Gh=102,Wh=103,Xh=104,qh=200,Yh=201,Zh=202,$h=203,Bo=204,Ho=205,Jh=206,Kh=207,jh=208,Qh=209,tu=210,eu=211,iu=212,nu=213,su=214,Vo=0,Go=1,Wo=2,Gn=3,Xo=4,qo=5,Yo=6,Zo=7,zc=0,ru=1,ou=2,qi=0,au=1,lu=2,cu=3,hu=4,uu=5,du=6,fu=7;var Bc=300,Wn=301,Xn=302,$o=303,Jo=304,Pr=306,Ko=1e3,un=1001,jo=1002,_e=1003,pu=1004;var Ls=1005;var yi=1006,lo=1007;var dn=1008;var Ii=1009,Hc=1010,Vc=1011,Ms=1012,sl=1013,Li=1014,xi=1015,Es=1016,rl=1017,ol=1018,qn=1020,Gc=35902,Wc=1021,Xc=1022,hi=1023,qc=1024,Yc=1025,Bn=1026,Yn=1027,al=1028,ll=1029,Zc=1030,cl=1031;var hl=1033,sr=33776,rr=33777,or=33778,ar=33779,Qo=35840,ta=35841,ea=35842,ia=35843,na=36196,sa=37492,ra=37496,oa=37808,aa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,ya=37819,xa=37820,va=37821,lr=36492,_a=36494,ba=36495,$c=36283,Ma=36284,Sa=36285,wa=36286;var cr=2300,Ea=2301,co=2302,zl=2400,Bl=2401,Hl=2402;var mu=3200,gu=3201;var yu=0,xu=1,mi="",ii="srgb",Ki="srgb-linear",Ir="linear",re="srgb";var vn=7680;var Vl=519,vu=512,_u=513,bu=514,Jc=515,Mu=516,Su=517,wu=518,Eu=519,Ta=35044,Kc=35048;var Gl="300 es",Ci=2e3,hr=2001,Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ho=Math.PI/180,Aa=180/Math.PI;function Yi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Ge(s,t,e){return Math.max(t,Math.min(e,s))}function Tu(s,t){return(s%t+t)%t}function uo(s,t,e){return(1-e)*s+e*t}function gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Lt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=n[0],m=n[3],p=n[6],v=n[1],b=n[4],x=n[7],T=n[2],E=n[5],A=n[8];return r[0]=o*y+a*v+l*T,r[3]=o*m+a*b+l*E,r[6]=o*p+a*x+l*A,r[1]=c*y+h*v+d*T,r[4]=c*m+h*b+d*E,r[7]=c*p+h*x+d*A,r[2]=u*y+f*v+g*T,r[5]=u*m+f*b+g*E,r[8]=u*p+f*x+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(n*c-h*i)*y,t[2]=(a*i-n*o)*y,t[3]=u*y,t[4]=(h*e-n*l)*y,t[5]=(n*r-a*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fo.makeScale(t,e)),this}rotate(t){return this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fo=new kt;function jc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Au(){let s=ur("canvas");return s.style.display="block",s}var Wl={};function vs(s){s in Wl||(Wl[s]=!0,console.warn(s))}function Ru(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Cu(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pu(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xt={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Ir:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xl=[.64,.33,.3,.6,.15,.06],ql=[.2126,.7152,.0722],Yl=[.3127,.329],Zl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Ki]:{primaries:Xl,whitePoint:Yl,transfer:Ir,toXYZ:Zl,fromXYZ:$l,luminanceCoefficients:ql,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:Xl,whitePoint:Yl,transfer:re,toXYZ:Zl,fromXYZ:$l,luminanceCoefficients:ql,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}});var _n,Ra=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_n===void 0&&(_n=ur("canvas")),_n.width=t.width,_n.height=t.height;let i=_n.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=_n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ur("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Iu=0,dr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(po(n[o].image)):r.push(po(n[o]))}else r=po(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function po(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ra.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lu=0,Xe=class s extends Zi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=un,n=un,r=yi,o=dn,a=hi,l=Ii,c=s.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Yi(),this.name="",this.source=new dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Bc;Xe.DEFAULT_ANISOTROPY=1;var ve=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,x=(f+1)/2,T=(p+1)/2,E=(h+u)/4,A=(d+y)/4,C=(g+m)/4;return b>x&&b>T?b<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(b),n=E/i,r=A/i):x>T?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=E/n,r=C/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=A/r,n=C/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ca=class extends Zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Xe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new dr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Ca{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},fr=class extends Xe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=_e,this.minFilter=_e,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pa=class extends Xe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=_e,this.minFilter=_e,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qe=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*y,v=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let T=Math.sqrt(b),E=Math.atan2(T,p*v);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let x=a*v;if(l=l*m+u*x,c=c*m+f*x,h=h*m+g*x,d=d*m+y*x,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mo=new R,Jl=new qe,Di=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ds.copy(i.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),Us.subVectors(this.max,hs),bn.subVectors(t.a,hs),Mn.subVectors(t.b,hs),Sn.subVectors(t.c,hs),Oi.subVectors(Mn,bn),zi.subVectors(Sn,Mn),en.subVectors(bn,Sn);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-en.z,en.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,en.z,0,-en.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-en.y,en.x,0];return!go(e,bn,Mn,Sn,Us)||(e=[1,0,0,0,1,0,0,0,1],!go(e,bn,Mn,Sn,Us))?!1:(Ns.crossVectors(Oi,zi),e=[Ns.x,Ns.y,Ns.z],go(e,bn,Mn,Sn,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mi=[new R,new R,new R,new R,new R,new R,new R,new R],ai=new R,Ds=new Di,bn=new R,Mn=new R,Sn=new R,Oi=new R,zi=new R,en=new R,hs=new R,Us=new R,Ns=new R,nn=new R;function go(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){nn.fromArray(s,r);let a=n.x*Math.abs(nn.x)+n.y*Math.abs(nn.y)+n.z*Math.abs(nn.z),l=t.dot(nn),c=e.dot(nn),h=i.dot(nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Du=new Di,us=new R,yo=new R,fn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Du.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);let e=us.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(us,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(yo)),this.expandByPoint(us.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new R,xo=new R,ks=new R,Bi=new R,vo=new R,Fs=new R,_o=new R,Ia=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){xo.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(xo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=Bi.dot(this.direction),l=-Bi.dot(ks),c=Bi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(xo).addScaledVector(ks,u),f}intersectSphere(t,e){Si.subVectors(t.center,this.origin);let i=Si.dot(this.direction),n=Si.dot(Si)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,n,r){vo.subVectors(e,t),Fs.subVectors(i,t),_o.crossVectors(vo,Fs);let o=this.direction.dot(_o),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,t);let l=a*this.direction.dot(Fs.crossVectors(Bi,Fs));if(l<0)return null;let c=a*this.direction.dot(vo.cross(Bi));if(c<0||l+c>o)return null;let h=-a*Bi.dot(_o);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class s{constructor(t,e,i,n,r,o,a,l,c,h,d,u,f,g,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,u,f,g,y,m)}set(t,e,i,n,r,o,a,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/wn.setFromMatrixColumn(t,0).length(),r=1/wn.setFromMatrixColumn(t,1).length(),o=1/wn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uu,t,Nu)}lookAt(t,e,i){let n=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Hi.crossVectors(i,$e),Hi.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Hi.crossVectors(i,$e)),Hi.normalize(),Os.crossVectors($e,Hi),n[0]=Hi.x,n[4]=Os.x,n[8]=$e.x,n[1]=Hi.y,n[5]=Os.y,n[9]=$e.y,n[2]=Hi.z,n[6]=Os.z,n[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],v=i[3],b=i[7],x=i[11],T=i[15],E=n[0],A=n[4],C=n[8],S=n[12],_=n[1],I=n[5],F=n[9],k=n[13],H=n[2],$=n[6],V=n[10],tt=n[14],G=n[3],st=n[7],ot=n[11],bt=n[15];return r[0]=o*E+a*_+l*H+c*G,r[4]=o*A+a*I+l*$+c*st,r[8]=o*C+a*F+l*V+c*ot,r[12]=o*S+a*k+l*tt+c*bt,r[1]=h*E+d*_+u*H+f*G,r[5]=h*A+d*I+u*$+f*st,r[9]=h*C+d*F+u*V+f*ot,r[13]=h*S+d*k+u*tt+f*bt,r[2]=g*E+y*_+m*H+p*G,r[6]=g*A+y*I+m*$+p*st,r[10]=g*C+y*F+m*V+p*ot,r[14]=g*S+y*k+m*tt+p*bt,r[3]=v*E+b*_+x*H+T*G,r[7]=v*A+b*I+x*$+T*st,r[11]=v*C+b*F+x*V+T*ot,r[15]=v*S+b*k+x*tt+T*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*d-n*c*d-r*a*u+i*c*u+n*a*f-i*l*f)+y*(+e*l*f-e*c*u+r*o*u-n*o*f+n*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-n*a*h-e*l*d+e*a*u+n*o*d-i*o*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=d*m*c-y*u*c+y*l*f-a*m*f-d*l*p+a*u*p,b=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,x=h*y*c-g*d*c+g*a*f-o*y*f-h*a*p+o*d*p,T=g*d*l-h*y*l-g*a*u+o*y*u+h*a*m-o*d*m,E=e*v+i*b+n*x+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=v*A,t[1]=(y*u*r-d*m*r-y*n*f+i*m*f+d*n*p-i*u*p)*A,t[2]=(a*m*r-y*l*r+y*n*c-i*m*c-a*n*p+i*l*p)*A,t[3]=(d*l*r-a*u*r-d*n*c+i*u*c+a*n*f-i*l*f)*A,t[4]=b*A,t[5]=(h*m*r-g*u*r+g*n*f-e*m*f-h*n*p+e*u*p)*A,t[6]=(g*l*r-o*m*r-g*n*c+e*m*c+o*n*p-e*l*p)*A,t[7]=(o*u*r-h*l*r+h*n*c-e*u*c-o*n*f+e*l*f)*A,t[8]=x*A,t[9]=(g*d*r-h*y*r-g*i*f+e*y*f+h*i*p-e*d*p)*A,t[10]=(o*y*r-g*a*r+g*i*c-e*y*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*f-e*a*f)*A,t[12]=T*A,t[13]=(h*y*n-g*d*n+g*i*u-e*y*u-h*i*m+e*d*m)*A,t[14]=(g*a*n-o*y*n-g*i*l+e*y*l+o*i*m-e*a*m)*A,t[15]=(o*d*n-h*a*n+h*i*l-e*d*l-o*i*u+e*a*u)*A,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,v=l*c,b=l*h,x=l*d,T=i.x,E=i.y,A=i.z;return n[0]=(1-(y+p))*T,n[1]=(f+x)*T,n[2]=(g-b)*T,n[3]=0,n[4]=(f-x)*E,n[5]=(1-(u+p))*E,n[6]=(m+v)*E,n[7]=0,n[8]=(g+b)*A,n[9]=(m-v)*A,n[10]=(1-(u+y))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=wn.set(n[0],n[1],n[2]).length(),o=wn.set(n[4],n[5],n[6]).length(),a=wn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],li.copy(this);let c=1/r,h=1/o,d=1/a;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,e.setFromRotationMatrix(li),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=Ci){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n),f,g;if(a===Ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===hr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Ci){let l=this.elements,c=1/(e-t),h=1/(i-n),d=1/(o-r),u=(e+t)*c,f=(i+n)*h,g,y;if(a===Ci)g=(o+r)*d,y=-2*d;else if(a===hr)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},wn=new R,li=new ie,Uu=new R(0,0,0),Nu=new R(1,1,1),Hi=new R,Os=new R,$e=new R,Kl=new ie,jl=new qe,Ui=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ku=0,Ql=new R,En=new qe,wi=new ie,zs=new R,ds=new R,Fu=new R,Ou=new qe,tc=new R(1,0,0),ec=new R(0,1,0),ic=new R(0,0,1),nc={type:"added"},zu={type:"removed"},Tn={type:"childadded",child:null},bo={type:"childremoved",child:null},ni=class s extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new Ui,i=new qe,n=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ie},normalMatrix:{value:new kt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return En.setFromAxisAngle(t,e),this.quaternion.multiply(En),this}rotateOnWorldAxis(t,e){return En.setFromAxisAngle(t,e),this.quaternion.premultiply(En),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zs.copy(t):zs.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(ds,zs,this.up):wi.lookAt(zs,ds,this.up),this.quaternion.setFromRotationMatrix(wi),n&&(wi.extractRotation(n.matrixWorld),En.setFromRotationMatrix(wi),this.quaternion.premultiply(En.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zu),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,Fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};ni.DEFAULT_UP=new R(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new R,Ei=new R,Mo=new R,Ti=new R,An=new R,Rn=new R,sc=new R,So=new R,wo=new R,Eo=new R,To=new ve,Ao=new ve,Ro=new ve,Wi=class s{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ci.subVectors(t,e),n.cross(ci);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){ci.subVectors(n,e),Ei.subVectors(i,e),Mo.subVectors(t,e);let o=ci.dot(ci),a=ci.dot(Ei),l=ci.dot(Mo),c=Ei.dot(Ei),h=Ei.dot(Mo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return To.setScalar(0),Ao.setScalar(0),Ro.setScalar(0),To.fromBufferAttribute(t,e),Ao.fromBufferAttribute(t,i),Ro.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(To,r.x),o.addScaledVector(Ao,r.y),o.addScaledVector(Ro,r.z),o}static isFrontFacing(t,e,i,n){return ci.subVectors(i,e),Ei.subVectors(t,e),ci.cross(Ei).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ci.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;An.subVectors(n,i),Rn.subVectors(r,i),So.subVectors(t,i);let l=An.dot(So),c=Rn.dot(So);if(l<=0&&c<=0)return e.copy(i);wo.subVectors(t,n);let h=An.dot(wo),d=Rn.dot(wo);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(An,o);Eo.subVectors(t,r);let f=An.dot(Eo),g=Rn.dot(Eo);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Rn,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return sc.subVectors(r,n),a=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(sc,a);let p=1/(m+y+u);return o=y*p,a=u*p,e.copy(i).addScaledVector(An,o).addScaledVector(Rn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Co(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var _t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Xt.workingColorSpace){if(t=Tu(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Co(o,r,t+1/3),this.g=Co(o,r,t),this.b=Co(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,n),this}setStyle(t,e=ii){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){let i=Qc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Xt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ge(Ne.r*255,0,255))*65536+Math.round(Ge(Ne.g*255,0,255))*256+Math.round(Ge(Ne.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ne.copy(this),e);let i=Ne.r,n=Ne.g,r=Ne.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=ii){Xt.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,i=Ne.g,n=Ne.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Bs);let i=uo(Vi.h,Bs.h,e),n=uo(Vi.s,Bs.s,e),r=uo(Vi.l,Bs.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new _t;_t.NAMES=Qc;var Bu=0,pn=class extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Yi(),this.name="",this.blending=zn,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=Ho,this.blendEquation=cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Gn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vn,this.stencilZFail=vn,this.stencilZPass=vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zn&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bo&&(i.blendSrc=this.blendSrc),this.blendDst!==Ho&&(i.blendDst=this.blendDst),this.blendEquation!==cn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ye=class extends pn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new R,Hs=new Lt,We=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ta,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ta&&(t.usage=this.usage),t}};var mr=class extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var gr=class extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Wt=class extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}},Hu=0,ei=new ie,Po=new ni,Cn=new R,Je=new Di,fs=new Di,Ae=new R,Ie=class s extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?gr:mr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Je.min,fs.min),Je.expandByPoint(Ae),Ae.addVectors(Je.max,fs.max),Je.expandByPoint(Ae)):(Je.expandByPoint(fs.min),Je.expandByPoint(fs.max))}Je.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(Cn.fromBufferAttribute(t,c),Ae.add(Cn)),n=Math.max(n,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new R,l[C]=new R;let c=new R,h=new R,d=new R,u=new Lt,f=new Lt,g=new Lt,y=new R,m=new R;function p(C,S,_){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(y),a[S].add(y),a[_].add(y),l[C].add(m),l[S].add(m),l[_].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,S=v.length;C<S;++C){let _=v[C],I=_.start,F=_.count;for(let k=I,H=I+F;k<H;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let b=new R,x=new R,T=new R,E=new R;function A(C){T.fromBufferAttribute(n,C),E.copy(T);let S=a[C];b.copy(S),b.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(E,S);let I=x.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,I)}for(let C=0,S=v.length;C<S;++C){let _=v[C],I=_.start,F=_.count;for(let k=I,H=I+F;k<H;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new We(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rc=new ie,sn=new Ia,Vs=new fn,oc=new R,Gs=new R,Ws=new R,Xs=new R,Io=new R,qs=new R,ac=new R,Ys=new R,Ht=class extends ni{constructor(t=new Ie,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Io.fromBufferAttribute(d,t),o?qs.addScaledVector(Io,h):qs.addScaledVector(Io.sub(e),h))}e.add(qs)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),sn.copy(t.ray).recast(t.near),!(Vs.containsPoint(sn.origin)===!1&&(sn.intersectSphere(Vs,oc)===null||sn.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(rc.copy(r).invert(),sn.copy(t.ray).applyMatrix4(rc),!(i.boundingBox!==null&&sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,sn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,T=b;x<T;x+=3){let E=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);n=Zs(this,p,t,i,c,h,d,E,A,C),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);n=Zs(this,o,t,i,c,h,d,v,b,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,T=b;x<T;x+=3){let E=x,A=x+1,C=x+2;n=Zs(this,p,t,i,c,h,d,E,A,C),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,b=m+1,x=m+2;n=Zs(this,o,t,i,c,h,d,v,b,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Vu(s,t,e,i,n,r,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===vi,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:s}}function Zs(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Gs),s.getVertexPosition(l,Ws),s.getVertexPosition(c,Xs);let h=Vu(s,t,e,i,Gs,Ws,Xs,ac);if(h){let d=new R;Wi.getBarycoord(ac,Gs,Ws,Xs,d),n&&(h.uv=Wi.getInterpolatedAttribute(n,a,l,c,d,new Lt)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,l,c,d,new Lt)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Wi.getNormal(Gs,Ws,Xs,u.normal),h.face=u,h.barycoord=d}return h}var Ni=class s extends Ie{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(d,2));function g(y,m,p,v,b,x,T,E,A,C,S){let _=x/A,I=T/C,F=x/2,k=T/2,H=E/2,$=A+1,V=C+1,tt=0,G=0,st=new R;for(let ot=0;ot<V;ot++){let bt=ot*I-k;for(let Bt=0;Bt<$;Bt++){let Qt=Bt*_-F;st[y]=Qt*v,st[m]=bt*b,st[p]=H,c.push(st.x,st.y,st.z),st[y]=0,st[m]=0,st[p]=E>0?1:-1,h.push(st.x,st.y,st.z),d.push(Bt/A),d.push(1-ot/C),tt+=1}}for(let ot=0;ot<C;ot++)for(let bt=0;bt<A;bt++){let Bt=u+bt+$*ot,Qt=u+bt+$*(ot+1),Y=u+(bt+1)+$*(ot+1),nt=u+(bt+1)+$*ot;l.push(Bt,Qt,nt),l.push(Qt,Y,nt),G+=6}a.addGroup(f,G,S),f+=G,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zn(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Be(s){let t={};for(let e=0;e<s.length;e++){let i=Zn(s[e]);for(let n in i)t[n]=i[n]}return t}function Gu(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function th(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var Wu={clone:Zn,merge:Be},Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends pn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zn(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},yr=class extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new R,lc=new Lt,cc=new Lt,Pe=class extends yr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,lc,cc),e.subVectors(cc,lc)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ho*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pn=-90,In=1,La=class extends ni{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Pe(Pn,In,t,e);n.layers=this.layers,this.add(n);let r=new Pe(Pn,In,t,e);r.layers=this.layers,this.add(r);let o=new Pe(Pn,In,t,e);o.layers=this.layers,this.add(o);let a=new Pe(Pn,In,t,e);a.layers=this.layers,this.add(a);let l=new Pe(Pn,In,t,e);l.layers=this.layers,this.add(l);let c=new Pe(Pn,In,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xr=class extends Xe{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Wn,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Da=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new xr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ni(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Xi});r.uniforms.tEquirect.value=e;let o=new Ht(n,r),a=e.minFilter;return e.minFilter===dn&&(e.minFilter=yi),new La(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Lo=new R,Yu=new R,Zu=new kt,Ri=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Lo.subVectors(i,e).cross(Yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Lo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zu.getNormalMatrix(t),n=this.coplanarPoint(Lo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rn=new fn,$s=new R,$n=class{constructor(t=new Ri,e=new Ri,i=new Ri,n=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ci){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],f=n[8],g=n[9],y=n[10],m=n[11],p=n[12],v=n[13],b=n[14],x=n[15];if(i[0].setComponents(l-r,u-c,m-f,x-p).normalize(),i[1].setComponents(l+r,u+c,m+f,x+p).normalize(),i[2].setComponents(l+o,u+h,m+g,x+v).normalize(),i[3].setComponents(l-o,u-h,m-g,x-v).normalize(),i[4].setComponents(l-a,u-d,m-y,x-b).normalize(),e===Ci)i[5].setComponents(l+a,u+d,m+y,x+b).normalize();else if(e===hr)i[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rn)}intersectsSprite(t){return rn.center.set(0,0,0),rn.radius=.7071067811865476,rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(rn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if($s.x=n.normal.x>0?t.max.x:t.min.x,$s.y=n.normal.y>0?t.max.y:t.min.y,$s.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eh(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $u(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Jn=class s extends Ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let b=0;b<c;b++){let x=b*d-r;g.push(x,-v,0),y.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let b=v+c*p,x=v+c*(p+1),T=v+1+c*(p+1),E=v+1+c*p;f.push(b,x,E),f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
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
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cd=`#ifdef USE_IRIDESCENCE
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
#endif`,hd=`#ifdef USE_BUMPMAP
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vd=`#define PI 3.141592653589793
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,$d=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,of=`#if defined( USE_POINTS_UV )
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
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
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
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,np=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,rp=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,up=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,dp=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,fp=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pp=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,mp=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gp=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,yp=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xp=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,vp=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_p=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,bp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Mp=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Sp=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wp=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Ep=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Tp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ap=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Cp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ot={alphahash_fragment:Ju,alphahash_pars_fragment:Ku,alphamap_fragment:ju,alphamap_pars_fragment:Qu,alphatest_fragment:td,alphatest_pars_fragment:ed,aomap_fragment:id,aomap_pars_fragment:nd,batching_pars_vertex:sd,batching_vertex:rd,begin_vertex:od,beginnormal_vertex:ad,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:yd,color_vertex:xd,common:vd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:bd,displacementmap_pars_vertex:Md,displacementmap_vertex:Sd,emissivemap_fragment:wd,emissivemap_pars_fragment:Ed,colorspace_fragment:Td,colorspace_pars_fragment:Ad,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Pd,envmap_pars_vertex:Id,envmap_physical_pars_fragment:Vd,envmap_vertex:Ld,fog_vertex:Dd,fog_pars_vertex:Ud,fog_fragment:Nd,fog_pars_fragment:kd,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Bd,lights_pars_begin:Hd,lights_toon_fragment:Gd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Zd,lights_fragment_begin:$d,lights_fragment_maps:Jd,lights_fragment_end:Kd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:of,metalnessmap_fragment:af,metalnessmap_pars_fragment:lf,morphinstance_vertex:cf,morphcolor_vertex:hf,morphnormal_vertex:uf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:yf,normal_vertex:xf,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:Sf,opaque_fragment:wf,packing:Ef,premultiplied_alpha_fragment:Tf,project_vertex:Af,dithering_fragment:Rf,dithering_pars_fragment:Cf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Df,shadowmap_vertex:Uf,shadowmask_pars_fragment:Nf,skinbase_vertex:kf,skinning_pars_vertex:Ff,skinning_vertex:Of,skinnormal_vertex:zf,specularmap_fragment:Bf,specularmap_pars_fragment:Hf,tonemapping_fragment:Vf,tonemapping_pars_fragment:Gf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:Zf,worldpos_vertex:$f,background_vert:Jf,background_frag:Kf,backgroundCube_vert:jf,backgroundCube_frag:Qf,cube_vert:tp,cube_frag:ep,depth_vert:ip,depth_frag:np,distanceRGBA_vert:sp,distanceRGBA_frag:rp,equirect_vert:op,equirect_frag:ap,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:yp,meshphong_vert:xp,meshphong_frag:vp,meshphysical_vert:_p,meshphysical_frag:bp,meshtoon_vert:Mp,meshtoon_frag:Sp,points_vert:wp,points_frag:Ep,shadow_vert:Tp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp},rt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},pi={basic:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Be([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Be([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Be([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Be([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Be([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Be([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Be([rt.common,rt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Be([rt.lights,rt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};pi.physical={uniforms:Be([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var Js={r:0,b:0,g:0},on=new Ui,Pp=new ie;function Ip(s,t,e,i,n,r,o){let a=new _t(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b)),b}function y(v){let b=!1,x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),b=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,b){let x=g(b);x&&(x.isCubeTexture||x.mapping===Pr)?(h===void 0&&(h=new Ht(new Ni(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:Zn(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),on.copy(b.backgroundRotation),on.x*=-1,on.y*=-1,on.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(on)),h.material.toneMapped=Xt.getTransfer(x.colorSpace)!==re,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ht(new Jn(2,2),new Fe({name:"BackgroundMaterial",uniforms:Zn(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(Js,th(s)),i.buffers.color.setClear(Js.r,Js.g,Js.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:y,addToRenderList:m}}function Lp(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,o=!1;function a(_,I,F,k,H){let $=!1,V=d(k,F,I);r!==V&&(r=V,c(r.object)),$=f(_,k,F,H),$&&g(_,k,F,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(_,I,F,k),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,I,F){let k=F.wireframe===!0,H=i[_.id];H===void 0&&(H={},i[_.id]=H);let $=H[I.id];$===void 0&&($={},H[I.id]=$);let V=$[k];return V===void 0&&(V=u(l()),$[k]=V),V}function u(_){let I=[],F=[],k=[];for(let H=0;H<e;H++)I[H]=0,F[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:k,object:_,attributes:{},index:null}}function f(_,I,F,k){let H=r.attributes,$=I.attributes,V=0,tt=F.getAttributes();for(let G in tt)if(tt[G].location>=0){let ot=H[G],bt=$[G];if(bt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(bt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(bt=_.instanceColor)),ot===void 0||ot.attribute!==bt||bt&&ot.data!==bt.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function g(_,I,F,k){let H={},$=I.attributes,V=0,tt=F.getAttributes();for(let G in tt)if(tt[G].location>=0){let ot=$[G];ot===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor));let bt={};bt.attribute=ot,ot&&ot.data&&(bt.data=ot.data),H[G]=bt,V++}r.attributes=H,r.attributesNum=V,r.index=k}function y(){let _=r.newAttributes;for(let I=0,F=_.length;I<F;I++)_[I]=0}function m(_){p(_,0)}function p(_,I){let F=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;F[_]=1,k[_]===0&&(s.enableVertexAttribArray(_),k[_]=1),H[_]!==I&&(s.vertexAttribDivisor(_,I),H[_]=I)}function v(){let _=r.newAttributes,I=r.enabledAttributes;for(let F=0,k=I.length;F<k;F++)I[F]!==_[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function b(_,I,F,k,H,$,V){V===!0?s.vertexAttribIPointer(_,I,F,H,$):s.vertexAttribPointer(_,I,F,k,H,$)}function x(_,I,F,k){y();let H=k.attributes,$=F.getAttributes(),V=I.defaultAttributeValues;for(let tt in $){let G=$[tt];if(G.location>=0){let st=H[tt];if(st===void 0&&(tt==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),tt==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),st!==void 0){let ot=st.normalized,bt=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;let Qt=Bt.buffer,Y=Bt.type,nt=Bt.bytesPerElement,Mt=Y===s.INT||Y===s.UNSIGNED_INT||st.gpuType===sl;if(st.isInterleavedBufferAttribute){let lt=st.data,Rt=lt.stride,Dt=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<G.locationSize;Gt++)p(G.location+Gt,lt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)m(G.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Gt=0;Gt<G.locationSize;Gt++)b(G.location+Gt,bt/G.locationSize,Y,ot,Rt*nt,(Dt+bt/G.locationSize*Gt)*nt,Mt)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)p(G.location+lt,st.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let lt=0;lt<G.locationSize;lt++)b(G.location+lt,bt/G.locationSize,Y,ot,bt*nt,bt/G.locationSize*lt*nt,Mt)}}else if(V!==void 0){let ot=V[tt];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(G.location,ot);break;case 3:s.vertexAttrib3fv(G.location,ot);break;case 4:s.vertexAttrib4fv(G.location,ot);break;default:s.vertexAttrib1fv(G.location,ot)}}}}v()}function T(){C();for(let _ in i){let I=i[_];for(let F in I){let k=I[F];for(let H in k)h(k[H].object),delete k[H];delete I[F]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;let I=i[_.id];for(let F in I){let k=I[F];for(let H in k)h(k[H].object),delete k[H];delete I[F]}delete i[_.id]}function A(_){for(let I in i){let F=i[I];if(F[_.id]===void 0)continue;let k=F[_.id];for(let H in k)h(k[H].object),delete k[H];delete F[_.id]}}function C(){S(),o=!0,r!==n&&(r=n,c(r.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Dp(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Up(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){return!(A!==hi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ii&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xi&&!C)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function Np(s){let t=this,e=null,i=0,n=!1,r=!1,o=new Ri,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,b=v*4,x=p.clippingState||null;l.value=x,x=h(g,u,b,f);for(let T=0;T!==b;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==y;++b,x+=4)o.copy(d[b]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function kp(s){let t=new WeakMap;function e(o,a){return a===$o?o.mapping=Wn:a===Jo&&(o.mapping=Xn),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===$o||a===Jo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Da(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ss=class extends yr{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},On=4,hc=[.125,.215,.35,.446,.526,.582],hn=20,Do=new Ss,uc=new _t,Uo=null,No=0,ko=0,Fo=!1,ln=(1+Math.sqrt(5))/2,Ln=1/ln,dc=[new R(-ln,Ln,0),new R(ln,Ln,0),new R(-Ln,0,ln),new R(Ln,0,ln),new R(0,ln,-Ln),new R(0,ln,Ln),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],vr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,No,ko),this._renderer.xr.enabled=Fo,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wn||t.mapping===Xn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Es,format:hi,colorSpace:Ki,depthBuffer:!1},n=fc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(r)),this._blurMaterial=Op(r,t,e)}return n}_compileMaterial(t){let e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,i,n){let a=new Pe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(uc),h.toneMapping=qi,h.autoClear=!1;let f=new Ye({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Ht(new Ni,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(uc),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;Ks(n,v*b,p>2?b:0,b,b),h.setRenderTarget(n),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Wn||t.mapping===Xn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ks(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Do)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dc[(n-r-1)%dc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ht(this._lodPlanes[n],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hn-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):hn;m>hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hn}`);let p=[],v=0;for(let A=0;A<hn;++A){let C=A/y,S=Math.exp(-C*C/2);p.push(S),A===0?v+=S:A<m&&(v+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;let x=this._sizeLods[n],T=3*x*(n>b-On?n-b+On:0),E=4*(this._cubeSize-x);Ks(e,T,E,3*x,2*x),l.setRenderTarget(e),l.render(d,Do)}};function Fp(s){let t=[],e=[],i=[],n=s,r=s-On+1+hc.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-On?l=hc[o-s+On-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,C=E>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(S,y*g*E),b.set(u,m*g*E);let _=[E,E,E,E,E,E];x.set(_,p*g*E)}let T=new Ie;T.setAttribute("position",new We(v,y)),T.setAttribute("uv",new We(b,m)),T.setAttribute("faceIndex",new We(x,p)),t.push(T),n>On&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fc(s,t,e){let i=new ui(s,t,e);return i.texture.mapping=Pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ks(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Op(s,t,e){let i=new Float32Array(hn),n=new R(0,1,0);return new Fe({name:"SphericalGaussianBlur",defines:{n:hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function pc(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mc(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function zp(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===$o||l===Jo,h=l===Wn||l===Xn;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new vr(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new vr(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Bp(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&vs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Hp(s,t,e,i){let n={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}u.removeEventListener("dispose",o),delete n[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],s.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let b=0,x=v.length;b<x;b+=3){let T=v[b+0],E=v[b+1],A=v[b+2];u.push(T,E,E,A,A,T)}}else if(g!==void 0){let v=g.array;y=g.version;for(let b=0,x=v.length/3-1;b<x;b+=3){let T=b+0,E=b+1,A=b+2;u.push(T,E,E,A,A,T)}}else return;let m=new(jc(u)?gr:mr)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Vp(s,t,e){let i;function n(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,u*o,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function d(u,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*y[v];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Gp(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Wp(s,t,e){let i=new WeakMap,n=new ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let x=a.attributes.position.count*b,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*T*4*d),A=new fr(E,x,T,d);A.type=xi,A.needsUpdate=!0;let C=b*4;for(let _=0;_<d;_++){let I=m[_],F=p[_],k=v[_],H=x*T*4*_;for(let $=0;$<I.count;$++){let V=$*C;f===!0&&(n.fromBufferAttribute(I,$),E[H+V+0]=n.x,E[H+V+1]=n.y,E[H+V+2]=n.z,E[H+V+3]=0),g===!0&&(n.fromBufferAttribute(F,$),E[H+V+4]=n.x,E[H+V+5]=n.y,E[H+V+6]=n.z,E[H+V+7]=0),y===!0&&(n.fromBufferAttribute(k,$),E[H+V+8]=n.x,E[H+V+9]=n.y,E[H+V+10]=n.z,E[H+V+11]=k.itemSize===4?n.w:1)}}u={count:d,texture:A,size:new Lt(x,T)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Xp(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Kn=class extends Xe{constructor(t,e,i,n,r,o,a,l,c,h=Bn){if(h!==Bn&&h!==Yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Bn&&(i=Li),i===void 0&&h===Yn&&(i=qn),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_e,this.minFilter=l!==void 0?l:_e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ih=new Xe,gc=new Kn(1,1),nh=new fr,sh=new Pa,rh=new xr,yc=[],xc=[],vc=new Float32Array(16),_c=new Float32Array(9),bc=new Float32Array(4);function ts(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=yc[n];if(r===void 0&&(r=new Float32Array(n),yc[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Lr(s,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function qp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Yp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function Zp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function $p(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function Jp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;bc.set(i),s.uniformMatrix2fv(this.addr,!1,bc),Ee(e,i)}}function Kp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;_c.set(i),s.uniformMatrix3fv(this.addr,!1,_c),Ee(e,i)}}function jp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;vc.set(i),s.uniformMatrix4fv(this.addr,!1,vc),Ee(e,i)}}function Qp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function tm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function em(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function im(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function nm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function sm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function rm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function om(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function am(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(gc.compareFunction=Jc,r=gc):r=ih,e.setTexture2D(t||r,n)}function lm(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||sh,n)}function cm(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||rh,n)}function hm(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||nh,n)}function um(s){switch(s){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return $p;case 35674:return Jp;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return im;case 5125:return nm;case 36294:return sm;case 36295:return rm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}function dm(s,t){s.uniform1fv(this.addr,t)}function fm(s,t){let e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function pm(s,t){let e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function mm(s,t){let e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function gm(s,t){let e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ym(s,t){let e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function xm(s,t){let e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vm(s,t){s.uniform1iv(this.addr,t)}function _m(s,t){s.uniform2iv(this.addr,t)}function bm(s,t){s.uniform3iv(this.addr,t)}function Mm(s,t){s.uniform4iv(this.addr,t)}function Sm(s,t){s.uniform1uiv(this.addr,t)}function wm(s,t){s.uniform2uiv(this.addr,t)}function Em(s,t){s.uniform3uiv(this.addr,t)}function Tm(s,t){s.uniform4uiv(this.addr,t)}function Am(s,t,e){let i=this.cache,n=t.length,r=Lr(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||ih,r[o])}function Rm(s,t,e){let i=this.cache,n=t.length,r=Lr(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||sh,r[o])}function Cm(s,t,e){let i=this.cache,n=t.length,r=Lr(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||rh,r[o])}function Pm(s,t,e){let i=this.cache,n=t.length,r=Lr(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||nh,r[o])}function Im(s){switch(s){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return ym;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return bm;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return wm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}var Ua=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=um(e.type)}},Na=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Im(e.type)}},ka=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},Oo=/(\w+)(\])?(\[|\.)?/g;function Mc(s,t){s.seq.push(t),s.map[t.id]=t}function Lm(s,t,e){let i=s.name,n=i.length;for(Oo.lastIndex=0;;){let r=Oo.exec(i),o=Oo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Mc(e,c===void 0?new Ua(a,s,t):new Na(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new ka(a),Mc(e,d)),e=d}}}var Vn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Lm(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Sc(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Dm=37297,Um=0;function Nm(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var wc=new kt;function km(s){Xt._getMatrix(wc,Xt.workingColorSpace,s);let t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case Ir:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ec(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Nm(s.getShaderSource(t),o)}else return n}function Fm(s,t){let e=km(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Om(s,t){let e;switch(t){case au:e="Linear";break;case lu:e="Reinhard";break;case cu:e="Cineon";break;case hu:e="ACESFilmic";break;case du:e="AgX";break;case fu:e="Neutral";break;case uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var js=new R;function zm(){Xt.getLuminanceCoefficients(js);let s=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Hm(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vm(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function _s(s){return s!==""}function Tc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(s){return s.replace(Gm,Xm)}var Wm=new Map;function Xm(s,t){let e=Ot[t];if(e===void 0){let i=Wm.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fa(e)}var qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(s){return s.replace(qm,Ym)}function Ym(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Cc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function $m(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Wn:case Xn:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jm(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Xn&&(t="ENVMAP_MODE_REFRACTION"),t}function Km(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zc:t="ENVMAP_BLENDING_MULTIPLY";break;case ru:t="ENVMAP_BLENDING_MIX";break;case ou:t="ENVMAP_BLENDING_ADD";break}return t}function jm(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Qm(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zm(e),c=$m(e),h=Jm(e),d=Km(e),u=jm(e),f=Bm(e),g=Hm(r),y=n.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(m=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==qi?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Fm("linearToOutputTexel",e.outputColorSpace),zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),o=Fa(o),o=Tc(o,e),o=Ac(o,e),a=Fa(a),a=Tc(a,e),a=Ac(a,e),o=Rc(o),a=Rc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=v+m+o,x=v+p+a,T=Sc(n,n.VERTEX_SHADER,b),E=Sc(n,n.FRAGMENT_SHADER,x);n.attachShader(y,T),n.attachShader(y,E),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function A(I){if(s.debug.checkShaderErrors){let F=n.getProgramInfoLog(y).trim(),k=n.getShaderInfoLog(T).trim(),H=n.getShaderInfoLog(E).trim(),$=!0,V=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,y,T,E);else{let tt=Ec(n,T,"vertex"),G=Ec(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+tt+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||H==="")&&(V=!1);V&&(I.diagnostics={runnable:$,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:p}})}n.deleteShader(T),n.deleteShader(E),C=new Vn(n,y),S=Vm(n,y)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(y,Dm)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Um++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}var t0=0,Oa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new za(t),e.set(t,i)),i}},za=class{constructor(t){this.id=t0++,this.code=t,this.usedTimes=0}};function e0(s,t,e,i,n,r,o){let a=new pr,l=new Oa,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,I,F,k){let H=F.fog,$=k.geometry,V=S.isMeshStandardMaterial?F.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),G=tt&&tt.mapping===Pr?tt.image.height:null,st=g[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ot=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,bt=ot!==void 0?ot.length:0,Bt=0;$.morphAttributes.position!==void 0&&(Bt=1),$.morphAttributes.normal!==void 0&&(Bt=2),$.morphAttributes.color!==void 0&&(Bt=3);let Qt,Y,nt,Mt;if(st){let se=pi[st];Qt=se.vertexShader,Y=se.fragmentShader}else Qt=S.vertexShader,Y=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),Mt=l.getFragmentShaderID(S);let lt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,Gt=k.isBatchedMesh===!0,ge=!!S.map,$t=!!S.matcap,xe=!!tt,N=!!S.aoMap,Qe=!!S.lightMap,qt=!!S.bumpMap,Yt=!!S.normalMap,Tt=!!S.displacementMap,ce=!!S.emissiveMap,Et=!!S.metalnessMap,P=!!S.roughnessMap,M=S.anisotropy>0,O=S.clearcoat>0,J=S.dispersion>0,Q=S.iridescence>0,Z=S.sheen>0,St=S.transmission>0,ct=M&&!!S.anisotropyMap,ft=O&&!!S.clearcoatMap,Jt=O&&!!S.clearcoatNormalMap,et=O&&!!S.clearcoatRoughnessMap,pt=Q&&!!S.iridescenceMap,At=Q&&!!S.iridescenceThicknessMap,Ct=Z&&!!S.sheenColorMap,mt=Z&&!!S.sheenRoughnessMap,Zt=!!S.specularMap,Ft=!!S.specularColorMap,ae=!!S.specularIntensityMap,L=St&&!!S.transmissionMap,at=St&&!!S.thicknessMap,W=!!S.gradientMap,K=!!S.alphaMap,dt=S.alphaTest>0,ht=!!S.alphaHash,Ut=!!S.extensions,ye=qi;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ye=s.toneMapping);let De={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Qt,fragmentShader:Y,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ki,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:$t,envMap:xe,envMapMode:xe&&tt.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Qe,bumpMap:qt,normalMap:Yt,displacementMap:u&&Tt,emissiveMap:ce,normalMapObjectSpace:Yt&&S.normalMapType===xu,normalMapTangentSpace:Yt&&S.normalMapType===yu,metalnessMap:Et,roughnessMap:P,anisotropy:M,anisotropyMap:ct,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Jt,clearcoatRoughnessMap:et,dispersion:J,iridescence:Q,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:Z,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Zt,specularColorMap:Ft,specularIntensityMap:ae,transmission:St,transmissionMap:L,thicknessMap:at,gradientMap:W,opaque:S.transparent===!1&&S.blending===zn&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:ht,combine:S.combine,mapUv:ge&&y(S.map.channel),aoMapUv:N&&y(S.aoMap.channel),lightMapUv:Qe&&y(S.lightMap.channel),bumpMapUv:qt&&y(S.bumpMap.channel),normalMapUv:Yt&&y(S.normalMap.channel),displacementMapUv:Tt&&y(S.displacementMap.channel),emissiveMapUv:ce&&y(S.emissiveMap.channel),metalnessMapUv:Et&&y(S.metalnessMap.channel),roughnessMapUv:P&&y(S.roughnessMap.channel),anisotropyMapUv:ct&&y(S.anisotropyMap.channel),clearcoatMapUv:ft&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&y(S.sheenRoughnessMap.channel),specularMapUv:Zt&&y(S.specularMap.channel),specularColorMapUv:Ft&&y(S.specularColorMap.channel),specularIntensityMapUv:ae&&y(S.specularIntensityMap.channel),transmissionMapUv:L&&y(S.transmissionMap.channel),thicknessMapUv:at&&y(S.thicknessMap.channel),alphaMapUv:K&&y(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Yt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(ge||K),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Bt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&Xt.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ke,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function p(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)_.push(I),_.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(_,S),b(_,S),_.push(s.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function v(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function b(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let _=g[S.type],I;if(_){let F=pi[_];I=Wu.clone(F.uniforms)}else I=S.uniforms;return I}function T(S,_){let I;for(let F=0,k=h.length;F<k;F++){let H=h[F];if(H.cacheKey===_){I=H,++I.usedTimes;break}}return I===void 0&&(I=new Qm(s,_,S,r),h.push(I)),I}function E(S){if(--S.usedTimes===0){let _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function i0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function n0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ic(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(d,u,f,g,y,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),t++,p}function a(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||n0),i.length>1&&i.sort(u||Pc),n.length>1&&n.sort(u||Pc)}function h(){for(let d=t,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function s0(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Ic,s.set(i,[o])):n>=r.length?(o=new Ic,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function r0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new _t};break;case"SpotLight":e={position:new R,direction:new R,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function o0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var a0=0;function l0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function c0(s){let t=new r0,e=o0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,r=new ie,o=new ie;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,b=0,x=0,T=0,E=0,A=0;c.sort(l0);for(let S=0,_=c.length;S<_;S++){let I=c[S],F=I.color,k=I.intensity,H=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*k,d+=F.g*k,u+=F.b*k;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],k);A++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=I.shadow.matrix,v++}i.directional[f]=V,f++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(F).multiplyScalar(k),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[y]=V;let tt=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,tt.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[y]=tt.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=$,x++}y++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(F).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let tt=I.shadow,G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=V,g++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(k),V.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==b||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=b,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=A,i.version=a0++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let b=c[p];if(b.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),d++}else if(b.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let x=i.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let x=i.hemi[y];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Lc(s){let t=new c0(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function h0(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new Lc(s),t.set(n,[a])):r>=o.length?(a=new Lc(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ba=class extends pn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ha=class extends pn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},u0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d0=`uniform sampler2D shadow_pass;
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
}`;function f0(s,t,e){let i=new $n,n=new Lt,r=new Lt,o=new ve,a=new Ba({depthPacking:gu}),l=new Ha,c={},h=e.maxTextureSize,d={[vi]:ke,[ke]:vi,[Ke]:Ke},u=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:u0,fragmentShader:d0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ht(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),_=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==Ai&&this.type===Ai,H=p===Ai&&this.type!==Ai;for(let $=0,V=E.length;$<V;$++){let tt=E[$],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let st=G.getFrameExtents();if(n.multiply(st),r.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/st.x),n.x=r.x*st.x,G.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/st.y),n.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||k===!0||H===!0){let bt=this.type!==Ai?{minFilter:_e,magFilter:_e}:{};G.map!==null&&G.map.dispose(),G.map=new ui(n.x,n.y,bt),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let ot=G.getViewportCount();for(let bt=0;bt<ot;bt++){let Bt=G.getViewport(bt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),F.viewport(o),G.updateMatrices(tt,bt),i=G.getFrustum(),x(A,C,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Ai&&v(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,_,I)};function v(E,A){let C=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ui(n.x,n.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,C,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,C,f,y,null)}function b(E,A,C,S){let _=null,I=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)_=I;else if(_=C.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let F=_.uuid,k=A.uuid,H=c[F];H===void 0&&(H={},c[F]=H);let $=H[k];$===void 0&&($=_.clone(),H[k]=$,A.addEventListener("dispose",T)),_=$}if(_.visible=A.visible,_.wireframe=A.wireframe,S===Ai?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let F=s.properties.get(_);F.light=C}return _}function x(E,A,C,S,_){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Ai)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let k=t.update(E),H=E.material;if(Array.isArray(H)){let $=k.groups;for(let V=0,tt=$.length;V<tt;V++){let G=$[V],st=H[G.materialIndex];if(st&&st.visible){let ot=b(E,st,S,_);E.onBeforeShadow(s,E,A,C,k,ot,G),s.renderBufferDirect(C,null,k,ot,E,G),E.onAfterShadow(s,E,A,C,k,ot,G)}}}else if(H.visible){let $=b(E,H,S,_);E.onBeforeShadow(s,E,A,C,k,$,null),s.renderBufferDirect(C,null,k,$,E,null),E.onAfterShadow(s,E,A,C,k,$,null)}}let F=E.children;for(let k=0,H=F.length;k<H;k++)x(F[k],A,C,S,_)}function T(E){E.target.removeEventListener("dispose",T);for(let C in c){let S=c[C],_=E.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var p0={[Vo]:Go,[Wo]:Yo,[Xo]:Zo,[Gn]:qo,[Go]:Vo,[Yo]:Wo,[Zo]:Xo,[qo]:Gn};function m0(s,t){function e(){let L=!1,at=new ve,W=null,K=new ve(0,0,0,0);return{setMask:function(dt){W!==dt&&!L&&(s.colorMask(dt,dt,dt,dt),W=dt)},setLocked:function(dt){L=dt},setClear:function(dt,ht,Ut,ye,De){De===!0&&(dt*=ye,ht*=ye,Ut*=ye),at.set(dt,ht,Ut,ye),K.equals(at)===!1&&(s.clearColor(dt,ht,Ut,ye),K.copy(at))},reset:function(){L=!1,W=null,K.set(-1,0,0,0)}}}function i(){let L=!1,at=!1,W=null,K=null,dt=null;return{setReversed:function(ht){if(at!==ht){let Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let ye=dt;dt=null,this.setClear(ye)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?lt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(ht){W!==ht&&!L&&(s.depthMask(ht),W=ht)},setFunc:function(ht){if(at&&(ht=p0[ht]),K!==ht){switch(ht){case Vo:s.depthFunc(s.NEVER);break;case Go:s.depthFunc(s.ALWAYS);break;case Wo:s.depthFunc(s.LESS);break;case Gn:s.depthFunc(s.LEQUAL);break;case Xo:s.depthFunc(s.EQUAL);break;case qo:s.depthFunc(s.GEQUAL);break;case Yo:s.depthFunc(s.GREATER);break;case Zo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ht}},setLocked:function(ht){L=ht},setClear:function(ht){dt!==ht&&(at&&(ht=1-ht),s.clearDepth(ht),dt=ht)},reset:function(){L=!1,W=null,K=null,dt=null,at=!1}}}function n(){let L=!1,at=null,W=null,K=null,dt=null,ht=null,Ut=null,ye=null,De=null;return{setTest:function(se){L||(se?lt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(se){at!==se&&!L&&(s.stencilMask(se),at=se)},setFunc:function(se,ri,_i){(W!==se||K!==ri||dt!==_i)&&(s.stencilFunc(se,ri,_i),W=se,K=ri,dt=_i)},setOp:function(se,ri,_i){(ht!==se||Ut!==ri||ye!==_i)&&(s.stencilOp(se,ri,_i),ht=se,Ut=ri,ye=_i)},setLocked:function(se){L=se},setClear:function(se){De!==se&&(s.clearStencil(se),De=se)},reset:function(){L=!1,at=null,W=null,K=null,dt=null,ht=null,Ut=null,ye=null,De=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,v=null,b=null,x=null,T=null,E=null,A=new _t(0,0,0),C=0,S=!1,_=null,I=null,F=null,k=null,H=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,tt=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=tt>=2);let st=null,ot={},bt=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),Qt=new ve().fromArray(bt),Y=new ve().fromArray(Bt);function nt(L,at,W,K){let dt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(L,ht),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<W;Ut++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(at+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ht}let Mt={};Mt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),o.setFunc(Gn),qt(!1),Yt(Nl),lt(s.CULL_FACE),N(Xi);function lt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Dt(L,at){return d[L]!==at?(s.bindFramebuffer(L,at),d[L]=at,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Gt(L,at){let W=f,K=!1;if(L){W=u.get(at),W===void 0&&(W=[],u.set(at,W));let dt=L.textures;if(W.length!==dt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Ut=dt.length;ht<Ut;ht++)W[ht]=s.COLOR_ATTACHMENT0+ht;W.length=dt.length,K=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,K=!0);K&&s.drawBuffers(W)}function ge(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let $t={[cn]:s.FUNC_ADD,[Vh]:s.FUNC_SUBTRACT,[Gh]:s.FUNC_REVERSE_SUBTRACT};$t[Wh]=s.MIN,$t[Xh]=s.MAX;let xe={[qh]:s.ZERO,[Yh]:s.ONE,[Zh]:s.SRC_COLOR,[Bo]:s.SRC_ALPHA,[tu]:s.SRC_ALPHA_SATURATE,[jh]:s.DST_COLOR,[Jh]:s.DST_ALPHA,[$h]:s.ONE_MINUS_SRC_COLOR,[Ho]:s.ONE_MINUS_SRC_ALPHA,[Qh]:s.ONE_MINUS_DST_COLOR,[Kh]:s.ONE_MINUS_DST_ALPHA,[eu]:s.CONSTANT_COLOR,[iu]:s.ONE_MINUS_CONSTANT_COLOR,[nu]:s.CONSTANT_ALPHA,[su]:s.ONE_MINUS_CONSTANT_ALPHA};function N(L,at,W,K,dt,ht,Ut,ye,De,se){if(L===Xi){y===!0&&(Rt(s.BLEND),y=!1);return}if(y===!1&&(lt(s.BLEND),y=!0),L!==Hh){if(L!==m||se!==S){if((p!==cn||x!==cn)&&(s.blendEquation(s.FUNC_ADD),p=cn,x=cn),se)switch(L){case zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.ONE,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ol:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,b=null,T=null,E=null,A.set(0,0,0),C=0,m=L,S=se}return}dt=dt||at,ht=ht||W,Ut=Ut||K,(at!==p||dt!==x)&&(s.blendEquationSeparate($t[at],$t[dt]),p=at,x=dt),(W!==v||K!==b||ht!==T||Ut!==E)&&(s.blendFuncSeparate(xe[W],xe[K],xe[ht],xe[Ut]),v=W,b=K,T=ht,E=Ut),(ye.equals(A)===!1||De!==C)&&(s.blendColor(ye.r,ye.g,ye.b,De),A.copy(ye),C=De),m=L,S=!1}function Qe(L,at){L.side===Ke?Rt(s.CULL_FACE):lt(s.CULL_FACE);let W=L.side===ke;at&&(W=!W),qt(W),L.blending===zn&&L.transparent===!1?N(Xi):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(L){_!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),_=L)}function Yt(L){L!==Oh?(lt(s.CULL_FACE),L!==I&&(L===Nl?s.cullFace(s.BACK):L===zh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),I=L}function Tt(L){L!==F&&(V&&s.lineWidth(L),F=L)}function ce(L,at,W){L?(lt(s.POLYGON_OFFSET_FILL),(k!==at||H!==W)&&(s.polygonOffset(at,W),k=at,H=W)):Rt(s.POLYGON_OFFSET_FILL)}function Et(L){L?lt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function P(L){L===void 0&&(L=s.TEXTURE0+$-1),st!==L&&(s.activeTexture(L),st=L)}function M(L,at,W){W===void 0&&(st===null?W=s.TEXTURE0+$-1:W=st);let K=ot[W];K===void 0&&(K={type:void 0,texture:void 0},ot[W]=K),(K.type!==L||K.texture!==at)&&(st!==W&&(s.activeTexture(W),st=W),s.bindTexture(L,at||Mt[L]),K.type=L,K.texture=at)}function O(){let L=ot[st];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){Qt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Qt.copy(L))}function mt(L){Y.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Zt(L,at){let W=c.get(at);W===void 0&&(W=new WeakMap,c.set(at,W));let K=W.get(L);K===void 0&&(K=s.getUniformBlockIndex(at,L.name),W.set(L,K))}function Ft(L,at){let K=c.get(at).get(L);l.get(at)!==K&&(s.uniformBlockBinding(at,K,L.__bindingPointIndex),l.set(at,K))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ot={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,v=null,b=null,x=null,T=null,E=null,A=new _t(0,0,0),C=0,S=!1,_=null,I=null,F=null,k=null,H=null,Qt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Rt,bindFramebuffer:Dt,drawBuffers:Gt,useProgram:ge,setBlending:N,setMaterial:Qe,setFlipSided:qt,setCullFace:Yt,setLineWidth:Tt,setPolygonOffset:ce,setScissorTest:Et,activeTexture:P,bindTexture:M,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:pt,texImage3D:At,updateUBOMapping:Zt,uniformBlockBinding:Ft,texStorage2D:Jt,texStorage3D:et,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:ae}}function Dc(s,t,e,i){let n=g0(i);switch(e){case Wc:return s*t;case qc:return s*t;case Yc:return s*t*2;case al:return s*t/n.components*n.byteLength;case ll:return s*t/n.components*n.byteLength;case Zc:return s*t*2/n.components*n.byteLength;case cl:return s*t*2/n.components*n.byteLength;case Xc:return s*t*3/n.components*n.byteLength;case hi:return s*t*4/n.components*n.byteLength;case hl:return s*t*4/n.components*n.byteLength;case sr:case rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case or:case ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ta:case ia:return Math.max(s,16)*Math.max(t,8)/4;case Qo:case ea:return Math.max(s,8)*Math.max(t,8)/2;case na:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case la:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ca:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ha:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ua:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case da:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ma:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ga:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case va:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case lr:case _a:case ba:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $c:case Ma:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Sa:case wa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(s){switch(s){case Ii:case Hc:return{byteLength:1,components:1};case Ms:case Vc:case Es:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case Li:case sl:case xi:return{byteLength:4,components:1};case Gc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function y0(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return f?new OffscreenCanvas(P,M):ur("canvas")}function y(P,M,O){let J=1,Q=Et(P);if((Q.width>O||Q.height>O)&&(J=O/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Z=Math.floor(J*Q.width),St=Math.floor(J*Q.height);d===void 0&&(d=g(Z,St));let ct=M?g(Z,St):d;return ct.width=Z,ct.height=St,ct.getContext("2d").drawImage(P,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+St+")."),ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(P,M,O,J,Q=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=M;if(M===s.RED&&(O===s.FLOAT&&(Z=s.R32F),O===s.HALF_FLOAT&&(Z=s.R16F),O===s.UNSIGNED_BYTE&&(Z=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.R8UI),O===s.UNSIGNED_SHORT&&(Z=s.R16UI),O===s.UNSIGNED_INT&&(Z=s.R32UI),O===s.BYTE&&(Z=s.R8I),O===s.SHORT&&(Z=s.R16I),O===s.INT&&(Z=s.R32I)),M===s.RG&&(O===s.FLOAT&&(Z=s.RG32F),O===s.HALF_FLOAT&&(Z=s.RG16F),O===s.UNSIGNED_BYTE&&(Z=s.RG8)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RG8UI),O===s.UNSIGNED_SHORT&&(Z=s.RG16UI),O===s.UNSIGNED_INT&&(Z=s.RG32UI),O===s.BYTE&&(Z=s.RG8I),O===s.SHORT&&(Z=s.RG16I),O===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),O===s.UNSIGNED_INT&&(Z=s.RGB32UI),O===s.BYTE&&(Z=s.RGB8I),O===s.SHORT&&(Z=s.RGB16I),O===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),O===s.UNSIGNED_INT&&(Z=s.RGBA32UI),O===s.BYTE&&(Z=s.RGBA8I),O===s.SHORT&&(Z=s.RGBA16I),O===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),M===s.RGBA){let St=Q?Ir:Xt.getTransfer(J);O===s.FLOAT&&(Z=s.RGBA32F),O===s.HALF_FLOAT&&(Z=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Z=St===re?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(P,M){let O;return P?M===null||M===Li||M===qn?O=s.DEPTH24_STENCIL8:M===xi?O=s.DEPTH32F_STENCIL8:M===Ms&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===qn?O=s.DEPTH_COMPONENT24:M===xi?O=s.DEPTH_COMPONENT32F:M===Ms&&(O=s.DEPTH_COMPONENT16),O}function T(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==_e&&P.minFilter!==yi?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function E(P){let M=P.target;M.removeEventListener("dispose",E),C(M),M.isVideoTexture&&h.delete(M)}function A(P){let M=P.target;M.removeEventListener("dispose",A),_(M)}function C(P){let M=i.get(P);if(M.__webglInit===void 0)return;let O=P.source,J=u.get(O);if(J){let Q=J[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(P),Object.keys(J).length===0&&u.delete(O)}i.remove(P)}function S(P){let M=i.get(P);s.deleteTexture(M.__webglTexture);let O=P.source,J=u.get(O);delete J[M.__cacheKey],o.memory.textures--}function _(P){let M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let Q=0;Q<M.__webglFramebuffer[J].length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[J][Q]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let O=P.textures;for(let J=0,Q=O.length;J<Q;J++){let Z=i.get(O[J]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[J])}i.remove(P)}let I=0;function F(){I=0}function k(){let P=I;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),I+=1,P}function H(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function $(P,M){let O=i.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,P,M);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function V(P,M){let O=i.get(P);if(P.version>0&&O.__version!==P.version){Y(O,P,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function tt(P,M){let O=i.get(P);if(P.version>0&&O.__version!==P.version){Y(O,P,M);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function G(P,M){let O=i.get(P);if(P.version>0&&O.__version!==P.version){nt(O,P,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}let st={[Ko]:s.REPEAT,[un]:s.CLAMP_TO_EDGE,[jo]:s.MIRRORED_REPEAT},ot={[_e]:s.NEAREST,[pu]:s.NEAREST_MIPMAP_NEAREST,[Ls]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[lo]:s.LINEAR_MIPMAP_NEAREST,[dn]:s.LINEAR_MIPMAP_LINEAR},bt={[vu]:s.NEVER,[Eu]:s.ALWAYS,[_u]:s.LESS,[Jc]:s.LEQUAL,[bu]:s.EQUAL,[wu]:s.GEQUAL,[Mu]:s.GREATER,[Su]:s.NOTEQUAL};function Bt(P,M){if(M.type===xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===yi||M.magFilter===lo||M.magFilter===Ls||M.magFilter===dn||M.minFilter===yi||M.minFilter===lo||M.minFilter===Ls||M.minFilter===dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,st[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,st[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,st[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ot[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_e||M.minFilter!==Ls&&M.minFilter!==dn||M.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(P,M){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",E));let J=M.source,Q=u.get(J);Q===void 0&&(Q={},u.set(J,Q));let Z=H(M);if(Z!==P.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[Z].usedTimes++;let St=Q[P.__cacheKey];St!==void 0&&(Q[P.__cacheKey].usedTimes--,St.usedTimes===0&&S(M)),P.__cacheKey=Z,P.__webglTexture=Q[Z].texture}return O}function Y(P,M,O){let J=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=s.TEXTURE_3D);let Q=Qt(P,M),Z=M.source;e.bindTexture(J,P.__webglTexture,s.TEXTURE0+O);let St=i.get(Z);if(Z.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+O);let ct=Xt.getPrimaries(Xt.workingColorSpace),ft=M.colorSpace===mi?null:Xt.getPrimaries(M.colorSpace),Jt=M.colorSpace===mi||ct===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let et=y(M.image,!1,n.maxTextureSize);et=ce(M,et);let pt=r.convert(M.format,M.colorSpace),At=r.convert(M.type),Ct=b(M.internalFormat,pt,At,M.colorSpace,M.isVideoTexture);Bt(J,M);let mt,Zt=M.mipmaps,Ft=M.isVideoTexture!==!0,ae=St.__version===void 0||Q===!0,L=Z.dataReady,at=T(M,et);if(M.isDepthTexture)Ct=x(M.format===Yn,M.type),ae&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Ct,et.width,et.height,0,pt,At,null));else if(M.isDataTexture)if(Zt.length>0){Ft&&ae&&e.texStorage2D(s.TEXTURE_2D,at,Ct,Zt[0].width,Zt[0].height);for(let W=0,K=Zt.length;W<K;W++)mt=Zt[W],Ft?L&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(s.TEXTURE_2D,W,Ct,mt.width,mt.height,0,pt,At,mt.data);M.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(s.TEXTURE_2D,at,Ct,et.width,et.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,pt,At,et.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,et.width,et.height,0,pt,At,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ft&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ct,Zt[0].width,Zt[0].height,et.depth);for(let W=0,K=Zt.length;W<K;W++)if(mt=Zt[W],M.format!==hi)if(pt!==null)if(Ft){if(L)if(M.layerUpdates.size>0){let dt=Dc(mt.width,mt.height,M.format,M.type);for(let ht of M.layerUpdates){let Ut=mt.data.subarray(ht*dt/mt.data.BYTES_PER_ELEMENT,(ht+1)*dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ht,mt.width,mt.height,1,pt,Ut)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,et.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ct,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,et.depth,pt,At,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Ct,mt.width,mt.height,et.depth,0,pt,At,mt.data)}else{Ft&&ae&&e.texStorage2D(s.TEXTURE_2D,at,Ct,Zt[0].width,Zt[0].height);for(let W=0,K=Zt.length;W<K;W++)mt=Zt[W],M.format!==hi?pt!==null?Ft?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(s.TEXTURE_2D,W,Ct,mt.width,mt.height,0,pt,At,mt.data)}else if(M.isDataArrayTexture)if(Ft){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ct,et.width,et.height,et.depth),L)if(M.layerUpdates.size>0){let W=Dc(et.width,et.height,M.format,M.type);for(let K of M.layerUpdates){let dt=et.data.subarray(K*W/et.data.BYTES_PER_ELEMENT,(K+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,pt,At,dt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,At,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,pt,At,et.data);else if(M.isData3DTexture)Ft?(ae&&e.texStorage3D(s.TEXTURE_3D,at,Ct,et.width,et.height,et.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,At,et.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,pt,At,et.data);else if(M.isFramebufferTexture){if(ae)if(Ft)e.texStorage2D(s.TEXTURE_2D,at,Ct,et.width,et.height);else{let W=et.width,K=et.height;for(let dt=0;dt<at;dt++)e.texImage2D(s.TEXTURE_2D,dt,Ct,W,K,0,pt,At,null),W>>=1,K>>=1}}else if(Zt.length>0){if(Ft&&ae){let W=Et(Zt[0]);e.texStorage2D(s.TEXTURE_2D,at,Ct,W.width,W.height)}for(let W=0,K=Zt.length;W<K;W++)mt=Zt[W],Ft?L&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,pt,At,mt):e.texImage2D(s.TEXTURE_2D,W,Ct,pt,At,mt);M.generateMipmaps=!1}else if(Ft){if(ae){let W=Et(et);e.texStorage2D(s.TEXTURE_2D,at,Ct,W.width,W.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,At,et)}else e.texImage2D(s.TEXTURE_2D,0,Ct,pt,At,et);m(M)&&p(J),St.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function nt(P,M,O){if(M.image.length!==6)return;let J=Qt(P,M),Q=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+O);let Z=i.get(Q);if(Q.version!==Z.__version||J===!0){e.activeTexture(s.TEXTURE0+O);let St=Xt.getPrimaries(Xt.workingColorSpace),ct=M.colorSpace===mi?null:Xt.getPrimaries(M.colorSpace),ft=M.colorSpace===mi||St===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Jt&&!et?pt[K]=y(M.image[K],!0,n.maxCubemapSize):pt[K]=et?M.image[K].image:M.image[K],pt[K]=ce(M,pt[K]);let At=pt[0],Ct=r.convert(M.format,M.colorSpace),mt=r.convert(M.type),Zt=b(M.internalFormat,Ct,mt,M.colorSpace),Ft=M.isVideoTexture!==!0,ae=Z.__version===void 0||J===!0,L=Q.dataReady,at=T(M,At);Bt(s.TEXTURE_CUBE_MAP,M);let W;if(Jt){Ft&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Zt,At.width,At.height);for(let K=0;K<6;K++){W=pt[K].mipmaps;for(let dt=0;dt<W.length;dt++){let ht=W[dt];M.format!==hi?Ct!==null?Ft?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Ct,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Zt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Ct,mt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Zt,ht.width,ht.height,0,Ct,mt,ht.data)}}}else{if(W=M.mipmaps,Ft&&ae){W.length>0&&at++;let K=Et(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Zt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Ft?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Ct,mt,pt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,pt[K].width,pt[K].height,0,Ct,mt,pt[K].data);for(let dt=0;dt<W.length;dt++){let Ut=W[dt].image[K].image;Ft?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Ut.width,Ut.height,Ct,mt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Zt,Ut.width,Ut.height,0,Ct,mt,Ut.data)}}else{Ft?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,mt,pt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,Ct,mt,pt[K]);for(let dt=0;dt<W.length;dt++){let ht=W[dt];Ft?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Ct,mt,ht.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Zt,Ct,mt,ht.image[K])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Mt(P,M,O,J,Q,Z){let St=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),ft=b(O.internalFormat,St,ct,O.colorSpace),Jt=i.get(M),et=i.get(O);if(et.__renderTarget=M,!Jt.__hasExternalTextures){let pt=Math.max(1,M.width>>Z),At=Math.max(1,M.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,ft,pt,At,M.depth,0,St,ct,null):e.texImage2D(Q,Z,ft,pt,At,0,St,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,et.__webglTexture,0,qt(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,et.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(P,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){let J=M.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Z=x(M.stencilBuffer,Q),St=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=qt(M);Yt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Z,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,P)}else{let J=M.textures;for(let Q=0;Q<J.length;Q++){let Z=J[Q],St=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),ft=b(Z.internalFormat,St,ct,Z.colorSpace),Jt=qt(M);O&&Yt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,ft,M.width,M.height):Yt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,ft,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ft,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let Q=J.__webglTexture,Z=qt(M);if(M.depthTexture.format===Bn)Yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Yn)Yt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Dt(P){let M=i.get(P),O=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=J}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(M.__webglFramebuffer,P)}else if(O){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=s.createRenderbuffer(),lt(M.__webglDepthbuffer[J],P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),lt(M.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(P,M,O){let J=i.get(P);M!==void 0&&Mt(J.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Dt(P)}function ge(P){let M=P.texture,O=i.get(P),J=i.get(M);P.addEventListener("dispose",A);let Q=P.textures,Z=P.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=M.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let ft=0;ft<M.mipmaps.length;ft++)O.__webglFramebuffer[ct][ft]=s.createFramebuffer()}else O.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)O.__webglFramebuffer[ct]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(St)for(let ct=0,ft=Q.length;ct<ft;ct++){let Jt=i.get(Q[ct]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Yt(P)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){let ft=Q[ct];O.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);let Jt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),pt=b(ft.internalFormat,Jt,et,ft.colorSpace,P.isXRRenderTarget===!0),At=qt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,At,pt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Mt(O.__webglFramebuffer[ct][ft],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else Mt(O.__webglFramebuffer[ct],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,ft=Q.length;ct<ft;ct++){let Jt=Q[ct],et=i.get(Jt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Bt(s.TEXTURE_2D,Jt),Mt(O.__webglFramebuffer,P,Jt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),Bt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Mt(O.__webglFramebuffer[ft],P,M,s.COLOR_ATTACHMENT0,ct,ft);else Mt(O.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,ct,0);m(M)&&p(ct),e.unbindTexture()}P.depthBuffer&&Dt(P)}function $t(P){let M=P.textures;for(let O=0,J=M.length;O<J;O++){let Q=M[O];if(m(Q)){let Z=v(P),St=i.get(Q).__webglTexture;e.bindTexture(Z,St),p(Z),e.unbindTexture()}}}let xe=[],N=[];function Qe(P){if(P.samples>0){if(Yt(P)===!1){let M=P.textures,O=P.width,J=P.height,Q=s.COLOR_BUFFER_BIT,Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=i.get(P),ct=M.length>1;if(ct)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);let Jt=i.get(M[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,O,J,0,0,O,J,Q,s.NEAREST),l===!0&&(xe.length=0,N.length=0,xe.push(s.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(Z),N.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,St.__webglColorRenderbuffer[ft]);let Jt=i.get(M[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function qt(P){return Math.min(n.maxSamples,P.samples)}function Yt(P){let M=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(P){let M=o.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function ce(P,M){let O=P.colorSpace,J=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==Ki&&O!==mi&&(Xt.getTransfer(O)===re?(J!==hi||Q!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Gt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Yt}function x0(s,t){function e(i,n=mi){let r,o=Xt.getTransfer(n);if(i===Ii)return s.UNSIGNED_BYTE;if(i===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Gc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Hc)return s.BYTE;if(i===Vc)return s.SHORT;if(i===Ms)return s.UNSIGNED_SHORT;if(i===sl)return s.INT;if(i===Li)return s.UNSIGNED_INT;if(i===xi)return s.FLOAT;if(i===Es)return s.HALF_FLOAT;if(i===Wc)return s.ALPHA;if(i===Xc)return s.RGB;if(i===hi)return s.RGBA;if(i===qc)return s.LUMINANCE;if(i===Yc)return s.LUMINANCE_ALPHA;if(i===Bn)return s.DEPTH_COMPONENT;if(i===Yn)return s.DEPTH_STENCIL;if(i===al)return s.RED;if(i===ll)return s.RED_INTEGER;if(i===Zc)return s.RG;if(i===cl)return s.RG_INTEGER;if(i===hl)return s.RGBA_INTEGER;if(i===sr||i===rr||i===or||i===ar)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===ta||i===ea||i===ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===na||i===sa||i===ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===na||i===sa)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ra)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oa||i===aa||i===la||i===ca||i===ha||i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===ya||i===xa||i===va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===aa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===la)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ca)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ha)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ua)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===da)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ma)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ga)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ya)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===va)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lr||i===_a||i===ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===lr)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$c||i===Ma||i===Sa||i===wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===lr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Va=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},je=class extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},v0={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ga=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new Xe,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Fe({vertexShader:_0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wa=class extends Zi{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=new Ga,m=e.getContextAttributes(),p=null,v=null,b=[],x=[],T=new Lt,E=null,A=new Pe;A.viewport=new ve;let C=new Pe;C.viewport=new ve;let S=[A,C],_=new Va,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=b[Y];return nt===void 0&&(nt=new bs,b[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=b[Y];return nt===void 0&&(nt=new bs,b[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=b[Y];return nt===void 0&&(nt=new bs,b[Y]=nt),nt.getHandSpace()};function k(Y){let nt=x.indexOf(Y.inputSource);if(nt===-1)return;let Mt=b[nt];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||o),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){let nt=x[Y];nt!==null&&(x[Y]=null,b[Y].disconnect(nt))}I=null,F=null,y.reset(),t.setRenderTarget(p),f=null,u=null,d=null,n=null,v=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",H),n.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),n.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,nt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ui(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Yn:Bn,Mt=m.stencil?qn:Li);let Rt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(Rt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ui(u.textureWidth,u.textureHeight,{format:hi,type:Ii,depthTexture:new Kn(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Qt.setContext(n),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(Y){for(let nt=0;nt<Y.removed.length;nt++){let Mt=Y.removed[nt],lt=x.indexOf(Mt);lt>=0&&(x[lt]=null,b[lt].disconnect(Mt))}for(let nt=0;nt<Y.added.length;nt++){let Mt=Y.added[nt],lt=x.indexOf(Mt);if(lt===-1){for(let Dt=0;Dt<b.length;Dt++)if(Dt>=x.length){x.push(Mt),lt=Dt;break}else if(x[Dt]===null){x[Dt]=Mt,lt=Dt;break}if(lt===-1)break}let Rt=b[lt];Rt&&Rt.connect(Mt)}}let V=new R,tt=new R;function G(Y,nt,Mt){V.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(Mt.matrixWorld);let lt=V.distanceTo(tt),Rt=nt.projectionMatrix.elements,Dt=Mt.projectionMatrix.elements,Gt=Rt[14]/(Rt[10]-1),ge=Rt[14]/(Rt[10]+1),$t=(Rt[9]+1)/Rt[5],xe=(Rt[9]-1)/Rt[5],N=(Rt[8]-1)/Rt[0],Qe=(Dt[8]+1)/Dt[0],qt=Gt*N,Yt=Gt*Qe,Tt=lt/(-N+Qe),ce=Tt*-N;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ce),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Et=Gt+Tt,P=ge+Tt,M=qt-ce,O=Yt+(lt-ce),J=$t*ge/P*Et,Q=xe*ge/P*Et;Y.projectionMatrix.makePerspective(M,O,J,Q,Et,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let nt=Y.near,Mt=Y.far;y.texture!==null&&(y.depthNear>0&&(nt=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),_.near=C.near=A.near=nt,_.far=C.far=A.far=Mt,(I!==_.near||F!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,F=_.far),A.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,_.layers.mask=A.layers.mask|C.layers.mask;let lt=Y.parent,Rt=_.cameras;st(_,lt);for(let Dt=0;Dt<Rt.length;Dt++)st(Rt[Dt],lt);Rt.length===2?G(_,A,C):_.projectionMatrix.copy(A.projectionMatrix),ot(Y,_,lt)};function ot(Y,nt,Mt){Mt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Aa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let bt=null;function Bt(Y,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let lt=!1;Mt.length!==_.cameras.length&&(_.cameras.length=0,lt=!0);for(let Dt=0;Dt<Mt.length;Dt++){let Gt=Mt[Dt],ge=null;if(f!==null)ge=f.getViewport(Gt);else{let xe=d.getViewSubImage(u,Gt);ge=xe.viewport,Dt===0&&(t.setRenderTargetTextures(v,xe.colorTexture,u.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(v))}let $t=S[Dt];$t===void 0&&($t=new Pe,$t.layers.enable(Dt),$t.viewport=new ve,S[Dt]=$t),$t.matrix.fromArray(Gt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Gt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ge.x,ge.y,ge.width,ge.height),Dt===0&&(_.matrix.copy($t.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),lt===!0&&_.cameras.push($t)}let Rt=n.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Dt=d.getDepthInformation(Mt[0]);Dt&&Dt.isValid&&Dt.texture&&y.init(t,Dt,n.renderState)}}for(let Mt=0;Mt<b.length;Mt++){let lt=x[Mt],Rt=b[Mt];lt!==null&&Rt!==void 0&&Rt.update(lt,nt,c||o)}bt&&bt(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Qt=new eh;Qt.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){bt=Y},this.dispose=function(){}}},an=new Ui,M0=new ie;function S0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,th(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),b=v.envMap,x=v.envMapRotation;b&&(m.envMap.value=b,an.copy(x),an.x*=-1,an.y*=-1,an.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),m.envMapRotation.value.setFromMatrix4(M0.makeRotationFromEuler(an)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function w0(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let x=b.program;i.uniformBlockBinding(v,x)}function c(v,b){let x=n[v.id];x===void 0&&(g(v),x=h(v),n[v.id]=x,v.addEventListener("dispose",m));let T=b.program;i.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){let b=d();v.__bindingPointIndex=b;let x=s.createBuffer(),T=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=n[v.id],x=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let E=0,A=x.length;E<A;E++){let C=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,_=C.length;S<_;S++){let I=C[S];if(f(I,E,S,T)===!0){let F=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],H=0;for(let $=0;$<k.length;$++){let V=k[$],tt=y(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+H,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,x,T){let E=v.value,A=b+"_"+x;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{let C=T[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){let b=v.uniforms,x=0,T=16;for(let A=0,C=b.length;A<C;A++){let S=Array.isArray(b[A])?b[A]:[b[A]];for(let _=0,I=S.length;_<I;_++){let F=S[_],k=Array.isArray(F.value)?F.value:[F.value];for(let H=0,$=k.length;H<$;H++){let V=k[H],tt=y(V),G=x%T,st=G%tt.boundary,ot=G+st;x+=st,ot!==0&&T-ot<tt.storage&&(x+=T-ot),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=tt.storage}}}let E=x%T;return E>0&&(x+=T-E),v.__size=x,v.__cache={},this}function y(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){let b=v.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(n[b.id]),delete n[b.id],delete r[b.id]}function p(){for(let v in n)s.deleteBuffer(n[v]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}var _r=class{constructor(t={}){let{canvas:e=Au(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=qi,this.toneMappingExposure=1;let x=this,T=!1,E=0,A=0,C=null,S=-1,_=null,I=new ve,F=new ve,k=null,H=new _t(0),$=0,V=e.width,tt=e.height,G=1,st=null,ot=null,bt=new ve(0,0,V,tt),Bt=new ve(0,0,V,tt),Qt=!1,Y=new $n,nt=!1,Mt=!1,lt=new ie,Rt=new ie,Dt=new R,Gt=new ve,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function xe(){return C===null?G:1}let N=i;function Qe(w,D){return e.getContext(w,D)}try{let w={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){let D="webgl2";if(N=Qe(D,w),N===null)throw Qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let qt,Yt,Tt,ce,Et,P,M,O,J,Q,Z,St,ct,ft,Jt,et,pt,At,Ct,mt,Zt,Ft,ae,L;function at(){qt=new Bp(N),qt.init(),Ft=new x0(N,qt),Yt=new Up(N,qt,t,Ft),Tt=new m0(N,qt),Yt.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),ce=new Gp(N),Et=new i0,P=new y0(N,qt,Tt,Et,Yt,Ft,ce),M=new kp(x),O=new zp(x),J=new $u(N),ae=new Lp(N,J),Q=new Hp(N,J,ce,ae),Z=new Xp(N,Q,J,ce),Ct=new Wp(N,Yt,P),et=new Np(Et),St=new e0(x,M,O,qt,Yt,ae,et),ct=new S0(x,Et),ft=new s0,Jt=new h0(qt),At=new Ip(x,M,O,Tt,Z,f,l),pt=new f0(x,Z,Yt),L=new w0(N,ce,Yt,Tt),mt=new Dp(N,qt,ce),Zt=new Vp(N,qt,ce),ce.programs=St.programs,x.capabilities=Yt,x.extensions=qt,x.properties=Et,x.renderLists=ft,x.shadowMap=pt,x.state=Tt,x.info=ce}at();let W=new Wa(x,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=qt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=qt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(V,tt,!1))},this.getSize=function(w){return w.set(V,tt)},this.setSize=function(w,D,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,tt=D,e.width=Math.floor(w*G),e.height=Math.floor(D*G),z===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(V*G,tt*G).floor()},this.setDrawingBufferSize=function(w,D,z){V=w,tt=D,G=z,e.width=Math.floor(w*z),e.height=Math.floor(D*z),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,D,z,B){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,D,z,B),Tt.viewport(I.copy(bt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,D,z,B){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,D,z,B),Tt.scissor(F.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){Tt.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(w=!0,D=!0,z=!0){let B=0;if(w){let U=!1;if(C!==null){let it=C.texture.format;U=it===hl||it===cl||it===ll}if(U){let it=C.texture.type,ut=it===Ii||it===Li||it===Ms||it===qn||it===rl||it===ol,yt=At.getClearColor(),xt=At.getClearAlpha(),Pt=yt.r,Nt=yt.g,vt=yt.b;ut?(g[0]=Pt,g[1]=Nt,g[2]=vt,g[3]=xt,N.clearBufferuiv(N.COLOR,0,g)):(y[0]=Pt,y[1]=Nt,y[2]=vt,y[3]=xt,N.clearBufferiv(N.COLOR,0,y))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT),z&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),ft.dispose(),Jt.dispose(),Et.dispose(),M.dispose(),O.dispose(),Z.dispose(),ae.dispose(),L.dispose(),St.dispose(),W.dispose(),W.removeEventListener("sessionstart",Al),W.removeEventListener("sessionend",Rl),tn.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=ce.autoReset,D=pt.enabled,z=pt.autoUpdate,B=pt.needsUpdate,U=pt.type;at(),ce.autoReset=w,pt.enabled=D,pt.autoUpdate=z,pt.needsUpdate=B,pt.type=U}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){let D=w.target;D.removeEventListener("dispose",Ut),ye(D)}function ye(w){De(w),Et.remove(w)}function De(w){let D=Et.get(w).programs;D!==void 0&&(D.forEach(function(z){St.releaseProgram(z)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,z,B,U,it){D===null&&(D=ge);let ut=U.isMesh&&U.matrixWorld.determinant()<0,yt=Nh(w,D,z,B,U);Tt.setMaterial(B,ut);let xt=z.index,Pt=1;if(B.wireframe===!0){if(xt=Q.getWireframeAttribute(z),xt===void 0)return;Pt=2}let Nt=z.drawRange,vt=z.attributes.position,Kt=Nt.start*Pt,le=(Nt.start+Nt.count)*Pt;it!==null&&(Kt=Math.max(Kt,it.start*Pt),le=Math.min(le,(it.start+it.count)*Pt)),xt!==null?(Kt=Math.max(Kt,0),le=Math.min(le,xt.count)):vt!=null&&(Kt=Math.max(Kt,0),le=Math.min(le,vt.count));let he=le-Kt;if(he<0||he===1/0)return;ae.setup(U,B,yt,z,xt);let Ve,te=mt;if(xt!==null&&(Ve=J.get(xt),te=Zt,te.setIndex(Ve)),U.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*xe()),te.setMode(N.LINES)):te.setMode(N.TRIANGLES);else if(U.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),Tt.setLineWidth(wt*xe()),U.isLineSegments?te.setMode(N.LINES):U.isLineLoop?te.setMode(N.LINE_LOOP):te.setMode(N.LINE_STRIP)}else U.isPoints?te.setMode(N.POINTS):U.isSprite&&te.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)te.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))te.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let wt=U._multiDrawStarts,bi=U._multiDrawCounts,ee=U._multiDrawCount,oi=xt?J.get(xt).bytesPerElement:1,xn=Et.get(B).currentProgram.getUniforms();for(let Ze=0;Ze<ee;Ze++)xn.setValue(N,"_gl_DrawID",Ze),te.render(wt[Ze]/oi,bi[Ze])}else if(U.isInstancedMesh)te.renderInstances(Kt,he,U.count);else if(z.isInstancedBufferGeometry){let wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,bi=Math.min(z.instanceCount,wt);te.renderInstances(Kt,he,bi)}else te.render(Kt,he)};function se(w,D,z){w.transparent===!0&&w.side===Ke&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,Is(w,D,z),w.side=vi,w.needsUpdate=!0,Is(w,D,z),w.side=Ke):Is(w,D,z)}this.compile=function(w,D,z=null){z===null&&(z=w),p=Jt.get(z),p.init(D),b.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let B=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let it=U.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){let yt=it[ut];se(yt,z,U),B.add(yt)}else se(it,z,U),B.add(it)}),b.pop(),p=null,B},this.compileAsync=function(w,D,z=null){let B=this.compile(w,D,z);return new Promise(U=>{function it(){if(B.forEach(function(ut){Et.get(ut).currentProgram.isReady()&&B.delete(ut)}),B.size===0){U(w);return}setTimeout(it,10)}qt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ri=null;function _i(w){ri&&ri(w)}function Al(){tn.stop()}function Rl(){tn.start()}let tn=new eh;tn.setAnimationLoop(_i),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(w){ri=w,W.setAnimationLoop(w),w===null?tn.stop():tn.start()},W.addEventListener("sessionstart",Al),W.addEventListener("sessionend",Rl),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,D,C),p=Jt.get(w,b.length),p.init(D),b.push(p),Rt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),Mt=this.localClippingEnabled,nt=et.init(this.clippingPlanes,Mt),m=ft.get(w,v.length),m.init(),v.push(m),W.enabled===!0&&W.isPresenting===!0){let it=x.xr.getDepthSensingMesh();it!==null&&ao(it,D,-1/0,x.sortObjects)}ao(w,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,ot),$t=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,$t&&At.addToRenderList(m,w),this.info.render.frame++,nt===!0&&et.beginShadows();let z=p.state.shadowsArray;pt.render(z,w,D),nt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){let it=D.cameras;if(U.length>0)for(let ut=0,yt=it.length;ut<yt;ut++){let xt=it[ut];Pl(B,U,w,xt)}$t&&At.render(w);for(let ut=0,yt=it.length;ut<yt;ut++){let xt=it[ut];Cl(m,w,xt,xt.viewport)}}else U.length>0&&Pl(B,U,w,D),$t&&At.render(w),Cl(m,w,D);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,D),ae.resetDefaultState(),S=-1,_=null,b.pop(),b.length>0?(p=b[b.length-1],nt===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ao(w,D,z,B){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){B&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);let ut=Z.update(w),yt=w.material;yt.visible&&m.push(w,ut,yt,z,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){let ut=Z.update(w),yt=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Gt.copy(ut.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(yt)){let xt=ut.groups;for(let Pt=0,Nt=xt.length;Pt<Nt;Pt++){let vt=xt[Pt],Kt=yt[vt.materialIndex];Kt&&Kt.visible&&m.push(w,ut,Kt,z,Gt.z,vt)}}else yt.visible&&m.push(w,ut,yt,z,Gt.z,null)}}let it=w.children;for(let ut=0,yt=it.length;ut<yt;ut++)ao(it[ut],D,z,B)}function Cl(w,D,z,B){let U=w.opaque,it=w.transmissive,ut=w.transparent;p.setupLightsView(z),nt===!0&&et.setGlobalState(x.clippingPlanes,z),B&&Tt.viewport(I.copy(B)),U.length>0&&Ps(U,D,z),it.length>0&&Ps(it,D,z),ut.length>0&&Ps(ut,D,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Pl(w,D,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new ui(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Es:Ii,minFilter:dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let it=p.state.transmissionRenderTarget[B.id],ut=B.viewport||I;it.setSize(ut.z,ut.w);let yt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(H),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),$t&&At.render(z);let xt=x.toneMapping;x.toneMapping=qi;let Pt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),nt===!0&&et.setGlobalState(x.clippingPlanes,B),Ps(w,z,B),P.updateMultisampleRenderTarget(it),P.updateRenderTargetMipmap(it),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let vt=0,Kt=D.length;vt<Kt;vt++){let le=D[vt],he=le.object,Ve=le.geometry,te=le.material,wt=le.group;if(te.side===Ke&&he.layers.test(B.layers)){let bi=te.side;te.side=ke,te.needsUpdate=!0,Il(he,z,B,Ve,te,wt),te.side=bi,te.needsUpdate=!0,Nt=!0}}Nt===!0&&(P.updateMultisampleRenderTarget(it),P.updateRenderTargetMipmap(it))}x.setRenderTarget(yt),x.setClearColor(H,$),Pt!==void 0&&(B.viewport=Pt),x.toneMapping=xt}function Ps(w,D,z){let B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,it=w.length;U<it;U++){let ut=w[U],yt=ut.object,xt=ut.geometry,Pt=B===null?ut.material:B,Nt=ut.group;yt.layers.test(z.layers)&&Il(yt,D,z,xt,Pt,Nt)}}function Il(w,D,z,B,U,it){w.onBeforeRender(x,D,z,B,U,it),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,D,z,B,w,it),U.transparent===!0&&U.side===Ke&&U.forceSinglePass===!1?(U.side=ke,U.needsUpdate=!0,x.renderBufferDirect(z,D,B,U,w,it),U.side=vi,U.needsUpdate=!0,x.renderBufferDirect(z,D,B,U,w,it),U.side=Ke):x.renderBufferDirect(z,D,B,U,w,it),w.onAfterRender(x,D,z,B,U,it)}function Is(w,D,z){D.isScene!==!0&&(D=ge);let B=Et.get(w),U=p.state.lights,it=p.state.shadowsArray,ut=U.state.version,yt=St.getParameters(w,U.state,it,D,z),xt=St.getProgramCacheKey(yt),Pt=B.programs;B.environment=w.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(w.isMeshStandardMaterial?O:M).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",Ut),Pt=new Map,B.programs=Pt);let Nt=Pt.get(xt);if(Nt!==void 0){if(B.currentProgram===Nt&&B.lightsStateVersion===ut)return Dl(w,yt),Nt}else yt.uniforms=St.getUniforms(w),w.onBeforeCompile(yt,x),Nt=St.acquireProgram(yt,xt),Pt.set(xt,Nt),B.uniforms=yt.uniforms;let vt=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(vt.clippingPlanes=et.uniform),Dl(w,yt),B.needsLights=Fh(w),B.lightsStateVersion=ut,B.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Nt,B.uniformsList=null,Nt}function Ll(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Vn.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Dl(w,D){let z=Et.get(w);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Nh(w,D,z,B,U){D.isScene!==!0&&(D=ge),P.resetTextureUnits();let it=D.fog,ut=B.isMeshStandardMaterial?D.environment:null,yt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ki,xt=(B.isMeshStandardMaterial?O:M).get(B.envMap||ut),Pt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),vt=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,le=!!z.morphAttributes.color,he=qi;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(he=x.toneMapping);let Ve=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=Ve!==void 0?Ve.length:0,wt=Et.get(B),bi=p.state.lights;if(nt===!0&&(Mt===!0||w!==_)){let ti=w===_&&B.id===S;et.setState(B,w,ti)}let ee=!1;B.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==bi.state.version||wt.outputColorSpace!==yt||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==xt||B.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==et.numPlanes||wt.numIntersection!==et.numIntersection)||wt.vertexAlphas!==Pt||wt.vertexTangents!==Nt||wt.morphTargets!==vt||wt.morphNormals!==Kt||wt.morphColors!==le||wt.toneMapping!==he||wt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,wt.__version=B.version);let oi=wt.currentProgram;ee===!0&&(oi=Is(B,D,U));let xn=!1,Ze=!1,ls=!1,ue=oi.getUniforms(),fi=wt.uniforms;if(Tt.useProgram(oi.program)&&(xn=!0,Ze=!0,ls=!0),B.id!==S&&(S=B.id,Ze=!0),xn||_!==w){Tt.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),Cu(lt),Pu(lt),ue.setValue(N,"projectionMatrix",lt)):ue.setValue(N,"projectionMatrix",w.projectionMatrix),ue.setValue(N,"viewMatrix",w.matrixWorldInverse);let ki=ue.map.cameraPosition;ki!==void 0&&ki.setValue(N,Dt.setFromMatrixPosition(w.matrixWorld)),Yt.logarithmicDepthBuffer&&ue.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ue.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Ze=!0,ls=!0)}if(U.isSkinnedMesh){ue.setOptional(N,U,"bindMatrix"),ue.setOptional(N,U,"bindMatrixInverse");let ti=U.skeleton;ti&&(ti.boneTexture===null&&ti.computeBoneTexture(),ue.setValue(N,"boneTexture",ti.boneTexture,P))}U.isBatchedMesh&&(ue.setOptional(N,U,"batchingTexture"),ue.setValue(N,"batchingTexture",U._matricesTexture,P),ue.setOptional(N,U,"batchingIdTexture"),ue.setValue(N,"batchingIdTexture",U._indirectTexture,P),ue.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ue.setValue(N,"batchingColorTexture",U._colorsTexture,P));let cs=z.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&Ct.update(U,z,oi),(Ze||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,ue.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(fi.envMap.value=xt,fi.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(fi.envMapIntensity.value=D.environmentIntensity),Ze&&(ue.setValue(N,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&kh(fi,ls),it&&B.fog===!0&&ct.refreshFogUniforms(fi,it),ct.refreshMaterialUniforms(fi,B,G,tt,p.state.transmissionRenderTarget[w.id]),Vn.upload(N,Ll(wt),fi,P)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vn.upload(N,Ll(wt),fi,P),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ue.setValue(N,"center",U.center),ue.setValue(N,"modelViewMatrix",U.modelViewMatrix),ue.setValue(N,"normalMatrix",U.normalMatrix),ue.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let ti=B.uniformsGroups;for(let ki=0,Fi=ti.length;ki<Fi;ki++){let Ul=ti[ki];L.update(Ul,oi),L.bind(Ul,oi)}}return oi}function kh(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Fh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,D,z){Et.get(w.texture).__webglTexture=D,Et.get(w.depthTexture).__webglTexture=z;let B=Et.get(w);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let z=Et.get(w);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,z=0){C=w,E=D,A=z;let B=!0,U=null,it=!1,ut=!1;if(w){let xt=Et.get(w);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(xt.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(xt.__hasExternalTextures)P.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let vt=w.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&Et.has(vt)&&(w.width!==vt.image.width||w.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}let Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);let Nt=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?U=Nt[D][z]:U=Nt[D],it=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?U=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[z]:U=Nt,I.copy(w.viewport),F.copy(w.scissor),k=w.scissorTest}else I.copy(bt).multiplyScalar(G).floor(),F.copy(Bt).multiplyScalar(G).floor(),k=Qt;if(Tt.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&Tt.drawBuffers(w,U),Tt.viewport(I),Tt.scissor(F),Tt.setScissorTest(k),it){let xt=Et.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,z)}else if(ut){let xt=Et.get(w.texture),Pt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,Pt)}S=-1},this.readRenderTargetPixels=function(w,D,z,B,U,it,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){Tt.bindFramebuffer(N.FRAMEBUFFER,yt);try{let xt=w.texture,Pt=xt.format,Nt=xt.type;if(!Yt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-B&&z>=0&&z<=w.height-U&&N.readPixels(D,z,B,U,Ft.convert(Pt),Ft.convert(Nt),it)}finally{let xt=C!==null?Et.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(w,D,z,B,U,it,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){let xt=w.texture,Pt=xt.format,Nt=xt.type;if(!Yt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-B&&z>=0&&z<=w.height-U){Tt.bindFramebuffer(N.FRAMEBUFFER,yt);let vt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(D,z,B,U,Ft.convert(Pt),Ft.convert(Nt),0);let Kt=C!==null?Et.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Kt);let le=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ru(N,le,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(vt),N.deleteSync(le),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,z=0){w.isTexture!==!0&&(vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let B=Math.pow(2,-z),U=Math.floor(w.image.width*B),it=Math.floor(w.image.height*B),ut=D!==null?D.x:0,yt=D!==null?D.y:0;P.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ut,yt,U,it),Tt.unbindTexture()},this.copyTextureToTexture=function(w,D,z=null,B=null,U=0){w.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let it,ut,yt,xt,Pt,Nt,vt,Kt,le,he=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(it=z.max.x-z.min.x,ut=z.max.y-z.min.y,yt=z.isBox3?z.max.z-z.min.z:1,xt=z.min.x,Pt=z.min.y,Nt=z.isBox3?z.min.z:0):(it=he.width,ut=he.height,yt=he.depth||1,xt=0,Pt=0,Nt=0),B!==null?(vt=B.x,Kt=B.y,le=B.z):(vt=0,Kt=0,le=0);let Ve=Ft.convert(D.format),te=Ft.convert(D.type),wt;D.isData3DTexture?(P.setTexture3D(D,0),wt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(P.setTexture2DArray(D,0),wt=N.TEXTURE_2D_ARRAY):(P.setTexture2D(D,0),wt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let bi=N.getParameter(N.UNPACK_ROW_LENGTH),ee=N.getParameter(N.UNPACK_IMAGE_HEIGHT),oi=N.getParameter(N.UNPACK_SKIP_PIXELS),xn=N.getParameter(N.UNPACK_SKIP_ROWS),Ze=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,he.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);let ls=w.isDataArrayTexture||w.isData3DTexture,ue=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let fi=Et.get(w),cs=Et.get(D),ti=Et.get(fi.__renderTarget),ki=Et.get(cs.__renderTarget);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,ti.__webglFramebuffer),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Fi=0;Fi<yt;Fi++)ls&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,U,Nt+Fi),w.isDepthTexture?(ue&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(D).__webglTexture,U,le+Fi),N.blitFramebuffer(xt,Pt,it,ut,vt,Kt,it,ut,N.DEPTH_BUFFER_BIT,N.NEAREST)):ue?N.copyTexSubImage3D(wt,U,vt,Kt,le+Fi,xt,Pt,it,ut):N.copyTexSubImage2D(wt,U,vt,Kt,le+Fi,xt,Pt,it,ut);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ue?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(wt,U,vt,Kt,le,it,ut,yt,Ve,te,he.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(wt,U,vt,Kt,le,it,ut,yt,Ve,he.data):N.texSubImage3D(wt,U,vt,Kt,le,it,ut,yt,Ve,te,he):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,vt,Kt,it,ut,Ve,te,he.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,vt,Kt,he.width,he.height,Ve,he.data):N.texSubImage2D(N.TEXTURE_2D,U,vt,Kt,it,ut,Ve,te,he);N.pixelStorei(N.UNPACK_ROW_LENGTH,bi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee),N.pixelStorei(N.UNPACK_SKIP_PIXELS,oi),N.pixelStorei(N.UNPACK_SKIP_ROWS,xn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ze),U===0&&D.generateMipmaps&&N.generateMipmap(wt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,D,z=null,B=null,U=0){return w.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0),vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,z,B,U)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,Tt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var $i=class extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ta,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ze=new R,br=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ws=class extends pn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Dn,ps=new R,Un=new R,Nn=new R,kn=new Lt,ms=new Lt,oh=new ie,Qs=new R,gs=new R,tr=new R,Uc=new Lt,zo=new Lt,Nc=new Lt,Mr=class extends ni{constructor(t=new ws){if(super(),this.isSprite=!0,this.type="Sprite",Dn===void 0){Dn=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xa(e,5);Dn.setIndex([0,1,2,0,2,3]),Dn.setAttribute("position",new br(i,3,0,!1)),Dn.setAttribute("uv",new br(i,2,3,!1))}this.geometry=Dn,this.material=t,this.center=new Lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Un.setFromMatrixScale(this.matrixWorld),oh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Nn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Un.multiplyScalar(-Nn.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;er(Qs.set(-.5,-.5,0),Nn,o,Un,n,r),er(gs.set(.5,-.5,0),Nn,o,Un,n,r),er(tr.set(.5,.5,0),Nn,o,Un,n,r),Uc.set(0,0),zo.set(1,0),Nc.set(1,1);let a=t.ray.intersectTriangle(Qs,gs,tr,!1,ps);if(a===null&&(er(gs.set(-.5,.5,0),Nn,o,Un,n,r),zo.set(0,1),a=t.ray.intersectTriangle(Qs,tr,gs,!1,ps),a===null))return;let l=t.ray.origin.distanceTo(ps);l<t.near||l>t.far||e.push({distance:l,point:ps.clone(),uv:Wi.getInterpolation(ps,Qs,gs,tr,Uc,zo,Nc,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function er(s,t,e,i,n,r){kn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ms.x=r*kn.x-n*kn.y,ms.y=n*kn.x+r*kn.y):ms.copy(kn),s.copy(t),s.x+=ms.x,s.y+=ms.y,s.applyMatrix4(oh)}var qa=class extends Xe{constructor(t=null,e=1,i=1,n,r,o,a,l,c=_e,h=_e,d,u){super(null,o,a,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends We{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fn=new ie,kc=new ie,ir=[],Fc=new Di,E0=new ie,ys=new Ht,xs=new fn,Ji=class extends Ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,E0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fn),Fc.copy(t.boundingBox).applyMatrix4(Fn),this.boundingBox.union(Fc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fn),xs.copy(t.boundingSphere).applyMatrix4(Fn),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(i),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Fn),kc.multiplyMatrices(i,Fn),ys.matrixWorld=kc,ys.raycast(t,ir);for(let o=0,a=ir.length;o<a;o++){let l=ir[o];l.instanceId=r,l.object=this,e.push(l)}ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new qa(new Float32Array(n*this.count),n,this.count,al,xi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var jn=class extends Xe{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wr=class s extends Ie{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Wt(d,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function v(){let x=new R,T=new R,E=0,A=(e-t)/i;for(let C=0;C<=r;C++){let S=[],_=C/r,I=_*(e-t)+t;for(let F=0;F<=n;F++){let k=F/n,H=k*l+a,$=Math.sin(H),V=Math.cos(H);T.x=I*$,T.y=-_*i+m,T.z=I*V,d.push(T.x,T.y,T.z),x.set($,A,V).normalize(),u.push(x.x,x.y,x.z),f.push(k,1-_),S.push(g++)}y.push(S)}for(let C=0;C<n;C++)for(let S=0;S<r;S++){let _=y[S][C],I=y[S+1][C],F=y[S+1][C+1],k=y[S][C+1];(t>0||S!==0)&&(h.push(_,I,k),E+=3),(e>0||S!==r-1)&&(h.push(I,F,k),E+=3)}c.addGroup(p,E,0),p+=E}function b(x){let T=g,E=new Lt,A=new R,C=0,S=x===!0?t:e,_=x===!0?1:-1;for(let F=1;F<=n;F++)d.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),g++;let I=g;for(let F=0;F<=n;F++){let H=F/n*l+a,$=Math.cos(H),V=Math.sin(H);A.x=S*V,A.y=m*_,A.z=S*$,d.push(A.x,A.y,A.z),u.push(0,_,0),E.x=$*.5+.5,E.y=V*.5*_+.5,f.push(E.x,E.y),g++}for(let F=0;F<n;F++){let k=T+F,H=I+F;x===!0?h.push(H,H+1,k):h.push(H+1,H,k),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ya=class s extends Ie{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new R,x=new R,T=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],b),f(e[E+1],x),f(e[E+2],T),l(b,x,T,v)}function l(v,b,x,T){let E=T+1,A=[];for(let C=0;C<=E;C++){A[C]=[];let S=v.clone().lerp(x,C/E),_=b.clone().lerp(x,C/E),I=E-C;for(let F=0;F<=I;F++)F===0&&C===E?A[C][F]=S:A[C][F]=S.clone().lerp(_,F/I)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let _=Math.floor(S/2);S%2===0?(u(A[C][_+1]),u(A[C+1][_]),u(A[C][_])):(u(A[C][_+1]),u(A[C+1][_+1]),u(A[C+1][_]))}}function c(v){let b=new R;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(v),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let v=new R;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let x=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;o.push(x,1-T)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let b=o[v+0],x=o[v+2],T=o[v+4],E=Math.max(b,x,T),A=Math.min(b,x,T);E>.9&&A<.1&&(b<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,b){let x=v*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){let v=new R,b=new R,x=new R,T=new R,E=new Lt,A=new Lt,C=new Lt;for(let S=0,_=0;S<r.length;S+=9,_+=6){v.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),C.set(o[_+4],o[_+5]),T.copy(v).add(b).add(x).divideScalar(3);let I=m(T);y(E,_+0,v,I),y(A,_+2,b,I),y(C,_+4,x,I)}}function y(v,b,x,T){T<0&&v.x===1&&(o[b]=v.x-1),x.x===0&&x.z===0&&(o[b]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Er=class s extends Ya{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Tr=class s extends Ie{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/n,f=new R,g=new Lt;for(let y=0;y<=n;y++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<n;y++){let m=y*(i+1);for(let p=0;p<i;p++){let v=p+m,b=v,x=v+i+1,T=v+i+2,E=v+1;a.push(b,x,E),a.push(x,T,E)}}this.setIndex(a),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ar=class s extends Ie{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let v=[],b=p/i,x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let E=T/e;d.x=-t*Math.cos(n+E*r)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(n+E*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(E+x,1-b),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let b=h[p][v+1],x=h[p][v],T=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(b,x,E),(p!==i-1||l<Math.PI)&&f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rr=class s extends Ie{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new R,d=new R,u=new R;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let y=g/n*r,m=f/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let y=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,v=(n+1)*f+g;o.push(y,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function nr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function T0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Qn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Za=class extends Qn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bl:r=t,a=2*e-i;break;case Hl:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bl:o=t,l=2*i-e;break;case Hl:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,v=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+v*o[c+T]+b*o[l+T]+x*o[d+T];return r}},$a=class extends Qn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ja=class extends Qn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},di=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nr(e,this.TimeBufferType),this.values=nr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:nr(t.times,Array),values:nr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case Ea:e=this.InterpolantFactoryMethodLinear;break;case co:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&T0(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===co,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Ea;var mn=class extends di{constructor(t,e,i){super(t,e,i)}};mn.prototype.ValueTypeName="bool";mn.prototype.ValueBufferType=Array;mn.prototype.DefaultInterpolation=cr;mn.prototype.InterpolantFactoryMethodLinear=void 0;mn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends di{};Ka.prototype.ValueTypeName="color";var ja=class extends di{};ja.prototype.ValueTypeName="number";var Qa=class extends Qn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Cr=class extends di{InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var gn=class extends di{constructor(t,e,i){super(t,e,i)}};gn.prototype.ValueTypeName="string";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=cr;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends di{};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},A0=new el,il=class{constructor(t){this.manager=t!==void 0?t:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";var dl="\\[\\]\\.:\\/",R0=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",C0="[^"+dl.replace("\\.","")+"]",P0=/((?:WC+[\/:])*)/.source.replace("WC",fl),I0=/(WCOD+)?/.source.replace("WCOD",C0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),D0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),U0=new RegExp("^"+P0+I0+L0+D0+"$"),N0=["material","materials","bones","map"],nl=class{constructor(t,e,i){let n=i||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},pe=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R0,"")}static parseTrackName(t){let e=U0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);N0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=nl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var pl=class{constructor(){this.map=new Map}on(t,e){return this.map.has(t)||this.map.set(t,new Set),this.map.get(t).add(e),()=>this.off(t,e)}once(t,e){let i=this.on(t,n=>{i(),e(n)});return i}off(t,e){let i=this.map.get(t);i&&i.delete(e)}emit(t,e){let i=this.map.get(t);if(i)for(let r of Array.from(i))try{r(e)}catch(o){console.error("[event]",t,o)}let n=this.map.get("*");if(n)for(let r of n)r({type:t,payload:e})}},q=new pl;var jt=(s,t,e)=>s<t?t:s>e?e:s,Dr=(s,t,e)=>s+(t-s)*e;var Le=(s,t,e,i)=>Dr(s,t,1-Math.exp(-e*i));var ah=Math.PI*2,Ur=s=>{for(;s>Math.PI;)s-=ah;for(;s<-Math.PI;)s+=ah;return s},As=(s,t,e,i)=>s+Ur(t-s)*(1-Math.exp(-e*i));function si(s){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+e()*(n-i),e.int=(i,n)=>Math.floor(i+e()*(n-i+1)),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e.weighted=i=>{let n=0;for(let o of i)n+=o[1];let r=e()*n;for(let o of i)if(r-=o[1],r<=0)return o[0];return i[i.length-1][0]},e}function lh(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var Ts=()=>new R,gg={a:Ts(),b:Ts(),c:Ts(),d:Ts(),e:Ts()};function ml(s,t){for(let e of Object.keys(t)){let i=t[e];i&&typeof i=="object"&&!Array.isArray(i)&&s[e]&&typeof s[e]=="object"&&!Array.isArray(s[e])?ml(s[e],i):s[e]=i}return s}var ch=["cities","skins","gadgets","rides","chapters","sideQuests","crimes","npcTypes","palettes","collectibles"],hh=["dialogues","strings","speakers"],gl=class{constructor(){this.packs=[],this.disabled=new Set,this.data={},this.tips=[],this.hooks=[],this.rebuild()}addPack(t){if(!t||!t.id){console.warn("Pack without id ignored",t);return}let e=this.packs.findIndex(i=>i.id===t.id);e>=0&&this.packs.splice(e,1),t.priority=t.priority??0,this.packs.push(t),this.packs.sort((i,n)=>i.priority-n.priority)}setDisabled(t){this.disabled=new Set(t||[]),this.rebuild()}rebuild(){let t={};for(let n of ch)t[n]=new Map;for(let n of hh)t[n]={};let e=[],i=[];for(let n of this.packs)if(!(this.disabled.has(n.id)&&!n.core)){for(let r of ch)for(let o of n[r]||[]){if(!o.id)continue;let a=t[r].get(o.id);a&&o.patch?t[r].set(o.id,ml(k0(a),o)):t[r].set(o.id,{...o,_pack:n.id})}for(let r of hh)Object.assign(t[r],n[r]||{});e.push(...n.tips||[]),n.hooks&&i.push(n.hooks)}this.data=t,this.tips=e,this.hooks=i,q.emit("registry:rebuilt",this)}get(t,e){return this.data[t]&&this.data[t].get(e)}list(t){return this.data[t]?Array.from(this.data[t].values()):[]}dialogue(t){return this.data.dialogues[t]}str(t,e){return this.data.strings[t]??e??t}runHook(t,...e){for(let i of this.hooks)if(typeof i[t]=="function")try{i[t](...e)}catch(n){console.error("[mod hook]",t,n)}}};function k0(s){try{return structuredClone(s)}catch{return JSON.parse(JSON.stringify(s))}}var me=new gl;function uh(s){let t={version:"1.0.0",register(i){me.addPack(i),me.rebuild()},registry:me,bus:q,game:s},e=window.TetherMod&&window.TetherMod._queue||[];window.TetherMod=t;for(let i of e)me.addPack(i);return me.rebuild(),t}var dh="tether.save";var Nr=()=>({version:2,story:{chapter:"ch1",step:0,completed:[]},flags:{},sideQuests:{done:[]},collectibles:[],stats:{crimes:0,takedowns:0,swingDistance:0,playTime:0},reputation:0,unlockedSkins:["tether_classic","pod_suit"],skin:"tether_classic",inventory:{gadgets:["line","pod","chirp"],rides:["skateboard","skates","bicycle"]},lastCity:"midtown",settings:{quality:"auto",comicFX:!0,ps1Wobble:!0,fov:92,sens:1,invertY:!1,camera:"fp",headBob:.5,sfx:.8,music:.4,controlsScale:1,controlsOpacity:.55,floatingStick:!0,leftHanded:!1,showFPS:!1},mods:{disabled:[]}}),F0={1:s=>(s.inventory=s.inventory||{gadgets:["line","pod","chirp"],rides:["skateboard","skates","bicycle"]},s)},yl=class{constructor(){this.data=this.load()}load(){try{let t=localStorage.getItem(dh);if(!t)return Nr();let e=JSON.parse(t);for(;(e.version||1)<2;){let n=e.version||1;e=(F0[n]||(r=>r))(e),e.version=n+1}let i=Nr();return fh(e,i),e}catch(t){return console.warn("Save corrupt, resetting",t),Nr()}}write(){try{localStorage.setItem(dh,JSON.stringify(this.data))}catch{}}reset(){let t=this.data.settings;this.data=Nr(),this.data.settings=t,this.write()}get settings(){return this.data.settings}flag(t,e){if(e===void 0)return this.data.flags[t];this.data.flags[t]=e,this.write()}};function fh(s,t){for(let e in t)e in s?t[e]&&typeof t[e]=="object"&&!Array.isArray(t[e])&&fh(s[e],t[e]):s[e]=t[e]}var de=new yl;var es=["cross","circle","square","triangle","l1","l2","l3","r1","r2","r3","up","down","left","right","start","select"],ph={Space:"cross",KeyC:"circle",ControlLeft:"circle",KeyE:"square",KeyQ:"triangle",ShiftLeft:"l1",ShiftRight:"l1",KeyF:"r2",KeyR:"r1",KeyV:"r3",Tab:"l3",KeyZ:"l2",ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Escape:"start",KeyP:"start",KeyM:"select",Enter:"cross"},xl=["cross","circle","square","triangle","l1","r1","l2","r2","select","start","l3","r3","up","down","left","right"],vl=class{constructor(){this.state={};for(let t of es)this.state[t]={down:!1,pressed:!1,released:!1,held:0,src:0};this.move={x:0,y:0},this.look={x:0,y:0},this.touchMove={x:0,y:0},this.keys=new Set,this.mouseLook={x:0,y:0},this.touchLook={x:0,y:0},this.lastDevice="touch",this.enabled=!0,this._raw={};for(let t of es)this._raw[t]=0;this._bindKeyboard()}_bindKeyboard(){window.addEventListener("keydown",t=>{if(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))return;this.keys.add(t.code),this.lastDevice="kbm";let e=ph[t.code];e&&(this._raw[e]|=2,t.preventDefault())}),window.addEventListener("keyup",t=>{this.keys.delete(t.code);let e=ph[t.code];e&&(this._raw[e]&=-3)}),window.addEventListener("blur",()=>{this.keys.clear();for(let t of es)this._raw[t]=0}),window.addEventListener("mousemove",t=>{document.pointerLockElement&&(this.mouseLook.x+=t.movementX,this.mouseLook.y+=t.movementY)}),window.addEventListener("mousedown",t=>{document.pointerLockElement&&(this.lastDevice="kbm",t.button===0&&(this._raw.r1|=4),t.button===2&&(this._raw.l2|=4),t.button===1&&(this._raw.r2|=4))}),window.addEventListener("mouseup",t=>{t.button===0&&(this._raw.r1&=-5),t.button===2&&(this._raw.l2&=-5),t.button===1&&(this._raw.r2&=-5)}),window.addEventListener("contextmenu",t=>{document.pointerLockElement&&t.preventDefault()})}setTouchButton(t,e){e?this._raw[t]|=1:this._raw[t]&=-2,this.lastDevice="touch"}clearTouch(){for(let t of es)this._raw[t]&=-2;this.touchMove.x=this.touchMove.y=0}poll(t,e){let i=null,n=null,r=navigator.getGamepads?navigator.getGamepads():[];for(let u of r){if(!u||!u.connected)continue;for(let g=0;g<xl.length;g++)u.buttons[g]&&(u.buttons[g].pressed||u.buttons[g].value>.4)?(this._raw[xl[g]]|=8,this.lastDevice="pad"):this._raw[xl[g]]&=-9;let f=g=>Math.abs(g)<.15?0:g;i={x:f(u.axes[0]||0),y:-f(u.axes[1]||0)},n={x:f(u.axes[2]||0),y:f(u.axes[3]||0)};break}for(let u of es){let f=this.state[u],g=this.enabled&&this._raw[u]!==0;f.pressed=g&&!f.down,f.released=!g&&f.down,f.down=g,f.held=g?f.held+t:0}let o=0,a=0;if(this.keys.has("KeyW")&&(a+=1),this.keys.has("KeyS")&&(a-=1),this.keys.has("KeyD")&&(o+=1),this.keys.has("KeyA")&&(o-=1),o||a){let u=Math.hypot(o,a);o/=u,a/=u}Math.abs(this.touchMove.x)+Math.abs(this.touchMove.y)>.01&&(o=this.touchMove.x,a=this.touchMove.y),i&&Math.hypot(i.x,i.y)>.01&&(o=i.x,a=i.y),this.move.x=this.enabled?o:0,this.move.y=this.enabled?a:0;let l=e?e.sens:1,c=e&&e.invertY?-1:1,h=this.mouseLook.x*.0022+this.touchLook.x*.0058,d=this.mouseLook.y*.0022+this.touchLook.y*.0058;n&&(h+=n.x*2.6*t,d+=n.y*2.2*t),this.look.x=this.enabled?h*l:0,this.look.y=this.enabled?d*l*c:0,this.mouseLook.x=this.mouseLook.y=0,this.touchLook.x=this.touchLook.y=0}btn(t){return this.state[t]}pressed(t){return this.state[t].pressed}down(t){return this.state[t].down}released(t){return this.state[t].released}consume(t){this.state[t].pressed=!1}anyPressed(){return es.some(t=>this.state[t].pressed)}},j=new vl;var O0={square:{glyph:"square",color:"#ff2fb3",label:"ACT"},triangle:{glyph:"triangle",color:"#39ff6a",label:"GEAR"},circle:{glyph:"circle",color:"#ff1e3c",label:"CROUCH"},cross:{glyph:"cross",color:"#1e7bff",label:"JUMP"}},Fr=class{constructor(t,e){this.cv=t,this.ctx=t.getContext("2d"),this.settings=e,this.controls={},this.pointers=new Map,this.stick={active:!1,bx:0,by:0,x:0,y:0,home:{x:0,y:0},r:50,zone:null},this.hints={},this.visible=!0,this.dirty=!0,this.enabled=!0,this.hiddenButtons=new Set,this._bind(),this.layout(),window.addEventListener("resize",()=>this.layout()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.layout(),120)),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>this.layout())}setHint(t,e){this.hints[t]!==e&&(this.hints[t]=e,this.dirty=!0)}setVisible(t){this.visible!==t&&(this.visible=t,this.cv.style.display=t?"block":"none",t||this.releaseAll(),this.dirty=!0)}releaseAll(){this.pointers.clear(),j.clearTouch(),this.stick.active=!1,this.dirty=!0}layout(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,2);this.W=t,this.H=e,this.dpr=i,this.cv.width=Math.round(t*i),this.cv.height=Math.round(e*i),this.cv.style.width=t+"px",this.cv.style.height=e+"px";let n=e>t;this.portrait=n;let r=this.settings.controlsScale||1,o=(n?t:Math.min(e*1.25,t*.62))/100*r;this.u=o;let a=4*o,l={},c=(p,v,b,x,T="btn")=>l[p]={id:p,x:v,y:b,r:x,kind:T},h=(p,v,b,x,T)=>l[p]={id:p,x:v,y:b,r:Math.max(x,T)/2,w:x,h:T,kind:"pill"},d,u,f,g,y;if(n){d={x:a+19*o,y:e-a-21*o,r:15*o},u=t-a-21*o,f=e-a-24*o,g=11.5*o,y=7.5*o;let p={x:t/2,y:e-a-11*o},v=6*o,b=4.4*o;c("up",p.x,p.y-v,b,"dpad"),c("down",p.x,p.y+v,b,"dpad"),c("left",p.x-v,p.y,b,"dpad"),c("right",p.x+v,p.y,b,"dpad");let x=e-a-58*o;h("l1",a+10*o,x+10*o,19*o,8*o),h("l2",a+10*o,x,19*o,8*o),h("r1",t-a-10*o,x+10*o,19*o,8*o),h("r2",t-a-10*o,x,19*o,8*o),c("l3",t/2-10*o,e-a-31*o,4.6*o),c("r3",t/2+10*o,e-a-31*o,4.6*o),h("select",t/2-9*o,a+4*o,12*o,5.5*o),h("start",t/2+9*o,a+4*o,12*o,5.5*o),this.stick.zone={x0:0,y0:e*.55,x1:t*.45,y1:e}}else{d={x:a+17*o,y:e-a-17*o,r:14*o},u=t-a-19*o,f=e-a-19*o,g=11*o,y=7*o;let p={x:a+50*o,y:e-a-12*o},v=6*o,b=4.4*o;c("up",p.x,p.y-v,b,"dpad"),c("down",p.x,p.y+v,b,"dpad"),c("left",p.x-v,p.y,b,"dpad"),c("right",p.x+v,p.y,b,"dpad");let x=a+4*o;h("l2",a+10*o,x,18*o,7.5*o),h("l1",a+10*o,x+10*o,18*o,7.5*o),h("r2",t-a-10*o,x,18*o,7.5*o),h("r1",t-a-10*o,x+10*o,18*o,7.5*o),c("l3",d.x+19*o,d.y-14*o,4.8*o),c("r3",u-23*o,f-14*o,4.8*o);let T=(p.x+6*o+(u-23*o))/2;h("select",T-8*o,e-a-4*o,12*o,5*o),h("start",T+8*o,e-a-4*o,12*o,5*o),this.stick.zone={x0:0,y0:e*.38,x1:t*.42,y1:e}}if(c("triangle",u,f-g,y,"face"),c("cross",u,f+g,y,"face"),c("square",u-g,f,y,"face"),c("circle",u+g,f,y,"face"),this.settings.leftHanded)for(let p in l)l[p].x=t-l[p].x;if(this.controls=l,this.stick.home={x:this.settings.leftHanded?t-d.x:d.x,y:d.y},this.stick.r=d.r,this.settings.leftHanded){let p=this.stick.zone;this.stick.zone={x0:t-p.x1,y0:p.y0,x1:t-p.x0,y1:p.y1}}this._resolveOverlaps();let m=document.documentElement.style;if(n)m.setProperty("--hudL","0px"),m.setProperty("--hudR","0px");else{let p=l.l1,v=l.r1;m.setProperty("--hudL",Math.round(Math.max(l.l1.x,l.l2.x)+p.w/2+8)+"px"),m.setProperty("--hudR",Math.round(t-Math.min(l.r1.x,l.r2.x)+v.w/2+8)+"px")}this.dirty=!0,q.emit("ui:layout",{portrait:n,W:t,H:e,u:o})}_resolveOverlaps(){let t=Object.values(this.controls),i=[{x:this.stick.home.x,y:this.stick.home.y,r:this.stick.r*1.15,fixed:!0},...t];for(let n=0;n<12;n++){let r=!1;for(let o=0;o<i.length;o++)for(let a=o+1;a<i.length;a++){let l=i[o],c=i[a],h=c.x-l.x,d=c.y-l.y,u=Math.hypot(h,d)||.01,f=l.r+c.r+2;if(u<f){let g=(f-u)/2,y=h/u,m=d/u;!l.fixed&&l.kind!=="face"&&(l.x-=y*g,l.y-=m*g),!c.fixed&&c.kind!=="face"&&(c.x+=y*g,c.y+=m*g),r=!0}}for(let o of t)o.x=jt(o.x,o.r,this.W-o.r),o.y=jt(o.y,o.r,this.H-o.r);if(!r)break}}hit(t,e,i){let n=null,r=1e9;for(let o in this.controls){let a=this.controls[o];if(this.hiddenButtons.has(o)||i&&!i.includes(a.kind))continue;let l=a.kind==="face"?1.25:1.15,c,h;a.kind==="pill"?(c=Math.abs(t-a.x)<=a.w/2*1.1&&Math.abs(e-a.y)<=a.h/2*1.3,h=Math.hypot(t-a.x,e-a.y)):(h=Math.hypot(t-a.x,e-a.y),c=h<=a.r*l),c&&h<r&&(r=h,n=o)}return n}_bind(){let t=this.cv,e={passive:!1};t.addEventListener("pointerdown",n=>{if(!this.enabled)return;n.preventDefault(),t.setPointerCapture&&t.setPointerCapture(n.pointerId);let r=n.clientX,o=n.clientY,a=this.hit(r,o);if(a){this.pointers.set(n.pointerId,{type:"btn",id:a}),j.setTouchButton(a,!0),this.dirty=!0,q.emit("ui:touchbtn",a);return}let l=this.stick.zone;if(!this.stick.active&&r>=l.x0&&r<=l.x1&&o>=l.y0&&o<=l.y1){this.stick.active=!0;let c=this.settings.floatingStick;this.stick.bx=c?r:this.stick.home.x,this.stick.by=c?o:this.stick.home.y,this.pointers.set(n.pointerId,{type:"stick"}),this._stickMove(r,o);return}this.pointers.set(n.pointerId,{type:"look",lx:r,ly:o})},e),t.addEventListener("pointermove",n=>{let r=this.pointers.get(n.pointerId);if(r){if(n.preventDefault(),r.type==="stick")this._stickMove(n.clientX,n.clientY);else if(r.type==="look")j.touchLook.x+=n.clientX-r.lx,j.touchLook.y+=n.clientY-r.ly,r.lx=n.clientX,r.ly=n.clientY;else if(r.type==="btn"&&this.controls[r.id]&&this.controls[r.id].kind==="face"){let o=this.hit(n.clientX,n.clientY,["face"]);o&&o!==r.id&&(j.setTouchButton(r.id,!1),j.setTouchButton(o,!0),r.id=o,this.dirty=!0)}}},e);let i=n=>{let r=this.pointers.get(n.pointerId);if(r){if(this.pointers.delete(n.pointerId),r.type==="btn"){let o=!1;for(let a of this.pointers.values())a.type==="btn"&&a.id===r.id&&(o=!0);o||j.setTouchButton(r.id,!1)}else r.type==="stick"&&(this.stick.active=!1,j.touchMove.x=j.touchMove.y=0);this.dirty=!0}};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("lostpointercapture",i)}_stickMove(t,e){let i=this.stick,n=t-i.bx,r=e-i.by,o=Math.hypot(n,r),a=i.r;if(o>a){this.settings.floatingStick&&o>a*1.6&&(i.bx=t-n/o*a*1.6,i.by=e-r/o*a*1.6,n=t-i.bx,r=e-i.by);let d=Math.hypot(n,r);n=n/d*a,r=r/d*a}i.x=n/a,i.y=r/a;let l=Math.hypot(i.x,i.y),c=.12,h=l<c?0:(l-c)/(1-c)/(l||1);j.touchMove.x=i.x*h,j.touchMove.y=-i.y*h,this.dirty=!0}draw(){if(!this.visible||!this.dirty)return;this.dirty=!1;let t=this.ctx,e=this.dpr,i=this.u;t.setTransform(e,0,0,e,0,0),t.clearRect(0,0,this.W,this.H);let n=this.settings.controlsOpacity??.55,r=this.stick,o=r.active?r.bx:r.home.x,a=r.active?r.by:r.home.y;t.globalAlpha=n*(r.active?1:.7),Rs(t,o,a,r.r,"rgba(20,20,30,0.35)","rgba(255,240,200,0.8)",2.5),t.globalAlpha=n*1.2,Rs(t,o+r.x*r.r,a+r.y*r.r,r.r*.45,"rgba(255,240,200,0.55)","#1b1b22",3);for(let l in this.controls){if(this.hiddenButtons.has(l))continue;let c=this.controls[l],h=j.state[l].down&&j._raw[l]&1;if(t.globalAlpha=Math.min(1,n*(h?1.6:1)),c.kind==="face"){let d=O0[l];Rs(t,c.x,c.y,c.r*(h?.92:1),h?d.color:"rgba(15,15,25,0.55)",d.color,3),B0(t,d.glyph,c.x,c.y,c.r*.5,h?"#fff":d.color),kr(t,this.hints[l]??d.label,c.x,c.y+c.r+i*2.2,i)}else c.kind==="dpad"?(Rs(t,c.x,c.y,c.r,h?"rgba(255,240,200,0.8)":"rgba(15,15,25,0.5)","rgba(255,240,200,0.8)",2),H0(t,l,c.x,c.y,c.r*.45,h?"#111":"rgba(255,240,200,0.95)"),this.hints[l]&&kr(t,this.hints[l],c.x,c.y+(l==="down"?c.r+i*2:l==="up"?-c.r-i*1.3:c.r+i*2),i*.8)):c.kind==="pill"?(z0(t,c.x-c.w/2,c.y-c.h/2,c.w,c.h,c.h/2,h?"rgba(255,240,200,0.85)":"rgba(15,15,25,0.5)","rgba(255,240,200,0.85)"),mh(t,l.toUpperCase(),c.x,c.y,Math.max(9,i*3),h?"#111":"#fff1c9"),this.hints[l]&&kr(t,this.hints[l],c.x,c.y+c.h/2+i*2,i*.85)):(Rs(t,c.x,c.y,c.r,h?"rgba(255,240,200,0.85)":"rgba(15,15,25,0.5)","rgba(255,240,200,0.85)",2),mh(t,l.toUpperCase(),c.x,c.y,Math.max(8,i*2.6),h?"#111":"#fff1c9"),this.hints[l]&&kr(t,this.hints[l],c.x,c.y+c.r+i*2,i*.8))}t.globalAlpha=1}};function Rs(s,t,e,i,n,r,o){s.beginPath(),s.arc(t,e,i,0,Math.PI*2),n&&(s.fillStyle=n,s.fill()),r&&(s.lineWidth=o,s.strokeStyle=r,s.stroke())}function z0(s,t,e,i,n,r,o,a){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+i,e,t+i,e+n,r),s.arcTo(t+i,e+n,t,e+n,r),s.arcTo(t,e+n,t,e,r),s.arcTo(t,e,t+i,e,r),s.closePath(),s.fillStyle=o,s.fill(),s.lineWidth=2,s.strokeStyle=a,s.stroke()}function mh(s,t,e,i,n,r){s.font=`${Math.round(n)}px Bangers, Impact, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=r,s.fillText(t,e,i+1)}function kr(s,t,e,i,n){t&&(s.font=`${Math.round(Math.max(9,n*2.4))}px Bangers, Impact, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.lineWidth=3,s.strokeStyle="rgba(0,0,0,0.75)",s.strokeText(t,e,i),s.fillStyle="#fff1c9",s.fillText(t,e,i))}function B0(s,t,e,i,n,r){s.lineWidth=Math.max(2.5,n*.28),s.strokeStyle=r,s.lineJoin="round",s.beginPath(),t==="square"?s.rect(e-n*.75,i-n*.75,n*1.5,n*1.5):t==="circle"?s.arc(e,i,n*.82,0,Math.PI*2):t==="triangle"?(s.moveTo(e,i-n*.9),s.lineTo(e+n*.88,i+n*.62),s.lineTo(e-n*.88,i+n*.62),s.closePath()):(s.moveTo(e-n*.75,i-n*.75),s.lineTo(e+n*.75,i+n*.75),s.moveTo(e+n*.75,i-n*.75),s.lineTo(e-n*.75,i+n*.75)),s.stroke()}function H0(s,t,e,i,n,r){let o={up:-Math.PI/2,down:Math.PI/2,left:Math.PI,right:0}[t];s.save(),s.translate(e,i),s.rotate(o),s.beginPath(),s.moveTo(n,0),s.lineTo(-n*.6,-n*.8),s.lineTo(-n*.6,n*.8),s.closePath(),s.fillStyle=r,s.fill(),s.restore()}var Oe={atlas:{value:null},sunDir:{value:new R(-.5,.75,.35).normalize()},sunColor:{value:new _t("#fff1c8")},skyColor:{value:new _t("#e8b45a")},groundColor:{value:new _t("#5a4a3a")},fogColor:{value:new _t("#e3ad4f")},fogNear:{value:60},fogFar:{value:260},snapRes:{value:new Lt(320,240)},snapOn:{value:1},time:{value:0}},V0=`
attribute vec4 tile;
varying vec3 vCol; varying vec2 vUv; varying vec4 vTile; varying float vFog; varying float vLight; varying vec3 vN;
uniform vec3 sunDir; uniform float fogNear; uniform float fogFar; uniform vec2 snapRes; uniform float snapOn; uniform float time;
uniform float wobble;
void main(){
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
    m = modelMatrix * instanceMatrix;
  #endif
  vec4 wp = m * vec4(position, 1.0);
  vec3 n = normalize(mat3(m) * normal);
  vN = n;
  float d = dot(n, sunDir);
  vLight = d;
  vec4 mv = viewMatrix * wp;
  vec4 cp = projectionMatrix * mv;
  if (snapOn > 0.5) { cp.xy = floor(cp.xy / cp.w * snapRes + 0.5) / snapRes * cp.w; }
  gl_Position = cp;
  vFog = smoothstep(fogNear, fogFar, -mv.z);
  vCol = vec3(1.0);
  #ifdef USE_COLOR
    vCol = color;
  #endif
  #ifdef USE_INSTANCING_COLOR
    vCol *= instanceColor;
  #endif
  vUv = uv; vTile = tile;
}`,G0=`
uniform sampler2D atlas; uniform vec3 sunColor; uniform vec3 skyColor; uniform vec3 groundColor; uniform vec3 fogColor;
uniform vec3 tint; uniform float tintAmt; uniform float opacity; uniform float emissive; uniform float useAtlas;
varying vec3 vCol; varying vec2 vUv; varying vec4 vTile; varying float vFog; varying float vLight; varying vec3 vN;
void main(){
  vec3 base = vCol;
  if (useAtlas > 0.5 && vTile.z > 0.0) {
    vec2 uv = vTile.xy + fract(vUv) * vTile.zw;
    base *= texture2D(atlas, uv).rgb;
  }
  // 3-band toon light like flat comic coloring
  float l = vLight;
  float band = l > 0.45 ? 1.0 : (l > 0.0 ? 0.78 : 0.58);
  vec3 amb = mix(groundColor, skyColor, vN.y * 0.5 + 0.5) * 0.35;
  vec3 c = base * (sunColor * band * 0.8 + amb);
  c = mix(c, base * 1.15, emissive);
  c = mix(c, tint, tintAmt);
  c = mix(c, fogColor, vFog);
  gl_FragColor = vec4(c, opacity);
}`;function Se(s={}){return new Fe({uniforms:{...Oe,tint:{value:new _t(s.tint||"#ffffff")},tintAmt:{value:0},opacity:{value:s.opacity??1},emissive:{value:s.emissive??0},useAtlas:{value:s.atlas===!1?0:1},wobble:{value:0}},vertexShader:V0,fragmentShader:G0,vertexColors:!0,transparent:!!s.transparent,side:s.side??vi,depthWrite:s.depthWrite??!0})}var gt={brick:0,deco:1,glass:2,office:3,warehouse:4,brownstone:5,roof:6,road:7,sidewalk:8,labwall:9,labfloor:10,grate:11,grass:12,water:13,wood:14,plain:15};function Or(s){let t=s%4,e=Math.floor(s/4);return[t/4+.002,1-(e+1)/4+.002,.25-.004,.25-.004]}function gh(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),i=(a,l)=>{e.save(),e.translate(a%4*128,Math.floor(a/4)*128),e.beginPath(),e.rect(0,0,128,128),e.clip(),l(e),e.restore()},n="#1d1712",r=(a,l,c,h,d)=>{e.fillStyle=n,e.fillRect(a-3,l-3,c+6,h+6),e.fillStyle=d?"#ffe9a0":"#5b7f86",e.fillRect(a,l,c,h),e.fillStyle=d?"#fff7d8":"#86b1b3",e.fillRect(a+3,l+3,c*.35,h*.3),e.fillStyle=n,e.fillRect(a+c/2-1.5,l,3,h)};i(gt.brick,()=>{e.fillStyle="#c9775a",e.fillRect(0,0,128,128),e.strokeStyle="rgba(80,30,20,0.45)",e.lineWidth=2;for(let a=0;a<128;a+=10){e.beginPath(),e.moveTo(0,a),e.lineTo(128,a),e.stroke();for(let l=a/10%2?0:12;l<128;l+=24)e.beginPath(),e.moveTo(l,a),e.lineTo(l,a+10),e.stroke()}r(34,30,60,70,!1),e.fillStyle="#e2d4b0",e.fillRect(26,100,76,8)}),i(gt.deco,()=>{e.fillStyle="#d9c9a0",e.fillRect(0,0,128,128),e.fillStyle="#b9a67c",e.fillRect(0,0,14,128),e.fillRect(114,0,14,128),r(30,22,68,78,!0),e.fillStyle=n,e.fillRect(0,112,128,4),e.fillStyle="#8f7a50";for(let a=0;a<5;a++)e.fillRect(18+a*20,116,10,12)}),i(gt.glass,()=>{let a=e.createLinearGradient(0,0,128,128);a.addColorStop(0,"#6fb3b8"),a.addColorStop(1,"#3d7a85"),e.fillStyle=a,e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,230,0.35)",e.beginPath(),e.moveTo(10,0),e.lineTo(50,0),e.lineTo(0,50),e.lineTo(0,10),e.fill(),e.fillStyle=n,e.fillRect(0,0,128,5),e.fillRect(0,0,5,128),e.fillRect(128/2-2,0,4,128)}),i(gt.office,()=>{e.fillStyle="#a3a08e",e.fillRect(0,0,128,128),r(14,26,44,60,!1),r(72,26,44,60,!0),e.fillStyle="#7b7866",e.fillRect(0,100,128,10)}),i(gt.warehouse,()=>{e.fillStyle="#7a8a7e",e.fillRect(0,0,128,128),e.fillStyle="rgba(0,0,0,0.25)";for(let a=0;a<128;a+=12)e.fillRect(a,0,4,128);e.fillStyle="#c96a3a",e.fillRect(0,0,128,6)}),i(gt.brownstone,()=>{e.fillStyle="#8a5a44",e.fillRect(0,0,128,128),r(24,22,34,72,!0),r(72,22,34,72,!1),e.fillStyle="#d8c6a0",e.fillRect(16,12,96,8),e.fillRect(16,98,96,6)}),i(gt.roof,()=>{e.fillStyle="#857a6c",e.fillRect(0,0,128,128);for(let a=0;a<400;a++)e.fillStyle=Math.random()<.5?"#766b5d":"#958a7b",e.fillRect(Math.random()*128,Math.random()*128,3,3)}),i(gt.road,()=>{e.fillStyle="#4b4743",e.fillRect(0,0,128,128);for(let a=0;a<300;a++)e.fillStyle="rgba(0,0,0,0.15)",e.fillRect(Math.random()*128,Math.random()*128,2,2);e.fillStyle="#f2c94c",e.fillRect(128/2-3,10,6,46),e.fillRect(128/2-3,74,6,46)}),i(gt.sidewalk,()=>{e.fillStyle="#b8ad98",e.fillRect(0,0,128,128),e.strokeStyle="#8c826f",e.lineWidth=3,e.strokeRect(1,1,128/2-2,128/2-2),e.strokeRect(128/2+1,1,128/2-2,128/2-2),e.strokeRect(1,128/2+1,128/2-2,128/2-2),e.strokeRect(128/2+1,128/2+1,128/2-2,128/2-2)}),i(gt.labwall,()=>{e.fillStyle="#c9cfc7",e.fillRect(0,0,128,128),e.strokeStyle="#7d877f",e.lineWidth=3,e.strokeRect(4,4,120,120),e.fillStyle="#e0e6dc",e.fillRect(10,10,108,20),e.fillStyle="#d6a12e";for(let a=-128;a<128;a+=22)e.save(),e.beginPath(),e.rect(0,112,128,12),e.clip(),e.fillRect(a,112,11,12),e.restore();e.fillStyle=n,e.fillRect(0,110,128,2)}),i(gt.labfloor,()=>{e.fillStyle="#8f9a96",e.fillRect(0,0,128,128),e.fillStyle="#7c8783",e.fillRect(0,0,128/2,128/2),e.fillRect(128/2,128/2,128/2,128/2)}),i(gt.grate,()=>{e.fillStyle="#4a4c4f",e.fillRect(0,0,128,128),e.strokeStyle="#2a2b2d",e.lineWidth=4;for(let a=0;a<128;a+=16)e.beginPath(),e.moveTo(a,0),e.lineTo(a,128),e.stroke(),e.beginPath(),e.moveTo(0,a),e.lineTo(128,a),e.stroke()}),i(gt.grass,()=>{e.fillStyle="#6f9a45",e.fillRect(0,0,128,128);for(let a=0;a<250;a++)e.fillStyle=Math.random()<.5?"#5f8a39":"#83ad55",e.fillRect(Math.random()*128,Math.random()*128,2,5)}),i(gt.water,()=>{e.fillStyle="#4f8d93",e.fillRect(0,0,128,128),e.strokeStyle="#8cc3c2",e.lineWidth=3;for(let a=10;a<128;a+=24){e.beginPath();for(let l=0;l<=128;l+=8)e.lineTo(l,a+Math.sin(l*.2+a)*3);e.stroke()}}),i(gt.wood,()=>{e.fillStyle="#9a6a3c",e.fillRect(0,0,128,128),e.fillStyle="#7d5430";for(let a=0;a<128;a+=16)e.fillRect(0,a,128,2)}),i(gt.plain,()=>{e.fillStyle="#ffffff",e.fillRect(0,0,128,128)});let o=new jn(t);return o.magFilter=_e,o.minFilter=_e,o.generateMipmaps=!1,o.colorSpace=mi,Oe.atlas.value=o,o}Xt.enabled=!1;var W0="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",X0=`
uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 res; uniform float near; uniform float far;
uniform float dotSize; uniform float inkAmt; uniform float vignette; uniform vec3 paper; uniform float flash; uniform vec3 flashCol; uniform float senseAmt;
varying vec2 vUv;
float lin(float d){ float z = d * 2.0 - 1.0; return (2.0 * near * far) / (far + near - z * (far - near)); }
void main(){
  vec3 c = texture2D(tColor, vUv).rgb;
  vec2 px = 1.0 / res;
  float d0 = lin(texture2D(tDepth, vUv).r);
  float d1 = lin(texture2D(tDepth, vUv + vec2(px.x, 0.0)).r);
  float d2 = lin(texture2D(tDepth, vUv + vec2(0.0, px.y)).r);
  float d3 = lin(texture2D(tDepth, vUv - vec2(px.x, 0.0)).r);
  float d4 = lin(texture2D(tDepth, vUv - vec2(0.0, px.y)).r);
  float e = abs(d1 + d2 + d3 + d4 - 4.0 * d0) / max(d0, 0.5);
  float ink = smoothstep(0.08, 0.2, e) * (1.0 - smoothstep(120.0, 260.0, d0));
  // posterize slightly
  c = floor(c * 12.0 + 0.5) / 12.0;
  // halftone in shadows: dot grid rotated 45deg
  float lum = dot(c, vec3(0.299, 0.587, 0.114));
  vec2 g = gl_FragCoord.xy / dotSize; g = mat2(0.7071, -0.7071, 0.7071, 0.7071) * g;
  vec2 f = fract(g) - 0.5; float r = length(f);
  float rad = clamp((0.62 - lum) * 0.95, 0.0, 0.55);
  float dots = 1.0 - smoothstep(rad - 0.08, rad + 0.04, r);
  c *= 1.0 - dots * 0.28;
  // light dots in bright sky too (like the reference sky)
  float hi = smoothstep(0.55, 0.85, lum) * (1.0 - smoothstep(0.12, 0.2, r)) * 0.07; c += hi;
  c = mix(c, vec3(0.08, 0.06, 0.05), ink * inkAmt);
  c *= paper;
  vec2 v = vUv - 0.5; c *= 1.0 - dot(v, v) * vignette;
  c = mix(c, flashCol, flash);
  // "Tether-sense" desaturate + pulse ring
  float gl = dot(c, vec3(0.333)); c = mix(c, vec3(gl) * vec3(0.8, 0.95, 1.05), senseAmt * 0.6);
  gl_FragColor = vec4(c, 1.0);
}`,zr=class{constructor(t,e){this.settings=e,this.gl=new _r({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.gl.outputColorSpace=Ki,this.gl.setClearColor(14921039,1),this.camera=new Pe(e.fov||80,1,.08,900),this.scale=.6,this.minScale=.35,this.maxScale=.85,this.frameTimes=[],this._accum=0,this.postScene=new $i,this.postCam=new Ss(-1,1,1,-1,0,1),this.postMat=new Fe({uniforms:{tColor:{value:null},tDepth:{value:null},res:{value:new Lt},near:{value:.08},far:{value:900},dotSize:{value:3},inkAmt:{value:.9},vignette:{value:.9},paper:{value:new _t(1,.98,.92)},flash:{value:0},flashCol:{value:new _t("#ffffff")},senseAmt:{value:0}},vertexShader:W0,fragmentShader:X0,depthTest:!1,depthWrite:!1}),this.postScene.add(new Ht(new Jn(2,2),this.postMat)),this.rt=null,this.postOK=!0,this.applyQuality(),this.resize(),window.addEventListener("resize",()=>this.resize())}applyQuality(){let t=this.settings.quality;t==="low"?(this.minScale=.3,this.maxScale=.45,this.scale=.4):t==="high"?(this.minScale=.55,this.maxScale=1,this.scale=.8):(this.minScale=.35,this.maxScale=.8),Oe.snapOn.value=this.settings.ps1Wobble?1:0,this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,2.5),n=this.scale*i,r=Math.max(160,Math.round(t*n)),o=Math.max(120,Math.round(e*n));this.gl.setPixelRatio(1),this.gl.setSize(r,o,!1),this.gl.domElement.style.width=t+"px",this.gl.domElement.style.height=e+"px",this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.w=r,this.h=o,Oe.snapRes.value.set(r/2.2,o/2.2),this.rt&&(this.rt.dispose(),this.rt.depthTexture.dispose());try{let a=new Kn(r,o);a.type=Li,this.rt=new ui(r,o,{minFilter:_e,magFilter:_e,depthTexture:a,depthBuffer:!0}),this.postMat.uniforms.tColor.value=this.rt.texture,this.postMat.uniforms.tDepth.value=a,this.postMat.uniforms.res.value.set(r,o),this.postMat.uniforms.dotSize.value=Math.max(2.5,o/140)}catch(a){console.warn("post disabled",a),this.postOK=!1}}render(t,e,i){let n=i||this.camera,r=this.settings.comicFX&&this.postOK,o=this.gl;r?(o.setRenderTarget(this.rt),o.clear(),o.render(t,this.camera),e&&(o.autoClear=!1,o.clearDepth(),o.render(e,n),o.autoClear=!0),o.setRenderTarget(null),this.postMat.uniforms.near.value=this.camera.near,this.postMat.uniforms.far.value=this.camera.far,o.render(this.postScene,this.postCam)):(o.setRenderTarget(null),o.autoClear=!0,o.render(t,this.camera),e&&(o.autoClear=!1,o.clearDepth(),o.render(e,n),o.autoClear=!0))}adapt(t){if(this.settings.quality!=="auto"||(this.frameTimes.push(t),this.frameTimes.length>45&&this.frameTimes.shift(),this._accum+=t,this._accum<1.5))return;this._accum=0;let e=this.frameTimes.reduce((n,r)=>n+r,0)/this.frameTimes.length,i=this.scale;e>1/40?i-=.08:e<1/57&&(i+=.04),i=Math.min(this.maxScale,Math.max(this.minScale,i)),Math.abs(i-this.scale)>.01&&(this.scale=i,this.resize())}get info(){return this.gl.info.render}};var yn=[0,0,0,0],ne=class{constructor(){this.p=[],this.n=[],this.c=[],this.uv=[],this.t=[]}get count(){return this.p.length/3}tri(t,e,i,n,r,o,a,l,c){this.p.push(...t,...e,...i);for(let h=0;h<3;h++)this.n.push(n[0],n[1],n[2]),this.c.push(r.r,r.g,r.b),this.t.push(c[0],c[1],c[2],c[3]);this.uv.push(...o,...a,...l)}quad(t,e,i,n,r,o,a=1,l=1,c=yn){this.tri(t,e,i,r,o,[0,0],[a,0],[a,l],c),this.tri(t,i,n,r,o,[0,0],[a,l],[0,l],c)}box(t,e,i,n,r,o,a={}){let l=a.color||yh,c=a.colorTop||l,h=a.unit||3.5,d=a.side!=null?Or(a.side):yn,u=a.top!=null?Or(a.top):d,f=n-t,g=r-e,y=o-i,m=b=>a.side!=null?Math.max(1,Math.round(b/h)):1,p=a.side!=null?Math.max(1,Math.round(g/(a.unitV||h))):1,v=a.faces||63;v&1&&this.quad([n,e,o],[n,e,i],[n,r,i],[n,r,o],[1,0,0],ji(l,.92),m(y),p,d),v&2&&this.quad([t,e,i],[t,e,o],[t,r,o],[t,r,i],[-1,0,0],ji(l,.92),m(y),p,d),v&4&&this.quad([t,e,o],[n,e,o],[n,r,o],[t,r,o],[0,0,1],l,m(f),p,d),v&8&&this.quad([n,e,i],[t,e,i],[t,r,i],[n,r,i],[0,0,-1],l,m(f),p,d),v&16&&this.quad([t,r,o],[n,r,o],[n,r,i],[t,r,i],[0,1,0],c,a.top!=null?Math.max(1,f/6):1,a.top!=null?Math.max(1,y/6):1,u),v&32&&!a.noBottom&&this.quad([t,e,i],[n,e,i],[n,e,o],[t,e,o],[0,-1,0],ji(l,.6),1,1,yn)}cbox(t,e,i,n,r,o,a,l={}){this.box(t-n/2,e-r/2,i-o/2,t+n/2,e+r/2,i+o/2,{...l,color:a})}pyramid(t,e,i,n,r,o,a){let l=(t+n)/2,c=(i+o)/2,h=[l,r,c],d=[[[t,e,o],[n,e,o]],[[n,e,o],[n,e,i]],[[n,e,i],[t,e,i]],[[t,e,i],[t,e,o]]];for(let[u,f]of d){let g=new R().subVectors(new R(...f),new R(...u)).cross(new R(h[0]-u[0],h[1]-u[1],h[2]-u[2])).normalize();this.tri(u,f,h,[g.x,g.y,g.z],ji(a,.85+g.y*.15),[0,0],[1,0],[.5,1],yn)}}cyl(t,e,i,n,r,o,a=6,l=!0){for(let c=0;c<a;c++){let h=c/a*Math.PI*2,d=(c+1)/a*Math.PI*2,u=(h+d)/2,f=[t+Math.cos(h)*n,e,i+Math.sin(h)*n],g=[t+Math.cos(d)*n,e,i+Math.sin(d)*n],y=[f[0],e+r,f[2]],m=[g[0],e+r,g[2]],p=[Math.cos(u),0,Math.sin(u)];this.quad(g,f,y,m,p,ji(o,.85+.15*Math.cos(u)),1,1,yn),l&&this.tri([t,e+r,i],m,y,[0,1,0],o,[0,0],[0,0],[0,0],yn)}}ground(t,e,i,n,r,o,a,l=6){this.quad([t,r,n],[i,r,n],[i,r,e],[t,r,e],[0,1,0],a||yh,(i-t)/l,(n-e)/l,o!=null?Or(o):yn)}build(){let t=new Ie;return t.setAttribute("position",new Wt(this.p,3)),t.setAttribute("normal",new Wt(this.n,3)),t.setAttribute("color",new Wt(this.c,3)),t.setAttribute("uv",new Wt(this.uv,2)),t.setAttribute("tile",new Wt(this.t,4)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},yh=new _t(1,1,1),Ig=new _t;function ji(s,t){return{r:Math.min(1,s.r*t),g:Math.min(1,s.g*t),b:Math.min(1,s.b*t)}}var X=s=>new _t(s);function _l(s,t){let e=new Ht(s.build(),t);return e.matrixAutoUpdate=!0,e}function is(s,t={}){let e=X(s.primary||"#2a9d9a"),i=X(s.secondary||"#e4573d"),n=X(s.accent||"#f2c14e"),r=X(s.eyes||"#ffffff"),o=X("#151018"),a=X(s.skin||"#d9a27a"),l=X(s.hair||"#3a2a20"),c=s.style||"hero",h=t.scale||1,d=Se({atlas:!1}),u=new je;u.name="char";let f={},g=!t.simple,y=new ne;if(c==="hero")y.cbox(0,1.22,0,.5,.5,.28,e),y.cbox(0,.97,0,.42,.2,.25,i),y.cbox(0,.86,0,.44,.08,.27,n),y.cbox(.24,1.22,0,.06,.44,.29,i),y.cbox(-.24,1.22,0,.06,.44,.29,i),y.cbox(0,1.3,.145,.22,.05,.02,n),y.cbox(0,1.22,.145,.05,.16,.02,n),y.cbox(0,1.13,.145,.12,.05,.02,n),y.cbox(0,1.62,0,.3,.32,.3,e),y.cbox(0,1.79,0,.26,.04,.26,i),y.cbox(.075,1.64,.152,.1,.07,.02,o),y.cbox(-.075,1.64,.152,.1,.07,.02,o),y.cbox(.075,1.64,.158,.075,.045,.02,r),y.cbox(-.075,1.64,.158,.075,.045,.02,r),y.cbox(0,1.44,0,.14,.08,.14,e);else if(c==="pod")y.cbox(0,1.1,0,.5,.7,.28,e),y.cbox(0,1.24,.145,.16,.08,.02,n),y.cbox(0,1.62,0,.28,.32,.28,a),y.cbox(0,1.77,0,.29,.06,.29,l),xh(y,o);else if(c==="jester")y.cbox(0,1.18,0,.52,.6,.3,e),y.cbox(0,1.18,.155,.12,.5,.02,n),y.cbox(0,.86,0,.46,.1,.28,n),y.cbox(0,1.6,0,.3,.32,.3,r),y.cbox(.07,1.62,.152,.07,.1,.02,e),y.cbox(-.07,1.62,.152,.07,.1,.02,e),y.cbox(0,1.5,.152,.16,.03,.02,o),y.cbox(0,1.8,0,.34,.1,.32,e),y.cbox(.22,1.9,0,.12,.2,.12,i),y.cbox(-.22,1.9,0,.12,.2,.12,e),y.cbox(.3,2.02,0,.08,.08,.08,n),y.cbox(-.3,2.02,0,.08,.08,.08,n);else{if(y.cbox(0,1.15,0,.5,.62,.28,e),s.stripes)for(let T=0;T<3;T++)y.cbox(0,1+T*.18,0,.51,.06,.29,i);s.badge&&y.cbox(.12,1.3,.145,.07,.07,.02,n),y.cbox(0,.86,0,.46,.1,.27,s.belt?X(s.belt):o),y.cbox(0,1.6,0,.28,.3,.28,a),s.hat==="beanie"?y.cbox(0,1.78,0,.3,.12,.3,i):s.hat==="cap"?(y.cbox(0,1.77,0,.3,.08,.3,e),y.cbox(0,1.74,.17,.26,.03,.1,o)):s.hat==="fedora"?(y.cbox(0,1.76,0,.42,.03,.42,l),y.cbox(0,1.82,0,.28,.1,.28,l)):y.cbox(0,1.76,-.02,.29,.06,.3,l),s.mask&&y.cbox(0,1.58,.13,.29,.1,.05,o),xh(y,o)}let m=_l(y,d);u.add(m),f.torso=m;let p=e,v=c==="hero"?i:c==="jester"?n:a,b=c==="hero"?e:X(s.pants||s.primary||"#333"),x=c==="hero"?i:c==="jester"?n:o;for(let T of[-1,1]){let E=new ne;E.cbox(0,-.2,0,.14,.42,.14,c==="hero"?p:s.sleeves?X(s.sleeves):e),E.cbox(0,-.5,0,.12,.26,.12,c==="hero"?p:a),E.cbox(0,-.66,.01,.13,.1,.14,v),c==="hero"&&E.cbox(0,-.47,0,.14,.12,.15,v);let A=_l(E,d);A.position.set(T*.33,1.42,0),u.add(A),f[T<0?"armL":"armR"]=A;let C=new ne;C.cbox(0,-.22,0,.18,.46,.18,b),C.cbox(0,-.6,0,.16,.34,.16,b),C.cbox(0,-.78,.04,.17,.1,.24,x),c==="hero"&&C.cbox(0,-.62,0,.17,.26,.17,x);let S=_l(C,d);S.position.set(T*.12,.84,0),u.add(S),f[T<0?"legL":"legR"]=S}return u.scale.setScalar(h),{root:u,parts:f,mat:d,anim:{t:0,pose:"idle",blend:0}}}function xh(s,t){s.cbox(.07,1.63,.142,.05,.05,.02,t),s.cbox(-.07,1.63,.142,.05,.05,.02,t)}function ns(s,t,e,i,n){let r=s.anim,o=s.parts;r.t+=i*(t==="run"?1.6+e*.12:t==="walk"?1.2+e*.4:t==="climb"?1+e*.5:1);let a=n??r.t*5.5,l=Math.sin(a),c=Math.cos(a),h=0,d=0,u=0,f=0,g=0,y=0,m=0,p=0,v=0;switch(t){case"walk":h=l*.5,d=-l*.5,u=-l*.55,f=l*.55,p=Math.abs(c)*.04;break;case"run":h=l*1.1,d=-l*1.1,u=-l*.95,f=l*.95,m=.25,p=Math.abs(c)*.08;break;case"crouch":u=-.9,f=-.9,h=.4,d=.4,p=-.35,m=.35;break;case"slide":u=-1.4,f=-.2,h=-.6,d=.8,m=-.5,p=-.55;break;case"air":h=-.6,d=-.4,g=-.7,y=.7,u=-.6,f=.3;break;case"swing":d=-2.9,y=.1,h=.3,g=-.6,u=-.9+l*.2,f=.2,m=.15;break;case"zip":d=-2.6,h=-2.6,u=-.4,f=-.2,m=.4;break;case"climb":h=-2.4+l*.6,d=-2.4-l*.6,u=-.6-l*.4,f=-.6+l*.4,m=.2;break;case"hang":h=-2.9,d=-2.9,u=.1,f=-.1;break;case"wallrunL":h=-1.2,d=l*.8,u=-l*.9,f=l*.9,v=.45;break;case"wallrunR":d=-1.2,h=l*.8,u=-l*.9,f=l*.9,v=-.45;break;case"punch":d=-1.57,h=.3,m=.2,u=.3,f=-.3;break;case"kick":f=-1.5,h=.6,d=-.6,m=-.2;break;case"stunned":h=.2+l*.2,d=.2-l*.2,g=-.4,y=.4,m=-.15+l*.05;break;case"down":m=-1.5,p=-.75,g=-1.2,y=1.2;break;case"webbed":g=-.05,y=.05,u=0,f=0;break;case"ride":u=-.3,f=.2,h=.2,d=.1,g=-.3,y=.3,m=.15;break;case"bike":u=-1+l*.6,f=-1-l*.6,h=-1,d=-1,m=.45,p=-.1;break;case"cheer":h=-2.8+l*.2,d=-2.8-l*.2,p=Math.abs(l)*.1;break;case"aim":d=-1.57,h=-1.3,g=.3;break;case"cower":h=-2.2,d=-2.2,g=.5,y=-.5,u=-.8,f=-.8,p=-.3,m=.4;break;case"glide":h=-1.4,d=-1.4,g=-.8,y=.8,u=.2,f=-.2,m=.3;break;default:h=l*.04,d=-l*.04,p=l*.01}let b=1-Math.exp(-14*i),x=(E,A,C)=>{E.rotation.x+=(A-E.rotation.x)*b,E.rotation.z+=((C||0)-E.rotation.z)*b};x(o.armL,h,g),x(o.armR,d,y),x(o.legL,u),x(o.legR,f),o.torso.rotation.x+=(m*.5-o.torso.rotation.x)*b,o.torso.rotation.z+=(v*.4-o.torso.rotation.z)*b;let T=p;o.torso.position.y+=(T-o.torso.position.y)*b,o.armL.position.y=1.42+o.torso.position.y,o.armR.position.y=1.42+o.torso.position.y,t==="down"?s.root.rotation.x+=(-1.45-s.root.rotation.x)*b:s.root.rotation.x+=(0-s.root.rotation.x)*b,s.root.rotation.z+=(v-s.root.rotation.z)*b}function vh(s){let t=X(s.primary||"#2a9d9a"),e=X(s.secondary||"#e4573d"),i=X(s.accent||"#f2c14e"),n=Se({atlas:!1}),r=new je,o={};for(let a of[-1,1]){let l=new ne;l.cbox(0,0,.18,.09,.09,.38,t),l.cbox(0,0,-.04,.11,.11,.14,e),l.cbox(0,.06,-.02,.05,.03,.1,i),l.cbox(0,-.01,-.13,.1,.08,.09,e),l.cbox(0,.03,-.17,.035,.035,.035,i);let c=new Ht(l.build(),n);c.position.set(a*.2,-.22,-.32),c.rotation.set(.12,a*-.06,0),r.add(c),o[a<0?"L":"R"]=c}return r.traverse(a=>{a.isMesh&&(a.renderOrder=10,a.frustumCulled=!1)}),{group:r,hands:o,mat:n,base:{L:o.L.position.clone(),R:o.R.position.clone()}}}function _h(s){let t=new ne,e=X("#1a1418");if(s==="skateboard"){t.cbox(0,.12,0,.26,.04,.85,X("#d4472f")),t.cbox(0,.145,0,.2,.01,.6,X("#f2c14e"));for(let n of[-.28,.28])for(let r of[-.1,.1])t.cbox(r,.05,n,.06,.08,.08,X("#f2ead0"))}else if(s==="skates")for(let n of[-.12,.12])t.cbox(n,.12,.02,.13,.16,.28,X("#f2ead0")),t.cbox(n,.03,.02,.06,.06,.26,X("#e4573d"));else if(s==="bicycle"){let n=X("#2a6fd4");for(let r of[-.55,.55])t.cyl(0,0,r,.33,.06,e,8);t.p.length=0,t.n.length=0,t.c.length=0,t.uv.length=0,t.t.length=0;for(let r of[-.55,.55])t.cbox(0,.33,r,.05,.66,.12,e),t.cbox(0,.33,r,.05,.12,.66,e),t.cbox(0,.33,r,.06,.1,.1,X("#ccc"));t.cbox(0,.62,0,.05,.06,1,n),t.cbox(0,.48,-.15,.05,.36,.06,n),t.cbox(0,.68,-.18,.14,.05,.22,e),t.cbox(0,.9,.45,.5,.04,.04,e),t.cbox(0,.76,.45,.05,.3,.05,n)}return new Ht(t.build(),Se({atlas:!1}))}var Te={car(s,t,e,i,n){let r=new ne,o=X("#16120f"),a=X(n);r.cbox(0,.55,0,1.8,.6,4,a),r.cbox(0,1.05,-.2,1.6,.5,2,a),r.cbox(0,1.06,-.2,1.62,.36,1.7,X("#7fb3b8"));for(let l of[-1.3,1.3])for(let c of[-.85,.85])r.cbox(c,.3,l,.3,.6,.6,o);r.cbox(0,.62,2.01,1.4,.15,.02,X("#fff2b0")),bl(s,r,t,0,e,i)},waterTower(s,t,e,i){let n=X("#8a5a3a"),r=X("#3b2a20");for(let o of[-.9,.9])for(let a of[-.9,.9])s.cbox(t+o,e+1.5,i+a,.2,3,.2,r);s.cyl(t,e+3,i,1.6,3,n,8),s.box(t-1.65,e+6,i-1.65,t+1.65,e+6.1,i+1.65,{color:r}),s.pyramid(t-1.7,e+6.1,i-1.7,t+1.7,e+7.4,i+1.7,r)},acUnit(s,t,e,i){s.cbox(t,e+.6,i,1.6,1.2,1.2,X("#a7a59a")),s.cbox(t,e+1.25,i,1,.1,.8,X("#555"))},antenna(s,t,e,i,n){s.cbox(t,e+n/2,i,.15,n,.15,X("#2b2b2b")),s.cbox(t,e+n*.7,i,1.2,.08,.08,X("#2b2b2b")),s.cbox(t,e+n+.1,i,.3,.3,.3,X("#e4573d"))},billboard(s,t,e,i,n,r,o){let a=new ne;a.cbox(-2,1.5,0,.2,3,.2,X("#333")),a.cbox(2,1.5,0,.2,3,.2,X("#333")),a.cbox(0,4.2,0,7,3,.25,X(r)),a.cbox(0,4.2,.14,4.5,1.2,.02,X(o)),a.cbox(-2.4,4.2,.14,1.2,1.2,.02,X("#1d1712")),bl(s,a,t,e,i,n)},lamp(s,t,e){s.cbox(t,2.5,e,.15,5,.15,X("#2a2a30")),s.cbox(t,5,e,.5,.25,.5,X("#fff0b0"))},tree(s,t,e,i=1){s.cbox(t,1.2*i,e,.35*i,2.4*i,.35*i,X("#6b4a2e")),s.cbox(t,3.2*i,e,2.4*i,2*i,2.4*i,X("#5f8f3c")),s.cbox(t,4.4*i,e,1.5*i,1*i,1.5*i,X("#76a64a"))},crate(s,t,e,i,n=1.2){s.box(t-n/2,e,i-n/2,t+n/2,e+n,i+n/2,{side:gt.wood,top:gt.wood,unit:n,color:X("#ffffff")})},barrel(s,t,e,i){s.cyl(t,e,i,.4,1,X("#c0462e"),6)},bench(s,t,e,i){let n=new ne;n.cbox(0,.45,0,1.8,.08,.5,X("#9a6a3c")),n.cbox(0,.75,-.22,1.8,.4,.06,X("#9a6a3c")),n.cbox(-.8,.22,0,.08,.45,.45,X("#333")),n.cbox(.8,.22,0,.08,.45,.45,X("#333")),bl(s,n,t,0,e,i)},hydrant(s,t,e){s.cyl(t,0,e,.2,.7,X("#d03a2a"),6)}};function bl(s,t,e,i,n,r){let o=Math.cos(r),a=Math.sin(r);for(let l=0;l<t.p.length;l+=3){let c=t.p[l],h=t.p[l+1],d=t.p[l+2];s.p.push(c*o+d*a+e,h+i,-c*a+d*o+n);let u=t.n[l],f=t.n[l+1],g=t.n[l+2];s.n.push(u*o+g*a,f,-u*a+g*o)}s.c.push(...t.c),s.uv.push(...t.uv),s.t.push(...t.t)}var Br=160,Hr=class{constructor(t){let e=new ne;e.cbox(0,0,0,.18,.18,.18,X("#ffffff")),this.mesh=new Ji(e.build(),Se({atlas:!1,emissive:1}),Br),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(Kc),this.p=[];for(let r=0;r<Br;r++)this.p.push({pos:new R,vel:new R,life:0,max:1,s:1}),this.mesh.setColorAt(r,new _t(1,1,1));this.next=0,this._m=new ie,this._q=new qe,this._s=new R,this._c=new _t,t.add(this.mesh);let i=new Tr(.85,1,24);i.rotateX(-Math.PI/2),this.ringMat=new Ye({color:16726843,transparent:!0,opacity:.7,depthWrite:!1}),this.rings=[];for(let r=0;r<8;r++){let o=new Ht(i,this.ringMat);o.visible=!1,t.add(o),this.rings.push({m:o,t:0,dur:1})}let n=new wr(.5,.5,60,6,1,!0);n.translate(0,30,0),this.beacon=new Ht(n,new Ye({color:16769126,transparent:!0,opacity:.35,depthWrite:!1,side:Ke})),this.beacon.visible=!1,this.beacon.frustumCulled=!1,t.add(this.beacon),this.collect=[]}burst(t,e,i=10,n=6){this._c.set(e);for(let r=0;r<i;r++){let o=this.next;this.next=(this.next+1)%Br;let a=this.p[o];a.pos.copy(t),a.vel.set((Math.random()-.5)*n,Math.random()*n,(Math.random()-.5)*n),a.life=a.max=.4+Math.random()*.5,a.s=.6+Math.random()*.9,this.mesh.setColorAt(o,this._c)}this.mesh.instanceColor.needsUpdate=!0}marker(t,e,i){let n=this.rings.find(r=>!r.m.visible)||this.rings[0];n.m.position.set(t.x,t.y+.05,t.z),n.m.scale.setScalar(i),n.m.visible=!0,n.t=0,n.dur=e}setBeacon(t){if(!t){this.beacon.visible=!1;return}this.beacon.visible=!0,this.beacon.position.copy(t)}update(t){for(let e=0;e<Br;e++){let i=this.p[e];if(i.life>0){i.life-=t,i.vel.y-=14*t,i.pos.addScaledVector(i.vel,t);let n=Math.max(.001,i.life/i.max)*i.s;this._s.set(n,n,n)}else this._s.set(1e-4,1e-4,1e-4);this._m.compose(i.pos,this._q,this._s),this.mesh.setMatrixAt(e,this._m)}this.mesh.instanceMatrix.needsUpdate=!0;for(let e of this.rings)if(e.m.visible){e.t+=t;let i=e.t/e.dur;e.m.material.opacity=.35+.4*Math.abs(Math.sin(e.t*12)),i>=1&&(e.m.visible=!1)}this.beacon.visible&&(this.beacon.rotation.y+=t)}};var Vr=(s,t)=>s+4096<<13|t+4096,Gr=class{constructor(){this.boxes=[],this.grid=new Map,this.stamp=0,this.floorFn=()=>0}clear(){this.boxes.length=0,this.grid.clear()}add(t,e,i,n,r,o,a={}){let l={min:[t,e,i],max:[n,r,o],_s:0,climb:a.climb!==!1,...a};l.id=this.boxes.length,this.boxes.push(l);let c=Math.floor(t/8),h=Math.floor(n/8),d=Math.floor(i/8),u=Math.floor(o/8);for(let f=c;f<=h;f++)for(let g=d;g<=u;g++){let y=Vr(f,g),m=this.grid.get(y);m||(m=[],this.grid.set(y,m)),m.push(l)}return l}remove(t){t.dead=!0;let e=Math.floor(t.min[0]/8),i=Math.floor(t.max[0]/8),n=Math.floor(t.min[2]/8),r=Math.floor(t.max[2]/8);for(let o=e;o<=i;o++)for(let a=n;a<=r;a++){let l=this.grid.get(Vr(o,a));if(l){let c=l.indexOf(t);c>=0&&l.splice(c,1)}}}query(t,e,i,n,r,o,a=[]){a.length=0;let l=++this.stamp,c=Math.floor(t/8),h=Math.floor(n/8),d=Math.floor(i/8),u=Math.floor(o/8);for(let f=c;f<=h;f++)for(let g=d;g<=u;g++){let y=this.grid.get(Vr(f,g));if(y)for(let m of y)m._s!==l&&(m._s=l,m.max[0]>t&&m.min[0]<n&&m.max[1]>e&&m.min[1]<r&&m.max[2]>i&&m.min[2]<o&&a.push(m))}return a}raycast(t,e,i,n,r,o,a,l){let c=++this.stamp,h=null,d=a,u=Math.floor(t/8),f=Math.floor(i/8),g=n>0?1:-1,y=o>0?1:-1,m=Math.abs(n)<1e-9?1e9:8/Math.abs(n),p=Math.abs(o)<1e-9?1e9:8/Math.abs(o),v=Math.abs(n)<1e-9?1e9:(n>0?(u+1)*8-t:t-u*8)/Math.abs(n),b=Math.abs(o)<1e-9?1e9:(o>0?(f+1)*8-i:i-f*8)/Math.abs(o),x=0,T=0;for(;x<=d&&T++<256;){let E=this.grid.get(Vr(u,f));if(E)for(let A of E){if(A._s===c||(A._s=c,l&&!l(A)))continue;let C=q0(t,e,i,n,r,o,A,d);C&&C.t<d&&(d=C.t,h=C,h.box=A)}v<b?(x=v,v+=m,u+=g):(x=b,b+=p,f+=y)}if(r<-1e-6){let E=this.floorFn(t,i),A=(E-e)/r;A>=0&&A<d&&(h={t:A,point:[t+n*A,E,i+o*A],normal:[0,1,0],box:null,floor:!0})}return h&&!h.point&&(h.point=[t+n*h.t,e+r*h.t,i+o*h.t]),h}lineOfSight(t,e,i){let n=e.x-t.x,r=e.y-t.y,o=e.z-t.z,a=Math.hypot(n,r,o);return a<.01?!0:!this.raycast(t.x,t.y,t.z,n/a,r/a,o/a,a-.2,c=>!c.seeThrough&&c!==i)}};function q0(s,t,e,i,n,r,o,a){let l=0,c=a,h=-1,d=0,u=[s,t,e],f=[i,n,r];for(let y=0;y<3;y++){if(Math.abs(f[y])<1e-9){if(u[y]<o.min[y]||u[y]>o.max[y])return null;continue}let m=1/f[y],p=(o.min[y]-u[y])*m,v=(o.max[y]-u[y])*m,b=-1;if(p>v){let x=p;p=v,v=x,b=1}if(p>l&&(l=p,h=y,d=b),v<c&&(c=v),l>c)return null}if(h<0)return null;let g=[0,0,0];return g[h]=d,{t:l,normal:g}}var bh=[];function Wr(s,t,e,i,n,r,o={}){let a={ground:!1,wallX:0,wallZ:0,ceiling:!1,groundBox:null,stepped:!1,hitBox:null},l=o.stepH??.45,c=e.x*i,h=e.z*i,d=e.y*i;g(0,c),g(2,h),t.y+=d;let u=s.query(t.x-n,t.y,t.z-n,t.x+n,t.y+r,t.z+n,bh);for(let y of u)y.trigger||(d<=0&&t.y<y.max[1]&&t.y-d>=y.max[1]-.05-Math.max(0,-d)?(t.y=y.max[1],e.y=0,a.ground=!0,a.groundBox=y):d>0&&t.y+r>y.min[1]&&t.y+r-d<=y.min[1]+.05?(t.y=y.min[1]-r,e.y=0,a.ceiling=!0):t.y<y.max[1]&&y.max[1]-t.y<.6&&(t.y=y.max[1],e.y<0&&(e.y=0),a.ground=!0,a.groundBox=y));let f=s.floorFn(t.x,t.z);return t.y<=f&&(t.y=f,e.y<0&&(e.y=0),a.ground=!0),a;function g(y,m){if(m===0)return;let p=y===0?"x":"z";t[p]+=m;let v=s.query(t.x-n,t.y+.02,t.z-n,t.x+n,t.y+r,t.z+n,bh);for(let b of v)if(!b.trigger){if(o.grounded&&b.max[1]-t.y<=l&&b.max[1]-t.y>0&&!s.query(t.x-n,b.max[1]+.01,t.z-n,t.x+n,b.max[1]+r,t.z+n,[]).some(T=>!T.trigger)){t.y=b.max[1],a.stepped=!0;continue}m>0?t[p]=b.min[y]-n-.001:t[p]=b.max[y]+n+.001,e[p]=0,y===0?a.wallX=m>0?1:-1:a.wallZ=m>0?1:-1,a.hitBox=b}}}var Y0={deco:gt.deco,brick:gt.brick,glass:gt.glass,office:gt.office,brownstone:gt.brownstone,warehouse:gt.warehouse},Z0={deco:["#fff4dc","#f6e2c0","#efe0d0"],brick:["#ffffff","#f2d8c8","#e8c0a8"],glass:["#ffffff","#e0f0ee"],office:["#ffffff","#f0ead8","#e6e0cc"],brownstone:["#ffffff","#f0d8c8"],warehouse:["#ffffff","#e8d8c8","#d8e0d0"]};function*Mh(s,t){let e=si(s.seed||1),i=s.blockSize||44,n=s.street||14,r=s.blocks[0],o=s.blocks[1],a=i+n,l=r*a,c=o*a,h=-l/2,d=-c/2,u=t.data={def:s,bounds:{x0:h-8,z0:d-8,x1:h+l+8,z1:d+c+8},zipPoints:[],roofs:[],sidewalks:[],lanes:[],landmarks:{},crimeSpots:[],collectibleSpots:[],perches:[],blocks:[],spawn:new R(0,0,0),parks:[]},f=t.collision,g=-1.6;f.floorFn=(k,H)=>k<u.bounds.x0||k>u.bounds.x1||H<u.bounds.z0||H>u.bounds.z1?g:0;let y=new ne;y.ground(u.bounds.x0,u.bounds.z0,u.bounds.x1,u.bounds.z1,0,gt.road,X("#ffffff"),7);let m=900,p=X("#ffffff");y.ground(-m,-m,m,u.bounds.z0,g,gt.water,p,12),y.ground(-m,u.bounds.z1,m,m,g,gt.water,p,12),y.ground(-m,u.bounds.z0,u.bounds.x0,u.bounds.z1,g,gt.water,p,12),y.ground(u.bounds.x1,u.bounds.z0,m,u.bounds.z1,g,gt.water,p,12);let v=X("#9d8f78");y.box(u.bounds.x0-1,g,u.bounds.z0-1,u.bounds.x1+1,.01,u.bounds.z0,{color:v,faces:24}),y.box(u.bounds.x0-1,g,u.bounds.z1,u.bounds.x1+1,.01,u.bounds.z1+1,{color:v,faces:20}),y.box(u.bounds.x0-1,g,u.bounds.z0,u.bounds.x0,.01,u.bounds.z1,{color:v,faces:18}),y.box(u.bounds.x1,g,u.bounds.z0,u.bounds.x1+1,.01,u.bounds.z1,{color:v,faces:17}),t.addStatic(y.build(),"ground");let b=1.1;f.add(u.bounds.x0-1,0,u.bounds.z0-1,u.bounds.x1+1,b,u.bounds.z0-.4,{climb:!0,rail:!0}),f.add(u.bounds.x0-1,0,u.bounds.z1+.4,u.bounds.x1+1,b,u.bounds.z1+1,{climb:!0,rail:!0}),f.add(u.bounds.x0-1,0,u.bounds.z0,u.bounds.x0-.4,b,u.bounds.z1,{climb:!0,rail:!0}),f.add(u.bounds.x1+.4,0,u.bounds.z0,u.bounds.x1+1,b,u.bounds.z1,{climb:!0,rail:!0}),yield .1;for(let k=0;k<=r;k++){let H=h+k*a;u.lanes.push({axis:"z",c:H,a:d,b:d+c})}for(let k=0;k<=o;k++){let H=d+k*a;u.lanes.push({axis:"x",c:H,a:h,b:h+l})}let x=new Map;for(let k of s.landmarks||[])x.set(k.block[0]+","+k.block[1],k);let T=(r-1)/2,E=(o-1)/2,A=Math.hypot(T,E)||1,C=s.parks??.08,S=s.plazas??.05,_=0,I=r*o;for(let k=0;k<r;k++)for(let H=0;H<o;H++){let $=h+k*a+n/2,V=d+H*a+n/2,tt=$+i,G=V+i,st=new ne,ot={i:k,j:H,x0:$,z0:V,x1:tt,z1:G,kind:"buildings"};u.blocks.push(ot),st.box($,0,V,tt,.22,G,{color:X("#ffffff"),side:null,top:gt.sidewalk,faces:31}),f.add($,0,V,tt,.22,G,{curb:!0,climb:!1}),u.sidewalks.push({x0:$+1,z0:V+1,x1:tt-1,z1:G-1});let bt=x.get(k+","+H),Bt=Math.hypot(k-T,H-E)/A;bt?(ot.kind=bt.type,j0(bt,st,ot,e,f,u)):e.chance(C)?(ot.kind="park",Sh(st,ot,e,f,u)):e.chance(S)?(ot.kind="plaza",K0(st,ot,e,f,u)):J0(s,st,ot,Bt,e,f,u);for(let Qt=0;Qt<4;Qt++){let Y=(Qt+.5)/4;Te.lamp(st,$+.8,V+i*Y),Te.lamp(st,tt-.8,V+i*Y)}e.chance(.5)&&Te.hydrant(st,$+2,V+1.2),t.addStatic(st.build(),"block",ot),++_%3===0&&(yield .1+.75*(_/I))}s.bridge&&Q0(s.bridge,u,f,t),yield .9;let F=u.roofs.filter(k=>Math.hypot((k.x0+k.x1)/2,(k.z0+k.z1)/2)<90).sort((k,H)=>H.y-k.y)[0]||u.roofs[0];F&&u.spawn.set((F.x0+F.x1)/2,F.y+.1,(F.z0+F.z1)/2),u.roofs.sort((k,H)=>k.y-H.y),yield 1}function $0(s,t,e){let i=s.styles||[["brick",1]];return t.weighted(i)}function J0(s,t,e,i,n,r,o){let l=[];c({x0:e.x0+2.6,z0:e.z0+2.6,x1:e.x1-2.6,z1:e.z1-2.6},0);function c(d,u){let f=d.x1-d.x0,g=d.z1-d.z0;if(u>=3||f<22&&g<22||u>=1&&n.chance(.3)){l.push(d);return}let y=n.chance(.35)?n.range(2,4):0;if(f>=g){let m=d.x0+f*n.range(.38,.62);c({...d,x1:m-y/2},u+1),c({...d,x0:m+y/2},u+1)}else{let m=d.z0+g*n.range(.38,.62);c({...d,z1:m-y/2},u+1),c({...d,z0:m+y/2},u+1)}}let h=s.heights||{min:10,max:70};for(let d of l){let u=$0(s,n,i),f=Math.pow(1-i,h.centerBias??1.4),g=h.min+(h.max-h.min)*(.15+.85*f)*n.range(.45,1.05);u==="brownstone"&&(g=Math.min(g,n.range(10,18))),u==="warehouse"&&(g=Math.min(g,n.range(8,14))),g=Math.max(h.min*.8,Math.round(g/3.5)*3.5),ss(t,d,g,u,n,r,o)}}function ss(s,t,e,i,n,r,o,a={}){let l=Y0[i]??gt.brick,c=X(n.pick(Z0[i]||["#ffffff"])),{x0:h,z0:d,x1:u,z1:f}=t,g=0,y=a.tiers??(e>40&&(i==="deco"||i==="office")?n.int(2,3):e>25&&n.chance(.4)?2:1);for(let m=0;m<y;m++){let p=m===y-1?e-g:Math.round(e*(m===0?n.range(.5,.65):n.range(.2,.3))/3.5)*3.5,v=g+Math.max(3.5,p);s.box(h,g,d,u,v,f,{color:c,side:l,top:gt.roof,colorTop:X("#ffffff"),unit:3.5,noBottom:!0}),r.add(h,g,d,u,v,f,{building:!0,style:i});let b=ji(c,.75);s.box(h-.35,v-.5,d-.35,u+.35,v-.1,f+.35,{color:b,noBottom:!1});let x=.3,T=.9;if(!a.noParapet){let C=ji(c,.85);s.box(h,v,d,u,v+T,d+x,{color:C}),s.box(h,v,f-x,u,v+T,f,{color:C}),s.box(h,v,d+x,h+x,v+T,f-x,{color:C}),s.box(u-x,v,d+x,u,v+T,f-x,{color:C}),r.add(h,v,d,u,v+T,d+x,{parapet:!0}),r.add(h,v,f-x,u,v+T,f,{parapet:!0}),r.add(h,v,d+x,h+x,v+T,f-x,{parapet:!0}),r.add(u-x,v,d+x,u,v+T,f-x,{parapet:!0})}o.roofs.push({x0:h,z0:d,x1:u,z1:f,y:v,style:i});let E=v+1;if(o.zipPoints.push([h,E,d],[u,E,d],[h,E,f],[u,E,f],[(h+u)/2,E,d],[(h+u)/2,E,f],[h,E,(d+f)/2],[u,E,(d+f)/2]),m===y-1){let C=u-h,S=f-d;if(C>8&&S>8){if(n.chance(.35)){let _=n.range(h+3,u-3),I=n.range(d+3,f-3);Te.waterTower(s,_,v,I),r.add(_-1.7,v+3,I-1.7,_+1.7,v+6.2,I+1.7,{prop:!0})}if(n.chance(.6)){let _=n.range(h+2,u-2),I=n.range(d+2,f-2);Te.acUnit(s,_,v,I),r.add(_-.8,v,I-.6,_+.8,v+1.2,I+.6,{prop:!0})}if(n.chance(.3)&&Te.antenna(s,n.range(h+1,u-1),v,n.range(d+1,f-1),n.range(4,9)),n.chance(.12)&&e<40){let _=v,I=(h+u)/2,F=(d+f)/2;Te.billboard(s,I,_,F,n.pick([0,Math.PI/2]),n.pick(["#e4573d","#2a9d9a","#f2c14e"]),n.pick(["#fff4dc","#1d1712"]))}o.collectibleSpots.push([n.range(h+2,u-2),v+1.2,n.range(d+2,f-2)]),o.perches.push([h+.15,v+T,(d+f)/2])}if(i==="deco"&&e>50&&n.chance(.6)){let _=Math.min(u-h,f-d)*.3,I=(h+u)/2,F=(d+f)/2;s.box(I-_,v,F-_,I+_,v+4,F+_,{color:c,side:l,top:gt.roof}),r.add(I-_,v,F-_,I+_,v+4,F+_,{}),s.pyramid(I-_,v+4,F-_,I+_,v+4+_*2.5,F+_,X("#c9a23a"))}}if(m===0&&(i==="brick"||i==="brownstone"||i==="office")&&n.chance(.5)){let C=X(n.pick(["#e4573d","#2a9d9a","#f2c14e","#6b4fa0"]));s.box(h+1,3,d-1.4,u-1,3.3,d,{color:C}),r.add(h+1,3,d-1.4,u-1,3.3,d,{awning:!0}),o.crimeSpots.push([(h+u)/2,.25,d-2.2,"store",i])}let A=n.range(1.5,3.5);u-h>8+A*2&&f-d>8+A*2&&(h+=A,u-=A,d+=A,f-=A),g=v}}function Sh(s,t,e,i,n){let{x0:r,z0:o,x1:a,z1:l}=t;s.ground(r+2,o+2,a-2,l-2,.23,gt.grass,X("#ffffff"),6),n.parks.push(t);for(let c=0;c<10;c++){let h=e.range(r+5,a-5),d=e.range(o+5,l-5),u=e.range(.9,1.6);Te.tree(s,h,d,u),i.add(h-.2*u,0,d-.2*u,h+.2*u,2.4*u,d+.2*u,{}),i.add(h-1.2*u,2.2*u,d-1.2*u,h+1.2*u,4.2*u,d+1.2*u,{tree:!0,seeThrough:!0})}for(let c=0;c<4;c++)Te.bench(s,e.range(r+6,a-6),e.range(o+6,l-6),e.range(0,Math.PI));n.crimeSpots.push([(r+a)/2,.25,(o+l)/2,"park"]),n.collectibleSpots.push([(r+a)/2,1.2,(o+l)/2])}function K0(s,t,e,i,n){let{x0:r,z0:o,x1:a,z1:l}=t,c=(r+a)/2,h=(o+l)/2;s.cyl(c,.22,h,6,.8,X("#bfb39b"),10),s.cyl(c,.25,h,5.3,.65,X("#5fa3a8"),10),s.cbox(c,2.5,h,1.2,3.5,1.2,X("#bfb39b")),s.cbox(c,5.2,h,.8,2,.8,X("#c9a23a")),i.add(c-6,0,h-6,c+6,1,h+6,{}),i.add(c-.6,0,h-.6,c+.6,6.2,h+.6,{});for(let d=0;d<6;d++)Te.bench(s,c+Math.cos(d)*12,h+Math.sin(d)*12,d);n.crimeSpots.push([c+9,.25,h,"plaza"]),n.collectibleSpots.push([c,7.5,h])}function j0(s,t,e,i,n,r){let{x0:o,z0:a,x1:l,z1:c}=e,h=(o+l)/2,d=(a+c)/2,u=s.type,f={type:u,name:s.name||u,pos:new R(h,0,d),block:e};if(r.landmarks[s.id||u]=f,u==="clocktower"){ss(t,{x0:o+4,z0:a+4,x1:l-4,z1:c-4},21,"deco",i,n,r,{tiers:1});let g=7,y=21,m=y+(s.height||78);t.box(h-g,y,d-g,h+g,m,d+g,{color:X("#efe0c0"),side:gt.deco,top:gt.roof}),n.add(h-g,y,d-g,h+g,m,d+g,{building:!0});let p=X("#fff2b0");for(let[v,b,x,T]of[[0,g+.05,8,.1],[0,-g-.05,8,.1],[g+.05,0,.1,8],[-g-.05,0,.1,8]])t.cbox(h+v,m-7,d+b,x,8,T,p),t.cbox(h+v*1.01,m-7,d+b*1.01,Math.max(x*.08,.12),3.2,Math.max(T*.08,.12),X("#1d1712"));t.box(h-g-.6,m,d-g-.6,h+g+.6,m+1.2,d+g+.6,{color:X("#c9a23a")}),n.add(h-g-.6,m,d-g-.6,h+g+.6,m+1.2,d+g+.6,{}),t.pyramid(h-g,m+1.2,d-g,h+g,m+22,d+g,X("#3f7f7a")),f.top=new R(h,m+1.3,d),r.roofs.push({x0:h-g,z0:d-g,x1:h+g,z1:d+g,y:m+1.2,style:"deco"})}else if(u==="bank"||u==="pawnshop"||u==="gallery"||u==="museum"){let g=u==="bank"?28:u==="museum"?18:14,y=u==="bank"||u==="museum"?"deco":"brick";ss(t,{x0:o+4,z0:a+6,x1:l-4,z1:c-4},g,y,i,n,r,{tiers:1});for(let m=0;m<6;m++){let p=o+7+m*((l-o-14)/5);t.cbox(p,4,a+4.6,1,8,1,X("#efe6d0")),n.add(p-.5,0,a+4.1,p+.5,8,a+5.1,{})}t.cbox(h,9,a+4.4,l-o-10,2,.8,X(u==="bank"?"#c9a23a":"#e4573d")),f.door=new R(h,.25,a+2.5),r.crimeSpots.push([h,.25,a+1.8,u])}else if(u==="rooftopGarden"){ss(t,{x0:o+4,z0:a+4,x1:l-4,z1:c-4},s.height||24,"brownstone",i,n,r,{tiers:1});let g=s.height||24;t.ground(o+6,a+6,l-6,c-6,g+.05,gt.grass,X("#ffffff"),4);for(let y=0;y<6;y++){let m=i.range(o+8,l-8),p=i.range(a+8,c-8);Te.tree(t,m,p,.6)}t.box(h-2,g,d-2,h+2,g+2.4,d+2,{color:X("#ffffff"),side:gt.wood,top:gt.wood,unit:1.2}),n.add(h-2,g,d-2,h+2,g+2.4,d+2,{}),f.top=new R(h+4,g+.1,d)}else if(u==="warehouseYard"||u==="docks"){for(let m=0;m<3;m++){let p=o+3+m*((l-o-6)/3);ss(t,{x0:p+1,z0:a+4,x1:p+(l-o-6)/3-1,z1:a+22},i.range(8,12),"warehouse",i,n,r,{tiers:1})}for(let m=0;m<10;m++){let p=i.range(o+4,l-6),v=i.range(a+26,c-4),b=i.int(1,3),x=X(i.pick(["#c0462e","#2a6f8a","#c9a23a","#4f7a3a"]));t.box(p,.22,v,p+6,.22+2.6*b,v+2.5,{color:x}),n.add(p,0,v,p+6,.22+2.6*b,v+2.5,{container:!0})}for(let m=0;m<8;m++)Te.crate(t,i.range(o+4,l-4),.22,i.range(a+24,c-4));let g=l-8,y=c-8;t.box(g-1,0,y-1,g+1,30,y+1,{color:X("#e0a02a")}),n.add(g-1,0,y-1,g+1,30,y+1,{}),t.box(g-22,30,y-.8,g+8,31.6,y+.8,{color:X("#e0a02a")}),n.add(g-22,30,y-.8,g+8,31.6,y+.8,{}),f.door=new R(h,.25,a+26),r.crimeSpots.push([h,.25,a+28,"docks"])}else u==="tower"?(ss(t,{x0:o+6,z0:a+6,x1:l-6,z1:c-6},s.height||110,"glass",i,n,r,{tiers:3}),f.top=new R(h,(s.height||110)+.2,d)):u==="park"&&Sh(t,e,i,n,r)}function Q0(s,t,e,i){let n=new ne,r=t.bounds.z1,o=s.length||260,a=14,l=s.x||0,c=12,h=X("#a9473a");n.box(l-a/2,c-1.2,r,l+a/2,c,r+o,{color:X("#7b6f62"),top:gt.road,unit:7}),e.add(l-a/2,c-1.2,r,l+a/2,c,r+o,{building:!0});for(let f=0;f<12;f++){let g=c*(1-(f+1)/13),y=r-(f+1)*3;n.box(l-a/2,0,y,l+a/2,g,y+3,{color:X("#7b6f62"),top:gt.road,unit:7}),e.add(l-a/2,0,y,l+a/2,g,y+3,{})}for(let f of[r+o*.25,r+o*.75]){for(let g of[-1,1])n.box(l+g*(a/2+1)-1.2,-8,f-1.2,l+g*(a/2+1)+1.2,60,f+1.2,{color:h}),e.add(l+g*(a/2+1)-1.2,-8,f-1.2,l+g*(a/2+1)+1.2,60,f+1.2,{building:!0});n.box(l-a/2-2.2,56,f-1.2,l+a/2+2.2,59,f+1.2,{color:h}),e.add(l-a/2-2.2,56,f-1.2,l+a/2+2.2,59,f+1.2,{}),n.box(l-a/2-2.2,30,f-1,l+a/2+2.2,32,f+1,{color:h}),e.add(l-a/2-2.2,30,f-1,l+a/2+2.2,32,f+1,{}),t.zipPoints.push([l,60,f],[l,33,f])}for(let f of[-1,1])for(let g=0;g<24;g++){let y=r+g/24*o,m=c+6+40*Math.pow(Math.abs((y-r)/o*2-1),2)*.8;n.cbox(l+f*(a/2+1),m,y,.3,.3,o/24+.3,X("#2b2b2b")),n.cbox(l+f*(a/2+1),(m+c)/2,y,.1,m-c,.1,X("#2b2b2b"))}e.add(l-a/2-.3,c,r,l-a/2,c+1.1,r+o,{rail:!0}),e.add(l+a/2,c,r,l+a/2+.3,c+1.1,r+o,{rail:!0}),n.box(l-a/2-.3,c,r,l-a/2,c+1.1,r+o,{color:h}),n.box(l+a/2,c,r,l+a/2+.3,c+1.1,r+o,{color:h});let d=r+o;n.box(l-60,-2,d,l+60,c,d+40,{color:X("#8a7d68"),top:gt.grass,unit:6}),e.add(l-60,-2,d,l+60,c,d+40,{});let u=e.floorFn;e.floorFn=(f,g)=>(f>l-a/2&&f<l+a/2&&g>r-40&&g<d,u(f,g)),t.landmarks.bridge={type:"bridge",name:s.name||"Bay Bridge",pos:new R(l,c,r+o/2),top:new R(l,59.2,r+o*.25)},t.roofs.push({x0:l-a/2,z0:r,x1:l+a/2,z1:r+o,y:c,style:"bridge"}),i.addStatic(n.build(),"bridge")}function*wh(s,t){let e=si(s.seed||9),i=t.collision,n=new ne,r=t.data={def:s,segments:[],triggers:[],fireNodes:[],zipPoints:[],roofs:[],landmarks:{},sidewalks:[],lanes:[],crimeSpots:[],collectibleSpots:[],perches:[],blocks:[],parks:[],spawn:new R(0,.1,3),bounds:{x0:-60,z0:-20,x1:60,z1:400},interior:!0};i.floorFn=()=>-30;let o=4.2,a=5.5,l=0,c=0,h=X("#ffffff"),d=X("#b8beb6"),u=(v,b,x,T,E,A,C={})=>{n.box(v,b,x,T,E,A,{color:h,side:gt.labwall,top:gt.grate,unit:2.8}),i.add(v,b,x,T,E,A,C)},f=(v,b,x,T,E,A={})=>{n.box(v,E-1,b,x,E,T,{color:h,side:gt.labwall,top:gt.labfloor,unit:3}),i.add(v,E-1,b,x,E,T,A)},g=(v,b,x,T,E)=>{n.box(v,E,b,x,E+.6,T,{color:d,side:gt.grate,top:gt.grate,unit:3}),i.add(v,E,b,x,E+.6,T,{})},y=(v,b,x,T,E,A={})=>r.triggers.push({name:v,min:[-o-2,T,b],max:[o+2,E,x],...A}),m=(v,b,x,T=2.4)=>{for(let E=v;E<b;E+=T)r.fireNodes.push({x:-o+.8+e.range(0,1),y:x,z:E}),r.fireNodes.push({x:o-.8-e.range(0,1),y:x,z:E+1.2})},p=(v,b)=>{n.cbox(0,b-.15,v,2.4,.15,.4,X("#fff3c0"))};for(let v of s.segments){let b=v.len||12,x=l,T=l+b,E={...v,z0:x,z1:T,y:c};r.segments.push(E);let A=v.wide?o*1.8:o;switch(v.type){case"pod_room":{A=o*1.8,f(-A,x,A,T,c),g(-A,x,A,T,c+a+1),u(-A-.6,c,x-.6,A+.6,c+a+1,x),u(-A-.6,c,x,-A,c+a+1,T),u(A,c,x,A+.6,c+a+1,T),u(-A,c,T-.4,-o,c+a+1,T),u(o,c,T-.4,A,c+a+1,T);for(let C=0;C<4;C++)for(let S of[-1,1]){let _=S*(A-1.6),I=x+2.5+C*3;n.cyl(_,c,I,.9,.4,X("#555a5e"),8),n.cyl(_,c+2.6,I,.9,.4,X("#555a5e"),8),n.cyl(_,c+.4,I,.75,2.2,X(C===1&&S===-1?"#9fe0d8":"#6e8f8c"),8,!1),i.add(_-.9,c,I-.9,_+.9,c+3,I+.9,{prop:!0})}r.spawn.set(-(A-3),c+.05,x+5.5),n.cbox(0,c+.5,x+3,3,1,1,X("#3d4a52")),i.add(-1.5,c,x+2.5,1.5,c+1,x+3.5,{}),n.cbox(0,c+1.3,x+2.7,2.6,.6,.1,X("#7cf0c8")),r.landmarks.console={pos:new R(0,c,x+4.2)},r.landmarks.okafor={pos:new R(1.8,c,x+8)},y("seg:"+v.id,x,T,c-2,c+a,{seg:E});break}case"corridor":case"pipes_crouch":case"debris_vault":case"slide_door":case"exit_hall":{f(-o,x,o,T,c),g(-o,x,o,T,c+a),u(-o-.6,c,x,-o,c+a,T),u(o,c,x,o+.6,c+a,T);for(let C=x+2;C<T;C+=6)p(C,c+a);if(v.type==="pipes_crouch"){let C=x+b/2;n.box(-o,c+1.15,C-2.5,o,c+a,C+2.5,{color:X("#ffffff"),side:gt.grate,top:gt.grate,unit:1});for(let S=0;S<4;S++)n.cyl(-o,c+1.3+S*.25,C-2+S,.1,.1,X("#b5532e"),4);i.add(-o,c+1.15,C-2.5,o,c+a,C+2.5,{})}if(v.type==="debris_vault")for(let[C,S]of[[b*.35,1.1],[b*.7,1.25]]){let _=x+C;n.box(-o,c,_-.6,o,c+S,_+.6,{color:X("#ffffff"),side:gt.grate,top:gt.grate,unit:1.2}),i.add(-o,c,_-.6,o,c+S,_+.6,{vault:!0}),Te.crate(n,e.range(-2,2),c+S,_-.2,.6)}if(v.type==="slide_door"){let C=x+b*.55;E.shutter={z:C,x0:-o,x1:o,y:c,h:a},u(-o,c+a-.5,C-.3,o,c+a,C+.3)}y("seg:"+v.id,x,T,c-2,c+a,{seg:E});break}case"climb_shaft":{let C=v.height||8;f(-A,x,A,T,c),g(-A,x,A,T,c+C+a),u(-A-.6,c,x,-A,c+C+a,T),u(A,c,x,A+.6,c+C+a,T);let S=T-4;n.box(-A,c,S,A,c+C,T,{color:X("#ffffff"),side:gt.labwall,top:gt.labfloor,unit:2.8}),i.add(-A,c,S,A,c+C,T,{climb:!0,climbWall:!0});for(let _=0;_<6;_++)n.cbox(0,c+1+_*(C/6),S-.12,2.4,.12,.12,X("#c9a23a"));Te.crate(n,-2.5,c,x+3),Te.crate(n,2.2,c,x+5,1.6),i.add(-3.1,c,x+2.4,-1.9,c+1.2,x+3.6,{}),i.add(1.4,c,x+4.2,3,c+1.6,x+5.8,{}),y("seg:"+v.id,x,T,c-2,c+C+2,{seg:E}),r.fireNodes.push({x:-A+1,y:c,z:x+1}),c+=C;break}case"gap_wallrun":{f(-o,x,o,x+3,c),f(-o,T-3,o,T,c),f(-o-4,x,o+4,T,c-14,{pit:!0}),g(-o,x,o,T,c+a+1),u(-o-.6,c-14,x,-o,c+a+1,T,{runWall:!0}),u(o,c-14,x,o+.6,c+a+1,T,{runWall:!0});for(let S=x+3;S<T-3;S+=2)n.cbox(-o+.02,c+1.5,S,.04,.4,.9,X("#2a9d9a"));r.triggers.push({name:"pit",min:[-o-4,c-15,x],max:[o+4,c-6,T],pit:!0,respawnZ:x+1,respawnY:c}),y("seg:"+v.id,x,T,c-6,c+a,{seg:E}),E.gap=[x+3,T-3];break}case"ledge_grab":{let C=v.rise||2.7,S=x+b*.45;f(-o,x,o,T,c),g(-o,x,o,T,c+C+a),u(-o-.6,c,x,-o,c+C+a,T),u(o,c,x,o+.6,c+C+a,T),n.box(-o,c,S,o,c+C,T,{color:X("#ffffff"),side:gt.labwall,top:gt.labfloor,unit:2.8}),i.add(-o,c,S,o,c+C,T,{climb:!1}),n.cbox(0,c+C-.05,S-.06,o*2,.1,.12,X("#d6a12e")),y("seg:"+v.id,x,T,c-2,c+C+a,{seg:E}),r.fireNodes.push({x:-o+1,y:c,z:x+1}),c+=C;break}case"exit_yard":{f(-24,x,24,T,c),r.roofs.push({x0:-24,z0:x,x1:24,z1:T,y:c}),u(-24-.6,c,x,-24,c+3,T),u(24,c,x,24+.6,c+3,T),u(-24,c,x-.6,-o,c+a,x),u(o,c,x-.6,24,c+a,x),n.box(-24,c+a,x-.6,24,c+a+10,x,{color:X("#ffffff"),side:gt.warehouse,unit:3});for(let S=0;S<6;S++){let _=e.range(-20,16),I=e.range(x+5,T-8);n.box(_,c,I,_+6,c+2.6,I+2.5,{color:X(e.pick(["#c0462e","#2a6f8a","#c9a23a"]))}),i.add(_,c,I,_+6,c+2.6,I+2.5,{})}u(-24,c,T-.4,24,c+3.4,T,{climb:!0}),f(-54,T,54,T+60,c-6),r.landmarks.exit={pos:new R(0,c+3.4,T-.2)},r.triggers.push({name:"escape",min:[-24,c-8,T+1],max:[24,c+4,T+60]}),y("seg:"+v.id,x,T,c-2,c+10,{seg:E,outdoor:!0}),r.outdoorZ=x;break}}v.fire!==!1&&v.type!=="pod_room"&&m(x+1,T-1,v.type==="climb_shaft"?c-(v.height||8):v.type==="ledge_grab"?c-(v.rise||2.7):c),l=T,v.id&&(r.landmarks[v.id]={pos:new R(0,c,(x+T)/2),start:new R(0,E.y+.05,x+1.2),end:new R(0,c+.05,T-1.5),z0:x,z1:T,y:c}),yield r.segments.length/s.segments.length*.9}r.length=l,r.bounds.z1=l+60,t.addStatic(n.build(),"facility"),yield 1}var Xr=class{constructor(t){this.r=t,this.scene=new $i,this.collision=new Gr,this.mat=Se(),this.statics=[],this.data=null,this.dynamic=new je,this.scene.add(this.dynamic),this.time=0,this._frustum=new $n,this._pm=new ie}clear(){for(let t of this.statics)this.scene.remove(t),t.geometry.dispose();for(this.statics.length=0,this.collision.clear(),this.traffic&&(this.scene.remove(this.traffic.mesh),this.traffic.mesh.geometry.dispose(),this.traffic=null),this.peds&&(this.scene.remove(this.peds.mesh),this.peds.mesh.geometry.dispose(),this.peds=null),this.fire&&(this.scene.remove(this.fire.mesh),this.fire=null),this.sky&&(this.scene.remove(this.sky),this.sky=null);this.dynamic.children.length;)this.dynamic.remove(this.dynamic.children[0]);this.data=null}addStatic(t,e,i){let n=new Ht(t,this.mat);return n.matrixAutoUpdate=!1,n.updateMatrix(),n.userData.kind=e,n.userData.meta=i,this.scene.add(n),this.statics.push(n),n}*load(t,e){this.clear(),this.def=t,this.applyPalette(e);let i=t.kind==="facility"?wh(t,this):Mh(t,this);for(let n of i)yield n*.85;this._buildSky(e),this.data.interior||(this._buildTraffic(t),this._buildPeds(t)),this._buildFire(),yield 1}applyPalette(t){this.palette=t,Oe.sunDir.value.set(...t.sunDir||[-.5,.75,.35]).normalize(),Oe.sunColor.value.set(t.sun),Oe.skyColor.value.set(t.sky),Oe.groundColor.value.set(t.ground),Oe.fogColor.value.set(t.fog),Oe.fogNear.value=t.fogNear??70,Oe.fogFar.value=t.fogFar??280,this.scene.background=new _t(t.fog)}_buildSky(t){let e=new Ar(400,16,10),i=new Fe({uniforms:{top:{value:new _t(t.skyTop)},mid:{value:new _t(t.skyMid)},bot:{value:new _t(t.fog)},sunDir:Oe.sunDir,sunCol:{value:new _t(t.sunDisc||"#ffd35a")},sunSize:{value:t.sunSize??.06}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; uniform vec3 sunDir; uniform vec3 sunCol; uniform float sunSize; varying vec3 vD;
        void main(){ float h = vD.y; vec3 c = h > 0.08 ? mix(mid, top, smoothstep(0.08, 0.6, h)) : mix(bot, mid, smoothstep(-0.05, 0.08, h));
        vec3 sd = normalize(vec3(sunDir.x, 0.06, sunDir.z)); float s = dot(normalize(vD), sd);
        if (s > 1.0 - sunSize * 0.5) c = sunCol; else if (s > 1.0 - sunSize) c = mix(c, sunCol, 0.35);
        gl_FragColor = vec4(c, 1.0); }`,side:ke,depthWrite:!1});if(this.sky=new Ht(e,i),this.sky.renderOrder=-1,this.sky.frustumCulled=!1,this.scene.add(this.sky),!this.data.interior){let n=new ne,r=si(7),o=X(t.cloud||"#f7deaa");for(let l=0;l<26;l++){let c=r.range(0,Math.PI*2),h=r.range(250,340),d=r.range(55,110),u=r.range(18,40),f=Math.cos(c)*h,g=Math.sin(c)*h;n.cbox(f,d,g,u,2.5,u*.35,o),n.cbox(f+u*.15,d+2,g,u*.5,2.5,u*.25,o)}let a=new Ht(n.build(),Se({atlas:!1,emissive:.8}));a.frustumCulled=!1,this.sky.add(a),a.position.set(0,0,0),a.scale.setScalar(1),this.clouds=a}}_buildTraffic(t){let e=t.traffic??16;if(!e||!this.data.lanes.length)return;let i=new ne;Te.car(i,0,0,0,"#ffffff");let n=new Ji(i.build(),Se({atlas:!1}),e);n.frustumCulled=!1;let r=si(t.seed+5),o=[],a=["#d4472f","#2a6fd4","#f2c14e","#3a8a5a","#e8e0d0","#6b4fa0","#222222"];for(let l=0;l<e;l++){let c=r.pick(this.data.lanes),h=r.chance(.5)?1:-1;o.push({lane:c,dir:h,t:r.range(c.a,c.b),speed:r.range(7,12),stopped:0,box:null}),n.setColorAt(l,new _t(r.pick(a)))}n.instanceColor.needsUpdate=!0,this.scene.add(n),this.traffic={mesh:n,cars:o,R:r}}_buildPeds(t){let e=t.peds??30;if(!e||!this.data.sidewalks.length)return;let i=new ne;i.cbox(0,.45,0,.32,.9,.22,X("#3a3a48")),i.cbox(0,1.2,0,.48,.62,.28,X("#ffffff")),i.cbox(0,1.62,0,.28,.3,.28,X("#d9a27a")),i.cbox(0,1.78,0,.3,.07,.3,X("#3a2a20"));let n=new Ji(i.build(),Se({atlas:!1}),e);n.frustumCulled=!1;let r=si(t.seed+9),o=[],a=["#c0462e","#2a6f8a","#c9a23a","#4f7a3a","#e8e0d0","#7a4f9a","#d97a3a","#556070"];for(let l=0;l<e;l++){let h={sw:r.pick(this.data.sidewalks),edge:r.int(0,3),t:r.range(0,1),speed:r.range(1,1.6)*(r.chance(.5)?1:-1),x:0,z:0,flee:0,phase:r.range(0,6),alive:!0};o.push(h),n.setColorAt(l,new _t(r.pick(a)))}n.instanceColor.needsUpdate=!0,this.scene.add(n),this.peds={mesh:n,peds:o}}_buildFire(){let t=this.data.fireNodes||[];if(!t.length)return;let e=new Ie,i=[],n=[],r=[],o=[],a=[],l=(d,u)=>{let y=[[-.7*d,0,-.7*u],[.7*d,0,.7*u],[.7*d*.2,1.6,.7*u*.2],[-.7*d*.2,1.6,-.7*u*.2]];for(let m of[0,1,2,0,2,3])i.push(...y[m]),r.push(0,1,0),o.push(0,0),a.push(0,0,0,0),n.push(...y[m][1]>.5?[1,.85,.25]:[1,.35,.1])};l(1,0),l(0,1),e.setAttribute("position",new Wt(i,3)),e.setAttribute("normal",new Wt(r,3)),e.setAttribute("color",new Wt(n,3)),e.setAttribute("uv",new Wt(o,2)),e.setAttribute("tile",new Wt(a,4));let c=Se({atlas:!1,emissive:1,side:Ke}),h=new Ji(e,c,t.length);h.frustumCulled=!1;for(let d of t)d.on=!1,d.heat=0;this.scene.add(h),this.fire={mesh:h,nodes:t,front:-999},this._updateFire(0)}_updateFire(t){let e=this.fire;if(!e)return;let i=new ie,n=new qe,r=new R,o=new R,a=0;for(let l of e.nodes){let c=l.steam?e.front>-998:l.z<e.front;l.on=c;let h=c?.75+.35*Math.sin(this.time*13+l.z*3.1+l.x):1e-4;r.set(l.steam?1.6:1,h*(l.steam?.5:1),l.steam?1.6:1),n.setFromAxisAngle(Ml,this.time*.5+l.z),o.set(l.x,l.y,l.z),i.compose(o,n,r),e.mesh.setMatrixAt(a++,i)}e.mesh.instanceMatrix.needsUpdate=!0}isBurning(t,e=1.2){if(!this.fire)return!1;for(let i of this.fire.nodes)if(i.on&&!i.steam&&Math.abs(i.y-t.y)<2&&Math.abs(i.z-t.z)<e&&Math.abs(i.x-t.x)<e+.3)return!0;return!1}update(t,e,i){this.time+=t,Oe.time.value=this.time,this.sky&&this.sky.position.copy(e.position),this._pm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._pm);let n=Oe.fogFar.value+40;for(let r of this.statics){let o=r.geometry.boundingSphere,a=o.center.distanceTo(e.position)-o.radius;r.visible=a<n&&this._frustum.intersectsSphere(o)}this._updateTraffic(t,i),this._updatePeds(t,i),this._updateFire(t)}_updateTraffic(t,e){let i=this.traffic;if(!i)return;let n=new ie,r=new qe,o=new R(1,1,1),a=new R;i.cars.forEach((l,c)=>{let h=l.lane;l.stopped>0?l.stopped-=t:l.t+=l.dir*l.speed*t,l.t>h.b&&(l.t=h.a),l.t<h.a&&(l.t=h.b);let d=l.dir*3.2;h.axis==="z"?a.set(h.c+d,0,l.t):a.set(l.t,0,h.c-d),e&&Math.abs(e.pos.y)<1&&a.distanceToSquared(e.pos)<36&&(l.stopped=.5),l.pos=l.pos||new R,l.pos.copy(a);let u=h.axis==="z"?l.dir>0?0:Math.PI:l.dir>0?Math.PI/2:-Math.PI/2;r.setFromAxisAngle(Ml,u),n.compose(a,r,o),i.mesh.setMatrixAt(c,n)}),i.mesh.instanceMatrix.needsUpdate=!0}_updatePeds(t,e){let i=this.peds;if(!i)return;let n=new ie,r=new qe,o=new R(1,1,1),a=new R,l=this.panic||null;i.peds.forEach((c,h)=>{let d=c.sw,u=d.x1-d.x0,f=d.z1-d.z0,g=2*(u+f),y=c.speed;l&&Math.hypot(c.x-l.x,c.z-l.z)<25&&(y=Math.sign(c.speed)*4.5),c.t=(c.t+y*t/g+1)%1;let m=c.t*g,p,v,b;m<u?(p=d.x0+m,v=d.z0,b=Math.PI/2):(m-=u)<f?(p=d.x1,v=d.z0+m,b=0):(m-=f)<u?(p=d.x1-m,v=d.z1,b=-Math.PI/2):(m-=u,p=d.x0,v=d.z1-m,b=Math.PI),y<0&&(b+=Math.PI),c.x=p,c.z=v,c.phase+=t*Math.abs(y)*6,a.set(p,.22+Math.abs(Math.sin(c.phase))*.05,v),r.setFromAxisAngle(Ml,b),n.compose(a,r,o),i.mesh.setMatrixAt(h,n)}),i.mesh.instanceMatrix.needsUpdate=!0}findZipPoint(t,e,i=55,n=.93){let r=null,o=-1;for(let a of this.data.zipPoints){let l=a[0]-t.x,c=a[1]-t.y,h=a[2]-t.z,d=Math.hypot(l,c,h);if(d<4||d>i)continue;let u=(l*e.x+c*e.y+h*e.z)/d;if(u<n)continue;let f=u*2-d/i;if(f>o){let g=new R(a[0],a[1]+.3,a[2]);if(!this.collision.lineOfSight(t,g))continue;o=f,r=g}}return r}roofAt(t,e){let i=null;for(let n of this.data.roofs)t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1&&(!i||n.y>i.y)&&(i=n);return i}},Ml=new R(0,1,0);var Qi=class{constructor(t,e,i){this.owner=t,this.states=e,this.current=null,this.name=null,this.time=0,this.prev=null,i&&this.set(i)}set(t,e){if(!this.states[t]){console.warn("FSM: unknown state",t);return}let i=this.name;this.current&&this.current.exit&&this.current.exit.call(this.owner,t),this.prev=i,this.name=t,this.current=this.states[t],this.time=0,this.current.enter&&this.current.enter.call(this.owner,i,e)}is(...t){return t.includes(this.name)}update(t){this.time+=t,this.current&&this.current.update&&this.current.update.call(this.owner,t)}};var dy=new R(0,1,0),rs=22,Eh={skateboard:{max:13.5,accel:7,friction:.35,turn:1,jump:7,pose:"ride"},skates:{max:12,accel:12,friction:1.2,turn:1,jump:7.5,pose:"ride"},bicycle:{max:17,accel:9,friction:.6,turn:.75,jump:5.5,pose:"bike"}},qr=class{constructor(t){this.game=t,this.world=t.world,this.pos=new R,this.vel=new R,this.yaw=0,this.pitch=0,this.hw=.32,this.h=1.8,this.targetH=1.8,this.ground=!1,this.crouch=!1,this.health=100,this.maxHealth=100,this.lastHurt=0,this.abilities={swing:!0,zip:!0,gadgets:!0,ride:!0,wallrun:!0,climb:!0},this.ride=null,this.rideIdx=0,this.anchor=new R,this.ropeLen=0,this.ropeActive=!1,this.wallN=new R,this.wallSide=0,this.wallTime=0,this.wallCooldown=0,this.lerpFrom=new R,this.lerpTo=new R,this.lerpT=0,this.lerpDur=.3,this.afterLerp="ground",this.zipTarget=null,this.aimZipPoint=null,this._zipScan=0,this.pose="idle",this.speed=0,this.landImpact=0,this.stepPhase=0,this.lastStepSign=1,this.swingDistance=0,this.airTime=0,this.noiseTimer=0,this.lockTimer=0,this.lockPose="idle",this.lastSafe=new R,this.safeTimer=0,this.swingRetry=0,this.coyote=0,this.jumpBuffer=0,this._fwd=new R,this._right=new R,this._tmp=new R,this._tmp2=new R,this.fsm=new Qi(this,tg,"ground")}spawn(t,e=0){this.pos.copy(t),this.vel.set(0,0,0),this.yaw=e,this.pitch=0,this.lastSafe.copy(t),this.ropeActive=!1,this.ride=null,this.crouch=!1,this.h=this.targetH=1.8,this.health=this.maxHealth,this.fsm.set("air")}get eyeHeight(){return this.h-.18}fwd(){return this._fwd.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}right(){return this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}lookDir(t=new R){let e=Math.cos(this.pitch);return t.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}eye(t=new R){return t.set(this.pos.x,this.pos.y+this.eyeHeight,this.pos.z)}hurt(t,e){this.game.godMode||this.fsm.is("locked")&&this.lockPose==="takedown"||(this.health-=t,this.lastHurt=this.game.time,q.emit("player:hurt",{amount:t,from:e}),this.health<=0&&(this.health=0,q.emit("player:dead")))}lock(t,e="idle"){this.lockTimer=t,this.lockPose=e,this.fsm.is("locked")||this.fsm.set("locked")}setCrouch(t){return!t&&this.crouch&&this.world.collision.query(this.pos.x-this.hw,this.pos.y+.1,this.pos.z-this.hw,this.pos.x+this.hw,this.pos.y+1.8,this.pos.z+this.hw,[]).some(i=>!i.trigger)?!1:(this.crouch=t,this.targetH=t?1.1:1.8,!0)}update(t){(!this.fsm.is("locked")||this.lockPose!=="dialogue")&&(this.yaw=Ur(this.yaw-j.look.x),this.pitch=jt(this.pitch-j.look.y,-1.45,1.45)),this.wallCooldown=Math.max(0,this.wallCooldown-t),this.h=Le(this.h,this.targetH,14,t),this.fsm.update(t),this.health<this.maxHealth&&this.game.time-this.lastHurt>4&&(this.health=Math.min(this.maxHealth,this.health+8*t)),this.safeTimer+=t,this.ground&&this.safeTimer>1&&this.pos.y>this.world.collision.floorFn(this.pos.x,this.pos.z)+-.5&&(this.lastSafe.copy(this.pos),this.safeTimer=0);let e=this.world.collision.floorFn(this.pos.x,this.pos.z);e<-1&&this.pos.y<=e+.3&&!this.world.data.interior&&(q.emit("player:splash"),this.respawnSafe()),this.pos.y<-25&&this.respawnSafe(),this.speed=Math.hypot(this.vel.x,this.vel.z),this.fsm.is("swing")&&(this.swingDistance+=this.vel.length()*t),this.world.isBurning(this.pos)&&this.hurt(28*t,"fire")}respawnSafe(){let t=this.world.roofAt(this.lastSafe.x,this.lastSafe.z);this.pos.copy(this.lastSafe),t&&this.pos.y<t.y&&(this.pos.y=t.y+.1),this.vel.set(0,0,0),this.ropeActive=!1,this.fsm.set("air"),q.emit("player:respawned")}moveInput(){let t=this.fwd(),e=this.right(),i=j.move.x,n=j.move.y;return this._tmp.set(t.x*n+e.x*i,0,t.z*n+e.z*i)}physics(t,e){let i=Wr(this.world.collision,this.pos,this.vel,t,this.hw,this.h,e);return this.contact=i,i}ray(t,e,i,n,r,o,a,l){return this.world.collision.raycast(t,e,i,n,r,o,a,l)}probeWall(t,e,i){let n=this.ray(this.pos.x,this.pos.y+e,this.pos.z,t.x,0,t.z,i);return n&&n.box&&Math.abs(n.normal[1])<.5?n:null}emitNoise(t){q.emit("noise",{pos:this.pos.clone(),radius:t,source:"player"})}freerun(){return j.down("l1")}sprinting(){return Math.hypot(j.move.x,j.move.y)>.85||this.freerun()}tryVault(){let t=this.fwd();if(this.speed<1.5&&!j.pressed("cross"))return!1;let e=this.probeWall(t,.5,.8+this.speed*.06);if(!e||e.box.trigger)return!1;let i=e.box.max[1],n=i-this.pos.y;if(n<.4||n>1.4)return!1;let r=this.ray(e.point[0]+t.x*3,i-.05,e.point[2]+t.z*3,-t.x,0,-t.z,3),o=r&&r.box===e.box?3-r.t:3;return this.world.collision.query(e.point[0]+t.x*.4-this.hw,i+.05,e.point[2]+t.z*.4-this.hw,e.point[0]+t.x*.4+this.hw,i+1,e.point[2]+t.z*.4+this.hw,[]).some(l=>!l.trigger)?!1:(this.lerpFrom.copy(this.pos),o<1.6?(this.lerpTo.set(e.point[0]+t.x*(o+.6),this.pos.y+0,e.point[2]+t.z*(o+.6)),this.vaultTop=i+.25):(this.lerpTo.set(e.point[0]+t.x*.6,i+.02,e.point[2]+t.z*.6),this.vaultTop=i+.3),this.vaultSpeed=Math.max(this.speed,5),this.lerpDur=.32,this.afterLerp="air",this.fsm.set("vault"),q.emit("player:vault"),!0)}tryLedge(){if(!this.abilities.climb)return!1;let t=this.fwd(),e=this.probeWall(t,1.2,.75);if(!e||e.box.trigger||e.box.rail)return!1;let i=e.box.max[1];if(i-this.pos.y<1.2||i-this.pos.y>2.35)return!1;let n=e.normal;return this.world.collision.query(e.point[0]-n[0]*.5-this.hw,i+.05,e.point[2]-n[2]*.5-this.hw,e.point[0]-n[0]*.5+this.hw,i+1,e.point[2]-n[2]*.5+this.hw,[]).some(o=>!o.trigger)?!1:(this.wallN.set(n[0],0,n[2]),this.ledgeTop=i,this.ledgePoint=new R(e.point[0],i,e.point[2]),this.fsm.set("hang"),!0)}tryClimb(){if(!this.abilities.climb)return!1;let t=this.fwd(),e=this.probeWall(t,1,.7);return!e||!e.box.climb||e.box.trigger||e.box.rail||e.box.max[1]-this.pos.y<1.2?!1:(this.wallN.set(e.normal[0],0,e.normal[2]),this.climbBox=e.box,this.fsm.set("climb"),!0)}tryWallRun(){if(!this.abilities.wallrun||this.wallCooldown>0)return!1;let t=Math.hypot(this.vel.x,this.vel.z);if(t<5.5)return!1;let e=this.right();for(let i of[-1,1]){let n=this._tmp2.set(e.x*i,0,e.z*i),r=this.probeWall(n,1,1.1);if(!r||r.box.trigger||r.box.rail||r.box.max[1]-this.pos.y<2.2)continue;let o=this._tmp.set(r.normal[0],0,r.normal[2]);if(!(Math.abs((this.vel.x*o.x+this.vel.z*o.z)/t)>.75))return this.wallN.copy(o),this.wallSide=i,this.fsm.set("wallrun"),!0}return!1}findAnchor(){let t=this.eye(new R),e=this.lookDir(new R),i=Math.hypot(this.vel.x,this.vel.z),n=e.x,r=e.z;i>6&&(n=n*.5+this.vel.x/i*.5,r=r*.5+this.vel.z/i*.5);let o=Math.hypot(n,r)||1;n/=o,r/=o;let a=null,l=-1e9,c=[.95,1.1,.8,1.25,.65],h=[0,.38,-.38,.7,-.7];for(let d of c)for(let u of h){let f=Math.cos(u),g=Math.sin(u),y=n*f-r*g,m=n*g+r*f,p=Math.cos(d),v=Math.sin(d),b=y*p,x=v,T=m*p,E=this.ray(t.x,t.y,t.z,b,x,T,75,S=>!S.trigger&&!S.curb);if(!E||E.floor||!E.box||E.point[1]<this.pos.y+4)continue;let A=(E.point[0]-t.x)*n+(E.point[2]-t.z)*r;if(A<2)continue;let C=Math.min(A,30)/30*2-Math.abs(u)*.6+Math.min(E.point[1]-this.pos.y,30)/30-Math.abs(d-.95)*.4;C>l&&(l=C,a=E)}return a}startSwing(t){this.anchor.set(t.point[0],t.point[1],t.point[2]);let e=this.anchor.distanceTo(this.pos);this.ropeLen=Math.max(5,e*.9),this.ropeActive=!0,this.ride&&this.dismount(),this.fsm.set("swing"),q.emit("player:thwip",{anchor:this.anchor.clone()})}dismount(){this.ride&&(this.ride=null,q.emit("player:ride",null))}cycleRide(){let e=[null,...this.game.save.data.inventory.rides.filter(i=>this.game.registry.get("rides",i))];this.rideIdx=(this.rideIdx+1)%e.length,this.ride=e[this.rideIdx],this.ride?(this.setCrouch(!1),this.fsm.set("ride")):this.fsm.set("ground"),q.emit("player:ride",this.ride)}groundJump(t=1){if(this.vel.y=8*t,this.ground=!1,this.freerun()&&this.speed>6){let e=this.fwd();this.vel.x+=e.x*2,this.vel.z+=e.z*2,this.vel.y+=1}this.fsm.set("air"),q.emit("player:jump"),this.emitNoise(6)}aimZip(t){return this._zipScan-=t,j.down("l2")&&this.abilities.zip?this._zipScan<=0&&(this._zipScan=.1,this.aimZipPoint=this.world.findZipPoint(this.eye(new R),this.lookDir(new R))):this.aimZipPoint=null,this.aimZipPoint&&j.pressed("r2")?(j.consume("r2"),this.zipTarget=this.aimZipPoint.clone(),this.fsm.set("zip"),q.emit("player:zip",{target:this.zipTarget}),!0):!1}canSwingInput(){return this.abilities.swing&&j.down("r2")&&!j.down("l2")}},tg={ground:{enter(){this.ground=!0,this.airTime=0},update(s){let t=this;if(t.aimZip(s))return;let e=t.moveInput(),i=Math.min(1,Math.hypot(j.move.x,j.move.y)),n=t.crouch?2.6:i>.85||t.freerun()?t.freerun()?9.6:7.6:4.4;t.game.combat&&t.game.combat.aiming&&(n=Math.min(n,3.5));let r=e.x*n,o=e.z*n,a=i>.05?45:30;if(t.vel.x=Th(t.vel.x,r,a*s),t.vel.z=Th(t.vel.z,o,a*s),t.vel.y-=rs*s,j.pressed("circle")){if(t.speed>5.8&&!t.crouch){t.fsm.set("slide");return}t.setCrouch(!t.crouch),q.emit("player:crouch",t.crouch)}if(j.pressed("down")&&t.abilities.ride&&!t.crouch){t.cycleRide();return}if(j.pressed("cross")){if(t.tryVault())return;t.crouch&&t.setCrouch(!1),t.groundJump();return}if(t.freerun()&&i>.3&&(t.tryVault()||t.tryClimb()))return;if(t.canSwingInput()&&j.pressed("r2")){t.groundJump(.9);return}if(!t.physics(s,{grounded:!0,stepH:.45}).ground){t.coyote=.12,t.fsm.set("air");return}if(t.ground=!0,t.speed>.5){t.stepPhase+=s*(1.6+t.speed*.32);let c=Math.sign(Math.sin(t.stepPhase*Math.PI));c!==t.lastStepSign&&(t.lastStepSign=c,q.emit("player:step",{crouch:t.crouch,speed:t.speed}),t.crouch||t.emitNoise(t.speed>6?9:4))}t.pose=t.crouch?"crouch":t.speed>6?"run":t.speed>.5?"walk":"idle"}},air:{enter(s){this.ground=!1,s!=="swing"&&s!=="wallrun"&&(this.swingRetry=0)},update(s){let t=this;if(t.airTime+=s,t.coyote-=s,t.aimZip(s))return;let e=t.moveInput(),i=10;t.vel.x+=e.x*i*s,t.vel.z+=e.z*i*s;let n=Math.hypot(t.vel.x,t.vel.z),r=Math.max(9.5,n-3*s);if(n>r&&(t.vel.x*=r/n,t.vel.z*=r/n),t.vel.y-=rs*s,t.vel.y<-55&&(t.vel.y=-55),j.pressed("cross")&&t.coyote>0){t.groundJump();return}if(t.swingRetry-=s,t.canSwingInput()&&t.swingRetry<=0&&(j.pressed("r2")||t.airTime>.18)){let l=t.findAnchor();if(l){t.startSwing(l);return}else j.pressed("r2")&&q.emit("player:noanchor");t.swingRetry=.15}if(t.vel.y<4&&t.tryLedge()||(t.freerun()||t.speed>6.5)&&t.tryWallRun()||j.move.y>.5&&(t.freerun()||t.vel.y<0)&&t.tryClimb())return;j.down("circle")&&(t.vel.y-=14*s);let o=t.vel.y;if(t.physics(s,{}).ground){t.landImpact=jt(-o/25,0,1),q.emit("player:land",{impact:t.landImpact,vy:o}),-o>10&&t.emitNoise(12),-o>18&&!t.freerun()&&(t.vel.x*=.4,t.vel.z*=.4),t.fsm.set(t.ride?"ride":"ground");return}t.pose=t.vel.y<-14?"glide":"air"}},slide:{enter(){this.targetH=.9,this.h=Math.min(this.h,1);let s=this.fwd(),t=Math.max(this.speed,9);this.vel.x=s.x*t,this.vel.z=s.z*t,q.emit("player:slide"),this.emitNoise(5)},exit(){this.crouch||(this.targetH=1.8)},update(s){let t=this,e=Math.exp(-1.6*s);t.vel.x*=e,t.vel.z*=e,t.vel.y-=rs*s;let i=t.physics(s,{grounded:!0});if(t.pose="slide",j.pressed("cross")&&t.fsm.time>.15&&(t.targetH=1.8,t.setCrouch(!1)!==!1)){t.groundJump();return}if(!i.ground){t.fsm.set("air");return}(t.fsm.time>.75||t.speed<3&&t.fsm.time>.25)&&(t.crouch=!0,t.setCrouch(!1)||(t.crouch=!0,t.targetH=1.1),t.fsm.set("ground"))}},wallrun:{enter(){this.wallTime=0,this.vel.y=Math.max(this.vel.y,2.5),q.emit("player:wallrun")},update(s){let t=this;t.wallTime+=s;let e=t.wallN,i=t._tmp.set(-e.z,0,e.x);i.x*t.vel.x+i.z*t.vel.z<0&&i.negate();let n=Math.max(9,Math.hypot(t.vel.x,t.vel.z));if(t.vel.x=i.x*n-e.x*1.5,t.vel.z=i.z*n-e.z*1.5,t.vel.y-=(t.wallTime<.6?4:14)*s,t.pose=t.wallSide<0?"wallrunL":"wallrunR",j.pressed("cross")){t.vel.x=i.x*n*.9+e.x*7,t.vel.z=i.z*n*.9+e.z*7,t.vel.y=8.5,t.wallCooldown=.25,t.fsm.set("air"),q.emit("player:jump");return}if(t.canSwingInput()&&j.pressed("r2")){let a=t.findAnchor();if(a){t.startSwing(a);return}}let r=t.physics(s,{}),o=t.probeWall(t._tmp2.set(-e.x,0,-e.z),1,1.2);if(r.ground){t.fsm.set("ground");return}(!o||t.wallTime>1.7||j.pressed("circle"))&&(t.wallCooldown=.35,t.vel.x+=e.x*2,t.vel.z+=e.z*2,t.fsm.set("air")),j.move.y>.6&&j.down("l1")&&Math.abs(t.fwd().dot(e))>.85&&t.tryClimb()}},climb:{enter(){this.vel.set(0,0,0),this.climbTime=0,q.emit("player:climb")},update(s){let t=this,e=t.wallN;t.climbTime+=s;let i=t._tmp.set(-e.z,0,e.x),n=t.fwd().dot(e)<0?1:-1,r=t.freerun()?1.45:1,o=j.move.y*4.2*r*(n>0?1:.6),a=j.move.x*3.2*r,l=t.right(),c=i.x*l.x+i.z*l.z>=0?1:-1;if(t.vel.set(i.x*a*c-e.x*1,o,i.z*a*c-e.z*1),t.pose=Math.abs(o)+Math.abs(a)>.2?"climb":"hang",j.pressed("cross")){j.move.y>.3?t.vel.set(-e.x*-.5,9.5,-e.z*-.5):(t.vel.set(e.x*7,8,e.z*7),t.yaw=Math.atan2(-e.x,-e.z)),t.wallCooldown=.25,t.fsm.set("air"),q.emit("player:jump");return}if(j.pressed("circle")){t.vel.set(e.x*2,0,e.z*2),t.fsm.set("air");return}if(t.canSwingInput()&&j.pressed("r2")){let u=t.findAnchor();if(u){t.vel.set(e.x*4,4,e.z*4),t.startSwing(u);return}}t.physics(s,{});let h=t.probeWall(t._tmp2.set(-e.x,0,-e.z),1,1),d=t.probeWall(t._tmp2.set(-e.x,0,-e.z),1.75,1);if(!(!d&&h&&t.tryLedge())){if(!h&&!d){let u=t.climbBox?t.climbBox.max[1]:t.pos.y+1;if(u-t.pos.y<2&&o>0){t.lerpFrom.copy(t.pos),t.lerpTo.set(t.pos.x-e.x*.9,u+.02,t.pos.z-e.z*.9),t.lerpDur=.28,t.vaultTop=u+.3,t.afterLerp="ground",t.vaultSpeed=2,t.fsm.set("vault"),q.emit("player:mantle");return}t.fsm.set("air");return}h&&h.box&&(t.climbBox=h.box),t.contact&&t.contact.ground&&j.move.y<-.3&&t.fsm.set("ground")}}},hang:{enter(){let s=this.wallN;this.vel.set(0,0,0),this.pos.set(this.ledgePoint.x+s.x*(this.hw+.06),this.ledgeTop-1.75,this.ledgePoint.z+s.z*(this.hw+.06)),q.emit("player:grab")},update(s){let t=this,e=t.wallN;if(t.pose="hang",j.pressed("cross")||j.move.y>.5&&t.fsm.time>.18||t.freerun()&&t.fsm.time>.1){t.lerpFrom.copy(t.pos),t.lerpTo.set(t.ledgePoint.x-e.x*.6,t.ledgeTop+.02,t.ledgePoint.z-e.z*.6),t.lerpDur=.3,t.vaultTop=t.ledgeTop+.35,t.afterLerp="ground",t.vaultSpeed=2,t.fsm.set("vault"),q.emit("player:mantle");return}if(j.pressed("circle")){t.vel.set(e.x*1.5,-1,e.z*1.5),t.wallCooldown=.4,t.fsm.set("air"),t.airTime=.5;return}if(Math.abs(j.move.x)>.3){let i=t._tmp.set(-e.z,0,e.x),n=t.right(),r=i.x*n.x+i.z*n.z>=0?1:-1,o=t.pos.x+i.x*r*j.move.x*2.2*s,a=t.pos.z+i.z*r*j.move.x*2.2*s,l=t.ray(o,t.ledgeTop-.1,a,-e.x,0,-e.z,.8);l&&l.box&&(t.pos.x=o,t.pos.z=a,t.ledgePoint.x=l.point[0],t.ledgePoint.z=l.point[2])}}},vault:{enter(){this.lerpT=0,q.emit("player:vaultstart")},update(s){let t=this;t.lerpT+=s/t.lerpDur;let e=Math.min(1,t.lerpT),i=e*e*(3-2*e);t.pos.lerpVectors(t.lerpFrom,t.lerpTo,i);let n=Math.max(t.vaultTop,t.lerpFrom.y,t.lerpTo.y);if(t.pos.y=Dr(Dr(t.lerpFrom.y,n,Math.min(1,e*2)),t.lerpTo.y,Math.max(0,e*2-1)),t.pose="crouch",e>=1){let r=t.fwd(),o=t.vaultSpeed||4;t.vel.set(r.x*o,0,r.z*o),t.fsm.set(t.afterLerp==="ground"?"ground":"air")}}},swing:{enter(){this.swingT=0,this.pose="swing"},exit(){this.ropeActive=!1},update(s){let t=this;t.swingT+=s;let e=t.anchor;t.vel.y-=rs*s;let i=t.lookDir(t._tmp2),n=t.moveInput(),r=t._tmp.subVectors(e,t.pos),o=r.length();r.divideScalar(o);let a=15*Math.max(.25,j.move.y),l=i.x*.6+n.x*.6,c=i.z*.6+n.z*.6;t.vel.x+=l*a*s,t.vel.z+=c*a*s,t.ropeLen>7&&(t.ropeLen-=(2.2+(t.pos.y<6?4:0))*s);let h=t.physics(s,{}),d=t._tmp.subVectors(t.pos,e),u=d.length();if(u>t.ropeLen){d.divideScalar(u),t.pos.copy(e).addScaledVector(d,t.ropeLen);let y=t.vel.dot(d);y>0&&t.vel.addScaledVector(d,-y)}let f=t.vel.length();f>44&&t.vel.multiplyScalar(44/f),t.pos.y<1.5&&t.vel.y<0&&(t.vel.y*=.9),t.pose="swing";let g=t.pos.y>e.y-1.5||t.swingT>.4&&r.y<.15;if(j.pressed("cross")){let y=t.vel;y.y=Math.max(y.y,0)+9;let m=Math.hypot(y.x,y.z)||1;y.x+=y.x/m*3,y.z+=y.z/m*3,t.swingRetry=.35,t.fsm.set("air"),q.emit("player:release",{jump:!0});return}if(!j.down("r2")||g||t.swingT>4.5){t.vel.y>-6&&(t.vel.y+=3.5);let y=Math.hypot(t.vel.x,t.vel.z)||1;t.vel.x+=t.vel.x/y*1.5,t.vel.z+=t.vel.z/y*1.5,t.swingRetry=g?.12:.05,t.fsm.set("air"),q.emit("player:release",{jump:!1});return}if(h.ground&&t.vel.y<=.1&&t.swingT>.2){t.fsm.set("ground");return}(h.wallX||h.wallZ)&&(t.tryWallRun()||t.tryClimb())}},zip:{enter(){this.zipT=0,this.ropeActive=!0,this.anchor.copy(this.zipTarget),this.ride&&this.dismount()},exit(){this.ropeActive=!1},update(s){let t=this;t.zipT+=s;let e=t._tmp.subVectors(t.zipTarget,t.pos),i=e.length();if(t.pose="zip",i<1.2||t.zipT>3){let o=t.fwd();t.vel.set(o.x*6,j.down("cross")?14:6.5,o.z*6),t.pos.y=Math.max(t.pos.y,t.zipTarget.y-.2),t.fsm.set("air"),q.emit("player:ziparrive");return}e.divideScalar(i);let n=Math.min(34,10+t.zipT*60);t.vel.copy(e).multiplyScalar(n);let r=t.physics(s,{});(r.wallX||r.wallZ||r.ceiling)&&t.zipT>.2&&t.fsm.set("air")}},ride:{enter(){this.ground=!0},update(s){let t=this,e=Eh[t.ride]||Eh.skateboard,i=t.fwd(),n=t.moveInput(),r=jt(j.move.y,-1,1),o=Math.hypot(t.vel.x,t.vel.z),a=o>.5?t.vel.x/o:i.x,l=o>.5?t.vel.z/o:i.z,c=Math.atan2(-(i.x+n.x*.3),-(i.z+n.z*.3)),h=Math.atan2(-a,-l),d=h+Ur(c-h)*Math.min(1,e.turn*4*s);a=-Math.sin(d),l=-Math.cos(d);let u=o+(r>0?r*e.accel:r*e.accel*1.8)*s-e.friction*s;if(u=jt(u,0,e.max),t.vel.x=a*u,t.vel.z=l*u,t.vel.y-=rs*s,j.pressed("cross")&&(t.vel.y=e.jump,q.emit("player:jump")),j.pressed("down")&&(t.cycleRide(),!t.ride))return;if(j.pressed("circle")){t.dismount(),t.rideIdx=0,t.fsm.set("ground");return}if(t.canSwingInput()&&j.pressed("r2")){t.dismount(),t.rideIdx=0,t.groundJump();return}let f=t.physics(s,{grounded:t.vel.y<=0,stepH:.3});if(t.ground=f.ground,(f.wallX||f.wallZ)&&u>10){t.dismount(),t.rideIdx=0,t.vel.set(-a*3,4,-l*3),q.emit("player:bail"),t.fsm.set("air");return}t.pose=e.pose,t.rideSpeed=u,f.ground&&u>.5&&q.emit("player:rolling",u)}},locked:{enter(){this.vel.x=0,this.vel.z=0},update(s){let t=this;t.lockTimer-=s,t.pose=t.lockPose==="dialogue"?"idle":t.lockPose,t.vel.y-=rs*s,t.physics(s,{grounded:!0}),t.lockTimer<=0&&t.lockPose!=="dialogue"&&t.fsm.set(t.ride?"ride":"ground")}}};function Th(s,t,e){return s<t?Math.min(t,s+e):Math.max(t,s-e)}var Cs=["fp","tp","shoulderR","shoulderL"],eg={tp:{dist:4.4,side:0,up:.45},shoulderR:{dist:2.6,side:.75,up:.25},shoulderL:{dist:2.6,side:-.75,up:.25}},Yr=class{constructor(t,e){this.cam=t,this.settings=e,this.mode=e.camera||"fp",this.bob=0,this.bobAmt=0,this.roll=0,this.fovKick=0,this.landDip=0,this.shake=0,this.curDist=4,this.eyeY=1.62,this._v=new R,this._e=new R}cycle(){let t=Cs.indexOf(this.mode);return this.mode=Cs[(t+1)%Cs.length],this.settings.camera=this.mode,this.mode}addShake(t){this.shake=Math.min(1,this.shake+t)}update(t,e,i){let n=this.mode==="fp",r=e.fsm.is("ground")&&e.speed>.6;this.bobAmt=Le(this.bobAmt,r?Math.min(1,e.speed/7):0,8,t),this.bob+=t*(6+e.speed*.9);let o=this.settings.headBob??.5,a=Math.abs(Math.sin(this.bob))*.06*this.bobAmt*o,l=Math.cos(this.bob)*.03*this.bobAmt*o;e.landImpact>0&&(this.landDip=Math.max(this.landDip,e.landImpact*.35),e.landImpact=0),this.landDip=Le(this.landDip,0,9,t);let c=0;e.fsm.is("wallrun")?c=e.wallSide*.18:e.fsm.is("swing")&&(c=jt(-e.vel.dot(e.right())*.006,-.12,.12)),this.roll=Le(this.roll,c,7,t);let h=e.vel.length();this.fovKick=Le(this.fovKick,jt((h-8)*.7,0,16),4,t);let d=(this.settings.fov||90)+this.fovKick-(e.game.combat&&e.game.combat.aiming?22:0),u=jt(2*Math.atan(Math.tan(d*Math.PI/360)/this.cam.aspect)*180/Math.PI,40,100);Math.abs(this.cam.fov-u)>.05&&(this.cam.fov=u,this.cam.updateProjectionMatrix()),this.eyeY=Le(this.eyeY,e.eyeHeight,16,t);let f=this.shake;this.shake=Le(this.shake,0,6,t);let g=(Math.random()-.5)*f*.15,y=(Math.random()-.5)*f*.15,m=this._e.set(e.pos.x+l*Math.cos(e.yaw),e.pos.y+this.eyeY-a-this.landDip,e.pos.z-l*Math.sin(e.yaw));if(this.cam.rotation.order="YXZ",this.cam.rotation.set(e.pitch+y,e.yaw+g,this.roll),n){this.cam.position.copy(m);return}let p=eg[this.mode],v=this._v.set(0,0,1).applyEuler(this.cam.rotation),b=new R(1,0,0).applyEuler(this.cam.rotation),x=m.clone();x.y+=p.up;let E=x.clone().addScaledVector(b,p.side).addScaledVector(v,p.dist).clone().sub(x),A=E.length();E.divideScalar(A);let C=i.collision.raycast(x.x,x.y,x.z,E.x,E.y,E.z,A,_=>!_.trigger&&!_.seeThrough),S=C?Math.max(.4,C.t-.3):A;this.curDist=S<this.curDist?S:Le(this.curDist,S,6,t),this.cam.position.copy(x).addScaledVector(E,this.curDist)}};var Sl={};function Ah(s,t){let e=s+t;if(Sl[e])return Sl[e];let i=document.createElement("canvas");i.width=i.height=64;let n=i.getContext("2d");n.fillStyle=t,n.strokeStyle="#1d1712",n.lineWidth=6,n.beginPath(),n.moveTo(32,4),n.lineTo(60,32),n.lineTo(32,60),n.lineTo(4,32),n.closePath(),n.fill(),n.stroke(),n.font="bold 40px Bangers, Impact, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#1d1712",n.fillText(s,32,35);let r=new jn(i);return r.magFilter=_e,Sl[e]=r,r}var Rh=0,wl=class{constructor(t,e,i,n={}){this.mgr=t,this.game=t.game,this.type=e,this.id=n.id||"npc"+Rh++,this.pos=i.clone(),this.vel=new R,this.yaw=n.yaw??0,this.hp=e.hp??3,this.maxHp=this.hp,this.hostile=!!e.hostile,this.role=n.role||e.role||(this.hostile?"enemy":"civilian"),this.home=i.clone(),this.patrol=n.patrol||null,this.patrolIdx=0,this.tag=n.tag||null,this.suspicion=0,this.aware=!1,this.bound=0,this.stun=0,this.attackT=0,this.cool=0,this.investigate=null,this.talk=n.talk||null,this.name=n.name||e.name,this.portrait=n.portrait||e.portrait,this.ch=is(e.palette||{},{simple:!0,scale:e.scale||1}),this.root=this.ch.root,this.root.position.copy(this.pos),t.group.add(this.root),this.icon=new Mr(new ws({map:Ah("?","#f2c14e"),depthTest:!1,transparent:!0})),this.icon.scale.set(.7,.7,.7),this.icon.position.y=2.4*(e.scale||1),this.icon.visible=!1,this.icon.renderOrder=20,this.root.add(this.icon),this.marker=null,this.pose="idle",this.hw=.3,this.h=1.8*(e.scale||1),this.R=si(Rh*977),this.windup=0,this.fsm=new Qi(this,ig,n.state||(this.hostile&&this.patrol?"patrol":"idle")),this.flash=0,this.alive=!0,this.downTime=0,this.senseVisible=!1}get downed(){return this.fsm.is("down","bound")}setIcon(t){if(t===this._icon)return;if(this._icon=t,!t){this.icon.visible=!1;return}let e={sus:["?","#f2c14e"],alert:["!","#ff3b3b"],talk:["\u2026","#9fe0d8"],target:["\u2605","#ff2fb3"],hostage:["!","#5fd0ff"]}[t];this.icon.material.map=Ah(e[0],e[1]),this.icon.material.needsUpdate=!0,this.icon.visible=!0}dist(t){return Math.hypot(t.x-this.pos.x,t.z-this.pos.z)}faceTo(t,e,i=8){let n=Math.atan2(t.x-this.pos.x,t.z-this.pos.z);this.yaw=As(this.yaw,n,i,e)}moveTo(t,e,i,n=.8){let r=t.x-this.pos.x,o=t.z-this.pos.z,a=Math.hypot(r,o);return a<n?(this.vel.x*=.5,this.vel.z*=.5,!0):(this.vel.x=r/a*e,this.vel.z=o/a*e,this.faceTo(t,i),!1)}canSee(t,e=1.6){let i=this.type.vision||{range:22,fov:70},n=t.x-this.pos.x,r=t.z-this.pos.z,o=t.y-this.pos.y,a=Math.hypot(n,r);if(a>i.range*(o>4?.7:1))return 0;let l=Math.sin(this.yaw),c=Math.cos(this.yaw),h=(n*l+r*c)/(a||1),d=i.fov*Math.PI/180/2;if(a>2.5&&h<Math.cos(d)||o>3.5&&Math.atan2(o,a)>.6)return 0;let u=new R(this.pos.x,this.pos.y+e,this.pos.z),f=new R(t.x,t.y+1,t.z);return this.game.world.collision.lineOfSight(u,f)?1-a/i.range:0}hit(t,e,i="melee"){if(!(!this.alive||this.downed)){if(this.hp-=t,this.flash=.15,!this.aware&&this.hostile&&(this.aware=!0,this.alertAllies()),this.hp<=0){this.knockout(i);return}if(this.stun=Math.max(this.stun,i==="pod"?2.5:.45),e){let n=this.pos.x-e.x,r=this.pos.z-e.z,o=Math.hypot(n,r)||1;this.vel.x=n/o*4,this.vel.z=r/o*4,this.vel.y=2}this.fsm.set("stunned")}}bind(t=1){!this.alive||this.fsm.is("down")||(this.bound+=t,this.flash=.1,!this.aware&&this.hostile&&(this.aware=!0,this.alertAllies()),this.bound>=(this.type.bindHits??2)?(this.fsm.set("bound"),q.emit("npc:defeated",{npc:this,how:"bound"})):(this.stun=Math.max(this.stun,1.2),this.fsm.set("stunned")))}knockout(t="melee"){this.hp=0,this.fsm.set("down"),q.emit("npc:defeated",{npc:this,how:t})}takedown(){this.knockout("takedown"),q.emit("npc:takedown",{npc:this})}alertAllies(){for(let t of this.mgr.list)t!==this&&t.hostile&&t.alive&&!t.downed&&t.dist(this.pos)<22&&(t.aware=!0,t.fsm.is("idle","patrol","suspicious","investigate","search")&&t.fsm.set("combat"));q.emit("npc:alert",{npc:this})}hear(t){!this.hostile||this.downed||this.fsm.is("combat","stunned")||this.dist(t.pos)>t.radius*(this.type.hearing??1)||(this.investigate=t.pos.clone(),this.fsm.set("investigate"))}update(t,e){if(!this.alive)return;this.fsm.update(t),this.stun>0&&(this.stun-=t),this.cool-=t,this.vel.y-=22*t,Wr(this.game.world.collision,this.pos,this.vel,t,this.hw,this.h,{grounded:!0,stepH:.5}),this.pos.y<-20&&(this.pos.copy(this.home),this.vel.set(0,0,0)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;let i=Math.hypot(this.vel.x,this.vel.z);ns(this.ch,this.pose==="auto"||!this.pose?i>3.5?"run":i>.4?"walk":"idle":this.pose,i,t),this.flash>0?(this.flash-=t,this.ch.mat.uniforms.tintAmt.value=.7,this.ch.mat.uniforms.tint.value.set("#ffffff")):this.ch.mat.uniforms.tintAmt.value=this.senseVisible?.35:0,this.senseVisible&&this.flash<=0&&this.ch.mat.uniforms.tint.value.set(this.hostile?"#ff5050":"#5fd0ff")}dispose(){this.mgr.group.remove(this.root),this.alive=!1}},ig={idle:{enter(){this.pose="auto",this.vel.x=this.vel.z=0,this.setIcon(this.talk?"talk":this.tag==="target"?"target":null),this.lookT=0},update(s){this.lookT-=s,this.lookT<=0&&(this.lookT=this.R.range(2,5),this.lookYaw=this.yaw+this.R.range(-1.2,1.2)),this.lookYaw!=null&&(this.yaw=As(this.yaw,this.lookYaw,2,s)),this.vel.x*=.8,this.vel.z*=.8,this.hostile?os.call(this,s):this.role==="civilian"&&this.mgr.panicAt&&this.dist(this.mgr.panicAt)<18&&this.fsm.set("flee")}},patrol:{enter(){this.pose="auto",this.setIcon(null)},update(s){let t=this.patrol;if(!t||!t.length){this.fsm.set("idle");return}let e=t[this.patrolIdx%t.length];this.moveTo(e,1.6,s,.6)&&(this.patrolIdx++,this.waitT=1.5),os.call(this,s)}},suspicious:{enter(){this.setIcon("sus"),q.emit("npc:suspicious",{npc:this})},update(s){let t=this.game.player;this.vel.x*=.85,this.vel.z*=.85,this.faceTo(t.pos,s,4),os.call(this,s),this.suspicion<=.05&&this.fsm.set(this.patrol?"patrol":"idle")}},investigate:{enter(){this.setIcon("sus"),this.invT=0},update(s){if(this.invT+=s,!this.investigate){this.fsm.set("search");return}if(this.moveTo(this.investigate,2.4,s,1)||this.invT>9){this.fsm.set("search");return}os.call(this,s)}},search:{enter(){this.setIcon("sus"),this.searchT=0},update(s){this.searchT+=s,this.vel.x*=.85,this.vel.z*=.85,this.yaw+=Math.sin(this.searchT*1.3)*s*1.5,os.call(this,s),this.searchT>5&&(this.aware=!1,this.suspicion=0,this.home&&this.fsm.set(this.patrol?"patrol":"return"))}},return:{enter(){this.setIcon(null)},update(s){this.moveTo(this.home,1.6,s,.8)&&this.fsm.set("idle"),os.call(this,s)}},combat:{enter(){this.setIcon("alert"),this.aware=!0,this.lostT=0,this.attackT=0,this.windup=0,q.emit("npc:combat",{npc:this})},update(s){let t=this.game.player,e=this.type,i=this.dist(t.pos),n=this.canSee(t.pos)>0||i<3;if(this.lostT=n?0:this.lostT+s,this.lostT>6){this.investigate=t.pos.clone(),this.fsm.set("search");return}this.faceTo(t.pos,s,10);let r=e.weapon==="gun",o=r?13:1.5;if(this.windup>0){this.windup-=s,this.vel.x*=.7,this.vel.z*=.7,this.pose=r?"aim":"punch",this.windup<=0&&(r?this.mgr.game.combat.enemyShoot(this,t):i<2.3&&Math.abs(t.pos.y-this.pos.y)<1.6&&this.mgr.game.combat.enemyMelee(this,t),this.cool=r?this.R.range(1.6,2.6):this.R.range(1,1.8));return}if(this.pose="auto",r){if(i>o+4)this.moveTo(t.pos,3.2,s,o);else if(i<o-5){let a=this.pos.x-t.pos.x,l=this.pos.z-t.pos.z,c=Math.hypot(a,l)||1;this.vel.x=a/c*2.5,this.vel.z=l/c*2.5}else this.vel.x*=.8,this.vel.z*=.8;this.cool<=0&&n&&i<34&&this.mgr.attackToken(this)&&(this.windup=.65,q.emit("npc:telegraph",{npc:this,kind:"shot"}))}else i>o?this.moveTo(t.pos,e.speed||4.6,s,o):(this.vel.x*=.6,this.vel.z*=.6),this.cool<=0&&i<2.6&&this.mgr.attackToken(this)&&(this.windup=.5,q.emit("npc:telegraph",{npc:this,kind:"melee"}))}},stunned:{enter(){this.pose="stunned",this.setIcon(null)},update(s){this.vel.x*=.9,this.vel.z*=.9,this.stun<=0&&this.fsm.set(this.hostile?"combat":"flee")}},bound:{enter(){this.pose="webbed",this.setIcon(null),this.vel.set(0,0,0),this.ch.mat.uniforms.tint.value.set("#e8f6f0")},update(){this.ch.mat.uniforms.tintAmt.value=.45,this.ch.mat.uniforms.tint.value.set("#e8f6f0"),this.vel.x=0,this.vel.z=0}},down:{enter(){this.pose="down",this.setIcon(null),this.vel.x=this.vel.z=0},update(){this.vel.x=0,this.vel.z=0}},flee:{enter(){this.pose="auto",this.setIcon(null),this.fleeT=0},update(s){this.fleeT+=s;let t=this.mgr.panicAt||this.game.player.pos,e=this.pos.x-t.x,i=this.pos.z-t.z,n=Math.hypot(e,i)||1;this.vel.x=e/n*5,this.vel.z=i/n*5,this.yaw=Math.atan2(e,i),this.fleeT>6&&this.fsm.set("idle")}},cower:{enter(){this.pose="cower",this.setIcon(this.role==="hostage"?"hostage":this.talk?"talk":null)},update(){this.vel.x=this.vel.z=0}},follow:{enter(){this.pose="auto"},update(s){let t=this.game.player.pos;this.dist(t)>3?this.moveTo(t,this.dist(t)>8?5:2.4,s,2.5):(this.vel.x*=.8,this.vel.z*=.8,this.faceTo(t,s,3))}},cheer:{enter(){this.pose="cheer",this.setIcon(this.talk?"talk":null)},update(s){this.vel.x=this.vel.z=0,this.faceTo(this.game.player.pos,s,3)}}};function os(s){let t=this.game.player;if(this.game.stealthOff)return;let e=this.canSee(t.pos);if(e>0){let i=.6+e*2.4;t.crouch&&(i*=.45),t.pos.y-this.pos.y>3&&(i*=.35),t.fsm.is("swing","zip")&&(i*=1.5),this.suspicion=jt(this.suspicion+i*s*(this.type.alertness??1),0,1),this.suspicion>.3&&this.fsm.is("idle","patrol","return")&&this.fsm.set("suspicious"),this.suspicion>=1&&(this.fsm.set("combat"),this.alertAllies())}else this.suspicion=jt(this.suspicion-s*.25,0,1);if(!this._bodyCheckT||(this._bodyCheckT-=s)<=0){this._bodyCheckT=.5;for(let i of this.mgr.list)i!==this&&i.hostile&&i.downed&&!i.discovered&&i.dist(this.pos)<14&&this.canSee(i.pos,1.6)>0&&(i.discovered=!0,this.investigate=i.pos.clone(),this.suspicion=Math.max(this.suspicion,.7),this.fsm.set("investigate"),q.emit("npc:bodyfound",{npc:this}))}}var Zr=class{constructor(t){this.game=t,this.list=[],this.group=new je,this.tokens=0,this.tokenHolders=new Set,this.panicAt=null}attach(t){t.add(this.group)}spawn(t,e,i={}){let n=this.game.registry.get("npcTypes",t)||this.game.registry.get("npcTypes","thug"),r=new wl(this,n,e,i);return this.list.push(r),r}remove(t){t.dispose();let e=this.list.indexOf(t);e>=0&&this.list.splice(e,1)}clear(){for(let t of this.list)t.dispose();this.list.length=0}byTag(t){return this.list.filter(e=>e.tag===t)}byId(t){return this.list.find(e=>e.id===t)}attackToken(t){for(let e of this.tokenHolders)(!e.alive||e.downed||!e.fsm.is("combat")||e.windup<=0)&&this.tokenHolders.delete(e);return this.tokenHolders.size>=2?!1:(this.tokenHolders.add(t),!0)}update(t,e){let i=this.game.renderer.camera.position;for(let n=this.list.length-1;n>=0;n--){let r=this.list[n],o=r.dist(i)>140;r.root.visible=!o,!(o&&!r.important)&&r.update(t,e)}this.panicT>0&&(this.panicT-=t,this.panicT<=0&&(this.panicAt=null))}onNoise(t){for(let e of this.list)e.hear(t)}panic(t,e=6){this.panicAt=t.clone(),this.panicT=e,this.game.world&&(this.game.world.panic={x:t.x,z:t.z}),setTimeout(()=>{this.game.world&&(this.game.world.panic=null)},e*1e3)}hostilesNear(t,e){return this.list.filter(i=>i.hostile&&i.alive&&!i.downed&&i.dist(t)<e)}};var $r=class{constructor(t,e,i){this.game=t,this.def=e,this.arena=i.clone(),this.hp=e.hp||8,this.maxHp=this.hp,this.alive=!0,this.vulnerable=!1,this.hitsThisStagger=0,this.pos=i.clone().add(new R(0,16,-20)),this.vel=new R,this.yaw=0,this.orbitA=0,this.ch=is(e.palette,{scale:1.1}),this.root=this.ch.root;let n=new ne;n.tri([0,0,1.4],[-2.4,0,-.9],[2.4,0,-.9],[0,1,0],X(e.palette.secondary),[0,0],[0,0],[0,0],[0,0,0,0]),n.tri([0,-.02,1.4],[2.4,-.02,-.9],[-2.4,-.02,-.9],[0,-1,0],X(e.palette.primary),[0,0],[0,0],[0,0],[0,0,0,0]),n.cbox(0,-.15,-.6,.6,.3,.9,X("#333")),n.cbox(0,-.15,-1.1,.4,.4,.2,X("#ff8a2a")),this.kite=new Ht(n.build(),Se({atlas:!1})),this.kite.position.y=2.25,this.root.add(this.kite),t.world.dynamic.add(this.root),this.fsm=new Qi(this,ng,"intro"),this.bombT=2,this.summoned=0}get phase(){return this.hp>this.maxHp*.6?1:this.hp>this.maxHp*.25?2:3}tethered(t=1){this.fsm.is("fly","dive","recover")&&(this.game.audio.play("zip"),q.emit("boss:tethered"),this.fsm.set("yanked"))}hit(t){if(this.vulnerable){if(this.hp-=t,this.hitsThisStagger++,this.ch.mat.uniforms.tintAmt.value=.8,setTimeout(()=>this.ch.mat.uniforms.tintAmt.value=0,120),this.game.audio.play("punch"),q.emit("boss:hit",{hp:this.hp}),this.hp<=0){this.fsm.set("defeated");return}this.hitsThisStagger>=3&&this.fsm.set("escape")}}update(t){if(!this.alive)return;this.fsm.update(t),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;let e=this.fsm.is("fly","dive","escape","intro","recover");this.kite.visible=e,ns(this.ch,this.pose||"glide",2,t)}faceTo(t,e){this.yaw=As(this.yaw,Math.atan2(t.x-this.pos.x,t.z-this.pos.z),6,e)}dispose(){this.game.world.dynamic.remove(this.root),this.alive=!1}},ng={intro:{enter(){this.pose="glide",this.game.audio.play("laugh")},update(s){this.pos.y+=Math.sin(this.fsm.time*3)*s,this.faceTo(this.game.player.pos,s),this.fsm.time>2.5&&this.fsm.set("fly")}},fly:{enter(){this.pose="glide",this.vulnerable=!1,this.flyT=0},update(s){let t=this.game.player;this.flyT+=s;let e=this.phase,i=22+e*2,n=13+Math.sin(this.flyT*.7)*4;this.orbitA+=s*(.35+e*.08);let r=new R(this.arena.x+Math.cos(this.orbitA)*i,this.arena.y+n,this.arena.z+Math.sin(this.orbitA)*i);if(this.pos.lerp(r,1-Math.exp(-2*s)),this.faceTo(t.pos,s),this.bombT-=s,this.bombT<=0){this.bombT=e===1?2.6:e===2?2:1.6;let o=e===1?1:2;for(let a=0;a<o;a++){let l=t.pos.clone().addScaledVector(t.vel,.9);l.x+=(Math.random()-.5)*4*a,l.z+=(Math.random()-.5)*4*a;let c=this.game.world.collision.raycast(l.x,l.y+3,l.z,0,-1,0,30);c&&(l.y=c.point[1]),this.game.combat.bomb(this.pos.clone().setY(this.pos.y+1),l,{time:1.4,color:"#a24bd6"})}Math.random()<.3&&this.game.audio.play("laugh",{vol:.6}),q.emit("boss:bomb")}e>=2&&this.summoned<e-1&&(this.summoned++,q.emit("boss:summon",{count:2+this.summoned})),e===3&&this.flyT>5&&this.fsm.set("dive")}},dive:{enter(){this.diveFrom=this.pos.clone(),this.diveTo=this.game.player.pos.clone(),this.diveTo.y+=1,this.pose="glide",this.game.combat.dangerT=1,q.emit("combat:danger",{boss:!0}),this.game.fx.marker(this.game.player.pos,.9,2.5),this.game.audio.play("alert")},update(s){let t=this.fsm.time;if(t<.8){this.faceTo(this.diveTo,s),this.pos.y+=s*2;return}let e=Math.min(1,(t-.8)/.5);this.pos.lerpVectors(this.diveFrom,this.diveTo,e);let i=this.game.player;e>.6&&this.pos.distanceTo(i.pos.clone().setY(i.pos.y+1))<2.4&&!this.hitDone&&(this.hitDone=!0,this.game.combat.iframes<=0&&(i.hurt(22,"boss"),i.vel.y=8,i.fsm.set("air"),this.game.rig.addShake(.7),this.game.audio.play("hurt"))),e>=1&&(this.hitDone=!1,this.fsm.set("recover"))}},recover:{enter(){this.pose="stunned"},update(s){this.pos.y+=s*1.5,this.fsm.time>1.6&&this.fsm.set("fly")}},yanked:{enter(){this.pose="air",this.from=this.pos.clone();let s=this.game.player,t=this.game.world.roofAt(s.pos.x,s.pos.z);this.to=s.pos.clone().add(s.fwd().multiplyScalar(4)),this.to.y=t?t.y:s.pos.y;let e=this.game.world.collision.raycast(this.to.x,this.to.y+4,this.to.z,0,-1,0,40);e&&Math.abs(e.point[1]-s.pos.y)<1.5?this.to.y=e.point[1]:(this.to.copy(s.pos).add(s.fwd().multiplyScalar(1.8)),this.to.y=s.pos.y),this.game.combat.word("YANK!",this.pos)},update(s){let t=Math.min(1,this.fsm.time/.6);this.pos.lerpVectors(this.from,this.to,t),this.pos.y+=Math.sin(t*Math.PI)*3,t>=1&&(this.game.audio.play("land"),this.game.rig.addShake(.4),this.fsm.set("dazed"))}},dazed:{enter(){this.vulnerable=!0,this.hitsThisStagger=0,this.pose="stunned",q.emit("boss:vulnerable")},exit(){this.vulnerable=!1},update(s){this.faceTo(this.game.player.pos,s),this.fsm.time>4.5&&this.fsm.set("escape")}},escape:{enter(){this.pose="glide",this.game.audio.play("laugh",{vol:.8}),this.from=this.pos.clone()},update(s){this.pos.y+=s*9,this.fsm.time>1.4&&this.fsm.set("fly")}},defeated:{enter(){this.pose="down",this.vulnerable=!1,this.game.audio.play("explosion"),this.game.fx.burst(this.pos,"#a24bd6",30),q.emit("boss:defeated",{boss:this})},update(){}}};var as=class{constructor(t,e,i=16){this.factory=t,this.reset=e,this.free=[],this.active=[];for(let n=0;n<i;n++)this.free.push(t())}get(){let t=this.free.length?this.free.pop():this.factory();return this.active.push(t),t}release(t){let e=this.active.indexOf(t);e>=0&&(this.active[e]=this.active[this.active.length-1],this.active.pop()),this.reset&&this.reset(t),this.free.push(t)}each(t){for(let e=this.active.length-1;e>=0;e--)t(this.active[e],e)}releaseAll(){for(;this.active.length;)this.release(this.active[this.active.length-1])}};var sg={punch:["POW!","WHAM!","BIFF!","SOCK!"],kick:["KRAK!","THUD!"],takedown:["BONK!","KAYO!"],bind:["SNAP!","TWANG!"],pod:["SPLUT!","GLOMP!"],line:["ZZIP!"],boom:["KA-BOOM!","BLAM!"],shot:["BLAM!","PEW!"]},Kr=class{constructor(t){this.game=t,this.scene=null,this.gadgetIdx=0,this.ammo=12,this.maxAmmo=12,this.aiming=!1,this.combo=0,this.comboT=0,this.iframes=0,this.dangerT=0,this.senseT=0,this.senseCool=0,this.reloadT=0,this.triT=0,this.interactables=[],this.prompt=null,this.lastBossHit=0,this.targets=[];let e=new Ni(1,1,1);e.translate(0,0,.5);let i=new Ye({color:16183775});this.ropePool=new as(()=>{let o=new Ht(e,i);return o.frustumCulled=!1,o.visible=!1,o},o=>{o.visible=!1},6);let n=new ne;n.cbox(0,0,0,.22,.22,.22,X("#ffffff"));let r=n.build();this.projMat=Se({atlas:!1,emissive:1}),this.projPool=new as(()=>{let o=new Ht(r,Se({atlas:!1,emissive:1}));return o.visible=!1,{mesh:o,vel:new R,prev:new R,life:0,kind:"",owner:null,gravity:0,rope:null}},o=>{o.mesh.visible=!1,o.rope&&(this.ropePool.release(o.rope),o.rope=null)},24),this.wordPool=new as(()=>{let o=document.createElement("div");return o.className="pow",document.getElementById("fx").appendChild(o),{el:o,pos:new R,t:0}},o=>{o.el.style.display="none"},10),this.swingRope=null,this.handPos=new R,this._v=new R,this._v2=new R,this.lingerLines=[]}attach(t){this.scene=t;for(let e of[...this.ropePool.free,...this.ropePool.active])t.add(e);for(let e of[...this.projPool.free,...this.projPool.active])t.add(e.mesh)}reset(){this.projPool.releaseAll(),this.ropePool.releaseAll(),this.swingRope=null,this.lingerLines.length=0,this.wordPool.releaseAll(),this.interactables.length=0,this.ammo=this.maxAmmo}get gadgets(){return this.game.save.data.inventory.gadgets.map(t=>this.game.registry.get("gadgets",t)).filter(Boolean)}get gadget(){let t=this.gadgets;return t[this.gadgetIdx%Math.max(1,t.length)]}addInteractable(t){return this.interactables.push(t),t}removeInteractable(t){let e=this.interactables.indexOf(t);e>=0&&this.interactables.splice(e,1)}word(t,e){let i=sg[t]||[t],n=this.wordPool.get();n.el.textContent=i[Math.random()*i.length|0],n.el.style.display="block",n.pos.copy(e),n.pos.y+=1.6,n.t=0,n.el.style.setProperty("--rot",(Math.random()*24-12).toFixed(1)+"deg"),n.el.dataset.kind=t}update(t){let e=this.game,i=e.player,n=e.audio;this.iframes-=t,this.dangerT-=t,this.comboT-=t,this.comboT<=0&&(this.combo=0),this.senseT-=t,this.senseCool-=t;let r=e.state==="play"&&!i.fsm.is("locked");r&&j.pressed("l3")&&this.senseCool<=0&&i.abilities.gadgets!==!1&&(this.senseT=6,this.senseCool=9,n.play("sense"),q.emit("combat:sense"));let o=this.senseT>0;for(let h of e.npcs.list)h.senseVisible=o&&h.hostile&&h.alive&&!h.downed&&h.dist(i.pos)<70;if(e.renderer.postMat.uniforms.senseAmt.value=jt(this.senseT>5.6?(6-this.senseT)*2.5:this.senseT/1.5,0,1)*.8,r&&this.dangerT>0&&j.pressed("circle")&&!i.fsm.is("swing","climb","hang")){j.consume("circle"),this.iframes=.5,this.dangerT=0;let h=i.right(),d=Math.random()<.5?-1:1;i.vel.x=h.x*d*9,i.vel.z=h.z*d*9,i.vel.y=3,n.play("whiff"),q.emit("combat:dodge")}this.aiming=r&&j.down("l2")&&i.abilities.gadgets!==!1&&!i.aimZipPoint,r&&i.abilities.gadgets!==!1&&(j.down("triangle")&&(this.triT+=t,this.triT>.45&&!this._invOpened&&(this._invOpened=!0,q.emit("ui:inventory"))),j.released("triangle")&&(this._invOpened||this.cycleGadget(1),this._invOpened=!1,this.triT=0),j.pressed("right")&&this.cycleGadget(1),j.pressed("left")&&this.cycleGadget(-1),j.pressed("r1")&&this.fireGadget()),this.updatePrompt(),r&&j.pressed("square")&&this.square(),r&&j.down("square")&&!this.prompt&&this.ammo<this.maxAmmo?(this.reloadT+=t,this.reloadT>.8&&(this.ammo=this.maxAmmo,this.reloadT=0,n.play("ui_ok"),q.emit("combat:reload"),this.word("RELOAD!",i.pos))):this.reloadT=0,this.projPool.each(h=>this.updateProjectile(h,t)),this.updateRopes(t);let a=e.renderer.camera,l=window.innerWidth,c=window.innerHeight;this.wordPool.each(h=>{if(h.t+=t,h.t>.9){this.wordPool.release(h);return}let d=this._v.copy(h.pos);if(d.y+=h.t*.8,d.project(a),d.z>1){h.el.style.display="none";return}h.el.style.display="block",h.el.style.transform=`translate(${((d.x+1)/2*l).toFixed(0)}px, ${((1-d.y)/2*c).toFixed(0)}px) translate(-50%,-50%) rotate(var(--rot)) scale(${(1+Math.min(h.t*6,1)*.3-h.t*.3).toFixed(2)})`,h.el.style.opacity=h.t>.6?(1-(h.t-.6)/.3).toFixed(2):"1"})}cycleGadget(t){let e=this.gadgets.length;e&&(this.gadgetIdx=(this.gadgetIdx+t+e)%e,this.game.audio.play("ui_click"),q.emit("combat:gadget",this.gadget))}updatePrompt(){let t=this.game,e=t.player,i=null,n=1e9;for(let r of this.interactables){if(r.enabled===!1)continue;let o=r.pos.distanceTo(e.pos);o<(r.radius||2.2)&&o<n&&(n=o,i={kind:"use",label:r.label||"USE",it:r})}for(let r of t.npcs.list){if(r.hostile||!r.alive||!r.talk)continue;let o=r.dist(e.pos);o<2.8&&Math.abs(r.pos.y-e.pos.y)<2&&o<n&&(n=o,i={kind:"talk",label:"TALK",npc:r})}if(!i){let r=this.findTakedown();r&&(i={kind:"takedown",label:r.perch?"PERCH K.O.":"TAKEDOWN",npc:r.npc,perch:r.perch})}this.prompt=i,t.overlay.setHint("square",i?i.label:t.npcs.hostilesNear(e.pos,7).length||t.boss&&t.boss.vulnerable?"STRIKE":"ACT")}findTakedown(){let t=this.game.player,e=null,i=1e9,n=t.fwd();for(let r of this.game.npcs.list){if(!r.hostile||!r.alive||r.downed||r.fsm.is("combat"))continue;let o=r.pos.x-t.pos.x,a=r.pos.z-t.pos.z,l=t.pos.y-r.pos.y,c=Math.hypot(o,a),h=(o*n.x+a*n.z)/(c||1),d=Math.sin(r.yaw),u=Math.cos(r.yaw),f=((t.pos.x-r.pos.x)*d+(t.pos.z-r.pos.z)*u)/(c||1)<.1;c<2.4&&Math.abs(l)<1.5&&f&&c<i?(e={npc:r,perch:!1},i=c):l>2.5&&l<18&&c<10&&h>.55&&c<i&&(e={npc:r,perch:!0},i=c)}return e}square(){let t=this.game,e=t.player,i=this.prompt;if(i&&i.kind==="use"){j.consume("square"),i.it.onUse&&i.it.onUse(i.it),t.audio.play("ui_click");return}if(i&&i.kind==="talk"){j.consume("square"),q.emit("npc:talk",{npc:i.npc});return}if(i&&i.kind==="takedown"){this.takedown(i.npc,i.perch);return}if(t.boss&&t.boss.vulnerable&&t.boss.pos.distanceTo(e.pos)<4){this.punchFX(t.boss.pos),t.boss.hit(1);return}let n=e.lookDir(this._v),r=null,o=-1e9;for(let c of t.npcs.list){if(!c.hostile||!c.alive||c.downed)continue;let h=c.pos.x-e.pos.x,d=c.pos.z-e.pos.z,u=c.pos.y-e.pos.y,f=Math.hypot(h,d);if(f>7||Math.abs(u)>2.5)continue;let g=(h*n.x+d*n.z)/(f||1);if(f>2&&g<.35)continue;let y=g*3-f;y>o&&(o=y,r=c)}if(!r){t.audio.play("whiff"),e.lock(.2,"punch"),q.emit("combat:whiff");return}let a=r.dist(e.pos);if(a>1.6){let c=r.pos.x-e.pos.x,h=r.pos.z-e.pos.z;e.vel.x=c/a*Math.min(20,a*8),e.vel.z=h/a*Math.min(20,a*8)}e.yaw=Math.atan2(-(r.pos.x-e.pos.x),-(r.pos.z-e.pos.z)),this.combo++,this.comboT=1.2;let l=this.combo%3===0;e.lock(.22,l?"kick":"punch"),setTimeout(()=>{!r.alive||r.downed||(r.hit(l?2:1,e.pos,l?"kick":"melee"),this.punchFX(r.pos,l?"kick":"punch"),t.player.emitNoise(10))},110)}punchFX(t,e="punch"){this.game.audio.play("punch"),this.word(e,t),this.game.rig.addShake(.25),rg(this.game,.05)}takedown(t,e){let i=this.game,n=i.player,r=n.pos.clone(),o=Math.sin(t.yaw),a=Math.cos(t.yaw),l=new R(t.pos.x-o*.9,t.pos.y,t.pos.z-a*.9);e&&(i.audio.play("zip"),this.addLingerLine(r.clone().setY(r.y+1.2),t.pos.clone().setY(t.pos.y+1.5),.4)),n.lock(e?.7:.5,"punch"),n.lockPose="takedown";let c=e?.45:.18,h=0;t.stun=99,t.fsm.set("stunned");let d=()=>{h+=1/60;let u=Math.min(1,h/c);n.pos.lerpVectors(r,l,u),e&&(n.pos.y+=Math.sin(u*Math.PI)*2),u<1?requestAnimationFrame(d):(t.takedown(),i.audio.play("takedown"),this.word("takedown",t.pos),i.rig.addShake(.35),n.vel.set(0,0,0),n.emitNoise(e?6:3),i.save.data.stats.takedowns++)};n.yaw=Math.atan2(-(t.pos.x-n.pos.x),-(t.pos.z-n.pos.z)),requestAnimationFrame(d)}fireGadget(){let t=this.game,e=t.player,i=this.gadget;if(!i)return;if(this.ammo<(i.cost??1)){t.audio.play("ui_back"),this.word("EMPTY!",e.pos);return}this.ammo-=i.cost??1;let n=e.eye(new R),r=e.lookDir(new R);if(!this.aiming){let a=null,l=.94,c=t.npcs.list.filter(h=>h.hostile&&h.alive&&!h.downed).map(h=>h.pos.clone().setY(h.pos.y+1.1));t.boss&&t.boss.alive&&c.push(t.boss.pos.clone().setY(t.boss.pos.y+1));for(let h of c){let d=h.clone().sub(n),u=d.length();if(u>40)continue;d.divideScalar(u);let f=d.dot(r);f>l&&(l=f,a=d)}a&&r.copy(a)}let o=this.projPool.get();o.mesh.parent||this.scene.add(o.mesh),this.handWorld(this.handPos),o.mesh.position.copy(this.handPos),o.prev.copy(this.handPos),o.vel.copy(r).multiplyScalar(i.speed||45),o.life=i.life||1.2,o.kind=i.effect,o.gadget=i,o.owner="player",o.gravity=i.gravity||0,o.mesh.material.uniforms.tint.value.set(i.color||"#ffffff"),o.mesh.material.uniforms.tintAmt.value=1,o.mesh.visible=!0,o.mesh.scale.setScalar(i.size||1),(i.effect==="bind"||i.effect==="pull")&&(o.rope=this.ropePool.get(),o.rope.parent||this.scene.add(o.rope),o.rope.visible=!0),t.audio.play(i.sound||"thwip"),q.emit("combat:fire",i),e.emitNoise(3),t.viewmodel&&t.viewmodel.kick("R")}handWorld(t){let e=this.game,i=e.viewmodel;if(e.rig.mode==="fp"&&i)return t.set(.2,-.17,-.55),e.renderer.camera.localToWorld(t);let n=e.player,r=n.right();return t.set(n.pos.x+r.x*.35,n.pos.y+1.35,n.pos.z+r.z*.35)}updateProjectile(t,e){let i=this.game;t.life-=e,t.prev.copy(t.mesh.position),t.vel.y-=t.gravity*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.rotation.x+=e*12,t.mesh.rotation.y+=e*9,t.rope&&(this.handWorld(this.handPos),this.stretch(t.rope,this.handPos,t.mesh.position));let n=t.prev,r=t.mesh.position,o=this._v2.subVectors(r,n),a=o.length();if(a>0){if(t.owner==="player"){for(let c of i.npcs.list)if(!(!c.hostile||!c.alive||c.downed)&&Jr(n,o,a,c.pos.x,c.pos.y+1,c.pos.z,.75)){this.impact(t,r,c);return}if(i.boss&&i.boss.alive&&Jr(n,o,a,i.boss.pos.x,i.boss.pos.y+1,i.boss.pos.z,1.4)){this.impact(t,r,null,i.boss);return}for(let c of this.targets)if(Jr(n,o,a,c.pos.x,c.pos.y+1.2,c.pos.z,c.radius)){c.onHit(t.kind),this.projPool.release(t);return}}else{let c=i.player;if(Jr(n,o,a,c.pos.x,c.pos.y+1,c.pos.z,.7)){this.iframes<=0&&(c.hurt(t.damage||10,"shot"),i.audio.play("hurt"),i.rig.addShake(.4)),this.projPool.release(t);return}}o.divideScalar(a);let l=i.world.collision.raycast(n.x,n.y,n.z,o.x,o.y,o.z,a,c=>!c.trigger&&!c.seeThrough);if(l){this.impact(t,new R(...l.point));return}}t.life<=0&&(t.kind==="boom"?this.impact(t,t.mesh.position.clone()):this.projPool.release(t))}impact(t,e,i,n){let r=this.game,o=t.gadget||{};switch(t.kind){case"bind":i&&(i.bind(o.bind||1),this.word("bind",i.pos),r.audio.play("pod",{rate:1.3})),n&&n.tethered(),t.rope&&this.addLingerLine(this.handWorld(new R),e,.25);break;case"aoe":r.audio.play("pod"),this.word("pod",e);for(let a of r.npcs.list)a.hostile&&a.alive&&!a.downed&&a.pos.distanceTo(e)<(o.radius||2.8)&&a.bind(o.bind||1);n&&n.tethered(.5),r.fx.burst(e,"#e8f6f0",14);break;case"noise":r.audio.play("chirp"),r.fx.burst(e,"#f2c14e",6),r.npcs.onNoise({pos:e.clone(),radius:o.radius||20,source:"decoy"}),this.word("CHIRP!",e),q.emit("combat:decoy",{pos:e});break;case"boom":{r.audio.play("explosion"),r.fx.burst(e,"#ff8a2a",22),this.word("boom",e),r.rig.addShake(.6);let a=r.player;if(a.pos.distanceTo(e)<(t.radius||4.5)&&this.iframes<=0){a.hurt(t.damage||18,"boom");let c=a.pos.clone().sub(e).normalize();a.vel.addScaledVector(c,10),a.vel.y=6,a.fsm.is("swing")||a.fsm.set("air")}break}default:break}this.projPool.release(t)}addLingerLine(t,e,i){let n=this.ropePool.get();n.parent||this.scene.add(n),n.visible=!0,this.stretch(n,t,e),this.lingerLines.push({r:n,t:i})}stretch(t,e,i){let n=e.distanceTo(i);t.position.copy(e),t.scale.set(.06,.06,Math.max(.01,n)),t.lookAt(i)}updateRopes(t){let e=this.game,i=e.player;i.ropeActive?(this.swingRope||(this.swingRope=this.ropePool.get(),this.swingRope.parent||this.scene.add(this.swingRope),this.swingRope.visible=!0),this.handWorld(this.handPos),this.stretch(this.swingRope,this.handPos,i.anchor)):this.swingRope&&(this.ropePool.release(this.swingRope),this.swingRope=null);for(let n=this.lingerLines.length-1;n>=0;n--){let r=this.lingerLines[n];r.t-=t,r.t<=0&&(this.ropePool.release(r.r),this.lingerLines.splice(n,1))}}telegraph(t){t.pos.distanceTo(this.game.player.pos)<30&&(this.dangerT=.75,q.emit("combat:danger",{npc:t}))}enemyShoot(t,e){let i=this.game,n=this.projPool.get();n.mesh.parent||this.scene.add(n.mesh);let r=t.pos.clone();r.y+=1.4;let o=e.pos.clone();o.y+=1,o.addScaledVector(e.vel,.25),o.x+=(Math.random()-.5)*1.2,o.z+=(Math.random()-.5)*1.2;let a=o.sub(r).normalize();n.mesh.position.copy(r),n.prev.copy(r),n.vel.copy(a).multiplyScalar(48),n.life=1.5,n.kind="bullet",n.owner="enemy",n.gravity=0,n.damage=t.type.damage||9,n.gadget=null,n.mesh.material.uniforms.tint.value.set("#ffe066"),n.mesh.material.uniforms.tintAmt.value=1,n.mesh.scale.set(.5,.5,2.5),n.mesh.visible=!0,n.mesh.lookAt(r.clone().add(a)),i.audio.play("gunshot",{vol:jt(1-t.dist(e.pos)/60,.15,1)}),i.fx.burst(r,"#ffe066",4)}enemyMelee(t,e){let i=this.game;if(this.iframes>0){this.word("MISS!",e.pos);return}e.hurt(t.type.damage||11,"melee"),i.audio.play("punch",{rate:.8}),i.audio.play("hurt"),i.rig.addShake(.5);let n=e.pos.x-t.pos.x,r=e.pos.z-t.pos.z,o=Math.hypot(n,r)||1;e.vel.x+=n/o*6,e.vel.z+=r/o*6}bomb(t,e,i={}){let n=this.game,r=this.projPool.get();r.mesh.parent||this.scene.add(r.mesh);let o=i.time||1.3,a=14,l=new R((e.x-t.x)/o,(e.y-t.y+.5*a*o*o)/o,(e.z-t.z)/o);r.mesh.position.copy(t),r.prev.copy(t),r.vel.copy(l),r.life=o+.05,r.kind="boom",r.owner="enemy",r.gravity=a,r.damage=i.damage||18,r.radius=i.radius||4.5,r.gadget=null,r.mesh.material.uniforms.tint.value.set(i.color||"#a24bd6"),r.mesh.material.uniforms.tintAmt.value=1,r.mesh.scale.setScalar(2.2),r.mesh.visible=!0,n.fx.marker(e,o,r.radius)}};function Jr(s,t,e,i,n,r,o){let a=i-s.x,l=n-s.y,c=r-s.z,h=(a*t.x+l*t.y+c*t.z)/(e*e);h=Math.max(0,Math.min(1,h));let d=s.x+t.x*h-i,u=s.y+t.y*h-n,f=s.z+t.z*h-r;return d*d+u*u+f*f<o*o}function rg(s,t){s.hitstop=Math.max(s.hitstop||0,t)}var jr=class{constructor(t){this.game=t,this.active=null,this.stepIdx=-1,this.step=null,this.ctx=null,this.spawned=[],this.steps={...og},this.offs=[]}registerStep(t,e){this.steps[t]=e}loc(t){let e=this.game.world.data;if(!t)return null;if(Array.isArray(t))return new R(...t);if(t.isVector3)return t.clone();if(t.pos)return new R(...t.pos);if(t.landmark){let i=e.landmarks[t.landmark];if(!i)return console.warn("no landmark",t.landmark),this.game.player.pos.clone();let n=t.key&&i[t.key]?i[t.key].clone():i.pos.clone();if(t.offset&&n.add(new R(...t.offset)),t.ground){let r=this.game.world.collision.raycast(n.x,n.y+50,n.z,0,-1,0,120);r&&(n.y=r.point[1])}return n}if(t.npc){let i=this.game.npcs.byId(t.npc);return i?i.pos.clone():null}if(t.relative){let i=this.game.player,n=i.fwd();return i.pos.clone().add(new R(n.x*t.relative[2],t.relative[1],n.z*t.relative[2]))}return null}start(t,e={}){this.stop(!1),this.active=t,this.stepIdx=(e.startAt||0)-1,this.opts=e,t.abilities&&Object.assign(this.game.player.abilities,t.abilities),q.emit("mission:start",t),this.next()}stop(t){this.step&&this.impl&&this.impl.end&&this.impl.end.call(this,this.step,this.ctx);for(let e of this.offs)e();this.offs=[],this.cleanupSpawns(),this.active=null,this.step=null,this.impl=null,this.game.fx.setBeacon(null),this.game.hud.setObjective(null),t&&q.emit("mission:failed")}cleanupSpawns(){for(let t of this.spawned)this.game.npcs.remove(t);this.spawned=[];for(let t of this.items||[])this.game.combat.removeInteractable(t);this.items=[]}next(){this.step&&this.impl&&this.impl.end&&this.impl.end.call(this,this.step,this.ctx);for(let e of this.offs)e();this.offs=[],this.stepIdx++;let t=this.active;if(t){if(this.stepIdx>=t.steps.length){this.complete();return}if(this.step=t.steps[this.stepIdx],this.impl=this.steps[this.step.type],!this.impl){console.warn("Unknown step type",this.step.type),this.next();return}if(this.ctx={t:0,done:!1},this.game.fx.setBeacon(null),this.game.hud.setObjective(this.step.text||null,this.step.sub),this.step.thought&&this.game.dialogue.thought(this.step.thought),this.impl.start&&this.impl.start.call(this,this.step,this.ctx),this.opts.story&&(this.game.save.data.story.step=this.stepIdx,this.game.save.write()),this.step.checkpoint){let e=this.game,i=this.step.at?this.loc(this.step.at):e.player.pos.clone();e.checkpoint={pos:i,yaw:e.player.yaw}}}}on(t,e){this.offs.push(q.on(t,e))}done(){this.ctx&&!this.ctx.done&&(this.ctx.done=!0,this.game.audio.play("ui_ok"),setTimeout(()=>{this.active&&this.next()},this.step.delay??350))}complete(){let t=this.active,e=this.game;this.cleanupSpawns(),this.game.fx.setBeacon(null),e.hud.setObjective(null),this.active=null,this.step=null,this.impl=null;let i=t.reward||{};if(i.unlockSkins)for(let n of i.unlockSkins)e.save.data.unlockedSkins.includes(n)||e.save.data.unlockedSkins.push(n);i.flags&&Object.assign(e.save.data.flags,i.flags),i.rep&&(e.save.data.reputation+=i.rep),e.save.write(),q.emit("mission:complete",t)}update(t){!this.active||!this.step||!this.impl||(this.ctx.t+=t,this.impl.update&&!this.ctx.done&&this.impl.update.call(this,this.step,this.ctx,t),this.ctx.target&&this.game.hud.setWaypoint(this.ctx.target))}spawnGroup(t){let e=[];for(let i of t||[]){let n=this.loc(i.at)||this.game.player.pos.clone(),r=i.count||1;for(let o=0;o<r;o++){let a=o/r*Math.PI*2+(i.angle||0),l=r>1?i.spread??2.5:0,c=n.clone().add(new R(Math.cos(a)*l,.2,Math.sin(a)*l));if(i.ground!==!1){let u=this.game.world.collision.raycast(c.x,c.y+2,c.z,0,-1,0,60);u&&(c.y=u.point[1])}let h=i.patrol?i.patrol.map(u=>n.clone().add(new R(...u))):null,d=this.game.npcs.spawn(i.npc,c,{id:i.id&&r===1?i.id:void 0,yaw:i.yaw??a+Math.PI,state:i.state,patrol:h,tag:i.tag,talk:i.talk,name:i.name,portrait:i.portrait,role:i.role});d.important=!0,this.spawned.push(d),e.push(d)}}return e}},Ch=(s,t,e)=>s.distanceTo(t)<e,og={dialogue:{start(s,t){this.game.dialogue.play(s.id,()=>this.done())}},thought:{start(s,t){this.game.dialogue.thought(s.text,s.time),t.wait=s.time||3.5},update(s,t){t.t>t.wait&&this.done()}},wait:{update(s,t){t.t>(s.time||1)&&this.done()}},reach:{start(s,t){if(t.target=this.loc(s.target),this.game.fx.setBeacon(t.target),s.hint)for(let e in s.hint)this.game.overlay.setHint(e,s.hint[e])},update(s,t){Ch(this.game.player.pos,t.target,s.radius||5)&&this.done()},end(s){if(s.hint)for(let t in s.hint)this.game.overlay.setHint(t,null)}},trigger:{start(s,t){t.target=s.target?this.loc(s.target):null,this.on("trigger:enter",e=>{e.name===s.name&&this.done()})}},action:{start(s,t){t.count=0;let e={jump:"player:jump",crouch:"player:crouch",slide:"player:slide",vault:"player:vault",climb:"player:climb",mantle:"player:mantle",wallrun:"player:wallrun",swing:"player:thwip",zip:"player:ziparrive",ride:"player:ride",sense:"combat:sense",gadget:"combat:fire",grab:"player:grab",release:"player:release",camera:"camera:mode",dodge:"combat:dodge",decoy:"combat:decoy"};if(this.on(e[s.action]||s.action,i=>{s.action==="ride"&&!i||++t.count>=(s.count||1)&&this.done()}),s.hint)for(let i in s.hint)this.game.overlay.setHint(i,s.hint[i]);s.target&&(t.target=this.loc(s.target))},end(s){if(s.hint)for(let t in s.hint)this.game.overlay.setHint(t,null)}},swingDistance:{start(s,t){t.start=this.game.player.swingDistance},update(s,t){let e=this.game.player.swingDistance-t.start;this.game.hud.setObjective(s.text,`${Math.floor(e)} / ${s.meters} m`),e>=s.meters&&this.done()}},airtime:{start(s,t){t.acc=0},update(s,t,e){let i=this.game.player;!i.ground&&!i.fsm.is("climb","hang","wallrun")?t.acc+=e:i.ground&&(t.acc=Math.max(0,t.acc-e*2)),this.game.hud.setObjective(s.text,`${t.acc.toFixed(1)} / ${s.time}s`),t.acc>=s.time&&this.done()}},rings:{start(s,t){let e=this.game;t.rings=[],t.idx=0,t.time=s.timeLimit||0;let i=s.points?s.points.map(r=>this.loc(r)):ag(e,s.count||6,s.from?this.loc(s.from):e.player.pos),n=new Rr(3.2,.35,5,12);for(let r of i){let o=new Ht(n,new Ye({color:15909198}));o.position.copy(r),e.world.dynamic.add(o),t.rings.push(o)}t.target=i[0]},update(s,t,e){let i=this.game,n=i.player.pos.clone();n.y+=1,t.rings.forEach((o,a)=>{o.rotation.y+=e,o.material.color.set(a===t.idx?16723891:a<t.idx?3800938:15909198),o.visible=a>=t.idx});let r=t.rings[t.idx];if(r&&r.position.distanceTo(n)<4.5&&(t.idx++,i.audio.play("collect"),t.target=t.rings[t.idx]?t.rings[t.idx].position:null),s.timeLimit){let o=s.timeLimit-t.t;if(i.hud.setObjective(s.text,`${t.idx}/${t.rings.length}  \u23F1 ${Math.max(0,o).toFixed(1)}s`),o<=0){i.hud.toast("Out of time! Try again."),this.stepIdx--,this.next();return}}else i.hud.setObjective(s.text,`${t.idx}/${t.rings.length}`);t.idx>=t.rings.length&&this.done()},end(s,t){for(let e of t.rings||[])this.game.world.dynamic.remove(e)}},defeat:{start(s,t){t.npcs=this.spawnGroup(s.spawn),t.target=t.npcs.length?t.npcs[0].pos:null,s.civilians&&(t.civ=this.spawnGroup(s.civilians)),s.stealth&&(t.stealth=!0),this.on("npc:alert",()=>{s.stealthFail&&(this.game.hud.toast("Spotted! Restarting\u2026"),setTimeout(()=>{this.cleanupSpawns(),this.stepIdx--,this.next()},900))})},update(s,t){let e=t.npcs.filter(i=>i.alive&&!i.downed);this.game.hud.setObjective(s.text,`${t.npcs.length-e.length} / ${t.npcs.length}`),t.target=e.length?e[0].pos.clone().setY(e[0].pos.y+2.5):null,e.length||this.done()}},talk:{start(s,t){let e=this.game.npcs.byId(s.npc);if(!e&&s.spawn&&(e=this.spawnGroup([{...s.spawn,id:s.npc}])[0]),!e){this.done();return}e.talk=s.dialogue,e.setIcon("talk"),t.npc=e,this.on("npc:talk",i=>{i.npc===e&&this.game.dialogue.play(s.dialogue,()=>this.done(),e)})},update(s,t){t.npc&&(t.target=t.npc.pos.clone().setY(t.npc.pos.y+2.2))},end(s,t){t.npc&&(t.npc.talk=s.after||null,t.npc.setIcon(s.after?"talk":null))}},interact:{start(s,t){t.target=this.loc(s.target);let e=this.game.combat.addInteractable({pos:t.target,label:s.label||"USE",radius:s.radius||2.4,onUse:()=>{this.game.combat.removeInteractable(e),s.dialogue?this.game.dialogue.play(s.dialogue,()=>this.done()):this.done()}});this.items=this.items||[],this.items.push(e)}},collect:{start(s,t){let e=this.game;t.items=[],t.got=0;let i=s.points?s.points.map(r=>this.loc(r)):lg(e,s.count||5,s.near?this.loc(s.near):e.player.pos,s.radius||120),n=new Er(.7,0);for(let r of i){let o=new Ht(n,new Ye({color:new _t(s.color||"#f2c14e")}));o.position.copy(r),e.world.dynamic.add(o),t.items.push(o)}},update(s,t,e){let i=this.game,n=i.player.pos.clone();n.y+=1;let r=null,o=1e9;for(let a of t.items){if(!a.visible)continue;a.rotation.y+=e*2,a.position.y+=Math.sin(t.t*3)*.005;let l=a.position.distanceTo(n);l<2.2?(a.visible=!1,t.got++,i.audio.play("collect"),i.combat.word(s.word||"GOT IT!",a.position)):l<o&&(o=l,r=a)}t.target=r?r.position:null,i.hud.setObjective(s.text,`${t.got} / ${t.items.length}`),t.got>=t.items.length&&this.done()},end(s,t){for(let e of t.items||[])this.game.world.dynamic.remove(e)}},boss:{start(s,t){let e=this.game;t.arena=this.loc(s.arena),t.boss=e.spawnBoss(s.id,t.arena),this.on("boss:defeated",()=>{t.won=!0,setTimeout(()=>this.done(),1600)}),this.on("boss:summon",i=>{let n=this.spawnGroup([{npc:"jester_goon",at:t.arena,count:i.count,spread:5,state:"combat"}]);for(let r of n)r.aware=!0}),e.hud.showBoss(s.name||"BOSS",t.boss)},update(s,t){t.target=t.boss&&t.boss.alive?t.boss.pos.clone().setY(t.boss.pos.y+3):null},end(s,t){this.game.hud.showBoss(null)}},ride:{start(s,t){t.target=this.loc(s.target),this.game.fx.setBeacon(t.target),t.limit=s.timeLimit||0},update(s,t){let e=this.game,i=e.player;if(s.requireRide&&!i.ride&&t.t>1.5){e.hud.toast("Stay on your ride! Restarting\u2026"),this.stepIdx--,this.next();return}if(t.limit){let n=t.limit-t.t;if(e.hud.setObjective(s.text,`\u23F1 ${Math.max(0,n).toFixed(1)}s`),n<=0){e.hud.toast("Late delivery! Try again."),this.stepIdx--,this.next();return}}Ch(i.pos,t.target,s.radius||6)&&this.done()}},travel:{start(s){this.game.travel(s.city,{keepMission:!0,spawn:s.spawn}).then(()=>this.done())}},crime:{start(s,t){let e=this.game,i=e.registry.get("crimes",s.crime);e.activities.startCrime(i,s.at?this.loc(s.at):null),this.on("crime:stopped",()=>this.done())},update(s,t){!this.game.activities.crime&&!t.done&&t.t>2&&this.game.activities.startCrime(this.game.registry.get("crimes",s.crime),s.at?this.loc(s.at):null)}},setAbility:{start(s){Object.assign(this.game.player.abilities,s.abilities),this.done()}},title:{start(s){this.game.hud.titleCard(s.title,s.subtitle,()=>this.done())}},teleport:{start(s){let t=this.loc(s.target);this.game.player.spawn(t,s.yaw||0),this.done()}},emit:{start(s){q.emit(s.event,s.payload),this.done()}},fire:{start(s){let t=this.game.world;t.fire&&(t.fire.front=s.from??0),this.game.fireRate=s.rate||2.2,this.game.fireOn=!0,this.done()}}};function ag(s,t,e){let i=s.world.data,n=[],r=e.clone(),o=s.player.fwd().clone(),a=0;for(let l=0;l<t&&a<80;l++,a++){let h=i.roofs.filter(f=>{let g=(f.x0+f.x1)/2,y=(f.z0+f.z1)/2,m=g-r.x,p=y-r.z,v=Math.hypot(m,p);return v>28&&v<60&&(m*o.x+p*o.z)/v>.3}).sort((f,g)=>g.y-f.y)[0];if(!h){o.applyAxisAngle(new R(0,1,0),1.2),l--;continue}let d=new R((h.x0+h.x1)/2,0,(h.z0+h.z1)/2),u=r.clone().lerp(d,.55);u.y=Math.max(10,Math.min(h.y,40)*.7),n.push(u),o=d.clone().sub(r).setY(0).normalize(),r=d}return n}function lg(s,t,e,i){let n=s.world.data.collectibleSpots.map(r=>new R(...r)).filter(r=>r.distanceTo(e)<i&&r.distanceTo(e)>15);return n.sort(()=>Math.random()-.5),n.slice(0,t)}var Qr=class{constructor(t){this.game=t,this.crime=null,this.crimeTimer=20,this.givers=[],this.pages=[],this.enabled=!1,q.on("npc:talk",e=>this.onTalk(e.npc))}setup(t){this.clear();let e=this.game;this.enabled=!0,this.crimeTimer=18;for(let d of e.registry.list("sideQuests")){if(d.city&&d.city!==t||e.save.data.sideQuests.done.includes(d.id)&&!d.repeatable||d.requires&&!e.save.data.flags[d.requires])continue;let u=e.missions.loc(d.giver.at);if(!u)continue;let f=e.npcs.spawn(d.giver.npc,u,{id:"giver_"+d.id,talk:d.giver.dialogue,name:d.giver.name,portrait:d.giver.portrait,state:d.giver.state||"idle",yaw:d.giver.yaw||0});f.important=!0,f.sideQuest=d,this.givers.push(f)}let i=e.world.data.collectibleSpots,n=si(lh(t)^81),r=e.registry.get("collectibles","pages"),o=r?r.perCity:20,a=[...i].sort(()=>n()-.5).slice(0,o),l=new ne;l.cbox(0,0,0,.8,1.1,.06,X("#fff4dc")),l.cbox(0,.2,.035,.6,.5,.01,X("#e4573d")),l.cbox(0,-.3,.035,.6,.15,.01,X("#2a9d9a"));let c=l.build(),h=Se({atlas:!1,emissive:.6});a.forEach((d,u)=>{let f=t+":"+u;if(e.save.data.collectibles.includes(f))return;let g=new Ht(c,h);g.position.set(d[0],d[1],d[2]),e.world.dynamic.add(g),this.pages.push({id:f,m:g})})}clear(){let t=this.game;for(let e of this.givers)t.npcs.remove(e);this.givers=[];for(let e of this.pages)t.world.dynamic.remove(e.m);this.pages=[],this.endCrime(!1)}onTalk(t){let e=this.game;if(!t.sideQuest)return;if(e.missions.active){e.hud.toast("Finish your current job first.");return}let i=t.sideQuest;e.dialogue.play(i.giver.dialogue,n=>{if(n==="decline")return;this.endCrime(!1),e.missions.start(i,{side:!0});let r=q.on("mission:complete",o=>{o===i&&(r(),e.save.data.sideQuests.done.includes(i.id)||e.save.data.sideQuests.done.push(i.id),e.save.write(),e.hud.toast(`Side job complete: ${i.name}`,3),i.outro&&e.dialogue.play(i.outro),i.repeatable||(e.npcs.remove(t),this.givers.splice(this.givers.indexOf(t),1)))})},t)}update(t){let e=this.game,i=e.player;if(this.crime&&this.updateCrime(t),!!this.enabled){for(let n=this.pages.length-1;n>=0;n--){let r=this.pages[n];if(r.m.rotation.y+=t*1.5,r.m.position.distanceTo(i.pos)<2.2){e.world.dynamic.remove(r.m),this.pages.splice(n,1),e.save.data.collectibles.push(r.id),e.save.write(),e.audio.play("collect"),e.combat.word("PAGE!",r.m.position),e.hud.toast(`Golden Age Page found! (${e.save.data.collectibles.length} total)`),q.emit("collectible",r.id);for(let o of e.registry.list("skins"))o.unlockPages&&e.save.data.collectibles.length>=o.unlockPages&&!e.save.data.unlockedSkins.includes(o.id)&&(e.save.data.unlockedSkins.push(o.id),e.save.write(),e.hud.toast(`Suit unlocked: ${o.name}!`,3))}}e.missions.active||!e.freeRoam||this.crime||(this.crimeTimer-=t,this.crimeTimer<=0&&this.startCrime())}}startCrime(t,e){let i=this.game,n=i.player,r=i.registry.list("crimes").filter(h=>!h.storyOnly&&(!h.city||h.city===i.cityId)&&(!h.requiresFlag||i.save.data.flags[h.requiresFlag]));if(!r.length&&!t)return;let o=Math.random,a=t||r[o()*r.length|0],l=e?e.clone():null;if(!l){let h=i.world.data.crimeSpots.filter(u=>{let f=Math.hypot(u[0]-n.pos.x,u[2]-n.pos.z);return f>45&&f<230&&(!a.spot||a.spot.includes(u[3]))});if(!h.length&&t&&(h=i.world.data.crimeSpots),!h.length){this.crimeTimer=10;return}let d=h[o()*h.length|0];l=new R(d[0],d[1],d[2])}let c={def:a,at:l,npcs:[],civ:[],t:0};if(a.kind==="van")this.spawnVan(c);else{c.npcs=i.missions.spawnGroup((a.enemies||[]).map(h=>({npc:h[0],count:h[1],at:l,spread:3,state:"idle"}))),c.civ=i.missions.spawnGroup((a.civilians||[]).map(h=>({npc:h.npc,at:l.clone().add(new R(1.5,0,1.5)),state:h.state||"cower",role:"hostage"}))),i.missions.spawned=i.missions.spawned.filter(h=>!c.npcs.includes(h)&&!c.civ.includes(h));for(let h of c.npcs)h.yaw=Math.random()*6.28}this.crime=c,i.audio.play("siren",{vol:.5}),i.hud.scanner(a.scanner||`Crime in progress: ${a.name}`),i.hud.setObjective(a.name,"Police scanner")}spawnVan(t){let e=this.game,n=e.world.data.lanes.reduce((l,c)=>{let h=c.axis==="z"?Math.abs(c.c-t.at.x):Math.abs(c.c-t.at.z);return!l||h<l.d?{L:c,d:h}:l},null).L,r=new ne;r.cbox(0,1.3,0,2.2,2,5,X("#3a3a48")),r.cbox(0,1.5,2.3,2,1,.5,X("#7fb3b8")),r.cbox(0,1.9,-.3,2.22,.5,3,X("#c9a23a"));for(let l of[-1.7,1.7])for(let c of[-1,1])r.cbox(c,.4,l,.4,.8,.8,X("#111"));let o=new Ht(r.build(),Se({atlas:!1}));e.world.dynamic.add(o);let a={mesh:o,lane:n,t:n.axis==="z"?t.at.z:t.at.x,dir:1,speed:15,hits:0,stopped:!1,pos:new R};t.van=a,a.target={pos:a.pos,radius:2.6,onHit:()=>{a.hits++,e.combat.word("THUNK!",a.pos),e.audio.play("pod",{rate:.7}),a.speed*=.55,a.hits>=(t.def.hitsToStop||3)&&this.stopVan(t)}},e.combat.targets.push(a.target)}stopVan(t){let e=this.game,i=t.van;if(!i.stopped){i.stopped=!0,e.audio.play("explosion",{vol:.5,rate:1.4}),e.combat.targets.splice(e.combat.targets.indexOf(i.target),1),t.npcs=e.missions.spawnGroup([{npc:"thug",count:2,at:i.pos.clone(),spread:3,state:"combat"},{npc:"thug_gun",count:1,at:i.pos.clone(),spread:4,state:"combat"}]),e.missions.spawned=e.missions.spawned.filter(n=>!t.npcs.includes(n));for(let n of t.npcs)n.aware=!0}}updateCrime(t){let e=this.game,i=this.crime;if(i.t+=t,i.van&&!i.van.stopped){let r=i.van,o=r.lane;r.t+=r.dir*r.speed*t,(r.t>o.b||r.t<o.a)&&(r.dir*=-1),o.axis==="z"?(r.pos.set(o.c+3.2*r.dir,0,r.t),r.mesh.rotation.y=r.dir>0?0:Math.PI):(r.pos.set(r.t,0,o.c-3.2*r.dir),r.mesh.rotation.y=r.dir>0?Math.PI/2:-Math.PI/2),r.mesh.position.copy(r.pos),r.speed=Math.min(15,r.speed+t*1.2),e.hud.setObjective(i.def.name,`Tether the van: ${r.hits}/${i.def.hitsToStop||3}`),e.hud.setWaypoint(r.pos.clone().setY(4)),e.player.pos.distanceTo(r.pos)>420&&this.endCrime(!1);return}let n=i.npcs.filter(r=>r.alive&&!r.downed);if(n.length&&(e.hud.setWaypoint(n[0].pos.clone().setY(n[0].pos.y+2.4)),e.hud.setObjective(i.def.name,`${i.npcs.length-n.length}/${i.npcs.length} stopped`)),!n.length&&i.npcs.length){this.endCrime(!0);return}(e.player.pos.distanceTo(i.at)>420||i.t>240)&&this.endCrime(!1)}endCrime(t){let e=this.game,i=this.crime;if(i){if(this.crime=null,this.crimeTimer=30+Math.random()*35,e.hud.setObjective(null),e.hud.setWaypoint(null),t){e.save.data.stats.crimes++,e.save.data.reputation+=i.def.rep||10,e.save.write(),e.hud.toast(`${i.def.name} stopped! +${i.def.rep||10} rep`,3),e.audio.play("ui_ok");for(let n of i.civ)n.fsm.set("cheer");i.def.thanks&&e.dialogue.bark(i.def.thanks[Math.random()*i.def.thanks.length|0]),q.emit("crime:stopped",i.def)}setTimeout(()=>{for(let n of[...i.npcs,...i.civ])e.npcs.remove(n);if(i.van){e.world.dynamic.remove(i.van.mesh);let n=e.combat.targets.indexOf(i.van.target);n>=0&&e.combat.targets.splice(n,1)}},t?8e3:0)}}};var to=class{constructor(t){this.game=t,this.el=document.getElementById("dialogue"),this.nameEl=this.el.querySelector(".d-name"),this.textEl=this.el.querySelector(".d-text"),this.portrait=this.el.querySelector("canvas"),this.choicesEl=this.el.querySelector(".d-choices"),this.moreEl=this.el.querySelector(".d-more"),this.capEl=document.getElementById("caption"),this.barkEl=document.getElementById("bark"),this.active=null,this.queue=[],this.capQueue=[],this.capT=0,this.barkT=0,this.el.addEventListener("pointerdown",e=>{e.target.closest(".d-choices button")||(e.preventDefault(),this.advance())})}get open(){return!!this.active}play(t,e,i){let n=this.game.registry.dialogue(t);if(!n){console.warn("missing dialogue",t),e&&e();return}let r=Array.isArray(n)?n:n.lines;this.active={id:t,lines:r,i:0,cb:e,npc:i,result:null},this.el.classList.add("show"),this.game.player.lock(999,"dialogue"),this.game.overlay.setVisible(!1),i&&(i._prevYaw=i.yaw),q.emit("dialogue:start",t),this.show()}speaker(t){return this.game.registry.data.speakers[t]||{name:t,portrait:{style:"face"}}}show(){let t=this.active,e=t.lines[t.i];if(!e){this.close();return}e.set&&Object.assign(this.game.save.data.flags,e.set),e.emit&&q.emit(e.emit,e.payload),e.sfx&&this.game.audio.play(e.sfx);let i=this.speaker(e.s);this.nameEl.textContent=i.name,this.nameEl.style.background=i.color||"#f2c14e",this.el.classList.toggle("narration",e.s==="narrator"),this.el.classList.toggle("radio",!!i.radio),eo(this.portrait,i.portrait||{},this.game.time),this.full=this.format(e.t||""),this.shown=0,this.typing=!0,this.textEl.textContent="",this.choicesEl.innerHTML="",this.moreEl.style.visibility="hidden",this.pitch=i.pitch||1}format(t){let e=this.game,i=e.registry.str("heroName","Tether");return t.replace(/\{hero\}/g,i).replace(/\{city\}/g,e.cityName||"Brasshaven")}update(t){if(this.capT>0&&(this.capT-=t,this.capT<=0&&(this.capEl.classList.remove("show"),setTimeout(()=>this.nextCaption(),350))),this.barkT>0&&(this.barkT-=t,this.barkT<=0&&this.barkEl.classList.remove("show")),!this.active)return;if(this.typing){let i=Math.floor(this.shown);this.shown+=t*55;let n=Math.min(this.full.length,Math.floor(this.shown));n!==i&&(this.textEl.textContent=this.full.slice(0,n),n%3===0&&this.full[n-1]!==" "&&this.game.audio.play("blip",{rate:this.pitch*(.9+Math.random()*.2),vary:0,minGap:.03})),n>=this.full.length&&this.finishTyping()}(j.pressed("cross")||j.pressed("square"))&&this.advance(),this.choiceBtns&&this.choiceBtns.length&&(j.pressed("down")&&this.selChoice((this.sel+1)%this.choiceBtns.length),j.pressed("up")&&this.selChoice((this.sel-1+this.choiceBtns.length)%this.choiceBtns.length));let e=this.active&&this.active.npc;e&&e.faceTo(this.game.player.pos,t,6)}finishTyping(){this.typing=!1,this.textEl.textContent=this.full;let t=this.active.lines[this.active.i];t.choices?(this.choiceBtns=t.choices.map((e,i)=>{let n=document.createElement("button");return n.textContent=this.format(e.t),n.addEventListener("click",r=>{r.stopPropagation(),this.pick(i)}),this.choicesEl.appendChild(n),n}),this.selChoice(0)):(this.choiceBtns=null,this.moreEl.style.visibility="visible")}selChoice(t){this.sel=t,this.choiceBtns.forEach((e,i)=>e.classList.toggle("sel",i===t))}pick(t){let e=this.active,n=e.lines[e.i].choices[t];if(this.game.audio.play("ui_click"),n.set&&Object.assign(this.game.save.data.flags,n.set),n.result&&(e.result=n.result),this.choiceBtns=null,n.end){this.close();return}this.goto(n.go)}goto(t){let e=this.active;if(t){let i=e.lines.findIndex(n=>n.id===t);e.i=i>=0?i:e.lines.length}else e.i++;this.show()}advance(){if(!this.active)return;if(this.typing){this.finishTyping();return}if(this.choiceBtns&&this.choiceBtns.length){this.pick(this.sel);return}let t=this.active.lines[this.active.i];if(t.end){this.close();return}this.goto(t.go)}close(){let t=this.active;this.active=null,this.el.classList.remove("show"),this.game.player.fsm.set(this.game.player.ride?"ride":"ground"),this.game.overlay.setVisible(this.game.state==="play"),this.game.save.write(),q.emit("dialogue:end",t.id),j.consume("cross"),j.consume("square"),t.cb&&t.cb(t.result)}thought(t,e=4){this.capQueue.push({text:this.format(t),time:e}),this.capT<=0&&!this.capEl.classList.contains("show")&&this.nextCaption()}nextCaption(){let t=this.capQueue.shift();t&&(this.capEl.textContent=t.text,this.capEl.classList.add("show"),this.capT=t.time)}bark(t,e=3){this.barkEl.textContent=this.format(t),this.barkEl.classList.add("show"),this.barkT=e}};function eo(s,t,e=0){let i=s.getContext("2d"),n=s.width,r=s.height;i.clearRect(0,0,n,r),i.fillStyle=t.bg||"#f2c14e",i.fillRect(0,0,n,r),i.fillStyle="rgba(0,0,0,0.12)";for(let f=0;f<r;f+=8)for(let g=f/8%2?4:0;g<n;g+=8){let y=1+f/r*2.5;i.beginPath(),i.arc(g,f,y,0,6.283),i.fill()}let o="#1d1712";i.lineWidth=4,i.strokeStyle=o,i.lineJoin="round";let a=n/2,l=r*.52;i.fillStyle=t.primary||"#2a9d9a",i.beginPath(),i.moveTo(a-n*.42,r),i.quadraticCurveTo(a-n*.38,r*.74,a,r*.72),i.quadraticCurveTo(a+n*.38,r*.74,a+n*.42,r),i.closePath(),i.fill(),i.stroke(),t.collar&&(i.fillStyle=t.collar,i.beginPath(),i.moveTo(a-18,r*.72),i.lineTo(a,r*.86),i.lineTo(a+18,r*.72),i.closePath(),i.fill(),i.stroke()),t.emblem&&(i.fillStyle=t.accent||"#f2c14e",i.beginPath(),i.moveTo(a-14,r*.84),i.lineTo(a+14,r*.84),i.lineTo(a,r*.95),i.closePath(),i.fill(),i.stroke());let c=t.style||"face",h=c==="mask"?t.primary||"#2a9d9a":c==="jester"?"#f6f1df":c==="helmet"?t.primary||"#5a5f6a":t.skin||"#d9a27a",d=c==="kid"?n*.2:n*.23,u=c==="kid"?r*.24:r*.28;if(i.fillStyle=h,i.beginPath(),i.ellipse(a,l-r*.06,d,u,0,0,6.283),i.fill(),i.stroke(),c==="mask"){for(let f of[-1,1])i.fillStyle=o,i.beginPath(),i.ellipse(a+f*d*.42,l-r*.09,d*.34,u*.24,f*-.35,0,6.283),i.fill(),i.fillStyle=t.eyes||"#ffffff",i.beginPath(),i.ellipse(a+f*d*.42,l-r*.09,d*.26,u*.17,f*-.35,0,6.283),i.fill();i.strokeStyle=t.secondary||"#e4573d",i.lineWidth=6,i.beginPath(),i.moveTo(a,l-u-r*.05),i.lineTo(a,l-r*.2),i.stroke(),i.strokeStyle=o,i.lineWidth=4,i.fillStyle=t.secondary||"#e4573d",i.beginPath(),i.moveTo(a-10,l+u*.55),i.lineTo(a+10,l+u*.55),i.lineTo(a,l+u*.75),i.closePath(),i.fill(),i.stroke()}else if(c==="jester"){i.fillStyle=t.primary||"#7a3fb0";for(let f of[-1,1])i.beginPath(),i.moveTo(a+f*d*.2,l-u*1),i.quadraticCurveTo(a+f*d*1.6,l-u*1.9,a+f*d*1.4,l-u*.6),i.lineTo(a+f*d*.8,l-u*.75),i.closePath(),i.fillStyle=f<0?t.primary||"#7a3fb0":t.secondary||"#3a2a6a",i.fill(),i.stroke(),i.fillStyle=t.accent||"#f2c14e",i.beginPath(),i.arc(a+f*d*1.42,l-u*.6,8,0,6.283),i.fill(),i.stroke();i.fillStyle=t.primary||"#7a3fb0";for(let f of[-1,1])i.beginPath(),i.moveTo(a+f*d*.42,l-r*.16),i.lineTo(a+f*d*.62,l-r*.07),i.lineTo(a+f*d*.42,l+r*.02),i.lineTo(a+f*d*.22,l-r*.07),i.closePath(),i.fill(),i.stroke();i.fillStyle=o,i.beginPath(),i.arc(a,l+u*.35,d*.5,.15,Math.PI-.15),i.fill()}else if(c==="helmet"){i.fillStyle=t.accent||"#9aa3ad",i.fillRect(a-d*.8,l-r*.13,d*1.6,u*.32),i.strokeRect(a-d*.8,l-r*.13,d*1.6,u*.32),i.fillStyle=t.eyes||"#ff3b3b",i.fillRect(a-d*.6,l-r*.1,d*.4,u*.12),i.fillRect(a+d*.2,l-r*.1,d*.4,u*.12);for(let f=-2;f<=2;f++)i.beginPath(),i.moveTo(a+f*10,l+u*.3),i.lineTo(a+f*10,l+u*.75),i.stroke()}else{t.hair&&(i.fillStyle=t.hair,i.beginPath(),i.ellipse(a,l-u*.62,d*1.04,u*.55,0,Math.PI,0),i.fill(),i.stroke(),t.long&&(i.fillRect(a-d*1.04,l-u*.62,d*.3,u*1.2),i.fillRect(a+d*.74,l-u*.62,d*.3,u*1.2)));for(let f of[-1,1])i.fillStyle="#fff",i.beginPath(),i.ellipse(a+f*d*.38,l-r*.07,9,6,0,0,6.283),i.fill(),i.stroke(),i.fillStyle=o,i.beginPath(),i.arc(a+f*d*.38,l-r*.07,3,0,6.283),i.fill(),i.beginPath(),i.moveTo(a+f*d*.62,l-r*.14),i.lineTo(a+f*d*.16,l-r*.13-(t.stern?-4:2)),i.stroke();if(t.glasses){i.strokeStyle=o,i.lineWidth=3;for(let f of[-1,1])i.beginPath(),i.arc(a+f*d*.38,l-r*.07,13,0,6.283),i.stroke();i.lineWidth=4}i.beginPath(),i.moveTo(a,l-r*.05),i.lineTo(a-5,l+4),i.lineTo(a+2,l+6),i.stroke(),i.beginPath(),t.smile?i.arc(a,l+u*.35,d*.35,.3,Math.PI-.3):(i.moveTo(a-d*.3,l+u*.48),i.lineTo(a+d*.3,l+u*.46)),i.stroke(),t.mustache&&(i.fillStyle=t.hair||o,i.beginPath(),i.ellipse(a,l+u*.3,d*.4,6,0,0,6.283),i.fill()),t.hat==="cap"&&(i.fillStyle=t.hatColor||"#2a3f6a",i.beginPath(),i.ellipse(a,l-u*.75,d*1.05,u*.38,0,Math.PI,0),i.fill(),i.stroke(),i.fillRect(a-d*1.1,l-u*.8,d*2.2,10),i.strokeRect(a-d*1.1,l-u*.8,d*2.2,10),i.fillStyle=t.accent||"#f2c14e",i.beginPath(),i.arc(a,l-u*.95,7,0,6.283),i.fill(),i.stroke()),t.hat==="beanie"&&(i.fillStyle=t.hatColor||"#c0462e",i.beginPath(),i.ellipse(a,l-u*.7,d*1.05,u*.55,0,Math.PI,0),i.fill(),i.stroke()),t.mask&&(i.fillStyle=o,i.fillRect(a-d,l-r*.11,d*2,16)),t.scar&&(i.strokeStyle="#8a3a2a",i.beginPath(),i.moveTo(a+d*.2,l-r*.16),i.lineTo(a+d*.55,l+4),i.stroke(),i.strokeStyle=o)}if(t.iron&&(i.fillStyle="#5a5f6a",i.beginPath(),i.moveTo(a,l-u),i.lineTo(a+d*1.02,l-u*.3),i.lineTo(a+d*.8,l+u*.8),i.lineTo(a,l+u),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff3b3b",i.beginPath(),i.arc(a+d*.4,l-r*.07,6,0,6.283),i.fill()),t.static){i.fillStyle="rgba(255,255,255,0.18)";for(let f=0;f<r;f+=4)Math.random()<.5&&i.fillRect(0,f,n,2)}i.lineWidth=6,i.strokeRect(3,3,n-6,r-6)}var Ce=s=>document.getElementById(s),io=class{constructor(t){this.game=t,this.el=Ce("hud"),this.hp=Ce("hp-fill"),this.hpGhost=Ce("hp-ghost"),this.obj=Ce("objective"),this.objT=this.obj.querySelector(".o-title"),this.objS=this.obj.querySelector(".o-sub"),this.way=Ce("waypoint"),this.cross=Ce("crosshair"),this.zip=Ce("zipmark"),this.toastEl=Ce("toast"),this.scannerEl=Ce("scanner"),this.bossEl=Ce("bossbar"),this.bossFill=this.bossEl.querySelector(".b-fill"),this.bossName=this.bossEl.querySelector(".b-name"),this.gadgetEl=Ce("gadget"),this.ammoEl=Ce("ammo"),this.fpsEl=Ce("fps"),this.danger=Ce("danger"),this.speedEl=Ce("speedlines"),this.mini=Ce("minimap"),this.mctx=this.mini.getContext("2d"),this.miniT=0,this.cardEl=Ce("titlecard"),this.repEl=Ce("rep"),this.waypoint=null,this.boss=null,this.toastT=0,this.scanT=0,this._v=new R,this.ghost=100,this.fpsAcc=0,this.fpsN=0,q.on("combat:danger",()=>{this.danger.classList.remove("on"),this.danger.offsetWidth,this.danger.classList.add("on")}),q.on("player:hurt",()=>{this.el.classList.remove("hurt"),this.el.offsetWidth,this.el.classList.add("hurt")}),this.miniBtn=this.mini,this.mini.addEventListener("click",()=>q.emit("ui:map"))}show(t){this.el.style.display=t?"block":"none"}setObjective(t,e){if(!t){this.obj.classList.remove("show"),this._objTitle=null;return}this._objTitle!==t&&(this.obj.classList.remove("show"),this.obj.offsetWidth,this._objTitle=t),this.objT.textContent=t,this.objS.textContent=e||"",this.obj.classList.add("show")}setWaypoint(t){this.waypoint=t?t.clone():null}toast(t,e=2.2){this.toastEl.textContent=t,this.toastEl.classList.add("show"),this.toastT=e}scanner(t){this.scannerEl.querySelector("span").textContent=t,this.scannerEl.classList.add("show"),this.scanT=4.5}showBoss(t,e){this.boss=e,this.bossEl.classList.toggle("show",!!e),e&&(this.bossName.textContent=t)}titleCard(t,e,i){this.cardEl.querySelector(".t-title").textContent=t,this.cardEl.querySelector(".t-sub").textContent=e||"",this.cardEl.classList.add("show"),this.game.audio.play("bell",{vol:.5}),setTimeout(()=>{this.cardEl.classList.remove("show"),i&&i()},2600)}update(t){let e=this.game,i=e.player,n=e.renderer.camera,r=window.innerWidth,o=window.innerHeight,a=i.health/i.maxHealth;this.hp.style.transform=`scaleX(${a.toFixed(3)})`,this.ghost+=(i.health-this.ghost)*Math.min(1,t*2),this.hpGhost.style.transform=`scaleX(${(this.ghost/i.maxHealth).toFixed(3)})`,this.el.classList.toggle("lowhp",a<.3);let l=e.combat.gadget,c=l?l.name:"\u2014";this._gtxt!==c&&(this._gtxt=c,this.gadgetEl.textContent=c,this.gadgetEl.style.borderColor=l?l.color:"#fff");let h=`${e.combat.ammo}/${e.combat.maxAmmo}`;if(this._at!==h&&(this._at=h,this.ammoEl.textContent=h),this.gadgetEl.parentElement.style.display=i.abilities.gadgets===!1?"none":"",this.cross.classList.toggle("aim",e.combat.aiming||!!i.aimZipPoint),this.cross.style.display=e.rig.mode==="fp"||e.combat.aiming||cg()?"":"none",i.aimZipPoint?this.project(i.aimZipPoint,this.zip,r,o,!1):this.zip.style.display="none",this.waypoint){this.way.style.display="block";let f=this.waypoint.distanceTo(i.pos);this.way.querySelector("span").textContent=f>999?(f/1e3).toFixed(1)+"km":Math.round(f)+"m",this.project(this.waypoint,this.way,r,o,!0)}else this.way.style.display="none";this.toastT>0&&(this.toastT-=t,this.toastT<=0&&this.toastEl.classList.remove("show")),this.scanT>0&&(this.scanT-=t,this.scanT<=0&&this.scannerEl.classList.remove("show")),this.boss&&(this.bossFill.style.transform=`scaleX(${jt(this.boss.hp/this.boss.maxHp,0,1).toFixed(3)})`);let d=i.vel.length();this.speedEl.style.opacity=jt((d-16)/20,0,.8).toFixed(2),this.miniT-=t,this.miniT<=0&&(this.miniT=.12,this.drawMini()),e.save.settings.showFPS?(this.fpsAcc+=t,this.fpsN++,this.fpsAcc>.5&&(this.fpsEl.textContent=`${Math.round(this.fpsN/this.fpsAcc)} fps \xB7 ${e.renderer.info.calls} calls \xB7 ${e.renderer.scale*100|0}%`,this.fpsAcc=0,this.fpsN=0),this.fpsEl.style.display="block"):this.fpsEl.style.display="none";let u=e.save.data.reputation;this._rep!==u&&(this._rep=u,this.repEl.textContent="\u2605 "+u)}project(t,e,i,n,r){let o=this._v.copy(t).project(this.game.renderer.camera),a=(o.x+1)/2*i,l=(1-o.y)/2*n,c=o.z>1;if(!r){if(c||a<0||a>i||l<0||l>n){e.style.display="none";return}e.style.display="block",e.style.transform=`translate(${a|0}px,${l|0}px)`;return}let h=34;c&&(a=i-a,l=n-h);let d=c||a<h||a>i-h||l<h||l>n-h;a=jt(a,h,i-h),l=jt(l,h+40,n-h),e.classList.toggle("edge",d),e.style.transform=`translate(${a|0}px,${l|0}px)`}drawMini(){let t=this.game,e=t.player,i=this.mctx,n=this.mini.width,r=110,o=n/(r*2),a=t.world.data;if(a){if(i.save(),i.clearRect(0,0,n,n),i.beginPath(),i.arc(n/2,n/2,n/2-2,0,6.283),i.clip(),i.fillStyle=a.interior?"#3d4a52":"#4b4743",i.fillRect(0,0,n,n),i.translate(n/2,n/2),i.rotate(e.yaw),i.scale(o,o),i.translate(-e.pos.x,-e.pos.z),!a.interior){i.fillStyle="#4f8d93";let l=a.bounds;i.fillRect(e.pos.x-400,e.pos.z-400,800,800),i.fillStyle="#4b4743",i.fillRect(l.x0,l.z0,l.x1-l.x0,l.z1-l.z0)}for(let l of a.roofs){if(Math.abs(l.x0-e.pos.x)>r*1.5&&Math.abs(l.x1-e.pos.x)>r*1.5||Math.abs(l.z0-e.pos.z)>r*1.5&&Math.abs(l.z1-e.pos.z)>r*1.5)continue;let c=jt(l.y/90,0,1);i.fillStyle=`rgb(${200-c*60|0},${180-c*40|0},${140-c*30|0})`,i.fillRect(l.x0,l.z0,l.x1-l.x0,l.z1-l.z0)}for(let l of a.parks||[])i.fillStyle="#6f9a45",i.fillRect(l.x0+2,l.z0+2,l.x1-l.x0-4,l.z1-l.z0-4);for(let l of t.npcs.list)l.alive&&(i.fillStyle=l.hostile?l.downed?"#777":"#ff3b3b":l.talk?"#5fd0ff":"#f2ead0",i.beginPath(),i.arc(l.pos.x,l.pos.z,3.5/o*.5,0,6.283),i.fill());if(this.waypoint&&(i.fillStyle="#ffe066",i.beginPath(),i.arc(this.waypoint.x,this.waypoint.z,5/o*.6,0,6.283),i.fill()),i.restore(),i.save(),i.translate(n/2,n/2),i.fillStyle="#ff2fb3",i.strokeStyle="#1d1712",i.lineWidth=2,i.beginPath(),i.moveTo(0,-9),i.lineTo(6,7),i.lineTo(0,3),i.lineTo(-6,7),i.closePath(),i.fill(),i.stroke(),i.restore(),this.waypoint){let l=this.waypoint.x-e.pos.x,c=this.waypoint.z-e.pos.z;if(Math.hypot(l,c)>r){let d=Math.atan2(c,l)+e.yaw;i.save(),i.translate(n/2+Math.cos(d)*(n/2-9),n/2+Math.sin(d)*(n/2-9)),i.fillStyle="#ffe066",i.beginPath(),i.arc(0,0,5,0,6.283),i.fill(),i.restore()}}}}};function cg(){return j.down("l2")}var Ph=s=>document.getElementById(s),It=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},no=class{constructor(t){this.game=t,this.root=Ph("menus"),this.current=null,this.stack=[],this.loadEl=Ph("loading")}btn(t,e,i=""){let n=It("button","cbtn "+i,t);return n.addEventListener("click",r=>{r.stopPropagation(),this.game.audio.unlock(),this.game.audio.play("ui_click"),e()}),n}panel(t,e=""){this.root.innerHTML="",this.root.className="show "+e;let i=It("div","panel");return t&&i.appendChild(It("h2","ptitle",t)),this.root.appendChild(i),i}hide(){this.root.className="",this.root.innerHTML="",this.current=null}back(){let t=this.stack.pop();t?t():this.hide()}go(t){this.currentFn&&this.stack.push(this.currentFn),this.currentFn=t,t()}title(){this.stack=[],this.currentFn=()=>this.title();let t=this.game,e=t.save.data;this.root.innerHTML="",this.root.className="show title";let i=It("div","title-wrap");i.appendChild(It("div","logo",`<span class="l1">${t.registry.str("gameTitle","TETHER")}</span><span class="l2">${t.registry.str("gameSubtitle","BOOK ONE: THE CLONE OF BRASSHAVEN")}</span>`));let n=It("div","title-btns"),r=e.story.completed.length||e.story.step>0||e.story.chapter!=="ch1";r&&n.appendChild(this.btn("\u25B6 CONTINUE STORY",()=>t.startStory(e.story.chapter,!0),"big")),n.appendChild(this.btn(r?"CHAPTER SELECT":"\u25B6 NEW STORY",()=>r?this.go(()=>this.chapters()):t.startStory("ch1",!1),r?"":"big")),n.appendChild(this.btn("FREE ROAM",()=>t.startFreeRoam(e.lastCity||"midtown"))),n.appendChild(this.btn("WORLD MAP",()=>this.go(()=>this.worldMap(!1)))),n.appendChild(this.btn("SUITS",()=>this.go(()=>this.suits()))),n.appendChild(this.btn("SETTINGS",()=>this.go(()=>this.settings()))),n.appendChild(this.btn("MODS & PACKS",()=>this.go(()=>this.mods()))),n.appendChild(this.btn("CREDITS",()=>this.go(()=>this.credits()))),i.appendChild(n),i.appendChild(It("div","title-foot",`v${t.version} \xB7 ${t.registry.packs.length} packs loaded \xB7 \u2605${e.reputation} \xB7 pages ${e.collectibles.length}`)),this.root.appendChild(i)}chapters(){let t=this.game,e=this.panel("STORY \u2014 BOOK ONE"),i=It("div","cards");for(let n of t.registry.list("chapters").sort((r,o)=>(r.order||0)-(o.order||0))){let r=n.id==="ch1"||t.save.data.story.completed.includes(n.requires)||t.save.data.story.completed.includes(n.id),o=It("div","card"+(r?"":" locked"));o.appendChild(It("div","c-num",n.number||"")),o.appendChild(It("div","c-title",n.title)),o.appendChild(It("div","c-desc",r?n.blurb||"":"Locked \u2014 finish the previous chapter.")),t.save.data.story.completed.includes(n.id)&&o.appendChild(It("div","c-badge","COMPLETE")),r&&o.addEventListener("click",()=>{t.audio.play("ui_ok"),t.startStory(n.id,!1)}),i.appendChild(o)}e.appendChild(i),e.appendChild(this.btn("BACK",()=>this.back()))}worldMap(t){let e=this.game,i=this.panel("TRAVEL \u2014 "+e.registry.str("regionName","GREATER BRASSHAVEN"),"map"),n=It("div","map-wrap"),r=It("div","map-canvas"),o=It("div","map-info"),a=e.registry.list("cities").filter(h=>!h.hidden),l=a.find(h=>h.id===(e.cityId||e.save.data.lastCity))||a[0],c=()=>{r.innerHTML='<div class="sea"></div>';for(let d of a){let u=It("div","pin"+(d===l?" sel":"")+(d.id===e.cityId?" here":""),`<b>${d.short||d.name}</b>`);u.style.left=(d.map?d.map[0]:50)+"%",u.style.top=(d.map?d.map[1]:50)+"%",u.style.setProperty("--pc",d.color||"#e4573d"),u.addEventListener("click",()=>{l=d,e.audio.play("ui_click"),c()}),r.appendChild(u)}o.innerHTML="",o.appendChild(It("h3","",l.name)),o.appendChild(It("p","",l.description||""));let h=It("ul","facts");h.innerHTML=`<li>Skyline: <b>${l.skyline||"\u2014"}</b></li><li>Crime: <b>${l.crime||"\u2014"}</b></li><li>Best for: <b>${l.bestFor||"\u2014"}</b></li>`,o.appendChild(h),o.appendChild(this.btn(l.id===e.cityId?"YOU ARE HERE":"TRAVEL \u279C",()=>{(l.id!==e.cityId||!t)&&(this.hide(),e.travel(l.id,{freeRoam:!0}))},"big"))};c(),n.appendChild(r),n.appendChild(o),i.appendChild(n),i.appendChild(this.btn("BACK",()=>this.back()))}loading(t,e){let i=this.loadEl;i.classList.add("show"),i.querySelector(".ld-city").textContent=t.name||t.title||"",i.querySelector(".ld-tip").textContent=e,i.querySelector(".ld-fill").style.transform="scaleX(0)";let n=i.querySelector("canvas"),r=this.game.registry.data.speakers,o=Object.keys(r),a=r[o[Math.random()*o.length|0]];a&&eo(n,a.portrait||{},0)}loadingProgress(t){this.loadEl.querySelector(".ld-fill").style.transform=`scaleX(${t.toFixed(3)})`}loadingDone(){this.loadEl.classList.remove("show")}pause(){let t=this.game;this.stack=[],this.currentFn=()=>this.pause();let e=this.panel("PAUSED"),i=It("div","col");i.appendChild(this.btn("RESUME",()=>t.resume(),"big")),t.missions.active&&i.appendChild(this.btn("RESTART CHECKPOINT",()=>t.restartStep())),t.missions.active&&!t.storyMode&&i.appendChild(this.btn("ABANDON JOB",()=>{t.missions.stop(!0),t.resume()})),t.world.data.interior||i.appendChild(this.btn("WORLD MAP / TRAVEL",()=>this.go(()=>this.worldMap(!0)))),i.appendChild(this.btn("CAMERA: "+so(t.rig.mode),()=>{t.cycleCamera(),this.pause()})),i.appendChild(this.btn("SUITS",()=>this.go(()=>this.suits()))),i.appendChild(this.btn("MOVES & CONTROLS",()=>this.go(()=>this.controls()))),i.appendChild(this.btn("SETTINGS",()=>this.go(()=>this.settings()))),i.appendChild(this.btn("QUIT TO TITLE",()=>t.toTitle())),e.appendChild(i);let n=t.save.data.stats;e.appendChild(It("div","stats",`Crimes stopped <b>${n.crimes}</b> \xB7 Takedowns <b>${n.takedowns}</b> \xB7 Swung <b>${(t.player.swingDistance/1e3).toFixed(2)} km</b> \xB7 Rep <b>\u2605${t.save.data.reputation}</b>`))}inventory(){let t=this.game;this.stack=[],this.currentFn=()=>this.inventory();let e=this.panel("GEAR");e.appendChild(It("h4","","GADGETS (R1 to fire \xB7 \u25C0 \u25B6 to switch)"));let i=It("div","chips");t.combat.gadgets.forEach((r,o)=>{let a=this.btn(`${r.name}<small>${r.desc||""}</small>`,()=>{t.combat.gadgetIdx=o,this.inventory()},o===t.combat.gadgetIdx?"sel":"");a.style.borderColor=r.color,i.appendChild(a)}),e.appendChild(i),e.appendChild(It("h4","","RIDES (D-pad \u25BC to cycle)"));let n=It("div","chips");for(let r of t.save.data.inventory.rides){let o=t.registry.get("rides",r);o&&n.appendChild(It("div","chip",`${o.name}<small>${o.desc||""}</small>`))}e.appendChild(n),e.appendChild(this.btn("SUITS",()=>this.go(()=>this.suits()))),e.appendChild(this.btn("CLOSE",()=>t.resume(),"big"))}suits(){let t=this.game,e=this.panel("SUITS"),i=It("div","cards suits");for(let n of t.registry.list("skins")){let r=t.save.data.unlockedSkins.includes(n.id)||n.unlocked,o=It("div","card suit"+(r?"":" locked")+(t.save.data.skin===n.id?" sel":"")),a=document.createElement("canvas");a.width=120,a.height=120,eo(a,{style:n.style==="pod"?"face":"mask",primary:n.palette.primary,secondary:n.palette.secondary,accent:n.palette.accent,eyes:n.palette.eyes,emblem:!0,bg:n.palette.bg||"#f2c14e",skin:n.palette.skin,hair:n.palette.hair}),o.appendChild(a),o.appendChild(It("div","c-title",n.name)),o.appendChild(It("div","c-desc",r?n.desc||"":n.unlockText||"Locked")),n._pack&&!n._pack.startsWith("base")&&o.appendChild(It("div","c-badge",n._pack)),r&&o.addEventListener("click",()=>{t.setSkin(n.id),t.audio.play("ui_ok"),this.suits()}),i.appendChild(o)}e.appendChild(i),e.appendChild(this.btn("BACK",()=>this.back()))}settings(){let t=this.game,e=t.save.settings,i=this.panel("SETTINGS"),n=It("div","form"),r=(c,h)=>{let d=It("label","row");d.appendChild(It("span","",c)),d.appendChild(h),n.appendChild(d)},o=(c,h,d)=>{let u=document.createElement("select");for(let[f,g]of h){let y=document.createElement("option");y.value=f,y.textContent=g,String(e[c])===String(f)&&(y.selected=!0),u.appendChild(y)}return u.addEventListener("change",()=>{e[c]=isNaN(+u.value)||u.value===""?u.value==="true"?!0:u.value==="false"?!1:u.value:+u.value,t.applySettings(),d&&d()}),u},a=(c,h,d,u)=>{let f=document.createElement("input");return f.type="range",f.min=h,f.max=d,f.step=u,f.value=e[c],f.addEventListener("input",()=>{e[c]=+f.value,t.applySettings()}),f},l=c=>{let h=document.createElement("input");return h.type="checkbox",h.checked=!!e[c],h.addEventListener("change",()=>{e[c]=h.checked,t.applySettings()}),h};r("Quality",o("quality",[["auto","Auto (dynamic res)"],["low","Low"],["high","High"]])),r("Comic ink + halftone",l("comicFX")),r("PS1 vertex wobble",l("ps1Wobble")),r("Camera",o("camera",Cs.map(c=>[c,so(c)]),()=>{t.rig.mode=e.camera})),r("Field of view (horizontal)",a("fov",70,115,1)),r("Look sensitivity",a("sens",.3,2.5,.05)),r("Invert look Y",l("invertY")),r("Head bob",a("headBob",0,1,.05)),r("SFX volume",a("sfx",0,1,.05)),r("Music volume",a("music",0,1,.05)),r("Controls size",a("controlsScale",.7,1.4,.05)),r("Controls opacity",a("controlsOpacity",.2,1,.05)),r("Floating stick",l("floatingStick")),r("Left-handed (mirror)",l("leftHanded")),r("Show FPS / draw calls",l("showFPS")),i.appendChild(n),i.appendChild(this.btn("RESET STORY PROGRESS",()=>{confirm("Erase story progress, suits and stats? Settings are kept.")&&(t.save.reset(),this.title())},"danger")),i.appendChild(this.btn("BACK",()=>{t.save.write(),this.back()}))}mods(){let t=this.game,e=this.panel("MODS & PACKS");e.appendChild(It("p","note","Packs are .js files listed in <b>packs/packs.manifest.js</b>. Toggle optional packs here (core packs always load). See docs/MODDING.md to make your own suits, cities, gadgets, chapters and dialogue."));let i=It("div","mods");for(let n of t.registry.packs){let r=!t.registry.disabled.has(n.id),o=It("div","mod"+(r?" on":""));o.innerHTML=`<div><b>${n.name||n.id}</b> <small>v${n.version||"1.0"} \xB7 ${n.author||"unknown"}</small><br><span>${n.description||""}</span></div>`;let a=["cities","skins","gadgets","chapters","sideQuests","crimes"].map(l=>n[l]&&n[l].length?`${n[l].length} ${l}`:"").filter(Boolean).join(" \xB7 ");if(o.appendChild(It("small","counts",a)),n.core)o.appendChild(It("span","core","CORE"));else{let l=this.btn(r?"ENABLED":"DISABLED",()=>{let c=new Set(t.save.data.mods.disabled);r?c.add(n.id):c.delete(n.id),t.save.data.mods.disabled=[...c],t.registry.setDisabled(t.save.data.mods.disabled),t.save.write(),this.mods()},r?"sel":"");o.appendChild(l)}i.appendChild(o)}e.appendChild(i),e.appendChild(this.btn("BACK",()=>this.back()))}controls(){let t=this.panel("MOVES & CONTROLS");t.appendChild(It("div","controls-doc",hg)),t.appendChild(this.btn("BACK",()=>this.back()))}credits(){let t=this.game,e=this.panel("CREDITS");e.appendChild(It("div","controls-doc",t.registry.str("credits",""))),e.appendChild(this.btn("BACK",()=>this.back()))}chapterComplete(t,e,i){let n=this.panel(t.title+" \u2014 COMPLETE","complete");n.appendChild(It("p","note",t.outroText||"To be continued\u2026")),t.reward&&t.reward.unlockSkins&&n.appendChild(It("p","note","Suit unlocked: <b>"+t.reward.unlockSkins.map(r=>(this.game.registry.get("skins",r)||{}).name||r).join(", ")+"</b>")),e&&n.appendChild(this.btn("NEXT: "+e.title,()=>{this.hide(),i("next")},"big")),n.appendChild(this.btn("FREE ROAM",()=>{this.hide(),i("roam")})),n.appendChild(this.btn("TITLE",()=>{this.hide(),i("title")}))}};function so(s){return{fp:"First-person",tp:"Third-person",shoulderR:"Shoulder (Right)",shoulderL:"Shoulder (Left)"}[s]||s}var hg=`
<table>
<tr><th>Touch / Pad</th><th>Keyboard</th><th>Action</th></tr>
<tr><td>Left stick</td><td>WASD</td><td>Move (push fully to run)</td></tr>
<tr><td>Drag screen</td><td>Mouse (click to lock)</td><td>Look</td></tr>
<tr><td style="color:#1e7bff">\u2715 Cross</td><td>Space</td><td>Jump \xB7 Vault \xB7 Mantle \xB7 Swing-jump \xB7 Wall-jump</td></tr>
<tr><td style="color:#ff1e3c">\u25CB Circle</td><td>C</td><td>Crouch \xB7 Slide (while running) \xB7 Drop \xB7 Dodge (when \u26A0)</td></tr>
<tr><td style="color:#ff2fb3">\u25A0 Square</td><td>E</td><td>Interact \xB7 Talk \xB7 Strike \xB7 Takedown \xB7 (hold) Reload</td></tr>
<tr><td style="color:#39ff6a">\u25B2 Triangle</td><td>Q</td><td>Next gadget \xB7 (hold) Gear menu</td></tr>
<tr><td>R2</td><td>F / MMB</td><td>Hold to SWING (keep holding to chain)</td></tr>
<tr><td>L2</td><td>Z / RMB</td><td>Aim \xB7 with R2: Point-Launch to marked ledge</td></tr>
<tr><td>R1</td><td>R / LMB</td><td>Fire gadget</td></tr>
<tr><td>L1</td><td>Shift</td><td>Hold: FREE-RUN (auto vault/climb/wall-run)</td></tr>
<tr><td>L3</td><td>Tab</td><td>Tether-Sense (see foes through walls)</td></tr>
<tr><td>R3</td><td>V</td><td>Camera: FP \u2192 3rd \u2192 Shoulder R \u2192 Shoulder L</td></tr>
<tr><td>D-pad \u25BC</td><td>\u2193</td><td>Ride: board \u2192 skates \u2192 bike \u2192 on foot</td></tr>
<tr><td>D-pad \u25C0 \u25B6</td><td>\u2190 \u2192</td><td>Switch gadget</td></tr>
<tr><td>D-pad \u25B2</td><td>\u2191</td><td>Ping objective</td></tr>
<tr><td>START / SELECT</td><td>Esc / M</td><td>Pause \xB7 World map</td></tr>
</table>
<p><b>Stealth:</b> crouch to stay quiet, perch high (goons rarely look up), throw a Decoy Chirp to pull guards, and take them down from behind or from a ledge (\u25A0 when prompted). Downed goons found by others raise the alarm.</p>
<p><b>Swinging:</b> anchors need something tall to stick to. Pump by looking where you want to go; release at the bottom of the arc for speed, \u2715 for a swing-jump.</p>`;var Ih=22050;function Vt(s,t,e,i,n,r=1e-4){s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(i,t+e),s.gain.exponentialRampToValueAtTime(r,t+e+n)}function Tl(s,t){let e=s.createBuffer(1,Math.ceil(s.sampleRate*t),s.sampleRate),i=e.getChannelData(0),n=1234567;for(let r=0;r<i.length;r++)n=n*1103515245+12345&2147483647,i[r]=n/1073741823-1;return e}var He=(s,t)=>{let e=s.createBufferSource();return e.buffer=Tl(s,t),e},fe=(s,t,e)=>{let i=s.createOscillator();return i.type=t,i.frequency.value=e,i},zt=(s,t=1)=>{let e=s.createGain();return e.gain.value=t,e},be=(s,t,e,i=1)=>{let n=s.createBiquadFilter();return n.type=t,n.frequency.value=e,n.Q.value=i,n},Dh={thwip:{dur:.34,build(s,t){let e=He(s,.3),i=be(s,"bandpass",4200,2.2),n=zt(s);i.frequency.setValueAtTime(5200,0),i.frequency.exponentialRampToValueAtTime(900,.2),Vt(n,0,.004,.9,.22),e.connect(i).connect(n).connect(t),e.start(0);let r=fe(s,"triangle",2400),o=zt(s);r.frequency.setValueAtTime(2600,.01),r.frequency.exponentialRampToValueAtTime(320,.16),Vt(o,.01,.005,.35,.15),r.connect(o).connect(t),r.start(0),r.stop(.3);let a=He(s,.02),l=be(s,"highpass",2500),c=zt(s);Vt(c,0,.001,.6,.015),a.connect(l).connect(c).connect(t),a.start(0)}},zip:{dur:.5,build(s,t){let e=fe(s,"sawtooth",180),i=be(s,"lowpass",300,6),n=zt(s);e.frequency.setValueAtTime(140,0),e.frequency.exponentialRampToValueAtTime(620,.4),i.frequency.setValueAtTime(300,0),i.frequency.exponentialRampToValueAtTime(2600,.4),Vt(n,0,.02,.35,.42),e.connect(i).connect(n).connect(t),e.start(0),e.stop(.5);let r=He(s,.5),o=be(s,"bandpass",1500,1.5),a=zt(s);Vt(a,0,.05,.4,.4),r.connect(o).connect(a).connect(t),r.start(0)}},release:{dur:.25,build(s,t){let e=He(s,.25),i=be(s,"highpass",3e3),n=zt(s);Vt(n,0,.003,.4,.12),e.connect(i).connect(n).connect(t),e.start(0)}},whoosh:{dur:.7,build(s,t){let e=He(s,.7),i=be(s,"bandpass",400,.9),n=zt(s);i.frequency.setValueAtTime(350,0),i.frequency.exponentialRampToValueAtTime(1800,.3),i.frequency.exponentialRampToValueAtTime(300,.65),Vt(n,0,.18,.7,.45),e.connect(i).connect(n).connect(t),e.start(0)}},step:{dur:.09,build(s,t){let e=He(s,.09),i=be(s,"lowpass",700),n=zt(s);Vt(n,0,.002,.5,.06),e.connect(i).connect(n).connect(t),e.start(0)}},land:{dur:.35,build(s,t){let e=fe(s,"sine",140),i=zt(s);e.frequency.exponentialRampToValueAtTime(42,.25),Vt(i,0,.003,.9,.28),e.connect(i).connect(t),e.start(0),e.stop(.35);let n=He(s,.2),r=be(s,"lowpass",900),o=zt(s);Vt(o,0,.002,.5,.15),n.connect(r).connect(o).connect(t),n.start(0)}},jump:{dur:.2,build(s,t){let e=He(s,.2),i=be(s,"bandpass",900,1),n=zt(s);Vt(n,0,.01,.35,.14),e.connect(i).connect(n).connect(t),e.start(0)}},punch:{dur:.25,build(s,t){let e=He(s,.12),i=be(s,"lowpass",2200),n=zt(s);Vt(n,0,.001,.9,.08),e.connect(i).connect(n).connect(t),e.start(0);let r=fe(s,"sine",180),o=zt(s);r.frequency.exponentialRampToValueAtTime(55,.18),Vt(o,0,.002,1,.18),r.connect(o).connect(t),r.start(0),r.stop(.25)}},whiff:{dur:.2,build(s,t){let e=He(s,.2),i=be(s,"bandpass",1200,2),n=zt(s);i.frequency.setValueAtTime(700,0),i.frequency.exponentialRampToValueAtTime(2400,.15),Vt(n,0,.03,.4,.12),e.connect(i).connect(n).connect(t),e.start(0)}},takedown:{dur:.6,build(s,t){Dh.punch.build(s,t);let e=fe(s,"square",90),i=be(s,"lowpass",400),n=zt(s);e.frequency.exponentialRampToValueAtTime(40,.4),Vt(n,.05,.005,.5,.45),e.connect(i).connect(n).connect(t),e.start(0),e.stop(.6)}},gunshot:{dur:.4,build(s,t){let e=He(s,.4),i=be(s,"highpass",600),n=zt(s);Vt(n,0,.001,1,.25),e.connect(i).connect(n).connect(t),e.start(0);let r=fe(s,"sine",120),o=zt(s);r.frequency.exponentialRampToValueAtTime(40,.15),Vt(o,0,.001,.8,.14),r.connect(o).connect(t),r.start(0),r.stop(.3)}},explosion:{dur:1.6,build(s,t){let e=He(s,1.6),i=be(s,"lowpass",1200,.7),n=zt(s);i.frequency.setValueAtTime(1600,0),i.frequency.exponentialRampToValueAtTime(90,1.4),Vt(n,0,.005,1,1.5),e.connect(i).connect(n).connect(t),e.start(0);let r=fe(s,"sine",70),o=zt(s);r.frequency.exponentialRampToValueAtTime(28,1),Vt(o,0,.005,1,1),r.connect(o).connect(t),r.start(0),r.stop(1.4)}},pod:{dur:.4,build(s,t){let e=fe(s,"sine",300),i=zt(s);e.frequency.setValueAtTime(900,0),e.frequency.exponentialRampToValueAtTime(140,.25),Vt(i,0,.003,.6,.3),e.connect(i).connect(t),e.start(0),e.stop(.4);let n=He(s,.3),r=be(s,"bandpass",600,3),o=zt(s);Vt(o,.02,.01,.6,.22),n.connect(r).connect(o).connect(t),n.start(0)}},chirp:{dur:.6,build(s,t){for(let e=0;e<3;e++){let i=e*.16,n=fe(s,"sine",2200),r=zt(s);n.frequency.setValueAtTime(2100,i),n.frequency.exponentialRampToValueAtTime(3400,i+.08),Vt(r,i,.005,.35,.09),n.connect(r).connect(t),n.start(i),n.stop(i+.14)}}},alert:{dur:.45,build(s,t){[[0,740],[.12,1110]].forEach(([e,i])=>{let n=fe(s,"square",i),r=be(s,"lowpass",3e3),o=zt(s);Vt(o,e,.005,.25,.25),n.connect(r).connect(o).connect(t),n.start(e),n.stop(e+.32)})}},suspicious:{dur:.5,build(s,t){let e=fe(s,"triangle",520),i=fe(s,"sine",9),n=zt(s,40),r=zt(s);i.connect(n).connect(e.frequency),Vt(r,0,.05,.25,.4),e.connect(r).connect(t),e.start(0),i.start(0),e.stop(.5),i.stop(.5)}},collect:{dur:.6,build(s,t){[660,880,1320,1760].forEach((e,i)=>{let n=i*.07,r=fe(s,"square",e),o=zt(s);Vt(o,n,.004,.18,.18),r.connect(o).connect(t),r.start(n),r.stop(n+.25)})}},ui_click:{dur:.08,build(s,t){let e=fe(s,"square",1200),i=zt(s);Vt(i,0,.002,.15,.05),e.connect(i).connect(t),e.start(0),e.stop(.08)}},ui_ok:{dur:.3,build(s,t){[880,1320].forEach((e,i)=>{let n=i*.08,r=fe(s,"triangle",e),o=zt(s);Vt(o,n,.004,.3,.15),r.connect(o).connect(t),r.start(n),r.stop(n+.2)})}},ui_back:{dur:.25,build(s,t){[880,587].forEach((e,i)=>{let n=i*.08,r=fe(s,"triangle",e),o=zt(s);Vt(o,n,.004,.25,.12),r.connect(o).connect(t),r.start(n),r.stop(n+.2)})}},blip:{dur:.05,build(s,t){let e=fe(s,"square",520),i=be(s,"lowpass",2e3),n=zt(s);Vt(n,0,.002,.12,.035),e.connect(i).connect(n).connect(t),e.start(0),e.stop(.05)}},laugh:{dur:1.4,build(s,t){[0,.2,.38,.55,.75].forEach((e,i)=>{let n=520-i*35,r=fe(s,"sawtooth",n),o=fe(s,"sine",28),a=zt(s,60),l=be(s,"bandpass",1100,2),c=zt(s);o.connect(a).connect(r.frequency),r.frequency.setValueAtTime(n*1.15,e),r.frequency.exponentialRampToValueAtTime(n*.8,e+.15),Vt(c,e,.01,.4,.15),r.connect(l).connect(c).connect(t),r.start(e),o.start(e),r.stop(e+.2),o.stop(e+.2)})}},clang:{dur:1,build(s,t){[220,347,513,761].forEach((n,r)=>{let o=fe(s,"sine",n),a=zt(s);Vt(a,0,.002,.25/(r+1),.9),o.connect(a).connect(t),o.start(0),o.stop(1)});let e=He(s,.05),i=zt(s);Vt(i,0,.001,.6,.04),e.connect(i).connect(t),e.start(0)}},bell:{dur:2.5,build(s,t){[196,392,466,588,784].forEach((e,i)=>{let n=fe(s,"sine",e),r=zt(s);Vt(r,0,.005,.28/(1+i*.6),2.3),n.connect(r).connect(t),n.start(0),n.stop(2.5)})}},ignite:{dur:.9,build(s,t){let e=He(s,.9),i=be(s,"lowpass",300,1),n=zt(s);i.frequency.exponentialRampToValueAtTime(2500,.4),Vt(n,0,.15,.8,.7),e.connect(i).connect(n).connect(t),e.start(0)}},hurt:{dur:.3,build(s,t){let e=fe(s,"sawtooth",220),i=be(s,"lowpass",900),n=zt(s);e.frequency.exponentialRampToValueAtTime(110,.25),Vt(n,0,.005,.4,.25),e.connect(i).connect(n).connect(t),e.start(0),e.stop(.3)}},siren:{dur:1.6,build(s,t){let e=fe(s,"square",700),i=be(s,"lowpass",1600),n=zt(s);for(let r=0;r<4;r++)e.frequency.setValueAtTime(r%2?950:700,r*.4);Vt(n,0,.05,.12,1.5),e.connect(i).connect(n).connect(t),e.start(0),e.stop(1.6)}},ride:{dur:.3,build(s,t){let e=fe(s,"triangle",330),i=zt(s);e.frequency.exponentialRampToValueAtTime(660,.12),Vt(i,0,.005,.25,.2),e.connect(i).connect(t),e.start(0),e.stop(.3)}},sense:{dur:.7,build(s,t){[1568,2093,2637].forEach((e,i)=>{let n=fe(s,"sine",e),r=zt(s);Vt(r,i*.03,.01,.15,.6),n.connect(r).connect(t),n.start(0),n.stop(.7)})}}},ro=class{constructor(t){this.settings=t,this.ctx=null,this.buffers={},this.ready=!1,this.recipes={...Dh},this.loops={},this._lastPlay={}}addRecipe(t,e){this.recipes[t]=e,this.ready&&this._render(t).then(i=>this.buffers[t]=i)}async unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.connect(this.master),this.applyVolumes(),await this.renderAll(),this._makeLoops(),this.ready=!0,q.emit("audio:ready"))}applyVolumes(){this.ctx&&(this.sfxBus.gain.value=this.settings.sfx,this.musicBus.gain.value=this.settings.music)}async _render(t){let e=this.recipes[t],i=window.OfflineAudioContext||window.webkitOfflineAudioContext,n=new i(1,Math.ceil(Ih*e.dur),Ih),r=n.createGain();r.connect(n.destination),e.build(n,r);let o=await n.startRendering(),a=o.getChannelData(0),l=0;for(let h=0;h<a.length;h++){let d=Math.abs(a[h]);d>l&&(l=d)}let c=l>.9?.9/l:1;if(c!==1)for(let h=0;h<a.length;h++)a[h]*=c;return o}async renderAll(){let t=Object.keys(this.recipes);await Promise.all(t.map(async e=>{try{this.buffers[e]=await this._render(e)}catch(i){console.warn("sfx render failed",e,i)}}))}play(t,{vol:e=1,rate:i=1,vary:n=.06,minGap:r=.03}={}){if(!this.ready||!this.buffers[t])return;let o=this.ctx.currentTime;if(this._lastPlay[t]&&o-this._lastPlay[t]<r)return;this._lastPlay[t]=o;let a=this.ctx.createBufferSource();a.buffer=this.buffers[t],a.playbackRate.value=i*(1+(Math.random()*2-1)*n);let l=this.ctx.createGain();l.gain.value=e,a.connect(l).connect(this.sfxBus),a.start(o)}_makeLoops(){let t=this.ctx,e=(i,n,r)=>{let o=t.createBufferSource();o.buffer=Tl(t,2),o.loop=!0;let a=t.createBiquadFilter();a.type=i,a.frequency.value=n,a.Q.value=r;let l=t.createGain();return l.gain.value=0,o.connect(a).connect(l).connect(this.sfxBus),o.start(),{src:o,f:a,g:l}};this.loops.wind=e("bandpass",500,.6),this.loops.fire=e("lowpass",500,1.5),this.loops.city=e("lowpass",220,.5),this.loops.roll=e("bandpass",180,2),this._music()}setLoop(t,e,i){let n=this.loops[t];if(!n)return;let r=this.ctx.currentTime;n.g.gain.setTargetAtTime(e,r,.15),i&&n.f.frequency.setTargetAtTime(i,r,.2)}_music(){let t=this.ctx;this.intensity=0,this.musicOn=!0;let e=[0,0,7,5,3,3,7,10],i=55*Math.pow(2,3/12),n=0,r=t.currentTime+.2,o=()=>{if(this.ctx){for(;r<t.currentTime+.25;){let a=96+this.intensity*40,l=60/a/2;this.musicOn&&this.settings.music>0&&(n%2===0&&Lh(t,this.musicBus,"triangle",i*Math.pow(2,e[n/2%8]/12),r,l*1.8,.22),ug(t,this.musicBus,r,n%4===2?.06:.025),this.intensity>.4&&n%4===0&&Lh(t,this.musicBus,"square",i*4*Math.pow(2,[0,3,7,10][n/4%4]/12),r,l,.05)),r+=l,n=(n+1)%64}setTimeout(o,90)}};o()}toWav(t){let e=this.buffers[t];if(!e)return null;let i=e.getChannelData(0),n=new ArrayBuffer(44+i.length*2),r=new DataView(n),o=(a,l)=>{for(let c=0;c<l.length;c++)r.setUint8(a+c,l.charCodeAt(c))};o(0,"RIFF"),r.setUint32(4,36+i.length*2,!0),o(8,"WAVE"),o(12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,e.sampleRate,!0),r.setUint32(28,e.sampleRate*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),o(36,"data"),r.setUint32(40,i.length*2,!0);for(let a=0;a<i.length;a++)r.setInt16(44+a*2,Math.max(-1,Math.min(1,i[a]))*32767,!0);return n}};function Lh(s,t,e,i,n,r,o){let a=s.createOscillator();a.type=e,a.frequency.value=i;let l=s.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(o,n+.01),l.gain.exponentialRampToValueAtTime(1e-4,n+r),a.connect(l).connect(t),a.start(n),a.stop(n+r+.05)}var El=null;function ug(s,t,e,i){El||(El=Tl(s,.05));let n=s.createBufferSource();n.buffer=El;let r=s.createBiquadFilter();r.type="highpass",r.frequency.value=7e3;let o=s.createGain();o.gain.setValueAtTime(i,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.045),n.connect(r).connect(o).connect(t),n.start(e)}var oo=class{constructor(){this.version="1.0.0",this.registry=me,this.save=de,this.bus=q,this.input=j,this.mod=uh(this),me.setDisabled(de.data.mods.disabled),this.state="boot",this.time=0,this.hitstop=0,this.storyMode=!1,this.freeRoam=!1,this.audio=new ro(de.settings),this.renderer=new zr(document.getElementById("gl"),de.settings),gh(),this.overlay=new Fr(document.getElementById("ctrl"),de.settings),this.overlay.setVisible(!1),this.world=new Xr(this.renderer),this.fx=new Hr(this.world.scene),this.player=new qr(this),this.rig=new Yr(this.renderer.camera,de.settings),this.npcs=new Zr(this),this.npcs.attach(this.world.scene),this.combat=new Kr(this),this.combat.attach(this.world.scene),this.missions=new jr(this),this.activities=new Qr(this),this.dialogue=new to(this),this.hud=new io(this),this.menus=new no(this),this.vmScene=new $i,this.vmCam=new Pe(60,1,.01,10),this.setSkin(de.data.skin,!0),this._wire(),me.runHook("onBoot",this),this.last=performance.now(),requestAnimationFrame(t=>this.frame(t))}setSkin(t,e,i){let n=me.get("skins",t)||me.get("skins","tether_classic")||me.list("skins")[0];n&&(i||(this.save.data.skin=n.id,e||this.save.write()),this.activeSkin=n.id,this.heroModel&&this.world.scene.remove(this.heroModel.root),this.heroModel=is({...n.palette,style:n.style||"hero"}),this.heroModel.root.traverse(r=>r.frustumCulled=!1),this.vm&&this.vmScene.remove(this.vm.group),this.vm=vh(n.palette),this.vmScene.add(this.vm.group),this.vm.kickT={L:0,R:0},this.vm.kick=r=>this.vm.kickT[r]=.18,this.viewmodel=this.vm,this.world.scene&&this.world.scene.add(this.heroModel.root),q.emit("skin:changed",n))}applySettings(){let t=de.settings;this.renderer.applyQuality(),this.audio.applyVolumes(),this.overlay.layout(),this.rig.mode!==t.camera&&(this.rig.mode=t.camera)}cycleCamera(){let t=this.rig.cycle();de.write(),this.hud.toast("Camera: "+so(t),1.2),q.emit("camera:mode",t)}_wire(){let t=this.audio,e=this.player;q.on("player:thwip",()=>{t.play("thwip"),this.vm&&this.vm.kick("R")}),q.on("player:release",n=>t.play(n&&n.jump?"whoosh":"release",{vol:.6})),q.on("player:zip",()=>t.play("zip")),q.on("player:ziparrive",()=>t.play("whoosh",{vol:.5})),q.on("player:jump",()=>t.play("jump",{vol:.6})),q.on("player:land",n=>{t.play("land",{vol:jt(n.impact*1.4,.2,1)}),n.impact>.6&&this.rig.addShake(n.impact*.5)}),q.on("player:step",n=>t.play("step",{vol:n.crouch?.15:.35+Math.min(.3,n.speed*.03),rate:.9+Math.random()*.2})),q.on("player:vault",()=>t.play("whiff",{vol:.5})),q.on("player:mantle",()=>t.play("whiff",{vol:.4,rate:.8})),q.on("player:grab",()=>t.play("step",{vol:.6,rate:.7})),q.on("player:slide",()=>t.play("whoosh",{vol:.5,rate:.7})),q.on("player:wallrun",()=>t.play("whoosh",{vol:.4,rate:1.2})),q.on("player:noanchor",()=>{this.hud.toast("Nothing tall enough to anchor to!",1.2),t.play("ui_back",{vol:.4})}),q.on("player:ride",n=>{t.play("ride"),this.hud.toast(n?(me.get("rides",n)||{}).name||n:"On foot",1),this.updateRideMesh()}),q.on("player:bail",()=>{t.play("land"),this.hud.toast("BAIL!",1)}),q.on("player:splash",()=>{t.play("whoosh",{rate:.5}),this.hud.toast("Splash! Back to the rooftops.",1.6)}),q.on("player:hurt",()=>t.play("hurt",{vol:.5,minGap:.25})),q.on("player:dead",()=>this.onDeath()),q.on("npc:suspicious",()=>t.play("suspicious",{vol:.5,minGap:.6})),q.on("npc:alert",()=>t.play("alert",{minGap:.8})),q.on("npc:telegraph",n=>this.combat.telegraph(n.npc)),q.on("npc:defeated",()=>{}),q.on("noise",n=>this.npcs.onNoise(n)),q.on("ui:inventory",()=>this.openInventory()),q.on("ui:map",()=>{this.state==="play"&&!this.world.data.interior&&(this.pause(),this.menus.go(()=>this.menus.worldMap(!0)))}),q.on("mission:complete",n=>this.onMissionComplete(n)),q.on("boss:defeated",()=>{this.hud.toast("THE JESTER IS DOWN!",3)}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause()}),document.getElementById("ctrl").addEventListener("click",()=>{this.state==="play"&&j.lastDevice==="kbm"&&!matchMedia("(pointer:coarse)").matches&&document.body.requestPointerLock&&document.body.requestPointerLock()});let i=()=>{this.audio.unlock()};window.addEventListener("pointerdown",i,{once:!1}),window.addEventListener("keydown",i,{once:!0})}updateRideMesh(){this.rideMesh&&(this.world.dynamic.remove(this.rideMesh),this.rideMesh=null),this.player.ride&&(this.rideMesh=_h(this.player.ride),this.world.dynamic.add(this.rideMesh))}boot(){this.state="menu",document.getElementById("bootsplash").classList.add("hide"),this.menus.title(),this.travel(de.data.lastCity||"midtown",{attract:!0})}toTitle(){this.missions.stop(!1),this.activities.clear(),this.npcs.clear(),this.despawnBoss(),this.storyMode=!1,this.freeRoam=!1,this.state="menu",this.overlay.setVisible(!1),this.hud.show(!1),document.exitPointerLock&&document.exitPointerLock(),this.menus.title(),de.write()}pause(){this.state==="play"&&(this.state="pause",this.overlay.setVisible(!1),j.clearTouch(),document.exitPointerLock&&document.exitPointerLock(),this.menus.pause(),q.emit("game:pause"))}resume(){this.menus.hide(),this.state="play",this.overlay.setVisible(!this.dialogue.open),q.emit("game:resume")}openInventory(){this.state==="play"&&(this.state="pause",this.overlay.setVisible(!1),j.clearTouch(),this.menus.inventory())}async travel(t,e={}){let i=me.get("cities",t)||me.list("cities")[0];if(!i){console.error("No cities registered");return}let n=me.get("palettes",e.palette||i.palette)||me.list("palettes")[0];this.state=e.attract?"menu":"loading",this.overlay.setVisible(!1),this.hud.show(!1),e.keepMission||this.missions.stop(!1),this.activities.clear(),this.npcs.clear(),this.despawnBoss(),this.combat.reset(),this.world.panic=null;let r=me.tips,o=r.length?r[Math.random()*r.length|0]:"";e.attract||this.menus.loading(i,o);let a=this.loadToken=(this.loadToken||0)+1,l=this.world.load(i,n);if(!await new Promise(d=>{let u=()=>{if(a!==this.loadToken){d(!1);return}let f=performance.now(),g;do g=l.next(),!g.done&&!e.attract&&this.menus.loadingProgress(g.value);while(!g.done&&performance.now()-f<14);g.done?d(!0):requestAnimationFrame(u)};u()}))return!1;this.cityId=i.id,this.cityName=i.name,this.cityDef=i,this.world.scene.add(this.heroModel.root),this.fireOn=!1,!i.hidden&&!e.attract&&(de.data.lastCity=i.id);let h=e.spawn?this.missions.loc(e.spawn):this.world.data.spawn.clone();return this.player.spawn(h,e.yaw??i.spawnYaw??0),this.checkpoint={pos:h.clone(),yaw:this.player.yaw},me.runHook("onCityLoaded",this,i),e.attract?(this.attract=!0,!0):(this.attract=!1,this.renderer.gl.compile(this.world.scene,this.renderer.camera),await dg(450),a!==this.loadToken?!1:(this.menus.loadingDone(),this.menus.hide(),this.state="play",this.overlay.setVisible(!0),this.hud.show(!0),this.freeRoam=!!e.freeRoam,(this.freeRoam||e.activities)&&this.activities.setup(i.id),i.arrivalThought&&this.freeRoam&&this.dialogue.thought(i.arrivalThought),de.write(),q.emit("city:loaded",i),!0))}startFreeRoam(t){this.activeSkin!==de.data.skin&&this.setSkin(de.data.skin,!0),this.storyMode=!1,this.player.abilities={swing:!0,zip:!0,gadgets:!0,ride:!0,wallrun:!0,climb:!0},this.travel(t,{freeRoam:!0})}async startStory(t,e){let i=me.get("chapters",t)||me.get("chapters","ch1");if(this.storyMode=!0,de.data.story.chapter=i.id,e||(de.data.story.step=0),i.forceSkin?this.setSkin(i.forceSkin,!0,!0):this.activeSkin!==de.data.skin&&this.setSkin(de.data.skin,!0),this.player.abilities={swing:!0,zip:!0,gadgets:!0,ride:!0,wallrun:!0,climb:!0,...i.abilities||{}},!await this.travel(i.city,{spawn:i.spawn,yaw:i.spawnYaw,keepMission:!1,activities:i.freeRoamDuring,palette:i.palette}))return;this.freeRoam=!!i.freeRoamDuring;let r=0;if(e&&de.data.story.step>0){let o=Math.min(de.data.story.step,i.steps.length-1);for(let l=0;l<=o;l++)i.steps[l].checkpoint&&(r=l);for(let l=0;l<r;l++){let c=i.steps[l];c.type==="setAbility"&&Object.assign(this.player.abilities,c.abilities),c.type==="fire"&&(this.fireOn=!0,this.fireRate=c.rate||2.2)}let a=i.steps[r];if(a&&a.at){let l=this.missions.loc(a.at);l&&(this.player.spawn(l,a.yaw??this.player.yaw),this.checkpoint={pos:l.clone(),yaw:this.player.yaw})}this.fireOn&&this.world.fire&&(this.world.fire.front=this.player.pos.z-16)}this.missions.start(i,{story:!0,startAt:r})}onMissionComplete(t){if(!this.storyMode||t.side||!me.get("chapters",t.id))return;let e=de.data.story;e.completed.includes(t.id)||e.completed.push(t.id);let i=t.next?me.get("chapters",t.next):null;e.chapter=i?i.id:t.id,e.step=0,de.write(),this.state="pause",this.overlay.setVisible(!1),setTimeout(()=>this.menus.chapterComplete(t,i,n=>{n==="next"&&i?this.startStory(i.id,!1):n==="roam"?this.startFreeRoam(t.roamCity||(this.cityDef&&!this.cityDef.hidden?this.cityId:"midtown")):this.toTitle()}),400)}restartStep(){let t=this.missions;if(!t.active){this.resume();return}this.despawnBoss(),t.cleanupSpawns();let e=t.step,i=e&&e.at&&t.loc(e.at)||this.checkpoint.pos;this.player.spawn(i,this.checkpoint.yaw),t.stepIdx--,t.ctx=null,t.step=null,t.impl=null,t.next(),this.resume()}onDeath(){this.hud.toast("DOWN\u2026 but not out.",2),this.audio.play("ui_back"),this.world.fire&&(this.world.fire.front=Math.min(this.world.fire.front,this.player.pos.z-14)),setTimeout(()=>{if(this.missions.active){let t=this.missions.step,e=t&&t.at&&this.missions.loc(t.at)||this.player.lastSafe;this.boss,this.player.spawn(e,this.player.yaw)}else this.player.spawn(this.player.lastSafe,this.player.yaw);this.player.health=this.player.maxHealth},700)}spawnBoss(t,e){this.despawnBoss();let i=me.get("npcTypes",t);return this.boss=new $r(this,i,e),this.boss}despawnBoss(){this.boss&&(this.boss.dispose(),this.boss=null)}frame(t){requestAnimationFrame(n=>this.frame(n));let e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.renderer.adapt(e),this.hitstop>0&&(this.hitstop-=e,e*=.08),this.time+=e,j.poll(e,de.settings);let i=this.state==="play";if(i){if(j.pressed("start")?this.pause():j.pressed("select")&&!this.world.data.interior&&(this.pause(),this.menus.go(()=>this.menus.worldMap(!0))),j.pressed("r3")&&this.cycleCamera(),j.pressed("up")){let n=this.hud.waypoint;this.hud.toast(n?`Objective: ${Math.round(n.distanceTo(this.player.pos))}m`:"No objective \u2014 explore!",1.4),this.audio.play("ui_click")}this.dialogue.open||this.combat.update(e),this.player.update(e),this.missions.update(e),this.activities.update(e),this.npcs.update(e,this.player),this.boss&&this.boss.update(e),this.updateFire(e),this.checkTriggers(),this.dialogue.update(e),this.updateHints()}else(this.state==="pause"||this.state==="menu")&&(j.pressed("start")&&this.state==="pause"&&this.resume(),this.attract&&this.state==="menu"&&this.attractCam(e));this.world.data&&((i||this.state==="pause")&&this.rig.update(i?e:0,this.player,this.world),this.renderer.camera.updateMatrixWorld(),this.world.update(i?e:e*.3,this.renderer.camera,this.player),this.updateHero(e),this.updateViewModel(e),this.fx.update(e),i&&this.hud.update(e),this.updateAudioLoops(),this.renderer.render(this.world.scene,this.rig.mode==="fp"&&(i||this.state==="pause")?this.vmScene:null,this.vmCam)),this.overlay.draw()}attractCam(t){let e=this.renderer.camera,i=this.time*.05,n=this.world.data.spawn;e.position.set(n.x+Math.cos(i)*90,70,n.z+Math.sin(i)*90),e.lookAt(n.x,30,n.z)}updateHero(t){let e=this.player,i=this.heroModel,n=this.rig.mode==="fp";if(i.root.visible=!n&&!!this.world.data&&this.state!=="menu",this.rideMesh&&(this.rideMesh.position.copy(e.pos),this.rideMesh.rotation.y=Math.atan2(-e.vel.x,-e.vel.z)+Math.PI,this.rideMesh.visible=this.state!=="menu"),!i.root.visible)return;i.root.position.copy(e.pos),this.rideMesh&&(i.root.position.y+=e.ride==="bicycle"?.35:.15);let r=e.yaw+Math.PI;e.fsm.is("swing","air","zip","ride")&&e.speed>2&&(r=Math.atan2(e.vel.x,e.vel.z)),e.fsm.is("climb","hang")&&(r=Math.atan2(-e.wallN.x,-e.wallN.z)),e.fsm.is("wallrun")&&(r=Math.atan2(e.vel.x,e.vel.z)),i.root.rotation.y=r,i.root.scale.y=Le(i.root.scale.y,e.fsm.is("slide")?.6:e.crouch?.72:1,12,t),ns(i,e.pose,e.speed,t)}updateViewModel(t){let e=this.vm;if(!e)return;let i=this.renderer.camera,n=this.player;if(e.group.visible=this.rig.mode==="fp"&&this.state!=="menu",!e.group.visible)return;let r=this.vmCam;r.aspect=i.aspect,r.fov=jt(i.fov,50,100),r.updateProjectionMatrix();let o=Math.tan(r.fov*Math.PI/360),a=o*i.aspect;r.rotation.z=this.rig.roll*.5;let l=.5,c=jt(a*l/.55,.42,1);e.group.scale.setScalar(c);let h=this.time,d=n.fsm.is("ground")?Math.min(1,n.speed/7):0;for(let u of["L","R"]){let f=e.hands[u],g=u==="L"?-1:1;e.kickT[u]=Math.max(0,e.kickT[u]-t);let y=g*.6,m=-.78+Math.sin(h*9+(u==="L"?0:Math.PI))*.04*d,p=0,v=.12;n.fsm.is("swing","zip")&&u==="R"&&(y=.42,m=.15,v=1.25),n.fsm.is("climb","hang")&&(y=g*.45,m=-.25+Math.sin(h*8+(u==="L"?0:3))*.12*Math.abs(j.move.y),v=1.3),n.fsm.is("locked")&&(n.lockPose==="punch"||n.lockPose==="takedown")&&u==="R"&&(y=.12,m=-.35,p=-.12,v=0),n.fsm.is("locked")&&n.lockPose==="kick"&&(m=-1.4),n.fsm.is("vault")&&(m=-.95,v=-.4),n.fsm.is("wallrun")&&(n.wallSide<0&&u==="L"||n.wallSide>0&&u==="R")&&(y=g*.85,m=-.2,v=.6),n.fsm.is("slide")&&(m=-.65,y=g*.7),this.combat.aiming&&u==="R"&&(y=.25,m=-.45),e.kickT[u]>0&&(p+=.08*(e.kickT[u]/.18)),this.dialogue.open&&(m=-1.6);let b=-l+p,x=y*a*l/c,T=m*o*l/c;f.position.x=Le(f.position.x,x,16,t),f.position.y=Le(f.position.y,T,16,t),f.position.z=Le(f.position.z,b/c,16,t),f.rotation.x=Le(f.rotation.x,v,14,t)}}updateAudioLoops(){let t=this.audio;if(!t.ready)return;let e=this.player,i=this.state==="play",n=e.vel.length();t.setLoop("wind",i&&!e.ground?jt((n-6)/30,0,.5):0,300+n*40),t.setLoop("roll",i&&e.ride&&e.ground?jt((e.rideSpeed||0)/20,0,.35):0,120+(e.rideSpeed||0)*12);let r=this.fireOn&&this.world.fire?jt(1-Math.abs(this.world.fire.front-e.pos.z)/30,0,1):0;t.setLoop("fire",i?r*.6:0,500+r*600),t.setLoop("city",i&&this.world.data&&!this.world.data.interior?.08:0);let o=this.npcs.list.some(a=>a.hostile&&a.fsm.is("combat"))||this.boss&&this.boss.alive;t.intensity=Le(t.intensity||0,o?1:0,.8,1/60),t.musicOn=this.state!=="loading"}updateFire(t){if(!this.fireOn||!this.world.fire)return;let e=this.world.fire,i=this.player,n=i.pos.z-e.front,r=n>22?4.2:n>10?this.fireRate||2.2:1;e.front+=r*t,this.world.data.outdoorZ&&e.front>this.world.data.outdoorZ&&(e.front=this.world.data.outdoorZ),n<1.5&&i.hurt(30*t,"fire"),this.renderer.postMat.uniforms.flash.value=jt((6-n)/20,0,.25),this.renderer.postMat.uniforms.flashCol.value.set("#ff5a1a")}checkTriggers(){let t=this.world.data.triggers;if(!t)return;let e=this.player.pos;for(let i of t){let n=e.x>=i.min[0]&&e.x<=i.max[0]&&e.y>=i.min[1]&&e.y<=i.max[1]&&e.z>=i.min[2]&&e.z<=i.max[2];n&&!i._in?(i._in=!0,q.emit("trigger:enter",i),i.pit&&(this.hud.toast("Careful! Wall-run across (hold L1, run at the side wall).",2.5),this.player.spawn(new R(0,i.respawnY+.1,i.respawnZ),Math.PI),this.player.yaw=Math.PI),i.seg&&i.seg.shutter&&!i.seg.shutter.closing&&this.closeShutter(i.seg.shutter)):!n&&i._in&&(i._in=!1)}}closeShutter(t){t.closing=!0;let e=new Ni(t.x1-t.x0,t.h,.4);e.translate(0,t.h/2,0);let i=new Ht(e,new Ye({color:14065966}));i.position.set(0,t.y+t.h,t.z),this.world.dynamic.add(i);let n=this.world.collision.add(t.x0,t.y+t.h,t.z-.2,t.x1,t.y+t.h*2,t.z+.2,{});this.audio.play("clang"),this.hud.toast("The shutter is closing \u2014 SLIDE under! (run + \u25CB)",2.2);let r=0,o=2.2,a=()=>{r+=1/60;let l=Math.min(1,r/o),c=t.y+t.h-l*(t.h-0),h=Math.max(t.y+(l<.97?1:0),c);i.position.y=h,n.min[1]=h,n.max[1]=h+t.h,l<1?requestAnimationFrame(a):this.audio.play("clang",{rate:.8})};requestAnimationFrame(a)}updateHints(){let t=this.player,e=this.overlay;e.setHint("cross",t.fsm.is("swing")?"SWING-JUMP":t.fsm.is("climb","wallrun")?"WALL-JUMP":t.fsm.is("hang")?"CLIMB UP":"JUMP"),e.setHint("circle",this.combat.dangerT>0?"DODGE!":t.fsm.is("hang","climb")?"DROP":t.speed>5.8&&t.fsm.is("ground")?"SLIDE":"CROUCH"),e.setHint("r2",t.abilities.swing?t.aimZipPoint?"LAUNCH":"SWING":"\u2014"),e.setHint("l1","FREE-RUN"),e.setHint("l2","AIM"),e.setHint("r1",t.abilities.gadgets?"GADGET":"\u2014"),e.setHint("triangle",t.abilities.gadgets?"GEAR":"\u2014"),e.setHint("l3","SENSE"),e.setHint("r3","CAM"),e.setHint("down",t.abilities.ride?t.ride?"RIDE \u25B8":"RIDE":null)}},dg=s=>new Promise(t=>setTimeout(t,s));function Uh(){let s;try{s=new oo,window.TETHER=s}catch(i){console.error(i),document.getElementById("bootmsg").textContent="Failed to start: "+i.message;return}let t=document.getElementById("bootsplash");t.classList.add("ready");let e=async()=>{t.removeEventListener("pointerup",e),window.removeEventListener("keydown",e),s.audio.unlock();try{matchMedia("(pointer:coarse)").matches&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock()}catch{}s.boot()};t.addEventListener("pointerup",e),window.addEventListener("keydown",e)}var fg=document.fonts&&document.fonts.load?Promise.race([document.fonts.load("32px Bangers"),new Promise(s=>setTimeout(s,1500))]):Promise.resolve();fg.then(Uh,Uh);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
