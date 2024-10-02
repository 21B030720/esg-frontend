import { useTranslation } from 'react-i18next';
import CardField from '../card_field/CardField';
import isExist from '@common/utils/isExist';
import downloadIcon from '@assets/icons/download.svg';
import styles from './card.module.css';

const Card = ({ project }) => {
	const { t } = useTranslation();

	if (!isExist(project)) return;

	const { name, description, projectFile, application } = project;
	console.log( name, description, projectFile, application )

	// if (!isExist(name, description, file, application)) return;

	const {
		// name: appName,
		// projectFile,
		status,
		// description: appDescription,
		company,
		directionID,
	} = application;

	return (
		<div className={styles.card}>
			<h2 className={styles.title}>{name || 'Заголовок отсутствует'}</h2>

			<div className={styles.fields}>
				<CardField
					label={t('Customer')}
					value={project.company || 'Заказчик неизвестен'}
				/>

				<CardField
					label={t('Request Status')}
					value={project.status || 'Статус отсутствует'}
				/>

				<CardField
					label={t('Technical Task')}
					value="Техническое задание"
					icon={downloadIcon}
				/>

				<CardField
					label={t('Direction')}
					value={project.directionID || 'Направление неизвестно'}
				/>

				<CardField
					label={t('Description')}
					value={project.description || 'Описание отсутствует'}
				/>

				<CardField
					label={t("Responsible Person's Full Name from Customer")}
					value={project.company || 'ФИО отсутствует'}
				/>

				<CardField
					label={t('Contact Details of Responsible Person from Customer')}
					value={project.company || 'Телефон отсутствует'}
				/>

				<CardField label={t('Note')} value={'Примечание отсутствует'} />
			</div>
		</div>
	);
};

export default Card;
