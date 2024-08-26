import { useEffect, useState } from 'react';
import ProjectsService from '@services/ProjectsService';
import useStatusFilter from './useStatusFilter';
import useSearchbar from './useSearchbar';
import debounceFetch from '@common/utils/debounceFetch';
// import mockProjects from '../utils/projects';

const useProjects = () => {
	const [projects, setProjects] = useState([]);

	const [page, setPage] = useState(1);
	const [perPage] = useState(1);
	const [totalPagesCount, setTotalPagesCount] = useState(null);

	const { statusFilter, setStatusFilter } = useStatusFilter();

	const [error, setError] = useState(null);
	const [areLoading, setLoading] = useState(false);

	const fetchProjects = async (...args) => {
		const filters = {
			name: search, // searchbar hook is not rdy
			direction: null, // handle choosing direction
			status: statusFilter,
		};

		const pickedPage = args[0] || page;
		const signal = args[1];

		console.log(signal);

		ProjectsService.getProjects(pickedPage, perPage, filters, signal)
			.then((response) => {
				const projects = response.content;
				const totalPages = response.totalPages;
				const curPage = response.pageable?.pageNumber + 1;

				setProjects(projects || []);
				setTotalPagesCount(totalPages);
				setPage(curPage);
			})
			.catch((err) => {
				console.error(err);
				setError(err?.message);
			})
			.finally(() => setLoading(false));
	};

	const debouncedFetchProjects = debounceFetch(fetchProjects, 2000);
	const { search, onSearchChange } = useSearchbar(debouncedFetchProjects);

	const handleDebouncedFetchProjects = (page) => {
		setError(null);
		setLoading(true);

		debouncedFetchProjects(page);
	};

	useEffect(() => {
		handleDebouncedFetchProjects(page);
	}, []);

	return {
		projects,
		page,
		setPage,
		perPage,
		totalPagesCount,
		statusFilter,
		setStatusFilter,
		fetchProjects: handleDebouncedFetchProjects,
		search,
		onSearchChange,
		areLoading,
		error,
	};
};

export default useProjects;
