import { useState } from 'react';

const useSearchbar = () => {
	const [search, setSearch] = useState('');

	const onSearchChange = (newValue) => {
		setSearch(newValue);
	};

	return {
		search,
		onSearchChange,
	};
};

export default useSearchbar;
