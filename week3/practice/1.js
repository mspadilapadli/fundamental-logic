/**
 * Buatlah sebuah object dari hewan, yang memiliki beberapa properti
 * - Nama hewan
 * - Habitat hewan
 * - Jumlah kaki hewan
 * - Jenis kelamin dari hewan
 *
 * Setelah membuat object seperti diatas jawablah pertanyaan dibawah ini
 * - Bagaimana cara mendapatkan nama hewan (console.log nama hewan yang dibuat
 * - Bagaimana cara jika saya ingin menambahkan properi baru ke hewan. contoh: menambahkan tipe hewan ( unggas, burung, dll)
 * - Dapatkah saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
 * - Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
 * - Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
 *  - Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
 *  - Tuliskanlah built in function yang bisa kita gunakan di dalam object?
 */

let animal = {
    nama: `kucing`,
    habitat: "rumah",
    "jumlah Kaki": 4,
    gender: "jantan",
};
// * - Bagaimana cara mendapatkan nama hewan (console.log nama hewan yang dibuat
// console.log(animal.nama);
// console.log(animal["nama"]);
// console.log(animal["jumlah Kaki"]);

// * - Bagaimana cara jika saya ingin menambahkan properi baru ke hewan. contoh: menambahkan tipe hewan ( unggas, burung, dll)\
animal["tipe Animal 2"] = "test1";
animal.tipeAnimal = "mamalia";
// console.log(animal["tipeAnimal"]);

// * - Dapatkah saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
animal.familyGen = [`persia`, `kampung`, "anggora"];
// console.log(animal.familyGen[0]);
// console.log(animal[`familyGen`][0]);

// * - Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
// delete animal.tipeAnimal;
delete animal["tipeAnimal"];
// console.log(animal);

// * - Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
animal.majikan = {
    name: "Padila",
    age: 25,
};
// console.log(animal.majikan.name);
// console.log(animal["majikan"]["name"]);
// console.log(animal.majikan["name"]);
// console.log(animal["majikan"].name);

// *  - Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
for (const key in animal) {
    console.log(key, ":", animal[key]);
    // console.log(`${key} :`);
}

//  *  - Tuliskanlah built in function yang bisa kita gunakan di dalam object?
/*
- call()
- apply()
- bind()
- this
 */
