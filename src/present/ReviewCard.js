import React from 'react'

const ReviewCard = (props) => {
    const date = new Date (props.review.created_at).toDateString()
    return (
    
        <div id ="review-card" className="card w-75">
            <div className="card-body">
                <h5 className="card-title">{props.review.user.username} says:</h5>
                <p>{date}</p>
                <p className="card-text">{props.review.review}</p>
                <button className="btn btn-link" onClick = {() => props.edit(props.review)}>Edit</button>
                <button className="btn btn-link" onClick = {() => props.delete(props.review)}>Delete</button>
            </div>
        </div>
      
    )
}

export default ReviewCard