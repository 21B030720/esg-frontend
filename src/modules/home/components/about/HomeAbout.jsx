import aboutCardsData from '@modules/home/utils/aboutCardsData';
import styles from './home_about.module.css';
import HomeAboutCard from '../about_card/HomeAboutCard';
import Container from '@common/components/container/Container';

const HomeAbout = () => {

	return (
		<Container
			id='home_about'
			type='section'
			maxWidth='110rem'
			className={styles.about}
		>
			<h2 id="home_about" className={styles.about_header}>
				О нас
			</h2>

			<div className={styles.about_cards}>
				{
					aboutCardsData.map((card, i) => {
						return (
							<HomeAboutCard
								key={card.id == null ? i : card.id}
								card={card}
								isMainImageLeft={i % 2 === 0}
							/>
						);
					})
				}
			</div>
		</Container>
	);
};

export default HomeAbout;