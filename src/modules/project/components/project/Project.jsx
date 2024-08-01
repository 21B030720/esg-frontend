import { useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import ProjectContext from '@modules/project/contexts/ProjectContext';
import Container from '@common/components/container/Container';
import ProjectCard from '../project_card/ProjectCard';
import BackLink from '@common/components/back_link/BackLink';
import styles from './project.module.css';

const Project = () => {
	const { project, isLoading, error } = useContext(ProjectContext);

	if (error != null) {
		return (
			<Container type="section" maxWidth="80rem" className={styles.module}>
				<BackLink />

				<p>error</p>
			</Container>
		);
	}

	return (
		<Container type="section" maxWidth="80rem" className={styles.module}>
			<BackLink />

			{isLoading ? (
				<ClipLoader
					size="1.5rem"
					color="var(--color-blue-dark)"
					className={styles.loader}
				/>
			) : (
				<div className={styles.main}>
					<ProjectCard isLoading={isLoading} project={project} />

					<button className={styles.button}>Подать свое решение</button>
				</div>
			)}
		</Container>
	);
};

export default Project;
