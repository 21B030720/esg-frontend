import { useTranslation } from 'react-i18next';
// import partnersLogos from '@pages/home/utils/partnersLogos';
import styles from './home_partners.module.css';
import { PAYLOAD_CMS_ADDRESS } from '@http/axios';

const HomePartners = ({ partners }) => {
	const { t } = useTranslation();

	return (
		<section className={styles.section}>
			<h3 className={styles.heading}>{t('Partners')}</h3>

			<div className={styles.logos}>
				<div className={styles.logos_slide}>
					{partners.map((p, i) => {
						return (
							<img
								key={p.id == null ? i : p.id}
								src={`${PAYLOAD_CMS_ADDRESS}${p.image.url}`}
								alt={p.text || ''}
								className={styles.logo}
							/>
						);
					})}
				</div>

				<div className={styles.logos_slide} aria-hidden>
					{partners.map((p, i) => {
						return (
							<img
								key={p.id == null ? i : p.id}
								src={`${PAYLOAD_CMS_ADDRESS}${p.image.url}`}
								alt={p.text || ''}
								className={styles.logo}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default HomePartners;
