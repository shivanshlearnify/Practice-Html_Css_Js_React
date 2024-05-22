// -----------------------------------------------------POLYFILL for map method---------------------------------------------------------------

// array.map((num, i, arr)=>{}) iterate on whole array and return new array with chages we had pass

// Array.prototype.map2 = function(func){
//     let newArr = [];
//     for(let i=0; i<this.length; i++){
//         newArr[i] = func(this[i],i,this); 
//     }
//     return newArr;
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let square = function(num){
//     return num*num;
// }

// console.log(arr.map2(square));

//---------------------------------------------------- POLYFILL for filter method---------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr.filter((num , i , arr)=>{return (i%2 != 0)}))

// Array.prototype.filter2 = function (func) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (func(this[i], i, this)) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }

// let minof5 = function (num, i) {
//     return (i % 2 != 0);
// }

// console.log(arr.filter2(minof5))

// ----------------------------------------------------POLYFILL for reduce method--------------------------------------------------------------

// const numbers = [15.5, 2.3, 1.1, 4.7];
// function getSum2(total, num) {
//     return total + Math.round(num);
// }
// console.log(numbers.reduce(getSum2,0))

// Array.prototype.reduce2 = function (cb, fvalue) {
//     let accumulator = fvalue;
//     for (let i = 0; i < this.length; i++) {
//         if (accumulator != undefined) {
//             accumulator = cb(accumulator, this[i], i, this)
//         } else {
//             accumulator = this[i]
//         }
//     }
//     return accumulator;
// }
// let getSum = function (fvalue, num, i, arr) {

//     return fvalue + Math.round(num)

// } 

// console.log(numbers.reduce2(getSum, 0))


// ----------------------------------------------------POLYFILL for call method--------------------------------------------------------------



// let user = {
//     name: "shivansh"
// }

// function check(age) {
//     console.log(this.name + " is " + age + " year old")
// }
// CALL METHOD

// check.call(user, 27)

//--------------------------------------------------------- POLYFILL for call

// Function.prototype.mycall = function (context = {}, ...args) {
//     if (typeof this != "function") {
//         throw new Error(this + "It is not callable")
//     }
//     context.func = this;
//     context.func(...args);
// }
// check.mycall(user, 27)

// apply method

// check.apply(user, 27)

// ----------------------------------------------------------- polyfill for apply

// Function.prototype.myApply = function (context = {}, args = []) {
//     if (typeof this != "function") {
//         throw new Error(this + "It is not callable")
//     }
//     if (!Array.isArray(args)) {
//         throw new TypeError("CreateListFromArrayLike called on non-object")
//     }
//     context.func = this;
//     context.func(...args);
// }

// check.myApply(user, [27])

// for Bind

// let fn = check.bind(user, 27);
// fn()

// ------------------------------------------------------------- polyfill for bind

// Function.prototype.myBind = function (context = {}, ...args) {
//     if (typeof this != "function") {
//         throw new Error(this + "Cannot be bond as it's not callable")
//     }
//     context.fn = this;
//     return function (...newArgs) {
//         return context.fn(...args);
//     }
// }

// const newFunc = check.myBind(user, 27)
// newFunc()


// ------------------------------------------------------------- polyfill for once

// let view;
// function greet() {
//     let call = 0;
//     return function () {
//         if (call > 0) {
//             console.log("Already greeted")
//         } else {
//             view = "hey"
//             console.log(view + " shivansh")
//             call++;
//         }
//     }
// }

// let work = greet()
// work()
// work()
// work()

// -----------------pollyfill

// function once(func){
//     let ran;

//     return function(...args){
//         if(func){
//             ran = func(...args);
//             func = null;
//         }
//         return ran;
//     }
// }
// function add(a, b) {
//     return a + b;
// }

// const addOnce = once(add);

// console.log(addOnce(2, 3)); 
// console.log(addOnce(4, 5)); 
// console.log(addOnce(4, 5)); 
// console.log(addOnce(4, 5)); 


function createCounter() {
    let counter = 0; // Private variable


    function increment() {
        counter++;
        return counter;
    }
    function decrement() {
        counter--;
        return counter;
    }
    return {
        increment,
        decrement
    }

}

const myCounter = createCounter();

console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.decrement()); // 0

