import Star from "./star";

interface RatingProps {
    rating: number;
    onRatingChange: (newRating: number) => void;
  }
  
export default function Rating({ rating, onRatingChange } : RatingProps) {
    const handleStarClick = (userRating: number) => {
        onRatingChange(userRating)
    };

    const starArray = Array(5).fill(null).map((_, index) => index < rating);

    return (
        <div>
            {starArray.map(( isGold, index ) => (
                <Star key={index} isGold={isGold} onClick={() => handleStarClick(index + 1)} /> 
            ))}
            
        </div>
    
    ) 
}