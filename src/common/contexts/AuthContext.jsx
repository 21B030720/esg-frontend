import { createContext, useEffect } from 'react';
import useAuth from '@common/hooks/useAuth';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	const { user, isAuthenticated, register, login, refresh, logout } = useAuth();

	const ctxValue = {
		user,
		isAuthenticated,
		register,
		login,
		logout,
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
