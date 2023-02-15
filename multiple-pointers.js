// Example 1: get two items in an array that sums to zero
//Method 1:  Naive Approach
function sumZeroNaive(arr) {
  // [-3, -2, -1, 0, 1, 2, 3]
  let matchedItems;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        matchedItems = [arr[i], arr[j]];
      }
    }
  }
  return matchedItems;
}
console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3]));

//Method 2: using MP Better Approach
function sumZero(arr) {
  // define the pointers
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let matchedItems;

  while (leftPointer < rightPointer) {
    sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return (matchedItems = [arr[leftPointer], arr[rightPointer]]);
    } else if (sum > 0) {
      rightPointer--;
    } else leftPointer++;
  }

  return matchedItems;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// Example 2: Return The number of unique values in an array
// Method 1 : Not Using  MP! - Works with both sorted and not sorted arrays) Not MP!
const sortedArr = [
  1, 1, 1, 1, 3, 3, 3, 3, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9,
  9, 9, 9, 9, 9, 10,
];
function countUniqueValues(arr) {
  const counter = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (counter.indexOf(item) === -1) {
      counter.push(item);
    }
  }

  return counter.length;
}

console.log(countUniqueValues(sortedArr));

// Method 2 : Using MP! - Works with both sorted and not sorted arrays
function countUniqueValues2(arr) {
  const counter = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const leftItem = arr[left];
    const rightItem = arr[right];
    if (counter.indexOf(leftItem) === -1) {
      counter.push(leftItem);
    }
    if (counter.indexOf(rightItem) === -1) {
      counter.push(rightItem);
    }
    left++;
    right--;
  }

  return counter.length;
}

console.log(countUniqueValues(sortedArr));

// Method 3 : Using MP! - Only works on sorted arrays. Using MP!
function countUniqueValues3(arr) {
  let i = 0;
  let j = 1;

  while (i < j && j < arr.length) {
    // Check if i and j values match
    if (arr[i] === arr[j]) {
      j++;
    } else {
      // move j value next to i
      arr[i + 1] = arr[j];
      // move i one step forward
      i++;
      // move j one step forward
      j++;
    }
  }

  return i + 1;
}

// Method 4: Using MP! - without modifying the input array(Only works on sorted arrays)
// Fatest(50 - 89% faster than the rest)
function countUniqueValues4(arr) {
  let i = 0;
  let j = 1;
  let uniqueValuesCount = 1;

  while (i < j && j < arr.length) {
    // Check if i and j values match
    if (arr[i] === arr[j]) {
      j++;
    } else {
      // increment count
      uniqueValuesCount++;
      // move i to j's current position
      i = j;
      // move j one step away from i
      j++;
    }
  }

  return uniqueValuesCount;
}

console.log(countUniqueValues4(sortedArr));
console.log(countUniqueValues3(sortedArr));
console.log("input array modified by countUniqueValues3:", sortedArr);
