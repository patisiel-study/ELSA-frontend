import axios from "axios";

export const SignUpAPI = async (newEmail, newPassword, newName, newCareer, newCountry) => {
  try {
    console.log({
        email: newEmail,
        password: newPassword,
        name: newName,
        role:"DEVELOPER",
        career:newCareer,
        country:newCountry
      });
    const response = await axios.post(`/api/signup`, {
      email: newEmail,
      password: newPassword,
      name: newName,
      role:"DEVELOPER",
      career:newCareer,
      country:newCountry
    });
      return response.data;
  } catch (error) {
    console.error("Error Response:", error.response.data);
    throw error.response.data;
  }
};