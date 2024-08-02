// Activity - 1 
//task -1 
const twoSum = function (nums, target) {
  const numToIdx = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIdx.has(complement)) {
      return [numToIdx.get(complement), i];
    }
    numToIdx.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([2, 4, 5, 0], 5));

//Activity -2 
//task - 2
const reverse = function (x) {
  let isNegative = 0;
  if (x < 0) {
    isNegative = 1;
  }
  let num = Math.abs(x);
  let ans = 0;
  while (num > 0) {
    let rem = num % 10;
    ans = ans * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (ans > 2 ** 31 - 1 || ans < -(2 ** 31)) return 0;
  return isNegative === 1 ? -ans : ans;
};


console.log(reverse(123));
console.log(reverse(-123));


//Activity - 3
//task - 3

var isPalindrome = function (x) {
  if (x < 0) return false;
  const num = x;
  let revNum = 0;
  while (x > 0) {
    let rem = x % 10;
    revNum = revNum * 10 + rem;
    x = Math.floor(x / 10);
  }
  return num === revNum ? true : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));

//Activity - 4
//task - 4
class ListNode{
    constructor(val,next) {
        this.val = val;
        this.next = null;
    }
}
const createList = (arr) => {
    let node = new ListNode();
    let curr = node;
    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return node.next;
}

const printList = (node) => {
    let res = [];
    let curr = node;
    while (curr !== null) {
        res.push(curr.val);
        curr = curr.next;
    }
    console.log(res);
} 
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let curr = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  } else {
    curr.next = list2;
  }
  return dummy.next;
};

let l1 = createList([1, 3, 4, 5]);
let l2 = createList([0, 2, 6]);
let mergeL = mergeTwoLists(l1, l2);

printList(mergeL);


//Activity - 5
//task - 5
var isValid = function (s) {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch === "(" || ch === "[" || ch === "{") {
      st.push(ch);
    } else {
      if (st.length === 0) return false;
      let top = st.pop();
      if (
        !(
          (ch === ")" && top === "(") ||
          (ch === "]" && top === "[") ||
          (ch === "}" && top === "{")
        )
      ) {
        return false;
      }
    }
  }
  return st.length === 0;
};

console.log(isValid('{}[]()'));
console.log(isValid("{}[]("));