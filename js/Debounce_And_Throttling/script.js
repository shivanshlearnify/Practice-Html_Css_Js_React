// Debouncing and throttling in javascript

//---------------------------------------------------- Ques 1 -------------------------------------------------
// create a button ui and debounce as follows --->
//      ---> show button pressed x times every time button is pressed
//      ---> Increase triggered y times count after 800ms of debounce


// const btn = document.querySelector(".increment_btn")
// const btnpress = document.querySelector(".increment_pressed")
// const count = document.querySelector(".increment_count")

// var pressedCount = 0;
// var triggerCount = 0;

// const deboucedCount = _.debounce(() => {
//     count.innerHTML = ++triggerCount
// }, 800)

// btn.addEventListener("click", () => {
//     btnpress.innerHTML = ++pressedCount
//     deboucedCount()
// });


// ---------------------------------------------------- Ques 2  --------------------------------------------


// create a button ui and throttle as follows --->
//      ---> show button pressed x times every time button is pressed
//      ---> Increase triggered y times count after 800ms of throttle


// const btn = document.querySelector(".increment_btn")
// const btnpress = document.querySelector(".increment_pressed")
// const count = document.querySelector(".increment_count")

// var pressedCount = 0;
// var triggerCount = 0;

// const throttleCount = _.throttle(() => {
//     count.innerHTML = ++triggerCount
// }, 800)

// btn.addEventListener("click", () => {
//     btnpress.innerHTML = ++pressedCount
//     throttleCount()
// });


// --------------------------------------------  ques 3  ------------------------------------------------------

// create debouce() pollfill implementaion



// const btn = document.querySelector(".increment_btn")
// const btnpress = document.querySelector(".increment_pressed")
// const count = document.querySelector(".increment_count")

// var pressedCount = 0;
// var triggerCount = 0;

// const mydebounce = (cb, dtime) => {
//     let timer;

//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb(...args);
//         }, dtime)
//     }
// }
// const deboucedCount = mydebounce(() => {
//     count.innerHTML = ++triggerCount
// }, 400)

// btn.addEventListener("click", () => {
//     btnpress.innerHTML = ++pressedCount
//     deboucedCount()
// });


// --------------------------------------------  ques 4  ------------------------------------------------------

// create throttle() pollfill implementaion

// const btn = document.querySelector(".increment_btn")
// const btnpress = document.querySelector(".increment_pressed")
// const count = document.querySelector(".increment_count")

// var pressedCount = 0;
// var triggerCount = 0;

// const myThrottle = (cb, dtime) => {
//     let timer = 0;
//     let firstCall = true;
//     // approach 1 -- use this 
//     return  (...args) => {
//         let now = new Date().getTime();
//         if (now - timer < dtime) return;
//         timer = now;
//         return cb.apply(this, args);
//     }
//     // approach 2
//     // return function (...args) {
//     //     if (firstCall) {
//     //         firstCall = false;
//     //         cb.apply(this, args);
//     //         return
//     //     }
//     //     if (timer) return;
//     //     timer = setTimeout(() => {
//     //         timer = 0;
//     //         cb.apply(this, args);
//     //     }, dtime)
//     // }
// }

// const throttleCount = myThrottle(() => {
//     count.innerHTML = ++triggerCount
// }, 5000)

// btn.addEventListener("click", () => {
//     btnpress.innerHTML = ++pressedCount
//     throttleCount()
// });







