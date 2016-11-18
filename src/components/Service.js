import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const ScheduledTime = ({ time }) => <span >{ time.format('HH:mm') }</span>;
const DestinationList = ({destinationList}) =>  <span> { destinationList.map(destination => destination.crs ).join(' / ') } </span>
const Platform = ({platform}) => {
    if(platform){
        return <span><span  className="platform"><abbr title="Platform">Plat.</abbr> </span><span>{platform}</span></span>
    }
    else {
        return <span><span>-</span></span>
    }
}

const Expected = ({realTimeFlag, expectedTime}) => {
    if(expectedTime) return <span > Exp. {moment(expectedTime).format('HH:mm')}</span>

    switch (realTimeFlag)
    {
        case "Actual":
        case "Estimate":
            return <span>On time</span>
        case "Delayed":
            return <span><span>Delayed</span></span>;
        case "Cancelled":
            return <span><span>Cancelled</span></span>;
        default:
            return null;
    }
}

export default class Service extends Component {

    render(){
        const { service, params } = this.props;
        const { realTimeUpdatesInfo, scheduledInfo, serviceOperator, destinationList, serviceIdentifier, callingPatternUrl } = service;
        const time = moment(scheduledInfo.scheduledTime);

        let realTimeServiceInfo = (realTimeUpdatesInfo || {}).realTimeServiceInfo;

        let realTime, realTimePlatform, realTimeFlag, cancelled, expectedTime = [,,,,];

        if(realTimeServiceInfo) {
            ({realTime, realTimePlatform, realTimeFlag, cancelled} = realTimeServiceInfo);

            realTimeFlag = cancelled && cancelled.isCancelled ? 'Cancelled' : realTimeFlag;
            expectedTime = time.isBefore(realTime) ? moment(realTime) : null;
        }


        const serviceDetailsUrl = callingPatternUrl.match(`${serviceIdentifier}(.*)`)[0]; // e.g. W93605/2016-10-19
        return(
            <li className="service">
                <Link to={'/' + serviceDetailsUrl} className="service-link" rel="nofollow">
                    <div>
                        <ScheduledTime time={ time } />
                        <DestinationList  destinationList={ destinationList } />
                        <Platform platform={realTimePlatform} />
                    </div>
                    <div>
                        <span className="operator">{serviceOperator} </span>
                        { realTimeFlag && <Expected realTimeFlag={realTimeFlag} expectedTime={expectedTime} />}
                    </div>

                </Link>
            </li>
        );
    }
}
