// @leet start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longest = ""

  longest = strs[0]
  const findCommon = function (str1, str2) {
    let common = ""
    const shortest = Math.min(str1.length, str2.length)
    for (let i = 0; i < shortest; i++) {
      if (str1[i] === str2[i]) {
        common += str1[i]
      }
      else {
        break;
      }
    }
    return common
  }

  for (let i = 0; i < strs.length - 1; i++) {
    const last = findCommon(strs[i], strs[i + 1])
    if (last.length < longest.length) longest = last
  }
  return longest
};
// @leet end

