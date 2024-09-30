import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import Container from '@common/components/container/Container';
import ProjectsWrapper from './components/projects_wrapper/ProjectsWrapper';
import { ProjectsContextProvider } from './contexts/ProjectsContext';

const Projects = () => {
	return (
		<Container>
			<Header />

			<ProjectsContextProvider>
				<ProjectsWrapper />
			</ProjectsContextProvider>

			<Footer />
		</Container>
	);
};

export default Projects;
