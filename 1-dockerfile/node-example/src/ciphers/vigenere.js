/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import { ordA } from './common';

// vigenere
function vigenere(text, key, decode) {
  let i = 0;
  let currentKey;
  const upperKey = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, (aChar) => {
    currentKey = key[i++ % upperKey.length];
    return String.fromCharCode(((ordA(aChar)
      + (decode ? 26 - ordA(currentKey) : ordA(currentKey))) % 26 + 65));
  });
}

module.exports = vigenere;

// example
// var text = "The quick brown fox Jumped over the lazy Dog the lazy dog lazy dog dog";
// var key = 'alex';
// var enc = vigenere(text,key);
// var dec = vigenere(enc,key,true);

// console.log(enc);
// console.log(dec);
