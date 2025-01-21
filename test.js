import { Russo } from './src/index.js';

const testTransliterate = () => {
  const russianText = 'Привет';
  const romanizedText = Russo.transliterate(russianText);
  console.log(`Transliterate: ${russianText} -> ${romanizedText}`);
};

const testToRussian = () => {
  const romanizedText = 'Denis Pushkarev';
  const russianText = Russo.toRussian(romanizedText);
  console.log(`To Russian: ${romanizedText} -> ${russianText}`);
};

// Run tests
testTransliterate();
testToRussian();
