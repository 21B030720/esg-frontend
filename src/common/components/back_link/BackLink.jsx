import { useTranslation } from 'react-i18next';
import arrowLeft from '@assets/icons/arrow_left.svg';
import styles from './back_link.module.css';

const BackLink = ({ onClick = () => {} }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.box} onClick={onClick}>
			<img
				src={arrowLeft}
				alt="arrow to the left"
				className={styles.arrow_icon}
			/>

			<p className={styles.message}>{t('Back')}</p>
		</div>
	);
};

export default BackLink;
