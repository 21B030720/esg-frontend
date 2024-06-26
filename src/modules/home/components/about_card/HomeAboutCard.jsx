import ornamentImg from '@assets/images/home_about_ornament.png';
import styles from "./home_about_card.module.css";

const HomeAboutCard = ({card, isMainImageLeft}) => {

	if(card == null) {
		return;
	}

	const cardConfigStyle = {
		flexDirection: isMainImageLeft ? "row" : "row-reverse",
	};

	const shiftLeftStyle = {
		left: 0,
	};
	const shiftRightStyle = {
		right: 1,
	};


	return (
		<div className={styles.card} style={cardConfigStyle}>
			<img 
				className={styles.card_image}
				src={card.imageUrl} 
				alt=""
			/>

			<div className={styles.card_content}>
				<div className={styles.card_title_wrapper}>
					<h3 className={styles.card_title}>{card.title}</h3>
				</div>

				{
					card.isBodyBullettedList 
						? (
							<ul className={styles.card_list}>
								{
									card.body.map((p, i) => <li key={i}>{p}</li>)
								}
							</ul>	
						)
						: (
							<div className={styles.card_paragraphs}>
								{
									card.body.map((p, i) => <div key={i}>{p}</div>)
								}
							</div>
						)
				}
			</div>

			{/* Ornament, it is absolute */}
			<img 
				src={ornamentImg} 
				alt="ornament" 
				className={styles.ornament}
				style={isMainImageLeft ? shiftRightStyle : shiftLeftStyle}
			/>
		</div>
	)
};

export default HomeAboutCard;