/*
    Buatlah sebuah proses yang menerima 2 buat input kata (string) dan juga huruf (string). Aplikasi ini akan menghasilkan output berupa string beserta number yang mendeskripsikan total dari huruf yang dicari;

    contoh
    input: 
    - kata: 'i love javascript'
    - huruf: 'a'
    output: 'jumlah huruf a ada 2'

    contoh 2
    input: 
    - kata: 'javascript is so cool'
    - huruf: 'o'
    output: 'jumlah huruf o ada 3'
*/

let kata = "javascript is so cool";
let huruf = "a";
let totalHurufYangDicari = 0;

for (let i = 0; i < kata.length; i++) {
    const index = kata[i];
    if (index === huruf) {
        totalHurufYangDicari++;
    }
}

console.log(totalHurufYangDicari);

// * 2
let totalHurufYangDicari2 = 0;
kata.split("").forEach((e) => {
    if (e === huruf) {
        totalHurufYangDicari2++;
    }
});
console.log(totalHurufYangDicari2);

// * 3 one liner
let totalHurufYangDicari3 = 0;

totalHurufYangDicari3 = [...kata].filter((e) => e === huruf).length;

console.log(totalHurufYangDicari3);
