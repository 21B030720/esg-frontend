import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';
import Container from '@common/components/container/Container';
import BackLink from '@common/components/back_link/BackLink';
import Card from './components/card/Card';
import useApplication from './hooks/useApplication';
import styles from './application.module.css';
import mergeStrings from '@common/utils/mergeStrings';

const Application = () => {
	const { id: applicationId } = useParams();
	const nav = useNavigate();
	const {
		application,
		isLoading,
		gettingAppError,
		postingProjectError,
		postProject,
	} = useApplication(applicationId);

	if (gettingAppError != null) {
		return <p>{gettingAppError}</p>;
	}

	return (
		<div className="">
			<Header />

			<Container type="section" maxWidth="80rem" className={styles.module}>
				<div className={styles.backlink_wrapper}>
					<BackLink onClick={() => nav(-1)} />
				</div>

				{isLoading ? (
					<ClipLoader
						size="1.5rem"
						color="var(--color-blue-dark)"
						className={styles.loader}
					/>
				) : (
					<div className={styles.main}>
						<Card application={application} />

						{postingProjectError != null && (
							<p className={styles.error}>{postingProjectError}</p>
						)}

						<div className={styles.btns}>
							<button className={mergeStrings(styles.btn, styles.btn_cancel)}>
								Отправить на доработку (в разработке)
							</button>

							<button
								className={mergeStrings(styles.btn, styles.btn_post)}
								onClick={postProject}
							>
								Опубликовать
							</button>
						</div>
					</div>
				)}
			</Container>

			<Footer />
		</div>
	);
};

export default Application;
