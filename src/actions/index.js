import axios from 'axios';

export const FETCH_TRAINS_DETAILS = 'FETCH_TRAINS_DETAILS';

export function fetchTrainsDetails(originStation){
    const url = 'https://realtime.thetrainline.com/departures/wat';
    const request = axios.get(url)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    // request is a promise
    console.log('Request:', request);
    // request is a promise and it will be passed to RedexPromise (defined in index.js) which is a middleware
    // it will manipulate action as a gatekeeper, if it checks payload is promise it stopped
    // action entirely and waits until promise resolved and then send the data to reducers

    return{
        type: FETCH_TRAINS_DETAILS,
        payload:request
    }
}