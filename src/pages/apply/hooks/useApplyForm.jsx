import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationService from '@services/ApplicationService';
import { inputFields } from '../inputConfig';

const useApplyForm = () => {
	const nav = useNavigate();

	const [formData, setFormData] = useState(
		inputFields.reduce((acc, field) => {
			// For 'file' inputs, you can initialize with an empty array instead of an empty string if needed
			acc[field.name] = field.type === 'file' ? [] : '';
			return acc;
		}, {})
	  );


	const [files, setFiles] = useState([]);
	const [userLoadedFilesPreview, setUserLoadedFilesPreview] = useState([]);

	const change = (name, newValue) => {
		if (!Object.keys(formData).includes(name)) {
			throw new Error('Input name is wrong');
		}
		
		setFormData((p) => ({
			...p,
			[name]: newValue,
		}));

	};

	const onFilesChange = (newFile) => {
		setFiles((p) => [...p, newFile]);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		// formData.forEach((key, value) => {
		// 	console.log("FORMDATA:", key, value);
		// })
		ApplicationService.postApplication(formData, files)
			.then(() => {
				// setFormData(applyFormTemplate);
				setFiles([]);
				setUserLoadedFilesPreview([]);

				nav('/profile');
			})
			.catch((err) => console.error(err));
	};

	return {
		formData,
		files,
		userLoadedFilesPreview,
		setUserLoadedFilesPreview,
		setFiles,
		change,
		onSubmit,
		onFilesChange,
	};
};

export default useApplyForm;
