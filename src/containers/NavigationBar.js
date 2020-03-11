import React from "react"
// import {
//     Link
//   } from "react-router-dom";



const NavigationBar = (props) => {
    return(
        
            <div className = "navbar">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="http://localhost:3001/locations">AccessDC</a>
                    <a className="nav-link" href="http://localhost:3001/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="http://localhost:3001/locations">Locations <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="http://localhost:3001/users/:id">Profile <span className="profile-link"></span></a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
    )
}

export default NavigationBar;