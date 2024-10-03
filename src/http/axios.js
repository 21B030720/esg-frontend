import axios from 'axios';

const BACKEND_ADDRESS = import.meta.env?.VITE_BACKEND_ADDRESS;

const BACK_HTTP = 'http://192.168.1.113:8080'; // 'http://localhost:8090'

const $axios = axios.create({
	baseURL: BACK_HTTP,
	// baseURL: BACKEND_ADDRESS,
	withCredentials: true,
});

const $axiosPrivate = axios.create({
	baseURL: BACK_HTTP,
	// baseURL: BACKEND_ADDRESS,
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
		const errorStatus = error?.response?.status;

		if (errorStatus !== 403) {
			return Promise.reject(error);
		}

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

				axios.request(req);
			})
			.catch(() => {
				// TODO: improve?
				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');

				window.location.href = '/login';
			});
	}
);

export { $axiosPrivate };
export default $axios;
