import fetch from 'isomorphic-fetch';
import TYPES from '../constants/actionTypes';
import ENDPOINTS from '../constants/endpoints';


function sanitiseData(services){
    return services.filter(service => service.transportMode !== 'BUS');
}

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
                    services: sanitiseData(response.services) ,
                    disruptionMessages: response.disruptionMessages
                });
            })

    }
}