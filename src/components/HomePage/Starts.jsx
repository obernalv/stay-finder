import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';

const Starts = ({ rating }) => {

    const roundedRating = Math.round(rating * 2) / 2;

    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-filled" />);
        } else if (i - 0.5 === roundedRating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="star-half" />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-empty" />);
        }
    }

    return (
        <div className="star-rating">
            {stars}
        </div>
    );
}

export default Starts
