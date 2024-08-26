import styles from './select.module.css';

const Select = ({ isSelected }) => {
	if (isSelected == null) {
		return true;
	}

	const dynamicStyle = {
		backgroundColor: isSelected ? 'var(--color-blue-dark)' : '',
		borderColor: isSelected ? 'var(--color-blue-dark)' : '',
	};

	return <div className={styles.select} style={dynamicStyle} />;
};

export default Select;
