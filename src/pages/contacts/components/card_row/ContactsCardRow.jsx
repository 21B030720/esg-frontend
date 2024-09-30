import styles from './contacts_card_row.module.css';

const ContactsCardRow = ({card}) => {

	if(card == null) {
		return;
	}

	return (
		<div className={styles.row}>
			<img 
				src={card.imageUrl} 
				alt={card.alt || ''}
				className={styles.icon} 
			/>

			<p className={styles.name}>
				{card.name}
			</p>
		</div>
	);
};

export default ContactsCardRow;