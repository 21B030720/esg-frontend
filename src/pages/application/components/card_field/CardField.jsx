import styles from './card_field.module.css';

const CardField = ({ label, value, icon, onClick }) => {
	const isIcon = icon != null;

	return (
		<div className={styles.field} onClick={onClick}>
			<p className={styles.label}>{label}</p>

			<div className={styles.main} style={{ cursor: isIcon ? 'pointer' : '' }}>
				{isIcon && <img src={icon} alt="" className={styles.icon} />}

				<p className={styles.value}>{value}</p>
			</div>
		</div>
	);
};

export default CardField;
