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
    let {genero} = props;
    let idGenero = genres.find(genre => genre.name == genero).id;  
    let pagesQuantity = 5;  //del carrousel
    let elementsPerPage = 20 / pagesQuantity;


    const [movies, setMovies] = useState([]);      
    useEffect(() => {        
            GetInfo(`/discover/movie?include_adult=true&sort_by=popularity.desc&with_genres=${idGenero}&year=2023`).then((data)=>{                        
            setMovies(data.results);                                
        })        
    }, []);
    console.log((movies.length > 0) ? movies : 'cargando...')
   

    const [selectedIndex, setSelectedIndex] = useState(0);

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
    
     const generateCards = (myMovies, elemsPerPage) => {
         const moviesLen = myMovies.length;
         const pagesQuantity = Math.ceil(moviesLen / elemsPerPage);
         let cards = '';

         for (let i = 0; i < elemsPerPage; i++){

            cards += `<div className="myCarrousel_item">
                        <img src='https://image.tmdb.org/t/p/w300${myMovies[i].poster_path}' className="myCarrousel_item_img" alt="..."/>
                        <h2 clasName = "myCarrousel_item_title">${myMovies[i].title}</h2> 
                    </div>`
         };

         console.log(cards);                 
         return cards;
     }
         
   
    return (
        <>         
                <p>{`carrousel - indice : ${selectedIndex} images por pagina: ${elementsPerPage}` }</p>
                <p>{`cards desde la ${selectedIndex * elementsPerPage} 
                        hasta la ${(selectedIndex * elementsPerPage) + elementsPerPage - 1}`}</p>
                 <div className="myCarrousel">                                     
                        {
                        (movies.length > 0) ? generateCards(movies, 4) : 'cargando...'
                        }
                    
                </div> 
                <button className="myBtn" onClick={previous}>atras</button>
                <button className="myBtn" onClick={next}>adelante</button>

                 
        </>
       
    )
}