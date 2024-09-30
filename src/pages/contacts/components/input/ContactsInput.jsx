import doExist from '@common/utils/doExist';
import styles from './contacts_input.module.css';

const ContactsInput = ({
	labelName, inputType = 'text', name = '',
	placeholder = '', value, onChange,
	errorMessage = '',
}) => {

	if(!doExist(labelName, value, onChange, name)) {
		return;
	}
	
	const inputDynamicStyles = {
		color: value.length ? "var(--color-black)" : "var(--color-gray-dark)"
	};

	return (
		<div className={styles.container}>
			<div className={styles.upper_box}>
				<label 
					htmlFor={labelName}
					className={styles.label}
					style={inputDynamicStyles}
				>
					{labelName}
				</label>

				{
					errorMessage && errorMessage.length > 0 &&
					<p className={styles.error}>
						{errorMessage}
					</p>
				}
			</div>

			<input
				name={name}
				value={value}
				type={inputType}
				placeholder={placeholder}
				className={styles.input}
				onChange={onChange}
			/>
		</div>
	);
};

export default ContactsInput;