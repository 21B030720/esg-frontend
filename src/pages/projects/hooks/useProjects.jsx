import { useEffect, useState } from 'react';
import ProjectsService from '@services/ProjectsService';

const useProjects = () => {
	const [projects, setProjects] = useState([]);
	const [error, setError] = useState(null);
	const [areLoading, setLoading] = useState(false);

	const [page, setPage] = useState(1);
	const [perPage] = useState(1);
	const [totalPagesCount, setTotalPagesCount] = useState(null);

	const [appliedFilters, setAppliedFilters] = useState({
		status: '',
		direction: '',
		searchName: '',
	});

	const [inputFilters, setInputFilters] = useState({
		status: '',
		direction: '',
		searchName: '',
	});

	const onInputStatusFilterChange = (value) => {
		setInputFilters((p) => ({
			...p,
			status: value,
		}));
	};

	const onInputSearchNameChange = (value) => {
		setInputFilters((p) => ({
			...p,
			searchName: value,
		}));
	};

	const onInputDirectionChange = (value) => {
		setInputFilters((p) => ({
			...p,
			direction: value,
		}));
	};

	async function fetchProjects(selectedPage) {
		const filters = {
			name: appliedFilters.searchName,
			direction: appliedFilters.direction,
			status: appliedFilters.status,
		};

		const projectsPage = selectedPage != null ? selectedPage : page;

		setLoading(true);

		ProjectsService.getProjects(projectsPage, perPage, filters)
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
	}

	const applyFiltersAndSearchName = () => {
		setAppliedFilters({
			searchName: inputFilters.searchName,
			status: inputFilters.status,
			direction: inputFilters.direction,
		});
	};

	useEffect(() => {
		fetchProjects();
	}, [appliedFilters]);

	return {
		projects,
		areLoading,
		error,
		page,
		setPage,
		perPage,
		inputFilters,
		onInputStatusFilterChange,
		onInputSearchNameChange,
		onInputDirectionChange,
		applyFiltersAndSearchName,
		totalPagesCount,
		fetchProjects,
	};
};

export default useProjects;
