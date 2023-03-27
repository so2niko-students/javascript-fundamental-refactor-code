/*
1. 
Напишіть клас Круг та реалізуйте функціонал:
- Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
- Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
- Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
- Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
- Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
- Визначте метод перевірки попадання крапки до кола;
- Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).
*/

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getlengthOfCircle() {
        return (L = 2 * Math.PI * this.radius);
    }

    static returnWithRadius(radius) {
        return (L = 2 * Math.PI * radius);
    }

    copyOfObject() {
        return new Circle(this.x, this.y, this.radius);
    }

    static objectWithParametres(x, y, radius) {
        return new Circle(x, y, radius);
    }

    toString() {
        return `Circle: x = ${this.x}, y = ${this.y}, radius = ${this.radius}`;
    }
}

2. 
/*Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад:
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
propsCount(mentor);  // 3
*/

const propsCount = (currentObject) => {
  let counter = 0;
  for (let key in currentObject) {
    counter++;
  }
  return `Lengths = ${counter}`;
};

const propsCount2 = (currentObject) => {
  return Object.keys(currentObject).length;
};

/*3.
-  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
- Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
- В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
- Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
*/

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return `${this.name} ${this.surname} ${midleName}`;
  }

  showCourse(startedOfStudying) {
    let date = new Date();
    let currentYear = date.getFullYear();

    let differenceOfYears = currentYear - startedOfStudying;

    for (let i = 1; i <= differenceOfYears; i++) {
      if (differenceOfYears === i) {
        return `Current course: ${differenceOfYears}`;
      }
    }
  }
}

// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych"));
// console.log(stud1.showCourse(2020));

/*4.
А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
- поле, яке зберігає колір маркера;
- поле, яке зберігає кількість чорнила в маркері (у відсотках);
- метод друку (метод приймає рядок і виводить текст відповідним кольором;
текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. 
Продемонструвати роботу написаних методів
*/

class Marker {
  constructor(color, percentOfInk) {
    this.color = color;
    this.percentOfInk = percentOfInk;
  }

  methodOfPrint(yourText) {
    let newText = "";

    for(let i = 0; i < yourText.length; i++) {
      if(yourText[i] !== ' ' && this.percentOfInk > 0) {
        newText += yourText[i];
        this.percentOfInk -= 0.5;
      }
    }

    console.log(`%c ${newText}`, `color: ${this.color}`);

  }
}

class fillMarker extends Marker {
  constructor(color, percentOfInk) {
    super(color, percentOfInk);
  }

  fillThisMarker(points) {
    this.percentOfInk = this.percentOfInk + points;
  }
}

const fillMyMarker = new fillMarker("blue", 4);
fillMyMarker.methodOfPrint("Hello my name is Artem");

fillMyMarker.fillThisMarker(2);
fillMyMarker.methodOfPrint("Hello my name is Artem");

/*
5.
Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: 
       fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
       1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника.
       Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
       2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – 
       створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
       3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
       4) Вивести значення зарплати з новим experience.
       5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. 
          Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
       6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
*/

class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this._experience = 1.2;
    }
  
    showSalary() {
      const yourSalary = this.dayRate * this.workingDays;
      console.log(yourSalary);
    }
  
    showSalaryWithExperience() {
      const yourSalaryWithExp = this.dayRate * this.workingDays * this._experience;
      console.log(yourSalaryWithExp);
    }
  
    get experience() {
      return this._experience;
    }
  
    set experience(value) {
      this._experience = value;
    }
  
    newExperience() {
      this._experience = 1.5;
    }
  
  }
  
  let worker1 = new Worker("John Johnson", 20, 23);
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log("New experience: " + worker1.experience);
  worker1.showSalaryWithExperience();
  worker1.experience = 1.5;
  console.log("New experience: " + worker1.experience);
  worker1.showSalaryWithExperience();
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  console.log(worker2.fullName);
  worker2.showSalary();
  console.log("New experience: " + worker2.experience);
  worker2.showSalaryWithExperience();
  worker2.experience = 1.5;
  console.log("New experience: " + worker2.experience);
  worker2.showSalaryWithExperience();
  
  let worker3 = new Worker("Andy Ander", 29, 23);
  console.log(worker3.fullName);
  worker3.showSalary();
  console.log("New experience: " + worker3.experience);
  worker3.showSalaryWithExperience();
  worker3.experience = 1.5;
  console.log("New experience: " + worker3.experience);
  worker3.showSalaryWithExperience();
  worker3.sortSalary();