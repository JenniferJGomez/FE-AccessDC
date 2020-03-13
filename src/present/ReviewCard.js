import React from 'react'

const ReviewCard = (props) => {
    return (
        <div>
            <p>{props.review.user.username} says: "{props.review.review}"</p>
        </div>
    )
}

export default ReviewCard