let nama = "Padila";
let nilai = 71;
let absen = 4;

if (nilai > 70 && absen < 5) {
    console.log("Selamat " + nama + " kamu lulus");
} else {
    console.log("Maaf " + nama + " kamu tidak lulus");
}

// ternary
console.log(nilai > 70 && absen < 5 ? `${nama} Lulus` : `${nama} Tidak Lulus`);
