/*
Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
Якщо параметри типу Number відсутні, повертає число 0.
function mul(/ ваш код /) {
   // Ваш код
}
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0
*/

function mul() {
    let multiplied = 1;
    let isNumber = false;
    for (let i = 0; i < arguments.length; i += 1) {
      if (typeof arguments[i] === "number") {
        multiplied *= arguments[i];
        isNumber = true;
      }
    }
    return isNumber ? multiplied : 0;
  }
  
  console.log(mul(1, "str", 2, 3, true));
  console.log(mul(null, "str", false, true));
  
  /*
  10-1.
  Напишіть код в  /Ваш код/, щоб він працював
  let names = {
      first: "Tom",
      second: "Sam",
      third: "Ray",
      fourth: "Bob",
  };
  
  let {/ Ваш код /} = names;
  
  console.log(f); // "Tom"
  
  console.log(x); // "Ray"
  
  console.log(fifth); // "Name №5"
  */
  
  let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
  };
  
  let { first: f, third: x, fifth = "Name №5" } = names;
  
  console.log(f); // "Tom"
  
  console.log(x); // "Ray"
  
  console.log(fifth); // "Name №5"
  
  /*
  10-2.
  Напишіть код в /* Ваш код /, щоб він працював
  let data = {
      names: ["Sam", "Tom", "Ray", "Bob"],
      ages: [20, 24, 22, 26],
  };
  
  let /* Ваш код / = data;
  
  console.log(name2); // "Tom"
  console.log(age2); // 24
  console.log(name4); // "Bob"
  console.log(age4); // 26
  */
  
  let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  
  let {
    names: [name1, name2, name3, name4],
    ages: [age1, age2, age3, age4],
  } = data;
  
  console.log(name2); // "Tom"
  console.log(age2); // 24
  console.log(name4); // "Bob"
  console.log(age4); // 26
  
  /*
  10-5.
  Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. 
  Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. 
  Після цього функція повертає даний об'єкт Map.
  Приклади використання функції:
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  console.log(map.size); // 4
  console.log(map.get(2)); // "span"
  */
  
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  
  function mapBuilder(keysArray, valuesArrays) {
    const map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
      map.set(keysArray[i], valuesArrays[i]);
    }
  
    return map;
  }
  
  console.log(map.size); // 4
  console.log(map.get(2)); // "span"
  
  /*
  10-4.
  Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().
  let server = {
     data: 0,
     convertToString: function (callback) {
        callback((function () {
           return this.data + "";
        }).bind(this));
     }
  };
  let client = {
     server: server,
     result: "",
     calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
     },
     notification: function () {
        return (function (callback) {
           this.result = callback();
        }).bind(this);
     }
  };
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"
  */
  
  let server = {
    data: 0,
    convertToString: function (callback) {
      callback(() => {
        return `${this.data}`;
      });
    },
  };
  
  let client = {
    server: server,
    result: "",
    calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function () {
      return (callback) => {
        this.result = callback();
      };
    },
  };
  
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"
  
  function init() {
  
    const arr = [];
  
    for (var i = 0; i <= 2; i++) {
      arr[i] = function () {
        console.log(i);
      };
    }
    arr[0](); // 0
    arr[arr.length - 1](); // 2
  
  }
  
