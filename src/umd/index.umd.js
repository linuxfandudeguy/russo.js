(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS (Node.js)
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof exports === 'object' && typeof module === 'object' && !module.exports) {
    // ESM (Node.js with ESM support)
    import { transliterate } from './mappings/transliterate.umd.js';
    import { toRussian } from './mappings/toRussian.umd.js';
    root.Russo = factory();
  } else {
    // Global (Browser)
    root.Russo = factory();
  }
}(this, function () {
  const transliterate = require('./mappings/transliterate.umd.js');
  const toRussian = require('./mappings/toRussian.umd.js');

  return {
    transliterate,
    toRussian
  };
}));
