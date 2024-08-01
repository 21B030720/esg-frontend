import { createContext } from 'react';
import useProjects from '../hooks/useProjects';

const ProjectsContext = createContext({});

const ProjectsContextProvider = ({ children }) => {
	const { projects, areLoading, error } = useProjects();

	if (children == null) {
		return;
	}

	const projectsCtxVal = { projects, areLoading, error };

	return (
		<ProjectsContext.Provider value={projectsCtxVal}>
			{children}
		</ProjectsContext.Provider>
	);
};

export { ProjectsContextProvider };
export default ProjectsContext;
