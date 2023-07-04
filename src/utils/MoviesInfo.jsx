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


export const ShowMagnets = (props) => {
    const  {imdbId, movieTitle} = props;    
    
    const [magnets, setMagnets] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log(imdbId);
            const response1 = await fetch(`${APIYTS}?imdb_id=${imdbId}`);        
            const data1 = await response1.json();   
            setMagnets(
                data1.data.movie.torrents != null ? data1.data.movie.torrents : []
                );

          } catch (error) {
            console.error('Error al consultar las APIs:', error.message);
          }
        };
    
        fetchData();
      }, []);

      const generateMagnetLink = (hash, movieTitle) => {
        const encodedMovieName = encodeURIComponent(movieTitle);
        const magnetLink = `magnet:?xt=urn:btih:${hash}&dn=${encodedMovieName}&tr=http://track.one:1234/announce&tr=udp://track.two:80&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80`;
        return magnetLink;
      };

      
      return (
        <div>
          <h2>Magnets:</h2>
          {(magnets !== null && magnets.length > 0) ? (
            magnets.map((magnet) => (
              <div >
                <p>Quality: {magnet.quality}</p>                
                <p>Hash: {magnet.hash}</p>
                <a href={generateMagnetLink(magnet.hash, movieTitle)}>Magnet Link (revisar)</a>
                <hr></hr>                
              </div>
            ))
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
}

export const ShowTrailer = (props) => {
    const  {imdbId} = props;  
    const [dataYTS, setDataYts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            //console.log(imdbId);
            const response1 = await fetch(`${APIYTS}?imdb_id=${imdbId}`);        
            const data1 = await response1.json();   
            setDataYts(data1.data.movie.yt_trailer_code);

          } catch (error) {
            console.error('Error al consultar las APIs:', error.message);
          }
        };
    
        fetchData();
      }, []);
      console.log(dataYTS);
    return (
        <>
            <h3> Trailer:</h3>
            <p> {
                    dataYTS !== null 
                    ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${dataYTS}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                    : 'No hay datos'
                }
            </p>
        </>
    )
}