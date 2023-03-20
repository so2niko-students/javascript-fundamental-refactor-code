// 1

function sumSliceArray(arr, first, second) {
    first = +prompt("Enter the first number:");
    second = +prompt("Enter the second number:");
    try {
        if (typeof first !== "number" || typeof second !== "number") {
            throw new Error("The incorrect input!");
        }
        if (first > arr.length || second > arr.length) {
            throw new Error("Number can`t be more than length of array");
        }
        return arr[first] + arr[second];
    } catch (error) {
        alert(error.message);
    }
}

sumSliceArray([1, 2, 3, 4, 5, 6]);

// 2

function checkAge() {
    const yourName = prompt("Enter your name:");
    const yourAge = prompt("Enter your age:");
    const yourStatus = prompt("Enter your status:");

    try {
        if (yourAge < 18 || yourAge > 70) {
            throw new RangeError('Age must be between 18 and 70 years');
        }
        if (!yourName || !yourAge || !yourStatus) {
            throw new Error('The field is empty!');
        }
        if (yourStatus !== 'Admin' && yourStatus !== 'Moderator' && yourStatus !== 'User' || isNaN(yourAge)) {
            throw new EvalError('Not correct!');
        }
    } catch (error) {
        alert(`Error: ${error.name} : ${error.message}`);
    }
}

checkAge();

// 3 

function calcRectangleArea(width, height) {
    width = +prompt("Enter the width:");
    height = +prompt("Enter the height");

    try {
        if (isNaN(width) || isNaN(height)) {
            throw new Error("Both of parametres must be a number");
        }
        return area = width * height;
    } catch (error) {
        alert(error.message);
    }
}

calcRectangleArea();

// 5 

function showUser(id) {
    try {
      if (typeof id !== 'number') {
        throw new Error("Your id must be only number!");
      }
      if (id < 0) {
        throw new Error("Your id must be more or equal 0");
      }
  
      let objOfId = {
        id,
      };
  
      return objOfId;
    } catch (error) {
      alert(error.message);
    }
  }
  
  function showUsers(ids) {
    let validIds = [];
    for (let i = 0; i < ids.length; i++) {
      if(typeof ids[i] !== 'number') continue;
      try {
        let user = showUser(ids[i]);
        if (user) {
          validIds.push(user);
        }
      } catch (error) {
        alert(error.message);
      }
    }
    return validIds;
  }
  
  showUsers([1, -2, 13, 4, 5, 'S', 987]);
