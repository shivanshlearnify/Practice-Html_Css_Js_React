let todo = [];

let req = prompt('Enter Your Request -- Add, Delete, list, quit');

while (true) {

    if (req == 'quit') {
        console.log('quitting app');
        break;
    }
    if (req == 'list') {
        console.log("--------------------");
        for (let i = 0; i < list.length; i++) {
            console.log(i, list[i]);
        }
        console.log("--------------------");
    }
     else if (req == 'add') {
        let task = prompt("Enter task to add");
        todo.push(task);
        console.log('task added');
    } 
    else if (req == 'delete') {
        let idx = prompt("enter the index to delete");
        list.splice(idx, 1);
        console.log('task deleted');
    } else {
        console.log("invalid request");
    }
    req = prompt('Enter Your Request -- Add, Delete, list, Quit');
}