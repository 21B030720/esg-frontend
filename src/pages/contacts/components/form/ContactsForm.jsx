import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';
import useContactForm from '@modules/contacts/hooks/useContactForm';
import ContactsInput from '../input/ContactsInput';
import styles from './contacts_form.module.css';

// TODO: form validation & verification
// NOTE: does message input transform into a textbox?
const ContactsForm = () => {
	const { formData, errors, onFormChange, onSubmit } = useContactForm();

	return (
		<form className={styles.form}>
			<div className={styles.row}>
				<ContactsInput
					name="firstName"
					labelName="Имя"
					value={formData.firstName}
					onChange={onFormChange}
					errorMessage={errors.firstName}
				/>

				<ContactsInput
					name="lastName"
					labelName="Фамилия"
					value={formData.lastName}
					onChange={onFormChange}
					errorMessage={errors.lastName}
				/>
			</div>

			<div className={styles.row}>
				<ContactsInput
					name="email"
					labelName="Email"
					inputType="email"
					value={formData.email}
					onChange={onFormChange}
					errorMessage={errors.email}
				/>

				<ContactsInput
					name="phoneNumber"
					labelName="Номер телефона"
					value={formData.phoneNumber}
					onChange={onFormChange}
					errorMessage={errors.phoneNumber}
				/>
			</div>

			<div className={styles.row}>
				<ContactsInput
					name="title"
					labelName="Тема"
					placeholder="Напишите тему..."
					value={formData.title}
					onChange={onFormChange}
					errorMessage={errors.title}
				/>
			</div>

			<div className={styles.row}>
				<ContactsInput
					name="message"
					labelName="Сообщение"
					placeholder="Напишите сообщение..."
					value={formData.message}
					onChange={onFormChange}
					errorMessage={errors.message}
				/>
			</div>

			<ButtonBlueRound
				text="Отправить"
				className={styles.button}
				onClick={onSubmit}
			/>
		</form>
	);
};

export default ContactsForm;
