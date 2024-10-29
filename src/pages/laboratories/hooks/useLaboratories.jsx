import { useState, useEffect } from 'react';
import axios from 'axios';
import PayloadService from '@services/PayloadService';
import usePayload from '@common/hooks/usePayload';

const useLaboratories = () => {

  const fetchDirections = (locale) => PayloadService.getLaboratoriesWithDescription(locale);
  return usePayload(fetchDirections);

};

export default useLaboratories;
