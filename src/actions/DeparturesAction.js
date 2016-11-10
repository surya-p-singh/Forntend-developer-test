import fetch from 'isomorphic-fetch';
import TYPES from '../constants/actionTypes';
import ENDPOINTS from '../constants/endpoints';

export function fetchDepartures(){

    return (dispatch, getState) => {
        const state = getState();

        //Why this
        dispatch({ type: TYPES.DEPARTURES.FETCHING });

        return fetch(ENDPOINTS.departures)
            .then(response => response.json())
            .then (response => {
                return dispatch ({
                    type: TYPES.DEPARTURES.FETCHED,
                    services: response.services,
                    disruptionMessages: response.disruptionMessages
                });
            })

    }
}