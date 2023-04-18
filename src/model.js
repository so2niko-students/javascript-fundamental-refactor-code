const LS_NAME = 'lists';


export default class Model{
    lists = [];
    constructor(){
        this.lists = JSON.parse(localStorage.getItem(LS_NAME)) || [];
    }

    addNewList(listName){
        const list = this.lists.find(l => l.title === listName);
        if(!list){
            this.lists.push({
                title: listName,
                items: [],
            });
            this.save();
        }
    }

    deleteItem({title, item}){
        const list = this.lists.find(l => l.title === title);
        list.items = list.items.filter(oldItem => item != oldItem);
        this.save();
        return list;
    }

    save(){
        localStorage.setItem(LS_NAME, JSON.stringify(this.lists));
    }
}

// [
//     {
//         title : 'list 1',
//         items : ['item 1', 'haha', 'hello', 'fs'],
//     },
//     {
//         title : 'list 1',
//         items : ['item 1', 'haha', 'hello', 'fs'],
//     },
// ]