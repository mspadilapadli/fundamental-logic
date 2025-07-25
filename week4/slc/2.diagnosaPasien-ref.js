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
    let daftarObat = database[penyakit].obat;
    let obatTermurah = daftarObat[0][1];
    daftarObat.forEach((listObat) => {
        let [, hargaObat] = listObat;

        if (hargaObat < obatTermurah) {
            obatTermurah = hargaObat;
            obat = listObat;
        }
    });

    return obat;
}

// console.log(cariObat("flu", db_penyakit)); // [ 'jahe kuning', 4000 ]
// console.log(cariObat("antrax", db_penyakit)); // [ 'doxycycline', 20000 ]
// console.log(cariObat("ambigu", db_penyakit)); // 'tidak ada obat'
//=======================================================//

function cariHargaKonsultasi(penyakit, database) {
    // Your code here
    if (penyakit == "ambigu") return "tidak perlu ke dokter";
    return database[penyakit].konsultasi;
}

// console.log(cariHargaKonsultasi("flu", db_penyakit)); // 1000000
// console.log(cariHargaKonsultasi("antrax", db_penyakit)); // 50000
// console.log(cariHargaKonsultasi("ambigu", db_penyakit)); // 'tidak perlu dokter'
//=======================================================//
function diagnosaSemuaPasien(list_pasien, database) {
    // Your code here
    let result = {};

    list_pasien.forEach((pasien) => {
        let penyakit = cariPenyakit(pasien, database);

        let obatPenyakit = cariObat(penyakit, database);
        let obat = Array.isArray(obatPenyakit)
            ? obatPenyakit[0]
            : "tidak ada obat";
        let [, hargaObat] = obatPenyakit;

        let biayaKonsultasi = cariHargaKonsultasi(penyakit, database);
        let biaya =
            typeof biayaKonsultasi == "number"
                ? biayaKonsultasi + hargaObat
                : "tidak ada biaya";

        if (!result[penyakit]) {
            result[penyakit] = [];
        }
        result[penyakit].push({
            nama: pasien.nama,
            obat,
            biaya,
        });
    });

    return result;
}

console.log(
    diagnosaSemuaPasien(
        [
            {
                nama: "heri wahyudianto",
                keluhan: ["mata berair", "berkunang kunang"],
            },
            {
                nama: "joker",
                keluhan: ["nyeri otot", "lemas", "mual", "batuk kering"],
            },
            {
                nama: "thanos",
                keluhan: ["sulit bernafas", "lemas", "demam", "batuk darah"],
            },
            {
                nama: "bad boy",
                keluhan: ["cairan di paru-paru", "sakit bagian abdominal"],
            },
        ],
        db_penyakit
    )
);

/*
{
  ambigu: [
    {
      nama: 'heri wahyudianto',
      obat: 'tidak ada obat',
      biaya: 'tidak ada biaya'
    }
  ],
  flu: [
    { nama: 'joker', obat: 'jahe kuning', biaya: 1004000 },        
    { nama: 'bad boy', obat: 'jahe kuning', biaya: 1004000 }       
  ],
  antrax: [ { nama: 'thanos', obat: 'doxycycline', biaya: 70000 } ]
}
*/

console.log(
    diagnosaSemuaPasien(
        [
            {
                nama: "andi",
                keluhan: ["batuk kering", "demam", "batuk darah"],
            },
            {
                nama: "budi",
                keluhan: [
                    "tidak nyaman di dada",
                    "lemas",
                    "nyeri saat menelan",
                ],
            },
            {
                nama: "charlie",
                keluhan: ["lemas", "demam"],
            },
            {
                nama: "delta",
                keluhan: ["Sakit tenggorokan", "tidak nyaman di dada", "ngilu"],
            },
            {
                nama: "echo",
                keluhan: ["tidak enak badan", "nyeri otot", "sulit bernafas"],
            },
        ],
        db_penyakit
    )
);

/*
{
  ambigu: [
    { nama: 'andi', obat: 'tidak ada obat', biaya: 'tidak ada biaya' },
    {
      nama: 'charlie',
      obat: 'tidak ada obat',
      biaya: 'tidak ada biaya'
    },
    { nama: 'echo', obat: 'tidak ada obat', biaya: 'tidak ada biaya' }
  ],
  antrax: [
    { nama: 'budi', obat: 'doxycycline', biaya: 70000 },
    { nama: 'delta', obat: 'doxycycline', biaya: 70000 }
  ]
}
*/
//=======================================================//
