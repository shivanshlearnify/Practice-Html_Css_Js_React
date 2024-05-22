//  ----------------------------------------------------------question 1
// const user = {
//     name: "shivansh",
//     "Last Name" : "kesarwani",
//     age: 27,
// }

// console.log(user.name)
// console.log(user["age"])
// console.log(user["Last Name"])

// user.name = "sooraj"
// user.age = "22"

// console.log(user)

// delete user.name
// delete user.age
// console.log(user)


// ---------------------------------------------------------- question 2
// const func = (function (a) {
//     delete a;
//     return a;
// })(5)

// console.log(func)



//  ----------------------------------------------------------question 3

// const key = "fname";
// const name = "shivansh";

// const user = {
//     [key]: name,
// }

// console.log(user.fname)



//  ----------------------------------------------------------question 4

// const user = {
//     name: "shivansh",
//     key: 27,
// }

// for(let key in user){
//     console.log(key + ": " +user[key])
// }





//  ----------------------------------------------------------question 5

// const user = {
//     name: "shivansh",
//     key: 27,
//     name: "sooraj",
// }


// console.log(user)


//  ----------------------------------------------------------question 6

// let nums = {
//     a: 100,
//     b: 200,
//     c: "shivansh",
// }

// function multiplyByTwo(obj){
//     for(let key in obj){
//         if(typeof(obj[key]) === 'number'){
//             obj[key] = obj[key]*2
//         }
//     }
// }

// multiplyByTwo(nums);
// console.log(nums)


//  ----------------------------------------------------------question 7



//  ----------------------------------------------------------question 8

// what is JSON.stringify and JSON.parse


// const user = {
//     name: "shivansh",
//     age: 27
// }

// const str = JSON.stringify(user); // user to convert object to JSON string


// localStorage.setItem("myObject", str);

// const retrievedString = localStorage.getItem("myObject");
// const str2 = JSON.parse(retrievedString); // user to convert JSON string to object


// console.log(str2)

// Communication with APIs:
// When interacting with APIs (either fetching data from them or sending data to them),
// you often need to convert JavaScript objects to JSON strings (JSON.stringify())
// before sending them and parse JSON strings received from the API back into JavaScript objects (JSON.parse()).


// Data Storage: 
// When storing data locally in web browsers (e.g., in local storage or session storage),
//  the data is stored as strings. So, before storing an object, you stringify it (JSON.stringify()),
//  and when retrieving it, you parse it back into an object (JSON.parse()).



//  ----------------------------------------------------------question 9

// console.log([..."shivansh"])
// console.log({..."shivansh"})


//  ----------------------------------------------------------question 10

// const user = { name: "Lydia", age: 21};
// const admin = {admin: 'true', ...user};

// console.log(admin)


//  ----------------------------------------------------------question 11

// const setting = {
//     username: "shivansh",
//     level: 1,
//     health: 100,
// };
// const data = JSON.stringify(setting,["level"]);

// console.log(data)

//  ----------------------------------------------------------question 12

// what is destructure in object

// const user = {
//     name: "shivansh",
//     age: 27,
//     id: 2,
// }

// const { age, id } = user;

// console.log(id)


//  ----------------------------------------------------------question 12

// how to change the key name if already in code


// const user = {
//     name: "shivansh",
//     age: 27,
//     id: 2,
// }

// let age;
// let id;
// const { age: userAge, id: userid } = user;

// console.log(userAge)
// console.log(userid)



// for nested object


// const user = {
//     name: "shivansh",
//     age: 27,
//     id: 2,
//     fullName: {
//         first: "shivansh",
//         last: "kesarwani",
//     }
// }

// const { fullName: { first } } = user;
// console.log(first)


//  ----------------------------------------------------------question 13

// function getItems(fruitList, ...args, favoritefruits) {  // params shoulb be called at last
//     return [...fruitList, ...args, favoritefruits]
// }

// console.log(["banana", "apple"], "pear", "orange")


// function getItems(fruitList, favoritefruits, ...args) {  // params shoulb be called at last
//     return [...fruitList, ...args, favoritefruits]
// }

// console.log(getItems(["banana", "apple"], "pear", "orange", "mango","pulses"))


// ---------------------------------------------------------- question 14 ----------    Object referencing

// let c = { greeting: "hey!" };
// let d;

// d = c;
// c.greeting = "hello"

// console.log(d)

// ---------------------------------------------------------- question 15 ----------    Object referencing


// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = "234"
// a[c] = "456"

// console.log(a[b]); // 456
// console.log(a); // 456


// const user = {
//     name: "shivansh",
// }
// let age;
// let group;


// user[age] = 22
// user[group] = 42
// console.log(user[age]) // 42
// console.log(user)

// ---------------------------------------------------------- question 15 ----------

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });


// ---------------------------------------------------------- question 15 ----------

// let person = {name: "Lydia"};
// const member = person;
// person = null;

// console.log(person)
// console.log(member)


// let person = {name: "Lydia"};
// const member = [person];
// person.name = null;

// console.log(member)
// console.log(person)

// ---------------------------------------------------------- question 15 ----------

// const values = { number: 10}

// const multiply = (x = {...values}) => {  // here we have passed default value if no value is passed while calling function it takes default value
//                                         //    here we have used spread operator that will not take refrence but will clone it
//     console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply();
// multiply(values);
// multiply(values);
// multiply(values);


//  ---------------------------------------------------------- question 16

// function changeRefrence(person) {
//     person.age = 25;
//     person = {
//         name: "shiv",
//         age: 50,
//     }
//     return person;
// }

// const personObj1 = {
//     name: "alex",
//     age: 50,
// }

// const personObj2 = changeRefrence(personObj1);

// console.log(personObj1);
// console.log(personObj2);


// how to freeze a particular key in a object so that it cant be updated from outside

// Create an object with some properties
let myObject = {
    name: "John",
    age: 30
  };
  
  // Freeze the 'age' property so it can't be updated
  Object.defineProperty(myObject, 'age', {
    writable: false,
    configurable: false
  });
  
  // Attempt to change the 'age' property
  myObject.age = 35; // This will not change the age property
  
  // Attempt to delete the 'age' property
  delete myObject.age; // This will not delete the age property
  
  console.log(myObject.age); // Outputs: 30
  

