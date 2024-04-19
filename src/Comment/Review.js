import React, { useState } from 'react'

const Review = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {

        console.log(`Rating: ${rating}, Comment: ${comment}`);

    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
            <h2 className="font-bold text-xl mb-2">Product Review</h2>
            {/* <p className="text-gray-700 text-base mb-4">This is a great product! I highly recommend it.</p> */}

            {/* Star rating component */}
            <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`text-2xl cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                        onClick={() => handleRatingChange(star)}
                    >
                        ★
                    </span>
                ))}
                <span className="ml-2">{rating} stars</span>
            </div>

            {/* Comment textarea */}
            <input
                className="border rounded-lg p-2 w-full"
                placeholder="Write your comment..."
                value={comment}
                onChange={handleCommentChange}
            />

            {/* Submit button */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default Review
