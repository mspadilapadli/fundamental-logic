let board = [
    ["*", "*", "*", 10],
    ["*", "*", -5, -10, "*", 100],
    ["a", "A", "o", "b"],
];
// * 1
function vocalSeeker(data) {
    let vocals = "";
    let totalVocal = 0;
    let dict = `aAiIuUeEoO`;

    for (let i = 0; i < data.length; i++) {
        const indexI = data[i];
        for (let j = 0; j < indexI.length; j++) {
            const indexJ = indexI[j];
            for (let x = 0; x < dict.length; x++) {
                const indexX = dict[x];

                if (indexJ === indexX) {
                    vocals += indexJ;
                    totalVocal++;
                }
            }
        }
    }
    return `vocal ditemukan ${totalVocal} dan kumuplan vocal adalah ${vocals}`;
}

// *2 with build in function

function vocalSeeker2(data) {
    let vowels = `aAiIuUeEoO`;
    let foundVowel = data
        .flat()
        .filter((el) => typeof el === "string" && vowels.includes(el));
    return `vocal ditemukan ${
        foundVowel.length
    } dan kumpulan vocal adalah ${foundVowel.join("")}`;
}

console.log(vocalSeeker(board));
console.log(vocalSeeker2(board));
