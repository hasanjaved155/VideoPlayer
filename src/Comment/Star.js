const StarRating = ({ rating }) => {
    const maxStars = 5;
    const roundedRating = Math.round(rating * 2) / 2; // Round rating to nearest 0.5
    const starElements = [];

    for (let i = 0; i < maxStars; i++) {
        if (i < roundedRating) {
            if (i + 0.5 === roundedRating) {
                // Render half star
                starElements.push(
                    <i key={i} className="fas fa-star-half-alt"></i>
                );
            } else {
                // Render full star
                starElements.push(
                    <i key={i} className="fas fa-star"></i>
                );
            }
        } else {
            // Render empty star
            starElements.push(
                <i key={i} className="far fa-star"></i>
            );
        }
    }

    return (
        <div className="flex">
            {starElements}
        </div>
    );
};

export default StarRating;
