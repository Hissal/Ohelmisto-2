'use strict'

function even(numArray) {
  const evenArray = [];
  numArray.forEach((num) => {
    if (num % 2 === 0) {
      evenArray.push(num);
    }
  })
  return evenArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = even(array);
console.log(`original array: ${array}`);
console.log(`even array: ${evenArray}`);