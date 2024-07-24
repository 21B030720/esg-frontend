import axios from 'axios';
import { BACKEND_ADDRESS } from '@common/baseUrls';

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
		console.log(response);
	},
	(error) => {
		console.error(error);

		// TODO: get init request and make refresh
		// TODO: do something if it fails (is it recursion?)
	}
);

export { $axiosPrivate };
export default $axios;
