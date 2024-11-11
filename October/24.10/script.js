'use strict';

// 1. String ends with?
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
   return str.endsWith(`${ending}`)
}

// console.log(solution('abc', 'd')); 

// 2. Sentence Smash

function smash (words) {
    return words.join(' ')
};

// 3. Number of People in the Bus

const number = function(busStops){
    return busStops.reduce((accumulator, [on, off]) => accumulator + (on - off), 0)
}

// console.log(number([[10,0],[3,5],[5,8]])); 

// 4. Total amount of points

// если x > y зачисляем 3 очка
// если X < y не зачисляем очки
// если x === y то зачисляем 1 очко

// function points(games) {
//     let gamePoints = 0

//     for(let i = 0; i < games.length; i++) {
//         if(games[i][0] > games[i][2]) {
//             gamePoints += 3
//         }

//         if(games[i][0] === games[i][2]) {
//             gamePoints ++
//         }
//     }

//     return gamePoints
// }

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
// console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));

const points = games => games.reduce((accumulator, currentValue) => {
    const [x, y] = currentValue.split(':').map(Number);
    return accumulator + (x > y ? 3 : x === y ? 1 : 0);
}, 0)

// 5. Find unique number

function findUniq(arr) {
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))
}

// console.log(findUniq([ 3, 10, 3, 3, 3 ])); 

/*
Используем метод find, который находит первый элемент, удовлетворяющий условию.
Условие arr.indexOf(num) === arr.lastIndexOf(num) проверяет, встречается ли элемент num только один раз в массиве.
indexOf возвращает индекс первого вхождения, а lastIndexOf — индекс последнего. Если они совпадают, значит, элемент уникален.
Этот код более лаконичен и читабелен.
*/
  

