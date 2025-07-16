/*
Buatlah sebuah function editArrayOfObject yang merubah salah 1 data array of object
input function ini ada 3 parameter
- arr (data array of object)
- input (data object baru yang akan menggantikan object yang lama)
- id (data number yang mempresentasikan id dari object yang akan dirubah)

output dari function ini ada array of object yang sudah berubah data salah 1 objectnya dengan syarat
- Apabila id ditemukan di data array, maka data dengan id yang dipilih akan dirubah
- apabila id tidak ditemukan maka tampilkan 'id tidak ditemukan'
*/
// * V1 : langsung ganti value dari properti id yang di cari.
function editArrayOfObject(arr, input, id) {
    //*manual
    for (let i = 0; i < arr.length; i++) {
        const indexi = arr[i];
        if (id === indexi.id) {
            indexi.name = input.name;
            indexi.age = input.age;
            return arr;
        }
    }
    return "Id tidak ditemukan";

    //* find()
    let foundId = arr.find((list) => list.id == id);
    if (!foundId) return `Id tidak ditemukan`;

    foundId.name = input.name;
    foundId.age = input.age;

    return arr;
}

// * V2 : mengaplikasikan flaging/swapped.
function editArrayOfObjectSwapped(arr, input, id) {
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
        const indexi = arr[i];
        if (id === indexi.id) {
            indexi.name = input.name;
            indexi.age = input.age;
            swapped = true;
        }
    }
    if (swapped) {
        return arr;
    } else {
        return "Id tidak ditemukan";
    }
}

let multiArr = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(editArrayOfObject(multiArr, { name: "Acing Wae", age: 52 }, 2));
// [
//     { id: 1, name: 'Marco Tiger', age: 26 },
//     { id: 2, name: 'Acing Wae', age: 52 },
//     { id: 3, name: 'Kris Evan', age: 36 },
//     { id: 4, name: 'Robert Downey', age: 46 }
// ]

let multiArr2 = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(editArrayOfObject(multiArr, { name: "Acing Wae", age: 52 }, 5));
// 'id tidak ditemukan'
