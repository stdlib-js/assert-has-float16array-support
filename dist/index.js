"use strict";var e=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=e(function(F,o){
var c=typeof Float16Array=="function"?Float16Array:null;o.exports=c
});var s=e(function(v,n){
var i=require('@stdlib/constants-float16-pinf/dist'),u=l();function p(){var t,r;if(typeof u!="function")return!1;try{r=new u([1,3.14,-3.14,5e40]),t=typeof r=="object"&&r!==null&&r.constructor.name==="Float16Array"&&r.BYTES_PER_ELEMENT===2&&r[0]===1&&r[1]!==3.14&&r[2]!==-3.14&&r[3]===i&&r.length===4}catch(a){t=!1}return t}n.exports=p
});var y=s();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
