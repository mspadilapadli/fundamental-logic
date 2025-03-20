// * 1

let line = ["Padila"];

function antrian(line, person) {
    line.push(person);
    return line;
}
console.log(antrian(line, "Snow"));

// * 2
function panggilAntrian(line) {
    line.shift();
    return line;
}
console.log(panggilAntrian(line));

// * 3
function tumpukan(line, title) {
    line.unshift(title);
    return line;
}
console.log(tumpukan(line, "Jon"));
