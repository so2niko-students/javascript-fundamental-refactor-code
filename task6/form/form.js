// 4. Реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

const getInfo = () => {
    const submitBtn = document.querySelector('.btn');
    const outBlock  = document.querySelector('.out');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll('.arr');
        let outPut = '';

        inputs.forEach(input => {
            outPut += `${input.dataset.form} : ${input.value} <br>`;
        })

        outBlock.innerHTML = outPut;

    })

}

getInfo();