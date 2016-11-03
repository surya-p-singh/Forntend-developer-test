import { SERVICE_FETCHED } from '../actions/ServiceActions';

export default function (state = {}, action){
    console.log('out');
    switch (action.type){
        case SERVICE_FETCHED:
            console.log('in case');
            return [action.payload, ...state];
        default:
            console.log('in default');
            return state;
    }
}
