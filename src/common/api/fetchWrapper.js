const handleResponse = async (response) => {
    if (!response.ok) {
      const errorMessage = `HTTP Error! Status: ${response.status}`;
      console.error("Error:", errorMessage)
      const error = new Error(errorMessage);
      error.status = response.status;
      throw error;
    }
    return response.json();
  };
  
  const fetchWrapper = async (url, options, fileName) => {
    try {
      console.log(`${fileName} executed:`, url);
      const response = await fetch(url, options);
      const responseData = await handleResponse(response);
      return { data: responseData, success: true, error: null };
    } catch (error) {
      let errorMessage;
      if (error.status === 401) {
        errorMessage = `Error 401 in ${fileName}: ${error.message}`;
        console.error(errorMessage);
      } else if (error.status === 403) {
        errorMessage = `Error 403 in ${fileName}: ${error.message}`;
        console.error(errorMessage);
      } else {
        errorMessage = `Fetch Error in ${fileName}: ${error.message}`;
        console.error(errorMessage);
      }
      return { data: null, success: false, error: error.message };
    }
  };
  
  export default fetchWrapper;
  