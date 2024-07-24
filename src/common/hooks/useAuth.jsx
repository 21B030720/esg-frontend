import { useState } from 'react';
import AuthService from '@services/AuthService';

const useAuth = () => {
	const userDefaultState = {
		firstName: '',
		lastName: '',
		username: '',
		role: '',
		email: '',
	};
	const [user, setUser] = useState(userDefaultState);
	const [isAuthenticated, setAuthenticated] = useState(null);

	const register = (regFormData) => {
		return new Promise((resolve, reject) => {
			AuthService.register(regFormData)
				.then((response) => resolve(response))
				.catch((err) => reject(err));
		});
	};

	const login = (loginFormData) => {
		return new Promise((resolve) => {
			AuthService.login(loginFormData)
				.then((user) => {
					setUser(user);
					setAuthenticated(true);

					resolve(user);
				})
				.catch((err) => console.error(err));
		});
	};

	const logout = () => {
		AuthService.logout()
			.then(() => {
				setUser(userDefaultState);
				setAuthenticated(false);

				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');
			})
			.catch((err) => console.error(err));
	};

	const refresh = () => {};

	return {
		user,
		isAuthenticated,
		register,
		login,
		refresh,
		logout,
	};
};

export default useAuth;
