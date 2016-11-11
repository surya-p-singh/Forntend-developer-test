import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const Platform = ({platform}) => {
    if(platform){
        return <span><span>Plat. </span><span>{platform}</span></span>
    }
    else {
        return <span><span>-</span></span>
    }
}

export default class Service extends Component {

    render(){
        const { service } = this.props;
        const { realTimeUpdatesInfo, scheduledInfo, serviceOperator, destinationList, serviceIdentifier, callingPatternUrl } = service;
        const { time } = moment (scheduledInfo.scheduledTime);

       let { realTimePlatform, realTimeFlag, cancelled } =  (realTimeUpdatesInfo || {}).realTimeServiceInfo;

        return(
            <li>
                <Link to={'/' + callingPatternUrl}>
                    <div>
                        <span>{moment(scheduledInfo.scheduledTime).format('HH:mm')} </span>
                        <span>{serviceOperator} </span>
                        <Platform platform={realTimePlatform} />


                    </div>
                </Link>
            </li>
        );
    }
}
