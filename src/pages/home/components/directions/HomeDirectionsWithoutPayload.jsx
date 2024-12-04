import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HomeDirectionsCard from '../directions_card/HomeDirectionsCard';
import directionsData from '@pages/home/utils/directionsData';
import styles from './home_directions.module.css';
import HomeDirectionsCardWithoutPayload from '../directions_card/HomeDirectionsCardWithoutPayload';

const HomeDirectionsWithoutPayload = () => {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	const { t } = useTranslation();

	let touchStartX = 0;
	let touchEndX = 0;

	const handleTouchStart = (e) => {
		touchStartX = e.changedTouches[0].screenX;
	};

	const handleTouchEnd = (e) => {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	};

	const handleSwipe = () => {
		if (touchStartX - touchEndX > 50) {
			setCurrentCardIndex((prevIndex) =>
				prevIndex === directionsData.length - 1 ? 0 : prevIndex + 1
			);
		}
		if (touchEndX - touchStartX > 50) {
			setCurrentCardIndex((prevIndex) =>
				prevIndex === 0 ? directionsData.length - 1 : prevIndex - 1
			);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section className={styles.directions}>
			<h2 className={styles.directions_heading}>{t('Directions')}</h2>

			{isMobile ? (
				<div
					className={styles.directions_cards}
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					<HomeDirectionsCardWithoutPayload
						key={directionsData[currentCardIndex].id}
						card={directionsData[currentCardIndex]}
						isBlue={currentCardIndex % 2 !== 0}
					/>
				</div>
			) : (
				<div className={styles.directions_cards}>
					{directionsData.map((dir, i) => (
						<HomeDirectionsCardWithoutPayload key={dir.id} card={dir} isBlue={i % 2 !== 0} />
					))}
				</div>
			)}
		</section>
	);
};

export default HomeDirectionsWithoutPayload;