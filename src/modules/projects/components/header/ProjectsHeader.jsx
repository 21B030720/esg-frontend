import { useTranslation } from 'react-i18next';
import styles from './projects_header.module.css';

const ProjectsHeader = () => {

	const { t } = useTranslation();

	return (
		<div className={styles.header}>
			<h2 className={styles.heading_primary}>
				{t('projects')}
			</h2>

			<p className={styles.heading_secondary}>
				{t("Projects are tasks related to the development, implementation, and improvement of new technologies, products, and processes.")}
			</p>
		</div>
	);
};

export default ProjectsHeader;