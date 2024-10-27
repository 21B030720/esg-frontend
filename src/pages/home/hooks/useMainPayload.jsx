import { useState, useEffect } from 'react';
import axios from 'axios';
import PayloadService from '@services/PayloadService';

const useMainPayload = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMainPageData = async () => {
        PayloadService.getMainPage()
        .then((data) => {
          console.log("DATATATTATATA:", data);
          setData(data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchMainPageData();
  }, []);

  return { data, loading, error };
};

export default useMainPayload;
