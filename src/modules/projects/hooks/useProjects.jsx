import { useEffect, useState } from 'react';
import ProjectsService from '@services/ProjectsService';
import useStatusFilter from './useStatusFilter';
// import mockProjects from '../utils/projects';

const useProjects = () => {
	const [projects, setProjects] = useState([]);

	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(1);
	const [totalProjectsCount, setTotalProjectCount] = useState(null);

	const { statusFilter, setStatusFilter } = useStatusFilter();

	const [error, setError] = useState(null);
	const [areLoading, setLoading] = useState(false);

	const fetchProjects = async (page, perPage) => {
		const filters = {
			name: null, // searchbar hook is not rdy
			direction: null, // handle choosing direction
			status: statusFilter,
		};

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
	};

	useEffect(() => {
		setError(null);
		setLoading(true);

		fetchProjects(page, perPage);
	}, []);

	return {
		projects,
		page,
		perPage,
		statusFilter,
		totalProjectsCount,
		fetchProjects,
		setStatusFilter,
		setPage,
		areLoading,
		error,
	};
};

export default useProjects;
