import TYPES from '../constants/actionTypes';

export default function(state = {}, action){
    switch (action.type){
        case TYPES.SERVICE.FETCHING:
            return {
                ...state,
                fetching: true
            };
        case TYPES.SERVICE.FETCHED:
            return {
                ...state,
                service: action.service,
            };
        default :
            return state;
    }
}