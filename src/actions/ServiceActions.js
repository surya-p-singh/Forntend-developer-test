import fetch from 'isomorphic-fetch';

export const SERVICE_FETCHED = 'SERVICE_FETCHED';

export default function fetchService(){
    var response = fetch('https://realtime.thetrainline.com/departures/wat')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        });

    console.log('reponse',response);

    return{
            type:SERVICE_FETCHED,
            payload:response
        }
}
