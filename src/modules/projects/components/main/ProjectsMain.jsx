import { useContext, useState } from 'react';
import ProjectsContext from '@modules/projects/contexts/ProjectsContext';
import ProjectsCards from '../cards/ProjectsCards';
import ProjectsConfig from '../config/ProjectsConfig';
import styles from './projects_main.module.css';
import ReactPaginate from 'react-paginate';

const ProjectsMain = () => {
	const { projects, areLoading, error } = useContext(ProjectsContext);

	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 5;

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = projects.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(projects.length / itemsPerPage);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % projects.length;
		setItemOffset(newOffset);
	};

	return (
		<div className={styles.container}>
			<div className="">
				<ProjectsCards
					projects={currentItems}
					areLoading={areLoading}
					error={error}
				/>

				<ReactPaginate
					breakLabel="..."
					previousLabel="<"
					nextLabel=">"
					pageRangeDisplayed={5}
					pageCount={pageCount}
					renderOnZeroPageCount={null}
					containerClassName={styles.pagination_container}
					pageClassName={styles.pagination_item}
					activeClassName={styles.pagination_item_active}
					onPageChange={handlePageClick}
				/>
			</div>

			<ProjectsConfig />
		</div>
	);
};

export default ProjectsMain;
