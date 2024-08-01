import { useEffect, useState } from 'react';
import mockProject from '../utils/mockProject.js';

const useProject = () => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [project, setProject] = useState(null);

	// TODO: integrate API
	const fetchProject = async () => {
		setTimeout(() => setProject(mockProject), 2000);
	};

	useEffect(() => {
		fetchProject();
	}, []);

	return { project, isLoading, error };
};

export default useProject;
