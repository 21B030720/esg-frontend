const mergeStrings = (...classNames) => {
	return classNames.filter((className) => className).join(' ');
};

export default mergeStrings;
