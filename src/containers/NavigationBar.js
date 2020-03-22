import React from "react"
// import {
//     Link
//   } from "react-router-dom";



const NavigationBar = (props) => {
    return(
        
            <div id = "nav" className = "navbar">
                <nav  className="navbar navbar-dark bg-primary" >
                    <a className="navbar-brand" href="http://localhost:3001/locations">AccessDC</a>
                    <a className="home-link" href="http://localhost:3001/">Home<span className="sr-only">(current)</span></a>
                    <a className="about-link" href="http://localhost:3001/about">About<span className="sr-only">(current)</span></a>
                    <a className="locations-link" href="http://localhost:3001/locations">Locations<span className="sr-only">(current)</span></a>
                    <a className="profile-link" href="http://localhost:3001/users/:id">Profile<span className="profile-link"></span></a>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" value={props.searchText} onChange = {props.changeText}></input>
                    </form>
                </nav>
            </div>
    )
}

export default NavigationBar;