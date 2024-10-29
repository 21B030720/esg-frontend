import { useState, useEffect } from 'react';
import axios from 'axios';
import PayloadService from '@services/PayloadService';

const useLaboratories = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMainPageData = async () => {
        PayloadService.getLaboratoriesWithDescription()
        .then((data) => {
          // console.log("DATATATTATATA:", data);
          setData(data.docs);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchMainPageData();
  }, []);

  return { data, loading, error };

};

export default useLaboratories;
