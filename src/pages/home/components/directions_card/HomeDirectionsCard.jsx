import { useTranslation } from "react-i18next";
import styles from "./home_directions_card.module.css";
import { PAYLOAD_CMS_ADDRESS } from "@http/axios";

const HomeDirectionsCard = ({
	card, isBlue,
}) => {

	const { t } = useTranslation();

	if(card == null) {
		return;
	}

	const configStyle = {
		color: isBlue ? "var(--color-white)" : "var(--color-black)",
		backgroundColor: isBlue ? "var(--color-blue-dark)" : "var(--color-gray-light)",
		minWidth: "100%"
	};

	return (
		<div className={styles.card} style={configStyle}>
			<img 
				className={styles.card_icon}
				src={`${PAYLOAD_CMS_ADDRESS}${card.image.url}`} 
				alt="" 
			/>

			<p className={styles.card_title}>
				{t(card.text)}
			</p>
		</div>
	);
};

export default HomeDirectionsCard;