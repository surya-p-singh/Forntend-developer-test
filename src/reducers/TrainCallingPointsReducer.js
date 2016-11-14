import TYPES from '../constants/actionTypes';

export default function(state = {}, action){
    console.log('type:', action.type);
    //console.log('action.services:', action.services);
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