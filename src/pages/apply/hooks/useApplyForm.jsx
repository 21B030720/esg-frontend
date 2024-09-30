import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationService from '@services/ApplicationService';

const useApplyForm = () => {
	const nav = useNavigate();

	const applyFormTemplate = {
		name: '',
		description: '',
		directionID: null,
		company: '',
		contacts: '',
		budget: '',
		note: '',
	};

	const [formData, setFormData] = useState(applyFormTemplate);
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

		ApplicationService.postApplication(formData, files)
			.then(() => {
				setFormData(applyFormTemplate);
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
