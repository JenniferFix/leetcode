// @leet start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function newNode(val = 0, next = null) {
  return { val, next }
}

function toArray(list) {
  const out = []
  let curr = list
  while (curr !== null) {
    out.push(curr.val)
    curr = curr.next
  }
  return out
}

function toList(arr) {
  const head = newNode()
  let curr = head
  curr.val = arr[0]

  const init = arr.slice(1)
  for (const i of arr.slice(1)) {
    // if ((typeof i) !== 'number') throw new Error(`${i} is not a number`)
    curr.next = newNode()
    curr = curr.next
    curr.val = i;
  }
  return head
}

function toNum(arr) {
  return parseInt(arr.join(''))
}

function toArr(num) {
  return num.toString().split('').map(v => parseInt(v))
}

var addTwoNumbers = function (l1, l2) {
  let arr1 = toArray(l1)
  let arr2 = toArray(l2)

  const num1 = toNum(arr1.reverse())
  const num2 = toNum(arr2.reverse())
  const total = num1 + num2

  console.log('total', toArr(total).reverse())
  return toList(toArr(total).reverse())
  // return toList(toArr(total).reverse())


};
// @leet end
