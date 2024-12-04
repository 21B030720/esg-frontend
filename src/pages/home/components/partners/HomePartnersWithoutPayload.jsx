import { useTranslation } from 'react-i18next';
import partnersLogos from '@pages/home/utils/partnersLogos';
import styles from './home_partners.module.css';

const HomePartnersWithoutPayload = () => {
	const { t } = useTranslation();

	return (
		<section className={styles.section}>
			<h3 className={styles.heading}>{t('Partners')}</h3>

			<div className={styles.logos}>
				<div className={styles.logos_slide}>
					{partnersLogos.map((p, i) => {
						return (
							<img
								key={p.id == null ? i : p.id}
								src={p.imageUrl}
								alt={p.alt || ''}
								className={styles.logo}
							/>
						);
					})}
				</div>

				<div className={styles.logos_slide} aria-hidden>
					{partnersLogos.map((p, i) => {
						return (
							<img
								key={p.id == null ? i : p.id}
								src={p.imageUrl}
								alt={p.alt || ''}
								className={styles.logo}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default HomePartnersWithoutPayload;