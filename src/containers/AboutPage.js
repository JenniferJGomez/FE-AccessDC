import React from "react"

const AboutPage = () => {

    return (
        <div>
         <div className="jumbotron">
            <h1 className="display-4">About</h1>
            <img alt = "about pic"src = "https://damore-mckim.northeastern.edu/wp-content/uploads/2018/12/feature_washington.jpg"></img>
            <hr className="my-4"></hr>
            <p>I designed the app for people with disabilities in mind to allow users to favorite, rate, and review a location with a detailed, first-hand experience to help prepare other people with disabilities before visiting a location. The app serves the disabled population with a goal of expanding the purpose into ensuring ADA compliance in the future.</p>
            <a className="btn btn-light" href="https://github.com/JenniferJGomez" role="button"><i className="fab fa-github"></i> Github</a>
        </div>
        </div>
    )

}

export default AboutPage;