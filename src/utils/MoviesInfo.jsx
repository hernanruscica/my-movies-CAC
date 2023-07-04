import React, { useEffect, useState } from 'react';
const API = "https://api.themoviedb.org/3"
const APIYTS = "https://yts.mx/api/v2/movie_details.json";


export const GetInfo =(path)=>{
let data = fetch (API+path,{
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2I5NmRkYzI1NjU4YWQxN2M5MDQ0MGU3ZjYxYmQ2NyIsInN1YiI6IjYzZjY5NzFkMWYzMzE5MDA4NDNhYzQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AcIf3KJ97EjbNZB_54h8sZF6a_l8JzmeBjruFnMVTxs",
        "Content-Type":"application/json;charset=utf-8",
    }
}).then((results)=>results.json());
return data;

}


export const ShowMagnet = (props) => {
    const  {imdbId} = props;
    
    const [magnets, setMagnets] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            //console.log(imdbId);
            const response1 = await fetch(`${APIYTS}?imdb_id=${imdbId}`);        
            const data1 = await response1.json();   
            setMagnets(data1.data.movie.torrents);

          } catch (error) {
            console.error('Error al consultar las APIs:', error.message);
          }
        };
    
        fetchData();
      }, []);

      const generateMagnetLink = (hash) => {
        const encodedMovieName = encodeURIComponent('Url Encoded Movie Name');
        const magnetLink = `magnet:?xt=urn:btih:${hash}&dn=${encodedMovieName}&tr=http://track.one:1234/announce&tr=udp://track.two:80`;
        return magnetLink;
      };

      
      return (
        <div>
          <h2>Magnets:</h2>
          {magnets !== null && magnets.length > 0 ? (
            magnets.map((magnet, index) => (
              <div key={index}>
                <p>Quality: {magnet.quality}</p>                
                <p>Hash: {magnet.hash}</p>
                <a href={generateMagnetLink(magnet.hash)}>Magnet Link (revisar)</a>
                <hr></hr>                
              </div>
            ))
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
  
  
}