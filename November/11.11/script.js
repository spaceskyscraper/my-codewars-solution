"use strict";

// 1. Cockroach
/*
The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

Задача -
1. Мы получаем значение километры в час
2. Необходимо возвращать значение сантимерты за секунду

Решение -
1. Как конвертировать километры в час в сантиметры за секунду? - километры в час разделить на 0.036
2. Math.floor() - к нижнему значению округлить
*/

function cockroachSpeed(s) {
  return Math.floor(s / 0.036);
}

// console.log(cockroachSpeed(1.08));

/*
Время выполнения
Алгоритм имеет константное время работы 
𝑂(1)
O(1), так как все операции выполняются за одну итерацию:

Деление (одно математическое вычисление),
Округление (одно вычисление).
Таким образом, с точки зрения производительности, это решение очень быстрое и не требует оптимизаций для малых значений входных данных.

Пояснения
Деление: Деление на 0.036 фактически переводит километры в сантиметры за секунду. Это довольно простая операция, которая выполняется быстро.

Math.floor(): Округление вниз — операция тоже очень быстрая, поскольку она выполняется на одном значении, и JavaScript очень эффективно работает с числами с плавающей запятой.

Дополнительные рекомендации
Точность округления: Если важна точность, то следует учитывать, что в JavaScript деление с плавающей запятой может иметь небольшие погрешности, 
особенно если работать с очень большими или очень малыми числами. Однако для большинства практических случаев это решение будет работать корректно.

Отсутствие валидации входных данных: В коде нет проверки на тип или валидность входных данных. Если ожидается, что аргумент всегда будет числом, 
это не проблема, но если данные могут быть нечисловыми, лучше добавить проверку типа.
*/

// 2. Volume of a Cuboid
/*
1. Как вывести значение class в console.log JavaScript
2. Как получить значение cuboid

Решение -

*/
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

const firstCuboid = Kata.getVolumeOfCuboid(1, 2, 2);

// console.log(firstCuboid)

/*
Оценка с точки зрения производительности:
Производительность этого кода абсолютно не вызывает вопросов. Умножение трех чисел выполняется за 
𝑂(1)
O(1), и это не будет иметь значительного влияния на производительность при любых входных данных в разумных пределах.
Важные моменты:
Вы используете статический метод в классе Kata, что правильно для этой задачи, так как метод не зависит от экземпляра класса, а только от переданных аргументов.
*/

// 3. Find the first non-consecutive number

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }

  return null;
}

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// 4. Replace With Alphabet Position
/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

Задача - 
1. Всё что не буква - отфильтровать(match(a-z-A-Z)) и сохранить в переменную с которой работать
2. Каждую букву заменить её позицией в алфавите - необходимо разбить строку на отдельные буквы и потом применить к каждому элементу(map) преобразование
этого элемента в число соответствующее его позиции в алфавите
*/

function alphabetPosition(text) {
  const arrayWithLettersOnly = [...text].filter(
    (el) => !el.replace(/^[A-Za-z]+$/, "")
  );

  return arrayWithLettersOnly.map((a) => parseInt(a, 36) - 9).join(" ");
}

// console.log(alphabetPosition(`The sunset sets at twelve o' clock`));

// 5. Persistent Bugger.
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

Задача - упростить число до минимального и вернуть это число(typeof number)

Решение -
1. Необходимо разбить число на массив отдельных чисел => 39 = [3, 9]
2. Необходимо эти числа перемножить между друг другом - [3, 9] => 3*9 => 27
3. Повторять результат до тех пор, пока не останется ОДНО число(1-9) и вернуть это число через return
*/

function persistence(num) {
  let counter = 0;
  while (num >= 10) {
    num = [...num.toString()].reduce((a, b) => a * b, 1);
    counter++;
  }

  return counter;
}

// console.log(persistence(999)); 
