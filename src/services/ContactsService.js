import $axios from '@http/axios';

export default class ContactsService {
	static async postContacts(formData) {
		return new Promise((resolve, reject) => {
			$axios
				.post('/contacts', formData)
				.then((response) => resolve(response))
				.catch((err) => reject(err));
		});
	}
}
