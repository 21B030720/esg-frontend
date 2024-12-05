import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '@common/contexts/AuthContext';
import profile from '../../api/profile.png';
import styles from './profile_sidebar.module.css';

const ProfileSidebar = ({ user }) => {
	const nav = useNavigate();
	const { logout } = useContext(AuthContext);

	const onLogout = () => {
		logout().then(() => nav('/'));
	};

	return (
		<div className={styles.profileSidebar}>
			<div className={styles.profilePhoto}>
				<img src={profile} alt="Profile" className={styles.profilePicture} />
			</div>

			<div className={styles.cont}>
				<div className={styles.text}>
					<div className={styles.name}>
						<h2>{user.firstName}</h2>

						<h2>{user.lastName}</h2>
					</div>
				</div>

				<div className={styles.text}>
					{user?.role === 'COMPANY' ? 'Недропользователь' : 'Научный сотрудник'}
				</div>

				<div className={styles.label}>Email:</div>

				<div className={`${styles.text} ${styles.textlabel}`}>{user.email}</div>

				<button onClick={onLogout}>Выйти из аккаунта</button>
			</div>
		</div>
	);
};

export default ProfileSidebar;
