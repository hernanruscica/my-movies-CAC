import {Link} from "react-router-dom";


//it needs a movie object
export const MovieCard = ({movie}) => {

    const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return (
    <div className="movieCard">
        <Link to = {`/movie/${movie.id}`}>
            <img src={imageURL} alt={movie.title} />
            <div>{movie.original_tittle}</div>
        </Link>
    </div>
    ); 
};