import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import LocationsContainer from './containers/LocationsContainer'
import LocationProfile from './containers/LocationProfile'
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavigationBar from './containers/NavigationBar'
import UserProfile from './containers/UserProfile'
import LoginPage from './containers/LoginPage';
import AboutPage from './containers/AboutPage'

class App extends React.Component {

  state = {
    loading: true,
    locationsArray: [],
    searchText: "",
    properties: [],
    property: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/locations")
    .then(res => res.json())
    .then(data=>this.setState({locationsArray: data, properties: data, property: data[0]}))
  }

  changeSearchText = (event) => {
    //this.setState() of searchText
    this.setState({searchText: event.target.value.toLowerCase()})
}

nextProperty = () => {
  const newIndex = this.state.property.index+1;
  this.setState({
    property: this.state.properties[newIndex]
  })
}

prevProperty = () => {
  const newIndex = this.state.property.index-1;
  this.setState({
    property: this.state.properties[newIndex]
  })
}


  render(){
    let filteredLocations = this.state.locationsArray.filter(loc => loc.name.toLowerCase().includes(this.state.searchText))
    return(
      <div className = "app">
        {this.state.loading ? (
        <Router>
          
          <NavigationBar searchText = {this.state.searchText} changeText = {this.changeSearchText}/>

          <Route exact path ="/" render={props => (
            <HomePage properties = {this.state.properties} property = {this.state.property} next = {this.nextProperty} previous = {this.prevProperty}/>
          )}/>
            
          

          <Route exact path = "/locations" render={props => (
                 <LocationsContainer allLocations={this.state.locationsArray} locations = {filteredLocations}/>
          )}/>

          <Route exact path = "/locations/:id" render={props => {
            let id = parseInt(props.match.params.id)
              return <LocationProfile id = {id}/>
          }
        }/>

        <Route exact path = "/users/:id" render={props => {
          let id = parseInt(props.match.params.id)
          return <UserProfile id = {id}/>
        }
        }/>

        <Route exact path = "/about">
          <AboutPage/>
        </Route>

        <Route exact path = "/login" render={props => (
           <LoginPage />
        )
        }/>

        </Router>
        ) : (<div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>)}
      </div>
    )

  }

}

export default App;
