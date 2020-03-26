import React from 'react';
import FeaturedCard from '../present/FeaturedCard'
import { Link } from "react-router-dom";
import Logo from "../images/a-logo.png"


class HomePage extends React.Component {
    render(){
      
        return(
          <div className = "home-page">
              <h1 id="home-header">Let's work together</h1>
              <p id ="home-text">Share your firsthand experience while exploring DC's most popular spots so others know what to expect!</p>
              <Link to = "/locations">
                <button className="btn btn-danger">Browse Locations</button>
              </Link>
              <a id = "questions-btn" type="button" className="btn btn-secondary" href="mailto:jennifergomezbruno@email.com"><i id ="envelope"className="fas fa-envelope"></i>Questions?</a>

              <div className = "featured-carousel">
                <FeaturedCard/>
              </div>


          </div>
        )
    
      }
}

export default HomePage;