import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_ADDRESS } from '@common/baseUrls';

const useProjects = () => {
	const [projects, setProjects] = useState([]);
	const [isError, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setError(null);
		setLoading(true);

		const fetchProjects = async () => {
			axios
				.get(`${BACKEND_ADDRESS}/projects`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				})
				.then(response => {
					setProjects(response.data);
					console.log(response);
					setLoading(false);
				})
				.catch(error => {
					setError(error);
					setLoading(false);
				});
		};

		fetchProjects();

		return () => {
			setLoading(false);
		};
	}, []);

	return { projects, isLoading, isError };
};

export default useProjects;
