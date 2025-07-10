function minMax(prices) {
    // Your code here
    let min = Infinity,
        max = 0;
    prices.forEach((pricesList) => {
        pricesList.forEach((price) => {
            if (price < min) min = price;
            if (price > max) max = price;
        });
    });

    return [min, max];
}

//* flat()
// function minMax(prices) {
//     // Your code here
//     let min = Infinity,
//         max = 0;

//     prices.flat().forEach((price) => {
//         if (price < min) min = price;
//         if (price > max) max = price;
//     });

//     return [min, max];
// }

// EXAMPLE;

let listPrice1 = [
    [19000, 5000, 42000, 2000, 77000],
    [10000, 30000, 5000, 500000],
    [8500, 400000],
];

console.log(minMax(listPrice1));
// [2000, 500000]

let listPrice2 = [
    [9000, 3000, 22000, 100000, 7000],
    [6000, 3500, 11000],
    [5000, 300000, 3000, 52000],
];

console.log(minMax(listPrice2));
// [ 3000, 300000 ]
