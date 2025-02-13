const numberOfFilms = +prompt("How many movies have you watched already?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const a = prompt('What was one of the last watched movies of yours?', ''),
      b = prompt('How would you rate that movie?', ''),
      c = prompt('What was one of the last watched movies of yours?', '')
      d = prompt('How would you rate that movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);