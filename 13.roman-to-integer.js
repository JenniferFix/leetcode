// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const RomanNumerals = Object.freeze({
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  })

  let pos = 0;
  let total = 0

  while (pos < s.length) {
    if (RomanNumerals[s[pos] + s[pos + 1]]) {
      total += RomanNumerals[s[pos] + s[pos + 1]]
      pos += 2
    } else {
      total += RomanNumerals[s[pos]]
      pos += 1
    }
  }
  return total
};
// @leet end
