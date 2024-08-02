import { useEffect, useState } from 'react';
// import ProjectsService from '@services/ProjectsService';
import mockProjects from '../utils/projects';

const useProjects = () => {
	const [projects, setProjects] = useState([]);
	const [error, setError] = useState(null);
	const [areLoading, setLoading] = useState(false);

	const fetchProjects = async () => {
		// ProjectsService.getProjects()
		// 	.then((projects) => {
		// 		setProjects(projects || []);
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 		setError(err?.message);
		// 	})
		// 	.finally(() => setLoading(false));

		setTimeout(() => {
			setProjects(mockProjects);
			setLoading(false);
		}, 2000);
	};

	useEffect(() => {
		setError(null);
		setLoading(true);

		fetchProjects();
	}, []);

	return { projects, areLoading, error };
};

export default useProjects;
