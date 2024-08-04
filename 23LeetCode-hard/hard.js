//Activity -1 find Median of 2 Sorted Arrays

const findMedianSortedArrays = function(nums1, nums2) {
    const mergeArray = (nums1,nums2) =>{
    let i = 0,j = 0,n = nums1.length, m = nums2.length;
    let mergedArr = [];
    while(i<n && j<m){
        if(nums1[i]<nums2[j]){
            mergedArr.push(nums1[i]);
            i++;
        }else{
            mergedArr.push(nums2[j]);
            j++;
        }
    }
    while(i<n){
        mergedArr.push(nums1[i]);
        i++;
    }
    while(j<m){
        mergedArr.push(nums2[j]);
        j++;
    }
    return mergedArr;
    }
    const getArr = mergeArray(nums1,nums2);
    let median = 0;
    const mid = Math.floor(getArr.length/2);

    if(getArr.length % 2 == 0){
        median = (getArr[mid] + getArr[mid-1])/2;
    }else{
        median = getArr[mid];
    }
    return median;
};

console.log(findMedianSortedArrays([1, 5, 7], [2, 3, 4]));

//Activity - 2 Merge 2 Linked List
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
var mergeKLists = function(lists) {
    //merge 2 Lists using recursion
    const merge2Lists = (l1,l2) =>{
        if(!l1)return l2;
        if(!l2)return l1;
        if(l1.val<l2.val){
            l1.next = merge2Lists(l1.next,l2);
            return l1;
        }else{
            l2.next = merge2Lists(l2.next,l1);
            return l2;
        }
        return null;
    }

    //use binary search to iterate over each list and merge them

    const partialMerge = (left, right, lists)=>{
        if(left>right) return null;
        if(left===right){
            return lists[left];
        }
        let mid = Math.floor((right-left)/2) + left;
        let l1 = partialMerge(left, mid, lists);
        let l2 = partialMerge(mid+1, right, lists);

        return merge2Lists(l1,l2);
    }

    let n = lists.length;
    return partialMerge(0, n-1, lists);
};

const l1 = createList([1, 4, 6]);
const l2 = createList([2, 3, 9]);
const l3 = createList([5, 7, 8]);

const l = mergeKLists([l1, l2, l3]);

printList(l1);

//Activity - 3 Trapping Rainwater

var trap = function (height) {
  let s = 0;
  let e = height.length - 1;
  let waterTrapped = 0;
  let leftMax = 0,
    rightMax = 0;
  while (s <= e) {
    if (height[s] <= height[e]) {
      if (height[s] >= leftMax) {
        leftMax = height[s];
      } else {
        waterTrapped += leftMax - height[s];
      }
      s++;
    } else {
      if (height[e] >= rightMax) {
        rightMax = height[e];
      } else {
        waterTrapped += rightMax - height[e];
      }
      e--;
    }
  }
  return waterTrapped;
};

console.log(trap([4, 2, 0, 3, 2, 5, 6, 9, 11, 3, 2, 4]));

//Activity - 4 N Queens


function addSolution(tempBoard, ans, n){
    let temp = [];
    for(let i=0;i<n;i++){
        let s = '';
        for(let j=0;j<n;j++){
           if(tempBoard[i][j]===1){
            s+='Q';
           }else{
            s+='.';
           }
        }
        temp.push(s);
    }
    ans.push(temp);
}
let isSafe = (row,col,tempBoard,n)=>{
    let x = row;
    let y = col;

    //back on the same row
    while(y>=0){
        if(tempBoard[x][y]==1)return false;
        y--;
    }
    
    x=row;
    y=col;
    //left downside
    while(x<n && y>=0){
        if(tempBoard[x][y]==1)return false;
        x++;
        y--;
    }

    x=row;
    y=col;
    //left upside
    while(x>=0 && y>=0){
        if(tempBoard[x][y]==1)return false;
        x--;
        y--;
    }
    return true;
}
function solve(col, n, tempBoard, ans){
    if (col === n) {
        addSolution(tempBoard, ans, n);
        return;
    }
    
    for(let row=0;row<n;row++){
        if(isSafe(row,col, tempBoard, n)){
            tempBoard[row][col] = 1;
            solve(col+1,n,tempBoard,ans);
            tempBoard[row][col] = 0;
        }
    }
}
var solveNQueens = function (n) {
    let ans = [];
    let tempBoard = new Array(n).fill(0).map(() => new Array(n).fill(0));
    solve(0, n, tempBoard, ans);
    return ans;
};

console.log(solveNQueens(4));


//Activity - 5 Word Ladder