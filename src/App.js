//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MoviesNavigation} from "./components/MoviesNavigation";
import { LandingPage } from './pages/LandingPage';
import { MoviesMain } from './pages/MoviesMain';
import { MovieDetails } from './components/MovieDetails';
import { UserMain } from './pages/UserMain';
import {MoviesSearchResults} from './components/MoviesSearchResults';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>My Movies CAC</h1>
          <MoviesNavigation />          
        </header>
      </div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />        
        <Route path='/movies' element={<MoviesMain/>} />
        <Route path='/movie/:movieId' element={<MovieDetails/>} />        
        {/* <Route path='/movies' element={<MoviesSearchResults/>} />      */}
        <Route path='/user' element={<UserMain/>} />        
        <Route path='/user/create' element='Create user' />   
        <Route path='/user/edit/:id' element='Edit user' />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
