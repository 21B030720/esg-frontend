import ProjectsHeader from '../header/ProjectsHeader';
import ProjectsMain from '../main/ProjectsMain';
import styles from './projects_wrapper.module.css';

const ProjectsWrapper = () => {
	return (
		<section type="section" className={styles.module}>
			<ProjectsHeader />

			<ProjectsMain />
		</section>
	);
};

export default ProjectsWrapper;
