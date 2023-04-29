import { Link } from "react-router-dom";
import "./movieCardStyles.css";

export const MovieCard = ({movie}) => {

    const imgURL= `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    
    return (
        <>            
            <Link to={`/movie/${movie.id}`} className="movieCard__link">
                <img className="movieImage" src={imgURL} alt={movie.title} />
                <h4 className="movieTitle">{movie.original_title}</h4>
            </Link>            
        </>
    )
}