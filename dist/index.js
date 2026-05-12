"use strict";var a=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=a(function(F,e){
var s=typeof Float16Array=="function"?Float16Array:null;e.exports=s
});var n=a(function(v,u){
var c=require('@stdlib/constants-float16-pinf/dist'),l=o();function i(){var t,r;if(typeof l!="function")return!1;try{r=new l([1,3.14,-3.14,5e40]),t=typeof r=="object"&&r!==null&&r.constructor.name==="Float16Array"&&r.BYTES_PER_ELEMENT===2&&r[0]===1&&r[1]!==3.14&&r[2]!==-3.14&&r[3]===c&&r.length===4}catch(y){t=!1}return t}u.exports=i
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
