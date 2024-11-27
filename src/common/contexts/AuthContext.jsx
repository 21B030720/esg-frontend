import { createContext, useEffect, useState } from 'react';
import useAuth from '@common/hooks/useAuth';
import ProjectsService from '@services/ProjectsService';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	const {
		user,
		isAuthenticated,
		isFirstRefreshOver,
		register,
		login,
		refresh,
		logout,
	} = useAuth();

	const [selectedProject, setSelectedProject] = useState(null);

	const handleApply = async(id) => {
		console.log(selectedProject, id);
		ProjectsService.applyProject(id)
			.then(() => {
				// window.href.refresh();
			})
			.catch((err) => {
				console.error(err);
				// setPostingProjectError(err?.message);
			});
	}

	const ctxValue = {
		user,
		isAuthenticated,
		isFirstRefreshOver,
		register,
		login,
		logout,
		selectedProject,
		setSelectedProject,
		handleApply
	};

	useEffect(() => {
		// refresh();
	}, []);

	return (
		<AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;
