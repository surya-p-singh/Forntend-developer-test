

export default function(state = {}, action){
    console.log('type:', action.type);
    console.log('payload:', action.payload);
    switch (action.type){
        case "SERVICE":
            return action.payload
        default :
            return state;
    }
}