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

// function animal(name) {
//     this.name = name;
// }

// // add a method to the prototype

// animal.prototype.sayName = function () {
//     console.log("My name is " + this.name);
// }

// var animal1 = new animal("tiger")

// ------------------------------------------- Inheriting prototype

// // Define a constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Add a method to the prototype
// Person.prototype.greet = function () {
//     console.log('Hello, my name is ' + this.name);
// };

// // Create a new object
// let person1 = new Person('Alice', 30);
// person1.greet(); // Hello, my name is Alice

// // Create another constructor function
// function Employee(name, age, jobTitle) {
//     // Call the Person constructor function to initialize name and age
//     Person.call(this, name, age);
//     this.jobTitle = jobTitle;
// }

// // Set the prototype of Employee to be an instance of Person
// Employee.prototype = Object.create(Person.prototype);
// console.dir(Employee)
// // Correct the constructor pointer because it points to Person
// Employee.prototype.constructor = Employee;

// // Add a new method to the Employee prototype
// Employee.prototype.work = function () {
//     console.log(this.name + ' is working as a ' + this.jobTitle);
// };

// // // Create a new Employee object
// let employee1 = new Employee('Bob', 25, 'Developer');
// employee1.greet(); // Hello, my name is Bob
// employee1.work();  // Bob is working as a Developer




// ----------------------------------------------------------------- question 1



// function vechile(){};

// vechile.prototype.drive = function (){
//     console.log("driving a vechile");
// }

// function car() {};

// car.prototype = Object.create(vechile.prototype);

// car.prototype.constructor = car;
// car.prototype.drive = function (){
//     console.log("driving a car");
// }
// console.dir(car)

// var vechile = new vechile();
// var car = new car();

// vechile.drive()
// car.drive()


// ----------------------------------------------------------------- question 2 diff between __proto__ and prototype

// - **`__proto__`**: It is an object property that points to the prototype of the object.
//                    It is used for inheritance and allows accessing the prototype chain.
// - **`prototype`**: It is a property that exists on constructor functions and is used to
//                   set up inheritance for objects created by that constructor function.
//   It defines properties and methods shared by all instances created by that constructor function.


// ----------------------------------------------------------------- question 3  what is setProtypeOf

var animal = {
    sound: function () {
        console.log("making sound....");
    }
}

var dog = Object.create(animal)

var cat = {
    purr: function () {
        console.log("purring....");
    }
}
dog.sound()
Object.setPrototypeOf(dog, cat)  // it is used to set the prototype and change the prototype


dog.purr()


// ----------------------------------------------------------------- question 4 what is instanceof

function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function () {
    console.log("My name is " + this.name);
};

var animal1 = new Animal("Tiger");

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
};

var dog1 = new Dog("Max", "Labrador");

Array.prototype.myArr = function () {
    console.log("This is my array " + this);
};

const arr = [1, 2, 3];

// console.log(dog1 instanceof Animal);
// ----------------------------------------------------------------- question 5 how to create an object without a prototype in javascript

var obj1 = Object.create(null);
// console.log(obj1.toString());

// ----------------------------------------------------------------- question 6 deep clone object in js


function deepClone(obj) {
    // Handle null and non-object types
    if (obj === null || typeof obj != "object") {
        return obj;
    }

    // Create a new object or array based on the type of the input object
    var clone = Array.isArray(obj) ? [] : {};

    // Iterate through each key in the input object
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

var obj2 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};

var clonedObj = deepClone(obj2);
clonedObj.b.c = 3;



// ------------------------------------------------ Ques 7: What will be the output of the following code?
function A() { }
A.prototype.foo = 10;

function B() { }
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.foo = 20;

function C() { }
C.prototype = Object.create(B.prototype);
C.prototype.constructor = C;
C.prototype.foo = 30;

var obj1 = new A();
var obj2 = new B();
var obj3 = new C();

console.log(obj1.foo);
console.log(obj2.foo);
console.log(obj3.foo);