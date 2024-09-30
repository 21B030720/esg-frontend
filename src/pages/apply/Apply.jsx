import { useTranslation } from 'react-i18next';
import Header from '@modules/header/Header';
import styles from './apply.module.css';
import Footer from '@modules/footer/Footer';
import ApplyForm from './components/form/ApplyForm';

const Apply = () => {
	const { t } = useTranslation();

	return (
		<>
			<Header />

			<div className={styles.form}>
				<h2 className={styles.title}>{t('Create Request')}</h2>

				<ApplyForm />
			</div>

			<Footer />
		</>
	);
};

export default Apply;
