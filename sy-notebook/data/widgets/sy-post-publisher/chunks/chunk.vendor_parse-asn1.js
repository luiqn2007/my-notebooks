import{r as I}from"./chunk.vendor_asn1-js.js";import{r as C}from"./chunk.vendor_evp_bytestokey.js";import{r as S}from"./chunk.vendor_browserify-aes.js";import{r as R}from"./chunk.vendor_safe-buffer.js";import{r as x}from"./chunk.vendor_pbkdf2.js";var n={},P,g;function T(){if(g)return P;g=1;var e=I(),u=e.define("Time",function(){this.choice({utcTime:this.utctime(),generalTime:this.gentime()})}),p=e.define("AttributeTypeValue",function(){this.seq().obj(this.key("type").objid(),this.key("value").any())}),y=e.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("parameters").optional(),this.key("curve").objid().optional())}),h=e.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(y),this.key("subjectPublicKey").bitstr())}),a=e.define("RelativeDistinguishedName",function(){this.setof(p)}),d=e.define("RDNSequence",function(){this.seqof(a)}),v=e.define("Name",function(){this.choice({rdnSequence:this.use(d)})}),i=e.define("Validity",function(){this.seq().obj(this.key("notBefore").use(u),this.key("notAfter").use(u))}),s=e.define("Extension",function(){this.seq().obj(this.key("extnID").objid(),this.key("critical").bool().def(!1),this.key("extnValue").octstr())}),c=e.define("TBSCertificate",function(){this.seq().obj(this.key("version").explicit(0).int().optional(),this.key("serialNumber").int(),this.key("signature").use(y),this.key("issuer").use(v),this.key("validity").use(i),this.key("subject").use(v),this.key("subjectPublicKeyInfo").use(h),this.key("issuerUniqueID").implicit(1).bitstr().optional(),this.key("subjectUniqueID").implicit(2).bitstr().optional(),this.key("extensions").explicit(3).seqof(s).optional())}),f=e.define("X509Certificate",function(){this.seq().obj(this.key("tbsCertificate").use(c),this.key("signatureAlgorithm").use(y),this.key("signatureValue").bitstr())});return P=f,P}var E;function D(){if(E)return n;E=1;var e=I();n.certificate=T();var u=e.define("RSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())});n.RSAPrivateKey=u;var p=e.define("RSAPublicKey",function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())});n.RSAPublicKey=p;var y=e.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(h),this.key("subjectPublicKey").bitstr())});n.PublicKey=y;var h=e.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())}),a=e.define("PrivateKeyInfo",function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(h),this.key("subjectPrivateKey").octstr())});n.PrivateKey=a;var d=e.define("EncryptedPrivateKeyInfo",function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())});n.EncryptedPrivateKey=d;var v=e.define("DSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())});n.DSAPrivateKey=v,n.DSAparam=e.define("DSAparam",function(){this.int()});var i=e.define("ECPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(s),this.key("publicKey").optional().explicit(1).bitstr())});n.ECPrivateKey=i;var s=e.define("ECParameters",function(){this.choice({namedCurve:this.objid()})});return n.signature=e.define("signature",function(){this.seq().obj(this.key("r").int(),this.key("s").int())}),n}const B={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"};var K,A;function w(){if(A)return K;A=1;var e=/Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,u=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,p=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,y=C(),h=S(),a=R().Buffer;return K=function(d,v){var i=d.toString(),s=i.match(e),c;if(s){var r="aes"+s[1],o=a.from(s[2],"hex"),t=a.from(s[3].replace(/[\r\n]/g,""),"base64"),m=y(v,o.slice(0,8),parseInt(s[1],10)).key,l=[],b=h.createDecipheriv(r,m,o);l.push(b.update(t)),l.push(b.final()),c=a.concat(l)}else{var f=i.match(p);c=a.from(f[2].replace(/[\r\n]/g,""),"base64")}var k=i.match(u)[1];return{tag:k,data:c}},K}var j,q;function F(){if(q)return j;q=1;var e=D(),u=B,p=w(),y=S(),h=x(),a=R().Buffer;j=d;function d(i){var s;typeof i=="object"&&!a.isBuffer(i)&&(s=i.passphrase,i=i.key),typeof i=="string"&&(i=a.from(i));var c=p(i,s),f=c.tag,r=c.data,o,t;switch(f){case"CERTIFICATE":t=e.certificate.decode(r,"der").tbsCertificate.subjectPublicKeyInfo;case"PUBLIC KEY":switch(t||(t=e.PublicKey.decode(r,"der")),o=t.algorithm.algorithm.join("."),o){case"1.2.840.113549.1.1.1":return e.RSAPublicKey.decode(t.subjectPublicKey.data,"der");case"1.2.840.10045.2.1":return t.subjectPrivateKey=t.subjectPublicKey,{type:"ec",data:t};case"1.2.840.10040.4.1":return t.algorithm.params.pub_key=e.DSAparam.decode(t.subjectPublicKey.data,"der"),{type:"dsa",data:t.algorithm.params};default:throw new Error("unknown key id "+o)}case"ENCRYPTED PRIVATE KEY":r=e.EncryptedPrivateKey.decode(r,"der"),r=v(r,s);case"PRIVATE KEY":switch(t=e.PrivateKey.decode(r,"der"),o=t.algorithm.algorithm.join("."),o){case"1.2.840.113549.1.1.1":return e.RSAPrivateKey.decode(t.subjectPrivateKey,"der");case"1.2.840.10045.2.1":return{curve:t.algorithm.curve,privateKey:e.ECPrivateKey.decode(t.subjectPrivateKey,"der").privateKey};case"1.2.840.10040.4.1":return t.algorithm.params.priv_key=e.DSAparam.decode(t.subjectPrivateKey,"der"),{type:"dsa",params:t.algorithm.params};default:throw new Error("unknown key id "+o)}case"RSA PUBLIC KEY":return e.RSAPublicKey.decode(r,"der");case"RSA PRIVATE KEY":return e.RSAPrivateKey.decode(r,"der");case"DSA PRIVATE KEY":return{type:"dsa",params:e.DSAPrivateKey.decode(r,"der")};case"EC PRIVATE KEY":return r=e.ECPrivateKey.decode(r,"der"),{curve:r.parameters.value,privateKey:r.privateKey};default:throw new Error("unknown key type "+f)}}d.signature=e.signature;function v(i,s){var c=i.algorithm.decrypt.kde.kdeparams.salt,f=parseInt(i.algorithm.decrypt.kde.kdeparams.iters.toString(),10),r=u[i.algorithm.decrypt.cipher.algo.join(".")],o=i.algorithm.decrypt.cipher.iv,t=i.subjectPrivateKey,m=parseInt(r.split("-")[1],10)/8,l=h.pbkdf2Sync(s,c,f,m,"sha1"),b=y.createDecipheriv(r,l,o),k=[];return k.push(b.update(t)),k.push(b.final()),a.concat(k)}return j}export{F as r};
