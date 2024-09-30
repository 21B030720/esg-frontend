import { useNavigate, useRouteError } from 'react-router-dom';
import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';
import styles from './error_boundary.module.css';

const ErrorBoundary = () => {
	const nav = useNavigate();
	const error = useRouteError();

	const toHome = () => nav('/');

	return (
		<div className={styles.section}>
			<h2 className={styles.heading}>Что-то пошло не так :(</h2>

			<p className={styles.error_message}>{error.message || ''}</p>

			<ButtonBlueRound
				text="На главную страницу"
				className={styles.button}
				onClick={toHome}
			/>
		</div>
	);
};

export default ErrorBoundary;
