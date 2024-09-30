// TODO: default minChar and maxChar params
const validateString = (string, minChar = 1, maxChar = 1000) => {
	if (string == null || Number.isNaN(string) || typeof string !== 'string') {
		return false;
	}

	if (string.length < minChar || string.length > maxChar) {
		return false;
	}

	return true;
};

export default validateString;
