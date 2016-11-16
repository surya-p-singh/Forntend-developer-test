import React, { Component} from 'react';
import Stop from './Stop';

export default class Stops extends Component {

    render(){

        const {service} = this.props;
        //console.log('service:', service);
        const {stops} = service;
        return(
            <ui>
                {stops.map( (stop,key) => <Stop key= {key} stop={stop} />)}
            </ui>
        )
    }
}
