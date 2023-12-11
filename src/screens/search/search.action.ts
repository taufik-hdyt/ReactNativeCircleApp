import axios from "axios";
import { useState, useEffect } from "react";

export const useSearchAction = (search: string) => {
  const [data, setData] = useState([]);
  const fetchDataFromAPI = async (search: string) => {
    try {
      const response = await axios.get(
        `http://192.168.18.147:5000/api/v1/users?search=${search}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataFromAPI("");
  }, []);

  return {
    data,
  };
};
