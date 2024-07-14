import Container from '@common/components/container/Container';
import styles from './home_partners.module.css';
import partnersLogos from '@modules/home/utils/partnersLogos';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const HomePartners = () => {

	const { t } = useTranslation();

	return (
		<Container 
			type='section'
			maxWidth='110rem' 
			isCentered
			className={styles.section}
		>
			<h3 className={styles.heading}>{t('Partners')}</h3>

			<div className={styles.logos}>
				<div className={styles.logos_slide}>
					{
						partnersLogos.map((p, i) => {
							return (
								<img 
									key={p.id == null ? i : p.id}
									src={p.imageUrl}
									alt={p.alt || ''}
									className={styles.logo}
								/>
							)
						})
					}
				</div>

				<div className={styles.logos_slide} aria-hidden >
					{
						partnersLogos.map((p, i) => {
							return (
								<img 
									key={p.id == null ? i : p.id}
									src={p.imageUrl}
									alt={p.alt || ''}
									className={styles.logo}
								/>
							)
						})
					}
				</div>
			</div>
		</Container>
	);
};

export default HomePartners;