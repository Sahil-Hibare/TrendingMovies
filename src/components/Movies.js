import React, { Component } from 'react'

import axios from 'axios';

export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:'',
            pagArr :[1],
            currPage:1,
            movies:[],
            favourites:[]
        }
    }
   async componentDidMount(){
       const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=d6352f1204227244dd9842b409f17076&language=en-US&page=${this.state.currPage}`);
       let data = res.data;
       this.setState({
        movies:[...data.results]
        
       }) 
    }

changeMovies=async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=d6352f1204227244dd9842b409f17076&language=en-US&page=${this.state.currPage}`);
        let data = res.data;
        this.setState({
         movies:[...data.results]
         
        }) 

    }
    handleClick=(value)=>{
        console.log("iam called")
        if(value!==this.state.currPage){
           
            this.setState({
                currPage:value
            },this.changeMovies)
        }
    }

    handleRight=()=>{
       let tempArr =[]
       for(let i=1;i<=this.state.pagArr.length+1;i++){
        tempArr.push(i);
       }
       console.log("right is called")
       this.setState({
        pagArr:[...tempArr],
        currPage:this.state.currPage+1
       },this.changeMovies)
    }
    handleLeft=()=>{
        if(this.state.currPage !==1){
            this.setState({
                currPage:this.state.currPage-1
            },this.changeMovies)
        }
    }
handleFavourites=(movie)=>{
   
    let oldData = JSON.parse(localStorage.getItem('movies')||"[]")
    if(this.state.favourites.includes(movie.id)){
    oldData = oldData.filter((m)=>m.id!=movie.id)
    }else{
        oldData.push(movie);
    }
    localStorage.setItem('movies',JSON.stringify(oldData));
    console.log(oldData);
    this.handleFavouriteState();
}
handleFavouriteState=()=>{
    let oldData = JSON.parse(localStorage.getItem('movies')||"[]")
    let temp =oldData.map((movie)=>movie.id);
   this.setState({
    favourites:[...temp]
   })

}

  render() {
    let movieArr = this.state.movies;
    
    return (
      <>
       {
        movieArr.length === 0? 
         <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div> :
          <div>
            <h1 className="text-center"><strong>Trending</strong></h1>
            <div className ="movies-list">
                {
                    movieArr.map((movieObj)=>(
                        <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})} >
                        <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top banner-img" alt={movieObj.name}/>
                        <h5 className="card-title movies-title">{movieObj.title || movieObj.name}</h5>
                        <div className="button-wrapper">
                            {
                                this.state.hover === movieObj.id &&   
                                <a  className="btn btn-primary movies-button" onClick={()=>this.handleFavourites(movieObj)}>{this.state.favourites.includes(movieObj.id)?"Remove from Favourites":"Add from Favourites"}</a> 
                            }
                       
                         </div>
                     </div>
                    ))
                }
               
            </div>
            <div className="page">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a class="page-link" onClick={this.handleLeft} >Previous</a></li>
                        {
                            this.state.pagArr.map((value)=>(
                                <li className="page-item"><a class="page-link"   onClick={()=>this.handleClick(value)} >{value}</a></li>
                            ))
                        }
                        <li className="page-item"><a class="page-link"  onClick={this.handleRight} >Next</a></li>
                    </ul>
                    </nav>
            </div>
            
        </div>  
       }
      </>
    )
  }
}
