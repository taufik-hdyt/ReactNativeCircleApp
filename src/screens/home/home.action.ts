import axios from 'axios';
import { useState,useEffect } from 'react';


export const useThreadActions = ()=> {

  // FETCHING DATA THREADS
  const [data, setData] = useState([]);
  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get(
        "http://192.168.18.147:5000/api/v1/threads"
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // POST THREADS



  useEffect(() => {
    fetchDataFromAPI();
  }, []);
  return {
    data
  }
}