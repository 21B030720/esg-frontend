import HomeDirectionsCard from '../directions_card/HomeDirectionsCard';
import Container from '@common/components/container/Container';
import directionsData from '@modules/home/utils/directionsData';
import styles from './home_directions.module.css';
import React, { useState, useEffect } from 'react';

const HomeDirections = () => {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            setCurrentCardIndex((prevIndex) => (prevIndex === directionsData.length - 1 ? 0 : prevIndex + 1));
        }
        if (touchEndX - touchStartX > 50) {
            setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? directionsData.length - 1 : prevIndex - 1));
        }
    };


	return (
		<Container 
			type='section'
			
			className={styles.directions}
		>
			<h2 className={styles.directions_heading}>Направления</h2>

			{isMobile ? (
                <div
                    className={styles.directions_cards}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <HomeDirectionsCard
                        key={directionsData[currentCardIndex].id}
                        card={directionsData[currentCardIndex]}
                        isBlue={currentCardIndex % 2 !== 0}
                    />
                </div>
            ) : (
                <div className={styles.directions_cards}>
                    {directionsData.map((dir, i) => (
                        <HomeDirectionsCard
                            key={dir.id}
                            card={dir}
                            isBlue={i % 2 !== 0}
                        />
                    ))}
                </div>
            )}
		</Container>
	);
};

export default HomeDirections;