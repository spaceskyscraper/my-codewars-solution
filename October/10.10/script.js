'use strict';

// 1. Beginner Series #1 School Paperwork


function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m
}

// console.log(paperwork(5, 5)) 

// 2. Categorize new member
// для "Senior" необходим возраст минимум 55 лет и гандикап выше 7 - все остальные это "Open" категория

function openOrSenior(data){
    const newArr = [];

    for(let i = 0; i < data.length; i++) {
        if(data[i][0] > 54 && data[i][1] > 6) {
            newArr.push('Senior')
        } else {
            newArr.push('Open')
        }
    }

    return newArr;
}

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])) 

// 3. Remove First and Last Character

function removeChar(str){
    return str.slice(1, -1)
}; 

// console.log(removeChar('eloquent')) 

// 4. Reversed sequence

const reverseSeq = n => {
    return Array.from(Array(n + 1).keys()).slice(1, n + 1).reverse()
};

// console.log(reverseSeq(5)) 

// 5. Find the smallest integer in the array

function findSmallestInt(arr) {
    return Math.min(...arr)
}

// console.log(findSmallestInt([34, 15, 88, 2])) 

// New tasks

// 1. esreveR
// нельзя использовать .reverse()

const reverse = function(array) {
    const newArr = [];

    for(let i = array.length - 1; i >= 0; i-- ) {
        newArr.push(array[i])
    }

    return newArr;
}

// console.log(reverse([1, 2, 3])) 

// 2. Simple remove duplicates

function solve(arr) {
    return arr.reverse().filter((value, index) => arr.indexOf(value) === index).reverse()
}

console.log(solve([1,2,1,2,1,2,3]))