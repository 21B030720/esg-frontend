import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import HomeAbout from './components/about/HomeAbout';
import HomeDirections from './components/directions/HomeDirections';
import HomeHero from './components/hero/HomeHero';
import HomeImageSection from './components/image_section/HomeImageSection';
import HomePartners from './components/partners/HomePartners';
import styles from './home.module.css';

const Home = () => {
	return (
		<div className={styles.home}>
			<Header />

			<HomeHero />

			<HomeAbout />

			<HomeDirections />

			<HomeImageSection />

			<HomePartners />

			<Footer />
		</div>
	);
};

export default Home;
