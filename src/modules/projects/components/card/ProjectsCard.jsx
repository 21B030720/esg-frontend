import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './projects_card.module.css';
import doExist from '@common/utils/doExist';

const ProjectsCard = ({ card }) => {
	// Card in Projects List
	const nav = useNavigate();
	const { t } = useTranslation();

	if (card == null) {
		return;
	}

	const { id, name, description, directionID, applicationID } = card;

	if (!doExist(id, name, description, directionID, applicationID)) {
		return;
	}

	return (
		<div className={styles.card} onClick={() => nav(`/projects/${id}`)}>
			<div className={styles.front}>
				<h3 className={styles.title}>{name}</h3>

				<p className={styles.descr}>{description}</p>
			</div>

			<div className={styles.info}>
				<div className={styles.info_box}>
					<p className={styles.info_label}>{t('Customer')}</p>

					<p className={styles.info_main}>{applicationID}</p>
				</div>

				<div className={styles.info_box}>
					<p className={styles.info_label}>{t('Task direction')}</p>

					<p className={styles.info_main}>{directionID}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;
