import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {GetInfo, ShowMagnets, ShowTrailer} from "../utils/MoviesInfo";
import { Link } from "react-router-dom";
import "../pages/generalStyles.css";

export const MovieDetails = () => {
    const {movieId} = useParams();
    
    const [movieCurrent, setMovieCurrent] = useState(null);    
    

    useEffect(() => {
        GetInfo(`/movie/${movieId}`).then((data) => {
            setMovieCurrent(data);                                    
            //console.log(data);
        })        
        
    }, [movieId]);

    if (!movieCurrent) {
        return null;
      }
      
    const imgURL = `https://image.tmdb.org/t/p/w300${movieCurrent.poster_path}`;
    
    //console.log(movieCurrent)
    return (
        <>            
            <div className="container movieDetailsContainer">
                <h4>{`MovieDetails component, showing movieId: ${movieCurrent.id}`}</h4>
                <Link to = '/movies/'>Back</Link>
                <figure className="movieDetailsFigure">
                    <img  src={imgURL} alt={movieCurrent.title} />
                </figure>    
                <section className="movieDetailsSection">
                    <h5>{`Title: ${movieCurrent.title}`}</h5>
                    <div className="genres">
                        {movieCurrent.genres.map((genre) => genre.name).join(", ")
                        }
                    </div>
                    <p>{`Description: ${movieCurrent.overview} `}</p>
                    {/* <ShowTrailer imdbId = {movieCurrent.imdb_id} />
                    <ShowMagnets imdbId = {movieCurrent.imdb_id} /> */}
                    
                </section>
            </div>            
        </>
    )
}