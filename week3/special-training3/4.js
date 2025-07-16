/*
Buatlah sebuah function findId yang mencari 1 data di array of object berdasrkan id nya
input function ini ada 2 parameter
- arr (data array of object)
- id (data number yang mempresentasikan id dari object yang akan dirubah)

output dari function ini ada array of object yang sudah berubah data salah 1 objectnya dengan syarat
- Apabila id ditemukan di data array, maka data dengan id yang dicari akan ditampilkan sebagai output
- apabila id tidak ditemukan maka tampilkan pesan `Id tidak ditemukan`
*/

function findId(arr, id) {
    // tulis kode disini
    for (let i = 0; i < arr.length; i++) {
        const indexi = arr[i];
        // console.log(id + "===" + indexi.id);
        if (id === indexi.id) {
            return indexi;
        }
        // else {
        //     return "Id tidak ditemukan";
        // }
        //*jika menggunakan else disni , maka output akan selalu tidak di temukan kecuali id yg pertama,
        // * karena looping hanya berjalan 1 kali iterasi (id === index.id), di iterasi pertanam sudah mendapatkan hasil return yang di else if,
    }
    // *cara yang lebih tepat adalah dengan menggunakan return default. dimana return berada di luar looping.

    return "Id tidak ditemukan";

    //* manual
    for (let i = 0; i < arr.length; i++) {
        const list = arr[i];
        if (list.id == id) return list;
    }

    return `Id tidak ditemukan`;

    //* find()
    let foundId = arr.find((list) => list.id == id);
    return foundId ? foundId : `Id tidak ditemukan`;
}

let multiArr = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(findId(multiArr, 2));
//  { id: 2, name: 'Acing Wae', age: 52 }

let multiArr2 = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(findId(multiArr, 5));
// `Id tidak ditemukan`
