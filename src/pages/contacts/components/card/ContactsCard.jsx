import { useTranslation } from 'react-i18next';
import ContactsCardRow from '../card_row/ContactsCardRow';
import contactsData from '@pages/contacts/utils/contactsData';
import styles from './contacts_card.module.css';

const ContactsCard = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.card}>
			<h3 className={styles.card_title}>ESG Lab</h3>

			<div className={styles.rows}>
				<p className={styles.card_heading}>{t('Contact Details')}</p>

				{contactsData.map((c) => {
					return <ContactsCardRow key={c.id} card={c} />;
				})}
			</div>
		</div>
	);
};

export default ContactsCard;
