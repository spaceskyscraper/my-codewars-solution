'use strict';

// 1. Unique In Order

const uniqueInOrder=function(iterable){
    const newArr = [];

    for(let i = 0; i < iterable.length; i++) {
        if(iterable[i] !== iterable[i + 1]) {
            newArr.push(iterable[i])
        }
    }

    return newArr;
}

// console.log(uniqueInOrder([1,2,2,3,3])); 

// 2. Your order, please
/*
Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число — позиция, которую слово должно занимать в результате.

Примечание: числа могут быть от 1 до 9. Поэтому 1 будет первым словом (не 0).

Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

Задача -
Отсортировать строку по числам находящимся в слове(по порядку от 1 до 9)
    1. Как сортировать числа которые находятся в разной последовательности в последовательность от наименьшего к большему?
    2. Как сортировать слова с этими числами в порядке увеличения?
Решение -
1. Разбить строку на массив с разными словами
2. Разбить каждое слово(поскольку всего может быть 9 цифр) - на объект с ключем и значением. Где ключем будет слово, а значением этого ключа будет цифра(Thi1s) - 'This':1 - и затем по значения воспроизводить
в правильном порядке слова
*/

// function order(words){
//     if(words.length <= 0) {
//         return ''
//     }

//     const wordsArray = words.split(' ')
//     const wordMap = {};

//     wordsArray.forEach(word => {
//         const digit = word.match(/\d/)[0];
//         wordMap[digit] = word
//     });    

//     const sortedKeys = Object.keys(wordMap).sort((a, b) => a - b);
//     const sortedWords = sortedKeys.map(key => wordMap[key]);

//     return sortedWords.join(' ')
// } 

// console.log(order('is2 Thi1s T4est 3a'));

const order = words => words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).reduce((acc, curr) => {
    const cleanWord = curr.replace(/\d/, '');
    acc.push(cleanWord);

    return acc
}, []).join(' ')
// - решение без цифр в строке

// console.log(order('is2 Thi1s T4est 3a')); 

// 3. reverse words

function reverseWords(str) {
    return str.split(' ').map((el) => [...el].reverse().join('')).join(' ')
}

// console.log(reverseWords('double  spaces')); 

// 4. Disemvovels Trolls

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}

// 5. Isograms

/*
проверить является ли строка изограммой

Задача
1. Необходимо проверить есть ли повторяющиеся буквы в строке (это можно сделать при помощи filter)

Решение
1. Сделать новую переменную где будет отфильтрованная строка от повторяющихся букв
2. Сравнить параметр с этой переменной (если это изограма - то там фильтровать нечего и соотвесттвенно мы получим true)
*/

// function isIsogram(str){
//     return str.toLowerCase() === [...new Set([...str.toLowerCase()])].join('')
// } -- рабочий код

function isIsogram(str){
    return new Set(str.toUpperCase()).size === str.length
}


console.log(isIsogram('Dermatoglyphics'));