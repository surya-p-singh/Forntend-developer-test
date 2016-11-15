const proxy = '/api';

export default {
    departures : `${proxy}/departures/wat`,
    service: callingPattern => `${proxy}/callingPattern/${callingPattern}`, // e.g. https://realtime.thetrainline.com/callingPattern/W93114/2016-10-19
};