let wahana = "Wahana dSelatan";
let usia = 28;
let saldo = 140_000;
let tarif;
let result;

if (usia <= 1) {
    result = "Dilarang Masuk!";
} else {
    if (wahana === "Wahana Utara") {
        if (usia >= 2 && usia <= 12) {
            tarif = 85_000;
        } else if (usia >= 13 && usia <= 49) {
            tarif = 125_000;
        } else if (usia >= 50) {
            tarif = 125_000;
        }
    } else if (wahana === "Wahana Selatan") {
        if (usia >= 2 && usia <= 12) {
            tarif = 143_000;
        } else if (usia >= 13 && usia <= 49) {
            tarif = 165_000;
        } else if (usia >= 50) {
            tarif = 165_000;
        }
    }

    if (tarif) {
        if (saldo >= tarif) {
            result = `Sisa saldo anda adalah RP.${
                saldo - tarif
            }. Selamat bermain`;
        } else {
            result = `Sisa saldo anda kurang Rp.${
                tarif - saldo
            }. Tidak cukup untuk membeli tiket`;
        }
    } else {
        result = "Tiket tidak ditemukan!";
    }
}

console.log(result);
