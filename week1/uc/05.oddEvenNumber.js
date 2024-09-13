// *1
// console.log(` \nSoal 1`);
for (let i = 1; i <= 100; i += 3) {
    console.log(i % 2 === 0 ? `${i} - genap` : `${i} - ganjil`);
}

// *2
// console.log(` \nSoal 2`);
for (let i = 50; i <= 200; i += 5) {
    console.log(
        i % 3 === 0 ? `${i} - faktor 3` : `${i} - tidak habis dibagi 3`
    );
}

// *3
// console.log(` \nSoal 3`);
for (let i = 100; i <= 200; i += 7) {
    if (i % 8 === 0) {
        console.log(i);
    }
}
