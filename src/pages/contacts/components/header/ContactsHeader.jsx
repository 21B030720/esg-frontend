import styles from './contact_header.module.css';

const ContactsHeader = () => {

	return (
		<div className={styles.header}>
			<h2 className={styles.header_primary}>
				Контакты
			</h2>

			<p className={styles.header_secondary}>
				Есть вопросы или предложения? Просто напишите нам!
			</p>
		</div>
	);
};

export default ContactsHeader;