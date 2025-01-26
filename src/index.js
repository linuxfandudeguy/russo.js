/*
 * Russo.js - ISO 9-based Cyrillic to Latin transliteration
 * Created in 2025
 * Licensed under the MIT License
 * GitHub: https://github.com/linuxfandudeguy/russo.js
 */

// imports for the functions
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

export { Russo, transliterate, toRussian };
export default Russo; 
