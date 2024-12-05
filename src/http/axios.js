import axios from 'axios';

const BACKEND_ADDRESS = import.meta.env?.VITE_BACKEND_ADDRESS;
const PAYLOAD_CMS_ADDRESS = import.meta.env?.VITE_PAYLOAD_CMS_ADDRESS;

// const BACKEND_ADDRESS="http://localhost:3000"
// const PAYLOAD_CMS_ADDRESS="http://localhost:3001"

// const BACK_HTTP = 'http://192.168.1.113:8080'; 
// const BACK_HTTP = 'http://localhost:8090';

const $axios = axios.create({
	baseURL: '/api', // Let the proxy handle the requests
	headers: {
	  'Accepts': 'application/json',
	  'Access-Control-Allow-Origin': '*',
	},
	withCredentials: true,
  });
  

const $axiosPrivate = axios.create({
	baseURL: '/api', // Let the proxy handle the requests
	headers: {
	  'Accepts': 'application/json',
	  'Access-Control-Allow-Origin': '*',
	},
	withCredentials: true,
  });

const $axiosPayload = axios.create({
	baseURL: PAYLOAD_CMS_ADDRESS,
	withCredentials: true,
});

// Maybe will help in some moments. Now It changes nothing
// $axiosPayload.interceptors.request.use((config) => {
// 	const token = localStorage.getItem('access_token'); // or 'payload_access_token' if it's different
// 	if (token) {
// 	  config.headers.Authorization = `Bearer ${token}`;
// 	}
// 	return config;
//   });

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

		if (errorStatus !== 403 ) {
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

export { $axiosPrivate, $axiosPayload, PAYLOAD_CMS_ADDRESS };
export default $axios;
