// 1. 
// Написати функцію compact() яка має приймати на вхід масив, 
// а на вихід має повертати значення нового масиву без повторень.

const compact = (arr) => {
    const newArray = [];
    arr.forEach(element => {
        if(newArray.indexOf(element) === -1) {
            newArray.push(element);
        }
    });
    return console.log(newArray);
}

compact([5, 3, 4, 5, 6, 7, 3]);

// 2.
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)

function createArray( start = prompt("Enter start value:"), end = prompt("Enter end value:")) {
  let numbers = [];
  if (isNaN(start) || isNaN(end)) {
    alert("Enter number!");
  } else {
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
  }
  return console.log(numbers);
}
createArray();

// 3.
// Задані цілі числа a і b (a < b). 
// Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.


function displayFromAToB(a, b) {
    for(let i = a; i <= b; i++) {
        for(let j = 0; j < i - a + 1; j++) {
            console.log(i);
        }
    }
}
displayFromAToB(1, 5);

// 4.
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
// Випадкові числа генеруються із діапазону 1-500.

const randArray = (k = prompt("Скільки чисел хочете бачити?")) => {
  let numbers = [];
  for (let i = 0; i < k; i++) {
    numbers.push(Math.floor(Math.random() * 500) + 1);
  }
  return console.log(numbers);
};
randArray();

// 6.
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій 
// та повертає її результат. 
// Вид операції визначається цілим числом op: 
// 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

function calc(a = +prompt('введіть число a:'), b = +prompt('Введіть число b:'), op = +prompt('Введіть арифметичну дію:')) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}
calc();


// 7. 
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

const findUnique = (arr) => {
    const newArr = new Set(arr);
    return newArr.size === arr.length)
}

findUnique([1,3,5,6,7,7]);

