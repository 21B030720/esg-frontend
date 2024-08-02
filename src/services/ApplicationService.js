import CustomError from '@common/utils/customError';
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

	static async getApplicationById(id) {
		return new Promise((resolve, reject) => {
			$axiosPrivate
				.get(`/applications/${id}`)
				.then((response) => resolve(response?.data))
				.catch((error) => reject(error));
		});
	}

	static areFilesValid(files) {
		return files.every((f) => {
			const isFilePDF = f.type === 'application/pdf';
			const isFileSizeCorrect = f.size / 1e6 <= 15;

			return isFilePDF && isFileSizeCorrect;
		});
	}

	static async postApplication(form, files) {
		return new Promise((resolve, reject) => {
			if (!Array.isArray(files) || files.length === 0) {
				reject(new Error('Files must be a non-empty array of files'));

				return;
			}

			if (!this.areFilesValid(files)) {
				reject(new Error('Each files must a PDF file with size less than 5MB'));

				return;
			}

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
