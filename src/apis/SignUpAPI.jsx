import axios from "axios";

export const SignUpAPI = async (newEmail, newPassword, newName, newRole) => {
  try {
    console.log({
        email: newEmail,
        password: newPassword,
        name: newName,
        role: newRole
      });
    const response = await axios.post(`/api/signup`, {
        email: newEmail,
        password: newPassword,
        name: newName,
        role: newRole
    });
      return response.data;
  } catch (error) {
    console.error("Error Response:", error.response.data);
    throw error.response.data;
  }
};