/*
Baby Boomer, Gen X, Gen Y, Gen Z

Berikut adalah beberapa istilah generasi berdasarkan tahun kelahirannya:

Baby boomer, kelahiran 1944 s.d 1964
Generasi X, kelahiran 1965 s.d 1979
Generasi Y (Millenials), kelahiran 1980 s.d 1994
Generasi Z, kelahiran 1995 s.d 2015
Buat sebuah proses yang menerima 2 input berupa nama (string) dan tahun (number). function akan mengeluarkan output berupa string berisikan nama dan generasinya seperti pada contoh output berikut.

input:
- nama: Santi
- tahun: 1994
output: 'Santi, berdasarkan tahun lahir anda tergolong Generasi Y'

Algoritma :
1.bandingkan nilai dari tahun lahir sesuai dengan kondisi yang ada di soal.

Timer :
1. 6:30
2. 7:27
3.


*/

let nama = "Santi";
let tahun = 1980;
let generasi = "";

if (tahun >= 1944 && tahun <= 1964) {
  generasi = "Baby boomer";
} else if (tahun >= 1965 && tahun <= 1979) {
  generasi = "Generasi X";
} else if (tahun >= 1980 && tahun <= 1994) {
  generasi = "Generasi Y (Milenial)";
} else if (tahun >= 1995 && tahun <= 2015) {
  generasi = "Generasi Z";
}
console.log(`${nama} berdasarkan tahun lahir anda tergolong ${generasi}`);
