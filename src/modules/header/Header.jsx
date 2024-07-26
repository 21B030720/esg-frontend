import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LocalizationButton from '@common/components/localization_button/LocalizationButton';
import AuthContext from '@common/contexts/AuthContext';
import '../../localization/i18n';
import headerLinks from './utils/headerLinks';
import styles from './header.module.css';

const Header = () => {
	// const { pathname: currentUrl } = useLocation();

	const { isAuthenticated } = useContext(AuthContext);

	const [menuOpen, setMenuOpen] = useState(false);

	const { t } = useTranslation();

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	// const setLocale = (lng) => {
	// 	i18n.changeLanguage(lng);
	//   };

	// const getLocaleLabel = (lng) => {
	// 	alert(lng)
	// 	switch (lng) {
	// 	  case "ru":
	// 		return t("ru_locale");
	// 	  case "en":
	// 		return t("en_locale");
	// 	  case "kk":
	// 		return t("kk_locale");
	// 	  default:
	// 		return "";
	// 	}
	//   };

	return (
		<nav className={styles.menu_nav}>
			<div className={styles.main}>
				<Link to="/">
					<div className={styles.kbtu_icon} />
				</Link>

				{!menuOpen && (
					<button className={styles.menu_button} onClick={handleMenuToggle}>
						<FontAwesomeIcon icon={faBars} size="2x" />
					</button>
				)}

				<nav
					className={`${styles.navigation_buttons} ${
						menuOpen ? styles.show : ''
					}`}
				>
					<div className={styles.incon}>
						{menuOpen && (
							<button className={styles.x_button} onClick={handleMenuToggle}>
								<FontAwesomeIcon icon={faTimes} size="2x" />
							</button>
						)}

						<div className={styles.incon2}>
							{headerLinks.map((l) => {
								{
									/* const isActive = currentUrl === l.url; */
								}

								return (
									<HashLink
										key={l.id}
										to={l.url}
										// className={isActive ? styles.active_link : ''}
									>
										{t(l.name)}
									</HashLink>
								);
							})}
						</div>
					</div>
				</nav>

				<div className={styles.right_side_elements}>
					<LocalizationButton />

					<Link to={isAuthenticated ? '/profile' : '/register'}>
						<button>
							<FontAwesomeIcon icon={faUser} size="2x" />
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
