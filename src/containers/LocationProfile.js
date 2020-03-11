import React from 'react'
import {
    Link
  } from "react-router-dom";

class LocationProfile extends React.Component {

    state = {
        locationObj: {},
        currentUser: {id: 8}
    }

    componentDidMount(){
        fetch(`http://localhost:3000/locations/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({locationObj: data}))
    }

    bookmark = (location) => {
        fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user_id: this.state.currentUser.id, location_id: location.id}),
          })
        }

    render(){
        return(
            <div>
                <div>
                    <h1>{this.state.locationObj.name}</h1>
                    <img style={{width: 350, height: 300}} src ={this.state.locationObj.img_url} alt={this.state.locationObj.name}></img>
                    <h5>{this.state.locationObj.phone}</h5>
                    <p>Address: {this.state.locationObj.address}, Washington, D.C.</p>
                    <Link to = "/locations">
                        <button>Back</button>
                    </Link>
                    <button onClick = {()=>this.bookmark(this.state.locationObj)}>Add to favorites</button>
                </div>
            </div>
        )
    }

}

export default LocationProfile