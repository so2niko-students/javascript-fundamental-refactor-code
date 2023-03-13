// Task 1

// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання: a < b < c

if(a < b && b < c) {
    console.log('true')
} else {
    console.log('False');
}


// Task 2

let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log("Res 1:", res1); // Допишіть код, необхідно використовувати змінні x і y // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + '' + y;
console.log(res2); // Допишіть код, необхідно використовувати змінні x і y // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // Допишіть код, необхідно використовувати змінні x і y // true
console.log(typeof res3); // ""boolean""

let res4 = x / 0;
console.log(res4); // Допишіть код, необхідно використовувати змінні x і y // NaN
console.log(typeof res4); // ""number""

// Task 3

/* 3. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. 
Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. 
Якщо вік менше 18 років вивести “Ви ще надто молоді”, 
*/

let isAdult = prompt("Скільки вам років?") >= 18 ? alert("Ви досягли повнолітнього віку") : alert("Ви ще надто молоді");

// Task 4

/* Задано масив чисел, знайти число яке найбільш часто входить в масив, 
занести це число в новий масив і видалити всі входження цього числа із поточного масиву.*/

// Task 5

let sideA = prompt("Введіть довжину першого катету трикутника:");
let sideB = prompt("Введіть довжину другого катету трикутника:");
let sideC = prompt("Введіть довжину гіпотенузи трикутника:");
let area;

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
  alert("Incorrect data!");
} else {
  let dividedSides = (sideA + sideB + sideC) / 2;
  area = Math.sqrt(
    dividedSides *
      (dividedSides - sideA) *
      (dividedSides - sideB) *
      (dividedSides - sideC)
  ).toFixed(3);

  if (Math.pow(sideA, 2) + Math.pow(sideB, 2) === Math.pow(sideC, 2)) {
    console.log("Цей трикутник є прямокутний!");
  }
}
console.log(area);

// Task 6

let date = new Date();
let hours = date.getHours();

if (hours >= 23 && hours <= 5) {
  console.log("Доброї ночі");
} else if (hours >= 5 && hours <= 11) {
  console.log("Доброго ранку");
} else if (hours >= 11 && hours <= 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}

switch (true) {
  case hours >= 23 && hours <= 5:
    console.log("Доброї ночі");
    break;
  case hours >= 5 && hours <= 11:
    console.log("Доброго ранку");
    break;
  case hours >= 11 && hours <= 17:
    console.log("Доброго дня");
    break;
  default:
    console.log("Доброго вечора");
}
