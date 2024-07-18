import { useState } from "react";

const useAuth = () => {
	const defaultUserState = {
		firstName: '',
		lastName: '',
		username: '',
		role: '',
		email: '',
	};

	const [user, setUser] = useState(defaultUserState);
	const [isAuthenticated, setAuthenticated] = useState(false);

	const register = (regFormData) => {

	};

	const login = (loginFormData) => {

	};

	return {
		user, isAuthenticated, register, login,
	};
};

export default useAuth;