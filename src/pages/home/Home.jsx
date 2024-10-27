import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import HomeAbout from './components/about/HomeAbout';
import HomeDirections from './components/directions/HomeDirections';
import HomeHero from './components/hero/HomeHero';
import HomeImageSection from './components/image_section/HomeImageSection';
import HomePartners from './components/partners/HomePartners';
import styles from './home.module.css';
import useMainPayload from './hooks/useMainPayload';

const Home = () => {

	const { data, loading, error } = useMainPayload();

	if(loading) {
		return (
			<>Loading</>
		)
	}

	if(error) {
		return(
			<>{error}</>
		)
	}

	console.log(data)

	return (
		<div className={styles.home}>
			<Header />

			<HomeHero image={data.hero} text={data.heroText} />

			<HomeAbout data={data.aboutUs} />

			<HomeDirections data={data.directions} />

			<HomeImageSection image={data.imageSection} />

			<HomePartners image={data.partners} />

			<Footer />
		</div>
	);

};

export default Home;
