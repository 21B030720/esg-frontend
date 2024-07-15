import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';
import useApplyForm from '../../hooks/useApplyForm';
import ApplyInput from '../input/ApplyInput';
import ApplyInputFile from '../input_file/ApplyInputFile';
import ApplyInputSelect from '../input_select/InputSelect';
import styles from './apply_form.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import getDirections from '@common/api/getDirections';
import useDirections from '@common/hooks/useDirections';

const ApplyForm = () => {

	const { t } = useTranslation();

	const {
		formData, change, onSubmit,
	} = useApplyForm();

	useEffect(() => {
		onSubmit()
	}, [formData])

	return (
		<form className={styles.form}>
			<ApplyInput
				label={t("Request Title (Project Name)")}
				name='title'
				value={formData.title}
				onChange={e => change('title', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label={t("Purpose and Description of Request (Project)")}
				name='descr'
				value={formData.descr}
				onChange={e => change('descr', e.target.value)}
				isMultiLine
				isRequired
			/>

			<ApplyInputSelect
				label={t("Request Direction (Project)")}
				name='direction'
				value={formData.direction}
				onChange={d => change('direction', d)}
				isRequired
			/>

			<ApplyInput
				label={t("Budget")}
				name='budget'
				value={formData.budget}
				onChange={e => change('budget', e.target.value)}
			/>

			<ApplyInputFile
				label={t("Technical Task")}
				name='task'
				onChange={e => change('file', e)}
			/>

			<ApplyInput
				label={t("Responsible Person's Full Name from Customer")}
				name='client'
				value={formData.client}
				onChange={e => change('client', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label={t("Contact Details of Responsible Person from Customer")}
				name='phone'
				value={formData.phone}
				onChange={e => change('phone', e.target.value)}
				isRequired
			/>

			<ApplyInput
				label={t("Note")}
				name='note'
				value={formData.note}
				onChange={e => change('note', e.target.value)}
				isMultiLine
			/>

			<ButtonBlueRound
				text={t("Save Request")}
				className={styles.button}
				onClick={onSubmit}
			/>
		</form>
	);
};

export default ApplyForm;