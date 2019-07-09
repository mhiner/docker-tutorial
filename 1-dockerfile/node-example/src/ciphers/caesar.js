/* eslint-disable no-nested-ternary */
/* eslint-disable no-mixed-operators */

function ord(c) { c.charCodeAt(0); }

// Char -> Int -> Char -> Char
function transpose(base, offset, char) {
  return base ? (
    String.fromCharCode(
      ord(base) + (
        ord(char) - ord(base) + offset
      ) % 26,
    )
  ) : char;
}

function inRange([min, max], v) { return !(v < min || v > max); }


function caesarEncode(text, key) {
  text.split('')
    .map(c => transpose(
      inRange(['a', 'z'], c) ? 'a'
        : inRange(['A', 'Z'], c) ? 'A' : 0,
      key, c,
    ))
    .join('');
}

function caesarDecode(text, key) { caesarEncode(26 - (key % 26), text); }

function caesar(text, key, decode) {
  return decode ? caesarDecode(text, key) : caesarEncode(text, key);
}

module.exports = caesar;
