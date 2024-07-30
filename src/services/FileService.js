import { $axiosPrivate } from '@http/axios';

export default class FileService {
	static async downloadFile(fileId) {
		return new Promise((resolve, reject) => {
			$axiosPrivate
				.get(`/api/files/download/${fileId}`, {
					responseType: 'blob',
				})
				.then((response) => resolve(response))
				.catch((err) => reject(err));
		});
	}
}
