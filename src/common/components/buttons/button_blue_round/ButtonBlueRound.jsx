import Button from "../button/Button";
import mergeStrings from "@common/utils/mergeStrings";
import styles from "./button_blue_round.module.css";
import doExist from "@common/utils/doExist";

const ButtonBlueRound = ({
	text, className, onClick = () => {}, type,
}) => {

	if(!doExist(text) || text.length === 0) {
		return;
	}

	return (
		<Button 
			type={type}
			className={mergeStrings(styles.button_blue_round, className)}
			text={text}
			color="var(--color-white)"
			backgroundColor="var(--color-blue-dark)"
			onClick={onClick}
		/>
	)
};

export default ButtonBlueRound;