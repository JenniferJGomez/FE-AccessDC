import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';

class App extends React.Component {
  render(){
    return(
      <div className = "home-page">
        <HomePage />
      </div>
    )

  }

}

export default App;
