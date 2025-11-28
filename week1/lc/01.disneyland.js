let wahana = "Wahana Selatan";
let usia = 1;
let saldo = 140000;
let tarif;
let result;

//* v2

if (wahana != "Wahana Utara" && wahana != "Wahana Selatan") {
    console.log("Tiket tidak ditemukan");
} else {
    // get kagtegori
    const kategori =
        usia >= 2 && usia <= 12
            ? "Anak-anak"
            : usia >= 13 && usia <= 49
            ? "Dewasa"
            : usia >= 50
            ? "Lansia"
            : "";

    // get terif
    if (wahana === "Wahana Utara") {
        if (kategori == "Anak-anak") tarif = 85_000;
        if (kategori == "Dewasa" || kategori == "Lansia") tarif = 125_000;
    } else if (wahana === "Wahana Selatan") {
        if (kategori == "Anak-anak") tarif = 143_000;
        if (kategori == "Dewasa" || kategori == "Lansia") tarif = 165_000;
    }

    if (!kategori) {
        result = "Dilarang Masuk!";
    } else {
        if (saldo >= tarif) {
            result = `Sisa saldo anda adalah RP.${
                saldo - tarif
            }. Selamat bermain`;
        } else {
            result = `Sisa saldo anda kurang Rp.${
                tarif - saldo
            }. Tidak cukup untuk membeli tiket`;
        }
    }

    console.log(result);
}

//*v1

// if (usia <= 1) {
//     result = "Dilarang Masuk!";
// } else {
//     if (wahana === "Wahana Utara") {
//         if (usia >= 2 && usia <= 12) {
//             tarif = 85_000;
//         } else if (usia >= 13 && usia <= 49) {
//             tarif = 125_000;
//         } else if (usia >= 50) {
//             tarif = 125_000;
//         }
//     } else if (wahana === "Wahana Selatan") {
//         if (usia >= 2 && usia <= 12) {
//             tarif = 143_000;
//         } else if (usia >= 13 && usia <= 49) {
//             tarif = 165_000;
//         } else if (usia >= 50) {
//             tarif = 165_000;
//         }
//     }

//     if (tarif) {
//         if (saldo >= tarif) {
//             result = `Sisa saldo anda adalah RP.${
//                 saldo - tarif
//             }. Selamat bermain`;
//         } else {
//             result = `Sisa saldo anda kurang Rp.${
//                 tarif - saldo
//             }. Tidak cukup untuk membeli tiket`;
//         }
//     } else {
//         result = "Tiket tidak ditemukan!";
//     }
// }

// console.log(result);
