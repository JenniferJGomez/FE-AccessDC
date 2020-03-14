import React from 'react'
import UserFavorites from '../present/UserFavorites'

class UserProfile extends React.Component{

    state ={
        userObj: {},
        currentUser: {id: 8}
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.state.currentUser.id}`)
        .then(res => res.json())
        .then(data => this.setState({userObj: data}))
    }

    render(){
        let locations = this.state.userObj.locations
        return(
            <div>
                <h1>{this.state.userObj.username}'s Profile</h1>
                <img style={{width: 250, height: 230}} src = {this.state.userObj.avatar} alt="user"></img>
                <h4>Name: {this.state.userObj.name}</h4>
                <div>
                    <h5>Favorites:</h5>
                    {locations ? locations.map(location =>
                        <UserFavorites key = {location.id} favorite = {location}/>
                    ): null}
                </div>
            </div>
        )
    }
}

export default UserProfile