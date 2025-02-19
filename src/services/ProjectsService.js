import { $axiosPrivate } from '@http/axios';
import FileService from './FileService';

export default class ProjectsService {
	static async getProjects(page, perPage, filters) {
		const { name, direction, status } = filters;

		const params = {
			page: page,
			per_page: perPage,
		};
		if (name) params.name = name;
		if (direction) params.direction = direction;
		if (status) params.status = status;

		console.log(params);

		return new Promise((resolve, reject) => {
			$axiosPrivate
				.get('/projects', {
					params: params,
				})
				.then((response) => {
					resolve(response?.data);
				})
				.catch((err) => reject(err));
		});
	}

	static async getProject(id) {
		return new Promise((resolve, reject) => {
			$axiosPrivate
				.get(`/projects/${id}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => reject(err));
		});
	}

	static async postProject(form) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();

			formData.append('applicationID', form['applicationID']);

			if (form.additionalFiles && form.additionalFiles.length > 0) {
				for (let i = 0; i < form.additionalFiles.length; i++) {
					formData.append('additionalFiles', form.additionalFiles[i]);
				}
			}

			$axiosPrivate
						.post('/projects', formData)
						.then((response) => resolve(response))
						.catch((error) => reject(error));


			// FileService.downloadFiles(projectFile)
			// 	.then((files) => {
			// 		// Append each file individually under the same field name with []
			// 		for (let i = 0; i < files.length; i++) {
			// 			formData.append('projectFile[]', files[i]);
			// 		}

			// 		$axiosPrivate
			// 			.post('/projects', formData)
			// 			.then((response) => resolve(response))
			// 			.catch((error) => reject(error));
			// 	})
			// 	.catch((err) => reject(err));
		});
	}

	static async applyProject(id) {
		return new Promise((resolve, reject) => {
			$axiosPrivate
						.post(`/projects/${id}/add-participants`)
						.then((response) => resolve(response))
						.catch((error) => reject(error));
		});
	}

}
