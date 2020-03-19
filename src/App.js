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
          <NavigationBar/>

          <Route exact path ="/" render={props => (
            <HomePage allLocations={this.state.locationsArray}/>
          )}/>
            
          

          <Route exact path = "/locations" render={props => (
                 <LocationsContainer allLocations={this.state.locationsArray}/>
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
        ) : ("Loading!!!")}
      </div>
    )

  }

}

export default App;
