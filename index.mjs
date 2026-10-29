// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float16-pinf@v0.2.3-esm/index.mjs";var n="function"==typeof Float16Array?Float16Array:null;function r(){var r,o;if("function"!=typeof n)return!1;try{r="object"==typeof(o=new n([1,3.14,-3.14,5e40]))&&null!==o&&"Float16Array"===o.constructor.name&&2===o.BYTES_PER_ELEMENT&&1===o[0]&&3.14!==o[1]&&-3.14!==o[2]&&o[3]===t&&4===o.length}catch(t){r=!1}return r}export{r as default};
//# sourceMappingURL=index.mjs.map
