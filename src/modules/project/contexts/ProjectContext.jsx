import { createContext } from 'react';
import useProject from '../hooks/useProject';

const ProjectContext = createContext({});

const ProjectContextProvider = ({ children }) => {
	const { project, isLoading, error } = useProject();

	const projectCtxValue = { project, isLoading, error };

	return (
		<ProjectContext.Provider value={projectCtxValue}>
			{children}
		</ProjectContext.Provider>
	);
};

export { ProjectContextProvider };
export default ProjectContext;
