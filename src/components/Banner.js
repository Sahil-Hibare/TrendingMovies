//////https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
/////api key ='d6352f1204227244dd9842b409f17076'
/////https://api.themoviedb.org/3/trending/all/day?api_key=d6352f1204227244dd9842b409f17076&language=en-US&page=1
////image link : https://image.tmdb.org/t/p/original/ahS4r0ZYbNC85iTdMtcGojHJVgy.jpg

import {movies} from './getmovies'

import React, { Component } from 'react'

export default class Banner extends Component {
    
  render() {
    let movie = movies.results[0];
   
    return (
          <>
           {
            movies=== ''?
                 <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt={movie.name}/>
                <h5 className="card-title banner-title">{movie.name}</h5>
                <p className="card-text banner-text">{movie.overview}</p>
                { /* <a  className="btn btn-primary">Go somewhere</a> */}
              
                </div>
           }
         </>
         
    )
  }
}
