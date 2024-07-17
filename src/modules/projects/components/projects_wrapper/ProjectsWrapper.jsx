import { useContext } from "react";
import Project from "../project/Project";
import Container from "@common/components/container/Container";
import ProjectsHeader from "../header/ProjectsHeader";
import ProjectsMain from "../main/ProjectsMain";
import ProjectsPagination from "../pagination/ProjectsPagination";
import ProjectsContext from "@modules/projects/contexts/ProjectsContext";
import styles from './projects_wrapper.module.css';

const ProjectsWrapper = () => {

	const {isOneViewed} = useContext(ProjectsContext);

	return (
		<>
			{
				isOneViewed
				? 
					// Project Details or Loading
					<Project />
				:
					// Projects List, Projects Header, Projects Pagination
					<Container
						type='section'
						maxWidth='70rem'
						className={styles.module}
					>
						<ProjectsHeader />

						<ProjectsMain />

						<ProjectsPagination />
					</Container>
			}
		</>
	);
};

export default ProjectsWrapper;