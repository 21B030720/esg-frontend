import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import BackLink from '@common/components/back_link/BackLink';
import Card from './components/card/Card';
import useProject from './hooks/useProject';
import styles from './project.module.css';
import { useContext } from 'react';
import AuthContext from '@common/contexts/AuthContext';
import project from './utils/mockProject';

const Project = () => {
	const nav = useNavigate();
	// const { project, isLoading, error } = useProject();
	const { selectedProject } = useContext(AuthContext);
	console.log(selectedProject);

	// if (error != null) {
	// 	return (
	// 		<section type="section" className={styles.module}>
	// 			<BackLink />

	// 			<p>{error}</p>
	// 		</section>
	// 	);
	// }

	return (
		<div>
			<Header />

			<section type="section" className={styles.module}>
				<BackLink onClick={() => nav(-1)} />
				<div className={styles.main}>
					<Card project={selectedProject} />

					{/* <button className={styles.button}>Подать свое решение</button> */}
				</div>

				{/* {isLoading ? (
					<ClipLoader
						size="1.5rem"
						color="var(--color-blue-dark)"
						className={styles.loader}
					/>
				) : (
					<div className={styles.main}>
						<Card project={selectedProject} />

					</div>
				)} */}
			</section>

			<Footer />
		</div>
	);
};

export default Project;
