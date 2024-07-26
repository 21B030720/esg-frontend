import { createContext } from 'react';
import useProjects from '../hooks/useProjects';
import useProject from '../hooks/useProject';

const ProjectsContext = createContext({});

const ProjectsContextProvider = ({ children }) => {
	const { projects, isLoading, error } = useProjects();

	const {
		isOneViewed,
		openProject,
		projectId,
		closeProject,
		project,
		setProject,
	} = useProject();

	if (children == null) {
		return;
	}

	const projectsCtxVal = {
		projects,
		isLoading,
		error,
		isOneViewed,
		openProject,
		projectId,
		closeProject,
		setProject,
		project,
	};

	return (
		<ProjectsContext.Provider value={projectsCtxVal}>
			{children}
		</ProjectsContext.Provider>
	);
};

export { ProjectsContextProvider };
export default ProjectsContext;
