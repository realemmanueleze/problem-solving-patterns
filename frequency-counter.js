const word1 = "adeeze";
const word2 = "ezeadj";

// Example 1: comparing two strings to see if they contain the same letters even when shuffled(AKA: Anagram)

function checkAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const counter = {};

  for (let i = 0; i < word1.length; i++) {
    let currentLetter = word1[i];
    counter[currentLetter]
      ? (counter[currentLetter] += 1)
      : (counter[currentLetter] = 1);
  }

  for (let j = 0; j < word2.length; j++) {
    const currentLetter = word2[j];
    if (!counter[currentLetter]) {
      return false;
    } else {
      counter[currentLetter] -= 1;
    }
  }

  return true;
}

// Example 2: Comparing two arrays to see if the second array contains the squared value of items  in array 1

const list1 = [1, 2, 3, 4, 5, 4];
const list2 = [1, 4, 9, 16, 25, 16];

function itemsSquared(list1, list2) {
  // check if both arrays are of the same length
  if (list1.length !== list2.length) {
    return false;
  }
  // declare counters
  const counter1 = {};
  const counter2 = {};

  //   get the item frequency of list 1
  for (let i = 0; i < list1.length; i++) {
    let currentNum = list1[i];
    counter1[currentNum]
      ? (counter1[currentNum] += 1)
      : (counter1[currentNum] = 1);
  }

  //   get the item frequency of list 2
  for (let j = 0; j < list2.length; j++) {
    let counterNum = list2[j];
    counter2[counterNum]
      ? (counter2[counterNum] += 1)
      : (counter2[counterNum] = 1);
  }

  //   Compare both arrays to see if their frequency match
  for (const key in counter1) {
    // if the num(squared) does not exist at all in the second array
    if (!(key ** 2 in counter2)) {
      return false;
    }

    // if the num(squared exists but not in the same frequency)
    if (counter1[key] !== counter2[key ** 2]) {
      return false;
    }
  }
  
  return true;
}

console.log(checkAnagram(word1, word2));
console.log(itemsSquared(list1, list2));
