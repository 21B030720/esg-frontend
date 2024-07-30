import ProjectsService from '@services/ProjectsService';
import styles from './application.module.css';
import doExist from '@common/utils/doExist';

const Applications = ({ applications }) => {
	if (applications == null || applications.length === 0) {
		return <></>;
	}

	// Handicap partial logic to test backend connection
	const postProject = async (application) => {
		// TODO: handle multiple projectFile
		const { id, name, description, directionID, projectFile } = application;
		const fileId = projectFile[0]['id'];
		const fileName = projectFile[0]['originalFileName'];

		if (!doExist(id, name, description, directionID, fileId)) {
			throw Error('Certain required fields are absent in form');
		}

		const form = {
			applicationID: id,
			name,
			description,
			directionID,
		};

		await ProjectsService.postProject(form, fileId, fileName)
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	};

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
							<p>{a?.createdAt}</p>
							<p>{a?.name}</p>
							<p>{a?.company}</p>
							<p>{a?.status}</p>
							<button onClick={() => postProject(a)}>Действие</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Applications;
