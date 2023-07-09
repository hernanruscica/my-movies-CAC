
import {useState,useEffect} from "react";
import { GetInfo } from "../utils/MoviesInfo";
import {Link} from 'react-router-dom';

export const MoviesSearchResults = (props) => {       
    
    //console.log(props)
    const {searchText} = props;
    const {searchTextAnio} = props;
    const {searchTextgenero} = props;


    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {        
        GetInfo(`/search/movie?query=${searchText}&year=${searchTextAnio}`).then((data)=>{
            
            console.log(data.results)            
            console.log(data.results.filter(result => result.genre_ids.includes(parseInt(searchTextgenero, 10))));
            if(searchTextgenero === '')
                setSearchResults(data.results);  
            else{
                setSearchResults(data.results.filter(result => result.genre_ids.includes(parseInt(searchTextgenero, 10))))
            }
        })
    }, [searchText, searchTextAnio, searchTextgenero]);
   
    //searchResults.map((result) => console.log(result.title));
    
    return (
        <>
  <main className="container">
    <h3>
      Resultados de la búsqueda <strong>"{searchText}"</strong>:
    </h3>

    {searchResults.length === 0 ? (
      <p>No se encontraron resultados.</p>
        ) : (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Poster</th>
                <th scope="col">Título</th>
                <th scope="col">Año</th>
                <th scope="col">Enlace</th>
            </tr>
            </thead>
            <tbody>
            {searchResults.map((movie, index) => (
                <tr key={index}>
                <th scope="row">{index}</th>
                <td>
                    <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={`${movie.title} movie poster`}
                    />
                </td>
                <td>{movie.title}</td>
                <td>{movie.release_date}</td>
                <td>
                    <Link to={`/movie/${movie.id}`}>Ver más</Link>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        )}
    </main>
    </>

    )
}