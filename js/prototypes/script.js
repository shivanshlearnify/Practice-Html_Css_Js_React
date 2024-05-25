// let obj = {
//     name: "shivansh",
//     age: 27
// }
// console.log(obj.__proto__); //object.prototype

// let num = 10;
// console.log(num.__proto__);  // number.prototype
// console.log(num.__proto__.__proto__);  // Object.prototype
// let name = "shivansh";
// let bool = true;

// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2))


// // Prototype Chaining

// let person = {
//     name: "shivansh",
//     age: 27,
//     toString: ()=>{
//         console.log("converted to string");
//     }
// }

// person.toString();  // first it will check in object the property exists if not then it will find it in prototype objects


// // prototype inheritence

// defined a contructor function

function animal(name){
    this.name = name;
}

// add a method to the prototype

animal.prototype.sayName = function() {
    console.log("My name is "+ this.name);
}

var animal1 = new animal("tiger")























