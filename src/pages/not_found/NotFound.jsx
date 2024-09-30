import { Link, useNavigate } from 'react-router-dom';
import styles from './not_found.module.css';

const NotFound = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<section className={styles.page}>
			<h1 className={styles.error}>404. Such page doesn&apos;t exist</h1>

			<Link className={styles.link} onClick={goBack}>
				Go back to home?
			</Link>
		</section>
	);
};

export default NotFound;
