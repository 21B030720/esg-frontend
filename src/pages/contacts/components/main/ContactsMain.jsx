import ContactsCard from '../card/ContactsCard';
import ContactsForm from '../form/ContactsForm';
import styles from './contacts_main.module.css';

const ContactsMain = () => {

	return (
		<div className={styles.main}>
			<ContactsCard />

			<ContactsForm />
		</div>
	);
};

export default ContactsMain;