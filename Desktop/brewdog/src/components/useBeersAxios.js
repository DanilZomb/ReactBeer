import { useState, useEffect } from "react";
import axios from "axios";

export default function useBeersAxios(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://api.punkapi.com/v2/beers"
        );
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
}
