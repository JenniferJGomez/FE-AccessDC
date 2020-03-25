import React from 'react'
import { Link } from "react-router-dom";

const UserFavorites = (props) => {
    console.log(props)
    return(
        <div className = "fav-cards">
            <h6>{props.favorite.name}</h6>
            <img style={{width: 250, height: 200}} src={props.favorite.img_url} alt={props.favorite.name}></img><br></br>
            <button className = "btn btn-danger btn-sm" onClick = {()=>props.remove(props.favorite)}>Remove Favorite</button>
            <Link to={`/locations/${props.favorite.id}`}>
            <button className = "btn btn-danger btn-sm">More Details</button>
            </Link>
        </div>
    )
}

export default UserFavorites;