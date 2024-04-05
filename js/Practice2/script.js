// q1 iterate the table of 2

// console.log('table of 2');
// for (let i = 1; i <= 10; i++) {
//     console.log(2 * i);
// }

// q2 print odd num from 1 to 15

// console.log('odd numbers');
// for (let i = 1; i <= 15; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }
// q3 print even number

// console.log('even numbers');
// for (let i = 1; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//  q4 print an infinite loop

// for(let i=0; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// q5 Nested loop
// console.log('nested loop');
// for (let i = 1; i <= 3; i++) {

//     for (let j = 1; j <= 3; j++) {
// console.log(j);
//     }
// }

// q6 while loop
// console.log('while loop');
// let i=1;

// while (i<=5) {
//     console.log(i);
//     i++;
// }

// q7 guess fav movie

let fav = 'avtar';
let guess = prompt('guess the movie');

while(fav === guess){
  guess =  prompt('wrong guess tryAgain');
}