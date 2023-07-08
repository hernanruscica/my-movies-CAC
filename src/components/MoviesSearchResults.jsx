
import {useState,useEffect} from "react";
import { GetInfo } from "../utils/MoviesInfo";
import {Link} from 'react-router-dom';

export const MoviesSearchResults = (props) => {       
    
    //console.log(props)
    const {searchText} = props;


    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {        
        GetInfo(`/search/movie?query=${searchText}`).then((data)=>{
            console.log(data);
            setSearchResults(data.results);  
        })
    }, [searchText]);
    //searchResults.map((result) => console.log(result.title));
    //console.log(searchTextAnio);
    return (
        <>
            <main className="container">                 
                <h3>Resultados de la busqueda <strong>"{searchText}"</strong>: </h3>       
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Poster</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">anio</th>
                            <th scope="col">enlace</th>
                        </tr>
                    </thead>
                    <tbody>    
                {                 
                searchResults.map((movie, index) => (   
                                 
                    <tr>
                        <th scope="row">{index}</th>
                        <td><img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} movie poster`} /></td>
                        <td>{movie.title}</td>                        
                        <td>{movie.release_date}</td>
                        <td><Link to={`/movie/${movie.id}`} >Ver mas</Link></td>
                    </tr>
                        
                ))            
                }
                    </tbody>
                </table>
            </main>            
        </>
    )
}