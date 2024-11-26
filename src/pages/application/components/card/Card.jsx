import { useTranslation } from 'react-i18next';
import CardField from '../card_field/CardField';
import downloadIcon from '@assets/icons/download.svg';
import styles from './card.module.css';

const Card = ({ application, onFileClick }) => {
	const { t } = useTranslation();

	if (application == null) return <p>Заявки не существует</p>;

	const { name, description, company, direction, owner, status, projectFile } =
		application;

	// const getStatusNameFromServerString = () => {
	// 	switch (status) {
	// 		case 'ACCEPTED':
	// 			return t('Status_accepted');
	// 		case 'IN_PROGRESS':
	// 			return t('Status_progress');
	// 		case 'REJECTED':
	// 			return t('Status_denied');
	// 		default:
	// 			return t('Status_unknown');
	// 	}
	// };

	return (
		<div className={styles.card}>
			{/* <h2 className={styles.title}>{name || 'Заголовок отсутствует'}</h2>

			<div className={styles.fields}>
				<CardField
					label={t('Customer')}
					value={company || 'Заказчик неизвестен'}
				/>

				<CardField
					label={t('Request Status')}
					value={getStatusNameFromServerString(status) || 'Статус отсутствует'}
				/>

				<CardField
					label={t('Technical Task')}
					value="Техническое задание"
					icon={downloadIcon}
					onClick={onFileClick}
				/>

				<CardField
					label={t('Direction')}
					value={direction.name || 'Направление неизвестно'}
				/>

				<CardField
					label={t('Description')}
					value={description || 'Описание отсутствует'}
				/>

				<CardField
					label={t("Responsible Person's Full Name from Customer")}
					value={`${owner.firstName} ${owner.lastName}` || 'ФИО отсутствует'}
				/>

				<CardField
					label={t('Contact Details of Responsible Person from Customer')}
					value={owner.email || 'Телефон отсутствует'}
				/>

				<CardField label={t('Note')} value="-" />
			</div> */}
		</div>
	);
};

export default Card;
