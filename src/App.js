import React, { Component } from 'react'
import Header from './components/Header'
import Buildings from './components/Buildings'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Buildings/>
      </div>
    )
  }
}

export default App;
