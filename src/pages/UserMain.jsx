import "./generalStyles.css";
import {UserCard} from "../components/UserCard";
import {GetUsers} from "../utils/UserAPI";
import { useState, useEffect } from "react";
export const UserMain = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        
            GetUsers().then((results) => {
                setData('results');        
            });                      
        
    }, [data])  
    
    
      
    return (
        <>
            <main className="container">
                <h1>UserMain Component</h1>
                
                <div>
                { `Usuarios que devuelve la API: ${data}`  }
                </div>
            </main>            
        </>
    )
}