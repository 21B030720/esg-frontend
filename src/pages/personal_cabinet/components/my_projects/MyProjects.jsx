import { fakeProjects } from '../../api/fakeData';
import dateIcon from '@assets/icons/calendar.png';
import titleIcon from '@assets/icons/title.png';
import statusIcon from '@assets/icons/status.png';
import leaderIcon from '@assets/icons/leader.png';
import styles from './my_projects.module.css';

const MyProjects = () => {
	// NOTE: getting projects data
	const projects = fakeProjects; 

	const getStatusStyle = (status) => {
		switch (status) {
			case 'Отказано':
				return styles.denied;
			case 'В обработке':
				return styles.inProgress;
			case 'Опубликовано':
				return styles.published;
			default:
				return '';
		}
	};
		
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
					<img src={leaderIcon} alt="Leader" className={styles.icon} /> Руководитель
				</div>

				<div className={styles.cell}>
					<img src={statusIcon} alt="Status" className={styles.icon} /> Статус
				</div>
			</div>

			{
				projects.map(project => (
					<div className={styles.row} key={project.id}>
						<div className={styles.cell}>{project.date}</div>

						<div className={styles.cell}>{project.title}</div>

						<div className={styles.cell}>{project.leader}</div>
						
						<div className={styles.cell}>
							<div className={getStatusStyle(project.status)}>{project.status}</div>
						</div>
					</div>
				))
			}
		</div>
	);
};

export default MyProjects;