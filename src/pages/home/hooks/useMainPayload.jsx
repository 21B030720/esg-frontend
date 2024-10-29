import { useState, useEffect } from 'react';
import axios from 'axios';
import PayloadService from '@services/PayloadService';
import usePayload from '@common/hooks/usePayload';

const useMainPayload = () => {
  
  const fetchDirections = (locale) => PayloadService.getMainPage(locale);
  return usePayload(fetchDirections, true);

};

export default useMainPayload;
