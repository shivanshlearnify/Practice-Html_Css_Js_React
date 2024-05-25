// QUESTION 1
// async function func(){
//     return 'hello';
// }

// const res = func()

// console.log(res) // this will return promise

// sol----->>>>>

// async function func() {
//     return 'hello';
// }
// async function getResult() {
//     const res = await func()
//     console.log(res) // this will log hello
// }
// getResult()




// -------------------------------------------------------------Question 2
// const user1 = {
//     name: 'shiv',
//     age: 25,
//     address: {
//         city: "haldwani",
//         state: "uttrakhand"
//     }
// }

// const user2 = user1;

// user2.name = 'rohit'
// user2.address.city = "delhi"
// console.log(user1)
// console.log(user2)

// ------------------------------------------------------------
// const user1 = {
//     name: 'shiv',
//     age: 25,
//     address: {
//         city: "haldwani",
//         state: "uttrakhand"
//     }
// }

// // const user2 = {...user1, address:{...user1.address}};
// // const user2 = JSON.parse(JSON.stringify(user1))
// const user2 = structuredClone(user1)

// user2.name = 'rohit'
// user2.address.city = "delhi"
// console.log(user1)
// console.log(user2)


// question 3

// const num = [0, 1, 2, 3, 4, 5];

// let newNum = num.filter((num) => num < 3).map((num) => num + 5)
// console.log(newNum)

// question 4 -- convert each starting letter in capital
// question 5 -- convert each word to an array

// function capitalize(str) {
//     let words = str.split(' ')
//     let words2 = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     let words3 = words2.join(' ');
//     console.log(words)
//     console.log(words2)
//     console.log(words3)
//   }

//   const str = "hi i am shivansh";
//   capitalize(str); // Output: "Hi I Am Shivansh"


//------------------------------------------------------------------------ question 6

// x = 6;
// console.log(x)



//------------------------------------------------------------------------ question 7

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }
// for (const i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }



//------------------------------------------------------------------------ question 8

// async function foo() {
//     return "hello world"
// }
// const result = foo();
// console.log(result)


// ans 1
// async function foo() {
//     return "hello world";
// }
// const resultPromise = foo();
// resultPromise.then(result => {
//     console.log(result);
// });
// ans 2
// async function foo() {
//     return "hello world";
// }
// async function printResult() {
//     const result = await foo();
//     console.log(result);
// }
// printResult();


//------------------------------------------------------------------------ question 9

// how to throw error in async function

// using .then

// async function exampleAsyncFunction() {
//     throw new Error("Something went wrong!");
// }

// exampleAsyncFunction()
//     .then(result => {
//         console.log("Success:", result); // This will not be executed
//     })
//     .catch(error => {
//         console.error("Error:", error.message); // This will be executed
//     });

// using try catch


// async function exampleAsyncFunction() {
//     throw new Error("Something went wrong!");
// }

// async function handleAsyncFunction() {
//     try {
//         const result = await exampleAsyncFunction();
//         console.log("Success:", result); // This will not be executed
//     } catch (error) {
//         console.error("Error:", error.message); // This will be executed
//     }
// }

// handleAsyncFunction();

//------------------------------------------------------------------------ question 9

// console.log([1, 2] === [1, 2]); why
// console.log([1, 2] == [1, 2]); why
// console.log({a:1} == {a:1}); why
// console.log({a:1} === {a:1}); why

//------------------------------------------------------------------------ question 10

// function abc(){
//     console.log("hello world")
// }

// const value = new abc()
// console.log(value)

// ----------------------------------------
// function abc(){
//     console.log("hello world")
//     return "hi";
// }

// const value = new abc()
// console.log(value)

//------------------------------------------------------------------------ question 11

// how to return value from contructur function like return "hi" only non-primitive types are retured and function

//------------------------------------------------------------------------ question 12

// const [a] = [10,20,30,40,50];

// how to access 40 in above code

// const [, , , a] = [10, 20, 30, 40, 50];
// console.log(a)

// const [...a] = [10,20,30,40,50];
// console.log(a[3])
//------------------------------------------------------------------------ question 13

// function abc(){
//     console.log("hi")
// }
// const value = new abc();
// console.log(value)