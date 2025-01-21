(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS (Node.js)
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else {
    // Global (Browser)
    root.toRussian = factory();
  }
}(this, function () {
  // Full transliteration mapping, including single letters and digraphs
  const transliterationMap = {
    'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
    'e': 'е', 'yo': 'ё', 'zh': 'ж', 'z': 'з', 'i': 'и',
    'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н',
    'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т',
    'u': 'у', 'f': 'ф', 'kh': 'х', 'ts': 'ц', 'ch': 'ч',
    'sh': 'ш', 'shch': 'щ', 'yu': 'ю', 'ya': 'я', "'": 'ь',
    ' ': ' ', // Preserve spaces
  };

  // Create a regular expression to match digraphs first (e.g., "sh", "zh") and single letters
  const regex = new RegExp(
    Object.keys(transliterationMap).sort((a, b) => b.length - a.length).join('|'),
    'gi'
  );

  // Perform transliteration
  function toRussian(text) {
    return text.replace(regex, (match) => {
      const isUpperCase = match[0] === match[0].toUpperCase();
      const lowerMatch = match.toLowerCase();

      // Get Cyrillic equivalent and preserve case
      const cyrillic = transliterationMap[lowerMatch];
      return isUpperCase ? cyrillic.toUpperCase() : cyrillic;
    });
  }

  return toRussian;
}));
