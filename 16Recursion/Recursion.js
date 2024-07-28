//Activity - 1 Basic Recursion
//task - 1 Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

const findFact = (n) => {
  if (n <= 1) return n;
  return n * findFact(n - 1);
};

console.log(findFact(5));

//task - 2 Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const Fib = (n) => (n <= 1 ? n : Fib(n - 1) + Fib(n - 2));
console.log(Fib(2));
console.log(Fib(3));
console.log(Fib(4));
console.log(Fib(6));

//Activity - 2 Recursion with Arrays



//task - 3 Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const sum = (array) =>
  array.length === 0 ? 0 : array[0] + sum(array.splice(1));
const nums = [1, 2, 3, 4, 5];
console.log(sum(nums));

//task - 4 Write a recursive function to find the maximum element in an array. Log the result for a few test cases.


const findMax = (arr) => {
  const helper = (arr, i) => {
    if (i == arr.length - 1) {
      return arr[i];
    }

    const maxi = helper(arr, i + 1);

    return arr[i] > maxi ? arr[i] : maxi;
  };
  return helper(arr, 0);
};
const arr = [1, 3, 4, 5, 9];
console.log(findMax(arr));

//Activity - 3 String Manipulation with Recursion



//task - 5 Write a recursive function to reverse a string. Log the result for a few test cases.


const reverse = (str) => {
  //converting str into array of char
  let charArr = str.split("");
  const reverseString = (left, right, arr) => {
    if (left >= right) {
      return;
    }
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    reverseString(left + 1, right - 1, arr);
  };
  reverseString(0, charArr.length - 1, charArr);

  return charArr.join(""); //converting array of char into str
};
// "damp" //0123

console.log(reverse("Pranav"));

//task - 6 Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

const checkPalindrome = (str) => {
  const check = (l, r, str) => {
    if (l >= r) {
      return true;
    }
    if (str[l] != str[r]) {
      return false;
    }
    return check(l + 1, r - 1, str);
  };
  return check(0, str.length - 1, str);
};

console.log(checkPalindrome("tabat"));

//Activity - 4 Recursive Search

//task - 7 Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
const findTarget = (arr, target) => {
  const useBinarySearch = (l, r, arr, target) => {
    if (l > r) {
      return "not found";
    }
    let mid = Math.floor(l + (r - l) / 2);
    if (arr[mid] === target) {
      return `Found on this idx : ${mid}`;
    } else if (arr[mid] < target) {
      return useBinarySearch(mid + 1, r,arr, target);
    } else {
      return useBinarySearch(l, mid - 1, arr, target);
    }
  };
  return useBinarySearch(0, arr.length - 1, arr, target);
};

console.log(findTarget([1,2,3], 0));

//task - 8 Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

const findOccurences = (arr, t) => {
    const count = (arr, i, t, counter) => {

        if (i === arr.length) {
            return counter;
        }
        if (arr[i] === t) {
            counter += 1
        }
        return count(arr, i + 1, t, counter);  
    }
    return count(arr, 0, t, 0);
}

console.log(findOccurences([1, 1, 1, 2, 3, 4, 1, 1, 1], 1));

//Activity - 5 Tree Traversal
//task - 9 Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode{
    constructor(val, left = null, right =null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const inorder = (root) => {
    if (root===null) {
        return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

const newTree = new TreeNode(1);
newTree.left = new TreeNode(2);
newTree.left.left = new TreeNode(3);
newTree.left.right = new TreeNode(4);
newTree.right = new TreeNode(5);

inorder(newTree);

//task - 10 Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

const findDepth = (node) => {
    if (!node) return 0;

    let left = findDepth(node.left);
    let right = findDepth(node.right);

    return Math.max(left, right) + 1;
}

console.log(findDepth(newTree));