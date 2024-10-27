import ButtonBlueRound from "@common/components/buttons/button_blue_round/ButtonBlueRound";
import styles from "./home_hero.module.css";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { PAYLOAD_CMS_ADDRESS } from "@http/axios";

const HomeHero = ({ image, text }) => {

	const { t } = useTranslation();
	
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/apply');
	};

	console.log(`${PAYLOAD_CMS_ADDRESS}${image.url}`)

	return (
		<section 
			style={{
				background: `
					linear-gradient(
					rgba(0, 0, 0, 0.4), 
					rgba(0, 0, 0, 0.4)
					),
					url("${PAYLOAD_CMS_ADDRESS}${image.url}")
				`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '100%',
				height: '100vh',
			}} 
			className={styles.hero}
		>
			<div className={styles.hero_content}>
				<h1 style={{}} className={styles.hero_header}>
					{/* {t("Kazakh-British Technical University. Innovation and Expertise for Kazakhstan's Industry")} */}
					{text}
				</h1>

				<div className={styles.button_wrapper}>
					<ButtonBlueRound text={t("Submit an Application")} onClick={handleButtonClick} />
				</div>
			</div>
		</section>
	);
};

export default HomeHero;