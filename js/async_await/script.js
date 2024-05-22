

// async funtion

// async function getData() {
//     return "namaste"
// }

// const data = getData();

// console.log(data)


// ================================================== async await

// //    this is how we handle promoise before async await

// function createorder() {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             resolve('orderId')
//         } else {
//             reject(new Error("operation uncessfull"))
//         }
//     })
// }
// createorder()
//     .then(function (orderId) {
//         console.log(orderId)
//     })


// //    now how we handle using async await


// const p = new Promise(resolve => resolve("data is resolved"))

// const handlepromise = async ()=>{
//     const value = await p;
//     console.log(value)
// }
// handlepromise();

// ------------------------------------------------------------------ diving deep in async await -----------------------------------------------------------

// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{resolve("data is resolved")
//     }, 10000)
// })

// function getData() {
//     p.then((res) => console.log(res))
//     console.log('namaste javascript')    // this will log instantly before p.then
// }
// getData();


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("data is resolved for p")
//         // reject("data is rejected")
//     }, 4000)
// })
// const q = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("data is resolved for q")
//         // reject("data is rejected q")
//     }, 8000)
// })

// const handlepromise = async () => {
    
//     console.log("Hello")
//     const value1 = await p;
//     console.log(value1)
//     const value2 = await q;
//     console.log(value2)
// }

// handlepromise();

// setTimeout(() => {
//     console.log("data 1")
//     // reject("data is rejected q")
// }, 2000)
// setTimeout(() => {
//     console.log("data 2")
//     // reject("data is rejected q")
// }, 6000)
// setTimeout(() => {
//     console.log("data 3")
//     // reject("data is rejected q")
// }, 10000)



const url = "https://ahlearnify";

const fetchdata = async ()=>{
    try {

        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}


fetchdata()
