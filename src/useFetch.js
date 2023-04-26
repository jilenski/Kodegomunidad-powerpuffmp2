import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (options = {}) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
      setError(null);
      setLoading(false);
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    request(options);
  }, []);

  return { data, error, loading, request };
};

export default useFetch;
