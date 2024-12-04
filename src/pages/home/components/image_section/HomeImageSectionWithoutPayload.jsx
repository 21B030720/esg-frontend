import kbtuImage from '@assets/images/home_image_section.png';
import styles from './home_image_section.module.css';

const HomeImageSectionWithoutPayload = () => {
	return (
		<section className={styles.center}>
			<img className={styles.image} src={kbtuImage} alt="drawn kbtu image" />
		</section>
	);
};

export default HomeImageSectionWithoutPayload;