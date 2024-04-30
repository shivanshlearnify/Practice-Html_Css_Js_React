
// q - Reverse a number

// var reverseNum = function (num) {
//     var newNum = 0;
//     while (num != 0) {
//         var lastDigit = num % 10;
//         newNum = newNum * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }
//     return newNum;
// }

// console.log(reverseNum(251));

// Q- check the string is pallidrome or not

// let ispallidrome = function (str) {
//     let newStr = str.split('').reverse().join('');
//     return (newStr === str);
// }
// console.log(ispallidrome("mam mam"));

// Q  Write a JavaScript function that generates all combinations of a string.

    // let combination = function (str) {
    //     let arr = [];
    //     let k = 0;
    //     for (let i = 0; i < str.length; i++) {
    //         for (let j = i + 1; j <= str.length; j++) {
    //             arr[k] = str.substring(i, j);
    //             k++;
    //         }
    //     }
    //     return arr;
    // }

    // console.log(combination("dog"));