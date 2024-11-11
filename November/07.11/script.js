'use strict';

// 1. Sum of two lowest positive integers

function sumTwoSmallestNumbersMySolution(numbers) {
  return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, c) => a += c, 0)
} // - плохо для производительности

/*
This solution is 97% slower than a simple for loop. Thats not because this is a built-in function called "sort", that it's the best way to do. 
Tis is not a race to the smallest code. In real project with performance care, we'd prefere write a little bit. What about the given array was a million entry length ? So much waste for nothing.

These will mutate the original array because sort mutates the original! You should slice first.

Sorting is worse performance than just iterating through and storing the two smallest numbers. I believe the built in sorting alg is O(n log n) 
compared to iterating through once without sorting O(n). This is concise code but not best practice in my opinion. Anyone agree/disagree with that?
*/

/*
1. Как найти наименьшее число в массиве?
2. Как найти число ПРЕВЫШАЮЩЕЕ это наименьшее число? - можно удалить из массива это найденное число
*/

function sumTwoSmallestNumbers(numbers) {
    const inputArrWithoutMutation = JSON.parse(JSON.stringify(numbers))
    let smallestIntegerFirst = Math.min(...inputArrWithoutMutation);

    let index = inputArrWithoutMutation.indexOf(smallestIntegerFirst);
    inputArrWithoutMutation.splice(index, 1)
    let smallestIntegerSecond = Math.min(...inputArrWithoutMutation);



    return smallestIntegerFirst + smallestIntegerSecond;
}

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); 

// 2. Total amount of points
/*
x > y += 3
x === y += 1
*/

function points(games) {
  let points = 0;

  for(let i = 0; i < games.length; i++) {
    if(games[i][0] > games[i][2]) {
        points += 3
    }

    if(games[i][0] === games[i][2]) {
        points++
    }
  }

  return points
}

// 3. String ends with?

function solution(str, ending) {
  return str.endsWith(ending)
}

// 4. Find the next perfect square!

function findNextSquare(sq) {
  if(Math.sqrt(sq, 2) === Math.trunc(Math.sqrt(sq, 2))) {
    return Math.pow((Math.sqrt(sq, 2) + 1), 2)
  }

 return -1
}

// console.log(findNextSquare(144));
// console.log(Math.sqrt(155, 2));

// 5. Abbreviate a Two Word Name

function abbrevName(name) {
    return name.match(/\b(\w)/g).join('.').toUpperCase()
}

console.log(abbrevName("Sam Harris"));