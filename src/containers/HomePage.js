import React from 'react';
import FeaturedCard from '../present/FeaturedCard'
import { Link } from "react-router-dom";


class HomePage extends React.Component {
    render(){
      
        return(
          <div className = "home-page">
              <h1 id="home-header">Welcome to AccessDC</h1>
              <Link to = "/locations">
                <button className="btn btn-danger">Browse Locations</button>
              </Link>

              <div className = "featured-carousel">
                <button 
                  //   onClick={() => this.nextProperty()} 
                  //   disabled={property.index === data.properties.length-1}
                >
                Next
                </button>
                <button 
                  //   onClick={() => this.prevProperty()} 
                  //   disabled={property.index === 0}
                >Prev
                </button>
                <FeaturedCard/>
              </div>


          </div>
        )
    
      }
}

export default HomePage;