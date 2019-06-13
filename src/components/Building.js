import React, { Component } from 'react'
import buildingImg from '../assets/building-1.jpeg'

const buildingWrapStyles = {
    width: '25%'
}

const buildingStyles = {
    margin: `10px`,
    borderRadius: '7px',
    boxShadow: '0 0 12px rgba(0,0,0,0.15)',
    overflow: 'hidden'
}

const buildingContentStyles = {
    padding: '10px'
}

export class Building extends Component {
  render() {
    return (
        <div style={buildingWrapStyles}>
            <div style={buildingStyles}>
                <img src={buildingImg} alt="building"/>
                <div style={buildingContentStyles}>
                    <h3>{this.props.Building.title}</h3>
                    <p>{this.props.Building.about}</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Building
