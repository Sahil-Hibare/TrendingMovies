import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div style= {{display:'flex',padding:'0.5'}}>
       <h1>Movies App</h1>
       <h2 style={{marginLeft:'1rem',marginTop:'1rem'}}>Favourities</h2>
      </div>
    )
  }
}
