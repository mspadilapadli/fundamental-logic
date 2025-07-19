const db_penyakit = {
    flu: {
        ciri: [
            "lemas",
            "sesak nafas",
            "ngilu",
            "tidak enak badan",
            "mual",
            "diare",
            "demam",
            "nyeri otot",
            "batuk kering",
            "gangguan pernafasan akut",
            "cairan di paru-paru",
            "sakit bagian abdominal",
            "tidak nafsu makan",
        ],
        obat: [
            ["kunyit", 10000],
            ["jahe merah", 5000],
            ["jahe kuning", 4000],
        ],
        konsultasi: 1000000,
    },
    antrax: {
        ciri: [
            "Sakit tenggorokan",
            "sulit bernafas",
            "demam",
            "tidak nyaman di dada",
            "nyeri otot",
            "nyeri saat menelan",
            "mual",
            "batuk darah",
            "lemas",
        ],
        obat: [
            ["ciprofloxacin", 45000],
            ["doxycycline", 20000],
            ["penicilin", 35000],
        ],
        konsultasi: 50000,
    },
};

function cariPenyakit(pasien, database) {
    // Your code here
    let diagnosa = "";
    let indikasiFlu = 0;
    let indikasiAntrax = 0;

    pasien.keluhan.forEach((gejala) => {
        //for loop flu
        for (let i = 0; i < database.flu.ciri.length; i++) {
            const ciriFlu = database.flu.ciri[i];
            if (gejala == ciriFlu) {
                indikasiFlu++;
                break;
            }
        }
        //*includes() flu
        // if (database.flu.ciri.includes(gejala)) indikasiFlu++;

        //for loop antrax
        for (let i = 0; i < database.antrax.ciri.length; i++) {
            const ciriAntrax = database.antrax.ciri[i];
            if (gejala == ciriAntrax) indikasiAntrax++;
        }
        //*includes() antrax
        //  if (database.antrax.ciri.includes(gejala)) indikasiAntrax++;
    });

    if (indikasiFlu > indikasiAntrax) diagnosa = "flu";
    else if (indikasiFlu < indikasiAntrax) diagnosa = "antrax";
    else if (!diagnosa || indikasiFlu == indikasiAntrax) diagnosa = "ambigu";

    return diagnosa;
}

// console.log(
//     cariPenyakit(
//         {
//             nama: "thanos",
//             keluhan: ["sulit bernafas", "lemas", "demam", "batuk darah"],
//         },
//         db_penyakit
//     )
// );
// //Karena simptom untuk penyakit antrax lebih banyak, maka Thanos dinyatakan sakit 'Antrax.
// //Output: 'antrax'

// console.log(
//     cariPenyakit(
//         {
//             nama: "heri wahyudianto",
//             keluhan: ["mata berair", "berkunang kunang"],
//         },
//         db_penyakit
//     )
// );
// // Output: 'ambigu'
//=======================================================//
function cariObat(penyakit, database) {
    // Your code here
    if (penyakit == "ambigu") return "tidak ada obat";
    let obat;
    let obatTermurah = Infinity;
    database[penyakit].obat.forEach((listObat) => {
        let [, hargaObat] = listObat;

        if (hargaObat < obatTermurah) {
            obatTermurah = hargaObat;
            obat = listObat;
        }
    });

    return obat;
}

console.log(cariObat("flu", db_penyakit)); // [ 'jahe kuning', 4000 ]
console.log(cariObat("antrax", db_penyakit)); // [ 'doxycycline', 20000 ]
console.log(cariObat("ambigu", db_penyakit)); // 'tidak ada obat'
//=======================================================//
//=======================================================//
//=======================================================//
