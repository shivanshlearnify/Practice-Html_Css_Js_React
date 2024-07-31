"use strict";

// this in global scope

// console.log(this)

// this in a function

// function x() {
//     console.log(this) // value depends on strict / non-strict mode 
// }

// this depends on how function is called
// x(); // undefined
// window.x();  // window


// this in a object's method

// let user = {
//     name: "shivansh",
//     print: function () {
//         console.log(this.name);
//     }
// }

// user.print();

// let user2 = {
//     name: "rohit"
// }

// call apply and bind // here this value is being modifed after using them

// user.print.call(user2);  // user2 this will be assigned here and rohit will be loged


// this in arrow function // arrow function have lexical this


// let user3 = {
//     name: "shivansh",
//     print: () => {
//         console.log(this);
//     }
// }

// user3.print();



// this in nested arrow function
// let user4 = {
//     name: "shivansh",
//     print: function () {
//         let recall = () => {
//             console.log(this);
//         }
//         recall();
//     }
// }

// user4.print();

// let user5 = {
//     name: "shivansh",
//     print: {

//         recall: () => {
//             console.log(this);
//         }
//     }


// }

// user5.print.recall();

// var length = 4;
// function callback(){
//     console.log(this);
// }
// const obj = {
//     length: 5,
//     method(fn) {
//        fn();
//     },
// };
// obj.method(callback);




// var length = 40;
// function callback (){
//     console.log(this.length);
// }
// const obj2 = {
//     length: 5,
//     method: function() {
//        arguments[0]();
//     },
// };
// obj2.method(callback, 2, 3);


// var length = 40;
// let callback = ()=>{
//     console.log(this);
// }
// const obj3 = {
//     length: 5,
//     method() {
//        arguments[0]();
//     },
// };
// obj3.method(callback, 2, 3);


function makeUser (){
    return {
        name:"shiv",
        ref:this
    }
  
}

let user = makeUser();
console.log(user.ref);
