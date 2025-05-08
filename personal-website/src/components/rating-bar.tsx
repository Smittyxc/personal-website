import Star from "./star";

export default function Rating({ rating, onRatingChange }) {
    const handleStarClick = (userRating) => {
        onRatingChange(userRating)
    };

    const starArray = Array(5).fill(null).map((_, index) => index < rating);
    console.log(starArray)

    return (
        <div>
            {starArray.map(( isGold, index ) => (
                <Star key={index} isGold={isGold} onClick={() => handleStarClick(index + 1)} /> 
            ))}
            
        </div>
    
    ) 
}