import { $axiosPrivate } from '@http/axios';

export default class FileService {
	static async downloadFiles(files) {
		return new Promise((resolve, reject) => {
			const downloadPromises = files.map(async (file) => {
				return $axiosPrivate
					.get(`/api/files/download/${file.id}`, { responseType: 'blob' }) // Ensure you get the file as a blob
					.then((response) => {
						const constructedFile = new File(
							[response.data],
							file.originalFileName,
							{
								type: 'application/pdf',
								lastModified: Date.now(),
							}
						);

						return constructedFile;
					})
					.catch((err) => reject(err));
			});

			// Wait for all files to download
			Promise.all(downloadPromises)
				.then((files) => resolve(files))
				.catch((err) => reject('Error downloading files: ' + err));
		});
	}
}
