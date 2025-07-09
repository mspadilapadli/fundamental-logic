//* manual filterMovie
function filterMovie(genres) {
    let movies = [
        ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
        ["Action", "Mad Max", "The Batman", "Josh Wick"],
        [
            "Fantasy",
            "The Fall",
            "The Forbidden Kingdom",
            "Ladyhawke",
            "Sea Beast",
        ],
        ["Comedy", "Safety Last", "The Trip"],
    ];
    // write your code here
    let result = [];
    genres.forEach((genre) => {
        movies.forEach((movieGroup) => {
            if (genre == movieGroup[0]) {
                result.push(movieGroup);
            }
        });
    });

    return result;
}

// * build in function filterMovie
// function filterMovie(genres) {
//     let movies = [
//         ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
//         ["Action", "Mad Max", "The Batman", "Josh Wick"],
//         [
//             "Fantasy",
//             "The Fall",
//             "The Forbidden Kingdom",
//             "Ladyhawke",
//             "Sea Beast",
//         ],
//         ["Comedy", "Safety Last", "The Trip"],
//     ];
//     return movies.filter((movieGroup) => genres.includes(movieGroup[0]));
// }

console.log(filterMovie(["Action", "Drama", "Comedy"]));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

console.log(filterMovie(["Scifi", "Musical"]));
// []

// ==== //
function usersCanWatch(users) {
    // write your code here

    if (!users) return `Invalid data!`;
    //*manual
    let menu = users.menu;
    let menus = [];
    let temp = "";
    for (let i = 0; i < menu.length; i++) {
        const char = menu[i];
        if (char == ";") {
            menus.push(temp);
            temp = "";
        } else {
            temp += char;
        }
    }
    menus.push(temp);

    let movieCanWatch = filterMovie(menus);

    //*split()
    // let movieCanWatch = filterMovie(users.menu.split(";"));

    return movieCanWatch.length ? movieCanWatch : `Movie not found`;
}

// TEST CASE
const user1 = {
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy",
};
console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user2 = {
    name: "Tole",
    cinema: "XIIX",
    menu: "Fantasy;Adventure;Comedy",
};
console.log(usersCanWatch(user2));
/*
[
  ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user3 = {
    name: "Rizky",
    cinema: "Cinepolos",
    menu: "Scifi-Musical",
};
console.log(usersCanWatch(user3));
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"
