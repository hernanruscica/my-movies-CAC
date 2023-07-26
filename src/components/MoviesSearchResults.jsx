
import {useState,useEffect} from "react";
import { GetInfo } from "../utils/MoviesInfo";
import {Link} from 'react-router-dom';
import "./MoviesSearchResults.css"

export const MoviesSearchResults = (props) => {       
    
    //console.log(props)
    const {searchText} = props;
    const {searchTextAnio} = props;
    const {searchTextgenero} = props;


    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {        
        GetInfo(`/search/movie?query=${searchText}&year=${searchTextAnio}`).then((data)=>{            
            if(searchTextgenero === '')
                setSearchResults(data.results);  
            else{
                setSearchResults(data.results.filter(result => result.genre_ids.includes(parseInt(searchTextgenero, 10))))
            }
        })
    }, [searchText, searchTextAnio, searchTextgenero]);   
    console.log(searchResults ? searchResults : '');
       
    return (
        <>
            <main className="container">
                <h3 className="search-results_title">
                Resultados de la búsqueda <strong>"{searchText}"</strong>:
                </h3>                               

                {searchResults.length === 0 ? (
                <h3 className="search-results_title">No se encontraron resultados.</h3>
                    ) : (
                     <>                    

                     {
                     searchResults.map((searchResult, index) => (
                        <div className="movie-result">
                            <div className="movie-result_img-container"> 
                                <img src={`https://image.tmdb.org/t/p/w300${searchResult.poster_path}`} 
                                alt={`"${searchResult.title}" poster`} 
                                className="movie-result_img-container_img" />
                            </div>
                            <div className="movie-result_img-info">
                                <h2>{searchResult.title} <em>{`(${searchResult.release_date.slice(0, 4)})`} </em></h2>
                                <p>{searchResult.overview}</p>
                                <Link to={`/movie/${searchResult.id}`} className="btn-more">
                                    {/* <button className="btn-more">
                                        Ver más
                                    </button>                                     */}
                                    Ver mas
                                </Link>
                            </div>
                        </div>  
                     ) )}                    
                    </>  
                    )}
            </main>
    </>

    )
}