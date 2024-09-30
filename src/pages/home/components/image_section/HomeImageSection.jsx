import Container from '@common/components/container/Container';
import kbtuImage from '@assets/images/home_image_section.png';
import styles from './home_image_section.module.css';

const HomeImageSection = () => {

	return (
		<Container 
			type='section'
			maxWidth='110rem' 
			className={styles.center}
		>
			<img
				className={styles.image}
				src={kbtuImage} 
				alt='drawn kbtu image' 
			/>
		</Container>
	);
};

export default HomeImageSection;