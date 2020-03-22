import React from 'react';
import FeaturedCard from '../present/FeaturedCard'
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render(){
      let locations = this.props.allLocations
      // console.log(this.props.allLocations)
        return(
          <div className = "home-page">
              <h1>Welcome to AccessDC</h1>
              <Link to = "/locations">
                <button className="btn btn-danger">Browse Locations</button>
              </Link>
              {locations ? locations.map( location => 
                <FeaturedCard key={location.id} location ={location}/> 
                ) 
                :
                null
              }     
          </div>
        )
    
      }
}

export default HomePage;