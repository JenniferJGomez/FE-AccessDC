import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import LocationsContainer from './containers/LocationsContainer'

class App extends React.Component {
  render(){
    return(
      <div className = "app">
        <HomePage />
        <LocationsContainer/>
      </div>
    )

  }

}

export default App;
