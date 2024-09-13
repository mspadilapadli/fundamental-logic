// *1
let row1 = 5;
for (let i = 0; i < row1; i++) {
    console.log("*");
}

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
// '*'.repeat(i): Mengulangi karakter * sebanyak i kali, di mana i adalah nomor baris.
for (let i = 0; i < row3; i++) {
    console.log("R".repeat(i));
}

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
