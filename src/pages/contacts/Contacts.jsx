import { useMediaQuery } from 'react-responsive';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import ContactsHeader from './components/header/ContactsHeader';
import ContactsMain from './components/main/ContactsMain';
import ContactsMap from './components/map/ContactsMap';
import ContactsCard from './components/card/ContactsCard';
import ContactsForm from './components/form/ContactsForm';
import styles from './contacts.module.css';

const Contacts = () => {
	const isMobile = useMediaQuery({ maxWidth: 480 });

	return (
		<section className={styles.page}>
			<Header />

			<div className={styles.section}>
				{isMobile ? (
					<>
						<ContactsCard />
						<ContactsMap />
						<ContactsHeader />
						<ContactsForm />
					</>
				) : (
					<>
						<ContactsHeader />
						<ContactsMain />
						<ContactsMap />
					</>
				)}
			</div>

			<Footer />
		</section>
	);
};

export default Contacts;
