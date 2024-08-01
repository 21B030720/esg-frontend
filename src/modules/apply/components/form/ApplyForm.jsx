import { useTranslation } from 'react-i18next';
import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';
import ApplyInput from '../input/ApplyInput';
import ApplyInputFile from '../input_file/ApplyInputFile';
import ApplyInputSelect from '../input_select/InputSelect';
import useApplyForm from '../../hooks/useApplyForm';
import styles from './apply_form.module.css';
import { useState } from 'react';

const ApplyForm = () => {
	const { t } = useTranslation();

	const {
		formData,
		change,
		userLoadedFilesPreview,
		setUserLoadedFilesPreview,
		onFilesChange,
		onSubmit,
	} = useApplyForm();

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<ApplyInput
				label={t('Request Title (Project Name)')}
				name="name"
				value={formData.name}
				onChange={(e) => change('name', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label={t('Purpose and Description of Request (Project)')}
				name="description"
				value={formData.description}
				onChange={(e) => change('description', e.target.value)}
				isMultiLine
				isRequired
			/>

			<ApplyInputSelect
				label={t('Request Direction (Project)')}
				name="directionID"
				onChange={(direction) => change('directionID', direction.id)}
				isRequired
			/>

			<ApplyInput
				label={t('Budget')}
				name="budget"
				value={formData.budget}
				onChange={(e) => change('budget', e.target.value)}
			/>

			<ApplyInputFile
				label={t('Technical Task')}
				name="projectFile"
				userLoadedFilesPreview={userLoadedFilesPreview}
				isRequired
				setUserLoadedFilesPreview={setUserLoadedFilesPreview}
				onChange={(newFile) => onFilesChange(newFile)}
			/>

			<ApplyInput
				label={t("Responsible Person's Full Name from Customer")}
				name="company"
				value={formData.company}
				onChange={(e) => change('company', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label={t('Contact Details of Responsible Person from Customer')}
				name="contacts"
				value={formData.contacts}
				onChange={(e) => change('contacts', e.target.value)}
			/>

			<ApplyInput
				label={t('Note')}
				name="note"
				value={formData.note}
				onChange={(e) => change('note', e.target.value)}
				isMultiLine
			/>

			<ButtonBlueRound
				type="submit"
				text={t('Save Request')}
				className={styles.button}
			/>
		</form>
	);
};

export default ApplyForm;
