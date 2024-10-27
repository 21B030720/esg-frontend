import objectToFormData from '@common/utils/objectToFormData';
import { $axiosPayload } from '@http/axios';



export default class PayloadService {
    
	static async getMainPage(locale = "rus") {
		return this.get(`api/globals/mainpage?locale=${locale}`);
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
