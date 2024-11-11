'use strict';

// 1. Disemvowel Trolls
// необходимо удалить все vowels из строки (aeiou)


function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}

// console.log(disemvowel('This website is for losers LOL!')) 

// 2. Two to One
// необходимо два параметра функции(строки) закинуть в один массив
// удалить повторяющиеся элементы
// вернуть сортированную строку с элементами впорядке альфавитного уменьшения(от а до я)

function longest(s1, s2) {
    const newArr = [...new Set([...s1, ...s2])]

    return newArr.sort().join('')
}

// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')) 

// 3. Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0)
}

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) 

// 4. MakeUpperCase

function makeUpperCase(str) {
    return str.toUpperCase()
}

// 5. Remove String Spaces

function noSpace(x){
    return x.replace(/ /g, '')
}

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) 

// New tasks 

// 1. Alphabet symmetry (Не могу решить)
// Необходимо создать массив с алфавитными буквами
// Для каждой буквы в слове нужно сравнить её позицию в слове с её позицией в алфавите.
// Для каждого слова подсчитываем, сколько букв совпадают с этим условием.

// function solve(arr){  
//     const alphabetPosition = ["A","B","C","D","E", "F", "G", "H", "I","J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T","U", "V", "W","X", "Y", "Z"];
//     let counter = 0;

//     for(let i = 0; i < arr.length; i++) {
//         for(let b = 0; b < alphabetPosition.length; b++) {
//            if(arr[i] === alphabetPosition[b]) {
//             counter++
//            } 
//         }
//     }
    
//     return counter
// };

// console.log(solve(["abode"]))

