import axios from 'axios';
import { BACKEND_ADDRESS } from '@common/baseUrls';
import { jwtDecode } from 'jwt-decode';

const $axios = axios.create({
	baseURL: BACKEND_ADDRESS,
	withCredentials: true,
});

const $axiosPrivate = axios.create({
	baseURL: BACKEND_ADDRESS,
	withCredentials: true,
});

$axiosPrivate.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem(
		'access_token'
	)}`;

	return config;
});

$axiosPrivate.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const req = error.request;

		axios
			.post(
				'/auth/refresh',
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
					},
				}
			)
			.then((response) => {
				const accessToken = response?.data?.access_token;
				const refreshToken = response?.data?.refresh_token;

				localStorage.setItem('access_token', accessToken);
				localStorage.setItem('refresh_token', refreshToken);

				req();
			})
			.catch((err) => {
				console.error(1);
				// TODO: do something if it fails (is it recursion?)
			});
	}
);

export { $axiosPrivate };
export default $axios;
