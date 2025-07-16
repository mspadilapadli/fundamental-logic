/* time :
1. 4 m
2. 2m
3. 35s
Buatlah sebuah function pushValidationn yang menerima 2 parameter
- arr bertipe data array of string yang merupakan kumpulan dari beberapa data string
- value merupakan data yang akan diinputkan ke dalam array

function akan menghasilkan sebuah data array baru dengan persyaratan sbb
- apabila isi value merupakan data string, maka value akan ditambahkan ke dalam array
- apabila isi value bukan data string, maka function mengembalikan array aslinya tanpa ditambahkan data apapun

*/

function pushValidation(arr, value) {
    // tulis kode disini
    //* note output nya arra baru, jadi kode ini keliru, karna masih pakai arr bawaan. harus lebih teliti lagi apakah ouputnya cukup dengan array yang sama dengan argumen atau membuat array yang baru.

    // *V1 : pakai arr bawaan :
    // *ini bisa saja. tapi yang diminta adalah array baru.(ingat passing by reference, jika seperti ini, maka arr bawaannya juga kan ikut berubah.)
    // if (typeof value === "string") {
    //     arr.push(value);
    // }
    // return arr;

    // *===============================================================
    //  * V2 : pakai array baru , dengan menggunakan for untuk copy isi data arr ke arr result yang baru`.*/
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     const indexi = arr[i];
    //     result.push(indexi);
    // }
    // if (typeof value === "string") {
    //     result.push(value);
    // }

    // return result;

    //  * ? V3 : lebih simple menggunakan deep copy.

    let result = [...arr]; /*--> deep copy */
    if (typeof value !== "string") return result;
    result.push(value);

    return result;
}

console.log(pushValidation(["a", "b", "c", "d", "e"], "f")); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(pushValidation(["a", "b", "c", "d", "e"], 10)); // ['a', 'b', 'c', 'd', 'e']
console.log(pushValidation(["a", "b", "c", "d", "e"], false)); // ['a', 'b', 'c', 'd', 'e']
console.log(pushValidation(["a", "b", "c", "d", "e"], "160")); // ['a', 'b', 'c', 'd', 'e', '160']
