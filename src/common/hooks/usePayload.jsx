import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const usePayload = (fetchFunction, isGlobal = false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { i18n } = useTranslation()
  
    useEffect(() => {

        fetchFunction(i18n.language)
            .then((response) => {
                if (isGlobal) {
                    setData(response);
                } else {
                    setData(response.docs);
                }
            })
            .catch((err) => {
                setError(err); 
            })
            .finally(() => {
                setLoading(false); 
            });
        console.log('DATAAAAA usePayload');
        
    }, [i18n.language]);

  
    return { data, loading, error };
  };
  
  export default usePayload;
