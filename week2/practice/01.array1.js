// 1. Buatlah sebuah variabel dengan nama "animals"
let animals = "";
// 2. Isi variable tersebut dengan array yang memiliki 3 elemen string "kucing", "domba", "kuda"
animals = [`kucing`, `domba`, `kuda`];
// 3. Cetak element array pertama ("kucing")
console.log(animals[0]);
// 4. Cetak element array ketiga ("kuda")
console.log(animals[animals.length - 1]);

// 5. Ganti element ketiga dari array menjadi "kelinci"
// animals.pop();
// animals.push(`kelinci`);
// console.log(`${animals} <<< sbelum`);
animals[animals.length - 1] = `kelinci`;
// console.log(`${animals} <<< sesudah`);
// 6. Cetak element array ketiga ("kelinci")
console.log(animals[animals.length - 1]);

// 7. Gunakan property length untuk mencetak jumlah element di array
console.log(animals.length);
// 8. Gunakan loop for untuk mencetak nilai animals di console secara berurutan
// output:
// kucing
// domba
// kuda
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
