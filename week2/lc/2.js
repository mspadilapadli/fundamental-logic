function validateKeyword(keyword) {
    // Your code here
    if (typeof keyword !== "string") return `invalid input`;
    if (keyword.length < 3) return `invalid minimum length`;
    return keyword;
}

console.log(validateKeyword("Baju"));
// Baju

console.log(validateKeyword("Bunga"));
// Bunga

console.log(validateKeyword("Baj"));
// Baj

console.log(validateKeyword("ba"));
// invalid minimum length

console.log(validateKeyword(4));
// invalid input

///======///
function productSearch(data, keyword) {
    // Your code here

    let keywordValidated = validateKeyword(keyword);
    if (keywordValidated != keyword) return keywordValidated;

    //* manual
    let foundResult = [];
    data.products.forEach((product) => {
        if (product === keywordValidated) {
            foundResult.push(product);
        }
    });

    //* filter()
    //   let foundResult = data.products.filter(
    //       (product) => product == keywordValidated
    //   );

    return {
        name: data.name,
        store: data.store,
        foundResult,
    };
}

const data = {
    name: "Jaya",
    store: "Maju Jaya",
    products: ["Baju Koko", "Baju Anak", "Baju Bunga", "Sepatu Putih"],
};

console.log(productSearch(data, "Baju Koko"));
// { name: 'Jaya', store: 'Maju Jaya', foundResult: [ 'Baju Koko' ] }

console.log(productSearch(data, "Baju Bunga"));
// { name: 'Jaya', store: 'Maju Jaya', foundResult: [ 'Baju Bunga' ] }

console.log(productSearch(data, "Baj"));
// { name: 'Jaya', store: 'Maju Jaya', foundResult: [] }

console.log(productSearch(data, "ba"));
// 'invalid minimum length'

console.log(productSearch(data, 4));
// 'invalid input'
