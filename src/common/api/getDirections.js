import { BACKEND_ADDRESS } from "@common/baseUrls";
import fetchWrapper from "./fetchWrapper";

const getDirections = async() => {
	const url = `${BACKEND_ADDRESS}/directions`;
	const option = {
		method: 'GET',
		redirect: "follow",
	}
	try {
		const { data, success, error } = await fetchWrapper(url, option, 'getDirections');
		return {data, success, error};
	} catch(error) {
		console.error("Error in getDirections: ", error);
	}
}

export default getDirections