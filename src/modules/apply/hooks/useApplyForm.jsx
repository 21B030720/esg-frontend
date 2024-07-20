import { useState } from 'react';
import postApplication from '@common/api/postApplication';

const useApplyForm = () => {
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

		postApplication(formData, files);
	};

	return {
		formData,
		files,
		change,
		onSubmit,
		onFilesChange,
	};
};

export default useApplyForm;
