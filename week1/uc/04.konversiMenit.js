let detik = 120;

let menit = Math.floor(detik / 60);
let sisaDetik = detik % 60;

console.log(
    sisaDetik < 10 ? `${menit}:0${sisaDetik}` : `${menit}:${sisaDetik}`
);

// =========menggunakan padStart=============
// * menggunakan padStart
function convertDetikToMenitDetik(detik) {
    // Hitung menit
    const menit = Math.floor(detik / 60);

    // Hitung sisa detik
    const sisaDetik = detik % 60;

    // Format output dengan leading zero jika diperlukan
    const menitString = menit.toString().padStart(2, "0");
    const detikString = sisaDetik.toString().padStart(2, "0");

    // Kembalikan hasil dalam format menit:detik
    return `${menitString}:${detikString}`;
}

// Contoh penggunaan
let detik1 = 120;
let detik2 = 44;
let detik3 = 61;

console.log(convertDetikToMenitDetik(detik1)); // Output: 1:28
console.log(convertDetikToMenitDetik(detik2)); // Output: 0:44
console.log(convertDetikToMenitDetik(detik3)); // Output: 1:01

//* string.padStart(targetLength, padString);
//  padStart adalah metode di JavaScript yang digunakan untuk menambahkan karakter di awal string hingga string mencapai panjang tertentu. Ini sangat berguna untuk memastikan bahwa string memiliki panjang yang konsisten, misalnya untuk format tanggal, waktu, atau angka yang selalu memiliki digit tertentu.
// *  patameter
// * targetLength: Panjang target dari string akhir setelah padding. Jika panjang string asli sudah lebih besar atau sama dengan targetLength, maka string asli tidak akan diubah.
// * padString: Karakter atau string yang akan ditambahkan di awal string asli untuk mencapai targetLength. Jika padString lebih panjang dari sisa panjang yang diperlukan, hanya sebagian dari padString yang akan digunakan.

// ex :
// let str = '5';
// console.log(str.padStart(2, "0")); // Output: 05

let detik5 = 123;
let menit5 = Math.floor(detik5 / 60);
let sisaDetik5 = detik5 % 60;

//  if else
if (sisaDetik5 < 10) {
    console.log(`${menit5}:0${sisaDetik5}`);
} else {
    console.log(`${menit5}:${sisaDetik5}`);
}

// ternary
sisaDetik5 < 10
    ? console.log(`${menit5}:0${sisaDetik5}`)
    : console.log(`${menit5}:${sisaDetik5}`);

// function
function secondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let reminingSeconds = seconds % 60;

    let minutesString = minutes.toString().padStart(2, "0");
    let secondsString = reminingSeconds.toString().padStart(2, "0");

    return `${minutesString}:${secondsString}`;
}

console.log(secondsToMinutes(187));
