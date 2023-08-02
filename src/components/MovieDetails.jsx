import { Await, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {GetInfo, ShowMagnets, ShowTrailer, ShowCertification} from "../utils/MoviesInfo";
import { Link } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
// import "../pages/generalStyles.css";
import "./movieCardStyles.css";

export const MovieDetails = () => {
    const {movieId} = useParams();
    let region = 'US';
    
    const [movieCurrent, setMovieCurrent] = useState(null);    
    const [movieCurrentCertification, setMovieCurrentCertification] = useState('cargando...');
    const [movieCurrentProviders, setMovieCurrentProviders] = useState(null);
    

    useEffect(() => {
        GetInfo(`/movie/${movieId}`).then((data) => {
            setMovieCurrent(data);                                    
            //console.log(data);           
        });
        //https://api.themoviedb.org/3/movie/872585/release_dates
         GetInfo(`/movie/${movieId}/release_dates`).then((data2) => {
            
            let releasedDates = data2.results;
            
            let releasedDatesByRegion =  releasedDates.filter((certification) => certification.iso_3166_1 === region);            
            let certificationByRegion = releasedDatesByRegion.length > 0 ? 
                                        releasedDatesByRegion[0].release_dates[0].certification :
                                        'Sin datos para la region';                                                   
            setMovieCurrentCertification(certificationByRegion !== '' ? certificationByRegion : 'Sin datos para la region' ); 
            
            //console.log('data', data2);        
        });
        GetInfo(`/movie/${movieId}/watch/providers`).then((data3) => {
            //console.log(data3.results)
            let watchProvidersAll = data3.results;
            console.log(watchProvidersAll);

            let watchProvidersRegions = Object.keys(watchProvidersAll);
            let thereIsWatchProviders = watchProvidersRegions.length > 0;
            console.log(thereIsWatchProviders ? 'Proovedores': 'NO hay Proveedores');

            let thereIsWatchProviderByRegion = thereIsWatchProviders ? watchProvidersRegions.findIndex(index => index === region) !== -1 : false ; 
            console.log(thereIsWatchProviderByRegion );

            let results = thereIsWatchProviderByRegion ? watchProvidersAll[region] : null;             
            console.log(results)
            setMovieCurrentProviders(results);
        })
    }, [movieId]);

    if (!movieCurrent || !movieCurrentCertification) {
        return null;
      }
      
    const imgURL = `https://image.tmdb.org/t/p/w300${movieCurrent.poster_path}`;    
    
    //console.log(movieCurrentCertification);

    return (
        <>            
            <div className="container">
                <Link to = '/movies/' className="back-link">
                        <FaArrowLeft size="1.4em"/>
                        <span >Volver</span>
                </Link>

                <div className=" movieContainer">     
                    <figure className="movieDetailsFigure">
                        <img  src={imgURL} alt={movieCurrent.title} />
                    </figure>    
                    <section className="movieDetailsSection">
                        
                        <h2>{movieCurrent.title} <em>{`(${movieCurrent.release_date.slice(0, 4)})`} </em></h2>
                        <div className="genres">
                            {movieCurrent.genres.map((genre) => genre.name).join(", ")
                            }
                        </div>                       
                        <p>{`Calificacion: ${movieCurrentCertification}`}</p>
                        <ShowMagnets imdbId = {movieCurrent.imdb_id} movieTitle = {movieCurrent.title}/>                     
                    </section>   
                    
                    <section className="movieDetailsSection">
                        
                            <h3 className="movieDetailsSection_title">
                                Mirala online: 
                            </h3>
                            {!movieCurrentProviders ? 
                                (<p>sin proveedores en la region</p>) : 
                                (<>                                
                                {                                
                                movieCurrentProviders.hasOwnProperty('flatrate') ?     
                                    (                           
                                    
                                    <div className="movieDetailsSection_providers-container">
                                        <h4>Stream</h4>     
                                        <div className="movieDetailsSection_providers">                           
                                        {
                                        movieCurrentProviders['flatrate'].map((provider) =>                                 
                                            (                                                
                                                <a href="https://justwatch.com">
                                                    <img 
                                                        src={`https://www.themoviedb.org/t/p/original${provider.logo_path}`} 
                                                        alt="{provider.provider_name}" 
                                                        className="movieDetailsSection_providers_image"
                                                        />                                                    
                                                </a>                                                 
                                            ))
                                        }       
                                        </div>                                                                 
                                    </div>
                                    ):
                                    ''                                
                                }
                                {                                
                                movieCurrentProviders.hasOwnProperty('rent') ?     
                                    (                           
                                    
                                    <div className="movieDetailsSection_providers-container">
                                        <h4>Alquilar</h4>  
                                        <div className="movieDetailsSection_providers">                              
                                        {
                                        movieCurrentProviders['rent'].map((provider) =>                                 
                                            (                                                
                                                <a href="https://justwatch.com">
                                                    <img 
                                                        src={`https://www.themoviedb.org/t/p/original${provider.logo_path}`} 
                                                        alt="{provider.provider_name}" 
                                                        className="movieDetailsSection_providers_image"
                                                        />                                                    
                                                </a>                                                                                 
                                            ))
                                        }          
                                        </div>                           
                                    </div>
                                    ):
                                    ''                                
                                }                               
                                {                                
                                movieCurrentProviders.hasOwnProperty('buy') ?     
                                    (                           
                                    
                                    <div className="movieDetailsSection_providers-container">
                                        <h4>Comprar</h4>  
                                        <div className="movieDetailsSection_providers">                              
                                        {
                                        movieCurrentProviders['buy'].map((provider) =>                                 
                                            (                                                
                                                <a href="https://justwatch.com">
                                                    <img 
                                                        src={`https://www.themoviedb.org/t/p/original${provider.logo_path}`} 
                                                        alt="{provider.provider_name}" 
                                                        className="movieDetailsSection_providers_image"
                                                        />                                                    
                                                </a>                                                                                 
                                            ))
                                        }    
                                        </div>                                 
                                    </div>
                                    ):
                                    ''                                
                                }
                                </>)} 
                        <span className="movieDetails_disclaimer">Info brindada por <strong>JustWatch.com</strong></span>
                    </section>
                </div>                      
                
                <section className="movieDetailsSection details-row">
                        <ShowTrailer imdbId = {movieCurrent.imdb_id} />
                        <p className="movieDetailsSection_description">
                            {`Description: ${movieCurrent.overview} `}
                        </p>
                </section>  
            </div>  
        </>
    )
}