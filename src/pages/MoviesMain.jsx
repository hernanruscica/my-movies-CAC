import "./generalStyles.css";

import { MoviesCardsContainer } from "../components/MoviesCardsContainer";
import {MoviesSearchResults} from "../components/MoviesSearchResults"
import { SearchBar } from "../components/SearchBar";


import { useQuery }from "../hooks/useQuery";

export const MoviesMain = () => {
    //GetInfo('/movie/502356').then((data) => {console.log(data)}); Works!
    const query = useQuery();
    const queryText = query.get("search");
    const queryTextAnio = query.get("anio");
    return (
        <>
            <main className="container">
                <h2>Peliculas</h2>      
                
                <SearchBar />
                {/* {(queryText !== '') ? <MoviesSearchResults searchText = {queryText}/> : <MoviesCardsContainer/>}  */}
                {(queryText === '' || queryText === null) ? <MoviesCardsContainer/> : <MoviesSearchResults searchText = {queryText} searchTextAnio = '2023'/>  } 
                
                
            </main>            
        </>
    )
}