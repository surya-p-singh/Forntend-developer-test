import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Service extends Component {

    render(){
        const { service } = this.props;
        const { realTimeUpdatesInfo, scheduledInfo, serviceOperator, destinationList, serviceIdentifier, callingPatternUrl } = service;

        return(
            <li>
                <Link>
                    <div>
                        <span>{serviceOperator} </span>
                        <span>{serviceIdentifier}</span>
                    </div>
                </Link>
            </li>
        );
    }
}
