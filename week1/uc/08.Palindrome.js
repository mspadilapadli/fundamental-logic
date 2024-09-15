kata = "kasur rusa";

reversedWord = "";

for (let i = 0; i < kata.length; i++) {
    reversedWord += kata[kata.length - 1 - i];
}

console.log(reversedWord === kata ? "true" : "false");

// function
wordReversed = (kata) => {
    reversed = "";
    for (let i = 0; i < kata.length; i++) {
        reversed += kata[kata.length - 1 - i];
    }
    return reversed === kata ? "true" : "false";
};

console.log(wordReversed("katak"));
