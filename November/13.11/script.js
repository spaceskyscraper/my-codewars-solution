"use strict";

// 1. Number of People in the Bus
// [[10,0],[3,5],[5,8]]
const numberMySolutionFirst = function (busStops) {
  let enteredAtBus = 0;
  let leftFromBus = 0;

  for (let i = 0; i < busStops.length; i++) {
    if (busStops[i][0]) {
      enteredAtBus += busStops[i][0];
    }

    if (busStops[i][1]) {
      leftFromBus += busStops[i][1];
    }
  }

  return enteredAtBus - leftFromBus;
};

// 2. Sum without highest and lowest number

function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return 0;
  }
  const lowestNumberArray = array.sort((a, b) => a - b);
  lowestNumberArray.shift();
  const highestNumberArray = lowestNumberArray.sort((a, b) => b - a);
  highestNumberArray.shift();
  return highestNumberArray.reduce((a, c) => a + c, 0);
}

console.log(sumArray([6, 2, 1, 8, 10]));

// 3. Correct the mistakes of the character recognition software

function correct(string) {
  const definitions = {
    5: "S",
    0: "O",
    1: "I",
  };

  return string
    .split("")
    .map((char) =>
      definitions.hasOwnProperty(char) ? definitions[char] : char
    )
    .join("");
}

// console.log(correct("DUBL1N"));

// 4. Grasshopper - Summation

const summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

// 5. Cat years, Dog years
/*
NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

const humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 0; i <= humanYears; i++) {
    if (i === 1) {
      catYears = 15;
      dogYears = 15;
    }

    if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }

    if (i >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
};

// console.log(humanYearsCatYearsDogYears(10)); 
