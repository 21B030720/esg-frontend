import { $axiosPrivate } from '@http/axios';

export default class FileService {
	static async downloadFile(filePathOnServer) {
		return new Promise((resolve, reject) => {
			// const encodedFilePathOnServer = encodeURIComponent(filePathOnServer);

			$axiosPrivate
				.get(`/api/files/download/{id}`, {
					params: {
						id: filePathOnServer,
					},
				})
				.then((response) => resolve(response))
				.catch((err) => reject(err));
		});
	}
}
