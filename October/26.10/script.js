'use strict'

// 1. Odd or Even?
// То что мы получаем на выходе - это число необходимо проверить, является оно чётным или нечётным
// То что мы получаем на выходе - это сумма всех чисел в массиве. И эту сумму можно получить через метод reduce
// возвращаемое значение из reduce через тернарный оператор проверяем на чётность или нечётность
// 1. Суммирование Числа
// 2. Возвращаемое число проверяем на чётность нечётность

function oddOrEven(array) {
    const numbersSum = array.reduce((a, b) => a += b, 0)
    return numbersSum % 2 === 0 ? 'even' : 'odd'
}

// console.log(oddOrEven([1023, 1, 3])); 

// 2. Reversed string

function solution(str){
    return [...str].reverse().join('')
}

// 3. How good are you really?

/*
В вашем классе был тест, и вы его прошли. Поздравляем!

Но вы амбициозный человек. Вы хотите узнать, лучше ли вы, чем средний ученик в вашем классе.

Вы получаете массив с результатами тестов ваших одноклассников. Теперь вычислите средний балл и сравните свой балл!

Верните true, если вы лучше, иначе false!

Примечание:
Ваши баллы не включены в массив баллов вашего класса. Не забывайте их при вычислении среднего балла!

Задача - 
1. Необходимо высчитать среднее арифметическое из массива, и сравнить это с 2 параметром функции(нашим score), если наш score >= среднему арифметическому возвращаем true

Решение
1. Суммирование всех элементов в массиве
2. Разделить это число на длину элементов массива
3. Сравнить число на выходе с нашим числом из 2 параметра функции
4. если не сработает, добавляем к массиву наш score, и потом уже высчитываем из верхних пунктов
*/

function betterThanAverage(classPoints, yourPoints) {
    const averageClassPoints = classPoints.reduce((a, b) => a += b, 0) / classPoints.length;

    return yourPoints >= averageClassPoints
}

// console.log(betterThanAverage([2, 3], 5)); 

// 4. Opposite number

function opposite(number) {
    return -number
}

// 5. Remove string spaces

function noSpace(x){
    return x.split(' ').join('')
}

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); 

// New tasks

// 1. Two fighters, one winner.
/*
Создайте функцию, которая возвращает имя победителя в схватке между двумя бойцами.

Каждый боец ​​по очереди атакует другого, и тот, кто убьет другого первым, побеждает. Смерть определяется как наличие здоровья <= 0.

Каждый боец ​​будет объектом/экземпляром Fighter. См. класс Fighter ниже на выбранном вами языке.

И health, и damagePerAttack (damage_per_attack для python) будут целыми числами больше 0. Вы можете мутировать объекты Fighter.

Ваша функция также получает третий аргумент, строку, с именем бойца, который атакует первым.

Заметки
1. Если здоровье <= 0 - то боец проиграл
2. Можно мутировать объекты
*/

/*
 declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

function declareWinner(fighter1, fighter2, firstAttacker) {
    let damage1 = Math.ceil(fighter1.health / fighter2.damagePerAttack),
        damage2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)

    if(damage1 > damage2) {
        return fighter1.name
    } else if(damage2 > damage1) {
        return fighter2.name
    }

    return firstAttacker
}