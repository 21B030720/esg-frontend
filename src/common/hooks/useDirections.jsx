import { useEffect, useState } from 'react';
import DirectionsService from '@services/DirectionsService';

const useDirections = () => {
	const [directions, setDirections] = useState([]);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			DirectionsService.getDirections()
				.then((directions) => setDirections(directions))
				.catch((err) => {
					setDirections([]);

					console.error(err);
				})
				.finally(() => setLoading(false));
		};

		fetchData();
	}, []);

	return { directions, isLoading };
};

export default useDirections;
