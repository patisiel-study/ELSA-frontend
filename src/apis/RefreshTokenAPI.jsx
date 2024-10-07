import axios from 'axios';

const RefreshTokenAPI = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  
  try {
    const result = await axios.post(
      `/api/member/refresh`,
      { refreshToken },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (result.data && result.data.data && result.data.data.accessToken) {
      const newAccessToken = result.data.data.accessToken;
      const newRefreshToken = result.data.data.refreshToken;

      localStorage.setItem('accessToken', newAccessToken);
      if (newRefreshToken) {
        localStorage.setItem('refreshToken', newRefreshToken);
      }

      return result.data.data;
    } else {
      throw new Error('Invalid response from refresh token API');
    }
  } catch (error) {
    console.error('리프레시 토큰 갱신 중 에러 발생:', error);
    if (error.response) {
      console.error('서버 응답:', error.response.status, error.response.data);
    }

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    throw error;
  }
};

export default RefreshTokenAPI;