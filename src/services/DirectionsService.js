import $axios from '@http/axios';

class DirectionsService {
	static async getDirections() {
		return new Promise((resolve, reject) => {
			$axios
				.get('/directions')
				.then((response) => resolve(response?.data))
				.catch((err) => reject(err));
		});
	}
}

export default DirectionsService;
