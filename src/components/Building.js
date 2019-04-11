import React, { Component } from 'react'
import buildingImg from '../assets/building-1.jpeg'

export class Building extends Component {
  render() {
    return (
        <div className="building-wrapper" style={buildingWrapStyles}>
            <div className="building" style={buildingStyles}>
                <img src={buildingImg} alt="building"/>
                <div className="building-content" style={{padding: '10px'}}>
                    <h3>Building</h3>
                    <p>A description about a building</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Building

const buildingWrapStyles = {
    width: '25%'
}

const buildingStyles = {
    margin: `10px`,
    borderRadius: '7px',
    boxShadow: '0 0 12px rgba(0,0,0,0.15)',
    overflow: 'hidden'
}