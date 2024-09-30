import { useTranslation } from 'react-i18next';
import styles from './status.module.css';
import isExist from '@common/utils/isExist';
import mergeStrings from '@common/utils/mergeStrings';

// ACCEPTED, IN_PROGRESS, REJECTED
const Status = ({ statusStringFromServer }) => {
	const { t } = useTranslation();

	if (
		!isExist(statusStringFromServer) ||
		typeof statusStringFromServer !== 'string' ||
		statusStringFromServer.length === 0
	) {
		return;
	}

	const getStatusBoxClassFromServerString = () => {
		switch (statusStringFromServer) {
			case 'ACCEPTED':
				return styles.status_accepted;
			case 'IN_PROGRESS':
				return styles.status_progress;
			case 'REJECTED':
				return styles.status_rejected;
			default:
				return styles.status_unknown;
		}
	};

	const getStatusNameFromServerString = () => {
		switch (statusStringFromServer) {
			case 'ACCEPTED':
				return t('Status_accepted');
			case 'IN_PROGRESS':
				return t('Status_progress');
			case 'REJECTED':
				return t('Status_denied');
			default:
				return t('Status_unknown');
		}
	};

	const status = getStatusNameFromServerString();
	const statusBoxClass = getStatusBoxClassFromServerString();

	return (
		<div className={mergeStrings(styles.status_box, statusBoxClass)}>
			<p>{status}</p>
		</div>
	);
};

export default Status;
