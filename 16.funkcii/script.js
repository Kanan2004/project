"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10
}

showFirstMessage("Hello world");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(4, 5));
// console.log(calc(4, 6));

const logger = function() {
    console.log("Hello");
};
logger();

const calc = (a, b) => a + b ;