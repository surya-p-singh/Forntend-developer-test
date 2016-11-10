import TYPES from '../constants/actionTypes';

export default function(state = {}, action){
    console.log('type:', action.type);
    console.log('action.services:', action.services);
    switch (action.type){
        case TYPES.DEPARTURES.FETCHED:
            return {
                ...state,
                services: action.services
            };
        default :
            return state;
    }
}