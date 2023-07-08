//import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom" //7 importamos UseNavigate


import { useState } from "react"; // 1 importar useState

export const SearchBar = () => {  
  const navigate = useNavigate() // 8 defino la variable
  const [txtBuscador,setTxtBuscador] = useState ("") //2 controlamos el estado del input
  const [txtBuscadorAnio,setTxtBuscadorAnio] = useState ("") //2 controlamos el estado del input

  //3 realizamos la funcion para controlar el submit (cuando apretamos el boton buscar)
  const handleSubmit = (e) =>{
                e.preventDefault(); // 5 no se realiza el submit
                navigate(`/movies?search=${txtBuscador}`) //9 enviar lo que se escribe en el input a la url
    }

  return (          
            <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form class="d-flex" role="search"  onSubmit={handleSubmit}>
                        <input class="form-control me-2" type="search" placeholder="Ingrese su busqueda" aria-label="Search" 
                            value={txtBuscador} 
                            onChange={(e)=>setTxtBuscador(e.target.value)} 
                        />
                        <input class="form-control me-2" type="search" placeholder="Todos los anios" aria-label="Search" 
                            value={txtBuscadorAnio} 
                            onChange={(e)=>setTxtBuscadorAnio(e.target.value)} 
                        />                    
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genero
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="">Accion</a></li>
                                <li><a class="dropdown-item" href="" >Comedia</a></li>
                                <li><a class="dropdown-item" href="">Drama</a></li>
                                <li><a class="dropdown-item" href="">Fantasia</a></li>
                                <li><a class="dropdown-item" href="">Romance</a></li>
                                <li><a class="dropdown-item" href="">Thriller</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Plataforma
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="">Todas</a></li>
                                <li><a class="dropdown-item" href="">Netflix</a></li>
                                <li><a class="dropdown-item" href="" >Star Plus</a></li>
                                <li><a class="dropdown-item" href="">Disney Plus</a></li>
                                <li><a class="dropdown-item" href="">Prime Video</a></li>
                            </ul>
                        </div>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
            
            </>
    
        );
};
