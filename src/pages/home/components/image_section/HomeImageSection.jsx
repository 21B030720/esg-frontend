// import kbtuImage from '@assets/images/home_image_section.png';
import { PAYLOAD_CMS_ADDRESS } from '@http/axios';
import styles from './home_image_section.module.css';

const HomeImageSection = ({ image }) => {
	return (
		<section className={styles.center}>
			<img className={styles.image} src={`${PAYLOAD_CMS_ADDRESS}${image.url}`} alt="drawn kbtu image" />
		</section>
	);
};

export default HomeImageSection;
