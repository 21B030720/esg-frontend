import styles from './project_card_field.module.css';

const ProjectCardField = ({ label, value, icon }) => {
	const isIcon = icon != null;

	const onClick = (e) => {
		console.log(e);
	};

	return (
		<div className={styles.field}>
			<p className={styles.label}>{label}</p>

			<div
				className={styles.main}
				style={{ cursor: isIcon ? 'pointer' : '' }}
				onClick={onClick}
			>
				{isIcon && <img src={icon} alt="" className={styles.icon} />}

				<p className={styles.value}>{value}</p>
			</div>
		</div>
	);
};

export default ProjectCardField;
