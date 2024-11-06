import axios from "axios";

const MemberResultAPI = async (accessToken, diagnosisId) => {
  try {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios.get(
      `/api/diagnosis/developer/result/detail/${diagnosisId}`,
      axiosConfig
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default MemberResultAPI;
