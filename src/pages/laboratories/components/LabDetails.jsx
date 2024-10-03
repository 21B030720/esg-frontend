import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import leftArrow from '../leftArrow.png';
import rightArrow from '../rightArrow.png';
import '../Labs.css';

const LabDetails = ({ lab, onPreviousLab, onNextLab }) => {
	const { t } = useTranslation();

	useEffect(() => {
		document.title = lab.name;
	}, [lab]);

	return (
		<div className="lab-details-container">
			<h2>{t(lab.name)}</h2>

			<div className="lab-slider">
				<img
					className="arrow-image"
					src={leftArrow}
					alt="Previous Lab"
					onClick={onPreviousLab}
				/>

				<img className="labs-main-image" src={lab.image} alt={lab.name} />

				<img
					className="arrow-image"
					src={rightArrow}
					alt="Next Lab"
					onClick={onNextLab}
				/>
			</div>
			<p>{lab.description}</p>
		</div>
	);
};

export default LabDetails;
