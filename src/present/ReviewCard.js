import React from 'react'

const ReviewCard = (props) => {
    return (
        <div className = "review-card">
            <p>{props.review.user.username} says: "{props.review.review}"</p>
            <button onClick = {() => props.edit(props.review)}>Edit</button>
            <button onClick = {() => props.delete(props.review)}>Delete</button>
        </div>
    )
}

export default ReviewCard