import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div style= {{display:'flex',padding:'0.5'}}>
       <Link to="/" style={{textDecoration:'none'}}><h1 style={{marginLeft:'1rem',marginTop:'1rem'}}>Movies App</h1></Link>
       <Link to="/favourites" style={{textDecoration:'none'}}><h2 style={{marginLeft:'1rem',marginTop:'1rem'}}>Favourities</h2></Link>
       
      </div>
    )
  }
}
