/*
Buatlah sebuah function deleteArrayOfObject yang menghapus salah 1 data array of object
input function ini ada 2 parameter
- arr (data array of object)
- id (data number yang mempresentasikan id dari object yang akan dirubah)

output dari function ini ada array of object yang sudah berubah data salah 1 objectnya dengan syarat
- Apabila id ditemukan di data array, maka data dengan id yang dipilih akan dihapus
- apabila id tidak ditemukan maka akan menampilkan pesan 'id tidak ditemukan'
*/

function deleteArrayOfObject(arr, id) {
    //* manual flaging
    let result = [];
    let findId = false;
    for (let i = 0; i < arr.length; i++) {
        const user = arr[i];
        if (user.id == id) {
            findId = true;
        } else {
            result.push(user);
        }
    }

    return findId
        ? result
        : `Id tidak ditemukan
    `;

    //* find() & filter()
    let foundId = arr.find((user) => user.id == id);
    if (!foundId) return `Id tidak ditemukan`;

    return arr.filter((user) => user.id != foundId.id);
}

let multiArr = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(deleteArrayOfObject(multiArr, 2));
// [
//     { id: 1, name: 'Marco Tiger', age: 26 },
//     { id: 3, name: 'Kris Evan', age: 36 },
//     { id: 4, name: 'Robert Downey', age: 46 }
// ]

let multiArr2 = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(deleteArrayOfObject(multiArr, 5));
// id tidak ditemukan
// let test = { id: 2, name: "Acong Budiman", age: 52 };
// console.log(test);
// delete test;
// console.log(test);
