import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./star_rating.styles.css";

export default function StarRating({numberOfStars = 5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex)
  }

  function handleMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex)
  }

  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "fill" : "empty"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
