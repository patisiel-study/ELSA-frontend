import axios from "axios";

export const LoginAPI = async (email, password) => {
  try {
    const response = await axios.post(`/api/login`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const TestAPI = async (accessToken) => {
    try {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(`/api/test`, axiosConfig);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
