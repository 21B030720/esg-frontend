import { BACKEND_ADDRESS } from '@common/baseUrls';
import fetchWrapper from './fetchWrapper';

const postApplication = async form => {
	const formData = new FormData();

	formData.append('name', form['name']);
	formData.append('company', form['company']);
	formData.append('description', form['description']);
	formData.append('directionID', form['directionID']);

	for (let i = 0; i < form['projectFile'].length; i++) {
		formData.append('projectFile[]', form['projectFile'][i]);
	}

	const url = `${BACKEND_ADDRESS}/applications`;
	const option = {
		method: 'POST',
		redirect: 'follow',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
		body: formData,
	};

	try {
		const { data, success, error } = await fetchWrapper(
			url,
			option,
			'postApplication'
		);

		return { data, success, error };
	} catch (error) {
		console.error('Error in postApplication: ', error);
	}
};

export default postApplication;
