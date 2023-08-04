import "./generalStyles.css";

import { MoviesCardsContainer } from "../components/MoviesCardsContainer";
import {MoviesSearchResults} from "../components/MoviesSearchResults";
import { SearchBar } from "../components/SearchBar";
import {MoviesCardsCarrousel} from "../components/MoviesCardsCarrousel";
import { fetchHtml } from "../utils/webscrap";

import { useQuery }from "../hooks/useQuery";



export const MoviesMain = () => {
    
    const query = useQuery();
    const queryText = (!query.get("search")) ? '' : query.get("search");
    const queryTextAnio = (!query.get("anio")) ? '' : query.get("anio");
    const queryIdGenre = (!query.get("genero")) ? '' : query.get("genero");
    //const queryIdPlatform = (!query.get("plataforma")) ? '' : query.get("plataforma");
    //console.log(`texto: ${queryText} queryTextAnio: ${queryTextAnio} queryIdGenre: ${queryIdGenre}` );

    


    return (
        <>
            <main className="container">
                <h2>Peliculas</h2>   
                <SearchBar />
                
                 {(queryText === '' && queryTextAnio === '') 
                 ? <>
                        <MoviesCardsCarrousel genre_param = "Action" elementsPerPage = {4}/> 
                        <MoviesCardsCarrousel genre_param = "Drama" elementsPerPage = {4}/> 
                        <MoviesCardsCarrousel genre_param = "Fantasy" elementsPerPage = {2}/> 
                        
                    </>
                 : <MoviesSearchResults searchText = {queryText} searchTextAnio = {queryTextAnio} searchTextgenero = {queryIdGenre}/>  }  

                 
                 
            </main>            
        </>
    )
}