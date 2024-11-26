import { $axiosPrivate } from '@http/axios';

export default class UserService {
	static async updateUser(formData) {
		return new Promise((resolve, reject) => {
			$axiosPrivate
				.put('/user/me/update', formData)
				.then((response) => resolve(response))
				.catch((err) => reject(err));
		});
	}
}
