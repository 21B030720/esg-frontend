import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import isExist from '@common/utils/isExist';
import styles from './projects_card.module.css';
import { useContext } from 'react';
import AuthContext from '@common/contexts/AuthContext';

const ProjectsCard = ({ project }) => {
	// Card in Projects List
	const nav = useNavigate();
	const { t } = useTranslation();
	const { setSelectedProject } = useContext(AuthContext); 

	const handleClick = () => {
        setSelectedProject(project); // Set the project in context
        nav(`/projects/${id}`); // Navigate to the project page
    };

	if (project == null) {
		return;
	}

	const { id, name, description, direction, application } = project;

	if (!isExist(id, name, description, direction, application)) {
		return;
	}

	return (
		<div className={styles.card} onClick={handleClick}>
			<div className={styles.front}>
				<h3 className={styles.title}>{name}</h3>

				<p className={styles.descr}>{description}</p>
			</div>

			<div className={styles.info}>
				<div className={styles.info_box}>
					<p className={styles.info_label}>{t('Customer')}</p>

					<p className={styles.info_main}>{application}</p>
				</div>

				<div className={styles.info_box}>
					<p className={styles.info_label}>{t('Task direction')}</p>

					<p className={styles.info_main}>{direction}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;
