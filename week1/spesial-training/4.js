/*
Buatlah sebuah proses yang menerima 1 input nilai berupa number. Aplikasi ini akan menghasilkan output berupa string yang menjelaskan apakah nilai tersebut bernilai ganjil atau genap

contoh input:
nilai = 5
output: '5 merupakan angka ganjil'

nilai = 10
output: '10 merupakan angka genap'

Algoritma :
1. lakukan operasi modulus 2 pada variabel nilai, 
jika ada sisa , maka angka ganjil
jika tidak ada sisa, maka genap.

Timer :
 1. 3:28
 2. 1:24
 3. 1:02
*/

let nilai = 1283901829045;

if (nilai % 2 === 0) {
  console.log(`${nilai} merupakan angka genap`);
} else {
  console.log(`${nilai} merupakan angka ganjil`);
}
