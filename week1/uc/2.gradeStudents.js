let nama = "Padila";
let nilai = 50;

if (nilai >= 80 && nilai <= 100) {
    console.log("Nama : " + nama + "; score : A");
} else if (nilai >= 65 && nilai <= 79) {
    console.log("Nama : " + nama + "; score : B");
} else if (nilai >= 50 && nilai <= 64) {
    console.log("Nama : " + nama + "; score : C");
} else if (nilai >= 35 && nilai <= 49) {
    console.log("Nama : " + nama + "; score : D");
} else if (nilai >= 0 && nilai <= 34) {
    console.log("Nama : " + nama + "; score : E");
}

let score = "";
if (nilai >= 80 && nilai <= 100) {
    score = "A";
} else if (nilai >= 65 && nilai <= 79) {
    score = "B";
} else if (nilai >= 50 && nilai <= 64) {
    score = "C";
} else if (nilai >= 35 && nilai <= 49) {
    score = "D";
} else if (nilai >= 0 && nilai <= 34) {
    score = "E";
} else {
    score = "Invalid Score";
}
console.log(`Nama : ${nama}; score : ${score}`);

//* Note :
//Kode kedua lebih baik karena lebih fleksibel, mengurangi duplikasi kode, dan mudah dipelihara. Selain itu, penyimpanan hasil (score) dalam variabel memungkinkan untuk penggunaan di bagian kode lain, yang membuat kode lebih modular dan dapat diperluas di masa depan.
