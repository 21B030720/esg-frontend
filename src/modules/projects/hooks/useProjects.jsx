import { useEffect, useState } from 'react';
import ProjectsService from '@services/ProjectsService';

const useProjects = () => {
	const [projects, setProjects] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setError(null);
		setLoading(true);

		const fetchProjects = async () => {
			ProjectsService.getProjects()
				.then((projects) => {
					setProjects(projects || []);
				})
				.catch((err) => {
					console.error(err);
					setError(err?.message);
				})
				.finally(() => setLoading(false));
		};

		fetchProjects();

		return () => {
			setLoading(false);
		};
	}, []);

	return { projects, isLoading, error };
};

export default useProjects;
