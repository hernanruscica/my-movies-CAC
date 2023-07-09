//import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom" //7 importamos UseNavigate


import { useState } from "react"; // 1 importar useState

export const SearchBar = () => {  
  const navigate = useNavigate() // 8 defino la variable
  const [txtBuscador,setTxtBuscador] = useState ("") //2 controlamos el estado del input
  const [txtBuscadorAnio,setTxtBuscadorAnio] = useState ("") //2 controlamos el estado del input
  const [selectedGenre, setSelectedGenre] = useState('');
  


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
                            <option value="28">Accion</option>
                            <option value="35">Comedia</option>
                            <option value="18">Drama</option>
                            <option value="14">Fantasia</option>
                            <option value="10749">Romance</option>
                            <option value="53">Thriller</option>
                        </select>   
                          
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
            
            </>
    
        );
};
