// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Number.POSITIVE_INFINITY,r="function"==typeof Float16Array?Float16Array:null;function n(){var n,e;if("function"!=typeof r)return!1;try{n="object"==typeof(e=new r([1,3.14,-3.14,5e40]))&&null!==e&&"Float16Array"===e.constructor.name&&2===e.BYTES_PER_ELEMENT&&1===e[0]&&3.14!==e[1]&&-3.14!==e[2]&&e[3]===t&&4===e.length}catch(t){n=!1}return n}export{n as default};
//# sourceMappingURL=mod.js.map
