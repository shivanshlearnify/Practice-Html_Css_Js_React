// < ------- map ------- >

// array.map((element, index, array)=>{})
// const nums = [1,2,3,4];

// const newArr = nums.map((num,i,arr)=>{
//     return num * 2;
// })

// console.log(newArr);

// < ------- filter ------- >

// const nums = [1,2,3,4];

// const newArr = nums.filter((num) =>{
//     return num > 2;
// });
// console.log(newArr);

// < ------- reduce ------- >

// const nums = [1,2,3,4,5];

// const sumArr = nums.reduce((acc, curr)=>{
//     return acc + curr;
// }, 0);
//  console.log(sumArr);

// < ------- polyfill for map ------- >

// array.map((element, index, array)=>{})

// Array.prototype.myMapfunction = function(callBack){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         temp.push(callBack(this[i], i, this));
//     }

//     return temp;
// }

// const nums = [1,2,3,4];
// const newArr = nums.myMapfunction((num , i, arr) =>{
//     return num * 2;
// });
// console.log(newArr);

const users = [
   { name: "shivansh", lastname: "kesarwani", age: 27 },
   { name: "vaishnavi", lastname: "kesarwani", age: 26 },
   { name: "reetu", lastname: "kesarwani", age: 55 },
   { name: "shiv lal", lastname: "kesarwani", age: 55 }
]

let output = users.reduce((names, user) => { if (user.age < 30) { names[user.name] = user.name } return names; }, {})
console.log(output)


// let output = users.filter((user) =>user.age < 30).map((user)=>user.name)
// console.log(output)


// let output = users.reduce((count, curr) => {
//    if (count[curr.age]) {
//       count[curr.age]++;
//    } else {
//       count[curr.age] = 1;
//    }
//    console.log(count)
//    return count;
// }, {})

// console.log(output)

// console.log(users.reduce((countOfAge, name) => {
//    if (name.age === 55) {
//       countOfAge++;
//    }
//    return countOfAge;

// },0))



// console.log(users.map((name) => name.name + " " + name.lastname))
// console.log(users.filter((name) => name.age <= 26))

