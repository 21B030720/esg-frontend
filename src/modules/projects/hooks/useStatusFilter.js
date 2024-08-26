import { useState } from 'react';

const useStatusFilter = () => {
	// ACCEPTED IN_PROGRESS REJECTED
	const [statusFilter, setStatusFilter] = useState(null);

	return { statusFilter, setStatusFilter };
};

export default useStatusFilter;
