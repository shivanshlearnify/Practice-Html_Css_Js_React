// function f(a, b) {  // this is normal function
//     console.log(a, b)
// }
// f(2,3)

// function f(a){   // this is curring function
//     return function(b){
//         return `${a} ${b}`;
//     }
// }

// console.log(f(2)(3))

// question 1
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(sum(2)(6)(1));

// question 2

// evaluate ("sum")(4)(2) => 6
// evaluate ("multiply")(4)(2) => 8
// evaluate ("divide")(4)(2) => 2
// evaluate ("subtract")(4)(2) => 2

// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//             if (operation === "sum") return a + b;
//             else if (operation === "multiply") return a * b;
//             else if (operation === "divide") return a / b;
//             else if (operation === "subtract") return a - b;
//             else return "invalid"
//         }
//     }
// }

// const mul = evaluate("multiply");
// console.log(mul(4)(2))
// console.log(mul(5)(2))




// console.log(evaluate("sum")(4)(2))
// console.log(evaluate("multiply")(4)(2))
// console.log(evaluate("divide")(4)(2))
// console.log(evaluate("subtract")(4)(2))
// console.log(evaluate("asad")(4)(2))

// question 3: infinite curring

// function add(a) {
//     return function (b) {
//         if (b) {
//             return add(a + b);
//         } else {
//             return a;
//         }
//     }
// }

// console.log(add(2)(4)(4)());

// question 4

// function mul(a) {
//     return function (b) {
//         if (b) {
//             return mul(a * b);
//         } else {
//             return a
//         }
//     }
// }

// console.log(mul(2)(4)(4)());

// question 5  curring vs partial application


// question 6 manipulation of DOM

// function updateText(id){
//     return function(content){
//         document.querySelector("#" + id).textContent = content;
//     }
// }

// const updateHeader = updateText("heading"); 
// updateHeader('hey Sooraj'); 


// question 7 --  curring implementaion
// convert f(a,b,c) to f(a)(b)(c)

