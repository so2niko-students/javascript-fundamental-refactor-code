/*
1.
На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. 
У модальному вікні необхідно послідовно вивести вміст:
        1) першого елемента списку
        2) останнього елемента списку
        3) другого елемента списку
        4) четвертого елемента списку
        5) третього елемента списку
Приклад:
•        1
•        2
•        3
•        4
•        5

Результат виводу: 1, 5, 2, 4, 3
*/

const myUnorderedList = document.querySelector('#list');

const displayNumbers = () => {

    const firstLi = myUnorderedList.firstElementChild;
    const lastLi = myUnorderedList.lastElementChild;
    const secondLi = firstLi.nextElementSibling;
    const thirdLi = secondLi.nextElementSibling;
    const fourthLi = lastLi.previousElementSibling;

    alert(
      firstLi.innerHTML +
        "," +
        lastLi.innerHTML +
        "," +
        secondLi.innerHTML +
        "," +
        fourthLi.innerHTML +
        "," +
        thirdLi.innerHTML
    );

}

displayNumbers();

/*
2.
    Маючи html-розмітку застосувати стилі до елементів
*/

const changeStyles = () => {
  const title = document.querySelector("h1");
  const myDiv = document.querySelector("#myDiv");
  let myList = document.querySelector("#myList");
  const thisSpan = document.getElementsByTagName("span")[0];

  title.style.backgroundColor = "#15f515";

  const firstParagraph = myDiv.firstElementChild;
  firstParagraph.style.fontWeight = "700";
  const secondParagraph = firstParagraph.nextElementSibling;
  secondParagraph.style.color = "red";
  const thirdParagraph = secondParagraph.nextElementSibling;
  thirdParagraph.style.textDecoration = "underline";
  const fourthParagraph = myDiv.lastElementChild;
  fourthParagraph.style.fontStyle = 'italic';

  myList.style.listStyleType = "none";
  myList.style.display = 'flex';

  thisSpan.style.display = 'none';

};

changeStyles();