import validateEmail from "@common/utils/validateEmail";
import validateString from "@common/utils/validateString";

// TODO: better error messages
// TODO: synchronise with actual entity constraints

const validateForm = (
	name, surname, email, 
	phoneNumber, topic, message
) => {
	const errors = {};

	if(!validateString(name)) {
		errors.name = 'Введите имя';
	}
	if(!validateString(surname)) {
		errors.surname = 'Введите имя';
	}
	if(!validateEmail(email)) {
		errors.email = 'Email неверный';
	}
	if(!validateString(phoneNumber, 1, 11)) {
		errors.phone = 'Введите телефон';
	}
	if(!validateString(topic)) {
		errors.topic = 'Введите тему';
	}
	if(!validateString(message)) {
		errors.message = 'Введите сообщение';
	}

	return errors;
};

export default validateForm;