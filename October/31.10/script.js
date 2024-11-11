'use strict';

// 1. Find Maximum and Minimum Values of a List
/*
Ваша задача - создать две функции ( maxи min, или maximumи minimum, и т. д., в зависимости от языка), которые получают на вход список целых чисел и 
возвращают наибольшее и наименьшее число из этого списка соответственно. Каждая функция возвращает одно число.
*/

const min = function (list) {
  return Math.min(...list)
};

const max = function (list) {
  return Math.max(...list)
};

// 2. You only need one - Beginner
/*
Вам будет дан массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив это значение.
Массив может содержать числа или строки. X может быть любым из них.
Верните true, если массив содержит значение, false- если нет.
*/

function check(a, x) {
  return a.includes(x)
}

// console.log(check(["t", "e", "s", "t"], 'e'));

// 3. Break camelCase
/*
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
*/
function mySolutionWithReduce(string) {
  return [...string].reduce((accumulator, currentValue) => {
    if(currentValue === currentValue.toUpperCase()){
        accumulator += ' ' +currentValue
    } else {
        accumulator += currentValue
    }


    return accumulator
  }, '')  
}

// map solution

const solution = string => [...string].map((el) => el === el.toUpperCase() ? ' ' + el : el).join('')


// console.log(solution('camelCasing'));


// 4. Validate pin code
/*
 Банкоматы позволяют вводить PIN-коды из 4 или 6 цифр, и PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
Если функции передана правильная строка PIN-кода, возвращается true, в противном случае - returnfalse.

Задача
1. Проверить является ли пинкодом строку длиной 4 
2. Пинкодом являются только цифры, и чтобы в строке ничего небыло кроме них

Решение
1. замещаем в строке всё на пустоту, если это не цифра - в самом начале, и оставляем результат в переменной - filter(Number) - '1', '2', '3', '4' - все равно остаются
2. дальше два if statement - на длину строки 4 и 6
3. в конце возвращаем false - если длина не 4 и не 6 и там нету цифр - это не валидный пинкод
*/

function validatePINMySolution(pin) {
  const sortedStringPin = [...pin.replace(/\s/g, '')].map(Number).filter(item => typeof item === 'number').join('')

  if(pin.length === 4 && sortedStringPin.length === 4) {
    return true
  }

  if (pin.length === 6 && sortedStringPin.length === 6) {
    return true;
  }

  return false;
}

// console.log(validatePIN("1230"));

// 5. printer errors
/*
 На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты обозначаются буквами от a до m.
Цвета, используемые принтером, записываются в управляющую строку. Например, «хорошая» контрольная строка aaabbbbhaijjmозначает, что принтер использовал три раза цвет a, четыре раза цвет b, один раз 
цвет h, затем один раз цвет a...
Иногда возникают проблемы: нехватка цветов, технический сбой, и получается «плохая» управляющая строка, например aaaxbbbbyyhwawiwjjwwmс буквами не от a до m.
Необходимо написать функцию printer_error, которая при задании строки возвращает количество ошибок принтера в виде строки, представляющей собой рациональное число, числитель которого - количество ошибок, 
а знаменатель - длина контрольной строки. Не сводите эту дробь к более простому выражению.
Строка имеет длину, большую или равную единице, и содержит только буквы от адо я.


Задача
1. Принтер должен возвращать ошибки/длинастрокиизпараметрафункции
2. Правильные буквы это только от [a-m]
*/

function printerErrorMySolution(s) {
  const goodLetters = /[a-m]/;
  let errorsCounter = 0;

  for(let i = 0; i < s.length; i++) {
    if(!s[i].match(goodLetters)) {
      errorsCounter++
    }
  }

  return `${errorsCounter}/${s.length}`
}

// console.log(printerErrorMySolution("aaaxbbbbyyhwawiwjjjwwm")); 

// smart solution codewars - 

const printerError = s => `${s.replace(/[a-m]/gi, '').length}/${s.length}`

// LeetCode practice

// 1. Применение преобразования к каждому элементу массива
/*
Учитывая целочисленный массив arr и функцию отображения fn, верните новый массив с преобразованием, примененным к каждому элементу.
Возвращаемый массив должен быть создан таким образом, чтобы returnedArray[i] = fn(arr[i], i).
Пожалуйста, решите эту задачу без встроенного метода Array.map.
*/

var map = function(arr, fn) {
  const outputArr = [];

  for(let i = 0; i < arr.length; i++) {
    outputArr[i] = fn(arr[i], i)
  }

  return outputArr
};

function constant(n, i) {
  return 42;
}

// console.log(map([1, 2, 3], constant)); 

  