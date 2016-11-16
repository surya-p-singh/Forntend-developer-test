import React, { Component} from 'react';

export default class Stop extends Component {

    render(){
        const {stop} = this.props;
        console.log('stop:', stop);
        const { crs } = stop.location;
        //console.log('location:', location);
        return(
            <li>
                <div>
                    <span>{crs}</span> <span></span>
                </div>
            </li>
        )
    }
}
