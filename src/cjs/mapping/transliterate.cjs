function transliterate(text) {
  // Use ISO 9 mapping
  const mapping = {
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
    'Е': 'E', 'Ё': 'Ë', 'Ж': 'Ž', 'З': 'Z', 'И': 'I',
    'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
    'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
    'У': 'U', 'Ф': 'F', 'Х': 'Ch', 'Ц': 'C', 'Ч': 'Č',
    'Ш': 'Š', 'Щ': 'Šč', 'Ы': 'Y', 'Э': 'E', 'Ю': 'Ju',
    'Я': 'Ja', 'Ь': '\'', 'Ъ': '\'',
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'ë', 'ж': 'ž', 'з': 'z', 'и': 'i',
    'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'u', 'ф': 'f', 'х': 'ch', 'ц': 'c', 'ч': 'č',
    'ш': 'š', 'щ': 'šč', 'ы': 'y', 'э': 'e', 'ю': 'ju',
    'я': 'ja', 'ь': '\'', 'ъ': '\''
  };

  // Perform transliteration by mapping each character
  return [...text].map(char => mapping[char] || char).join('');
}

// Export the function using CommonJS
module.exports = transliterate;
