/*
7-1. 
За допомогою методів об’єкта window створити:
    1) нове вікно розміром 300х300 пікселів.
    2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
    3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
    4) із затримкою 2 сек закрийте вікно.
*/

const newWindow = window.open("", "", "width = 300, height = 300");

function changeSize() {
    setTimeout(() => {
        newWindow.resizeTo(500, 500);
    }, 2000);
}
changeSize();

function moveWindow() {
    setTimeout(() => {
        newWindow.moveTo(200, 200);
    }, 2000);
}
moveWindow();

function closeWindow() {
    setTimeout(() => {
        newWindow.close();
    }, 2000);
}
closeWindow();

/*
7-2. 
Для заданої HTML-сторінки:

<p id ='text'>I learning JavaScript events!</p> 
<div>
        <button . . . . . >Change style!</button>
</div>

напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: 
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

*/


function changeCSS() {
    const myText = document.querySelector("#text");
    myText.style.color = "orange";
    myText.style.fontSize = "20px";
    myText.style.fontFamily = "Comic Sans MS";
}

/*
7-3. 
Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
        1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
        2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
        3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
        4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
*/

const btnBlue = document.querySelector("#btnBlue");
const btnPink = document.querySelector("#btnPink");
const btnWhite = document.querySelector("#btnWhite");
const myAchor = document.querySelector("a");

function changeBackground() {
    btnBlue.addEventListener("click", () => {
        document.body.style.background = "blue";
    });
    btnPink.addEventListener("dblclick", () => {
        document.body.style.background = "pink";
    });
    btnWhite.addEventListener("mousedown", () => {
        document.body.style.background = "brown";
    });
    btnWhite.addEventListener("mouseup", () => {
        document.body.style.background = "white";
    });
    myAchor.addEventListener("mouseover", () => {
        myAchor.style.background = "yellow";
    });
    myAchor.addEventListener("mouseout", () => {
        myAchor.style.background = "white";
    });
}
changeBackground();

/**
 7-4. 
Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
Можуть видалятися всі елементи в будь-якому порядку.
*/

const names = document.querySelector("#names");
const buttonDelete = document.querySelector("#delBtn");

function deleteSelected() {
    const thisSelectedIndex = names.selectedIndex;
    if (thisSelectedIndex !== -1) {
        names.options[thisSelectedIndex] = null;
    }
    console.log(`Choosed index: ${thisSelectedIndex}`);
}

/*
7-5. 
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", 
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Приклад роботи:
*/

const moveBtn = document.querySelector("#moveBtn");
const texthere = document.querySelector("#texthere");

function moveBtnMessages() {
    moveBtn.addEventListener("click", () => {
        texthere.innerHTML += "I was pressed!";
    });
    moveBtn.addEventListener("mouseover", () => {
        texthere.innerHTML += "Mouse on me!";
    });
    moveBtn.addEventListener("mouseout", () => {
        texthere.innerHTML += "Mouse is not on me!";
    });
}
moveBtnMessages();


/*7-6. 
Реалізуйте програму, яка відслідковуватиме зміну розміру(ширини і висоти) вікна браузера 
і виводитиме на поточну сторінку при її розтязі / стисканні відповідні значення.
*/

function currentSize() {
    const currentSizeWidth = window.innerWidth;
    const currentSizeHeight = window.innerHeight;

    const width = document.querySelector("#width");
    const height = document.querySelector("#height");

    width.innerHTML = "Width:" + currentSizeWidth;
    height.innerHTML = "Height: " + currentSizeHeight;
}
currentSize();

/**
 7-7. 
На сторінці потрібно реалізувати 2 випадаючих списки. 
У першому містяться назви країн, у другому – назви міст. 
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - 
в правому випадаючому  списку з'являлися міста цієї країни. 
Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
 */

const countryList = document.querySelector("#country");
const citiesList = document.querySelector("#cities");
const outputText = document.querySelector("#countryText");

const cities = {
    ger: ["Berlin", "Bremen", "Bonn", "Düsseldorf"],
    usa: ["New York", "Los-Angeles", "Chicago", "San-Antonio"],
    ukr: ["Lviv", "Mariupol", "Kyiv", "Kharkiv"],
};

function outputCountryAndCity() {
    countryList.addEventListener("input", () => {
        const selectedCountry = countryList.value;
        const selectedCity = cities[selectedCountry] || [];
        outputText.textContent = `Your country: ${countryList.options[countryList.selectedIndex].text}. Your city: `;
        citiesList.innerHTML = "";

        if (selectedCity.length) {
            selectedCity.forEach((myCity) => {
                const newOption = document.createElement("option");
                newOption.value = myCity;
                newOption.textContent = myCity;
                citiesList.appendChild(newOption);
            });
            outputText.textContent += citiesList.value;
        } else {
            outputText.textContent = "";
        }
    });

    citiesList.addEventListener("input", () => {
        outputText.textContent = `Your country: ${countryList.options[countryList.selectedIndex].text
            }. Your city: ${citiesList.value}`;
    });
}
outputCountryAndCity();

