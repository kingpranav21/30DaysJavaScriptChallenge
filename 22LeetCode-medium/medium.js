//Activity -1 Add Two Numbers

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.

class ListNode {
  constructor(val, next) {
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
};

const printList = (node) => {
  let res = [];
  let curr = node;
  while (curr !== null) {
    res.push(curr.val);
    curr = curr.next;
  }
  console.log(res);
}; 
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(-1);
  let curr = dummy;
  let list1 = l1;
  let list2 = l2;
  let carry = 0;
  while (list1 !== null || list2 !== null) {
    let sum = carry;
    if (list1) sum += list1.val;
    if (list2) sum += list2.val;
    let temp = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curr.next = temp;
    curr = curr.next;

    if (list1) list1 = list1.next;
    if (list2) list2 = list2.next;
  }

  if (carry) {
    let newNode = new ListNode(carry);
    curr.next = newNode;
  }
  return dummy.next;
};

let l1 = createList([2, 4, 3]);
let l2 = createList([5, 6, 4]);

let sum = addTwoNumbers(l1, l2);
printList(sum);

//Activity - 2 Longest Substring Without Repeating Characters

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases
var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0,
    n = s.length;
  let mp = new Map();
  let len = 0;
  while (j < n) {
    let curr = s[j];
    if (mp.has(curr) && mp.get(curr) >= i) {
      i = mp.get(curr) + 1;
    }
    mp.set(curr, j);
    len = Math.max(len, j - i + 1);
    j++;
  }
  return len;
};

console.log(lengthOfLongestSubstring('abcdefabcdefyuiabc'));

//Activity -3 Container With Most Water

// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.

var maxArea = function (height) {
  let s = 0,
    e = height.length - 1,
    maxarea = 0;

  while (s < e) {
    let width = e - s;
    let mini = Math.min(height[s], height[e]);
    let area = mini * width;
    maxarea = Math.max(area, maxarea);
    if (height[s] <=height[e]) {
      s++;
    } else {
      e--;
    }
  }
  return maxarea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 8]));

//Activity - 4 3Sum

// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases.

var threeSum = function(nums) {
     nums.sort((a,b)=>a-b);
     let res = [];
     let n = nums.length;
     if(n<3){
        return res;
     }
     for(let i=0;i<n-2;i++){
        if( i>0 && nums[i] === nums[i-1])continue;
        let n1 = nums[i];
        let target = -n1;
        let j = i+1, k = n - 1;
        while(j<k){
            if(nums[j]+nums[k]<target){
                j++;
            }else if(nums[j]+nums[k]>target){
                k--;
            }else{
                while(j<k && nums[j]===nums[j+1])j++;
                while(j<k && nums[k]===nums[k-1])k--;
                res.push([-target, nums[j], nums[k]]);
                j++;
                k--;
            }
        }
     }
     return res;
};

console.log(threeSum([-1, -1, -2, 0, 2, 1, 1]));


//Activity - 5 Group Anagrams

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.

var groupAnagrams = function(strs) {
    let mp = new Map();
    for(let str of strs){
        let word = str.split('').sort().join('');
        if(!mp.has(word)) mp.set(word, []); //initilizing empty array
        mp.get(word).push(str)
    }
    /* {
        // eat -> ate
        ate : eat, tea, ate
        ant : tan, nat
        abt : bat
    } */

    let ans = [];
    for(let it of mp.values()){
        ans.push(it);
    }
    return ans;
};

console.log(groupAnagrams(["amt", "tma", "mat", "bam", "num", "mun", "mab"]));