const listNames = document.querySelector("#list");
const typeListName = document.querySelector("#listname");
const btnSubmit = document.querySelector(".btn-submit");
const toDoItems = document.querySelector("#to-do-items");
const submitItems = document.querySelector(".btn-submit-items");
const itemsToDoBlock = document.querySelector(".items-to-do");
const title = document.querySelector("#duties-title");
const removeList = document.querySelector(".deleteBtn");

let currentListItems = [];
if (listNames.value !== "") {
    loadListItems(listNames.value);
}
let currentListTitle = "";

function saveList() {
    const list = Array.from(listNames.options).map((option) => option.value);
    localStorage.setItem("lists", JSON.stringify(list));
}

function loadList() {
    const list = JSON.parse(localStorage.getItem("lists")) || [];
    list.forEach((item) => {
        const newOption = document.createElement("option");
        newOption.name = item;
        newOption.value = item;
        newOption.innerText = item;
        listNames.appendChild(newOption);
    });

    const selectedList = listNames.value;
    if (selectedList !== "") {
        title.innerText = selectedList;
        loadListItems(selectedList);
    }
}

function loadListItems(listTitle) {
    currentListTitle = listTitle;
    currentListItems = JSON.parse(localStorage.getItem(listTitle)) || [];

    currentListItems.forEach((item) => {
        const newItem = document.createElement("p");
        const newCheckBox = document.createElement("input");
        const deleteItem = document.createElement("button");

        newCheckBox.addEventListener("change", (event) => itemCompleted(event));

        deleteItem.setAttribute("type", "submit");
        deleteItem.classList.add("btn-delete-items");
        deleteItem.innerText = "Remove";
        deleteItem.addEventListener("click", (event) => {
            let currentItem = event.target;
            if (itemsToDoBlock.contains(currentItem)) {
                currentItem.parentNode.remove();
            }
        });

        newCheckBox.setAttribute("type", "checkbox");

        newItem.classList.add("style-of-list-item");
        newItem.innerText = item;
        newItem.insertBefore(newCheckBox, newItem.firstChild);
        newItem.appendChild(deleteItem);

        itemsToDoBlock.appendChild(newItem);

        function itemCompleted(event) {
            const isChecked = event.target;
            if (isChecked.checked) {
                newItem.style.textDecoration = "line-through";
                isChecked.disabled = true;
                localStorage.getItem(isChecked);
            }
        }
    });
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

// Додавання до списку
btnSubmit.addEventListener("click", () => {
    const typedList = typeListName.value;

    if (typeListName.value !== "") {
        const newOption = document.createElement("option");
        newOption.name = typedList;
        newOption.value = typedList;
        newOption.innerText = typedList;
        listNames.appendChild(newOption);
    }

    if (listNames.length === 1) {
        title.innerText = typedList;
        listNames.disabled = false;
    }

    typeListName.value = "";

    saveList();
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