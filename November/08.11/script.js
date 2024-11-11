'use strict';

// 1. Keep up the hoop

function hoopCount (n) {
   return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it'
}

// 2. Count the smiley faces!
// :) :D ;-D :~)
function countSmileys(arr) {
  const VALID_SMILEY_FACES = /[:;][-~]?[D)]/g;
  let validCounter = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].match(VALID_SMILEY_FACES)) {
        validCounter++
    }
  }

  return validCounter
}

// console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); 

// 3. Complementary DNA

function dnaStrandMySolution(dna) {
  let newStr = '';

  for(let i = 0; i < dna.length; i++) {
    if(dna[i] === 'A') {
        newStr += 'T'
    } 
    
    if(dna[i] === 'T') {
        newStr += 'A'
    }
   

    if(dna[i] === 'C') {
        newStr += 'G'
    }

    if(dna[i] === 'G') {
        newStr += 'C'
    }
  }

  return newStr
}
 
// console.log(dnaStrand("ATTGC")); 

// 4. Remove exclamation marks

function removeExclamationMarks(s) {
  return s.replace(/[!]/gi, '')
}

console.log(removeExclamationMarks("Hello World!"));

// 5. Testing 1-2-3

const number = function (array) {
    const newArr = [];

    for(let i = 0; i < array.length; i++) {
        newArr.push(`${i + 1}: ${array[i]}`)
    }

    return newArr
};

console.log(number(["a", "b", "c"]));