/*
Buatlah sebuah function filterArrayOfObjectByParams yang menmfilter data array of object
input function ini ada 2 parameter
- arr (data array of object)
- params (data array of string yang menjadi parameter pencarian)

output dari function ini ada array of object yang sudah terfilter dengan syarat
- data yang dihasilkan adalah data dari object yang namanya mengandung huruf yang terdapat di params
*/

// function filterArrayOfObjectByParams(arr, params) {
//* manual nested for & double flaging
// let result = [];
// arr.forEach((user) => {
//     let userName = user.name.toLowerCase();
//     let allMatced = true;
//     for (let i = 0; i < params.length; i++) {
//         const char = params[i].toLowerCase();
//         let found = false;
//         for (let j = 0; j < userName.length; j++) {
//             const charName = userName[j];
//             if (char == charName) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             allMatced = false;
//             break;
//         }
//     }
//     if (allMatced) result.push(user);
// });
// return result;
//* filter() & every()
// return arr.filter((user) =>
//     params.every((char) => user.name.includes(char))
// );
// }

//* one liner, filter(), every(), param distruct,
const filterArrayOfObjectByParams = (arr, params) =>
    arr.filter(({ name }) => params.every((char) => name.includes(char)));

let multiArr = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(filterArrayOfObjectByParams(multiArr, ["o", "r"]));
// [
//     { id: 1, name: 'Marco Tiger', age: 26 },
//     { id: 4, name: 'Robert Downey', age: 46 }
// ]

// *testing
// let o = false;
// let r = false;
// let test = [
//     ["Marco Tiger"],
//     ["Acong Budiman"],
//     ["Kris Evan"],
//     ["Robert Downey"],
// ];
// let result = [];
// for (let i = 0; i < test.length; i++) {
//     const indexi = test[i];

//     for (let j = 0; j < indexi.length; j++) {
//         const indexj = indexi[j];
//         console.log(indexj);

//         for (let k = 0; k < indexj.length; k++) {
//             const indexk = indexj[k];
//             console.log(indexk);
//             if (indexk === "o") {
//                 o = true;
//             }
//             if (indexk === "r") {
//                 r = true;
//             }
//         }
//         if (o && r) {
//             result.push(indexi);
//         }
//     }
// }

// console.log(o, r);
// console.log(result);
