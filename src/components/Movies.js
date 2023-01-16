import React, { Component } from 'react'
import {movies} from './getmovies'

export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:'',
            pagArr :[1]
        }
    }
  render() {
    let movieArr = movies.results;
    return (
      <>
       {
        movieArr.length === 0? 
         <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div> :
          <div>
            <h1 className="text-center"><strong>Trending</strong></h1>
            <div className ="movies-list">
                {
                    movieArr.map((movieObj)=>(
                        <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})} >
                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top banner-img" alt={movieObj.name}/>
                        <h5 className="card-title movies-title">{movieObj.name}</h5>
                        <div className="button-wrapper">
                            {
                                this.state.hover == movieObj.id &&   <a  className="btn btn-primary movies-button">Add To Favourities</a> 
                            }
                       
                         </div>
                     </div>
                    ))
                }
               
            </div>
            <div className="page">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href='#' >Previous</a></li>
                        {
                            this.state.pagArr.map((value)=>(
                                <li class="page-item"><a class="page-link"   href='#' >{value}</a></li>
                            ))
                        }
                        <li class="page-item"><a class="page-link"  href='#'  >Next</a></li>
                    </ul>
                    </nav>
            </div>
            
        </div>  
       }
      </>
    )
  }
}
