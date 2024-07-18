import { createContext } from "react";
import useAuth from "src/hooks/useAuth";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

	const {
		user, isAuthenticated, register, login,
	} = useAuth();

	const ctxValue = { 
		user, isAuthenticated, register, login,
	};

	return (
		<AuthContext.Provider value={ctxValue}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
export default AuthContext;