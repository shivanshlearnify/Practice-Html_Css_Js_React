let list = [];

let req = prompt('Enter Your Request -- Add, Delete, list, quit');

while (true) {

    if (req == 'quit') {
        break;
    }
    if(req == 'add'){
        let task = prompt("Enter task to add");
        list.push(task);
        console.log('task added');
    } else if(req == 'list'){
        for(let i=0; i<list.length; i++){
            console.log("--------------------");
            console.log(i, list[i]);
            console.log("--------------------");
        }
    } else if(req == 'delete'){
        let idx = prompt("enter the index to delete");
        list.splice(idx, 1);
        console.log('task deleted');
    } 
    req = prompt('Enter Your Request -- Add, Delete, list, Quit');
}