import axios from "axios";
import { useEffect } from "react";

export default function ListeUser() {
  useEffect(() => {
    handleListeUser();
  }, []);
  const handleListeUser = async () => {
    try {
      const response = await axios.get(
        `https://restaurants-app-3dp7.onrender.com/test`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Fix: withCredentials should be boolean
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };
  return <div>lorem</div>;
}
