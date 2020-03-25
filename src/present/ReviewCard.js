import React from 'react'

const ReviewCard = (props) => {
    const date = new Date (props.review.created_at).toDateString()
    return (
        <div id ="review-card" className="card w-75">
            <div className="card-body">
                <img className="avatar" style={{width: 100, height: 100}} src={props.review.user.avatar} alt={props.review.user}></img>
                <div id ="review-context">
                <h5 className="card-title">{props.review.user.username} says:</h5>
                <p>{date}</p>
                <p className="card-text">{props.review.review}</p>
                
                <button className="btn btn-link" onClick = {() => props.edit(props.review)}>Edit</button>
                <button className="btn btn-link" onClick = {() => props.delete(props.review)}>Delete</button>
                </div>
            </div>
        </div>
      
    )
}

export default ReviewCard