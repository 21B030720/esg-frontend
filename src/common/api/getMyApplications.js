import { BACKEND_ADDRESS } from "@common/baseUrls";
import axios from "axios";

const getMyApplications = () => {
	return new Promise((resolve, reject) => {
		axios.get(`${BACKEND_ADDRESS}/applications/my`, {
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${localStorage.getItem('token')}`,
			}
		})
			.then(response => resolve(response))
			.catch(error => reject(error));
	});
};

export default getMyApplications;