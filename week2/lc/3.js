function getTotalPrice(customer) {
    const listProduct = {
        "Asus ROG": 25000000,
        "Lenovo Legion": 22000000,
        "Zyrex 1945": 7000000,
        "HP Omen": 20000000,
        "Acer Predator": 21000000,
    };
    // Insert your code here

    let prices = 0;
    customer.products.forEach((item) => {
        let [product, qty] = item;
        prices += listProduct[product] * qty;
    });

    return customer.member ? prices * 0.1 : prices;
}

let customer = {
    name: "Fajrin",
    products: [
        ["Asus ROG", 2],
        ["Lenovo Legion", 3],
    ],
    member: true,
};

console.log(getTotalPrice(customer)); // 11600000
/**
 Proses
 Fajrin membeli 2 Asus ROG, dimana harga satuan dari Asus ROG adalah 25000000 untuk membeli 2 Asus ROG dibutuhkan 50000000
 Fajrin membeli 3 Lenovo Legion, dimana harga satuan dari Lenovo Legion adalah 22000000 untuk membeli 3Lenovo Legion dibutuhkan 66000000
 Dari dua barang yang ingin dibeli Fajrin maka total belanja Fajrin adalah 116000000, dan dikarenakan Fajrin adalah member dari Tokosidia
 maka akan diberikan 10% discount, oleh karena itu total yang harus dibayar oleh Fajrin adalah 104400000
*/
// ===== //

function getStock(items) {
    // Insert your code here
    let stock = {};
    items.forEach((product) => {
        if (stock[product] == undefined) {
            stock[product] = 1;
        } else {
            stock[product]++;
        }
    });
    return stock;
}

console.log(
    getStock([
        "Asus ROG",
        "Asus ROG",
        "Asus ROG",
        "Asus ROG",
        "Lenovo Legion",
        "Lenovo Legion",
        "Lenovo Legion",
        "HP Omen",
        "HP Omen",
    ])
);

/**
 * {
 *  'Asus ROG': 4,
 *  'Lenovo Legion': 3,
 *  'HP Omen': 2
 * }
 */
