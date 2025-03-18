let kalimat = " I believe I can code";
let dictionary = "aiueo";
let totalWord = 0;

for (let i = 0; i < kalimat.length; i++) {
    const index = kalimat[i].toLowerCase();
    if (
        index === " " &&
        kalimat[i - 1] !== " " &&
        kalimat[i - 1] !== undefined
    ) {
        totalWord++;
    } else if (i === kalimat.length - 1 && kalimat[i] !== " ") {
        totalWord++;
    }
}
console.log(totalWord);
