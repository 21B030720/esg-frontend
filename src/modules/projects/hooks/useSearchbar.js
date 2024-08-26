import { useState } from 'react';

const useSearchbar = (fetchProjects) => {
	const [search, setSearch] = useState('');

	const onSearchChange = (newValue) => {
		setSearch(newValue);
		fetchProjects();
	};

	return {
		search,
		onSearchChange,
	};
};

export default useSearchbar;
