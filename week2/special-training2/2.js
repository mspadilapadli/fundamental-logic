/*
time ;
1. 3m
2. 1,50 m
3. 1,10 m
Buatlah sebuah function reverseArr yang menerima 1 input arr (array). Funtion ini akan menghasilkan sebuah array baru yang urutannya dibalik dari belakang ke depan

contoh:
input:
- arr: [1, 2, 3, 4, 5];

output:
[5, 4, 3, 2, 1]
*/

function reverseArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[arr.length - 1 - i]);
    }
    return result;
}
console.log(reverseArr([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArr(["h", "e", "l", "l", "o"])); // ['o', 'l', 'l', 'e', 'h']
