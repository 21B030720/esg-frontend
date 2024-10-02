import { createContext, useEffect, useState } from 'react';
import useAuth from '@common/hooks/useAuth';

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

	const ctxValue = {
		user,
		isAuthenticated,
		isFirstRefreshOver,
		register,
		login,
		logout,
		selectedProject,
		setSelectedProject
	};

	useEffect(() => {
		refresh();
	}, []);

	return (
		<AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;
