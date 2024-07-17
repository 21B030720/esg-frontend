import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectsContext from "../contexts/ProjectsContext";
import getPagesItems from "../utils/getPagesItems";

const usePagination = (stopRequest) => {

	const { projectsCount } = useContext(ProjectsContext);
	
	const [ searchParams, setSearchParams ] = useSearchParams();
	const pageParam = searchParams.get('page');
	const pageSizeParam = searchParams.get('page_size');

	const page = parseInt(pageParam) || 1;
	const pageSize = parseInt(pageSizeParam) || 5;
	const pages = getPagesItems(page, pageSize, projectsCount);
	
	const toNextPage = () => {
		if(page + 1 > projectsCount) {
			return;
		}

		stopRequest();

		setSearchParams({
			page: page + 1,
			page_size: pageSize,
		});
	};

	const toPrevPage = () => {
		if(page - 1 <= 0) {
			return;
		}

		stopRequest();

		setSearchParams({
			page: page - 1,
			page_size: pageSize,
		});
	};

	const toPage = (value) => {
		if(value == null) {
			throw new Error('Value must be provided');
		}

		stopRequest();

		if(value == '...') {
			// TODO: what should happen?
			return;
		}

		setSearchParams({
			page: value,
			page_size: pageSize,
		});
	};

	return {
		page, pages, toNextPage, 
		toPrevPage, toPage, 
	};
};

export default usePagination;