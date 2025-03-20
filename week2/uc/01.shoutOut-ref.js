// * 1
function shoutOut() {
    return "Halo Function!";
}

console.log(shoutOut());

// * 2
let num1 = 5;
let num2 = 6;

function calculateMultiply(a, b) {
    return a * b;
}

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// * 3
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence() {
    return `Nama saya ${name}, umur saya ${30}, alamat saya ${address}, dan saya punya hobby ${hobby}!`;
}

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
