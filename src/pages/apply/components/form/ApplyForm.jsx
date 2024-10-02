import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonBlueRound from '@common/components/buttons/button_blue_round/ButtonBlueRound';
import ApplyInput from '../input/ApplyInput';
import ApplyInputFile from '../input_file/ApplyInputFile';
import ApplyInputSelect from '../input_select/InputSelect';
import useApplyForm from '../../hooks/useApplyForm';
import styles from './apply_form.module.css';
import { inputFields } from '@pages/apply/inputConfig';



const ApplyForm = () => {
    const { t } = useTranslation();
    const {
        formData,
        change,
        files,
        userLoadedFilesPreview,
        setUserLoadedFilesPreview,
        setFiles,
        onFilesChange,
        onSubmit,
    } = useApplyForm();

    const [fileError, setFileError] = useState('');

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {inputFields.map((field) => {
                switch (field.type) {
                    case 'input':
                        return (
                            <ApplyInput
                                key={field.name}
                                label={t(field.labelKey)}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={(e) => change(field.name, e.target.value)}
                                isRequired={field.isRequired}
                                isMultiLine={field.isMultiLine}
                            />
                        );
                    case 'select':
                        return (
                            <ApplyInputSelect
                                key={field.name}
                                label={t(field.labelKey)}
                                name={field.name}
                                onChange={(direction) => change(field.name, direction.id)}
                                isRequired={field.isRequired}
                            />
                        );
                    case 'file':
                        return (
                            <ApplyInputFile
                                key={field.name}
                                label={t(field.labelKey)}
                                name={field.name}
                                isRequired={field.isRequired}
                                userLoadedFilesPreview={userLoadedFilesPreview}
                                setUserLoadedFilesPreview={setUserLoadedFilesPreview}
                                files={files}
                                setFiles={setFiles}
                                fileError={fileError}
                                setFileError={setFileError}
                                onChange={(newFile) => onFilesChange(newFile)}
                            />
                        );
                    default:
                        return null;
                }
            })}

            <ButtonBlueRound
                type="submit"
                text={t('Save Request')}
                className={styles.button}
            />
        </form>
    );
};

export default ApplyForm;
