// var sum = (function(a, b) {
//     console.log(a + b)
// })(2,4)
// // sum(2,4)


// var a = 5;
// let b = 15;
// const c = 25;
// let sum = function(){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     function call2(){
//         var a = 50;
//         let b = 150;
//         const c = 250;

//     }
//     call2()
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// sum();

// let sum = (...rest) => {
//     let total = 0;
//     for (let num of rest) {
//         total += num;
//     }
//     console.log(total)
// }
// sum(10, 10, 10, 20, 80)

// let arr = [1,2,3];

// let sum = function(a,b){
//     console.log(a+b);
// }
// sum(...arr) 

// let a = 10;
// {
//     let a = 20;
//     console.log(a)
// }
// console.log(a)

// --------------------------------------------------------------------------- question 6

// how java execution will work here   --> in creation phase first foo is undefined and it will replace it with a function

// foo();
// console.log(foo)
// var foo = 20;
// function foo(){
//     console.log("calling foo")
// }
// foo();

// --------------------------------------------------------------------------- question 7

// foo();
// function foo(){
//     console.log("calling foo")
// }
// foo();
// var foo = 20;

// --------------------------------------------------------------------------- question 8

// var foo = 20;
// foo();
// function foo(){
//     console.log("calling foo")
// }
// foo();

// --------------------------------------------------------------------------- question 8


// function foo() {
//     function bar() {
//         return 5
//     }
//     return bar()
//     function bar() {
//         return 10
//     }
// }
// console.log(foo())

// --------------------------------------------------------------------------- question 9

// function a() {
//     var b = function () {
//         return 3;
//     };
//     return b();
//     var b = function () {
//         return 8;
//     };
// }
// console.log(a());

// --------------------------------------------------------------------------- question 10

// setTimeout(() => {
//     console.log('hi')
// }, 0)
// async function greet(name) {
//     console.log("first", name);
//     await console.log("middle", name)
//     console.log("last", name)
// }
// greet("sachin")
// greet("rahul")
// console.log('end')


