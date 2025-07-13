// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float16array@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";var n="function"==typeof Float16Array?Float16Array:null;function s(){var s,e;if("function"!=typeof n)return!1;try{e=new n([1,3.14,-3.14,5e40]),s=t(e)&&1===e[0]&&3.14!==e[1]&&-3.14!==e[2]&&e[3]===r}catch(t){s=!1}return s}export{s as default};
//# sourceMappingURL=index.mjs.map
