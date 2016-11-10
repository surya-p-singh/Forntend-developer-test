import fetch from 'isomorphic-fetch';
import TYPES from '../constants/actionTypes';

export function fetchDepartureDetails(){

    return (dispatch, getState) => {
        const state = getState();
        
        return dispatch ({
            type: TYPES.DEPARTURES.FETCHED,
            services: "WCF123456"
        });
    }
}