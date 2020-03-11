import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import LocationsContainer from './containers/LocationsContainer'
import LocationProfile from './containers/LocationProfile'
import {BrowserRouter as Router, Route} from "react-router-dom";
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
        {this.state.loading ? (
        <Router>
          <NavBar/>

          <Route exact path="/" render={props=> (
            <HomePage />
          )}/>

          <Route exact path = "/locations" render={props => (
                 <LocationsContainer allLocations={this.state.locationsArray}/>
          )}/>

          <Route exact path = "/locations/:id" render={props => {
            let id = parseInt(props.match.params.id)
            // let locationObj = this.state.locationsArray.find(loc => loc.id === id)
            return <LocationProfile id = {id}/>
          }
        }/>

        </Router>
        ) : ("Loading!!!")}
      </div>
    )

  }

}

export default App;
