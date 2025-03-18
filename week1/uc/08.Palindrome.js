kata = "kasur rusa";

reversedWord = "";

for (let i = 0; i < kata.length; i++) {
    reversedWord + kata[kata.length - 1 - i];
}

console.log(reversedWord === kata ? "true" : "false");

// function test
wordReversed = (kata) => {
    reversed = "";
    for (let i = 0; i < kata.length; i++) {
        reversed += kata[kata.length - 1 - i];
    }
    return reversed === kata ? "true" : "false";
};

console.log(wordReversed("katak"));
console.log(wordReversed("katak"));

// * build on function reverse

wordReversed2 = (kata) => {
    kata = kata.replace(/\s/g, "").toLocaleLowerCase(); // Menghapus semua spasi (\s = whitespace). dan mengubah ke lowercase
    reversedKata = kata.split("").reverse().join("");
    return reversedKata === kata;
};
console.log(wordReversed2("kasur rusak"));

// create palindrome function
function palindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(palindrome("kasur rusak"));
console.log(isNaN(NaN));
