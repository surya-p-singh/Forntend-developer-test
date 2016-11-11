
import React, {Component} from 'react';

export default class ServiceList extends Component {

    renderServices(){
        const { services} = this.props;
        
        return services.map((service) => {
            return (
                <li key={service.serviceIdentifier}>{service.serviceIdentifier}
                </li>
            );
        })
    }
    
    render(){
        
        return(
            <ui>
                {this.renderServices()}
            </ui>
        )
    }
}