import React from 'react'

const UserFavorites = (props) => {
    return(
        <div>
            <h6>{props.favorite.name}</h6>
            <img style={{width: 250, height: 200}} src={props.favorite.img_url} alt={props.favorite.name}></img>
            <button onClick = {()=>props.remove(props.favorite)}>Remove Favorite</button>
            <button>More Details</button>
        </div>
    )
}

export default UserFavorites;