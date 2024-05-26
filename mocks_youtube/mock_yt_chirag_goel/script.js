// --------------------------------------------------------- question 1
// function computeAmount() {
//     let total = 0;

//     function thousand(num) {
//         total += num * 1000;
//         return this;
//     }

//     function lacs(num) {
//         total += num * 100000;
//         return this;
//     }

//     function crore(num) {
//         total += num * 10000000;
//         return this;
//     }

//     function value() {
//         return total;
//     }

//     return {
//         thousand,
//         lacs,
//         crore,
//         value
//     };
// }

// console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());

// --------------------------------------------------------- question 2

// var obj = {
//     helloWorld: function () {
//         return "hello world, " + this.name;
//     },   
//     name: "hello"
// }

// var obj2 = {
//     helloWorld: obj.helloWorld,
//     name: "bye"
// }

// console.log(obj2.helloWorld());

// what if we want to print the hello above what changes we have to do

// console.log(obj2.helloWorld.call(obj));


// --------------------------------------------------------- question 3


// let p2 = () => new Promise((resolve, reject) =>
//     reject("got rejected")
// )
// let p1 = () => new Promise((resolve, reject) => {
//     let r2 = Math.random()
//     const randomNum = r2 > 0.5;
//     console.log(r2);
//     if (randomNum) {
//         resolve("p1 resolved")
//     } else {
//         reject("p1 rejected")
//     }
// }
// )

// async function fetchWithAutoRetry(fetcher, maxtry = 1) {
//     if (maxtry > 0) {
//         try {
//             const result = await fetcher();
//             return result;
//         } catch (error) {
//             console.log(maxtry);
//             const result = await fetchWithAutoRetry(fetcher, maxtry - 1);
//             return result;
//         }
//     } else {
//         throw new Error("reached maximum tries")
//     }
// }

// const result = fetchWithAutoRetry(p1, 3);
// result.then((data) => console.log(data)).catch((e) => console.log(e));
