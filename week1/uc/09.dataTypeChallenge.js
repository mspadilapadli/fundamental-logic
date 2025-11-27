// *1
//good
let kata = 0;
if (typeof kata === "boolean") {
    kata
        ? console.log(`thank you for agreeing`)
        : console.log("cannot proceed without agreement");
} else if (!kata) {
    console.log(`invalid data`);
} else if (typeof kata == "string") {
    console.log(`username ${kata}`);
} else if (typeof kata === "number") {
    console.log(`age ${kata}`);
}

// *2
//minus empty string masih lolos
// let kata = "";
// if (typeof kata == "boolean") {
//     kata
//         ? console.log(`thank you for greeting`)
//         : console.log(`cannot proceed without agreement`);
// } else if (typeof kata == "string") {
//     console.log(`username ${kata}`);
// } else if (typeof kata == "number" && kata !== 0 && !isNaN(NaN)) {
//     console.log(`age ${kata}`);
// } else {
//     console.log("Invalid data");
// }

// // create palindrome function
// function palindrome(str) {
//     let reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
// }

// console.log(palindrome("kasurr rusak"));

//*3
//minus false masuk ke invalid data
// let kata = false;
// if (!kata) {
//     console.log(`invalid data`);
// } else if (typeof kata == "string") {
//     console.log(`username ${kata}`);
// } else if (typeof kata === "number") {
//     console.log(`age ${kata}`);
// } else if (typeof kata === "boolean") {
//     kata
//         ? console.log(`thank you for agreeing`)
//         : console.log("cannot proceed without agreement");
// }
