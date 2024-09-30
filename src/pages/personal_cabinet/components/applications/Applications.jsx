import { useNavigate } from 'react-router-dom';
import Status from '../status/Status';
import getDateFromServerString from '@pages/personal_cabinet/utils/getDateFromServerString';
import styles from './application.module.css';

const Applications = ({ applications }) => {
	const nav = useNavigate();

	if (applications == null || applications.length === 0) {
		return <></>;
	}

	return (
		<div className={styles.table}>
			<div className={styles.header}>
				<p>Дата</p>
				<p>Название</p>
				<p>Организация</p>
				<p>Статус</p>
				<p>Действие</p>
			</div>

			<div className={styles.rows}>
				{applications.map((a, i) => {
					return (
						<div key={i} className={styles.row}>
							<p>{getDateFromServerString(a?.createdAt)}</p>
							<p>{a?.name}</p>
							<p>{a?.company}</p>
							<Status statusStringFromServer={a?.status} />
							<button
								onClick={() => nav(`/applications/${a?.id}`)}
								className={styles.btn_action}
							>
								Посмотреть
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Applications;
