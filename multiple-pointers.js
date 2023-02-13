// Naive Approach
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

// Better Approach

function sumZero(arr) {
  // define the pointers
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let matchedItems;
  // loop through array while left pointer is less than right pointer
  while (leftPointer < rightPointer) {
    sum = arr[leftPointer] + arr[rightPointer];
    // compare pointers values and conditionally increment pointers index based on whether sum is greater or lesser than zero
    if (sum === 0) {
        return matchedItems = [arr[leftPointer], arr[rightPointer]]
    }
    else if (sum > 0){
        rightPointer--
    }
    else leftPointer++
  }
  return matchedItems
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));