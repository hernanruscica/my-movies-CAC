import { GetInfo } from "../utils/MoviesInfo";
import {useState,useEffect} from "react";
import { MovieCard } from "./MovieCard";
import "./MoviesCardsContainerStyles.css"



export const MoviesCardsContainer = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        GetInfo("/discover/movie").then((data)=>{
            console.log(data);
            setMovies(data.results);  
        })
    }, []);

    return (
        <>
            <h3>MoviesCardsContainer Component</h3>               
            <div className="moviesContainer">
                {                 
                movies.map((movie) => (                
                        <MovieCard movie={movie}/>   
                ))            
                }
            </div>
        </>
    )
}