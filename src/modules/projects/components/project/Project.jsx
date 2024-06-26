import { useContext, useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Container from '@common/components/container/Container';
import ProjectCard from '../project_card/ProjectCard';
import ProjectBackLink from '../project_back_link/ProjectBackLink';
import ProjectsContext from '@modules/projects/contexts/ProjectsContext';
import getProjectById from '@common/api/getProjectById';
import isObjectEmpty from '@common/utils/isObjectEmpty';
import styles from './project.module.css';

const Project = () => {

	const {projectId, project, setProject} = useContext(ProjectsContext);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if(isObjectEmpty(project)) {
			setLoading(true);

			const p = new Promise(res => {
				const project = getProjectById(projectId);

				project.then(res);
			})
			.then(project => {
				setProject(project);
			})
			.catch(e => {
				console.error(e);
			})
			.finally(() => {
				setLoading(false);
			});
		}

		return () => {
			// TODO: abort a fetch
			setLoading(false);
		};
	}, [projectId]);

	return (
		<Container 
			type='section'
			maxWidth='80rem' 
			className={styles.module}
		>
			<ProjectBackLink />

			{
				isLoading
				?
					<ClipLoader
						size='1.5rem'
						color='var(--color-blue-dark)'
						className={styles.loader}
					/>
				:
					<div className={styles.main}>
						<ProjectCard
							isLoading={isLoading}
							project={project}
						/>

						<button className={styles.button}>
							Подать свое решение
						</button>
					</div>
			}
		</Container>
	);
};

export default Project;