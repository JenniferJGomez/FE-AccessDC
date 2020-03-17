import React from 'react'
import { Link } from "react-router-dom";
import ReviewCard from '../present/ReviewCard'

class LocationProfile extends React.Component {

    state = {
        locationObj: {},
        currentUser: {id: 8},
        value: "",
        reviewsArray: []
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

        handleChange = (event) => {
            this.setState({value: event.target.value});
          }

        submitReview = (event) => {
            event.preventDefault()
            let newReview = [...this.state.reviewsArray]
            fetch("http://localhost:3000/reviews", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({user_id: this.state.currentUser.id, location_id: this.state.locationObj.id, review: this.state.value})
            })
            .then(res => res.json())
            .then(review => this.setState({locationObj: [...this.state.reviewsArray, review], value: ""}))

            //let newReview = [...this.state.reviewsArray]
            //newReview.reviews = review
            
    }


    render(){
        console.log(this.state.locationObj)
        let reviews = this.state.locationObj.reviews
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
                <div className ="reviews-container">
                    <form id = "submit-form" onSubmit = {this.submitReview}>
                        <div className="form-group">
                        <label>Leave a Review:</label>
                        <textarea className="form-control"id="review-form" rows="4" cols="10" value={this.state.value}  onChange = {this.handleChange}></textarea>
                        <input type="submit" value="Submit"></input>
                        </div>
                    </form>
                    <h3>Reviews:</h3>
                    {reviews ? reviews.map(review => 
                        <ReviewCard key = {review.id} review = {review}/>
                    ): null}
                </div>
            </div>
        )
    }

}

export default LocationProfile