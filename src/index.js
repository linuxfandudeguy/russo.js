import { transliterate } from './mappings/transliterate.js';
import { toRussian } from './mappings/toRussian.js';

const Russo = {
  transliterate,
  toRussian
};

if (typeof window !== 'undefined') {
  window.Russo = Russo;
}

export { Russo, transliterate, toRussian };
export default Russo; 
