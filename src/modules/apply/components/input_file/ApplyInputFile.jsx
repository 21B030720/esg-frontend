import { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import RequirementStar from '@common/components/requirement_star/RequirementStar';
import doExist from '@common/utils/doExist';
import clipIcon from '@assets/icons/clip.svg';
import removeLastChars from '@common/utils/removeLastChars';
import styles from './apply_input_file.module.css';
import arrayBufferToBase64 from '@common/utils/arrayBufferToBase64';

const ApplyInputFile = ({
	label, isRequired = false, onChange,
}) => {

	const [fileName, setFileName] = useState('');
	const [error, setError] = useState('');

	if(!doExist(label, onChange)) {
		return;
	}

	const inputId = `${Math.random()}`;

	const loadFile = (e) => {
		setError('');

		const files = e.target.files;
		const file = files[0]; // might be multiple files

		if(file) {
			setFileName('');

			const fileType = file.type;
			const fileSize = file.size / 1e6; // Convert to MB

			if(fileType !== 'application/pdf') {
				setError('Файлы должны быть в PDF формате');
				return;
			}

			if(fileSize > 5) {
				setError('Размер каждого файла не должен превышать 5МБ');
				return;
			}

			setFileName(removeLastChars(file.name, 50));
			onChange(files);

			// const reader = new FileReader();
  
			// reader.onload = function(event) {
			// 	const arrayBuffer = event.target.result;
			// 	const base64String = arrayBufferToBase64(arrayBuffer);

			// 	setFileName(removeLastChars(file.name, 50));
			// 	onChange(files);
			// };
			
			// reader.readAsArrayBuffer(file);
		} else {
			setError('Файлы должен быть загружен');
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
						required={isRequired}
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
