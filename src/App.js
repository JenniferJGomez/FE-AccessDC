import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import LocationsContainer from './containers/LocationsContainer'
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './containers/NavBar'

class App extends React.Component {

  state = {
    loading: true,
    locationsArray: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/locations")
    .then(res => res.json())
    .then(data=>this.setState({locationsArray: data}))
  }

  render(){
    return(
      <div className = "app">
        <Router>
          <NavBar/>

          <Route exact path="/" render={props=> (
            <HomePage />
          )}/>

          <Route path = "/locations" render={props => (
                 <LocationsContainer allLocations={this.state.locationsArray}/>
          )}/>

        </Router>
      </div>
    )

  }

}

export default App;
