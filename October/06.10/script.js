

// 1. square function

const square = (n) => n**2

// 2. Square Every Digit

function squareDigits(num){
    return Number(String(num).split('').map(i => i ** 2).join(''))
}

// console.log(squareDigits(3212))

// 3. Invert values

function invert(array) {
    return array.map(i => -i)
}

// console.log(invert([1, -2, 3, -4, 5]))

// 4. Remove exclamation marks

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '')
}

// console.log(removeExclamationMarks('Hello World!!!')) 

// 5. Printer Errors

// в принтере должны быть символы от a до m включительно - всё что другое это ошибка
// необходимо в конце возвращать количество ошибок принтера(неверных символов) / длину строки

function printerError(s) {
    let errors = '0';
    for(let i = 0; i < s.length; i++) {
        if(!s[i].match(/[a-m]/g)) {
            errors++
        }
    }
    return `${errors}/${s.length}`
}

// console.log(printerError('aaaxbbbbyyhwawiwjjjwwm')) 


// NEW TASKS

// 1. Is this a triangle?

function isTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a
}
 
// console.log(isTriangle(1,2,2)) 

// 2. Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2)
}

// console.log(twiceAsOld(55, 30)) 