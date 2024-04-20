
function CreateBase(num) {
    return function (innernum) {
        console.log(innernum + num);
    };
}

var addSix = CreateBase(6);
addSix(10);
addSix(6);