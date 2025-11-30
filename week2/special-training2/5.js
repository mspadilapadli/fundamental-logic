/*
    buatlah sebuah function split yang akan menerima 2 parameter, str (string) dan param (string). Function ini berfungsi untuk memisahkan string menjadi array dimana param adalah parameter pemisahnya.

    contoh
    input: 
    - str: 'i love javascript'
    - param: ' '
    output: ['i', 'love', 'javascript'];

    contoh 2
    input:
    - str: 'javascript is so cool'
    - param: 'i'
    output: ['javascr', 'pt ', 's so cool']

    // s so cool
    // [javascr, pt , s so cool]
*/

function split(str, param) {
    let result = [];
    let temp = "";
    //*1
    for (let i = 0; i < str.length; i++) {
        const indexI = str[i];
        if (indexI == param) {
            result.push(temp);
            temp = "";
        } else {
            temp += indexI;
        }
        if (i == str.length - 1) result.push(temp);
    }

    //*2
    // [...str].forEach((el) => {
    //     if (el == param) {
    //         result.push(temp);
    //         temp = "";
    //     } else {
    //         temp += el;
    //     }
    // });
    // result.push(temp);

    return result;
}

// one liner build in function
// function split(str, param) {
//     return str.split(param);
// }

console.log(split("i love javascript", " ")); // ['i', 'love', 'javascript']
console.log(split("javascript is so cool", "i")); // ['javascr', 'pt ', 's so cool']
