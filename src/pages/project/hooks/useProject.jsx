import { useEffect, useState } from 'react';
import mockProject from '../utils/mockProject.js';

const useProject = () => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [project, setProject] = useState(null);

	// TODO: integrate API
	const fetchProject = async () => {
		return new Promise((resolve, reject) => {
			try {
				setTimeout(() => resolve(mockProject), 2000);
			} catch (error) {
				reject(error);
			}
		});
	};

	useEffect(() => {
		setLoading(true);

		fetchProject()
			.then((project) => setProject(project))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { project, isLoading, error };
};

export default useProject;
