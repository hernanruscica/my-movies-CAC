import { useState, useEffect } from "react";
import { GetMovie } from "../utils/MoviesModel";
import { MovieCard } from "./MovieCard";

export const MoviesContainer = () => {
    const [movies, setMovies] = useState([]);
    useEffect (() => {
        GetMovie("/discover/movie").then((data) => {
            setMovies(data.results);
        })
    }, [])
    return(
        <div className="moviesContainer">
            {movies.map((movie) => (
                <MovieCard id = {movie.id} movie = {movie} />
            ))
            }
        </div>
    )
}