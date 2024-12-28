// @leet start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const tnums1 = nums1.slice()
  let curM = 0
  let curN = 0

  for (let i = 0; i < m + n; i++) {
    if ((curM < m && tnums1[curM] <= nums2[curN]) || curN >= n) {
      nums1[i] = tnums1[curM]
      curM++
    } else if ((curN < n && nums2[curN] <= tnums1[curM]) || curM >= m) {
      nums1[i] = nums2[curN]
      curN++
    }
  }
  m = m + n
};
// @leet end
