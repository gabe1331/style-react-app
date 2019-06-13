import React, { Component } from 'react'
import Building from './Building'

const buildingsStyles = {
    display: 'flex',
    flexWrap: 'wrap'
}

export class Buildings extends Component {
  render() {
    return (
      <section className="buildings container" style={buildingsStyles}>
        <Building/>
        <Building/>
        <Building/>
        <Building/>
        <Building/>
        <Building/>
        <Building/>
      </section>
    )
  }
}

export default Buildings
