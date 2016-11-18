import React, {Component} from 'react';
import Service from '../components/Service';

export default class ServiceList extends Component {

    render(){
        const { services } = this.props;
        return (
            <ul className="services">
                { services.map((service,key) =>  <Service key={key} service={service} />)}
            </ul>
        )
    }
}