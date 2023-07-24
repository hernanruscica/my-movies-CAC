//import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom" //7 importamos UseNavigate


import { useState } from "react"; // 1 importar useState

export const SearchBar = () => {  
  const navigate = useNavigate() // 8 defino la variable
  const [txtBuscador,setTxtBuscador] = useState ("") //2 controlamos el estado del input
  const [txtBuscadorAnio,setTxtBuscadorAnio] = useState ("") //2 controlamos el estado del input
  const [selectedGenre, setSelectedGenre] = useState('');
  /*https://api.themoviedb.org/3/genre/movie/list  objeto con un atributo "genres" donde hay un array de objetos con id y name de todos los generos actuales*/   
  const genres = [
    {id: 28, name: "accion"},
    {id: 35, name: "comedia"},
    {id: 18, name: "drama"},
    {id: 14, name: "fantasia"},
    {id: 10749, name: "romance"},
    {id: 53, name: "thriller"}
];
  const handleGenreChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedGenre(selectedValue);
  };
 
  const handleSubmit = (e) =>{
                e.preventDefault(); 
                navigate(`/movies?search=${txtBuscador}&anio=${txtBuscadorAnio}&genero=${selectedGenre}`); 
    };

  return (          
            <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form class="d-flex" role="search"  onSubmit={handleSubmit}>
                        <input class="form-control me-2" type="search" placeholder="Ingrese su busqueda" aria-label="Search" 
                            value={txtBuscador} 
                            onChange={(e)=>setTxtBuscador(e.target.value)} 
                            required
                        />
                        <input class="form-control me-2" type="search" placeholder="Todos los anios" aria-label="Search" 
                            value={txtBuscadorAnio} 
                            onChange={(e)=>setTxtBuscadorAnio(e.target.value)} 
                        />                                            
                        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
                            <option value="">Genero</option>
                            {   
                                genres.map((genre) => (<option value={genre.id}>{genre.name}</option>))
                            }
                         </select>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
            
            </>
    
        );
};
