import "./generalStyles.css";

import { MoviesCardsContainer } from "../components/MoviesCardsContainer";
export const MoviesMain = () => {
    //GetInfo('/movie/502356').then((data) => {console.log(data)}); Works!

    return (
        <>
            <main className="container">
                <h2>MoviesMain Component</h2>      
                <MoviesCardsContainer/>
            </main>            
        </>
    )
}