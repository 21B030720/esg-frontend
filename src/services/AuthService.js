import $axios from '@http/axios';
import { jwtDecode } from 'jwt-decode';

export default class AuthService {
	static async register(formData) {
		return new Promise((resolve, reject) => {
			$axios
				.post('/auth/sign-up', formData, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then((response) => resolve(response))
				.catch((err) => reject(err));
		});
	}

	static async login(formData) {
		return new Promise((resolve, reject) => {
			$axios
				.post('/auth/sign-in', formData, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				.then((response) => {
					const accessToken = response.data.access_token;
					const refreshToken = response.data.refresh_token;

					localStorage.setItem('access_token', accessToken);
					localStorage.setItem('refresh_token', refreshToken);

					const { firstName, lastName, role, email, sub } =
						jwtDecode(accessToken);
					const user = { firstName, lastName, role, email, sub };

					resolve(user);
				})
				.catch((err) => reject(err));
		});
	}

	static async logout() {
		return new Promise((resolve, reject) => {
			try {
				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	// static async refresh() {
	// 	return new Promise((resolve, reject) => {
	// 		$axios.post('/auth/refresh',)
	// 	});
	// }
}
