const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0;i < 2;i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На скольо оцените его?', '');


    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');

    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Malo');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Klassciecskiy zritel');
} else if (personalMovieDB.count >= 30) {
    console.log('Kinoman');
} else {
    console.log('Oshibka')
}

console.log(personalMovieDB);