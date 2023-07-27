import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {GetInfo, ShowMagnets, ShowTrailer} from "../utils/MoviesInfo";
import { Link } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
// import "../pages/generalStyles.css";
import "./movieCardStyles.css";

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
            <div className="container">
                <Link to = '/movies/' className="back-link">
                        <FaArrowLeft size="1.4em"/>
                        <span >Volver</span>
                </Link>

                <div className=" movieContainer">     
                    <figure className="movieDetailsFigure">
                        <img  src={imgURL} alt={movieCurrent.title} />
                    </figure>    
                    <section className="movieDetailsSection">
                        
                        <h2>{movieCurrent.title} <em>{`(${movieCurrent.release_date.slice(0, 4)})`} </em></h2>
                        <div className="genres">
                            {movieCurrent.genres.map((genre) => genre.name).join(", ")
                            }
                        </div>                       
                        
                        <ShowMagnets imdbId = {movieCurrent.imdb_id} movieTitle = {movieCurrent.title}/>                     
                    </section>   
                </div>                      
                
                <section className="movieDetailsSection details-row">
                        <ShowTrailer imdbId = {movieCurrent.imdb_id} />
                        <p className="movieDetailsSection_description">
                            {`Description: ${movieCurrent.overview} `}
                        </p>
                </section>  
            </div>  
        </>
    )
}