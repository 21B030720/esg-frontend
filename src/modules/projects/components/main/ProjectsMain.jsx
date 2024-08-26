import { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProjectsContext from '@modules/projects/contexts/ProjectsContext';
import ProjectsCards from '../cards/ProjectsCards';
import ProjectsConfig from '../config/ProjectsConfig';
import styles from './projects_main.module.css';
import mergeStrings from '@common/utils/mergeStrings';

const ProjectsMain = () => {
	const { projects, page, perPage, areLoading, error } =
		useContext(ProjectsContext);

	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + perPage;
	const currentItems = projects.slice(itemOffset, endOffset);

	const pageCount = Math.ceil(projects.length / perPage);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * perPage) % projects.length;
		setItemOffset(newOffset);
	};

	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<ProjectsCards
					projects={currentItems}
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

			<ProjectsConfig />
		</div>
	);
};

export default ProjectsMain;
