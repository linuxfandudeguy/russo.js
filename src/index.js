/*
 * Russo.js - ISO 9-based Cyrillic to Latin transliteration
 * Created in 2025
 * Licensed under the MIT License
 * GitHub: https://github.com/linuxfandudeguy/russo.js
 */

// imports for the functions and polyfills
import 'core-js/es/object';
import 'core-js/es/symbol';
import 'core-js/es/array';
import 'core-js/es/regexp';
import { transliterate } from './mappings/transliterate.js';
import { toRussian } from './mappings/toRussian.js';
// attach to object
const Russo = {
  transliterate,
  toRussian
};
// attach to object for browser
if (typeof window !== 'undefined') {
  window.Russo = Russo;
}

// export
export { Russo, transliterate, toRussian };
export default Russo; 
