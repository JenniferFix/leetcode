// @leet start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let idx = 1
  let last = nums[0]
  while (idx < nums.length) {
    if (nums[idx] === last) {
      nums.splice(idx, 1)
    } else {
      last = nums[idx]
      idx++
    }
  }
};
// @leet end
