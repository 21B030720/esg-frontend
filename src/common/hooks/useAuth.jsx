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

	const logout = async () => {
		return await AuthService.logout()
			.then(() => {
				setUser(userDefaultState);
				setAuthenticated(false);

				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');
			})
			.catch((err) => console.error(err));
	};

	const refresh = () => {
		if (!AuthService.isRefreshTokenExist()) {
			if (!sessionStorage.getItem('hasBeenPageReloaded')) {
				sessionStorage.setItem('hasBeenPageReloaded', 'true');

				logout();
				window.location.href = '/';
			}
		}

		AuthService.refresh()
			.then((user) => {
				setUser(user);
				setAuthenticated(true);
			})
			.catch((err) => {
				// if (err?.status === 403) {
				// logout();

				// window.location.href = '/';
				// }

				if (err.response) {
					// TODO: bind to 403 case
					// TODO: check for infinite redirect
					if (err?.response?.status == 403) {
						logout();

						window.location.href = '/';
					}
				} else if (err.request) {
					console.error('No response received:', err.request);
				} else {
					console.error('Error', err.message);
				}
			});
	};

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
