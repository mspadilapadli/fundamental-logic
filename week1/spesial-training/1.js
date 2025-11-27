/*
Halo pak, bu

Buatlah sebuah aplikasi yang menerima 2 input, yaitu nama dan kelamin yang bertipe data string. Untuk input data kelamin hanya ada 2 (pria atau wanita). Jika user menginputkan pria, cetak tulisan 'halo pak' diikuti dengan namanya, jika user memilih wanita, cetak tulisan 'halo bu' diikuti dengan namanya, seperti contoh output berikut.

contoh 1:
input:
nama: Amin
kelamin: pria
output: 'halo pak Amin'

contoh 2:
input: Tuti
kelamin: wanita
output: 'halo bu Tuti'

*/
let nama = "rino"; // isi variabel ini boleh diganti untuk mencoba kasus lain
let kelamin = "pria"; // isi variabel ini boleh diganti untuk mencoba kasus lain

/**
 * Algoritma :
 1. input data nama dan kelamin dalam varaible.
 2. bandingkan jika value kelamin adalah pria, maka tampiljkan halo pak <nama>
 3. jika wanita , maka tampilkan halo bu <name>


 Timer :
 1. 4 :45
 2.1:24
 3.1:02
 
 */
if (kelamin === "pria") {
    console.log(`halo pak ${nama}`);
} else if (kelamin === "wanita") {
    console.log(`halo bu ${nama}`);
}
kelamin === "pria"
    ? console.log(`halo pak ${nama}`)
    : console.log(`hallo bu ${nama}`);

console.log(kelamin === "pria" ? `halo pak ${nama}` : `halo bu ${nama}`);
