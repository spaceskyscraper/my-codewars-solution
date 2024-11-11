'use strict';


// 1. break camelcase
function solution(string) {
    return [...string].map((el) => el === el.toUpperCase() ? ' ' + el : el).join('')
}

// console.log(solution('camelCasing')) 

// 2. Is he gonna survive?

function hero(bullets, dragons){
    return bullets / 2 >= dragons
}
    
// 3. Jaden Casing Strings

// const toJadenCase = str => str.toLowerCase().split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ')


// console.log(toJadenCase('how can we make uppercase'));

String.prototype.toJadenCase = function () {
  return this.toLowerCase().split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ')
};

const testForThis = 'how can we make uppercase';

const jadenCasedVar = testForThis.toJadenCase()

// console.log(jadenCasedVar); 

// 4. List Filtering

function filter_list(l) {
    return l.filter((word) => typeof word === 'number')
}

// console.log(filter_list([1,2,'a','b'])) 

// 5. Keep Hydrated!

function litres(time) {
    return Math.floor(time * 0.5)
}

// console.log(litres(11.8)); 

// New tasks
// 1. pick a set of first elements

function first(arr, n = 1) {
    return arr.slice(0, n)
}

// console.log(first(['a', 'b', 'c', 'd', 'e'], 3)); 