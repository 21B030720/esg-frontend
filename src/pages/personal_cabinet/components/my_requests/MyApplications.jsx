import dateIcon from '@assets/icons/calendar.png';
import titleIcon from '@assets/icons/title.png';
import statusIcon from '@assets/icons/status.png';
import styles from './my_applications.module.css';
import Status from '../status/Status';
import getDateFromServerString from '@modules/personal_cabinet/utils/getDateFromServerString';

const MyApplications = ({ applications }) => {
	if (applications == null) {
		return;
	}

	if (applications.length === 0) {
		return <p>Заявок нет</p>;
	}

	return (
		<div className={styles.dataTable}>
			<div className={`${styles.row} ${styles.header}`}>
				<div className={styles.cell}>
					<img src={dateIcon} alt="Date" className={styles.icon} /> Дата
				</div>

				<div className={styles.cell}>
					<img src={titleIcon} alt="Title" className={styles.icon} /> Название
				</div>

				<div className={styles.cell}>
					<img src={statusIcon} alt="Status" className={styles.icon} /> Статус
				</div>
			</div>

			{applications.map((a) => (
				<div className={styles.row} key={a.id}>
					<div className={styles.cell}>
						{getDateFromServerString(a.createdAt)}
					</div>

					<div className={styles.cell}>{a.name}</div>

					<div className={styles.cell}>
						<Status statusStringFromServer={a.status} />
					</div>
				</div>
			))}
		</div>
	);
};

export default MyApplications;
