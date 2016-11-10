
import fetch from 'isomorphic-fetch';

export function fetchDepartureDetails(){
    return (dispatch, getState) => {

        const state = getState();
        
        return dispatch ({
            type: "SERVICE",
            payload: {serviceProvider: "WCD"}
        });
    }
}