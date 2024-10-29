import { useState, useEffect } from 'react';
import axios from 'axios';
import PayloadService from '@services/PayloadService';
import usePayload from '@common/hooks/usePayload';

const useDirections = () => {

    const fetchDirections = (locale) => PayloadService.getDirectionsWithDescription(locale);
    return usePayload(fetchDirections);

};

export default useDirections;
