import ProjectCardField from '../project_card_field/ProjectCardField';
import downloadIcon from '@assets/icons/download.svg';
import styles from './project_card.module.css';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({project}) => {

	const { t } = useTranslation();
	
	const {
		title, descr, client, 
		status, direction, phone, 
		note, clientName
	} = project;

	return (
		<div className={styles.card}>
			<h2 className={styles.title}>
				{title || 'Заголовок отсутствует'}
			</h2>

			<div className={styles.fields}>
				<ProjectCardField
					label={t("Customer")}
					value={client || 'Заказчик неизвестен'}
				/>

				<ProjectCardField
					label={t("Request Status")}
					value={status || 'Статус отсутствует'}
				/>

				<ProjectCardField
					label={t("Technical Task")}
					value='Техническое задание'
					icon={downloadIcon}
				/>

				<ProjectCardField
					label={t("Direction")}
					value={direction || 'Направление неизвестно'}
				/>

				<ProjectCardField
					label={t("Description")}
					value={descr || 'Описание отсутствует'}
				/>

				<ProjectCardField
					label={t("Responsible Person's Full Name from Customer")}
					value={clientName || 'ФИО отсутствует'}
				/>

				<ProjectCardField
					label={t("Contact Details of Responsible Person from Customer")}
					value={phone || 'Телефон отсутствует'}
				/>

				<ProjectCardField
					label={t("Note")}
					value={note || 'Примечание отсутствует'}
				/>
			</div>
		</div>
	);
};

export default ProjectCard;