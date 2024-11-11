'use strict';

// 1. Calculate BMI
/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    const bmiValue = weight / Math.pow(height, 2)


    return bmiValue <= 18.5 ? 'Underweight' 
    : bmiValue > 18.5 && bmiValue <= 25.0 ? 'Normal'
    : bmiValue > 25.0 && bmiValue <= 30.0 ? 'Overweight'
    : 'Obese'
}   

// console.log(bmi(50, 1.80)); 

// 2. Convert a Boolean to a String

function booleanToStringMySolution(b){
    return b ? 'true' : 'false'
}

function booleanToString(b){
    return b.toString()
}

// 3. Ones and Zeros

const binaryArrayToNumber = arr => {
    const binaryArrToStr = arr.join('')

    return parseInt(binaryArrToStr, 2)
};

// console.log(binaryArrayToNumber([0, 0, 0, 1])); 

// 4. Shortest Word

function findShortMySolution(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}

function findShort(s) {
    return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity)
} // это решение быстрее и оптимальнее


// console.log(findShort('bitcoin take over the world maybe who knows perhaps')); 

// 5. Isograms
// изограмма это слово, в котором нету повторяющихся символов
// мы должны получать слово 

function isIsogramMySolution(str){
    const removeRepeatableLetters = [...new Set(str.toLowerCase())].length

    return removeRepeatableLetters === str.length.toLowerCase()
}

function isIsogram(str) {
    return new Set(str.toUpperCase()).size === str.length
}

console.log(isIsogram('Dermatoglyphics'));


// Leetcode task

// 1. Counter 2

/*
Напишите функцию createCounter. Она должна принимать начальное целое число init. Она должна возвращать объект с тремя функциями.
Эти три функции следующие:
increment() увеличивает текущее значение на 1 и возвращает его.
decrement() уменьшает текущее значение на 1 и возвращает его.
reset() устанавливает текущее значение в init и возвращает его.

increment - увеличивает на единицу
decrement - уменьшает на единицу
reset - возвращает тоже самое число

Задача
1. Как мне получать в объект функции параметр этой функции?
2. как мне увеличивать этот параметр на единицу?
*/

const createCounterMySolution = function(init) {
    let currentCount = init;

    return{
        increment: function() {
            return ++currentCount
        },

        decrement: function() {
            return --currentCount
        },

        reset: function() {
            return currentCount = init
        },
    }
}

///////////

const createCounter = function(init) {
    let currentCount = init;

    return {
        increment: () => ++currentCount,

        decrement: () => --currentCount,

        reset: () => currentCount = init,
    }
}
 
const counter = createCounter(5)

console.log(counter.decrement());
