/*
    Buatlah sebuah proses yang menerima 2 buat input kata (string) dan juga huruf (string). Aplikasi ini akan menghasilkan output berupa number yang mendeskripsikan index dari huruf yang dicari;

    contoh
    input: 
    - kata: 'i love javascript'
    - huruf: 'a'
    output: 'huruf a yang pertama terdapat di index 8'

    contoh 2
    input: 
    - kata: 'javascript is so cool'
    - huruf: 'o'
    output: 'huruf o yang pertama terdapat di index 15'

    contoh 3
    input:
    - kata: 'my car'
    - huruf: 'o'
    output: 'huruf o tidak ditemukan'
*/

let kata = "i love javascript";
let huruf = "o";
let hasil;

// *1
for (let i = 0; i < kata.length; i++) {
    const index = kata[i];
    if (index === huruf) {
        hasil = i;
        break;
    } else {
        console.log("huruf tidak ditemukan");
    }
}
console.log(hasil);

// *2
// break cannot using in forEach
let hasil2;
kata.split("").forEach((char, i) => {
    if (char === huruf) {
        hasil2 = i;
        return;
    }
});
console.log(hasil2);

// * 3 one liner
// break cannot using in forEach
let hasil3;
hasil3 = [...kata].findIndex((e) => e == huruf);

console.log(hasil3);
