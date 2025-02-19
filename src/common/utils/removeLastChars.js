// line clamp
const removeLastChars = (s, n) => {
	if (n == null || n < 0 || typeof s !== 'string' || n >= s.length) {
		return s;
	}

	return s.slice(0, n) + '...';
};

export default removeLastChars;
