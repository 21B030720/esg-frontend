const getDateFromServerString = (stringFromServer) => {
	const date = new Date(stringFromServer);
	const formattedDate = date.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
	});

	return formattedDate;
};

export default getDateFromServerString;
