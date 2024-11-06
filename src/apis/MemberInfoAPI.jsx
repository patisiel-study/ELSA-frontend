import axios from "axios";

const MemberInfoAPI = async (accessToken) => {
  try {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.get(`/api/member/info`, axiosConfig);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default MemberInfoAPI;
