let kata = "13";
let balikKata = "";
let reversedWord = "";

// *1
for (let i = 0; i < kata.length; i++) {
    reversedWord += kata[kata.length - 1 - i];
}
console.log(reversedWord);

//*2
for (let i = kata.length - 1; i >= 0; i--) {
    const el = kata[i];

    balikKata += el;
}
console.log(balikKata);

//*3
let reversed = kata.split("").reverse().join("");
console.log(reversed);
