import axios from "axios";

const CareersAPI = async () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  if (!SERVER_URL) {
    throw new Error("SERVER_URL이 정의되지 않았습니다.");
  }
  try {
    const response = await axios.get(`${SERVER_URL}/api/careers`);
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      const errorMessage =
        error.response.data.message ||
        "데이터를 가져오는 중 오류가 발생했습니다.";
      console.error("에러 응답:", errorMessage);
      throw new Error(errorMessage);
    } else {
      const genericErrorMessage = "데이터를 가져오는 중 오류가 발생했습니다.";
      console.error("에러 응답 없음:", genericErrorMessage);
      throw new Error(genericErrorMessage);
    }
  }
};

export default CareersAPI;
