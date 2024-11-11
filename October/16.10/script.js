'use strict';

// 1. Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft
};

// 2. Find the smallest integer in the array

function findSmallestInt(arr) {
    return Math.min(...arr)
}

// 3. You're a square!

const isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}

// console.log(isSquare(3)) 

// 4. Binary Addition

function addBinary(a,b) {
    return (a+b).toString(2)
}

// console.log(addBinary(1, 1)

// 5. Two to One
// убрать повторяющиеся буквы из s1 / s2
// соединить их
// отсортировать в алфавитном порядке

function longest(s1, s2) {
    const stringArr = [...s1, ...s2]
    
    return [...new Set([...s1, ...s2])].sort().join('');
}

// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')) 

// New Task

// 1. Sort Out The Men From Boys
// отсортировать even / odd числа
// первыми идут even числа, затем после последнего even - идут Odd числа
// необходимо сделать два массива, где в один фильтруем четные числа, а во второй нечетные числа, затем закидываем это в основной массив (будет массив в массиве), и с помощью метода убираем вложенность массивов(можно попробовать метод
// map)

function menFromBoys(arr){
    const newArr = [...new Set(arr)]

    const evenNumbers = newArr.filter(evenElement => evenElement % 2 === 0).sort((a, b) => a - b)
    const oddNumbers = newArr.filter(oddElement => oddElement % 2 !== 0).sort((a, b) => b - a)

    return [evenNumbers, oddNumbers].flat(Infinity)
}

// console.log(menFromBoys([49,818,-282,900,928,281,-282,-1])) 