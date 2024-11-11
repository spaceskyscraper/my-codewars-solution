"use strict";

// 1. Convert a Boolean to a String

function booleanToString(b) {
  return b ? "true" : "false";
}

// 2. Printer Errors
/*
 На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты обозначаются буквами от a до m.
Цвета, используемые принтером, записываются в управляющую строку. Например, «хорошая» контрольная строка aaabbbbhaijjmозначает, что принтер использовал три раза цвет a, четыре раза цвет b, 
один раз цвет h, затем один раз цвет a...

Иногда возникают проблемы: нехватка цветов, технический сбой, и получается «плохая» управляющая строка, например aaaxbbbbyyhwawiwjjwwmс буквами не от a до m.
Необходимо написать функцию printer_error, которая при задании строки возвращает количество ошибок принтера в виде строки, представляющей собой рациональное число, числитель которого - количество ошибок, 
а знаменатель - длина контрольной строки. Не сводите эту дробь к более простому выражению.
Строка имеет длину, большую или равную единице, и содержит только буквы от aдоz.
Примеры:
s=«aaabbbbhaijjm»
printer_error(s) => «0/14»

s=«aaaxbbbbyyhwawiwjjwwm»
printer_error(s) => «8/22»

Задание
1. Принтер корректен если буквы от a до m
2. Ошибки принтера это все буквы после m

Решение
1. Фильтровать массив, что бы в нём оставались буквы только после m
2. Полученную длинну массива мы записываем как количество ошибок/количество символов оригинала(всей строки)
*/

function printerError(s) {
  const arrayWithErrorLetters = [...s].filter((el) => !el.match(/[a-m]/gi, ""));

  return `${arrayWithErrorLetters.length}/${s.length}`;
}

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

const printerErrorsOptimized = (s) => {
  let errourCount = 0;

  for (let char of s) {
    if (char > "m") {
      errourCount++;
    }
  }

  return `${errourCount}/${s.length}`;
};

// console.log(printerErrorsOptimized("aaaxbbbbyyhwawiwjjjwwm"));

// 3. Ones and Zeros

const binaryArrayToNumber = (arr) => {
    return parseInt(arr.join(''), 2)
};

// console.log(binaryArrayToNumber([0, 0, 1, 0, 0, 1])); 

// 4. You only need one - Beginner

function check(a, x) {
  return a.includes(x);
}

// 5. Sum Mixed Array

function sumMix(x){
    let sum = 0

    for(let num of x) {
        sum += +num
    }

    return sum
}

// console.log(sumMix([9, 3, "7", "3"])); 

// leetcode practice

// 1. create hello world function

var createHelloWorld = function () {
  return function (...args) {
    return 'Hello World'
  }  
};

const f = createHelloWorld();

// console.log(f()); 

// 2. Counter
/*
 Учитывая целое число n, верните функцию-счетчик. Эта функция-счетчик первоначально возвращает n и затем возвращает на 1 больше предыдущего значения при каждом последующем вызове 
 (n , n + 1, n + 2 и т. д.).

Пример 1:
Вход: 
n = 10 
[«call»,«call»,«call»]
Выход: [10,11,12]
Пояснение: 
counter() = 10 // При первом вызове counter() возвращается n.
counter() = 11 // Возвращается на 1 больше, чем в предыдущий раз.
counter() = 12 // Возвращает на 1 больше, чем в предыдущий раз.
Пример 2:
Вход: 
n = -2
[«call»,«call»,«call»,«call»,«call»]
Выход: [-2,-1,0,1,2]
Пояснение: counter() первоначально возвращает -2, затем увеличивается после каждого последующего вызова.
*/

var createCounter = function (n) {
  return function () {
    return n++
  };
};

const b = createCounter(0);

console.log(b());
console.log(b());