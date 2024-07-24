import { $axiosPrivate } from '@http/axios';

export default class ProjectsService {
	static async getProjects() {
		return new Promise((resolve, reject) => {
			$axiosPrivate
				.get('/projects')
				.then((response) => resolve(response.data))
				.catch((err) => reject(err));
		});
	}
}
