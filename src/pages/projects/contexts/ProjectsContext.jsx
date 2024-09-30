import { createContext } from 'react';
import useProjects from '../hooks/useProjects';

const ProjectsContext = createContext({});

const ProjectsContextProvider = ({ children }) => {
	const {
		projects,
		areLoading,
		error,
		page,
		setPage,
		perPage,
		inputFilters,
		onInputStatusFilterChange,
		onInputSearchNameChange,
		onInputDirectionChange,
		applyFiltersAndSearchName,
		totalPagesCount,
		fetchProjects,
	} = useProjects();

	if (children == null) {
		return;
	}

	const projectsCtxVal = {
		projects,
		areLoading,
		error,
		page,
		setPage,
		perPage,
		inputFilters,
		onInputStatusFilterChange,
		onInputSearchNameChange,
		onInputDirectionChange,
		applyFiltersAndSearchName,
		totalPagesCount,
		fetchProjects,
	};

	return (
		<ProjectsContext.Provider value={projectsCtxVal}>
			{children}
		</ProjectsContext.Provider>
	);
};

export { ProjectsContextProvider };
export default ProjectsContext;
