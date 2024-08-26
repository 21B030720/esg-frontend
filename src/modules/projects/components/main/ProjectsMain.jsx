import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ProjectsContext from '@modules/projects/contexts/ProjectsContext';
import ProjectsCards from '../cards/ProjectsCards';
import ProjectsConfig from '../config/ProjectsConfig';
import styles from './projects_main.module.css';
import mergeStrings from '@common/utils/mergeStrings';

const ProjectsMain = () => {
	const {
		projects,
		totalProjectsCount,
		filters,
		perPage,
		setPage,
		fetchProjects,
		areLoading,
		error,
	} = useContext(ProjectsContext);

	const pageCount = Math.ceil(totalProjectsCount / perPage);

	const handlePageClick = (event) => {
		const selectedPage = event.selected + 1;

		setPage(selectedPage);
		fetchProjects(selectedPage, perPage, filters);
	};

	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<ProjectsCards
					projects={projects}
					areLoading={areLoading}
					error={error}
				/>

				<ReactPaginate
					breakLabel="..."
					previousLabel="<"
					nextLabel=">"
					pageRangeDisplayed={perPage}
					pageCount={pageCount}
					renderOnZeroPageCount={null}
					containerClassName={styles.pagination_container}
					pageClassName={styles.pagination_item}
					activeClassName={styles.pagination_item_active}
					nextClassName={mergeStrings(
						styles.pagination_item,
						styles.pagination_item_arrow
					)}
					previousClassName={mergeStrings(
						styles.pagination_item,
						styles.pagination_item_arrow
					)}
					onPageChange={handlePageClick}
				/>
			</div>

			{/* <ProjectsConfig /> */}
		</div>
	);
};

export default ProjectsMain;
