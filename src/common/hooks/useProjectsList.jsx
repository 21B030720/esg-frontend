import getProjectsList from '@common/api/getProjectsList';
import { useEffect, useState } from 'react';

const useProjectsList = () => {
	const [projectsList, setProjectsList] = useState([]);

	const fetchData = async () => {
		const { data } = await getProjectsList();
		setProjectsList(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { projectsList };
};

export default useProjectsList;
