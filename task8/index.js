/**
 8-1. 
Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
Приклад роботи:
*/

const isUpper = /^[A-Z]/;
console.log(isUpper.test('sSss'));

/**
 8-2
 Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
Приклад роботи:
checkEmail("Qmail2@gmail.com");
true
 */

function checkYourEmail(myemail) {
    const check = /\w+\@\w+\.[a-zA-Z]+/
    return check.test(myemail);
}

console.log(checkYourEmail("Qmail2@gmail.com"));

/**
 8-3
 Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”
 */

const replaceJs = 'Java Script';
const replacePlaces = /(\w+)\s+(\w+)/
console.log(replaceJs.replace(replacePlaces, '$2, $1'));

/**
 8-4. 
Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
*/

function validateCard(card) {
    const validate = /\d{4}(\s|-)\d{4}(\s|-)\d{4}(\s|-)\d{4}/
    return validate.test(card);
}

console.log(validateCard('9999 9998 9999 9999'));

/**
8-5. 
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
    •  Цифри (0-9).
    •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
    •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
    •  Символ “-” не може повторюватися.
*/

function checkEmail(email) {
    const checkEmail = /^[a-zA-Z0-9]+[-_]?\w+@[a-zA-Z]+\.[a-zA-Z]+/;

    if(checkEmail.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!")
    }

    return checkEmail.test(email);
}
console.log(checkEmail('my_mail@gmail.com'));
console.log(checkEmail('#my_mail@gmail.com'));
console.log(checkEmail('my_ma--il@gmail.com'));

/*
8-6
Напишіть функцію, яка перевіряє правильність логіна. 
Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. 
Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).

Приклад роботи:
checkLogin('ee1.1ret3');
true 
//1.1, 3

checkLogin('ee1*1ret3');
false 
//1, 1, 3
*/

function checkLogin(login) {
  const loginCheck = /^[a-zA-Z][a-zA-Z0-9]{2,10}$/;

  if (!loginCheck.test(login)) {
    return false;
  }

  const isHereNumbers = login.match(/\d+(\.\d+)?/g);

}

console.log(checkLogin("ee1.1ret3"));
console.log(checkLogin("ee1*1ret3"));
