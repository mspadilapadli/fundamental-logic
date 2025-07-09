function getPoints(history) {
    let itemPoint = {
        Moonlight: 120,
        Goldqueen: 550,
        "Beras Parist": 1200,
        "Minyak Fatma": 2500,
    };
    // write your code here
    let totalPoint = 0,
        belanjaanReport = {};
    history.forEach((item) => {
        totalPoint += itemPoint[item];

        if (belanjaanReport[item] == undefined) {
            belanjaanReport[item] = 1;
        } else {
            belanjaanReport[item]++;
        }
    });

    return {
        totalPoint: totalPoint,
        belanjaanReport: belanjaanReport,
    };
}

const history = [
    "Minyak Fatma",
    "Moonlight",
    "Beras Parist",
    "Minyak Fatma",
    "Goldqueen",
    "Beras Parist",
    "Moonlight",
    "Moonlight",
    "Moonlight",
    "Minyak Fatma",
    "Goldqueen",
    "Goldqueen",
    "Minyak Fatma",
    "Beras Parist",
    "Beras Parist",
    "Moonlight",
    "Moonlight",
    "Minyak Fatma",
    "Minyak Fatma",
];

// console.log(getPoints(history));
/**
{
  totalPoint: 22170,
  belanjaanReport: { 'Minyak Fatma': 6, Moonlight: 6, 'Beras Parist': 4, Goldqueen: 3 }
}
*/

function getPrizes(point) {
    // write your code here
    let listPrize = [
        [2000, "Voucher 10k", "Sticker", "Penggaris"],
        [5000, "Voucher 25k", "Kinderboy", "Tissue", "Piring"],
        [10000, "Payung", "Panci"],
    ];

    let gives = [];

    for (let i = 0; i < listPrize.length; i++) {
        const item = listPrize[i];
        for (let j = 1; j < item.length; j++) {
            const el = item[j];
            if (point > item[0]) {
                point -= item[0];
                gives.push(el);
            } else {
                break;
            }
        }
    }
    return gives;
}

console.log(getPrizes(22000));
// [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy', 'Tissue' ]

function betamart(pembeli) {
    // write your code here
}

console.log(
    betamart({
        name: "Ilham",
        histories: [
            "Moonlight",
            "Goldqueen",
            "Beras Parist",
            "Moonlight",
            "Goldqueen",
            "Beras Parist",
            "Minyak Fatma",
            "Minyak Fatma",
            "Minyak Fatma",
            "Moonlight",
            "Goldqueen",
            "Goldqueen",
            "Moonlight",
            "Beras Parist",
            "Beras Parist",
            "Minyak Fatma",
            "Minyak Fatma",
            "Moonlight",
            "Moonlight",
        ],
    })
);

/*
{
  name: 'Ilham',
  belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
  prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

console.log(
    betamart({
        name: "Kosasih",
        histories: [
            "Moonlight",
            "Moonlight",
            "Goldqueen",
            "Moonlight",
            "Minyak Fatma",
            "Goldqueen",
            "Beras Parist",
            "Beras Parist",
            "Beras Parist",
            "Moonlight",
            "Minyak Fatma",
            "Minyak Fatma",
            "Moonlight",
            "Goldqueen",
            "Goldqueen",
            "Goldqueen",
            "Beras Parist",
            "Moonlight",
            "Moonlight",
            "Beras Parist",
            "Beras Parist",
            "Minyak Fatma",
            "Minyak Fatma",
            "Goldqueen",
            "Goldqueen",
            "Moonlight",
            "Moonlight",
            "Moonlight",
            "Moonlight",
        ],
    })
);

/*
{
  name: 'Kosasih',
  belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
  prizes: [
    'Voucher 10k',
    'Sticker',
    'Penggaris',
    'Voucher 25k',
    'Kinderboy',
    'Tissue'
  ]
}
*/

console.log(betamart());
// Tidak ada pembeli yang belanja
