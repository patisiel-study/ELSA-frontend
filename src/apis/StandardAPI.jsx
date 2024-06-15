import axios from "axios";

export const StandardAPI = async () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  if (!SERVER_URL) {
    throw new Error("SERVER_URL is not defined");
  }
  try {
    const response = await axios.get(`${SERVER_URL}/list/standard`);
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.message ||
          "An error occurred while fetching the data."
      );
    } else {
      throw new Error("An error occurred while fetching the data.");
    }
  }
};
