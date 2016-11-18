import React, { Component} from 'react';
import moment from 'moment';

export default class Stop extends Component {

    render(){
        const {stop} = this.props;
        //console.log('stop:', stop);
        const { crs } = stop.location;

        const { departure, arrival } = stop;
        let { realTime, realTimeFlag, hasDeparted } = departure.realTime ? departure.realTime.realTimeServiceInfo : {};
/*        console.log('departure:', departure);
        console.log('arrival:', arrival);*/
        let time = arrival && arrival.scheduled && arrival.scheduled.scheduledTime ? arrival.scheduled.scheduledTime : departure.scheduled.scheduledTime;
        time = moment(time);
        const expectedTime = time.isBefore(realTime) ? moment(realTime) : null;
        //console.log('location:', location);
        return(
            <li>
                <div>
                    {time && <span> {time.format('HH:mm')}</span> }
                    <span>  {crs}</span> <span></span>
                    {expectedTime && <span> Exp. {moment(expectedTime).format('HH:mm')} </span>}
                </div>
            </li>
        )
    }
}
