// console.log("start");

// const promose = new Promise((res) => {
//   console.log("task 1");
//   setTimeout(() => {
//     console.log("p1");
//   }, 3000);

//   console.log("task 2");

//   setTimeout(() => {
//     console.log("p2");
//   }, 5000);
// });

// setTimeout(() => {
//   console.log("task 3");
// }, 2000);
// setTimeout(() => {
//   console.log("task 4");
// }, 4000);
// console.log("end");

console.log("start");

const promose = async((res) => {
  console.log("task 1");
  setTimeout(() => {
    await(console.log("p1"));
  }, 3000);

  console.log("task 2");

  setTimeout(() => {
    await(console.log("p2"));
  }, 5000);
});

setTimeout(() => {
  console.log("task 3");
}, 2000);
setTimeout(() => {
  console.log("task 4");
}, 4000);
console.log("end");
