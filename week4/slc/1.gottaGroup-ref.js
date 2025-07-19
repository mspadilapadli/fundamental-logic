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

// console.log(
//     findStrongest([
//         {
//             name: "Charizard",
//             status: { attack: 84, hp: 78, defense: 78 },
//             type: "Flying",
//         },
//         {
//             name: "Talonflame",
//             status: { attack: 81, hp: 78, defense: 71 },
//             type: "Flying",
//         },
//         {
//             name: "Gengar",
//             status: { attack: 65, hp: 60, defense: 60 },
//             type: "Ghost",
//         },
//         {
//             name: "Grimer",
//             status: { attack: 80, hp: 80, defense: 50 },
//             type: "Poison",
//         },
//         {
//             name: "Arbok",
//             status: { attack: 95, hp: 60, defense: 69 },
//             type: "Poison",
//         },
//     ])
// );
// // Charizard
//=================================//

function gottaGroupEmAll(arr) {
    // Your code here
    let result = {};

    let strongestPokemon = findStrongest(arr);
    arr.forEach((pokemon) => {
        let type = pokemon.type;
        if (!result[type]) {
            result[type] = {
                list: [],
            };
        }
        result[type].list.push(pokemon.name);
    });

    result.strongestPokemon = strongestPokemon;
    return result;
}

console.log(
    gottaGroupEmAll([
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

/*
{
  Flying: { list: [ 'Charizard', 'Talonflame' ] },
  Ghost: { list: [ 'Gengar' ] },
  Poison: { list: [ 'Grimer', 'Arbok' ] },
  strongestPokemon: 'Charizard'
}
*/

console.log(
    gottaGroupEmAll([
        {
            name: "Beedrill",
            status: { attack: 72, hp: 73, defense: 75 },
            type: "Flying",
        },
        {
            name: "Gliscor",
            status: { attack: 70, hp: 95, defense: 85 },
            type: "Flying",
        },
        {
            name: "Caterpie",
            status: { attack: 30, hp: 45, defense: 55 },
            type: "Bug",
        },
    ])
);

/*
{
  Flying: { list: [ 'Beedrill', 'Gliscor' ] },
  Bug: { list: [ 'Caterpie' ] },
  strongestPokemon: 'Gliscor'
}
*/
