/*
Buatlah sebuah proses yang menerima 2 input kata1 (string) dan kata2(string), dan akan mengeluarkan output jumlah setiap huruf di kata2 yang terdapat di kata1

contoh
input:
- kata1: 'javascript is so cool'
- kata2: 'aint'
output: 5
penjelasan =>
- jumlah huruf a di dalam kata1 : 2
- jumlah huruf i di dalam kata1 : 2
- jumlah huruf n di dalam kata1 : 0
- jumlah huruf t di dalam kata1 : 1
total : 2 + 2 + 1 = 5
*/

let kata1 = "javascript is so cool";
let kata2 = "aioue";
let totalHurufYangDicari = 0;

for (let i = 0; i < kata1.length; i++) {
    const index1 = kata1[i];
    for (let j = 0; j < kata2.length; j++) {
        const index2 = kata2[j];
        if (index1 === index2) {
            totalHurufYangDicari++;
        }
    }
}
console.log(totalHurufYangDicari);

// *2
let totalHurufYangDicari2 = 0;
kata1.split("").forEach((index1) => {
    kata2.split("").forEach((index2) => {
        if (index1 === index2) {
            totalHurufYangDicari2++;
        }
    });
});

console.log(totalHurufYangDicari2);

//* 3 one line & includes
let totalHurufYangDicari3 = [...kata1].filter((e) => kata2.includes(e)).length;

console.log(totalHurufYangDicari3);
