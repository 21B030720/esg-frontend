import Container from '@common/components/container/Container';
import ProjectsHeader from '../header/ProjectsHeader';
import ProjectsMain from '../main/ProjectsMain';
import styles from './projects_wrapper.module.css';

const ProjectsWrapper = () => {
	return (
		<Container type="section" maxWidth="70rem" className={styles.module}>
			<ProjectsHeader />

			<ProjectsMain />
		</Container>
	);
};

export default ProjectsWrapper;
