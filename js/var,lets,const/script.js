


// var is globally scoped where let and const are blocked scope


// var a = 5;
// console.log(a);
// var x = 10;
// function example() {
//   var y = 20;
//   console.log(x); // 10
//   console.log(y); // 20
// }
// example();
// console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined


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

// function avg(a, b) {
//     console.log("done");
//     return (a + b) / 2;
// }
// console.log(avg(2, 2));

// illegal shadowing

// function test() {
//     var a = "hey";
//     var a = "y";
//     console.log(a);

//     if (true) {
//         var a = "bye";
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

// declaration

// not work
// const a; 
// const a;

// function scope

// let num1 = 20;
// let num2 = 2;
// let name = "shivansh";

// function multiply() {
//     return num1 * num2;
// }

// console.log(multiply());

// function getscore(){
//     let num1 = 2;
//     let num2 = 2;
//     function add(){
//         return name + (num1+num2);
//     }
//     return add();
// }
// console.log(getscore());

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//        console.log(i);
//     },i*1000);
// }

// const x =20;

// var fun = function() {
//     console.log(x);
//     const x = 2;
// };

// fun();

// const fn = (a,x,y,...num)=>{
//     console.log(num,a,x,y)
// };
// fn(2,5,4,8,9,78,1,6);

// let user = {
//     name: "shivansh",
//     rc: () => {
//         console.log("hey " + this.name);
//     },
//     rc2 () {
//         console.log("hey " + this.name);
//     },
// };

// user.rc();
// user.rc2();

const arr = [1, 2, 3];

const sum = arr.reduce((acc, curr) => {
  // console.log(acc);
  
  return acc + curr;
},1);
console.log(sum);
