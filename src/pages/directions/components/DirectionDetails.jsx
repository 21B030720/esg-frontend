import { useEffect } from 'react';
import leftArrow from '../leftArrow.png';
import rightArrow from '../rightArrow.png';
import '../Directions.css';
import { PAYLOAD_CMS_ADDRESS } from '@http/axios';

const DirectionDetails = ({
	direction,
	onPreviousDirection,
	onNextDirection,
}) => {
	useEffect(() => {
		document.title = direction.title;
	}, [direction]);

	return (
		<div className="direction-details-container">
			<h2>{direction.title}</h2>

			<div className="direction-slider">
				<img
					className="arrow-image"
					src={leftArrow}
					alt="Previous Direction"
					onClick={onPreviousDirection}
				/>

				<img className='direction-main-image' src={`${PAYLOAD_CMS_ADDRESS}${direction.image.url}`} alt={direction.title} />

				<img
					className="arrow-image"
					src={rightArrow}
					alt="Next Direction"
					onClick={onNextDirection}
				/>
			</div>

			<p>{direction.body}</p>
		</div>
	);
};

export default DirectionDetails;
