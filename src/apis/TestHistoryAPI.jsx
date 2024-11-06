import axios from "axios";

const AITestHistoryAPI = async (accessToken) => {
  try {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.get(
      `/api/diagnosis/developer/result/history`,
      axiosConfig
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const UserTestHistoryAPI = async (accessToken) => {
  try {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.get(
      `/api/diagnosis/developer/result/history/user`,
      axiosConfig
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { AITestHistoryAPI, UserTestHistoryAPI };
