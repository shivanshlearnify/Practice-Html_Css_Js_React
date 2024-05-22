// "use strict";
// --------------------------   call  -----------------------

// let user = {
//     fname: "shivansh",
//     lname: "kesarwani",
//     print: function(){
//         console.log(this.fname + " " + this.lname);
//     }
// }

// user.print()

// let user2 = {
//     fname: "rohit",
//     lname: "sharma",
// }

// user.print.call(user2)





// let user1 = {
//     fname: "shivansh",
//     lname: "kesarwani",
// }

// let user2 = {
//     fname: "rohit",
//     lname: "sharma",
// }


// let print = function () {
//     console.log(this.fname + " " + this.lname);
// }

// print.call(user1)
// print.call(user2)





// let user1 = {
//     fname: "shivansh",
//     lname: "kesarwani",
// }

// let user2 = {
//     fname: "rohit",
//     lname: "sharma",
// }


// let print = function (hometown, state) {
//     console.log(this.fname + " " + this.lname + " from " + hometown + " , " + state);
// }

// print.call(user1, "haldwani", "uttrakhand")
// print.call(user2, "mumbai", "maharastra")


// print.apply(user2, ["mumbai", "maharastra"])

// let printName = print.bind(user1, "haldwani", "uttrakhand")
// print.bind(user2, "mumbai", "maharastra")

// printName()


// ---------------------- Roadside Coder -------------------------

// ------------------------ question 1

// const user = {
//     name: "shivansh"
// }

// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }


// console.log(sayHi.call(user, 26))
// console.log(sayHi.bind(user, 26))



// ------------------------ question 2

// const age = 24;

// var user = {
//     name: "shivansh",
//     age: 27,
//     getAge: function () {
//         return this.age;
//     }
// }

// var user2 = { age: 24 }
// console.log(user.getAge.call(user2));



// ------------------------ question 3

// var status = "emoji 1"

// setTimeout(() => {
//     const status = "emoji 2"
//     const data = {
//         status: "emoji 3",

//         getStatus() {
//             return this.status;
//         }
//     }
//     console.log(data.getStatus());
//     console.log(data.getStatus.call(this));
// }, 0)



// ------------------------ question 4

// const animals = [
//     { species: "lion", name: "king" },
//     { species: "Whale", name: "Queen" }
// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     };
//     this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i)
// }


// ------------------------ question 5

// Appends an array to another array by using call, apply, bind

// const array = ["a", "b"];
// const elements = [0, 1, 2];

// const newArr = [...array, ...elements]
// const newArr = array.concat(elements);
// console.log(newArr)

// array.push(...elements)
// console.log(array)


// array.push.apply(array, elements)
// console.log(array)


// ------------------------ question 6

// find min and max in array

// const numbers =[5,6,2,-3,7];

// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));


// console.log(Math.min.apply(0, numbers));
// console.log(Math.max.apply(0, numbers));


// ------------------------ question 7


// bound function

// function f() {
//     console.log(this)
// }

// let user = {
//     g: f.bind(null),
// }

// user.g()


// ------------------------ question 8

// chaining


// function f(){
//     console.log(this.name)
// }

// f = f.bind({name: "shiv"}).bind({name:"ansh"})

// f();



// ------------------------ question 9


// function check(sucess, failed) {
//     let password = prompt("Password?", "")
//     if (password == "hello") sucess();
//     else failed()
// }

// let user = {
//     name: "shivansh",

//     loginSucess() {
//         console.log(`${this.name} logged in`)
//     },
//     loginFailed() {
//         console.log(`${this.name} failed to login`)
//     }
// };

// check(user.loginSucess.bind(user), user.loginFailed.bind(user))


// ------------------------ question 10


// function check(ok, fail) {
//     let password = prompt("Password?", "")
//     if (password == "hello") ok();
//     else fail()
// }

// let user = {
//     name: "shivansh",

//     login(result) {
//         console.log(this.name + (result ? " login sucessfully" : " failed to login"))
//     },
//     loginFailed() {
//         console.log(`${this.name} failed to login`)
//     }
// };

// check(user.login.bind(user, true), user.login.bind(user, false))



// ------------------------ question 11



// const age = 10;

// var user = {
//     name: "shivansh",
//     age: 27,
//     getAge: function () {
//         console.log(this.age)
//     },
//     getAgeArrow: ()=> console.log(this.age)
// }

// var user2 = { age: 24 }
// user.getAge.call(user2);
// user.getAgeArrow.call(user2);


// var user1 = "shiva"
// let user2 = "shiva"
// const user3 = "shivaansh"

// console.log(this.user1)
// console.log(this.user2)
// console.log(this.user3)
