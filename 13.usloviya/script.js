"use strict";

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error')
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Mnogo')
// } else {
//     console.log('OK');
// }

// (num === 50) ?     console.log('OK') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('neverniy');
        break;
    case 100:
        console.log('neverniy');
        break;
    case 50:
        console.log('verniy');
        break;
    default:
        console.log('ne v etot raz');
        break;
}