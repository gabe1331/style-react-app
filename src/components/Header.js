import React, { Component } from 'react'
import headerBg from '../assets/building-bg.jpeg'

export class Header extends Component {
  render() {
    return (
        <header style={headerStyles}>
           <h1>Oh, hey</h1>
        </header>
    )
  }
}

export default Header

const headerStyles = {
    backgroundImage: `url(${headerBg})`,
    backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundBlendMode: 'overlay',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '40vh',
    minHeight: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '60px'
}