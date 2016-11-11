import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export default class Service extends Component {

    render(){
        const { service } = this.props;
        const { realTimeUpdatesInfo, scheduledInfo, serviceOperator, destinationList, serviceIdentifier, callingPatternUrl } = service;
        const { time } = moment (scheduledInfo.scheduledTime);
        return(
            <li>
                <Link>
                    <div>
                        <span>{moment(scheduledInfo.scheduledTime).format('HH:mm')} </span>
                        <span>{serviceOperator} </span>
                        <span></span>
                    </div>
                </Link>
            </li>
        );
    }
}
