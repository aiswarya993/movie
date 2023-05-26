import axios from "axios";
import React, { useEffect, useState } from "react";

export const useFetch = (url, customparams = {}) => {
  const [data, setdata] = useState({});
  const [error, seterroe] = useState(null);
  const [loading, setloading] = useState(true);
  let options = {
    method: "get",
    url,
    baseURL: "https://api.themoviedb.org/3/",
    
    params: { 
      // api_key: import.meta.env.VITE_API_KEY,
      api_key: "e3ef60114f3455d412ea55db83f798b2"
      , ...customparams },
  };
  const fetchdata = async () => {
    try {
      const { data } = await axios(options);
      setdata(data);
     
      setloading(false);
    } catch (err) {
      seterroe(err.message);
      setloading(false);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [customparams.page,customparams.query,url]);

  return [data, loading, error];
};
