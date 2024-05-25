// import React from 'react'
import axios from "axios";
import { useEffect } from "react";

export default function ListeUser() {
  useEffect(() => {
    handleListeUser();
  }, []);

  const handleListeUser = async () => {
    const response = await axios.get("http://localhost:8060/test", {
      withCredentials: true,
    });
    console.log(response.data);
  };
  return <div>ListeUser</div>;
}
