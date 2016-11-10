

export default function(state = {}, action){

    console.log('action', action.type);
    switch (action.type){
        case "SERVICE":
            return action.payload
        default :
            return state;
    }
}