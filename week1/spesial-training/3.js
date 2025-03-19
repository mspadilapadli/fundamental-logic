/*
Buatlah sebuah proses yang akan menerima 1 input angka berupa number, dan akan menghasilkan sebuat output berupa string dengan aturan seperti yang dijelaskan di bawah ini:
- input number harus angka 1 - 4
- apabila angka adalah 1 maka outputnya 'Januari'
- apabila angka adalah 2 maka outputnya 'Februari'
- apabila angka adalah 3 maka outputnya 'Maret'
- apabila angka adalah 4 maka outputnya 'April'
- apabila angka selain 1 - 4 maka outputnya 'Nomor bulan harus 1 - 4'
*/

let angka = 1;
/**
 Algoritma :
 1. input angka .
 2. lakukan perbandingan konsisi sesuai dengan kondisi yang diminta .

 Timer :
 1. 4:47
 2. 1:36
 3. 1:33
 
 */

// switch (angka) {
//   case 1:
//     console.log("Januari");
//     break;
//   case 2:
//     console.log("Februari");
//     break;
//   case 3:
//     console.log("Maret");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   default:
//     console.log("Nomor bulan harus 1 -4");
//     break;
// }

switch (angka) {
    case 1:
        console.log("Januari");
        break;
    case 2:
        console.log("Februari");
        break;
    case 3:
        console.log("Maret");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Nomor bulan harus 1-4");
        break;
}
