import React, { useEffect, useState } from 'react';
import "./MoviesInfo.css";
import {FaMagnet} from "react-icons/fa"

const API = "https://api.themoviedb.org/3"
const APIYTS = "https://yts.mx/api/v2/movie_details.json";


const magnetsFixed = [
      {quality: '720p',
      size: '1.1 GB',
      seeds: 1234,
      hash: 'd4d44272ee5f5bf887a9c85ad09ae957bc55f89dd4d44272ee5f5bf887a9c85ad09ae957bc55f89dd4d44272ee5f5bf887a9c85ad09ae957bc55f89d'},
      {quality: '1080p',
      size: '1.7 GB',
      seeds: 2547,
      hash: 'd4d44272ee5f5bf887a9c85ad09ae957bc55f89dd4d44272ee5f5bf887a9c85ad09ae957bc55f89dd4d44272ee5f5bf887a9c85ad09ae957bc55f89d'},
      {quality: '2160',
      size: '2.5 GB',
      seeds: 476,
      hash: 'd4d44272ee5f5bf887a9c85ad09ae957bc55f89dd4d44272ee5f5bf887a9c85ad09ae957bc55f89dd4d44272ee5f5bf887a9c85ad09ae957bc55f89d'},
];

export const GetInfo =(path)=>{
let data = fetch (API+path,{
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2I5NmRkYzI1NjU4YWQxN2M5MDQ0MGU3ZjYxYmQ2NyIsInN1YiI6IjYzZjY5NzFkMWYzMzE5MDA4NDNhYzQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AcIf3KJ97EjbNZB_54h8sZF6a_l8JzmeBjruFnMVTxs",
        "Content-Type":"application/json;charset=utf-8"
        
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
            setMagnets(magnetsFixed);
          }
        };
    
        fetchData();
      }, []);
//console.log(magnets)
      const generateMagnetLink = (hash, movieTitle) => {
        console.log(movieTitle)
        const encodedMovieName = encodeURIComponent(movieTitle);
        const magnetLink = `magnet:?xt=urn:btih:${hash}&dn=${encodedMovieName}&tr=http://track.one:1234/announce&tr=udp://track.two:80&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80`;
        return magnetLink;
      };

      
      return (
        <div>          
          <h3>Enlaces magnets: </h3>
          
          {(magnets !== null && magnets.length > 0) ? ( 
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Calidad</th>
                  <th scope="col">Peso</th>
                  <th scope="col">Seeds</th>
                  <th scope="col">Bajar</th>
                </tr>
              </thead>
              <tbody>     
              {        
              /*
                
              */
              magnets.map((magnet) => (
                <tr>
                  <th scope="row">{magnet.quality}</th>
                  <td>{magnet.size}</td>
                  <td>{magnet.seeds}</td>
                  <td>
                    <a href={generateMagnetLink(magnet.hash, movieTitle)}
                    className='btn-magnet'
                    >
                      <FaMagnet />
                      <span>{magnet.quality}</span>
                    </a>
                  </td>
                </tr>                      
                ))
              }
              </tbody>
            </table>            
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
}

export const ShowTrailer = (props) => {
    const  {imdbId} = props;  
    const [dataYTS, setDataYts] = useState(null);

    const genericYTembebed = `Jzf6r0EN1i8`;

    useEffect(() => {
        const fetchData = async () => {
          try {
            //console.log(imdbId);
            const response1 = await fetch(`${APIYTS}?imdb_id=${imdbId}`);
            const data1 = await response1.json();   
            setDataYts(data1.data.movie.yt_trailer_code);

          } catch (error) {
            console.error('Error al consultar las APIs:', error.message);
            setDataYts(genericYTembebed);
          }
        };
    
        fetchData();
      }, []);
      console.log(dataYTS);
    return (
        <>
            <div className='trailerContainer'>
              <h3 className='trailerContainer_title'>Trailer</h3>
            {
                dataYTS !== null 
                ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${dataYTS}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                : 'No hay datos'
            }
            </div>            
        </>
    )
}

export const ShowCertification = (props) => {
  let {movieId} = props
  
  let movieCertification = '18';

  return (
    <>
      <p>{`certification: ${movieCertification} con id ${movieId}`}</p>
    </>
  )
}