// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0
  let longest = 1
  let have = {}
  let curStart = 0
  while (curStart < s.length) {
    let curLength = 1
    have = {}
    have[s[curStart]] = true
    for (let i = 1; i < s.length - curStart; i++) {
      const curLetter = i + curStart
      if (!have[s[curLetter]]) {
        have[s[curLetter]] = true
        curLength++
        if (curLength > longest) {
          longest = curLength
        }
      }
      else {
        break
      }
    }
    curStart++
  }
  return longest
};
// @leet end
