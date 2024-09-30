import { ClipLoader } from 'react-spinners';
import ProjectsCard from '../card/ProjectsCard';
import styles from './projects_cards.module.css';

const ProjectsCards = ({ projects, areLoading, error }) => {
	if (error) {
		return <p className={styles.error_empty}>{error}</p>;
	}

	return (
		<div className={styles.cards}>
			{areLoading ? (
				<ClipLoader
					size="2.5rem"
					speedMultiplier="0.8"
					color="var(--color-blue-dark)"
					className={styles.loader}
				/>
			) : projects != null || projects.length > 0 ? (
				projects.map((project, i) => <ProjectsCard key={i} project={project} />)
			) : (
				<p>Проекты не найдены</p>
			)}
		</div>
	);
};

export default ProjectsCards;
