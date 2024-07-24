import { useContext } from 'react';
import Header from '@modules/header/Header';
import ProfileSidebar from './components/profile_sidebar/ProfileSidebar';
import Tabs from './components/tabs/Tabs';
import Footer from '@modules/footer/Footer';
import AuthContext from '@common/contexts/AuthContext';
import styles from './personal_cabinet.module.css';

const PersonalCabinet = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className={styles.page}>
			<Header />

			<div className={styles.cabinet}>
				{user.role !== 'MANAGER' && <ProfileSidebar user={user} />}

				<Tabs user={user} />
			</div>

			<Footer />
		</div>
	);
};

export default PersonalCabinet;
