//Activity - 1

//task - 1
let arr = [9,8,2,3,5,1,6,4];

const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) {
        //rounds -> n - 1
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(arr);
console.log(arr);

//task - 2

const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let miniIdx = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[miniIdx]) {
                miniIdx = j;
            }
        }
        let temp = arr[miniIdx];
        arr[miniIdx] = arr[i];
        arr[i] = temp;
    }
}
let new_arr = [9, 11, 2, 3, 5, 1, 6, 4];
selectionSort(new_arr);
console.log(new_arr);

//task - 3
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
let newarr = [9, 8, 2, 3, 5, 1, 6, 4];

console.log(quickSort(newarr));

//Activity - 2

//task - 4

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;
            break;
        }
    }
    return -1; //not found
}

console.log(linearSearch(new_arr, 13));

//task -5
const binarySearch = (arr, target) => {
    const n = arr.length;
    let s = 0;
    let e = n - 1;

    while (s <= e) {
        let mid = Math.floor(s + (e - s) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }

    return -1;
}
const nums = [1, 3, 5, 7, 9];
console.log(binarySearch(nums, 5));

//Activity - 3

//task -6
const count = (str) => {
    const charCount = {};

    for (let ch of str) {
        charCount[ch] = charCount[ch] ? charCount[ch] + 1 : 1;
    }
    return charCount
}

const str = "Pranav Ahuja";
console.log(count(str));

//task - 7
const findLongestSub = (str) => {
    let maxLen = 0;
    let i = 0;
    const seenChars = new Map();
    for (let j = 0; j < str.length; j++){
        const currChar = str[j];
        if (seenChars.has(currChar) && seenChars.get(currChar) >= i) {
            i = seenChars.get(currChar) + 1;
        }
        seenChars.set(currChar, j);
        maxLen = Math.max(maxLen, j - i + 1);
    }
    return maxLen;
}

console.log(findLongestSub('catcat'));

//Activity - 4

//task - 8
// 1 2 3 4 5 , 2
// 5 4 3 2 1
// 4 5 3 2 1
// 4 5 1 2 3

//10, 20, 30, 40, 50, 60, 70, 4
// 70 60 50 40 30 20 10
// 50 60 70 40 30 20 10
// 50 60 70 10 20 30 40

const rotateArr = (arr,k) => {
    const reverse = (arr, s, e) => {
        while (s < e) {
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
    }
    const n = arr.length;
    k = k % n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k-1);
    reverse(arr, k, n - 1);
    
    return arr;
}

const num = [1,2,3,4,5];

console.log(rotateArr(num, 2));

//task - 9

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6];
const merge = (arr1, arr2) => {
    let i = 0, j = 0;
    let n = arr1.length, m = arr2.length;

    let res = [];
    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    while (i < n) {
        res.push(arr1[i]);
        i++;
    }
    while (j < m) {
        res.push(arr2[j]);
        j++;
    }
    return res;
}

console.log(merge(arr1, arr2));

//Activity - 5

//task - 10
const findFib = (n) => {
    if (n == 0 || n == 1) return n;
    let prev = 0;
    let curr = 1;
    let fwd = 0;
    for (let i = 2; i <=n; i++){
        fwd = prev + curr;
        prev = curr;
        curr = fwd;
    }
    return fwd;
}

console.log(findFib(9));

//task - 11

//knapsack