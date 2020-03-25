import React from 'react'
import { Link } from "react-router-dom";
import ReviewCard from '../present/ReviewCard'

class LocationProfile extends React.Component {

    state = {
        locationObj: {},
        currentUser: {id: 164},
        value: "",
        name: "",
        phone: "",
        img_url: "",
        address: "",
        reviews: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/locations/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({locationObj: data, name: data.name, address: data.address, img_url: data.img_url, phone: data.phone, reviews: data.reviews}))
    }
//******************favorite handlers******************//
    bookmark = (location) => {
        fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user_id: this.state.currentUser.id, location_id: location.id}),
          })
          alert("Added to your favorites!")
          //add conditional statement that gives alert based off if the favorite has already been added
        }

//******************review handlers******************//

        handleChange = (event) => {
            this.setState({value: event.target.value});
        }

        submitReview = (event) => {
            
            event.preventDefault()
            fetch("http://localhost:3000/reviews", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({user_id: this.state.currentUser.id, location_id: this.state.locationObj.id, review: this.state.value})
            })
            .then(res => res.json())
            .then(review => this.setState({reviews: [...this.state.reviews, review], value: ""}))
            alert("Review Submitted!")
    }

    deleteReview = (review) => {
        let reviewsArray = this.state.reviews
        fetch(`http://localhost:3000/reviews/${review.user_id}/${review.location_id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })

        let result = reviewsArray.filter(rev => rev.id !== review.id)
        this.setState({reviews: result})
    }

    editReview = (review) => {
        // fetch(`http://localhost:3000/reviews/${review.user_id}/${review.location_id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        // })
    }

    render(){
        let rev = this.state.reviews
        return(
            <div>
                <div id = "location-info">
                    <h1 id = "loc-profile-header">{this.state.name}</h1>
                    <img style={{width: 350, height: 300}} src ={this.state.img_url} alt={this.state.name}></img>
                    <h5>{this.state.phone}</h5>
                    <p>Address: {this.state.address}, Washington, D.C.</p>
                    <Link to = "/locations">
                        <button type="button" className="btn btn-outline-danger">Back</button>
                    </Link>
                    <button type="button" className="btn btn-outline-danger" onClick = {()=>this.bookmark(this.state.locationObj)}>Add to favorites</button>
                </div>
                <div id = "reviews-box" className ="reviews-container">
                    <form id = "submit-form" onSubmit = {this.submitReview}>
                        <div className="form-group">
                        <h4>Leave a Review:</h4>
                        <textarea className="form-control"id="review-form" rows="4" cols="10" value={this.state.value}  onChange = {this.handleChange}></textarea>
                        <input type="button" className="btn btn-outline-danger" type="submit" value="Submit"></input>
                        </div>
                    </form>
                    <h4 id ="review-title">Reviews:</h4>
                    <p className="review-counter">Total Reviews: {rev.length ? rev.length : "No Reviews yet"}</p>
                    {rev ? rev.map(review => 
                        <ReviewCard key = {review.id} review = {review} delete = {this.deleteReview} edit = {this.editReview}/>
                    ): null}
                </div>
            </div>
        )
    }

}

export default LocationProfile