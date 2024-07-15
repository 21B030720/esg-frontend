import { useState } from "react";
import applyFormTemplate from "@modules/apply/utils/applyFormTemplate";
import postApplication from "@common/api/postApplication";

const useApplyForm = () => {

	const [formData, setFormData] = useState(applyFormTemplate);
	
	const changeFile = (name, newValue) => {
		if(!Object.keys(formData).includes(name)) {
			throw new Error('Input name is wrong');
		}

		setFormData(p => ({
			...p,
			[name]: newValue,
		}));
	};

	const change = (name, newValue) => {
		if(!Object.keys(formData).includes(name)) {
			throw new Error('Input name is wrong');
		}

		setFormData(p => ({
			...p,
			[name]: newValue,
		}));
	};

	const onSubmit = () => {
		console.log(formData);
		postApplication(formData);
	};

	return {
		formData, change, changeFile, onSubmit,
	}
};

export default useApplyForm;