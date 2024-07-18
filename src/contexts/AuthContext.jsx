import { createContext, useEffect } from "react";
import useAuth from "@hooks/useAuth";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

	const {
		user, isAuthenticated, register, login, restoreFromStorage,
	} = useAuth();

	const ctxValue = { 
		user, isAuthenticated, register, login,
	};

	useEffect(() => {
		restoreFromStorage();
	}, []);

	return (
		<AuthContext.Provider value={ctxValue}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;