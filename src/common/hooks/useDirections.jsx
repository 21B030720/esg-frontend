import getDirections from '@common/api/getDirections';
import { useEffect, useState } from 'react';

const useDirections = () => {
	const [directions, setDirections] = useState([]);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const { data, success, error } = await getDirections();
			
			if(success) {
				setDirections(data);
			} else {
				setDirections([]);
				console.error(error);
			}

			setLoading(false);
		}
		
		fetchData();
	}, []);

	return { directions, isLoading }
};

export default useDirections;
