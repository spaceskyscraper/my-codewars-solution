"use strict";

// 1. Disemvowel Trolls
// aeiou

function disemvowel(str) {
  const lettersArr = [];

  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/[aeiou]/gi)) {
      lettersArr.push(str[i]);
    }
  }
  return lettersArr.join("");
}

// console.log(disemvowel("This website is for losers LOL!"));

// 2. You Can't Code Under Pressure #1

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i + i;
}

// console.log(doubleInteger(2));

// 3. Square Every Digit

function squareDigitsFirst(num) {
  return Number(
    [...num.toString()].map((integer) => Math.pow(Number(integer), 2)).join("")
  );
}

// console.log(squareDigits(9119));

// 4. Count by X

function countBy(x, n) {
  const LAST_VALUE = x * n;
  const counter = x;
  const integersList = [];

    for(let i = counter; i <= LAST_VALUE; i += counter) {
        integersList.push(i)
    }

    return integersList
}

// console.log(countBy(2, 5)); 

// 5. A Needle in the Haystack

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

// console.log(
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// );
