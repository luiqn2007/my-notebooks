import{r as k}from"./chunk.vendor_minimalistic-assert.js";import{r as z}from"./chunk.vendor_inherits.js";var _={},y={},D;function j(){if(D)return y;D=1,y.readUInt32BE=function(a,e){var i=a[0+e]<<24|a[1+e]<<16|a[2+e]<<8|a[3+e];return i>>>0},y.writeUInt32BE=function(a,e,i){a[0+i]=e>>>24,a[1+i]=e>>>16&255,a[2+i]=e>>>8&255,a[3+i]=e&255},y.ip=function(a,e,i,u){for(var r=0,n=0,p=6;p>=0;p-=2){for(var t=0;t<=24;t+=8)r<<=1,r|=e>>>t+p&1;for(var t=0;t<=24;t+=8)r<<=1,r|=a>>>t+p&1}for(var p=6;p>=0;p-=2){for(var t=1;t<=25;t+=8)n<<=1,n|=e>>>t+p&1;for(var t=1;t<=25;t+=8)n<<=1,n|=a>>>t+p&1}i[u+0]=r>>>0,i[u+1]=n>>>0},y.rip=function(a,e,i,u){for(var r=0,n=0,p=0;p<4;p++)for(var t=24;t>=0;t-=8)r<<=1,r|=e>>>t+p&1,r<<=1,r|=a>>>t+p&1;for(var p=4;p<8;p++)for(var t=24;t>=0;t-=8)n<<=1,n|=e>>>t+p&1,n<<=1,n|=a>>>t+p&1;i[u+0]=r>>>0,i[u+1]=n>>>0},y.pc1=function(a,e,i,u){for(var r=0,n=0,p=7;p>=5;p--){for(var t=0;t<=24;t+=8)r<<=1,r|=e>>t+p&1;for(var t=0;t<=24;t+=8)r<<=1,r|=a>>t+p&1}for(var t=0;t<=24;t+=8)r<<=1,r|=e>>t+p&1;for(var p=1;p<=3;p++){for(var t=0;t<=24;t+=8)n<<=1,n|=e>>t+p&1;for(var t=0;t<=24;t+=8)n<<=1,n|=a>>t+p&1}for(var t=0;t<=24;t+=8)n<<=1,n|=a>>t+p&1;i[u+0]=r>>>0,i[u+1]=n>>>0},y.r28shl=function(a,e){return a<<e&268435455|a>>>28-e};var l=[14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24];y.pc2=function(a,e,i,u){for(var r=0,n=0,p=l.length>>>1,t=0;t<p;t++)r<<=1,r|=a>>>l[t]&1;for(var t=p;t<l.length;t++)n<<=1,n|=e>>>l[t]&1;i[u+0]=r>>>0,i[u+1]=n>>>0},y.expand=function(a,e,i){var u=0,r=0;u=(a&1)<<5|a>>>27;for(var n=23;n>=15;n-=4)u<<=6,u|=a>>>n&63;for(var n=11;n>=3;n-=4)r|=a>>>n&63,r<<=6;r|=(a&31)<<1|a>>>31,e[i+0]=u>>>0,e[i+1]=r>>>0};var c=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11];y.substitute=function(a,e){for(var i=0,u=0;u<4;u++){var r=a>>>18-u*6&63,n=c[u*64+r];i<<=4,i|=n}for(var u=0;u<4;u++){var r=e>>>18-u*6&63,n=c[4*64+u*64+r];i<<=4,i|=n}return i>>>0};var f=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7];return y.permute=function(a){for(var e=0,i=0;i<f.length;i++)e<<=1,e|=a>>>f[i]&1;return e>>>0},y.padSplit=function(a,e,i){for(var u=a.toString(2);u.length<e;)u="0"+u;for(var r=[],n=0;n<e;n+=i)r.push(u.slice(n,n+i));return r.join(" ")},y}var w,C;function B(){if(C)return w;C=1;var l=k();function c(f){this.options=f,this.type=this.options.type,this.blockSize=8,this._init(),this.buffer=new Array(this.blockSize),this.bufferOff=0,this.padding=f.padding!==!1}return w=c,c.prototype._init=function(){},c.prototype.update=function(s){return s.length===0?[]:this.type==="decrypt"?this._updateDecrypt(s):this._updateEncrypt(s)},c.prototype._buffer=function(s,a){for(var e=Math.min(this.buffer.length-this.bufferOff,s.length-a),i=0;i<e;i++)this.buffer[this.bufferOff+i]=s[a+i];return this.bufferOff+=e,e},c.prototype._flushBuffer=function(s,a){return this._update(this.buffer,0,s,a),this.bufferOff=0,this.blockSize},c.prototype._updateEncrypt=function(s){var a=0,e=0,i=(this.bufferOff+s.length)/this.blockSize|0,u=new Array(i*this.blockSize);this.bufferOff!==0&&(a+=this._buffer(s,a),this.bufferOff===this.buffer.length&&(e+=this._flushBuffer(u,e)));for(var r=s.length-(s.length-a)%this.blockSize;a<r;a+=this.blockSize)this._update(s,a,u,e),e+=this.blockSize;for(;a<s.length;a++,this.bufferOff++)this.buffer[this.bufferOff]=s[a];return u},c.prototype._updateDecrypt=function(s){for(var a=0,e=0,i=Math.ceil((this.bufferOff+s.length)/this.blockSize)-1,u=new Array(i*this.blockSize);i>0;i--)a+=this._buffer(s,a),e+=this._flushBuffer(u,e);return a+=this._buffer(s,a),u},c.prototype.final=function(s){var a;s&&(a=this.update(s));var e;return this.type==="encrypt"?e=this._finalEncrypt():e=this._finalDecrypt(),a?a.concat(e):e},c.prototype._pad=function(s,a){if(a===0)return!1;for(;a<s.length;)s[a++]=0;return!0},c.prototype._finalEncrypt=function(){if(!this._pad(this.buffer,this.bufferOff))return[];var s=new Array(this.blockSize);return this._update(this.buffer,0,s,0),s},c.prototype._unpad=function(s){return s},c.prototype._finalDecrypt=function(){l.equal(this.bufferOff,this.blockSize,"Not enough data to decrypt");var s=new Array(this.blockSize);return this._flushBuffer(s,0),this._unpad(s)},w}var x,U;function K(){if(U)return x;U=1;var l=k(),c=z(),f=j(),s=B();function a(){this.tmp=new Array(2),this.keys=null}function e(u){s.call(this,u);var r=new a;this._desState=r,this.deriveKeys(r,u.key)}c(e,s),x=e,e.create=function(r){return new e(r)};var i=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];return e.prototype.deriveKeys=function(r,n){r.keys=new Array(16*2),l.equal(n.length,this.blockSize,"Invalid key length");var p=f.readUInt32BE(n,0),t=f.readUInt32BE(n,4);f.pc1(p,t,r.tmp,0),p=r.tmp[0],t=r.tmp[1];for(var h=0;h<r.keys.length;h+=2){var o=i[h>>>1];p=f.r28shl(p,o),t=f.r28shl(t,o),f.pc2(p,t,r.keys,h)}},e.prototype._update=function(r,n,p,t){var h=this._desState,o=f.readUInt32BE(r,n),v=f.readUInt32BE(r,n+4);f.ip(o,v,h.tmp,0),o=h.tmp[0],v=h.tmp[1],this.type==="encrypt"?this._encrypt(h,o,v,h.tmp,0):this._decrypt(h,o,v,h.tmp,0),o=h.tmp[0],v=h.tmp[1],f.writeUInt32BE(p,o,t),f.writeUInt32BE(p,v,t+4)},e.prototype._pad=function(r,n){if(this.padding===!1)return!1;for(var p=r.length-n,t=n;t<r.length;t++)r[t]=p;return!0},e.prototype._unpad=function(r){if(this.padding===!1)return r;for(var n=r[r.length-1],p=r.length-n;p<r.length;p++)l.equal(r[p],n);return r.slice(0,r.length-n)},e.prototype._encrypt=function(r,n,p,t,h){for(var o=n,v=p,d=0;d<r.keys.length;d+=2){var b=r.keys[d],g=r.keys[d+1];f.expand(v,r.tmp,0),b^=r.tmp[0],g^=r.tmp[1];var S=f.substitute(b,g),m=f.permute(S),E=v;v=(o^m)>>>0,o=E}f.rip(v,o,t,h)},e.prototype._decrypt=function(r,n,p,t,h){for(var o=p,v=n,d=r.keys.length-2;d>=0;d-=2){var b=r.keys[d],g=r.keys[d+1];f.expand(o,r.tmp,0),b^=r.tmp[0],g^=r.tmp[1];var S=f.substitute(b,g),m=f.permute(S),E=o;o=(v^m)>>>0,v=E}f.rip(o,v,t,h)},x}var q={},A;function M(){if(A)return q;A=1;var l=k(),c=z(),f={};function s(e){l.equal(e.length,8,"Invalid IV length"),this.iv=new Array(8);for(var i=0;i<this.iv.length;i++)this.iv[i]=e[i]}function a(e){function i(p){e.call(this,p),this._cbcInit()}c(i,e);for(var u=Object.keys(f),r=0;r<u.length;r++){var n=u[r];i.prototype[n]=f[n]}return i.create=function(t){return new i(t)},i}return q.instantiate=a,f._cbcInit=function(){var i=new s(this.options.iv);this._cbcState=i},f._update=function(i,u,r,n){var p=this._cbcState,t=this.constructor.super_.prototype,h=p.iv;if(this.type==="encrypt"){for(var o=0;o<this.blockSize;o++)h[o]^=i[u+o];t._update.call(this,h,0,r,n);for(var o=0;o<this.blockSize;o++)h[o]=r[n+o]}else{t._update.call(this,i,u,r,n);for(var o=0;o<this.blockSize;o++)r[n+o]^=h[o];for(var o=0;o<this.blockSize;o++)h[o]=i[u+o]}},q}var I,O;function T(){if(O)return I;O=1;var l=k(),c=z(),f=B(),s=K();function a(i,u){l.equal(u.length,24,"Invalid key length");var r=u.slice(0,8),n=u.slice(8,16),p=u.slice(16,24);i==="encrypt"?this.ciphers=[s.create({type:"encrypt",key:r}),s.create({type:"decrypt",key:n}),s.create({type:"encrypt",key:p})]:this.ciphers=[s.create({type:"decrypt",key:p}),s.create({type:"encrypt",key:n}),s.create({type:"decrypt",key:r})]}function e(i){f.call(this,i);var u=new a(this.type,this.options.key);this._edeState=u}return c(e,f),I=e,e.create=function(u){return new e(u)},e.prototype._update=function(u,r,n,p){var t=this._edeState;t.ciphers[0]._update(u,r,n,p),t.ciphers[1]._update(n,p,n,p),t.ciphers[2]._update(n,p,n,p)},e.prototype._pad=s.prototype._pad,e.prototype._unpad=s.prototype._unpad,I}var R;function P(){return R||(R=1,_.utils=j(),_.Cipher=B(),_.DES=K(),_.CBC=M(),_.EDE=T()),_}export{P as r};
