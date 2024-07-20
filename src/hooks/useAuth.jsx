import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { BACKEND_ADDRESS } from "@common/baseUrls";

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
			axios.post(`${BACKEND_ADDRESS}/auth/sign-up`, regFormData, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					// no actions, just redirects to /login page

					resolve(response.data);
				})
				.catch(error => reject(error))
		});
	};

	const login = (loginFormData) => {
		return new Promise((resolve, reject) => {
			axios.post(`${BACKEND_ADDRESS}/auth/sign-in`, loginFormData, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					const token = response.data.token;
					localStorage.setItem('token', token);

					const { firstName, lastName, role, email, sub } = jwtDecode(token);
					const userData = { firstName, lastName, role, email, sub };

					setUser(userData);
					localStorage.setItem('user', JSON.stringify(userData));

					setAuthenticated(true);
					localStorage.setItem('isAuthenticated', true);

					resolve(token);
				})
				.catch(error => reject(error))
		});
	};

	const restoreFromStorage = () => {
		const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
		const user = JSON.parse(localStorage.getItem('user'));
		
		// incomplete condition
		if(!isAuthenticated || user == null) {
			setAuthenticated(false);
			setUser(userDefaultState);
		}

		setAuthenticated(isAuthenticated);
		setUser(user);
	};

	const logout = () => {
		setAuthenticated(false);
		setUser(userDefaultState);

		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('isAuthenticated');
	};

	return {
		user, isAuthenticated, register, login, restoreFromStorage, logout
	};
};

export default useAuth;