function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: "Avengers end game",
            genre: "Action",
            soldTicket: 149,
            capacity: 150,
        },
        {
            id: 2,
            name: "La la Land",
            genre: "Romance",
            soldTicket: 20,
            capacity: 75,
        },
        {
            id: 3,
            name: "Beauty and the Beast",
            genre: "Romance",
            soldTicket: 50,
            capacity: 50,
        },
        {
            id: 4,
            name: "Superman vs Batman",
            genre: "Action",
            soldTicket: 150,
            capacity: 250,
        },
        {
            id: 5,
            name: "Transformer",
            genre: "Action",
            soldTicket: 90,
            capacity: 90,
        },
        {
            id: 6,
            name: "5 feet apart",
            genre: "Romance",
            soldTicket: 25,
            capacity: 45,
        },
        {
            id: 7,
            name: "Hamilton",
            genre: "Musical",
            soldTicket: 295,
            capacity: 300,
        },
        {
            id: 8,
            name: "Dear Evan Hansen",
            genre: "Musical",
            soldTicket: 150,
            capacity: 200,
        },
        {
            id: 9,
            name: "Conjuring",
            genre: "Horror",
            soldTicket: 30,
            capacity: 100,
        },
        {
            id: 10,
            name: "Annabelle",
            genre: "Horror",
            soldTicket: 10,
            capacity: 30,
        },
        {
            id: 11,
            name: "Fast and Furios",
            genre: "Action",
            soldTicket: 25,
            capacity: 40,
        },
        {
            id: 12,
            name: "Romeo and Julet",
            genre: "Romance",
            soldTicket: 15,
            capacity: 15,
        },
        {
            id: 13,
            name: "Wicked",
            genre: "Musical",
            soldTicket: 75,
            capacity: 75,
        },
    ];
    // Insert your code here
    //* manual forEach()
    let foundMovies = [];

    favoriteGenre.forEach((genre) => {
        movies.forEach((movie) => {
            if (movie.genre == genre) foundMovies.push(movie);
        });
    });

    return foundMovies;

    //* filter() - includes()
    //  return movies.filter((movie) => favoriteGenre.includes(movie.genre));
}
console.log(findMovies(["Action", "Musical"]));
/**
 [
  {
    id: 1,
    name: 'Avengers end game',
    genre: 'Action',
    soldTicket: 149,
    capacity: 150
  },
  {
    id: 4,
    name: 'Superman vs Batman',
    genre: 'Action',
    soldTicket: 150,
    capacity: 250
  },
  {
    id: 5,
    name: 'Transformer',
    genre: 'Action',
    soldTicket: 90,
    capacity: 90
  },
  {
    id: 11,
    name: 'Fast and Furios',
    genre: 'Action',
    soldTicket: 25,
    capacity: 40
  },
  {
    id: 7,
    name: 'Hamilton',
    genre: 'Musical',
    soldTicket: 295,
    capacity: 300
  },
  {
    id: 8,
    name: 'Dear Evan Hansen',
    genre: 'Musical',
    soldTicket: 150,
    capacity: 200
  },
  {
    id: 13,
    name: 'Wicked',
    genre: 'Musical',
    soldTicket: 75,
    capacity: 75
  }
]
*/

//========================================================//
let user = {
    name: "Kosasih",
    ticket: 10,
    favoriteGenre: ["Action", "Musical"],
};

let movie = {
    id: 7,
    name: "Dear Evan Hansen",
    genre: "Musical",
    soldTicket: 150,
    capacity: 200,
};

function findTicketAvailability(movie, user) {
    // Insert your code here
    let availabilityTicket = movie.capacity - movie.soldTicket;
    return availabilityTicket > user.ticket;
}

console.log(findTicketAvailability(movie, user)); // true
/**
 * Proses
 *  ticket yang ingin dibeli user berjumlah 10, sedang untuk movie ini masih tersedia 50 ticket yang bisa dijual.
 *  Oleh karena itu hasil yang dikembalikan adalah true
 **/
//========================================================//
//========================================================//
//========================================================//
//========================================================//
