import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import ProjectsWrapper from './components/projects_wrapper/ProjectsWrapper';
import { ProjectsContextProvider } from './contexts/ProjectsContext';

const Projects = () => {
	return (
		<div>
			<Header />

			<ProjectsContextProvider>
				<ProjectsWrapper />
			</ProjectsContextProvider>

			<Footer />
		</div>
	);
};

export default Projects;
