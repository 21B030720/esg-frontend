import getDirections from '@common/api/getDirections';
import React, { useEffect, useState } from 'react';

const useDirections = () => {
    const [directions, setDirections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
			const { data, success, error } = await getDirections();
            if(success) {
                setDirections(data);
            } else {
                setDirections([]);
                console.error(error);
            }
		}
		fetchData();
    }, [])
    return { directions }
}

export default useDirections;
