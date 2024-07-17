import { BACKEND_ADDRESS } from '@common/baseUrls';
import React from 'react';
import fetchWrapper from './fetchWrapper';

const getProjectsList = async () => {
    const url = `${BACKEND_ADDRESS}/projects`;
    const option = {
        method: 'GET',
        redirect: "follow",
    }
    try {
        const { data, success, error } = await fetchWrapper(url, option, 'getProjectsList');
        return {data, success, error};
    } catch(error) {
        console.error("Error in getProjectsList: ", error);
    }
}

export default getProjectsList;
