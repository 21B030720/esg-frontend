import objectToFormData from '@common/utils/objectToFormData';
import { $axiosPayload } from '@http/axios';



export default class PayloadService {
    
	static async getMainPage(locale = "rus") {
		return this.get(`api/globals/mainpage?locale=${locale}`);
	}

	static async getLaboratoriesWithDescription(locale = "rus") {
		return this.get(`api/laboratory-with-description?locale=${locale}&sort=createdAt&limit=1000`);
	}

	static async getDirectionsWithDescription(locale = "rus") {
		return this.get(`api/direction-with-description?locale=${locale}&sort=createdAt&limit=1000`);
	}

    static async get(path) {
        return new Promise((resolve, reject) => {
			$axiosPayload
				.get(path)
				.then((response) => resolve(response?.data))
				.catch((error) => reject(error));
		});
    }
	
}
