import TYPES from '../constants/actionTypes';

export default function(state = {}, action){
    switch (action.type){
        case TYPES.DEPARTURES.FETCHING:
            return {
                ...state,
                fetching: true
            };
        case TYPES.DEPARTURES.FETCHED:
            return {
                ...state,
                services: action.services,
                disruptionMessages: action.disruptionMessages,
            };
        default :
            return state;
    }
}