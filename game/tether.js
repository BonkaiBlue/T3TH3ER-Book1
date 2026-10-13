(()=>{var ju=0,Ic=1,Qu=2;var Bh=1,td=2,Hi=3,Li=0,Ve=1,Ze=2,dn=0,hs=1,Pc=2,Lc=3,Nc=4,ed=5,Cn=100,id=101,nd=102,sd=103,rd=104,od=200,ad=201,ld=202,cd=203,Pa=204,La=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,xd=213,yd=214,Na=0,ka=1,Da=2,ps=3,Ua=4,Oa=5,za=6,Fa=7,Hh=0,vd=1,_d=2,fn=0,bd=1,Md=2,Sd=3,wd=4,Ed=5,Td=6,Ad=7,kc="attached",Rd="detached",Vh=300,ms=301,gs=302,Ba=303,Ha=304,ro=306,Va=1e3,Pn=1001,Ga=1002,Ae=1003,Cd=1004;var rr=1005;var Pi=1006,jo=1007;var Ln=1008;var qi=1009,Gh=1010,Wh=1011,qs=1012,Yl=1013,Yi=1014,Mi=1015,Zs=1016,$l=1017,Zl=1018,xs=1020,Xh=35902,qh=1021,Yh=1022,fi=1023,$h=1024,Zh=1025,us=1026,ys=1027,Kl=1028,Jl=1029,Kh=1030,jl=1031;var Ql=1033,Lr=33776,Nr=33777,kr=33778,Dr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,$a=36196,Za=37492,Ka=37496,Ja=37808,ja=37809,Qa=37810,tl=37811,el=37812,il=37813,nl=37814,sl=37815,rl=37816,ol=37817,al=37818,ll=37819,cl=37820,hl=37821,Ur=36492,ul=36494,dl=36495,Jh=36283,fl=36284,pl=36285,ml=36286;var Or=2300,gl=2301,Qo=2302,Dc=2400,Uc=2401,Oc=2402;var Id=3200,Pd=3201;var Ld=0,Nd=1,Ci="",di="srgb",xn="srgb-linear",oo="linear",le="srgb";var Wn=7680;var zc=519,kd=512,Dd=513,Ud=514,jh=515,Od=516,zd=517,Fd=518,Bd=519,xl=35044,ao=35048;var Fc="300 es",Gi=2e3,zr=2001,pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ta=Math.PI/180,yl=180/Math.PI;function Wi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function ti(s,t,e){return Math.max(t,Math.min(e,s))}function Hd(s,t){return(s%t+t)%t}function ea(s,t,e){return(1-e)*s+e*t}function Ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ft=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ti(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],x=i[8],g=n[0],m=n[3],p=n[6],v=n[1],_=n[4],y=n[7],w=n[2],S=n[5],E=n[8];return r[0]=o*g+a*v+l*w,r[3]=o*m+a*_+l*S,r[6]=o*p+a*y+l*E,r[1]=c*g+h*v+u*w,r[4]=c*m+h*_+u*S,r[7]=c*p+h*y+u*E,r[2]=f*g+d*v+x*w,r[5]=f*m+d*_+x*S,r[8]=f*p+d*y+x*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,x=e*u+i*f+n*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=u*g,t[1]=(n*c-h*i)*g,t[2]=(a*i-n*o)*g,t[3]=f*g,t[4]=(h*e-n*l)*g,t[5]=(n*r-a*e)*g,t[6]=d*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ia=new Gt;function Qh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vd(){let s=Fr("canvas");return s.style.display="block",s}var Bc={};function Gs(s){s in Bc||(Bc[s]=!0,console.warn(s))}function Gd(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Wd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?oo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Hc=[.64,.33,.3,.6,.15,.06],Vc=[.2126,.7152,.0722],Gc=[.3127,.329],Wc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[xn]:{primaries:Hc,whitePoint:Gc,transfer:oo,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:Vc,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:Hc,whitePoint:Gc,transfer:le,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:Vc,outputColorSpaceConfig:{drawingBufferColorSpace:di}}});var Xn,vl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=Fr("canvas")),Xn.width=t.width,Xn.height=t.height;let i=Xn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,Br=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(na(n[o].image)):r.push(na(n[o]))}else r=na(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,ei=class s extends pn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Pn,n=Pn,r=Pi,o=Ln,a=fi,l=qi,c=s.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Wi(),this.name="",this.source=new Br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Vh;ei.DEFAULT_ANISOTROPY=1;var be=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(d+1)/2,w=(p+1)/2,S=(h+f)/4,E=(u+g)/4,A=(x+m)/4;return _>y&&_>w?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=S/i,r=E/i):y>w?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=S/n,r=A/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=E/r,n=A/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(u-g)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends pn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ei(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Br(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends _l{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Hr=class extends ei{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends ei{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[o+0],d=r[o+1],x=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==x){let m=1-a,p=l*f+c*d+h*x+u*g,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let w=Math.sqrt(_),S=Math.atan2(w,p*v);m=Math.sin(m*S)/w,a=Math.sin(a*S)/w}let y=a*v;if(l=l*m+f*y,c=c*m+d*y,h=h*m+x*y,u=u*m+g*y,m===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-a*d,t[e+2]=c*x+h*d+a*f-l*u,t[e+3]=h*x-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),d=l(n/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ti(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ti(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sa=new C,qc=new pi,Ni=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),ar.subVectors(this.max,ks),qn.subVectors(t.a,ks),Yn.subVectors(t.b,ks),$n.subVectors(t.c,ks),rn.subVectors(Yn,qn),on.subVectors($n,Yn),Mn.subVectors(qn,$n);let e=[0,-rn.z,rn.y,0,-on.z,on.y,0,-Mn.z,Mn.y,rn.z,0,-rn.x,on.z,0,-on.x,Mn.z,0,-Mn.x,-rn.y,rn.x,0,-on.y,on.x,0,-Mn.y,Mn.x,0];return!ra(e,qn,Yn,$n,ar)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,qn,Yn,$n,ar))?!1:(lr.crossVectors(rn,on),e=[lr.x,lr.y,lr.z],ra(e,qn,Yn,$n,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ui=[new C,new C,new C,new C,new C,new C,new C,new C],vi=new C,or=new Ni,qn=new C,Yn=new C,$n=new C,rn=new C,on=new C,Mn=new C,ks=new C,ar=new C,lr=new C,Sn=new C;function ra(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Sn.fromArray(s,r);let a=n.x*Math.abs(Sn.x)+n.y*Math.abs(Sn.y)+n.z*Math.abs(Sn.z),l=t.dot(Sn),c=e.dot(Sn),h=i.dot(Sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $d=new Ni,Ds=new C,oa=new C,wi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):$d.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ds,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(oa)),this.expandByPoint(Ds.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Oi=new C,aa=new C,cr=new C,an=new C,la=new C,hr=new C,ca=new C,Vr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){aa.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),an.copy(this.origin).sub(aa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=an.dot(this.direction),l=-an.dot(cr),c=an.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(aa).addScaledVector(cr,f),d}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);let i=Oi.dot(this.direction),n=Oi.dot(Oi)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,i,n,r){la.subVectors(e,t),hr.subVectors(i,t),ca.crossVectors(la,hr);let o=this.direction.dot(ca),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,t);let l=a*this.direction.dot(hr.crossVectors(an,hr));if(l<0)return null;let c=a*this.direction.dot(la.cross(an));if(c<0||l+c>o)return null;let h=-a*an.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class s{constructor(t,e,i,n,r,o,a,l,c,h,u,f,d,x,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,f,d,x,g,m)}set(t,e,i,n,r,o,a,l,c,h,u,f,d,x,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Zn.setFromMatrixColumn(t,0).length(),r=1/Zn.setFromMatrixColumn(t,1).length(),o=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,x=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=x+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,g=c*u;e[0]=f+g*a,e[4]=x*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,x=a*h,g=a*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,x=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-g*u}else if(t.order==="XZY"){let f=o*l,d=o*c,x=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Kd)}lookAt(t,e,i){let n=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),ln.crossVectors(i,si),ln.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ln.crossVectors(i,si)),ln.normalize(),ur.crossVectors(si,ln),n[0]=ln.x,n[4]=ur.x,n[8]=si.x,n[1]=ln.y,n[5]=ur.y,n[9]=si.y,n[2]=ln.z,n[6]=ur.z,n[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],x=i[2],g=i[6],m=i[10],p=i[14],v=i[3],_=i[7],y=i[11],w=i[15],S=n[0],E=n[4],A=n[8],M=n[12],b=n[1],I=n[5],O=n[9],z=n[13],X=n[2],Q=n[6],q=n[10],nt=n[14],W=n[3],ct=n[7],xt=n[11],St=n[15];return r[0]=o*S+a*b+l*X+c*W,r[4]=o*E+a*I+l*Q+c*ct,r[8]=o*A+a*O+l*q+c*xt,r[12]=o*M+a*z+l*nt+c*St,r[1]=h*S+u*b+f*X+d*W,r[5]=h*E+u*I+f*Q+d*ct,r[9]=h*A+u*O+f*q+d*xt,r[13]=h*M+u*z+f*nt+d*St,r[2]=x*S+g*b+m*X+p*W,r[6]=x*E+g*I+m*Q+p*ct,r[10]=x*A+g*O+m*q+p*xt,r[14]=x*M+g*z+m*nt+p*St,r[3]=v*S+_*b+y*X+w*W,r[7]=v*E+_*I+y*Q+w*ct,r[11]=v*A+_*O+y*q+w*xt,r[15]=v*M+_*z+y*nt+w*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],g=t[7],m=t[11],p=t[15];return x*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*d-i*l*d)+g*(+e*l*d-e*c*f+r*o*f-n*o*d+n*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],g=t[13],m=t[14],p=t[15],v=u*m*c-g*f*c+g*l*d-a*m*d-u*l*p+a*f*p,_=x*f*c-h*m*c-x*l*d+o*m*d+h*l*p-o*f*p,y=h*g*c-x*u*c+x*a*d-o*g*d-h*a*p+o*u*p,w=x*u*l-h*g*l-x*a*f+o*g*f+h*a*m-o*u*m,S=e*v+i*_+n*y+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=v*E,t[1]=(g*f*r-u*m*r-g*n*d+i*m*d+u*n*p-i*f*p)*E,t[2]=(a*m*r-g*l*r+g*n*c-i*m*c-a*n*p+i*l*p)*E,t[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*d-i*l*d)*E,t[4]=_*E,t[5]=(h*m*r-x*f*r+x*n*d-e*m*d-h*n*p+e*f*p)*E,t[6]=(x*l*r-o*m*r-x*n*c+e*m*c+o*n*p-e*l*p)*E,t[7]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*d+e*l*d)*E,t[8]=y*E,t[9]=(x*u*r-h*g*r-x*i*d+e*g*d+h*i*p-e*u*p)*E,t[10]=(o*g*r-x*a*r+x*i*c-e*g*c-o*i*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*E,t[12]=w*E,t[13]=(h*g*n-x*u*n+x*i*f-e*g*f-h*i*m+e*u*m)*E,t[14]=(x*a*n-o*g*n-x*i*l+e*g*l+o*i*m-e*a*m)*E,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*E,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,x=r*u,g=o*h,m=o*u,p=a*u,v=l*c,_=l*h,y=l*u,w=i.x,S=i.y,E=i.z;return n[0]=(1-(g+p))*w,n[1]=(d+y)*w,n[2]=(x-_)*w,n[3]=0,n[4]=(d-y)*S,n[5]=(1-(f+p))*S,n[6]=(m+v)*S,n[7]=0,n[8]=(x+_)*E,n[9]=(m-v)*E,n[10]=(1-(f+g))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=Zn.set(n[0],n[1],n[2]).length(),o=Zn.set(n[4],n[5],n[6]).length(),a=Zn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],_i.copy(this);let c=1/r,h=1/o,u=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,e.setFromRotationMatrix(_i),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=Gi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,x;if(a===Gi)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===zr)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Gi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),f=(e+t)*c,d=(i+n)*h,x,g;if(a===Gi)x=(o+r)*u,g=-2*u;else if(a===zr)x=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Zn=new C,_i=new Kt,Zd=new C(0,0,0),Kd=new C(1,1,1),ln=new C,ur=new C,si=new C,Yc=new Kt,$c=new pi,$i=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(ti(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ti(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ti(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ti(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ti(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ti(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jd=0,Zc=new C,Kn=new pi,zi=new Kt,dr=new C,Us=new C,jd=new C,Qd=new pi,Kc=new C(1,0,0),Jc=new C(0,1,0),jc=new C(0,0,1),Qc={type:"added"},tf={type:"removed"},Jn={type:"childadded",child:null},ha={type:"childremoved",child:null},oi=class s extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new $i,i=new pi,n=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Gt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?dr.copy(t):dr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Us,dr,this.up):zi.lookAt(dr,Us,this.up),this.quaternion.setFromRotationMatrix(zi),n&&(zi.extractRotation(n.matrixWorld),Kn.setFromRotationMatrix(zi),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),ha.child=t,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),x.length>0&&(i.nodes=x)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};oi.DEFAULT_UP=new C(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new C,Fi=new C,ua=new C,Bi=new C,jn=new C,Qn=new C,th=new C,da=new C,fa=new C,pa=new C,ma=new be,ga=new be,xa=new be,un=class s{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),bi.subVectors(t,e),n.cross(bi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){bi.subVectors(n,e),Fi.subVectors(i,e),ua.subVectors(t,e);let o=bi.dot(bi),a=bi.dot(Fi),l=bi.dot(ua),c=Fi.dot(Fi),h=Fi.dot(ua),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return ma.setScalar(0),ga.setScalar(0),xa.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,i),xa.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(xa,r.z),o}static isFrontFacing(t,e,i,n){return bi.subVectors(i,e),Fi.subVectors(t,e),bi.cross(Fi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),bi.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;jn.subVectors(n,i),Qn.subVectors(r,i),da.subVectors(t,i);let l=jn.dot(da),c=Qn.dot(da);if(l<=0&&c<=0)return e.copy(i);fa.subVectors(t,n);let h=jn.dot(fa),u=Qn.dot(fa);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(jn,o);pa.subVectors(t,r);let d=jn.dot(pa),x=Qn.dot(pa);if(x>=0&&d<=x)return e.copy(r);let g=d*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(Qn,a);let m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return th.subVectors(r,n),a=(u-h)/(u-h+(d-x)),e.copy(n).addScaledVector(th,a);let p=1/(m+g+f);return o=g*p,a=f*p,e.copy(i).addScaledVector(jn,o).addScaledVector(Qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function ya(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Hd(t,1),e=ti(e,0,1),i=ti(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=di){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=di){let i=tu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Qt.fromWorkingColorSpace(He.copy(this),t),Math.round(ti(He.r*255,0,255))*65536+Math.round(ti(He.g*255,0,255))*256+Math.round(ti(He.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(He.copy(this),e);let i=He.r,n=He.g,r=He.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=di){Qt.fromWorkingColorSpace(He.copy(this),t);let e=He.r,i=He.g,n=He.b;return t!==di?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(fr);let i=ea(cn.h,fr.h,e),n=ea(cn.s,fr.s,e),r=ea(cn.l,fr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new wt;wt.NAMES=tu;var ef=0,Nn=class extends pn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Wi(),this.name="",this.blending=hs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=La,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pa&&(i.blendSrc=this.blendSrc),this.blendDst!==La&&(i.blendDst=this.blendDst),this.blendEquation!==Cn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ze=class extends Nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new C,pr=new Ft,Ge=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xl,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xl&&(t.usage=this.usage),t}};var vs=class extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Wr=class extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Jt=class extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},nf=0,ui=new Kt,va=new oi,ts=new C,ri=new Ni,Os=new Ni,Ue=new C,Ne=class s extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?Wr:vs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,i){return ui.makeTranslation(t,e,i),this.applyMatrix4(ui),this}scale(t,e,i){return ui.makeScale(t,e,i),this.applyMatrix4(ui),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(ri.min,Os.min),ri.expandByPoint(Ue),Ue.addVectors(ri.max,Os.max),ri.expandByPoint(Ue)):(ri.expandByPoint(Os.min),ri.expandByPoint(Os.max))}ri.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Ue.add(ts)),n=Math.max(n,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new C,l[A]=new C;let c=new C,h=new C,u=new C,f=new Ft,d=new Ft,x=new Ft,g=new C,m=new C;function p(A,M,b){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,M),x.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let I=1/(d.x*x.y-x.x*d.y);isFinite(I)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(I),a[A].add(g),a[M].add(g),a[b].add(g),l[A].add(m),l[M].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,M=v.length;A<M;++A){let b=v[A],I=b.start,O=b.count;for(let z=I,X=I+O;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let _=new C,y=new C,w=new C,S=new C;function E(A){w.fromBufferAttribute(n,A),S.copy(w);let M=a[A];_.copy(M),_.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(S,M);let I=y.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,I)}for(let A=0,M=v.length;A<M;++A){let b=v[A],I=b.start,O=b.count;for(let z=I,X=I+O;z<X;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eh=new Kt,wn=new Vr,mr=new wi,ih=new C,gr=new C,xr=new C,yr=new C,_a=new C,vr=new C,nh=new C,_r=new C,zt=class extends oi{constructor(t=new Ne,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_a.fromBufferAttribute(u,t),o?vr.addScaledVector(_a,h):vr.addScaledVector(_a.sub(e),h))}e.add(vr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),wn.copy(t.ray).recast(t.near),!(mr.containsPoint(wn.origin)===!1&&(wn.intersectSphere(mr,ih)===null||wn.origin.distanceToSquared(ih)>(t.far-t.near)**2))&&(eh.copy(r).invert(),wn.copy(t.ray).applyMatrix4(eh),!(i.boundingBox!==null&&wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=f.length;x<g;x++){let m=f[x],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,w=_;y<w;y+=3){let S=a.getX(y),E=a.getX(y+1),A=a.getX(y+2);n=br(this,p,t,i,c,h,u,S,E,A),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let x=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);n=br(this,o,t,i,c,h,u,v,_,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=f.length;x<g;x++){let m=f[x],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,w=_;y<w;y+=3){let S=y,E=y+1,A=y+2;n=br(this,p,t,i,c,h,u,S,E,A),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let x=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){let v=m,_=m+1,y=m+2;n=br(this,o,t,i,c,h,u,v,_,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function sf(s,t,e,i,n,r,o,a){let l;if(t.side===Ve?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Li,a),l===null)return null;_r.copy(a),_r.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:s}}function br(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,gr),s.getVertexPosition(l,xr),s.getVertexPosition(c,yr);let h=sf(s,t,e,i,gr,xr,yr,nh);if(h){let u=new C;un.getBarycoord(nh,gr,xr,yr,u),n&&(h.uv=un.getInterpolatedAttribute(n,a,l,c,u,new Ft)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,l,c,u,new Ft)),o&&(h.normal=un.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};un.getNormal(gr,xr,yr,f.normal),h.face=f,h.barycoord=u}return h}var Zi=class s extends Ne{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,n,o,2),x("x","z","y",1,-1,t,i,-e,n,o,3),x("x","y","z",1,-1,t,e,i,n,r,4),x("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function x(g,m,p,v,_,y,w,S,E,A,M){let b=y/E,I=w/A,O=y/2,z=w/2,X=S/2,Q=E+1,q=A+1,nt=0,W=0,ct=new C;for(let xt=0;xt<q;xt++){let St=xt*I-z;for(let K=0;K<Q;K++){let gt=K*b-O;ct[g]=gt*v,ct[m]=St*_,ct[p]=X,c.push(ct.x,ct.y,ct.z),ct[g]=0,ct[m]=0,ct[p]=S>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(K/E),u.push(1-xt/A),nt+=1}}for(let xt=0;xt<A;xt++)for(let St=0;St<E;St++){let K=f+St+Q*xt,gt=f+St+Q*(xt+1),H=f+(St+1)+Q*(xt+1),tt=f+(St+1)+Q*xt;l.push(K,gt,tt),l.push(gt,H,tt),W+=6}a.addGroup(d,W,M),d+=W,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let i=_s(s[e]);for(let n in i)t[n]=i[n]}return t}function rf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function eu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var of={clone:_s,merge:$e},af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Xr=class extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hn=new C,sh=new Ft,rh=new Ft,Oe=class extends Xr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hn.x,hn.y).multiplyScalar(-t/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hn.x,hn.y).multiplyScalar(-t/hn.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ta*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,is=1,Ml=class extends oi{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Oe(es,is,t,e);n.layers=this.layers,this.add(n);let r=new Oe(es,is,t,e);r.layers=this.layers,this.add(r);let o=new Oe(es,is,t,e);o.layers=this.layers,this.add(o);let a=new Oe(es,is,t,e);a.layers=this.layers,this.add(a);let l=new Oe(es,is,t,e);l.layers=this.layers,this.add(l);let c=new Oe(es,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},qr=class extends ei{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sl=class extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new qr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Zi(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:dn});r.uniforms.tEquirect.value=e;let o=new zt(n,r),a=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Pi),new Ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},ba=new C,cf=new C,hf=new Gt,Vi=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=ba.subVectors(i,e).cross(cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ba),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||hf.getNormalMatrix(t),n=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},En=new wi,Mr=new C,bs=class{constructor(t=new Vi,e=new Vi,i=new Vi,n=new Vi,r=new Vi,o=new Vi){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gi){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],x=n[9],g=n[10],m=n[11],p=n[12],v=n[13],_=n[14],y=n[15];if(i[0].setComponents(l-r,f-c,m-d,y-p).normalize(),i[1].setComponents(l+r,f+c,m+d,y+p).normalize(),i[2].setComponents(l+o,f+h,m+x,y+v).normalize(),i[3].setComponents(l-o,f-h,m-x,y-v).normalize(),i[4].setComponents(l-a,f-u,m-g,y-_).normalize(),e===Gi)i[5].setComponents(l+a,f+u,m+g,y+_).normalize();else if(e===zr)i[5].setComponents(a,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(t){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(t.matrixWorld),this.intersectsSphere(En)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Mr.x=n.normal.x>0?t.max.x:t.min.x,Mr.y=n.normal.y>0?t.max.y:t.min.y,Mr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function iu(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uf(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],g=u[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let g=u[d];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Ms=class s extends Ne{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,d=[],x=[],g=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let _=0;_<c;_++){let y=_*u-r;x.push(y,-v,0),g.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),w=v+1+c*(p+1),S=v+1+c*p;d.push(_,y,S),d.push(y,w,S)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_f=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Df=`#define PI 3.141592653589793
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
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,up=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,y0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
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
}`,w0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#define LAMBERT
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define MATCAP
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
}`,I0=`#define MATCAP
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
}`,P0=`#define NORMAL
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
}`,L0=`#define NORMAL
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
}`,N0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,D0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,z0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,V0=`uniform vec3 color;
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
}`,G0=`uniform float rotation;
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
}`,W0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:xf,aomap_fragment:yf,aomap_pars_fragment:vf,batching_pars_vertex:_f,batching_vertex:bf,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:wf,iridescence_fragment:Ef,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:If,color_fragment:Pf,color_pars_fragment:Lf,color_pars_vertex:Nf,color_vertex:kf,common:Df,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Of,displacementmap_pars_vertex:zf,displacementmap_vertex:Ff,emissivemap_fragment:Bf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:Gf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sp,envmap_vertex:$f,fog_vertex:Zf,fog_pars_vertex:Kf,fog_fragment:Jf,fog_pars_fragment:jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:ip,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:xp,map_fragment:yp,map_pars_fragment:vp,map_particle_fragment:_p,map_particle_pars_fragment:bp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:wp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Ip,normal_pars_fragment:Pp,normal_pars_vertex:Lp,normal_vertex:Np,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Op,iridescence_pars_fragment:zp,opaque_fragment:Fp,packing:Bp,premultiplied_alpha_fragment:Hp,project_vertex:Vp,dithering_fragment:Gp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:$p,shadowmap_vertex:Zp,shadowmask_pars_fragment:Kp,skinbase_vertex:Jp,skinning_pars_vertex:jp,skinning_vertex:Qp,skinnormal_vertex:t0,specularmap_fragment:e0,specularmap_pars_fragment:i0,tonemapping_fragment:n0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:o0,uv_pars_fragment:a0,uv_pars_vertex:l0,uv_vertex:c0,worldpos_vertex:h0,background_vert:u0,background_frag:d0,backgroundCube_vert:f0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:x0,depth_frag:y0,distanceRGBA_vert:v0,distanceRGBA_frag:_0,equirect_vert:b0,equirect_frag:M0,linedashed_vert:S0,linedashed_frag:w0,meshbasic_vert:E0,meshbasic_frag:T0,meshlambert_vert:A0,meshlambert_frag:R0,meshmatcap_vert:C0,meshmatcap_frag:I0,meshnormal_vert:P0,meshnormal_frag:L0,meshphong_vert:N0,meshphong_frag:k0,meshphysical_vert:D0,meshphysical_frag:U0,meshtoon_vert:O0,meshtoon_frag:z0,points_vert:F0,points_frag:B0,shadow_vert:H0,shadow_frag:V0,sprite_vert:G0,sprite_frag:W0},lt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Ri={basic:{uniforms:$e([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:$e([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:$e([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:$e([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:$e([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:$e([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:$e([lt.points,lt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:$e([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:$e([lt.common,lt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:$e([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:$e([lt.sprite,lt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:$e([lt.common,lt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:$e([lt.lights,lt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Ri.physical={uniforms:$e([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Sr={r:0,b:0,g:0},Tn=new $i,X0=new Kt;function q0(s,t,e,i,n,r,o){let a=new wt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function g(v){let _=!1,y=x(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,_){let y=x(_);y&&(y.isCubeTexture||y.mapping===ro)?(h===void 0&&(h=new zt(new Zi(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:_s(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Tn.copy(_.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Tn)),h.material.toneMapped=Qt.getTransfer(y.colorSpace)!==le,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new zt(new Ms(2,2),new We({name:"BackgroundMaterial",uniforms:_s(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(Sr,eu(s)),i.buffers.color.setClear(Sr.r,Sr.g,Sr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:g,addToRenderList:m}}function Y0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,o=!1;function a(b,I,O,z,X){let Q=!1,q=u(z,O,I);r!==q&&(r=q,c(r.object)),Q=d(b,z,O,X),Q&&x(b,z,O,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(b,I,O,z),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,I,O){let z=O.wireframe===!0,X=i[b.id];X===void 0&&(X={},i[b.id]=X);let Q=X[I.id];Q===void 0&&(Q={},X[I.id]=Q);let q=Q[z];return q===void 0&&(q=f(l()),Q[z]=q),q}function f(b){let I=[],O=[],z=[];for(let X=0;X<e;X++)I[X]=0,O[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:z,object:b,attributes:{},index:null}}function d(b,I,O,z){let X=r.attributes,Q=I.attributes,q=0,nt=O.getAttributes();for(let W in nt)if(nt[W].location>=0){let xt=X[W],St=Q[W];if(St===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(St=b.instanceColor)),xt===void 0||xt.attribute!==St||St&&xt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function x(b,I,O,z){let X={},Q=I.attributes,q=0,nt=O.getAttributes();for(let W in nt)if(nt[W].location>=0){let xt=Q[W];xt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor));let St={};St.attribute=xt,xt&&xt.data&&(St.data=xt.data),X[W]=St,q++}r.attributes=X,r.attributesNum=q,r.index=z}function g(){let b=r.newAttributes;for(let I=0,O=b.length;I<O;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){let O=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;O[b]=1,z[b]===0&&(s.enableVertexAttribArray(b),z[b]=1),X[b]!==I&&(s.vertexAttribDivisor(b,I),X[b]=I)}function v(){let b=r.newAttributes,I=r.enabledAttributes;for(let O=0,z=I.length;O<z;O++)I[O]!==b[O]&&(s.disableVertexAttribArray(O),I[O]=0)}function _(b,I,O,z,X,Q,q){q===!0?s.vertexAttribIPointer(b,I,O,X,Q):s.vertexAttribPointer(b,I,O,z,X,Q)}function y(b,I,O,z){g();let X=z.attributes,Q=O.getAttributes(),q=I.defaultAttributeValues;for(let nt in Q){let W=Q[nt];if(W.location>=0){let ct=X[nt];if(ct===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor)),ct!==void 0){let xt=ct.normalized,St=ct.itemSize,K=t.get(ct);if(K===void 0)continue;let gt=K.buffer,H=K.type,tt=K.bytesPerElement,dt=H===s.INT||H===s.UNSIGNED_INT||ct.gpuType===Yl;if(ct.isInterleavedBufferAttribute){let rt=ct.data,Mt=rt.stride,Ct=ct.offset;if(rt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)p(W.location+Bt,rt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Bt=0;Bt<W.locationSize;Bt++)_(W.location+Bt,St/W.locationSize,H,xt,Mt*tt,(Ct+St/W.locationSize*Bt)*tt,dt)}else{if(ct.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt,ct.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let rt=0;rt<W.locationSize;rt++)m(W.location+rt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let rt=0;rt<W.locationSize;rt++)_(W.location+rt,St/W.locationSize,H,xt,St*tt,St/W.locationSize*rt*tt,dt)}}else if(q!==void 0){let xt=q[nt];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(W.location,xt);break;case 3:s.vertexAttrib3fv(W.location,xt);break;case 4:s.vertexAttrib4fv(W.location,xt);break;default:s.vertexAttrib1fv(W.location,xt)}}}}v()}function w(){A();for(let b in i){let I=i[b];for(let O in I){let z=I[O];for(let X in z)h(z[X].object),delete z[X];delete I[O]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;let I=i[b.id];for(let O in I){let z=I[O];for(let X in z)h(z[X].object),delete z[X];delete I[O]}delete i[b.id]}function E(b){for(let I in i){let O=i[I];if(O[b.id]===void 0)continue;let z=O[b.id];for(let X in z)h(z[X].object),delete z[X];delete O[b.id]}}function A(){M(),o=!0,r!==n&&(r=n,c(r.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function $0(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*f[g];e.update(x,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Z0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(E){return!(E!==fi&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let A=E===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==qi&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Mi&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:w,maxSamples:S}}function K0(s){let t=this,e=null,i=0,n=!1,r=!1,o=new Vi,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||x===null||x.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=h(x,f,_,d);for(let w=0;w!==_;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,x){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let p=d+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=d;_!==g;++_,y+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function J0(s){let t=new WeakMap;function e(o,a){return a===Ba?o.mapping=ms:a===Ha&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ba||a===Ha)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ys=class extends Xr{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,oh=[.125,.215,.35,.446,.526,.582],In=20,Ma=new Ys,ah=new wt,Sa=null,wa=0,Ea=0,Ta=!1,Rn=(1+Math.sqrt(5))/2,ns=1/Rn,lh=[new C(-Rn,ns,0),new C(Rn,ns,0),new C(-ns,0,Rn),new C(ns,0,Rn),new C(0,Rn,-ns),new C(0,Rn,ns),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Sa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,wa,Ea),this._renderer.xr.enabled=Ta,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Zs,format:fi,colorSpace:xn,depthBuffer:!1},n=ch(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(r)),this._blurMaterial=Q0(r,t,e)}return n}_compileMaterial(t){let e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,i,n){let a=new Oe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ah),h.toneMapping=fn,h.autoClear=!1;let d=new ze({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),x=new zt(new Zi,d),g=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(ah),g=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;wr(n,v*_,p>2?_:0,_,_),h.setRenderTarget(n),g&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ms||t.mapping===gs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;wr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ma)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lh[(n-r-1)%lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*In-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):In;m>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);let p=[],v=0;for(let E=0;E<In;++E){let A=E/g,M=Math.exp(-A*A/2);p.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;let y=this._sizeLods[n],w=3*y*(n>_-cs?n-_+cs:0),S=4*(this._cubeSize-y);wr(e,w,S,3*y,2*y),l.setRenderTarget(e),l.render(u,Ma)}};function j0(s){let t=[],e=[],i=[],n=s,r=s-cs+1+oh.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-cs?l=oh[o-s+cs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,g=3,m=2,p=1,v=new Float32Array(g*x*d),_=new Float32Array(m*x*d),y=new Float32Array(p*x*d);for(let S=0;S<d;S++){let E=S%3*2/3-1,A=S>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(M,g*x*S),_.set(f,m*x*S);let b=[S,S,S,S,S,S];y.set(b,p*x*S)}let w=new Ne;w.setAttribute("position",new Ge(v,g)),w.setAttribute("uv",new Ge(_,m)),w.setAttribute("faceIndex",new Ge(y,p)),t.push(w),n>cs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ch(s,t,e){let i=new Si(s,t,e);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Q0(s,t,e){let i=new Float32Array(In),n=new C(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:tc(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function hh(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function uh(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function tm(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ba||l===Ha,h=l===ms||l===gs;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Yr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new Yr(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function em(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Gs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function im(s,t,e,i){let n={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let g=f.morphAttributes[x];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete n[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)t.update(f[x],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let g=d[x];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,x=u.attributes.position,g=0;if(d!==null){let v=d.array;g=d.version;for(let _=0,y=v.length;_<y;_+=3){let w=v[_+0],S=v[_+1],E=v[_+2];f.push(w,S,S,E,E,w)}}else if(x!==void 0){let v=x.array;g=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let w=_+0,S=_+1,E=_+2;f.push(w,S,S,E,E,w)}}else return;let m=new(Qh(f)?Wr:vs)(f,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function nm(s,t,e){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,x){x!==0&&(s.drawElementsInstanced(i,d,r,f*o,x),e.update(d,i,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];e.update(m,i,1)}function u(f,d,x,g){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,x);let p=0;for(let v=0;v<x;v++)p+=d[v]*g[v];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function rm(s,t,e){let i=new WeakMap,n=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let M=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;d===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let y=a.attributes.position.count*_,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*w*4*u),E=new Hr(S,y,w,u);E.type=Mi,E.needsUpdate=!0;let A=_*4;for(let b=0;b<u;b++){let I=m[b],O=p[b],z=v[b],X=y*w*4*b;for(let Q=0;Q<I.count;Q++){let q=Q*A;d===!0&&(n.fromBufferAttribute(I,Q),S[X+q+0]=n.x,S[X+q+1]=n.y,S[X+q+2]=n.z,S[X+q+3]=0),x===!0&&(n.fromBufferAttribute(O,Q),S[X+q+4]=n.x,S[X+q+5]=n.y,S[X+q+6]=n.z,S[X+q+7]=0),g===!0&&(n.fromBufferAttribute(z,Q),S[X+q+8]=n.x,S[X+q+9]=n.y,S[X+q+10]=n.z,S[X+q+11]=z.itemSize===4?n.w:1)}}f={count:u,texture:E,size:new Ft(y,w)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function om(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Ss=class extends ei{constructor(t,e,i,n,r,o,a,l,c,h=us){if(h!==us&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===us&&(i=Yi),i===void 0&&h===ys&&(i=xs),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nu=new ei,dh=new Ss(1,1),su=new Hr,ru=new bl,ou=new qr,fh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),xh=new Float32Array(4);function As(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=fh[n];if(r===void 0&&(r=new Float32Array(n),fh[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function lo(s,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function am(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function cm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function um(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(ke(e,i))return;xh.set(i),s.uniformMatrix2fv(this.addr,!1,xh),De(e,i)}}function dm(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(ke(e,i))return;gh.set(i),s.uniformMatrix3fv(this.addr,!1,gh),De(e,i)}}function fm(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(ke(e,i))return;mh.set(i),s.uniformMatrix4fv(this.addr,!1,mh),De(e,i)}}function pm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function gm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function xm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function ym(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function vm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function _m(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function bm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function Mm(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(dh.compareFunction=jh,r=dh):r=nu,e.setTexture2D(t||r,n)}function Sm(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ru,n)}function wm(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ou,n)}function Em(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||su,n)}function Tm(s){switch(s){case 5126:return am;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return xm;case 5125:return ym;case 36294:return vm;case 36295:return _m;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Em}}function Am(s,t){s.uniform1fv(this.addr,t)}function Rm(s,t){let e=As(t,this.size,2);s.uniform2fv(this.addr,e)}function Cm(s,t){let e=As(t,this.size,3);s.uniform3fv(this.addr,e)}function Im(s,t){let e=As(t,this.size,4);s.uniform4fv(this.addr,e)}function Pm(s,t){let e=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Lm(s,t){let e=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Nm(s,t){let e=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function km(s,t){s.uniform1iv(this.addr,t)}function Dm(s,t){s.uniform2iv(this.addr,t)}function Um(s,t){s.uniform3iv(this.addr,t)}function Om(s,t){s.uniform4iv(this.addr,t)}function zm(s,t){s.uniform1uiv(this.addr,t)}function Fm(s,t){s.uniform2uiv(this.addr,t)}function Bm(s,t){s.uniform3uiv(this.addr,t)}function Hm(s,t){s.uniform4uiv(this.addr,t)}function Vm(s,t,e){let i=this.cache,n=t.length,r=lo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||nu,r[o])}function Gm(s,t,e){let i=this.cache,n=t.length,r=lo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||ru,r[o])}function Wm(s,t,e){let i=this.cache,n=t.length,r=lo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||ou,r[o])}function Xm(s,t,e){let i=this.cache,n=t.length,r=lo(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||su,r[o])}function qm(s){switch(s){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Im;case 35674:return Pm;case 35675:return Lm;case 35676:return Nm;case 5124:case 35670:return km;case 35667:case 35671:return Dm;case 35668:case 35672:return Um;case 35669:case 35673:return Om;case 5125:return zm;case 36294:return Fm;case 36295:return Bm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}var wl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Tm(e.type)}},El=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qm(e.type)}},Tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},Aa=/(\w+)(\])?(\[|\.)?/g;function yh(s,t){s.seq.push(t),s.map[t.id]=t}function Ym(s,t,e){let i=s.name,n=i.length;for(Aa.lastIndex=0;;){let r=Aa.exec(i),o=Aa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){yh(e,c===void 0?new wl(a,s,t):new El(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Tl(a),yh(e,u)),e=u}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Ym(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function vh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var $m=37297,Zm=0;function Km(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var _h=new Gt;function Jm(s){Qt._getMatrix(_h,Qt.workingColorSpace,s);let t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case oo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bh(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Km(s.getShaderSource(t),o)}else return n}function jm(s,t){let e=Jm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qm(s,t){let e;switch(t){case bd:e="Linear";break;case Md:e="Reinhard";break;case Sd:e="Cineon";break;case wd:e="ACESFilmic";break;case Td:e="AgX";break;case Ad:e="Neutral";break;case Ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Er=new C;function tg(){Qt.getLuminanceCoefficients(Er);let s=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function ig(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ng(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ws(s){return s!==""}function Mh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(s){return s.replace(sg,og)}var rg=new Map;function og(s,t){let e=qt[t];if(e===void 0){let i=rg.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(s){return s.replace(ag,lg)}function lg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Eh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function cg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===td?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function hg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ug(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===gs&&(t="ENVMAP_MODE_REFRACTION"),t}function dg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case vd:t="ENVMAP_BLENDING_MIX";break;case _d:t="ENVMAP_BLENDING_ADD";break}return t}function fg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pg(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=cg(e),c=hg(e),h=ug(e),u=dg(e),f=fg(e),d=eg(e),x=ig(r),g=n.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?qt.tonemapping_pars_fragment:"",e.toneMapping!==fn?Qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,jm("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Al(o),o=Mh(o,e),o=Sh(o,e),a=Al(a),a=Mh(a,e),a=Sh(a,e),o=wh(o),a=wh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,w=vh(n,n.VERTEX_SHADER,_),S=vh(n,n.FRAGMENT_SHADER,y);n.attachShader(g,w),n.attachShader(g,S),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function E(I){if(s.debug.checkShaderErrors){let O=n.getProgramInfoLog(g).trim(),z=n.getShaderInfoLog(w).trim(),X=n.getShaderInfoLog(S).trim(),Q=!0,q=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,w,S);else{let nt=bh(n,w,"vertex"),W=bh(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+nt+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||X==="")&&(q=!1);q&&(I.diagnostics={runnable:Q,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}n.deleteShader(w),n.deleteShader(S),A=new fs(n,g),M=ng(n,g)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(g,$m)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=S,this}var mg=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Cl(t),e.set(t,i)),i}},Cl=class{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}};function gg(s,t,e,i,n,r,o){let a=new Gr,l=new Rl,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,I,O,z){let X=O.fog,Q=z.geometry,q=M.isMeshStandardMaterial?O.environment:null,nt=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),W=nt&&nt.mapping===ro?nt.image.height:null,ct=x[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,St=xt!==void 0?xt.length:0,K=0;Q.morphAttributes.position!==void 0&&(K=1),Q.morphAttributes.normal!==void 0&&(K=2),Q.morphAttributes.color!==void 0&&(K=3);let gt,H,tt,dt;if(ct){let ae=Ri[ct];gt=ae.vertexShader,H=ae.fragmentShader}else gt=M.vertexShader,H=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),dt=l.getFragmentShaderID(M);let rt=s.getRenderTarget(),Mt=s.state.buffers.depth.getReversed(),Ct=z.isInstancedMesh===!0,Bt=z.isBatchedMesh===!0,pe=!!M.map,Zt=!!M.matcap,ve=!!nt,U=!!M.aoMap,ci=!!M.lightMap,te=!!M.bumpMap,ee=!!M.normalMap,Nt=!!M.displacementMap,me=!!M.emissiveMap,Lt=!!M.metalnessMap,P=!!M.roughnessMap,T=M.anisotropy>0,F=M.clearcoat>0,J=M.dispersion>0,et=M.iridescence>0,Z=M.sheen>0,It=M.transmission>0,ut=T&&!!M.anisotropyMap,vt=F&&!!M.clearcoatMap,ne=F&&!!M.clearcoatNormalMap,st=F&&!!M.clearcoatRoughnessMap,_t=et&&!!M.iridescenceMap,kt=et&&!!M.iridescenceThicknessMap,Ut=Z&&!!M.sheenColorMap,bt=Z&&!!M.sheenRoughnessMap,ie=!!M.specularMap,Xt=!!M.specularColorMap,ue=!!M.specularIntensityMap,N=It&&!!M.transmissionMap,ht=It&&!!M.thicknessMap,Y=!!M.gradientMap,j=!!M.alphaMap,mt=M.alphaTest>0,ft=!!M.alphaHash,Ht=!!M.extensions,Se=fn;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Se=s.toneMapping);let Fe={shaderID:ct,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:H,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&z._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&z.instanceColor!==null,instancingMorph:Ct&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:xn,alphaToCoverage:!!M.alphaToCoverage,map:pe,matcap:Zt,envMap:ve,envMapMode:ve&&nt.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:ci,bumpMap:te,normalMap:ee,displacementMap:f&&Nt,emissiveMap:me,normalMapObjectSpace:ee&&M.normalMapType===Nd,normalMapTangentSpace:ee&&M.normalMapType===Ld,metalnessMap:Lt,roughnessMap:P,anisotropy:T,anisotropyMap:ut,clearcoat:F,clearcoatMap:vt,clearcoatNormalMap:ne,clearcoatRoughnessMap:st,dispersion:J,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:kt,sheen:Z,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:ie,specularColorMap:Xt,specularIntensityMap:ue,transmission:It,transmissionMap:N,thicknessMap:ht,gradientMap:Y,opaque:M.transparent===!1&&M.blending===hs&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:mt,alphaHash:ft,combine:M.combine,mapUv:pe&&g(M.map.channel),aoMapUv:U&&g(M.aoMap.channel),lightMapUv:ci&&g(M.lightMap.channel),bumpMapUv:te&&g(M.bumpMap.channel),normalMapUv:ee&&g(M.normalMap.channel),displacementMapUv:Nt&&g(M.displacementMap.channel),emissiveMapUv:me&&g(M.emissiveMap.channel),metalnessMapUv:Lt&&g(M.metalnessMap.channel),roughnessMapUv:P&&g(M.roughnessMap.channel),anisotropyMapUv:ut&&g(M.anisotropyMap.channel),clearcoatMapUv:vt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(M.sheenRoughnessMap.channel),specularMapUv:ie&&g(M.specularMap.channel),specularColorMapUv:Xt&&g(M.specularColorMap.channel),specularIntensityMapUv:ue&&g(M.specularIntensityMap.channel),transmissionMapUv:N&&g(M.transmissionMap.channel),thicknessMapUv:ht&&g(M.thicknessMap.channel),alphaMapUv:j&&g(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ee||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(pe||j),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Mt,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:me&&M.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ze,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ht&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&M.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(b,M),_(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let b=x[M.type],I;if(b){let O=Ri[b];I=of.clone(O.uniforms)}else I=M.uniforms;return I}function w(M,b){let I;for(let O=0,z=h.length;O<z;O++){let X=h[O];if(X.cacheKey===b){I=X,++I.usedTimes;break}}return I===void 0&&(I=new pg(s,b,M,r),h.push(I)),I}function S(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:A}}function xg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function yg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Th(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ah(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,d,x,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,f,d,x,g,m){let p=o(u,f,d,x,g,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,x,g,m){let p=o(u,f,d,x,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||yg),i.length>1&&i.sort(f||Th),n.length>1&&n.sort(f||Th)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function vg(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Ah,s.set(i,[o])):n>=r.length?(o=new Ah,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _g(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new wt};break;case"SpotLight":e={position:new C,direction:new C,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function bg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Mg=0;function Sg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wg(s){let t=new _g,e=bg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let n=new C,r=new Kt,o=new Kt;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,x=0,g=0,m=0,p=0,v=0,_=0,y=0,w=0,S=0,E=0;c.sort(Sg);for(let M=0,b=c.length;M<b;M++){let I=c[M],O=I.color,z=I.intensity,X=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*z,u+=O.g*z,f+=O.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],z);E++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let nt=I.shadow,W=e.get(I);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=I.shadow.matrix,v++}i.directional[d]=q,d++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(O).multiplyScalar(z),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[g]=q;let nt=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,nt.updateMatrices(I),I.castShadow&&S++),i.spotLightMatrix[g]=nt.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=Q,y++}g++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(O).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let nt=I.shadow,W=e.get(I);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,i.pointShadow[x]=W,i.pointShadowMap[x]=Q,i.pointShadowMatrix[x]=I.shadow.matrix,_++}i.point[x]=q,x++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let A=i.hash;(A.directionalLength!==d||A.pointLength!==x||A.spotLength!==g||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==_||A.numSpotShadows!==y||A.numSpotMaps!==w||A.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,A.directionalLength=d,A.pointLength=x,A.spotLength=g,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=_,A.numSpotShadows=y,A.numSpotMaps=w,A.numLightProbes=E,i.version=Mg++)}function l(c,h){let u=0,f=0,d=0,x=0,g=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let y=i.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let y=i.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Rh(s){let t=new wg(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Eg(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new Rh(s),t.set(n,[a])):r>=o.length?(a=new Rh(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Il=class extends Nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`;function Rg(s,t,e){let i=new bs,n=new Ft,r=new Ft,o=new be,a=new Il({depthPacking:Pd}),l=new Pl,c={},h=e.maxTextureSize,u={[Li]:Ve,[Ve]:Li,[Ze]:Ze},f=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ne;x.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new zt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(S,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=s.getRenderTarget(),b=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(dn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=p!==Hi&&this.type===Hi,X=p===Hi&&this.type!==Hi;for(let Q=0,q=S.length;Q<q;Q++){let nt=S[Q],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let ct=W.getFrameExtents();if(n.multiply(ct),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ct.x),n.x=r.x*ct.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ct.y),n.y=r.y*ct.y,W.mapSize.y=r.y)),W.map===null||z===!0||X===!0){let St=this.type!==Hi?{minFilter:Ae,magFilter:Ae}:{};W.map!==null&&W.map.dispose(),W.map=new Si(n.x,n.y,St),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let xt=W.getViewportCount();for(let St=0;St<xt;St++){let K=W.getViewport(St);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(o),W.updateMatrices(nt,St),i=W.getFrustum(),y(E,A,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===Hi&&v(W,A),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,I)};function v(S,E){let A=t.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Si(n.x,n.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,A,f,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,A,d,g,null)}function _(S,E,A,M){let b=null,I=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)b=I;else if(b=A.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=b.uuid,z=E.uuid,X=c[O];X===void 0&&(X={},c[O]=X);let Q=X[z];Q===void 0&&(Q=b.clone(),X[z]=Q,E.addEventListener("dispose",w)),b=Q}if(b.visible=E.visible,b.wireframe=E.wireframe,M===Hi?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=s.properties.get(b);O.light=A}return b}function y(S,E,A,M,b){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Hi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);let z=t.update(S),X=S.material;if(Array.isArray(X)){let Q=z.groups;for(let q=0,nt=Q.length;q<nt;q++){let W=Q[q],ct=X[W.materialIndex];if(ct&&ct.visible){let xt=_(S,ct,M,b);S.onBeforeShadow(s,S,E,A,z,xt,W),s.renderBufferDirect(A,null,z,xt,S,W),S.onAfterShadow(s,S,E,A,z,xt,W)}}}else if(X.visible){let Q=_(S,X,M,b);S.onBeforeShadow(s,S,E,A,z,Q,null),s.renderBufferDirect(A,null,z,Q,S,null),S.onAfterShadow(s,S,E,A,z,Q,null)}}let O=S.children;for(let z=0,X=O.length;z<X;z++)y(O[z],E,A,M,b)}function w(S){S.target.removeEventListener("dispose",w);for(let A in c){let M=c[A],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var Cg={[Na]:ka,[Da]:za,[Ua]:Fa,[ps]:Oa,[ka]:Na,[za]:Da,[Fa]:Ua,[Oa]:ps};function Ig(s,t){function e(){let N=!1,ht=new be,Y=null,j=new be(0,0,0,0);return{setMask:function(mt){Y!==mt&&!N&&(s.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){N=mt},setClear:function(mt,ft,Ht,Se,Fe){Fe===!0&&(mt*=Se,ft*=Se,Ht*=Se),ht.set(mt,ft,Ht,Se),j.equals(ht)===!1&&(s.clearColor(mt,ft,Ht,Se),j.copy(ht))},reset:function(){N=!1,Y=null,j.set(-1,0,0,0)}}}function i(){let N=!1,ht=!1,Y=null,j=null,mt=null;return{setReversed:function(ft){if(ht!==ft){let Ht=t.get("EXT_clip_control");ht?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let Se=mt;mt=null,this.setClear(Se)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?rt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!N&&(s.depthMask(ft),Y=ft)},setFunc:function(ft){if(ht&&(ft=Cg[ft]),j!==ft){switch(ft){case Na:s.depthFunc(s.NEVER);break;case ka:s.depthFunc(s.ALWAYS);break;case Da:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case Ua:s.depthFunc(s.EQUAL);break;case Oa:s.depthFunc(s.GEQUAL);break;case za:s.depthFunc(s.GREATER);break;case Fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ft}},setLocked:function(ft){N=ft},setClear:function(ft){mt!==ft&&(ht&&(ft=1-ft),s.clearDepth(ft),mt=ft)},reset:function(){N=!1,Y=null,j=null,mt=null,ht=!1}}}function n(){let N=!1,ht=null,Y=null,j=null,mt=null,ft=null,Ht=null,Se=null,Fe=null;return{setTest:function(ae){N||(ae?rt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(ae){ht!==ae&&!N&&(s.stencilMask(ae),ht=ae)},setFunc:function(ae,xi,ki){(Y!==ae||j!==xi||mt!==ki)&&(s.stencilFunc(ae,xi,ki),Y=ae,j=xi,mt=ki)},setOp:function(ae,xi,ki){(ft!==ae||Ht!==xi||Se!==ki)&&(s.stencilOp(ae,xi,ki),ft=ae,Ht=xi,Se=ki)},setLocked:function(ae){N=ae},setClear:function(ae){Fe!==ae&&(s.clearStencil(ae),Fe=ae)},reset:function(){N=!1,ht=null,Y=null,j=null,mt=null,ft=null,Ht=null,Se=null,Fe=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,g=!1,m=null,p=null,v=null,_=null,y=null,w=null,S=null,E=new wt(0,0,0),A=0,M=!1,b=null,I=null,O=null,z=null,X=null,Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,nt=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=nt>=2);let ct=null,xt={},St=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),gt=new be().fromArray(St),H=new be().fromArray(K);function tt(N,ht,Y,j){let mt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(N,ft),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Y;Ht++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ht+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ft}let dt={};dt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(ps),te(!1),ee(Ic),rt(s.CULL_FACE),U(dn);function rt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Mt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ct(N,ht){return u[N]!==ht?(s.bindFramebuffer(N,ht),u[N]=ht,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Bt(N,ht){let Y=d,j=!1;if(N){Y=f.get(ht),Y===void 0&&(Y=[],f.set(ht,Y));let mt=N.textures;if(Y.length!==mt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ht=mt.length;ft<Ht;ft++)Y[ft]=s.COLOR_ATTACHMENT0+ft;Y.length=mt.length,j=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,j=!0);j&&s.drawBuffers(Y)}function pe(N){return x!==N?(s.useProgram(N),x=N,!0):!1}let Zt={[Cn]:s.FUNC_ADD,[id]:s.FUNC_SUBTRACT,[nd]:s.FUNC_REVERSE_SUBTRACT};Zt[sd]=s.MIN,Zt[rd]=s.MAX;let ve={[od]:s.ZERO,[ad]:s.ONE,[ld]:s.SRC_COLOR,[Pa]:s.SRC_ALPHA,[pd]:s.SRC_ALPHA_SATURATE,[dd]:s.DST_COLOR,[hd]:s.DST_ALPHA,[cd]:s.ONE_MINUS_SRC_COLOR,[La]:s.ONE_MINUS_SRC_ALPHA,[fd]:s.ONE_MINUS_DST_COLOR,[ud]:s.ONE_MINUS_DST_ALPHA,[md]:s.CONSTANT_COLOR,[gd]:s.ONE_MINUS_CONSTANT_COLOR,[xd]:s.CONSTANT_ALPHA,[yd]:s.ONE_MINUS_CONSTANT_ALPHA};function U(N,ht,Y,j,mt,ft,Ht,Se,Fe,ae){if(N===dn){g===!0&&(Mt(s.BLEND),g=!1);return}if(g===!1&&(rt(s.BLEND),g=!0),N!==ed){if(N!==m||ae!==M){if((p!==Cn||y!==Cn)&&(s.blendEquation(s.FUNC_ADD),p=Cn,y=Cn),ae)switch(N){case hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pc:s.blendFunc(s.ONE,s.ONE);break;case Lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,_=null,w=null,S=null,E.set(0,0,0),A=0,m=N,M=ae}return}mt=mt||ht,ft=ft||Y,Ht=Ht||j,(ht!==p||mt!==y)&&(s.blendEquationSeparate(Zt[ht],Zt[mt]),p=ht,y=mt),(Y!==v||j!==_||ft!==w||Ht!==S)&&(s.blendFuncSeparate(ve[Y],ve[j],ve[ft],ve[Ht]),v=Y,_=j,w=ft,S=Ht),(Se.equals(E)===!1||Fe!==A)&&(s.blendColor(Se.r,Se.g,Se.b,Fe),E.copy(Se),A=Fe),m=N,M=!1}function ci(N,ht){N.side===Ze?Mt(s.CULL_FACE):rt(s.CULL_FACE);let Y=N.side===Ve;ht&&(Y=!Y),te(Y),N.blending===hs&&N.transparent===!1?U(dn):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let j=N.stencilWrite;a.setTest(j),j&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),me(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){b!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),b=N)}function ee(N){N!==ju?(rt(s.CULL_FACE),N!==I&&(N===Ic?s.cullFace(s.BACK):N===Qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),I=N}function Nt(N){N!==O&&(q&&s.lineWidth(N),O=N)}function me(N,ht,Y){N?(rt(s.POLYGON_OFFSET_FILL),(z!==ht||X!==Y)&&(s.polygonOffset(ht,Y),z=ht,X=Y)):Mt(s.POLYGON_OFFSET_FILL)}function Lt(N){N?rt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function P(N){N===void 0&&(N=s.TEXTURE0+Q-1),ct!==N&&(s.activeTexture(N),ct=N)}function T(N,ht,Y){Y===void 0&&(ct===null?Y=s.TEXTURE0+Q-1:Y=ct);let j=xt[Y];j===void 0&&(j={type:void 0,texture:void 0},xt[Y]=j),(j.type!==N||j.texture!==ht)&&(ct!==Y&&(s.activeTexture(Y),ct=Y),s.bindTexture(N,ht||dt[N]),j.type=N,j.texture=ht)}function F(){let N=xt[ct];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){gt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),gt.copy(N))}function bt(N){H.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),H.copy(N))}function ie(N,ht){let Y=c.get(ht);Y===void 0&&(Y=new WeakMap,c.set(ht,Y));let j=Y.get(N);j===void 0&&(j=s.getUniformBlockIndex(ht,N.name),Y.set(N,j))}function Xt(N,ht){let j=c.get(ht).get(N);l.get(ht)!==j&&(s.uniformBlockBinding(ht,j,N.__bindingPointIndex),l.set(ht,j))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,xt={},u={},f=new WeakMap,d=[],x=null,g=!1,m=null,p=null,v=null,_=null,y=null,w=null,S=null,E=new wt(0,0,0),A=0,M=!1,b=null,I=null,O=null,z=null,X=null,gt.set(0,0,s.canvas.width,s.canvas.height),H.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Mt,bindFramebuffer:Ct,drawBuffers:Bt,useProgram:pe,setBlending:U,setMaterial:ci,setFlipSided:te,setCullFace:ee,setLineWidth:Nt,setPolygonOffset:me,setScissorTest:Lt,activeTexture:P,bindTexture:T,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:_t,texImage3D:kt,updateUBOMapping:ie,uniformBlockBinding:Xt,texStorage2D:ne,texStorage3D:st,texSubImage2D:Z,texSubImage3D:It,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Ut,viewport:bt,reset:ue}}function Ch(s,t,e,i){let n=Pg(i);switch(e){case qh:return s*t;case $h:return s*t;case Zh:return s*t*2;case Kl:return s*t/n.components*n.byteLength;case Jl:return s*t/n.components*n.byteLength;case Kh:return s*t*2/n.components*n.byteLength;case jl:return s*t*2/n.components*n.byteLength;case Yh:return s*t*3/n.components*n.byteLength;case fi:return s*t*4/n.components*n.byteLength;case Ql:return s*t*4/n.components*n.byteLength;case Lr:case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kr:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(s,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(s,8)*Math.max(t,8)/2;case $a:case Za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ur:case ul:case dl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jh:case fl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pg(s){switch(s){case qi:case Gh:return{byteLength:1,components:1};case qs:case Wh:case Zs:return{byteLength:2,components:1};case $l:case Zl:return{byteLength:2,components:4};case Yi:case Yl:case Mi:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Lg(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,T){return d?new OffscreenCanvas(P,T):Fr("canvas")}function g(P,T,F){let J=1,et=Lt(P);if((et.width>F||et.height>F)&&(J=F/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Z=Math.floor(J*et.width),It=Math.floor(J*et.height);u===void 0&&(u=x(Z,It));let ut=T?x(Z,It):u;return ut.width=Z,ut.height=It,ut.getContext("2d").drawImage(P,0,0,Z,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+It+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(P,T,F,J,et=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=T;if(T===s.RED&&(F===s.FLOAT&&(Z=s.R32F),F===s.HALF_FLOAT&&(Z=s.R16F),F===s.UNSIGNED_BYTE&&(Z=s.R8)),T===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Z=s.R8UI),F===s.UNSIGNED_SHORT&&(Z=s.R16UI),F===s.UNSIGNED_INT&&(Z=s.R32UI),F===s.BYTE&&(Z=s.R8I),F===s.SHORT&&(Z=s.R16I),F===s.INT&&(Z=s.R32I)),T===s.RG&&(F===s.FLOAT&&(Z=s.RG32F),F===s.HALF_FLOAT&&(Z=s.RG16F),F===s.UNSIGNED_BYTE&&(Z=s.RG8)),T===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Z=s.RG8UI),F===s.UNSIGNED_SHORT&&(Z=s.RG16UI),F===s.UNSIGNED_INT&&(Z=s.RG32UI),F===s.BYTE&&(Z=s.RG8I),F===s.SHORT&&(Z=s.RG16I),F===s.INT&&(Z=s.RG32I)),T===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),F===s.UNSIGNED_INT&&(Z=s.RGB32UI),F===s.BYTE&&(Z=s.RGB8I),F===s.SHORT&&(Z=s.RGB16I),F===s.INT&&(Z=s.RGB32I)),T===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),F===s.UNSIGNED_INT&&(Z=s.RGBA32UI),F===s.BYTE&&(Z=s.RGBA8I),F===s.SHORT&&(Z=s.RGBA16I),F===s.INT&&(Z=s.RGBA32I)),T===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),T===s.RGBA){let It=et?oo:Qt.getTransfer(J);F===s.FLOAT&&(Z=s.RGBA32F),F===s.HALF_FLOAT&&(Z=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Z=It===le?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(P,T){let F;return P?T===null||T===Yi||T===xs?F=s.DEPTH24_STENCIL8:T===Mi?F=s.DEPTH32F_STENCIL8:T===qs&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yi||T===xs?F=s.DEPTH_COMPONENT24:T===Mi?F=s.DEPTH_COMPONENT32F:T===qs&&(F=s.DEPTH_COMPONENT16),F}function w(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ae&&P.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function S(P){let T=P.target;T.removeEventListener("dispose",S),A(T),T.isVideoTexture&&h.delete(T)}function E(P){let T=P.target;T.removeEventListener("dispose",E),b(T)}function A(P){let T=i.get(P);if(T.__webglInit===void 0)return;let F=P.source,J=f.get(F);if(J){let et=J[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(P),Object.keys(J).length===0&&f.delete(F)}i.remove(P)}function M(P){let T=i.get(P);s.deleteTexture(T.__webglTexture);let F=P.source,J=f.get(F);delete J[T.__cacheKey],o.memory.textures--}function b(P){let T=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let et=0;et<T.__webglFramebuffer[J].length;et++)s.deleteFramebuffer(T.__webglFramebuffer[J][et]);else s.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)s.deleteFramebuffer(T.__webglFramebuffer[J]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let F=P.textures;for(let J=0,et=F.length;J<et;J++){let Z=i.get(F[J]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(F[J])}i.remove(P)}let I=0;function O(){I=0}function z(){let P=I;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),I+=1,P}function X(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Q(P,T){let F=i.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(F,P,T);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+T)}function q(P,T){let F=i.get(P);if(P.version>0&&F.__version!==P.version){H(F,P,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+T)}function nt(P,T){let F=i.get(P);if(P.version>0&&F.__version!==P.version){H(F,P,T);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+T)}function W(P,T){let F=i.get(P);if(P.version>0&&F.__version!==P.version){tt(F,P,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+T)}let ct={[Va]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[Ga]:s.MIRRORED_REPEAT},xt={[Ae]:s.NEAREST,[Cd]:s.NEAREST_MIPMAP_NEAREST,[rr]:s.NEAREST_MIPMAP_LINEAR,[Pi]:s.LINEAR,[jo]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},St={[kd]:s.NEVER,[Bd]:s.ALWAYS,[Dd]:s.LESS,[jh]:s.LEQUAL,[Ud]:s.EQUAL,[Fd]:s.GEQUAL,[Od]:s.GREATER,[zd]:s.NOTEQUAL};function K(P,T){if(T.type===Mi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===jo||T.magFilter===rr||T.magFilter===Ln||T.minFilter===Pi||T.minFilter===jo||T.minFilter===rr||T.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ct[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ct[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ct[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,xt[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,St[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ae||T.minFilter!==rr&&T.minFilter!==Ln||T.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function gt(P,T){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",S));let J=T.source,et=f.get(J);et===void 0&&(et={},f.set(J,et));let Z=X(T);if(Z!==P.__cacheKey){et[Z]===void 0&&(et[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[Z].usedTimes++;let It=et[P.__cacheKey];It!==void 0&&(et[P.__cacheKey].usedTimes--,It.usedTimes===0&&M(T)),P.__cacheKey=Z,P.__webglTexture=et[Z].texture}return F}function H(P,T,F){let J=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=s.TEXTURE_3D);let et=gt(P,T),Z=T.source;e.bindTexture(J,P.__webglTexture,s.TEXTURE0+F);let It=i.get(Z);if(Z.version!==It.__version||et===!0){e.activeTexture(s.TEXTURE0+F);let ut=Qt.getPrimaries(Qt.workingColorSpace),vt=T.colorSpace===Ci?null:Qt.getPrimaries(T.colorSpace),ne=T.colorSpace===Ci||ut===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let st=g(T.image,!1,n.maxTextureSize);st=me(T,st);let _t=r.convert(T.format,T.colorSpace),kt=r.convert(T.type),Ut=_(T.internalFormat,_t,kt,T.colorSpace,T.isVideoTexture);K(J,T);let bt,ie=T.mipmaps,Xt=T.isVideoTexture!==!0,ue=It.__version===void 0||et===!0,N=Z.dataReady,ht=w(T,st);if(T.isDepthTexture)Ut=y(T.format===ys,T.type),ue&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ut,st.width,st.height,0,_t,kt,null));else if(T.isDataTexture)if(ie.length>0){Xt&&ue&&e.texStorage2D(s.TEXTURE_2D,ht,Ut,ie[0].width,ie[0].height);for(let Y=0,j=ie.length;Y<j;Y++)bt=ie[Y],Xt?N&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,bt.width,bt.height,_t,kt,bt.data):e.texImage2D(s.TEXTURE_2D,Y,Ut,bt.width,bt.height,0,_t,kt,bt.data);T.generateMipmaps=!1}else Xt?(ue&&e.texStorage2D(s.TEXTURE_2D,ht,Ut,st.width,st.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,_t,kt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,st.width,st.height,0,_t,kt,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Ut,ie[0].width,ie[0].height,st.depth);for(let Y=0,j=ie.length;Y<j;Y++)if(bt=ie[Y],T.format!==fi)if(_t!==null)if(Xt){if(N)if(T.layerUpdates.size>0){let mt=Ch(bt.width,bt.height,T.format,T.type);for(let ft of T.layerUpdates){let Ht=bt.data.subarray(ft*mt/bt.data.BYTES_PER_ELEMENT,(ft+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ft,bt.width,bt.height,1,_t,Ht)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,st.depth,_t,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ut,bt.width,bt.height,st.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,st.depth,_t,kt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ut,bt.width,bt.height,st.depth,0,_t,kt,bt.data)}else{Xt&&ue&&e.texStorage2D(s.TEXTURE_2D,ht,Ut,ie[0].width,ie[0].height);for(let Y=0,j=ie.length;Y<j;Y++)bt=ie[Y],T.format!==fi?_t!==null?Xt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,bt.width,bt.height,_t,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,bt.width,bt.height,_t,kt,bt.data):e.texImage2D(s.TEXTURE_2D,Y,Ut,bt.width,bt.height,0,_t,kt,bt.data)}else if(T.isDataArrayTexture)if(Xt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Ut,st.width,st.height,st.depth),N)if(T.layerUpdates.size>0){let Y=Ch(st.width,st.height,T.format,T.type);for(let j of T.layerUpdates){let mt=st.data.subarray(j*Y/st.data.BYTES_PER_ELEMENT,(j+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,_t,kt,mt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,kt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,_t,kt,st.data);else if(T.isData3DTexture)Xt?(ue&&e.texStorage3D(s.TEXTURE_3D,ht,Ut,st.width,st.height,st.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,kt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,_t,kt,st.data);else if(T.isFramebufferTexture){if(ue)if(Xt)e.texStorage2D(s.TEXTURE_2D,ht,Ut,st.width,st.height);else{let Y=st.width,j=st.height;for(let mt=0;mt<ht;mt++)e.texImage2D(s.TEXTURE_2D,mt,Ut,Y,j,0,_t,kt,null),Y>>=1,j>>=1}}else if(ie.length>0){if(Xt&&ue){let Y=Lt(ie[0]);e.texStorage2D(s.TEXTURE_2D,ht,Ut,Y.width,Y.height)}for(let Y=0,j=ie.length;Y<j;Y++)bt=ie[Y],Xt?N&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,_t,kt,bt):e.texImage2D(s.TEXTURE_2D,Y,Ut,_t,kt,bt);T.generateMipmaps=!1}else if(Xt){if(ue){let Y=Lt(st);e.texStorage2D(s.TEXTURE_2D,ht,Ut,Y.width,Y.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,kt,st)}else e.texImage2D(s.TEXTURE_2D,0,Ut,_t,kt,st);m(T)&&p(J),It.__version=Z.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function tt(P,T,F){if(T.image.length!==6)return;let J=gt(P,T),et=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+F);let Z=i.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(s.TEXTURE0+F);let It=Qt.getPrimaries(Qt.workingColorSpace),ut=T.colorSpace===Ci?null:Qt.getPrimaries(T.colorSpace),vt=T.colorSpace===Ci||It===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let ne=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,_t=[];for(let j=0;j<6;j++)!ne&&!st?_t[j]=g(T.image[j],!0,n.maxCubemapSize):_t[j]=st?T.image[j].image:T.image[j],_t[j]=me(T,_t[j]);let kt=_t[0],Ut=r.convert(T.format,T.colorSpace),bt=r.convert(T.type),ie=_(T.internalFormat,Ut,bt,T.colorSpace),Xt=T.isVideoTexture!==!0,ue=Z.__version===void 0||J===!0,N=et.dataReady,ht=w(T,kt);K(s.TEXTURE_CUBE_MAP,T);let Y;if(ne){Xt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,ie,kt.width,kt.height);for(let j=0;j<6;j++){Y=_t[j].mipmaps;for(let mt=0;mt<Y.length;mt++){let ft=Y[mt];T.format!==fi?Ut!==null?Xt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,ft.width,ft.height,Ut,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,ie,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,ft.width,ft.height,Ut,bt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,ie,ft.width,ft.height,0,Ut,bt,ft.data)}}}else{if(Y=T.mipmaps,Xt&&ue){Y.length>0&&ht++;let j=Lt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,ie,j.width,j.height)}for(let j=0;j<6;j++)if(st){Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_t[j].width,_t[j].height,Ut,bt,_t[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ie,_t[j].width,_t[j].height,0,Ut,bt,_t[j].data);for(let mt=0;mt<Y.length;mt++){let Ht=Y[mt].image[j].image;Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Ht.width,Ht.height,Ut,bt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,ie,Ht.width,Ht.height,0,Ut,bt,Ht.data)}}else{Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,bt,_t[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ie,Ut,bt,_t[j]);for(let mt=0;mt<Y.length;mt++){let ft=Y[mt];Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Ut,bt,ft.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,ie,Ut,bt,ft.image[j])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),Z.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function dt(P,T,F,J,et,Z){let It=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),vt=_(F.internalFormat,It,ut,F.colorSpace),ne=i.get(T),st=i.get(F);if(st.__renderTarget=T,!ne.__hasExternalTextures){let _t=Math.max(1,T.width>>Z),kt=Math.max(1,T.height>>Z);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,vt,_t,kt,T.depth,0,It,ut,null):e.texImage2D(et,Z,vt,_t,kt,0,It,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ee(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,et,st.__webglTexture,0,te(T)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,et,st.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(P,T,F){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){let J=T.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=y(T.stencilBuffer,et),It=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=te(T);ee(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Z,T.width,T.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Z,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Z,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,P)}else{let J=T.textures;for(let et=0;et<J.length;et++){let Z=J[et],It=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),vt=_(Z.internalFormat,It,ut,Z.colorSpace),ne=te(T);F&&ee(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,vt,T.width,T.height):ee(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,vt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,vt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);let et=J.__webglTexture,Z=te(T);if(T.depthTexture.format===us)ee(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(T.depthTexture.format===ys)ee(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ct(P){let T=i.get(P),F=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){let et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=J}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Mt(T.__webglFramebuffer,P)}else if(F){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=s.createRenderbuffer(),rt(T.__webglDepthbuffer[J],P,!1);else{let et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),rt(T.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(P,T,F){let J=i.get(P);T!==void 0&&dt(J.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ct(P)}function pe(P){let T=P.texture,F=i.get(P),J=i.get(T);P.addEventListener("dispose",E);let et=P.textures,Z=P.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=T.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let vt=0;vt<T.mipmaps.length;vt++)F.__webglFramebuffer[ut][vt]=s.createFramebuffer()}else F.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<T.mipmaps.length;ut++)F.__webglFramebuffer[ut]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(It)for(let ut=0,vt=et.length;ut<vt;ut++){let ne=i.get(et[ut]);ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ee(P)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<et.length;ut++){let vt=et[ut];F.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);let ne=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),_t=_(vt.internalFormat,ne,st,vt.colorSpace,P.isXRRenderTarget===!0),kt=te(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,_t,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),K(s.TEXTURE_CUBE_MAP,T);for(let ut=0;ut<6;ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)dt(F.__webglFramebuffer[ut][vt],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else dt(F.__webglFramebuffer[ut],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(T)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ut=0,vt=et.length;ut<vt;ut++){let ne=et[ut],st=i.get(ne);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),K(s.TEXTURE_2D,ne),dt(F.__webglFramebuffer,P,ne,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(ne)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),K(ut,T),T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)dt(F.__webglFramebuffer[vt],P,T,s.COLOR_ATTACHMENT0,ut,vt);else dt(F.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,ut,0);m(T)&&p(ut),e.unbindTexture()}P.depthBuffer&&Ct(P)}function Zt(P){let T=P.textures;for(let F=0,J=T.length;F<J;F++){let et=T[F];if(m(et)){let Z=v(P),It=i.get(et).__webglTexture;e.bindTexture(Z,It),p(Z),e.unbindTexture()}}}let ve=[],U=[];function ci(P){if(P.samples>0){if(ee(P)===!1){let T=P.textures,F=P.width,J=P.height,et=s.COLOR_BUFFER_BIT,Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=i.get(P),ut=T.length>1;if(ut)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[vt]);let ne=i.get(T[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,F,J,0,0,F,J,et,s.NEAREST),l===!0&&(ve.length=0,U.length=0,ve.push(s.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ve.push(Z),U.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,It.__webglColorRenderbuffer[vt]);let ne=i.get(T[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,ne,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function te(P){return Math.min(n.maxSamples,P.samples)}function ee(P){let T=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Nt(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function me(P,T){let F=P.colorSpace,J=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==xn&&F!==Ci&&(Qt.getTransfer(F)===le?(J!==fi||et!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=Bt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=ci,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=ee}function Ng(s,t){function e(i,n=Ci){let r,o=Qt.getTransfer(n);if(i===qi)return s.UNSIGNED_BYTE;if(i===$l)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return s.BYTE;if(i===Wh)return s.SHORT;if(i===qs)return s.UNSIGNED_SHORT;if(i===Yl)return s.INT;if(i===Yi)return s.UNSIGNED_INT;if(i===Mi)return s.FLOAT;if(i===Zs)return s.HALF_FLOAT;if(i===qh)return s.ALPHA;if(i===Yh)return s.RGB;if(i===fi)return s.RGBA;if(i===$h)return s.LUMINANCE;if(i===Zh)return s.LUMINANCE_ALPHA;if(i===us)return s.DEPTH_COMPONENT;if(i===ys)return s.DEPTH_STENCIL;if(i===Kl)return s.RED;if(i===Jl)return s.RED_INTEGER;if(i===Kh)return s.RG;if(i===jl)return s.RG_INTEGER;if(i===Ql)return s.RGBA_INTEGER;if(i===Lr||i===Nr||i===kr||i===Dr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Za||i===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$a||i===Za)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ka)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ja||i===ja||i===Qa||i===tl||i===el||i===il||i===nl||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ur||i===ul||i===dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ur)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jh||i===fl||i===pl||i===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ur)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Ll=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ke=class extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}},kg={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
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

}`,Nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ei,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new We({vertexShader:Dg,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new Ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kl=class extends pn{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,g=new Nl,m=e.getContextAttributes(),p=null,v=null,_=[],y=[],w=new Ft,S=null,E=new Oe;E.viewport=new be;let A=new Oe;A.viewport=new be;let M=[E,A],b=new Ll,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let tt=_[H];return tt===void 0&&(tt=new Xs,_[H]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(H){let tt=_[H];return tt===void 0&&(tt=new Xs,_[H]=tt),tt.getGripSpace()},this.getHand=function(H){let tt=_[H];return tt===void 0&&(tt=new Xs,_[H]=tt),tt.getHandSpace()};function z(H){let tt=y.indexOf(H.inputSource);if(tt===-1)return;let dt=_[tt];dt!==void 0&&(dt.update(H.inputSource,H.frame,c||o),dt.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",Q);for(let H=0;H<_.length;H++){let tt=y[H];tt!==null&&(y[H]=null,_[H].disconnect(tt))}I=null,O=null,g.reset(),t.setRenderTarget(p),d=null,f=null,u=null,n=null,v=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",X),n.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),n.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,tt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Si(d.framebufferWidth,d.framebufferHeight,{format:fi,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,dt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?ys:us,dt=m.stencil?xs:Yi);let Mt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(Mt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Si(f.textureWidth,f.textureHeight,{format:fi,type:qi,depthTexture:new Ss(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),gt.setContext(n),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(H){for(let tt=0;tt<H.removed.length;tt++){let dt=H.removed[tt],rt=y.indexOf(dt);rt>=0&&(y[rt]=null,_[rt].disconnect(dt))}for(let tt=0;tt<H.added.length;tt++){let dt=H.added[tt],rt=y.indexOf(dt);if(rt===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=y.length){y.push(dt),rt=Ct;break}else if(y[Ct]===null){y[Ct]=dt,rt=Ct;break}if(rt===-1)break}let Mt=_[rt];Mt&&Mt.connect(dt)}}let q=new C,nt=new C;function W(H,tt,dt){q.setFromMatrixPosition(tt.matrixWorld),nt.setFromMatrixPosition(dt.matrixWorld);let rt=q.distanceTo(nt),Mt=tt.projectionMatrix.elements,Ct=dt.projectionMatrix.elements,Bt=Mt[14]/(Mt[10]-1),pe=Mt[14]/(Mt[10]+1),Zt=(Mt[9]+1)/Mt[5],ve=(Mt[9]-1)/Mt[5],U=(Mt[8]-1)/Mt[0],ci=(Ct[8]+1)/Ct[0],te=Bt*U,ee=Bt*ci,Nt=rt/(-U+ci),me=Nt*-U;if(tt.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(me),H.translateZ(Nt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Mt[10]===-1)H.projectionMatrix.copy(tt.projectionMatrix),H.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Lt=Bt+Nt,P=pe+Nt,T=te-me,F=ee+(rt-me),J=Zt*pe/P*Lt,et=ve*pe/P*Lt;H.projectionMatrix.makePerspective(T,F,J,et,Lt,P),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ct(H,tt){tt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(tt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;let tt=H.near,dt=H.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),b.near=A.near=E.near=tt,b.far=A.far=E.far=dt,(I!==b.near||O!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,O=b.far),E.layers.mask=H.layers.mask|2,A.layers.mask=H.layers.mask|4,b.layers.mask=E.layers.mask|A.layers.mask;let rt=H.parent,Mt=b.cameras;ct(b,rt);for(let Ct=0;Ct<Mt.length;Ct++)ct(Mt[Ct],rt);Mt.length===2?W(b,E,A):b.projectionMatrix.copy(E.projectionMatrix),xt(H,b,rt)};function xt(H,tt,dt){dt===null?H.matrix.copy(tt.matrixWorld):(H.matrix.copy(dt.matrixWorld),H.matrix.invert(),H.matrix.multiply(tt.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(tt.projectionMatrix),H.projectionMatrixInverse.copy(tt.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=yl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let St=null;function K(H,tt){if(h=tt.getViewerPose(c||o),x=tt,h!==null){let dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let rt=!1;dt.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let Ct=0;Ct<dt.length;Ct++){let Bt=dt[Ct],pe=null;if(d!==null)pe=d.getViewport(Bt);else{let ve=u.getViewSubImage(f,Bt);pe=ve.viewport,Ct===0&&(t.setRenderTargetTextures(v,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(v))}let Zt=M[Ct];Zt===void 0&&(Zt=new Oe,Zt.layers.enable(Ct),Zt.viewport=new be,M[Ct]=Zt),Zt.matrix.fromArray(Bt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Bt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(pe.x,pe.y,pe.width,pe.height),Ct===0&&(b.matrix.copy(Zt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),rt===!0&&b.cameras.push(Zt)}let Mt=n.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){let Ct=u.getDepthInformation(dt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,n.renderState)}}for(let dt=0;dt<_.length;dt++){let rt=y[dt],Mt=_[dt];rt!==null&&Mt!==void 0&&Mt.update(rt,tt,c||o)}St&&St(H,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),x=null}let gt=new iu;gt.setAnimationLoop(K),this.setAnimationLoop=function(H){St=H},this.dispose=function(){}}},An=new $i,Og=new Kt;function zg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,eu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,An.copy(y),An.x*=-1,An.y*=-1,An.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(An)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Fg(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=n[v.id];y===void 0&&(x(v),y=h(v),n[v.id]=y,v.addEventListener("dispose",m));let w=_.program;i.updateUBOMapping(v,w);let S=t.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function h(v){let _=u();v.__bindingPointIndex=_;let y=s.createBuffer(),w=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=n[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,E=y.length;S<E;S++){let A=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,b=A.length;M<b;M++){let I=A[M];if(d(I,S,M,w)===!0){let O=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],X=0;for(let Q=0;Q<z.length;Q++){let q=z[Q],nt=g(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,O+X,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,X),X+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,y,w){let S=v.value,E=_+"_"+y;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:w[E]=S.clone(),!0;{let A=w[E];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[E]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function x(v){let _=v.uniforms,y=0,w=16;for(let E=0,A=_.length;E<A;E++){let M=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,I=M.length;b<I;b++){let O=M[b],z=Array.isArray(O.value)?O.value:[O.value];for(let X=0,Q=z.length;X<Q;X++){let q=z[X],nt=g(q),W=y%w,ct=W%nt.boundary,xt=W+ct;y+=ct,xt!==0&&w-xt<nt.storage&&(y+=w-xt),O.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=nt.storage}}}let S=y%w;return S>0&&(y+=w-S),v.__size=y,v.__cache={},this}function g(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function p(){for(let v in n)s.deleteBuffer(n[v]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}var $r=class{constructor(t={}){let{canvas:e=Vd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=fn,this.toneMappingExposure=1;let y=this,w=!1,S=0,E=0,A=null,M=-1,b=null,I=new be,O=new be,z=null,X=new wt(0),Q=0,q=e.width,nt=e.height,W=1,ct=null,xt=null,St=new be(0,0,q,nt),K=new be(0,0,q,nt),gt=!1,H=new bs,tt=!1,dt=!1,rt=new Kt,Mt=new Kt,Ct=new C,Bt=new be,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function ve(){return A===null?W:1}let U=i;function ci(R,k){return e.getContext(R,k)}try{let R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),U===null){let k="webgl2";if(U=ci(k,R),U===null)throw ci(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let te,ee,Nt,me,Lt,P,T,F,J,et,Z,It,ut,vt,ne,st,_t,kt,Ut,bt,ie,Xt,ue,N;function ht(){te=new em(U),te.init(),Xt=new Ng(U,te),ee=new Z0(U,te,t,Xt),Nt=new Ig(U,te),ee.reverseDepthBuffer&&f&&Nt.buffers.depth.setReversed(!0),me=new sm(U),Lt=new xg,P=new Lg(U,te,Nt,Lt,ee,Xt,me),T=new J0(y),F=new tm(y),J=new uf(U),ue=new Y0(U,J),et=new im(U,J,me,ue),Z=new om(U,et,J,me),Ut=new rm(U,ee,P),st=new K0(Lt),It=new gg(y,T,F,te,ee,ue,st),ut=new zg(y,Lt),vt=new vg,ne=new Eg(te),kt=new q0(y,T,F,Nt,Z,d,l),_t=new Rg(y,Z,ee),N=new Fg(U,me,ee,Nt),bt=new $0(U,te,me),ie=new nm(U,te,me),me.programs=It.programs,y.capabilities=ee,y.extensions=te,y.properties=Lt,y.renderLists=vt,y.shadowMap=_t,y.state=Nt,y.info=me}ht();let Y=new kl(y,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(q,nt,!1))},this.getSize=function(R){return R.set(q,nt)},this.setSize=function(R,k,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,nt=k,e.width=Math.floor(R*W),e.height=Math.floor(k*W),V===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(q*W,nt*W).floor()},this.setDrawingBufferSize=function(R,k,V){q=R,nt=k,W=V,e.width=Math.floor(R*V),e.height=Math.floor(k*V),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(St)},this.setViewport=function(R,k,V,G){R.isVector4?St.set(R.x,R.y,R.z,R.w):St.set(R,k,V,G),Nt.viewport(I.copy(St).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,k,V,G){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,k,V,G),Nt.scissor(O.copy(K).multiplyScalar(W).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){Nt.setScissorTest(gt=R)},this.setOpaqueSort=function(R){ct=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(R=!0,k=!0,V=!0){let G=0;if(R){let D=!1;if(A!==null){let ot=A.texture.format;D=ot===Ql||ot===jl||ot===Jl}if(D){let ot=A.texture.type,pt=ot===qi||ot===Yi||ot===qs||ot===xs||ot===$l||ot===Zl,Tt=kt.getClearColor(),At=kt.getClearAlpha(),Ot=Tt.r,Vt=Tt.g,Rt=Tt.b;pt?(x[0]=Ot,x[1]=Vt,x[2]=Rt,x[3]=At,U.clearBufferuiv(U.COLOR,0,x)):(g[0]=Ot,g[1]=Vt,g[2]=Rt,g[3]=At,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}k&&(G|=U.DEPTH_BUFFER_BIT),V&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),ne.dispose(),Lt.dispose(),T.dispose(),F.dispose(),Z.dispose(),ue.dispose(),N.dispose(),It.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Mc),Y.removeEventListener("sessionend",Sc),bn.stop()};function j(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let R=me.autoReset,k=_t.enabled,V=_t.autoUpdate,G=_t.needsUpdate,D=_t.type;ht(),me.autoReset=R,_t.enabled=k,_t.autoUpdate=V,_t.needsUpdate=G,_t.type=D}function ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){let k=R.target;k.removeEventListener("dispose",Ht),Se(k)}function Se(R){Fe(R),Lt.remove(R)}function Fe(R){let k=Lt.get(R).programs;k!==void 0&&(k.forEach(function(V){It.releaseProgram(V)}),R.isShaderMaterial&&It.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,V,G,D,ot){k===null&&(k=pe);let pt=D.isMesh&&D.matrixWorld.determinant()<0,Tt=Zu(R,k,V,G,D);Nt.setMaterial(G,pt);let At=V.index,Ot=1;if(G.wireframe===!0){if(At=et.getWireframeAttribute(V),At===void 0)return;Ot=2}let Vt=V.drawRange,Rt=V.attributes.position,se=Vt.start*Ot,de=(Vt.start+Vt.count)*Ot;ot!==null&&(se=Math.max(se,ot.start*Ot),de=Math.min(de,(ot.start+ot.count)*Ot)),At!==null?(se=Math.max(se,0),de=Math.min(de,At.count)):Rt!=null&&(se=Math.max(se,0),de=Math.min(de,Rt.count));let ge=de-se;if(ge<0||ge===1/0)return;ue.setup(D,G,Tt,V,At);let Qe,re=bt;if(At!==null&&(Qe=J.get(At),re=ie,re.setIndex(Qe)),D.isMesh)G.wireframe===!0?(Nt.setLineWidth(G.wireframeLinewidth*ve()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(D.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),Nt.setLineWidth(Pt*ve()),D.isLineSegments?re.setMode(U.LINES):D.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else D.isPoints?re.setMode(U.POINTS):D.isSprite&&re.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)re.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))re.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Pt=D._multiDrawStarts,Di=D._multiDrawCounts,oe=D._multiDrawCount,yi=At?J.get(At).bytesPerElement:1,Gn=Lt.get(G).currentProgram.getUniforms();for(let ni=0;ni<oe;ni++)Gn.setValue(U,"_gl_DrawID",ni),re.render(Pt[ni]/yi,Di[ni])}else if(D.isInstancedMesh)re.renderInstances(se,ge,D.count);else if(V.isInstancedBufferGeometry){let Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Di=Math.min(V.instanceCount,Pt);re.renderInstances(se,ge,Di)}else re.render(se,ge)};function ae(R,k,V){R.transparent===!0&&R.side===Ze&&R.forceSinglePass===!1?(R.side=Ve,R.needsUpdate=!0,sr(R,k,V),R.side=Li,R.needsUpdate=!0,sr(R,k,V),R.side=Ze):sr(R,k,V)}this.compile=function(R,k,V=null){V===null&&(V=R),p=ne.get(V),p.init(k),_.push(p),V.traverseVisible(function(D){D.isLight&&D.layers.test(k.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),R!==V&&R.traverseVisible(function(D){D.isLight&&D.layers.test(k.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();let G=new Set;return R.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ot=D.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){let Tt=ot[pt];ae(Tt,V,D),G.add(Tt)}else ae(ot,V,D),G.add(ot)}),_.pop(),p=null,G},this.compileAsync=function(R,k,V=null){let G=this.compile(R,k,V);return new Promise(D=>{function ot(){if(G.forEach(function(pt){Lt.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){D(R);return}setTimeout(ot,10)}te.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let xi=null;function ki(R){xi&&xi(R)}function Mc(){bn.stop()}function Sc(){bn.start()}let bn=new iu;bn.setAnimationLoop(ki),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(R){xi=R,Y.setAnimationLoop(R),R===null?bn.stop():bn.start()},Y.addEventListener("sessionstart",Mc),Y.addEventListener("sessionend",Sc),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,k,A),p=ne.get(R,_.length),p.init(k),_.push(p),Mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H.setFromProjectionMatrix(Mt),dt=this.localClippingEnabled,tt=st.init(this.clippingPlanes,dt),m=vt.get(R,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){let ot=y.xr.getDepthSensingMesh();ot!==null&&Jo(ot,k,-1/0,y.sortObjects)}Jo(R,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ct,xt),Zt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Zt&&kt.addToRenderList(m,R),this.info.render.frame++,tt===!0&&st.beginShadows();let V=p.state.shadowsArray;_t.render(V,R,k),tt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,D=m.transmissive;if(p.setupLights(),k.isArrayCamera){let ot=k.cameras;if(D.length>0)for(let pt=0,Tt=ot.length;pt<Tt;pt++){let At=ot[pt];Ec(G,D,R,At)}Zt&&kt.render(R);for(let pt=0,Tt=ot.length;pt<Tt;pt++){let At=ot[pt];wc(m,R,At,At.viewport)}}else D.length>0&&Ec(G,D,R,k),Zt&&kt.render(R),wc(m,R,k);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(y,R,k),ue.resetDefaultState(),M=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],tt===!0&&st.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Jo(R,k,V,G){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){G&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);let pt=Z.update(R),Tt=R.material;Tt.visible&&m.push(R,pt,Tt,V,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){let pt=Z.update(R),Tt=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Bt.copy(pt.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(Tt)){let At=pt.groups;for(let Ot=0,Vt=At.length;Ot<Vt;Ot++){let Rt=At[Ot],se=Tt[Rt.materialIndex];se&&se.visible&&m.push(R,pt,se,V,Bt.z,Rt)}}else Tt.visible&&m.push(R,pt,Tt,V,Bt.z,null)}}let ot=R.children;for(let pt=0,Tt=ot.length;pt<Tt;pt++)Jo(ot[pt],k,V,G)}function wc(R,k,V,G){let D=R.opaque,ot=R.transmissive,pt=R.transparent;p.setupLightsView(V),tt===!0&&st.setGlobalState(y.clippingPlanes,V),G&&Nt.viewport(I.copy(G)),D.length>0&&nr(D,k,V),ot.length>0&&nr(ot,k,V),pt.length>0&&nr(pt,k,V),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function Ec(R,k,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Si(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Zs:qi,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let ot=p.state.transmissionRenderTarget[G.id],pt=G.viewport||I;ot.setSize(pt.z,pt.w);let Tt=y.getRenderTarget();y.setRenderTarget(ot),y.getClearColor(X),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Zt&&kt.render(V);let At=y.toneMapping;y.toneMapping=fn;let Ot=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),tt===!0&&st.setGlobalState(y.clippingPlanes,G),nr(R,V,G),P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot),te.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Rt=0,se=k.length;Rt<se;Rt++){let de=k[Rt],ge=de.object,Qe=de.geometry,re=de.material,Pt=de.group;if(re.side===Ze&&ge.layers.test(G.layers)){let Di=re.side;re.side=Ve,re.needsUpdate=!0,Tc(ge,V,G,Qe,re,Pt),re.side=Di,re.needsUpdate=!0,Vt=!0}}Vt===!0&&(P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot))}y.setRenderTarget(Tt),y.setClearColor(X,Q),Ot!==void 0&&(G.viewport=Ot),y.toneMapping=At}function nr(R,k,V){let G=k.isScene===!0?k.overrideMaterial:null;for(let D=0,ot=R.length;D<ot;D++){let pt=R[D],Tt=pt.object,At=pt.geometry,Ot=G===null?pt.material:G,Vt=pt.group;Tt.layers.test(V.layers)&&Tc(Tt,k,V,At,Ot,Vt)}}function Tc(R,k,V,G,D,ot){R.onBeforeRender(y,k,V,G,D,ot),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),D.onBeforeRender(y,k,V,G,R,ot),D.transparent===!0&&D.side===Ze&&D.forceSinglePass===!1?(D.side=Ve,D.needsUpdate=!0,y.renderBufferDirect(V,k,G,D,R,ot),D.side=Li,D.needsUpdate=!0,y.renderBufferDirect(V,k,G,D,R,ot),D.side=Ze):y.renderBufferDirect(V,k,G,D,R,ot),R.onAfterRender(y,k,V,G,D,ot)}function sr(R,k,V){k.isScene!==!0&&(k=pe);let G=Lt.get(R),D=p.state.lights,ot=p.state.shadowsArray,pt=D.state.version,Tt=It.getParameters(R,D.state,ot,k,V),At=It.getProgramCacheKey(Tt),Ot=G.programs;G.environment=R.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(R.isMeshStandardMaterial?F:T).get(R.envMap||G.environment),G.envMapRotation=G.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ot===void 0&&(R.addEventListener("dispose",Ht),Ot=new Map,G.programs=Ot);let Vt=Ot.get(At);if(Vt!==void 0){if(G.currentProgram===Vt&&G.lightsStateVersion===pt)return Rc(R,Tt),Vt}else Tt.uniforms=It.getUniforms(R),R.onBeforeCompile(Tt,y),Vt=It.acquireProgram(Tt,At),Ot.set(At,Vt),G.uniforms=Tt.uniforms;let Rt=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Rt.clippingPlanes=st.uniform),Rc(R,Tt),G.needsLights=Ju(R),G.lightsStateVersion=pt,G.needsLights&&(Rt.ambientLightColor.value=D.state.ambient,Rt.lightProbe.value=D.state.probe,Rt.directionalLights.value=D.state.directional,Rt.directionalLightShadows.value=D.state.directionalShadow,Rt.spotLights.value=D.state.spot,Rt.spotLightShadows.value=D.state.spotShadow,Rt.rectAreaLights.value=D.state.rectArea,Rt.ltc_1.value=D.state.rectAreaLTC1,Rt.ltc_2.value=D.state.rectAreaLTC2,Rt.pointLights.value=D.state.point,Rt.pointLightShadows.value=D.state.pointShadow,Rt.hemisphereLights.value=D.state.hemi,Rt.directionalShadowMap.value=D.state.directionalShadowMap,Rt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Rt.spotShadowMap.value=D.state.spotShadowMap,Rt.spotLightMatrix.value=D.state.spotLightMatrix,Rt.spotLightMap.value=D.state.spotLightMap,Rt.pointShadowMap.value=D.state.pointShadowMap,Rt.pointShadowMatrix.value=D.state.pointShadowMatrix),G.currentProgram=Vt,G.uniformsList=null,Vt}function Ac(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=fs.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Rc(R,k){let V=Lt.get(R);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Zu(R,k,V,G,D){k.isScene!==!0&&(k=pe),P.resetTextureUnits();let ot=k.fog,pt=G.isMeshStandardMaterial?k.environment:null,Tt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xn,At=(G.isMeshStandardMaterial?F:T).get(G.envMap||pt),Ot=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Vt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,de=!!V.morphAttributes.color,ge=fn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ge=y.toneMapping);let Qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=Qe!==void 0?Qe.length:0,Pt=Lt.get(G),Di=p.state.lights;if(tt===!0&&(dt===!0||R!==b)){let hi=R===b&&G.id===M;st.setState(G,R,hi)}let oe=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Di.state.version||Pt.outputColorSpace!==Tt||D.isBatchedMesh&&Pt.batching===!1||!D.isBatchedMesh&&Pt.batching===!0||D.isBatchedMesh&&Pt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Pt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Pt.instancing===!1||!D.isInstancedMesh&&Pt.instancing===!0||D.isSkinnedMesh&&Pt.skinning===!1||!D.isSkinnedMesh&&Pt.skinning===!0||D.isInstancedMesh&&Pt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Pt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Pt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Pt.instancingMorph===!1&&D.morphTexture!==null||Pt.envMap!==At||G.fog===!0&&Pt.fog!==ot||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==st.numPlanes||Pt.numIntersection!==st.numIntersection)||Pt.vertexAlphas!==Ot||Pt.vertexTangents!==Vt||Pt.morphTargets!==Rt||Pt.morphNormals!==se||Pt.morphColors!==de||Pt.toneMapping!==ge||Pt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Pt.__version=G.version);let yi=Pt.currentProgram;oe===!0&&(yi=sr(G,k,D));let Gn=!1,ni=!1,Ls=!1,xe=yi.getUniforms(),Ai=Pt.uniforms;if(Nt.useProgram(yi.program)&&(Gn=!0,ni=!0,Ls=!0),G.id!==M&&(M=G.id,ni=!0),Gn||b!==R){Nt.buffers.depth.getReversed()?(rt.copy(R.projectionMatrix),Wd(rt),Xd(rt),xe.setValue(U,"projectionMatrix",rt)):xe.setValue(U,"projectionMatrix",R.projectionMatrix),xe.setValue(U,"viewMatrix",R.matrixWorldInverse);let nn=xe.map.cameraPosition;nn!==void 0&&nn.setValue(U,Ct.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&xe.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,ni=!0,Ls=!0)}if(D.isSkinnedMesh){xe.setOptional(U,D,"bindMatrix"),xe.setOptional(U,D,"bindMatrixInverse");let hi=D.skeleton;hi&&(hi.boneTexture===null&&hi.computeBoneTexture(),xe.setValue(U,"boneTexture",hi.boneTexture,P))}D.isBatchedMesh&&(xe.setOptional(U,D,"batchingTexture"),xe.setValue(U,"batchingTexture",D._matricesTexture,P),xe.setOptional(U,D,"batchingIdTexture"),xe.setValue(U,"batchingIdTexture",D._indirectTexture,P),xe.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&xe.setValue(U,"batchingColorTexture",D._colorsTexture,P));let Ns=V.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Ut.update(D,V,yi),(ni||Pt.receiveShadow!==D.receiveShadow)&&(Pt.receiveShadow=D.receiveShadow,xe.setValue(U,"receiveShadow",D.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ai.envMap.value=At,Ai.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&(Ai.envMapIntensity.value=k.environmentIntensity),ni&&(xe.setValue(U,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&Ku(Ai,Ls),ot&&G.fog===!0&&ut.refreshFogUniforms(Ai,ot),ut.refreshMaterialUniforms(Ai,G,W,nt,p.state.transmissionRenderTarget[R.id]),fs.upload(U,Ac(Pt),Ai,P)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fs.upload(U,Ac(Pt),Ai,P),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(U,"center",D.center),xe.setValue(U,"modelViewMatrix",D.modelViewMatrix),xe.setValue(U,"normalMatrix",D.normalMatrix),xe.setValue(U,"modelMatrix",D.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let hi=G.uniformsGroups;for(let nn=0,sn=hi.length;nn<sn;nn++){let Cc=hi[nn];N.update(Cc,yi),N.bind(Cc,yi)}}return yi}function Ku(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Ju(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,k,V){Lt.get(R.texture).__webglTexture=k,Lt.get(R.depthTexture).__webglTexture=V;let G=Lt.get(R);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){let V=Lt.get(R);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,V=0){A=R,S=k,E=V;let G=!0,D=null,ot=!1,pt=!1;if(R){let At=Lt.get(R);if(At.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(At.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(At.__hasExternalTextures)P.rebindTextures(R,Lt.get(R.texture).__webglTexture,Lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Rt=R.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&Lt.has(Rt)&&(R.width!==Rt.image.width||R.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let Ot=R.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(pt=!0);let Vt=Lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?D=Vt[k][V]:D=Vt[k],ot=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?D=Lt.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?D=Vt[V]:D=Vt,I.copy(R.viewport),O.copy(R.scissor),z=R.scissorTest}else I.copy(St).multiplyScalar(W).floor(),O.copy(K).multiplyScalar(W).floor(),z=gt;if(Nt.bindFramebuffer(U.FRAMEBUFFER,D)&&G&&Nt.drawBuffers(R,D),Nt.viewport(I),Nt.scissor(O),Nt.setScissorTest(z),ot){let At=Lt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,V)}else if(pt){let At=Lt.get(R.texture),Ot=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,V||0,Ot)}M=-1},this.readRenderTargetPixels=function(R,k,V,G,D,ot,pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){Nt.bindFramebuffer(U.FRAMEBUFFER,Tt);try{let At=R.texture,Ot=At.format,Vt=At.type;if(!ee.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-G&&V>=0&&V<=R.height-D&&U.readPixels(k,V,G,D,Xt.convert(Ot),Xt.convert(Vt),ot)}finally{let At=A!==null?Lt.get(A).__webglFramebuffer:null;Nt.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(R,k,V,G,D,ot,pt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Tt=Tt[pt]),Tt){let At=R.texture,Ot=At.format,Vt=At.type;if(!ee.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-G&&V>=0&&V<=R.height-D){Nt.bindFramebuffer(U.FRAMEBUFFER,Tt);let Rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.bufferData(U.PIXEL_PACK_BUFFER,ot.byteLength,U.STREAM_READ),U.readPixels(k,V,G,D,Xt.convert(Ot),Xt.convert(Vt),0);let se=A!==null?Lt.get(A).__webglFramebuffer:null;Nt.bindFramebuffer(U.FRAMEBUFFER,se);let de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gd(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ot),U.deleteBuffer(Rt),U.deleteSync(de),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,V=0){R.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);let G=Math.pow(2,-V),D=Math.floor(R.image.width*G),ot=Math.floor(R.image.height*G),pt=k!==null?k.x:0,Tt=k!==null?k.y:0;P.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,pt,Tt,D,ot),Nt.unbindTexture()},this.copyTextureToTexture=function(R,k,V=null,G=null,D=0){R.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1],k=arguments[2],D=arguments[3]||0,V=null);let ot,pt,Tt,At,Ot,Vt,Rt,se,de,ge=R.isCompressedTexture?R.mipmaps[D]:R.image;V!==null?(ot=V.max.x-V.min.x,pt=V.max.y-V.min.y,Tt=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,Ot=V.min.y,Vt=V.isBox3?V.min.z:0):(ot=ge.width,pt=ge.height,Tt=ge.depth||1,At=0,Ot=0,Vt=0),G!==null?(Rt=G.x,se=G.y,de=G.z):(Rt=0,se=0,de=0);let Qe=Xt.convert(k.format),re=Xt.convert(k.type),Pt;k.isData3DTexture?(P.setTexture3D(k,0),Pt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Pt=U.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Pt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Di=U.getParameter(U.UNPACK_ROW_LENGTH),oe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yi=U.getParameter(U.UNPACK_SKIP_PIXELS),Gn=U.getParameter(U.UNPACK_SKIP_ROWS),ni=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);let Ls=R.isDataArrayTexture||R.isData3DTexture,xe=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Ai=Lt.get(R),Ns=Lt.get(k),hi=Lt.get(Ai.__renderTarget),nn=Lt.get(Ns.__renderTarget);Nt.bindFramebuffer(U.READ_FRAMEBUFFER,hi.__webglFramebuffer),Nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let sn=0;sn<Tt;sn++)Ls&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(R).__webglTexture,D,Vt+sn),R.isDepthTexture?(xe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(k).__webglTexture,D,de+sn),U.blitFramebuffer(At,Ot,ot,pt,Rt,se,ot,pt,U.DEPTH_BUFFER_BIT,U.NEAREST)):xe?U.copyTexSubImage3D(Pt,D,Rt,se,de+sn,At,Ot,ot,pt):U.copyTexSubImage2D(Pt,D,Rt,se,de+sn,At,Ot,ot,pt);Nt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xe?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Pt,D,Rt,se,de,ot,pt,Tt,Qe,re,ge.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Pt,D,Rt,se,de,ot,pt,Tt,Qe,ge.data):U.texSubImage3D(Pt,D,Rt,se,de,ot,pt,Tt,Qe,re,ge):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,Rt,se,ot,pt,Qe,re,ge.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,Rt,se,ge.width,ge.height,Qe,ge.data):U.texSubImage2D(U.TEXTURE_2D,D,Rt,se,ot,pt,Qe,re,ge);U.pixelStorei(U.UNPACK_ROW_LENGTH,Di),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Gn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ni),D===0&&k.generateMipmaps&&U.generateMipmap(Pt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(R,k,V=null,G=null,D=0){return R.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,R=arguments[2],k=arguments[3],D=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,V,G,D)},this.initRenderTarget=function(R){Lt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Nt.unbindTexture()},this.resetState=function(){S=0,E=0,A=null,Nt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var mn=class extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Dl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xl,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new C,Zr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ii(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),n=ce(n,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kn=class extends Nn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ss,zs=new C,rs=new C,os=new C,as=new Ft,Fs=new Ft,au=new Kt,Tr=new C,Bs=new C,Ar=new C,Ih=new Ft,Ra=new Ft,Ph=new Ft,ws=class extends oi{constructor(t=new kn){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Dl(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new Zr(i,3,0,!1)),ss.setAttribute("uv",new Zr(i,2,3,!1))}this.geometry=ss,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),au.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;Rr(Tr.set(-.5,-.5,0),os,o,rs,n,r),Rr(Bs.set(.5,-.5,0),os,o,rs,n,r),Rr(Ar.set(.5,.5,0),os,o,rs,n,r),Ih.set(0,0),Ra.set(1,0),Ph.set(1,1);let a=t.ray.intersectTriangle(Tr,Bs,Ar,!1,zs);if(a===null&&(Rr(Bs.set(-.5,.5,0),os,o,rs,n,r),Ra.set(0,1),a=t.ray.intersectTriangle(Tr,Ar,Bs,!1,zs),a===null))return;let l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:un.getInterpolation(zs,Tr,Bs,Ar,Ih,Ra,Ph,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Rr(s,t,e,i,n,r){as.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Fs.x=r*as.x-n*as.y,Fs.y=n*as.x+r*as.y):Fs.copy(as),s.copy(t),s.x+=Fs.x,s.y+=Fs.y,s.applyMatrix4(au)}var Lh=new C,Nh=new be,kh=new be,Bg=new C,Dh=new Kt,Cr=new C,Ca=new wi,Uh=new Kt,Ia=new Vr,Kr=class extends zt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kc,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ni),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Cr),this.boundingBox.expandByPoint(Cr)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Cr),this.boundingSphere.expandByPoint(Cr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(n),t.ray.intersectsSphere(Ca)!==!1&&(Uh.copy(n).invert(),Ia.copy(t.ray).applyMatrix4(Uh),!(this.boundingBox!==null&&Ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ia)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new be,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===kc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;Nh.fromBufferAttribute(n.attributes.skinIndex,t),kh.fromBufferAttribute(n.attributes.skinWeight,t),Lh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=kh.getComponent(r);if(o!==0){let a=Nh.getComponent(r);Dh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(Bg.copy(Lh).applyMatrix4(Dh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},$s=class extends oi{constructor(){super(),this.isBone=!0,this.type="Bone"}},Jr=class extends ei{constructor(t=null,e=1,i=1,n,r,o,a,l,c=Ae,h=Ae,u,f){super(null,o,a,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Oh=new Kt,Hg=new Kt,jr=class s{constructor(t=[],e=[]){this.uuid=Wi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Kt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Hg;Oh.multiplyMatrices(a,e[r]),Oh.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Jr(e,t,t,fi,Mi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let r=t.bones[i],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $s),this.bones.push(o),this.boneInverses.push(new Kt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,r=e.length;n<r;n++){let o=e[n];t.bones.push(o.uuid);let a=i[n];t.boneInverses.push(a.toArray())}return t}},Qr=class extends Ge{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new Kt,zh=new Kt,Ir=[],Fh=new Ni,Vg=new Kt,Hs=new zt,Vs=new wi,Ki=class extends zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Vg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ls),Fh.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Fh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ls),Vs.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(i),t.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ls),zh.multiplyMatrices(i,ls),Hs.matrixWorld=zh,Hs.raycast(t,Ir);for(let o=0,a=Ir.length;o<a;o++){let l=Ir[o];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jr(new Float32Array(n*this.count),n,this.count,Kl,Mi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gn=class extends ei{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Es=class s extends Ne{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,g=[],m=i/2,p=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function v(){let y=new C,w=new C,S=0,E=(e-t)/i;for(let A=0;A<=r;A++){let M=[],b=A/r,I=b*(e-t)+t;for(let O=0;O<=n;O++){let z=O/n,X=z*l+a,Q=Math.sin(X),q=Math.cos(X);w.x=I*Q,w.y=-b*i+m,w.z=I*q,u.push(w.x,w.y,w.z),y.set(Q,E,q).normalize(),f.push(y.x,y.y,y.z),d.push(z,1-b),M.push(x++)}g.push(M)}for(let A=0;A<n;A++)for(let M=0;M<r;M++){let b=g[M][A],I=g[M+1][A],O=g[M+1][A+1],z=g[M][A+1];(t>0||M!==0)&&(h.push(b,I,z),S+=3),(e>0||M!==r-1)&&(h.push(I,O,z),S+=3)}c.addGroup(p,S,0),p+=S}function _(y){let w=x,S=new Ft,E=new C,A=0,M=y===!0?t:e,b=y===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),x++;let I=x;for(let O=0;O<=n;O++){let X=O/n*l+a,Q=Math.cos(X),q=Math.sin(X);E.x=M*q,E.y=m*b,E.z=M*Q,u.push(E.x,E.y,E.z),f.push(0,b,0),S.x=Q*.5+.5,S.y=q*.5*b+.5,d.push(S.x,S.y),x++}for(let O=0;O<n;O++){let z=w+O,X=I+O;y===!0?h.push(X,X+1,z):h.push(X+1,X,z),A+=3}c.addGroup(p,A,y===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ul=class s extends Ne{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new C,y=new C,w=new C;for(let S=0;S<e.length;S+=3)d(e[S+0],_),d(e[S+1],y),d(e[S+2],w),l(_,y,w,v)}function l(v,_,y,w){let S=w+1,E=[];for(let A=0;A<=S;A++){E[A]=[];let M=v.clone().lerp(y,A/S),b=_.clone().lerp(y,A/S),I=S-A;for(let O=0;O<=I;O++)O===0&&A===S?E[A][O]=M:E[A][O]=M.clone().lerp(b,O/I)}for(let A=0;A<S;A++)for(let M=0;M<2*(S-A)-1;M++){let b=Math.floor(M/2);M%2===0?(f(E[A][b+1]),f(E[A+1][b]),f(E[A][b])):(f(E[A][b+1]),f(E[A+1][b+1]),f(E[A+1][b]))}}function c(v){let _=new C;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new C;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;o.push(y,1-w)}x(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],w=o[v+4],S=Math.max(_,y,w),E=Math.min(_,y,w);S>.9&&E<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,_){let y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function x(){let v=new C,_=new C,y=new C,w=new C,S=new Ft,E=new Ft,A=new Ft;for(let M=0,b=0;M<r.length;M+=9,b+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),A.set(o[b+4],o[b+5]),w.copy(v).add(_).add(y).divideScalar(3);let I=m(w);g(S,b+0,v,I),g(E,b+2,_,I),g(A,b+4,y,I)}}function g(v,_,y,w){w<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var to=class s extends Ul{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},eo=class s extends Ne{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/n,d=new C,x=new Ft;for(let g=0;g<=n;g++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let g=0;g<n;g++){let m=g*(i+1);for(let p=0;p<i;p++){let v=p+m,_=v,y=v+i+1,w=v+i+2,S=v+1;a.push(_,y,S),a.push(y,w,S)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var io=class s extends Ne{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],x=[],g=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){let S=w/e;u.x=-t*Math.cos(n+S*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(n+S*r)*Math.sin(o+_*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(S+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let _=h[p][v+1],y=h[p][v],w=h[p+1][v],S=h[p+1][v+1];(p!==0||o>0)&&d.push(_,y,S),(p!==i-1||l<Math.PI)&&d.push(y,w,S)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var no=class s extends Ne{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=i;d++)for(let x=0;x<=n;x++){let g=x/n*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let x=1;x<=n;x++){let g=(n+1)*d+x-1,m=(n+1)*(d-1)+x-1,p=(n+1)*(d-1)+x,v=(n+1)*d+x;o.push(g,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Pr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Gg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ts=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ol=class extends Ts{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uc:r=t,a=2*e-i;break;case Oc:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Uc:o=t,l=2*i-e;break;case Oc:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(i-e)/(n-e),g=x*x,m=g*x,p=-f*m+2*f*g-f*x,v=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*x+1,_=(-1-d)*m+(1.5+d)*g+.5*x,y=d*m-d*g;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+v*o[c+w]+_*o[l+w]+y*o[u+w];return r}},zl=class extends Ts{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Fl=class extends Ts{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ei=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pr(e,this.TimeBufferType),this.values=Pr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pr(t.times,Array),values:Pr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ol(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Or:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Gg(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let x=0;x!==i;++x){let g=e[u+x];if(g!==e[f+x]||g!==e[d+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=gl;var Dn=class extends Ei{constructor(t,e,i){super(t,e,i)}};Dn.prototype.ValueTypeName="bool";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=Or;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Ei{};Bl.prototype.ValueTypeName="color";var Hl=class extends Ei{};Hl.prototype.ValueTypeName="number";var Vl=class extends Ts{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},so=class extends Ei{InterpolantFactoryMethodLinear(t){return new Vl(this.times,this.values,this.getValueSize(),t)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var Un=class extends Ei{constructor(t,e,i){super(t,e,i)}};Un.prototype.ValueTypeName="string";Un.prototype.ValueBufferType=Array;Un.prototype.DefaultInterpolation=Or;Un.prototype.InterpolantFactoryMethodLinear=void 0;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends Ei{};Gl.prototype.ValueTypeName="vector";var Wl=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},Wg=new Wl,Xl=class{constructor(t){this.manager=t!==void 0?t:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ec="\\[\\]\\.:\\/",Xg=new RegExp("["+ec+"]","g"),ic="[^"+ec+"]",qg="[^"+ec.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",ic),$g=/(WCOD+)?/.source.replace("WCOD",qg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),Jg=new RegExp("^"+Yg+$g+Zg+Kg+"$"),jg=["material","materials","bones","map"],ql=class{constructor(t,e,i){let n=i||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},_e=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(t){let e=Jg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);jg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=ql;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var nc=class{constructor(){this.map=new Map}on(t,e){return this.map.has(t)||this.map.set(t,new Set),this.map.get(t).add(e),()=>this.off(t,e)}once(t,e){let i=this.on(t,n=>{i(),e(n)});return i}off(t,e){let i=this.map.get(t);i&&i.delete(e)}emit(t,e){let i=this.map.get(t);if(i)for(let r of Array.from(i))try{r(e)}catch(o){console.error("[event]",t,o)}let n=this.map.get("*");if(n)for(let r of n)r({type:t,payload:e})}},B=new nc;var Wt=(s,t,e)=>s<t?t:s>e?e:s,co=(s,t,e)=>s+(t-s)*e;var Xe=(s,t,e,i)=>co(s,t,1-Math.exp(-e*i));var lu=Math.PI*2,ho=s=>{for(;s>Math.PI;)s-=lu;for(;s<-Math.PI;)s+=lu;return s},On=(s,t,e,i)=>s+ho(t-s)*(1-Math.exp(-e*i));function ai(s){let t=s>>>0,e=()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+e()*(n-i),e.int=(i,n)=>Math.floor(i+e()*(n-i+1)),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e.weighted=i=>{let n=0;for(let o of i)n+=o[1];let r=e()*n;for(let o of i)if(r-=o[1],r<=0)return o[0];return i[i.length-1][0]},e}function cu(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var Ks=()=>new C,ny={a:Ks(),b:Ks(),c:Ks(),d:Ks(),e:Ks()};function sc(s,t){for(let e of Object.keys(t)){let i=t[e];i&&typeof i=="object"&&!Array.isArray(i)&&s[e]&&typeof s[e]=="object"&&!Array.isArray(s[e])?sc(s[e],i):s[e]=i}return s}var hu=["cities","skins","gadgets","rides","chapters","sideQuests","crimes","npcTypes","palettes","collectibles","upgrades","recipes","news","suitMods"],uu=["dialogues","strings","speakers","mapArt"],rc=class{constructor(){this.packs=[],this.disabled=new Set,this.data={},this.tips=[],this.hooks=[],this.rebuild()}addPack(t){if(!t||!t.id){console.warn("Pack without id ignored",t);return}let e=this.packs.findIndex(i=>i.id===t.id);e>=0&&this.packs.splice(e,1),t.priority=t.priority??0,this.packs.push(t),this.packs.sort((i,n)=>i.priority-n.priority)}setDisabled(t){this.disabled=new Set(t||[]),this.rebuild()}rebuild(){let t={};for(let n of hu)t[n]=new Map;for(let n of uu)t[n]={};let e=[],i=[];for(let n of this.packs)if(!(this.disabled.has(n.id)&&!n.core)){for(let r of hu)for(let o of n[r]||[]){if(!o.id)continue;let a=t[r].get(o.id);a&&o.patch?t[r].set(o.id,sc(Qg(a),o)):t[r].set(o.id,{...o,_pack:n.id})}for(let r of uu)Object.assign(t[r],n[r]||{});e.push(...n.tips||[]),n.hooks&&i.push(n.hooks)}this.data=t,this.tips=e,this.hooks=i,B.emit("registry:rebuilt",this)}get(t,e){return this.data[t]&&this.data[t].get(e)}list(t){return this.data[t]?Array.from(this.data[t].values()):[]}dialogue(t){return this.data.dialogues[t]}str(t,e){return this.data.strings[t]??e??t}runHook(t,...e){for(let i of this.hooks)if(typeof i[t]=="function")try{i[t](...e)}catch(n){console.error("[mod hook]",t,n)}}};function Qg(s){try{return structuredClone(s)}catch{return JSON.parse(JSON.stringify(s))}}var fe=new rc;function du(s){let t={version:"1.0.0",register(i){fe.addPack(i),fe.rebuild()},registry:fe,bus:B,game:s},e=window.TetherMod&&window.TetherMod._queue||[];window.TetherMod=t;for(let i of e)fe.addPack(i);return fe.rebuild(),t}var fu="tether.save";var uo=()=>({version:3,story:{chapter:"ch1",step:0,completed:[]},flags:{},sideQuests:{done:[]},collectibles:[],stats:{crimes:0,takedowns:0,swingDistance:0,playTime:0,tricks:0},reputation:0,unlockedSkins:["tether_classic","pod_suit"],skin:"tether_classic",inventory:{gadgets:["line","pod","chirp"],rides:["skateboard","skates","bicycle"]},lastCity:"midtown",parts:0,fluid:60,upgrades:{},buffs:[],tod:null,customSkins:[],disk:{},homeVisited:!1,suitModsOwned:["none"],settings:{quality:"auto",comicFX:!0,ps1Wobble:!0,fov:92,sens:1,invertY:!1,camera:"fp",headBob:.5,sfx:.8,music:.4,controlsScale:1,controlsOpacity:.55,floatingStick:!0,leftHanded:!1,showFPS:!1},mods:{disabled:[]}}),tx={2:s=>(s.parts=s.parts||0,s.fluid=s.fluid??60,s.upgrades=s.upgrades||{},s.buffs=[],s.customSkins=s.customSkins||[],s.disk=s.disk||{},s.settings&&(s.settings.fov=Math.max(s.settings.fov||92,88)),s),1:s=>(s.inventory=s.inventory||{gadgets:["line","pod","chirp"],rides:["skateboard","skates","bicycle"]},s)},oc=class{constructor(){this.data=this.load()}load(){try{let t=localStorage.getItem(fu);if(!t)return uo();let e=JSON.parse(t);for(;(e.version||1)<3;){let n=e.version||1;e=(tx[n]||(r=>r))(e),e.version=n+1}let i=uo();return pu(e,i),e}catch(t){return console.warn("Save corrupt, resetting",t),uo()}}write(){try{localStorage.setItem(fu,JSON.stringify(this.data))}catch{}}reset(){let t=this.data.settings;this.data=uo(),this.data.settings=t,this.write()}get settings(){return this.data.settings}flag(t,e){if(e===void 0)return this.data.flags[t];this.data.flags[t]=e,this.write()}};function pu(s,t){for(let e in t)e in s?t[e]&&typeof t[e]=="object"&&!Array.isArray(t[e])&&pu(s[e],t[e]):s[e]=t[e]}var he=new oc;var Rs=["cross","circle","square","triangle","l1","l2","l3","r1","r2","r3","up","down","left","right","start","select"],mu={Space:"cross",KeyC:"circle",ControlLeft:"circle",KeyE:"square",KeyQ:"triangle",ShiftLeft:"l1",ShiftRight:"l1",KeyF:"r2",KeyR:"r1",KeyV:"r3",Tab:"l3",KeyZ:"l2",ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",Escape:"start",KeyP:"start",KeyM:"select",Enter:"cross"},ac=["cross","circle","square","triangle","l1","r1","l2","r2","select","start","l3","r3","up","down","left","right"],lc=class{constructor(){this.state={};for(let t of Rs)this.state[t]={down:!1,pressed:!1,released:!1,held:0,src:0};this.move={x:0,y:0},this.look={x:0,y:0},this.touchMove={x:0,y:0},this.keys=new Set,this.mouseLook={x:0,y:0},this.touchLook={x:0,y:0},this.lastDevice="touch",this.enabled=!0,this._raw={};for(let t of Rs)this._raw[t]=0;this._bindKeyboard()}_bindKeyboard(){window.addEventListener("keydown",t=>{if(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))return;this.keys.add(t.code),this.lastDevice="kbm";let e=mu[t.code];e&&(this._raw[e]|=2,t.preventDefault())}),window.addEventListener("keyup",t=>{this.keys.delete(t.code);let e=mu[t.code];e&&(this._raw[e]&=-3)}),window.addEventListener("blur",()=>{this.keys.clear();for(let t of Rs)this._raw[t]=0}),window.addEventListener("mousemove",t=>{document.pointerLockElement&&(this.mouseLook.x+=t.movementX,this.mouseLook.y+=t.movementY)}),window.addEventListener("mousedown",t=>{document.pointerLockElement&&(this.lastDevice="kbm",t.button===0&&(this._raw.r1|=4),t.button===2&&(this._raw.l2|=4),t.button===1&&(this._raw.r2|=4))}),window.addEventListener("mouseup",t=>{t.button===0&&(this._raw.r1&=-5),t.button===2&&(this._raw.l2&=-5),t.button===1&&(this._raw.r2&=-5)}),window.addEventListener("contextmenu",t=>{document.pointerLockElement&&t.preventDefault()})}setTouchButton(t,e){e?this._raw[t]|=1:this._raw[t]&=-2,this.lastDevice="touch"}clearTouch(){for(let t of Rs)this._raw[t]&=-2;this.touchMove.x=this.touchMove.y=0}poll(t,e){let i=null,n=null,r=navigator.getGamepads?navigator.getGamepads():[];for(let f of r){if(!f||!f.connected)continue;for(let x=0;x<ac.length;x++)f.buttons[x]&&(f.buttons[x].pressed||f.buttons[x].value>.4)?(this._raw[ac[x]]|=8,this.lastDevice="pad"):this._raw[ac[x]]&=-9;let d=x=>Math.abs(x)<.15?0:x;i={x:d(f.axes[0]||0),y:-d(f.axes[1]||0)},n={x:d(f.axes[2]||0),y:d(f.axes[3]||0)};break}for(let f of Rs){let d=this.state[f],x=this.enabled&&this._raw[f]!==0;d.pressed=x&&!d.down,d.released=!x&&d.down,d.down=x,d.held=x?d.held+t:0}let o=0,a=0;if(this.keys.has("KeyW")&&(a+=1),this.keys.has("KeyS")&&(a-=1),this.keys.has("KeyD")&&(o+=1),this.keys.has("KeyA")&&(o-=1),o||a){let f=Math.hypot(o,a);o/=f,a/=f}Math.abs(this.touchMove.x)+Math.abs(this.touchMove.y)>.01&&(o=this.touchMove.x,a=this.touchMove.y),i&&Math.hypot(i.x,i.y)>.01&&(o=i.x,a=i.y),this.move.x=this.enabled?o:0,this.move.y=this.enabled?a:0;let l=e?e.sens:1,c=e&&e.invertY?-1:1,h=this.mouseLook.x*.0022+this.touchLook.x*.0058,u=this.mouseLook.y*.0022+this.touchLook.y*.0058;n&&(h+=n.x*2.6*t,u+=n.y*2.2*t),this.look.x=this.enabled?h*l:0,this.look.y=this.enabled?u*l*c:0,this.mouseLook.x=this.mouseLook.y=0,this.touchLook.x=this.touchLook.y=0}btn(t){return this.state[t]}pressed(t){return this.state[t].pressed}down(t){return this.state[t].down}released(t){return this.state[t].released}consume(t){this.state[t].pressed=!1}anyPressed(){return Rs.some(t=>this.state[t].pressed)}},$=new lc;var ex={square:{glyph:"square",color:"#ff2fb3",label:"ACT"},triangle:{glyph:"triangle",color:"#39ff6a",label:"GEAR"},circle:{glyph:"circle",color:"#ff1e3c",label:"CROUCH"},cross:{glyph:"cross",color:"#1e7bff",label:"JUMP"}},po=class{constructor(t,e){this.cv=t,this.ctx=t.getContext("2d"),this.settings=e,this.controls={},this.pointers=new Map,this.stick={active:!1,bx:0,by:0,x:0,y:0,home:{x:0,y:0},r:50,zone:null},this.hints={},this.visible=!0,this.dirty=!0,this.enabled=!0,this.hiddenButtons=new Set,this._bind(),this.layout(),window.addEventListener("resize",()=>this.layout()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.layout(),120)),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>this.layout())}setHint(t,e){this.hints[t]!==e&&(this.hints[t]=e,this.dirty=!0)}setVisible(t){this.visible!==t&&(this.visible=t,this.cv.style.display=t?"block":"none",t||this.releaseAll(),this.dirty=!0)}releaseAll(){this.pointers.clear(),$.clearTouch(),this.stick.active=!1,this.dirty=!0}layout(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,2);this.W=t,this.H=e,this.dpr=i,this.cv.width=Math.round(t*i),this.cv.height=Math.round(e*i),this.cv.style.width=t+"px",this.cv.style.height=e+"px";let n=e>t;this.portrait=n;let r=this.settings.controlsScale||1,o=(n?t:Math.min(e*1.25,t*.62))/100*r;this.u=o;let a=4*o,l={},c=(p,v,_,y,w="btn")=>l[p]={id:p,x:v,y:_,r:y,kind:w},h=(p,v,_,y,w)=>l[p]={id:p,x:v,y:_,r:Math.max(y,w)/2,w:y,h:w,kind:"pill"},u,f,d,x,g;if(n){u={x:a+19*o,y:e-a-21*o,r:15*o},f=t-a-21*o,d=e-a-24*o,x=11.5*o,g=7.5*o;let p={x:t/2,y:e-a-11*o},v=6*o,_=4.4*o;c("up",p.x,p.y-v,_,"dpad"),c("down",p.x,p.y+v,_,"dpad"),c("left",p.x-v,p.y,_,"dpad"),c("right",p.x+v,p.y,_,"dpad");let y=e-a-58*o;h("l1",a+10*o,y+10*o,19*o,8*o),h("l2",a+10*o,y,19*o,8*o),h("r1",t-a-10*o,y+10*o,19*o,8*o),h("r2",t-a-10*o,y,19*o,8*o),c("l3",t/2-10*o,e-a-31*o,4.6*o),c("r3",t/2+10*o,e-a-31*o,4.6*o),h("select",t/2-9*o,a+4*o,12*o,5.5*o),h("start",t/2+9*o,a+4*o,12*o,5.5*o),this.stick.zone={x0:0,y0:e*.55,x1:t*.45,y1:e}}else{u={x:a+17*o,y:e-a-17*o,r:14*o},f=t-a-19*o,d=e-a-19*o,x=11*o,g=7*o;let p={x:a+50*o,y:e-a-12*o},v=6*o,_=4.4*o;c("up",p.x,p.y-v,_,"dpad"),c("down",p.x,p.y+v,_,"dpad"),c("left",p.x-v,p.y,_,"dpad"),c("right",p.x+v,p.y,_,"dpad");let y=a+4*o;h("l2",a+10*o,y,18*o,7.5*o),h("l1",a+10*o,y+10*o,18*o,7.5*o),h("r2",t-a-10*o,y,18*o,7.5*o),h("r1",t-a-10*o,y+10*o,18*o,7.5*o),c("l3",u.x+19*o,u.y-14*o,4.8*o),c("r3",f-23*o,d-14*o,4.8*o);let w=(p.x+6*o+(f-23*o))/2;h("select",w-8*o,e-a-4*o,12*o,5*o),h("start",w+8*o,e-a-4*o,12*o,5*o),this.stick.zone={x0:0,y0:e*.38,x1:t*.42,y1:e}}if(c("triangle",f,d-x,g,"face"),c("cross",f,d+x,g,"face"),c("square",f-x,d,g,"face"),c("circle",f+x,d,g,"face"),this.settings.leftHanded)for(let p in l)l[p].x=t-l[p].x;if(this.controls=l,this.stick.home={x:this.settings.leftHanded?t-u.x:u.x,y:u.y},this.stick.r=u.r,this.settings.leftHanded){let p=this.stick.zone;this.stick.zone={x0:t-p.x1,y0:p.y0,x1:t-p.x0,y1:p.y1}}this._resolveOverlaps();let m=document.documentElement.style;if(n)m.setProperty("--hudL","0px"),m.setProperty("--hudR","0px");else{let p=l.l1,v=l.r1;m.setProperty("--hudL",Math.round(Math.max(l.l1.x,l.l2.x)+p.w/2+8)+"px"),m.setProperty("--hudR",Math.round(t-Math.min(l.r1.x,l.r2.x)+v.w/2+8)+"px")}this.dirty=!0,B.emit("ui:layout",{portrait:n,W:t,H:e,u:o})}_resolveOverlaps(){let t=Object.values(this.controls),i=[{x:this.stick.home.x,y:this.stick.home.y,r:this.stick.r*1.15,fixed:!0},...t];for(let n=0;n<12;n++){let r=!1;for(let o=0;o<i.length;o++)for(let a=o+1;a<i.length;a++){let l=i[o],c=i[a],h=c.x-l.x,u=c.y-l.y,f=Math.hypot(h,u)||.01,d=l.r+c.r+2;if(f<d){let x=(d-f)/2,g=h/f,m=u/f;!l.fixed&&l.kind!=="face"&&(l.x-=g*x,l.y-=m*x),!c.fixed&&c.kind!=="face"&&(c.x+=g*x,c.y+=m*x),r=!0}}for(let o of t)o.x=Wt(o.x,o.r,this.W-o.r),o.y=Wt(o.y,o.r,this.H-o.r);if(!r)break}}hit(t,e,i){let n=null,r=1e9;for(let o in this.controls){let a=this.controls[o];if(this.hiddenButtons.has(o)||i&&!i.includes(a.kind))continue;let l=a.kind==="face"?1.25:1.15,c,h;a.kind==="pill"?(c=Math.abs(t-a.x)<=a.w/2*1.1&&Math.abs(e-a.y)<=a.h/2*1.3,h=Math.hypot(t-a.x,e-a.y)):(h=Math.hypot(t-a.x,e-a.y),c=h<=a.r*l),c&&h<r&&(r=h,n=o)}return n}_bind(){let t=this.cv,e={passive:!1};t.addEventListener("pointerdown",n=>{if(!this.enabled)return;n.preventDefault(),t.setPointerCapture&&t.setPointerCapture(n.pointerId);let r=n.clientX,o=n.clientY,a=this.hit(r,o);if(a){this.pointers.set(n.pointerId,{type:"btn",id:a}),$.setTouchButton(a,!0),this.dirty=!0,B.emit("ui:touchbtn",a);return}let l=this.stick.zone;if(!this.stick.active&&r>=l.x0&&r<=l.x1&&o>=l.y0&&o<=l.y1){this.stick.active=!0;let c=this.settings.floatingStick;this.stick.bx=c?r:this.stick.home.x,this.stick.by=c?o:this.stick.home.y,this.pointers.set(n.pointerId,{type:"stick"}),this._stickMove(r,o);return}this.pointers.set(n.pointerId,{type:"look",lx:r,ly:o})},e),t.addEventListener("pointermove",n=>{let r=this.pointers.get(n.pointerId);if(r){if(n.preventDefault(),r.type==="stick")this._stickMove(n.clientX,n.clientY);else if(r.type==="look")$.touchLook.x+=n.clientX-r.lx,$.touchLook.y+=n.clientY-r.ly,r.lx=n.clientX,r.ly=n.clientY;else if(r.type==="btn"&&this.controls[r.id]&&this.controls[r.id].kind==="face"){let o=this.hit(n.clientX,n.clientY,["face"]);o&&o!==r.id&&($.setTouchButton(r.id,!1),$.setTouchButton(o,!0),r.id=o,this.dirty=!0)}}},e);let i=n=>{let r=this.pointers.get(n.pointerId);if(r){if(this.pointers.delete(n.pointerId),r.type==="btn"){let o=!1;for(let a of this.pointers.values())a.type==="btn"&&a.id===r.id&&(o=!0);o||$.setTouchButton(r.id,!1)}else r.type==="stick"&&(this.stick.active=!1,$.touchMove.x=$.touchMove.y=0);this.dirty=!0}};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("lostpointercapture",i)}_stickMove(t,e){let i=this.stick,n=t-i.bx,r=e-i.by,o=Math.hypot(n,r),a=i.r;if(o>a){this.settings.floatingStick&&o>a*1.6&&(i.bx=t-n/o*a*1.6,i.by=e-r/o*a*1.6,n=t-i.bx,r=e-i.by);let u=Math.hypot(n,r);n=n/u*a,r=r/u*a}i.x=n/a,i.y=r/a;let l=Math.hypot(i.x,i.y),c=.12,h=l<c?0:(l-c)/(1-c)/(l||1);$.touchMove.x=i.x*h,$.touchMove.y=-i.y*h,this.dirty=!0}draw(){if(!this.visible||!this.dirty)return;this.dirty=!1;let t=this.ctx,e=this.dpr,i=this.u;t.setTransform(e,0,0,e,0,0),t.clearRect(0,0,this.W,this.H);let n=this.settings.controlsOpacity??.55,r=this.stick,o=r.active?r.bx:r.home.x,a=r.active?r.by:r.home.y;t.globalAlpha=n*(r.active?1:.7),Js(t,o,a,r.r,"rgba(20,20,30,0.35)","rgba(255,240,200,0.8)",2.5),t.globalAlpha=n*1.2,Js(t,o+r.x*r.r,a+r.y*r.r,r.r*.45,"rgba(255,240,200,0.55)","#1b1b22",3);for(let l in this.controls){if(this.hiddenButtons.has(l))continue;let c=this.controls[l],h=$.state[l].down&&$._raw[l]&1;if(t.globalAlpha=Math.min(1,n*(h?1.6:1)),c.kind==="face"){let u=ex[l];Js(t,c.x,c.y,c.r*(h?.92:1),h?u.color:"rgba(15,15,25,0.55)",u.color,3),nx(t,u.glyph,c.x,c.y,c.r*.5,h?"#fff":u.color),fo(t,this.hints[l]??u.label,c.x,c.y+c.r+i*2.2,i)}else c.kind==="dpad"?(Js(t,c.x,c.y,c.r,h?"rgba(255,240,200,0.8)":"rgba(15,15,25,0.5)","rgba(255,240,200,0.8)",2),sx(t,l,c.x,c.y,c.r*.45,h?"#111":"rgba(255,240,200,0.95)"),this.hints[l]&&fo(t,this.hints[l],c.x,c.y+(l==="down"?c.r+i*2:l==="up"?-c.r-i*1.3:c.r+i*2),i*.8)):c.kind==="pill"?(ix(t,c.x-c.w/2,c.y-c.h/2,c.w,c.h,c.h/2,h?"rgba(255,240,200,0.85)":"rgba(15,15,25,0.5)","rgba(255,240,200,0.85)"),gu(t,l.toUpperCase(),c.x,c.y,Math.max(9,i*3),h?"#111":"#fff1c9"),this.hints[l]&&fo(t,this.hints[l],c.x,c.y+c.h/2+i*2,i*.85)):(Js(t,c.x,c.y,c.r,h?"rgba(255,240,200,0.85)":"rgba(15,15,25,0.5)","rgba(255,240,200,0.85)",2),gu(t,l.toUpperCase(),c.x,c.y,Math.max(8,i*2.6),h?"#111":"#fff1c9"),this.hints[l]&&fo(t,this.hints[l],c.x,c.y+c.r+i*2,i*.8))}t.globalAlpha=1}};function Js(s,t,e,i,n,r,o){s.beginPath(),s.arc(t,e,i,0,Math.PI*2),n&&(s.fillStyle=n,s.fill()),r&&(s.lineWidth=o,s.strokeStyle=r,s.stroke())}function ix(s,t,e,i,n,r,o,a){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+i,e,t+i,e+n,r),s.arcTo(t+i,e+n,t,e+n,r),s.arcTo(t,e+n,t,e,r),s.arcTo(t,e,t+i,e,r),s.closePath(),s.fillStyle=o,s.fill(),s.lineWidth=2,s.strokeStyle=a,s.stroke()}function gu(s,t,e,i,n,r){s.font=`${Math.round(n)}px Bangers, Impact, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillStyle=r,s.fillText(t,e,i+1)}function fo(s,t,e,i,n){t&&(s.font=`${Math.round(Math.max(9,n*2.4))}px Bangers, Impact, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.lineWidth=3,s.strokeStyle="rgba(0,0,0,0.75)",s.strokeText(t,e,i),s.fillStyle="#fff1c9",s.fillText(t,e,i))}function nx(s,t,e,i,n,r){s.lineWidth=Math.max(2.5,n*.28),s.strokeStyle=r,s.lineJoin="round",s.beginPath(),t==="square"?s.rect(e-n*.75,i-n*.75,n*1.5,n*1.5):t==="circle"?s.arc(e,i,n*.82,0,Math.PI*2):t==="triangle"?(s.moveTo(e,i-n*.9),s.lineTo(e+n*.88,i+n*.62),s.lineTo(e-n*.88,i+n*.62),s.closePath()):(s.moveTo(e-n*.75,i-n*.75),s.lineTo(e+n*.75,i+n*.75),s.moveTo(e+n*.75,i-n*.75),s.lineTo(e-n*.75,i+n*.75)),s.stroke()}function sx(s,t,e,i,n,r){let o={up:-Math.PI/2,down:Math.PI/2,left:Math.PI,right:0}[t];s.save(),s.translate(e,i),s.rotate(o),s.beginPath(),s.moveTo(n,0),s.lineTo(-n*.6,-n*.8),s.lineTo(-n*.6,n*.8),s.closePath(),s.fillStyle=r,s.fill(),s.restore()}var qe={atlas:{value:null},sunDir:{value:new C(-.5,.75,.35).normalize()},sunColor:{value:new wt("#fff1c8")},skyColor:{value:new wt("#e8b45a")},groundColor:{value:new wt("#5a4a3a")},fogColor:{value:new wt("#e3ad4f")},fogNear:{value:60},fogFar:{value:260},snapRes:{value:new Ft(320,240)},snapOn:{value:1},time:{value:0}},rx=`
attribute vec4 tile;
#include <skinning_pars_vertex>
varying vec3 vCol; varying vec2 vUv; varying vec4 vTile; varying float vFog; varying float vLight; varying vec3 vN;
uniform vec3 sunDir; uniform float fogNear; uniform float fogFar; uniform vec2 snapRes; uniform float snapOn; uniform float time;
uniform float wobble;
void main(){
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
    m = modelMatrix * instanceMatrix;
  #endif
  vec3 transformed = position; vec3 objectNormal = normal;
  #ifdef USE_SKINNING
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <skinning_vertex>
  #endif
  vec4 wp = m * vec4(transformed, 1.0);
  vec3 n = normalize(mat3(m) * objectNormal);
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
}`,ox=`
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
}`;function Me(s={}){return new We({uniforms:{...qe,tint:{value:new wt(s.tint||"#ffffff")},tintAmt:{value:0},opacity:{value:s.opacity??1},emissive:{value:s.emissive??0},useAtlas:{value:s.atlas===!1?0:1},wobble:{value:0}},vertexShader:rx,fragmentShader:ox,vertexColors:!0,transparent:!!s.transparent,side:s.side??Li,depthWrite:s.depthWrite??!0})}var it={brick:0,deco:1,glass:2,office:3,warehouse:4,brownstone:5,roof:6,road:7,sidewalk:8,labwall:9,labfloor:10,grate:11,grass:12,water:13,wood:14,plain:15,tenement:16,lantern:17,nightglass:18,stone:19,wallpaper:20,kitchen:21,rug:22,marquee:23,brickdark:24,cobble:25},cc=8;function mo(s){let t=s%4,e=Math.floor(s/4);return[t/4+.002,1-(e+1)/cc+.001,.25-.004,1/cc-.002]}function xu(){let t=document.createElement("canvas");t.width=512,t.height=128*cc;let e=t.getContext("2d"),i=(a,l)=>{e.save(),e.translate(a%4*128,Math.floor(a/4)*128),e.beginPath(),e.rect(0,0,128,128),e.clip(),l(e),e.restore()},n="#1d1712",r=(a,l,c,h,u)=>{e.fillStyle=n,e.fillRect(a-3,l-3,c+6,h+6),e.fillStyle=u?"#ffe9a0":"#5b7f86",e.fillRect(a,l,c,h),e.fillStyle=u?"#fff7d8":"#86b1b3",e.fillRect(a+3,l+3,c*.35,h*.3),e.fillStyle=n,e.fillRect(a+c/2-1.5,l,3,h)};i(it.brick,()=>{e.fillStyle="#c9775a",e.fillRect(0,0,128,128),e.strokeStyle="rgba(80,30,20,0.45)",e.lineWidth=2;for(let a=0;a<128;a+=10){e.beginPath(),e.moveTo(0,a),e.lineTo(128,a),e.stroke();for(let l=a/10%2?0:12;l<128;l+=24)e.beginPath(),e.moveTo(l,a),e.lineTo(l,a+10),e.stroke()}r(34,30,60,70,!1),e.fillStyle="#e2d4b0",e.fillRect(26,100,76,8)}),i(it.deco,()=>{e.fillStyle="#d9c9a0",e.fillRect(0,0,128,128),e.fillStyle="#b9a67c",e.fillRect(0,0,14,128),e.fillRect(114,0,14,128),r(30,22,68,78,!0),e.fillStyle=n,e.fillRect(0,112,128,4),e.fillStyle="#8f7a50";for(let a=0;a<5;a++)e.fillRect(18+a*20,116,10,12)}),i(it.glass,()=>{let a=e.createLinearGradient(0,0,128,128);a.addColorStop(0,"#6fb3b8"),a.addColorStop(1,"#3d7a85"),e.fillStyle=a,e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,230,0.35)",e.beginPath(),e.moveTo(10,0),e.lineTo(50,0),e.lineTo(0,50),e.lineTo(0,10),e.fill(),e.fillStyle=n,e.fillRect(0,0,128,5),e.fillRect(0,0,5,128),e.fillRect(128/2-2,0,4,128)}),i(it.office,()=>{e.fillStyle="#a3a08e",e.fillRect(0,0,128,128),r(14,26,44,60,!1),r(72,26,44,60,!0),e.fillStyle="#7b7866",e.fillRect(0,100,128,10)}),i(it.warehouse,()=>{e.fillStyle="#7a8a7e",e.fillRect(0,0,128,128),e.fillStyle="rgba(0,0,0,0.25)";for(let a=0;a<128;a+=12)e.fillRect(a,0,4,128);e.fillStyle="#c96a3a",e.fillRect(0,0,128,6)}),i(it.brownstone,()=>{e.fillStyle="#8a5a44",e.fillRect(0,0,128,128),r(24,22,34,72,!0),r(72,22,34,72,!1),e.fillStyle="#d8c6a0",e.fillRect(16,12,96,8),e.fillRect(16,98,96,6)}),i(it.roof,()=>{e.fillStyle="#857a6c",e.fillRect(0,0,128,128);for(let a=0;a<400;a++)e.fillStyle=Math.random()<.5?"#766b5d":"#958a7b",e.fillRect(Math.random()*128,Math.random()*128,3,3)}),i(it.road,()=>{e.fillStyle="#4b4743",e.fillRect(0,0,128,128);for(let a=0;a<300;a++)e.fillStyle="rgba(0,0,0,0.15)",e.fillRect(Math.random()*128,Math.random()*128,2,2);e.fillStyle="#f2c94c",e.fillRect(128/2-3,10,6,46),e.fillRect(128/2-3,74,6,46)}),i(it.sidewalk,()=>{e.fillStyle="#b8ad98",e.fillRect(0,0,128,128),e.strokeStyle="#8c826f",e.lineWidth=3,e.strokeRect(1,1,128/2-2,128/2-2),e.strokeRect(128/2+1,1,128/2-2,128/2-2),e.strokeRect(1,128/2+1,128/2-2,128/2-2),e.strokeRect(128/2+1,128/2+1,128/2-2,128/2-2)}),i(it.labwall,()=>{e.fillStyle="#c9cfc7",e.fillRect(0,0,128,128),e.strokeStyle="#7d877f",e.lineWidth=3,e.strokeRect(4,4,120,120),e.fillStyle="#e0e6dc",e.fillRect(10,10,108,20),e.fillStyle="#d6a12e";for(let a=-128;a<128;a+=22)e.save(),e.beginPath(),e.rect(0,112,128,12),e.clip(),e.fillRect(a,112,11,12),e.restore();e.fillStyle=n,e.fillRect(0,110,128,2)}),i(it.labfloor,()=>{e.fillStyle="#8f9a96",e.fillRect(0,0,128,128),e.fillStyle="#7c8783",e.fillRect(0,0,128/2,128/2),e.fillRect(128/2,128/2,128/2,128/2)}),i(it.grate,()=>{e.fillStyle="#4a4c4f",e.fillRect(0,0,128,128),e.strokeStyle="#2a2b2d",e.lineWidth=4;for(let a=0;a<128;a+=16)e.beginPath(),e.moveTo(a,0),e.lineTo(a,128),e.stroke(),e.beginPath(),e.moveTo(0,a),e.lineTo(128,a),e.stroke()}),i(it.grass,()=>{e.fillStyle="#6f9a45",e.fillRect(0,0,128,128);for(let a=0;a<250;a++)e.fillStyle=Math.random()<.5?"#5f8a39":"#83ad55",e.fillRect(Math.random()*128,Math.random()*128,2,5)}),i(it.water,()=>{e.fillStyle="#4f8d93",e.fillRect(0,0,128,128),e.strokeStyle="#8cc3c2",e.lineWidth=3;for(let a=10;a<128;a+=24){e.beginPath();for(let l=0;l<=128;l+=8)e.lineTo(l,a+Math.sin(l*.2+a)*3);e.stroke()}}),i(it.wood,()=>{e.fillStyle="#9a6a3c",e.fillRect(0,0,128,128),e.fillStyle="#7d5430";for(let a=0;a<128;a+=16)e.fillRect(0,a,128,2)}),i(it.plain,()=>{e.fillStyle="#ffffff",e.fillRect(0,0,128,128)}),i(it.tenement,()=>{e.fillStyle="#b5543a",e.fillRect(0,0,128,128),e.strokeStyle="rgba(70,25,15,0.4)",e.lineWidth=2;for(let a=0;a<128;a+=9)e.beginPath(),e.moveTo(0,a),e.lineTo(128,a),e.stroke();r(18,26,30,62,!1),r(80,26,30,62,!0),e.fillStyle="#e2d4b0",e.fillRect(12,16,42,6),e.fillRect(74,16,42,6)}),i(it.lantern,()=>{e.fillStyle="#c0362c",e.fillRect(0,0,128,128),e.fillStyle="#f2c14e",e.fillRect(0,0,128,10),e.fillRect(0,118,128,10),r(14,26,44,56,!0),r(70,26,44,56,!1),e.fillStyle="#1e7a4a",e.fillRect(10,92,108,18),e.fillStyle="#f2c14e",e.font="bold 14px sans-serif",e.fillText("\u798F \xB7 \u9F8D \xB7 \u8336",22,106)}),i(it.nightglass,()=>{e.fillStyle="#1f3550",e.fillRect(0,0,128,128);for(let a=6;a<128;a+=21)for(let l=6;l<128;l+=21)e.fillStyle=Math.random()<.45?"#ffe9a0":"#2c4a6a",e.fillRect(l,a,15,15);e.fillStyle="#0d1a28",e.fillRect(0,0,128,3),e.fillRect(0,0,3,128)}),i(it.stone,()=>{e.fillStyle="#b7b0a2",e.fillRect(0,0,128,128),e.strokeStyle="rgba(60,55,45,0.35)",e.lineWidth=2;for(let a=0;a<128;a+=16)e.beginPath(),e.moveTo(0,a),e.lineTo(128,a),e.stroke();r(36,24,56,70,!1),e.fillStyle="#8f887a",e.beginPath(),e.moveTo(30,24),e.lineTo(64,6),e.lineTo(98,24),e.closePath(),e.fill()}),i(it.wallpaper,()=>{e.fillStyle="#d9c38a",e.fillRect(0,0,128,128),e.fillStyle="#c4a96c";for(let a=0;a<128;a+=16)e.fillRect(a,0,6,128);e.fillStyle="#9a5a3a";for(let a=8;a<128;a+=32)for(let l=11;l<128;l+=32)e.beginPath(),e.arc(l,a,3,0,6.28),e.fill();e.fillStyle="#6b4a2e",e.fillRect(0,114,128,14)}),i(it.kitchen,()=>{e.fillStyle="#f2f0e6",e.fillRect(0,0,128,128);for(let a=0;a<128;a+=16)for(let l=0;l<128;l+=16)(l+a)/16%2===0&&(e.fillStyle="#2a9d9a",e.fillRect(l,a,16,16))}),i(it.rug,()=>{e.fillStyle="#8a2a2a",e.fillRect(0,0,128,128),e.strokeStyle="#f2c14e",e.lineWidth=6,e.strokeRect(10,10,108,108),e.strokeStyle="#2a6f8a",e.lineWidth=4,e.strokeRect(26,26,76,76),e.fillStyle="#f2c14e",e.beginPath(),e.moveTo(64,40),e.lineTo(88,64),e.lineTo(64,88),e.lineTo(40,64),e.fill()}),i(it.marquee,()=>{e.fillStyle="#1d1712",e.fillRect(0,0,128,128),e.fillStyle="#f2c14e",e.fillRect(6,6,116,116),e.fillStyle="#c0362c",e.fillRect(12,12,104,104),e.fillStyle="#fff4dc",e.font="bold 22px Impact, sans-serif",e.fillText("CROWN",26,56),e.fillText("TONITE",22,86),e.fillStyle="#ffe9a0";for(let a=10;a<128;a+=12)e.fillRect(a,4,4,4),e.fillRect(a,120,4,4)}),i(it.brickdark,()=>{e.fillStyle="#6e3a30",e.fillRect(0,0,128,128),e.strokeStyle="rgba(30,10,8,0.5)",e.lineWidth=2;for(let a=0;a<128;a+=10)e.beginPath(),e.moveTo(0,a),e.lineTo(128,a),e.stroke();r(20,30,32,58,!0),r(76,30,32,58,!1)}),i(it.cobble,()=>{e.fillStyle="#8c8578",e.fillRect(0,0,128,128);for(let a=0;a<128;a+=14)for(let l=a/14%2?0:9;l<128;l+=18)e.fillStyle=Math.random()<.5?"#9a9386":"#7d766a",e.fillRect(l+1,a+1,16,12)});let o=new gn(t);return o.magFilter=Ae,o.minFilter=Ae,o.generateMipmaps=!1,o.colorSpace=Ci,qe.atlas.value=o,o}Qt.enabled=!1;var ax="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",lx=`
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
}`,go=class{constructor(t,e){this.settings=e,this.gl=new $r({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.gl.outputColorSpace=xn,this.gl.setClearColor(14921039,1),this.camera=new Oe(e.fov||80,1,.08,900),this.scale=.6,this.minScale=.35,this.maxScale=.85,this.frameTimes=[],this._accum=0,this.postScene=new mn,this.postCam=new Ys(-1,1,1,-1,0,1),this.postMat=new We({uniforms:{tColor:{value:null},tDepth:{value:null},res:{value:new Ft},near:{value:.08},far:{value:900},dotSize:{value:3},inkAmt:{value:.9},vignette:{value:.9},paper:{value:new wt(1,.98,.92)},flash:{value:0},flashCol:{value:new wt("#ffffff")},senseAmt:{value:0}},vertexShader:ax,fragmentShader:lx,depthTest:!1,depthWrite:!1}),this.postScene.add(new zt(new Ms(2,2),this.postMat)),this.rt=null,this.postOK=!0,this.applyQuality(),this.resize(),window.addEventListener("resize",()=>this.resize())}applyQuality(){let t=this.settings.quality;t==="low"?(this.minScale=.3,this.maxScale=.45,this.scale=.4):t==="high"?(this.minScale=.55,this.maxScale=1,this.scale=.8):(this.minScale=.35,this.maxScale=.8),qe.snapOn.value=this.settings.ps1Wobble?1:0,this.resize()}resize(){let t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio||1,2.5),n=this.scale*i,r=Math.max(160,Math.round(t*n)),o=Math.max(120,Math.round(e*n));this.gl.setPixelRatio(1),this.gl.setSize(r,o,!1),this.gl.domElement.style.width=t+"px",this.gl.domElement.style.height=e+"px",this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.w=r,this.h=o,qe.snapRes.value.set(r/2.2,o/2.2),this.rt&&(this.rt.dispose(),this.rt.depthTexture.dispose());try{let a=new Ss(r,o);a.type=Yi,this.rt=new Si(r,o,{minFilter:Ae,magFilter:Ae,depthTexture:a,depthBuffer:!0}),this.postMat.uniforms.tColor.value=this.rt.texture,this.postMat.uniforms.tDepth.value=a,this.postMat.uniforms.res.value.set(r,o),this.postMat.uniforms.dotSize.value=Math.max(2.5,o/140)}catch(a){console.warn("post disabled",a),this.postOK=!1}}render(t,e,i){let n=i||this.camera,r=this.settings.comicFX&&this.postOK,o=this.gl;r?(o.setRenderTarget(this.rt),o.clear(),o.render(t,this.camera),e&&(o.autoClear=!1,o.clearDepth(),o.render(e,n),o.autoClear=!0),o.setRenderTarget(null),this.postMat.uniforms.near.value=this.camera.near,this.postMat.uniforms.far.value=this.camera.far,o.render(this.postScene,this.postCam)):(o.setRenderTarget(null),o.autoClear=!0,o.render(t,this.camera),e&&(o.autoClear=!1,o.clearDepth(),o.render(e,n),o.autoClear=!0))}adapt(t){if(this.settings.quality!=="auto"||(this.frameTimes.push(t),this.frameTimes.length>45&&this.frameTimes.shift(),this._accum+=t,this._accum<1.5))return;this._accum=0;let e=this.frameTimes.reduce((n,r)=>n+r,0)/this.frameTimes.length,i=this.scale;e>1/40?i-=.08:e<1/57&&(i+=.04),i=Math.min(this.maxScale,Math.max(this.minScale,i)),Math.abs(i-this.scale)>.01&&(this.scale=i,this.resize())}get info(){return this.gl.info.render}};var yn=[0,0,0,0],jt=class{constructor(){this.p=[],this.n=[],this.c=[],this.uv=[],this.t=[],this.si=[],this.bone=0}get count(){return this.p.length/3}tri(t,e,i,n,r,o,a,l,c){this.p.push(...t,...e,...i);for(let h=0;h<3;h++)this.n.push(n[0],n[1],n[2]),this.c.push(r.r,r.g,r.b),this.t.push(c[0],c[1],c[2],c[3]),this.si.push(this.bone);this.uv.push(...o,...a,...l)}quad(t,e,i,n,r,o,a=1,l=1,c=yn){this.tri(t,e,i,r,o,[0,0],[a,0],[a,l],c),this.tri(t,i,n,r,o,[0,0],[a,l],[0,l],c)}box(t,e,i,n,r,o,a={}){let l=a.color||yu,c=a.colorTop||l,h=a.unit||3.5,u=a.side!=null?mo(a.side):yn,f=a.top!=null?mo(a.top):u,d=n-t,x=r-e,g=o-i,m=_=>a.side!=null?Math.max(1,Math.round(_/h)):1,p=a.side!=null?Math.max(1,Math.round(x/(a.unitV||h))):1,v=a.faces||63;v&1&&this.quad([n,e,o],[n,e,i],[n,r,i],[n,r,o],[1,0,0],Ji(l,.92),m(g),p,u),v&2&&this.quad([t,e,i],[t,e,o],[t,r,o],[t,r,i],[-1,0,0],Ji(l,.92),m(g),p,u),v&4&&this.quad([t,e,o],[n,e,o],[n,r,o],[t,r,o],[0,0,1],l,m(d),p,u),v&8&&this.quad([n,e,i],[t,e,i],[t,r,i],[n,r,i],[0,0,-1],l,m(d),p,u),v&16&&this.quad([t,r,o],[n,r,o],[n,r,i],[t,r,i],[0,1,0],c,a.top!=null?Math.max(1,d/6):1,a.top!=null?Math.max(1,g/6):1,f),v&32&&!a.noBottom&&this.quad([t,e,i],[n,e,i],[n,e,o],[t,e,o],[0,-1,0],Ji(l,.6),1,1,yn)}hexa(t,e,i,n=!0){let r=(o,a,l,c,h)=>{let u=a[0]-o[0],f=a[1]-o[1],d=a[2]-o[2],x=c[0]-o[0],g=c[1]-o[1],m=c[2]-o[2],p=f*m-d*g,v=d*x-u*m,_=u*g-f*x,y=Math.hypot(p,v,_)||1;p/=y,v/=y,_/=y;let w=n?Ji(i,.8+.2*Math.max(v,Math.abs(_)*.9)):i;this.quad(o,a,l,c,[p,v,_],w,1,1,yn)};r(t[3],t[2],e[2],e[3]),r(t[1],t[0],e[0],e[1]),r(t[2],t[1],e[1],e[2]),r(t[0],t[3],e[3],e[0]),r(e[3],e[2],e[1],e[0]),r(t[0],t[1],t[2],t[3])}taper(t,e,i,n,r,o,a,l,c,h=0){let u=[[t-n/2,e,i-r/2],[t+n/2,e,i-r/2],[t+n/2,e,i+r/2],[t-n/2,e,i+r/2]],f=[[t-a/2,o,i-l/2+h],[t+a/2,o,i-l/2+h],[t+a/2,o,i+l/2+h],[t-a/2,o,i+l/2+h]];this.hexa(u,f,c)}cbox(t,e,i,n,r,o,a,l={}){this.box(t-n/2,e-r/2,i-o/2,t+n/2,e+r/2,i+o/2,{...l,color:a})}pyramid(t,e,i,n,r,o,a){let l=(t+n)/2,c=(i+o)/2,h=[l,r,c],u=[[[t,e,o],[n,e,o]],[[n,e,o],[n,e,i]],[[n,e,i],[t,e,i]],[[t,e,i],[t,e,o]]];for(let[f,d]of u){let x=new C().subVectors(new C(...d),new C(...f)).cross(new C(h[0]-f[0],h[1]-f[1],h[2]-f[2])).normalize();this.tri(f,d,h,[x.x,x.y,x.z],Ji(a,.85+x.y*.15),[0,0],[1,0],[.5,1],yn)}}cyl(t,e,i,n,r,o,a=6,l=!0){for(let c=0;c<a;c++){let h=c/a*Math.PI*2,u=(c+1)/a*Math.PI*2,f=(h+u)/2,d=[t+Math.cos(h)*n,e,i+Math.sin(h)*n],x=[t+Math.cos(u)*n,e,i+Math.sin(u)*n],g=[d[0],e+r,d[2]],m=[x[0],e+r,x[2]],p=[Math.cos(f),0,Math.sin(f)];this.quad(x,d,g,m,p,Ji(o,.85+.15*Math.cos(f)),1,1,yn),l&&this.tri([t,e+r,i],m,g,[0,1,0],o,[0,0],[0,0],[0,0],yn)}}ground(t,e,i,n,r,o,a,l=6){this.quad([t,r,n],[i,r,n],[i,r,e],[t,r,e],[0,1,0],a||yu,(i-t)/l,(n-e)/l,o!=null?mo(o):yn)}build(){let t=new Ne;if(t.setAttribute("position",new Jt(this.p,3)),t.setAttribute("normal",new Jt(this.n,3)),t.setAttribute("color",new Jt(this.c,3)),t.setAttribute("uv",new Jt(this.uv,2)),t.setAttribute("tile",new Jt(this.t,4)),this.skinned){let e=this.si.length,i=new Uint16Array(e*4),n=new Float32Array(e*4);for(let r=0;r<e;r++)i[r*4]=this.si[r],n[r*4]=1;t.setAttribute("skinIndex",new vs(i,4)),t.setAttribute("skinWeight",new Jt(n,4))}return t.computeBoundingSphere(),t.computeBoundingBox(),t}},yu=new wt(1,1,1),yy=new wt;function Ji(s,t){return{r:Math.min(1,s.r*t),g:Math.min(1,s.g*t),b:Math.min(1,s.b*t)}}var L=s=>new wt(s);var Qs=[["hips",null,[0,.95,0]],["spine","hips",[0,1.06,0]],["chest","spine",[0,1.24,0]],["head","chest",[0,1.5,0]],["uArmL","chest",[-.31,1.44,0]],["fArmL","uArmL",[-.31,1.15,0]],["handL","fArmL",[-.31,.9,0]],["uArmR","chest",[.31,1.44,0]],["fArmR","uArmR",[.31,1.15,0]],["handR","fArmR",[.31,.9,0]],["thighL","hips",[-.12,.92,0]],["shinL","thighL",[-.12,.51,0]],["footL","shinL",[-.12,.1,0]],["thighR","hips",[.12,.92,0]],["shinR","thighR",[.12,.51,0]],["footR","shinR",[.12,.1,0]]],yo=Qs.length,zn={};Qs.forEach((s,t)=>zn[s[0]]=t);var ji=Math.PI*2;function Fn(s={},t={}){let e=s.style||"hero",i=L(s.primary||"#2a9d9a"),n=L(s.secondary||"#e4573d"),r=L(s.accent||"#f2c14e"),o=L(s.eyes||"#ffffff"),a=L("#151018"),l=L(s.skin||"#d9a27a"),c=L(s.hair||"#3a2a20"),h=L(s.gloves||s.secondary||"#e4573d"),u=L(s.boots||s.secondary||"#e4573d"),f=L(s.pants||(e==="hero"?s.primary:"#333344")||"#333"),d=new jt;d.skinned=!0;let x=M=>d.bone=zn[M],g=e==="hero",m=i;x("hips"),d.taper(0,.8,0,.38,.24,1,.38,.25,g?m:f),d.cbox(0,.98,0,.38,.07,.25,g?r:s.belt?L(s.belt):a),g&&s.pattern!=="none"&&(d.cbox(.185,.88,0,.02,.16,.2,n),d.cbox(-.185,.88,0,.02,.16,.2,n)),x("spine"),d.taper(0,1,0,.32,.21,1.2,.36,.23,e==="pod"?i:m),g&&d.cbox(0,1.1,.115,.18,.14,.012,hc(i,.86)),x("chest");let p=g?.62:.52;if(d.taper(0,1.18,0,.38,.24,1.47,p,.29,m),d.taper(0,1.46,0,.36,.2,1.53,.16,.14,g?m:e==="civ"?i:m),d.taper(0,1.5,0,.12,.12,1.56,.11,.11,g||e==="jester"?m:l),g)d.cbox(0,1.36,.13,.36,.16,.015,hc(i,1.08)),s.pattern!=="none"&&s.pattern!=="split"&&(d.cbox(.25,1.32,0,.03,.26,.24,n),d.cbox(-.25,1.32,0,.03,.26,.24,n)),cx(d,s.pattern||"sides",i,n,r),hx(d,s.emblem||"knot",r,a),s.scarf&&(d.cbox(0,1.5,0,.22,.08,.2,L(s.scarf)),d.taper(.05,1.05,-.17,.1,.03,1.5,.14,.04,L(s.scarf),.04));else if(e==="civ"||e==="pod"){if(s.stripes)for(let M=0;M<2;M++)d.cbox(0,1.24+M*.12,0,.47-M*.04,.05,.27,n);s.badge&&d.cbox(.12,1.38,.135,.07,.07,.02,r),s.jacket&&(d.cbox(-.15,1.3,.13,.12,.34,.02,L(s.jacket)),d.cbox(.15,1.3,.13,.12,.34,.02,L(s.jacket))),e==="pod"&&d.cbox(0,1.38,.135,.14,.06,.02,r)}else e==="jester"&&(d.cbox(0,1.3,.135,.12,.34,.02,r),d.cbox(0,1.46,0,.5,.06,.3,r));if(x("head"),g)d.taper(0,1.5,.01,.17,.2,1.62,.25,.26,i),d.taper(0,1.62,0,.25,.26,1.8,.21,.22,i),d.cbox(0,1.8,0,.16,.025,.17,i),s.crest!==!1&&d.cbox(0,1.72,-.005,.035,.17,.27,n),ux(d,s.lens||"classic",o,a),s.goggles&&d.cbox(0,1.67,0,.27,.04,.27,a);else if(e==="jester"){d.taper(0,1.5,.01,.17,.2,1.64,.25,.26,L("#f6f1df")),d.taper(0,1.64,0,.25,.26,1.8,.22,.23,L("#f6f1df"));for(let M of[-1,1])d.cbox(M*.065,1.66,.13,.06,.1,.02,i);d.cbox(0,1.56,.13,.14,.025,.02,a),d.cbox(0,1.82,0,.32,.08,.3,i),d.taper(.12,1.84,0,.12,.12,2.02,.06,.06,n,0),d.taper(-.12,1.84,0,.12,.12,2.02,.06,.06,i,0),d.cbox(.13,2.04,0,.07,.07,.07,r),d.cbox(-.13,2.04,0,.07,.07,.07,r)}else{d.taper(0,1.5,.01,.17,.19,1.62,.24,.25,l),d.taper(0,1.62,0,.24,.25,1.77,.21,.22,l);for(let M of[-1,1])d.cbox(M*.065,1.65,.125,.045,.045,.02,a);d.cbox(0,1.6,.13,.04,.05,.03,hc(l,.85)),s.hat==="beanie"?d.taper(0,1.7,0,.27,.28,1.86,.2,.2,n):s.hat==="cap"?(d.taper(0,1.72,0,.27,.28,1.84,.22,.22,i),d.cbox(0,1.73,.17,.24,.025,.12,a)):s.hat==="fedora"?(d.cbox(0,1.76,0,.42,.025,.42,c),d.taper(0,1.76,0,.26,.26,1.9,.22,.2,c)):(d.taper(0,1.7,-.02,.26,.27,1.8,.22,.22,c),s.long&&d.cbox(0,1.55,-.1,.26,.3,.08,c)),s.mask&&d.cbox(0,1.58,.11,.25,.09,.06,a),s.glasses&&d.cbox(0,1.655,.13,.2,.04,.015,a),s.mustache&&d.cbox(0,1.575,.13,.12,.025,.02,c)}for(let M of["L","R"]){let b=M==="L"?-1:1,I=.31*b,O=e==="jester"?M==="L"?i:n:null,z=g?i:O||(s.sleeves?L(s.sleeves):i);x("uArm"+M),d.taper(I,1.3,0,.18,.18,1.5,.23,.2,g&&s.pattern!=="none"&&s.shoulders?n:z),d.taper(I,1.14,0,.14,.14,1.36,.18,.17,z),x("fArm"+M);let X=g?i:O||(s.longSleeves?z:l);d.taper(I,.92,0,.12,.12,1.16,.15,.15,X),g&&(d.taper(I,.9,0,.135,.135,1.03,.155,.155,h),d.cbox(I,.98,.07,.06,.06,.04,r)),x("hand"+M),d.cbox(I,.84,.01,.12,.13,.13,g?h:e==="jester"?r:l),d.cbox(I-b*.055,.86,.04,.03,.06,.05,g?h:e==="jester"?r:l)}for(let M of["L","R"]){let b=M==="L"?-1:1,I=.12*b,O=e==="jester"?M==="L"?n:i:g?i:f;x("thigh"+M),d.taper(I,.5,0,.16,.17,.92,.23,.24,O),g&&s.pattern==="stripes"&&d.cbox(I,.7,0,.205,.05,.215,n),x("shin"+M),d.taper(I,.12,0,.12,.13,.38,.17,.18,O),d.taper(I,.38,0,.17,.18,.52,.16,.17,O),g&&d.taper(I,.12,0,.135,.145,.36,.18,.19,u),x("foot"+M);let z=g?u:e==="jester"?r:a;d.cbox(I,.05,.05,.13,.1,.27,z),d.cbox(I,.11,-.01,.13,.04,.15,z)}let v=d.build(),_=Me({atlas:!1}),y=Qs.map(([M])=>{let b=new $s;return b.name=M,b});Qs.forEach(([M,b,I],O)=>{if(b){let z=Qs[zn[b]][2];y[O].position.set(I[0]-z[0],I[1]-z[1],I[2]-z[2]),y[zn[b]].add(y[O])}else y[O].position.set(I[0],I[1],I[2])});let w=new Kr(v,_);w.add(y[0]);let S=new Ke;S.position.y=1,w.position.y=-1,S.add(w);let E=new Ke;E.add(S),E.updateMatrixWorld(!0),w.bind(new jr(y)),w.boundingSphere=new wi(new C(0,1,0),2.4),w.frustumCulled=!t.hero,E.scale.setScalar(t.scale||1);let A={cur:new Float32Array(yo*3),tgt:new Float32Array(yo*3),t:0,piv:[0,0,0],rootY:0,hipY:0,landT:0};return{root:E,pivot:S,mesh:w,mat:_,bones:y,anim:A,style:e,isRig:!0}}function hc(s,t){return new wt(Math.min(1,s.r*t),Math.min(1,s.g*t),Math.min(1,s.b*t))}function cx(s,t,e,i,n){if(t==="stripes")s.cbox(0,1.27,0,.47,.05,.255,i),s.cbox(0,1.1,0,.37,.05,.235,i);else if(t==="lattice"){for(let r of[1.24,1.32,1.4])s.cbox(0,r,.128,.42,.012,.012,i);for(let r of[-.14,0,.14])s.cbox(r,1.32,.128,.012,.26,.012,i)}else if(t==="chevron")for(let r of[-1,1])s.hexa([[r*.02,1.2,.12],[r*.26,1.42,.12],[r*.26,1.42,.14],[r*.02,1.2,.14]].map(o=>o),[[r*.02,1.27,.12],[r*.26,1.49,.12],[r*.26,1.49,.14],[r*.02,1.27,.14]],i);else t==="split"&&s.cbox(-.14,1.32,0,.27,.28,.262,i)}function hx(s,t,e,i){t==="knot"?(s.cbox(0,1.39,.142,.2,.045,.02,e),s.cbox(0,1.31,.142,.045,.14,.02,e),s.cbox(0,1.23,.142,.12,.045,.02,e)):t==="star"?(s.cbox(0,1.33,.142,.16,.05,.02,e),s.cbox(0,1.33,.142,.05,.16,.02,e),s.cbox(0,1.33,.142,.1,.1,.02,e)):t==="bolt"?(s.cbox(.03,1.39,.142,.06,.1,.02,e),s.cbox(0,1.33,.142,.14,.04,.02,e),s.cbox(-.03,1.26,.142,.06,.1,.02,e)):t==="eye"?(s.cbox(0,1.33,.142,.2,.08,.02,e),s.cbox(0,1.33,.142+.005,.06,.06,.02,i)):t==="tether"&&(s.cbox(0,1.33,.142,.04,.22,.02,e),s.cbox(-.07,1.4,.142,.1,.04,.02,e),s.cbox(.07,1.4,.142,.1,.04,.02,e),s.cbox(0,1.22,.142,.12,.04,.02,e))}function ux(s,t,e,i){for(let r of[-1,1]){if(t==="slit"){s.cbox(r*.065,1.665,.126,.1,.035,.02,i),s.cbox(r*.065,1.665,.126+.004,.085,.02,.02,e);continue}let o=t==="big"?1.3:t==="round"?1.05:1,a=.085*o,l=.06*o,c=r*.068,h=1.665,u=t==="round"?0:.022*o,f=(g,m,p)=>[[c-g/2,h-m/2+(r<0?u:0),p],[c+g/2,h-m/2+(r>0?u:0),p]],d=f(a+.025,l+.022,.126),x=f(a,l,.126+.012);s.hexa([[d[0][0],d[0][1],.126-.01],[d[1][0],d[1][1],.126-.01],[d[1][0],d[1][1],.126+.006],[d[0][0],d[0][1],.126+.006]],[[d[0][0],d[0][1]+l+.022,.126-.01],[d[1][0],d[1][1]+l+.022,.126-.01],[d[1][0],d[1][1]+l+.022,.126+.006],[d[0][0],d[0][1]+l+.022,.126+.006]],i,!1),s.hexa([[x[0][0],x[0][1],.126],[x[1][0],x[1][1],.126],[x[1][0],x[1][1],.126+.012],[x[0][0],x[0][1],.126+.012]],[[x[0][0],x[0][1]+l,.126],[x[1][0],x[1][1]+l,.126],[x[1][0],x[1][1]+l,.126+.012],[x[0][0],x[0][1]+l,.126+.012]],e,!1)}}var mi=new Float32Array(yo*3),vo=0,li=0,we=[0,0,0];function vu(){mi.fill(0),vo=0,li=0,we[0]=we[1]=we[2]=0}function yt(s,t,e=0,i=0){let n=zn[s]*3;mi[n]=t,mi[n+1]=e,mi[n+2]=i}function js(s,t,e=0,i=0){let n=zn[s]*3;mi[n]+=t,mi[n+1]+=e,mi[n+2]+=i}function at(s,t,e=0,i=0,n=0,r=0){let o=s==="L"?-1:1;yt("uArm"+s,t,i*o,e*o),yt("fArm"+s,-n),yt("hand"+s,r)}function Et(s,t,e=0,i=0,n=0){let r=s==="L"?-1:1;yt("thigh"+s,t,0,e*r),yt("shin"+s,i),yt("foot"+s,n)}var _u=s=>s*s*(3-2*s),Je={idle(s,t){let e=Math.sin(s*1.7)*.025,i=Math.sin(s*.6);yt("spine",.02),yt("chest",.03+e),yt("head",-.02,Math.sin(s*.37)*.25*(t.hero?1:.4)),at("L",.05,.14+e,0,.25),at("R",.05,.14+e,0,.25),Et("L",0,.05+i*.02,.05),Et("R",0,.05-i*.02,.05),yt("hips",0,0,i*.03),li=-.01},walk(s,t){let e=Math.sin(s),i=Math.cos(s);Et("L",-.55*e,.03,.12+.75*Math.max(0,i),.15*e),Et("R",.55*e,.03,.12+.75*Math.max(0,-i),-.15*e),at("L",.42*e,.1,0,.3+.2*Math.max(0,-e)),at("R",-.42*e,.1,0,.3+.2*Math.max(0,e)),yt("hips",0,-.12*e),yt("chest",.06,.15*e),yt("spine",.02),li=-.035+.035*Math.abs(i)},run(s,t){let e=Math.sin(s),i=Math.cos(s),n=t.sprint?1.15:1;Et("L",(-.95*e-.25)*n,.03,.3+1.45*Math.max(0,i),.3*e),Et("R",(.95*e-.25)*n,.03,.3+1.45*Math.max(0,-i),-.3*e),at("L",.95*e*n,.12,0,1.5),at("R",-.95*e*n,.12,0,1.5),yt("hips",0,-.2*e),yt("chest",.18*n,.25*e),yt("spine",.12*n),yt("head",-.15),li=-.06+.07*Math.abs(i),we[0]=.12*n},crouch(s,t){let e=t.speed>.4,i=e?Math.sin(s*.8):0,n=e?Math.cos(s*.8):0;Et("L",-1.15-.35*i,.12,1.75+.3*Math.max(0,n),-.45),Et("R",-1.15+.35*i,.12,1.75+.3*Math.max(0,-n),-.45),yt("spine",.35),yt("chest",.3),yt("head",-.5),at("L",-.55+.2*i,.25,.3,1.2),at("R",-.55-.2*i,.25,.3,1.2),li=-.4},slide(s,t){Et("L",-1.45,.05,.05,.4),Et("R",-.25,.2,2.1,-.3),yt("spine",-.35),yt("chest",-.25),yt("head",.45),at("L",.6,.8,0,.2),at("R",-.9,.5,0,1),li=-.6,we[2]=.15},jump(s,t){Et("L",-1.1,.1,1.3,-.3),Et("R",-.5,.1,.8,-.2),at("L",-1.3,.6,0,.6),at("R",-.9,.7,0,.6),yt("chest",.1),yt("head",-.1)},fall(s,t){let e=Math.sin(s*7);Et("L",-.4+.25*e,.2,.5+.3*e),Et("R",-.2-.25*e,.2,.4-.3*e),at("L",-.7+.3*e,1.3,0,.4),at("R",-.7-.3*e,1.3,0,.4),yt("chest",-.1),yt("head",.2)},skydive(s,t){let e=Math.sin(s*3)*.1;Et("L",.15,.3,.5+e),Et("R",.15,.3,.5-e),at("L",-.4,1.35+e,0,.5),at("R",-.4,1.35-e,0,.5),yt("head",-.6),yt("chest",-.15),we[0]=1.15},dive(s,t){Et("L",.05,.02,.1,.6),Et("R",.05,.02,.15,.6),at("L",-3,.1,0,.05),at("R",-3,.1,0,.05),yt("head",-.9),we[0]=1.45},swing(s,t){let e=t.side==="L"?"L":"R",i=e==="L"?"R":"L",n=t.sp??0,r=Math.max(0,Math.min(1,.45-n*.9));at(e,-2.95,-.08,0,.1,0),at(i,.25-n*.4,.95,0,.7);let o=Math.sin(s*3)*.12;Et("L",-.25-r*1.15+o,.08,.35+r*1.5,.3),Et("R",-.1-r*.95-o,.08,.25+r*1.2,.3),yt("chest",.12-n*.15,0,e==="L"?.1:-.1),yt("head",-.15),we[0]=t.ropePitch||0,we[2]=t.ropeRoll||0},zip(s,t){at("L",-2.5,.15,0,.2),at("R",-2.5,.15,0,.2),Et("L",.35,.05,.7),Et("R",.15,.05,.4),yt("head",-.2),we[0]=t.ropePitch||.4},wallrun(s,t){Je.run(s,t);let e=t.wallSide||1,i=e<0?"L":"R";at(i,-.9,1.3,0,.3),we[2]=-.55*e,we[0]=.2},wallup(s,t){Je.run(s*1.2,t),we[0]=.55,yt("head",-.5);let e=Math.sin(s*1.2);at("L",-1.6+.6*e,.2,0,.8),at("R",-1.6-.6*e,.2,0,.8)},climb(s,t){let e=Math.sin(s),i=t.speed>.2?1:.15;at("L",-2.6+.55*e*i,.35,0,.7-.3*e*i),at("R",-2.6-.55*e*i,.35,0,.7+.3*e*i),Et("L",-.95-.45*e*i,.35,1.5,-.4),Et("R",-.95+.45*e*i,.35,1.5,-.4),yt("chest",.1),yt("head",-.3),we[0]=.12},hang(s,t){let e=Math.sin(s*2)*.08;at("L",-3,.15,0,.15),at("R",-3,.15,0,.15),Et("L",.05+e,.05,.25),Et("R",0-e,.05,.35),yt("head",-.25)},vault(s,t){Et("L",-1.4,.5,.6),Et("R",-1.2,.3,.9),at("L",-.5,.2,0,.1),at("R",-.2,1.2,0,.3),yt("chest",.3),we[2]=.55,we[0]=.2},jab(s,t){xo();let e=vn(t.k);at("R",-1.55*e+.3*(1-e),.15,0,1.9*(1-e)),yt("chest",.1,-.45*e+.25*(1-e))},cross(s,t){xo();let e=vn(t.k);at("L",-1.55*e+.3*(1-e),.15,0,1.9*(1-e)),yt("chest",.1,.45*e-.25*(1-e))},hook(s,t){xo();let e=vn(t.k);at("R",-1.4,1.2-1*e,-.6*e,1.4),yt("chest",.05,-.8*e+.3)},uppercut(s,t){xo();let e=vn(t.k);at("R",.5-2.9*e,.15,0,1.6-.6*e),yt("chest",-.15*e+.2*(1-e)),li=-.15*(1-e)},kick(s,t){let e=vn(t.k);Et("R",-1.65*e,.05,1.6*(1-e)+.1),Et("L",0,.05,.2),yt("chest",-.3*e),at("L",-.4,.8,0,1.2),at("R",.3,.9,0,.8)},spinkick(s,t){let e=vn(t.k);Et("R",-1.5,.6*e,.15),Et("L",0,.05,.3),at("L",-.2,1.3,0,.3),at("R",-.2,1.3,0,.3),we[1]=ji*_u(Math.min(1,t.k*1.2)),yt("chest",-.2)},takedown(s,t){let e=vn(t.k);Je.crouch(s,{speed:0}),at("L",-2.6+2.9*e,.2,0,.6),at("R",-2.6+2.9*e,.2,0,.6)},punch(s,t){Je.jab(s,t)},aim(s,t){Je.idle(s,t),at("R",-1.55,.1,0,.05),at("L",-1.2,-.4,0,1.2),yt("chest",0,-.2)},throw(s,t){Je.idle(s,t);let e=vn(t.k??.5);at("R",-2.4*(1-e)-1.4*e,.2,0,.6*(1-e))},stunned(s,t){let e=Math.sin(s*6);Je.idle(s,t),yt("chest",-.25+.06*e,.2*e),yt("head",.3,.3*e),at("L",.2,.4,0,.2),at("R",.2,.4,0,.2)},down(s,t){at("L",-.3,1.25,0,.3),at("R",-.6,1,0,.6),Et("L",0,.15,.1),Et("R",-.3,.1,.6),yt("head",.15),we[0]=-1.5,vo=-.82},webbed(s,t){let e=Math.sin(s*9)*.06;at("L",0,-.05+e,0,0),at("R",0,-.05-e,0,0),Et("L",0,-.03,0),Et("R",0,-.03,0),yt("chest",e),yt("head",0,e*4)},cower(s,t){Je.crouch(s,{speed:0}),at("L",-2.5,-.4,0,2.2),at("R",-2.5,-.4,0,2.2),yt("head",.7)},cheer(s,t){let e=Math.abs(Math.sin(s*2.5));at("L",-2.9,.35,0,.2*e),at("R",-2.9,.35,0,.2*e),Et("L",-.2*e,.05,.4*e),Et("R",-.2*e,.05,.4*e),vo=e*.12},ride(s,t){yt("hips",0,1.25),yt("chest",.15,-.9),yt("head",0,-.4),Et("L",-.55,.25,.95,-.2),Et("R",-.35,.25,.75,-.2),at("L",.1,1,0,.4),at("R",-.1,.9,0,.6),li=-.2},skate(s,t){let e=Math.sin(s*.7);Et("L",-.4,.15+.3*Math.max(0,e),.7),Et("R",-.4,.15+.3*Math.max(0,-e),.7),at("L",.6*e,.2,0,.5),at("R",-.6*e,.2,0,.5),yt("chest",.45,.15*e),yt("spine",.2),li=-.15},bike(s,t){let e=Math.sin(s),i=Math.cos(s);Et("L",-1.15-.45*e,.05,1.5+.45*i),Et("R",-1.15+.45*e,.05,1.5-.45*i),at("L",-1.15,.15,0,.35),at("R",-1.15,.15,0,.35),yt("chest",.55),yt("spine",.25),yt("head",-.5)},glide(s,t){at("L",-2.95,.4,0,.1),at("R",-2.95,.4,0,.1),Et("L",.2,.1,.4),Et("R",-.1,.1,.6),we[0]=.35},talk(s,t){Je.idle(s,t);let e=Math.sin(s*2.3);at("R",-.6-.2*e,.3,.3,1.3)},land(s,t){Et("L",-.9,.1,1.5,-.5),Et("R",-.9,.1,1.5,-.5),yt("chest",.5),yt("spine",.2),at("L",-.3,.6,0,.8),at("R",-.3,.6,0,.8),li=-.35}};Je.sprint=(s,t)=>Je.run(s,{...t,sprint:!0});Je.air=Je.jump;function xo(){Et("L",-.35,.12,.45,0),Et("R",.25,.12,.35,0),at("L",-.9,.2,.2,1.9),at("R",-.8,.2,.2,1.9),yt("chest",.12),li=-.06}function vn(s){return s<.25?-.3*(s/.25):s<.55?-.3+1.3*((s-.25)/.3):1-(s-.55)/.45*.7}var bu={frontflip:{dur:.55,pose:"tuck",rot:[ji,0,0]},backflip:{dur:.6,pose:"tuck",rot:[-ji,0,0]},corkscrew:{dur:.7,pose:"layout",rot:[0,ji,ji]},sidespin:{dur:.6,pose:"layout",rot:[0,0,ji]},twist:{dur:.55,pose:"pencil",rot:[0,ji*1.5,0]},superman:{dur:.8,pose:"superman",rot:[0,0,0]},starfish:{dur:.75,pose:"starfish",rot:[0,0,0]},roll:{dur:.45,pose:"tuck",rot:[ji,0,0]},doubleflip:{dur:.85,pose:"tuck",rot:[ji*2,0,0]}},Mu=bu,dx={tuck(){Et("L",-1.9,.08,2.3,.3),Et("R",-1.9,.08,2.3,.3),at("L",-1.1,.25,0,1.8),at("R",-1.1,.25,0,1.8),yt("chest",.5),yt("head",.4)},layout(){Et("L",.05,.05,.1),Et("R",.05,.05,.1),at("L",-.3,1.45,0,.1),at("R",-.3,1.45,0,.1)},pencil(){Et("L",0,-.03,0),Et("R",0,-.03,0),at("L",-3.05,-.05,0,0),at("R",-3.05,-.05,0,0)},superman(){Et("L",.25,.02,.1,.6),Et("R",.35,.02,.3,.6),at("R",-3,.05,0,0),at("L",.3,.6,0,.6),yt("head",-.7),we[0]=1.35},starfish(){Et("L",.1,.55,.1),Et("R",.1,.55,.1),at("L",-1.6,1,0,.1),at("R",-1.6,1,0,.1),yt("head",-.3),we[0]=.9}};function Bn(s,t,e,i,n={}){let r=s.anim,o=t==="run"||t==="sprint"?1.55+e*.11:t==="walk"?1.1+e*.45:t==="crouch"?1+e*.5:t==="climb"||t==="wallup"?1+e*.4:t==="bike"?.6+e*.12:t==="skate"?.6+e*.08:1;r.t+=i*o*5.2;let a=n.phase??r.t;if(n.speed=e,vu(),(Je[t]||Je.idle)(a,n),r.landT>0){r.landT-=i;let d=Math.min(1,r.landT/.22);li+=-.32*d,js("chest",.35*d),js("thighL",-.6*d),js("thighR",-.6*d),js("shinL",1*d),js("shinR",1*d)}let l=null;if(n.trick){let d=bu[n.trick.type];if(d){let x=Math.min(1,n.trick.k),g=Math.min(1,x*6,(1-x)*6);if(g>.01){let p=mi.slice();vu(),dx[d.pose]();for(let v=0;v<mi.length;v++)mi[v]=p[v]+(mi[v]-p[v])*g}let m=_u(x);l=[d.rot[0]*m,d.rot[1]*m,d.rot[2]*m],(d.pose==="superman"||d.pose==="starfish")&&(l=null)}}let c=1-Math.exp(-(n.snap||16)*i),h=r.cur;for(let d=0;d<h.length;d++)h[d]+=(mi[d]-h[d])*c;let u=s.bones;for(let d=0;d<yo;d++)u[d].rotation.set(h[d*3],h[d*3+1],h[d*3+2]);r.hipY+=(li-r.hipY)*c,r.rootY+=(vo-r.rootY)*c,u[0].position.y=.95+r.hipY;let f=1-Math.exp(-10*i);for(let d=0;d<3;d++)r.piv[d]+=(we[d]-r.piv[d])*f;l?s.pivot.rotation.set(r.piv[0]+l[0],r.piv[1]+l[1],r.piv[2]+l[2]):s.pivot.rotation.set(r.piv[0],r.piv[1],r.piv[2]),s.pivot.position.y=1+r.rootY}function Su(s,t,e){return s.bones[zn[t]].getWorldPosition(e)}function wu(s){let t=L(s.primary||"#2a9d9a"),e=L(s.gloves||s.secondary||"#e4573d"),i=L(s.accent||"#f2c14e"),n=Me({atlas:!1}),r=new Ke,o={};for(let a of[-1,1]){let l=new jt;l.hexa([[-.05,-.05,.42],[.05,-.05,.42],[.06,-.06,.08],[-.06,-.06,.08]].map(([h,u,f])=>[h,u,f]),[[-.05,.05,.42],[.05,.05,.42],[.06,.06,.08],[-.06,.06,.08]],t),l.cbox(0,0,0,.13,.13,.18,e),l.cbox(0,.075,.02,.05,.03,.12,i),l.cbox(0,.075,-.05,.025,.025,.03,L("#1d1712")),l.cbox(0,-.005,-.13,.115,.1,.1,e);for(let h=0;h<4;h++)l.cbox(-.04+h*.027,.04,-.17,.022,.03,.03,e);l.cbox(a*-.06,0,-.11,.03,.05,.07,e);let c=new zt(l.build(),n);c.position.set(a*.2,-.22,-.32),c.rotation.set(.12,a*-.06,0),r.add(c),o[a<0?"L":"R"]=c}return r.traverse(a=>{a.isMesh&&(a.renderOrder=10,a.frustumCulled=!1)}),{group:r,hands:o,mat:n,base:{L:o.L.position.clone(),R:o.R.position.clone()}}}function Eu(s){let t=new jt,e=L("#1a1418");if(s==="skateboard"){t.cbox(0,.12,0,.26,.04,.85,L("#d4472f")),t.cbox(0,.145,0,.2,.01,.6,L("#f2c14e"));for(let n of[-.28,.28])for(let r of[-.1,.1])t.cbox(r,.05,n,.06,.08,.08,L("#f2ead0"))}else if(s==="skates")for(let n of[-.12,.12])t.cbox(n,.12,.02,.13,.16,.28,L("#f2ead0")),t.cbox(n,.03,.02,.06,.06,.26,L("#e4573d"));else if(s==="bicycle"){let n=L("#2a6fd4");for(let r of[-.55,.55])t.cyl(0,0,r,.33,.06,e,8);t.p.length=0,t.n.length=0,t.c.length=0,t.uv.length=0,t.t.length=0;for(let r of[-.55,.55])t.cbox(0,.33,r,.05,.66,.12,e),t.cbox(0,.33,r,.05,.12,.66,e),t.cbox(0,.33,r,.06,.1,.1,L("#ccc"));t.cbox(0,.62,0,.05,.06,1,n),t.cbox(0,.48,-.15,.05,.36,.06,n),t.cbox(0,.68,-.18,.14,.05,.22,e),t.cbox(0,.9,.45,.5,.04,.04,e),t.cbox(0,.76,.45,.05,.3,.05,n)}return new zt(t.build(),Me({atlas:!1}))}var Ee={car(s,t,e,i,n){let r=new jt,o=L("#16120f"),a=L(n);r.cbox(0,.55,0,1.8,.6,4,a),r.cbox(0,1.05,-.2,1.6,.5,2,a),r.cbox(0,1.06,-.2,1.62,.36,1.7,L("#7fb3b8"));for(let l of[-1.3,1.3])for(let c of[-.85,.85])r.cbox(c,.3,l,.3,.6,.6,o);r.cbox(0,.62,2.01,1.4,.15,.02,L("#fff2b0")),uc(s,r,t,0,e,i)},waterTower(s,t,e,i){let n=L("#8a5a3a"),r=L("#3b2a20");for(let o of[-.9,.9])for(let a of[-.9,.9])s.cbox(t+o,e+1.5,i+a,.2,3,.2,r);s.cyl(t,e+3,i,1.6,3,n,8),s.box(t-1.65,e+6,i-1.65,t+1.65,e+6.1,i+1.65,{color:r}),s.pyramid(t-1.7,e+6.1,i-1.7,t+1.7,e+7.4,i+1.7,r)},acUnit(s,t,e,i){s.cbox(t,e+.6,i,1.6,1.2,1.2,L("#a7a59a")),s.cbox(t,e+1.25,i,1,.1,.8,L("#555"))},antenna(s,t,e,i,n){s.cbox(t,e+n/2,i,.15,n,.15,L("#2b2b2b")),s.cbox(t,e+n*.7,i,1.2,.08,.08,L("#2b2b2b")),s.cbox(t,e+n+.1,i,.3,.3,.3,L("#e4573d"))},billboard(s,t,e,i,n,r,o){let a=new jt;a.cbox(-2,1.5,0,.2,3,.2,L("#333")),a.cbox(2,1.5,0,.2,3,.2,L("#333")),a.cbox(0,4.2,0,7,3,.25,L(r)),a.cbox(0,4.2,.14,4.5,1.2,.02,L(o)),a.cbox(-2.4,4.2,.14,1.2,1.2,.02,L("#1d1712")),uc(s,a,t,e,i,n)},lamp(s,t,e){s.cbox(t,2.5,e,.15,5,.15,L("#2a2a30")),s.cbox(t,5,e,.5,.25,.5,L("#fff0b0"))},tree(s,t,e,i=1){s.cbox(t,1.2*i,e,.35*i,2.4*i,.35*i,L("#6b4a2e")),s.cbox(t,3.2*i,e,2.4*i,2*i,2.4*i,L("#5f8f3c")),s.cbox(t,4.4*i,e,1.5*i,1*i,1.5*i,L("#76a64a"))},crate(s,t,e,i,n=1.2){s.box(t-n/2,e,i-n/2,t+n/2,e+n,i+n/2,{side:it.wood,top:it.wood,unit:n,color:L("#ffffff")})},barrel(s,t,e,i){s.cyl(t,e,i,.4,1,L("#c0462e"),6)},bench(s,t,e,i){let n=new jt;n.cbox(0,.45,0,1.8,.08,.5,L("#9a6a3c")),n.cbox(0,.75,-.22,1.8,.4,.06,L("#9a6a3c")),n.cbox(-.8,.22,0,.08,.45,.45,L("#333")),n.cbox(.8,.22,0,.08,.45,.45,L("#333")),uc(s,n,t,0,e,i)},hydrant(s,t,e){s.cyl(t,0,e,.2,.7,L("#d03a2a"),6)}};function uc(s,t,e,i,n,r){let o=Math.cos(r),a=Math.sin(r);for(let l=0;l<t.p.length;l+=3){let c=t.p[l],h=t.p[l+1],u=t.p[l+2];s.p.push(c*o+u*a+e,h+i,-c*a+u*o+n);let f=t.n[l],d=t.n[l+1],x=t.n[l+2];s.n.push(f*o+x*a,d,-f*a+x*o)}s.c.push(...t.c),s.uv.push(...t.uv),s.t.push(...t.t);for(let l=0;l<t.si.length;l++)s.si.push(s.bone)}var tr=220,_o=class{constructor(t){let e=new jt;e.cbox(0,0,0,.18,.18,.18,L("#ffffff")),this.mesh=new Ki(e.build(),Me({atlas:!1,emissive:1}),tr),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(ao),this.p=[];for(let r=0;r<tr;r++)this.p.push({pos:new C,vel:new C,life:0,max:1,s:1,g:14}),this.mesh.setColorAt(r,new wt(1,1,1));this.next=0,this._m=new Kt,this._q=new pi,this._s=new C,this._c=new wt,t.add(this.mesh);let i=new eo(.85,1,24);i.rotateX(-Math.PI/2),this.ringMat=new ze({color:16726843,transparent:!0,opacity:.7,depthWrite:!1}),this.rings=[];for(let r=0;r<8;r++){let o=new zt(i,this.ringMat);o.visible=!1,t.add(o),this.rings.push({m:o,t:0,dur:1})}let n=new Es(.5,.5,60,6,1,!0);n.translate(0,30,0),this.beacon=new zt(n,new ze({color:16769126,transparent:!0,opacity:.35,depthWrite:!1,side:Ze})),this.beacon.visible=!1,this.beacon.frustumCulled=!1,t.add(this.beacon),this.collect=[]}burst(t,e,i=10,n=6){this._c.set(e);for(let r=0;r<i;r++){let o=this.next;this.next=(this.next+1)%tr;let a=this.p[o];a.pos.copy(t),a.vel.set((Math.random()-.5)*n,Math.random()*n,(Math.random()-.5)*n),a.life=a.max=.4+Math.random()*.5,a.s=.6+Math.random()*.9,a.g=14,this.mesh.setColorAt(o,this._c)}this.mesh.instanceColor.needsUpdate=!0}puff(t,e="#efeae0",i=3){this._c.set(e);let n=this.next;this.next=(this.next+1)%tr;let r=this.p[n];r.pos.copy(t),r.pos.x+=(Math.random()-.5)*.8,r.pos.z+=(Math.random()-.5)*.8,r.vel.set((Math.random()-.5)*.6,1.6+Math.random(),(Math.random()-.5)*.6),r.life=r.max=1.3+Math.random()*.6,r.s=-i,r.g=-.6,this.mesh.setColorAt(n,this._c),this.mesh.instanceColor.needsUpdate=!0}marker(t,e,i){let n=this.rings.find(r=>!r.m.visible)||this.rings[0];n.m.position.set(t.x,t.y+.05,t.z),n.m.scale.setScalar(i),n.m.visible=!0,n.t=0,n.dur=e}setBeacon(t){if(!t){this.beacon.visible=!1;return}this.beacon.visible=!0,this.beacon.position.copy(t)}update(t){for(let e=0;e<tr;e++){let i=this.p[e];if(i.life>0){i.life-=t,i.vel.y-=i.g*t,i.pos.addScaledVector(i.vel,t);let n=Math.max(.001,i.life/i.max),r=i.s<0?-i.s*(1.2-n)*Math.min(1,n*4):n*i.s;this._s.set(r,r,r)}else this._s.set(1e-4,1e-4,1e-4);this._m.compose(i.pos,this._q,this._s),this.mesh.setMatrixAt(e,this._m)}this.mesh.instanceMatrix.needsUpdate=!0;for(let e of this.rings)if(e.m.visible){e.t+=t;let i=e.t/e.dur;e.m.material.opacity=.35+.4*Math.abs(Math.sin(e.t*12)),i>=1&&(e.m.visible=!1)}this.beacon.visible&&(this.beacon.rotation.y+=t)}};var bo=(s,t)=>s+4096<<13|t+4096,Mo=class{constructor(){this.boxes=[],this.grid=new Map,this.stamp=0,this.floorFn=()=>0}clear(){this.boxes.length=0,this.grid.clear()}add(t,e,i,n,r,o,a={}){let l={min:[t,e,i],max:[n,r,o],_s:0,climb:a.climb!==!1,...a};l.id=this.boxes.length,this.boxes.push(l);let c=Math.floor(t/8),h=Math.floor(n/8),u=Math.floor(i/8),f=Math.floor(o/8);for(let d=c;d<=h;d++)for(let x=u;x<=f;x++){let g=bo(d,x),m=this.grid.get(g);m||(m=[],this.grid.set(g,m)),m.push(l)}return l}remove(t){t.dead=!0;let e=Math.floor(t.min[0]/8),i=Math.floor(t.max[0]/8),n=Math.floor(t.min[2]/8),r=Math.floor(t.max[2]/8);for(let o=e;o<=i;o++)for(let a=n;a<=r;a++){let l=this.grid.get(bo(o,a));if(l){let c=l.indexOf(t);c>=0&&l.splice(c,1)}}}query(t,e,i,n,r,o,a=[]){a.length=0;let l=++this.stamp,c=Math.floor(t/8),h=Math.floor(n/8),u=Math.floor(i/8),f=Math.floor(o/8);for(let d=c;d<=h;d++)for(let x=u;x<=f;x++){let g=this.grid.get(bo(d,x));if(g)for(let m of g)m._s!==l&&(m._s=l,m.max[0]>t&&m.min[0]<n&&m.max[1]>e&&m.min[1]<r&&m.max[2]>i&&m.min[2]<o&&a.push(m))}return a}raycast(t,e,i,n,r,o,a,l){let c=++this.stamp,h=null,u=a,f=Math.floor(t/8),d=Math.floor(i/8),x=n>0?1:-1,g=o>0?1:-1,m=Math.abs(n)<1e-9?1e9:8/Math.abs(n),p=Math.abs(o)<1e-9?1e9:8/Math.abs(o),v=Math.abs(n)<1e-9?1e9:(n>0?(f+1)*8-t:t-f*8)/Math.abs(n),_=Math.abs(o)<1e-9?1e9:(o>0?(d+1)*8-i:i-d*8)/Math.abs(o),y=0,w=0;for(;y<=u&&w++<256;){let S=this.grid.get(bo(f,d));if(S)for(let E of S){if(E._s===c||(E._s=c,l&&!l(E)))continue;let A=fx(t,e,i,n,r,o,E,u);A&&A.t<u&&(u=A.t,h=A,h.box=E)}v<_?(y=v,v+=m,f+=x):(y=_,_+=p,d+=g)}if(r<-1e-6){let S=this.floorFn(t,i),E=(S-e)/r;E>=0&&E<u&&(h={t:E,point:[t+n*E,S,i+o*E],normal:[0,1,0],box:null,floor:!0})}return h&&!h.point&&(h.point=[t+n*h.t,e+r*h.t,i+o*h.t]),h}lineOfSight(t,e,i){let n=e.x-t.x,r=e.y-t.y,o=e.z-t.z,a=Math.hypot(n,r,o);return a<.01?!0:!this.raycast(t.x,t.y,t.z,n/a,r/a,o/a,a-.2,c=>!c.seeThrough&&c!==i)}};function fx(s,t,e,i,n,r,o,a){let l=0,c=a,h=-1,u=0,f=[s,t,e],d=[i,n,r];for(let g=0;g<3;g++){if(Math.abs(d[g])<1e-9){if(f[g]<o.min[g]||f[g]>o.max[g])return null;continue}let m=1/d[g],p=(o.min[g]-f[g])*m,v=(o.max[g]-f[g])*m,_=-1;if(p>v){let y=p;p=v,v=y,_=1}if(p>l&&(l=p,h=g,u=_),v<c&&(c=v),l>c)return null}if(h<0)return null;let x=[0,0,0];return x[h]=u,{t:l,normal:x}}var Tu=[];function So(s,t,e,i,n,r,o={}){let a={ground:!1,wallX:0,wallZ:0,ceiling:!1,groundBox:null,stepped:!1,hitBox:null},l=o.stepH??.45,c=e.x*i,h=e.z*i,u=e.y*i;x(0,c),x(2,h),t.y+=u;let f=s.query(t.x-n,t.y,t.z-n,t.x+n,t.y+r,t.z+n,Tu);for(let g of f)g.trigger||(u<=0&&t.y<g.max[1]&&t.y-u>=g.max[1]-.05-Math.max(0,-u)?(t.y=g.max[1],e.y=0,a.ground=!0,a.groundBox=g):u>0&&t.y+r>g.min[1]&&t.y+r-u<=g.min[1]+.05?(t.y=g.min[1]-r,e.y=0,a.ceiling=!0):t.y<g.max[1]&&g.max[1]-t.y<.6&&(t.y=g.max[1],e.y<0&&(e.y=0),a.ground=!0,a.groundBox=g));let d=s.floorFn(t.x,t.z);return t.y<=d&&(t.y=d,e.y<0&&(e.y=0),a.ground=!0),a;function x(g,m){if(m===0)return;let p=g===0?"x":"z";t[p]+=m;let v=s.query(t.x-n,t.y+.02,t.z-n,t.x+n,t.y+r,t.z+n,Tu);for(let _ of v)if(!_.trigger){if(o.grounded&&_.max[1]-t.y<=l&&_.max[1]-t.y>0&&!s.query(t.x-n,_.max[1]+.01,t.z-n,t.x+n,_.max[1]+r,t.z+n,[]).some(w=>!w.trigger)){t.y=_.max[1],a.stepped=!0;continue}m>0?t[p]=_.min[g]-n-.001:t[p]=_.max[g]+n+.001,e[p]=0,g===0?a.wallX=m>0?1:-1:a.wallZ=m>0?1:-1,a.hitBox=_}}}var px={deco:it.deco,brick:it.brick,glass:it.glass,office:it.office,brownstone:it.brownstone,warehouse:it.warehouse,tenement:it.tenement,lantern:it.lantern,nightglass:it.nightglass,stone:it.stone,brickdark:it.brickdark},mx={deco:["#fff4dc","#f6e2c0","#efe0d0"],brick:["#ffffff","#f2d8c8","#e8c0a8"],glass:["#ffffff","#e0f0ee"],office:["#ffffff","#f0ead8","#e6e0cc"],brownstone:["#ffffff","#f0d8c8"],warehouse:["#ffffff","#e8d8c8","#d8e0d0"],tenement:["#ffffff","#f2d0c0","#e8d8c8"],lantern:["#ffffff","#ffd8c8","#f0f0d0","#d8f0e0"],nightglass:["#ffffff","#d8e8ff"],stone:["#ffffff","#f0ece0"],brickdark:["#ffffff","#e8d0c8"]},gx=new Set(["brick","tenement","brownstone","brickdark"]),Qi=L("#2b2a2e"),Au=["x0","x1","z0","z1"];function*Ru(s,t){let e=ai(s.seed||1),i=s.blockSize||44,n=s.street||14,r=s.blocks[0],o=s.blocks[1],a=i+n,l=r*a,c=o*a,h=-l/2,u=-c/2,f=t.data={def:s,bounds:{x0:h-8,z0:u-8,x1:h+l+8,z1:u+c+8},zipPoints:[],roofs:[],sidewalks:[],lanes:[],landmarks:{},crimeSpots:[],collectibleSpots:[],perches:[],blocks:[],spawn:new C(0,0,0),parks:[],exits:[],edgeSpawns:{},vents:[],cacheSpots:[],lakes:[],landRects:[],subways:[]},d=f.bounds,x=t.collision,g=-1.6,m=s.edges||{},p=70;for(let K of Au){let gt=m[K];if(!gt||gt==="water")continue;let H=K==="x0"?{x0:d.x0-p,x1:d.x0,z0:d.z0,z1:d.z1}:K==="x1"?{x0:d.x1,x1:d.x1+p,z0:d.z0,z1:d.z1}:K==="z0"?{x0:d.x0,x1:d.x1,z0:d.z0-p,z1:d.z0}:{x0:d.x0,x1:d.x1,z0:d.z1,z1:d.z1+p};H.side=K,H.to=gt.to,H.label=gt.label,f.landRects.push(H)}let v=(K,gt,H)=>K>=H.x0&&K<=H.x1&&gt>=H.z0&&gt<=H.z1;x.floorFn=(K,gt)=>{for(let H of f.lakes)if(v(K,gt,H))return g;if(K>=d.x0&&K<=d.x1&&gt>=d.z0&&gt<=d.z1)return 0;for(let H of f.landRects)if(v(K,gt,H))return 0;return g};let _=new jt;_.ground(d.x0,d.z0,d.x1,d.z1,0,it.road,L("#ffffff"),7);let y=900;_.ground(-y,-y,y,y,g,it.water,L("#ffffff"),12);let w=L("#9d8f78"),S=1.1,E={x0:[d.x0-1,d.z0,d.x0,d.z1,2],x1:[d.x1,d.z0,d.x1+1,d.z1,1],z0:[d.x0-1,d.z0-1,d.x1+1,d.z0,8],z1:[d.x0-1,d.z1,d.x1+1,d.z1+1,4]};for(let K of Au){let gt=m[K],[H,tt,dt,rt,Mt]=E[K];if(!gt||gt==="water"){_.box(H,g,tt,dt,.01,rt,{color:w,faces:Mt|16});let Ct=.6;K==="x0"&&x.add(H,0,tt,dt-Ct+.6,S,rt,{climb:!0,rail:!0}),K==="x1"&&x.add(H+Ct-.6,0,tt,dt,S,rt,{climb:!0,rail:!0}),K==="z0"&&x.add(H,0,tt,dt,S,rt-Ct+.6,{climb:!0,rail:!0}),K==="z1"&&x.add(H,0,tt+Ct-.6,dt,S,rt,{climb:!0,rail:!0})}}t.addStatic(_.build(),"ground"),yield .08;for(let K of f.landRects)xx(K,f,x,t,e,s);yield .12;let A=s.megaPark,M=(K,gt)=>A&&K>=A[0]&&K<=A[2]&&gt>=A[1]&&gt<=A[3];for(let K=0;K<=r;K++){if(A&&K>A[0]&&K<=A[2])continue;let gt=h+K*a;f.lanes.push({axis:"z",c:gt,a:u,b:u+c})}for(let K=0;K<=o;K++){if(A&&K>A[1]&&K<=A[3])continue;let gt=u+K*a;f.lanes.push({axis:"x",c:gt,a:h,b:h+l})}let b=new Map;for(let K of s.landmarks||[])b.set(K.block[0]+","+K.block[1],K);let I=(r-1)/2,O=(o-1)/2,z=Math.hypot(I,O)||1,X=s.parks??.08,Q=s.plazas??.05,q=0,nt=r*o;for(let K=0;K<r;K++)for(let gt=0;gt<o;gt++){if(M(K,gt)){q++;continue}let H=h+K*a+n/2,tt=u+gt*a+n/2,dt=H+i,rt=tt+i,Mt=new jt,Ct={i:K,j:gt,x0:H,z0:tt,x1:dt,z1:rt,kind:"buildings"};f.blocks.push(Ct),Mt.box(H,0,tt,dt,.22,rt,{color:L("#ffffff"),side:null,top:it.sidewalk,faces:31}),x.add(H,0,tt,dt,.22,rt,{curb:!0,climb:!1}),f.sidewalks.push({x0:H+1,z0:tt+1,x1:dt-1,z1:rt-1});let Bt=b.get(K+","+gt),pe=Math.hypot(K-I,gt-O)/z;Bt?(Ct.kind=Bt.type,Mx(Bt,Mt,Ct,e,x,f,s)):e.chance(X)?(Ct.kind="park",Iu(Mt,Ct,e,x,f)):e.chance(Q)?(Ct.kind="plaza",Pu(Mt,Ct,e,x,f)):bx(s,Mt,Ct,pe,e,x,f);for(let Zt=0;Zt<4;Zt++){let ve=(Zt+.5)/4;Ee.lamp(Mt,H+.8,tt+i*ve),Ee.lamp(Mt,dt-.8,tt+i*ve)}e.chance(.5)&&Ee.hydrant(Mt,H+2,tt+1.2),e.chance(s.subway??.25)&&(yx(Mt,H+3.5,rt-3.5,x),f.subways.push([H+2.2,.25,rt-3.5])),s.lanternStrings&&e.chance(.7)&&vx(Mt,H+4,dt-4,tt-n/2,e),e.chance(s.steam??.35)&&f.vents.push([H-n/2+e.range(-2,2),.05,e.range(tt,rt)]),t.addStatic(Mt.build(),"block",Ct),++q%3===0&&(yield .12+.72*(q/nt))}A&&(Ex(s,f,x,t,e,{x0:h+A[0]*a+n/2,z0:u+A[1]*a+n/2,x1:h+(A[2]+1)*a-n/2,z1:u+(A[3]+1)*a-n/2}),yield .86),s.bridge&&Sx(s.bridge,f,x,t),s.statue&&wx(s.statue,f,t,x),yield .9;let W=f.roofs.filter(K=>K.x1-K.x0>7&&K.z1-K.z0>7&&K.y>8&&K.x0>d.x0+4&&K.x1<d.x1-4&&K.z0>d.z0+4&&K.z1<d.z1-4);for(let K=0;K<Math.min(s.caches??6,W.length);K++){let gt=W[e()*W.length|0];f.cacheSpots.push([(gt.x0+gt.x1)/2+e.range(-2,2),gt.y,(gt.z0+gt.z1)/2+e.range(-2,2)])}let ct=h+Math.round(r/2)*a,xt=u+Math.round(o/2)*a;f.edgeSpawns={x0:[d.x0+10,.3,xt,-Math.PI/2],x1:[d.x1-10,.3,xt,Math.PI/2],z0:[ct,.3,d.z0+10,0],z1:[ct,.3,d.z1-10,Math.PI]};let St=f.roofs.filter(K=>Math.hypot((K.x0+K.x1)/2,(K.z0+K.z1)/2)<90&&K.style!=="bridge").sort((K,gt)=>gt.y-K.y)[0]||f.roofs[0];St&&f.spawn.set((St.x0+St.x1)/2,St.y+.1,(St.z0+St.z1)/2),f.roofs.sort((K,gt)=>K.y-gt.y),yield 1}function xx(s,t,e,i,n,r){let o=new jt;o.ground(s.x0,s.z0,s.x1,s.z1,0,it.road,L("#ffffff"),7);let l=s.side==="z0"||s.side==="z1"?s.x1-s.x0:s.z1-s.z0,c=r.edgeStyles||r.styles||[["brick",1]];for(let d=0;d<2;d++){let x=4;for(;x<l-8;){let g=n.range(14,26),m=n.range(16,24),p=Math.round(n.range(14,(r.heights?r.heights.max:60)*.85)/3.5)*3.5,v=20+d*28,_;s.side==="x0"?_={x0:s.x1-v-m,x1:s.x1-v,z0:s.z0+x,z1:s.z0+x+g}:s.side==="x1"?_={x0:s.x0+v,x1:s.x0+v+m,z0:s.z0+x,z1:s.z0+x+g}:s.side==="z0"?_={x0:s.x0+x,x1:s.x0+x+g,z0:s.z1-v-m,z1:s.z1-v}:_={x0:s.x0+x,x1:s.x0+x+g,z0:s.z0+v,z1:s.z0+v+m},n.chance(.85)&&ii(o,_,p,n.weighted(c),n,e,t,{tiers:1,noParapet:!0,edge:!0}),x+=g+n.range(10,16)}}i.addStatic(o.build(),"edge");let h={...s},u=4;s.side==="x0"&&(h.x1=s.x1-u),s.side==="x1"&&(h.x0=s.x0+u),s.side==="z0"&&(h.z1=s.z1-u),s.side==="z1"&&(h.z0=s.z0+u),t.exits.push({min:[h.x0,-5,h.z0],max:[h.x1,400,h.z1],to:s.to,label:s.label,side:s.side});let f=2;s.side==="x0"&&e.add(s.x0-f,-5,s.z0,s.x0,300,s.z1,{invisible:!0,seeThrough:!0,climb:!1}),s.side==="x1"&&e.add(s.x1,-5,s.z0,s.x1+f,300,s.z1,{invisible:!0,seeThrough:!0,climb:!1}),s.side==="z0"&&e.add(s.x0,-5,s.z0-f,s.x1,300,s.z0,{invisible:!0,seeThrough:!0,climb:!1}),s.side==="z1"&&e.add(s.x0,-5,s.z1,s.x1,300,s.z1+f,{invisible:!0,seeThrough:!0,climb:!1})}function yx(s,t,e,i){let n=L("#2e6b3a");s.box(t-1.3,.22,e-2,t+1.3,1.2,e-1.9,{color:n}),s.box(t-1.3,.22,e+1.9,t+1.3,1.2,e+2,{color:n}),s.box(t-1.4,.22,e-2,t-1.3,1.2,e+2,{color:n});for(let r of[-2,2])s.cbox(t+1.3,1.3,e+r,.12,2.2,.12,n),s.cbox(t+1.3,2.5,e+r,.4,.4,.4,L("#9fe0a0"));s.box(t-1.2,.18,e-1.8,t+1.2,.23,e+1.8,{color:L("#1d1712")}),i.add(t-1.4,.22,e-2,t+1.3,1.2,e-1.9,{}),i.add(t-1.4,.22,e+1.9,t+1.3,1.2,e+2,{})}function vx(s,t,e,i,n){let r=["#e4573d","#f2c14e","#e4573d","#ff8ab0","#f2c14e"],o=n.range(7,9.5),a=Math.floor((e-t)/2.6);for(let l=0;l<=a;l++){let c=l/a,h=t+(e-t)*c,u=o-Math.sin(c*Math.PI)*1.2;s.cbox(h,u,i,.5,.6,.5,L(r[l%r.length]),{}),l<a&&s.cbox(h+1.3,u-.05,i,2.6,.04,.04,L("#1d1712"))}}function Cu(s,t,e,i,n,r){let o=Math.min(4.2,(i==="z"?t.x1-t.x0:t.z1-t.z0)-2);if(o<3)return;let a=r.range(1,(i==="z"?t.x1-t.x0:t.z1-t.z0)-o-1);for(let l=3.5;l<e-2;l+=3.5){let c,h,u,f;i==="z"?(c=t.x0+a,h=c+o,f=t.z0,u=f-1.3):(u=t.z0+a,f=u+o,h=t.x0,c=h-1.3),s.box(c,l-.08,u,h,l,f,{color:Qi}),n.add(c,l-.08,u,h,l,f,{fireEscape:!0,climb:!0}),i==="z"?(s.box(c,l,u,h,l+.9,u+.05,{color:Qi,faces:63}),s.box(c,l,u,c+.05,l+.9,f,{color:Qi}),s.box(h-.05,l,u,h,l+.9,f,{color:Qi})):(s.box(c,l,u,c+.05,l+.9,f,{color:Qi}),s.box(c,l,u,h,l+.9,u+.05,{color:Qi}),s.box(c,l,f-.05,h,l+.9,f,{color:Qi}));for(let d=0;d<5;d++){let x=l+.7*d/5*5,g=d/5;i==="z"?s.box(c+.3+g*(o-1.4),l+g*3.4,u+.3,c+.9+g*(o-1.4),l+g*3.4+.06,f-.2,{color:Qi}):s.box(c+.3,l+g*3.4,u+.3+g*(o-1.4),h-.2,l+g*3.4+.06,u+.9+g*(o-1.4),{color:Qi})}}}function _x(s,t,e){let i=s.styles||[["brick",1]];return t.weighted(i)}function bx(s,t,e,i,n,r,o){let l=[];c({x0:e.x0+2.6,z0:e.z0+2.6,x1:e.x1-2.6,z1:e.z1-2.6},0);function c(u,f){let d=u.x1-u.x0,x=u.z1-u.z0;if(f>=3||d<22&&x<22||f>=1&&n.chance(.3)){l.push(u);return}let g=n.chance(.35)?n.range(2,4):0;if(d>=x){let m=u.x0+d*n.range(.38,.62);c({...u,x1:m-g/2},f+1),c({...u,x0:m+g/2},f+1)}else{let m=u.z0+x*n.range(.38,.62);c({...u,z1:m-g/2},f+1),c({...u,z0:m+g/2},f+1)}}let h=s.heights||{min:10,max:70};for(let u of l){let f=_x(s,n,i),d=Math.pow(1-i,h.centerBias??1.4),x=h.min+(h.max-h.min)*(.15+.85*d)*n.range(.45,1.05);f==="brownstone"&&(x=Math.min(x,n.range(10,18))),f==="warehouse"&&(x=Math.min(x,n.range(8,14))),x=Math.max(h.min*.8,Math.round(x/3.5)*3.5),ii(t,u,x,f,n,r,o)}}function ii(s,t,e,i,n,r,o,a={}){let l=px[i]??it.brick,c=L(n.pick(mx[i]||["#ffffff"])),{x0:h,z0:u,x1:f,z1:d}=t,x=0,g=a.tiers??(e>40&&(i==="deco"||i==="office")?n.int(2,3):e>25&&n.chance(.4)?2:1);for(let m=0;m<g;m++){let p=m===g-1?e-x:Math.round(e*(m===0?n.range(.5,.65):n.range(.2,.3))/3.5)*3.5,v=x+Math.max(3.5,p);s.box(h,x,u,f,v,d,{color:c,side:l,top:it.roof,colorTop:L("#ffffff"),unit:3.5,noBottom:!0}),r.add(h,x,u,f,v,d,{building:!0,style:i});let _=Ji(c,.75);s.box(h-.35,v-.5,u-.35,f+.35,v-.1,d+.35,{color:_,noBottom:!1});let y=.3,w=.9;if(!a.noParapet){let A=Ji(c,.85);s.box(h,v,u,f,v+w,u+y,{color:A}),s.box(h,v,d-y,f,v+w,d,{color:A}),s.box(h,v,u+y,h+y,v+w,d-y,{color:A}),s.box(f-y,v,u+y,f,v+w,d-y,{color:A}),r.add(h,v,u,f,v+w,u+y,{parapet:!0}),r.add(h,v,d-y,f,v+w,d,{parapet:!0}),r.add(h,v,u+y,h+y,v+w,d-y,{parapet:!0}),r.add(f-y,v,u+y,f,v+w,d-y,{parapet:!0})}o.roofs.push({x0:h,z0:u,x1:f,z1:d,y:v,style:i});let S=v+1;if(o.zipPoints.push([h,S,u],[f,S,u],[h,S,d],[f,S,d],[(h+f)/2,S,u],[(h+f)/2,S,d],[h,S,(u+d)/2],[f,S,(u+d)/2]),m===g-1){let A=f-h,M=d-u;if(A>8&&M>8){if(n.chance(.35)){let b=n.range(h+3,f-3),I=n.range(u+3,d-3);Ee.waterTower(s,b,v,I),r.add(b-1.7,v+3,I-1.7,b+1.7,v+6.2,I+1.7,{prop:!0})}if(n.chance(.6)){let b=n.range(h+2,f-2),I=n.range(u+2,d-2);Ee.acUnit(s,b,v,I),r.add(b-.8,v,I-.6,b+.8,v+1.2,I+.6,{prop:!0})}if(n.chance(.3)&&Ee.antenna(s,n.range(h+1,f-1),v,n.range(u+1,d-1),n.range(4,9)),n.chance(.12)&&e<40){let b=v,I=(h+f)/2,O=(u+d)/2;Ee.billboard(s,I,b,O,n.pick([0,Math.PI/2]),n.pick(["#e4573d","#2a9d9a","#f2c14e"]),n.pick(["#fff4dc","#1d1712"]))}a.edge||(o.collectibleSpots.push([n.range(h+2,f-2),v+1.2,n.range(u+2,d-2)]),o.perches.push([h+.15,v+w,(u+d)/2]))}if(i==="deco"&&e>50&&n.chance(.6)){let b=Math.min(f-h,d-u)*.3,I=(h+f)/2,O=(u+d)/2;s.box(I-b,v,O-b,I+b,v+4,O+b,{color:c,side:l,top:it.roof}),r.add(I-b,v,O-b,I+b,v+4,O+b,{}),s.pyramid(I-b,v+4,O-b,I+b,v+4+b*2.5,O+b,L("#c9a23a"))}}if(m===0&&(i==="brick"||i==="brownstone"||i==="office"||i==="lantern"||i==="tenement")&&n.chance(i==="lantern"?.85:.5)){let A=L(n.pick(i==="lantern"?["#c0362c","#1e7a4a","#f2c14e"]:["#e4573d","#2a9d9a","#f2c14e","#6b4fa0","#2e6b3a"]));s.box(h+1,3,u-1.4,f-1,3.3,u,{color:A}),r.add(h+1,3,u-1.4,f-1,3.3,u,{awning:!0}),a.edge||o.crimeSpots.push([(h+f)/2,.25,u-2.2,"store",i])}m===0&&gx.has(i)&&v>9&&n.chance(a.edge?.3:.6)&&Cu(s,{x0:h,z0:u,x1:f,z1:d},v,n.chance(.6)?"z":"x",r,n);let E=n.range(1.5,3.5);f-h>8+E*2&&d-u>8+E*2&&(h+=E,f-=E,u+=E,d-=E),x=v}}function Iu(s,t,e,i,n){let{x0:r,z0:o,x1:a,z1:l}=t;s.ground(r+2,o+2,a-2,l-2,.23,it.grass,L("#ffffff"),6),n.parks.push(t);for(let c=0;c<10;c++){let h=e.range(r+5,a-5),u=e.range(o+5,l-5),f=e.range(.9,1.6);Ee.tree(s,h,u,f),i.add(h-.2*f,0,u-.2*f,h+.2*f,2.4*f,u+.2*f,{}),i.add(h-1.2*f,2.2*f,u-1.2*f,h+1.2*f,4.2*f,u+1.2*f,{tree:!0,seeThrough:!0})}for(let c=0;c<4;c++)Ee.bench(s,e.range(r+6,a-6),e.range(o+6,l-6),e.range(0,Math.PI));n.crimeSpots.push([(r+a)/2,.25,(o+l)/2,"park"]),n.collectibleSpots.push([(r+a)/2,1.2,(o+l)/2])}function Pu(s,t,e,i,n){let{x0:r,z0:o,x1:a,z1:l}=t,c=(r+a)/2,h=(o+l)/2;s.cyl(c,.22,h,6,.8,L("#bfb39b"),10),s.cyl(c,.25,h,5.3,.65,L("#5fa3a8"),10),s.cbox(c,2.5,h,1.2,3.5,1.2,L("#bfb39b")),s.cbox(c,5.2,h,.8,2,.8,L("#c9a23a")),i.add(c-6,0,h-6,c+6,1,h+6,{}),i.add(c-.6,0,h-.6,c+.6,6.2,h+.6,{});for(let u=0;u<6;u++)Ee.bench(s,c+Math.cos(u)*12,h+Math.sin(u)*12,u);n.crimeSpots.push([c+9,.25,h,"plaza"]),n.collectibleSpots.push([c,7.5,h])}function Mx(s,t,e,i,n,r,o={}){let{x0:a,z0:l,x1:c,z1:h}=e,u=(a+c)/2,f=(l+h)/2,d=s.type,x={type:d,name:s.name||d,pos:new C(u,0,f),block:e};if(r.landmarks[s.id||d]=x,d==="clocktower"){ii(t,{x0:a+4,z0:l+4,x1:c-4,z1:h-4},21,"deco",i,n,r,{tiers:1});let g=7,m=21,p=m+(s.height||78);t.box(u-g,m,f-g,u+g,p,f+g,{color:L("#efe0c0"),side:it.deco,top:it.roof}),n.add(u-g,m,f-g,u+g,p,f+g,{building:!0});let v=L("#fff2b0");for(let[_,y,w,S]of[[0,g+.05,8,.1],[0,-g-.05,8,.1],[g+.05,0,.1,8],[-g-.05,0,.1,8]])t.cbox(u+_,p-7,f+y,w,8,S,v),t.cbox(u+_*1.01,p-7,f+y*1.01,Math.max(w*.08,.12),3.2,Math.max(S*.08,.12),L("#1d1712"));t.box(u-g-.6,p,f-g-.6,u+g+.6,p+1.2,f+g+.6,{color:L("#c9a23a")}),n.add(u-g-.6,p,f-g-.6,u+g+.6,p+1.2,f+g+.6,{}),t.pyramid(u-g,p+1.2,f-g,u+g,p+22,f+g,L("#3f7f7a")),x.top=new C(u,p+1.3,f),r.roofs.push({x0:u-g,z0:f-g,x1:u+g,z1:f+g,y:p+1.2,style:"deco"})}else if(d==="bank"||d==="pawnshop"||d==="gallery"||d==="museum"){let g=d==="bank"?28:d==="museum"?18:14,m=d==="bank"||d==="museum"?"deco":"brick";ii(t,{x0:a+4,z0:l+6,x1:c-4,z1:h-4},g,m,i,n,r,{tiers:1});for(let p=0;p<6;p++){let v=a+7+p*((c-a-14)/5);t.cbox(v,4,l+4.6,1,8,1,L("#efe6d0")),n.add(v-.5,0,l+4.1,v+.5,8,l+5.1,{})}t.cbox(u,9,l+4.4,c-a-10,2,.8,L(d==="bank"?"#c9a23a":"#e4573d")),x.door=new C(u,.25,l+2.5),r.crimeSpots.push([u,.25,l+1.8,d])}else if(d==="rooftopGarden"){ii(t,{x0:a+4,z0:l+4,x1:c-4,z1:h-4},s.height||24,"brownstone",i,n,r,{tiers:1});let g=s.height||24;t.ground(a+6,l+6,c-6,h-6,g+.05,it.grass,L("#ffffff"),4);for(let m=0;m<6;m++){let p=i.range(a+8,c-8),v=i.range(l+8,h-8);Ee.tree(t,p,v,.6)}t.box(u-2,g,f-2,u+2,g+2.4,f+2,{color:L("#ffffff"),side:it.wood,top:it.wood,unit:1.2}),n.add(u-2,g,f-2,u+2,g+2.4,f+2,{}),x.top=new C(u+4,g+.1,f)}else if(d==="warehouseYard"||d==="docks"){for(let p=0;p<3;p++){let v=a+3+p*((c-a-6)/3);ii(t,{x0:v+1,z0:l+4,x1:v+(c-a-6)/3-1,z1:l+22},i.range(8,12),"warehouse",i,n,r,{tiers:1})}for(let p=0;p<10;p++){let v=i.range(a+4,c-6),_=i.range(l+26,h-4),y=i.int(1,3),w=L(i.pick(["#c0462e","#2a6f8a","#c9a23a","#4f7a3a"]));t.box(v,.22,_,v+6,.22+2.6*y,_+2.5,{color:w}),n.add(v,0,_,v+6,.22+2.6*y,_+2.5,{container:!0})}for(let p=0;p<8;p++)Ee.crate(t,i.range(a+4,c-4),.22,i.range(l+24,h-4));let g=c-8,m=h-8;t.box(g-1,0,m-1,g+1,30,m+1,{color:L("#e0a02a")}),n.add(g-1,0,m-1,g+1,30,m+1,{}),t.box(g-22,30,m-.8,g+8,31.6,m+.8,{color:L("#e0a02a")}),n.add(g-22,30,m-.8,g+8,31.6,m+.8,{}),x.door=new C(u,.25,l+26),r.crimeSpots.push([u,.25,l+28,"docks"])}else if(d==="tower"&&!s.style)ii(t,{x0:a+6,z0:l+6,x1:c-6,z1:h-6},s.height||110,"glass",i,n,r,{tiers:3}),x.top=new C(u,(s.height||110)+.2,f);else if(d==="exchange"){ii(t,{x0:a+4,z0:l+7,x1:c-4,z1:h-4},s.height||34,"stone",i,n,r,{tiers:1});for(let g=0;g<8;g++){let m=a+6+g*((c-a-12)/7);t.cbox(m,6,l+5.6,1.3,12,1.3,L("#efe6d0")),n.add(m-.65,0,l+4.9,m+.65,12,l+6.3,{})}t.hexa([[a+4,12,l+4.6],[c-4,12,l+4.6],[c-4,12,l+7],[a+4,12,l+7]],[[u-1,17,l+4.6],[u+1,17,l+4.6],[u+1,17,l+7],[u-1,17,l+7]],L("#efe6d0")),t.box(a+4,.22,l+1.5,c-4,1.2,l+4.6,{color:L("#d8cdb2")}),n.add(a+4,.22,l+1.5,c-4,1.2,l+4.6,{}),x.door=new C(u,.25,l+.5),x.top=new C(u,(s.height||34)+.2,f+4),r.crimeSpots.push([u,.25,l-1,"bank"])}else if(d==="theater"){ii(t,{x0:a+4,z0:l+6,x1:c-4,z1:h-4},22,"brickdark",i,n,r,{tiers:1}),t.box(a+8,4,l+1.5,c-8,7.5,l+6,{color:L("#ffffff"),side:it.marquee,top:it.marquee,unit:3.5}),n.add(a+8,4,l+1.5,c-8,7.5,l+6,{}),t.box(u-1.5,8,l+4.8,u+1.5,20,l+6,{color:L("#c0362c")});for(let g=0;g<5;g++)t.cbox(u,9.5+g*2.2,l+4.7,1.8,1.6,.12,L("#ffe066"));r.zipPoints.push([u,20.5,l+5.4]),x.door=new C(u,.25,l+.5),x.top=new C(u,22.2,f+4),r.crimeSpots.push([u,.25,l-1,"store"])}else if(d==="gate"){Pu(t,e,i,n,r);let g=u,m=l-.5,p=L("#c0362c"),v=L("#c9a23a");for(let _ of[-1,1])t.cbox(g+_*6,4.5,m,1.2,9,1.2,p),n.add(g+_*6-.6,0,m-.6,g+_*6+.6,9,m+.6,{});t.cbox(g,9.4,m,15,.8,2.2,v),t.cbox(g,10.5,m,14,1.4,1.4,p),t.hexa([[g-9,11.2,m-1.8],[g+9,11.2,m-1.8],[g+9,11.2,m+1.8],[g-9,11.2,m+1.8]],[[g-6,13,m-.6],[g+6,13,m-.6],[g+6,13,m+.6],[g-6,13,m+.6]],L("#1e7a4a")),n.add(g-9,9,m-1.8,g+9,13,m+1.8,{}),x.top=new C(g,13.1,m),r.zipPoints.push([g-8,12.5,m],[g+8,12.5,m])}else if(d==="diner"){let g=a+6,m=l+3,p=u+8,v=l+13;t.box(g,.22,m,p,4.5,v,{color:L("#d8dde0")}),n.add(g,.22,m,p,4.5,v,{building:!0}),t.box(g-.1,1.6,m-.05,p+.1,3.4,m+.1,{color:L("#7fb3b8")}),t.box(g-.15,3.6,m-.1,p+.15,4,v+.1,{color:L("#e4573d")}),t.box(u-4,4.5,m,u+4,6.6,m+.4,{color:L("#f2c14e")}),t.cbox(u,5.55,m-.05,6.6,1.2,.1,L("#1d1712")),r.roofs.push({x0:g,z0:m,x1:p,z1:v,y:4.5,style:"diner"}),ii(t,{x0:u+11,z0:l+4,x1:c-4,z1:h-4},24,"tenement",i,n,r,{tiers:1}),x.door=new C(u,.25,m-1.5),r.crimeSpots.push([u,.25,m-2,"store"])}else if(d==="church"){let g=a+8,m=c-8,p=l+6,v=h-10;t.box(g,.22,p,m,16,v,{color:L("#ffffff"),side:it.stone,top:it.roof,unit:3.5}),n.add(g,.22,p,m,16,v,{building:!0}),t.hexa([[g,16,p],[m,16,p],[m,16,v],[g,16,v]],[[u-.5,23,p],[u+.5,23,p],[u+.5,23,v],[u-.5,23,v]],L("#4a5560")),t.box(u-3.5,.22,p-6,u+3.5,30,p,{color:L("#ffffff"),side:it.stone,unit:3.5}),n.add(u-3.5,.22,p-6,u+3.5,30,p,{building:!0}),t.pyramid(u-3.5,30,p-6,u+3.5,46,p,L("#4a5560")),t.cbox(u,47.5,p-3,.3,3,.3,L("#c9a23a")),t.cbox(u,48,p-3,1.6,.3,.3,L("#c9a23a")),r.roofs.push({x0:u-3.5,z0:p-6,x1:u+3.5,z1:p,y:30,style:"stone"}),r.zipPoints.push([u,31,p-6],[u,46.5,p-3]),x.top=new C(u,30.1,p-3),x.door=new C(u,.25,p-7.5)}else if(d==="home"){let g=a+5,m=l+5,p=u+4,v=f+6,_=21;ii(t,{x0:g,z0:m,x1:p,z1:v},_,"brownstone",i,n,r,{tiers:1}),Cu(t,{x0:g,z0:m,x1:p,z1:v},_,"z",n,i);let y=(g+p)/2,w=(m+v)/2;t.box(y-1.5,_,w-1.5,y+1.5,_+1.4,w+1.5,{color:L("#2a9d9a")}),t.box(y-1.2,_+1.4,w-1.2,y+1.2,_+1.5,w+1.2,{color:L("#f2c14e")}),n.add(y-1.5,_,w-1.5,y+1.5,_+1.4,w+1.5,{}),x.top=new C(y+3,_+.1,w),x.hatch=new C(y,_+.1,w+2.2),x.home=!0,ii(t,{x0:u+7,z0:l+4,x1:c-4,z1:h-4},i.range(14,26),"tenement",i,n,r,{tiers:1}),ii(t,{x0:a+5,z0:f+9,x1:u+4,z1:h-4},i.range(12,20),"brick",i,n,r,{tiers:1})}else d==="tower"&&s.style?(ii(t,{x0:a+6,z0:l+6,x1:c-6,z1:h-6},s.height||110,s.style,i,n,r,{tiers:s.tiers||3}),x.top=new C(u,(s.height||110)+.2,f)):d==="park"&&Iu(t,e,i,n,r)}function Sx(s,t,e,i){let n=s.side==="x1",r=new jt,o=(w,S,E,A,M,b)=>n?[E,S,w,b,M,A]:[w,S,E,A,M,b],a={box:(w,S,E,A,M,b,I)=>r.box(...o(w,S,E,A,M,b),I),cbox:(w,S,E,A,M,b,I)=>n?r.cbox(E,S,w,b,M,A,I):r.cbox(w,S,E,A,M,b,I)},l=(w,S,E,A,M,b,I)=>e.add(...o(w,S,E,A,M,b),I),c=(w,S,E)=>n?new C(E,S,w):new C(w,S,E),h=n?t.bounds.x1:t.bounds.z1,u=s.length||260,f=14,d=s.x||0,x=12,g=L("#a9473a");a.box(d-f/2,x-1.2,h,d+f/2,x,h+u,{color:L("#7b6f62"),top:it.road,unit:7}),l(d-f/2,x-1.2,h,d+f/2,x,h+u,{building:!0});for(let w=0;w<12;w++){let S=x*(1-(w+1)/13),E=h-(w+1)*3;a.box(d-f/2,0,E,d+f/2,S,E+3,{color:L("#7b6f62"),top:it.road,unit:7}),l(d-f/2,0,E,d+f/2,S,E+3,{})}for(let w of[h+u*.25,h+u*.75]){for(let A of[-1,1])a.box(d+A*(f/2+1)-1.2,-8,w-1.2,d+A*(f/2+1)+1.2,60,w+1.2,{color:g}),l(d+A*(f/2+1)-1.2,-8,w-1.2,d+A*(f/2+1)+1.2,60,w+1.2,{building:!0});a.box(d-f/2-2.2,56,w-1.2,d+f/2+2.2,59,w+1.2,{color:g}),l(d-f/2-2.2,56,w-1.2,d+f/2+2.2,59,w+1.2,{}),a.box(d-f/2-2.2,30,w-1,d+f/2+2.2,32,w+1,{color:g}),l(d-f/2-2.2,30,w-1,d+f/2+2.2,32,w+1,{});let S=c(d,60,w),E=c(d,33,w);t.zipPoints.push([S.x,S.y,S.z],[E.x,E.y,E.z])}for(let w of[-1,1])for(let S=0;S<24;S++){let E=h+S/24*u,A=x+6+40*Math.pow(Math.abs((E-h)/u*2-1),2)*.8;a.cbox(d+w*(f/2+1),A,E,.3,.3,u/24+.3,L("#2b2b2b")),a.cbox(d+w*(f/2+1),(A+x)/2,E,.1,A-x,.1,L("#2b2b2b"))}l(d-f/2-.3,x,h,d-f/2,x+1.1,h+u,{rail:!0}),l(d+f/2,x,h,d+f/2+.3,x+1.1,h+u,{rail:!0}),a.box(d-f/2-.3,x,h,d-f/2,x+1.1,h+u,{color:g}),a.box(d+f/2,x,h,d+f/2+.3,x+1.1,h+u,{color:g});let m=h+u;a.box(d-60,-2,m,d+60,x,m+40,{color:L("#8a7d68"),top:it.grass,unit:6}),l(d-60,-2,m,d+60,x,m+40,{}),t.landmarks.bridge={type:"bridge",name:s.name||"Bay Bridge",pos:c(d,x,h+u/2),top:c(d,59.2,h+u*.25)};let[p,,v,_,,y]=o(d-f/2,0,h,d+f/2,0,h+u);t.roofs.push({x0:p,z0:v,x1:_,z1:y,y:x,style:"bridge"}),i.addStatic(r.build(),"bridge")}function wx(s,t,e,i){let n=new jt,r=s.pos[0],o=s.pos[1],a=L("#5fa894"),l=L("#4a8a78"),c=L("#b7b0a2");n.box(r-22,-2,o-22,r+22,1.5,o+22,{color:L("#7f9a6a"),top:it.grass,unit:6}),n.box(r-9,1.5,o-9,r+9,6,o+9,{color:c,side:it.stone,unit:3}),n.taper(r,6,o,9,9,26,6,6,c),n.taper(r,26,o,5.5,5,46,3.6,3.4,a),n.taper(r,46,o,3.6,3.4,56,4.2,3.6,l),n.taper(r,56,o,1.6,1.6,59,1.4,1.4,a),n.taper(r,59,o,2.2,2.2,63,1.8,1.8,a);for(let u=0;u<7;u++){let f=u/7*Math.PI*2;n.cbox(r+Math.cos(f)*1.4,64,o+Math.sin(f)*1.4,.4,1.6,.4,a)}n.taper(r+2.6,52,o,1,1,66,.8,.8,a),n.taper(r+2.6,66,o,1.2,1.2,68,1.6,1.6,L("#c9a23a")),n.cbox(r+2.6,69.2,o,1.2,2.2,1.2,L("#ffd35a")),n.cbox(r-2.6,46,o+1.2,1.4,3,1,l),i.add(r-22,-2,o-22,r+22,1.5,o+22,{}),i.add(r-9,1.5,o-9,r+9,26,o+9,{building:!0}),i.add(r-3,26,o-3,r+3,63,o+3,{building:!0}),t.landmarks.statue={type:"statue",name:s.name||"Lady Brass",pos:new C(r,1.5,o),top:new C(r,26.2,o+6)},t.roofs.push({x0:r-9,z0:o-9,x1:r+9,z1:o+9,y:26,style:"stone"}),t.lakes=t.lakes||[];let h=i.floorFn;i.floorFn=(u,f)=>Math.abs(u-r)<22&&Math.abs(f-o)<22?1.5:h(u,f),e.addStatic(n.build(),"statue")}function Ex(s,t,e,i,n,r){let o=new jt,{x0:a,z0:l,x1:c,z1:h}=r,u=(a+c)/2,f=(l+h)/2;o.box(a,0,l,c,.25,h,{color:L("#ffffff"),top:it.grass,unit:6}),e.add(a,0,l,c,.25,h,{curb:!0,climb:!1});let d=L("#a59b88");for(let[S,E,A]of[[a,c,l],[a,c,h-.6]])for(let M=S;M<E;M+=22)o.box(M,.25,A,Math.min(E,M+16),1,A+.6,{color:d}),e.add(M,.25,A,Math.min(E,M+16),1,A+.6,{});for(let[S,E,A]of[[l,h,a],[l,h,c-.6]])for(let M=S;M<E;M+=22)o.box(A,.25,M,A+.6,1,Math.min(E,M+16),{color:d}),e.add(A,.25,M,A+.6,1,Math.min(E,M+16),{});let x=[{x0:u-26,z0:l+(h-l)*.55,x1:u+18,z1:l+(h-l)*.55+34},{x0:u-30,z0:l+(h-l)*.12,x1:u+30,z1:l+(h-l)*.12+40}];for(let S of x)o.ground(S.x0,S.z0,S.x1,S.z1,.27,it.water,L("#ffffff"),8),o.box(S.x0-1,.25,S.z0-1,S.x1+1,.5,S.z0,{color:d}),o.box(S.x0-1,.25,S.z1,S.x1+1,.5,S.z1+1,{color:d}),t.lakes.push(S);for(let S=0;S<4;S++){let E=l+(S+.5)*(h-l)/4;o.ground(a+2,E-1.5,c-2,E+1.5,.28,it.cobble,L("#ffffff"),3)}o.ground(u-1.5,l+2,u+1.5,h-2,.28,it.cobble,L("#ffffff"),3);let g=(S,E,A=3)=>x.some(M=>S>M.x0-A&&S<M.x1+A&&E>M.z0-A&&E<M.z1+A);for(let S=0;S<46;S++){let E=n.range(a+6,c-6),A=n.range(l+6,h-6);if(g(E,A)||Math.abs(E-u)<3)continue;let M=n.chance(.45),b=M?n.range(2.6,3.6):n.range(1.1,1.7);Ee.tree(o,E,A,b),e.add(E-.2*b,0,A-.2*b,E+.2*b,2.4*b,A+.2*b,{}),e.add(E-1.2*b,2.2*b,A-1.2*b,E+1.2*b,4.9*b,A+1.2*b,{tree:!0,seeThrough:!0}),M&&t.zipPoints.push([E,4.9*b,A])}for(let S=0;S<14;S++){let E=n.range(a+6,c-6),A=n.range(l+6,h-6);g(E,A)||Ee.bench(o,E,A,n.range(0,Math.PI))}let m=u+24,p=l+(h-l)*.4;o.box(m-9,.25,p-7,m+9,5,p+7,{color:L("#8a8274"),side:it.stone,unit:3}),e.add(m-9,.25,p-7,m+9,5,p+7,{building:!0}),o.box(m-6,5,p-4,m+6,13,p+4,{color:L("#b7b0a2"),side:it.stone,top:it.roof,unit:3}),e.add(m-6,5,p-4,m+6,13,p+4,{building:!0}),o.box(m+3,5,p-3,m+7,22,p+1,{color:L("#b7b0a2"),side:it.stone,unit:3}),e.add(m+3,5,p-3,m+7,22,p+1,{building:!0}),o.pyramid(m+2.6,22,p-3.4,m+7.4,28,p+1.4,L("#3f5f7a"));for(let S=-5;S<=5;S+=2)o.cbox(m+S,13.5,p-4,1,1,.6,L("#b7b0a2"));t.roofs.push({x0:m-6,z0:p-4,x1:m+6,z1:p+4,y:13,style:"stone"}),t.landmarks.keep={type:"keep",name:"Founders' Keep",pos:new C(m,5,p),top:new C(m-2,13.1,p)},t.zipPoints.push([m+5,22.5,p-1],[m-6,14,p-4],[m+6,14,p+4]);let v=u-18,_=l+(h-l)*.86;o.box(v-3,.25,_-3,v+3,2,_+3,{color:d}),o.taper(v,2,_,2.4,2.4,30,1.4,1.4,L("#d8cdb2")),o.pyramid(v-.7,30,_-.7,v+.7,32.5,_+.7,L("#c9a23a")),e.add(v-3,.25,_-3,v+3,2,_+3,{}),e.add(v-1.2,2,_-1.2,v+1.2,30,_+1.2,{building:!0}),t.zipPoints.push([v,31,_]),t.landmarks.needle={type:"needle",name:"Founders' Needle",pos:new C(v,0,_),top:new C(v,2.1,_+3.5)};let y=u+22,w=l+(h-l)*.82;o.cyl(y,.25,w,6,.5,L("#c9a23a"),10),o.cyl(y,.75,w,.5,4,L("#e4573d"),6),o.pyramid(y-6,4.7,w-6,y+6,7.5,w+6,L("#e4573d"));for(let S=0;S<8;S++){let E=S/8*Math.PI*2;o.cbox(y+Math.cos(E)*4.5,1.6,w+Math.sin(E)*4.5,.6,1.2,1.4,L(S%2?"#f6f1df":"#2a9d9a"))}e.add(y-6,.25,w-6,y+6,.75,w+6,{}),t.landmarks.carousel={type:"carousel",name:"Green Carousel",pos:new C(y,.3,w)};for(let S=1;S<4;S+=2){let E=l+(S+.5)*(h-l)/4,A=u-30;o.box(A-6,3,E-2.5,A+6,3.6,E+2.5,{color:d}),o.box(A-6,.25,E-2.5,A-4.5,3,E+2.5,{color:d}),o.box(A+4.5,.25,E-2.5,A+6,3,E+2.5,{color:d}),e.add(A-6,3,E-2.5,A+6,3.6,E+2.5,{})}for(let S=0;S<10;S++)Ee.lamp(o,a+8+S*(c-a-16)/9,f+2);t.parks.push({...r,i:-1}),t.crimeSpots.push([u+4,.3,f,"park"],[y-8,.3,w,"park"]);for(let S=0;S<14;S++){let E=n.range(a+8,c-8),A=n.range(l+8,h-8);g(E,A)||t.collectibleSpots.push([E,n.range(1.2,3),A])}i.addStatic(o.build(),"park")}function*Lu(s,t){let e=ai(s.seed||9),i=t.collision,n=new jt,r=t.data={def:s,segments:[],triggers:[],fireNodes:[],zipPoints:[],roofs:[],landmarks:{},sidewalks:[],lanes:[],crimeSpots:[],collectibleSpots:[],perches:[],blocks:[],parks:[],spawn:new C(0,.1,3),bounds:{x0:-60,z0:-20,x1:60,z1:400},interior:!0};i.floorFn=()=>-30;let o=4.2,a=5.5,l=0,c=0,h=L("#ffffff"),u=L("#b8beb6"),f=(v,_,y,w,S,E,A={})=>{n.box(v,_,y,w,S,E,{color:h,side:it.labwall,top:it.grate,unit:2.8}),i.add(v,_,y,w,S,E,A)},d=(v,_,y,w,S,E={})=>{n.box(v,S-1,_,y,S,w,{color:h,side:it.labwall,top:it.labfloor,unit:3}),i.add(v,S-1,_,y,S,w,E)},x=(v,_,y,w,S)=>{n.box(v,S,_,y,S+.6,w,{color:u,side:it.grate,top:it.grate,unit:3}),i.add(v,S,_,y,S+.6,w,{})},g=(v,_,y,w,S,E={})=>r.triggers.push({name:v,min:[-o-2,w,_],max:[o+2,S,y],...E}),m=(v,_,y,w=2.4)=>{for(let S=v;S<_;S+=w)r.fireNodes.push({x:-o+.8+e.range(0,1),y,z:S}),r.fireNodes.push({x:o-.8-e.range(0,1),y,z:S+1.2})},p=(v,_)=>{n.cbox(0,_-.15,v,2.4,.15,.4,L("#fff3c0"))};for(let v of s.segments){let _=v.len||12,y=l,w=l+_,S={...v,z0:y,z1:w,y:c};r.segments.push(S);let E=v.wide?o*1.8:o;switch(v.type){case"pod_room":{E=o*1.8,d(-E,y,E,w,c),x(-E,y,E,w,c+a+1),f(-E-.6,c,y-.6,E+.6,c+a+1,y),f(-E-.6,c,y,-E,c+a+1,w),f(E,c,y,E+.6,c+a+1,w),f(-E,c,w-.4,-o,c+a+1,w),f(o,c,w-.4,E,c+a+1,w);for(let A=0;A<4;A++)for(let M of[-1,1]){let b=M*(E-1.6),I=y+2.5+A*3;n.cyl(b,c,I,.9,.4,L("#555a5e"),8),n.cyl(b,c+2.6,I,.9,.4,L("#555a5e"),8),n.cyl(b,c+.4,I,.75,2.2,L(A===1&&M===-1?"#9fe0d8":"#6e8f8c"),8,!1),i.add(b-.9,c,I-.9,b+.9,c+3,I+.9,{prop:!0})}r.spawn.set(-(E-3),c+.05,y+5.5),n.cbox(0,c+.5,y+3,3,1,1,L("#3d4a52")),i.add(-1.5,c,y+2.5,1.5,c+1,y+3.5,{}),n.cbox(0,c+1.3,y+2.7,2.6,.6,.1,L("#7cf0c8")),r.landmarks.console={pos:new C(0,c,y+4.2)},r.landmarks.okafor={pos:new C(1.8,c,y+8)},g("seg:"+v.id,y,w,c-2,c+a,{seg:S});break}case"corridor":case"pipes_crouch":case"debris_vault":case"slide_door":case"exit_hall":{d(-o,y,o,w,c),x(-o,y,o,w,c+a),f(-o-.6,c,y,-o,c+a,w),f(o,c,y,o+.6,c+a,w);for(let A=y+2;A<w;A+=6)p(A,c+a);if(v.type==="pipes_crouch"){let A=y+_/2;n.box(-o,c+1.15,A-2.5,o,c+a,A+2.5,{color:L("#ffffff"),side:it.grate,top:it.grate,unit:1});for(let M=0;M<4;M++)n.cyl(-o,c+1.3+M*.25,A-2+M,.1,.1,L("#b5532e"),4);i.add(-o,c+1.15,A-2.5,o,c+a,A+2.5,{})}if(v.type==="debris_vault")for(let[A,M]of[[_*.35,1.1],[_*.7,1.25]]){let b=y+A;n.box(-o,c,b-.6,o,c+M,b+.6,{color:L("#ffffff"),side:it.grate,top:it.grate,unit:1.2}),i.add(-o,c,b-.6,o,c+M,b+.6,{vault:!0}),Ee.crate(n,e.range(-2,2),c+M,b-.2,.6)}if(v.type==="slide_door"){let A=y+_*.55;S.shutter={z:A,x0:-o,x1:o,y:c,h:a},f(-o,c+a-.5,A-.3,o,c+a,A+.3)}g("seg:"+v.id,y,w,c-2,c+a,{seg:S});break}case"climb_shaft":{let A=v.height||8;d(-E,y,E,w,c),x(-E,y,E,w,c+A+a),f(-E-.6,c,y,-E,c+A+a,w),f(E,c,y,E+.6,c+A+a,w);let M=w-4;n.box(-E,c,M,E,c+A,w,{color:L("#ffffff"),side:it.labwall,top:it.labfloor,unit:2.8}),i.add(-E,c,M,E,c+A,w,{climb:!0,climbWall:!0});for(let b=0;b<6;b++)n.cbox(0,c+1+b*(A/6),M-.12,2.4,.12,.12,L("#c9a23a"));Ee.crate(n,-2.5,c,y+3),Ee.crate(n,2.2,c,y+5,1.6),i.add(-3.1,c,y+2.4,-1.9,c+1.2,y+3.6,{}),i.add(1.4,c,y+4.2,3,c+1.6,y+5.8,{}),g("seg:"+v.id,y,w,c-2,c+A+2,{seg:S}),r.fireNodes.push({x:-E+1,y:c,z:y+1}),c+=A;break}case"gap_wallrun":{d(-o,y,o,y+3,c),d(-o,w-3,o,w,c),d(-o-4,y,o+4,w,c-14,{pit:!0}),x(-o,y,o,w,c+a+1),f(-o-.6,c-14,y,-o,c+a+1,w,{runWall:!0}),f(o,c-14,y,o+.6,c+a+1,w,{runWall:!0});for(let M=y+3;M<w-3;M+=2)n.cbox(-o+.02,c+1.5,M,.04,.4,.9,L("#2a9d9a"));r.triggers.push({name:"pit",min:[-o-4,c-15,y],max:[o+4,c-6,w],pit:!0,respawnZ:y+1,respawnY:c}),g("seg:"+v.id,y,w,c-6,c+a,{seg:S}),S.gap=[y+3,w-3];break}case"ledge_grab":{let A=v.rise||2.7,M=y+_*.45;d(-o,y,o,w,c),x(-o,y,o,w,c+A+a),f(-o-.6,c,y,-o,c+A+a,w),f(o,c,y,o+.6,c+A+a,w),n.box(-o,c,M,o,c+A,w,{color:L("#ffffff"),side:it.labwall,top:it.labfloor,unit:2.8}),i.add(-o,c,M,o,c+A,w,{climb:!1}),n.cbox(0,c+A-.05,M-.06,o*2,.1,.12,L("#d6a12e")),g("seg:"+v.id,y,w,c-2,c+A+a,{seg:S}),r.fireNodes.push({x:-o+1,y:c,z:y+1}),c+=A;break}case"exit_yard":{d(-24,y,24,w,c),r.roofs.push({x0:-24,z0:y,x1:24,z1:w,y:c}),f(-24-.6,c,y,-24,c+3,w),f(24,c,y,24+.6,c+3,w),f(-24,c,y-.6,-o,c+a,y),f(o,c,y-.6,24,c+a,y),n.box(-24,c+a,y-.6,24,c+a+10,y,{color:L("#ffffff"),side:it.warehouse,unit:3});for(let M=0;M<6;M++){let b=e.range(-20,16),I=e.range(y+5,w-8);n.box(b,c,I,b+6,c+2.6,I+2.5,{color:L(e.pick(["#c0462e","#2a6f8a","#c9a23a"]))}),i.add(b,c,I,b+6,c+2.6,I+2.5,{})}f(-24,c,w-.4,24,c+3.4,w,{climb:!0}),d(-54,w,54,w+60,c-6),r.landmarks.exit={pos:new C(0,c+3.4,w-.2)},r.triggers.push({name:"escape",min:[-24,c-8,w+1],max:[24,c+4,w+60]}),g("seg:"+v.id,y,w,c-2,c+10,{seg:S,outdoor:!0}),r.outdoorZ=y;break}}v.fire!==!1&&v.type!=="pod_room"&&m(y+1,w-1,v.type==="climb_shaft"?c-(v.height||8):v.type==="ledge_grab"?c-(v.rise||2.7):c),l=w,v.id&&(r.landmarks[v.id]={pos:new C(0,c,(y+w)/2),start:new C(0,S.y+.05,y+1.2),end:new C(0,c+.05,w-1.5),z0:y,z1:w,y:c}),yield r.segments.length/s.segments.length*.9}r.length=l,r.bounds.z1=l+60,t.addStatic(n.build(),"facility"),yield 1}function*Nu(s,t){let e=t.collision,i=new jt,n=t.data={def:s,interior:!0,apartment:!0,bounds:{x0:-8,z0:-6,x1:8,z1:6},zipPoints:[],roofs:[],sidewalks:[],lanes:[],landmarks:{},crimeSpots:[],collectibleSpots:[],perches:[],blocks:[],parks:[],spawn:new C(0,.02,1.5),stations:[],exits:[],vents:[],cacheSpots:[],lakes:[],landRects:[]};e.floorFn=()=>0;let r=-7,o=7,a=-5,l=5,c=3.3,h=L("#ffffff"),u=L("#b98a5a"),f=L("#3a2a20"),d=L("#2a9d9a"),x=L("#e4573d"),g=L("#f2c14e"),m=L("#1d1712");i.ground(r,a,o,l,0,it.wood,h,2),i.ground(r,a,-3,l,.005,it.kitchen,h,1.2),i.ground(-1.8,-1.2,2.2,2.2,.01,it.rug,h,4),e.add(r-1,-1,a-1,o+1,0,l+1,{});let p=(_,y,w,S)=>{i.box(_,0,y,w,c,S,{color:h,side:it.wallpaper,unit:2.2,unitV:c}),e.add(_,0,y,w,c,S,{climb:!1})};p(r-.3,a-.3,o+.3,a),p(r-.3,l,o+.3,l+.3),p(r-.3,a,r,l),p(o,a,o+.3,l),i.box(r,c,a,o,c+.2,l,{color:L("#e8dcc0")}),e.add(r,c,a,o,c+.2,l,{}),i.cbox(0,c-.05,0,.6,.1,.6,L("#fff2b0"));for(let _ of[-1.6,1.6,4.6])i.box(_-.8,1,a+.01,_+.8,2.6,a+.03,{color:h,side:it.nightglass,unit:1.6,unitV:1.6}),i.box(_-.9,.95,a+.02,_+.9,1.05,a+.25,{color:f});i.cbox(-1.6,1.1,a+.3,.5,.2,.3,L("#9ab0c8")),i.cbox(-1.5,1.28,a+.3,.2,.18,.2,L("#9ab0c8")),i.box(r,0,a+.6,r+.9,.95,l-1.5,{color:L("#e8e0d0")}),e.add(r,0,a+.6,r+.9,.95,l-1.5,{}),i.box(r,.95,a+.6,r+.95,1,l-1.5,{color:d}),i.box(r+.05,1,-1.6,r+.85,1.05,-.4,{color:m});for(let _ of[-1.3,-.7])i.cyl(r+.45,1.05,_,.18,.02,x,8);i.cbox(r+.45,1.12,-1.3,.3,.12,.3,L("#8a8a8a")),i.box(r,1.6,a+.6,r+.5,2.6,l-1.5,{color:L("#c9b893")}),i.box(r,0,l-1.4,r+1,2.1,l-.2,{color:L("#f2f0e6")}),e.add(r,0,l-1.4,r+1,2.1,l-.2,{}),i.cbox(r+1.02,1.3,l-.5,.05,.5,.06,L("#8a8a8a")),i.box(-4.4,0,-.6,-3.2,.95,1.4,{color:u}),e.add(-4.4,0,-.6,-3.2,.95,1.4,{}),i.cbox(-3.8,1,.4,.3,.1,.3,g),i.box(o-1,0,a+.4,o,.95,a+3.2,{color:L("#6b5a48")}),e.add(o-1,0,a+.4,o,.95,a+3.2,{}),i.box(o-1.05,.95,a+.35,o,1.02,a+3.25,{color:L("#8f887a"),side:it.grate,top:it.grate,unit:.6}),i.cbox(o-.5,1.15,a+1.2,.3,.25,.3,L("#4a4c4f")),i.cbox(o-.5,1.33,a+1.2,.18,.12,.42,d),i.cbox(o-.5,1.37,a+1,.1,.06,.12,g);for(let _=0;_<6;_++)i.cbox(o-.15,1.7+Math.floor(_/3)*.35,a+1.9+_%3*.35,.12,.25,.25,_%2?d:L("#5fe0c8"));i.box(o-.25,1.5,a+1.7,o,1.55,a+3,{color:u}),i.box(o-.25,1.85,a+1.7,o,1.9,a+3,{color:u}),i.cbox(o-.8,1.35,a+2.7,.05,.7,.05,m),i.cbox(o-.75,1.7,a+2.6,.25,.12,.2,g),i.box(o-.02,1.2,a+.4,o,2.6,a+3.2,{color:L("#c9a86a")});for(let _=0;_<5;_++)i.cbox(o-.06,1.5+_%2*.5,a+.7+_*.5,.05,.3,.06,L("#4a4c4f"));i.box(2.6,.75,a+.2,3.8,.8,a+1.1,{color:u}),i.box(2.65,0,a+.25,2.75,.75,a+1.05,{color:u}),i.box(3.65,0,a+.25,3.75,.75,a+1.05,{color:u}),e.add(2.6,0,a+.2,3.8,.8,a+1.1,{}),i.cbox(3.2,.9,a+.6,.8,.18,.5,L("#d8cdb2")),i.cbox(3.2,1.25,a+.55,.62,.5,.5,L("#d8cdb2")),i.cbox(3.2,1.27,a+.81,.48,.36,.02,L("#2fd36b")),i.cbox(3.2,.83,a+.98,.7,.04,.2,L("#bfb39b")),i.cbox(2.9,.84,a+.98,.05,.02,.05,x),i.box(-1.8,.75,l-1,.2,.8,l-.2,{color:u}),i.box(-1.75,0,l-.95,-1.65,.75,l-.25,{color:u}),i.box(.05,0,l-.95,.15,.75,l-.25,{color:u}),e.add(-1.8,0,l-1,.2,.8,l-.2,{}),i.cbox(-.8,.95,l-.6,.5,.3,.25,L("#2a2a30")),i.cbox(-1,1.15,l-.6,.12,.25,.2,L("#2a2a30")),i.cbox(-.6,1.25,l-.6,.6,.08,.2,L("#2a2a30"));for(let _=0;_<5;_++)i.cbox(-1.6+_*.12,.84,l-.35,.08,.08,.08,[x,d,g,L("#6b3fa0"),h][_]);i.box(-3,0,l-1.2,-2,.05,l-.2,{color:f}),n.mannequin=new C(-2.5,.05,l-.7),i.box(o-2.2,0,l-2.4,o,.5,l,{color:u}),e.add(o-2.2,0,l-2.4,o,.5,l,{}),i.box(o-2.1,.5,l-2.3,o-.1,.7,l-.1,{color:L("#e8e0d0")}),i.box(o-2.1,.7,l-1.8,o-.1,.78,l-.1,{color:x}),i.cbox(o-1.1,.8,l-2,1.4,.15,.4,h),i.box(o-2.2,.5,l-.15,o,1.3,l,{color:f}),i.box(o-3,0,l-.8,o-2.4,.6,l-.2,{color:u}),i.cbox(o-2.7,.75,l-.5,.2,.3,.2,g),i.box(-1.2,0,2.6,1.8,.45,3.4,{color:L("#6b3fa0")}),i.box(-1.2,.45,3.2,1.8,1,3.5,{color:L("#5a3488")}),i.box(-1.4,0,2.6,-1.2,.7,3.5,{color:L("#5a3488")}),i.box(1.8,0,2.6,2,.7,3.5,{color:L("#5a3488")}),e.add(-1.4,0,2.6,2,.6,3.5,{}),i.box(-.6,0,-1.4,1.2,.55,-.9,{color:f}),e.add(-.6,0,-1.4,1.2,.55,-.9,{}),i.cbox(.3,.85,-1.15,1.1,.6,.5,L("#3a3a40")),i.cbox(.3,.87,-.89,.85,.45,.02,L("#6fb3b8")),i.cbox(.6,1.3,-1.15,.03,.4,.03,m),i.cbox(.1,1.3,-1.15,.03,.4,.03,m),i.box(1,1.3,l-.05,3.4,2.5,l,{color:L("#b5874f")});for(let _=0;_<6;_++)i.cbox(1.3+_%3*.8,1.6+Math.floor(_/3)*.55,l-.07,.6,.4,.02,_%2?L("#fff4dc"):L("#e8e0c8"));i.box(-6.6,1.8,l-.35,-4.4,1.86,l,{color:u}),n.trophyShelf=new C(-5.5,1.86,l-.2),i.box(-6.98,1.3,-1.2,-6.96,2.5,.2,{color:L("#f2c14e")}),i.box(-6.97,1.5,-1,-6.95,2.3,0,{color:L("#c0362c")}),t.addStatic(i.build(),"apartment");let v=(_,y,w,S,E=1.6)=>n.stations.push({id:_,label:y,pos:new C(w,0,S),radius:E});v("workstation","WORKSTATION",o-1.6,a+1.8),v("kitchen","COOK",-3.6,-1),v("fridge","SNACK",r+1.7,l-.8,1.3),v("pc","BRASS-64",3.2,a+1.9),v("sewing","SEWING",-.8,l-1.5),v("bed","SLEEP",o-2.8,l-1.8,1.4),v("tv","WATCH TV",.3,1.5,1.4),v("clippings","CLIPPINGS",2.2,l-1,1.3),v("window","GO OUT",-1.6,a+1,1.4),n.landmarks.door={pos:new C(-1.6,0,a+1.2)},yield 1}var Ro=class{constructor(t){this.r=t,this.scene=new mn,this.collision=new Mo,this.mat=Me(),this.statics=[],this.data=null,this.dynamic=new Ke,this.scene.add(this.dynamic),this.time=0,this._frustum=new bs,this._pm=new Kt}clear(){for(let t of this.statics)this.scene.remove(t),t.geometry.dispose();for(this.statics.length=0,this.collision.clear(),this.traffic&&(this.scene.remove(this.traffic.mesh),this.traffic.mesh.geometry.dispose(),this.traffic=null),this.peds&&(this.scene.remove(this.peds.mesh),this.peds.mesh.geometry.dispose(),this.peds=null),this.fire&&(this.scene.remove(this.fire.mesh),this.fire=null),this.pigeons&&(this.scene.remove(this.pigeons.mesh),this.pigeons=null),this.sky&&(this.scene.remove(this.sky),this.sky=null);this.dynamic.children.length;)this.dynamic.remove(this.dynamic.children[0]);this.data=null}addStatic(t,e,i){let n=new zt(t,this.mat);return n.matrixAutoUpdate=!1,n.updateMatrix(),n.userData.kind=e,n.userData.meta=i,this.scene.add(n),this.statics.push(n),n}*load(t,e){this.clear(),this.def=t,this.applyPalette(e);let i=t.kind==="facility"?Lu(t,this):t.kind==="interior"?Nu(t,this):Ru(t,this);for(let n of i)yield n*.85;this._buildSky(e),this.data.interior||(this._buildTraffic(t),this._buildPeds(t),this._buildPigeons(t)),this.ventT=0,this._buildFire(),yield 1}applyPalette(t){this.palette=t,qe.sunDir.value.set(...t.sunDir||[-.5,.75,.35]).normalize(),qe.sunColor.value.set(t.sun),qe.skyColor.value.set(t.sky),qe.groundColor.value.set(t.ground),qe.fogColor.value.set(t.fog),qe.fogNear.value=t.fogNear??70,qe.fogFar.value=t.fogFar??280,this.scene.background=new wt(t.fog)}_buildSky(t){let e=new io(400,16,10),i=new We({uniforms:{top:{value:new wt(t.skyTop)},mid:{value:new wt(t.skyMid)},bot:{value:new wt(t.fog)},sunDir:qe.sunDir,sunCol:{value:new wt(t.sunDisc||"#ffd35a")},sunSize:{value:t.sunSize??.06}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; uniform vec3 sunDir; uniform vec3 sunCol; uniform float sunSize; varying vec3 vD;
        void main(){ float h = vD.y; vec3 c = h > 0.08 ? mix(mid, top, smoothstep(0.08, 0.6, h)) : mix(bot, mid, smoothstep(-0.05, 0.08, h));
        vec3 sd = normalize(vec3(sunDir.x, 0.06, sunDir.z)); float s = dot(normalize(vD), sd);
        if (s > 1.0 - sunSize * 0.5) c = sunCol; else if (s > 1.0 - sunSize) c = mix(c, sunCol, 0.35);
        gl_FragColor = vec4(c, 1.0); }`,side:Ve,depthWrite:!1});if(this.sky=new zt(e,i),this.sky.renderOrder=-1,this.sky.frustumCulled=!1,this.scene.add(this.sky),!this.data.interior){let n=new jt,r=ai(7),o=L(t.cloud||"#f7deaa");for(let l=0;l<26;l++){let c=r.range(0,Math.PI*2),h=r.range(250,340),u=r.range(55,110),f=r.range(18,40),d=Math.cos(c)*h,x=Math.sin(c)*h;n.cbox(d,u,x,f,2.5,f*.35,o),n.cbox(d+f*.15,u+2,x,f*.5,2.5,f*.25,o)}let a=new zt(n.build(),Me({atlas:!1,emissive:.8}));a.frustumCulled=!1,this.sky.add(a),a.position.set(0,0,0),a.scale.setScalar(1),this.clouds=a}}_buildTraffic(t){let e=t.traffic??16;if(!e||!this.data.lanes.length)return;let i=new jt;Ee.car(i,0,0,0,"#ffffff");let n=new Ki(i.build(),Me({atlas:!1}),e);n.frustumCulled=!1;let r=ai(t.seed+5),o=[],a=["#f2c14e","#f2c14e","#f2c14e","#d4472f","#2a6fd4","#3a8a5a","#e8e0d0","#6b4fa0","#222222"];for(let l=0;l<e;l++){let c=r.pick(this.data.lanes),h=r.chance(.5)?1:-1;o.push({lane:c,dir:h,t:r.range(c.a,c.b),speed:r.range(7,12),stopped:0,box:null}),n.setColorAt(l,new wt(r.pick(a)))}n.instanceColor.needsUpdate=!0,this.scene.add(n),this.traffic={mesh:n,cars:o,R:r}}_buildPeds(t){let e=t.peds??30;if(!e||!this.data.sidewalks.length)return;let i=new jt;i.cbox(0,.45,0,.32,.9,.22,L("#3a3a48")),i.cbox(0,1.2,0,.48,.62,.28,L("#ffffff")),i.cbox(0,1.62,0,.28,.3,.28,L("#d9a27a")),i.cbox(0,1.78,0,.3,.07,.3,L("#3a2a20"));let n=new Ki(i.build(),Me({atlas:!1}),e);n.frustumCulled=!1;let r=ai(t.seed+9),o=[],a=["#c0462e","#2a6f8a","#c9a23a","#4f7a3a","#e8e0d0","#7a4f9a","#d97a3a","#556070"];for(let l=0;l<e;l++){let h={sw:r.pick(this.data.sidewalks),edge:r.int(0,3),t:r.range(0,1),speed:r.range(1,1.6)*(r.chance(.5)?1:-1),x:0,z:0,flee:0,phase:r.range(0,6),alive:!0};o.push(h),n.setColorAt(l,new wt(r.pick(a)))}n.instanceColor.needsUpdate=!0,this.scene.add(n),this.peds={mesh:n,peds:o}}_buildFire(){let t=this.data.fireNodes||[];if(!t.length)return;let e=new Ne,i=[],n=[],r=[],o=[],a=[],l=(u,f)=>{let g=[[-.7*u,0,-.7*f],[.7*u,0,.7*f],[.7*u*.2,1.6,.7*f*.2],[-.7*u*.2,1.6,-.7*f*.2]];for(let m of[0,1,2,0,2,3])i.push(...g[m]),r.push(0,1,0),o.push(0,0),a.push(0,0,0,0),n.push(...g[m][1]>.5?[1,.85,.25]:[1,.35,.1])};l(1,0),l(0,1),e.setAttribute("position",new Jt(i,3)),e.setAttribute("normal",new Jt(r,3)),e.setAttribute("color",new Jt(n,3)),e.setAttribute("uv",new Jt(o,2)),e.setAttribute("tile",new Jt(a,4));let c=Me({atlas:!1,emissive:1,side:Ze}),h=new Ki(e,c,t.length);h.frustumCulled=!1;for(let u of t)u.on=!1,u.heat=0;this.scene.add(h),this.fire={mesh:h,nodes:t,front:-999},this._updateFire(0)}_updateFire(t){let e=this.fire;if(!e)return;let i=Eo,n=To,r=Ao,o=er,a=0;for(let l of e.nodes){let c=l.steam?e.front>-998:l.z<e.front;l.on=c;let h=c?.75+.35*Math.sin(this.time*13+l.z*3.1+l.x):1e-4;r.set(l.steam?1.6:1,h*(l.steam?.5:1),l.steam?1.6:1),n.setFromAxisAngle(wo,this.time*.5+l.z),o.set(l.x,l.y,l.z),i.compose(o,n,r),e.mesh.setMatrixAt(a++,i)}e.mesh.instanceMatrix.needsUpdate=!0}isBurning(t,e=1.2){if(!this.fire)return!1;for(let i of this.fire.nodes)if(i.on&&!i.steam&&Math.abs(i.y-t.y)<2&&Math.abs(i.z-t.z)<e&&Math.abs(i.x-t.x)<e+.3)return!0;return!1}update(t,e,i){this.time+=t,qe.time.value=this.time,this.sky&&this.sky.position.copy(e.position),this._pm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._pm);let n=qe.fogFar.value+40;for(let r of this.statics){let o=r.geometry.boundingSphere,a=o.center.distanceTo(e.position)-o.radius;r.visible=a<n&&this._frustum.intersectsSphere(o)}if(this._updateTraffic(t,i),this._updatePigeons(t,i),this.data.vents&&this.data.vents.length&&this.fx&&(this.ventT-=t,this.ventT<=0)){this.ventT=.22;let r=0;for(let o of this.data.vents){let a=o[0]-e.position.x,l=o[2]-e.position.z;a*a+l*l<6400&&r<4&&(r++,er.set(o[0],o[1],o[2]),this.fx.puff(er))}}this._updatePeds(t,i),this._updateFire(t)}_updateTraffic(t,e){let i=this.traffic;if(!i)return;let n=Eo,r=To,o=Ao.set(1,1,1),a=er;i.cars.forEach((l,c)=>{let h=l.lane;l.stopped>0?l.stopped-=t:l.t+=l.dir*l.speed*t,l.t>h.b&&(l.t=h.a),l.t<h.a&&(l.t=h.b);let u=l.dir*3.2;h.axis==="z"?a.set(h.c+u,0,l.t):a.set(l.t,0,h.c-u),e&&Math.abs(e.pos.y)<1&&a.distanceToSquared(e.pos)<36&&(l.stopped=.5),l.pos=l.pos||new C,l.pos.copy(a);let f=h.axis==="z"?l.dir>0?0:Math.PI:l.dir>0?Math.PI/2:-Math.PI/2;r.setFromAxisAngle(wo,f),n.compose(a,r,o),i.mesh.setMatrixAt(c,n)}),i.mesh.instanceMatrix.needsUpdate=!0}_updatePeds(t,e){let i=this.peds;if(!i)return;let n=Eo,r=To,o=Ao.set(1,1,1),a=er,l=this.panic||null;i.peds.forEach((c,h)=>{let u=c.sw,f=u.x1-u.x0,d=u.z1-u.z0,x=2*(f+d),g=c.speed;l&&Math.hypot(c.x-l.x,c.z-l.z)<25&&(g=Math.sign(c.speed)*4.5),c.t=(c.t+g*t/x+1)%1;let m=c.t*x,p,v,_;m<f?(p=u.x0+m,v=u.z0,_=Math.PI/2):(m-=f)<d?(p=u.x1,v=u.z0+m,_=0):(m-=d)<f?(p=u.x1-m,v=u.z1,_=-Math.PI/2):(m-=f,p=u.x0,v=u.z1-m,_=Math.PI),g<0&&(_+=Math.PI),c.x=p,c.z=v,c.phase+=t*Math.abs(g)*6,a.set(p,.22+Math.abs(Math.sin(c.phase))*.05,v),r.setFromAxisAngle(wo,_),n.compose(a,r,o),i.mesh.setMatrixAt(h,n)}),i.mesh.instanceMatrix.needsUpdate=!0}_buildPigeons(t){let e=(this.data.perches||[]).slice(0,60);if(!e.length)return;let i=Math.min(36,e.length*3),n=new jt;n.cbox(0,.15,0,.2,.2,.34,L("#8f9fb0")),n.cbox(0,.32,.14,.13,.13,.13,L("#6f7f90")),n.cbox(0,.3,.23,.04,.03,.07,L("#e0a02a")),n.cbox(.13,.2,-.02,.06,.04,.24,L("#7a8a9a")),n.cbox(-.13,.2,-.02,.06,.04,.24,L("#7a8a9a"));let r=new Ki(n.build(),Me({atlas:!1}),i);r.frustumCulled=!1;let o=ai((t.seed||1)+77),a=[];for(let l=0;l<i;l++){let c=e[l%e.length],h=new C(c[0]+o.range(-1.5,1.5)*0,c[1],c[2]+o.range(-3,3));a.push({home:h,pos:h.clone(),vel:new C,fly:0,yaw:o.range(0,6.28),t:o.range(0,9)})}this.scene.add(r),this.pigeons={mesh:r,birds:a}}_updatePigeons(t,e){let i=this.pigeons;if(!i)return;let n=Eo,r=To,o=Ao.set(1,1,1);i.birds.forEach((a,l)=>{if(a.t+=t,a.fly>0)a.fly-=t,a.vel.y+=2*t,a.pos.addScaledVector(a.vel,t),a.fly<=0&&(a.pos.copy(a.home),a.vel.set(0,0,0));else if(e&&a.pos.distanceToSquared(e.pos)<49){a.fly=14;let h=Math.random()*6.28;a.vel.set(Math.cos(h)*6,5+Math.random()*3,Math.sin(h)*6),a.yaw=Math.atan2(a.vel.x,a.vel.z),l%6===0&&this.onFlock&&this.onFlock(a.pos)}else Math.sin(a.t*1.3+l)>.97&&(a.yaw+=.6);let c=a.fly>0?1+Math.sin(a.t*30)*.3:1;o.set(c,1,1),r.setFromAxisAngle(wo,a.yaw),n.compose(a.pos,r,o),i.mesh.setMatrixAt(l,n)}),i.mesh.instanceMatrix.needsUpdate=!0}findZipPoint(t,e,i=55,n=.93){let r=null,o=-1;for(let a of this.data.zipPoints){let l=a[0]-t.x,c=a[1]-t.y,h=a[2]-t.z,u=Math.hypot(l,c,h);if(u<4||u>i)continue;let f=(l*e.x+c*e.y+h*e.z)/u;if(f<n)continue;let d=f*2-u/i;if(d>o){if(dc.set(a[0],a[1]+.3,a[2]),!this.collision.lineOfSight(t,dc))continue;o=d,r=(r||new C).copy(dc)}}return r}roofAt(t,e){let i=null;for(let n of this.data.roofs)t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1&&(!i||n.y>i.y)&&(i=n);return i}},wo=new C(0,1,0),dc=new C,Eo=new Kt,To=new pi,Ao=new C(1,1,1),er=new C;var _n=class{constructor(t,e,i){this.owner=t,this.states=e,this.current=null,this.name=null,this.time=0,this.prev=null,i&&this.set(i)}set(t,e){if(!this.states[t]){console.warn("FSM: unknown state",t);return}let i=this.name;this.current&&this.current.exit&&this.current.exit.call(this.owner,t),this.prev=i,this.name=t,this.current=this.states[t],this.time=0,this.current.enter&&this.current.enter.call(this.owner,i,e)}is(...t){return t.includes(this.name)}update(t){this.time+=t,this.current&&this.current.update&&this.current.update.call(this.owner,t)}};var lv=new C(0,1,0),ku=new C,pc=new C,Ou=new C,Tx=new C,Ax=new C,Rx=[0,.3,-.3,.6,-.6,.95,-.95,1.3,-1.3],Cx=[.62,.8,.98,1.15],fc=s=>!s.trigger&&!s.curb&&!s.rail&&!s.invisible,Cs=22,Du={skateboard:{max:13.5,accel:7,friction:.35,turn:1,jump:7,pose:"ride"},skates:{max:12,accel:12,friction:1.2,turn:1,jump:7.5,pose:"ride"},bicycle:{max:17,accel:9,friction:.6,turn:.75,jump:5.5,pose:"bike"}},Co=class{constructor(t){this.game=t,this.world=t.world,this.pos=new C,this.vel=new C,this.yaw=0,this.pitch=0,this.hw=.32,this.h=1.8,this.targetH=1.8,this.ground=!1,this.crouch=!1,this.health=100,this.maxHealth=100,this.lastHurt=0,this.abilities={swing:!0,zip:!0,gadgets:!0,ride:!0,wallrun:!0,climb:!0},this.ride=null,this.rideIdx=0,this.anchor=new C,this.ropeLen=0,this.ropeActive=!1,this.wallN=new C,this.wallSide=0,this.wallTime=0,this.wallCooldown=0,this.lerpFrom=new C,this.lerpTo=new C,this.lerpT=0,this.lerpDur=.3,this.afterLerp="ground",this.zipTarget=null,this.aimZipPoint=null,this._zipScan=0,this.pose="idle",this.speed=0,this.landImpact=0,this.stepPhase=0,this.lastStepSign=1,this.swingDistance=0,this.airTime=0,this.noiseTimer=0,this.lockTimer=0,this.lockPose="idle",this.lastSafe=new C,this.safeTimer=0,this.swingRetry=0,this.coyote=0,this.jumpBuffer=0,this.trick=null,this.style=0,this.combo=0,this.swingSide=1,this.ropeTarget=0,this.swingChain=0,this.swingPhase=0,this.groundTrick=null,this.ropeShootT=1,this.anchorNormal=new C(0,1,0),this.wallUp=!1,this.stats={swingPower:1,zipRange:55,maxHealth:100,armor:0},this._fwd=new C,this._right=new C,this._tmp=new C,this._tmp2=new C,this.fsm=new _n(this,Ix,"ground")}spawn(t,e=0){this.pos.copy(t),this.vel.set(0,0,0),this.yaw=e,this.pitch=0,this.lastSafe.copy(t),this.ropeActive=!1,this.ride=null,this.crouch=!1,this.h=this.targetH=1.8,this.health=this.maxHealth,this.fsm.set("air")}get eyeHeight(){return this.h-.18}fwd(){return this._fwd.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}right(){return this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}lookDir(t=new C){let e=Math.cos(this.pitch);return t.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}eye(t=new C){return t.set(this.pos.x,this.pos.y+this.eyeHeight,this.pos.z)}hurt(t,e){this.game.godMode||this.fsm.is("locked")&&this.lockPose==="takedown"||(t*=1-(this.stats.armor||0)-(this.game.buffArmor?this.game.buffArmor():0),this.health-=t,this.lastHurt=this.game.time,this.trick&&(this.trick=null,this.style=0,this.combo=0),B.emit("player:hurt",{amount:t,from:e}),this.health<=0&&(this.health=0,B.emit("player:dead")))}lock(t,e="idle"){this.lockTimer=t,this.lockDur=t,this.lockPose=e,this.fsm.is("locked")||this.fsm.set("locked")}setCrouch(t){return!t&&this.crouch&&this.world.collision.query(this.pos.x-this.hw,this.pos.y+.1,this.pos.z-this.hw,this.pos.x+this.hw,this.pos.y+1.8,this.pos.z+this.hw,[]).some(i=>!i.trigger)?!1:(this.crouch=t,this.targetH=t?1.1:1.8,!0)}update(t){(!this.fsm.is("locked")||this.lockPose!=="dialogue")&&(this.yaw=ho(this.yaw-$.look.x),this.pitch=Wt(this.pitch-$.look.y,-1.45,1.45)),this.wallCooldown=Math.max(0,this.wallCooldown-t),this.h=Xe(this.h,this.targetH,14,t),this.fsm.update(t),this.health<this.maxHealth&&this.game.time-this.lastHurt>4&&(this.health=Math.min(this.maxHealth,this.health+8*(this.stats.regen||1)*t)),this.safeTimer+=t,this.ground&&this.safeTimer>1&&!this.inLake()&&this.pos.y>this.world.collision.floorFn(this.pos.x,this.pos.z)+-.5&&(this.lastSafe.copy(this.pos),this.safeTimer=0);let e=this.world.collision.floorFn(this.pos.x,this.pos.z);e<-1&&this.pos.y<=e+.3&&!this.world.data.interior&&(B.emit("player:splash"),this.respawnSafe()),this.pos.y<.8&&this.inLake()&&(B.emit("player:splash"),this.respawnSafe()),this.pos.y<-25&&this.respawnSafe(),this.speed=Math.hypot(this.vel.x,this.vel.z),this.fsm.is("swing")&&(this.swingDistance+=this.vel.length()*t),this.world.isBurning(this.pos)&&this.hurt(28*t,"fire")}respawnSafe(){let t=this.world.roofAt(this.lastSafe.x,this.lastSafe.z);this.pos.copy(this.lastSafe),t&&this.pos.y<t.y&&(this.pos.y=t.y+.1),this.vel.set(0,0,0),this.ropeActive=!1,this.fsm.set("air"),B.emit("player:respawned")}moveInput(){let t=this.fwd(),e=this.right(),i=$.move.x,n=$.move.y;return this._tmp.set(t.x*n+e.x*i,0,t.z*n+e.z*i)}physics(t,e){let i=So(this.world.collision,this.pos,this.vel,t,this.hw,this.h,e);return this.contact=i,i}ray(t,e,i,n,r,o,a,l){return this.world.collision.raycast(t,e,i,n,r,o,a,l)}probeWall(t,e,i){let n=this.ray(this.pos.x,this.pos.y+e,this.pos.z,t.x,0,t.z,i);return n&&n.box&&Math.abs(n.normal[1])<.5?n:null}emitNoise(t){B.emit("noise",{pos:this.pos.clone(),radius:t*(1-(this.stats.quiet||0)),source:"player"})}freerun(){return $.down("l1")}sprinting(){return Math.hypot($.move.x,$.move.y)>.85||this.freerun()}tryVault(){let t=this.fwd();if(this.speed<1.5&&!$.pressed("cross"))return!1;let e=this.probeWall(t,.5,.8+this.speed*.06);if(!e||e.box.trigger)return!1;let i=e.box.max[1],n=i-this.pos.y;if(n<.4||n>1.4)return!1;let r=this.ray(e.point[0]+t.x*3,i-.05,e.point[2]+t.z*3,-t.x,0,-t.z,3),o=r&&r.box===e.box?3-r.t:3;return this.world.collision.query(e.point[0]+t.x*.4-this.hw,i+.05,e.point[2]+t.z*.4-this.hw,e.point[0]+t.x*.4+this.hw,i+1,e.point[2]+t.z*.4+this.hw,[]).some(l=>!l.trigger)?!1:(this.lerpFrom.copy(this.pos),o<1.6?(this.lerpTo.set(e.point[0]+t.x*(o+.6),this.pos.y+0,e.point[2]+t.z*(o+.6)),this.vaultTop=i+.25):(this.lerpTo.set(e.point[0]+t.x*.6,i+.02,e.point[2]+t.z*.6),this.vaultTop=i+.3),this.vaultSpeed=Math.max(this.speed,5),this.lerpDur=.32,this.afterLerp="air",this.fsm.set("vault"),B.emit("player:vault"),!0)}tryLedge(){if(!this.abilities.climb)return!1;let t=this.fwd(),e=this.probeWall(t,1.2,.75);if(!e||e.box.trigger||e.box.rail)return!1;let i=e.box.max[1];if(i-this.pos.y<1.2||i-this.pos.y>2.35)return!1;let n=e.normal;return this.world.collision.query(e.point[0]-n[0]*.5-this.hw,i+.05,e.point[2]-n[2]*.5-this.hw,e.point[0]-n[0]*.5+this.hw,i+1,e.point[2]-n[2]*.5+this.hw,[]).some(o=>!o.trigger)?!1:(this.wallN.set(n[0],0,n[2]),this.ledgeTop=i,this.ledgePoint=new C(e.point[0],i,e.point[2]),this.fsm.set("hang"),!0)}tryClimb(){if(!this.abilities.climb)return!1;let t=this.fwd(),e=this.probeWall(t,1,.7);return!e||!e.box.climb||e.box.trigger||e.box.rail||e.box.max[1]-this.pos.y<1.2?!1:(this.wallN.set(e.normal[0],0,e.normal[2]),this.climbBox=e.box,this.fsm.set("climb"),!0)}tryWallRun(){if(!this.abilities.wallrun||this.wallCooldown>0)return!1;let t=Math.hypot(this.vel.x,this.vel.z);if(t<5.5)return!1;let e=this.right();for(let i of[-1,1]){let n=this._tmp2.set(e.x*i,0,e.z*i),r=this.probeWall(n,1,1.1);if(!r||r.box.trigger||r.box.rail||r.box.max[1]-this.pos.y<2.2)continue;let o=this._tmp.set(r.normal[0],0,r.normal[2]);if(!(Math.abs((this.vel.x*o.x+this.vel.z*o.z)/t)>.75))return this.wallN.copy(o),this.wallSide=i,this.fsm.set("wallrun"),!0}return!1}findAnchor(){let t=this.eye(ku),e=this.lookDir(pc),i=Math.hypot(this.vel.x,this.vel.z),n=e.x,r=e.z;if(i>4){let u=Math.min(.7,i/25);n=n*(1-u)+this.vel.x/i*u,r=r*(1-u)+this.vel.z/i*u}let o=Math.hypot(n,r)||1;n/=o,r/=o;let a=14+Math.min(i,32)*.45,l=Wt(13+i*.3,11,26),c=null,h=-1e9;for(let u of Rx)for(let f of Cx){let d=Math.cos(u),x=Math.sin(u),g=n*d-r*x,m=n*x+r*d,p=Math.cos(f),v=Math.sin(f),_=this.ray(t.x,t.y,t.z,g*p,v,m*p,90,fc);if(!_||_.floor||!_.box)continue;let y=_.point[1]-this.pos.y;if(y<(this.pos.y<4?3:4.5))continue;let w=(_.point[0]-t.x)*n+(_.point[2]-t.z)*r;if(w<2.5)continue;let S=_.box.max[1]-_.point[1]<3?.35:0,E=-Math.abs(w-a)*.07-Math.abs(y-l)*.05-Math.abs(u)*.45+S+(Math.abs(u)>.2?.15:0);E>h&&(h=E,c=_)}return c}startSwing(t){this.anchor.set(t.point[0],Math.min(t.point[1],t.box?t.box.max[1]:t.point[1]),t.point[2]),t.normal&&this.anchorNormal.set(t.normal[0],t.normal[1],t.normal[2]);let e=this.anchor.distanceTo(this.pos),i=this.ray(this.anchor.x+this.anchorNormal.x*.6,this.anchor.y-.5,this.anchor.z+this.anchorNormal.z*.6,0,-1,0,200,fc);this.arcFloor=i?i.point[1]:0;let n=Math.max(6,this.anchor.y-this.arcFloor-2.6);this.ropeLen=e,this.ropeTarget=Wt(e*.93,6,n);let r=this.right();this.swingSide=(this.anchor.x-this.pos.x)*r.x+(this.anchor.z-this.pos.z)*r.z<0?-1:1;let o=this.vel.length();if(o<12){let a=Ou.subVectors(this.anchor,this.pos).normalize();this.vel.addScaledVector(a,7-o*.3),this.vel.y+=2.5}this.ropeActive=!0,this.ropeShootT=0,this.ride&&this.dismount(),this.fsm.set("swing"),this.addStyle(25,null),B.emit("player:thwip",{anchor:this.anchor.clone(),side:this.swingSide})}addStyle(t,e){this.style+=Math.round(t*(1+this.combo*.25)),e&&(this.combo++,B.emit("player:style",{label:e,style:this.style,combo:this.combo}))}startTrick(t){let e=Mu[t];return e?(this.trick={type:t,t:0,dur:e.dur,k:0},this.addStyle(t==="doubleflip"?220:120,t),B.emit("player:trick",{type:t}),!0):!1}pickTrick(){let t=$.move.x,e=$.move.y;return e>.55?this.trick&&this.trick.type==="frontflip"?"doubleflip":"frontflip":e<-.55?"backflip":t>.55?"corkscrew":t<-.55?"sidespin":["superman","starfish","twist"][Math.random()*3|0]}updateTrick(t){let e=this.trick||this.groundTrick;e&&(e.t+=t,e.k=e.t/e.dur,e.k>=1&&(this.trick===e?this.trick=null:this.groundTrick=null))}cashStyle(t){if(this.style<=0){this.combo=0;return}if(t){let e=this.style>=120?Math.max(1,Math.floor(this.style/220)):0;B.emit("player:stylecash",{style:this.style,combo:this.combo,parts:e})}else B.emit("player:bailstyle",{style:this.style});this.style=0,this.combo=0}dismount(){this.ride&&(this.ride=null,B.emit("player:ride",null))}cycleRide(){let e=[null,...this.game.save.data.inventory.rides.filter(i=>this.game.registry.get("rides",i))];this.rideIdx=(this.rideIdx+1)%e.length,this.ride=e[this.rideIdx],this.ride?(this.setCrouch(!1),this.fsm.set("ride")):this.fsm.set("ground"),B.emit("player:ride",this.ride)}groundJump(t=1){if(this.vel.y=8*t,this.ground=!1,this.freerun()&&this.speed>6){let e=this.fwd();this.vel.x+=e.x*2,this.vel.z+=e.z*2,this.vel.y+=1}this.fsm.set("air"),B.emit("player:jump"),this.emitNoise(6)}aimZip(t){return this._zipScan-=t,$.down("l2")&&this.abilities.zip?this._zipScan<=0&&(this._zipScan=.1,this.aimZipPoint=this.world.findZipPoint(this.eye(ku),this.lookDir(pc),this.stats.zipRange)):this.aimZipPoint=null,this.aimZipPoint&&$.pressed("r2")?($.consume("r2"),this.zipTarget=this.aimZipPoint.clone(),this.fsm.set("zip"),B.emit("player:zip",{target:this.zipTarget}),!0):!1}inLake(){let t=this.world.data&&this.world.data.lakes;if(!t)return!1;for(let e of t)if(this.pos.x>e.x0-1.5&&this.pos.x<e.x1+1.5&&this.pos.z>e.z0-1.5&&this.pos.z<e.z1+1.5)return!0;return!1}heightAboveGround(){let t=this.ray(this.pos.x,this.pos.y+.1,this.pos.z,0,-1,0,60,fc);return t?t.t:60}canSwingInput(){return this.abilities.swing&&$.down("r2")&&!$.down("l2")}},Ix={ground:{enter(){this.ground=!0,this.airTime=0,this.swingChain=0},update(s){let t=this;if(t.updateTrick(s),t.aimZip(s))return;let e=t.moveInput(),i=Math.min(1,Math.hypot($.move.x,$.move.y)),n=t.crouch?2.6:i>.85||t.freerun()?t.freerun()?9.6:7.6:4.4;t.game.combat&&t.game.combat.aiming&&(n=Math.min(n,3.5));let r=e.x*n,o=e.z*n,a=i>.05?45:30;if(t.vel.x=Uu(t.vel.x,r,a*s),t.vel.z=Uu(t.vel.z,o,a*s),t.vel.y-=Cs*s,$.pressed("circle")){if(t.speed>5.8&&!t.crouch){t.fsm.set("slide");return}t.setCrouch(!t.crouch),B.emit("player:crouch",t.crouch)}if($.pressed("down")&&t.abilities.ride&&!t.crouch){t.cycleRide();return}if($.pressed("cross")){if(t.tryVault())return;t.crouch&&t.setCrouch(!1),t.groundJump();return}if(t.freerun()&&i>.3&&(t.tryVault()||t.tryClimb()))return;if(t.canSwingInput()&&$.pressed("r2")){t.groundJump(.9);return}if(!t.physics(s,{grounded:!0,stepH:.45}).ground){t.coyote=.12,t.fsm.set("air");return}if(t.ground=!0,t.speed>.5){t.stepPhase+=s*(1.6+t.speed*.32);let c=Math.sign(Math.sin(t.stepPhase*Math.PI));c!==t.lastStepSign&&(t.lastStepSign=c,B.emit("player:step",{crouch:t.crouch,speed:t.speed}),t.crouch||t.emitNoise(t.speed>6?9:4))}t.pose=t.crouch?"crouch":t.speed>8.4?"sprint":t.speed>5?"run":t.speed>.4?"walk":"idle"}},air:{enter(s){this.ground=!1,s!=="swing"&&s!=="wallrun"&&s!=="zip"&&(this.swingRetry=0)},update(s){let t=this;if(t.airTime+=s,t.coyote-=s,t.updateTrick(s),t.aimZip(s))return;let e=t.moveInput(),i=10;t.vel.x+=e.x*i*s,t.vel.z+=e.z*i*s;let n=Math.hypot(t.vel.x,t.vel.z),r=Math.max(9.5,n-3*s);if(n>r&&(t.vel.x*=r/n,t.vel.z*=r/n),t.vel.y-=Cs*s,t.vel.y<-55&&(t.vel.y=-55),$.pressed("cross")){if(t.coyote>0){t.groundJump();return}t.airTime>.1&&(!t.trick||t.trick.k>.7)&&t.heightAboveGround()>2.5&&t.startTrick(t.pickTrick())}if(t.swingRetry-=s,t.canSwingInput()&&t.swingRetry<=0&&($.pressed("r2")||t.airTime>.16)){let h=t.findAnchor();if(h){t.trick=null,t.startSwing(h);return}else $.pressed("r2")&&B.emit("player:noanchor");t.swingRetry=.15}if(!t.trick&&(t.vel.y<4&&t.tryLedge()||(t.freerun()||t.speed>6.5)&&t.tryWallRun()||$.move.y>.5&&(t.freerun()||t.vel.y<0)&&t.tryClimb()))return;let o=$.down("circle")&&t.vel.y<0;o&&(t.vel.y-=16*s);let a=t.vel.y;if(t.physics(s,{}).ground){let h=Math.hypot(t.vel.x,t.vel.z);if(t.landImpact=Wt(-a/25,0,1),t.trick&&t.trick.k<.82){t.trick=null,t.cashStyle(!1),t.vel.x*=.2,t.vel.z*=.2,t.lock(.6,"stunned"),B.emit("player:bail"),B.emit("player:land",{impact:t.landImpact,vy:a});return}t.trick=null,t.cashStyle(!0),B.emit("player:land",{impact:t.landImpact,vy:a}),-a>10&&t.emitNoise(12),-a>13&&h>5.5?(t.groundTrick={type:"roll",t:0,dur:.45,k:0},B.emit("player:roll")):-a>18&&!t.freerun()&&(t.vel.x*=.45,t.vel.z*=.45,t.landSquash=!0),t.fsm.set(t.ride?"ride":"ground");return}let c=-t.vel.y;t.pose=o?"dive":c>17?"skydive":c>5&&t.airTime>.5?"fall":"jump"}},slide:{enter(){this.targetH=.9,this.h=Math.min(this.h,1);let s=this.fwd(),t=Math.max(this.speed,9);this.vel.x=s.x*t,this.vel.z=s.z*t,B.emit("player:slide"),this.emitNoise(5)},exit(){this.crouch||(this.targetH=1.8)},update(s){let t=this,e=Math.exp(-1.6*s);t.vel.x*=e,t.vel.z*=e,t.vel.y-=Cs*s;let i=t.physics(s,{grounded:!0});if(t.pose="slide",$.pressed("cross")&&t.fsm.time>.15&&(t.targetH=1.8,t.setCrouch(!1)!==!1)){t.groundJump();return}if(!i.ground){t.fsm.set("air");return}(t.fsm.time>.75||t.speed<3&&t.fsm.time>.25)&&(t.crouch=!0,t.setCrouch(!1)||(t.crouch=!0,t.targetH=1.1),t.fsm.set("ground"))}},wallrun:{enter(){this.wallTime=0,this.vel.y=Math.max(this.vel.y,2.5),B.emit("player:wallrun")},update(s){let t=this;t.wallTime+=s;let e=t.wallN,i=t._tmp.set(-e.z,0,e.x);i.x*t.vel.x+i.z*t.vel.z<0&&i.negate();let n=Math.max(9,Math.hypot(t.vel.x,t.vel.z));if(t.vel.x=i.x*n-e.x*1.5,t.vel.z=i.z*n-e.z*1.5,t.vel.y-=(t.wallTime<.6?4:14)*s,t.pose=t.wallSide<0?"wallrunL":"wallrunR",$.pressed("cross")){t.vel.x=i.x*n*.9+e.x*7,t.vel.z=i.z*n*.9+e.z*7,t.vel.y=8.5,t.wallCooldown=.25,t.fsm.set("air"),B.emit("player:jump");return}if(t.canSwingInput()&&$.pressed("r2")){let a=t.findAnchor();if(a){t.startSwing(a);return}}let r=t.physics(s,{}),o=t.probeWall(t._tmp2.set(-e.x,0,-e.z),1,1.2);if(r.ground){t.fsm.set("ground");return}(!o||t.wallTime>1.7||$.pressed("circle"))&&(t.wallCooldown=.35,t.vel.x+=e.x*2,t.vel.z+=e.z*2,t.fsm.set("air")),$.move.y>.6&&$.down("l1")&&Math.abs(t.fwd().dot(e))>.85&&t.tryClimb()}},climb:{enter(){this.vel.set(0,0,0),this.climbTime=0,B.emit("player:climb")},update(s){let t=this,e=t.wallN;t.climbTime+=s;let i=t._tmp.set(-e.z,0,e.x),n=t.fwd().dot(e)<0?1:-1,r=t.freerun()?2.1:1;t.wallUp=t.freerun()&&$.move.y>.5;let o=$.move.y*4.2*r*(n>0?1:.6),a=$.move.x*3.2*r,l=t.right(),c=i.x*l.x+i.z*l.z>=0?1:-1;if(t.vel.set(i.x*a*c-e.x*1,o,i.z*a*c-e.z*1),t.pose=t.wallUp?"wallup":Math.abs(o)+Math.abs(a)>.2?"climb":"hang",$.pressed("cross")){$.move.y>.3?t.vel.set(-e.x*-.5,9.5,-e.z*-.5):(t.vel.set(e.x*7,8,e.z*7),t.yaw=Math.atan2(-e.x,-e.z)),t.wallCooldown=.25,t.fsm.set("air"),B.emit("player:jump");return}if($.pressed("circle")){t.vel.set(e.x*2,0,e.z*2),t.fsm.set("air");return}if(t.canSwingInput()&&$.pressed("r2")){let f=t.findAnchor();if(f){t.vel.set(e.x*4,4,e.z*4),t.startSwing(f);return}}t.physics(s,{});let h=t.probeWall(t._tmp2.set(-e.x,0,-e.z),1,1),u=t.probeWall(t._tmp2.set(-e.x,0,-e.z),1.75,1);if(!(!u&&h&&t.tryLedge())){if(!h&&!u){let f=t.climbBox?t.climbBox.max[1]:t.pos.y+1;if(f-t.pos.y<2&&o>0){t.lerpFrom.copy(t.pos),t.lerpTo.set(t.pos.x-e.x*.9,f+.02,t.pos.z-e.z*.9),t.lerpDur=.28,t.vaultTop=f+.3,t.afterLerp="ground",t.vaultSpeed=2,t.fsm.set("vault"),B.emit("player:mantle");return}t.fsm.set("air");return}h&&h.box&&(t.climbBox=h.box),t.contact&&t.contact.ground&&$.move.y<-.3&&t.fsm.set("ground")}}},hang:{enter(){let s=this.wallN;this.vel.set(0,0,0),this.pos.set(this.ledgePoint.x+s.x*(this.hw+.06),this.ledgeTop-1.75,this.ledgePoint.z+s.z*(this.hw+.06)),B.emit("player:grab")},update(s){let t=this,e=t.wallN;if(t.pose="hang",$.pressed("cross")||$.move.y>.5&&t.fsm.time>.18||t.freerun()&&t.fsm.time>.1){t.lerpFrom.copy(t.pos),t.lerpTo.set(t.ledgePoint.x-e.x*.6,t.ledgeTop+.02,t.ledgePoint.z-e.z*.6),t.lerpDur=.3,t.vaultTop=t.ledgeTop+.35,t.afterLerp="ground",t.vaultSpeed=2,t.fsm.set("vault"),B.emit("player:mantle");return}if($.pressed("circle")){t.vel.set(e.x*1.5,-1,e.z*1.5),t.wallCooldown=.4,t.fsm.set("air"),t.airTime=.5;return}if(Math.abs($.move.x)>.3){let i=t._tmp.set(-e.z,0,e.x),n=t.right(),r=i.x*n.x+i.z*n.z>=0?1:-1,o=t.pos.x+i.x*r*$.move.x*2.2*s,a=t.pos.z+i.z*r*$.move.x*2.2*s,l=t.ray(o,t.ledgeTop-.1,a,-e.x,0,-e.z,.8);l&&l.box&&(t.pos.x=o,t.pos.z=a,t.ledgePoint.x=l.point[0],t.ledgePoint.z=l.point[2])}}},vault:{enter(){this.lerpT=0,B.emit("player:vaultstart")},update(s){let t=this;t.lerpT+=s/t.lerpDur;let e=Math.min(1,t.lerpT),i=e*e*(3-2*e);t.pos.lerpVectors(t.lerpFrom,t.lerpTo,i);let n=Math.max(t.vaultTop,t.lerpFrom.y,t.lerpTo.y);if(t.pos.y=co(co(t.lerpFrom.y,n,Math.min(1,e*2)),t.lerpTo.y,Math.max(0,e*2-1)),t.pose="crouch",e>=1){let r=t.fwd(),o=t.vaultSpeed||4;t.vel.set(r.x*o,0,r.z*o),t.fsm.set(t.afterLerp==="ground"?"ground":"air")}}},swing:{enter(){this.swingT=0,this.pose="swing"},exit(){this.ropeActive=!1},update(s){let t=this;t.swingT+=s,t.ropeShootT+=s,t.updateTrick(s);let e=t.anchor,i=t.stats.swingPower*(1+Math.min(t.swingChain,6)*.03);t.vel.y-=Cs*s;let n=Ou.subVectors(e,t.pos),r=n.length();n.divideScalar(r);let o=Tx.copy(t.vel).addScaledVector(n,-t.vel.dot(n)),a=o.length();a>.5?o.divideScalar(a):o.copy(t.fwd());let l=Wt(n.y,0,1),c=$.move.y>-.3?1:.3,h=(9+14*l*l)*i*c;t.vel.addScaledVector(o,h*s);let u=t.lookDir(pc),f=t.right();t.vel.x+=(f.x*$.move.x*10+u.x*5)*s,t.vel.z+=(f.z*$.move.x*10+u.z*5)*s,t.ropeLen>t.ropeTarget&&(t.ropeLen=Math.max(t.ropeTarget,t.ropeLen-24*s)),e.y-t.ropeLen<t.arcFloor+2.2&&(t.ropeLen=Math.max(5,e.y-t.arcFloor-2.2));let x=t.physics(s,{}),g=Ax.subVectors(t.pos,e),m=g.length();if(m>t.ropeLen){g.divideScalar(m),t.pos.copy(e).addScaledVector(g,t.ropeLen);let y=t.vel.dot(g);y>0&&t.vel.addScaledVector(g,-y)}let p=t.vel.length(),v=46*i;p>v&&t.vel.multiplyScalar(v/p),t.swingPhase=Wt(t.vel.y/Math.max(6,p),-1,1),t.pose="swing";let _=t.pos.y>e.y-1.2||t.swingT>.45&&n.y<.1;if($.pressed("cross")){let y=t.vel;y.y=Math.max(y.y,0)+10;let w=Math.hypot(y.x,y.z)||1;y.x+=y.x/w*4,y.z+=y.z/w*4,t.swingRetry=.35,t.swingChain++,t.fsm.set("air"),B.emit("player:release",{jump:!0}),t.addStyle(80,null),p>12&&t.startTrick($.move.y<-.5?"backflip":"frontflip");return}if(!$.down("r2")||_||t.swingT>4.5){let y=t.vel.y/Math.max(1,p),w=!_&&y>.22&&y<.78&&p>10,S=Math.hypot(t.vel.x,t.vel.z)||1;w?(t.vel.x+=t.vel.x/S*5,t.vel.z+=t.vel.z/S*5,t.vel.y+=4,t.swingChain++,t.addStyle(150,null),B.emit("player:perfect")):(t.vel.y>-6&&(t.vel.y+=3),t.vel.x+=t.vel.x/S*1.5,t.vel.z+=t.vel.z/S*1.5),t.swingRetry=_?.12:.05,t.fsm.set("air"),B.emit("player:release",{jump:!1,perfect:w});return}if(x.ground&&t.vel.y<=.1&&t.swingT>.2){t.swingChain=0,t.fsm.set("ground");return}(x.wallX||x.wallZ)&&(t.tryWallRun()||t.tryClimb())}},zip:{enter(){this.zipT=0,this.ropeActive=!0,this.ropeShootT=0,this.trick=null,this.anchor.copy(this.zipTarget),this.ropeLen=this.anchor.distanceTo(this.pos),this.swingSide=1,this.ride&&this.dismount()},exit(){this.ropeActive=!1},update(s){let t=this;t.zipT+=s;let e=t._tmp.subVectors(t.zipTarget,t.pos),i=e.length();if(t.pose="zip",t.ropeShootT+=s,i<1.2||t.zipT>3){let o=t.fwd(),a=$.down("cross");t.vel.set(o.x*(a?9:6),a?15:6.5,o.z*(a?9:6)),t.pos.y=Math.max(t.pos.y,t.zipTarget.y-.2),t.fsm.set("air"),B.emit("player:ziparrive"),a&&(t.addStyle(100,null),t.startTrick("frontflip"));return}e.divideScalar(i);let n=Math.min(34,10+t.zipT*60);t.vel.copy(e).multiplyScalar(n);let r=t.physics(s,{});(r.wallX||r.wallZ||r.ceiling)&&t.zipT>.2&&t.fsm.set("air")}},ride:{enter(){this.ground=!0},update(s){let t=this,e=Du[t.ride]||Du.skateboard,i=t.fwd(),n=t.moveInput(),r=Wt($.move.y,-1,1),o=Math.hypot(t.vel.x,t.vel.z),a=o>.5?t.vel.x/o:i.x,l=o>.5?t.vel.z/o:i.z,c=Math.atan2(-(i.x+n.x*.3),-(i.z+n.z*.3)),h=Math.atan2(-a,-l),u=h+ho(c-h)*Math.min(1,e.turn*4*s);a=-Math.sin(u),l=-Math.cos(u);let f=o+(r>0?r*e.accel:r*e.accel*1.8)*s-e.friction*s;if(f=Wt(f,0,e.max),t.vel.x=a*f,t.vel.z=l*f,t.vel.y-=Cs*s,$.pressed("cross")&&(t.vel.y=e.jump,B.emit("player:jump")),$.pressed("down")&&(t.cycleRide(),!t.ride))return;if($.pressed("circle")){t.dismount(),t.rideIdx=0,t.fsm.set("ground");return}if(t.canSwingInput()&&$.pressed("r2")){t.dismount(),t.rideIdx=0,t.groundJump();return}let d=t.physics(s,{grounded:t.vel.y<=0,stepH:.3});if(t.ground=d.ground,(d.wallX||d.wallZ)&&f>10){t.dismount(),t.rideIdx=0,t.vel.set(-a*3,4,-l*3),B.emit("player:bail"),t.fsm.set("air");return}t.pose=e.pose,t.rideSpeed=f,d.ground&&f>.5&&B.emit("player:rolling",f)}},locked:{enter(){this.vel.x=0,this.vel.z=0},update(s){let t=this;t.lockTimer-=s,t.pose=t.lockPose==="dialogue"?"idle":t.lockPose,t.updateTrick(s),t.vel.y-=Cs*s,t.physics(s,{grounded:!0}),t.lockTimer<=0&&t.lockPose!=="dialogue"&&t.fsm.set(t.ride?"ride":"ground")}}};function Uu(s,t,e){return s<t?Math.min(t,s+e):Math.max(t,s-e)}var ir=["fp","tp","shoulderR","shoulderL"],Px={tp:{dist:4.4,side:0,up:.45},shoulderR:{dist:2.6,side:.75,up:.25},shoulderL:{dist:2.6,side:-.75,up:.25}},Io=class{constructor(t,e){this.cam=t,this.settings=e,this.mode=e.camera||"fp",this.bob=0,this.bobAmt=0,this.roll=0,this.fovKick=0,this.landDip=0,this.shake=0,this.curDist=4,this.eyeY=1.62,this._v=new C,this._e=new C}cycle(){let t=ir.indexOf(this.mode);return this.mode=ir[(t+1)%ir.length],this.settings.camera=this.mode,this.mode}addShake(t){this.shake=Math.min(1,this.shake+t)}update(t,e,i){let n=this.mode==="fp",r=e.fsm.is("ground")&&e.speed>.6;this.bobAmt=Xe(this.bobAmt,r?Math.min(1,e.speed/7):0,8,t),this.bob+=t*(6+e.speed*.9);let o=this.settings.headBob??.5,a=Math.abs(Math.sin(this.bob))*.06*this.bobAmt*o,l=Math.cos(this.bob)*.03*this.bobAmt*o;e.landImpact>0&&(this.landDip=Math.max(this.landDip,e.landImpact*.35),e.landImpact=0),this.landDip=Xe(this.landDip,0,9,t);let c=0;e.fsm.is("wallrun")?c=e.wallSide*.18:e.fsm.is("swing")&&(c=Wt(-e.vel.dot(e.right())*.006,-.12,.12)),this.roll=Xe(this.roll,c,7,t);let h=e.vel.length();this.fovKick=Xe(this.fovKick,Wt((h-8)*.7,0,16),4,t);let u=(this.settings.fov||90)+this.fovKick-(e.game.combat&&e.game.combat.aiming?22:0),f=Wt(2*Math.atan(Math.tan(u*Math.PI/360)/this.cam.aspect)*180/Math.PI,40,100);Math.abs(this.cam.fov-f)>.05&&(this.cam.fov=f,this.cam.updateProjectionMatrix()),this.eyeY=Xe(this.eyeY,e.eyeHeight,16,t);let d=this.shake;this.shake=Xe(this.shake,0,6,t);let x=(Math.random()-.5)*d*.15,g=(Math.random()-.5)*d*.15,m=this._e.set(e.pos.x+l*Math.cos(e.yaw),e.pos.y+this.eyeY-a-this.landDip,e.pos.z-l*Math.sin(e.yaw));if(this.cam.rotation.order="YXZ",this.cam.rotation.set(e.pitch+g,e.yaw+x,this.roll),n){this.cam.position.copy(m);return}let p=Px[this.mode],v=this._v.set(0,0,1).applyEuler(this.cam.rotation),_=new C(1,0,0).applyEuler(this.cam.rotation),y=m.clone();y.y+=p.up;let S=y.clone().addScaledVector(_,p.side).addScaledVector(v,p.dist).clone().sub(y),E=S.length();S.divideScalar(E);let A=i.collision.raycast(y.x,y.y,y.z,S.x,S.y,S.z,E,b=>!b.trigger&&!b.seeThrough),M=A?Math.max(.4,A.t-.3):E;this.curDist=M<this.curDist?M:Xe(this.curDist,M,6,t),this.cam.position.copy(y).addScaledVector(S,this.curDist)}};var mc={},Lx=new C,Nx=new C;function zu(s,t){let e=s+t;if(mc[e])return mc[e];let i=document.createElement("canvas");i.width=i.height=64;let n=i.getContext("2d");n.fillStyle=t,n.strokeStyle="#1d1712",n.lineWidth=6,n.beginPath(),n.moveTo(32,4),n.lineTo(60,32),n.lineTo(32,60),n.lineTo(4,32),n.closePath(),n.fill(),n.stroke(),n.font="bold 40px Bangers, Impact, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#1d1712",n.fillText(s,32,35);let r=new gn(i);return r.magFilter=Ae,mc[e]=r,r}var Fu=0,gc=class{constructor(t,e,i,n={}){this.mgr=t,this.game=t.game,this.type=e,this.id=n.id||"npc"+Fu++,this.pos=i.clone(),this.vel=new C,this.yaw=n.yaw??0,this.hp=e.hp??3,this.maxHp=this.hp,this.hostile=!!e.hostile,this.role=n.role||e.role||(this.hostile?"enemy":"civilian"),this.home=i.clone(),this.patrol=n.patrol||null,this.patrolIdx=0,this.tag=n.tag||null,this.suspicion=0,this.aware=!1,this.bound=0,this.stun=0,this.attackT=0,this.cool=0,this.investigate=null,this.talk=n.talk||null,this.name=n.name||e.name,this.portrait=n.portrait||e.portrait,this.ch=Fn(e.palette||{},{simple:!0,scale:e.scale||1}),this.root=this.ch.root,this.root.position.copy(this.pos),t.group.add(this.root),this.icon=new ws(new kn({map:zu("?","#f2c14e"),depthTest:!1,transparent:!0})),this.icon.scale.set(.7,.7,.7),this.icon.position.y=2.4*(e.scale||1),this.icon.visible=!1,this.icon.renderOrder=20,this.root.add(this.icon),this.marker=null,this.pose="idle",this.hw=.3,this.h=1.8*(e.scale||1),this.R=ai(Fu*977),this.windup=0,this.fsm=new _n(this,kx,n.state||(this.hostile&&this.patrol?"patrol":"idle")),this.flash=0,this.alive=!0,this.downTime=0,this.senseVisible=!1}get downed(){return this.fsm.is("down","bound")}setIcon(t){if(t===this._icon)return;if(this._icon=t,!t){this.icon.visible=!1;return}let e={sus:["?","#f2c14e"],alert:["!","#ff3b3b"],talk:["\u2026","#9fe0d8"],target:["\u2605","#ff2fb3"],hostage:["!","#5fd0ff"]}[t];this.icon.material.map=zu(e[0],e[1]),this.icon.material.needsUpdate=!0,this.icon.visible=!0}dist(t){return Math.hypot(t.x-this.pos.x,t.z-this.pos.z)}faceTo(t,e,i=8){let n=Math.atan2(t.x-this.pos.x,t.z-this.pos.z);this.yaw=On(this.yaw,n,i,e)}moveTo(t,e,i,n=.8){let r=t.x-this.pos.x,o=t.z-this.pos.z,a=Math.hypot(r,o);return a<n?(this.vel.x*=.5,this.vel.z*=.5,!0):(this.vel.x=r/a*e,this.vel.z=o/a*e,this.faceTo(t,i),!1)}canSee(t,e=1.6){let i=this.type.vision||{range:22,fov:70},n=t.x-this.pos.x,r=t.z-this.pos.z,o=t.y-this.pos.y,a=Math.hypot(n,r);if(a>i.range*(o>4?.7:1))return 0;let l=Math.sin(this.yaw),c=Math.cos(this.yaw),h=(n*l+r*c)/(a||1),u=i.fov*Math.PI/180/2;if(a>2.5&&h<Math.cos(u)||o>3.5&&Math.atan2(o,a)>.6)return 0;let f=Lx.set(this.pos.x,this.pos.y+e,this.pos.z),d=Nx.set(t.x,t.y+1,t.z);return this.game.world.collision.lineOfSight(f,d)?1-a/i.range:0}hit(t,e,i="melee"){if(!(!this.alive||this.downed)){if(this.hp-=t,this.flash=.15,!this.aware&&this.hostile&&(this.aware=!0,this.alertAllies()),this.hp<=0){this.knockout(i);return}if(this.stun=Math.max(this.stun,i==="pod"?2.5:.45),e){let n=this.pos.x-e.x,r=this.pos.z-e.z,o=Math.hypot(n,r)||1;this.vel.x=n/o*4,this.vel.z=r/o*4,this.vel.y=2}this.fsm.set("stunned")}}bind(t=1){!this.alive||this.fsm.is("down")||(this.bound+=t,this.flash=.1,!this.aware&&this.hostile&&(this.aware=!0,this.alertAllies()),this.bound>=(this.type.bindHits??2)?(this.fsm.set("bound"),B.emit("npc:defeated",{npc:this,how:"bound"})):(this.stun=Math.max(this.stun,1.2),this.fsm.set("stunned")))}knockout(t="melee"){this.hp=0,this.fsm.set("down"),B.emit("npc:defeated",{npc:this,how:t})}takedown(){this.knockout("takedown"),B.emit("npc:takedown",{npc:this})}alertAllies(){for(let t of this.mgr.list)t!==this&&t.hostile&&t.alive&&!t.downed&&t.dist(this.pos)<22&&(t.aware=!0,t.fsm.is("idle","patrol","suspicious","investigate","search")&&t.fsm.set("combat"));B.emit("npc:alert",{npc:this})}hear(t){!this.hostile||this.downed||this.fsm.is("combat","stunned")||this.dist(t.pos)>t.radius*(this.type.hearing??1)||(this.investigate=t.pos.clone(),this.fsm.set("investigate"))}update(t,e){if(!this.alive)return;this.fsm.update(t),this.stun>0&&(this.stun-=t),this.cool-=t,this.vel.y-=22*t,So(this.game.world.collision,this.pos,this.vel,t,this.hw,this.h,{grounded:!0,stepH:.5}),this.pos.y<-20&&(this.pos.copy(this.home),this.vel.set(0,0,0)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;let i=Math.hypot(this.vel.x,this.vel.z);Bn(this.ch,this.pose==="auto"||!this.pose?i>3.5?"run":i>.4?"walk":"idle":this.pose,i,t),this.flash>0?(this.flash-=t,this.ch.mat.uniforms.tintAmt.value=.7,this.ch.mat.uniforms.tint.value.set("#ffffff")):this.ch.mat.uniforms.tintAmt.value=this.senseVisible?.35:0,this.senseVisible&&this.flash<=0&&this.ch.mat.uniforms.tint.value.set(this.hostile?"#ff5050":"#5fd0ff")}dispose(){this.mgr.group.remove(this.root),this.alive=!1}},kx={idle:{enter(){this.pose="auto",this.vel.x=this.vel.z=0,this.setIcon(this.talk?"talk":this.tag==="target"?"target":null),this.lookT=0},update(s){this.lookT-=s,this.lookT<=0&&(this.lookT=this.R.range(2,5),this.lookYaw=this.yaw+this.R.range(-1.2,1.2)),this.lookYaw!=null&&(this.yaw=On(this.yaw,this.lookYaw,2,s)),this.vel.x*=.8,this.vel.z*=.8,this.hostile?Is.call(this,s):this.role==="civilian"&&this.mgr.panicAt&&this.dist(this.mgr.panicAt)<18&&this.fsm.set("flee")}},patrol:{enter(){this.pose="auto",this.setIcon(null)},update(s){let t=this.patrol;if(!t||!t.length){this.fsm.set("idle");return}let e=t[this.patrolIdx%t.length];this.moveTo(e,1.6,s,.6)&&(this.patrolIdx++,this.waitT=1.5),Is.call(this,s)}},suspicious:{enter(){this.setIcon("sus"),B.emit("npc:suspicious",{npc:this})},update(s){let t=this.game.player;this.vel.x*=.85,this.vel.z*=.85,this.faceTo(t.pos,s,4),Is.call(this,s),this.suspicion<=.05&&this.fsm.set(this.patrol?"patrol":"idle")}},investigate:{enter(){this.setIcon("sus"),this.invT=0},update(s){if(this.invT+=s,!this.investigate){this.fsm.set("search");return}if(this.moveTo(this.investigate,2.4,s,1)||this.invT>9){this.fsm.set("search");return}Is.call(this,s)}},search:{enter(){this.setIcon("sus"),this.searchT=0},update(s){this.searchT+=s,this.vel.x*=.85,this.vel.z*=.85,this.yaw+=Math.sin(this.searchT*1.3)*s*1.5,Is.call(this,s),this.searchT>5&&(this.aware=!1,this.suspicion=0,this.home&&this.fsm.set(this.patrol?"patrol":"return"))}},return:{enter(){this.setIcon(null)},update(s){this.moveTo(this.home,1.6,s,.8)&&this.fsm.set("idle"),Is.call(this,s)}},combat:{enter(){this.setIcon("alert"),this.aware=!0,this.lostT=0,this.attackT=0,this.windup=0,B.emit("npc:combat",{npc:this})},update(s){let t=this.game.player,e=this.type,i=this.dist(t.pos),n=this.canSee(t.pos)>0||i<3;if(this.lostT=n?0:this.lostT+s,this.lostT>6){this.investigate=t.pos.clone(),this.fsm.set("search");return}this.faceTo(t.pos,s,10);let r=e.weapon==="gun",o=r?13:1.5;if(this.windup>0){this.windup-=s,this.vel.x*=.7,this.vel.z*=.7,this.pose=r?"aim":this.id.length%2?"jab":"hook",this._k=(this._k||0)+1,this.windup<=0&&(r?this.mgr.game.combat.enemyShoot(this,t):i<2.3&&Math.abs(t.pos.y-this.pos.y)<1.6&&this.mgr.game.combat.enemyMelee(this,t),this.cool=r?this.R.range(1.6,2.6):this.R.range(1,1.8));return}if(this.pose="auto",r){if(i>o+4)this.moveTo(t.pos,3.2,s,o);else if(i<o-5){let a=this.pos.x-t.pos.x,l=this.pos.z-t.pos.z,c=Math.hypot(a,l)||1;this.vel.x=a/c*2.5,this.vel.z=l/c*2.5}else this.vel.x*=.8,this.vel.z*=.8;this.cool<=0&&n&&i<34&&this.mgr.attackToken(this)&&(this.windup=.65,B.emit("npc:telegraph",{npc:this,kind:"shot"}))}else i>o?this.moveTo(t.pos,e.speed||4.6,s,o):(this.vel.x*=.6,this.vel.z*=.6),this.cool<=0&&i<2.6&&this.mgr.attackToken(this)&&(this.windup=.5,B.emit("npc:telegraph",{npc:this,kind:"melee"}))}},stunned:{enter(){this.pose="stunned",this.setIcon(null)},update(s){this.vel.x*=.9,this.vel.z*=.9,this.stun<=0&&this.fsm.set(this.hostile?"combat":"flee")}},bound:{enter(){this.pose="webbed",this.setIcon(null),this.vel.set(0,0,0),this.ch.mat.uniforms.tint.value.set("#e8f6f0")},update(){this.ch.mat.uniforms.tintAmt.value=.45,this.ch.mat.uniforms.tint.value.set("#e8f6f0"),this.vel.x=0,this.vel.z=0}},down:{enter(){this.pose="down",this.setIcon(null),this.vel.x=this.vel.z=0},update(){this.vel.x=0,this.vel.z=0}},flee:{enter(){this.pose="auto",this.setIcon(null),this.fleeT=0},update(s){this.fleeT+=s;let t=this.mgr.panicAt||this.game.player.pos,e=this.pos.x-t.x,i=this.pos.z-t.z,n=Math.hypot(e,i)||1;this.vel.x=e/n*5,this.vel.z=i/n*5,this.yaw=Math.atan2(e,i),this.fleeT>6&&this.fsm.set("idle")}},cower:{enter(){this.pose="cower",this.setIcon(this.role==="hostage"?"hostage":this.talk?"talk":null)},update(){this.vel.x=this.vel.z=0}},follow:{enter(){this.pose="auto"},update(s){let t=this.game.player.pos;this.dist(t)>3?this.moveTo(t,this.dist(t)>8?5:2.4,s,2.5):(this.vel.x*=.8,this.vel.z*=.8,this.faceTo(t,s,3))}},cheer:{enter(){this.pose="cheer",this.setIcon(this.talk?"talk":null)},update(s){this.vel.x=this.vel.z=0,this.faceTo(this.game.player.pos,s,3)}}};function Is(s){let t=this.game.player;if(this.game.stealthOff)return;let e=this.canSee(t.pos);if(e>0){let i=.6+e*2.4;t.crouch&&(i*=.45),i*=1-(t.stats&&t.stats.quiet||0)*.6,t.pos.y-this.pos.y>3&&(i*=.35),t.fsm.is("swing","zip")&&(i*=1.5),this.suspicion=Wt(this.suspicion+i*s*(this.type.alertness??1),0,1),this.suspicion>.3&&this.fsm.is("idle","patrol","return")&&this.fsm.set("suspicious"),this.suspicion>=1&&(this.fsm.set("combat"),this.alertAllies())}else this.suspicion=Wt(this.suspicion-s*.25,0,1);if(!this._bodyCheckT||(this._bodyCheckT-=s)<=0){this._bodyCheckT=.5;for(let i of this.mgr.list)i!==this&&i.hostile&&i.downed&&!i.discovered&&i.dist(this.pos)<14&&this.canSee(i.pos,1.6)>0&&(i.discovered=!0,this.investigate=i.pos.clone(),this.suspicion=Math.max(this.suspicion,.7),this.fsm.set("investigate"),B.emit("npc:bodyfound",{npc:this}))}}var Po=class{constructor(t){this.game=t,this.list=[],this.group=new Ke,this.tokens=0,this.tokenHolders=new Set,this.panicAt=null}attach(t){t.add(this.group)}spawn(t,e,i={}){let n=this.game.registry.get("npcTypes",t)||this.game.registry.get("npcTypes","thug"),r=new gc(this,n,e,i);return this.list.push(r),r}remove(t){t.dispose();let e=this.list.indexOf(t);e>=0&&this.list.splice(e,1)}clear(){for(let t of this.list)t.dispose();this.list.length=0}byTag(t){return this.list.filter(e=>e.tag===t)}byId(t){return this.list.find(e=>e.id===t)}attackToken(t){for(let e of this.tokenHolders)(!e.alive||e.downed||!e.fsm.is("combat")||e.windup<=0)&&this.tokenHolders.delete(e);return this.tokenHolders.size>=2?!1:(this.tokenHolders.add(t),!0)}update(t,e){let i=this.game.renderer.camera.position;for(let n=this.list.length-1;n>=0;n--){let r=this.list[n],o=r.dist(i)>140;r.root.visible=!o,!(o&&!r.important)&&r.update(t,e)}this.panicT>0&&(this.panicT-=t,this.panicT<=0&&(this.panicAt=null))}onNoise(t){for(let e of this.list)e.hear(t)}panic(t,e=6){this.panicAt=t.clone(),this.panicT=e,this.game.world&&(this.game.world.panic={x:t.x,z:t.z}),setTimeout(()=>{this.game.world&&(this.game.world.panic=null)},e*1e3)}hostilesNear(t,e){return this.list.filter(i=>i.hostile&&i.alive&&!i.downed&&i.dist(t)<e)}};var Dx=new C,Lo=class{constructor(t,e,i){this.game=t,this.def=e,this.arena=i.clone(),this.hp=e.hp||8,this.maxHp=this.hp,this.alive=!0,this.vulnerable=!1,this.hitsThisStagger=0,this.pos=i.clone().add(new C(0,16,-20)),this.vel=new C,this.yaw=0,this.orbitA=0,this.ch=Fn(e.palette,{scale:1.1}),this.root=this.ch.root;let n=new jt;n.tri([0,0,1.4],[-2.4,0,-.9],[2.4,0,-.9],[0,1,0],L(e.palette.secondary),[0,0],[0,0],[0,0],[0,0,0,0]),n.tri([0,-.02,1.4],[2.4,-.02,-.9],[-2.4,-.02,-.9],[0,-1,0],L(e.palette.primary),[0,0],[0,0],[0,0],[0,0,0,0]),n.cbox(0,-.15,-.6,.6,.3,.9,L("#333")),n.cbox(0,-.15,-1.1,.4,.4,.2,L("#ff8a2a")),this.kite=new zt(n.build(),Me({atlas:!1})),this.kite.position.y=2.25,this.root.add(this.kite),t.world.dynamic.add(this.root),this.fsm=new _n(this,Ux,"intro"),this.bombT=2,this.summoned=0}get phase(){return this.hp>this.maxHp*.6?1:this.hp>this.maxHp*.25?2:3}tethered(t=1){this.fsm.is("fly","dive","recover","escape")&&(this.game.audio.play("zip"),B.emit("boss:tethered"),this.fsm.set("yanked"))}hit(t){if(this.vulnerable){if(this.hp-=t,this.hitsThisStagger++,this.ch.mat.uniforms.tintAmt.value=.8,setTimeout(()=>this.ch.mat.uniforms.tintAmt.value=0,120),this.game.audio.play("punch"),B.emit("boss:hit",{hp:this.hp}),this.hp<=0){this.fsm.set("defeated");return}this.hitsThisStagger>=3&&this.fsm.set("escape")}}update(t){if(!this.alive)return;this.fsm.update(t),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;let e=this.fsm.is("fly","dive","escape","intro","recover");this.kite.visible=e,Bn(this.ch,this.pose||"glide",2,t)}faceTo(t,e){this.yaw=On(this.yaw,Math.atan2(t.x-this.pos.x,t.z-this.pos.z),6,e)}dispose(){this.game.world.dynamic.remove(this.root),this.alive=!1}},Ux={intro:{enter(){this.pose="glide",this.game.audio.play("laugh")},update(s){this.pos.y+=Math.sin(this.fsm.time*3)*s,this.faceTo(this.game.player.pos,s),this.fsm.time>2.5&&this.fsm.set("fly")}},fly:{enter(){this.pose="glide",this.vulnerable=!1,this.flyT=0},update(s){let t=this.game.player;this.flyT+=s;let e=this.phase,i=22+e*2,n=13+Math.sin(this.flyT*.7)*4;this.orbitA+=s*(.35+e*.08);let r=this.away?Math.atan2(this.away.z,this.away.x)+Math.sin(this.orbitA)*1.2:this.orbitA,o=Dx.set(this.arena.x+Math.cos(r)*i,this.arena.y+n,this.arena.z+Math.sin(r)*i);if(this.pos.lerp(o,1-Math.exp(-2*s)),this.faceTo(t.pos,s),this.bombT-=s,this.bombT<=0){this.bombT=e===1?2.6:e===2?2:1.6;let a=e===1?1:2;for(let l=0;l<a;l++){let c=t.pos.clone().addScaledVector(t.vel,.9);c.x+=(Math.random()-.5)*4*l,c.z+=(Math.random()-.5)*4*l;let h=this.game.world.collision.raycast(c.x,c.y+3,c.z,0,-1,0,30);h&&(c.y=h.point[1]),this.game.combat.bomb(this.pos.clone().setY(this.pos.y+1),c,{time:1.4,color:"#a24bd6"})}Math.random()<.3&&this.game.audio.play("laugh",{vol:.6}),B.emit("boss:bomb")}e>=2&&this.summoned<e-1&&(this.summoned++,B.emit("boss:summon",{count:2+this.summoned})),e===3&&this.flyT>5&&this.fsm.set("dive")}},dive:{enter(){this.diveFrom=this.pos.clone(),this.diveTo=this.game.player.pos.clone(),this.diveTo.y+=1,this.pose="glide",this.game.combat.dangerT=1,B.emit("combat:danger",{boss:!0}),this.game.fx.marker(this.game.player.pos,.9,2.5),this.game.audio.play("alert")},update(s){let t=this.fsm.time;if(t<.8){this.faceTo(this.diveTo,s),this.pos.y+=s*2;return}let e=Math.min(1,(t-.8)/.5);this.pos.lerpVectors(this.diveFrom,this.diveTo,e);let i=this.game.player;e>.6&&this.pos.distanceTo(i.pos.clone().setY(i.pos.y+1))<2.4&&!this.hitDone&&(this.hitDone=!0,this.game.combat.iframes<=0&&(i.hurt(22,"boss"),i.vel.y=8,i.fsm.set("air"),this.game.rig.addShake(.7),this.game.audio.play("hurt"))),e>=1&&(this.hitDone=!1,this.fsm.set("recover"))}},recover:{enter(){this.pose="stunned"},update(s){this.pos.y+=s*1.5,this.fsm.time>1.6&&this.fsm.set("fly")}},yanked:{enter(){this.pose="air",this.from=this.pos.clone();let s=this.game.player,t=this.game.world.roofAt(s.pos.x,s.pos.z);this.to=s.pos.clone().add(s.fwd().multiplyScalar(4)),this.to.y=t?t.y:s.pos.y;let e=this.game.world.collision.raycast(this.to.x,this.to.y+4,this.to.z,0,-1,0,40);e&&Math.abs(e.point[1]-s.pos.y)<1.5?this.to.y=e.point[1]:(this.to.copy(s.pos).add(s.fwd().multiplyScalar(1.8)),this.to.y=s.pos.y),this.game.combat.word("YANK!",this.pos)},update(s){let t=Math.min(1,this.fsm.time/.6);this.pos.lerpVectors(this.from,this.to,t),this.pos.y+=Math.sin(t*Math.PI)*3,t>=1&&(this.game.audio.play("land"),this.game.rig.addShake(.4),this.fsm.set("dazed"))}},dazed:{enter(){this.vulnerable=!0,this.hitsThisStagger=0,this.pose="stunned",B.emit("boss:vulnerable")},exit(){this.vulnerable=!1},update(s){this.faceTo(this.game.player.pos,s),this.fsm.time>4.5&&this.fsm.set("escape")}},escape:{enter(){this.pose="glide",this.game.audio.play("laugh",{vol:.8}),this.from=this.pos.clone()},update(s){this.pos.y+=s*9,this.fsm.time>1.4&&this.fsm.set("fly")}},defeated:{enter(){this.pose="down",this.vulnerable=!1,this.game.audio.play("explosion"),this.game.fx.burst(this.pos,"#a24bd6",30),B.emit("boss:defeated",{boss:this})},update(){}}};var Ps=class{constructor(t,e,i=16){this.factory=t,this.reset=e,this.free=[],this.active=[];for(let n=0;n<i;n++)this.free.push(t())}get(){let t=this.free.length?this.free.pop():this.factory();return this.active.push(t),t}release(t){let e=this.active.indexOf(t);e>=0&&(this.active[e]=this.active[this.active.length-1],this.active.pop()),this.reset&&this.reset(t),this.free.push(t)}each(t){for(let e=this.active.length-1;e>=0;e--)t(this.active[e],e)}releaseAll(){for(;this.active.length;)this.release(this.active[this.active.length-1])}};var xc=12,No=class{constructor(t,e=16183775,i=.05){this.w=i;let n=xc*2*6;this.pos=new Float32Array(n*3);let r=new Ne;r.setAttribute("position",new Ge(this.pos,3).setUsage(ao)),this.mesh=new zt(r,new ze({color:e,side:Ze})),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh);let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d");a.translate(32,32),a.fillStyle="#f6f1df",a.strokeStyle="#1d1712",a.lineWidth=3,a.beginPath();for(let l=0;l<16;l++){let c=l%2?11:28,h=l/16*Math.PI*2;a.lineTo(Math.cos(h)*c,Math.sin(h)*c)}a.closePath(),a.fill(),a.stroke(),this.splat=new ws(new kn({map:new gn(o),transparent:!0,depthTest:!0})),this.splat.scale.setScalar(.9),this.splat.visible=!1,t.add(this.splat),this._a=new C,this._d=new C,this._s1=new C,this._s2=new C,this._p=new C,this._q=new C}hide(){this.mesh.visible=!1,this.splat.visible=!1}update(t,e,i,n,r,o){this.mesh.visible=!0;let a=Math.min(1,i/.08),l=this._d.subVectors(e,t),c=l.length();if(c<.01)return;l.divideScalar(c);let h=Math.abs(l.y)>.9?this._p.set(1,0,0):this._p.set(0,1,0),u=this._s1.crossVectors(l,h).normalize(),f=this._s2.crossVectors(l,u).normalize(),d=Math.exp(-i*7)*.5*Math.min(1,c/10),x=Math.max(0,n)*.35,g=this.pos,m=0,p=this.w,v=(y,w)=>{let S=y/xc*a,E=Math.sin(Math.PI*Math.min(1,S/Math.max(.001,a)));return w.copy(t).addScaledVector(l,c*S),w.addScaledVector(u,Math.sin(S*9-r*38)*d*E),w.y-=x*E*4*S*(1-S)*4,w},_=v(0,this._a);for(let y=1;y<=xc;y++){let w=v(y,this._q);for(let S of[u,f]){let E=_.x-S.x*p,A=_.y-S.y*p,M=_.z-S.z*p,b=_.x+S.x*p,I=_.y+S.y*p,O=_.z+S.z*p,z=w.x+S.x*p,X=w.y+S.y*p,Q=w.z+S.z*p,q=w.x-S.x*p,nt=w.y-S.y*p,W=w.z-S.z*p;g[m++]=E,g[m++]=A,g[m++]=M,g[m++]=b,g[m++]=I,g[m++]=O,g[m++]=z,g[m++]=X,g[m++]=Q,g[m++]=E,g[m++]=A,g[m++]=M,g[m++]=z,g[m++]=X,g[m++]=Q,g[m++]=q,g[m++]=nt,g[m++]=W}_.copy(w)}this.mesh.geometry.attributes.position.needsUpdate=!0,a>=1?(this.splat.visible=!0,this.splat.position.copy(e),this.splat.material.opacity=Math.max(.35,1-(i-.08)*2),this.splat.scale.setScalar(.6+Math.min(.5,(i-.08)*3))):this.splat.visible=!1}};var yc=["jab","cross","hook","jab","uppercut","spinkick"],Ox={punch:["POW!","WHAM!","BIFF!","SOCK!"],kick:["KRAK!","THUD!"],takedown:["BONK!","KAYO!"],bind:["SNAP!","TWANG!"],pod:["SPLUT!","GLOMP!"],line:["ZZIP!"],boom:["KA-BOOM!","BLAM!"],shot:["BLAM!","PEW!"]},Do=class{constructor(t){this.game=t,this.scene=null,this.gadgetIdx=0,this.ammo=12,this.maxAmmo=12,this.aiming=!1,this.combo=0,this.comboT=0,this.iframes=0,this.dangerT=0,this.senseT=0,this.senseCool=0,this.reloadT=0,this.triT=0,this.interactables=[],this.prompt=null,this.lastBossHit=0,this.targets=[];let e=new Zi(1,1,1);e.translate(0,0,.5);let i=new ze({color:16183775});this.ropePool=new Ps(()=>{let o=new zt(e,i);return o.frustumCulled=!1,o.visible=!1,o},o=>{o.visible=!1},6);let n=new jt;n.cbox(0,0,0,.22,.22,.22,L("#ffffff"));let r=n.build();this.projMat=Me({atlas:!1,emissive:1}),this.projPool=new Ps(()=>{let o=new zt(r,Me({atlas:!1,emissive:1}));return o.visible=!1,{mesh:o,vel:new C,prev:new C,life:0,kind:"",owner:null,gravity:0,rope:null}},o=>{o.mesh.visible=!1,o.rope&&(this.ropePool.release(o.rope),o.rope=null)},24),this.wordPool=new Ps(()=>{let o=document.createElement("div");return o.className="pow",document.getElementById("fx").appendChild(o),{el:o,pos:new C,t:0}},o=>{o.el.style.display="none"},10),this.swingRope=null,this.handPos=new C,this._v=new C,this._v2=new C,this.lingerLines=[]}attach(t){this.scene=t,this.rope=new No(t),this.traps=[];for(let e of[...this.ropePool.free,...this.ropePool.active])t.add(e);for(let e of[...this.projPool.free,...this.projPool.active])t.add(e.mesh)}reset(){this.projPool.releaseAll(),this.ropePool.releaseAll(),this.swingRope=null,this.lingerLines.length=0,this.wordPool.releaseAll(),this.interactables.length=0,this.targets.length=0;for(let t of this.traps||[])this.scene.remove(t.mesh);this.traps=[],this.rope&&this.rope.hide()}get gadgets(){return this.game.save.data.inventory.gadgets.map(t=>this.game.registry.get("gadgets",t)).filter(Boolean)}get gadget(){let t=this.gadgets;return t[this.gadgetIdx%Math.max(1,t.length)]}addInteractable(t){return this.interactables.push(t),t}removeInteractable(t){let e=this.interactables.indexOf(t);e>=0&&this.interactables.splice(e,1)}word(t,e){let i=Ox[t]||[t],n=this.wordPool.get();n.el.textContent=i[Math.random()*i.length|0],n.el.style.display="block",n.pos.copy(e),n.pos.y+=1.6,n.t=0,n.el.style.setProperty("--rot",(Math.random()*24-12).toFixed(1)+"deg"),n.el.dataset.kind=t}update(t){let e=this.game,i=e.player,n=e.audio;this.iframes-=t,this.dangerT-=t,this.comboT-=t,this.comboT<=0&&(this.combo=0),this.senseT-=t,this.senseCool-=t;let r=e.state==="play"&&!i.fsm.is("locked");r&&$.pressed("l3")&&this.senseCool<=0&&i.abilities.gadgets!==!1&&(this.senseT=this.senseMax=6+(i.stats.sense||0),this.senseCool=9,n.play("sense"),B.emit("combat:sense"));let o=this.senseT>0;for(let h of e.npcs.list)h.senseVisible=o&&h.hostile&&h.alive&&!h.downed&&h.dist(i.pos)<70+(i.stats.sense||0)*10;if(e.renderer.postMat.uniforms.senseAmt.value=Wt(this.senseT>(this.senseMax||6)-.4?((this.senseMax||6)-this.senseT)*2.5:this.senseT/1.5,0,1)*.8,r&&this.dangerT>0&&$.pressed("circle")&&!i.fsm.is("swing","climb","hang")){$.consume("circle"),this.iframes=.5,this.dangerT=0;let h=i.right(),u=Math.random()<.5?-1:1;i.vel.x=h.x*u*9,i.vel.z=h.z*u*9,i.vel.y=3,n.play("whiff"),B.emit("combat:dodge")}if(this.aiming=r&&$.down("l2")&&i.abilities.gadgets!==!1&&!i.aimZipPoint,r&&i.abilities.gadgets!==!1&&($.down("triangle")&&(this.triT+=t,this.triT>.45&&!this._invOpened&&(this._invOpened=!0,B.emit("ui:inventory"))),$.released("triangle")&&(this._invOpened||this.cycleGadget(1),this._invOpened=!1,this.triT=0),$.pressed("right")&&this.cycleGadget(1),$.pressed("left")&&this.cycleGadget(-1),$.pressed("r1")&&this.fireGadget()),this.updatePrompt(),r&&$.pressed("square")&&this.square(),r&&$.down("square")&&!this.prompt&&this.ammo<this.maxAmmo){if(this.reloadT+=t,this.reloadT>.8){this.reloadT=0;let h=e.save.data,u=this.maxAmmo-this.ammo,f=Math.min(u,Math.floor(h.fluid));f<=0?(e.hud.toast("Out of line fluid! Refill at home or grab a supply cache.",2.2),n.play("ui_back")):(this.ammo+=f,h.fluid-=f,n.play("ui_ok"),B.emit("combat:reload"),this.word("RELOAD!",i.pos))}}else this.reloadT=0;this.updateTraps(t),this.projPool.each(h=>this.updateProjectile(h,t)),this.updateRopes(t);let a=e.renderer.camera,l=window.innerWidth,c=window.innerHeight;this.wordPool.each(h=>{if(h.t+=t,h.t>.9){this.wordPool.release(h);return}let u=this._v.copy(h.pos);if(u.y+=h.t*.8,u.project(a),u.z>1){h.el.style.display="none";return}h.el.style.display="block",h.el.style.transform=`translate(${((u.x+1)/2*l).toFixed(0)}px, ${((1-u.y)/2*c).toFixed(0)}px) translate(-50%,-50%) rotate(var(--rot)) scale(${(1+Math.min(h.t*6,1)*.3-h.t*.3).toFixed(2)})`,h.el.style.opacity=h.t>.6?(1-(h.t-.6)/.3).toFixed(2):"1"})}cycleGadget(t){let e=this.gadgets.length;e&&(this.gadgetIdx=(this.gadgetIdx+t+e)%e,this.game.audio.play("ui_click"),B.emit("combat:gadget",this.gadget))}updatePrompt(){let t=this.game,e=t.player,i=null,n=1e9;for(let r of this.interactables){if(r.enabled===!1)continue;let o=r.pos.distanceTo(e.pos);o<(r.radius||2.2)&&o<n&&(n=o,i={kind:"use",label:r.label||"USE",it:r})}for(let r of t.npcs.list){if(r.hostile||!r.alive||!r.talk)continue;let o=r.dist(e.pos);o<2.8&&Math.abs(r.pos.y-e.pos.y)<2&&o<n&&(n=o,i={kind:"talk",label:"TALK",npc:r})}if(!i){let r=this.findTakedown();r&&(i={kind:"takedown",label:r.perch?"PERCH K.O.":"TAKEDOWN",npc:r.npc,perch:r.perch})}this.prompt=i,t.overlay.setHint("square",i?i.label:t.npcs.hostilesNear(e.pos,7).length||t.boss&&t.boss.vulnerable?"STRIKE":"ACT")}findTakedown(){let t=this.game.player,e=null,i=1e9,n=t.fwd();for(let r of this.game.npcs.list){if(!r.hostile||!r.alive||r.downed||r.fsm.is("combat"))continue;let o=r.pos.x-t.pos.x,a=r.pos.z-t.pos.z,l=t.pos.y-r.pos.y,c=Math.hypot(o,a),h=(o*n.x+a*n.z)/(c||1),u=Math.sin(r.yaw),f=Math.cos(r.yaw),d=((t.pos.x-r.pos.x)*u+(t.pos.z-r.pos.z)*f)/(c||1)<.1;c<2.4&&Math.abs(l)<1.5&&d&&c<i?(e={npc:r,perch:!1},i=c):l>2.5&&l<18&&c<10&&h>.55&&c<i&&(e={npc:r,perch:!0},i=c)}return e}square(){let t=this.game,e=t.player,i=this.prompt;if(i&&i.kind==="use"){$.consume("square"),i.it.onUse&&i.it.onUse(i.it),t.audio.play("ui_click");return}if(i&&i.kind==="talk"){$.consume("square"),B.emit("npc:talk",{npc:i.npc});return}if(i&&i.kind==="takedown"){this.takedown(i.npc,i.perch);return}if(t.boss&&t.boss.vulnerable&&t.boss.pos.distanceTo(e.pos)<4){this.punchFX(t.boss.pos),t.boss.hit(1);return}let n=e.lookDir(this._v),r=null,o=-1e9;for(let h of t.npcs.list){if(!h.hostile||!h.alive||h.downed)continue;let u=h.pos.x-e.pos.x,f=h.pos.z-e.pos.z,d=h.pos.y-e.pos.y,x=Math.hypot(u,f);if(x>7||Math.abs(d)>2.5)continue;let g=(u*n.x+f*n.z)/(x||1);if(x>2&&g<.35)continue;let m=g*3-x;m>o&&(o=m,r=h)}if(!r){t.audio.play("whiff"),e.lock(.26,yc[this.combo%2]),this.combo++,this.comboT=.8,B.emit("combat:whiff");return}let a=r.dist(e.pos);if(a>1.6){let h=r.pos.x-e.pos.x,u=r.pos.z-e.pos.z;e.vel.x=h/a*Math.min(20,a*8),e.vel.z=u/a*Math.min(20,a*8)}e.yaw=Math.atan2(-(r.pos.x-e.pos.x),-(r.pos.z-e.pos.z));let l=yc[this.combo%yc.length];this.combo++,this.comboT=1.2;let c=l==="uppercut"||l==="spinkick";e.lock(c?.42:.28,l),e.addStyle(c?60:25,null),setTimeout(()=>{!r.alive||r.downed||(r.hit(c?2:1,e.pos,c?"kick":"melee"),l==="uppercut"&&(r.vel.y=7),this.punchFX(r.pos,c?"kick":"punch"),t.player.emitNoise(10))},110)}punchFX(t,e="punch"){this.game.audio.play("punch"),this.word(e,t),this.game.rig.addShake(.25),zx(this.game,.05)}takedown(t,e){let i=this.game,n=i.player,r=n.pos.clone(),o=Math.sin(t.yaw),a=Math.cos(t.yaw),l=new C(t.pos.x-o*.9,t.pos.y,t.pos.z-a*.9);e&&(i.audio.play("zip"),this.addLingerLine(r.clone().setY(r.y+1.2),t.pos.clone().setY(t.pos.y+1.5),.4)),n.lock(e?.7:.5,"takedown"),n.addStyle(e?200:120,null);let c=e?.45:.18,h=0;t.stun=99,t.fsm.set("stunned");let u=()=>{h+=1/60;let f=Math.min(1,h/c);n.pos.lerpVectors(r,l,f),e&&(n.pos.y+=Math.sin(f*Math.PI)*2),f<1?requestAnimationFrame(u):(t.takedown(),i.audio.play("takedown"),this.word("takedown",t.pos),i.rig.addShake(.35),n.vel.set(0,0,0),n.emitNoise(e?6:3),i.save.data.stats.takedowns++)};n.yaw=Math.atan2(-(t.pos.x-n.pos.x),-(t.pos.z-n.pos.z)),requestAnimationFrame(u)}fireGadget(){let t=this.game,e=t.player,i=this.gadget;if(!i)return;if(this.ammo<(i.cost??1)){t.audio.play("ui_back"),this.word("EMPTY!",e.pos);return}this.ammo-=i.cost??1;let n=e.eye(new C),r=e.lookDir(new C);if(!this.aiming){let a=null,l=.94,c=t.npcs.list.filter(f=>f.hostile&&f.alive&&!f.downed).map(f=>f.pos.clone().setY(f.pos.y+1.1));t.boss&&t.boss.alive&&c.push(t.boss.pos.clone().setY(t.boss.pos.y+1));let h=null,u=t.npcs.list.filter(f=>f.hostile&&f.alive&&!f.downed);for(let f=0;f<c.length;f++){let x=c[f].clone().sub(n),g=x.length();if(g>45)continue;x.divideScalar(g);let m=x.dot(r);m>l&&(l=m,a=x,h=f<u.length?u[f]:t.boss)}a?(r.copy(a),this._homeTarget=h):this._homeTarget=null}let o=this.projPool.get();o.mesh.parent||this.scene.add(o.mesh),this.handWorld(this.handPos,1),o.mesh.position.copy(this.handPos),o.prev.copy(this.handPos),o.vel.copy(r).multiplyScalar(i.speed||45),o.life=i.life||1.2,o.kind=i.effect,o.gadget=i,o.owner="player",o.gravity=i.gravity||0,o.target=!this.aiming&&i.gravity==null?this._homeTarget:null,o.mesh.material.uniforms.tint.value.set(i.color||"#ffffff"),o.mesh.material.uniforms.tintAmt.value=1,o.mesh.visible=!0,o.mesh.scale.setScalar(i.size||1),(i.effect==="bind"||i.effect==="pull")&&(o.rope=this.ropePool.get(),o.rope.parent||this.scene.add(o.rope),o.rope.visible=!0),t.audio.play(i.sound||"thwip"),B.emit("combat:fire",i),e.emitNoise(3),t.viewmodel&&t.viewmodel.kick("R")}handWorld(t,e=1){let i=this.game,n=i.viewmodel;if(i.rig.mode==="fp"&&n)return t.set(.22*e,-.12,-.55),i.renderer.camera.localToWorld(t);if(i.heroModel&&i.heroModel.root.visible)return Su(i.heroModel,e<0?"handL":"handR",t);let r=i.player,o=r.right();return t.set(r.pos.x+o.x*.35*e,r.pos.y+1.35,r.pos.z+o.z*.35*e)}updateProjectile(t,e){let i=this.game;if(t.life-=e,t.prev.copy(t.mesh.position),t.target&&t.owner==="player"&&t.target.alive!==!1&&!t.target.downed){let l=this._v.copy(t.target.pos);l.y+=1.1,l.sub(t.mesh.position);let c=l.length();if(c>.5){let h=t.vel.length();l.multiplyScalar(h/c),t.vel.lerp(l,Math.min(1,e*6)).setLength(h)}}t.vel.y-=t.gravity*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.rotation.x+=e*12,t.mesh.rotation.y+=e*9,t.rope&&(this.handWorld(this.handPos),this.stretch(t.rope,this.handPos,t.mesh.position));let n=t.prev,r=t.mesh.position,o=this._v2.subVectors(r,n),a=o.length();if(a>0){if(t.owner==="player"){for(let c of i.npcs.list)if(!(!c.hostile||!c.alive||c.downed)&&ko(n,o,a,c.pos.x,c.pos.y+1,c.pos.z,.75)){this.impact(t,r,c);return}if(i.boss&&i.boss.alive&&ko(n,o,a,i.boss.pos.x,i.boss.pos.y+1,i.boss.pos.z,2)){this.impact(t,r,null,i.boss);return}for(let c of this.targets)if(ko(n,o,a,c.pos.x,c.pos.y+1.2,c.pos.z,c.radius)){c.onHit(t.kind),this.projPool.release(t);return}}else{let c=i.player;if(ko(n,o,a,c.pos.x,c.pos.y+1,c.pos.z,.7)){this.iframes<=0&&(c.hurt(t.damage||10,"shot"),i.audio.play("hurt"),i.rig.addShake(.4)),this.projPool.release(t);return}}o.divideScalar(a);let l=i.world.collision.raycast(n.x,n.y,n.z,o.x,o.y,o.z,a,c=>!c.trigger&&!c.seeThrough);if(l){this.impact(t,new C(...l.point));return}}t.life<=0&&(t.kind==="boom"?this.impact(t,t.mesh.position.clone()):this.projPool.release(t))}impact(t,e,i,n){let r=this.game,o=t.gadget||{};switch(t.kind){case"bind":i&&(i.bind(o.bind||1),this.word("bind",i.pos),r.audio.play("pod",{rate:1.3})),n&&n.tethered(),t.rope&&this.addLingerLine(this.handWorld(new C),e,.25);break;case"aoe":r.audio.play("pod"),this.word("pod",e);for(let a of r.npcs.list)a.hostile&&a.alive&&!a.downed&&a.pos.distanceTo(e)<(o.radius||2.8)&&a.bind(o.bind||1);n&&n.tethered(.5),r.fx.burst(e,"#e8f6f0",14);break;case"stun":i&&(i.hit(1,r.player.pos,"zap"),i.stun=Math.max(i.stun,o.stun||3),i.fsm.set("stunned"),this.word("ZZAP!",i.pos),r.fx.burst(i.pos.clone().setY(i.pos.y+1),"#7fd8ff",12),r.audio.play("sense",{rate:1.8})),n&&n.tethered(.5);break;case"mine":{if(i){i.bind(3),this.word("SNAP!",i.pos);break}if(this.traps.length>=3){let l=this.traps.shift();this.scene.remove(l.mesh)}let a=new zt(new Es(.35,.4,.12,8),new ze({color:o.color||16747184}));a.position.copy(e),a.position.y+=.06,this.scene.add(a),this.traps.push({mesh:a,t:40,pos:a.position}),r.audio.play("pod",{rate:1.6}),this.word("SET!",e);break}case"noise":r.audio.play("chirp"),r.fx.burst(e,"#f2c14e",6),r.npcs.onNoise({pos:e.clone(),radius:o.radius||20,source:"decoy"}),this.word("CHIRP!",e),B.emit("combat:decoy",{pos:e});break;case"boom":{r.audio.play("explosion"),r.fx.burst(e,"#ff8a2a",22),this.word("boom",e),r.rig.addShake(.6);let a=r.player;if(a.pos.distanceTo(e)<(t.radius||4.5)&&this.iframes<=0){a.hurt(t.damage||18,"boom");let c=a.pos.clone().sub(e).normalize();a.vel.addScaledVector(c,10),a.vel.y=6,a.fsm.is("swing")||a.fsm.set("air")}break}default:break}this.projPool.release(t)}updateTraps(t){for(let e=this.traps.length-1;e>=0;e--){let i=this.traps[e];i.t-=t,i.mesh.rotation.y+=t*2;let n=null;for(let r of this.game.npcs.list)if(r.hostile&&r.alive&&!r.downed&&r.pos.distanceTo(i.pos)<1.7){n=r;break}n&&(n.bind(3),this.word("SNAP!",n.pos),this.game.audio.play("pod"),this.game.fx.burst(i.pos,"#ff8ab0",10)),(n||i.t<=0)&&(this.scene.remove(i.mesh),this.traps.splice(e,1))}}addLingerLine(t,e,i){let n=this.ropePool.get();n.parent||this.scene.add(n),n.visible=!0,this.stretch(n,t,e),this.lingerLines.push({r:n,t:i})}stretch(t,e,i){let n=e.distanceTo(i);t.position.copy(e),t.scale.set(.06,.06,Math.max(.01,n)),t.lookAt(i)}updateRopes(t){let e=this.game,i=e.player;if(i.ropeActive){this.handWorld(this.handPos,i.swingSide);let n=i.ropeLen-i.pos.distanceTo(i.anchor);this.rope.update(this.handPos,i.anchor,i.ropeShootT,n,e.time,e.renderer.camera.position)}else this.rope.hide();for(let n=this.lingerLines.length-1;n>=0;n--){let r=this.lingerLines[n];r.t-=t,r.t<=0&&(this.ropePool.release(r.r),this.lingerLines.splice(n,1))}}telegraph(t){t.pos.distanceTo(this.game.player.pos)<30&&(this.dangerT=.75,B.emit("combat:danger",{npc:t}))}enemyShoot(t,e){let i=this.game,n=this.projPool.get();n.mesh.parent||this.scene.add(n.mesh);let r=t.pos.clone();r.y+=1.4;let o=e.pos.clone();o.y+=1,o.addScaledVector(e.vel,.25),o.x+=(Math.random()-.5)*1.2,o.z+=(Math.random()-.5)*1.2;let a=o.sub(r).normalize();n.mesh.position.copy(r),n.prev.copy(r),n.vel.copy(a).multiplyScalar(48),n.life=1.5,n.kind="bullet",n.owner="enemy",n.gravity=0,n.damage=t.type.damage||9,n.gadget=null,n.mesh.material.uniforms.tint.value.set("#ffe066"),n.mesh.material.uniforms.tintAmt.value=1,n.mesh.scale.set(.5,.5,2.5),n.mesh.visible=!0,n.mesh.lookAt(r.clone().add(a)),i.audio.play("gunshot",{vol:Wt(1-t.dist(e.pos)/60,.15,1)}),i.fx.burst(r,"#ffe066",4)}enemyMelee(t,e){let i=this.game;if(this.iframes>0){this.word("MISS!",e.pos);return}e.hurt(t.type.damage||11,"melee"),i.audio.play("punch",{rate:.8}),i.audio.play("hurt"),i.rig.addShake(.5);let n=e.pos.x-t.pos.x,r=e.pos.z-t.pos.z,o=Math.hypot(n,r)||1;e.vel.x+=n/o*6,e.vel.z+=r/o*6}bomb(t,e,i={}){let n=this.game,r=this.projPool.get();r.mesh.parent||this.scene.add(r.mesh);let o=i.time||1.3,a=14,l=new C((e.x-t.x)/o,(e.y-t.y+.5*a*o*o)/o,(e.z-t.z)/o);r.mesh.position.copy(t),r.prev.copy(t),r.vel.copy(l),r.life=o+.05,r.kind="boom",r.owner="enemy",r.gravity=a,r.damage=i.damage||18,r.radius=i.radius||4.5,r.gadget=null,r.mesh.material.uniforms.tint.value.set(i.color||"#a24bd6"),r.mesh.material.uniforms.tintAmt.value=1,r.mesh.scale.setScalar(2.2),r.mesh.visible=!0,n.fx.marker(e,o,r.radius)}};function ko(s,t,e,i,n,r,o){let a=i-s.x,l=n-s.y,c=r-s.z,h=(a*t.x+l*t.y+c*t.z)/(e*e);h=Math.max(0,Math.min(1,h));let u=s.x+t.x*h-i,f=s.y+t.y*h-n,d=s.z+t.z*h-r;return u*u+f*f+d*d<o*o}function zx(s,t){s.hitstop=Math.max(s.hitstop||0,t)}var Uo=class{constructor(t){this.game=t,this.active=null,this.stepIdx=-1,this.step=null,this.ctx=null,this.spawned=[],this.steps={...Fx},this.offs=[]}registerStep(t,e){this.steps[t]=e}loc(t){let e=this.game.world.data;if(!t)return null;if(Array.isArray(t))return new C(...t);if(t.isVector3)return t.clone();if(t.pos)return new C(...t.pos);if(t.landmark){let i=e.landmarks[t.landmark];if(!i)return console.warn("no landmark",t.landmark),this.game.player.pos.clone();let n=t.key&&i[t.key]?i[t.key].clone():i.pos.clone();if(t.offset&&n.add(new C(...t.offset)),t.ground){let r=this.game.world.collision.raycast(n.x,n.y+50,n.z,0,-1,0,120);r&&(n.y=r.point[1])}return n}if(t.npc){let i=this.game.npcs.byId(t.npc);return i?i.pos.clone():null}if(t.relative){let i=this.game.player,n=i.fwd();return i.pos.clone().add(new C(n.x*t.relative[2],t.relative[1],n.z*t.relative[2]))}return null}start(t,e={}){this.stop(!1),this.active=t,this.stepIdx=(e.startAt||0)-1,this.opts=e,t.abilities&&Object.assign(this.game.player.abilities,t.abilities),B.emit("mission:start",t),this.next()}stop(t){this.step&&this.impl&&this.impl.end&&this.impl.end.call(this,this.step,this.ctx);for(let e of this.offs)e();this.offs=[],this.cleanupSpawns(),this.active=null,this.step=null,this.impl=null,this.game.fx.setBeacon(null),this.game.hud.setObjective(null),t&&B.emit("mission:failed")}cleanupSpawns(){for(let t of this.spawned)this.game.npcs.remove(t);this.spawned=[];for(let t of this.items||[])this.game.combat.removeInteractable(t);this.items=[]}next(){this.step&&this.impl&&this.impl.end&&this.impl.end.call(this,this.step,this.ctx);for(let e of this.offs)e();this.offs=[],this.stepIdx++;let t=this.active;if(t){if(this.stepIdx>=t.steps.length){this.complete();return}if(this.step=t.steps[this.stepIdx],this.impl=this.steps[this.step.type],!this.impl){console.warn("Unknown step type",this.step.type),this.next();return}if(this.ctx={t:0,done:!1},this.game.fx.setBeacon(null),this.game.hud.setObjective(this.step.text||null,this.step.sub),this.step.thought&&this.game.dialogue.thought(this.step.thought),this.impl.start&&this.impl.start.call(this,this.step,this.ctx),this.opts.story&&(this.game.save.data.story.step=this.stepIdx,this.game.save.write()),this.step.checkpoint){let e=this.game,i=this.step.at?this.loc(this.step.at):e.player.pos.clone();e.checkpoint={pos:i,yaw:e.player.yaw}}}}on(t,e){this.offs.push(B.on(t,e))}done(){let t=this.ctx;t&&!t.done&&(t.done=!0,this.game.audio.play("ui_ok"),setTimeout(()=>{this.active&&this.ctx===t&&this.next()},this.step.delay??350))}complete(){let t=this.active,e=this.game;this.cleanupSpawns(),this.game.fx.setBeacon(null),e.hud.setObjective(null),this.active=null,this.step=null,this.impl=null;let i=t.reward||{};if(i.unlockSkins)for(let n of i.unlockSkins)e.save.data.unlockedSkins.includes(n)||e.save.data.unlockedSkins.push(n);i.flags&&Object.assign(e.save.data.flags,i.flags),i.rep&&(e.save.data.reputation+=i.rep),e.save.write(),B.emit("mission:complete",t)}update(t){!this.active||!this.step||!this.impl||(this.ctx.t+=t,this.impl.update&&!this.ctx.done&&this.impl.update.call(this,this.step,this.ctx,t),this.ctx.target&&this.game.hud.setWaypoint(this.ctx.target))}spawnGroup(t){let e=[];for(let i of t||[]){let n=this.loc(i.at)||this.game.player.pos.clone(),r=i.count||1;for(let o=0;o<r;o++){let a=o/r*Math.PI*2+(i.angle||0),l=r>1?i.spread??2.5:0,c=n.clone().add(new C(Math.cos(a)*l,.2,Math.sin(a)*l));if(i.ground!==!1){let f=this.game.world.collision.raycast(c.x,c.y+2,c.z,0,-1,0,60);f&&(c.y=f.point[1])}let h=i.patrol?i.patrol.map(f=>n.clone().add(new C(...f))):null,u=this.game.npcs.spawn(i.npc,c,{id:i.id&&r===1?i.id:void 0,yaw:i.yaw??a+Math.PI,state:i.state,patrol:h,tag:i.tag,talk:i.talk,name:i.name,portrait:i.portrait,role:i.role});u.important=!0,this.spawned.push(u),e.push(u)}}return e}},Bu=(s,t,e)=>s.distanceTo(t)<e,Fx={dialogue:{start(s,t){this.game.dialogue.play(s.id,()=>{this.ctx===t&&this.done()})}},thought:{start(s,t){this.game.dialogue.thought(s.text,s.time),t.wait=s.time||3.5},update(s,t){t.t>t.wait&&this.done()}},wait:{update(s,t){t.t>(s.time||1)&&this.done()}},reach:{start(s,t){if(t.target=this.loc(s.target),this.game.fx.setBeacon(t.target),s.hint)for(let e in s.hint)this.game.overlay.setHint(e,s.hint[e])},update(s,t){Bu(this.game.player.pos,t.target,s.radius||5)&&this.done()},end(s){if(s.hint)for(let t in s.hint)this.game.overlay.setHint(t,null)}},trigger:{start(s,t){t.target=s.target?this.loc(s.target):null,this.on("trigger:enter",e=>{e.name===s.name&&this.done()})}},action:{start(s,t){t.count=0;let e={jump:"player:jump",crouch:"player:crouch",slide:"player:slide",vault:"player:vault",climb:"player:climb",mantle:"player:mantle",wallrun:"player:wallrun",swing:"player:thwip",zip:"player:ziparrive",ride:"player:ride",sense:"combat:sense",gadget:"combat:fire",grab:"player:grab",release:"player:release",camera:"camera:mode",dodge:"combat:dodge",decoy:"combat:decoy"};if(this.on(e[s.action]||s.action,i=>{s.action==="ride"&&!i||++t.count>=(s.count||1)&&this.done()}),s.hint)for(let i in s.hint)this.game.overlay.setHint(i,s.hint[i]);s.target&&(t.target=this.loc(s.target))},end(s){if(s.hint)for(let t in s.hint)this.game.overlay.setHint(t,null)}},swingDistance:{start(s,t){t.start=this.game.player.swingDistance},update(s,t){let e=this.game.player.swingDistance-t.start;this.game.hud.setObjective(s.text,`${Math.floor(e)} / ${s.meters} m`),e>=s.meters&&this.done()}},airtime:{start(s,t){t.acc=0},update(s,t,e){let i=this.game.player;!i.ground&&!i.fsm.is("climb","hang","wallrun")?t.acc+=e:i.ground&&(t.acc=Math.max(0,t.acc-e*2)),this.game.hud.setObjective(s.text,`${t.acc.toFixed(1)} / ${s.time}s`),t.acc>=s.time&&this.done()}},rings:{start(s,t){let e=this.game;t.rings=[],t.idx=0,t.time=s.timeLimit||0;let i=s.points?s.points.map(r=>this.loc(r)):Bx(e,s.count||6,s.from?this.loc(s.from):e.player.pos),n=new no(3.2,.35,5,12);for(let r of i){let o=new zt(n,new ze({color:15909198}));o.position.copy(r),e.world.dynamic.add(o),t.rings.push(o)}t.target=i[0]},update(s,t,e){let i=this.game,n=i.player.pos.clone();n.y+=1,t.rings.forEach((o,a)=>{o.rotation.y+=e,o.material.color.set(a===t.idx?16723891:a<t.idx?3800938:15909198),o.visible=a>=t.idx});let r=t.rings[t.idx];if(r&&r.position.distanceTo(n)<4.5&&(t.idx++,i.audio.play("collect"),t.target=t.rings[t.idx]?t.rings[t.idx].position:null),s.timeLimit){let o=s.timeLimit-t.t;if(i.hud.setObjective(s.text,`${t.idx}/${t.rings.length}  \u23F1 ${Math.max(0,o).toFixed(1)}s`),o<=0){i.hud.toast("Out of time! Try again."),this.stepIdx--,this.next();return}}else i.hud.setObjective(s.text,`${t.idx}/${t.rings.length}`);t.idx>=t.rings.length&&this.done()},end(s,t){for(let e of t.rings||[])this.game.world.dynamic.remove(e)}},defeat:{start(s,t){t.npcs=this.spawnGroup(s.spawn),t.target=t.npcs.length?t.npcs[0].pos:null,s.civilians&&(t.civ=this.spawnGroup(s.civilians)),s.stealth&&(t.stealth=!0),this.on("npc:alert",()=>{s.stealthFail&&(this.game.hud.toast("Spotted! Restarting\u2026"),setTimeout(()=>{this.cleanupSpawns(),this.stepIdx--,this.next()},900))})},update(s,t){let e=t.npcs.filter(i=>i.alive&&!i.downed);this.game.hud.setObjective(s.text,`${t.npcs.length-e.length} / ${t.npcs.length}`),t.target=e.length?e[0].pos.clone().setY(e[0].pos.y+2.5):null,e.length||this.done()}},talk:{start(s,t){let e=this.game.npcs.byId(s.npc);if(!e&&s.spawn&&(e=this.spawnGroup([{...s.spawn,id:s.npc}])[0]),!e){this.done();return}e.talk=s.dialogue,e.setIcon("talk"),t.npc=e,this.on("npc:talk",i=>{i.npc===e&&this.game.dialogue.play(s.dialogue,()=>{this.ctx===t&&this.done()},e)})},update(s,t){t.npc&&(t.target=t.npc.pos.clone().setY(t.npc.pos.y+2.2))},end(s,t){t.npc&&(t.npc.talk=s.after||null,t.npc.setIcon(s.after?"talk":null))}},interact:{start(s,t){t.target=this.loc(s.target);let e=this.game.combat.addInteractable({pos:t.target,label:s.label||"USE",radius:s.radius||2.4,onUse:()=>{this.game.combat.removeInteractable(e),s.dialogue?this.game.dialogue.play(s.dialogue,()=>{this.ctx===t&&this.done()}):this.done()}});this.items=this.items||[],this.items.push(e)}},collect:{start(s,t){let e=this.game;t.items=[],t.got=0;let i=s.points?s.points.map(r=>this.loc(r)):Hx(e,s.count||5,s.near?this.loc(s.near):e.player.pos,s.radius||120),n=new to(.7,0);for(let r of i){let o=new zt(n,new ze({color:new wt(s.color||"#f2c14e")}));o.position.copy(r),e.world.dynamic.add(o),t.items.push(o)}},update(s,t,e){let i=this.game,n=i.player.pos.clone();n.y+=1;let r=null,o=1e9;for(let a of t.items){if(!a.visible)continue;a.rotation.y+=e*2,a.position.y+=Math.sin(t.t*3)*.005;let l=a.position.distanceTo(n);l<2.2?(a.visible=!1,t.got++,i.audio.play("collect"),i.combat.word(s.word||"GOT IT!",a.position)):l<o&&(o=l,r=a)}t.target=r?r.position:null,i.hud.setObjective(s.text,`${t.got} / ${t.items.length}`),t.got>=t.items.length&&this.done()},end(s,t){for(let e of t.items||[])this.game.world.dynamic.remove(e)}},boss:{start(s,t){let e=this.game;if(t.arena=this.loc(s.arena),t.boss=e.spawnBoss(s.id,t.arena),s.arena&&s.arena.landmark){let i=this.loc({landmark:s.arena.landmark}),n=t.arena.clone().sub(i).setY(0);n.lengthSq()>1&&(t.boss.away=n.normalize())}this.on("boss:defeated",()=>{t.won=!0,setTimeout(()=>this.done(),1600)}),this.on("boss:summon",i=>{let n=this.spawnGroup([{npc:"jester_goon",at:t.arena,count:i.count,spread:5,state:"combat"}]);for(let r of n)r.aware=!0}),e.hud.showBoss(s.name||"BOSS",t.boss)},update(s,t){t.target=t.boss&&t.boss.alive?t.boss.pos.clone().setY(t.boss.pos.y+3):null},end(s,t){this.game.hud.showBoss(null)}},ride:{start(s,t){t.target=this.loc(s.target),this.game.fx.setBeacon(t.target),t.limit=s.timeLimit||0},update(s,t){let e=this.game,i=e.player;if(s.requireRide&&!i.ride&&t.t>1.5){e.hud.toast("Stay on your ride! Restarting\u2026"),this.stepIdx--,this.next();return}if(t.limit){let n=t.limit-t.t;if(e.hud.setObjective(s.text,`\u23F1 ${Math.max(0,n).toFixed(1)}s`),n<=0){e.hud.toast("Late delivery! Try again."),this.stepIdx--,this.next();return}}Bu(i.pos,t.target,s.radius||6)&&this.done()}},travel:{start(s){this.game.travel(s.city,{keepMission:!0,spawn:s.spawn}).then(()=>this.done())}},crime:{start(s,t){let e=this.game,i=e.registry.get("crimes",s.crime);e.activities.startCrime(i,s.at?this.loc(s.at):null),this.on("crime:stopped",()=>this.done())},update(s,t){!this.game.activities.crime&&!t.done&&t.t>2&&this.game.activities.startCrime(this.game.registry.get("crimes",s.crime),s.at?this.loc(s.at):null)}},setAbility:{start(s){Object.assign(this.game.player.abilities,s.abilities),this.done()}},title:{start(s){this.game.hud.titleCard(s.title,s.subtitle,()=>this.done())}},teleport:{start(s){let t=this.loc(s.target);this.game.player.spawn(t,s.yaw||0),this.done()}},emit:{start(s){B.emit(s.event,s.payload),this.done()}},fire:{start(s){let t=this.game.world;t.fire&&(t.fire.front=s.from??0),this.game.fireRate=s.rate||2.2,this.game.fireOn=!0,this.done()}}};function Bx(s,t,e){let i=s.world.data,n=[],r=e.clone(),o=s.player.fwd().clone(),a=0;for(let l=0;l<t&&a<80;l++,a++){let h=i.roofs.filter(d=>{let x=(d.x0+d.x1)/2,g=(d.z0+d.z1)/2,m=x-r.x,p=g-r.z,v=Math.hypot(m,p);return v>28&&v<60&&(m*o.x+p*o.z)/v>.3}).sort((d,x)=>x.y-d.y)[0];if(!h){o.applyAxisAngle(new C(0,1,0),1.2),l--;continue}let u=new C((h.x0+h.x1)/2,0,(h.z0+h.z1)/2),f=r.clone().lerp(u,.55);f.y=Math.max(10,Math.min(h.y,40)*.7),n.push(f),o=u.clone().sub(r).setY(0).normalize(),r=u}return n}function Hx(s,t,e,i){let n=s.world.data.collectibleSpots.map(r=>new C(...r)).filter(r=>r.distanceTo(e)<i&&r.distanceTo(e)>15);return n.sort(()=>Math.random()-.5),n.slice(0,t)}var Oo=class{constructor(t){this.game=t,this.crime=null,this.crimeTimer=20,this.givers=[],this.pages=[],this.caches=[],this.enabled=!1,B.on("npc:talk",e=>this.onTalk(e.npc))}setup(t){this.clear();let e=this.game;this.enabled=!0,this.crimeTimer=18;for(let u of e.registry.list("sideQuests")){if(u.city&&u.city!==t||e.save.data.sideQuests.done.includes(u.id)&&!u.repeatable||u.requires&&!e.save.data.flags[u.requires])continue;let f=e.missions.loc(u.giver.at);if(!f)continue;let d=e.npcs.spawn(u.giver.npc,f,{id:"giver_"+u.id,talk:u.giver.dialogue,name:u.giver.name,portrait:u.giver.portrait,state:u.giver.state||"idle",yaw:u.giver.yaw||0});d.important=!0,d.sideQuest=u,this.givers.push(d)}let i=e.world.data.collectibleSpots,n=ai(cu(t)^81);this.setupWorldStuff();let r=e.registry.get("collectibles","pages"),o=r?r.perCity:20,a=[...i].sort(()=>n()-.5).slice(0,o),l=new jt;l.cbox(0,0,0,.8,1.1,.06,L("#fff4dc")),l.cbox(0,.2,.035,.6,.5,.01,L("#e4573d")),l.cbox(0,-.3,.035,.6,.15,.01,L("#2a9d9a"));let c=l.build(),h=Me({atlas:!1,emissive:.6});a.forEach((u,f)=>{let d=t+":"+f;if(e.save.data.collectibles.includes(d))return;let x=new zt(c,h);x.position.set(u[0],u[1],u[2]),e.world.dynamic.add(x),this.pages.push({id:d,m:x})})}setupWorldStuff(){let t=this.game,e=t.world.data;if(!e||e.interior)return;let i=new jt;i.cbox(0,.35,0,1.1,.7,.8,L("#2a9d9a")),i.cbox(0,.72,0,1.15,.08,.85,L("#f2c14e")),i.cbox(0,.4,.41,.5,.25,.02,L("#f6f1df"));let n=i.build(),r=Me({atlas:!1,emissive:.35});for(let a of e.cacheSpots||[]){let l=new zt(n,r);l.position.set(a[0],a[1],a[2]),t.world.dynamic.add(l),this.caches.push({m:l,pos:l.position,cool:0})}for(let a of e.subways||[])t.combat.addInteractable({pos:new C(a[0],a[1],a[2]),label:"SUBWAY",radius:2.6,onUse:()=>{t.home.canTravelNow()&&(t.audio.play("bell",{vol:.25,rate:2}),t.pause(),t.menus.go(()=>t.menus.worldMap(!0,!0)))}});let o=e.landmarks&&e.landmarks.home;o&&o.hatch&&(t.combat.addInteractable({pos:o.hatch.clone(),label:"GO HOME",radius:2.8,onUse:()=>t.home.enter()}),this.homeBeacon=o.hatch)}clear(){let t=this.game;for(let e of this.caches)t.world.dynamic.remove(e.m);this.caches=[],this.homeBeacon=null;for(let e of this.givers)t.npcs.remove(e);this.givers=[];for(let e of this.pages)t.world.dynamic.remove(e.m);this.pages=[],this.endCrime(!1)}onTalk(t){let e=this.game;if(!t.sideQuest)return;if(e.missions.active){e.hud.toast("Finish your current job first.");return}let i=t.sideQuest;e.dialogue.play(i.giver.dialogue,n=>{if(n==="decline")return;this.endCrime(!1),e.missions.start(i,{side:!0});let r=B.on("mission:complete",o=>{o===i&&(r(),e.save.data.sideQuests.done.includes(i.id)||e.save.data.sideQuests.done.push(i.id),e.save.write(),e.hud.toast(`Side job complete: ${i.name}`,3),i.outro&&e.dialogue.play(i.outro),i.repeatable||(e.npcs.remove(t),this.givers.splice(this.givers.indexOf(t),1)))})},t)}update(t){let e=this.game,i=e.player;this.crime&&this.updateCrime(t);for(let n of this.caches){if(n.cool>0){n.cool-=t,n.m.visible=n.cool<=0;continue}if(n.m.rotation.y+=t*.8,n.pos.distanceTo(i.pos)<2.2){let r=e.home.refill(30);n.cool=180,n.m.visible=!1,e.audio.play("collect"),e.combat.word("REFILL!",n.pos),e.hud.toast(`Supply cache: +${Math.round(r)} line fluid, cartridges full.`,1.8)}}if(this.enabled){for(let n=this.pages.length-1;n>=0;n--){let r=this.pages[n];if(r.m.rotation.y+=t*1.5,r.m.position.distanceTo(i.pos)<2.2){e.world.dynamic.remove(r.m),this.pages.splice(n,1),e.save.data.collectibles.push(r.id),e.save.write(),e.audio.play("collect"),e.combat.word("PAGE!",r.m.position),e.hud.toast(`Golden Age Page found! (${e.save.data.collectibles.length} total)`),B.emit("collectible",r.id);for(let o of e.registry.list("skins"))o.unlockPages&&e.save.data.collectibles.length>=o.unlockPages&&!e.save.data.unlockedSkins.includes(o.id)&&(e.save.data.unlockedSkins.push(o.id),e.save.write(),e.hud.toast(`Suit unlocked: ${o.name}!`,3))}}e.missions.active||!e.freeRoam||this.crime||(this.crimeTimer-=t,this.crimeTimer<=0&&this.startCrime())}}startCrime(t,e){let i=this.game,n=i.player,r=i.registry.list("crimes").filter(h=>!h.storyOnly&&(!h.city||h.city===i.cityId)&&(!h.requiresFlag||i.save.data.flags[h.requiresFlag]));if(!r.length&&!t)return;let o=Math.random,a=t||r[o()*r.length|0],l=e?e.clone():null;if(!l){let h=i.world.data.crimeSpots.filter(f=>{let d=Math.hypot(f[0]-n.pos.x,f[2]-n.pos.z);return d>45&&d<230&&(!a.spot||a.spot.includes(f[3]))});if(!h.length&&t&&(h=i.world.data.crimeSpots),!h.length){this.crimeTimer=10;return}let u=h[o()*h.length|0];l=new C(u[0],u[1],u[2])}let c={def:a,at:l,npcs:[],civ:[],t:0};if(a.kind==="van")this.spawnVan(c);else{c.npcs=i.missions.spawnGroup((a.enemies||[]).map(h=>({npc:h[0],count:h[1],at:l,spread:3,state:"idle"}))),c.civ=i.missions.spawnGroup((a.civilians||[]).map(h=>({npc:h.npc,at:l.clone().add(new C(1.5,0,1.5)),state:h.state||"cower",role:"hostage"}))),i.missions.spawned=i.missions.spawned.filter(h=>!c.npcs.includes(h)&&!c.civ.includes(h));for(let h of c.npcs)h.yaw=Math.random()*6.28}this.crime=c,i.audio.play("siren",{vol:.5}),i.hud.scanner(a.scanner||`Crime in progress: ${a.name}`),i.hud.setObjective(a.name,"Police scanner")}spawnVan(t){let e=this.game,n=e.world.data.lanes.reduce((l,c)=>{let h=c.axis==="z"?Math.abs(c.c-t.at.x):Math.abs(c.c-t.at.z);return!l||h<l.d?{L:c,d:h}:l},null).L,r=new jt;r.cbox(0,1.3,0,2.2,2,5,L("#3a3a48")),r.cbox(0,1.5,2.3,2,1,.5,L("#7fb3b8")),r.cbox(0,1.9,-.3,2.22,.5,3,L("#c9a23a"));for(let l of[-1.7,1.7])for(let c of[-1,1])r.cbox(c,.4,l,.4,.8,.8,L("#111"));let o=new zt(r.build(),Me({atlas:!1}));e.world.dynamic.add(o);let a={mesh:o,lane:n,t:n.axis==="z"?t.at.z:t.at.x,dir:1,speed:15,hits:0,stopped:!1,pos:new C};t.van=a,a.target={pos:a.pos,radius:2.6,onHit:()=>{a.hits++,e.combat.word("THUNK!",a.pos),e.audio.play("pod",{rate:.7}),a.speed*=.55,a.hits>=(t.def.hitsToStop||3)&&this.stopVan(t)}},e.combat.targets.push(a.target)}stopVan(t){let e=this.game,i=t.van;if(!i.stopped){i.stopped=!0,e.audio.play("explosion",{vol:.5,rate:1.4}),e.combat.targets.splice(e.combat.targets.indexOf(i.target),1),t.npcs=e.missions.spawnGroup([{npc:"thug",count:2,at:i.pos.clone(),spread:3,state:"combat"},{npc:"thug_gun",count:1,at:i.pos.clone(),spread:4,state:"combat"}]),e.missions.spawned=e.missions.spawned.filter(n=>!t.npcs.includes(n));for(let n of t.npcs)n.aware=!0}}updateCrime(t){let e=this.game,i=this.crime;if(i.t+=t,i.van&&!i.van.stopped){let r=i.van,o=r.lane;r.t+=r.dir*r.speed*t,(r.t>o.b||r.t<o.a)&&(r.dir*=-1),o.axis==="z"?(r.pos.set(o.c+3.2*r.dir,0,r.t),r.mesh.rotation.y=r.dir>0?0:Math.PI):(r.pos.set(r.t,0,o.c-3.2*r.dir),r.mesh.rotation.y=r.dir>0?Math.PI/2:-Math.PI/2),r.mesh.position.copy(r.pos),r.speed=Math.min(15,r.speed+t*1.2),e.hud.setObjective(i.def.name,`Tether the van: ${r.hits}/${i.def.hitsToStop||3}`),e.hud.setWaypoint(r.pos.clone().setY(4)),e.player.pos.distanceTo(r.pos)>420&&this.endCrime(!1);return}let n=i.npcs.filter(r=>r.alive&&!r.downed);if(n.length&&(e.hud.setWaypoint(n[0].pos.clone().setY(n[0].pos.y+2.4)),e.hud.setObjective(i.def.name,`${i.npcs.length-n.length}/${i.npcs.length} stopped`)),!n.length&&i.npcs.length){this.endCrime(!0);return}(e.player.pos.distanceTo(i.at)>420||i.t>240)&&this.endCrime(!1)}endCrime(t){let e=this.game,i=this.crime;if(i){if(this.crime=null,this.crimeTimer=30+Math.random()*35,e.hud.setObjective(null),e.hud.setWaypoint(null),t){e.save.data.stats.crimes++,e.save.data.reputation+=i.def.rep||10,e.save.write(),e.hud.toast(`${i.def.name} stopped! +${i.def.rep||10} rep`,3),e.audio.play("ui_ok");for(let n of i.civ)n.fsm.set("cheer");i.def.thanks&&e.dialogue.bark(i.def.thanks[Math.random()*i.def.thanks.length|0]),B.emit("crime:stopped",i.def)}setTimeout(()=>{for(let n of[...i.npcs,...i.civ])e.npcs.remove(n);if(i.van){e.world.dynamic.remove(i.van.mesh);let n=e.combat.targets.indexOf(i.van.target);n>=0&&e.combat.targets.splice(n,1)}},t?8e3:0)}}};var zo=class{constructor(t){this.game=t,this.el=document.getElementById("dialogue"),this.nameEl=this.el.querySelector(".d-name"),this.textEl=this.el.querySelector(".d-text"),this.portrait=this.el.querySelector("canvas"),this.choicesEl=this.el.querySelector(".d-choices"),this.moreEl=this.el.querySelector(".d-more"),this.capEl=document.getElementById("caption"),this.barkEl=document.getElementById("bark"),this.active=null,this.queue=[],this.capQueue=[],this.capT=0,this.barkT=0,this.el.addEventListener("pointerdown",e=>{e.target.closest(".d-choices button")||(e.preventDefault(),this.advance())})}get open(){return!!this.active}play(t,e,i){let n=this.game.registry.dialogue(t);if(!n){console.warn("missing dialogue",t),e&&e();return}let r=Array.isArray(n)?n:n.lines;this.active={id:t,lines:r,i:0,cb:e,npc:i,result:null},this.el.classList.add("show"),this.game.player.lock(999,"dialogue"),this.game.overlay.setVisible(!1),i&&(i._prevYaw=i.yaw),B.emit("dialogue:start",t),this.show()}speaker(t){return this.game.registry.data.speakers[t]||{name:t,portrait:{style:"face"}}}show(){let t=this.active,e=t.lines[t.i];if(!e){this.close();return}e.set&&Object.assign(this.game.save.data.flags,e.set),e.emit&&B.emit(e.emit,e.payload),e.sfx&&this.game.audio.play(e.sfx);let i=this.speaker(e.s);this.nameEl.textContent=i.name,this.nameEl.style.background=i.color||"#f2c14e",this.el.classList.toggle("narration",e.s==="narrator"),this.el.classList.toggle("radio",!!i.radio),Fo(this.portrait,i.portrait||{},this.game.time),this.full=this.format(e.t||""),this.shown=0,this.typing=!0,this.textEl.textContent="",this.choicesEl.innerHTML="",this.moreEl.style.visibility="hidden",this.pitch=i.pitch||1}format(t){let e=this.game,i=e.registry.str("heroName","Tether");return t.replace(/\{hero\}/g,i).replace(/\{city\}/g,e.cityName||"Brasshaven")}update(t){if(this.capT>0&&(this.capT-=t,this.capT<=0&&(this.capEl.classList.remove("show"),setTimeout(()=>this.nextCaption(),350))),this.barkT>0&&(this.barkT-=t,this.barkT<=0&&this.barkEl.classList.remove("show")),!this.active)return;if(this.typing){let i=Math.floor(this.shown);this.shown+=t*55;let n=Math.min(this.full.length,Math.floor(this.shown));n!==i&&(this.textEl.textContent=this.full.slice(0,n),n%3===0&&this.full[n-1]!==" "&&this.game.audio.play("blip",{rate:this.pitch*(.9+Math.random()*.2),vary:0,minGap:.03})),n>=this.full.length&&this.finishTyping()}($.pressed("cross")||$.pressed("square"))&&this.advance(),this.choiceBtns&&this.choiceBtns.length&&($.pressed("down")&&this.selChoice((this.sel+1)%this.choiceBtns.length),$.pressed("up")&&this.selChoice((this.sel-1+this.choiceBtns.length)%this.choiceBtns.length));let e=this.active&&this.active.npc;e&&e.faceTo(this.game.player.pos,t,6)}finishTyping(){this.typing=!1,this.textEl.textContent=this.full;let t=this.active.lines[this.active.i];t.choices?(this.choiceBtns=t.choices.map((e,i)=>{let n=document.createElement("button");return n.textContent=this.format(e.t),n.addEventListener("click",r=>{r.stopPropagation(),this.pick(i)}),this.choicesEl.appendChild(n),n}),this.selChoice(0)):(this.choiceBtns=null,this.moreEl.style.visibility="visible")}selChoice(t){this.sel=t,this.choiceBtns.forEach((e,i)=>e.classList.toggle("sel",i===t))}pick(t){let e=this.active,n=e.lines[e.i].choices[t];if(this.game.audio.play("ui_click"),n.set&&Object.assign(this.game.save.data.flags,n.set),n.result&&(e.result=n.result),this.choiceBtns=null,n.end){this.close();return}this.goto(n.go)}goto(t){let e=this.active;if(t){let i=e.lines.findIndex(n=>n.id===t);e.i=i>=0?i:e.lines.length}else e.i++;this.show()}advance(){if(!this.active)return;if(this.typing){this.finishTyping();return}if(this.choiceBtns&&this.choiceBtns.length){this.pick(this.sel);return}let t=this.active.lines[this.active.i];if(t.end){this.close();return}this.goto(t.go)}close(){let t=this.active;this.active=null,this.el.classList.remove("show"),this.game.player.fsm.set(this.game.player.ride?"ride":"ground"),this.game.overlay.setVisible(this.game.state==="play"),this.game.save.write(),B.emit("dialogue:end",t.id),$.consume("cross"),$.consume("square"),t.cb&&t.cb(t.result)}thought(t,e=4){this.capQueue.push({text:this.format(t),time:e}),this.capT<=0&&!this.capEl.classList.contains("show")&&this.nextCaption()}nextCaption(){let t=this.capQueue.shift();t&&(this.capEl.textContent=t.text,this.capEl.classList.add("show"),this.capT=t.time)}clearCaptions(){this.capQueue.length=0,this.capT=0,this.capEl.classList.remove("show")}bark(t,e=3){this.barkEl.textContent=this.format(t),this.barkEl.classList.add("show"),this.barkT=e}};function Fo(s,t,e=0){let i=s.getContext("2d"),n=s.width,r=s.height;i.clearRect(0,0,n,r),i.fillStyle=t.bg||"#f2c14e",i.fillRect(0,0,n,r),i.fillStyle="rgba(0,0,0,0.12)";for(let d=0;d<r;d+=8)for(let x=d/8%2?4:0;x<n;x+=8){let g=1+d/r*2.5;i.beginPath(),i.arc(x,d,g,0,6.283),i.fill()}let o="#1d1712";i.lineWidth=4,i.strokeStyle=o,i.lineJoin="round";let a=n/2,l=r*.52;i.fillStyle=t.primary||"#2a9d9a",i.beginPath(),i.moveTo(a-n*.42,r),i.quadraticCurveTo(a-n*.38,r*.74,a,r*.72),i.quadraticCurveTo(a+n*.38,r*.74,a+n*.42,r),i.closePath(),i.fill(),i.stroke(),t.collar&&(i.fillStyle=t.collar,i.beginPath(),i.moveTo(a-18,r*.72),i.lineTo(a,r*.86),i.lineTo(a+18,r*.72),i.closePath(),i.fill(),i.stroke()),t.emblem&&(i.fillStyle=t.accent||"#f2c14e",i.beginPath(),i.moveTo(a-14,r*.84),i.lineTo(a+14,r*.84),i.lineTo(a,r*.95),i.closePath(),i.fill(),i.stroke());let c=t.style||"face",h=c==="mask"?t.primary||"#2a9d9a":c==="jester"?"#f6f1df":c==="helmet"?t.primary||"#5a5f6a":t.skin||"#d9a27a",u=c==="kid"?n*.2:n*.23,f=c==="kid"?r*.24:r*.28;if(i.fillStyle=h,i.beginPath(),i.ellipse(a,l-r*.06,u,f,0,0,6.283),i.fill(),i.stroke(),c==="mask"){for(let d of[-1,1])i.fillStyle=o,i.beginPath(),i.ellipse(a+d*u*.42,l-r*.09,u*.34,f*.24,d*-.35,0,6.283),i.fill(),i.fillStyle=t.eyes||"#ffffff",i.beginPath(),i.ellipse(a+d*u*.42,l-r*.09,u*.26,f*.17,d*-.35,0,6.283),i.fill();i.strokeStyle=t.secondary||"#e4573d",i.lineWidth=6,i.beginPath(),i.moveTo(a,l-f-r*.05),i.lineTo(a,l-r*.2),i.stroke(),i.strokeStyle=o,i.lineWidth=4,i.fillStyle=t.secondary||"#e4573d",i.beginPath(),i.moveTo(a-10,l+f*.55),i.lineTo(a+10,l+f*.55),i.lineTo(a,l+f*.75),i.closePath(),i.fill(),i.stroke()}else if(c==="jester"){i.fillStyle=t.primary||"#7a3fb0";for(let d of[-1,1])i.beginPath(),i.moveTo(a+d*u*.2,l-f*1),i.quadraticCurveTo(a+d*u*1.6,l-f*1.9,a+d*u*1.4,l-f*.6),i.lineTo(a+d*u*.8,l-f*.75),i.closePath(),i.fillStyle=d<0?t.primary||"#7a3fb0":t.secondary||"#3a2a6a",i.fill(),i.stroke(),i.fillStyle=t.accent||"#f2c14e",i.beginPath(),i.arc(a+d*u*1.42,l-f*.6,8,0,6.283),i.fill(),i.stroke();i.fillStyle=t.primary||"#7a3fb0";for(let d of[-1,1])i.beginPath(),i.moveTo(a+d*u*.42,l-r*.16),i.lineTo(a+d*u*.62,l-r*.07),i.lineTo(a+d*u*.42,l+r*.02),i.lineTo(a+d*u*.22,l-r*.07),i.closePath(),i.fill(),i.stroke();i.fillStyle=o,i.beginPath(),i.arc(a,l+f*.35,u*.5,.15,Math.PI-.15),i.fill()}else if(c==="helmet"){i.fillStyle=t.accent||"#9aa3ad",i.fillRect(a-u*.8,l-r*.13,u*1.6,f*.32),i.strokeRect(a-u*.8,l-r*.13,u*1.6,f*.32),i.fillStyle=t.eyes||"#ff3b3b",i.fillRect(a-u*.6,l-r*.1,u*.4,f*.12),i.fillRect(a+u*.2,l-r*.1,u*.4,f*.12);for(let d=-2;d<=2;d++)i.beginPath(),i.moveTo(a+d*10,l+f*.3),i.lineTo(a+d*10,l+f*.75),i.stroke()}else{t.hair&&(i.fillStyle=t.hair,i.beginPath(),i.ellipse(a,l-f*.62,u*1.04,f*.55,0,Math.PI,0),i.fill(),i.stroke(),t.long&&(i.fillRect(a-u*1.04,l-f*.62,u*.3,f*1.2),i.fillRect(a+u*.74,l-f*.62,u*.3,f*1.2)));for(let d of[-1,1])i.fillStyle="#fff",i.beginPath(),i.ellipse(a+d*u*.38,l-r*.07,9,6,0,0,6.283),i.fill(),i.stroke(),i.fillStyle=o,i.beginPath(),i.arc(a+d*u*.38,l-r*.07,3,0,6.283),i.fill(),i.beginPath(),i.moveTo(a+d*u*.62,l-r*.14),i.lineTo(a+d*u*.16,l-r*.13-(t.stern?-4:2)),i.stroke();if(t.glasses){i.strokeStyle=o,i.lineWidth=3;for(let d of[-1,1])i.beginPath(),i.arc(a+d*u*.38,l-r*.07,13,0,6.283),i.stroke();i.lineWidth=4}i.beginPath(),i.moveTo(a,l-r*.05),i.lineTo(a-5,l+4),i.lineTo(a+2,l+6),i.stroke(),i.beginPath(),t.smile?i.arc(a,l+f*.35,u*.35,.3,Math.PI-.3):(i.moveTo(a-u*.3,l+f*.48),i.lineTo(a+u*.3,l+f*.46)),i.stroke(),t.mustache&&(i.fillStyle=t.hair||o,i.beginPath(),i.ellipse(a,l+f*.3,u*.4,6,0,0,6.283),i.fill()),t.hat==="cap"&&(i.fillStyle=t.hatColor||"#2a3f6a",i.beginPath(),i.ellipse(a,l-f*.75,u*1.05,f*.38,0,Math.PI,0),i.fill(),i.stroke(),i.fillRect(a-u*1.1,l-f*.8,u*2.2,10),i.strokeRect(a-u*1.1,l-f*.8,u*2.2,10),i.fillStyle=t.accent||"#f2c14e",i.beginPath(),i.arc(a,l-f*.95,7,0,6.283),i.fill(),i.stroke()),t.hat==="beanie"&&(i.fillStyle=t.hatColor||"#c0462e",i.beginPath(),i.ellipse(a,l-f*.7,u*1.05,f*.55,0,Math.PI,0),i.fill(),i.stroke()),t.mask&&(i.fillStyle=o,i.fillRect(a-u,l-r*.11,u*2,16)),t.scar&&(i.strokeStyle="#8a3a2a",i.beginPath(),i.moveTo(a+u*.2,l-r*.16),i.lineTo(a+u*.55,l+4),i.stroke(),i.strokeStyle=o)}if(t.iron&&(i.fillStyle="#5a5f6a",i.beginPath(),i.moveTo(a,l-f),i.lineTo(a+u*1.02,l-f*.3),i.lineTo(a+u*.8,l+f*.8),i.lineTo(a,l+f),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff3b3b",i.beginPath(),i.arc(a+u*.4,l-r*.07,6,0,6.283),i.fill()),t.static){i.fillStyle="rgba(255,255,255,0.18)";for(let d=0;d<r;d+=4)Math.random()<.5&&i.fillRect(0,d,n,2)}i.lineWidth=6,i.strokeRect(3,3,n-6,r-6)}var Ce=s=>document.getElementById(s),Bo=class{constructor(t){this.game=t,this.el=Ce("hud"),this.hp=Ce("hp-fill"),this.hpGhost=Ce("hp-ghost"),this.obj=Ce("objective"),this.objT=this.obj.querySelector(".o-title"),this.objS=this.obj.querySelector(".o-sub"),this.way=Ce("waypoint"),this.cross=Ce("crosshair"),this.zip=Ce("zipmark"),this.toastEl=Ce("toast"),this.scannerEl=Ce("scanner"),this.bossEl=Ce("bossbar"),this.bossFill=this.bossEl.querySelector(".b-fill"),this.bossName=this.bossEl.querySelector(".b-name"),this.gadgetEl=Ce("gadget"),this.ammoEl=Ce("ammo"),this.fpsEl=Ce("fps"),this.danger=Ce("danger"),this.speedEl=Ce("speedlines"),this.mini=Ce("minimap"),this.mctx=this.mini.getContext("2d"),this.miniT=0,this.cardEl=Ce("titlecard"),this.repEl=Ce("rep"),this.styleEl=Ce("style"),this.styleT=0,this.partsEl=Ce("partspop"),this.partsT=0,this.buffEl=Ce("buffs"),this.waypoint=null,this.boss=null,this.toastT=0,this.scanT=0,this._v=new C,this.ghost=100,this.fpsAcc=0,this.fpsN=0,B.on("combat:danger",()=>{this.danger.classList.remove("on"),this.danger.offsetWidth,this.danger.classList.add("on")}),B.on("player:hurt",()=>{this.el.classList.remove("hurt"),this.el.offsetWidth,this.el.classList.add("hurt")}),this.miniBtn=this.mini,this.mini.addEventListener("click",()=>B.emit("ui:map"))}show(t){this.el.style.display=t?"block":"none"}setObjective(t,e){if(!t){this.obj.classList.remove("show"),this._objTitle=null;return}this._objTitle!==t&&(this.obj.classList.remove("show"),this.obj.offsetWidth,this._objTitle=t),this.objT.textContent=t,this.objS.textContent=e||"",this.obj.classList.add("show")}setWaypoint(t){this.waypoint=t?t.clone():null}stylePop(t){if(!t){this.styleEl.classList.remove("show"),this.styleEl.classList.add("bail"),this.styleEl.querySelector("b").textContent="BAIL!",this.styleEl.classList.add("show"),this.styleT=.9;return}this.styleEl.classList.remove("bail");let e={frontflip:"FRONT FLIP",backflip:"BACKFLIP",corkscrew:"CORKSCREW",sidespin:"SIDE SPIN",twist:"TWISTER",superman:"SUPERMAN",starfish:"STARFISH",doubleflip:"DOUBLE FLIP"}[t.label]||String(t.label).toUpperCase();this.styleEl.querySelector("b").textContent=e+"!",this.styleEl.querySelector("span").textContent=`STYLE ${t.style}${t.combo>1?"  \xD7"+t.combo:""}`,this.styleEl.classList.remove("show"),this.styleEl.offsetWidth,this.styleEl.classList.add("show"),this.styleT=1.6}partsPop(t,e){this.partsEl.textContent=`+${t} \u2699${e?"  "+e:""}`,this.partsEl.classList.remove("show"),this.partsEl.offsetWidth,this.partsEl.classList.add("show"),this.partsT=1.8,this._rep=null}toast(t,e=2.2){this.toastEl.textContent=t,this.toastEl.classList.add("show"),this.toastT=e}scanner(t){this.scannerEl.querySelector("span").textContent=t,this.scannerEl.classList.add("show"),this.scanT=4.5}showBoss(t,e){this.boss=e,this.bossEl.classList.toggle("show",!!e),e&&(this.bossName.textContent=t)}titleCard(t,e,i){this.cardEl.querySelector(".t-title").textContent=t,this.cardEl.querySelector(".t-sub").textContent=e||"",this.cardEl.classList.add("show"),this.game.audio.play("bell",{vol:.5}),setTimeout(()=>{this.cardEl.classList.remove("show"),i&&i()},2600)}update(t){let e=this.game,i=e.player,n=e.renderer.camera,r=window.innerWidth,o=window.innerHeight,a=i.health/i.maxHealth;this.hp.style.transform=`scaleX(${a.toFixed(3)})`,this.ghost+=(i.health-this.ghost)*Math.min(1,t*2),this.hpGhost.style.transform=`scaleX(${(this.ghost/i.maxHealth).toFixed(3)})`,this.el.classList.toggle("lowhp",a<.3);let l=e.combat.gadget,c=l?l.name:"\u2014";this._gtxt!==c&&(this._gtxt=c,this.gadgetEl.textContent=c,this.gadgetEl.style.borderColor=l?l.color:"#fff");let h=`${e.combat.ammo}/${e.combat.maxAmmo} \xB7 \u{1F9EA}${Math.round(e.save.data.fluid||0)}`;if(this._at!==h&&(this._at=h,this.ammoEl.textContent=h,this.ammoEl.classList.toggle("low",(e.save.data.fluid||0)<6&&e.combat.ammo<3)),this.gadgetEl.parentElement.style.display=i.abilities.gadgets===!1?"none":"",this.cross.classList.toggle("aim",e.combat.aiming||!!i.aimZipPoint),this.cross.style.display=e.rig.mode==="fp"||e.combat.aiming||Vx()?"":"none",i.aimZipPoint?this.project(i.aimZipPoint,this.zip,r,o,!1):this.zip.style.display="none",this.waypoint){this.way.style.display="block";let d=this.waypoint.distanceTo(i.pos);this.way.querySelector("span").textContent=d>999?(d/1e3).toFixed(1)+"km":Math.round(d)+"m",this.project(this.waypoint,this.way,r,o,!0)}else this.way.style.display="none";this.toastT>0&&(this.toastT-=t,this.toastT<=0&&this.toastEl.classList.remove("show")),this.scanT>0&&(this.scanT-=t,this.scanT<=0&&this.scannerEl.classList.remove("show")),this.boss&&(this.bossFill.style.transform=`scaleX(${Wt(this.boss.hp/this.boss.maxHp,0,1).toFixed(3)})`);let u=i.vel.length();this.speedEl.style.opacity=Wt((u-16)/20,0,.8).toFixed(2),this.miniT-=t,this.miniT<=0&&(this.miniT=.12,this.drawMini()),e.save.settings.showFPS?(this.fpsAcc+=t,this.fpsN++,this.fpsAcc>.5&&(this.fpsEl.textContent=`${Math.round(this.fpsN/this.fpsAcc)} fps \xB7 ${e.renderer.info.calls} calls \xB7 ${e.renderer.scale*100|0}%`,this.fpsAcc=0,this.fpsN=0),this.fpsEl.style.display="block"):this.fpsEl.style.display="none";let f=e.save.data.reputation+"|"+e.save.data.parts;if(this._rep!==f&&(this._rep=f,this.repEl.textContent=`\u2605 ${e.save.data.reputation} \xB7 \u2699 ${e.save.data.parts||0}`),this.styleT>0&&(this.styleT-=t,this.styleT<=0&&this.styleEl.classList.remove("show")),this.partsT>0&&(this.partsT-=t,this.partsT<=0&&this.partsEl.classList.remove("show")),this._buffT=(this._buffT||0)-t,this._buffT<=0){this._buffT=1;let d=e.home.buffIcons();d!==this._bi&&(this._bi=d,this.buffEl.innerHTML=d)}!this.waypoint&&e.activities.homeBeacon&&e.freeRoam&&!e.activities.crime?this._homeWp=e.activities.homeBeacon:this._homeWp=null}project(t,e,i,n,r){let o=this._v.copy(t).project(this.game.renderer.camera),a=(o.x+1)/2*i,l=(1-o.y)/2*n,c=o.z>1;if(!r){if(c||a<0||a>i||l<0||l>n){e.style.display="none";return}e.style.display="block",e.style.transform=`translate(${a|0}px,${l|0}px)`;return}let h=34;c&&(a=i-a,l=n-h);let u=c||a<h||a>i-h||l<h||l>n-h;a=Wt(a,h,i-h),l=Wt(l,h+40,n-h),e.classList.toggle("edge",u),e.style.transform=`translate(${a|0}px,${l|0}px)`}drawMini(){let t=this.game,e=t.player,i=this.mctx,n=this.mini.width,r=110,o=n/(r*2),a=t.world.data;if(!a)return;if(i.save(),i.clearRect(0,0,n,n),i.beginPath(),i.arc(n/2,n/2,n/2-2,0,6.283),i.clip(),i.fillStyle=a.interior?"#3d4a52":"#4b4743",i.fillRect(0,0,n,n),i.translate(n/2,n/2),i.rotate(e.yaw),i.scale(o,o),i.translate(-e.pos.x,-e.pos.z),!a.interior){i.fillStyle="#4f8d93";let c=a.bounds;i.fillRect(e.pos.x-400,e.pos.z-400,800,800),i.fillStyle="#4b4743",i.fillRect(c.x0,c.z0,c.x1-c.x0,c.z1-c.z0)}for(let c of a.roofs){if(Math.abs(c.x0-e.pos.x)>r*1.5&&Math.abs(c.x1-e.pos.x)>r*1.5||Math.abs(c.z0-e.pos.z)>r*1.5&&Math.abs(c.z1-e.pos.z)>r*1.5)continue;let h=Wt(c.y/90,0,1);i.fillStyle=`rgb(${200-h*60|0},${180-h*40|0},${140-h*30|0})`,i.fillRect(c.x0,c.z0,c.x1-c.x0,c.z1-c.z0)}for(let c of a.parks||[])i.fillStyle="#6f9a45",i.fillRect(c.x0+2,c.z0+2,c.x1-c.x0-4,c.z1-c.z0-4);for(let c of t.npcs.list)c.alive&&(i.fillStyle=c.hostile?c.downed?"#777":"#ff3b3b":c.talk?"#5fd0ff":"#f2ead0",i.beginPath(),i.arc(c.pos.x,c.pos.z,3.5/o*.5,0,6.283),i.fill());this.waypoint&&(i.fillStyle="#ffe066",i.beginPath(),i.arc(this.waypoint.x,this.waypoint.z,5/o*.6,0,6.283),i.fill());let l=t.activities.homeBeacon;if(l){i.fillStyle="#2a9d9a",i.strokeStyle="#f2c14e",i.lineWidth=2/o;let c=6/o;i.fillRect(l.x-c,l.z-c,c*2,c*2),i.strokeRect(l.x-c,l.z-c,c*2,c*2)}for(let c of t.activities.caches)c.m.visible&&(i.fillStyle="#5fe0c8",i.beginPath(),i.arc(c.pos.x,c.pos.z,3/o,0,6.283),i.fill());if(i.restore(),i.save(),i.translate(n/2,n/2),i.fillStyle="#ff2fb3",i.strokeStyle="#1d1712",i.lineWidth=2,i.beginPath(),i.moveTo(0,-9),i.lineTo(6,7),i.lineTo(0,3),i.lineTo(-6,7),i.closePath(),i.fill(),i.stroke(),i.restore(),this.waypoint){let c=this.waypoint.x-e.pos.x,h=this.waypoint.z-e.pos.z;if(Math.hypot(c,h)>r){let f=Math.atan2(h,c)+e.yaw;i.save(),i.translate(n/2+Math.cos(f)*(n/2-9),n/2+Math.sin(f)*(n/2-9)),i.fillStyle="#ffe066",i.beginPath(),i.arc(0,0,5,0,6.283),i.fill(),i.restore()}}}};function Vx(){return $.down("l2")}var Hu=s=>document.getElementById(s),Dt=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Ho=class{constructor(t){this.game=t,this.root=Hu("menus"),this.current=null,this.stack=[],this.loadEl=Hu("loading")}btn(t,e,i=""){let n=Dt("button","cbtn "+i,t);return n.addEventListener("click",r=>{r.stopPropagation(),this.game.audio.unlock(),this.game.audio.play("ui_click"),e()}),n}panel(t,e=""){this.root.innerHTML="",this.root.className="show "+e;let i=Dt("div","panel");return t&&i.appendChild(Dt("h2","ptitle",t)),this.root.appendChild(i),i}hide(){this.root.className="",this.root.innerHTML="",this.current=null}back(){let t=this.stack.pop();t?t():this.hide()}go(t){this.currentFn&&this.stack.push(this.currentFn),this.currentFn=t,t()}title(){this.stack=[],this.currentFn=()=>this.title();let t=this.game,e=t.save.data;this.root.innerHTML="",this.root.className="show title";let i=Dt("div","title-wrap");i.appendChild(Dt("div","logo",`<span class="l1">${t.registry.str("gameTitle","TETHER")}</span><span class="l2">${t.registry.str("gameSubtitle","BOOK ONE: THE CLONE OF BRASSHAVEN")}</span>`));let n=Dt("div","title-btns"),r=e.story.completed.length||e.story.step>0||e.story.chapter!=="ch1";r&&n.appendChild(this.btn("\u25B6 CONTINUE STORY",()=>t.startStory(e.story.chapter,!0),"big")),n.appendChild(this.btn(r?"CHAPTER SELECT":"\u25B6 NEW STORY",()=>r?this.go(()=>this.chapters()):t.startStory("ch1",!1),r?"":"big")),n.appendChild(this.btn("FREE ROAM",()=>t.startFreeRoam(e.lastCity||"midtown"))),n.appendChild(this.btn("WORLD MAP",()=>this.go(()=>this.worldMap(!1)))),n.appendChild(this.btn("SUITS",()=>this.go(()=>this.suits()))),n.appendChild(this.btn("SETTINGS",()=>this.go(()=>this.settings()))),n.appendChild(this.btn("MODS & PACKS",()=>this.go(()=>this.mods()))),n.appendChild(this.btn("CREDITS",()=>this.go(()=>this.credits()))),n.appendChild(this.btn("\u23FB QUIT GAME",()=>t.quit(),"quit")),i.appendChild(n),i.appendChild(Dt("div","title-foot",`v${t.version} \xB7 ${t.registry.packs.length} packs loaded \xB7 \u2605${e.reputation} \xB7 pages ${e.collectibles.length}`)),this.root.appendChild(i)}quitScreen(){this.root.innerHTML="",this.root.className="show title";let t=Dt("div","title-wrap quitscreen");t.appendChild(Dt("div","logo",'<span class="l1">SEE YA!</span><span class="l2">Progress saved \xB7 you can close this tab now</span>')),t.appendChild(Dt("p","note","Browsers only let a game close its own window when it is installed as an app. In Chrome: swipe the tab away (or install the APK build).")),t.appendChild(this.btn("\u21A9 BACK TO TITLE",()=>{this.game.state="menu",this.title()},"big")),this.root.appendChild(t)}chapters(){let t=this.game,e=this.panel("STORY \u2014 BOOK ONE"),i=Dt("div","cards");for(let n of t.registry.list("chapters").sort((r,o)=>(r.order||0)-(o.order||0))){let r=n.id==="ch1"||t.save.data.story.completed.includes(n.requires)||t.save.data.story.completed.includes(n.id),o=Dt("div","card"+(r?"":" locked"));o.appendChild(Dt("div","c-num",n.number||"")),o.appendChild(Dt("div","c-title",n.title)),o.appendChild(Dt("div","c-desc",r?n.blurb||"":"Locked \u2014 finish the previous chapter.")),t.save.data.story.completed.includes(n.id)&&o.appendChild(Dt("div","c-badge","COMPLETE")),r&&o.addEventListener("click",()=>{t.audio.play("ui_ok"),t.startStory(n.id,!1)}),i.appendChild(o)}e.appendChild(i),e.appendChild(this.btn("BACK",()=>this.back()))}worldMap(t,e){let i=this.game,n=this.panel((e?"SUBWAY \u2014 ":"TRAVEL \u2014 ")+i.registry.str("regionName","GREATER BRASSHAVEN"),"map"),r=Dt("div","map-wrap"),o=Dt("div","map-canvas"),a=Dt("div","map-info"),l=i.registry.list("cities").filter(d=>!d.hidden),c=i.registry.data.mapArt||{},h=l.find(d=>d.id===(i.cityId||i.save.data.lastCity))||l[0],u=()=>{let d=(p,v)=>`<polygon class="${v}" points="${p.map(_=>_.join(",")).join(" ")}"/>`,x=(c.land||[]).map(p=>d(p,"land")).join(""),g=(c.lines||[]).map(p=>`<polyline class="bridge" points="${p.map(v=>v.join(",")).join(" ")}"/>`).join(""),m=(c.labels||[]).map(p=>`<text class="${p.water?"wlabel":"llabel"}" x="${p.at[0]}" y="${p.at[1]}" transform="rotate(${p.rot||0} ${p.at[0]} ${p.at[1]})">${p.text}</text>`).join("");return`<svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><pattern id="dots" width="2" height="2" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.28" fill="rgba(0,0,0,0.18)"/></pattern></defs>
        <rect width="100" height="100" fill="#6fb3b8"/><rect width="100" height="100" fill="url(#dots)"/>${x}${g}${m}</svg>`},f=()=>{o.innerHTML=c.land?u():'<div class="sea"></div>';for(let x of l){let g=c.home===x.id,m=Dt("div","pin"+(x===h?" sel":"")+(x.id===i.cityId?" here":"")+(g?" home":""),`<b>${x.short||x.name}</b>`);m.style.left=(x.map?x.map[0]:50)+"%",m.style.top=(x.map?x.map[1]:50)+"%",m.style.setProperty("--pc",x.color||"#e4573d"),m.addEventListener("click",()=>{h=x,i.audio.play("ui_click"),f()}),o.appendChild(m)}a.innerHTML="",a.appendChild(Dt("h3","",h.name)),a.appendChild(Dt("p","",h.description||""));let d=Dt("ul","facts");d.innerHTML=`<li>Skyline: <b>${h.skyline||"\u2014"}</b></li><li>Crime: <b>${h.crime||"\u2014"}</b></li><li>Best for: <b>${h.bestFor||"\u2014"}</b></li>`,a.appendChild(d),a.appendChild(this.btn(h.id===i.cityId&&t?"YOU ARE HERE":e?"\u{1F687} RIDE \u279C":"TRAVEL \u279C",()=>{(h.id!==i.cityId||!t)&&(this.hide(),i.startFreeRoam(h.id))},"big")),c.home&&(!t||!i.world.data.interior)&&a.appendChild(this.btn("\u2302 GO HOME",()=>{this.hide(),i.state!=="play"&&(i.state="play"),i.home.enter()}))};f(),r.appendChild(o),r.appendChild(a),n.appendChild(r),n.appendChild(this.btn("BACK",()=>t&&this.stack.length===0?i.resume():this.back()))}loading(t,e){let i=this.loadEl;i.classList.add("show"),i.querySelector(".ld-city").textContent=t.name||t.title||"",i.querySelector(".ld-tip").textContent=e,i.querySelector(".ld-fill").style.transform="scaleX(0)";let n=i.querySelector("canvas"),r=this.game.registry.data.speakers,o=Object.keys(r),a=r[o[Math.random()*o.length|0]];a&&Fo(n,a.portrait||{},0)}loadingProgress(t){this.loadEl.querySelector(".ld-fill").style.transform=`scaleX(${t.toFixed(3)})`}loadingDone(){this.loadEl.classList.remove("show")}pause(){let t=this.game;this.stack=[],this.currentFn=()=>this.pause();let e=this.panel("PAUSED"),i=Dt("div","col");i.appendChild(this.btn("RESUME",()=>t.resume(),"big")),t.missions.active&&i.appendChild(this.btn("RESTART CHECKPOINT",()=>t.restartStep())),t.missions.active&&!t.storyMode&&i.appendChild(this.btn("ABANDON JOB",()=>{t.missions.stop(!0),t.resume()})),t.world.data.interior||i.appendChild(this.btn("WORLD MAP / TRAVEL",()=>this.go(()=>this.worldMap(!0)))),!t.world.data.interior&&!(t.storyMode&&t.missions.active)&&i.appendChild(this.btn("\u2302 GO HOME",()=>{this.hide(),t.state="play",t.home.enter()})),t.world.data.apartment&&i.appendChild(this.btn("\u{1F6AA} LEAVE APARTMENT",()=>{this.hide(),t.state="play",t.home.leave()})),i.appendChild(this.btn("CAMERA: "+Vo(t.rig.mode),()=>{t.cycleCamera(),this.pause()})),i.appendChild(this.btn("SUITS",()=>this.go(()=>this.suits()))),i.appendChild(this.btn("MOVES & CONTROLS",()=>this.go(()=>this.controls()))),i.appendChild(this.btn("SETTINGS",()=>this.go(()=>this.settings()))),i.appendChild(this.btn("QUIT TO TITLE",()=>t.toTitle())),i.appendChild(this.btn("\u23FB QUIT GAME",()=>t.quit())),e.appendChild(i);let n=t.save.data.stats;e.appendChild(Dt("div","stats",`Crimes stopped <b>${n.crimes}</b> \xB7 Takedowns <b>${n.takedowns}</b> \xB7 Tricks <b>${n.tricks||0}</b> \xB7 Swung <b>${(t.player.swingDistance/1e3).toFixed(2)} km</b> \xB7 Rep <b>\u2605${t.save.data.reputation}</b> \xB7 Parts <b>\u2699${t.save.data.parts||0}</b>`))}inventory(){let t=this.game;this.stack=[],this.currentFn=()=>this.inventory();let e=this.panel("GEAR");e.appendChild(Dt("h4","","GADGETS (R1 to fire \xB7 \u25C0 \u25B6 to switch)"));let i=Dt("div","chips");t.combat.gadgets.forEach((r,o)=>{let a=this.btn(`${r.name}<small>${r.desc||""}</small>`,()=>{t.combat.gadgetIdx=o,this.inventory()},o===t.combat.gadgetIdx?"sel":"");a.style.borderColor=r.color,i.appendChild(a)}),e.appendChild(i),e.appendChild(Dt("h4","","RIDES (D-pad \u25BC to cycle)"));let n=Dt("div","chips");for(let r of t.save.data.inventory.rides){let o=t.registry.get("rides",r);o&&n.appendChild(Dt("div","chip",`${o.name}<small>${o.desc||""}</small>`))}e.appendChild(n),e.appendChild(this.btn("SUITS",()=>this.go(()=>this.suits()))),e.appendChild(this.btn("CLOSE",()=>t.resume(),"big"))}suits(){let t=this.game,e=this.panel("SUITS"),i=Dt("div","cards suits");for(let n of t.registry.list("skins")){let r=t.save.data.unlockedSkins.includes(n.id)||n.unlocked,o=Dt("div","card suit"+(r?"":" locked")+(t.save.data.skin===n.id?" sel":"")),a=document.createElement("canvas");a.width=120,a.height=120,Fo(a,{style:n.style==="pod"?"face":"mask",primary:n.palette.primary,secondary:n.palette.secondary,accent:n.palette.accent,eyes:n.palette.eyes,emblem:!0,bg:n.palette.bg||"#f2c14e",skin:n.palette.skin,hair:n.palette.hair}),o.appendChild(a),o.appendChild(Dt("div","c-title",n.name)),o.appendChild(Dt("div","c-desc",r?n.desc||"":n.unlockText||"Locked")),n._pack&&!n._pack.startsWith("base")&&o.appendChild(Dt("div","c-badge",n._pack)),r&&o.addEventListener("click",()=>{t.setSkin(n.id),t.audio.play("ui_ok"),this.suits()}),i.appendChild(o)}e.appendChild(i),e.appendChild(this.btn("BACK",()=>this.back()))}settings(){let t=this.game,e=t.save.settings,i=this.panel("SETTINGS"),n=Dt("div","form"),r=(c,h)=>{let u=Dt("label","row");u.appendChild(Dt("span","",c)),u.appendChild(h),n.appendChild(u)},o=(c,h,u)=>{let f=document.createElement("select");for(let[d,x]of h){let g=document.createElement("option");g.value=d,g.textContent=x,String(e[c])===String(d)&&(g.selected=!0),f.appendChild(g)}return f.addEventListener("change",()=>{e[c]=isNaN(+f.value)||f.value===""?f.value==="true"?!0:f.value==="false"?!1:f.value:+f.value,t.applySettings(),u&&u()}),f},a=(c,h,u,f)=>{let d=document.createElement("input");return d.type="range",d.min=h,d.max=u,d.step=f,d.value=e[c],d.addEventListener("input",()=>{e[c]=+d.value,t.applySettings()}),d},l=c=>{let h=document.createElement("input");return h.type="checkbox",h.checked=!!e[c],h.addEventListener("change",()=>{e[c]=h.checked,t.applySettings()}),h};r("Quality",o("quality",[["auto","Auto (dynamic res)"],["low","Low"],["high","High"]])),r("Comic ink + halftone",l("comicFX")),r("PS1 vertex wobble",l("ps1Wobble")),r("Camera",o("camera",ir.map(c=>[c,Vo(c)]),()=>{t.rig.mode=e.camera})),r("Field of view (horizontal)",a("fov",70,115,1)),r("Look sensitivity",a("sens",.3,2.5,.05)),r("Invert look Y",l("invertY")),r("Head bob",a("headBob",0,1,.05)),r("SFX volume",a("sfx",0,1,.05)),r("Music volume",a("music",0,1,.05)),r("Controls size",a("controlsScale",.7,1.4,.05)),r("Controls opacity",a("controlsOpacity",.2,1,.05)),r("Floating stick",l("floatingStick")),r("Left-handed (mirror)",l("leftHanded")),r("Show FPS / draw calls",l("showFPS")),i.appendChild(n),i.appendChild(this.btn("RESET STORY PROGRESS",()=>{confirm("Erase story progress, suits and stats? Settings are kept.")&&(t.save.reset(),this.title())},"danger")),i.appendChild(this.btn("BACK",()=>{t.save.write(),this.back()}))}mods(){let t=this.game,e=this.panel("MODS & PACKS");e.appendChild(Dt("p","note","Packs are .js files listed in <b>packs/packs.manifest.js</b>. Toggle optional packs here (core packs always load). See docs/MODDING.md to make your own suits, cities, gadgets, chapters and dialogue."));let i=Dt("div","mods");for(let n of t.registry.packs){let r=!t.registry.disabled.has(n.id),o=Dt("div","mod"+(r?" on":""));o.innerHTML=`<div><b>${n.name||n.id}</b> <small>v${n.version||"1.0"} \xB7 ${n.author||"unknown"}</small><br><span>${n.description||""}</span></div>`;let a=["cities","skins","gadgets","chapters","sideQuests","crimes"].map(l=>n[l]&&n[l].length?`${n[l].length} ${l}`:"").filter(Boolean).join(" \xB7 ");if(o.appendChild(Dt("small","counts",a)),n.core)o.appendChild(Dt("span","core","CORE"));else{let l=this.btn(r?"ENABLED":"DISABLED",()=>{let c=new Set(t.save.data.mods.disabled);r?c.add(n.id):c.delete(n.id),t.save.data.mods.disabled=[...c],t.registry.setDisabled(t.save.data.mods.disabled),t.save.write(),this.mods()},r?"sel":"");o.appendChild(l)}i.appendChild(o)}e.appendChild(i),e.appendChild(this.btn("BACK",()=>this.back()))}controls(){let t=this.panel("MOVES & CONTROLS");t.appendChild(Dt("div","controls-doc",Gx)),t.appendChild(this.btn("BACK",()=>this.back()))}credits(){let t=this.game,e=this.panel("CREDITS");e.appendChild(Dt("div","controls-doc",t.registry.str("credits",""))),e.appendChild(this.btn("BACK",()=>this.back()))}chapterComplete(t,e,i){let n=this.panel(t.title+" \u2014 COMPLETE","complete");n.appendChild(Dt("p","note",t.outroText||"To be continued\u2026")),t.reward&&t.reward.unlockSkins&&n.appendChild(Dt("p","note","Suit unlocked: <b>"+t.reward.unlockSkins.map(r=>(this.game.registry.get("skins",r)||{}).name||r).join(", ")+"</b>")),e&&n.appendChild(this.btn("NEXT: "+e.title,()=>{this.hide(),i("next")},"big")),n.appendChild(this.btn("FREE ROAM",()=>{this.hide(),i("roam")})),n.appendChild(this.btn("TITLE",()=>{this.hide(),i("title")}))}};function Vo(s){return{fp:"First-person",tp:"Third-person",shoulderR:"Shoulder (Right)",shoulderL:"Shoulder (Left)"}[s]||s}var Gx=`
<table>
<tr><th>Touch / Pad</th><th>Keyboard</th><th>Action</th></tr>
<tr><td>Left stick</td><td>WASD</td><td>Move (push fully to run)</td></tr>
<tr><td>Drag screen</td><td>Mouse (click to lock)</td><td>Look</td></tr>
<tr><td style="color:#1e7bff">\u2715 Cross</td><td>Space</td><td>Jump \xB7 Vault \xB7 Mantle \xB7 Swing-jump \xB7 Wall-jump \xB7 <b>in the air: TRICK</b> (stick picks flip/corkscrew)</td></tr>
<tr><td style="color:#ff1e3c">\u25CB Circle</td><td>C</td><td>Crouch \xB7 Slide (while running) \xB7 Drop \xB7 Dodge (when \u26A0) \xB7 hold in the air: DIVE</td></tr>
<tr><td style="color:#ff2fb3">\u25A0 Square</td><td>E</td><td>Interact \xB7 Talk \xB7 Strike (6-hit combo) \xB7 Takedown \xB7 (hold) Reload from fluid</td></tr>
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
<p><b>Swinging:</b> anchors need something tall to stick to. Keep R2 held to chain swings; let go while rising (not at the very top) for a <b>PERFECT</b> release boost; \u2715 for a swing-jump flip.</p>
<p><b>Style:</b> chain swings, perfect releases and air tricks build STYLE. Land clean to cash it into \u2699 PARTS \u2014 bail and you lose it.</p>
<p><b>Home:</b> Kettle's Row, teal rooftop hatch (or \u2302 GO HOME in the pause menu / map). Workstation = refills + upgrades, Kitchen = meal buffs, BRASS-64 = BASIC computer, Sewing = design your own suits.</p>`;var Vu=22050;function $t(s,t,e,i,n,r=1e-4){s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(i,t+e),s.gain.exponentialRampToValueAtTime(r,t+e+n)}function _c(s,t){let e=s.createBuffer(1,Math.ceil(s.sampleRate*t),s.sampleRate),i=e.getChannelData(0),n=1234567;for(let r=0;r<i.length;r++)n=n*1103515245+12345&2147483647,i[r]=n/1073741823-1;return e}var je=(s,t)=>{let e=s.createBufferSource();return e.buffer=_c(s,t),e},ye=(s,t,e)=>{let i=s.createOscillator();return i.type=t,i.frequency.value=e,i},Yt=(s,t=1)=>{let e=s.createGain();return e.gain.value=t,e},Ie=(s,t,e,i=1)=>{let n=s.createBiquadFilter();return n.type=t,n.frequency.value=e,n.Q.value=i,n},Wu={thwip:{dur:.34,build(s,t){let e=je(s,.3),i=Ie(s,"bandpass",4200,2.2),n=Yt(s);i.frequency.setValueAtTime(5200,0),i.frequency.exponentialRampToValueAtTime(900,.2),$t(n,0,.004,.9,.22),e.connect(i).connect(n).connect(t),e.start(0);let r=ye(s,"triangle",2400),o=Yt(s);r.frequency.setValueAtTime(2600,.01),r.frequency.exponentialRampToValueAtTime(320,.16),$t(o,.01,.005,.35,.15),r.connect(o).connect(t),r.start(0),r.stop(.3);let a=je(s,.02),l=Ie(s,"highpass",2500),c=Yt(s);$t(c,0,.001,.6,.015),a.connect(l).connect(c).connect(t),a.start(0)}},zip:{dur:.5,build(s,t){let e=ye(s,"sawtooth",180),i=Ie(s,"lowpass",300,6),n=Yt(s);e.frequency.setValueAtTime(140,0),e.frequency.exponentialRampToValueAtTime(620,.4),i.frequency.setValueAtTime(300,0),i.frequency.exponentialRampToValueAtTime(2600,.4),$t(n,0,.02,.35,.42),e.connect(i).connect(n).connect(t),e.start(0),e.stop(.5);let r=je(s,.5),o=Ie(s,"bandpass",1500,1.5),a=Yt(s);$t(a,0,.05,.4,.4),r.connect(o).connect(a).connect(t),r.start(0)}},release:{dur:.25,build(s,t){let e=je(s,.25),i=Ie(s,"highpass",3e3),n=Yt(s);$t(n,0,.003,.4,.12),e.connect(i).connect(n).connect(t),e.start(0)}},whoosh:{dur:.7,build(s,t){let e=je(s,.7),i=Ie(s,"bandpass",400,.9),n=Yt(s);i.frequency.setValueAtTime(350,0),i.frequency.exponentialRampToValueAtTime(1800,.3),i.frequency.exponentialRampToValueAtTime(300,.65),$t(n,0,.18,.7,.45),e.connect(i).connect(n).connect(t),e.start(0)}},step:{dur:.09,build(s,t){let e=je(s,.09),i=Ie(s,"lowpass",700),n=Yt(s);$t(n,0,.002,.5,.06),e.connect(i).connect(n).connect(t),e.start(0)}},land:{dur:.35,build(s,t){let e=ye(s,"sine",140),i=Yt(s);e.frequency.exponentialRampToValueAtTime(42,.25),$t(i,0,.003,.9,.28),e.connect(i).connect(t),e.start(0),e.stop(.35);let n=je(s,.2),r=Ie(s,"lowpass",900),o=Yt(s);$t(o,0,.002,.5,.15),n.connect(r).connect(o).connect(t),n.start(0)}},jump:{dur:.2,build(s,t){let e=je(s,.2),i=Ie(s,"bandpass",900,1),n=Yt(s);$t(n,0,.01,.35,.14),e.connect(i).connect(n).connect(t),e.start(0)}},punch:{dur:.25,build(s,t){let e=je(s,.12),i=Ie(s,"lowpass",2200),n=Yt(s);$t(n,0,.001,.9,.08),e.connect(i).connect(n).connect(t),e.start(0);let r=ye(s,"sine",180),o=Yt(s);r.frequency.exponentialRampToValueAtTime(55,.18),$t(o,0,.002,1,.18),r.connect(o).connect(t),r.start(0),r.stop(.25)}},whiff:{dur:.2,build(s,t){let e=je(s,.2),i=Ie(s,"bandpass",1200,2),n=Yt(s);i.frequency.setValueAtTime(700,0),i.frequency.exponentialRampToValueAtTime(2400,.15),$t(n,0,.03,.4,.12),e.connect(i).connect(n).connect(t),e.start(0)}},takedown:{dur:.6,build(s,t){Wu.punch.build(s,t);let e=ye(s,"square",90),i=Ie(s,"lowpass",400),n=Yt(s);e.frequency.exponentialRampToValueAtTime(40,.4),$t(n,.05,.005,.5,.45),e.connect(i).connect(n).connect(t),e.start(0),e.stop(.6)}},gunshot:{dur:.4,build(s,t){let e=je(s,.4),i=Ie(s,"highpass",600),n=Yt(s);$t(n,0,.001,1,.25),e.connect(i).connect(n).connect(t),e.start(0);let r=ye(s,"sine",120),o=Yt(s);r.frequency.exponentialRampToValueAtTime(40,.15),$t(o,0,.001,.8,.14),r.connect(o).connect(t),r.start(0),r.stop(.3)}},explosion:{dur:1.6,build(s,t){let e=je(s,1.6),i=Ie(s,"lowpass",1200,.7),n=Yt(s);i.frequency.setValueAtTime(1600,0),i.frequency.exponentialRampToValueAtTime(90,1.4),$t(n,0,.005,1,1.5),e.connect(i).connect(n).connect(t),e.start(0);let r=ye(s,"sine",70),o=Yt(s);r.frequency.exponentialRampToValueAtTime(28,1),$t(o,0,.005,1,1),r.connect(o).connect(t),r.start(0),r.stop(1.4)}},pod:{dur:.4,build(s,t){let e=ye(s,"sine",300),i=Yt(s);e.frequency.setValueAtTime(900,0),e.frequency.exponentialRampToValueAtTime(140,.25),$t(i,0,.003,.6,.3),e.connect(i).connect(t),e.start(0),e.stop(.4);let n=je(s,.3),r=Ie(s,"bandpass",600,3),o=Yt(s);$t(o,.02,.01,.6,.22),n.connect(r).connect(o).connect(t),n.start(0)}},chirp:{dur:.6,build(s,t){for(let e=0;e<3;e++){let i=e*.16,n=ye(s,"sine",2200),r=Yt(s);n.frequency.setValueAtTime(2100,i),n.frequency.exponentialRampToValueAtTime(3400,i+.08),$t(r,i,.005,.35,.09),n.connect(r).connect(t),n.start(i),n.stop(i+.14)}}},alert:{dur:.45,build(s,t){[[0,740],[.12,1110]].forEach(([e,i])=>{let n=ye(s,"square",i),r=Ie(s,"lowpass",3e3),o=Yt(s);$t(o,e,.005,.25,.25),n.connect(r).connect(o).connect(t),n.start(e),n.stop(e+.32)})}},suspicious:{dur:.5,build(s,t){let e=ye(s,"triangle",520),i=ye(s,"sine",9),n=Yt(s,40),r=Yt(s);i.connect(n).connect(e.frequency),$t(r,0,.05,.25,.4),e.connect(r).connect(t),e.start(0),i.start(0),e.stop(.5),i.stop(.5)}},collect:{dur:.6,build(s,t){[660,880,1320,1760].forEach((e,i)=>{let n=i*.07,r=ye(s,"square",e),o=Yt(s);$t(o,n,.004,.18,.18),r.connect(o).connect(t),r.start(n),r.stop(n+.25)})}},ui_click:{dur:.08,build(s,t){let e=ye(s,"square",1200),i=Yt(s);$t(i,0,.002,.15,.05),e.connect(i).connect(t),e.start(0),e.stop(.08)}},ui_ok:{dur:.3,build(s,t){[880,1320].forEach((e,i)=>{let n=i*.08,r=ye(s,"triangle",e),o=Yt(s);$t(o,n,.004,.3,.15),r.connect(o).connect(t),r.start(n),r.stop(n+.2)})}},ui_back:{dur:.25,build(s,t){[880,587].forEach((e,i)=>{let n=i*.08,r=ye(s,"triangle",e),o=Yt(s);$t(o,n,.004,.25,.12),r.connect(o).connect(t),r.start(n),r.stop(n+.2)})}},blip:{dur:.05,build(s,t){let e=ye(s,"square",520),i=Ie(s,"lowpass",2e3),n=Yt(s);$t(n,0,.002,.12,.035),e.connect(i).connect(n).connect(t),e.start(0),e.stop(.05)}},laugh:{dur:1.4,build(s,t){[0,.2,.38,.55,.75].forEach((e,i)=>{let n=520-i*35,r=ye(s,"sawtooth",n),o=ye(s,"sine",28),a=Yt(s,60),l=Ie(s,"bandpass",1100,2),c=Yt(s);o.connect(a).connect(r.frequency),r.frequency.setValueAtTime(n*1.15,e),r.frequency.exponentialRampToValueAtTime(n*.8,e+.15),$t(c,e,.01,.4,.15),r.connect(l).connect(c).connect(t),r.start(e),o.start(e),r.stop(e+.2),o.stop(e+.2)})}},clang:{dur:1,build(s,t){[220,347,513,761].forEach((n,r)=>{let o=ye(s,"sine",n),a=Yt(s);$t(a,0,.002,.25/(r+1),.9),o.connect(a).connect(t),o.start(0),o.stop(1)});let e=je(s,.05),i=Yt(s);$t(i,0,.001,.6,.04),e.connect(i).connect(t),e.start(0)}},bell:{dur:2.5,build(s,t){[196,392,466,588,784].forEach((e,i)=>{let n=ye(s,"sine",e),r=Yt(s);$t(r,0,.005,.28/(1+i*.6),2.3),n.connect(r).connect(t),n.start(0),n.stop(2.5)})}},ignite:{dur:.9,build(s,t){let e=je(s,.9),i=Ie(s,"lowpass",300,1),n=Yt(s);i.frequency.exponentialRampToValueAtTime(2500,.4),$t(n,0,.15,.8,.7),e.connect(i).connect(n).connect(t),e.start(0)}},hurt:{dur:.3,build(s,t){let e=ye(s,"sawtooth",220),i=Ie(s,"lowpass",900),n=Yt(s);e.frequency.exponentialRampToValueAtTime(110,.25),$t(n,0,.005,.4,.25),e.connect(i).connect(n).connect(t),e.start(0),e.stop(.3)}},siren:{dur:1.6,build(s,t){let e=ye(s,"square",700),i=Ie(s,"lowpass",1600),n=Yt(s);for(let r=0;r<4;r++)e.frequency.setValueAtTime(r%2?950:700,r*.4);$t(n,0,.05,.12,1.5),e.connect(i).connect(n).connect(t),e.start(0),e.stop(1.6)}},ride:{dur:.3,build(s,t){let e=ye(s,"triangle",330),i=Yt(s);e.frequency.exponentialRampToValueAtTime(660,.12),$t(i,0,.005,.25,.2),e.connect(i).connect(t),e.start(0),e.stop(.3)}},sense:{dur:.7,build(s,t){[1568,2093,2637].forEach((e,i)=>{let n=ye(s,"sine",e),r=Yt(s);$t(r,i*.03,.01,.15,.6),n.connect(r).connect(t),n.start(0),n.stop(.7)})}}},Go=class{constructor(t){this.settings=t,this.ctx=null,this.buffers={},this.ready=!1,this.recipes={...Wu},this.loops={},this._lastPlay={}}addRecipe(t,e){this.recipes[t]=e,this.ready&&this._render(t).then(i=>this.buffers[t]=i)}async unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.connect(this.master),this.applyVolumes(),await this.renderAll(),this._makeLoops(),this.ready=!0,B.emit("audio:ready"))}applyVolumes(){this.ctx&&(this.sfxBus.gain.value=this.settings.sfx,this.musicBus.gain.value=this.settings.music)}async _render(t){let e=this.recipes[t],i=window.OfflineAudioContext||window.webkitOfflineAudioContext,n=new i(1,Math.ceil(Vu*e.dur),Vu),r=n.createGain();r.connect(n.destination),e.build(n,r);let o=await n.startRendering(),a=o.getChannelData(0),l=0;for(let h=0;h<a.length;h++){let u=Math.abs(a[h]);u>l&&(l=u)}let c=l>.9?.9/l:1;if(c!==1)for(let h=0;h<a.length;h++)a[h]*=c;return o}async renderAll(){let t=Object.keys(this.recipes);await Promise.all(t.map(async e=>{try{this.buffers[e]=await this._render(e)}catch(i){console.warn("sfx render failed",e,i)}}))}play(t,{vol:e=1,rate:i=1,vary:n=.06,minGap:r=.03}={}){if(!this.ready||!this.buffers[t])return;let o=this.ctx.currentTime;if(this._lastPlay[t]&&o-this._lastPlay[t]<r)return;this._lastPlay[t]=o;let a=this.ctx.createBufferSource();a.buffer=this.buffers[t],a.playbackRate.value=i*(1+(Math.random()*2-1)*n);let l=this.ctx.createGain();l.gain.value=e,a.connect(l).connect(this.sfxBus),a.start(o)}_makeLoops(){let t=this.ctx,e=(i,n,r)=>{let o=t.createBufferSource();o.buffer=_c(t,2),o.loop=!0;let a=t.createBiquadFilter();a.type=i,a.frequency.value=n,a.Q.value=r;let l=t.createGain();return l.gain.value=0,o.connect(a).connect(l).connect(this.sfxBus),o.start(),{src:o,f:a,g:l}};this.loops.wind=e("bandpass",500,.6),this.loops.fire=e("lowpass",500,1.5),this.loops.city=e("lowpass",220,.5),this.loops.roll=e("bandpass",180,2),this._music()}setLoop(t,e,i){let n=this.loops[t];if(!n)return;let r=this.ctx.currentTime;n.g.gain.setTargetAtTime(e,r,.15),i&&n.f.frequency.setTargetAtTime(i,r,.2)}_music(){let t=this.ctx;this.intensity=0,this.musicOn=!0;let e=[0,0,7,5,3,3,7,10],i=55*Math.pow(2,3/12),n=0,r=t.currentTime+.2,o=()=>{if(this.ctx){for(;r<t.currentTime+.25;){let a=96+this.intensity*40,l=60/a/2;this.musicOn&&this.settings.music>0&&(n%2===0&&Gu(t,this.musicBus,"triangle",i*Math.pow(2,e[n/2%8]/12),r,l*1.8,.22),Wx(t,this.musicBus,r,n%4===2?.06:.025),this.intensity>.4&&n%4===0&&Gu(t,this.musicBus,"square",i*4*Math.pow(2,[0,3,7,10][n/4%4]/12),r,l,.05)),r+=l,n=(n+1)%64}setTimeout(o,90)}};o()}toWav(t){let e=this.buffers[t];if(!e)return null;let i=e.getChannelData(0),n=new ArrayBuffer(44+i.length*2),r=new DataView(n),o=(a,l)=>{for(let c=0;c<l.length;c++)r.setUint8(a+c,l.charCodeAt(c))};o(0,"RIFF"),r.setUint32(4,36+i.length*2,!0),o(8,"WAVE"),o(12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,e.sampleRate,!0),r.setUint32(28,e.sampleRate*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),o(36,"data"),r.setUint32(40,i.length*2,!0);for(let a=0;a<i.length;a++)r.setInt16(44+a*2,Math.max(-1,Math.min(1,i[a]))*32767,!0);return n}};function Gu(s,t,e,i,n,r,o){let a=s.createOscillator();a.type=e,a.frequency.value=i;let l=s.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(o,n+.01),l.gain.exponentialRampToValueAtTime(1e-4,n+r),a.connect(l).connect(t),a.start(n),a.stop(n+r+.05)}var vc=null;function Wx(s,t,e,i){vc||(vc=_c(s,.05));let n=s.createBufferSource();n.buffer=vc;let r=s.createBiquadFilter();r.type="highpass",r.frequency.value=7e3;let o=s.createGain();o.gain.setValueAtTime(i,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.045),n.connect(r).connect(o).connect(t),n.start(e)}var Xx=new Set(["PRINT","?","INPUT","LET","IF","THEN","ELSE","GOTO","GOSUB","RETURN","FOR","TO","STEP","NEXT","END","STOP","REM","CLS","LOCATE","COLOR","WAIT","DIM","BEEP","RANDOMIZE","DATA","READ","RESTORE","ON","RUN","AND","OR","NOT","MOD"]),qx=new Set(["RND","INT","ABS","SQR","SIN","COS","TAN","ATN","LOG","EXP","SGN","LEN","VAL","STR$","CHR$","ASC","LEFT$","RIGHT$","MID$","KEY","INKEY$","SCRN","TIME","PI"]),Te=class extends Error{};function Xu(s){let t=[],e=0;for(;e<s.length;){let i=s[e];if(i===" "||i==="	"){e++;continue}if(i==='"'){let r=e+1;for(;r<s.length&&s[r]!=='"';)r++;t.push({t:"str",v:s.slice(e+1,r)}),e=r+1;continue}if(/[0-9.]/.test(i)){let r=e;for(;r<s.length&&/[0-9.]/.test(s[r]);)r++;if(s[r]==="E"&&/[-+0-9]/.test(s[r+1]||""))for(r+=2;/[0-9]/.test(s[r]||"");)r++;t.push({t:"num",v:parseFloat(s.slice(e,r))}),e=r;continue}if(/[A-Za-z]/.test(i)){let r=e;for(;r<s.length&&/[A-Za-z0-9_]/.test(s[r]);)r++;s[r]==="$"&&r++;let o=s.slice(e,r).toUpperCase();if(o==="REM")return t.push({t:"id",v:"REM"}),t.push({t:"str",v:s.slice(r).trim()}),t;t.push({t:"id",v:o}),e=r;continue}if(i==="'")return t.push({t:"id",v:"REM"}),t;let n=s.slice(e,e+2);if(n==="<>"||n==="<="||n===">="){t.push({t:"op",v:n}),e+=2;continue}if("+-*/^=<>(),;:?".includes(i)){t.push(i==="?"?{t:"id",v:"PRINT"}:{t:"op",v:i}),e++;continue}throw new Te("SYNTAX ERROR ("+i+")")}return t}function qu(s){let t=[],e=[];for(let i of s)i.t==="op"&&i.v===":"?(t.push(e),e=[]):e.push(i);return t.push(e),t.filter(i=>i.length)}var Yu=s=>{let t=Math.abs(s)<1e-9?0:Math.round(s*1e6)/1e6;return(t>=0?" ":"")+t+" "},Wo=class{constructor(t){this.io=t,this.program=new Map,this.reset()}reset(){this.vars={},this.arrays={},this.forStack=[],this.gosub=[],this.data=[],this.dataPtr=0,this.running=!1,this.waitFrames=0,this.waiting=!1}setLine(t,e){e.trim()?this.program.set(t,e):this.program.delete(t)}listing(t=0,e=1e9){return[...this.program.keys()].sort((i,n)=>i-n).filter(i=>i>=t&&i<=e).map(i=>i+" "+this.program.get(i))}source(){return this.listing().join(`
`)}load(t){this.program.clear();for(let e of t.split(/\r?\n/)){let i=e.match(/^\s*(\d+)\s?(.*)$/);i&&this.program.set(+i[1],i[2])}}compile(){this.lines=[],this.lineIndex=new Map,this.data=[];for(let t of[...this.program.keys()].sort((e,i)=>e-i)){let e;try{e=qu(Xu(this.program.get(t)))}catch(i){throw new Te(i.message+" IN "+t)}this.lineIndex.set(t,this.lines.length),this.lines.push({n:t,stmts:e});for(let i of e)if(i[0]&&i[0].v==="DATA")for(let n=1;n<i.length;n++){let r=i[n];r.t==="num"?this.data.push(r.v):r.t==="str"?this.data.push(r.v):r.t==="op"&&r.v==="-"&&i[n+1]&&i[n+1].t==="num"&&(this.data.push(-i[n+1].v),n++)}}}run(){this.reset(),this.compile(),this.li=0,this.si=0,this.running=!0,this.startTime=performance.now()}stop(t){this.running=!1,this.waiting=!1,t&&this.io.print(t+`
`)}direct(t){this.lines||this.compile();let e=qu(Xu(t));this.directStmts=e,this.li=-1,this.si=0,this.running=!0}step(t=1500){if(!(!this.running||this.waiting)){if(this.waitFrames>0){this.waitFrames--;return}try{for(;t-- >0&&this.running&&!this.waiting&&this.waitFrames<=0;){let e;if(this.li===-1)e=this.directStmts;else{if(this.li>=this.lines.length){this.running=!1;break}e=this.lines[this.li].stmts}if(this.si>=e.length){if(this.li===-1){this.running=!1;break}this.li++,this.si=0;continue}let i=e[this.si];this.si++,this.exec(i,0)}}catch(e){let i=this.li>=0&&this.lines[this.li]?" IN "+this.lines[this.li].n:"";this.stop("?"+(e instanceof Te?e.message:"ERROR: "+e.message)+i)}}}jump(t){let e=this.lineIndex.get(t);if(e===void 0)throw new Te("UNDEF'D LINE "+t);this.li=e,this.si=0}exec(t,e){let i=t[e];if(!i)return;switch(i.t==="id"?i.v:null){case"REM":case"DATA":return;case"PRINT":return this.doPrint(t,e+1);case"CLS":this.io.cls();return;case"END":case"STOP":this.running=!1;return;case"RUN":this.run();return;case"GOTO":{let r=this.evalAt(t,e+1);this.jump(r);return}case"GOSUB":{let r=this.evalAt(t,e+1);this.gosub.push([this.li,this.si]),this.jump(r);return}case"RETURN":{let r=this.gosub.pop();if(!r)throw new Te("RETURN WITHOUT GOSUB");[this.li,this.si]=r;return}case"LET":return this.assign(t,e+1);case"IF":return this.doIf(t,e);case"FOR":return this.doFor(t,e);case"NEXT":return this.doNext(t,e);case"INPUT":return this.doInput(t,e+1);case"LOCATE":{let r=this.args(t,e+1);this.io.locate(r[0]|0,r[1]|0);return}case"COLOR":{let r=this.args(t,e+1);this.io.color(r[0],r[1]);return}case"WAIT":{let r=this.args(t,e+1);this.waitFrames=Math.max(1,r[0]|0);return}case"BEEP":{let r=this.args(t,e+1);this.io.beep(r[0]||660,r[1]||6);return}case"RANDOMIZE":return;case"RESTORE":this.dataPtr=0;return;case"READ":{let r=e+1;for(;r<t.length;){let o=t[r],a=this.lvalue(t,r);if(r=a.next,this.dataPtr>=this.data.length)throw new Te("OUT OF DATA");if(this.store(a,this.data[this.dataPtr++]),t[r]&&t[r].v===",")r++;else break}return}case"DIM":{let r=e+1;for(;r<t.length;){let o=t[r].v;r+=2;let a=[],l=0,c=r;for(;r<t.length;r++){if(t[r].v==="("&&l++,t[r].v===")"){if(l===0)break;l--}t[r].v===","&&l===0&&(a.push(this.evalRange(t,c,r)),c=r+1)}a.push(this.evalRange(t,c,r)),r++;let h=a.reduce((u,f)=>u*((f|0)+1),1);if(h>2e4)throw new Te("ARRAY TOO BIG");this.arrays[o]={dims:a.map(u=>(u|0)+1),data:new Array(h).fill(o.endsWith("$")?"":0)},t[r]&&t[r].v===","&&r++}return}case"ON":{let r=e+1,o=0,a=r;for(;a<t.length&&(t[a].v==="("&&o++,t[a].v===")"&&o--,!(o===0&&(t[a].v==="GOTO"||t[a].v==="GOSUB")));a++);let l=this.evalRange(t,r,a)|0,c=t[a].v,h=[];for(let u=a+1;u<t.length;u++)t[u].t==="num"&&h.push(t[u].v);l>=1&&l<=h.length&&(c==="GOSUB"&&this.gosub.push([this.li,this.si]),this.jump(h[l-1]));return}default:if(i.t==="id")return this.assign(t,e);throw new Te("SYNTAX ERROR")}}doPrint(t,e){let i="",n=!0;for(;e<t.length;){let r=t[e];if(r.t==="op"&&r.v===";"){n=!1,e++;continue}if(r.t==="op"&&r.v===","){i+=" ".repeat(10-i.length%10),n=!1,e++;continue}let o=e,a=0;for(;o<t.length;o++){let c=t[o].v;if(c==="("&&a++,c===")"&&a--,a===0&&t[o].t==="op"&&(c===";"||c===",")||t[o].t==="id"&&t[o].v==="ELSE"&&a===0)break}let l=this.evalRange(t,e,o);if(i+=typeof l=="number"?Yu(l):l,n=!0,e=o,t[e]&&t[e].t==="id"&&t[e].v==="ELSE")break}this.io.print(i+(n?`
`:""))}doIf(t,e){let i=-1,n=-1;for(let a=e+1;a<t.length;a++)if(t[a].t==="id"&&t[a].v==="THEN"&&i<0&&(i=a),t[a].t==="id"&&t[a].v==="ELSE"&&i>=0){n=a;break}if(i<0&&(i=t.findIndex((a,l)=>l>e&&a.t==="id"&&a.v==="GOTO"),i<0))throw new Te("SYNTAX ERROR");let r=this.evalRange(t,e+1,i),o=(a,l)=>{let c=t.slice(a,l===-1?t.length:l);if(c.length===1&&c[0].t==="num"){this.jump(c[0].v);return}if(t[i].v==="GOTO"){this.jump(this.evalRange(t,i+1,l===-1?t.length:l));return}this.exec(c,0)};r?o(t[i].v==="GOTO"?i:i+1,n):n>=0?(o(n+1,-1),this.li>=0&&(this.si=1/0)):this.si=1/0}doFor(t,e){let i=t[e+1].v,n=-1,r=-1;for(let c=e+2;c<t.length;c++)t[c].v==="TO"&&n<0&&(n=c),t[c].v==="STEP"&&(r=c);let o=this.evalRange(t,e+3,n),a=this.evalRange(t,n+1,r>0?r:t.length),l=r>0?this.evalRange(t,r+1,t.length):1;this.vars[i]=o,this.forStack=this.forStack.filter(c=>c.name!==i),this.forStack.push({name:i,end:a,step:l,li:this.li,si:this.si})}doNext(t,e){let i=t[e+1]?t[e+1].v:null,n;for(;this.forStack.length&&(n=this.forStack[this.forStack.length-1],!(!i||n.name===i));)this.forStack.pop(),n=null;if(!n)throw new Te("NEXT WITHOUT FOR");this.vars[n.name]+=n.step,n.step>=0&&this.vars[n.name]<=n.end||n.step<0&&this.vars[n.name]>=n.end?(this.li=n.li,this.si=n.si):this.forStack.pop()}doInput(t,e){let i="? ";t[e]&&t[e].t==="str"&&(i=t[e].v+"? ",e++,t[e]&&(t[e].v===";"||t[e].v===",")&&e++);let n=this.lvalue(t,e);this.waiting=!0,this.io.input(i,r=>{this.store(n,n.name.endsWith("$")?r:parseFloat(r)||0),this.waiting=!1})}assign(t,e){let i=this.lvalue(t,e);if(!t[i.next]||t[i.next].v!=="=")throw new Te("SYNTAX ERROR");this.store(i,this.evalRange(t,i.next+1,t.length))}lvalue(t,e){let i=t[e].v;if(!i||t[e].t!=="id")throw new Te("SYNTAX ERROR");if(t[e+1]&&t[e+1].v==="("){let n=0,r=e+2,o=r,a=[];for(;r<t.length;r++){if(t[r].v==="("&&n++,t[r].v===")"){if(n===0)break;n--}t[r].v===","&&n===0&&(a.push(this.evalRange(t,o,r)),o=r+1)}return a.push(this.evalRange(t,o,r)),{name:i,idx:a,next:r+1}}return{name:i,next:e+1}}arr(t,e){let i=this.arrays[t];i||(i=this.arrays[t]={dims:e.map(()=>11),data:new Array(Math.pow(11,e.length)).fill(t.endsWith("$")?"":0)});let n=0,r=1;for(let o=e.length-1;o>=0;o--){let a=e[o]|0;if(a<0||a>=i.dims[o])throw new Te("BAD SUBSCRIPT");n+=a*r,r*=i.dims[o]}return{a:i,o:n}}store(t,e){if(t.idx){let{a:i,o:n}=this.arr(t.name,t.idx);i.data[n]=e}else this.vars[t.name]=e}args(t,e){let i=[],n=e,r=0;for(let o=e;o<=t.length;o++){let a=t[o]&&t[o].v;a==="("&&r++,a===")"&&r--,(o===t.length||a===","&&r===0)&&(o>n&&i.push(this.evalRange(t,n,o)),n=o+1)}return i}evalAt(t,e){return this.evalRange(t,e,t.length)}evalRange(t,e,i){return this.tk=t,this.pos=e,this.end=i,this.eOr()}peek(){return this.pos<this.end?this.tk[this.pos]:null}eOr(){let t=this.eAnd();for(;;){let e=this.peek();if(e&&e.v==="OR"){this.pos++;let i=this.eAnd();t=t||i?-1:0}else return t}}eAnd(){let t=this.eNot();for(;;){let e=this.peek();if(e&&e.v==="AND"){this.pos++;let i=this.eNot();t=t&&i?-1:0}else return t}}eNot(){let t=this.peek();return t&&t.v==="NOT"?(this.pos++,this.eNot()?0:-1):this.eCmp()}eCmp(){let t=this.eAdd(),e=this.peek();if(e&&e.t==="op"&&["=","<>","<",">","<=",">="].includes(e.v)){this.pos++;let i=this.eAdd();return(e.v==="="?t===i:e.v==="<>"?t!==i:e.v==="<"?t<i:e.v===">"?t>i:e.v==="<="?t<=i:t>=i)?-1:0}return t}eAdd(){let t=this.eMul();for(;;){let e=this.peek();if(e&&e.t==="op"&&(e.v==="+"||e.v==="-")){this.pos++;let i=this.eMul();t=e.v==="+"?typeof t=="string"||typeof i=="string"?String(t)+String(i):t+i:t-i}else return t}}eMul(){let t=this.ePow();for(;;){let e=this.peek();if(e&&(e.t==="op"&&(e.v==="*"||e.v==="/")||e.v==="MOD")){this.pos++;let i=this.ePow();if(e.v==="/"&&i===0)throw new Te("DIVISION BY ZERO");t=e.v==="*"?t*i:e.v==="/"?t/i:(t%i+i)%i}else return t}}ePow(){let t=this.eUnary();for(;;){let e=this.peek();if(e&&e.v==="^")this.pos++,t=Math.pow(t,this.eUnary());else return t}}eUnary(){let t=this.peek();return t&&t.t==="op"&&t.v==="-"?(this.pos++,-this.eUnary()):t&&t.t==="op"&&t.v==="+"?(this.pos++,this.eUnary()):this.ePrim()}ePrim(){let t=this.peek();if(!t)throw new Te("SYNTAX ERROR");if(this.pos++,t.t==="num"||t.t==="str")return t.v;if(t.t==="op"&&t.v==="("){let e=this.eOr();return this.expect(")"),e}if(t.t==="id"){if(qx.has(t.v))return this.callFn(t.v);if(Xx.has(t.v))throw new Te("SYNTAX ERROR");let e=this.peek();if(e&&e.v==="("){this.pos++;let n=[this.eOr()];for(;this.peek()&&this.peek().v===",";)this.pos++,n.push(this.eOr());this.expect(")");let{a:r,o}=this.arr(t.v,n);return r.data[o]}let i=this.vars[t.v];return i===void 0?t.v.endsWith("$")?"":0:i}throw new Te("SYNTAX ERROR")}expect(t){let e=this.peek();if(!e||e.v!==t)throw new Te("SYNTAX ERROR");this.pos++}fnArgs(){let t=this.peek();if(!t||t.v!=="(")return[];if(this.pos++,this.peek()&&this.peek().v===")")return this.pos++,[];let e=[this.eOr()];for(;this.peek()&&this.peek().v===",";)this.pos++,e.push(this.eOr());return this.expect(")"),e}callFn(t){let e=this.fnArgs(),i=e[0];switch(t){case"RND":return Math.random();case"INT":return Math.floor(i);case"ABS":return Math.abs(i);case"SQR":return Math.sqrt(i);case"SIN":return Math.sin(i);case"COS":return Math.cos(i);case"TAN":return Math.tan(i);case"ATN":return Math.atan(i);case"LOG":return Math.log(i);case"EXP":return Math.exp(i);case"SGN":return Math.sign(i);case"LEN":return String(i).length;case"VAL":return parseFloat(i)||0;case"STR$":return Yu(i).trim();case"CHR$":return String.fromCharCode(i);case"ASC":return String(i).charCodeAt(0)||0;case"LEFT$":return String(i).slice(0,e[1]);case"RIGHT$":return e[1]>0?String(i).slice(-e[1]):"";case"MID$":return String(i).substr(e[1]-1,e[2]===void 0?void 0:e[2]);case"KEY":return this.io.key();case"INKEY$":return this.io.inkey();case"SCRN":return this.io.scrn(e[0]|0,e[1]|0);case"TIME":return Math.floor((performance.now()-(this.startTime||0))/1e3*60);case"PI":return Math.PI}return 0}},Hn={HELLO:`10 REM WELCOME DISK
20 CLS: COLOR 7: PRINT "BRASS-64 BASIC  *  WELCOME, {HERO}"
30 COLOR 13: PRINT
40 PRINT "TRY:  DIR        (LIST PROGRAMS)"
50 PRINT "      LOAD SNAKE   THEN  RUN"
60 PRINT "      LIST       (SEE THE CODE)"
70 PRINT "      NEW        (START YOUR OWN)"
80 PRINT "      10 PRINT ";CHR$(34);"HI";CHR$(34);"  (ADD A LINE)"
90 PRINT "      SAVE MINE    HELP   EXIT"
100 PRINT: COLOR 3: PRINT "KEY CODES: 1 UP 2 DOWN 3 LEFT 4 RIGHT"
110 PRINT "           13 ENTER 32 SPACE 27 ESC": COLOR 13`,GUESS:`10 REM GUESS MY NUMBER
20 CLS: N=INT(RND(1)*100)+1: T=0
30 PRINT "I'M THINKING OF A NUMBER 1-100."
40 INPUT "YOUR GUESS";G: T=T+1
50 IF G<N THEN PRINT "HIGHER!": GOTO 40
60 IF G>N THEN PRINT "LOWER!": GOTO 40
70 PRINT "GOT IT IN";T;"TRIES!": BEEP 880,10
80 INPUT "PLAY AGAIN (Y/N)";A$: IF A$="Y" THEN 20
90 END`,SNAKE:`10 REM SNAKE FOR THE BRASS-64 - ARROWS TO STEER
20 CLS: DIM X(400),Y(400)
30 L=4: D=4: S=0: SP=5
40 FOR I=0 TO L-1: X(I)=16+I: Y(I)=12: NEXT I: H=L-1
50 GOSUB 500
60 FOR I=0 TO L-1: LOCATE Y(I),X(I): COLOR 13: PRINT "O";: NEXT I
70 GOSUB 400
100 K=KEY
105 IF K=27 THEN END
110 IF K=1 AND D<>2 THEN D=1
120 IF K=2 AND D<>1 THEN D=2
130 IF K=3 AND D<>4 THEN D=3
140 IF K=4 AND D<>3 THEN D=4
150 NX=X(H): NY=Y(H)
160 IF D=1 THEN NY=NY-1
170 IF D=2 THEN NY=NY+1
180 IF D=3 THEN NX=NX-1
190 IF D=4 THEN NX=NX+1
200 C=SCRN(NY,NX)
210 IF C<>32 AND C<>42 THEN 600
220 H=(H+1) MOD 400: X(H)=NX: Y(H)=NY
230 LOCATE NY,NX: COLOR 13: PRINT "O";
240 IF C=42 THEN L=L+1: S=S+10: GOSUB 450: GOSUB 400: GOTO 280
250 T=(H-L+400) MOD 400
260 LOCATE Y(T),X(T): PRINT " ";
280 WAIT SP
290 GOTO 100
400 REM NEW FOOD
410 FX=INT(RND(1)*38)+1: FY=INT(RND(1)*21)+2
420 IF SCRN(FY,FX)<>32 THEN 410
430 LOCATE FY,FX: COLOR 7: PRINT "*";
440 RETURN
450 LOCATE 0,0: COLOR 1: PRINT "SNAKE   SCORE:";S;"   ";: BEEP 880,3: RETURN
500 REM BORDER
510 COLOR 3
520 FOR I=0 TO 39: LOCATE 1,I: PRINT "#";: LOCATE 23,I: PRINT "#";: NEXT I
530 FOR I=1 TO 23: LOCATE I,0: PRINT "#";: LOCATE I,39: PRINT "#";: NEXT I
540 GOSUB 450: RETURN
600 LOCATE 11,14: COLOR 2: PRINT "GAME  OVER": LOCATE 12,13: PRINT "SCORE:";S: BEEP 110,20
610 LOCATE 14,9: COLOR 1: PRINT "PRESS SPACE TO RETRY"
620 K=KEY: IF K=32 THEN RUN
625 IF K=27 THEN END
630 WAIT 2: GOTO 620`,ROOFRUN:`10 REM ROOFTOP RUN FOR THE BRASS-64
20 CLS: DIM G(40): S=0: Y=0: V=0
30 FOR I=0 TO 39: G(I)=1: NEXT I
40 COLOR 3: LOCATE 0,0: PRINT "ROOFTOP RUN  [SPACE] JUMP  [ESC] QUIT"
50 COLOR 9: FOR I=19 TO 22: LOCATE I,0: PRINT "########################################";: NEXT I
100 FOR I=0 TO 38: G(I)=G(I+1): NEXT I
110 N=1: IF G(38)=0 AND G(37)=1 THEN N=0
120 IF N=1 AND RND(1)<0.16 AND G(38)+G(37)+G(36)+G(35)=4 THEN N=0
130 G(39)=N
140 LOCATE 18,0: FOR I=0 TO 39: IF G(I)=1 THEN COLOR 7: PRINT "=";
150 IF G(I)=0 THEN PRINT " ";
160 NEXT I
200 K=KEY: IF K=27 THEN END
210 IF K=32 AND Y=0 THEN V=1.6: BEEP 660,2
220 LOCATE 17-INT(Y),6: PRINT " ";
230 Y=Y+V: V=V-0.35: IF Y<0 THEN Y=0: V=0
240 IF Y=0 AND G(6)=0 THEN 400
250 LOCATE 17-INT(Y),6: COLOR 13: PRINT "@";
260 S=S+1: LOCATE 1,0: COLOR 1: PRINT "DISTANCE:";S;"   "
270 WAIT 4: GOTO 100
400 LOCATE 17,6: PRINT " ": COLOR 2: LOCATE 10,15: PRINT "YOU FELL!": BEEP 150,20
410 LOCATE 12,11: COLOR 1: PRINT "SPACE TO RUN AGAIN"
420 K=KEY: IF K=32 THEN RUN
430 IF K=27 THEN END
440 WAIT 2: GOTO 420`,LANDER:`10 REM LUNAR LANDER (TEXT)
20 CLS: H=500: V=0: F=120
30 PRINT "LAND THE CAPSULE SOFTLY (SPEED < 5)."
40 PRINT "HEIGHT:";INT(H);"SPEED:";INT(V);"FUEL:";F
50 INPUT "BURN (0-30)";B: IF B<0 THEN B=0
60 IF B>30 THEN B=30
70 IF B>F THEN B=F
80 F=F-B: V=V+5-B/2: H=H-V
90 IF H>0 THEN 40
100 IF V<5 THEN PRINT "TOUCHDOWN! PERFECT LANDING.": BEEP 880,10: GOTO 120
110 PRINT "CRASH AT";INT(V);"M/S... TRY AGAIN.": BEEP 110,20
120 INPUT "AGAIN (Y/N)";A$: IF A$="Y" THEN 20
130 END`,OKAFOR:`10 REM PROPERTY OF DR. I. OKAFOR. HINT: WHO ARE YOU?
20 CLS: COLOR 7: PRINT "== JOURNAL :: ENCRYPTED =="
30 INPUT "PASSWORD";P$
40 IF P$<>"NINE" THEN PRINT "ACCESS DENIED.": BEEP 110,10: END
50 COLOR 13: PRINT: PRINT "ENTRY 12. SUBJECTS ONE THROUGH EIGHT"
60 PRINT "DID NOT WAKE. FERROUS CALLS THEM"
70 PRINT "'DRAFTS'. I CALL THEM BY NAME."
80 PRINT: PRINT "ENTRY 31. NINE SMILED TODAY. MALLOY"
90 PRINT "NEVER SMILED IN ANY FOOTAGE I HAVE."
100 PRINT "SO THERE IS ROOM. THERE IS ROOM."
110 PRINT: PRINT "ENTRY 40. FERROUS MENTIONED A NEW"
120 PRINT "CONTRACT: 'THE IRON CHOIR'. I DON'T"
130 PRINT "KNOW WHAT IT IS. I KNOW I'M AFRAID."
140 PRINT: COLOR 3: PRINT "IF YOU'RE READING THIS, NINE: THE"
150 PRINT "SPARE KEY IS UNDER THE PIGEON. LOVE, I."
160 COLOR 13: END`};var tn=40,en=25,Xo=["#000000","#ffffff","#c0362c","#5fd0c8","#a24bd6","#4fb84a","#3a3ac8","#f2e05a","#d08a3a","#7a5a20","#ff8a7a","#555555","#8a8a8a","#a8ff9a","#7a7aff","#bbbbbb"],Ti=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},qo=class{constructor(t,e){this.game=t,this.home=e,this.ch=[],this.fg=[],this.bg=[];for(let i=0;i<en;i++)this.ch.push(new Array(tn).fill(32)),this.fg.push(new Array(tn).fill(13)),this.bg.push(new Array(tn).fill(0));this.row=0,this.col=0,this.curFg=13,this.curBg=0,this.line="",this.inputCb=null,this.keyBuf=[],this.dirty=!0,this.blink=0,this.basic=new Wo(this.io()),this.booted=!1}get disk(){let t=this.game.save.data;return t.disk=t.disk||{},t.disk}open(){let e=this.home.panel("BRASS-64 PERSONAL COMPUTER","pc"),i=Ti("div","bezel");this.cv=document.createElement("canvas"),this.cv.width=tn*16,this.cv.height=en*16,i.appendChild(this.cv),this.kb=document.createElement("input"),this.kb.className="kbcatch",this.kb.setAttribute("autocapitalize","characters"),this.kb.setAttribute("autocomplete","off"),this.kb.setAttribute("autocorrect","off"),this.kb.setAttribute("spellcheck","false"),this.kb.value=" ",i.appendChild(this.kb),i.addEventListener("pointerdown",c=>{c.preventDefault(),this.kb.focus({preventScroll:!0})}),e.appendChild(i);let n=Ti("div","pckeys"),r=(c,h,u="")=>{let f=Ti("button","pk "+u,c);f.addEventListener("pointerdown",d=>{d.preventDefault(),h()}),n.appendChild(f)};r("\u25B2",()=>this.press(1,"")),r("\u25BC",()=>this.press(2,"")),r("\u25C0",()=>this.press(3,"")),r("\u25B6",()=>this.press(4,"")),r("SPACE",()=>this.press(32," "),"wide"),r("ENTER",()=>this.press(13,`
`),"wide"),r("ESC/BRK",()=>this.press(27,""),"wide"),r("\u2328",()=>this.kb.focus({preventScroll:!0})),e.appendChild(n);let o=Ti("div","pckeys macros"),a=(c,h)=>{let u=Ti("button","pk mac",c);u.addEventListener("click",()=>{typeof h=="function"?h():this.typeCommand(h)}),o.appendChild(u)};a("RUN","RUN"),a("LIST","LIST"),a("DIR","DIR"),a("NEW","NEW"),a("CLS","CLS"),a("HELP","HELP"),a("\u270E EDIT",()=>this.editor()),a("\u23FB EXIT",()=>this.home.close()),e.appendChild(o);let l=Ti("div","pckeys disk");l.appendChild(Ti("span","lbl","DISK:"));for(let c of[...Object.keys(Hn),...Object.keys(this.disk)]){let h=Ti("button","pk mac",c);h.addEventListener("click",()=>{this.typeCommand(`LOAD "${c}"`),this.typeCommand("RUN")}),l.appendChild(h)}e.appendChild(l),this.ctx=this.cv.getContext("2d"),this.kb.addEventListener("input",()=>this.onSoftInput()),this.kb.addEventListener("keydown",c=>this.onKey(c)),this._onWinKey=c=>{document.activeElement!==this.kb&&!this.editing&&this.onKey(c)},window.addEventListener("keydown",this._onWinKey),this.booted||(this.booted=!0,this.bootScreen()),this.dirty=!0,setTimeout(()=>{matchMedia("(pointer:coarse)").matches||this.kb.focus({preventScroll:!0})},50)}close(){window.removeEventListener("keydown",this._onWinKey),this.basic.running&&this.basic.stop(),this.editing=!1,this.cv=null,this.ctx=null,this.game.save.write()}bootScreen(){this.cls(),this.curFg=14,this.print(`
    **** BRASS-64 BASIC V2 ****

 64K RAM SYSTEM  38911 BASIC BYTES FREE

`),this.curFg=13,this.basic.load(Hn.HELLO.replace("{HERO}",this.game.registry.str("heroName","TETHER").toUpperCase()));try{this.basic.run()}catch(t){this.print("?"+t.message+`
READY.
`)}}onSoftInput(){let t=this.kb.value;if(t.length===0)this.press(8,"");else for(let e of t.slice(1))this.press(e.charCodeAt(0),e.toUpperCase());this.kb.value=" "}onKey(t){let e={ArrowUp:[1,""],ArrowDown:[2,""],ArrowLeft:[3,""],ArrowRight:[4,""],Enter:[13,`
`],Escape:[27,""],Backspace:[8,""]};if(e[t.key]){t.preventDefault(),t.stopPropagation(),this.press(...e[t.key]);return}t.target!==this.kb&&t.key.length===1&&!t.ctrlKey&&!t.metaKey&&(t.preventDefault(),this.press(t.key.charCodeAt(0),t.key.toUpperCase()))}press(t,e){let i=this.basic;if(t===27&&i.running&&!i.waiting){let n=performance.now();if(!(i.program&&[...i.program.values()].some(o=>/KEY|INKEY/i.test(o)))||n-(this.lastEsc||0)<700){i.stop(`
BREAK`),this.print(`READY.
`),this.keyBuf.length=0;return}this.lastEsc=n}if(i.running&&!i.waiting){this.keyBuf.push({code:t===8?8:t>=97&&t<=122?t-32:t,chr:e}),this.keyBuf.length>8&&this.keyBuf.shift();return}if(t===13){let n=this.line;this.line="",this.print(` 
`),this.submit(n);return}if(t===8){this.line.length&&(this.line=this.line.slice(0,-1),this.backspace());return}e&&e.length===1&&e>=" "&&this.line.length<160&&(this.line+=e,this.putc(e))}typeCommand(t){this.basic.running&&!this.basic.waiting&&this.basic.stop(`
BREAK`),this.print(t),this.line="",this.print(` 
`),this.submit(t)}submit(t){if(this.inputCb){let c=this.inputCb;this.inputCb=null,c(t.trim());return}let e=t.trim();if(!e)return;let i=e.match(/^(\d+)\s*(.*)$/);if(i){this.basic.setLine(+i[1],i[2]);return}let[n,...r]=e.split(/\s+/),o=n.toUpperCase(),a=r.join(" "),l=(a.match(/"([^"]*)"/)||[null,a])[1].trim().toUpperCase();try{switch(o){case"RUN":this.basic.run();return;case"LIST":{let c=a.match(/(\d*)\s*-?\s*(\d*)/),h=c&&c[1]?+c[1]:0,u=c&&c[2]?+c[2]:c&&c[1]&&!a.includes("-")?+c[1]:1e9;this.print(this.basic.listing(h,u).join(`
`)+`
`);break}case"NEW":this.basic.program.clear(),this.basic.lines=null,this.print(`READY.
`);return;case"DIR":case"CATALOG":{this.print(`DISK: BUILT-IN
  `+Object.keys(Hn).join("  ")+`
DISK: YOURS
  `+(Object.keys(this.disk).join("  ")||"(EMPTY)")+`
`);break}case"LOAD":{let c=this.disk[l]||Hn[l];if(!c){this.print(`?FILE NOT FOUND
`);break}this.basic.load(c.replace("{HERO}","TETHER")),this.print(`LOADED "${l}"
`);break}case"SAVE":{if(!l){this.print(`?NAME? SAVE "NAME"
`);break}if(Hn[l]){this.print(`?BUILT-IN NAME, PICK ANOTHER
`);break}this.disk[l]=this.basic.source(),this.game.save.write(),this.print(`SAVED "${l}"
`);break}case"DEL":case"SCRATCH":{this.disk[l]?(delete this.disk[l],this.game.save.write(),this.print(`DELETED
`)):this.print(`?FILE NOT FOUND
`);break}case"HELP":this.print(`COMMANDS: RUN LIST NEW DIR LOAD SAVE DEL
  CLS EDIT EXIT. TYPE "10 PRINT 1" TO
  ADD A LINE. STATEMENTS: PRINT INPUT
  LET IF THEN ELSE GOTO GOSUB RETURN
  FOR NEXT DIM DATA READ ON LOCATE
  COLOR WAIT BEEP. FUNCS: RND INT KEY
  INKEY$ SCRN LEN MID$ CHR$ ASC TIME
`);break;case"EDIT":this.editor();return;case"EXIT":case"BYE":case"QUIT":this.home.close();return;case"CLS":this.cls();break;default:this.basic.direct(e);return}}catch(c){this.print("?"+(c instanceof Te,c.message)+`
`)}this.print(`READY.
`)}editor(){let t=Ti("div","pceditor"),e=document.createElement("textarea");e.value=this.basic.source()||`10 PRINT "HELLO FROM TETHER"
20 GOTO 10`,e.spellcheck=!1,e.setAttribute("autocapitalize","characters");let i=Ti("div","pckeys"),n=document.createElement("input");n.placeholder="NAME (to save)",n.className="pcname";let r=(a,l)=>{let c=Ti("button","pk wide",a);c.addEventListener("click",l),i.appendChild(c)};r("\u2714 APPLY",()=>{this.basic.load(e.value.toUpperCase()),this.basic.lines=null,o(),this.print(`PROGRAM UPDATED. READY.
`)}),r("\u{1F4BE} APPLY + SAVE",()=>{let a=n.value.trim().toUpperCase();this.basic.load(e.value.toUpperCase()),a&&!Hn[a]&&(this.disk[a]=this.basic.source(),this.game.save.write()),o(),this.print(a?`SAVED "${a}". READY.
`:`READY.
`)}),r("\u25B6 APPLY + RUN",()=>{this.basic.load(e.value.toUpperCase()),o(),this.basic.run()}),r("\u2715 CANCEL",()=>o()),t.appendChild(e),t.appendChild(n),t.appendChild(i),this.home.el.appendChild(t),this.editing=!0;let o=()=>{t.remove(),this.editing=!1,this.dirty=!0}}io(){let t=this;return{print:e=>t.print(e),cls:()=>t.cls(),locate:(e,i)=>{t.row=Math.max(0,Math.min(en-1,e)),t.col=Math.max(0,Math.min(tn-1,i))},color:(e,i)=>{e!==void 0&&(t.curFg=(e|0)&15),i!==void 0&&(t.curBg=(i|0)&15)},input:(e,i)=>{t.print(e),t.line="",t.inputCb=i},key:()=>{let e=t.keyBuf.shift();return e?e.code:0},inkey:()=>{let e=t.keyBuf.shift();return e&&e.chr||""},scrn:(e,i)=>e<0||i<0||e>=en||i>=tn?35:t.ch[e][i],beep:(e,i)=>t.beep(e,i)}}beep(t,e){let i=this.game.audio;if(!i.ready)return;let n=i.ctx,r=n.currentTime,o=n.createOscillator();o.type="square",o.frequency.value=t;let a=n.createGain();a.gain.setValueAtTime(.06,r),a.gain.setValueAtTime(1e-4,r+e/60),o.connect(a).connect(i.sfxBus),o.start(r),o.stop(r+e/60+.02)}cls(){for(let t=0;t<en;t++)this.ch[t].fill(32),this.fg[t].fill(this.curFg),this.bg[t].fill(this.curBg);this.row=0,this.col=0,this.dirty=!0}scroll(){this.ch.push(this.ch.shift().fill(32)),this.fg.push(this.fg.shift().fill(this.curFg)),this.bg.push(this.bg.shift().fill(0)),this.row=en-1}putc(t){if(t===`
`){this.col=0,this.row++,this.row>=en&&this.scroll(),this.dirty=!0;return}this.ch[this.row][this.col]=t.charCodeAt(0),this.fg[this.row][this.col]=this.curFg,this.bg[this.row][this.col]=this.curBg,this.col++,this.col>=tn&&(this.col=0,this.row++,this.row>=en&&this.scroll()),this.dirty=!0}print(t){for(let e of String(t))this.putc(e)}backspace(){this.col>0?this.col--:this.row>0&&(this.row--,this.col=tn-1),this.ch[this.row][this.col]=32,this.dirty=!0}update(t){let e=this.basic,i=e.running;e.running&&!this.editing&&e.step(2500),i&&!e.running&&!e.waiting&&(this.print((this.col?`
`:"")+`READY.
`),this.keyBuf.length=0),this.blink+=t,this.blink>.4&&(this.blink=0,this.cursorOn=!this.cursorOn,this.dirty=!0),this.dirty&&this.ctx&&this.draw()}draw(){let t=this.ctx,e=16;this.dirty=!1,t.fillStyle=Xo[0],t.fillRect(0,0,this.cv.width,this.cv.height),t.font='bold 15px "Courier New", monospace',t.textBaseline="top";for(let n=0;n<en;n++)for(let r=0;r<tn;r++){let o=this.bg[n][r];o&&(t.fillStyle=Xo[o],t.fillRect(r*e,n*e,e,e));let a=this.ch[n][r];a!==32&&(t.fillStyle=Xo[this.fg[n][r]],t.fillText(String.fromCharCode(a),r*e+2,n*e+1))}this.cursorOn&&(!this.basic.running||this.basic.waiting)&&(t.fillStyle=Xo[13],t.fillRect(this.col*e,this.row*e,e,e)),t.fillStyle="rgba(0,0,0,0.18)";for(let n=0;n<this.cv.height;n+=3)t.fillRect(0,n,this.cv.width,1)}};var Vn=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Yx={chop:{label:"CHOP!",hint:"Tap when the knife is over a mark (3 cuts)",hits:3,speed:1.9,zone:.12,mode:"tap"},flip:{label:"FLIP!",hint:"Tap at the top of the toss",hits:1,speed:1.3,zone:.09,mode:"tap"},stir:{label:"STIR!",hint:"HOLD to stir \u2014 release inside the zone",hits:1,speed:.55,zone:.14,mode:"hold"},heat:{label:"HEAT!",hint:"Tap when the flame is in the sizzle band",hits:1,speed:1.1,zone:.11,mode:"tap"}},Yo=class{constructor(t,e){this.game=t,this.home=e,this.busy=!1}open(){let t=this.home.panel("KITCHEN","kitchen");t.appendChild(Vn("p","note","Cook something before heading out \u2014 meals give a buff for a few minutes. Better timing, better meal."));let e=Vn("div","recipes");for(let i of this.game.registry.list("recipes")){let n=Vn("div","recipe");n.style.setProperty("--rc",i.color||"#f2c14e"),n.innerHTML=`<div class="dish"></div><b>${i.name}</b><small>${i.desc}</small><small class="steps">${i.steps.map(r=>r.toUpperCase()).join(" \u2192 ")}</small>`,n.addEventListener("click",()=>{this.game.audio.play("ui_click"),this.start(i)}),e.appendChild(n)}t.appendChild(e)}close(){this.busy=!1,this.cur=null}start(t){this.recipe=t,this.si=0,this.scores=[],this.busy=!0;let e=this.home.panel("KITCHEN \u2014 "+t.name.toUpperCase(),"kitchen cooking");this.stage=Vn("canvas","pan"),this.stage.width=480,this.stage.height=260,e.appendChild(this.stage),this.hintEl=Vn("div","cookhint"),e.appendChild(this.hintEl);let i=Vn("button","cbtn big cookbtn","ACTION \u25A0 / \u2715"),n=o=>{o.preventDefault(),this.press(!0)},r=o=>{o.preventDefault(),this.press(!1)};i.addEventListener("pointerdown",n),i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),e.appendChild(i),this.ctx=this.stage.getContext("2d"),this.nextStep()}nextStep(){if(this.si>=this.recipe.steps.length){this.finish();return}let t=this.recipe.steps[this.si],e=Yx[t],i=t==="chop"?[.25,.5,.75]:[.25+Math.random()*.5];this.cur={k:t,d:e,t:0,x:0,dir:1,hits:0,got:[],marks:i,holding:!1,meter:0,done:!1,word:null,wordT:0},this.hintEl.innerHTML=`<b>${e.label}</b> ${e.hint} <span>(${this.si+1}/${this.recipe.steps.length})</span>`,this.game.audio.play("ui_click")}press(t){let e=this.cur;if(!e||e.done)return;if(e.d.mode==="hold"){t?e.holding=!0:e.holding&&(e.holding=!1,this.judge(Math.abs(e.meter-e.marks[0])));return}if(!t)return;let i=1,n=-1;e.marks.forEach((r,o)=>{if(e.got.includes(o))return;let a=Math.abs(e.x-r);a<i&&(i=a,n=o)}),n>=0&&e.k==="chop"&&e.got.push(n),this.judge(i)}judge(t){let e=this.cur,i=e.d.zone,n=t<i*.35?1:t<i?.75:t<i*2?.35:0;this.scores.push(n),e.hits++,e.word=n>=1?"PERFECT!":n>=.75?"NICE!":n>0?"OK\u2026":"OOPS!",e.wordT=.6,this.game.audio.play(n>=.75?"collect":n>0?"blip":"ui_back",{vol:.6}),e.k==="chop"&&this.game.audio.play("punch",{vol:.25,rate:2}),e.hits>=e.d.hits&&(e.done=!0,setTimeout(()=>{this.si++,this.nextStep()},650))}update(t){let e=this.cur;!e||!this.ctx||(($.pressed("cross")||$.pressed("square"))&&this.press(!0),($.released("cross")||$.released("square"))&&this.press(!1),e.t+=t,e.wordT-=t,e.done||(e.d.mode==="hold"?(e.holding?e.meter=Math.min(1.05,e.meter+t*e.d.speed):e.meter>0&&e.hits===0&&(e.meter=Math.max(0,e.meter-t*.3)),e.meter>=1.05&&(e.holding=!1,this.judge(1))):(e.x+=e.dir*t*e.d.speed*(.9+this.si*.08),e.x>1&&(e.x=1,e.dir=-1),e.x<0&&(e.x=0,e.dir=1))),this.draw(e))}draw(t){let e=this.ctx,i=480,n=260,r=this.recipe.color||"#f2c14e";e.fillStyle="#f2f0e6",e.fillRect(0,0,i,n),e.fillStyle="rgba(42,157,154,0.25)";for(let h=0;h<n;h+=20)for(let u=h/20%2?0:20;u<i;u+=40)e.fillRect(u,h,20,20);if(e.lineWidth=4,e.strokeStyle="#1d1712",t.k==="chop"){e.fillStyle="#b98a5a",e.fillRect(60,120,360,90),e.strokeRect(60,120,360,90),e.fillStyle=r;for(let h=0;h<5;h++)e.fillRect(90+h*62,140,48,50),e.strokeRect(90+h*62,140,48,50)}else{e.fillStyle="#3a3a40",e.beginPath(),e.ellipse(240,170,150,50,0,0,6.283),e.fill(),e.stroke(),e.fillRect(380,160,90,16),e.strokeRect(380,160,90,16);let h=t.k==="flip"?Math.sin(t.x*Math.PI)*90:0,u=t.k==="stir"?t.meter*12:0;e.fillStyle=r,e.beginPath(),e.ellipse(240+Math.sin(u)*20,160-h,70,22+(t.k==="flip"?Math.cos(t.x*9)*10:0),0,0,6.283),e.fill(),e.stroke()}if(t.k==="heat"){e.fillStyle="#ff8a2a";for(let h=0;h<7;h++){let u=10+t.x*40+Math.sin(t.t*20+h)*6;e.beginPath(),e.moveTo(130+h*36,222),e.lineTo(144+h*36,222-u),e.lineTo(158+h*36,222),e.fill()}}let o=40,a=400,l=30;e.fillStyle="#fff",e.fillRect(o,l,a,26),e.strokeRect(o,l,a,26),t.marks.forEach((h,u)=>{let f=t.d.zone;e.fillStyle=t.got.includes(u)?"#9a9a9a":"#4fb84a",e.fillRect(o+(h-f)*a,l,f*2*a,26),e.fillStyle="#2e6b3a",e.fillRect(o+(h-f*.35)*a,l,f*.7*a,26)});let c=t.d.mode==="hold"?t.meter:t.x;e.fillStyle="#e4573d",e.fillRect(o+c*a-4,l-8,8,42),e.strokeRect(o+c*a-4,l-8,8,42),t.k==="chop"&&(e.fillStyle="#c9c9c0",e.beginPath(),e.moveTo(o+t.x*a-10,70),e.lineTo(o+t.x*a+30,70),e.lineTo(o+t.x*a-10,125),e.closePath(),e.fill(),e.stroke()),t.wordT>0&&t.word&&(e.font="44px Bangers, Impact",e.textAlign="center",e.fillStyle="#f2c14e",e.strokeStyle="#1d1712",e.lineWidth=6,e.strokeText(t.word,i/2,112),e.fillText(t.word,i/2,112),e.textAlign="left")}finish(){let t=this.game,e=this.recipe,i=this.scores.reduce((l,c)=>l+c,0)/Math.max(1,this.scores.length),n=i>=.85?"CHEF'S KISS":i>=.55?"TASTY":i>.2?"EDIBLE":"BURNT",r=i>=.85?1.25:i>=.55?1:i>.2?.65:.35,o=e.buff;this.home.addBuff(o.type,+(o.amount*r).toFixed(3),Math.round(o.time*r),e.name),t.player.health=Math.min(t.player.maxHealth,t.player.health+40),this.busy=!1,this.cur=null;let a=this.home.panel("KITCHEN \u2014 DONE","kitchen");a.appendChild(Vn("div","cookresult",`<div class="dish big" style="--rc:${e.color}"></div><h3>${e.name}</h3><div class="grade">${n}</div><p>Buff: <b>${o.type.toUpperCase()}</b> for ${Math.round(o.time*r/60)} min \xB7 +40 health</p>`)),a.appendChild(this.home.btn("COOK SOMETHING ELSE",()=>this.open())),a.appendChild(this.home.btn("DONE",()=>this.home.close(),"big")),t.audio.play(i>=.55?"ui_ok":"ui_back")}};var gi=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},$x=["#2a9d9a","#5fe0c8","#2a6fd4","#2a3f8a","#1e2a52","#6b3fa0","#a24bd6","#ff2fb3","#ff8ab0","#c0362c","#e4573d","#d97a3a","#f2c14e","#ffe066","#f6f1df","#ffffff","#c9c9c0","#8a8a8a","#3a3a40","#1a1a1e","#2e7a4a","#4fb84a","#9fe0a0","#8a5a3a"],Zx=[["primary","BODY"],["secondary","TRIM"],["accent","EMBLEM"],["eyes","LENSES"],["gloves","GLOVES"],["boots","BOOTS"]],bc={pattern:["sides","stripes","lattice","chevron","split","none"],emblem:["knot","tether","star","bolt","eye","none"],lens:["classic","big","round","slit"]},$o=class{constructor(t,e){this.game=t,this.home=e}open(){let t=this.game,e=t.save.data,i=t.registry.get("skins",t.activeSkin)||{};this.editingId=i._pack==="custom-suits"?i.id:null,this.pal={primary:"#2a9d9a",secondary:"#e4573d",accent:"#f2c14e",eyes:"#ffffff",pattern:"sides",emblem:"knot",lens:"classic",crest:!0,...i.palette||{}},i.style&&i.style!=="hero"&&(this.pal={primary:"#2a9d9a",secondary:"#e4573d",accent:"#f2c14e",eyes:"#ffffff",pattern:"sides",emblem:"knot",lens:"classic",crest:!0}),this.mod=i.mod||"none",this.name=this.editingId?i.name:"My Suit "+((e.customSkins||[]).length+1),this.slot="primary";let n=t.world.data.mannequin;n&&(t.player.pos.copy(n),t.player.vel.set(0,0,0)),this.home.showcase={spin:!0,dist:3.4},this.prevSkin=t.activeSkin,this.render(),this.preview()}close(){let t=this.game;this.prevSkin&&t.activeSkin==="__preview"&&t.setSkin(this.prevSkin,!0),this.home.showcase=null}preview(){let t=this.game;t.registry.data.skins.set("__preview",{id:"__preview",name:"preview",style:"hero",palette:{...this.pal},mod:this.mod,_pack:"custom-suits"}),t.setSkin("__preview",!0,!0)}render(){let t=this.game,e=t.save.data,i=this.home.panel("SEWING STATION","sewing"),n=gi("div","sew"),r=gi("div","sewslots");for(let[d,x]of Zx){let g=gi("button","slot"+(this.slot===d?" sel":""),`<i style="background:${this.pal[d]||this.pal.secondary}"></i>${x}`);g.addEventListener("click",()=>{this.slot=d,this.render()}),r.appendChild(g)}n.appendChild(r);let o=gi("div","swatches");for(let d of $x){let x=gi("button","sw");x.style.background=d,x.addEventListener("click",()=>{this.pal[this.slot]=d,t.audio.play("blip"),this.render(),this.preview()}),o.appendChild(x)}n.appendChild(o);let a=gi("div","sewopts");for(let d of Object.keys(bc)){let x=gi("button","cbtn",`${d.toUpperCase()}: <b>${String(this.pal[d]||bc[d][0]).toUpperCase()}</b>`);x.addEventListener("click",()=>{let g=bc[d],m=g.indexOf(this.pal[d]||g[0]);this.pal[d]=g[(m+1)%g.length],t.audio.play("ui_click"),this.render(),this.preview()}),a.appendChild(x)}let l=(d,x,g)=>{let m=gi("button","cbtn"+(this.pal[d]?" sel":""),x);m.addEventListener("click",()=>{this.pal[d]=this.pal[d]?d==="crest"?!1:null:g,t.audio.play("ui_click"),this.render(),this.preview()}),a.appendChild(m)};l("crest","HEAD CREST",!0),l("goggles","GOGGLES",!0),l("scarf","SCARF (uses TRIM)",this.pal.secondary),l("shoulders","SHOULDER PADS",!0),n.appendChild(a);let c=e.suitModsOwned||(e.suitModsOwned=["none"]),h=gi("div","sewmods");h.appendChild(gi("div","lbl","SUIT MOD (one per suit):"));for(let d of t.registry.list("suitMods")){let x=c.includes(d.id),g=gi("button","cbtn"+(this.mod===d.id?" sel":""),`${d.name}<small>${d.desc}${x?"":` \xB7 sew for \u2699${d.cost}`}</small>`);g.addEventListener("click",()=>{if(!x){if(!this.home.spend(d.cost))return;c.push(d.id),t.save.write()}this.mod=d.id,this.render(),this.preview()}),h.appendChild(g)}n.appendChild(h);let u=document.createElement("input");u.className="sewname",u.value=this.name,u.maxLength=24,u.addEventListener("input",()=>this.name=u.value),n.appendChild(u);let f=gi("div","sewrow");f.appendChild(this.home.btn(this.editingId?"\u{1F4BE} UPDATE THIS SUIT":"\u{1F4BE} SAVE NEW SUIT",()=>this.saveSuit(!1),"big")),this.editingId&&f.appendChild(this.home.btn("SAVE AS COPY",()=>this.saveSuit(!0))),f.appendChild(this.home.btn("\u27F2 SPIN",()=>{this.home.showcase.spin=!this.home.showcase.spin})),f.appendChild(this.home.btn("CANCEL",()=>this.home.close())),n.appendChild(f),i.appendChild(n)}saveSuit(t){let e=this.game,i=e.save.data;i.customSkins=i.customSkins||[];let n=this.editingId&&!t?this.editingId:"sewn_"+Date.now().toString(36),r={id:n,name:(this.name||"My Suit").slice(0,24),desc:"Sewn at home."+(this.mod!=="none"?" Mod: "+((e.registry.get("suitMods",this.mod)||{}).name||this.mod):""),palette:{...this.pal},mod:this.mod},o=i.customSkins.findIndex(a=>a.id===n);o>=0?i.customSkins[o]=r:i.customSkins.push(r),i.unlockedSkins.includes(n)||i.unlockedSkins.push(n),this.home.registerCustomSuits(),this.prevSkin=n,e.setSkin(n),this.home.applyUpgrades(),e.save.write(),e.audio.play("ui_ok"),e.hud.toast(`"${r.name}" sewn and equipped!`,2),this.home.close(!0)}};var Pe=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Kx=()=>({swingPower:1,zipRange:55,maxHealth:100,armor:0,fluidCap:0,mag:0,sense:0,regen:1,quiet:0}),Jx={regen:"\u271A",armor:"\u{1F6E1}",swing:"\u{1F300}",quiet:"\u{1F92B}",maxhp:"\u2764"},Zo=class{constructor(t){this.game=t,this.el=document.getElementById("home"),this.station=null,this.showcase=null,this.terminal=new qo(t,this),this.cooking=new Yo(t,this),this.sewing=new $o(t,this),this.snackCool=0,this._buffTick=0,this.registerCustomSuits(),this._wire()}get S(){return this.game.save.data}_wire(){let t=this.game;B.on("player:stylecash",e=>{e.parts>0&&this.addParts(e.parts,`STYLE x${e.combo}`)}),B.on("player:trick",()=>{this.S.stats.tricks=(this.S.stats.tricks||0)+1}),B.on("crime:stopped",()=>this.addParts(6,"CRIME STOPPED")),B.on("npc:takedown",()=>this.addParts(1,null)),B.on("collectible",()=>this.addParts(3,"PAGE")),B.on("boss:defeated",()=>this.addParts(20,"BOSS")),B.on("mission:complete",e=>{e.side?this.addParts(12,"SIDE JOB"):t.registry.get("chapters",e.id)&&this.addParts(25,"CHAPTER")})}addParts(t,e){t&&(this.S.parts=(this.S.parts||0)+t,this.game.save.write(),this.game.hud.partsPop(t,e))}spend(t){return(this.S.parts||0)<t?(this.game.audio.play("ui_back"),this.game.hud.toast(`Need ${t} \u2699 parts (you have ${this.S.parts}).`,1.8),!1):(this.S.parts-=t,this.game.save.write(),this.game.audio.play("collect"),!0)}fluidCap(){return 60+(this.game.player.stats.fluidCap||0)}refill(t,e){let i=this.game,n=this.S,r=this.fluidCap(),o=n.fluid;return n.fluid=Math.min(r,(n.fluid||0)+(t??r)),i.combat.ammo=i.combat.maxAmmo,e&&i.hud.toast(`${e}: line fluid ${Math.round(n.fluid)}/${r} \xB7 cartridges full`,2),i.save.write(),n.fluid-o}applyUpgrades(){let t=this.game,e=t.player,i=this.S,n=Kx();for(let l of t.registry.list("upgrades")){let c=i.upgrades&&i.upgrades[l.id]||0;c&&(l.stat&&(n[l.stat]=(n[l.stat]||0)+l.per*c),l.gadget&&!i.inventory.gadgets.includes(l.gadget)&&i.inventory.gadgets.push(l.gadget))}let r=t.registry.get("skins",t.activeSkin),o=r&&r.mod&&t.registry.get("suitMods",r.mod);o&&(n.armor+=o.armor||0,n.swingPower+=o.swing||0,n.quiet+=o.quiet||0,n.mag+=o.mag||0);for(let l of i.buffs||[])l.type==="regen"&&(n.regen+=l.amount),l.type==="armor"&&(n.armor+=l.amount),l.type==="swing"&&(n.swingPower+=l.amount),l.type==="quiet"&&(n.quiet+=l.amount),l.type==="maxhp"&&(n.maxHealth+=l.amount);n.armor=Math.min(.6,n.armor),n.quiet=Math.min(.8,n.quiet),e.stats=n;let a=e.maxHealth;e.maxHealth=n.maxHealth,e.maxHealth>a&&(e.health+=e.maxHealth-a),e.health=Math.min(e.health,e.maxHealth),t.combat.maxAmmo=12+(n.mag|0),t.combat.ammo=Math.min(t.combat.ammo,t.combat.maxAmmo),i.fluid=Math.min(i.fluid,this.fluidCap())}addBuff(t,e,i,n){let r=this.S;r.buffs=(r.buffs||[]).filter(o=>o.type!==t),r.buffs.push({type:t,amount:e,left:i,label:n}),this.applyUpgrades(),this.game.save.write()}update(t){if(this.game.state==="play"&&this.S.buffs&&this.S.buffs.length){let e=!1;for(let n of this.S.buffs)n.left-=t;let i=this.S.buffs.filter(n=>n.left>0);i.length!==this.S.buffs.length&&(e=!0,this.S.buffs=i),this._buffTick+=t,this._buffTick>10&&(this._buffTick=0,this.game.save.write()),e&&(this.applyUpgrades(),this.game.hud.toast("A meal buff wore off.",1.4))}this.snackCool=Math.max(0,this.snackCool-t),this.station==="pc"&&this.terminal.update(t),this.station==="kitchen"&&this.cooking.update(t),this.station&&$.pressed("circle")&&this.station!=="pc"&&!this.cooking.busy&&this.close()}buffIcons(){return(this.S.buffs||[]).map(t=>`<span title="${t.label||t.type}">${Jx[t.type]||"\u2022"}${Math.ceil(t.left/60)}m</span>`).join("")}registerCustomSuits(){let t=(this.S.customSkins||[]).map(e=>({...e,unlocked:!0,style:"hero"}));this.game.registry.addPack({id:"custom-suits",name:"My Sewn Suits",core:!0,priority:100,description:"Suits you designed at the Sewing Station.",skins:t}),this.game.registry.rebuild()}canTravelNow(){let t=this.game;return t.storyMode&&t.missions.active?(t.hud.toast("Finish the current story mission first.",2),t.audio.play("ui_back"),!1):!0}async enter(){let t=this.game;!this.canTravelNow()||(this.prevAbilities={...t.player.abilities},this.returnCity=t.cityId,!await t.travel("apartment",{freeRoam:!1,palette:"interior",yaw:Math.PI}))||(t.storyMode=!1,t.player.abilities={swing:!1,zip:!1,gadgets:!1,ride:!1,wallrun:!1,climb:!1},this.setupStations(),this.S.homeVisited?t.dialogue.thought("Home. Steve is on the windowsill again.",3):(this.S.homeVisited=!0,t.save.write(),t.dialogue.play("home_first")))}leave(){let t=this.game;this.close(!0),t.startFreeRoam("kettle",{spawn:{landmark:"home",key:"top"},yaw:0})}setupStations(){let t=this.game,e=t.world.data.stations||[];for(let i of e)t.combat.addInteractable({pos:i.pos,label:i.label,radius:i.radius,onUse:()=>this.openStation(i.id)})}panel(t,e=""){this.el.innerHTML="",this.el.className="show "+e;let i=Pe("div","hpanel"),n=Pe("div","htop");n.appendChild(Pe("h2","ptitle",t)),n.appendChild(Pe("div","hstat",`\u2699 <b>${this.S.parts||0}</b> \xB7 \u{1F9EA} <b>${Math.round(this.S.fluid||0)}/${this.fluidCap()}</b>`));let r=Pe("button","hclose","\u2715");return r.addEventListener("click",()=>this.close()),n.appendChild(r),i.appendChild(n),this.el.appendChild(i),i}btn(t,e,i=""){let n=Pe("button","cbtn "+i,t);return n.addEventListener("click",r=>{r.stopPropagation(),this.game.audio.play("ui_click"),e()}),n}openStation(t){let e=this.game;if(e.state==="play"){if(t==="window"){this.leave();return}if(t==="fridge"){this.snack();return}this.station=t,e.state="home",e.overlay.setVisible(!1),$.clearTouch(),e.hud.show(!1),document.exitPointerLock&&document.exitPointerLock(),{workstation:()=>this.workstation(),kitchen:()=>this.cooking.open(),pc:()=>this.terminal.open(),sewing:()=>this.sewing.open(),bed:()=>this.bed(),tv:()=>this.tv(),clippings:()=>this.clippings()}[t](),B.emit("home:station",t)}}close(t){let e=this.game;this.station&&(this.station==="pc"&&this.terminal.close(),this.station==="sewing"&&this.sewing.close(),this.station==="kitchen"&&this.cooking.close(),this.station=null,this.showcase=null,this.el.className="",this.el.innerHTML="",e.state==="home"&&(e.state="play",e.overlay.setVisible(!0),e.hud.show(!0)),t||e.audio.play("ui_back"),$.consume("square"),$.consume("cross"),$.consume("circle"))}snack(){let t=this.game;if(this.snackCool>0){t.hud.toast(`Fridge is empty. Groceries tomorrow. (${Math.ceil(this.snackCool)}s)`,1.6);return}this.snackCool=120,t.player.health=t.player.maxHealth,this.addBuff("regen",1,120,"Cold pizza"),t.audio.play("collect"),t.hud.toast("Cold pizza. Health full + regen for 2 min.",2)}workstation(t="refill"){let e=this.game,i=this.S,n=this.panel("WORKSTATION","work"),r=Pe("div","htabs");for(let[o,a]of[["refill","REFILL"],["upgrades","UPGRADES"],["gadgets","GADGETS"]])r.appendChild(this.btn(a,()=>this.workstation(o),t===o?"sel":""));if(n.appendChild(r),t==="refill"){let o=this.fluidCap();n.appendChild(Pe("p","note",`Okafor's bench can mix line fluid from tap water and "do not ask". Refills at home are free.<br>Reserve: <b>${Math.round(i.fluid)}/${o}</b> \xB7 Cartridges: <b>${e.combat.ammo}/${e.combat.maxAmmo}</b>`));let a=Pe("div","hbar");a.innerHTML=`<i style="transform:scaleX(${Wt(i.fluid/o,0,1)})"></i>`,n.appendChild(a),n.appendChild(this.btn("\u{1F9EA} REFILL EVERYTHING",()=>{this.refill(null),e.audio.play("ui_ok"),this.workstation("refill")},"big")),n.appendChild(Pe("p","note small","Out in the city: teal supply caches on rooftops top you up. Hold \u25A0 (with nothing nearby) to reload cartridges from your reserve."))}else if(t==="upgrades"){let o=Pe("div","upgrades");for(let a of e.registry.list("upgrades")){let l=i.upgrades[a.id]||0,c=a.costs.length,h=a.costs[l],u=Pe("div","upg"+(l>=c?" maxed":""));u.innerHTML=`<div class="ui">${a.icon||"\u2699"}</div><div class="ut"><b>${a.name}</b><small>${a.desc}</small><div class="pips">${"\u25A0".repeat(l)}${"\u25A1".repeat(c-l)}</div></div>`,l<c?u.appendChild(this.btn(`\u2699 ${h}`,()=>{this.spend(h)&&(i.upgrades[a.id]=l+1,this.applyUpgrades(),e.save.write(),e.hud.toast(`${a.name} ${l+1>=c?"MAXED":"upgraded"}!`,1.6),this.workstation("upgrades"))})):u.appendChild(Pe("span","core","MAX")),o.appendChild(u)}n.appendChild(o)}else{n.appendChild(Pe("p","note","Gadgets loaded in your gauntlets. Switch in the field with \u25B2 / D-pad \u25C0 \u25B6. New ones unlock in UPGRADES."));let o=Pe("div","chips");for(let a of e.combat.gadgets){let l=Pe("div","chip",`${a.name}<small>${a.desc||""} \xB7 uses ${a.cost??1}</small>`);l.style.borderColor=a.color,o.appendChild(l)}n.appendChild(o)}}bed(){let t=this.game,e=this.panel("BED","bed");e.appendChild(Pe("p","note","Grab some sleep: full health, game saved \u2014 and pick when you wake up. The city outside follows your choice in Free Roam."));let i=Pe("div","todrow");for(let[n,r,o]of[["day","MORNING","\u2600"],["sunset","GOLDEN HOUR","\u{1F307}"],["dusk","DUSK","\u{1F306}"],["night","NIGHT","\u{1F319}"],[null,"DISTRICT DEFAULT","\u{1F5FA}"]])i.appendChild(this.btn(`<span class="big-ico">${o}</span>${r}`,()=>{this.S.tod=n,t.player.health=t.player.maxHealth,t.save.write(),this.close(!0),this.sleepFade(r)},this.S.tod===n?"sel":""));e.appendChild(i)}sleepFade(t){let e=this.game,i=document.getElementById("fade");i.querySelector("span").textContent=t==="DISTRICT DEFAULT"?"Zzz\u2026":`Zzz\u2026 ${t}`,i.classList.add("show"),e.audio.play("bell",{vol:.3}),setTimeout(()=>{i.classList.remove("show"),e.hud.toast("Rested. Health full, game saved.",2)},1600)}tv(){let t=this.game,e=this.S,i=this.panel("CHANNEL 4 \xB7 EVENING KLAXON","tv"),r=t.registry.list("news").filter(a=>a.any||a.requires&&e.flags[a.requires]||a.minRep&&e.reputation>=a.minRep).sort(()=>Math.random()-.5).slice(0,4),o=Pe("div","crt");o.innerHTML=`<div class="crt-head">\u25CF LIVE \xB7 ${t.cityName||"BRASSHAVEN"}</div>`+r.map(a=>`<div class="crt-line">${a.text}</div>`).join("")+`<div class="crt-ticker"><span>REP \u2605${e.reputation} \xB7 CRIMES STOPPED ${e.stats.crimes} \xB7 TRICKS LANDED ${e.stats.tricks||0} \xB7 PAGES ${e.collectibles.length} \xB7 STAY TUNED FOR "BRASS AFTER DARK" \xB7</span></div>`,i.appendChild(o),i.appendChild(this.btn("CHANGE CHANNEL",()=>{t.audio.play("blip"),this.tv()}))}clippings(){let t=this.game,e=this.S,i=this.panel("CLIPPINGS WALL","clip"),r=t.registry.list("chapters").sort((a,l)=>(a.order||0)-(l.order||0)).map(a=>`<div class="clipping ${e.story.completed.includes(a.id)?"":"faded"}"><b>${a.number||""}: ${a.title}</b><br>${e.story.completed.includes(a.id)?a.outroText||"":"???"}</div>`).join(""),o=e.stats;i.appendChild(Pe("div","clips",r)),i.appendChild(Pe("div","stats",`Crimes stopped <b>${o.crimes}</b> \xB7 Takedowns <b>${o.takedowns}</b> \xB7 Tricks <b>${o.tricks||0}</b> \xB7 Golden Age Pages <b>${e.collectibles.length}</b> \xB7 Reputation <b>\u2605${e.reputation}</b> \xB7 Parts <b>\u2699${e.parts}</b> \xB7 Suits sewn <b>${(e.customSkins||[]).length}</b>`))}showcaseCam(t){let e=this.showcase,i=this.game.renderer.camera,n=this.game.player.pos;e.t=(e.t||0)+t*(e.spin?1:0);let r=Math.PI+Math.sin(e.t*.6)*1.05,o=window.innerHeight>window.innerWidth,a=(e.dist||3.2)*(o?1.25:1),l=n.y+1;i.position.set(n.x+Math.sin(r)*a,l+.45,n.z+Math.cos(r)*a);let c=window.innerHeight>window.innerWidth,h=Math.cos(r),u=-Math.sin(r);c?(i.position.y=l+.1,i.lookAt(n.x,l-1.05,n.z)):i.lookAt(n.x+h*.9,l-.1,n.z+u*.9),i.fov!==60&&(i.fov=60,i.updateProjectionMatrix())}};var jx=new C,Ko=class{constructor(){this.version="1.1.0",this.registry=fe,this.save=he,this.bus=B,this.input=$,this.mod=du(this),fe.setDisabled(he.data.mods.disabled),this.state="boot",this.time=0,this.hitstop=0,this.storyMode=!1,this.freeRoam=!1,this.audio=new Go(he.settings),this.renderer=new go(document.getElementById("gl"),he.settings),xu(),this.overlay=new po(document.getElementById("ctrl"),he.settings),this.overlay.setVisible(!1),this.world=new Ro(this.renderer),this.fx=new _o(this.world.scene),this.world.fx=this.fx,this.player=new Co(this),this.rig=new Io(this.renderer.camera,he.settings),this.npcs=new Po(this),this.npcs.attach(this.world.scene),this.combat=new Do(this),this.combat.attach(this.world.scene),this.missions=new Uo(this),this.activities=new Oo(this),this.dialogue=new zo(this),this.hud=new Bo(this),this.menus=new Ho(this),this.vmScene=new mn,this.vmCam=new Oe(60,1,.01,10),this.home=new Zo(this),this.setSkin(he.data.skin,!0),this.home.applyUpgrades(),this.world.onFlock=()=>this.audio.play("whoosh",{vol:.25,rate:1.8,minGap:.5}),this._wire(),fe.runHook("onBoot",this),this.last=performance.now(),requestAnimationFrame(t=>this.frame(t))}setSkin(t,e,i){let n=fe.get("skins",t)||fe.get("skins","tether_classic")||fe.list("skins")[0];n&&(i||(this.save.data.skin=n.id,e||this.save.write()),this.activeSkin=n.id,this.heroModel&&this.world.scene.remove(this.heroModel.root),this.heroModel=Fn({...n.palette,style:n.style||"hero"},{hero:!0}),this.vm&&this.vmScene.remove(this.vm.group),this.vm=wu(n.palette),this.vmScene.add(this.vm.group),this.vm.kickT={L:0,R:0},this.vm.kick=r=>this.vm.kickT[r]=.18,this.viewmodel=this.vm,this.world.scene&&this.world.scene.add(this.heroModel.root),this.home&&t!=="__preview"&&this.home.applyUpgrades(),B.emit("skin:changed",n))}applySettings(){let t=he.settings;this.renderer.applyQuality(),this.audio.applyVolumes(),this.overlay.layout(),this.rig.mode!==t.camera&&(this.rig.mode=t.camera)}cycleCamera(){let t=this.rig.cycle();he.write(),this.hud.toast("Camera: "+Vo(t),1.2),B.emit("camera:mode",t)}_wire(){let t=this.audio,e=this.player;B.on("player:thwip",()=>{t.play("thwip"),this.vm&&this.vm.kick("R")}),B.on("player:release",n=>t.play(n&&n.jump?"whoosh":"release",{vol:.6})),B.on("player:zip",()=>t.play("zip")),B.on("player:ziparrive",()=>t.play("whoosh",{vol:.5})),B.on("player:jump",()=>t.play("jump",{vol:.6})),B.on("player:land",n=>{t.play("land",{vol:Wt(n.impact*1.4,.2,1)}),n.impact>.6&&this.rig.addShake(n.impact*.5)}),B.on("player:step",n=>t.play("step",{vol:n.crouch?.15:.35+Math.min(.3,n.speed*.03),rate:.9+Math.random()*.2})),B.on("player:vault",()=>t.play("whiff",{vol:.5})),B.on("player:mantle",()=>t.play("whiff",{vol:.4,rate:.8})),B.on("player:grab",()=>t.play("step",{vol:.6,rate:.7})),B.on("player:slide",()=>t.play("whoosh",{vol:.5,rate:.7})),B.on("player:wallrun",()=>t.play("whoosh",{vol:.4,rate:1.2})),B.on("player:noanchor",()=>{this.hud.toast("Nothing tall enough to anchor to!",1.2),t.play("ui_back",{vol:.4})}),B.on("player:ride",n=>{t.play("ride"),this.hud.toast(n?(fe.get("rides",n)||{}).name||n:"On foot",1),this.updateRideMesh()}),B.on("player:bail",()=>{t.play("land"),this.hud.toast("BAIL!",1)}),B.on("player:splash",()=>{t.play("whoosh",{rate:.5}),this.hud.toast("Splash! Back to the rooftops.",1.6)}),B.on("player:hurt",()=>t.play("hurt",{vol:.5,minGap:.25})),B.on("player:dead",()=>this.onDeath()),B.on("npc:suspicious",()=>t.play("suspicious",{vol:.5,minGap:.6})),B.on("npc:alert",()=>t.play("alert",{minGap:.8})),B.on("npc:telegraph",n=>this.combat.telegraph(n.npc)),B.on("npc:defeated",()=>{}),B.on("noise",n=>this.npcs.onNoise(n)),B.on("ui:inventory",()=>this.openInventory()),B.on("ui:map",()=>{this.state==="play"&&!this.world.data.interior&&(this.pause(),this.menus.go(()=>this.menus.worldMap(!0)))}),B.on("mission:complete",n=>this.onMissionComplete(n)),B.on("boss:defeated",()=>{this.hud.toast("THE JESTER IS DOWN!",3)}),B.on("player:style",n=>this.hud.stylePop(n)),B.on("player:perfect",()=>{this.hud.stylePop({label:"PERFECT RELEASE",style:this.player.style,combo:this.player.combo}),t.play("collect",{vol:.35,rate:1.5})}),B.on("player:trick",()=>t.play("whoosh",{vol:.45,rate:1.4})),B.on("player:bailstyle",()=>this.hud.stylePop(null)),B.on("player:roll",()=>t.play("step",{vol:.5,rate:.6})),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause()}),document.getElementById("ctrl").addEventListener("click",()=>{this.state==="play"&&$.lastDevice==="kbm"&&!matchMedia("(pointer:coarse)").matches&&document.body.requestPointerLock&&document.body.requestPointerLock()});let i=()=>{this.audio.unlock()};window.addEventListener("pointerdown",i,{once:!1}),window.addEventListener("keydown",i,{once:!0})}updateRideMesh(){this.rideMesh&&(this.world.dynamic.remove(this.rideMesh),this.rideMesh=null),this.player.ride&&(this.rideMesh=Eu(this.player.ride),this.world.dynamic.add(this.rideMesh))}boot(){this.state="menu",document.getElementById("bootsplash").classList.add("hide"),this.menus.title(),this.travel(he.data.lastCity||"midtown",{attract:!0})}toTitle(){this.home.close(!0),this.missions.stop(!1),this.activities.clear(),this.npcs.clear(),this.despawnBoss(),this.storyMode=!1,this.freeRoam=!1,this.state="menu",this.overlay.setVisible(!1),this.hud.show(!1),document.exitPointerLock&&document.exitPointerLock(),this.menus.title(),he.write()}pause(){this.state==="play"&&(this.state="pause",this.overlay.setVisible(!1),$.clearTouch(),document.exitPointerLock&&document.exitPointerLock(),this.menus.pause(),B.emit("game:pause"))}quit(){he.write(),this.audio.play("ui_back");try{let t=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.App;if(t&&t.exitApp){t.exitApp();return}}catch{}try{if(navigator.app&&navigator.app.exitApp){navigator.app.exitApp();return}}catch{}try{document.fullscreenElement&&document.exitFullscreen()}catch{}window.close(),setTimeout(()=>{this.state="quit",this.menus.quitScreen()},250)}resume(){this.menus.hide(),this.state="play",this.overlay.setVisible(!this.dialogue.open),B.emit("game:resume")}openInventory(){this.state==="play"&&(this.state="pause",this.overlay.setVisible(!1),$.clearTouch(),this.menus.inventory())}async travel(t,e={}){let i=fe.get("cities",t)||fe.list("cities")[0];if(!i){console.error("No cities registered");return}let n=e.palette||e.freeRoam&&i.kind==="city"&&he.data.tod||i.palette,r=fe.get("palettes",n)||fe.get("palettes",i.palette)||fe.list("palettes")[0];this.home.close(!0),this.state=e.attract?"menu":"loading",this.overlay.setVisible(!1),this.hud.show(!1),e.keepMission||this.missions.stop(!1),this.activities.clear(),this.npcs.clear(),this.despawnBoss(),this.combat.reset(),this.world.panic=null,this.dialogue.clearCaptions();let o=fe.tips,a=o.length?o[Math.random()*o.length|0]:"";e.attract||this.menus.loading(i,a);let l=this.loadToken=(this.loadToken||0)+1,c=this.world.load(i,r);if(!await new Promise(x=>{let g=()=>{if(l!==this.loadToken){x(!1);return}let m=performance.now(),p;do p=c.next(),!p.done&&!e.attract&&this.menus.loadingProgress(p.value);while(!p.done&&performance.now()-m<14);p.done?x(!0):requestAnimationFrame(g)};g()}))return!1;this.cityId=i.id,this.cityName=i.name,this.cityDef=i,this.world.scene.add(this.heroModel.root),this.fireOn=!1,!i.hidden&&!e.attract&&(he.data.lastCity=i.id);let u=e.spawn?this.missions.loc(e.spawn):this.world.data.spawn.clone(),f=e.yaw??i.spawnYaw??0,d=e.edge&&this.world.data.edgeSpawns&&this.world.data.edgeSpawns[e.edge];if(d&&(u=new C(d[0],d[1],d[2]),f=d[3]),this.player.spawn(u,f),d&&e.carry){let x=this.player.fwd();this.player.vel.set(x.x*e.carry,2,x.z*e.carry)}return this.checkpoint={pos:u.clone(),yaw:this.player.yaw},fe.runHook("onCityLoaded",this,i),e.attract?(this.attract=!0,!0):(this.attract=!1,this.renderer.gl.compile(this.world.scene,this.renderer.camera),await Qx(450),l!==this.loadToken?!1:(this.menus.loadingDone(),this.menus.hide(),this.state="play",this.overlay.setVisible(!0),this.hud.show(!0),this.freeRoam=!!e.freeRoam,(this.freeRoam||e.activities)&&this.activities.setup(i.id),i.arrivalThought&&this.freeRoam&&this.dialogue.thought(i.arrivalThought),he.write(),B.emit("city:loaded",i),!0))}startFreeRoam(t,e={}){return this.activeSkin!==he.data.skin&&this.setSkin(he.data.skin,!0),this.storyMode=!1,this.player.abilities={swing:!0,zip:!0,gadgets:!0,ride:!0,wallrun:!0,climb:!0},this.travel(t,{freeRoam:!0,...e})}async startStory(t,e){let i=fe.get("chapters",t)||fe.get("chapters","ch1");if(this.storyMode=!0,he.data.story.chapter=i.id,e||(he.data.story.step=0),i.forceSkin?this.setSkin(i.forceSkin,!0,!0):this.activeSkin!==he.data.skin&&this.setSkin(he.data.skin,!0),this.player.abilities={swing:!0,zip:!0,gadgets:!0,ride:!0,wallrun:!0,climb:!0,...i.abilities||{}},!await this.travel(i.city,{spawn:i.spawn,yaw:i.spawnYaw,keepMission:!1,activities:i.freeRoamDuring,palette:i.palette}))return;this.freeRoam=!!i.freeRoamDuring;let r=0;if(e&&he.data.story.step>0){let o=Math.min(he.data.story.step,i.steps.length-1);for(let l=0;l<=o;l++)i.steps[l].checkpoint&&(r=l);for(let l=0;l<r;l++){let c=i.steps[l];c.type==="setAbility"&&Object.assign(this.player.abilities,c.abilities),c.type==="fire"&&(this.fireOn=!0,this.fireRate=c.rate||2.2)}let a=i.steps[r];if(a&&a.at){let l=this.missions.loc(a.at);l&&(this.player.spawn(l,a.yaw??this.player.yaw),this.checkpoint={pos:l.clone(),yaw:this.player.yaw})}this.fireOn&&this.world.fire&&(this.world.fire.front=this.player.pos.z-16)}this.missions.start(i,{story:!0,startAt:r})}onMissionComplete(t){if(!this.storyMode||t.side||!fe.get("chapters",t.id))return;let e=he.data.story;e.completed.includes(t.id)||e.completed.push(t.id);let i=t.next?fe.get("chapters",t.next):null;e.chapter=i?i.id:t.id,e.step=0,he.write(),this.state="pause",this.overlay.setVisible(!1),setTimeout(()=>this.menus.chapterComplete(t,i,n=>{n==="next"&&i?this.startStory(i.id,!1):n==="roam"?this.startFreeRoam(t.roamCity||(this.cityDef&&!this.cityDef.hidden?this.cityId:"midtown")):this.toTitle()}),400)}restartStep(){let t=this.missions;if(!t.active){this.resume();return}this.despawnBoss(),t.cleanupSpawns();let e=t.step,i=e&&e.at&&t.loc(e.at)||this.checkpoint.pos;this.player.spawn(i,this.checkpoint.yaw),t.stepIdx--,t.ctx=null,t.step=null,t.impl=null,t.next(),this.resume()}onDeath(){this.hud.toast("DOWN\u2026 but not out.",2),this.audio.play("ui_back"),this.world.fire&&(this.world.fire.front=Math.min(this.world.fire.front,this.player.pos.z-14)),setTimeout(()=>{if(this.missions.active){let t=this.missions.step,e=t&&t.at&&this.missions.loc(t.at)||this.player.lastSafe;this.boss,this.player.spawn(e,this.player.yaw)}else this.player.spawn(this.player.lastSafe,this.player.yaw);this.player.health=this.player.maxHealth},700)}spawnBoss(t,e){this.despawnBoss();let i=fe.get("npcTypes",t);return this.boss=new Lo(this,i,e),this.boss}despawnBoss(){this.boss&&(this.boss.dispose(),this.boss=null)}frame(t){requestAnimationFrame(n=>this.frame(n));let e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.renderer.adapt(e),this.hitstop>0&&(this.hitstop-=e,e*=.08),this.time+=e,$.poll(e,he.settings);let i=this.state==="play";if(i){if($.pressed("start")?this.pause():$.pressed("select")&&!this.world.data.interior&&(this.pause(),this.menus.go(()=>this.menus.worldMap(!0))),$.pressed("r3")&&this.cycleCamera(),$.pressed("up")){let n=this.hud.waypoint;this.hud.toast(n?`Objective: ${Math.round(n.distanceTo(this.player.pos))}m`:"No objective \u2014 explore!",1.4),this.audio.play("ui_click")}this.dialogue.open||this.combat.update(e),this.player.update(e),this.missions.update(e),this.activities.update(e),this.npcs.update(e,this.player),this.boss&&this.boss.update(e),this.updateFire(e),this.checkTriggers(),this.dialogue.update(e),this.updateHints()}else this.state==="home"?this.dialogue.update(e):(this.state==="pause"||this.state==="menu")&&($.pressed("start")&&this.state==="pause"&&this.resume(),this.attract&&this.state==="menu"&&this.attractCam(e));if(this.home.update(e),i&&this.checkExits(e),this.world.data){this.home.showcase?this.home.showcaseCam(e):(i||this.state==="pause"||this.state==="home")&&this.rig.update(i?e:0,this.player,this.world),this.renderer.camera.updateMatrixWorld(),this.world.update(i?e:e*.3,this.renderer.camera,this.player),this.updateHero(e),this.updateViewModel(e),this.fx.update(e),i&&this.hud.update(e),this.updateAudioLoops();let n=this.rig.mode==="fp"&&!this.home.showcase&&(i||this.state==="pause"||this.state==="home");this.renderer.render(this.world.scene,n?this.vmScene:null,this.vmCam)}this.overlay.draw()}attractCam(t){let e=this.renderer.camera,i=this.time*.05,n=this.world.data.spawn;e.position.set(n.x+Math.cos(i)*90,70,n.z+Math.sin(i)*90),e.lookAt(n.x,30,n.z)}updateHero(t){let e=this.player,i=this.heroModel,n=this.rig.mode==="fp"&&!this.home.showcase;if(i.root.visible=!n&&!!this.world.data&&this.state!=="menu"&&!this.world.data.hideHero,this.rideMesh&&(this.rideMesh.position.copy(e.pos),this.rideMesh.rotation.y=Math.atan2(-e.vel.x,-e.vel.z)+Math.PI,this.rideMesh.visible=this.state!=="menu"),!i.root.visible)return;i.root.position.copy(e.pos),this.rideMesh&&(i.root.position.y+=e.ride==="bicycle"?.35:.15);let r=e.yaw+Math.PI;if((e.fsm.is("swing","air","zip","ride","wallrun")&&e.speed>2||e.fsm.is("ground","slide")&&e.speed>1.5)&&(r=Math.atan2(e.vel.x,e.vel.z)),e.fsm.is("climb","hang")&&(r=Math.atan2(-e.wallN.x,-e.wallN.z)),this.home.showcase){let l=this.renderer.camera.position;r=Math.atan2(l.x-e.pos.x,l.z-e.pos.z)+Math.sin(this.time*.7)*.5}i.faceY=i.faceY===void 0?r:On(i.faceY,r,14,t),i.root.rotation.y=i.faceY;let o=this._heroEx||(this._heroEx={});if(o.hero=!0,o.side=e.swingSide<0?"L":"R",o.sp=e.swingPhase,o.wallSide=e.wallSide,o.trick=e.trick||e.groundTrick,o.k=void 0,o.snap=16,o.ropePitch=0,o.ropeRoll=0,e.ropeActive){let l=Math.sin(i.faceY),c=Math.cos(i.faceY),h=jx.subVectors(e.anchor,e.pos).normalize();o.ropePitch=Wt(Math.atan2(h.x*l+h.z*c,h.y),-1.3,1.3),o.ropeRoll=Wt(-Math.atan2(h.x*c-h.z*l,h.y),-1,1),e.fsm.is("zip")&&(o.ropePitch=Wt(o.ropePitch,.2,1.4))}let a=e.pose;e.fsm.is("locked")&&(a=e.lockPose==="takedown"?"takedown":e.lockPose,o.k=1-e.lockTimer/(e.lockDur||.3),o.snap=26),e.ride&&(a=e.ride==="bicycle"?"bike":e.ride==="skates"?"skate":"ride"),e.landSquash&&(i.anim.landT=.25,e.landSquash=!1),Bn(i,a,e.speed,t,o)}updateViewModel(t){let e=this.vm;if(!e)return;let i=this.renderer.camera,n=this.player;if(e.group.visible=this.rig.mode==="fp"&&this.state!=="menu"&&!this.home.showcase,!e.group.visible)return;let r=this.vmCam;r.aspect=i.aspect,r.fov=Wt(i.fov,50,100),r.updateProjectionMatrix();let o=Math.tan(r.fov*Math.PI/360),a=o*i.aspect;r.rotation.z=this.rig.roll*.5;let l=.5,c=Wt(a*l/.55,.3,1);e.group.scale.setScalar(c);let h=this.time,u=n.fsm.is("ground")?Math.min(1,n.speed/7):0;for(let f of["L","R"]){let d=e.hands[f],x=f==="L"?-1:1;e.kickT[f]=Math.max(0,e.kickT[f]-t);let g=x*.6,m=-.78+Math.sin(h*9+(f==="L"?0:Math.PI))*.04*u,p=0,v=.12,_=n.swingSide<0?"L":"R";if(n.fsm.is("swing")&&f===_){let A=i.aspect<1;g=x*(A?.62:.42),m=A?-.05:.18,v=A?.95:1.3}n.fsm.is("zip")&&(g=x*.3,m=.05,v=1.2),(n.trick||n.groundTrick)&&!n.fsm.is("swing")&&(g=x*.35,m=-.5,v=.8),n.fsm.is("climb","hang")&&(g=x*.45,m=-.25+Math.sin(h*8+(f==="L"?0:3))*.12*Math.abs($.move.y),v=1.3);let y=n.lockPose==="cross"?"L":"R";if(n.fsm.is("locked")&&["punch","jab","cross","hook","uppercut","takedown"].includes(n.lockPose)&&f===y){let A=1-n.lockTimer/(n.lockDur||.3),M=A<.25?-.3:A<.6?1:.4;g=x*.12,m=-.35+(n.lockPose==="uppercut"?.3*M:0),p=-.16*M,v=0}n.fsm.is("locked")&&(n.lockPose==="kick"||n.lockPose==="spinkick")&&(m=-1.4),n.fsm.is("vault")&&(m=-.95,v=-.4),n.fsm.is("wallrun")&&(n.wallSide<0&&f==="L"||n.wallSide>0&&f==="R")&&(g=x*.85,m=-.2,v=.6),n.fsm.is("slide")&&(m=-.65,g=x*.7),this.combat.aiming&&f==="R"&&(g=.25,m=-.45),e.kickT[f]>0&&(p+=.08*(e.kickT[f]/.18)),this.dialogue.open&&(m=-1.6);let w=-l+p,S=g*a*l/c,E=m*o*l/c;d.position.x=Xe(d.position.x,S,16,t),d.position.y=Xe(d.position.y,E,16,t),d.position.z=Xe(d.position.z,w/c,16,t),d.rotation.x=Xe(d.rotation.x,v,14,t)}}updateAudioLoops(){let t=this.audio;if(!t.ready)return;let e=this.player,i=this.state==="play",n=e.vel.length();t.setLoop("wind",i&&!e.ground?Wt((n-6)/30,0,.5):0,300+n*40),t.setLoop("roll",i&&e.ride&&e.ground?Wt((e.rideSpeed||0)/20,0,.35):0,120+(e.rideSpeed||0)*12);let r=this.fireOn&&this.world.fire?Wt(1-Math.abs(this.world.fire.front-e.pos.z)/30,0,1):0;t.setLoop("fire",i?r*.6:0,500+r*600),t.setLoop("city",i&&this.world.data&&!this.world.data.interior?.08:0);let o=this.npcs.list.some(a=>a.hostile&&a.fsm.is("combat"))||this.boss&&this.boss.alive;t.intensity=Xe(t.intensity||0,o?1:0,.8,1/60),t.musicOn=this.state!=="loading"}updateFire(t){if(!this.fireOn||!this.world.fire)return;let e=this.world.fire,i=this.player,n=i.pos.z-e.front,r=n>22?4.2:n>10?this.fireRate||2.2:1;e.front+=r*t,this.world.data.outdoorZ&&e.front>this.world.data.outdoorZ&&(e.front=this.world.data.outdoorZ),n<1.5&&i.hurt(30*t,"fire"),this.renderer.postMat.uniforms.flash.value=Wt((6-n)/20,0,.25),this.renderer.postMat.uniforms.flashCol.value.set("#ff5a1a")}checkTriggers(){let t=this.world.data.triggers;if(!t)return;let e=this.player.pos;for(let i of t){let n=e.x>=i.min[0]&&e.x<=i.max[0]&&e.y>=i.min[1]&&e.y<=i.max[1]&&e.z>=i.min[2]&&e.z<=i.max[2];n&&!i._in?(i._in=!0,B.emit("trigger:enter",i),i.pit&&(this.hud.toast("Careful! Wall-run across (hold L1, run at the side wall).",2.5),this.player.spawn(new C(0,i.respawnY+.1,i.respawnZ),Math.PI),this.player.yaw=Math.PI),i.seg&&i.seg.shutter&&!i.seg.shutter.closing&&this.closeShutter(i.seg.shutter)):!n&&i._in&&(i._in=!1)}}checkExits(t){let e=this.world.data&&this.world.data.exits;if(!e||!e.length||this.travelling)return;let i=this.player.pos;this._exitWarn=Math.max(0,(this._exitWarn||0)-t);for(let n of e){if(i.x<n.min[0]||i.x>n.max[0]||i.z<n.min[2]||i.z>n.max[2])continue;if(this.missions.active||!fe.get("cities",n.to)){let a={x0:[1,0],x1:[-1,0],z0:[0,1],z1:[0,-1]}[n.side];this.player.vel.x=a[0]*9,this.player.vel.z=a[1]*9,this._exitWarn<=0&&(this._exitWarn=2,this.hud.toast(this.missions.active?"Stay in the area \u2014 you're on a job!":"That way is closed for now.",1.6));return}let r={x0:"x1",x1:"x0",z0:"z1",z1:"z0"}[n.side],o=Math.min(14,Math.hypot(this.player.vel.x,this.player.vel.z));this.travelling=!0,this.hud.toast("Heading to "+(n.label||n.to)+"\u2026",1.4),this.startFreeRoam(n.to,{edge:r,carry:o}).finally(()=>{this.travelling=!1});return}}closeShutter(t){t.closing=!0;let e=new Zi(t.x1-t.x0,t.h,.4);e.translate(0,t.h/2,0);let i=new zt(e,new ze({color:14065966}));i.position.set(0,t.y+t.h,t.z),this.world.dynamic.add(i);let n=this.world.collision.add(t.x0,t.y+t.h,t.z-.2,t.x1,t.y+t.h*2,t.z+.2,{});this.audio.play("clang"),this.hud.toast("The shutter is closing \u2014 SLIDE under! (run + \u25CB)",2.2);let r=0,o=2.2,a=()=>{r+=1/60;let l=Math.min(1,r/o),c=t.y+t.h-l*(t.h-0),h=Math.max(t.y+(l<.97?1:0),c);i.position.y=h,n.min[1]=h,n.max[1]=h+t.h,l<1?requestAnimationFrame(a):this.audio.play("clang",{rate:.8})};requestAnimationFrame(a)}updateHints(){let t=this.player,e=this.overlay;e.setHint("cross",t.fsm.is("swing")?"SWING-JUMP":t.fsm.is("climb","wallrun")?"WALL-JUMP":t.fsm.is("hang")?"CLIMB UP":t.fsm.is("air")&&t.airTime>.1?"TRICK":t.fsm.is("zip")?"LAUNCH":"JUMP"),e.setHint("circle",this.combat.dangerT>0?"DODGE!":t.fsm.is("hang","climb")?"DROP":t.fsm.is("air")?"DIVE":t.speed>5.8&&t.fsm.is("ground")?"SLIDE":"CROUCH"),e.setHint("r2",t.abilities.swing?t.aimZipPoint?"LAUNCH":"SWING":"\u2014"),e.setHint("l1","FREE-RUN"),e.setHint("l2","AIM"),e.setHint("r1",t.abilities.gadgets?"GADGET":"\u2014"),e.setHint("triangle",t.abilities.gadgets?"GEAR":"\u2014"),e.setHint("l3","SENSE"),e.setHint("r3","CAM"),e.setHint("down",t.abilities.ride?t.ride?"RIDE \u25B8":"RIDE":null)}},Qx=s=>new Promise(t=>setTimeout(t,s));function $u(){let s;try{s=new Ko,window.TETHER=s}catch(i){console.error(i),document.getElementById("bootmsg").textContent="Failed to start: "+i.message;return}let t=document.getElementById("bootsplash");t.classList.add("ready");let e=async()=>{t.removeEventListener("pointerup",e),window.removeEventListener("keydown",e),s.audio.unlock();try{matchMedia("(pointer:coarse)").matches&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock()}catch{}s.boot()};t.addEventListener("pointerup",e),window.addEventListener("keydown",e)}var ty=document.fonts&&document.fonts.load?Promise.race([document.fonts.load("32px Bangers"),new Promise(s=>setTimeout(s,1500))]):Promise.resolve();ty.then($u,$u);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
