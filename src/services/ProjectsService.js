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

	static async postProject(form, projectFile) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();

			formData.append('name', form['name']);
			formData.append('description', form['description']);
			formData.append('directionID', form['directionID']);
			formData.append('applicationID', form['applicationID']);

			FileService.downloadFiles(projectFile)
				.then((files) => {
					// Append each file individually under the same field name with []
					for (let i = 0; i < files.length; i++) {
						formData.append('projectFile[]', files[i]);
					}

					$axiosPrivate
						.post('/projects', formData)
						.then((response) => resolve(response))
						.catch((err) => reject(err));
				})
				.catch((err) => reject(err));
		});
	}
}
