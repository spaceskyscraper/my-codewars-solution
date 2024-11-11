'use strict';

// 1. Break camelCase

function solution(string) {
    return [...string].reduce((accumulator, currentValue) => {
        if(currentValue === currentValue.toUpperCase()){
            accumulator += ' ' + currentValue
        } else {
            accumulator += currentValue
        }

        return accumulator
    }, '')
}

// console.log(solution('camelCasing')) 

// 2. Ones and Zeros

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

// console.log(binaryArrayToNumber([1, 1, 1, 1])) 

// 3. Odd or Even

const oddOrEven = array => array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'


// console.log(oddOrEven([0, 1, 4])) 

// 4. reverse words

function reverseWords(str) {
    return str.split(' ').map((el) => el.split('').reverse().join('')).join(' ')
}

// map((el) => [el]) - так можно создавать вложенные массивы

// console.log(reverseWords('This is an example!')) 

// 5. Count positivies/negativies

// function countPositivesSumNegatives(input) {
//     if (!input || !input.length || input[0] === null) {
//         return [];
//       }

//     let positiveCounter = 0;
//     let sumOfNegativies = 0;

//     for(let i = 0; i < input.length; i++) {
//         if(input[i] > 0) {
//             positiveCounter++
//         }

//         if(input[i] < 0) {
//             sumOfNegativies += input[i]
//         }
//     }

//     return [positiveCounter, sumOfNegativies]
// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) 

// 5.

function countPositivesSumNegatives(input) {
    if (!input || !input.length || input[0] === null) {
        return [];
    }

    return [input.filter((x) => x > 0).length, input.filter((x) => x < 0).reduce((a, b) => a + b, 0)]
}

// console.log((countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))) 

// NEW TASKS

// 1. Parse float

function parseF(s) {
    const parsedInt = parseFloat(s)

    return isNaN(parsedInt) ? null : parsedInt
}

/*
function parseF(s) {
    const parsedInt = parseFloat(s)

    return typeOf parseDInt !== 'string' ? null : parsedInt
}
*/

// console.log(parseF('1')) 

// 2. Balanced Number 
// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
// то есть слева и справа от среднего числа - должны быть поровну 959 

function balancedNum(number){
    return number.join('')
}

console.log(balancedNum(959))