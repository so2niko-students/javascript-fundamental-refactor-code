// Напишіть скрипт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.

console.log('Holikov');

/* 3.
  a) оголосіть дві змінні;
  b) запишіть у змінні будь-які значення;
  c) виведіть на екран значення змінних;
  d) скопіюйте значення однієї змінної в іншу;
  e) виведіть на екран значення змінних.
*/

let name = 'Artem';
let surname = 'Holikov';
alert(name + ' ' + surname);

name = surname;
alert(name + ' ' + surname);

/*
4.  Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. 
Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
*/
const dataTypes = {
    String : 'Artem',
    Number : 5,
    Boolean : true,
    undefined,
    null : null
};


/*
5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult і виведіть в консоль.
*/

const isAdult = confirm('Чи вам є 18 років?');
console.log(isAdult);

/* 6. 
В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
        - ваше ім’я
        - ваше прізвище
        - навчальна група
        - ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. 

*/

const myName = 'Artem';
const mySurname = 'Holikov';
const myGroup = 'Complete WEB/UI Developer';
const myBirthdateYear = 2003;
let hasFamily = confirm('Do you have family?');

console.log(typeof myName);
console.log(typeof mySurname);
console.log(typeof myGroup);
console.log(typeof myBirthdateYear);
console.log(typeof hasFamily);

console.log(myBirthdateYear, hasFamily, myName);

let myWife;
let myMoney = null;

console.log(typeof myWife);
console.log(typeof myMoney);

/* 7. 
За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін, імейл та пароль, 
і виводить на екран повідомлення із введеними даними. 
Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”. 
*/

let email = prompt('Enter your email');
let login = prompt('Enter your login');
let password = prompt('Enter your password');

alert(`Dear ${login}, your email is ${email} and your password is ${password}`);

/* 8. 
Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить 
їх значення на екран.
*/ 

const secondsInMinute = 60;
const minutesInHour = 60;
const secondsInHour = secondsInMinute * minutesInHour;
alert(`Seconds in hour is ${secondsInHour}`);

const dayAndNightHours = 24;
const secondsInDayandNight = secondsInHour * 24;
alert(`Seconds in DayAndNight = ${secondsInDayandNight}`);

const monthHours = 730.5;
const secondsInMonth = secondsInHour * monthHours;
alert(`Seconds in month = ${secondsInMonth}`);