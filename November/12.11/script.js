"use strict";

// 1. Transportation on vacation

function rentalCarCost(d) {
  let sum = 0;

  for (let i = 1; i <= d; i++) {
    if (i === 3) {
      sum -= 20;
    }

    if (i === 7) {
      sum -= 30;
    }
    sum += 40;
  }

  return sum;
}

// console.log(rentalCarCost(7));

// 2. Reversed sequence

const reverseSeq = (n) => {
  const arrReversedNumbers = [];

  for (let i = 1; i <= n; i++) {
    arrReversedNumbers.push(i);
  }

  return arrReversedNumbers.reverse();
};

// console.log(reverseSeq(5));

// 3. You're a square!

const isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};
/*
Modulo is slow. I would expect Number.isInteger to be fast. ( Not sure if it matters compared to Math.sqrt though. )
*/
// console.log(isSquare(0));

