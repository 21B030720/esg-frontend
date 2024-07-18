const generateId = () => {
	const id = Math.random().toString(36).slice(2, 9) + '_' + Date.now().toString(36);

	return id;
};

export default generateId;