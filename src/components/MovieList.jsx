import {useState} from 'react';
import {movies} from '../mock-data/movies';

const MovieList = ({currentGenre}) => {
    const selectedMovies = movies.filter(movie => movies.genre === currentGenre)
    }

    const available = movies.map(title, index => movies.title)



export default MovieList;