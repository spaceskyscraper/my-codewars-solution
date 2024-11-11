'use strict';

// 1. Convert a Number to a String!

function numberToStringFirst(num) {
    return Number(num)
}

function numberToStringSecond(num) {
    return num + ''
}

function numberToStringThird(num) {
    return num.toString()
}

// 2. Count by X

function countBy(x, n) {
    const maxMultiplier = x * n;
    const resultArr  = [];

    for(let i = x; i <= maxMultiplier; i += x) {
        resultArr.push(i)
    }  
    
    return resultArr;
}

// console.log(countBy(2, 5)); 

// 3. A needle in the haystack

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
}

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])); 

// 4. Is this a triangle?

// function isTriangle(a,b,c){
//     return a + b > c && a + c > b && b + c > a
// }

function isTriangle(a,b,c){
    return Math.max(a,b,c) < (a + b + c) / 2
}

// 5. Friend or Foe?
// отфильтровать строки у которых длина 4 символа

function friend(friends){
    return friends.filter((el) => el.length === 4)
}

// console.log((friend(["Ryan", "Kieran", "Jason", "Yous"]))); 

// 6. Exes and Ohs

/*
Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать булево значение и не учитывать регистр. Строка может содержать любой символ.
Решение -
1. сделать две переменные - xCounter, oCounter. Отфильтровать строку в эти две переменные по x и o
2. сравнить их длину (если их равное количество, то длина обеих переменных будет равная)
3. если нету o и x то возвращаем true - как проверить есть ли в строке те или иные символы?
*/

function XOmyFunc(str) {
    const lowerCasedStr = str.toLowerCase()

    const xLength = lowerCasedStr.split('').filter((el) => el === 'x').length
    const oLength = lowerCasedStr.split('').filter((el) => el === 'o').length

    return !lowerCasedStr.includes('o') && !lowerCasedStr.includes('x') ? true : xLength === oLength
}

// console.log(XOmyFunc('zzoo')); 

function XO(str) {
    const x = str.match(/x/gi);
    const o = str.match(/o/gi);

    return (x && x.length) === (o && o.length)
}

console.log(XO('yyyy'));

// Leetcode

// 1 to be or not to be

/*
Напишите функцию expect, которая помогает разработчикам тестировать свой код. Она должна принимать любое значение val и возвращать объект со следующими двумя функциями.
toBe(val) принимает другое значение и возвращает true, если эти два значения === друг другу. Если они не равны, то должна выдать ошибку «Not Equal».
notToBe(val) принимает другое значение и возвращает true, если эти два значения !== друг другу. Если они равны, то должна выдать ошибку «Равно».

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
*/

const expect = function(val) {
    this.inputValue = val;
    return {
        toBe: function(expectedValue) {
            if (this.inputValue === expectedValue) {
                return true;
            }
            throw new Error('Not Equal');
        }.bind(this),  // Привязываем контекст

        notToBe: function(expectedValue) {
            if (this.inputValue !== expectedValue) {
                return true;
            }
            throw new Error('Equal');
        }.bind(this)  // Привязываем контекст
    };
};

console.log(expect(5).toBe(5));