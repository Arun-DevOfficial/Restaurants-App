import axios from "axios";

export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
