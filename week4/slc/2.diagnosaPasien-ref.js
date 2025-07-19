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
        for (let i = 0; i < database.flu.ciri.length; i++) {
            const ciriFlu = database.flu.ciri[i];
            if (gejala == ciriFlu) {
                indikasiFlu++;
                break;
            }
        }
        for (let i = 0; i < database.antrax.ciri.length; i++) {
            const ciriAntrax = database.antrax.ciri[i];
            if (gejala == ciriAntrax) indikasiAntrax++;
        }
    });

    //  console.log(indikasiFlu, indikasiAntrax);

    if (indikasiFlu > indikasiAntrax) diagnosa = "flu";
    else if (indikasiFlu < indikasiAntrax) diagnosa = "antrax";
    else if (!diagnosa || indikasiFlu == indikasiAntrax) diagnosa = "ambigu";

    return diagnosa;
}

console.log(
    cariPenyakit(
        {
            nama: "thanos",
            keluhan: ["sulit bernafas", "lemas", "demam", "batuk darah"],
        },
        db_penyakit
    )
);
//Karena simptom untuk penyakit antrax lebih banyak, maka Thanos dinyatakan sakit 'Antrax.
//Output: 'antrax'

console.log(
    cariPenyakit(
        {
            nama: "heri wahyudianto",
            keluhan: ["mata berair", "berkunang kunang"],
        },
        db_penyakit
    )
);
// Output: 'ambigu'
