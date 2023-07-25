//import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {GetInfo, ShowMagnets, ShowTrailer} from "../utils/MoviesInfo";
import { Link } from "react-router-dom";
//import "../pages/generalStyles.css";
import "./MoviesCardsCarrousel.css";

export const MoviesCardsCarrousel = (props) => {   
    /*https://api.themoviedb.org/3/genre/movie/list  objeto con un atributo "genres" donde hay un array de objetos con id y name de todos los generos actuales*/   
    const genres = [
        {id: 28, name: "Action", nombre: "accion"},
        {id: 35, name: "Comedy", nombre: "comedia"},
        {id: 18, name: "Drama", nombre: "drama"},
        {id: 14, name: "Fantasy", nombre: "fantasia"},
        {id: 10749, name: "Romance", nombre: "romance"},
        {id: 53, name: "Thriller", nombre: "thriller"}
    ];    
    let {genre_param, elementsPerPage} = props;
    let idGenero = genres.find(genre => genre.name === genre_param).id;  
    let genero = genres.find(genre => genre.name === genre_param).nombre;  
    let generoCapitalized = genero[0].toUpperCase() + genero.substring(1);
   
    let pagesQuantity = 20 / elementsPerPage;


    const [movies, setMovies] = useState([]);      
    useEffect(() => {        
            GetInfo(`/discover/movie?include_adult=true&sort_by=popularity.desc&with_genres=${idGenero}&year=2023`).then((data)=>{                        
            setMovies(data.results);                                
        })        
    }, []);

    const [selectedIndex, setSelectedIndex] = useState(0);
    let  desde = selectedIndex * elementsPerPage, hasta = desde + elementsPerPage;

    const selectNewIndex = (index, next = true) => {
        const condition = next ? selectedIndex < pagesQuantity - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : pagesQuantity - 1;        
        setSelectedIndex(nextIndex);        
    }

    const previous = () => {
        selectNewIndex(selectedIndex, false);
      };
    
    const next = () => {
        selectNewIndex(selectedIndex, true);
      };

    let pagesNumbers = [];
    for (let i = 0; i < pagesQuantity; i++) {
        pagesNumbers.push(i);
     }

    return (        
        <>                 
        <div className="MoviesCardsCarrousel">
            <h2>{generoCapitalized}</h2>            
            <div className="myCarrousel" id="myCarrousel">                                     
                    {
                    (movies.length > 0) 
                    ?     
                    movies.slice(desde, hasta).map((movie) => (  
                        <Link to={`/movie/${movie.id}`}>
                            <div className="myCarrousel_item">
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} class="myCarrousel_item_img" alt="..."/>
                                <h3 className="myCarrousel_item_title">{movie.title}</h3> 
                            </div>
                        </Link>
                        )
                    )                   
                    : 
                    <p>Cargando...</p>
                    }                    
            </div> 
            <div className="buttonsContainer">
                <button className="myBtn" onClick={previous}>atras</button>
                {
                pagesNumbers.map((pageNumber, index) =>  (    
                    <button 
                    key={index} 
                    onClick={() => setSelectedIndex(pageNumber)}
                    class={(selectedIndex === index) ? 'selectedPage' : ''}>
                        {pageNumber}
                    </button>
                    )
                )
                }
                <button className="myBtn" onClick={next}>adelante</button>
            </div>
        </div>        
        </>
    )
}