import{r as g}from"./chunk.vendor_get-intrinsic.js";import{r as F}from"./chunk.vendor_define-data-property.js";import{r as h}from"./chunk.vendor_has-property-descriptors.js";import{r as l}from"./chunk.vendor_gopd.js";import{r as b}from"./chunk.vendor_es-errors.js";var i,s;function G(){if(s)return i;s=1;var p=g(),n=F(),m=h()(),o=l(),a=b(),v=p("%Math.floor%");return i=function(e,r){if(typeof e!="function")throw new a("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||v(r)!==r)throw new a("`length` must be a positive 32-bit integer");var c=arguments.length>2&&!!arguments[2],u=!0,f=!0;if("length"in e&&o){var t=o(e,"length");t&&!t.configurable&&(u=!1),t&&!t.writable&&(f=!1)}return(u||f||!c)&&(m?n(e,"length",r,!0,!0):n(e,"length",r)),e},i}export{G as r};