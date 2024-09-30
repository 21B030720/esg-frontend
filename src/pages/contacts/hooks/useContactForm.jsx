import { useState } from 'react';
import validateForm from '../utils/validateForm';
import isObjectEmpty from '@common/utils/isObjectEmpty';
import dataTemplate from '../utils/dataTemplate';
import ContactsService from '@services/ContactsService';

const useContactForm = () => {
	const [formData, setFormData] = useState(dataTemplate);
	const [errors, setErrors] = useState(dataTemplate);

	const onFormChange = (e) => {
		const inputName = e.target.name;
		const newValue = e.target.value;

		if (!Object.keys(formData).includes(inputName)) {
			console.error('Provided input name is invalid');
		}

		setFormData((prev) => {
			return {
				...prev,
				[inputName]: newValue,
			};
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setErrors(dataTemplate);

		const { firstName, lastName, email, phoneNumber, title, message } =
			formData;

		const errors = validateForm(
			firstName,
			lastName,
			email,
			phoneNumber,
			title,
			message
		);

		if (!isObjectEmpty(errors)) {
			setErrors((p) => ({
				...p,
				...errors,
			}));

			return;
		}

		ContactsService.postContacts(formData).then((res) => console.log(res));
	};

	return { formData, errors, onFormChange, onSubmit };
};

export default useContactForm;
