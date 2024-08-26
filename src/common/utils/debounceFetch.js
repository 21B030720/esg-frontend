function debounceFetch(func, delay) {
	let timeoutId;
	let controller;

	return function (...args) {
		if (controller) {
			controller.abort(); // Cancel the previous request
		}
		controller = new AbortController(); // Create a new controller

		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, [...args, controller.signal]); // Pass the signal to fetch
		}, delay);
	};
}

export default debounceFetch;
