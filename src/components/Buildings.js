import React, { Component } from 'react'
import Building from './Building'
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

const buildingsStyles = {
    display: 'flex',
    flexWrap: 'wrap'
}