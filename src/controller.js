import Model from "./model.js";
import View from "./view.js";

export default class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View(this.handleCreateList, this.handleDeleteItem);

        this.init();
    }

    init(){
        const lists = this.model.lists;
        if(lists.length){
            this.view.renderListTitles(lists);
            this.view.renderList(lists[0]);
        }
    }

    handleCreateList = () => {
        const newListName = (this.view.getNewListName()).trim();
        if(newListName){
            this.view.addNewList(newListName);
            this.model.addNewList(newListName);
        }
    }

    handleDeleteItem = ({ target }) => {
        console.log(target);
        const list = this.model.deleteItem(target.dataset);
        this.view.renderList(list);
    }
}


    // newCheckBox.addEventListener("change", (event) => itemCompleted(event));

    // function itemCompleted(event) {
    //     const isChecked = event.target;
    //     if (isChecked.checked) {
    //         newItem.style.textDecoration = "line-through";
    //         isChecked.disabled = true;
    //         localStorage.getItem(isChecked);
    //     }
    // }