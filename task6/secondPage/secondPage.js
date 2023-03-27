// 3.
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.

const createElements = () => {
    const main = document.createElement("main");
    const div = document.createElement("div");
    const p = document.createElement("p");
  
    document.body.appendChild(main);
    main.appendChild(div);
    div.appendChild(p);
    p.innerHTML = "First paragraph";
  
    main.classList.add("mainClass", "check", "item");
    div.setAttribute('id', 'myDiv');
  };
  
  createElements();