import React from 'react'

const ReviewCard = (props) => {
    return (
        <div className = "review-card">
            <p>{props.review.user.username} says: "{props.review.review}"</p><a>Edit</a>
        </div>
    )
}

export default ReviewCard