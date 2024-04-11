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

// < ------- polyfill for map ------- >

