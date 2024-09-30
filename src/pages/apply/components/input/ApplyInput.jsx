import RequirementStar from '@common/components/requirement_star/RequirementStar';
import styles from './apply_input.module.css';
import doExist from '@common/utils/doExist';

const ApplyInput = ({
	label, name, isRequired = false, 
	isMultiLine = false,
	value, onChange
}) => {

	if(!doExist(value, onChange, name, label)) {
		return;
	}

	const inputId = `${label}_${Math.random()}`;

	return (
		<div className={styles.box}>
			<div className={styles.label_box}>
				<label 
					htmlFor={inputId}
					className={styles.label}
				>
					{label}
				</label>

				{isRequired && <RequirementStar />}
			</div>

			{
				isMultiLine 
				?
				<textarea
					id={inputId}
					name={name}
					rows={5}
					className={styles.input}
					value={value}
					required={isRequired}
					onChange={onChange} 
				/>
				:
				<input 
					id={inputId}
					name={name}
					type='text'
					className={styles.input}
					value={value}
					required={isRequired}
					onChange={onChange} 
				/>
			}
		</div>
	);
};

export default ApplyInput;