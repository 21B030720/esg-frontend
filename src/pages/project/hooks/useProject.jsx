import ProjectsService from '@services/ProjectsService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProject = () => {
	const [ isLoading, setLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ project, setProject ] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		ProjectsService.getProject(id)
			.then((project) => setProject(project))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { project, isLoading, error };
};

export default useProject;
