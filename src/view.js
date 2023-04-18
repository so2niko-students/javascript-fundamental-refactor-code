export default class View {
    DOM = {
        listNames: document.querySelector("#list"),
        typeListName: document.querySelector("#listname"),
        btnSubmit: document.querySelector(".btn-submit"),
        toDoItems: document.querySelector("#to-do-items"),
        submitItems: document.querySelector(".btn-submit-items"),
        itemsToDoBlock: document.querySelector(".items-to-do"),
        title: document.querySelector("#duties-title"),
        removeList: document.querySelector(".deleteBtn"),
    };

    constructor(handleCreateList, handleDeleteItem) {
        this.DOM.btnSubmit.addEventListener('click', handleCreateList);
        this.handleDeleteItem = handleDeleteItem;
    }

    getNewListName(){
        return this.DOM.typeListName.value;
    }

    addNewList(listName){
        const newOption = document.createElement("option");
        newOption.value = listName;
        newOption.innerText = listName;
        this.DOM.listNames.appendChild(newOption);
        this.DOM.listNames.disabled = false;

        this.DOM.title.innerText = listName;
        this.DOM.typeListName.value = '';
    }

    renderListTitles(list){
        list.forEach(({title}) => {
            const newOption = document.createElement("option");
            newOption.value = title;
            newOption.innerText = title;
            this.DOM.listNames.appendChild(newOption);
        });
    }

    renderList({title, items }){
        this.DOM.itemsToDoBlock.innerHTML = '';
        
        items.forEach((item) => {
            const deleteItem = document.createElement("button");
            deleteItem.classList.add("btn-delete-items");
            deleteItem.innerText = "Remove";
            deleteItem.dataset.item = item;
            deleteItem.dataset.title = title;
            deleteItem.addEventListener('click', this.handleDeleteItem);

            const newCheckBox = document.createElement("input");
            newCheckBox.setAttribute("type", "checkbox");
            
            const newItem = document.createElement("span");
            newItem.innerText = item;

            const newItemWrapper = document.createElement("div");
            newItemWrapper.classList.add("style-of-list-item");
            newItemWrapper.appendChild(newCheckBox);
            newItemWrapper.appendChild(newItem);
            newItemWrapper.appendChild(deleteItem);

            this.DOM.itemsToDoBlock.appendChild(newItemWrapper);
        });
    }
}