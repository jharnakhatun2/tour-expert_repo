import React, { useState } from 'react';

const Review = () => {
    const [review, setReview] = useState({});

    const handleAddReview = event => {
        event.preventDefault();
        console.log(review);
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);

        console.log(newReview);
    }
    return (
        <div>
            
        </div>
    );
};

export default Review;