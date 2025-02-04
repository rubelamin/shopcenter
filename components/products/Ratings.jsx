import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductRating = ({ rating }) => {
	const renderStars = () => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

		for (let i = 0; i < fullStars; i++) {
			stars.push(<FaStar color="#ffa500" key={i} />);
		}

		if (hasHalfStar) {
			stars.push(<FaStarHalfAlt color="#ffa500" key="half" />);
		}

		for (let i = 0; i < emptyStars; i++) {
			stars.push(<FaRegStar color="#919090" key={`empty-${i}`} />);
		}

		return stars;
	};

	return (
		<div className="mt-3 flex items-center justify-start gap-1">
			{renderStars()}
		</div>
	);
};

export default ProductRating;
