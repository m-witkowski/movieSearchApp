import React from 'react';
import './movieCard.css';

export const MovieCard = ({movie}) => (
    <div className="movieCard">
        <img src={movie.Poster} alt="Poster"></img>
        <h1>{movie.Title} ({movie.Year})</h1>
    </div>
)