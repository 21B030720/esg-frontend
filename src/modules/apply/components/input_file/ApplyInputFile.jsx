import RequirementStar from '@common/components/requirement_star/RequirementStar';
import doExist from '@common/utils/doExist';
import clipIcon from '@assets/icons/clip.svg';
import styles from './apply_input_file.module.css';
import { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import removeLastChars from '@common/utils/removeLastChars';

const ApplyInputFile = ({
	label, isRequired = false, onChange
}) => {

	const [fileName, setFileName] = useState('');
	const [error, setError] = useState('');

	if(!doExist(label, onChange)) {
		return;
	}

	const inputId = `${Math.random()}`;

	const loadFile = (e) => {
		setError('');

		const file = e.target.files[0];

		if(file) {
			setFileName('');

			const fileType = file.type;
			const fileSize = file.size / 1e6; // Convert to MB

			if(fileType !== 'application/pdf') {
				setError('Файл должен быть PDF');
				return;
			}

			if(fileSize > 5) {
				setError('Размер файла не должен превышать 5МБ');
				return;
			}

			setFileName(removeLastChars(file.name, 4));

			onChange(file); // Pass the File object directly to onChange
		} else {
			setError('Файл должен быть загружен');
		}
	};

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

			<div className={styles.wrapper}>
				<div className={styles.file_box}>
					<img 
						src={clipIcon} 
						alt="clip icon" 
						className={styles.clip_icon}
					/>

					<p className={styles.name}>
						{label}
					</p>

					<input
						id={inputId}
						type='file'
						className={styles.file_input}
						onChange={loadFile}
					/>
				</div>

				{
					error.length > 0 &&
					<p className={styles.error}>
						{error}
					</p>
				}

				{
					fileName.length > 0 &&
					<div className={styles.file_preview}>
						<FaFilePdf 
							fontSize='1.5rem'
							color='#e95340'
						/>

						<p className={styles.file_name}>
							{fileName}
						</p>
					</div>
				}
			</div>
		</div>
	);
};

export default ApplyInputFile;
