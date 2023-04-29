//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MoviesNavigation} from "./components/MoviesNavigation";
import { LandingPage } from './pages/LandingPage';
import { MoviesMain } from './pages/MoviesMain';
import { UserMain } from './pages/UserMain';

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
        <Route path='/user' element={<UserMain/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
