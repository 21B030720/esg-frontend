import { useEffect } from 'react';
import leftArrow from '../leftArrow.png';
import rightArrow from '../rightArrow.png';
import '../Directions.css';

const DirectionDetails = ({
	direction,
	onPreviousDirection,
	onNextDirection,
}) => {
	useEffect(() => {
		document.title = direction.name;
	}, [direction]);

	return (
		<div className="direction-details-container">
			<h2>{direction.name}</h2>

			<div className="direction-slider">
				<img
					className="arrow-image"
					src={leftArrow}
					alt="Previous Direction"
					onClick={onPreviousDirection}
				/>

				<img className='direction-main-image' src={direction.image} alt={direction.name} />

				<img
					className="arrow-image"
					src={rightArrow}
					alt="Next Direction"
					onClick={onNextDirection}
				/>
			</div>

			<p>{direction.description}</p>
		</div>
	);
};

export default DirectionDetails;
