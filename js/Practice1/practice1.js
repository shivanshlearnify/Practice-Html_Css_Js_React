// example 1 

let size = "s";

if (size === "xl") {
    console.log("price is 250");
}
else if (size === "l") {
    console.log("price is 150");
}
else {
    console.log("price is 50");
}

// example 2


let str = "abcde";

if (str.length > 3 && str[0] === "a") {
    console.log("It is a good string");
} else {
    console.log("It is not a good string");

}

// example 3


let day = 3;
switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("satarday");
        break;

    default:
        console.log("undefined");
        break;
}

// example 4

let num = 50;

if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("not good");
}

// example 5

// let name2 = prompt("enter your name");
// let age = prompt("enter your age");

// alert(`${name2} is ${age} year old`)

// example 6

let quater = 1;

switch (quater) {
    case 1:
        console.log("jan, feb ,march");
        break;
    case 2:
        console.log("april, may, june");
        break;
    case 3:
        console.log("july, august, sep");
        break;
    case 4:
        console.log("oct , nov, dec");
        break;

    default:
        console.log("invalid");
        break;
}
// example 7
let str7 = "applee";

if (str7.length > 5 && (str7[0] === "a" || str7[0] === "A")) {
    console.log("golden string");
} else {
    console.log("not golden string");

}

// example 8

let a8 = 1900;
let b8 = 20;
let c8 = 200;

if (a8 > b8 && a8 > c8) {
    console.log("a is greater");
}
else if (b8 > a8 && b8 > c8) {
    console.log("B is greater");

} else {
    console.log("c is greater");
}


// example 9

let num1 = 4582;
let num2 = 420;

if (num1 % 10 == num2 % 10) {
    console.log("true");
} else {
    console.log("false");
}

// example 10 (PART 3)

let msg = "  hello!                 ";

console.log(msg.trim().toUpperCase());

// example 11

let name11 = "ApnaCollege";

console.log(name11.slice(4, 9));
console.log(name11.indexOf("na"));
console.log(name11.replace("Apna", "Our"));
console.log(name11.slice(4).replace("l", "t"));

// example 12 (using shift and unshift)

let start = ['january', 'july', 'march', 'august'];

start.shift();
start.shift();
start.unshift('june');
start.unshift('july');
console.log(start);

// example 13 (using slice)
let start2 = ['january', 'july', 'march', 'august'];

start2.splice(0, 2, 'july', 'june');

console.log(start2);

// example 14 (reverse the array then find index no of a string)

let languages = ['c', 'c++', 'html', 'js', 'java', 'python'];

console.log(languages.reverse().indexOf('js'));

// example 15

let game = [['x', null, 'O'], [null, 'O', null], ['O', null, 'X']];


game[0][1] = 'O';
console.log(game);

// exapmle 16 Write a JavaScript program to get the first n elements of an array.[n can be any positive number].Forexample : for array [7,9,0,-2] and n=3

let num16 = [7, 9, 8, -2];

num16 = num16.slice(0, 3);

console.log(num16);

// exapmle 17 Write a JavaScript program to get the last n elements of an array.[n can be any positivenumber].Forexample : for array [7,9,0,-2] and n=3

let num17 = [7, 9, 8, -2];

num17 = num17.slice(num17.length - 2);

console.log(num17);

// example 18 check is string is empty or not

let name18 = "d";

if (name18.length === 0) {
    console.log('true');
} else {

    console.log('false');
}

// example 20 check at index no the character is in lowercase or not

let name20 = 'SHIAVNSH';

if (name20[2] === name20[2].toLowerCase()) {
    console.log('true');
} else {
    console.log('false');

}

// example 21

let name21 = "     shivansh             ";

console.log(name21.trim());

// example 22

let arr=["hello", 'a', 23, 64, 99, -6];

console.log(arr.includes(23));