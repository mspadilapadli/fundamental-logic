function highestRating(data) {
    // Your code here
    let highestRating;
    let highestScore = 0;
    data.forEach((movie) => {
        let rating = movie.rating;
        if (rating > highestScore) {
            highestScore = rating;
            highestRating = movie;
        }
    });

    return highestRating;
}

let allMovies = [
    {
        title: "The Wages of Fear",
        genre: "thriller",
        director: "Henri-Georges Clouzot",
        rating: 8.4,
    },
    {
        title: "No Country for Old Men",
        genre: "thriller",
        director: "Coen Brothers",
        rating: 8.1,
    },
    {
        title: "500 Days of Summer",
        genre: "romance",
        director: "Marc Webb",
        rating: 7.8,
    },
    {
        title: "The Raid",
        genre: "action",
        director: "Gareth Evans",
        rating: 7.6,
    },
    {
        title: "The Raid 2",
        genre: "action",
        director: "Gareth Evans",
        rating: 8.2,
    },
    {
        title: "Senyap",
        genre: "documentary",
        director: "Joshua Oppenheimer",
        rating: 8.3,
    },
    {
        title: "Shoplifters",
        genre: "drama",
        director: "Kore-eda Hirokazu",
        rating: 8.1,
    },
    {
        title: "Hereditary",
        genre: "horror",
        director: "Ari Aster",
        rating: 7.3,
    },
    {
        title: "The Farewell",
        genre: "drama",
        director: "Lulu Wang",
        rating: 7.7,
    },
    {
        title: "Parasite",
        genre: "thriller",
        director: "Bong Joon-ho",
        rating: 8.6,
    },
];

console.log(highestRating(allMovies));
/*
{
  title: 'Parasite',
  genre: 'thriller',
  director: 'Bong Joon-ho',      
  rating: 8.6
}
*/

function mostRecommended(data) {
    // Your code here
    if (!data) return "invalid input";
    if (data.length < 3) return "data tidak lengkap";
    let result = {};
    let bestRating = highestRating(data);
    data.forEach((movie) => {
        console.log(movie.genre);
        let genre = movie.genre;
        if (!result[genre]) {
            result[genre] = { title: [] };
        }
        result[genre].title.push(movie.title);
    });

    result.bestRating = bestRating;
    return result;
}

console.log(mostRecommended(allMovies));
/*
{
  thriller: {
    titles: [
      'The Wages of Fear',
      'No Country for Old Men',
      'Parasite'
    ]
  },
  romance: { titles: [ '500 Days of Summer' ] },
  action: { titles: [ 'The Raid', 'The Raid 2' ] },
  documentary: { titles: [ 'Senyap' ] },
  drama: { titles: [ 'Shoplifters', 'The Farewell' ] },
  horror: { titles: [ 'Hereditary' ] },
  bestRating: {
    title: 'Parasite',
    genre: 'thriller',
    director: 'Bong Joon-ho',      
    rating: 8.6
  }
}
*/

console.log(
    mostRecommended([
        {
            title: "The Wages of Fear",
            genre: "thriller",
            director: "Henri-Georges Clouzot",
            rating: 8.4,
        },
        {
            title: "No Country for Old Men",
            genre: "thriller",
            director: "Coen Brothers",
            rating: 8.1,
        },
    ])
);
// data tidak lengkap

console.log(mostRecommended());
// invalid input
