/*
Buatlah sebuah filterNumberByParam yang menerima 2 parameter angka (array) dan param (string), Function akan menghasilkan 1 array baru yang sudah terfilter berdasarkan param yang dikirimkan

contoh
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'genap'

ourput: 
[2, 4, 6, 8]

========
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'ganjil'

ourput: 
[1, 3, 5, 7]
========
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'test'

ourput: 
'param harus genap atau ganjil'
*/

//*1 manual
// function filterNumberByParam(angka, param) {
//     let result = [];
//     if (param != "ganjil" && param != "genap")
//         return "param harus genap atau ganjil";

//     angka.forEach((el) => {
//         if (param == "ganjil" && el % 2 != 0) {
//             result.push(el);
//         } else if (param == "genap" && el % 2 == 0) {
//             result.push(el);
//         }
//     });

//     return result;
// }

//*2 build in function filter
// function filterNumberByParam(angka, param) {
//     let result = [];
//     if (param == "genap") {
//         result = angka.filter((num) => num % 2 == 0);
//     } else if (param == "ganjil") {
//         result = angka.filter((num) => num % 2 == 1);
//     } else {
//         return "param harus genap atau ganjil";
//     }

//     return result;
// }

//* 3 elegan with object
// function filterNumberByParam(angka, param) {
//     const filterMap = {
//         genap: (num) => num % 2 === 0,
//         ganjil: (num) => num % 2 !== 0,
//     };

//     return filterMap[param]
//         ? angka.filter(filterMap[param])
//         : "param harus genap atau ganjil";
// }

//*4 one liner
function filterNumberByParam(angka, param) {
    return param != "genap" && param != "ganjil"
        ? "param harus genap atau ganjil"
        : angka.filter((e) => (param == "genap" ? e % 2 == 0 : e % 2 != 0));
}

console.log(filterNumberByParam([1, 32, 123, 12, 543, 544], "ganjil")); // [1, 123, 543]
console.log(filterNumberByParam([43, 43, 32, 43, 43, 21, 22], "genap")); // [32, 22]
console.log(filterNumberByParam([1, 2, 3], "ganjul")); // 'param harus genap atau ganjil'
