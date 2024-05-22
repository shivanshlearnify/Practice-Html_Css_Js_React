
// const cart = ["pants", "shirt", "shoes"];

// using callBack
// createorder(cart, function (orderId) {
//     proceedToPayment(orderId)
// });

// // using Promises
// const promise = createorder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });


// example

// const GITHUB_API = "https://api.github.com/users/akshaymarch7"

// const user = fetch(GITHUB_API);

// user.then((data)=>{
//     console.log(data)
// })

// Promise chaining

// createorder(cart)
//     .then(function (orderId) {
//         console.log(orderId)
//         return proceedToPayment(orderId);
//     })
//     .then(function (payementinfo) {
//         console.log(payementinfo)
//     })
//     .catch(err =>{
//         console.log(err.message)
//     })
//     .then(function () {
//         console.log("called after the error handled")
//     })


// function createorder(cart) {
//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve('orderId')
//         } else {
//             reject(new Error("operation uncessfull"))
//         }
//     })
// }
// function proceedToPayment(orderId) {
//     return new Promise((resolve, reject)=>{
//         if(false){
//             resolve('payment succesful')
//         } else {
//             reject(new Error("operation unsucessfull for payent info"))
//         }
//     })
// }


// -------------------------------------  Promise api

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("p1 Sucess") }, 3000)
//     // setTimeout(() => { reject("p1 Failed") }, 3000)
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //  resolve("p2 Sucess")
//         // reject("p2 failed")
//     }, 1000)
// })
// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => { resolve("p3 Sucess") }, 2000)
//     // setTimeout(() => { reject("p3 Failed") }, 2000)
// })

// -------------------------------------  Promise all


// Promise.all([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


// -------------------------------------  Promise allSettled


// Promise.allSettled([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

// -------------------------------------  Promise Race


// Promise.race([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


// -------------------------------------  Promise Race


// Promise.any([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.error(err))







//  ---------------------- practice question by yt_anurag

// Q1  write a promise that being resolved after clicking the button

// --------- solution 1

// const resolvefunc = () => {
//     return new Promise((res, rej) => {
//         res("sucess")
//     })
// }

// document.getElementById("mybtn").addEventListener("click", () => {
//     resolvefunc().then((res) => console.log(res))
// })

// --------- solution 2

// document.getElementById("mybtn").addEventListener("click", () => {
//     Promise.resolve("sucess").then((res) => console.log(res))
// })


// Q1  write a promise that being resolved after clicking the button and rejected by clicking another button

const resolvefunc = (value) => {
    return new Promise((res, rej) => {
        if (value === "mybtn1") {
            res("sucess")
        } else if (value === "mybtn2") {
            rej("rejected")
        }
    })
}

document.getElementById("mybtn1").addEventListener("click", () => {
    resolvefunc("mybtn1").then((res) => console.log(res)).catch(err => console.log(err))
})
document.getElementById("mybtn2").addEventListener("click", () => {
    resolvefunc("mybtn2").then((res) => console.log(res)).catch(err => console.log(err))
})
