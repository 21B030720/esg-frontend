import { useEffect, useState } from 'react';
import ProjectsService from '@services/ProjectsService';
// import mockProjects from '../utils/projects';

const useProjects = () => {
	const [projects, setProjects] = useState([]);
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(1);
	const [totalProjectsCount, setTotalProjectCount] = useState(null);
	const [filters, setFilters] = useState({
		name: null,
		direction: null,
		status: null,
	});

	const [error, setError] = useState(null);
	const [areLoading, setLoading] = useState(false);

	const onFilterChange = (pickedFilter, pickedFilterValue) => {
		if (!(pickedFilter in filters)) return;

		setFilters((p) => ({
			...p,
			pickedFilter: pickedFilterValue,
		}));
	};

	const fetchProjects = async (page, perPage, filters) => {
		ProjectsService.getProjects(page, perPage, filters)
			.then((response) => {
				const projects = response.content;
				const totalItemsCount = response.totalElements;

				console.log(projects);

				setTotalProjectCount(totalItemsCount);
				setProjects(projects || []);
			})
			.catch((err) => {
				console.error(err);
				setError(err?.message);
			})
			.finally(() => setLoading(false));

		// setTimeout(() => {
		// 	setProjects(mockProjects);
		// 	setLoading(false);
		// }, 2000);
	};

	useEffect(() => {
		setError(null);
		setLoading(true);

		fetchProjects(page, perPage, filters);
	}, []);

	return {
		projects,
		page,
		perPage,
		filters,
		totalProjectsCount,
		fetchProjects,
		onFilterChange,
		setPage,
		areLoading,
		error,
	};
};

export default useProjects;
