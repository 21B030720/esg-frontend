import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Container from '@common/components/container/Container';
import Card from './components/card/Card';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import BackLink from '@common/components/back_link/BackLink';
import useProject from './hooks/useProject';
import styles from './project.module.css';

const Project = () => {
	const nav = useNavigate();
	const { project, isLoading, error } = useProject();

	if (error != null) {
		return (
			<Container type="section" maxWidth="80rem" className={styles.module}>
				<BackLink />

				<p>error</p>
			</Container>
		);
	}

	return (
		<div>
			<Header />

			<Container type="section" maxWidth="80rem" className={styles.module}>
				<BackLink onClick={() => nav(-1)} />

				{isLoading ? (
					<ClipLoader
						size="1.5rem"
						color="var(--color-blue-dark)"
						className={styles.loader}
					/>
				) : (
					<div className={styles.main}>
						<Card project={project} />

						{/* <button className={styles.button}>Подать свое решение</button> */}
					</div>
				)}
			</Container>

			<Footer />
		</div>
	);
};

export default Project;
