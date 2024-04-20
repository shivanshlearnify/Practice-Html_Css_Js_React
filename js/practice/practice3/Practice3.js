// q1 using break

let i = 1;

while (i <= 20) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i++;
}

// q2 loops in array

let fruits = ['mango', 'banana', 'apple', 'orange'];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// q3 Nested loop with nested array

let heroes = [["spiderman", "antman", "ironman"], ['batman', 'superman', 'aquaman']];

for(let i=0; i<heroes.length; i++){
    console.log(`list #${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}
// q3 for of loops

let fruits3 = ['mango', 'banana', 'apple', 'orange'];
console.log('list of fruits-->');
for(fruit of fruits3){
    console.log(fruit);
}

// q4 Nested for of loop

let heroes2 = [["spiderman", "antman", "ironman"], ['batman', 'superman', 'aquaman']];
console.log('list of heroes');
for(list of heroes2){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}   