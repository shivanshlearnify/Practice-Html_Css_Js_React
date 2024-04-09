// var is globally scoped where let and const are blocked scope


// var a = 5;
// console.log(a);

// {
//     var a = 25;
//     console.log(a);

// }
// console.log(a);


// let b = 15;
// console.log(b);

// {
//     let b = 55;
//     console.log(b);

// }
// console.log(b);

// const a = 50;
// console.log(a);
// a = 50;
// console.log(a);

// console.log(a); // undefined
// var a = 10;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 20;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = null;

// console.log(a);
// let a;

function avg(a, b) {
    console.log("done");
    return (a + b) / 2;
}
console.log(avg(2, 2));
