
// -------------------------------------QUESTION 1
// var a = 5;
// console.log(a);
// var x = 10;
// function example() {
//   var y = 20;
//   console.log(x); 
//   console.log(y); 
// }
// example();
// console.log(x); 
// console.log(y); 

// -------------------------------------QUESTION 2

// {
//     var a = 25;
//     console.log(a);

// }
// console.log(a);

// -------------------------------------QUESTION 3

// let b = 15;
// console.log(b);

// {
//   let b = 55;
//   console.log(b);

// }
// console.log(b);

// -------------------------------------QUESTION 4

// const a = 50;
// console.log(a);
// a = 50;
// console.log(a);

// console.log(a1); 
// var a1 = 10;

// console.log(b); 
// let b = 20;

// console.log(c); 
// const c = null;

// console.log(a2);
// let a2;

// -------------------------------------QUESTION 5


// function avg(a, b) {
//   console.log("done");
//   return (a + b) / 2;
// }
// console.log(avg(2, 2));

// -------------------------------------QUESTION 6
// illegal shadowing

// function test() {
//   var a = "hey";
//   var a = "y";
//   console.log(a);

//   if (true) {
//     var a = "bye";
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// -------------------------------------QUESTION 7

// declaration

// not work
// const a;
// const a;

// -------------------------------------QUESTION 8
// function scope

// let num1 = 20;
// let num2 = 2;
// let name = "shivansh";

// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply());

// function getscore() {
//   let num1 = 2;
//   let num2 = 2;
//   function add() {
//     return name + " " + (num1 + num2);
//   }
//   return add();
// }
// console.log(getscore());
// -------------------------------------QUESTION 9

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// -------------------------------------QUESTION 10
// const x =20;

// var fun = function() {
//     console.log(x);
//     const x = 2;
// };

// fun();
// -------------------------------------QUESTION 11

// const fn = (a,x,y,...num)=>{
//     console.log(num,a,x,y)
// };
// fn(2,5,4,8,9,78,1,6);

// -------------------------------------QUESTION 12
// let user = {
//   name: "shivansh",
//   rc: () => {
//     console.log("hey " + this.name);
//   },
//   rc2() {
//     console.log("hey " + this.name);
//   },
// };

// user.rc();
// user.rc2();

// -------------------------------------QUESTION 12
// const arr = [1, 2, 3];

// const sum = arr.reduce((acc, curr) => {
//   // console.log(acc);

//   return acc + curr;
// }, 1);

// console.log(sum);

// -------------------------------------QUESTION 13

// { var sum; }
// console.log(sum);

// -------------------------------------QUESTION 14

// let arr = [1, 2, 3, 4, 5];
// for (const i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

// -------------------------------------QUESTION 14

// let arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }


// -------------------------------------QUESTION 14

// console.log(a)
// console.log(b)
// var a = b = 5

// -------------------------------------QUESTION 15

// var x = 10;

// function fo(){
//     console.log(x);
//     x = 20;
// }
// console.log(x);
// fo();

// -------------------------------------QUESTION 16

// x = 10;
// console.log(x);

// ----------------------

// console.log(x);
// x = 10;

// -------------------------------------QUESTION 17

// function foo() {
//     x = 10;
//     console.log(x);
// }
// foo();

// -------------------------------------QUESTION 18

// function foo() {
//     x = 10;
// }
// foo();
// console.log(x);

