import { $axiosPrivate } from '@http/axios';
import FileService from './FileService';

export default class ProjectsService {
	static async getProjects() {
		return new Promise((resolve, reject) => {
			$axiosPrivate
				.get('/projects')
				.then((response) => {
					resolve(response?.data);
				})
				.catch((err) => reject(err));
		});
	}

	static async postProject(form, fileId, fileName) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();

			formData.append('name', form['name']);
			formData.append('description', form['description']);
			formData.append('directionID', form['directionID']);
			formData.append('applicationID', form['applicationID']);

			// TODO: handle multiple files in response
			FileService.downloadFile(fileId)
				.then((response) => {
					const filesBlob = response?.data;
					const file = new File([filesBlob], fileName, {
						type: 'application/pdf',
					});

					formData.append('file', file);

					$axiosPrivate
						.post('/projects', formData)
						.then((response) => resolve(response))
						.catch((err) => reject(err));
				})
				.catch((err) => reject(err));
		});
	}
}
