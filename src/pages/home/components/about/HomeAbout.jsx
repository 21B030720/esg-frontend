import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HomeAboutCard from '../about_card/HomeAboutCard';
import aboutCardsData from '@pages/home/utils/aboutCardsData';
import styles from './home_about.module.css';

const HomeAbout = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

	const { t } = useTranslation();

	const handlePrevClick = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide
			? aboutCardsData.length - 1
			: currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const handleNextClick = () => {
		const isLastSlide = currentIndex === aboutCardsData.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section id="home_about" className={styles.about}>
			<h2 className={styles.about_header}>{t('about_us')}</h2>

			{isMobile ? (
				<div className={styles.slider}>
					<HomeAboutCard
						card={aboutCardsData[currentIndex]}
						isImageLeft={currentIndex % 2 === 0}
						onPrevClick={handlePrevClick}
						onNextClick={handleNextClick}
						isMobile={isMobile}
					/>
				</div>
			) : (
				<div className={styles.about_cards}>
					{aboutCardsData.map((card, i) => (
						<HomeAboutCard
							key={card.id == null ? i : card.id}
							card={card}
							isImageLeft={i % 2 === 0}
							isMobile={isMobile}
						/>
					))}
				</div>
			)}
		</section>
	);
};

export default HomeAbout;
