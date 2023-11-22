import axios from "axios";

export const getAllItems = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/items`, {
      next: {
        revalidate: 0,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(`HTTP error! Status: ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received from the server");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(
        `An error occurred while fetching data: ${error.message}`
      );
    }
  }
};
