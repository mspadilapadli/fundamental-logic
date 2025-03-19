/*
Buatlah sebuah proses yang memiliki 1 input nilai berupa number dan akan menghasilkan output string seperti aturan dibawah ini :
- Jika nilai lebih dari atau sama dengan 100, sistem akan mengeluarkan “nilai anda 100 keatas”. 
- Jika nilai tidak 100 keatas tapi di atas 80, Maka sistem akan mengeluarkan “nilai anda diatas 80”. 
- Tapi, jika nilai tidak lebih besar dari 80, maka sistem mengeluarkan “nilai anda 80 kebawah” .
*/

let nilai = 111;

/**
 Algoritma :
 1. bandingkan angka yang di inputlkan :
 2. jika angka lebih dari sama dengan 100, ourput nya nilai anda 100 katas.
 3. jika angka lebih dari samaa denga 80 dan dibawah 100 makan output nilai anda di atas 80
 4. jika dibawah 80, outputnya nilai anda 80 kebawah
 
 Timer :
 1. 5:10
 2. 1:54
 3. 1:44
 */

if (nilai >= 100) {
    console.log("nilai anda di atas 100");
} else if (nilai >= 80 && nilai < 100) {
    console.log("nilai anda di atas 80");
} else if (nilai < 80) {
    console.log("nilai anda 80 kebawah");
}

nilai >= 100
    ? console.log(`nilai anda di atas 100`)
    : nilai < 100 && nilai >= 80
    ? console.log(`nilai anda di atas 80`)
    : console.log(`nilai anda dibawah 80`);
