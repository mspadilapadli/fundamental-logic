let kata = NaN;
if (!kata && kata !== false) {
    console.log(`invalid data`);
} else if (typeof kata === "string") {
    console.log(`username ${kata}`);
} else if (typeof kata === "number" && kata !== 0) {
    console.log(`age ${kata}`);
} else if (typeof kata === `boolean`) {
    console.log(
        kata ? `thank you for agreeing` : `cannot proceed without agreeing`
    );
}

// create palindrome function
function palindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(palindrome("kasurr rusak"));
