import { FaInstagram, FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa';
import styles from "./footer.module.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {

	const { t } = useTranslation();

	const curYear = new Date().getFullYear();

	return (
		<footer className={styles.main}>
			<div className={styles.main_content}>
				<div className={styles.contact_icons}>
					<div className={styles.kbtu_icon} />

					<div className={styles.mini_icons}>
						<button><FaInstagram /></button>
						<button><FaFacebook /></button>
						<button><FaTwitter /></button>
						<button><FaTelegram /></button>
					</div>
				</div>

				<div className={styles.navigation_buttons}>
					<button>{t('projects')}</button>
					<button>{t('directions')}</button>
					<button>{t('about_us')}</button>
					<button>{t('Our partners')}</button>
				</div>

				<div className={styles.contacts}>
					<p>{t('contacts')}</p>
					<p>{t("Project Management Office")}</p>
					<p>{t('Number')}: +7-707-561-32-28</p>
					<p>{t('Email')}: esglab@kbtu.kz</p>
				</div>
			</div>

			<div className={styles.last_content}>
				<p>{t("Kazakh-British Technical University 2024")} {curYear}</p>
				<p>{t("All rights reserved")}</p>
			</div>
		</footer>
	);
};

export default Footer;