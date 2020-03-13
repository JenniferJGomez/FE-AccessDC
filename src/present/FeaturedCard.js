import React from 'react'
import {
    Link
  } from "react-router-dom";

const FeaturedCard = (props) => {
    return(
        <div>
            <h2>FeaturedCard</h2>
            <img style={{width: 250, height: 200}} alt = {props.location.name} src = {props.location.img_url}></img>
            <Link to = {`/locations/${props.location.id}`}>
             <button>More Info</button>
            </Link>
        </div>
    )
}

export default FeaturedCard;