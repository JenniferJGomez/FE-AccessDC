import React from 'react';
import FeaturedCard from '../present/FeaturedCard'

class HomePage extends React.Component {
    render(){
      let locations = this.props.allLocations
      // console.log(this.props.allLocations)
        return(
          <div className = "home-page">
              <h1>Welcome to AccessDC</h1>
              {locations ? locations.map( location => 
                <FeaturedCard key={location.id} location ={location}/> ) :
                null
              }
              
          </div>
        )
    
      }
}

export default HomePage;