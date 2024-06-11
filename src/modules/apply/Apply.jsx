import Header from '@modules/header/Header';
import styles from './apply.module.css';
import Footer from '@modules/footer/Footer';
import Container from '@common/components/container/Container';
import ApplyForm from './components/form/ApplyForm';

const Apply = () => {

	return (
		<>
			<Header />

			<Container
				maxWidth='50rem'
				className={styles.form}
			>
				<h2 className={styles.title}>
					Создать заявку
				</h2>

				<ApplyForm />
			</Container>

			<Footer />
		</>
	);
};

export default Apply;