const doExist = (...args) => {
	return args.every((a) => a != null);
};

export default doExist;
