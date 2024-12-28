// @leet start
/**
 * @param {number} x
 * @return {boolean}
 */
function reverseString(str) {
  return str.split('').reverse().join('')

}
var isPalindrome = function (x) {
  const xStr = x.toString()
  if (reverseString(xStr) === xStr) return true
  return false;
};
// @leet end
