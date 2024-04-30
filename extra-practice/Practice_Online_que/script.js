// function findlargest(arr) {
//     let largest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             largest = (largest > arr[i][j]) ? largest : arr[i][j]
//         }
//     }
//     return largest;
// }
// const twoDArray = [
//     [1, 5, 7],
//     [8, 3, 2],
//     [6, 9, 4]
// ];
// console.log(findlargest(twoDArray));

// var x = 10;
// function shownum(){
//     console.log(x);

//     var x = 11;
//     if (x) {
//         console.log(x);
//     }
//     return x;
// }

// x = shownum();
// console.log(x);

// var x = 10;
// function shownum(){
//     console.log(x);

//     if (x) {
//         x = 11;
//         console.log(x);
//     }
//     return x;
// }

// x = shownum();
// console.log(x);

// let x = 10;
// function shownum(){
//     console.log(x);

//     if (x) {
//         let x = 11;
//         console.log(x);
//     }
//     return x;
// }

// x = shownum();
// console.log(x);

// var a = 10;
// function outer() {
//   let b = 20;
//   const c = 30;
//   console.log(a, b, c);
//   function inner() {
//     let b = 40;
//     const d = 50;
//     console.log(a, b, c, d);
//   }
//   inner();
// }
// outer();

// function inner() {
//     let b = 40;
//     let d = 50;
//     console.log(b, d);
// }
// inner();
// console.log(b)

// {
//     let a =5;
// }
// console.log(a)




// FUNCTION   

// named function

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 2))

// function mul(a, b) {
//     return a * b;
// }

// console.log(mul(2, 2))

// function hello() {
//     console.log("hello");
// }

// hello()

// anoyomus function

// var add = function(a,b){
//     console.log(a+b);
// }

// add(1,2)

// var modulo = function(a,b){
//     console.log(a%b);
// }

// modulo(50,5)

// var hello = function(){
//     console.log("hello");
// }

// hello()

// arrow function

// var add = (a, b) => {
//     return a + b;
// }

// let mul = (a,b)=>{
//     return a * b;
// }
// mul(2,2)

// var highorder = (a,b, func)=>{
//     return func(a,b);
// }

// console.log(highorder(5,4, mul))
// console.log(highorder(5,4, add))

// console.log(a);
// console.log(b);
// console.log(c); 

var a = 1;
let b = 2;
const c = 3;

function test() {
  console.log(a);
  console.log(b);
  console.log(c);
  
  var a = 10;
  let b = 20;
  const c = 30;
  
  console.log(a);
  console.log(b);
  console.log(c); 
}

test();