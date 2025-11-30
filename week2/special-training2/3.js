/*
timer : 1
1. 10m`
2. 2,34 m
3. 2,15 m
Buatlah sebuah function sumArr yang menerima 1 parameter arr (array). Function ini akan mengeluarkan output jumlah atau kombinasi dari semua data di dalam array

contoh;
input:
- arr : [1, 2, 3, 4, 5]

output: 
15

hasil dari 1 + 2 + 3 + 4 + 5
=========
input:
- arr : ['h', 'e', 'l', 'l', 'o']

output:
'hello'
*/

// function sumArr(arr) {
//     let result = "";
//     arr.forEach((el) => {
//         if (typeof el == "number") {
//             result = +el;
//         }
//         if (typeof el == "string") {
//             result += el;
//         }
//     });

//     return result;
// }

function sumArr(arr) {
    //initial value tidak di tentukanm jadi otomatis initial value dari index 0
    // reduce bisa dilakukan selama masih dalam 1 type data array yang sama, jika berbeda type data dalam 1 attay, maka pendekatannya akan berberda
    return arr.reduce((r, e) => r + e);
}

console.log(sumArr([1, 2, 3, 4, 5])); // 15
console.log(sumArr(["h", "e", "l", "l", "o"])); // 'hello'
