// ------------------------------------------------- question 1.1
// function to create number to binary
// function toDecimal(num) {
//     return num.toString(2)
// }

// console.log(toDecimal(1))
// console.log(toDecimal(2))

// ------------------------------------------------- question 1.2
// what is local storage and session storage and cookies
// The Web Storage API provides mechanisms by which browsers can store key / value pairs
// The two mechanisms within Web Storage are as
//     session sotrage - maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser tab is open, including page reloads and restores).
// sessionStorage.setItem("key", "value")
// sessionStorage.getItem("key")
// sessionStorage.removeItem("key")
// sessionStorage.clear()


// local storage - does the same thing, but persists even when the browser is closed and reopened.
//     localStorage.setItem("key", "value")
// localStorage.getItem("key")
// localStorage.removeItem("key")
// localStorage.clear()

// let numbersArray = [1, 2, 3, 4, 5];

// localStorage.setItem("numbers", JSON.stringify(numbersArray))
// let parsedData = localStorage.getItem("numbers")
// console.log(JSON.parse(parsedData))
// localStorage.clear()

// let obj = {
//     name: "shivansh",
//     age: 26
// }

// for (let key in obj) {
//     sessionStorage.setItem(key, obj[key])
// }
// let paresedData = sessionStorage.getItem("name")
// console.log(paresedData)
// sessionStorage.clear()




// ------------------------------------------------- question 1.3
// what is optional chaining

// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         postalCode: "12345"
//     }
// };

// console.log(user?.address?.city)

// const user2 = {
//     getName: function () {
//         return "John";
//     }
// };
// console.log(user2?.getName?.())

// const arr = [1, 2, 3, 4];

// const value = arr?.[7];
// console.log(value)

// const users = [{ name: "Alice" }, { name: "Bob" }];
// const firstName = users?.[6]?.name;

// console.log(firstName);

// the optional chaining(?.) operator access the object property or call a function, if it gives null or undefined, the expression short circuits and evaluates undefined instead of throwing error

// ------------------------------------------------- question 1.4
// What is modules in js and how we make a modules

// modules are a way to organize code into separate files or modules, making it easier to manage and maintain large codebases
// // example.js
// export function greet() {
//     console.log("Hello!");
// }

// // main.js
// import { greet } from './example';
// greet(); // prints "Hello!"



// ------------------------------------------------- question 1.5
// shallow copy and deep copy

// shallow copy
// let obj = {
//     name: "shivansh",
//     age: "27",
//     address: {
//         city: "haldwani"
//     }
// }

// let obj2 = obj;
// obj.name = "rohit"
// console.log(obj)
// console.log(obj2)

// deep copy

// let obj = {
//     name: "shivansh",
//     age: "27",
//     address: {
//         city: "haldwani"
//     }
// }

// // let obj2 = structuredClone(obj);
// // let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.address.city = "rohit"
// console.log(obj)
// console.log(obj2)


// ------------------------------------------------- question 1.5

// how to freeze a particular key in a object so that it cant be updated from outside


// Object.freeze() is a method in JavaScript that is used to freeze an object.Freezing an object means that its properties are made read - only, and no new properties can be added, existing properties can't be removed Essentially, freezing an object makes it immutable.
// Object.freeze(obj) // whole object is frozen

// Object.seal() is a method in JavaScript used to seal an object. When an object is sealed, it means that its existing properties cannot be deleted, although their values and attributes (like writable and enumerable) can still be changed. Additionally, no new properties can be added to the object.

// let obj = {
//     name: "shivansh",
//     age: "27",
//     address: {
//         city: "haldwani"
//     }
// };

// // // Create a shallow copy of the object
// let newObj = { ...obj };

// // Freeze the 'name' property in the shallow copy
// Object.defineProperty(newObj, 'name', {
//     value: newObj.name,
//     writable: false, // Prevents modification
//     configurable: false // Prevents reconfiguration
// });


// newObj.name = "John";
// newObj.age = "28";


// obj = newObj;

// console.log(obj.name);
// console.log(obj.age);
// console.log(newObj.age);
// console.log(newObj.name);



// Object.seal() is a method in JavaScript that seals an object, preventing new properties from being added to it

// ---------------------------------------------------------------------------  1.11

// The equality == operator is a comparison operator that compares two values and returns true if they are equal. The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.

// console.log(5 == '5');  // true, because '5' is coerced to a number and both are equal
// console.log(1 == true);  // true, because true is coerced to 1
// console.log(0 == false); // true, because false is coerced to 0

// console.log(5 === '5');  // false, because they are of different types
// console.log(1 === true);  // false, because they are of different types
// console.log(0 === false); // false, because they are of different types





// ------------------------------------------------------------------------------ Array and Array Method
// ------------------------------------------------------------------------------ 5.06

// Map

// let arr = [1,2,3,4,5,6,7,8,9,10];

// // let newArr = arr.map((num,i,arr)=>num*3);

// // console.log(newArr)

// Array.prototype.myMap = function(cb){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         temp.push(cb(this[i], i. this))
//     }
//     return temp;

// }
// let newArr = arr.myMap((num,i,arr)=>num*3);
// console.log(newArr)

// filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let newArr = arr.filter((num,i,arr)=>num%2===0)
// // console.log(newArr)

// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)){
//             temp.push(this[i])
//         }
//     }
//     return temp;
// }


// let newArr = arr.myFilter((num, i, arr) => num % 2 === 0)
// console.log(newArr)

// reduce
// let arr = [7, 6, 9, , 4, 5, 0, 55, 47];

// let num = arr.reduce((acc, cvalue, i, array) => {
//     acc = (acc > cvalue) ? acc : cvalue;
//     return acc;
// })
// console.log(num)

// Array.prototype.myreduce = function (cb, initalvalue) {
//     let acc = initalvalue;
//     for (let i = 0; i < this.length; i++) {
//         acc = acc ? cb(acc, this[i], i, this) : this[i]
//     }
//     return acc;
// }




// let num = arr.myreduce((acc, cvalue, i, array) => {
//     acc = (acc > cvalue) ? acc : cvalue;
//     return acc;
// })
// console.log(num)

