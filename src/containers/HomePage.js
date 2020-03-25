import React from 'react';
import FeaturedCard from '../present/FeaturedCard'
import { Link } from "react-router-dom";


class HomePage extends React.Component {
    render(){
      let locations = this.props.allLocations
      // console.log(this.props.allLocations)
        return(
          <div className = "home-page">
              <img id = "dis-logo" src = ""></img><br></br>
              <h1 id="home-header">Welcome to AccessDC</h1>
              <Link to = "/locations">
                <button className="btn btn-danger">Browse Locations</button>
              </Link>

              <div>
                <FeaturedCard/>
              </div>


          </div>
        )
    
      }
}

export default HomePage;