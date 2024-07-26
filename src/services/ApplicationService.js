import { $axiosPrivate } from '@http/axios';

export default class ApplicationService {
	static async getMyApplications() {
		return new Promise((resolve, reject) => {
			$axiosPrivate
				.get('/applications/my')
				.then((response) => {
					resolve(response?.data);
				})
				.catch((error) => reject(error));
		});
	}

	static async getApplications() {
		return new Promise((resolve, reject) => {
			$axiosPrivate
				.get('/applications')
				.then((response) => resolve(response?.data))
				.catch((err) => reject(err));
		});
	}

	static async postApplication(form, files) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();

			formData.append('name', form['name']);
			formData.append('company', form['company']);
			formData.append('description', form['description']);
			formData.append('directionID', form['directionID']);

			for (let i = 0; i < files.length; i++) {
				formData.append('projectFile[]', files[i]);
			}

			$axiosPrivate
				.post('/applications', formData)
				.then((response) => resolve(response))
				.catch((error) => reject(error));
		});
	}
}
