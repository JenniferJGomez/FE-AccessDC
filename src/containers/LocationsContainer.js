import React from 'react'
import LocationCard from '../present/LocationCard'

class LocationsContainer extends React.Component{

    render(){
        return(
            <div>
                <div>
                    {this.props.allLocations.map(location => 
                        <LocationCard key = {location.id} location = {location}/> 
                    )}  
                </div>
            </div>
        )
    }
}

export default LocationsContainer;