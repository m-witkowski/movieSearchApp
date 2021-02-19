import React from 'react';
import './movieList.css';
import { MovieCard } from '../movieCard/movieCard';

export const MovieList = ({results}) => (
    <div className="movieList">
        {results.map(movie =>
            <MovieCard key={movie.imdbID} movie={movie} />
        )}
    </div>
)