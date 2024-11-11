'use strict'

// 1. Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
    return bool ? 'Yes' : 'No'
}

// 2. Opposites Attract

// function lovefunc(flower1, flower2){
//     return flower1 % 2 === 0 && Math.abs(flower2 % 2) === 1 ? true 
//     : flower2 % 2 === 0 && Math.abs(flower1 % 2) === 1 ? true
//     : false
// }


const lovefunc = (flower1, flower2) => {
    return flower1 % 2 !== flower2 % 2
}

// 3. Convert number to reversed array of digits

// function digitize(n) {
//     return [...`${n}`].reverse().map((el) => Number(el))
// }

const digitize = n => Array.from(String(n), Number).reverse()
 
// console.log(digitize(35231)); 

// 4. Opposite number

function opposite(number) {
    return -number
}

// 5. Find the party outlier
/*
Вам дан массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. 
Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и 
возвращает этот «выброс» N.

Задача
1. Массив может быть очень большим(решение должно быть perfomance)
2. Массив состоит полностью из целых чисел - либо полностью из нечётных либо полностью из чётных
3. Нужно найти в полностью нечётном массиве - одно чётное число, либо в полностью чётном - одно нечётное

Решение
1. Как проверить что массив состоит только из чётных или нечётных чисел? - через slice полшучаем первые три элемента, потом итерируем через reduce и проверяем эти 3 числа на чётность или нечётность
2. Как найти это уникальное число? -
3. Вернуть это уникальное значение
*/

function findOutlier(integers){
    const checkArray = integers.slice(0, 3) 

    const evenCount = checkArray.filter(x => x % 2 === 0).length
    const oddCount = 3 - evenCount;
 
    const sortedArray = evenCount > oddCount 
        ? integers.filter(el => el % 2 !== 0) 
        : integers.filter(el => el % 2 === 0);

    return sortedArray[0]
}


// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([1, 2, 3]));