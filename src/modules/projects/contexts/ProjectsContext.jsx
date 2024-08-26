import { createContext } from 'react';
import useProjects from '../hooks/useProjects';

const ProjectsContext = createContext({});

const ProjectsContextProvider = ({ children }) => {
	const { projects, page, perPage, areLoading, error } = useProjects();

	if (children == null) {
		return;
	}

	const projectsCtxVal = { projects, page, perPage, areLoading, error };

	return (
		<ProjectsContext.Provider value={projectsCtxVal}>
			{children}
		</ProjectsContext.Provider>
	);
};

export { ProjectsContextProvider };
export default ProjectsContext;
