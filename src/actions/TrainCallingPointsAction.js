import fetch from 'isomorphic-fetch';
import TYPES from '../constants/actionTypes';
import ENDPOINTS from '../constants/endpoints';

export function fetchTrainCallingPoints(url) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch({ type: TYPES.SERVICE.FETCHING });

        return fetch(ENDPOINTS.service(url))
            .then(response => response.json())
            .then (response => {
                return dispatch ({
                    type: TYPES.SERVICE.FETCHED,
                    service: response.service
                });
            })

    }

}
