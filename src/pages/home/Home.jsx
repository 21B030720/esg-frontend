import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import HomeAbout from './components/about/HomeAbout';
import HomeDirections from './components/directions/HomeDirections';
import HomeHero from './components/hero/HomeHero';
import HomeImageSection from './components/image_section/HomeImageSection';
import HomePartners from './components/partners/HomePartners';
import styles from './home.module.css';
import useMainPayload from './hooks/useMainPayload';
import HomeHeroWithoutPayload from './components/hero/HomeHeroWithoutPayload';
import HomeAboutWithoutPayload from './components/about/HomeAboutWithoutPayload';
import HomeDirectionsWithoutPayload from './components/directions/HomeDirectionsWithoutPayload';
import HomeImageSectionWithoutPayload from './components/image_section/HomeImageSectionWithoutPayload';
import HomePartnersWithoutPayload from './components/partners/HomePartnersWithoutPayload';

const Home = () => {

	const { data, loading, error } = useMainPayload();

	if(loading) {
		return (
			<>Loading</>
		)
	}

	if(error) {
		return(
			<div className={styles.home}>
				<Header />

				{/* <HomeHero image={data.hero} text={data.heroText} />

				<HomeAbout aboutCardsData={data.aboutUs} />

				<HomeDirections directionsData={data.directions} />

				<HomeImageSection image={data.imageSection} />

				<HomePartners partners={data.partners} /> */}

				<HomeHeroWithoutPayload />

				<HomeAboutWithoutPayload />

				<HomeDirectionsWithoutPayload />

				<HomeImageSectionWithoutPayload />

				<HomePartnersWithoutPayload />

				<Footer />
			</div>
		)
	}

	return (
		<div className={styles.home}>
			<Header />

			<HomeHero image={data.hero} text={data.heroText} />

			{/* <HomeAbout aboutCardsData={data.aboutUs} />

			<HomeDirections directionsData={data.directions} />

			<HomeImageSection image={data.imageSection} />

			<HomePartners partners={data.partners} /> */}

			{/* <HomeHeroWithoutPayload />

			<HomeAboutWithoutPayload />

			<HomeDirectionsWithoutPayload />

			<HomeImageSectionWithoutPayload />

			<HomePartnersWithoutPayload /> */}

			<Footer />
		</div>
	);

};

export default Home;
