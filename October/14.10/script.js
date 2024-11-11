'use strict';

// 1. Counting sheep...

function countSheeps(sheep) {
    return sheep.filter((el) => el === true).length
}

// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]))

// 2. Shortest Word

function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}

// console.log(findShort(("Let's travel abroad shall we"))) 

// 3. Sum of odd numbers

function rowSumOddNumbers(n) {
	return Math.pow(n, 3)
}

// console.log(rowSumOddNumbers(42)) 

// 4. Abbreviate a Two Word Name

function abbrevName(name){
    const inputName = name.split(' ').map((el) => el.toUpperCase());
    return `${inputName[0][0]}.${inputName[1][0]}`
}

// console.log(abbrevName('Sam Harris')) 

// 5. Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number % 2 === 0 ? number*8 : number*9
}

// console.log(simpleMultiplication(5)) 

// New tasks

// 1. Count the divisors of a number
// Любое число делится на 1 и на самого себя - т.е делителями 28 будет 1 и 28. Тогда между ними можно применить arr.fill - и затем отфильтровать те значения, которые не являются делителями числа
// 

function getDivisorsCnt(n){
    const newArr = Array.from({length: n}, (_, i) => i + 1)
    const divisorsArr = [];

    for(let i = 0; i < newArr.length; i++) {
        divisorsArr.push(n / newArr[i])
    }

    return divisorsArr.filter(num => Number.isInteger(num)).length
} 

// Мой код рабочий, но он не способен обрабатывать массивы extra large размеров

console.log(getDivisorsCnt(50000000)) 
