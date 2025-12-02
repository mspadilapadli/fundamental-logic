/*
Buatlah sebuah function filterArrayOfObject yang menmfilter data array of object
input function ini ada 2 parameter
- arr (data array of object)

output dari function ini ada array of object yang sudah terfilter dengan syarat
- data yang dihasilkan adalah data dari object yang lahir di tahun 1970 an
- asumsi tahun sekarang adalah tahun 2022
*/

// console.log(2022 - 26);

function filterArrayOfObject(arr) {
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     const user = arr[i];
    //     let birdYear = 2022 - user.age;
    //     if (birdYear >= 1970 && birdYear <= 1979) {
    //         result.push(user);
    //     }
    // }
    // return result;

    // //* filter()
    // return arr.filter((user) => {
    //     let birdYear = 2022 - user.age;
    //     return birdYear >= 1970 && birdYear <= 1979;
    // });

    //* param object distruct, one liner
    const currentYear = 2022;
    return arr.filter(
        ({ age }) => currentYear - age >= 1970 && currentYear - age <= 1979
    );
}

let multiArr = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(filterArrayOfObject(multiArr));
// [
//     { id: 2, name: 'Acong Budiman', age: 52 },
//     { id: 4, name: 'Robert Downey', age: 46 }
// ]
