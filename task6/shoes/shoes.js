// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const sizes = document.querySelectorAll(".size-shoe");

const changePrice = () => {
  const colors = document.querySelectorAll(".color");
  const images = document.querySelectorAll(".shoe");
  const outPrice = document.querySelector("#outprice");
  const prices = document.querySelectorAll(".gradient");

  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      const currentColor = e.target.getAttribute("color");
      prices.forEach((price) => {
        const colorPrice = price.getAttribute("color");
        if (colorPrice === currentColor) {
          outPrice.innerHTML = price.dataset.price + "$";
        }
      });
      images.forEach((shoe) => {
        if (shoe.getAttribute("color") === currentColor) {
          shoe.classList.add("show");
        } else {
          shoe.classList.remove("show");
        }
      });
    });
  });
};

function sizePrice() {
  sizes.forEach((size) => {
    size.addEventListener('click', () => {
        console.log('Hello');
    })
  });
}
sizePrice();
changePrice();
