//* 1. wihtout build-in function

let kata = "i love javascript";
let newKata = "";
let dict = "aiueo";

for (let i = 0; i < kata.length; i++) {
    const index = kata[i];
    isVowel = false;
    for (let j = 0; j < dict.length; j++) {
        const indexJ = dict[j];
        if (index === indexJ) {
            isVowel = true;
            break;
        }
    }

    if (isVowel) {
        newKata += "$";
    } else {
        newKata += index;
    }
}
console.log(newKata);

// * with build in function
let newKata2 = "";
for (let i = 0; i < kata.length; i++) {
    const index = kata[i];
    if (dict.includes(index)) {
        newKata2 += "$";
    } else {
        newKata2 += index;
    }
}
console.log(newKata);

// * build-in function with chaining
let newKata3 = kata
    .split("")
    .map((char) => {
        if (dict.includes(char)) {
            return "$";
        } else {
            return char;
        }
    })
    .join("");

console.log(newKata3);
