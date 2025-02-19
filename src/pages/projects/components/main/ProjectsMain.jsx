import { useContext, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ProjectsContext from '@pages/projects/contexts/ProjectsContext';
import ProjectsCards from '../cards/ProjectsCards';
import ProjectsConfig from '../config/ProjectsConfig';
import mergeStrings from '@common/utils/mergeStrings';
import styles from './projects_main.module.css';

const ProjectsMain = () => {
	const {
		projects,
		totalPagesCount,
		perPage,
		setPage,
		fetchProjects,
		areLoading,
		error,
	} = useContext(ProjectsContext);

	const handlePageClick = (event) => {
		const selectedPage = event.selected + 1;

		setPage(selectedPage);
		fetchProjects(selectedPage);
	};

	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<ProjectsCards
					projects={projects}
					areLoading={areLoading}
					error={error}
				/>

				{totalPagesCount != null && (
					<ReactPaginate
						breakLabel="..."
						previousLabel="<"
						nextLabel=">"
						pageRangeDisplayed={perPage}
						pageCount={totalPagesCount}
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
				)}
			</div>

			<ProjectsConfig />
		</div>
	);
};

export default ProjectsMain;
