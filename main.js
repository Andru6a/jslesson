'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
	privat: false
};

const questionLastFilm = prompt('Один из последних просмотренных фильмов', ''),
    questionGoal = +prompt('На сколько оцените его', ''),
    questionLastFilm2 = prompt('Один из последних просмотренных фильмов', ''),
    questionGoal2 = +prompt('На сколько оцените его', '');

personalMovieDB.movies[questionLastFilm] = questionGoal;
personalMovieDB.movies[questionLastFilm2] = questionGoal2;



console.log(personalMovieDB);