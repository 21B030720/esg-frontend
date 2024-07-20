import { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import RequirementStar from '@common/components/requirement_star/RequirementStar';
import doExist from '@common/utils/doExist';
import clipIcon from '@assets/icons/clip.svg';
import removeLastChars from '@common/utils/removeLastChars';
import styles from './apply_input_file.module.css';
import generateId from '@common/utils/generateId';

const ApplyInputFile = ({ label, isRequired = false, onChange }) => {
	const [files, setFiles] = useState([]);
	const [error, setError] = useState('');

	if (!doExist(label, onChange)) {
		return;
	}

	const loadFile = (e) => {
		setError('');

		const newFile = e.target.files[0];

		if (newFile) {
			const newFileType = newFile.type;
			const newFileSize = newFile.size / 1e6;

			if (newFileType !== 'application/pdf') {
				setError('Файлы должны быть типа PDF');

				return;
			}

			if (newFileSize > 5) {
				setError('Файл не должен превышать размера 5МБ');

				return;
			}

			// update files ds for preview
			setFiles((p) => {
				return [
					...p,
					{
						id: generateId(),
						name: removeLastChars(newFile.name, 20),
					},
				];
			});

			onChange(newFile);
		} else {
			setError('Файл должны быть загружены');
		}
	};

	const onFileDelete = (fileId) => {
		const updatedFiles = files.filter((file) => file.id !== fileId);

		setFiles(updatedFiles);
	};

	return (
		<div className={styles.box}>
			<div className={styles.label_box}>
				<label className={styles.label}>{label}</label>

				{isRequired && <RequirementStar />}
			</div>

			<div className={styles.wrapper}>
				<div className={styles.file_box}>
					<img src={clipIcon} alt="clip icon" className={styles.clip_icon} />

					<p className={styles.name}>{label}</p>

					<input
						type="file"
						required={isRequired}
						className={styles.file_input}
						multiple
						onChange={loadFile}
					/>
				</div>

				<div className={styles.files}>
					{files.map((file) => {
						return (
							<div
								key={file.id}
								className={styles.file_preview_box}
								onClick={() => onFileDelete(file.id)}
							>
								<FaFilePdf fontSize="1.5rem" color="#e95340" />

								<p className={styles.file_name}>{file.name}</p>
							</div>
						);
					})}
				</div>
			</div>

			{error.length > 0 && <p className={styles.error}>{error}</p>}
		</div>
	);
};

export default ApplyInputFile;
