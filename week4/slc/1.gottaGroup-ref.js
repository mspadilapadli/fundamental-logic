function findStrongest(arr) {
    // Your code here
    let strongestPokemon = "";
    let strongestStatus = 0;
    arr.forEach((pokemon) => {
        let statusPokemon;
        let status = pokemon.status;
        let { attack, hp, defense } = status;
        statusPokemon = attack + hp + defense;
        if (statusPokemon > strongestStatus) {
            strongestStatus = statusPokemon;
            strongestPokemon = pokemon.name;
        }
    });

    return strongestPokemon;
}

console.log(
    findStrongest([
        {
            name: "Charizard",
            status: { attack: 84, hp: 78, defense: 78 },
            type: "Flying",
        },
        {
            name: "Talonflame",
            status: { attack: 81, hp: 78, defense: 71 },
            type: "Flying",
        },
        {
            name: "Gengar",
            status: { attack: 65, hp: 60, defense: 60 },
            type: "Ghost",
        },
        {
            name: "Grimer",
            status: { attack: 80, hp: 80, defense: 50 },
            type: "Poison",
        },
        {
            name: "Arbok",
            status: { attack: 95, hp: 60, defense: 69 },
            type: "Poison",
        },
    ])
);
// Charizard
