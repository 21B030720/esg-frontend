import contactsData from '@modules/contacts/utils/contactsData';
import styles from './contacts_card.module.css';
import ContactsCardRow from '../card_row/ContactsCardRow';
import { useTranslation } from 'react-i18next';

const ContactsCard = () => {

	const { t } = useTranslation();

	return (
		<div className={styles.card}>
			<h3 className={styles.card_title}>
				ESG Lab
			</h3>

			<div className={styles.rows}>
				<p className={styles.card_heading}>
					{t("Contact Details")}
				</p>

				{
					contactsData.map(c => {
						return (
							<ContactsCardRow 
								key={c.id}
								card={c}
							/>
						);
					})
				}
			</div>
		</div>
	);
};

export default ContactsCard;