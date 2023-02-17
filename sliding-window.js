const input = "1taramela";

function sliding(arr) {
  let lastCount = 0;
  let currentCount = 0;
  let items = [];
  let longestRun = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (items.indexOf(item) === -1) {
      items.push(item);
      currentCount++;
    } else {
      if (currentCount > lastCount) {
        lastCount = currentCount;
        longestRun = items;
      }
      currentCount = 1;

      items = [];
      items.push(item);
    }
  }

  return {
    count: lastCount,
    items: longestRun,
  };
}

console.log(sliding(input));

// Naive Pattern
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Sliding Window
function maxSubarraySum2(arr, num) {
  let temp = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(temp, max);
  }
  return max
}
console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
