
////////website link https://trendingmovies-sahil.netlify.app/


import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourities from './components/Favourities';
import {BrowserRouter as Router, Switch ,Route,Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={
      <React.Fragment>
        <Banner/>
         <Movies/>
      </React.Fragment>
    }/>
    <Route path='/favourites' element={<Favourities/>}/>
    </Routes>
    </Router>
  );
}

export default App;
