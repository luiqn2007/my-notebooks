import{g as f}from"./chunk.vendor_asn1-js.js";var n=function(a){var r=0;if(a.length==0)return r;for(var t=0;t<a.length;t++){var o=a.charCodeAt(t);r=(r<<5)-r+o,r=r&r}return r},p=function(a,r){var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";r=r||62;var o=[],h,v="",u=a<0?"-":"";for(a=Math.abs(a);a>=r;)h=a%r,a=Math.floor(a/r),o.push(t[h]);a>0&&o.push(t[a]);for(var s=o.length-1;s>=0;s--)v+=o[s];return u+v},e=function(a){var r=typeof a;if(r==="string"||r==="number"){var t=p(n(String(a)),61);return t.replace("-","Z")}else throw new Error("Unexpected input type")},c=e;const m=f(c);export{m as s};
