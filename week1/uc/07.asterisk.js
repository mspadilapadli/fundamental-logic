// *1
let row1 = 5;
for (let i = 0; i < row1; i++) {
    console.log("*");
}
// result row1
// *
// *
// *
// *
// *

// *2
let row2 = 5;
for (let i = 0; i < row2; i++) {
    let star = "";
    //  console.log((star += "*"));
    for (let j = 0; j < row2; j++) {
        star += "*";
    }
    console.log(star);
}
// result row2
// *****
// *****
// *****
// *****
// *****

// *3
let row3 = 5;
for (let i = 1; i <= row3; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star);
}

// *repeat
// '*'.repeat(i): Mengulangi karakter * sebanyak i kali, di mana i adalah nomor baris. (build in function)
for (let i = 1; i <= row3; i++) {
    console.log("R".repeat(i));
}

// * 3.1
let row31 = 5;
for (let i = 0; i < row31; i++) {
    let symbol = "";
    for (let j = 0; j <= i; j++) {
        symbol += "*";
    }
    console.log(symbol);
}

// result row3 & row31
// *
// **
// ***
// ****
// *****

// *4
let row4 = 5;
for (let i = 0; i < row4; i++) {
    let star = "";
    for (let j = 0; j < row4 - i; j++) {
        star += "*";
    }
    console.log(star);
}

// *repeat
for (let i = row4; i > 0; i--) {
    console.log("R".repeat(i));
}

// * 4.1
let row41 = 5;
for (let i = 0; i < row41; i++) {
    let symbol = "";
    for (let j = i; j < row4; j++) {
        symbol += "*";
    }
    console.log(symbol);
}

// result row4 & row41
// *****
// ****
// ***
// **
// *

//  * 5

let row5 = 5;
for (let i = 0; i < row5; i++) {
    let symbol = "";
    for (let j = 1; j < row5 - i; j++) {
        symbol += "|";
    }
    for (let k = 0; k <= i; k++) {
        symbol += "*";
    }
    console.log(symbol);
}
// result row5
//     *
//    **
//   ***
//  ****
// *****

// * 6
let row6 = 5;
for (let i = 0; i < row6; i++) {
    let symbol = "";
    for (let j = i; j < row6 - 1; j++) {
        symbol += " ";
    }
    for (let k = 0; k <= i; k++) {
        symbol += "*";
    }
    for (let l = 0; l < i; l++) {
        symbol += "*";
    }
    console.log(symbol);
}
// result row6
//     *
//    ***
//   *****
//  *******
// *********

// * 7
let row7 = 5;
for (let i = 0; i < row7; i++) {
    let symbol = "";
    for (let j = 0; j < i; j++) {
        symbol += " ";
    }
    for (let k = i; k < row7; k++) {
        symbol += "*";
    }
    for (let l = i; l < row7 - 1; l++) {
        symbol += "*";
    }
    console.log(symbol);
}
// result row7
// *********
//  *******
//   *****
//    ***
//     *

// * 7.2
let row8 = 5;
for (let i = 0; i < row8; i++) {
    let symbol = "";
    for (let j = 0; j < i; j++) {
        symbol += " ";
    }
    for (let k = 0; k < row8 - i; k++) {
        symbol += "*";
    }
    for (let l = 0; l < row8 - 1 - i; l++) {
        symbol += "*";
    }
    console.log(symbol);
}
