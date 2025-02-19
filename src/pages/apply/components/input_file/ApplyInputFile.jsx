import { FaFilePdf } from 'react-icons/fa';
import RequirementStar from '@common/components/requirement_star/RequirementStar';

import clipIcon from '@assets/icons/clip.svg';
import removeLastChars from '@common/utils/removeLastChars';
import isExist from '@common/utils/isExist';
import styles from './apply_input_file.module.css';

const ApplyInputFile = ({
	label,
	isRequired = false,
	userLoadedFilesPreview,
	setUserLoadedFilesPreview,
	files,
	setFiles,
	fileError,
	setFileError,
	onChange,
}) => {
	if (
		!isExist(label, onChange, userLoadedFilesPreview, setUserLoadedFilesPreview)
	) {
		return;
	}

	const loadFile = (e) => {
		setFileError('');

		const newFile = e.target.files[0];

		if (newFile) {
			const newFileType = newFile.type;
			const newFileSize = newFile.size / 1e6;

			if (newFileType !== 'application/pdf') {
				setFileError('Файлы должны быть типа PDF');

				return;
			}

			if (newFileSize > 5) {
				setFileError('Файл не должен превышать размера 5МБ');

				return;
			}

			// update files ds for preview
			setUserLoadedFilesPreview((p) => {
				return [
					...p,
					{
						id: `${newFile.lastModified}_${newFile.name}`,
						name: removeLastChars(newFile.name, 20),
					},
				];
			});

			onChange(newFile);
		} else {
			setFileError('Файл должны быть загружены');
		}
	};

	const onFileDelete = (fileId) => {
		const updatedLoadedPreviewFiles = userLoadedFilesPreview.filter(
			(file) => file.id !== fileId
		);
		const updatedFiles = files.filter((file) => {
			const constructedId = `${file.lastModified}_${file.name}`;

			return constructedId !== fileId;
		});

		setUserLoadedFilesPreview(updatedLoadedPreviewFiles);
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
					{userLoadedFilesPreview.map((file) => {
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

			{fileError.length > 0 && <p className={styles.error}>{fileError}</p>}
		</div>
	);
};

export default ApplyInputFile;
