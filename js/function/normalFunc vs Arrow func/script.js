// ---------------------------------------------------------------- diifernce 1 ----------------------------------------------------

// let student = {
//     name: "shivansh",
//     getName: function(){
//         console.log(this)
//     }
// }
// student.getName();





// let student = {
//     name: "shivansh",
//     getName: function(){
//         console.log(this)
//     }
// }
// let abc = student.getName;

// abc(); // here this is refering to window obj





// let student = {
//     name: "shivansh",
//     getName: function(){
//         function xyz(){
//             console.log(this)
//         }
//         xyz()
//     }
// }
// student.getName();  // here this is refering to window obj



// ------------------------  To get rid of this error we use -----------------------
// ------------------------  arrow function have lexical this -----------------------


// let student = {
//     name: "shivansh",
//     getName: function(){
//         let xyz = ()=>{                 // we are using arrow function over here 
//             console.log(this)
//         }
//         xyz()
//     }
// }
// student.getName();  



// ------------------------  but if we use both arrow function  -----------------------


//     let student = {
//         name: "shivansh",
//         getName: ()=>{                      // we are using arrow function over here 
//             let xyz = ()=>{                 // we are using arrow function over here 
//                 console.log(this)
//         }
//         xyz()
//     }
// }
// student.getName();  // this will ref to window 

// ---------------------------------------------------------------------------------- diifernce 2 ----------------------------------------------------


// Arrow function are declared in a variable so they can not be used in constructor function

// construction function

// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let shiv = new person('shiv', 20);
// let shiv2 = new person('shiv2', 22);

// console.log(shiv)
// console.log(shiv2)



// -------------------------------------------------------------------------- diifernce 3 ----------------------------------------------------


