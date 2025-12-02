/*
Buatlah sebuah function oldestPerson yang mencari person tertua berdasarkan umur
input function ini ada 1 parameter
- arr (data array of object)

output dari function ini adalah object dari 1 person dengan umur tertua
*/

// // * V2 : menggunakan nested for
// function oldestPersonV2(arr) {
//     let oldestAge = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const indexi = arr[i];
//         for (let j = 0; j < arr.length; j++) {
//             const indexj = arr[j];

//             if (oldestAge < indexj.age) {
//                 oldestAge = indexj.age;
//             }
//         }
//         // console.log(oldestAge, indexi.age);
//         if (oldestAge === indexi.age) {
//             return indexi;
//         }
//     }
// }

// // =======================================
// // * V1 : menggunakan for for.
// function oldestPersonV1(arr) {
//     let oldestAge = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const indexi = arr[i];
//         if (oldestAge < indexi.age) {
//             oldestAge = indexi.age;
//         }
//     }
//     for (let j = 0; j < arr.length; j++) {
//         const indexj = arr[j];
//         if (oldestAge === indexj.age) {
//             return indexj;
//         }
//     }
// }

// * V3 ref
function oldestPersonV1(arr) {
    //* manual
    // let result;
    // let oldestAge = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     const user = arr[i];
    //     if (user.age > oldestAge) {
    //         oldestAge = user.age;
    //         result = user;
    //     }
    // }
    // return result;

    //*Math.max()
    const ages = arr.map(({ age }) => age);
    const oldest = Math.max(...ages);
    return arr.find(({ age }) => oldest == age);

    //* one liner find-Math.max
    return arr.find(({ age }) => age == Math.max(...arr.map(({ age }) => age)));

    //*one liner reduce(), best practice
    return arr.reduce((oldest, user) =>
        user.age > oldest.age ? user : oldest
    );
}

let multiArr = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(oldestPersonV1(multiArr));
// console.log(oldestPersonV2(multiArr));
// { id: 2, name: 'Acong Budiman', age: 52 }
