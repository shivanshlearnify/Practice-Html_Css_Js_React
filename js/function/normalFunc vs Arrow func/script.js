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


let student = {
    name: "shivansh",
    getName: ()=>{                      // we are using arrow function over here 
        let xyz = ()=>{                 // we are using arrow function over here 
            console.log(this)
        }
        xyz()
    }
}
student.getName();  // this will ref to window 