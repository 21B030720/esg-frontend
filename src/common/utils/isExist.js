const isExist = (...args) => {
	return args.every((a) => a != null);
};

export default isExist;
