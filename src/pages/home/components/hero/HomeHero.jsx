import ButtonBlueRound from "@common/components/buttons/button_blue_round/ButtonBlueRound";
import styles from "./home_hero.module.css";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const HomeHero = () => {

	const { t } = useTranslation();
	
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/apply');
	};

	return (
		<section className={styles.hero}>
			<div className={styles.hero_content}>
				<h1 className={styles.hero_header}>
					{t("Kazakh-British Technical University. Innovation and Expertise for Kazakhstan's Industry")}
				</h1>

				<div className={styles.button_wrapper}>
					<ButtonBlueRound text={t("Submit an Application")} onClick={handleButtonClick} />
				</div>
			</div>
		</section>
	);
};

export default HomeHero;