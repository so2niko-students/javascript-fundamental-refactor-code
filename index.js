//! model
let currentListItems = [];
let currentListTitle = "";

//? WHY?
// if (listNames.value !== "") {
//     loadListItems(listNames.value);
// }


function loadListItems(listTitle) {
    // currentListTitle = listTitle;
    // currentListItems = JSON.parse(localStorage.getItem(listTitle)) || [];

    // currentListItems.forEach((item) => {
    //     const newItem = document.createElement("p");
    //     const newCheckBox = document.createElement("input");
    //     const deleteItem = document.createElement("button");

    //     newCheckBox.addEventListener("change", (event) => itemCompleted(event));

    //     deleteItem.setAttribute("type", "submit");
    //     deleteItem.classList.add("btn-delete-items");
    //     deleteItem.innerText = "Remove";
    //     deleteItem.addEventListener("click", (event) => {
    //         let currentItem = event.target;
    //         if (itemsToDoBlock.contains(currentItem)) {
    //             currentItem.parentNode.remove();
    //         }
    //     });

    //     newCheckBox.setAttribute("type", "checkbox");

    //     newItem.classList.add("style-of-list-item");
    //     newItem.innerText = item;
    //     newItem.insertBefore(newCheckBox, newItem.firstChild);
    //     newItem.appendChild(deleteItem);

    //     itemsToDoBlock.appendChild(newItem);

    //     function itemCompleted(event) {
    //         const isChecked = event.target;
    //         if (isChecked.checked) {
    //             newItem.style.textDecoration = "line-through";
    //             isChecked.disabled = true;
    //             localStorage.getItem(isChecked);
    //         }
    //     }
    // });
}

// Після загрузки сторінки блокується список лістів, оскільки там нічого немає
document.addEventListener("DOMContentLoaded", () => {
    loadList();

    if (listNames.length === 0) {
        listNames.disabled = true;
    }

    const selectedList = listNames.value;
    if (selectedList !== "") {
        loadListItems(selectedList);
        title.innerText = selectedList;
    }

    loadListItems();
});


// Додавання елементів списку
submitItems.addEventListener("click", () => {
    const newItem = document.createElement("p");
    const newCheckBox = document.createElement("input");
    const deleteItem = document.createElement("button");

    newCheckBox.addEventListener("change", (event) => itemCompleted(event));

    deleteItem.setAttribute("type", "submit");
    deleteItem.classList.add("btn-delete-items");
    deleteItem.addEventListener("click", (event) => {
        let currentItem = event.target;
        if (itemsToDoBlock.contains(currentItem)) {
            currentItem.parentNode.remove();
            currentListItems = currentListItems.filter((item) => item !== newItem.innerText);
            localStorage.setItem(currentListTitle, JSON.stringify(currentListItems));
        }
    });

    newCheckBox.setAttribute("type", "checkbox");

    newItem.classList.add("style-of-list-item");
    newItem.innerText = toDoItems.value;
    newItem.insertBefore(newCheckBox, newItem.firstChild);
    newItem.appendChild(deleteItem);

    itemsToDoBlock.appendChild(newItem);
    currentListItems.push(newItem.innerText);
    localStorage.setItem(currentListTitle, JSON.stringify(currentListItems));
    toDoItems.value = "";

    function itemCompleted(event) {
        const isChecked = event.target;
        if (isChecked.checked) {
            newItem.style.textDecoration = "line-through";
            isChecked.disabled = true;
            localStorage.getItem(isChecked);
        }
    }
});

// Виведення тайтла згідно вибраного списку
listNames.addEventListener("click", (event) => {
    title.innerText = event.target.value;
});

// Видалення якогось списку
removeList.addEventListener("click", () => {
    currentIndex = listNames.selectedIndex;
    if (currentIndex !== -1) {
        listNames[currentIndex] = null;
    }

    if (listNames.length === 0) {
        listNames.disabled = true;
        title.innerText = "";
    }

    localStorage.removeItem(listNames[currentIndex]);

    saveList();
});